import type { Lead } from "./lead-types";

const SENDLAYER_ENDPOINT = "https://console.sendlayer.com/api/v1/email";

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getRecipients(value: string) {
  return value
    .split(",")
    .map((email) => email.trim())
    .filter(Boolean)
    .map((email) => ({ name: "VevadeCo", email }));
}

function formatPlainText(lead: Lead): string {
  return [
    "New proposal request",
    "",
    `Name: ${lead.name}`,
    `Email: ${lead.email}`,
    `Company: ${lead.company}`,
    `Phone: ${lead.phone || "Not provided"}`,
    `Project type: ${lead.projectType}`,
    `Budget: ${lead.budget}`,
    `Timeline: ${lead.timeline}`,
    "",
    "Project description:",
    lead.description,
    "",
    `Lead ID: ${lead.id}`,
  ].join("\n");
}

function formatHtml(lead: Lead): string {
  const rows = [
    ["Name", lead.name],
    ["Email", lead.email],
    ["Company", lead.company],
    ["Phone", lead.phone || "Not provided"],
    ["Project type", lead.projectType],
    ["Budget", lead.budget],
    ["Timeline", lead.timeline],
  ];

  return `
    <html>
      <body style="font-family:Arial,sans-serif;color:#171717;line-height:1.5">
        <h1 style="font-size:22px">New proposal request</h1>
        <table style="border-collapse:collapse">
          ${rows
            .map(
              ([label, value]) => `
                <tr>
                  <th style="padding:6px 16px 6px 0;text-align:left;vertical-align:top">${escapeHtml(label)}</th>
                  <td style="padding:6px 0">${escapeHtml(value)}</td>
                </tr>`
            )
            .join("")}
        </table>
        <h2 style="font-size:17px;margin-top:24px">Project description</h2>
        <p style="white-space:pre-wrap">${escapeHtml(lead.description)}</p>
        <p style="color:#737373;font-size:12px;margin-top:24px">Lead ID: ${escapeHtml(lead.id)}</p>
      </body>
    </html>
  `.trim();
}

export async function sendLeadNotification(lead: Lead): Promise<boolean> {
  const apiKey = process.env.SENDLAYER_API_KEY;
  const fromEmail = process.env.SENDLAYER_FROM_EMAIL;
  const recipientEmails = process.env.RFP_NOTIFICATION_EMAIL;

  if (!apiKey || !fromEmail || !recipientEmails) {
    console.warn(
      "RFP email notification skipped: SENDLAYER_API_KEY, SENDLAYER_FROM_EMAIL, and RFP_NOTIFICATION_EMAIL are required"
    );
    return false;
  }

  const response = await fetch(SENDLAYER_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      From: {
        name: process.env.SENDLAYER_FROM_NAME || "VevadeCo",
        email: fromEmail,
      },
      To: getRecipients(recipientEmails),
      ReplyTo: [{ name: lead.name, email: lead.email }],
      Subject: `New proposal request from ${lead.name} at ${lead.company}`,
      ContentType: "HTML",
      HTMLContent: formatHtml(lead),
      PlainContent: formatPlainText(lead),
      Tags: ["rfp", "new-lead"],
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    const details = (await response.text()).slice(0, 500);
    throw new Error(
      `SendLayer request failed with ${response.status}: ${details}`
    );
  }

  return true;
}
