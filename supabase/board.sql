create extension if not exists pgcrypto;

create table if not exists public.board_threads (
  id uuid primary key default gen_random_uuid(),
  nickname varchar(20) not null,
  title varchar(60) not null,
  body varchar(1000) not null,
  pin_hash char(64) not null,
  ip_hash char(64) not null,
  status varchar(12) not null default 'visible' check (status in ('visible', 'deleted', 'hidden', 'locked')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.board_replies (
  id uuid primary key default gen_random_uuid(),
  thread_id uuid not null references public.board_threads(id) on delete cascade,
  nickname varchar(20) not null,
  body varchar(1000) not null,
  pin_hash char(64) not null,
  ip_hash char(64) not null,
  status varchar(12) not null default 'visible' check (status in ('visible', 'deleted', 'hidden')),
  created_at timestamptz not null default now()
);

create table if not exists public.board_reports (
  id bigint generated always as identity primary key,
  thread_id uuid references public.board_threads(id) on delete cascade,
  reply_id uuid references public.board_replies(id) on delete cascade,
  reason varchar(120) not null,
  ip_hash char(64) not null,
  created_at timestamptz not null default now(),
  resolved_at timestamptz,
  check ((thread_id is not null) <> (reply_id is not null))
);

create index if not exists board_threads_visible_created_idx
  on public.board_threads (created_at desc) where status = 'visible';
create index if not exists board_threads_ip_created_idx
  on public.board_threads (ip_hash, created_at desc);
create index if not exists board_replies_thread_created_idx
  on public.board_replies (thread_id, created_at) where status = 'visible';
create index if not exists board_replies_ip_created_idx
  on public.board_replies (ip_hash, created_at desc);
create index if not exists board_reports_created_idx
  on public.board_reports (created_at desc) where resolved_at is null;

alter table public.board_threads enable row level security;
alter table public.board_replies enable row level security;
alter table public.board_reports enable row level security;

revoke all on public.board_threads from anon, authenticated;
revoke all on public.board_replies from anon, authenticated;
revoke all on public.board_reports from anon, authenticated;

comment on table public.board_threads is 'HAPPY FOREVER public board threads. Accessed only by the server service role.';
comment on table public.board_replies is 'Replies for HAPPY FOREVER public board threads.';
comment on table public.board_reports is 'User reports awaiting moderator review.';
