import { testimonials } from "@/lib/content";
import { FadeIn } from "@/components/FadeIn";

export function Testimonials() {
  return (
    <section className="bg-surface px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="mb-14 text-center">
          <p className="section-eyebrow mb-3">Client Results</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Built for businesses that need to move
          </h2>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 100}>
              <blockquote className="flex h-full flex-col rounded-2xl border border-border bg-background p-8">
                <p className="flex-1 leading-relaxed text-foreground/90">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-6 border-t border-border pt-6">
                  <cite className="not-italic">
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-sm text-muted">{t.role}</div>
                  </cite>
                </footer>
              </blockquote>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
