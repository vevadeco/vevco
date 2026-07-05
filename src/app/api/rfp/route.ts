import { NextResponse } from "next/server";
import { validateRFP, type RFPFormData } from "@/lib/rfp";
import { createLead } from "@/lib/leads";

export async function POST(request: Request) {
  try {
    const data: Partial<RFPFormData> & { website?: string } = await request.json();

    // Honeypot — silently accept but don't save
    if (data.website) {
      return NextResponse.json({ success: true, id: "ok" });
    }

    const error = validateRFP(data);

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    const lead = await createLead({
      name: data.name!,
      email: data.email!,
      company: data.company!,
      phone: data.phone,
      projectType: data.projectType!,
      budget: data.budget!,
      timeline: data.timeline!,
      description: data.description!,
    });

    return NextResponse.json({ success: true, id: lead.id });
  } catch {
    return NextResponse.json(
      { error: "Failed to process submission" },
      { status: 500 }
    );
  }
}
