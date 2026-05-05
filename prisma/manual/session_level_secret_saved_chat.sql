-- Session-level secret queues and hidden saved secret chat support.

ALTER TABLE "chats"
  ADD COLUMN IF NOT EXISTS "is_saved" BOOLEAN NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS "owner_id" TEXT;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1
    FROM pg_constraint
    WHERE conname = 'chats_owner_id_fkey'
  ) THEN
    ALTER TABLE "chats"
      ADD CONSTRAINT "chats_owner_id_fkey"
      FOREIGN KEY ("owner_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
  END IF;
END $$;

CREATE UNIQUE INDEX IF NOT EXISTS "chats_owner_id_is_saved_key"
  ON "chats"("owner_id", "is_saved");

CREATE INDEX IF NOT EXISTS "chats_owner_id_idx"
  ON "chats"("owner_id");

ALTER TABLE "queue_secret_messages"
  ADD COLUMN IF NOT EXISTS "from_session_id" TEXT,
  ADD COLUMN IF NOT EXISTS "to_session_ids" TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[],
  ADD COLUMN IF NOT EXISTS "checked_session_ids" TEXT[] NOT NULL DEFAULT ARRAY[]::TEXT[];

ALTER TABLE "queue_shared_secret_keys"
  ADD COLUMN IF NOT EXISTS "from_session_id" TEXT,
  ADD COLUMN IF NOT EXISTS "to_session_id" TEXT;
