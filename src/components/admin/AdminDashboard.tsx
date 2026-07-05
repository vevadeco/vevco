"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  LogOut,
  RefreshCw,
  Search,
  Mail,
  Building2,
  Calendar,
  Trash2,
  X,
  Loader2,
} from "lucide-react";
import { Logo } from "@/components/Logo";
import { LEAD_STATUSES, type Lead, type LeadStatus } from "@/lib/lead-types";

export function AdminDashboard() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<LeadStatus | "all">("all");
  const [selected, setSelected] = useState<Lead | null>(null);
  const [notes, setNotes] = useState("");
  const [saving, setSaving] = useState(false);
  const router = useRouter();

  const fetchLeads = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/leads");
      if (res.status === 401) {
        router.refresh();
        return;
      }
      const data = await res.json();
      setLeads(data.leads);
    } finally {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    fetchLeads();
  }, [fetchLeads]);

  async function handleLogout() {
    await fetch("/api/admin/auth", { method: "DELETE" });
    router.refresh();
  }

  async function updateStatus(id: string, status: LeadStatus) {
    setSaving(true);
    const res = await fetch("/api/admin/leads", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    });
    if (res.ok) {
      const { lead } = await res.json();
      setLeads((prev) => prev.map((l) => (l.id === id ? lead : l)));
      if (selected?.id === id) setSelected(lead);
    }
    setSaving(false);
  }

  async function saveNotes() {
    if (!selected) return;
    setSaving(true);
    const res = await fetch("/api/admin/leads", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: selected.id, notes }),
    });
    if (res.ok) {
      const { lead } = await res.json();
      setLeads((prev) => prev.map((l) => (l.id === lead.id ? lead : l)));
      setSelected(lead);
    }
    setSaving(false);
  }

  async function deleteLead(id: string) {
    if (!confirm("Delete this lead permanently?")) return;
    const res = await fetch("/api/admin/leads", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    if (res.ok) {
      setLeads((prev) => prev.filter((l) => l.id !== id));
      if (selected?.id === id) setSelected(null);
    }
  }

  const filtered = leads.filter((lead) => {
    const matchesStatus = statusFilter === "all" || lead.status === statusFilter;
    const q = search.toLowerCase();
    const matchesSearch =
      !q ||
      lead.name.toLowerCase().includes(q) ||
      lead.email.toLowerCase().includes(q) ||
      lead.company.toLowerCase().includes(q);
    return matchesStatus && matchesSearch;
  });

  const statusCounts = LEAD_STATUSES.map((s) => ({
    ...s,
    count: leads.filter((l) => l.status === s.value).length,
  }));

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-surface">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          <div className="flex items-center gap-3">
            <Logo />
            <div>
              <h1 className="text-lg font-bold">Lead Management</h1>
              <p className="text-xs text-muted">{leads.length} total leads</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={fetchLeads}
              className="rounded-lg border border-border p-2 text-muted hover:bg-gray-50"
              title="Refresh"
            >
              <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
            </button>
            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-medium text-muted hover:bg-gray-50"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
        {/* Status pills */}
        <div className="mb-6 flex flex-wrap gap-2">
          <button
            onClick={() => setStatusFilter("all")}
            className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
              statusFilter === "all"
                ? "bg-foreground text-white"
                : "bg-gray-100 text-muted hover:bg-gray-200"
            }`}
          >
            All ({leads.length})
          </button>
          {statusCounts.map((s) => (
            <button
              key={s.value}
              onClick={() => setStatusFilter(s.value)}
              className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                statusFilter === s.value
                  ? "bg-foreground text-white"
                  : `${s.color} hover:opacity-80`
              }`}
            >
              {s.label} ({s.count})
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
          <input
            type="text"
            placeholder="Search by name, email, or company..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-border bg-surface py-2.5 pl-10 pr-4 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
          />
        </div>

        {/* Table */}
        <div className="overflow-hidden rounded-2xl border border-border bg-surface">
          {loading && leads.length === 0 ? (
            <div className="flex items-center justify-center py-20">
              <Loader2 className="h-6 w-6 animate-spin text-muted" />
            </div>
          ) : filtered.length === 0 ? (
            <div className="py-20 text-center text-muted">
              {leads.length === 0
                ? "No leads yet. They'll appear here when someone submits an RFP."
                : "No leads match your filters."}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-gray-50/80 text-left text-xs font-medium uppercase tracking-wider text-muted">
                    <th className="px-4 py-3">Contact</th>
                    <th className="px-4 py-3">Project</th>
                    <th className="px-4 py-3">Budget</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3">Date</th>
                    <th className="px-4 py-3" />
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {filtered.map((lead) => {
                    const statusMeta = LEAD_STATUSES.find(
                      (s) => s.value === lead.status
                    )!;
                    return (
                      <tr
                        key={lead.id}
                        className="cursor-pointer transition-colors hover:bg-gray-50/50"
                        onClick={() => {
                          setSelected(lead);
                          setNotes(lead.notes);
                        }}
                      >
                        <td className="px-4 py-3">
                          <div className="font-medium">{lead.name}</div>
                          <div className="text-xs text-muted">{lead.company}</div>
                        </td>
                        <td className="px-4 py-3 text-muted">
                          {lead.projectType}
                        </td>
                        <td className="px-4 py-3 text-muted">{lead.budget}</td>
                        <td className="px-4 py-3">
                          <span
                            className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${statusMeta.color}`}
                          >
                            {statusMeta.label}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-xs text-muted">
                          {new Date(lead.createdAt).toLocaleDateString()}
                        </td>
                        <td className="px-4 py-3">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              deleteLead(lead.id);
                            }}
                            className="rounded p-1 text-muted hover:bg-red-50 hover:text-red-600"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>

      {/* Detail drawer */}
      {selected && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setSelected(null)}
          />
          <div className="relative flex h-full w-full max-w-lg flex-col bg-surface shadow-2xl">
            <div className="flex items-center justify-between border-b border-border px-6 py-4">
              <h2 className="text-lg font-bold">{selected.name}</h2>
              <button
                onClick={() => setSelected(null)}
                className="rounded-lg p-1 hover:bg-gray-100"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-5 space-y-5">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4 text-muted" />
                  <a href={`mailto:${selected.email}`} className="text-accent hover:underline">
                    {selected.email}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Building2 className="h-4 w-4 text-muted" />
                  {selected.company}
                </div>
                {selected.phone && (
                  <div className="text-sm text-muted">{selected.phone}</div>
                )}
                <div className="flex items-center gap-2 text-sm text-muted">
                  <Calendar className="h-4 w-4" />
                  {new Date(selected.createdAt).toLocaleString()}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-gray-50 p-3">
                  <div className="text-xs text-muted">Project Type</div>
                  <div className="mt-1 text-sm font-medium">{selected.projectType}</div>
                </div>
                <div className="rounded-xl bg-gray-50 p-3">
                  <div className="text-xs text-muted">Budget</div>
                  <div className="mt-1 text-sm font-medium">{selected.budget}</div>
                </div>
                <div className="rounded-xl bg-gray-50 p-3 col-span-2">
                  <div className="text-xs text-muted">Timeline</div>
                  <div className="mt-1 text-sm font-medium">{selected.timeline}</div>
                </div>
              </div>

              <div>
                <div className="mb-1.5 text-xs font-medium text-muted">Description</div>
                <p className="rounded-xl bg-gray-50 p-3 text-sm leading-relaxed">
                  {selected.description}
                </p>
              </div>

              <div>
                <div className="mb-2 text-xs font-medium text-muted">Status</div>
                <div className="flex flex-wrap gap-2">
                  {LEAD_STATUSES.map((s) => (
                    <button
                      key={s.value}
                      onClick={() => updateStatus(selected.id, s.value)}
                      disabled={saving}
                      className={`rounded-full px-3 py-1 text-xs font-medium transition-all ${
                        selected.status === s.value
                          ? "ring-2 ring-accent ring-offset-1 " + s.color
                          : s.color + " opacity-60 hover:opacity-100"
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="mb-1.5 text-xs font-medium text-muted">Internal Notes</div>
                <textarea
                  rows={4}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full resize-none rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/20"
                  placeholder="Add notes about this lead..."
                />
                <button
                  onClick={saveNotes}
                  disabled={saving}
                  className="mt-2 rounded-full bg-accent px-4 py-1.5 text-xs font-semibold text-white hover:bg-accent-hover disabled:opacity-60"
                >
                  {saving ? "Saving..." : "Save notes"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
