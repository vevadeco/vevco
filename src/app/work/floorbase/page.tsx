import { Shot, Walkthrough } from "@/components/CaseStudyMedia";
import { CaseStudyPage, caseH2, caseH3 } from "@/components/CaseStudyPage";
import { JsonLd } from "@/components/JsonLd";
import {
  articleJsonLd,
  breadcrumbJsonLd,
  DEMO_CAPTION,
  FLOOR_DIR,
  FLOOR_INVOICE_SIZE,
  FLOOR_PATH,
  FLOOR_SIZE,
  imageSrc,
  videoObjectJsonLd,
} from "@/lib/case-studies";
import { caseStudyMetadata } from "@/lib/seo";
import { faqPageJsonLd, SITE_URL } from "@/lib/site";

const title = "FloorBase: Flooring Store Software Built by Vevade";
const description =
  "See how Vevade built FloorBase for Canadian flooring stores: leads, square-foot quotes, invoices with provincial tax, purchase orders, installs and commissions.";
const h1 = "One system from first enquiry to paid invoice: FloorBase";

const faqs = [
  {
    question: "What is FloorBase?",
    answer:
      "FloorBase is cloud software for independent flooring stores in Canada. It brings leads, customers, quotes, invoices, payments, purchase orders, returns, installs, deliveries and commissions into one system. Vevade designed and built it.",
  },
  {
    question: "Does FloorBase include a CRM?",
    answer:
      "Yes. The Leads pipeline is FloorBase's CRM. It tracks each lead's source (Website, Facebook, Manual, Referral or Other) and status (new, contacted, qualified, proposal, won or lost), and customers are kept in a Customers database.",
  },
  {
    question: "How does FloorBase work out box quantities?",
    answer:
      "Enter the customer's square footage on a quote and FloorBase calculates the number of boxes from the product's square feet per box, along with the actual square footage being sold.",
  },
  {
    question: "Does FloorBase handle Canadian sales tax?",
    answer:
      "Yes. FloorBase applies your store's provincial sales tax rate to every invoice and includes a sales tax report.",
  },
  {
    question: "Does FloorBase connect to QuickBooks?",
    answer:
      "FloorBase supports QuickBooks CSV import and export, so your bookkeeper can move data between the two.",
  },
  {
    question: "How much does FloorBase cost?",
    answer:
      "Growth is $149 CAD/month ($119/month billed annually) for up to 5 users. Pro is $199 CAD/month ($159/month billed annually) with unlimited users. There are no setup fees.",
  },
] as const;

const images = [
  imageSrc(FLOOR_DIR, "01-leads-pipeline-list.webp"),
  imageSrc(FLOOR_DIR, "02-lead-detail-status.webp"),
  imageSrc(FLOOR_DIR, "03-quote-sqft-to-boxes.webp"),
  imageSrc(FLOOR_DIR, "04-invoice-items-po-payments.webp"),
  imageSrc(FLOOR_DIR, "05-commissions-paid-invoices.webp"),
  imageSrc(FLOOR_DIR, "06-installs-calendar.webp"),
];

