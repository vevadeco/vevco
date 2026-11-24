import { Shot } from "@/components/CaseStudyMedia";
import { CaseStudyPage, caseH2, caseH3 } from "@/components/CaseStudyPage";
import { JsonLd } from "@/components/JsonLd";
import {
  articleJsonLd,
  breadcrumbJsonLd,
  EARL_DIR,
  EARL_PATH,
  EARL_SIZE,
  imageSrc,
  SAMPLE_CAPTION,
} from "@/lib/case-studies";
import { caseStudyMetadata } from "@/lib/seo";
import { faqPageJsonLd, SITE_URL } from "@/lib/site";

const title = "Lead Engine for Earl's Landscaping & Snow Removal | Vevade";
const description =
  "See the custom website and lead dashboard Vevade built for Earl's Landscaping: quote forms, lead tracking, estimates and a one-click snow season switch.";
const h1 =
  "A lead engine that works in every season: Earl's Landscaping and Snow Removal";

const faqs = [
  {
    question: "What is a lead engine?",
    answer:
      "It's a website and a private dashboard working together. The website turns visitors into quote requests, and the dashboard keeps every request organized, from the first call to the estimate and the invoice.",
  },
  {
    question: "Can my website change for the seasons?",
    answer:
      "Yes. For Earl's we built a single toggle that switches the public site to a winter snow-removal layout and back again. We can build the same idea around your own busy seasons.",
  },
  {
    question: "Can I make estimates and invoices from a lead?",
    answer:
      "Yes. In Earl's dashboard, an estimate opens prefilled with the customer's details and requested service, with subtotal, tax and total worked out. Tax defaults to Ontario's 13% HST and can be changed. A toggle switches the same document between an estimate and an invoice, and both are kept in one list you can filter by type.",
  },
  {
    question: "Can I run my own promotions?",
    answer:
      "Yes. Earl's sets the banner's title, subtitle, button text and countdown deadline from the dashboard and can turn it on or off at any time.",
  },
  {
    question: "Can I get my leads out of the system?",
    answer:
      "Yes. Leads can be filtered by status and priority and exported to a CSV file.",
  },
  {
    question: "Is a lead engine only for landscaping companies?",
    answer:
      "No. Any local service business that runs on quote requests can use a lead engine, whether you clean, renovate, install or repair. We tailor the forms, services and dashboard to your business.",
  },
] as const;

const images = [
  "01-dashboard-overview.png",
  "02-leads-list.png",
  "03-leads-status-filter-open.png",
  "04-leads-priority-filter-open.png",
  "05-lead-row-actions-menu.png",
  "06-lead-detail-modal.png",
  "07-create-estimate-invoice-dialog.png",
  "08-invoices-estimates-empty.png",
  "09-promo-banner-settings.png",
  "10-snow-season-toggle.png",
  "11-public-hero-quote-form-promo-banner.png",
  "12-public-services-cta-cards.png",
].map((file) => imageSrc(EARL_DIR, file));

const linkClass =
  "font-semibold text-accent underline decoration-accent/30 underline-offset-2 hover:decoration-accent";

export const metadata = caseStudyMetadata({
  title,
  description,
  path: EARL_PATH,
});

