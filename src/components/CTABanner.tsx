import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";

export function CTABanner() {
  return (
    <section className="px-4 pb-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-950 via-violet-900 to-teal-900 px-8 py-16 text-center sm:px-16 sm:py-20">
            <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-cyan-300/15 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-violet-300/20 blur-3xl" />

            <div className="relative">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to build something custom?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-blue-100">
                Whether it&apos;s a website, app, Shopify store, lead system, or
                AI tool — we turn your brief into a shipped product. Start with
                a free proposal.
              </p>
              <Link
                href="#rfp"
                className="btn-secondary mt-8 hover:bg-white"
              >
                Talk with our team
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