const walkthroughs = [
  {
    id: "1246321077",
    title: "FloorBase: Leads Pipeline",
    description:
      "Track every flooring lead in one place: where it came from, the project, and its stage from new to won. Request a demo at floorbase.io.",
    duration: "PT1M36S",
    uploadDate: "2026-11-12T10:58:23",
    thumbnailUrl:
      "https://i.vimeocdn.com/video/2225687634-26db59ea5b7605c555dcc85fd43c716fa8fd61583a02a8fe60132c77096145a0-d_295x166?region=us",
  },
  {
    id: "1246322238",
    title: "FloorBase: Quote to Invoice to Payment",
    description:
      "Turn a flooring estimate into an invoice in one click, and track deposits and payments against the balance due. Request a demo at floorbase.io.",
    duration: "PT1M52S",
    uploadDate: "2026-11-12T11:02:05",
    thumbnailUrl:
      "https://i.vimeocdn.com/video/2225690063-84ce9da9851f5ff2e913fdb26206b2a3e55a01f1e6b70e5ff35e584f6d54ef0d-d_295x166?region=us",
  },
  {
    id: "1245998964",
    title: "FloorBase: Commissions & Square-Foot Quotes",
    description:
      "How FloorBase converts a customer's square footage into whole boxes on a quote, and how sales commissions are tracked per invoice. Request a demo at floorbase.io.",
    duration: "PT2M47S",
    uploadDate: "2026-11-11T16:06:59",
    thumbnailUrl:
      "https://i.vimeocdn.com/video/2225283020-f0043a4e01ad43313f0324647b47a62c9a0c9a5d5f9e245a826a8789fd701b30-d_295x166?region=us",
  },
  {
    id: "1245830032",
    title: "FloorBase — Installations & Deliveries",
    description:
      "A short FloorBase walkthrough of installations and deliveries: how a job type on an invoice creates the install or delivery job, assigning contractors and sending work orders, delivery orders, the contractor phonebook, and the shared calendar. Made in Canada for flooring stores. floorbase.io",
    duration: "PT6M48S",
    uploadDate: "2026-11-11T09:47:34",
    thumbnailUrl:
      "https://i.vimeocdn.com/video/2226631851-2a18bb2a31623c883a2ea0e98f276a0c452984e9f244d6ca7a4ecb7d5adc3635-d_295x166?region=us",
  },
] as const;

const linkClass =
  "font-semibold text-accent underline decoration-accent/30 underline-offset-2 hover:decoration-accent";

export const metadata = caseStudyMetadata({
  title,
  description,
  path: FLOOR_PATH,
});

