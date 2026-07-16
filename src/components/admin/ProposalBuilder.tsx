"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Download,
  FileText,
  Loader2,
  LogOut,
  Plus,
  Sparkles,
  Trash2,
} from "lucide-react";
import { Logo } from "@/components/Logo";
import {
  proposalCurrencies,
  type ProposalCurrency,
} from "@/lib/proposal";

type InitialClient = {
  name?: string;
  company?: string;
  email?: string;
  projectDescription?: string;
  projectType?: string;
};

type ProposalBuilderProps = {
  initialClient: InitialClient;
  defaultDate: string;
  defaultValidUntil: string;
};

type ScopeRow = {
  id: string;
  title: string;
  description: string;
};

type MilestoneRow = {
  id: string;
  title: string;
  timing: string;
  description: string;
};

type LineItemRow = {
  id: string;
  title: string;
  description: string;
  amount: string;
};

const inputClass =
  "w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/15";
const labelClass = "mb-1.5 block text-xs font-semibold text-foreground";

function newId() {
  return crypto.randomUUID();
}

function SectionCard({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-border bg-surface p-5 shadow-sm sm:p-7">
      <div className="mb-6">
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
          {eyebrow}
        </p>
        <h2 className="mt-1 text-xl font-bold tracking-tight">{title}</h2>
        <p className="mt-1 text-sm text-muted">{description}</p>
      </div>
      {children}
    </section>
  );
}

