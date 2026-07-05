import type { Lead, LeadStatus } from "./lead-types";
import { loadLeads, saveLeads, migrateLegacySubmissions } from "./lead-store";

export type { Lead, LeadStatus } from "./lead-types";
export { LEAD_STATUSES, getStatusMeta } from "./lead-types";
export { getStorageMode } from "./lead-store";

export async function createLead(
  data: Omit<Lead, "id" | "status" | "notes" | "createdAt" | "updatedAt">
): Promise<Lead> {
  const leads = await loadLeads();
  const now = new Date().toISOString();
  const lead: Lead = {
    ...data,
    id: crypto.randomUUID(),
    status: "new",
    notes: "",
    createdAt: now,
    updatedAt: now,
  };
  leads.unshift(lead);
  await saveLeads(leads);
  return lead;
}

export async function getLeads(): Promise<Lead[]> {
  let leads = await loadLeads();
  leads = await migrateLegacySubmissions(leads);
  return leads;
}

export async function getLead(id: string): Promise<Lead | null> {
  const leads = await loadLeads();
  return leads.find((l) => l.id === id) ?? null;
}

export async function updateLead(
  id: string,
  updates: Partial<Pick<Lead, "status" | "notes">>
): Promise<Lead | null> {
  const leads = await loadLeads();
  const index = leads.findIndex((l) => l.id === id);
  if (index === -1) return null;

  leads[index] = {
    ...leads[index],
    ...updates,
    updatedAt: new Date().toISOString(),
  };
  await saveLeads(leads);
  return leads[index];
}

export async function deleteLead(id: string): Promise<boolean> {
  const leads = await loadLeads();
  const filtered = leads.filter((l) => l.id !== id);
  if (filtered.length === leads.length) return false;
  await saveLeads(filtered);
  return true;
}
