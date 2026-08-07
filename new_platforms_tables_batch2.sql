-- ============================================================
-- Naijy — Batch 2 New Platform Tables
-- (WorkGlobal, SendMe, EventsHub, Hotels360, PropertyHub,
--  PharmaBiotech, DiasporaLink, RetireesHub, CreativeX, RetaileX)
-- Paste into SQL Editor and run once. Same pattern as the last
-- batch — user_id captured automatically when signed in, open
-- posting for everyone, admin-or-owner edit/delete.
-- ============================================================

DO $$
DECLARE
  t text;
  tables text[] := ARRAY[
    'workglobal_listings','sendme_listings','eventshub_listings',
    'hotels360_listings','propertyhub_listings','pharmabiotech_listings',
    'diasporalink_listings','retireeshub_listings','creativex_listings',
    'retailex_listings'
  ];
BEGIN
  FOREACH t IN ARRAY tables
  LOOP
    EXECUTE format('
      CREATE TABLE IF NOT EXISTS %I (
        id uuid primary key default gen_random_uuid(),
        item_name text, category text, field2 text, price text,
        state text, description text, provider_name text, whatsapp text,
        is_available boolean default true, flagged boolean default false,
        user_id text, created_at timestamptz default now()
      )', t);

    EXECUTE format('ALTER TABLE %I ENABLE ROW LEVEL SECURITY', t);

    EXECUTE format('CREATE POLICY "%s_select_public" ON %I FOR SELECT TO public USING (true)', t, t);
    EXECUTE format('CREATE POLICY "%s_insert_open" ON %I FOR INSERT TO public WITH CHECK (true)', t, t);
    EXECUTE format('CREATE POLICY "%s_update_own_or_admin" ON %I FOR UPDATE TO public
      USING (auth.uid()::text = user_id::text OR is_naijy_admin())
      WITH CHECK (auth.uid()::text = user_id::text OR is_naijy_admin())', t, t);
    EXECUTE format('CREATE POLICY "%s_delete_own_or_admin" ON %I FOR DELETE TO public
      USING (auth.uid()::text = user_id::text OR is_naijy_admin())', t, t);
  END LOOP;
END $$;

-- Uses is_naijy_admin(), already created by the earlier RLS fix —
-- no need to recreate it here.
