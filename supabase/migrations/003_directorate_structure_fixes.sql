-- Fixes discovered during a data-integrity audit:
--  (a) VP Kashim Shettima and Deputy Governor Sonayon-James had ZERO directorate rows
--      (missed entirely during the original DG+10 seed) -- reseeded to match everyone else.
--  (b) Governor Hamzat had two orphaned duplicate directorates (parent_id null instead of
--      nested under his DG) -- one had a real member attached and was reparented, not deleted;
--      the other was empty and confirmed safe to delete.
--  (c) wards.is_active normalized to true across all 245 wards.

do $$
declare
  cid uuid;
  dg_id uuid;
  cand_ids uuid[] := array['67d18144-285a-4368-b8a2-510126005e22','f40888c5-31b7-4c46-b96d-fd0547d74834'];
  dirs text[] := array['Administration','Finance & Fundraising','Strategy','Field Ops',
                       'Media & Communications','Stakeholder Engagement','Logistics & Events',
                       'ICT & Situation Room','Legal & Security','Election Management'];
  dname text;
  i int;
begin
  foreach cid in array cand_ids loop
    if not exists (select 1 from directorates where candidate_id = cid) then
      insert into directorates (candidate_id, name, parent_id, sort_order)
      values (cid, 'Campaign Director-General', null, 0)
      returning id into dg_id;

      i := 1;
      foreach dname in array dirs loop
        insert into directorates (candidate_id, name, parent_id, sort_order)
        values (cid, dname, dg_id, i);
        i := i + 1;
      end loop;
    end if;
  end loop;
end $$;

update directorates
set parent_id = (select id from directorates where candidate_id='e4b48f8e-a036-42bf-8fe0-5da67ee695b9' and parent_id is null and name='Campaign Director-General')
where candidate_id='e4b48f8e-a036-42bf-8fe0-5da67ee695b9' and name='Women Affairs' and parent_id is null;

delete from directorates
where candidate_id='e4b48f8e-a036-42bf-8fe0-5da67ee695b9' and name='Youth Mobilization' and parent_id is null;

update wards set is_active = true where is_active = false;
