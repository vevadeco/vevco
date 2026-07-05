export type RFPFormData = {
  name: string;
  email: string;
  company: string;
  phone?: string;
  projectType: string;
  budget: string;
  timeline: string;
  description: string;
  website?: string;
};

export const projectTypes = [
  "Custom Web Application",
  "Lead Generation / CRM",
  "AI / Automation Tool",
  "E-commerce / SaaS",
  "Marketing & Growth",
  "Other",
] as const;

export const budgetRanges = [
  "Under $5,000",
  "$5,000 – $15,000",
  "$15,000 – $50,000",
  "$50,000+",
  "Not sure yet",
] as const;

export const timelineOptions = [
  "ASAP (< 1 month)",
  "1–3 months",
  "3–6 months",
  "Flexible / exploring",
] as const;

export function validateRFP(data: Partial<RFPFormData>): string | null {
  if (!data.name?.trim()) return "Name is required";
  if (!data.email?.trim()) return "Email is required";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return "Invalid email address";
  if (!data.company?.trim()) return "Company name is required";
  if (!data.projectType) return "Please select a project type";
  if (!data.budget) return "Please select a budget range";
  if (!data.timeline) return "Please select a timeline";
  if (!data.description?.trim() || data.description.trim().length < 20)
    return "Please describe your project (at least 20 characters)";
  return null;
}
