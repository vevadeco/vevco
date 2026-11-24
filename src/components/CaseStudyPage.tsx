import Link from "next/link";
import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileCTA } from "@/components/MobileCTA";

export type CaseStudyFaq = {
  question: string;
  answer: string;
};

export const caseH2 = "text-2xl font-bold tracking-tight sm:text-3xl";
export const caseH3 = "text-xl font-bold tracking-tight";

export function CaseStudyPage({
  crumb,
  h1,
  lede,
  faqs,
  children,
}: {
  crumb: string;
  h1: string;
  lede: ReactNode;
  faqs: readonly CaseStudyFaq[];
  children: ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="pb-20 md:pb-0">
        <article>
          <header className="hero-gradient px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-36">
            <div className="mx-auto max-w-3xl">
              <nav aria-label="Breadcrumb" className="text-sm text-muted">
                <ol className="flex flex-wrap items-center gap-2">
                  <li>
                    <Link href="/" className="hover:text-foreground">
                      Home
                    </Link>
                  </li>
                  <li aria-hidden="true">›</li>
                  <li>
                    <Link href="/#work" className="hover:text-foreground">
                      Work
                    </Link>
                  </li>
                  <li aria-hidden="true">›</li>
                  <li aria-current="page" className="text-foreground">
                    {crumb}
                  </li>
                </ol>
              </nav>
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl">
                {h1}
              </h1>
              <div className="mt-6 text-lg leading-relaxed text-muted">{lede}</div>
            </div>
          </header>

          <div className="mx-auto max-w-3xl space-y-16 px-4 py-16 sm:px-6 sm:py-20">
            {children}
            <section id="faq" aria-labelledby="faq-heading" className="scroll-mt-28">
              <h2 id="faq-heading" className={caseH2}>
                FAQ
              </h2>
              <div className="mt-6 space-y-8">
                {faqs.map((faq) => (
                  <div key={faq.question}>
                    <h3 className="text-lg font-semibold">{faq.question}</h3>
                    <p className="mt-2 leading-relaxed text-muted">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </article>
      </main>
      <Footer emailOnly />
      <MobileCTA />
    </>
  );
}
