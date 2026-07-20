-- One-time generation of the actual 71 candidate keys + 20 LGA keys.
-- Key format: 8 chars, uppercase letters + digits, excludes ambiguous 0/O/1/I/L.
-- Re-running this is a no-op for rows that already have a key.

create or replace function gen_access_key() returns text as $$
declare
  chars text := 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
  result text := '';
  i int;
begin
  for i in 1..8 loop
    result := result || substr(chars, floor(random()*length(chars)+1)::int, 1);
  end loop;
  return result;
end;
$$ language plpgsql;

update campaign_councils
set access_key = gen_access_key()
where access_key is null;

update campaign_councils
set access_key_hash = encode(digest(access_key,'sha256'),'hex')
where access_key_hash is null;

insert into lga_coverage_keys (lga_id, access_key, label)
select id, gen_access_key(), name || ' Coverage Access'
from lgas
where id not in (select lga_id from lga_coverage_keys);

update lga_coverage_keys
set access_key_hash = encode(digest(access_key,'sha256'),'hex')
where access_key_hash is null;
