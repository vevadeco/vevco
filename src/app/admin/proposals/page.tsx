import { AdminLogin } from "@/components/admin/AdminLogin";
import { ProposalBuilder } from "@/components/admin/ProposalBuilder";
import { isAuthenticated } from "@/lib/auth";

export const metadata = {
  title: "Proposal Studio — VevadeCo",
  robots: "noindex",
};

type SearchParams = Promise<{
  name?: string | string[];
  company?: string | string[];
  email?: string | string[];
  description?: string | string[];
  projectType?: string | string[];
}>;

function first(value: string | string[] | undefined): string {
  return Array.isArray(value) ? value[0] || "" : value || "";
}

function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

export default async function ProposalsPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  if (!(await isAuthenticated())) {
    return <AdminLogin />;
  }

  const query = await searchParams;
  const today = new Date();
  const validUntil = new Date(today);
  validUntil.setUTCDate(validUntil.getUTCDate() + 30);

  return (
    <ProposalBuilder
      initialClient={{
        name: first(query.name),
        company: first(query.company),
        email: first(query.email),
        projectDescription: first(query.description),
        projectType: first(query.projectType),
      }}
      defaultDate={isoDate(today)}
      defaultValidUntil={isoDate(validUntil)}
    />
  );
}