export function ProposalBuilder({
  initialClient,
  defaultDate,
  defaultValidUntil,
}: ProposalBuilderProps) {
  const router = useRouter();
  const [generating, setGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [title, setTitle] = useState(
    initialClient.projectType
      ? `${initialClient.projectType} Proposal`
      : "Digital Product Design & Development"
  );
  const [proposalDate, setProposalDate] = useState(defaultDate);
  const [validUntil, setValidUntil] = useState(defaultValidUntil);
  const [clientName, setClientName] = useState(initialClient.name || "");
  const [company, setCompany] = useState(initialClient.company || "");
  const [clientEmail, setClientEmail] = useState(initialClient.email || "");
  const [preparedBy, setPreparedBy] = useState("VevadeCo");
  const [currency, setCurrency] = useState<ProposalCurrency>("USD");
  const [executiveSummary, setExecutiveSummary] = useState(
    initialClient.projectDescription
      ? `VevadeCo proposes a focused engagement to bring this project to life: ${initialClient.projectDescription}`
      : "VevadeCo will design and build a polished, scalable digital product tailored to your business goals. Our approach combines focused discovery, thoughtful user experience design, and production-ready development with clear communication at every milestone."
  );
  const [scope, setScope] = useState<ScopeRow[]>([
    {
      id: "scope-discovery",
      title: "Discovery & product strategy",
      description:
        "Stakeholder kickoff, requirements definition, user-flow mapping, technical planning, and a prioritized delivery roadmap.",
    },
    {
      id: "scope-design",
      title: "Experience & interface design",
      description:
        "Responsive wireframes and high-fidelity interface design aligned to your brand, audience, and conversion goals.",
    },
    {
      id: "scope-build",
      title: "Development, QA & launch",
      description:
        "Production implementation, responsive testing, performance optimization, deployment, and launch support.",
    },
  ]);
  const [milestones, setMilestones] = useState<MilestoneRow[]>([
    {
      id: "milestone-kickoff",
      title: "Kickoff & discovery",
      timing: "Week 1",
      description:
        "Confirm goals, requirements, users, content, and technical direction.",
    },
    {
      id: "milestone-design",
      title: "Design & validation",
      timing: "Weeks 2–3",
      description:
        "Review user flows, visual direction, and high-fidelity screens.",
    },
    {
      id: "milestone-build",
      title: "Build & launch",
      timing: "Weeks 4–6",
      description:
        "Develop, test, polish, deploy, and hand over the finished product.",
    },
  ]);
  const [lineItems, setLineItems] = useState<LineItemRow[]>([
    {
      id: "investment-project",
      title: "Project design & development",
      description: "Complete delivery of the scope outlined above.",
      amount: "12500",
    },
  ]);
  const [terms, setTerms] = useState(
    "50% deposit to begin and 50% due at launch. Scope changes are quoted separately and approved before work begins. Third-party subscriptions, hosting, and paid assets are not included unless listed above."
  );
  const [nextSteps, setNextSteps] = useState(
    "Approve this proposal, confirm the kickoff date, and submit the initial deposit. We will then schedule a 60-minute kickoff and begin discovery."
  );

  const total = useMemo(
    () =>
      lineItems.reduce((sum, item) => {
        const amount = Number(item.amount);
        return sum + (Number.isFinite(amount) ? amount : 0);
      }, 0),
    [lineItems]
  );

  const formattedTotal = useMemo(
    () =>
      new Intl.NumberFormat("en-US", {
        style: "currency",
        currency,
      }).format(total),
    [currency, total]
  );

  async function logout() {
    await fetch("/api/admin/auth", { method: "DELETE" });
    router.push("/admin");
    router.refresh();
  }

  function updateScope(index: number, updates: Partial<ScopeRow>) {
    setScope((current) =>
      current.map((item, itemIndex) =>
        itemIndex === index ? { ...item, ...updates } : item
      )
    );
  }

  function updateMilestone(index: number, updates: Partial<MilestoneRow>) {
    setMilestones((current) =>
      current.map((item, itemIndex) =>
        itemIndex === index ? { ...item, ...updates } : item
      )
    );
  }

  function updateLineItem(index: number, updates: Partial<LineItemRow>) {
    setLineItems((current) =>
      current.map((item, itemIndex) =>
        itemIndex === index ? { ...item, ...updates } : item
      )
    );
  }

  async function generateProposal(event: React.FormEvent) {
    event.preventDefault();
    setError(null);
    setGenerating(true);

    try {
      const response = await fetch("/api/admin/proposals/pdf", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          proposalDate,
          validUntil,
          preparedFor: {
            name: clientName,
            company,
            email: clientEmail,
          },
          preparedBy,
          executiveSummary,
          scope: scope.map(({ title: itemTitle, description }) => ({
            title: itemTitle,
            description,
          })),
          milestones: milestones.map(
            ({ title: itemTitle, timing, description }) => ({
              title: itemTitle,
              timing,
              description,
            })
          ),
          lineItems: lineItems.map(
            ({ title: itemTitle, description, amount }) => ({
              title: itemTitle,
              description,
              amount: Number(amount),
            })
          ),
          currency,
          terms,
          nextSteps,
        }),
      });

      if (response.status === 401) {
        router.push("/admin");
        router.refresh();
        return;
      }

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error || "Could not generate the proposal");
      }

      const blob = await response.blob();
      const contentDisposition = response.headers.get("content-disposition");
      const filename =
        contentDisposition?.match(/filename="([^"]+)"/)?.[1] ||
        "vevadeco-proposal.pdf";
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    } catch (caught) {
      setError(
        caught instanceof Error
          ? caught.message
          : "Could not generate the proposal"
      );
    } finally {
      setGenerating(false);
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-surface">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <div className="flex min-w-0 items-center gap-4">
            <Logo />
            <div className="hidden h-7 w-px bg-border sm:block" />
            <div className="hidden sm:block">
              <h1 className="text-sm font-bold">Proposal Studio</h1>
              <p className="text-xs text-muted">Create client-ready PDFs</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="/admin"
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-2 text-sm font-medium text-muted transition hover:bg-gray-50 hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Leads
            </Link>
            <button
              type="button"
              onClick={logout}
              className="rounded-lg p-2 text-muted transition hover:bg-gray-50 hover:text-foreground"
              title="Log out"
            >
              <LogOut className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <div className="mb-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-accent">
              <Sparkles className="h-3.5 w-3.5" />
              Branded PDF generator
            </div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Build a beautiful proposal
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
              Customize the client, scope, timeline, and investment. Your PDF is
              generated securely and downloaded instantly.
            </p>
          </div>

          <div className="rounded-2xl border border-blue-100 bg-blue-50/70 px-5 py-4 lg:min-w-72">
            <p className="text-[11px] font-bold uppercase tracking-wider text-accent">
              Live summary
            </p>
            <div className="mt-1 flex items-end justify-between gap-5">
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold">
                  {company || "Client company"}
                </p>
                <p className="truncate text-xs text-muted">
                  Prepared for {clientName || "client"}
                </p>
              </div>
              <p className="shrink-0 text-xl font-bold text-accent">
                {formattedTotal}
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={generateProposal}>
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_300px]">
            <div className="space-y-6">
              <SectionCard
                eyebrow="01 — Details"
                title="Proposal & client"
                description="Set the document title and who this proposal is prepared for."
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label className={labelClass} htmlFor="proposal-title">
                      Proposal title
                    </label>
                    <input
                      id="proposal-title"
                      className={inputClass}
                      required
                      value={title}
                      onChange={(event) => setTitle(event.target.value)}
                    />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="client-name">
                      Client name
                    </label>
                    <input
                      id="client-name"
                      className={inputClass}
                      required
                      value={clientName}
                      onChange={(event) => setClientName(event.target.value)}
                      placeholder="Jane Smith"
                    />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="company">
                      Company
                    </label>
                    <input
                      id="company"
                      className={inputClass}
                      required
                      value={company}
                      onChange={(event) => setCompany(event.target.value)}
                      placeholder="Acme Inc."
                    />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="client-email">
                      Client email
                    </label>
                    <input
                      id="client-email"
                      className={inputClass}
                      type="email"
                      value={clientEmail}
                      onChange={(event) => setClientEmail(event.target.value)}
                      placeholder="jane@company.com"
                    />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="prepared-by">
                      Prepared by
                    </label>
                    <input
                      id="prepared-by"
                      className={inputClass}
                      required
                      value={preparedBy}
                      onChange={(event) => setPreparedBy(event.target.value)}
                    />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="proposal-date">
                      Proposal date
                    </label>
                    <input
                      id="proposal-date"
                      className={inputClass}
                      type="date"
                      required
                      value={proposalDate}
                      onChange={(event) => setProposalDate(event.target.value)}
                    />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="valid-until">
                      Valid until
                    </label>
                    <input
                      id="valid-until"
                      className={inputClass}
                      type="date"
                      value={validUntil}
                      onChange={(event) => setValidUntil(event.target.value)}
                    />
                  </div>
                </div>
              </SectionCard>

              <SectionCard
                eyebrow="02 — Context"
                title="Executive summary"
                description="Open with the outcome, your approach, and why VevadeCo is the right partner."
              >
                <textarea
                  className={`${inputClass} min-h-36 resize-y leading-relaxed`}
                  required
                  value={executiveSummary}
                  onChange={(event) =>
                    setExecutiveSummary(event.target.value)
                  }
                />
              </SectionCard>

              <SectionCard
                eyebrow="03 — Work"
                title="Scope & deliverables"
                description="Describe exactly what the client will receive."
              >
                <div className="space-y-4">
                  {scope.map((item, index) => (
                    <div
                      key={item.id}
                      className="rounded-xl border border-border bg-gray-50/70 p-4"
                    >
                      <div className="mb-3 flex items-center justify-between">
                        <p className="text-xs font-bold text-muted">
                          Deliverable {index + 1}
                        </p>
                        {scope.length > 1 && (
                          <button
                            type="button"
                            onClick={() =>
                              setScope((current) =>
                                current.filter((_, i) => i !== index)
                              )
                            }
                            className="rounded-lg p-1.5 text-muted hover:bg-red-50 hover:text-red-600"
                            aria-label={`Remove deliverable ${index + 1}`}
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        )}
                      </div>
                      <div className="space-y-3">
                        <input
                          className={inputClass}
                          required
                          value={item.title}
                          onChange={(event) =>
                            updateScope(index, { title: event.target.value })
                          }
                          placeholder="Deliverable title"
                        />
                        <textarea
                          className={`${inputClass} min-h-24 resize-y`}
                          required
                          value={item.description}
                          onChange={(event) =>
                            updateScope(index, {
                              description: event.target.value,
                            })
                          }
                          placeholder="What is included?"
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() =>
                    setScope((current) => [
                      ...current,
                      { id: newId(), title: "", description: "" },
                    ])
                  }
                  className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-dashed border-accent/40 px-4 py-2 text-xs font-semibold text-accent hover:bg-blue-50"
                >
                  <Plus className="h-3.5 w-3.5" />
                  Add deliverable
                </button>
              </SectionCard>

              <SectionCard
                eyebrow="04 — Delivery"
                title="Timeline & milestones"
                description="Lay out the phases and set clear expectations."
              >
                <div className="space-y-4">
                  {milestones.map((item, index) => (
                    <div
                      key={item.id}
                      className="rounded-xl border border-border bg-gray-50/70 p-4"
                    >
                      <div className="mb-3 flex items-center justify-between">
                        <p className="text-xs font-bold text-muted">
                          Phase {index + 1}
                        </p>
                        {milestones.length > 1 && (
                          <button
                            type="button"
                            onClick={() =>
                              setMilestones((current) =>
                                current.filter((_, i) => i !== index)
                              )
                            }
                            className="rounded-lg p-1.5 text-muted hover:bg-red-50 hover:text-red-600"
                            aria-label={`Remove phase ${index + 1}`}
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        )}
                      </div>
                      <div className="grid gap-3 sm:grid-cols-[1fr_140px]">
                        <input
                          className={inputClass}
                          required
                          value={item.title}
                          onChange={(event) =>
                            updateMilestone(index, {
                              title: event.target.value,
                            })
                          }
                          placeholder="Phase title"
                        />
                        <input
                          className={inputClass}
                          required
                          value={item.timing}
                          onChange={(event) =>
                            updateMilestone(index, {
                              timing: event.target.value,
                            })
                          }
                          placeholder="Weeks 1–2"
                        />
                        <textarea
                          className={`${inputClass} min-h-20 resize-y sm:col-span-2`}
                          required
                          value={item.description}
                          onChange={(event) =>
                            updateMilestone(index, {
                              description: event.target.value,
                            })
                          }
                          placeholder="What happens during this phase?"
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() =>
                    setMilestones((current) => [
                      ...current,
                      {
                        id: newId(),
                        title: "",
                        timing: "",
                        description: "",
                      },
                    ])
                  }
                  className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-dashed border-accent/40 px-4 py-2 text-xs font-semibold text-accent hover:bg-blue-50"
                >
                  <Plus className="h-3.5 w-3.5" />
                  Add phase
                </button>
              </SectionCard>

              <SectionCard
                eyebrow="05 — Pricing"
                title="Investment"
                description="Add line items and set the proposal currency."
              >
                <div className="mb-4 max-w-40">
                  <label className={labelClass} htmlFor="currency">
                    Currency
                  </label>
                  <select
                    id="currency"
                    className={inputClass}
                    value={currency}
                    onChange={(event) =>
                      setCurrency(event.target.value as ProposalCurrency)
                    }
                  >
                    {proposalCurrencies.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-4">
                  {lineItems.map((item, index) => (
                    <div
                      key={item.id}
                      className="rounded-xl border border-border bg-gray-50/70 p-4"
                    >
                      <div className="grid gap-3 sm:grid-cols-[1fr_160px_auto]">
                        <input
                          className={inputClass}
                          required
                          value={item.title}
                          onChange={(event) =>
                            updateLineItem(index, {
                              title: event.target.value,
                            })
                          }
                          placeholder="Line item"
                        />
                        <div className="relative">
                          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted">
                            $
                          </span>
                          <input
                            className={`${inputClass} pl-7`}
                            required
                            type="number"
                            min="0"
                            step="0.01"
                            value={item.amount}
                            onChange={(event) =>
                              updateLineItem(index, {
                                amount: event.target.value,
                              })
                            }
                            placeholder="0.00"
                          />
                        </div>
                        {lineItems.length > 1 && (
                          <button
                            type="button"
                            onClick={() =>
                              setLineItems((current) =>
                                current.filter((_, i) => i !== index)
                              )
                            }
                            className="rounded-lg p-2 text-muted hover:bg-red-50 hover:text-red-600"
                            aria-label={`Remove investment item ${index + 1}`}
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        )}
                        <input
                          className={`${inputClass} sm:col-span-2`}
                          value={item.description}
                          onChange={(event) =>
                            updateLineItem(index, {
                              description: event.target.value,
                            })
                          }
                          placeholder="Optional description"
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() =>
                      setLineItems((current) => [
                        ...current,
                        {
                          id: newId(),
                          title: "",
                          description: "",
                          amount: "",
                        },
                      ])
                    }
                    className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-accent/40 px-4 py-2 text-xs font-semibold text-accent hover:bg-blue-50"
                  >
                    <Plus className="h-3.5 w-3.5" />
                    Add line item
                  </button>
                  <div className="text-right">
                    <p className="text-xs text-muted">Total investment</p>
                    <p className="text-xl font-bold text-accent">
                      {formattedTotal}
                    </p>
                  </div>
                </div>
              </SectionCard>

              <SectionCard
                eyebrow="06 — Close"
                title="Terms & next steps"
                description="Finish with payment terms and a clear path forward."
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label className={labelClass} htmlFor="terms">
                      Terms
                    </label>
                    <textarea
                      id="terms"
                      className={`${inputClass} min-h-40 resize-y leading-relaxed`}
                      required
                      value={terms}
                      onChange={(event) => setTerms(event.target.value)}
                    />
                  </div>
                  <div>
                    <label className={labelClass} htmlFor="next-steps">
                      Next steps
                    </label>
                    <textarea
                      id="next-steps"
                      className={`${inputClass} min-h-40 resize-y leading-relaxed`}
                      required
                      value={nextSteps}
                      onChange={(event) => setNextSteps(event.target.value)}
                    />
                  </div>
                </div>
              </SectionCard>
            </div>

            <aside className="lg:relative">
              <div className="sticky top-6 rounded-2xl border border-border bg-surface p-5 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 via-violet-600 to-cyan-500 text-white shadow-sm">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold">Ready to export?</p>
                    <p className="text-xs text-muted">Letter-size branded PDF</p>
                  </div>
                </div>

                <div className="my-5 space-y-3 border-y border-border py-5 text-xs">
                  <div className="flex justify-between gap-3">
                    <span className="text-muted">Prepared for</span>
                    <span className="max-w-36 truncate font-semibold">
                      {company || "Not set"}
                    </span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="text-muted">Deliverables</span>
                    <span className="font-semibold">{scope.length}</span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="text-muted">Milestones</span>
                    <span className="font-semibold">{milestones.length}</span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="text-muted">Investment</span>
                    <span className="font-semibold text-accent">
                      {formattedTotal}
                    </span>
                  </div>
                </div>

                {error && (
                  <p className="mb-4 rounded-xl bg-red-50 px-3 py-2.5 text-xs leading-relaxed text-red-700">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={generating}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-accent-hover disabled:cursor-wait disabled:opacity-60"
                >
                  {generating ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Creating PDF...
                    </>
                  ) : (
                    <>
                      <Download className="h-4 w-4" />
                      Generate PDF
                    </>
                  )}
                </button>
                <p className="mt-3 text-center text-[11px] leading-relaxed text-muted">
                  Includes the logo, proposal date, prepared-for client, and
                  page numbers in every footer.
                </p>
              </div>
            </aside>
          </div>
        </form>
      </main>
    </div>
  );
}
