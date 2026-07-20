-- Adds polling-unit-level assignment support to council_members (mirrors directorates),
-- and pre-issued access-key credentials (candidate-scoped and LGA-scoped), separate
-- from Supabase Auth email/OTP.
-- Supabase project: wfceszismvdghxhfuiaz (ALEIS / YVN shared project)

alter table council_members
  add column if not exists polling_unit_id uuid references polling_units(id);

alter table campaign_councils
  add column if not exists access_key text unique,
  add column if not exists access_key_hash text,
  add column if not exists access_key_is_active boolean not null default true;

create table if not exists lga_coverage_keys (
  id uuid primary key default gen_random_uuid(),
  lga_id uuid not null references lgas(id),
  access_key text unique,
  access_key_hash text,
  label text,
  is_active boolean not null default true,
  created_at timestamptz default now()
);
alter table lga_coverage_keys enable row level security;
