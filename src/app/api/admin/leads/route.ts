import { NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";
import {
  getLeads,
  updateLead,
  deleteLead,
} from "@/lib/leads";
import type { LeadStatus } from "@/lib/lead-types";

export async function GET() {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const leads = await getLeads();
  return NextResponse.json({ leads });
}

export async function PATCH(request: Request) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id, status, notes } = await request.json();
  if (!id) {
    return NextResponse.json({ error: "Lead ID required" }, { status: 400 });
  }

  const updates: { status?: LeadStatus; notes?: string } = {};
  if (status) updates.status = status;
  if (notes !== undefined) updates.notes = notes;

  const lead = await updateLead(id, updates);
  if (!lead) {
    return NextResponse.json({ error: "Lead not found" }, { status: 404 });
  }

  return NextResponse.json({ lead });
}

export async function DELETE(request: Request) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await request.json();
  if (!id) {
    return NextResponse.json({ error: "Lead ID required" }, { status: 400 });
  }

  const deleted = await deleteLead(id);
  if (!deleted) {
    return NextResponse.json({ error: "Lead not found" }, { status: 404 });
  }

  return NextResponse.json({ success: true });
}
