import { put, head } from "@vercel/blob";
import { readFile, writeFile, mkdir } from "fs/promises";
import path from "path";
import type { Lead } from "./lead-types";

const BLOB_PATHNAME = "vevadeco/leads.json";
const DATA_DIR = path.join(process.cwd(), "data");
const LEADS_FILE = path.join(DATA_DIR, "leads.json");

function useBlobStorage(): boolean {
  return Boolean(process.env.BLOB_READ_WRITE_TOKEN);
}

async function readLeadsFromFile(): Promise<Lead[]> {
  await mkdir(DATA_DIR, { recursive: true });
  try {
    const raw = await readFile(LEADS_FILE, "utf-8");
    return JSON.parse(raw) as Lead[];
  } catch {
    return [];
  }
}

async function writeLeadsToFile(leads: Lead[]): Promise<void> {
  await mkdir(DATA_DIR, { recursive: true });
  await writeFile(LEADS_FILE, JSON.stringify(leads, null, 2));
}

async function readLeadsFromBlob(): Promise<Lead[]> {
  try {
    const meta = await head(BLOB_PATHNAME);
    const res = await fetch(meta.url);
    if (!res.ok) return [];
    return (await res.json()) as Lead[];
  } catch {
    return [];
  }
}

async function writeLeadsToBlob(leads: Lead[]): Promise<void> {
  await put(BLOB_PATHNAME, JSON.stringify(leads, null, 2), {
    access: "private",
    allowOverwrite: true,
    contentType: "application/json",
    addRandomSuffix: false,
  });
}

export async function loadLeads(): Promise<Lead[]> {
  if (useBlobStorage()) {
    return readLeadsFromBlob();
  }
  return readLeadsFromFile();
}

export async function saveLeads(leads: Lead[]): Promise<void> {
  if (useBlobStorage()) {
    await writeLeadsToBlob(leads);
    return;
  }
  await writeLeadsToFile(leads);
}

export function getStorageMode(): "blob" | "filesystem" {
  return useBlobStorage() ? "blob" : "filesystem";
}

// Migrate legacy local JSONL file (filesystem mode only)
export async function migrateLegacySubmissions(
  leads: Lead[]
): Promise<Lead[]> {
  if (useBlobStorage()) return leads;

  const jsonlPath = path.join(DATA_DIR, "rfp-submissions.jsonl");
  try {
    const raw = await readFile(jsonlPath, "utf-8");
    const lines = raw.trim().split("\n").filter(Boolean);
    const existingIds = new Set(leads.map((l) => l.id));
    let changed = false;

    for (const line of lines) {
      const sub = JSON.parse(line);
      if (existingIds.has(sub.id)) continue;
      const now = sub.submittedAt ?? new Date().toISOString();
      leads.push({
        id: sub.id ?? crypto.randomUUID(),
        name: sub.name,
        email: sub.email,
        company: sub.company,
        phone: sub.phone,
        projectType: sub.projectType,
        budget: sub.budget,
        timeline: sub.timeline,
        description: sub.description,
        status: "new",
        notes: "",
        createdAt: now,
        updatedAt: now,
      });
      changed = true;
    }

    if (changed) await saveLeads(leads);
  } catch {
    // No legacy file
  }

  return leads;
}
