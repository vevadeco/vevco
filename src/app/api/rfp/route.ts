import { after, NextResponse } from "next/server";
import { validateRFP, type RFPFormData } from "@/lib/rfp";
import { createLead, LeadStorageError } from "@/lib/leads";
import { sendLeadNotification } from "@/lib/sendlayer";

export const runtime = "nodejs";

function storageErrorMessage(error: unknown): string | null {
  const message = error instanceof Error ? error.message : String(error);

  if (
    message.includes("DATABASE_URL") ||
    message.includes("connection") ||
    message.includes("ECONNREFUSED")
  ) {
    return "Lead storage is not configured on the server. Please try again later or contact us directly.";
  }

  if (message.includes("EROFS") || message.includes("read-only")) {
    return "Lead storage is not available. Please contact us directly.";
  }

  return null;
}

export async function POST(request: Request) {
  try {
    const data: Partial<RFPFormData> & { website?: string } = await request.json();

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
      } catch (notifyError) {
        console.error("[RFP] Failed to send email notification:", notifyError);
      }
    });

    return NextResponse.json({ success: true, id: lead.id });
  } catch (err) {
    console.error("[RFP] Submission failed:", err);

    if (err instanceof LeadStorageError) {
      return NextResponse.json({ error: err.message }, { status: 503 });
    }

    const friendly = storageErrorMessage(err);
    if (friendly) {
      return NextResponse.json({ error: friendly }, { status: 503 });
    }

    return NextResponse.json(
      { error: "Failed to process submission. Please try again or contact us directly." },
      { status: 500 }
    );
  }
}
