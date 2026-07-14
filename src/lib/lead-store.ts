import { get, put, BlobNotFoundError } from "@vercel/blob";
import { readFile, writeFile, mkdir } from "fs/promises";
import path from "path";
import type { Lead } from "./lead-types";

const BLOB_PATHNAME = "vevadeco/leads.json";
const DATA_DIR = path.join(process.cwd(), "data");
const LEADS_FILE = path.join(DATA_DIR, "leads.json");

function hasBlobCredentials(): boolean {
  if (process.env.BLOB_READ_WRITE_TOKEN) return true;
  if (process.env.BLOB_STORE_ID) return true;
  // On Vercel, Blob auth uses OIDC automatically when a store is connected
  if (process.env.VERCEL === "1") return true;
  return false;
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
    const result = await get(BLOB_PATHNAME, { access: "private" });
    if (!result || result.statusCode !== 200 || !result.stream) return [];

    const raw = await new Response(result.stream).text();
    if (!raw.trim()) return [];
    return JSON.parse(raw) as Lead[];
  } catch (error) {
    if (error instanceof BlobNotFoundError) return [];
    throw error;
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
  if (hasBlobCredentials()) {
    return readLeadsFromBlob();
  }
  return readLeadsFromFile();
}

export async function saveLeads(leads: Lead[]): Promise<void> {
  if (hasBlobCredentials()) {
    await writeLeadsToBlob(leads);
    return;
  }
  await writeLeadsToFile(leads);
}

export function getStorageMode(): "blob" | "filesystem" {
  return hasBlobCredentials() ? "blob" : "filesystem";
}

export class LeadStorageError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "LeadStorageError";
  }
}

export async function migrateLegacySubmissions(
  leads: Lead[]
): Promise<Lead[]> {
  if (hasBlobCredentials()) return leads;

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
