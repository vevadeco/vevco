import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { CONTACT_EMAIL } from "@/lib/site";

const cards = [
  {
    href: "/work/earls-landscaping-lead-engine",
    title: "A year-round lead engine for Earl's Landscaping",
    summary:
      "A website and private dashboard that turn visitors into quote requests, track every lead, build estimates and invoices from them, and switch the whole site to snow season in one click.",
    tag: "Website · Lead dashboard · Estimates & invoices",
    src: "/images/work/earls-landscaping-lead-engine/11-public-hero-quote-form-promo-banner.png",
    alt: "Earl's Landscaping homepage with quote form and promo countdown banner",
  },
  {
    href: "/work/floorbase",
    title: "FloorBase: software for Canadian flooring stores",
    summary:
      "A cloud system that takes a flooring store from first enquiry to paid invoice: leads, square-foot quotes that calculate boxes, invoices with provincial tax, purchase orders, installs and commissions.",
    tag: "SaaS product · CRM · Quotes, invoices & scheduling",
    src: "/images/work/floorbase/03-quote-sqft-to-boxes.webp",
    alt: "FloorBase quote converting 30 square feet into 3 boxes",
  },
] as const;

export function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="scroll-mt-28 bg-white px-4 py-20 sm:px-6 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn className="mb-14 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Case studies
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Real software we&apos;ve designed and built for Canadian businesses,
            from a seasonal lead engine to a complete system for running a
            flooring store.
          </p>
        </FadeIn>

        <div className="grid items-stretch gap-6 md:grid-cols-2">
          {cards.map((card, index) => (
            <FadeIn key={card.href} delay={index * 80} className="h-full">
              <Link
                href={card.href}
                className="card-lift flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <div className="relative aspect-video overflow-hidden bg-slate-100">
                  <Image
                    src={card.src}
                    alt={card.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <p className="text-sm font-medium text-muted">{card.tag}</p>
                  <h3 className="mt-2 text-xl font-bold tracking-tight">
                    {card.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted">{card.summary}</p>
                  <span className="btn-primary btn-sm mt-6 self-start">
                    Read the case study
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        <p className="mt-10 text-center leading-relaxed text-muted">
          Have a business that&apos;s outgrown spreadsheets?{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-semibold text-foreground underline decoration-border underline-offset-2 hover:decoration-foreground"
          >
            Email {CONTACT_EMAIL}
          </a>
        </p>
      </div>
    </section>
  );
}
