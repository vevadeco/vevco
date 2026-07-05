import { Code2, Target, Sparkles, BarChart3 } from "lucide-react";
import { services } from "@/lib/content";
import { FadeIn } from "@/components/FadeIn";

const iconMap = {
  code: Code2,
  target: Target,
  sparkles: Sparkles,
  chart: BarChart3,
} as const;

export function Services() {
  return (
    <section id="services" className="scroll-mt-28 bg-surface px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="mb-14 text-center">
          <p className="section-eyebrow mb-3">What We Do</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            End-to-end custom solutions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            As a development and marketing agency, we handle strategy, design,
            development, and launch — one team that owns the full stack.
          </p>
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <FadeIn key={service.title} delay={i * 80}>
                <div className="group h-full rounded-2xl border border-border bg-background p-8 transition-all hover:border-accent/20 hover:shadow-md">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted">
                    {service.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
