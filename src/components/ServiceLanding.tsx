import Link from "next/link";
import { ChevronDown } from "lucide-react";
import type { ReactNode } from "react";
import { ContactDetails } from "@/components/ContactDetails";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { MobileCTA } from "@/components/MobileCTA";
import { RFPForm } from "@/components/RFPForm";
import { faqPageJsonLd, publicPages } from "@/lib/site";

type Faq = {
  question: string;
  answer: string;
};

type ServiceLandingProps = {
  path: string;
  eyebrow: string;
  h1: string;
  intro: ReactNode;
  faqHeading: string;
  faqs: readonly Faq[];
  children: ReactNode;
};

export function TextLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const className =
    "font-semibold text-accent underline decoration-accent/30 underline-offset-2 hover:decoration-accent";

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={className}>
      {children}
    </a>
  );
}

export function ServiceLanding({
  path,
  eyebrow,
  h1,
  intro,
  faqHeading,
  faqs,
  children,
}: ServiceLandingProps) {
  const related = publicPages.filter((page) => page.href !== path);

  return (
    <>
      <JsonLd data={faqPageJsonLd(faqs)} />
      <Header />
      <main className="pb-20 md:pb-0">
        <section className="hero-gradient px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-36">
          <div className="mx-auto max-w-3xl">
            <nav aria-label="Breadcrumb" className="text-sm text-muted">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/" className="hover:text-foreground">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li aria-current="page" className="text-foreground">
                  {h1}
                </li>
              </ol>
            </nav>
            <p className="section-eyebrow mb-3 mt-6">{eyebrow}</p>
            <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
              {h1}
            </h1>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted">
              {intro}
            </div>
            <p className="mt-6 text-sm font-semibold text-foreground">
              Since 2012 · Projects from $1,999 · $70/hour
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#rfp"
                className="inline-flex items-center justify-center rounded-full bg-foreground px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-gray-800"
              >
                Request a free proposal
              </Link>
              <a
                href="tel:+1-289-855-0968"
                className="inline-flex items-center justify-center rounded-full border border-border bg-white/80 px-8 py-3.5 text-base font-semibold text-foreground transition-colors hover:bg-white"
              >
                Call 289-855-0968
              </a>
            </div>
            <ContactDetails className="mt-6 text-sm" />
          </div>
        </section>

        <div className="mx-auto max-w-3xl space-y-16 px-4 py-16 sm:px-6 sm:py-20">
          {children}

          <section aria-labelledby="related-heading">
            <h2
              id="related-heading"
              className="text-2xl font-bold tracking-tight sm:text-3xl"
            >
              Related pages
            </h2>
            <ul className="mt-6 space-y-4">
              <li>
                <Link
                  href="/"
                  className="font-semibold text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground"
                >
                  Vevade homepage
                </Link>
                <p className="mt-1 text-sm leading-relaxed text-muted">
                  Web, app, and Shopify development, plus published work.
                </p>
              </li>
              {related.map((page) => (
                <li key={page.href}>
                  <Link
                    href={page.href}
                    className="font-semibold text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground"
                  >
                    {page.label}
                  </Link>
                  <p className="mt-1 text-sm leading-relaxed text-muted">
                    {page.summary}
                  </p>
                </li>
              ))}
            </ul>
          </section>

          <section id="faq" aria-labelledby="faq-heading" className="scroll-mt-28">
            <h2
              id="faq-heading"
              className="text-2xl font-bold tracking-tight sm:text-3xl"
            >
              {faqHeading}
            </h2>
            <div className="mt-6 space-y-3">
              {faqs.map((faq, index) => (
                <details
                  key={faq.question}
                  open={index === 0}
                  className="group overflow-hidden rounded-2xl border border-border bg-surface"
                >
                  <summary className="faq-summary flex cursor-pointer items-center justify-between gap-4 px-6 py-5 font-semibold">
                    <span>{faq.question}</span>
                    <ChevronDown className="h-5 w-5 shrink-0 text-muted transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="border-t border-border px-6 pb-5 pt-4 leading-relaxed text-muted">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>
        </div>

        <RFPForm />
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}
