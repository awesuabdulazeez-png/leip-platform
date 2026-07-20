-- RPC that lets the frontend redeem a plaintext access key (candidate or LGA) without
-- any Supabase Auth session, and returns aggregate coverage numbers directly.
-- Callable by anon + authenticated. SECURITY DEFINER so it can read supporters/candidates
-- data that RLS would otherwise restrict to active council members only.

create table if not exists access_key_attempts (
  id uuid primary key default gen_random_uuid(),
  attempted_key_prefix text,
  success boolean,
  attempted_at timestamptz default now()
);
alter table access_key_attempts enable row level security;

create or replace function get_coverage_by_key(p_key text)
returns json
language plpgsql
security definer
set search_path = public, extensions
as $$
declare
  norm_key text := upper(trim(p_key));
  key_hash text := encode(digest(norm_key,'sha256'),'hex');
  cand_rec record;
  lga_rec record;
  result json;
begin
  select council.id, council.candidate_id, c.full_name,
         coalesce(fc.name, sc.name, sd.name, 'Lagos State') as seat
  into cand_rec
  from campaign_councils council
  join candidates c on c.id = council.candidate_id
  left join federal_constituencies fc on fc.id = c.federal_constituency_id
  left join state_constituencies sc on sc.id = c.state_constituency_id
  left join senatorial_districts sd on sd.id = c.senatorial_district_id
  where council.access_key_hash = key_hash and council.access_key_is_active = true;

  if found then
    insert into access_key_attempts(attempted_key_prefix, success) values (left(norm_key,3), true);
    select json_build_object(
      'ok', true, 'type', 'candidate', 'name', cand_rec.full_name, 'seat', cand_rec.seat,
      'total_supporters', (select count(*) from supporters where candidate_id = cand_rec.candidate_id and role='supporter'),
      'total_canvassers', (select count(*) from supporters where candidate_id = cand_rec.candidate_id and role='canvasser'),
      'breakdown', (
        select coalesce(json_agg(row_to_json(w)), '[]'::json) from (
          select wa.name as label,
            count(*) filter (where s.role='supporter') as supporters,
            count(*) filter (where s.role='canvasser') as canvassers
          from supporters s join wards wa on wa.id = s.ward_id
          where s.candidate_id = cand_rec.candidate_id
          group by wa.name order by 2+3 desc
        ) w
      )
    ) into result;
    return result;
  end if;

  select keyrow.lga_id, l.name as lga_name into lga_rec
  from lga_coverage_keys keyrow
  join lgas l on l.id = keyrow.lga_id
  where keyrow.access_key_hash = key_hash and keyrow.is_active = true;

  if found then
    insert into access_key_attempts(attempted_key_prefix, success) values (left(norm_key,3), true);
    select json_build_object(
      'ok', true, 'type', 'lga', 'name', lga_rec.lga_name, 'seat', null,
      'total_supporters', (select count(*) from supporters where lga_id = lga_rec.lga_id and role='supporter'),
      'total_canvassers', (select count(*) from supporters where lga_id = lga_rec.lga_id and role='canvasser'),
      'breakdown', (
        select coalesce(json_agg(row_to_json(x)), '[]'::json) from (
          select c.full_name as label,
            count(*) filter (where s.role='supporter') as supporters,
            count(*) filter (where s.role='canvasser') as canvassers
          from supporters s join candidates c on c.id = s.candidate_id
          where s.lga_id = lga_rec.lga_id
          group by c.full_name order by 2+3 desc
        ) x
      )
    ) into result;
    return result;
  end if;

  insert into access_key_attempts(attempted_key_prefix, success) values (left(norm_key,3), false);
  return json_build_object('ok', false, 'error', 'That access key was not recognized.');
end;
$$;

grant execute on function get_coverage_by_key(text) to anon, authenticated;
