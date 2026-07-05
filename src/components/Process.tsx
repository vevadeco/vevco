import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { process } from "@/lib/content";
import { FadeIn } from "@/components/FadeIn";

export function Process() {
  return (
    <section id="process" className="scroll-mt-28 px-4 py-20 sm:px-6 sm:py-28">
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
                <div className="h-full rounded-2xl border border-border bg-surface p-8">
                  <div className="mb-4 text-sm font-bold text-accent">
                    Step {item.step}
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
          <Link
            href="#rfp"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-gray-800"
          >
            Start with a free proposal
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
