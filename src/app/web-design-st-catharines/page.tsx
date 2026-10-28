import { ServiceLanding, TextLink } from "@/components/ServiceLanding";
import { pageMetadata } from "@/lib/seo";

const title = "Web Design in St. Catharines & Niagara | Vevade";
const description =
  "Vevade designs and builds websites and Shopify stores for St. Catharines and the Niagara region. Since 2012. Projects from $1,999. Request a free proposal.";

export const metadata = pageMetadata({
  title,
  description,
  path: "/web-design-st-catharines",
});

const faqs = [
  {
    question: "Do you design websites for St. Catharines businesses?",
    answer:
      "Yes. Vevade designs and builds custom websites and Shopify stores for St. Catharines and the surrounding Niagara region. The studio is in the Hamilton area and has been operating since 2012. Reach us at sales@vevade.com or 289-855-0968.",
  },
  {
    question: "Which Niagara communities do you work with?",
    answer:
      "St. Catharines is the centre of this page, and we also take work in Niagara Falls, Niagara-on-the-Lake, Welland, Thorold, Lincoln, and Grimsby. If you are elsewhere in the Niagara region, ask. The limit is whether we can do the work well, not a hard postal-code boundary.",
  },
  {
    question: "What does a Niagara web project cost?",
    answer:
      "Projects start at $1,999 CAD for a focused website or Shopify setup. Broader stores and custom web apps are quoted after a short call, as a fixed scope. Hourly updates are $70/hour. You see the price in the proposal before we start.",
  },
  {
    question: "Is Shopify a good fit for Niagara producers and retailers?",
    answer:
      "Often, yes, when you ship or sell products. We handle store setup, theme work, migrations, and the shipping and checkout settings the business actually uses. Tour operators and trades that do not sell a catalogue usually need a custom site instead. We will recommend one path.",
  },
  {
    question: "How do you run a project from Hamilton?",
    answer:
      "Kickoff is a 30-minute call. You review staging in a browser. When an in-person meeting is the faster way to make a decision, we can meet in Hamilton or arrange time in Niagara. You still get a written scope, and you own the domain, hosting, and code at the end.",
  },
  {
    question: "How long will a St. Catharines site take?",
    answer:
      "A simple brochure site or a standard Shopify launch often lands in a few weeks after the content is ready. Seasonal businesses should start before the rush they care about — a summer tourism site begun in June is already late. The proposal names the timeline for your scope.",
  },
] as const;

export default function WebDesignStCatharinesPage() {
  return (
    <ServiceLanding
      path="/web-design-st-catharines"
      eyebrow="St. Catharines and the Niagara region"
      h1="Web design for St. Catharines and the Niagara region"
      faqHeading="Questions about web design in Niagara"
      faqs={faqs}
      intro={
        <>
          <p>
            Niagara searches are local and seasonal. A St. Catharines
            contractor, a Niagara-on-the-Lake producer, a Niagara Falls tour
            desk, and a Welland manufacturer do not need the same homepage,
            and none of them are helped by a theme stuffed with city names.
            Vevade is a Hamilton web design and development studio, founded in
            2012, that builds custom websites and Shopify stores for St.
            Catharines and the Niagara region — including Niagara Falls,
            Niagara-on-the-Lake, Welland, Thorold, Lincoln, and Grimsby.
          </p>
          <p>
            We&apos;re fewer than five people. You work with the developers
            doing the work. A focused site or Shopify setup starts at $1,999.
            Updates are $70/hour. Projects usually run on video. When a
            meeting is worth the drive, we do it in Hamilton or in Niagara,
            scheduled ahead of time.
          </p>
        </>
      }
    >
      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Match the site to how you sell
        </h2>
        <p className="leading-relaxed text-muted">
          Hospitality and tourism need a clear offer, real hours, and a way
          to book or visit — not a wall of stock photography. Product
          businesses, including food and retail, usually belong on{" "}
          <TextLink href="/shopify-development">Shopify</TextLink>, where
          checkout and shipping already exist. Trades and professional
          services need a fast site and a quote path. We pick one of those
          and stick to it so the project doesn&apos;t collect features nobody
          operates.
        </p>
        <p className="leading-relaxed text-muted">
          Examples of shipped work are on the{" "}
          <TextLink href="/#work">homepage</TextLink>. They show the kind of
          build, not a Niagara client list we don&apos;t have. The studio
          itself is described on the{" "}
          <TextLink href="/web-design-hamilton">Hamilton page</TextLink>.{" "}
          <TextLink href="/web-design-burlington">
            Burlington and Oakville
          </TextLink>{" "}
          have their own page when the business is on that side of the lake.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Distance from the Hamilton studio
        </h2>
        <p className="leading-relaxed text-muted">
          Since 2012 the useful part of a project has been the scope, not the
          commute. You get a written proposal, a timeline, and ownership of
          the domain, hosting, and code. Staging is a link, so a review
          doesn&apos;t wait on a meeting room in St. Catharines. If something
          is easier to decide in person, we say so and book it.
        </p>
        <p className="leading-relaxed text-muted">
          Email{" "}
          <TextLink href="mailto:sales@vevade.com">sales@vevade.com</TextLink>{" "}
          or call{" "}
          <TextLink href="tel:+1-289-855-0968">289-855-0968</TextLink> with
          what you sell and when you need it live. If we&apos;re the wrong
          fit, we&apos;ll say that on the first call.
        </p>
      </section>
    </ServiceLanding>
  );
}