export default function FloorbasePage() {
  return (
    <>
      <JsonLd
        data={articleJsonLd({
          headline: h1,
          description,
          path: FLOOR_PATH,
          images,
          about: {
            "@type": "SoftwareApplication",
            name: "FloorBase",
            url: "https://floorbase.io",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            offers: [
              {
                "@type": "Offer",
                name: "Growth",
                price: "149",
                priceCurrency: "CAD",
                description: "149 CAD per month",
              },
              {
                "@type": "Offer",
                name: "Pro",
                price: "199",
                priceCurrency: "CAD",
                description: "199 CAD per month",
              },
            ],
          },
        })}
      />
      <JsonLd data={faqPageJsonLd(faqs)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", url: `${SITE_URL}/` },
          { name: "Work", url: `${SITE_URL}/#work` },
          { name: "FloorBase", url: `${SITE_URL}${FLOOR_PATH}` },
        ])}
      />
      {walkthroughs.map((video) => (
        <JsonLd
          key={video.id}
          data={videoObjectJsonLd({
            name: video.title,
            description: video.description,
            embedUrl: `https://player.vimeo.com/video/${video.id}`,
            thumbnailUrl: video.thumbnailUrl,
            uploadDate: video.uploadDate,
            duration: video.duration,
          })}
        />
      ))}
      <CaseStudyPage
        crumb="FloorBase"
        h1={h1}
        faqs={faqs}
        lede="FloorBase is cloud software for independent flooring stores in Canada. Vevade designed and built it to replace the mix of spreadsheets, notebooks, email threads and separate apps that most stores use to run the day. A lead comes in, becomes a quote measured in square feet and boxes, turns into an invoice with the right provincial sales tax, gets paid, and is followed through to purchase orders, deliveries, installs and commissions. All of it happens in one place."
      >
        <section className="space-y-4">
          <h2 className={caseH2}>
            The problem: flooring stores run on disconnected tools
          </h2>
          <p className="leading-relaxed text-muted">
            Talk to the owner of an independent flooring store in Ontario,
            Alberta or British Columbia and you&apos;ll hear a familiar story.
            The business works, but the paperwork is spread across too many
            places:
          </p>
          <ul className="list-disc space-y-2 pl-5 leading-relaxed text-muted">
            <li>
              <strong className="text-foreground">Leads live everywhere.</strong>{" "}
              Website enquiries land in one inbox, Facebook messages in another,
              walk-ins on a sticky note and referrals in someone&apos;s head.
              Nobody can say which ones were followed up.
            </li>
            <li>
              <strong className="text-foreground">Quoting is maths by hand.</strong>{" "}
              A customer needs 550 square feet. How many boxes is that, and how
              many square feet is the store actually selling? Staff work it out
              on a calculator, and mistakes come back as short orders or
              returns.
            </li>
            <li>
              <strong className="text-foreground">
                Sales tax is a manual step.
              </strong>{" "}
              Every invoice needs the right GST, HST or PST treatment for the
              province, and the year-end tax total has to be rebuilt from a
              pile of invoices.
            </li>
            <li>
              <strong className="text-foreground">Money is hard to see.</strong>{" "}
              Which invoices are still unpaid? How much commission does each
              salesperson have coming on paid jobs? It usually takes a
              spreadsheet to find out.
            </li>
            <li>
              <strong className="text-foreground">
                Ordering and scheduling are separate jobs.
              </strong>{" "}
              Purchase orders are typed up again from the invoice, and installs
              and deliveries are tracked on a wall calendar or in a group chat.
            </li>
          </ul>
          <p className="leading-relaxed text-muted">
            Generic CRMs and accounting apps solve one piece each, and none of
            them understands square feet per box. Flooring stores needed one
            system that did.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className={caseH2}>What Vevade built</h2>
          <p className="leading-relaxed text-muted">
            We built FloorBase as a complete web application that covers the
            whole job:
          </p>
          <ol className="list-decimal space-y-2 pl-5 leading-relaxed text-muted">
            <li>
              <strong className="text-foreground">A leads pipeline that works as the store&apos;s CRM</strong>{", plus a Customers database."}
            </li>
            <li>
              <strong className="text-foreground">
                Quotes, estimates and invoices
              </strong>{" "}
              that calculate box quantities from square footage and apply the
              store&apos;s provincial tax rate.
            </li>
            <li>
              <strong className="text-foreground">Back-office tools</strong> for
              payments, purchase orders, returns, commissions, installs and
              deliveries, and the sales tax report.
            </li>
          </ol>
          <p className="leading-relaxed text-muted">
            It&apos;s made in Canada for Canadian stores. Prices are in Canadian
            dollars, and the tax setup follows Canadian provinces.
          </p>
        </section>

        <section className="space-y-12">
          <h2 className={caseH2}>Feature walkthrough</h2>

          <div className="space-y-4">
            <h3 className={caseH3}>
              1. The Leads pipeline: a CRM built for flooring
            </h3>
            <Shot
              src={images[0]}
              alt="FloorBase Leads pipeline listing enquiries by source, project and status"
              caption={DEMO_CAPTION}
              {...FLOOR_SIZE}
            />
            <p className="leading-relaxed text-muted">
              Every enquiry goes into one Leads page. Each lead records where
              it came from (Website, Facebook, Manual, Referral or Other), the
              project type and an estimated square footage, so the store knows
              the size of the job before the first call. When FloorBase builds
              the store&apos;s website, enquiries from that site go straight
              into Leads. On the Pro plan, Facebook Lead Ads come in too.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className={caseH3}>2. Move every lead from new to won</h3>
            <div className="grid items-start gap-6 lg:grid-cols-2">
              <Shot
                src={images[1]}
                alt="A FloorBase lead with status set to proposal and estimated square footage"
                caption={DEMO_CAPTION}
                {...FLOOR_SIZE}
              />
              <p className="leading-relaxed text-muted">
                Leads move through six statuses: new, contacted, qualified,
                proposal, won and lost. Notes on each lead keep the history in
                one place (&quot;Proposal sent, awaiting reply&quot;), and the
                status filter shows exactly which leads still need a call.
                Customers who buy are kept in the Customers database for the
                next job.
              </p>
            </div>
            <Walkthrough id={walkthroughs[0].id} title={walkthroughs[0].title} />
          </div>

          <div className="space-y-4">
            <h3 className={caseH3}>3. Quotes in square feet, sold in boxes</h3>
            <Shot
              src={images[2]}
              alt="FloorBase quote converting square footage into boxes"
              caption={DEMO_CAPTION}
              {...FLOOR_SIZE}
            />
            <p className="leading-relaxed text-muted">
              This is the feature flooring staff notice first. Enter the
              customer&apos;s square footage and FloorBase works out how many
              boxes to sell, based on the square feet per box set on the
              product. It also shows the actual square footage the customer is
              buying, with the price per square foot and the line total. In the
              example, a 30 sq ft requirement becomes 3 boxes covering 35.40 sq
              ft. No calculator, no rounding mistakes.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className={caseH3}>4. From estimate to invoice to payment</h3>
            <Shot
              src={images[3]}
              alt="FloorBase invoice with box quantities, purchase orders and payment history"
              caption={DEMO_CAPTION}
              {...FLOOR_INVOICE_SIZE}
            />
            <p className="leading-relaxed text-muted">
              An estimate becomes an invoice in one step, so nothing is
              retyped. Each invoice uses the store&apos;s provincial sales tax
              rate, and the subtotal, tax and total are worked out
              automatically. Payments are recorded against the invoice, building
              a payment history that shows the balance still owing. Customers
              can also pay invoices online with Stripe or Square. An unpaid
              filter on the invoices list shows who still owes money.
            </p>
            <Walkthrough id={walkthroughs[1].id} title={walkthroughs[1].title} />
          </div>

          <div className="space-y-4">
            <h3 className={caseH3}>
              5. Purchase orders and returns, straight from the invoice
            </h3>
            <Shot
              src={images[3]}
              alt="FloorBase invoice with box quantities, purchase orders and payment history"
              caption={DEMO_CAPTION}
              {...FLOOR_INVOICE_SIZE}
            />
            <p className="leading-relaxed text-muted">
              Once the sale is made, purchase orders are created from the
              invoice and emailed to each supplier, without typing the order up
              again. If something comes back, returns are handled in FloorBase
              too.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className={caseH3}>6. Commissions on paid invoices</h3>
            <Shot
              src={images[4]}
              alt="FloorBase commissions tracked on paid invoices"
              caption={DEMO_CAPTION}
              {...FLOOR_SIZE}
            />
            <p className="leading-relaxed text-muted">
              The Commissions page lists each invoice with its profit, the
              commission rate, the commission amount and whether it&apos;s paid
              or unpaid. Commission is tracked on paid invoices, so salespeople
              and owners work from the same numbers.
            </p>
            <Walkthrough id={walkthroughs[2].id} title={walkthroughs[2].title} />
          </div>

          <div className="space-y-4">
            <h3 className={caseH3}>7. Installs and deliveries on one calendar</h3>
            <Shot
              src={images[5]}
              alt="FloorBase calendar showing scheduled installation jobs"
              caption={DEMO_CAPTION}
              {...FLOOR_SIZE}
            />
            <p className="leading-relaxed text-muted">
              Invoices can be marked as installation jobs, deliveries or
              pickups. Installs and deliveries are scheduled from there and
              appear on a shared calendar, so the team can see the week at a
              glance instead of checking a whiteboard.
            </p>
            <Walkthrough id={walkthroughs[3].id} title={walkthroughs[3].title} />
          </div>

          <div className="space-y-4">
            <h3 className={caseH3}>8. Canadian sales tax and year-end reporting</h3>
            <p className="leading-relaxed text-muted">
              Every invoice carries the store&apos;s provincial tax rate, and
              FloorBase includes a sales tax report, so filing time starts in
              FloorBase instead of a pile of invoices and a spreadsheet.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className={caseH3}>
              9. The details that make it easy to use every day
            </h3>
            <ul className="list-disc space-y-2 pl-5 leading-relaxed text-muted">
              <li>
                <strong className="text-foreground">Address autocomplete</strong>{" "}
                fills in customer and job addresses as you type.
              </li>
              <li>
                <strong className="text-foreground">
                  Two-factor authentication (2FA)
                </strong>{" "}
                protects the store&apos;s account.
              </li>
              <li>
                <strong className="text-foreground">
                  QuickBooks CSV import and export
                </strong>{" "}
                moves data in and out for the bookkeeper.
              </li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className={caseH2}>Why it matters for flooring store owners</h2>
          <ul className="list-disc space-y-2 pl-5 leading-relaxed text-muted">
            <li>
              <strong className="text-foreground">Fewer lost leads.</strong>{" "}
              Every enquiry has a source and a status, so nothing waits in an
              inbox.
            </li>
            <li>
              <strong className="text-foreground">Accurate quotes.</strong> Box
              quantities come from the square footage, so the order is right the
              first time.
            </li>
            <li>
              <strong className="text-foreground">
                Tax handled on every invoice.
              </strong>{" "}
              The provincial rate is applied for you, and the sales tax report
              is ready when you need it.
            </li>
            <li>
              <strong className="text-foreground">Faster cash.</strong> Customers
              can pay online, and the unpaid filter shows what&apos;s still
              owed.
            </li>
            <li>
              <strong className="text-foreground">Less retyping.</strong>{" "}
              Estimates become invoices, and invoices become purchase orders
              emailed to suppliers.
            </li>
            <li>
              <strong className="text-foreground">One schedule.</strong> Installs
              and deliveries share one calendar.
            </li>
            <li>
              <strong className="text-foreground">Clear commissions.</strong>{" "}
              Salespeople see what they&apos;ve earned on paid invoices.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className={caseH2}>Pricing</h2>
          <p className="leading-relaxed text-muted">
            FloorBase has two plans, both in Canadian dollars with no setup
            fees:
          </p>
          <ul className="list-disc space-y-2 pl-5 leading-relaxed text-muted">
            <li>
              <strong className="text-foreground">Growth:</strong> $149
              CAD/month, or $119/month billed annually, for up to 5 users.
            </li>
            <li>
              <strong className="text-foreground">Pro:</strong> $199 CAD/month,
              or $159/month billed annually, with unlimited users. Pro adds
              Facebook Lead Ads.
            </li>
          </ul>
          <p className="leading-relaxed text-muted">
            See{" "}
            <a href="https://floorbase.io" className={linkClass}>
              floorbase.io
            </a>{" "}
            for current plan details or to request a personalised demo.
          </p>
        </section>

        <section id="rfp" className="scroll-mt-28 space-y-4">
          <h2 className={caseH2}>
            Need software built around how your business works?
          </h2>
          <p className="leading-relaxed text-muted">
            FloorBase shows what Vevade does: we learn how an industry actually
            works and build software that fits it. If you run a Canadian
            business that&apos;s outgrown spreadsheets and disconnected apps,
            we&apos;d like to hear about it.
          </p>
          <p className="leading-relaxed text-muted">
            <a
              href="mailto:sales@vevade.com?subject=Custom%20software%20for%20my%20business"
              className={linkClass}
            >
              Talk to Vevade about your software →
            </a>{" "}
            or email{" "}
            <a href="mailto:sales@vevade.com" className={linkClass}>
              sales@vevade.com
            </a>
            .
          </p>
          <p className="leading-relaxed text-muted">
            Run a flooring store?{" "}
            <a href="https://floorbase.io" className={linkClass}>
              See FloorBase →
            </a>
          </p>
        </section>
      </CaseStudyPage>
    </>
  );
}
