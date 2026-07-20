# LEIP / ALEIS

APC Lagos Electoral Intelligence System (ALEIS) — the partisan candidate/campaign-council platform
covering all 71 APC candidates for the 2027 Lagos elections (President through State Assembly).

**Supabase project:** `wfceszismvdghxhfuiaz`

## What's in this repo right now

- `supabase/migrations/` — versioned SQL for schema changes made to the ALEIS tables
  (`candidates`, `campaign_councils`, `council_members`, `directorates`, `supporters`,
  `lga_coverage_keys`, and the `get_coverage_by_key` RPC).

## Not yet in this repo

- `index.html` — the actual deployed single-file site. It currently embeds ~70 candidate
  photos as base64, which puts the file at ~2.8MB — too large to push through this chat
  session's GitHub tool in one call. Until that's resolved (most likely by moving photos
  to separate files referenced by URL instead of embedding them), the live file is
  delivered as a direct download each session and deployed via Netlify Drop, not GitHub → CI.

## Do not confuse with

`constituency-intelligence-system` (same GitHub account) is a **different app** — a civic
issue-reporting system for an LGA chairman's office, on a **different** Supabase project
(`nwdkbfosolqempshwolx`). The two are structurally unrelated; nothing should be copied
between them without checking first.