export default function EarlsLeadEnginePage() {
  return (
    <>
      <JsonLd
        data={articleJsonLd({
          headline: h1,
          description,
          path: EARL_PATH,
          images,
          about: {
            "@type": "Organization",
            name: "Earl's Landscaping and Snow Removal",
            url: "https://earlslandscaping.ca",
          },
        })}
      />
      <JsonLd data={faqPageJsonLd(faqs)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/` },
          { name: "Work", url: `${SITE_URL}/#work` },
          {
            name: "Earl's Landscaping",
            url: `${SITE_URL}${EARL_PATH}`,
          },
        ])}
      />
      <CaseStudyPage
        crumb="Earl's Landscaping"
        h1={h1}
        faqs={faqs}
        lede="Earl's Landscaping and Snow Removal sells two very different things depending on the month. In spring and summer it's lawn care, garden planting and patios. Once the leaves drop, it's seasonal snow contracts and per-visit clearing. We built Earl's a website and a private admin dashboard that turn visitors into quote requests, keep every request organized, and switch with the season in one click."
      >
        <section className="space-y-4">
          <h2 className={caseH2}>
            The problem: seasonal businesses lose leads in the gaps
          </h2>
          <p className="leading-relaxed text-muted">
            If you run a landscaping or snow removal company around Hamilton,
            Burlington, Stoney Creek or Ancaster, you already know the pattern.
            Demand comes in waves. The first cold snap of November sends a rush
            of people looking for a snow contract, and the first warm weekend
            in April does the same for lawn care.
          </p>
          <p className="leading-relaxed text-muted">
            Most small service businesses handle those waves with a generic
            contact form, an inbox, and a notebook or spreadsheet. That&apos;s
            where leads go missing:
          </p>
          <ul className="list-disc space-y-2 pl-5 leading-relaxed text-muted">
            <li>
              <strong className="text-foreground">
                The website says the wrong thing at the wrong time.
              </strong>{" "}
              A summer homepage in December pushes lawn care when people are
              searching for snow removal.
            </li>
            <li>
              <strong className="text-foreground">
                Quote requests get buried.
              </strong>{" "}
              Form emails sit in an inbox next to supplier invoices and spam,
              with no status and no record of who called whom back.
            </li>
            <li>
              <strong className="text-foreground">
                There&apos;s no sense of urgency.
              </strong>{" "}
              Early-booking offers live in a Facebook post that most visitors
              never see.
            </li>
            <li>
              <strong className="text-foreground">Quoting means retyping.</strong>{" "}
              The owner copies a name, email and phone number from an email
              into a separate estimate template, then works out the tax by
              hand.
            </li>
          </ul>
          <p className="leading-relaxed text-muted">
            Earl&apos;s needed one place where leads arrive, get followed up
            and turn into estimates, and a website that always matches the
            season.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className={caseH2}>What Vevade built</h2>
          <p className="leading-relaxed text-muted">
            We built two connected pieces:
          </p>
          <ol className="list-decimal space-y-2 pl-5 leading-relaxed text-muted">
            <li>
              <strong className="text-foreground">A public website</strong> with
              a short quote form in the hero, clear calls to action on every
              service, and a promo banner with a live countdown.
            </li>
            <li>
              <strong className="text-foreground">
                A private admin dashboard
              </strong>{" "}
              where Earl&apos;s team sees every lead, updates its status and
              priority, keeps notes, builds estimates and invoices, and
              controls the banner and the seasonal layout without calling a
              developer.
            </li>
          </ol>
        </section>

        <section className="space-y-12">
          <h2 className={caseH2}>Feature walkthrough</h2>

          <div className="space-y-4">
            <h3 className={caseH3}>1. A quote form people actually finish</h3>
            <Shot
              src={images[10]}
              alt="Earl's Landscaping homepage with a quote form and a promo countdown banner"
              {...EARL_SIZE}
            />
            <p className="leading-relaxed text-muted">
              The quote form sits right in the hero of the homepage, so nobody
              has to hunt for it. It asks for four things only: full name,
              email, phone number, and the service needed from a dropdown (for
              example a seasonal snow contract or per-visit clearing). Above
              the form, Earl&apos;s tells visitors they&apos;ll hear back within
              24 hours, which sets a clear expectation.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className={caseH3}>2. Calls to action on every service</h3>
            <div className="grid items-start gap-6 lg:grid-cols-2">
              <p className="leading-relaxed text-muted">
                Each service has its own card, and the snow services carry a
                direct &quot;Get a Snow Quote&quot; button. A &quot;Snow Removal
                Quote&quot; button also stays in the site header. Wherever a
                visitor is on the page, the next step is one click away.
              </p>
              <Shot
                src={images[11]}
                alt="Service cards on the Earl's Landscaping site, including snow removal quote buttons"
                {...EARL_SIZE}
              />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className={caseH3}>
              3. A promo banner with a live countdown, edited from the dashboard
            </h3>
            <div className="space-y-6">
              <Shot
                src={images[8]}
                alt="Admin settings for the Earl's promo banner title, subtitle, button text, and countdown deadline"
                caption={SAMPLE_CAPTION}
                {...EARL_SIZE}
              />
              <Shot
                src={images[10]}
                alt="Promo countdown banner on the Earl's Landscaping website"
                crop="top-strip"
                {...EARL_SIZE}
              />
            </div>
            <p className="leading-relaxed text-muted">
              Early-booking offers matter in snow removal. Earl&apos;s can turn
              a promotional banner on or off and set its title, subtitle,
              button text and countdown deadline straight from the admin. On
              the live site, the banner shows a ticking days-hours-minutes-seconds
              countdown and a &quot;Claim Offer&quot; button. Changing the offer
              takes a minute, not a support ticket.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className={caseH3}>4. One switch for snow season</h3>
            <p className="leading-relaxed text-muted">
              This is the feature owners like most. A single &quot;Snow Contract
              Season&quot; toggle in the dashboard switches the public website
              to its winter snow-removal layout. When it&apos;s on, the homepage
              leads with seasonal and per-visit snow removal. When spring comes,
              Earl&apos;s switches it off. The site always speaks to what
              customers are looking for right now.
            </p>
            <Shot
              src={images[9]}
              alt="Snow Contract Season toggle in the Earl's admin dashboard"
              caption={SAMPLE_CAPTION}
              size="small"
              {...EARL_SIZE}
            />
          </div>

          <div className="space-y-4">
            <h3 className={caseH3}>5. Every lead in one table</h3>
            <Shot
              src={images[1]}
              alt="Leads table in the Earl's admin dashboard with contact details, service, status, and priority"
              caption={SAMPLE_CAPTION}
              {...EARL_SIZE}
            />
            <p className="leading-relaxed text-muted">
              Every quote request lands in the Leads tab with the contact
              details, the service requested and the date. Status and priority
              can be changed right in the table, so updating a lead takes one
              click.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className={caseH3}>
              6. Status and priority filters, plus CSV export
            </h3>
            <div className="grid items-start gap-6 md:grid-cols-2">
              <Shot
                src={images[2]}
                alt="Status filter open on the Earl's leads list"
                caption={SAMPLE_CAPTION}
                {...EARL_SIZE}
              />
              <Shot
                src={images[3]}
                alt="Priority filter open on the Earl's leads list"
                caption={SAMPLE_CAPTION}
                {...EARL_SIZE}
              />
            </div>
            <p className="leading-relaxed text-muted">
              Leads move through clear statuses (New, Contacted, Qualified,
              Converted, Won, Lost and Closed) and can be marked Low, Medium,
              High or Urgent. Filters let Earl&apos;s see, for example, just
              the new snow leads nobody has called yet. When the team wants the
              list somewhere else, &quot;Export CSV&quot; downloads it.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className={caseH3}>7. Lead details with comments</h3>
            <div className="grid items-start gap-6 lg:grid-cols-2">
              <Shot
                src={images[4]}
                alt="Actions menu on an Earl's lead row"
                caption={SAMPLE_CAPTION}
                size="small"
                {...EARL_SIZE}
              />
              <Shot
                src={images[5]}
                alt="Lead detail window with contact details, status, priority, and comments"
                caption={SAMPLE_CAPTION}
                {...EARL_SIZE}
              />
            </div>
            <p className="leading-relaxed text-muted">
              Opening a lead shows its contact details, the service requested,
              its status and priority, and a comments thread. The team can jot
              down what was discussed (&quot;has a commercial property, wants a
              seasonal quote&quot;) so anyone who picks up the lead next knows
              the story.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className={caseH3}>
              8. The Invoices &amp; Estimates tool: from lead to quote in
              minutes
            </h3>
            <Shot
              src={images[6]}
              alt="Create estimate dialog prefilled with the customer's details and requested service"
              caption={SAMPLE_CAPTION}
              {...EARL_SIZE}
            />
            <Shot
              src={images[7]}
              alt="Invoices and estimates list in the Earl's dashboard"
              caption={SAMPLE_CAPTION}
              size="small"
              {...EARL_SIZE}
            />
            <p className="leading-relaxed text-muted">
              Getting from &quot;someone asked for a quote&quot; to
              &quot;here&apos;s your quote&quot; is where small service
              businesses lose the most time. So we built quoting right into the
              dashboard.
            </p>
            <p className="leading-relaxed text-muted">
              <strong className="text-foreground">Start from the lead.</strong>{" "}
              Open any lead&apos;s actions menu or detail window and choose
              &quot;Create Estimate&quot;. The builder opens with the
              customer&apos;s name, email and phone already filled in, and the
              service they asked for (for example &quot;Snow Seasonal&quot;)
              already sitting in the first line item. There&apos;s nothing to
              copy and paste and nothing to retype.
            </p>
            <p className="leading-relaxed text-muted">
              <strong className="text-foreground">
                Estimate or invoice, same screen.
              </strong>{" "}
              A toggle at the top switches the document between an estimate and
              an invoice, so the same tool handles the quote before the job and
              the bill after it.
            </p>
            <p className="leading-relaxed text-muted">
              <strong className="text-foreground">
                Everything a quote needs:
              </strong>
            </p>
            <ul className="list-disc space-y-2 pl-5 leading-relaxed text-muted">
              <li>
                <strong className="text-foreground">Client details:</strong>{" "}
                name, email, phone and a service address.
              </li>
              <li>
                <strong className="text-foreground">Due date:</strong> so the
                customer knows when the quote expires or when payment is due.
              </li>
              <li>
                <strong className="text-foreground">Line items:</strong> a
                description, quantity and unit price on each line. &quot;Add
                Item&quot; adds as many lines as the job needs, such as a
                seasonal contract plus salting, or a lawn package plus spring
                cleanup.
              </li>
              <li>
                <strong className="text-foreground">Tax rate:</strong> defaults
                to 13%, Ontario&apos;s HST, and can be changed when needed.
              </li>
              <li>
                <strong className="text-foreground">Live totals:</strong> the
                subtotal, tax and total update as you type, so there&apos;s no
                calculator and no spreadsheet.
              </li>
              <li>
                <strong className="text-foreground">Notes:</strong> room for
                terms, service details or a thank-you.
              </li>
            </ul>
            <p className="leading-relaxed text-muted">
              <strong className="text-foreground">
                All documents in one list.
              </strong>{" "}
              Every estimate and invoice is saved in the Invoices &amp;
              Estimates tab. The list can be filtered by type, and there are
              buttons to start a new estimate or invoice from scratch for
              walk-in or phone customers who never filled in the form.
            </p>
            <p className="leading-relaxed text-muted">
              For an owner, that means a quote can go out the same day the lead
              comes in, while the customer is still deciding, instead of at the
              end of the week.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className={caseH3}>9. An overview at a glance</h3>
            <Shot
              src={images[0]}
              alt="Earl's admin overview with leads, page views, conversion, documents, and a seven-day chart"
              caption={SAMPLE_CAPTION}
              {...EARL_SIZE}
            />
            <p className="leading-relaxed text-muted">
              The Overview tab shows total leads, page views, the
              visitor-to-lead conversion rate and the number of documents
              created, with a chart of the last seven days. In ten seconds an
              owner can tell whether the site is bringing in work this week.
            </p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className={caseH2}>Why it matters for owners</h2>
          <ul className="list-disc space-y-2 pl-5 leading-relaxed text-muted">
            <li>
              <strong className="text-foreground">
                Fewer leads slip through.
              </strong>{" "}
              Every request has a status, a priority and notes, instead of
              sitting unread in an inbox.
            </li>
            <li>
              <strong className="text-foreground">Quotes go out faster.</strong>{" "}
              Estimates and invoices start from the lead, with line items, 13%
              HST and live totals, so there&apos;s no retyping and no separate
              invoicing app for the basics.
            </li>
            <li>
              <strong className="text-foreground">
                The website matches the season.
              </strong>{" "}
              One switch turns the site into a snow removal site in November
              and back again in spring.
            </li>
            <li>
              <strong className="text-foreground">
                Promotions are in your hands.
              </strong>{" "}
              Launch or end an early-booking offer yourself, with a countdown
              that gives people a reason to act now.
            </li>
            <li>
              <strong className="text-foreground">
                You can see what&apos;s working.
              </strong>{" "}
              Page views, leads and conversion sit on one screen.
            </li>
            <li>
              <strong className="text-foreground">It fits the business.</strong>{" "}
              It&apos;s built around how Earl&apos;s actually sells, not a
              generic template full of features nobody uses.
            </li>
          </ul>
        </section>

        <section id="rfp" className="scroll-mt-28 space-y-4">
          <h2 className={caseH2}>Want a lead engine for your business?</h2>
          <p className="leading-relaxed text-muted">
            If you run a landscaping, snow removal, cleaning, renovation or
            other local service business in Hamilton, Burlington, Stoney Creek,
            Ancaster, Dundas, Grimsby or anywhere nearby, we can build
            something like this around how you work.
          </p>
          <p className="leading-relaxed text-muted">
            <a
              href="mailto:sales@vevade.com?subject=Lead%20engine%20for%20my%20business"
              className={linkClass}
            >
              Talk to Vevade about your lead engine →
            </a>{" "}
            or email{" "}
            <a href="mailto:sales@vevade.com" className={linkClass}>
              sales@vevade.com
            </a>
            .
          </p>
        </section>
      </CaseStudyPage>
    </>
  );
}
