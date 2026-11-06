import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { process } from "@/lib/content";
import { FadeIn } from "@/components/FadeIn";

export function Process() {
  return (
    <section id="process" className="section-teal scroll-mt-28 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="mb-14 text-center">
          <p className="section-eyebrow mb-3">How It Works</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            From brief to launch in three steps
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            No endless discovery phases. We move fast, communicate clearly, and
            deliver proposals you can act on immediately.
          </p>
        </FadeIn>

        <div className="grid gap-8 md:grid-cols-3">
          {process.map((item, index) => (
            <FadeIn key={item.step} delay={index * 100}>
              <div className="relative h-full">
                {index < process.length - 1 && (
                  <div className="absolute right-0 top-8 hidden h-px w-full translate-x-1/2 bg-border md:block" />
                )}
                <div className="card-lift h-full rounded-2xl border border-teal-100 bg-white p-8 shadow-sm">
                  <div
                    className={`mb-4 inline-flex h-11 min-w-11 items-center justify-center rounded-full px-2 text-xs font-bold text-white ${
                      ["bg-teal-800", "bg-blue-800", "bg-violet-800"][index]
                    }`}
                  >
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={300} className="mt-12 text-center">
          <Link href="#rfp" className="btn-primary">
            Start with a free proposal
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
