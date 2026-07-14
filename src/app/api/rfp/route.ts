import { after, NextResponse } from "next/server";
import { validateRFP, type RFPFormData } from "@/lib/rfp";
import { createLead } from "@/lib/leads";
import { sendLeadNotification } from "@/lib/sendlayer";

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

    after(async () => {
      try {
        await sendLeadNotification(lead);
      } catch (error) {
        console.error("Failed to send RFP email notification", error);
      }
    });

    return NextResponse.json({ success: true, id: lead.id });
  } catch (error) {
    console.error("Failed to process RFP submission", error);
    return NextResponse.json(
      { error: "Failed to process submission" },
      { status: 500 }
    );
  }
}
