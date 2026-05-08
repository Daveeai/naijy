-- ============================================================
--  NAIJY DATABASE SETUP
--  Run this in Supabase SQL Editor
--  Dashboard → SQL Editor → New query → paste → Run
-- ============================================================

-- USERS TABLE
create table if not exists users (
  id           bigint generated always as identity primary key,
  user_id      text unique not null,
  name         text,
  email        text,
  state        text,
  phone        text,
  trust_score  integer default 50,
  badges       text[] default '{}',
  updated_at   timestamptz default now()
);

-- REPORTS TABLE
create table if not exists reports (
  id           bigint generated always as identity primary key,
  user_id      text not null,
  user_name    text,
  platform     text,
  type         text,
  location     text,
  description  text,
  evidence     text,
  status       text default 'Submitted',
  created_at   timestamptz default now()
);

-- LISTINGS TABLE
create table if not exists listings (
  id           bigint generated always as identity primary key,
  user_id      text not null,
  user_name    text,
  platform     text,
  title        text,
  category     text,
  price        text,
  location     text,
  contact      text,
  description  text,
  status       text default 'Active',
  created_at   timestamptz default now()
);

-- BOOKINGS TABLE
create table if not exists bookings (
  id           bigint generated always as identity primary key,
  user_id      text not null,
  user_name    text,
  platform     text,
  name         text,
  phone        text,
  service      text,
  date         text,
  time         text,
  notes        text,
  status       text default 'Confirmed',
  created_at   timestamptz default now()
);

-- DIRECTORY TABLE
create table if not exists directory (
  id           bigint generated always as identity primary key,
  user_id      text not null,
  platform     text,
  name         text,
  role         text,
  location     text,
  contact      text,
  status       text default 'Pending Review',
  created_at   timestamptz default now()
);

-- Enable Row Level Security but allow all for now
alter table users     enable row level security;
alter table reports   enable row level security;
alter table listings  enable row level security;
alter table bookings  enable row level security;
alter table directory enable row level security;

-- Allow all operations for authenticated and anonymous users
create policy "Allow all" on users     for all using (true) with check (true);
create policy "Allow all" on reports   for all using (true) with check (true);
create policy "Allow all" on listings  for all using (true) with check (true);
create policy "Allow all" on bookings  for all using (true) with check (true);
create policy "Allow all" on directory for all using (true) with check (true);
