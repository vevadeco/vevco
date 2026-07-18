import { renderToBuffer } from "@react-pdf/renderer";
import { isAuthenticated } from "@/lib/auth";
import { ProposalDocument } from "@/lib/proposal-pdf";
import { validateProposal } from "@/lib/proposal";

export const runtime = "nodejs";

function safeFilename(value: string): string {
  const normalized = value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60);

  return `${normalized || "client"}-proposal.pdf`;
}

export async function POST(request: Request) {
  if (!(await isAuthenticated())) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const result = validateProposal(await request.json());
    if ("error" in result) {
      return Response.json({ error: result.error }, { status: 400 });
    }

    const proposal = result.data;
    const buffer = await renderToBuffer(ProposalDocument({ proposal }));

    return new Response(new Uint8Array(buffer), {
      headers: {
        "Cache-Control": "private, no-store",
        "Content-Disposition": `attachment; filename="${safeFilename(
          proposal.preparedFor.company
        )}"`,
        "Content-Length": String(buffer.byteLength),
        "Content-Type": "application/pdf",
        "X-Content-Type-Options": "nosniff",
      },
    });
  } catch (error) {
    console.error("Failed to generate proposal PDF", error);
    return Response.json(
      { error: "Failed to generate proposal PDF" },
      { status: 500 }
    );
  }
}
