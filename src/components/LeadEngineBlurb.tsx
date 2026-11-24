import Link from "next/link";
import { CONTACT_EMAIL } from "@/lib/site";

const linkClass =
  "font-semibold text-accent underline decoration-accent/30 underline-offset-2 hover:decoration-accent";

export function LeadEngineBlurb() {
  return (
    <div className="mt-12 rounded-2xl border border-border bg-white p-8 shadow-sm sm:p-10">
      <h3 className="text-2xl font-bold tracking-tight">
        Lead engines for local service businesses
      </h3>
      <div className="mt-4 space-y-4 leading-relaxed text-muted">
        <p>
          Your website should do more than look good. It should bring in quote
          requests and help you follow up on every one.
        </p>
        <p>
          Vevade builds lead engines for landscapers, snow removal crews and
          other local service businesses around Hamilton, Burlington, Stoney
          Creek, Ancaster, Dundas and Grimsby. A lead engine is two things
          built to work together:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="text-foreground">A website that converts.</strong>{" "}
            A short quote form up front, a call to action on every service, and
            a promo banner with a live countdown you control.
          </li>
          <li>
            <strong className="text-foreground">
              A private dashboard that keeps you organized.
            </strong>{" "}
            Every lead in one place, with status, priority, comments, filters
            and CSV export.
          </li>
          <li>
            <strong className="text-foreground">
              Built-in estimates and invoices.
            </strong>{" "}
            Turn any lead into an estimate or invoice with the customer&apos;s
            details already filled in. Add line items, and 13% HST and the
            totals are worked out as you type.
          </li>
        </ul>
        <p>
          For seasonal businesses, we can even add a single switch that flips
          your whole site from summer services to winter ones.
        </p>
        <p>
          <strong className="text-foreground">See it in action:</strong>{" "}
          <Link href="/work/earls-landscaping-lead-engine" className={linkClass}>
            How we built a year-round lead engine for Earl&apos;s Landscaping
            and Snow Removal →
          </Link>
        </p>
        <p>
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Lead%20engine%20for%20my%20business`}
            className={linkClass}
          >
            Talk to us about yours →
          </a>
        </p>
      </div>
    </div>
  );
}
