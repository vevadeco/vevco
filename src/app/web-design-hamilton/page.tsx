import { ServiceLanding, TextLink } from "@/components/ServiceLanding";
import { pageMetadata } from "@/lib/seo";

const title = "Web Development & Shopify Design in Hamilton, ON | Vevade";
const description =
  "Vevade builds custom websites and Shopify stores for Hamilton businesses. Projects from $1,999. Local studio since 2012. Request a free proposal.";

export const metadata = pageMetadata({
  title,
  description,
  path: "/web-design-hamilton",
});

const faqs = [
  {
    question: "Who is a good web development company in Hamilton, Ontario?",
    answer:
      "Look for a studio that builds custom sites (not only drag-and-drop templates), publishes clear contact details, and can show local work. Vevade is a Hamilton-area web design and development studio founded in 2012. We build custom websites, Shopify stores and web apps for businesses in Hamilton, Burlington, Oakville and St. Catharines. Email sales@vevade.com or call 289-855-0968 for a free proposal.",
  },
  {
    question: "How much does web design or web development cost in Hamilton?",
    answer:
      "Scope drives price. At Vevade, projects start at $1,999 CAD for a focused site or Shopify setup. Larger custom stores and web applications are quoted fixed-scope after a short discovery call. Hourly work and updates are $70/hour. You get a written proposal before any build starts — no surprise retainers.",
  },
  {
    question: "Do you build Shopify stores for Hamilton and Burlington businesses?",
    answer:
      "Yes. Shopify e-commerce is a core service: new store setup, theme customization, migrations from other platforms, product/collection structure, checkout and shipping configuration, and app integrations. If product sales are the core of the business, Shopify is usually the fastest path; if you need custom workflows, we may recommend a custom web app instead and will say so honestly.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We are based in the Hamilton area and regularly work with clients in Hamilton, Burlington, Oakville, St. Catharines and the Niagara region. Most projects run over video and shared boards; in-person meetings in Hamilton are available when useful.",
  },
  {
    question: "How long does a typical website project take?",
    answer:
      "A straightforward brochure site or standard Shopify launch often takes a few weeks once content and scope are confirmed. Custom applications and larger catalogues take longer. Every proposal includes a timeline so you know what done looks like before we start.",
  },
  {
    question: "Why choose a small local studio instead of a large Toronto agency?",
    answer:
      "With fewer than five people, you get direct access to the developers building your site, clearer pricing, and someone who understands Hamilton and Niagara search intent — not a rotating account team. You keep ownership of the domain, hosting and code. Start with a free 30-minute discovery call at sales@vevade.com or 289-855-0968.",
  },
] as const;

export default function WebDesignHamiltonPage() {
  return (
    <ServiceLanding
      path="/web-design-hamilton"
      eyebrow="Hamilton, Ontario"
      h1="Web design and development in Hamilton"
      faqHeading="Questions about web design in Hamilton"
      faqs={faqs}
      intro={
        <>
          <p>
            Vevade is a Hamilton, Ontario web design and development studio
            building fast, search-friendly websites and Shopify stores for
            small businesses across the city — from downtown and Westdale to
            Stoney Creek, Ancaster, Dundas and the Mountain. Since 2012
            we&apos;ve helped local owners replace template sites with custom
            builds that load quickly, rank for the services they sell, and
            turn visitors into calls and orders.
          </p>
          <p>
            We are a small team (fewer than five people), so you work directly
            with the people writing the code. Projects start at $1,999, with
            ongoing work at $70/hour. We also serve Burlington, Oakville, St.
            Catharines and the wider Niagara region when a Hamilton business
            needs a partner who already knows the Golden Horseshoe market.
          </p>
        </>
      }
    >
      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          What a Hamilton project usually is
        </h2>
        <p className="leading-relaxed text-muted">
          Most Hamilton engagements are one of three things: a custom
          marketing site, a{" "}
          <TextLink href="/shopify-development">Shopify store</TextLink>, or a
          small web app such as a lead inbox. We write the scope down —
          pages, integrations, and what finished means — before anyone starts
          building. You keep the domain, the hosting account, and the code.
        </p>
        <p className="leading-relaxed text-muted">
          Published Hamilton work includes the Earl&apos;s Landscaping lead
          system, a quote site and admin dashboard for a local landscaping
          company. It&apos;s on the{" "}
          <TextLink href="/#work">work section of the homepage</TextLink>. We
          don&apos;t publish review scores or rankings we don&apos;t have.
        </p>
        <p className="leading-relaxed text-muted">
          The same studio designs sites for{" "}
          <TextLink href="/web-design-burlington">
            Burlington and Oakville
          </TextLink>{" "}
          and for{" "}
          <TextLink href="/web-design-st-catharines">
            St. Catharines and the Niagara region
          </TextLink>
          . If the work is really an online store, start with the Shopify
          page rather than forcing a brochure template to take payments.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          How an engagement runs
        </h2>
        <p className="leading-relaxed text-muted">
          It starts with a free 30-minute discovery call. Within about 48
          hours you get a fixed-scope proposal with a timeline. A
          straightforward site or a standard store launch often takes a few
          weeks once the content is in. Custom applications and large
          catalogues take longer, and the proposal says so instead of hiding
          it in a change order.
        </p>
        <p className="leading-relaxed text-muted">
          Meetings in Hamilton are easy to arrange when a screen-share
          isn&apos;t the right room. Otherwise the work happens on video,
          with staging links you can review as we go. Email{" "}
          <TextLink href="mailto:sales@vevade.com">sales@vevade.com</TextLink>{" "}
          or call{" "}
          <TextLink href="tel:+1-289-855-0968">289-855-0968</TextLink> and
          we&apos;ll tell you whether we&apos;re a fit.
        </p>
      </section>
    </ServiceLanding>
  );
}
