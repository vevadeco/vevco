export type LeadStatus =
  | "new"
  | "contacted"
  | "qualified"
  | "proposal_sent"
  | "won"
  | "lost";

export type Lead = {
  id: string;
  name: string;
  email: string;
  company: string;
  phone?: string;
  projectType: string;
  budget: string;
  timeline: string;
  description: string;
  status: LeadStatus;
  notes: string;
  createdAt: string;
  updatedAt: string;
};

export const LEAD_STATUSES: { value: LeadStatus; label: string; color: string }[] = [
  { value: "new", label: "New", color: "bg-blue-100 text-blue-700" },
  { value: "contacted", label: "Contacted", color: "bg-amber-100 text-amber-700" },
  { value: "qualified", label: "Qualified", color: "bg-purple-100 text-purple-700" },
  { value: "proposal_sent", label: "Proposal Sent", color: "bg-indigo-100 text-indigo-700" },
  { value: "won", label: "Won", color: "bg-green-100 text-green-700" },
  { value: "lost", label: "Lost", color: "bg-gray-100 text-gray-600" },
];

export function getStatusMeta(status: LeadStatus) {
  return LEAD_STATUSES.find((s) => s.value === status) ?? LEAD_STATUSES[0];
}
