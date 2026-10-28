import { ServiceLanding, TextLink } from "@/components/ServiceLanding";
import { pageMetadata } from "@/lib/seo";

const title = "Web Design & Development in Burlington, ON | Vevade";
const description =
  "Vevade builds websites and Shopify stores for Burlington and Oakville businesses. Since 2012. Projects start at $1,999, with updates at $70/hour.";

export const metadata = pageMetadata({
  title,
  description,
  path: "/web-design-burlington",
});

const faqs = [
  {
    question: "Do you take web design projects in Burlington and Oakville?",
    answer:
      "Yes. Vevade is based in the Hamilton area and builds custom websites, Shopify stores, and small web apps for Burlington and Oakville businesses. The studio was founded in 2012. Email sales@vevade.com or call 289-855-0968 to talk through a project.",
  },
  {
    question: "How much does a website cost for a Burlington business?",
    answer:
      "A focused marketing site or Shopify setup starts at $1,999 CAD. Larger catalogues and custom applications are priced as a fixed scope after a discovery call, not as an open retainer. Changes after launch are $70/hour. The proposal lists what is included before work starts.",
  },
  {
    question: "Can a Burlington or Oakville shop sell on Shopify?",
    answer:
      "Yes, when product sales are the point of the site. We set up the store, adjust the theme, organize products and collections, and configure checkout and shipping. If the business sells services rather than products, a custom site with a quote form is often a better fit.",
  },
  {
    question: "Will you meet in person in Burlington or Oakville?",
    answer:
      "Most of the work happens on a video call with a shared screen, which is enough for design review and staging. We can meet in Hamilton, and we will come to Burlington or Oakville when a working session is worth the trip. Book a time rather than dropping in — we don't keep a public storefront.",
  },
  {
    question: "How long does a Burlington website take?",
    answer:
      "Once the scope and the content are confirmed, a straightforward site or a standard Shopify launch is often a few weeks. A large catalogue, a migration, or custom application logic takes longer. The timeline is part of the written proposal.",
  },
  {
    question: "How is this different from hiring a Toronto agency?",
    answer:
      "You work directly with the people building the site. The team is fewer than five, pricing is stated up front, and the project stays yours: domain, hosting, and code. For many Burlington and Oakville companies that is a better fit than a large agency account rotation. The same studio also covers Hamilton and the Niagara region.",
  },
] as const;

export default function WebDesignBurlingtonPage() {
  return (
    <ServiceLanding
      path="/web-design-burlington"
      eyebrow="Burlington and Oakville"
      h1="Web design and development in Burlington and Oakville"
      faqHeading="Questions about Burlington and Oakville web design"
      faqs={faqs}
      intro={
        <>
          <p>
            Burlington and Oakville businesses often need the same outcome
            Hamilton ones do: a site that explains the offer, loads quickly,
            and gives people a clear way to call, book, or buy. The market is
            different. Downtown Burlington retailers, trades toward Aldershot
            and the North Service Road, and Oakville professional firms are
            usually owner-run. They don&apos;t need a Toronto agency process
            for a site that should ship in a few weeks.
          </p>
          <p>
            Vevade is a Hamilton studio, founded in 2012. We design and build
            custom websites, Shopify stores, and small web apps for Burlington
            and Oakville from that studio. The team is fewer than five people.
            Projects start at $1,999, and ongoing work is $70/hour.
          </p>
        </>
      }
    >
      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          The work we take on here
        </h2>
        <p className="leading-relaxed text-muted">
          A typical Burlington or Oakville project is a service-business site
          with a quote or booking path, a{" "}
          <TextLink href="/shopify-development">Shopify store</TextLink> for a
          retailer who also sells in person, or a replacement for a
          page-builder site that has become slow or awkward to edit. We
          recommend one of those and write it into the proposal. We don&apos;t
          bolt a store onto a brochure site just to have another feature.
        </p>
        <p className="leading-relaxed text-muted">
          Published examples live on the{" "}
          <TextLink href="/#work">homepage work section</TextLink>. One of
          them, the Earl&apos;s Landscaping lead system, is Hamilton work —
          useful as a picture of the kind of quote site we build, not as a
          claim that every project is next door. The{" "}
          <TextLink href="/web-design-hamilton">Hamilton page</TextLink>{" "}
          describes that studio in more detail.{" "}
          <TextLink href="/web-design-st-catharines">
            St. Catharines and Niagara
          </TextLink>{" "}
          are covered separately when the business sits further around the
          lake.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Working across the QEW
        </h2>
        <p className="leading-relaxed text-muted">
          Discovery is a 30-minute call. You review staging in the browser,
          and the proposal shows the timeline and the price before a build
          starts. Since 2012 that has been enough for most projects. When a
          working session is genuinely easier in person, we meet in Hamilton
          or travel to Burlington or Oakville.
        </p>
        <p className="leading-relaxed text-muted">
          You leave with the domain, the hosting, and the code in your name.
          Email{" "}
          <TextLink href="mailto:sales@vevade.com">sales@vevade.com</TextLink>{" "}
          or call{" "}
          <TextLink href="tel:+1-289-855-0968">289-855-0968</TextLink> if you
          want a proposal rather than a pitch deck.
        </p>
      </section>
    </ServiceLanding>
  );
}
