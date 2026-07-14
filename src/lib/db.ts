import { neon } from "@neondatabase/serverless";

export class LeadStorageError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "LeadStorageError";
  }
}

function getDatabaseUrl(): string | null {
  return process.env.DATABASE_URL ?? null;
}

export function hasDatabase(): boolean {
  return Boolean(getDatabaseUrl());
}

export function getStorageMode(): "neon" | "filesystem" {
  return hasDatabase() ? "neon" : "filesystem";
}

function getSql() {
  const url = getDatabaseUrl();
  if (!url) {
    throw new LeadStorageError(
      "DATABASE_URL is not configured. Connect a Neon database to persist leads."
    );
  }
  return neon(url);
}

let schemaReady: Promise<void> | null = null;

export async function ensureSchema(): Promise<void> {
  if (!hasDatabase()) return;

  if (!schemaReady) {
    schemaReady = (async () => {
      const sql = getSql();
      await sql`
        CREATE TABLE IF NOT EXISTS leads (
          id UUID PRIMARY KEY,
          name TEXT NOT NULL,
          email TEXT NOT NULL,
          company TEXT NOT NULL,
          phone TEXT,
          project_type TEXT NOT NULL,
          budget TEXT NOT NULL,
          timeline TEXT NOT NULL,
          description TEXT NOT NULL,
          status TEXT NOT NULL DEFAULT 'new',
          notes TEXT NOT NULL DEFAULT '',
          created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
          updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
        )
      `;
      await sql`CREATE INDEX IF NOT EXISTS leads_status_idx ON leads (status)`;
      await sql`CREATE INDEX IF NOT EXISTS leads_created_at_idx ON leads (created_at DESC)`;
    })();
  }

  await schemaReady;
}

export function getDb() {
  return getSql();
}
