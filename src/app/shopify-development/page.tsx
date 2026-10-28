import { ServiceLanding, TextLink } from "@/components/ServiceLanding";
import { pageMetadata } from "@/lib/seo";

const title = "Shopify Development & E-commerce Stores | Vevade";
const description =
  "Shopify store setup, themes, migrations, and apps for Hamilton, Burlington, Oakville, and Niagara. Since 2012. Projects from $1,999.";

export const metadata = pageMetadata({
  title,
  description,
  path: "/shopify-development",
});

const faqs = [
  {
    question:
      "Do you build Shopify stores for Hamilton, Burlington, and Niagara?",
    answer:
      "Yes. Shopify e-commerce is a core Vevade service for businesses in Hamilton, Burlington, Oakville, St. Catharines, and the Niagara region. The studio has been at this since 2012. Email sales@vevade.com or call 289-855-0968 for a free proposal.",
  },
  {
    question: "How much does Shopify development cost?",
    answer:
      "A focused store setup starts at $1,999 CAD. That is the floor, not a quote for a large catalogue or a migration with custom data cleanup. Those are scoped and priced in writing after a discovery call. Ongoing theme and content work is $70/hour.",
  },
  {
    question: "Can you move an existing store onto Shopify?",
    answer:
      "Yes. We map products, collections, and the important URLs, then set redirects where the old platform lets us. Some sources export cleanly and some do not. The proposal says what we can carry over and what has to be rebuilt, instead of promising that every old link will survive.",
  },
  {
    question: "Should I use Shopify or a custom website?",
    answer:
      "Use Shopify when you sell products and want checkout, inventory, and payments without maintaining a custom cart. Use a custom website when the business sells services, needs a quote flow, or runs a workflow a theme would only imitate. Use a custom web app when staff need a tool, not a storefront. We will tell you which of those you are actually buying.",
  },
  {
    question: "Do you build custom Shopify apps?",
    answer:
      "When the store needs something public apps do poorly, yes. Many stores do not need a custom app, and we will not add one to inflate the project. Theme changes and a careful app selection come first.",
  },
  {
    question: "Who owns the Shopify store afterward?",
    answer:
      "You do. The Shopify account, the domain, and the theme stay in your name. We do not hold the store as a condition of the relationship. Later updates are available at $70/hour if you want them, and you are free to hire someone else.",
  },
] as const;

export default function ShopifyDevelopmentPage() {
  return (
    <ServiceLanding
      path="/shopify-development"
      eyebrow="Shopify and e-commerce"
      h1="Shopify development and e-commerce stores"
      faqHeading="Questions about Shopify development"
      faqs={faqs}
      intro={
        <>
          <p>
            If the business sells products, Shopify is usually the shortest
            path to a store you can actually run: catalogue, checkout,
            shipping, and payments, without a custom cart to maintain. Vevade
            is a Hamilton studio that has built websites, web apps, and
            Shopify stores since 2012 for clients in Hamilton, Burlington,
            Oakville, St. Catharines, and the Niagara region.
          </p>
          <p>
            A focused store setup starts at $1,999. Theme changes, app work,
            and later updates are $70/hour. Fewer than five people work here,
            so the person who scopes the store is involved in the build. You
            keep the Shopify account, the theme, and the domain.
          </p>
        </>
      }
    >
      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          What a store build includes
        </h2>
        <p className="leading-relaxed text-muted">
          A new store means products and collections, navigation, the policies
          a checkout actually requires, payments, and shipping rules that
          match how you fulfill — pickup in Hamilton is not the same problem
          as shipping a case of goods across Ontario. Theme work is there so
          the storefront matches the brand instead of a default demo. We add
          apps when a workflow needs them. A stack of unused apps slows the
          theme and the checkout, so we take them out as readily as we add
          them.
        </p>
        <p className="leading-relaxed text-muted">
          Migrations are honest about the source. We map the catalogue and
          the URLs that matter, and we set redirects when the old platform
          gives us something to redirect. We don&apos;t promise that a decade
          of blog URLs will survive a messy export. If the admin needs
          behaviour a theme can&apos;t express, a custom app is a separate
          decision, scoped on its own, not quietly folded into a theme tweak.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          When Shopify is the wrong tool
        </h2>
        <p className="leading-relaxed text-muted">
          A booking desk, a trade calculator, or an internal dashboard is
          often a web app, not a theme bent around a product grid. A company
          that sells services and wants calls, not carts, usually needs a
          custom site. We&apos;ll say that on the discovery call rather than
          sell a store you have to work around.
        </p>
        <p className="leading-relaxed text-muted">
          Local context lives on the city pages:{" "}
          <TextLink href="/web-design-hamilton">Hamilton</TextLink>,{" "}
          <TextLink href="/web-design-burlington">
            Burlington and Oakville
          </TextLink>
          , and{" "}
          <TextLink href="/web-design-st-catharines">
            St. Catharines and Niagara
          </TextLink>
          . Published builds, including platforms that are not stores, are on
          the <TextLink href="/#work">homepage work section</TextLink>. Email{" "}
          <TextLink href="mailto:sales@vevade.com">sales@vevade.com</TextLink>{" "}
          or call{" "}
          <TextLink href="tel:+1-289-855-0968">289-855-0968</TextLink> with a
          link to the current site if you have one.
        </p>
      </section>
    </ServiceLanding>
  );
}
