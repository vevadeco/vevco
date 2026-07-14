import type { Lead, LeadStatus } from "./lead-types";
import { ensureSchema, getDb, hasDatabase } from "./db";

export type { Lead, LeadStatus } from "./lead-types";
export { LEAD_STATUSES, getStatusMeta } from "./lead-types";
export { getStorageMode, LeadStorageError } from "./db";

type LeadRow = {
  id: string;
  name: string;
  email: string;
  company: string;
  phone: string | null;
  project_type: string;
  budget: string;
  timeline: string;
  description: string;
  status: LeadStatus;
  notes: string;
  created_at: string;
  updated_at: string;
};

function rowToLead(row: LeadRow): Lead {
  return {
    id: row.id,
    name: row.name,
    email: row.email,
    company: row.company,
    phone: row.phone ?? undefined,
    projectType: row.project_type,
    budget: row.budget,
    timeline: row.timeline,
    description: row.description,
    status: row.status,
    notes: row.notes,
    createdAt: new Date(row.created_at).toISOString(),
    updatedAt: new Date(row.updated_at).toISOString(),
  };
}

// ─── Local filesystem fallback (dev without DATABASE_URL) ───────────

import { readFile, writeFile, mkdir } from "fs/promises";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const LEADS_FILE = path.join(DATA_DIR, "leads.json");

async function readLocalLeads(): Promise<Lead[]> {
  await mkdir(DATA_DIR, { recursive: true });
  try {
    const raw = await readFile(LEADS_FILE, "utf-8");
    return JSON.parse(raw) as Lead[];
  } catch {
    return [];
  }
}

async function writeLocalLeads(leads: Lead[]): Promise<void> {
  await mkdir(DATA_DIR, { recursive: true });
  await writeFile(LEADS_FILE, JSON.stringify(leads, null, 2));
}

// ─── CRUD ─────────────────────────────────────────────────────────

export async function createLead(
  data: Omit<Lead, "id" | "status" | "notes" | "createdAt" | "updatedAt">
): Promise<Lead> {
  const id = crypto.randomUUID();
  const now = new Date().toISOString();

  if (!hasDatabase()) {
    const leads = await readLocalLeads();
    const lead: Lead = {
      ...data,
      id,
      status: "new",
      notes: "",
      createdAt: now,
      updatedAt: now,
    };
    leads.unshift(lead);
    await writeLocalLeads(leads);
    return lead;
  }

  await ensureSchema();
  const sql = getDb();

  const rows = await sql`
    INSERT INTO leads (
      id, name, email, company, phone,
      project_type, budget, timeline, description,
      status, notes, created_at, updated_at
    ) VALUES (
      ${id}, ${data.name}, ${data.email}, ${data.company}, ${data.phone ?? null},
      ${data.projectType}, ${data.budget}, ${data.timeline}, ${data.description},
      'new', '', ${now}, ${now}
    )
    RETURNING *
  `;

  return rowToLead(rows[0] as LeadRow);
}

export async function getLeads(): Promise<Lead[]> {
  if (!hasDatabase()) {
    return readLocalLeads();
  }

  await ensureSchema();
  const sql = getDb();

  const rows = await sql`
    SELECT * FROM leads ORDER BY created_at DESC
  `;

  return (rows as LeadRow[]).map(rowToLead);
}

export async function getLead(id: string): Promise<Lead | null> {
  if (!hasDatabase()) {
    const leads = await readLocalLeads();
    return leads.find((l) => l.id === id) ?? null;
  }

  await ensureSchema();
  const sql = getDb();

  const rows = await sql`
    SELECT * FROM leads WHERE id = ${id} LIMIT 1
  `;

  if (!rows.length) return null;
  return rowToLead(rows[0] as LeadRow);
}

export async function updateLead(
  id: string,
  updates: Partial<Pick<Lead, "status" | "notes">>
): Promise<Lead | null> {
  if (!hasDatabase()) {
    const leads = await readLocalLeads();
    const index = leads.findIndex((l) => l.id === id);
    if (index === -1) return null;

    leads[index] = {
      ...leads[index],
      ...updates,
      updatedAt: new Date().toISOString(),
    };
    await writeLocalLeads(leads);
    return leads[index];
  }

  await ensureSchema();
  const sql = getDb();

  const existing = await getLead(id);
  if (!existing) return null;

  const status = updates.status ?? existing.status;
  const notes = updates.notes ?? existing.notes;
  const updatedAt = new Date().toISOString();

  const rows = await sql`
    UPDATE leads
    SET status = ${status}, notes = ${notes}, updated_at = ${updatedAt}
    WHERE id = ${id}
    RETURNING *
  `;

  return rowToLead(rows[0] as LeadRow);
}

export async function deleteLead(id: string): Promise<boolean> {
  if (!hasDatabase()) {
    const leads = await readLocalLeads();
    const filtered = leads.filter((l) => l.id !== id);
    if (filtered.length === leads.length) return false;
    await writeLocalLeads(filtered);
    return true;
  }

  await ensureSchema();
  const sql = getDb();

  const rows = await sql`
    DELETE FROM leads WHERE id = ${id} RETURNING id
  `;

  return rows.length > 0;
}
