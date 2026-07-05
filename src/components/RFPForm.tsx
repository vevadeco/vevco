"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import {
  budgetRanges,
  projectTypes,
  timelineOptions,
  validateRFP,
  type RFPFormData,
} from "@/lib/rfp";

const initialForm: RFPFormData = {
  name: "",
  email: "",
  company: "",
  phone: "",
  projectType: "",
  budget: "",
  timeline: "",
  description: "",
};

export function RFPForm() {
  const [form, setForm] = useState<RFPFormData>(initialForm);
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  function updateField<K extends keyof RFPFormData>(
    key: K,
    value: RFPFormData[K]
  ) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setError(null);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const validationError = validateRFP(form);
    if (validationError) {
      setError(validationError);
      return;
    }

    setStatus("loading");
    setError(null);

    try {
      const res = await fetch("/api/rfp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Submission failed");
      setStatus("idle");
    }
  }

  if (status === "success") {
    return (
      <section id="rfp" className="scroll-mt-28 px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-12">
            <CheckCircle2 className="mx-auto h-12 w-12 text-green-600" />
            <h2 className="mt-6 text-2xl font-bold">Proposal request received</h2>
            <p className="mt-3 text-muted">
              We&apos;ll review your brief and reach out within one business day
              to schedule a discovery call. Your custom proposal follows within
              48 hours.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-8 text-sm font-semibold text-accent hover:underline"
            >
              Submit another request
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="rfp" className="scroll-mt-28 px-4 py-20 sm:px-6 sm:py-28">
      <FadeIn>
      <div className="mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-3xl border border-border bg-surface shadow-sm">
          <div className="grid lg:grid-cols-2">
            <div className="hero-gradient p-8 sm:p-12 lg:p-14">
              <p className="section-eyebrow mb-3">Get Started</p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Request your free proposal
              </h2>
              <p className="mt-4 leading-relaxed text-muted">
                Tell us about your project. No commitment, no sales pressure —
                just a scoped proposal with timeline and pricing within 48 hours.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  "Free 30-minute discovery call",
                  "Fixed-scope proposal with transparent pricing",
                  "Response within one business day",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <form onSubmit={handleSubmit} className="p-8 sm:p-12 lg:p-14 relative">
              <div className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                      Full name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => updateField("name", e.target.value)}
                      className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                      placeholder="Jane Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                      Work email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                      placeholder="jane@company.com"
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="company" className="mb-1.5 block text-sm font-medium">
                      Company *
                    </label>
                    <input
                      id="company"
                      type="text"
                      required
                      value={form.company}
                      onChange={(e) => updateField("company", e.target.value)}
                      className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                      placeholder="Acme Inc."
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-1.5 block text-sm font-medium">
                      Phone <span className="text-muted">(optional)</span>
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="projectType" className="mb-1.5 block text-sm font-medium">
                    Project type *
                  </label>
                  <select
                    id="projectType"
                    required
                    value={form.projectType}
                    onChange={(e) => updateField("projectType", e.target.value)}
                    className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                  >
                    <option value="">Select a project type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="budget" className="mb-1.5 block text-sm font-medium">
                      Budget range *
                    </label>
                    <select
                      id="budget"
                      required
                      value={form.budget}
                      onChange={(e) => updateField("budget", e.target.value)}
                      className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                    >
                      <option value="">Select budget</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="timeline" className="mb-1.5 block text-sm font-medium">
                      Timeline *
                    </label>
                    <select
                      id="timeline"
                      required
                      value={form.timeline}
                      onChange={(e) => updateField("timeline", e.target.value)}
                      className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                    >
                      <option value="">Select timeline</option>
                      {timelineOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="description" className="mb-1.5 block text-sm font-medium">
                    Project description *
                  </label>
                  <textarea
                    id="description"
                    required
                    rows={4}
                    value={form.description}
                    onChange={(e) => updateField("description", e.target.value)}
                    className="w-full resize-none rounded-xl border border-border bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
                    placeholder="Tell us what you're building, who it's for, and what success looks like..."
                  />
                </div>

                {/* Honeypot — hidden from users, catches bots */}
                <div className="absolute -left-[9999px]" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input
                    id="website"
                    type="text"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.website ?? ""}
                    onChange={(e) => updateField("website" as keyof RFPFormData, e.target.value)}
                  />
                </div>

                {error && (
                  <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-accent-hover disabled:opacity-60 sm:w-auto"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit proposal request
                      <ArrowUpRight className="h-4 w-4" />
                    </>
                  )}
                </button>

                <p className="text-xs text-muted">
                  By submitting, you agree to be contacted about your project. No
                  spam, ever.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      </FadeIn>
    </section>
  );
}
