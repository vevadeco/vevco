import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { stats } from "@/lib/content";
import { FadeIn } from "@/components/FadeIn";

export function Hero() {
  return (
    <section className="hero-gradient relative overflow-hidden px-4 pb-8 pt-28 sm:px-6 sm:pb-16 sm:pt-36">
      <div className="pointer-events-none absolute -top-32 right-0 h-[500px] w-[500px] rounded-full bg-indigo-200/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-96 w-96 rounded-full bg-violet-100/60 blur-3xl" />
      <div className="pointer-events-none absolute right-1/4 top-1/3 h-64 w-64 rounded-full bg-cyan-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <div className="text-center lg:text-left">
            <FadeIn>
              <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]">
                We build{" "}
                <span className="bg-gradient-to-r from-accent via-violet-600 to-cyan-500 bg-clip-text text-transparent">
                  custom solutions
                </span>{" "}
                that your business actually needs
              </h1>
            </FadeIn>

            <FadeIn delay={100}>
              <p className="mt-6 text-lg leading-relaxed text-muted sm:text-xl">
                VevadeCo is a development and marketing agency that designs,
                builds, and launches software tailored to your operations — not
                generic templates. From SaaS platforms to lead systems and AI
                tools, every project starts with your problem and ends with a
                shipped product.
              </p>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
                <Link
                  href="#rfp"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-gray-900/10 transition-all hover:bg-gray-800 hover:shadow-xl"
                >
                  Get your free proposal
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#work"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-8 py-3.5 text-base font-semibold text-foreground backdrop-blur transition-colors hover:bg-white"
                >
                  See our work
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={300}>
              <div className="mt-12 grid grid-cols-3 gap-4 border-t border-border/60 pt-8 lg:max-w-md">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-bold text-foreground sm:text-3xl">
                      {stat.value}
                    </div>
                    <div className="mt-0.5 text-xs text-muted sm:text-sm">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          {/* Product screenshots */}
          <FadeIn delay={150} direction="left" className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="relative aspect-[4/3] w-full">
              {/* FloorHub - back layer */}
              <div className="absolute left-0 top-0 w-[85%] overflow-hidden rounded-2xl border border-border bg-white shadow-2xl shadow-indigo-200/40 transition-transform duration-500 hover:-translate-y-1">
                <Image
                  src="/images/floorhub-screenshot.png"
                  alt="FloorHub dashboard — flooring business management platform"
                  width={800}
                  height={600}
                  sizes="(max-width: 1024px) 85vw, 42vw"
                  className="w-full object-cover object-top"
                  priority
                />
              </div>

              {/* Profit Hunter - front layer */}
              <div className="absolute bottom-0 right-0 w-[78%] overflow-hidden rounded-2xl border border-gray-800 bg-[#05050A] shadow-2xl shadow-cyan-500/20 transition-transform duration-500 hover:-translate-y-1">
                <Image
                  src="/images/profit-hunter-screenshot.png"
                  alt="Profit Hunter dashboard — AI crypto trading platform"
                  width={800}
                  height={600}
                  sizes="(max-width: 1024px) 78vw, 38vw"
                  className="w-full object-cover object-top"
                  priority
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -left-2 top-1/2 z-10 -translate-y-1/2 rounded-full border border-border bg-white/90 px-4 py-2 text-xs font-semibold shadow-lg backdrop-blur sm:left-4">
                <span className="text-accent">2 platforms</span>
                <span className="text-muted"> · live in production</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
