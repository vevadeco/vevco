import Image from "next/image";
import {
  Layers,
  Leaf,
  TrendingUp,
} from "lucide-react";
import { products } from "@/lib/content";
import { FadeIn } from "@/components/FadeIn";

const iconMap = {
  layers: Layers,
  leaf: Leaf,
  trending: TrendingUp,
} as const;

export function WorkShowcase() {
  return (
    <section id="work" className="scroll-mt-28 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="mb-14 text-center">
          <p className="section-eyebrow mb-3">Proven Results</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Custom products, real outcomes
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Each platform below was scoped, designed, and built from scratch for
            a specific business — the kind of custom work we do for every client.
          </p>
        </FadeIn>

        <div className="space-y-20">
          {products.map((product, index) => {
            const Icon = iconMap[product.icon];
            const isDark = product.id === "profithunter";
            const hasScreenshot =
              product.id === "floorhub" || product.id === "profithunter";
            const screenshotSrc =
              product.id === "floorhub"
                ? "/images/floorhub-screenshot.png"
                : product.id === "profithunter"
                  ? "/images/profit-hunter-screenshot.png"
                  : null;
            const reversed = index % 2 === 1;

            return (
              <FadeIn key={product.id} delay={index * 80}>
                <article
                  className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-12 ${
                    reversed ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* Screenshot or placeholder */}
                  <div className="relative">
                    {hasScreenshot && screenshotSrc ? (
                      <div
                        className={`overflow-hidden rounded-2xl border shadow-xl ${
                          isDark
                            ? "border-gray-800 shadow-cyan-500/10"
                            : "border-border shadow-indigo-100/50"
                        }`}
                      >
                        <Image
                          src={screenshotSrc}
                          alt={`${product.name} product screenshot`}
                          width={900}
                          height={650}
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="w-full object-cover object-top"
                        />
                      </div>
                    ) : (
                      <div className="overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-green-50 to-emerald-50 p-8 shadow-lg">
                        <div className="rounded-xl border border-green-200 bg-white p-6">
                          <div className="mb-4 flex items-center gap-2">
                            <div className="h-8 w-8 rounded-full bg-green-700 flex items-center justify-center">
                              <Leaf className="h-4 w-4 text-white" />
                            </div>
                            <span className="font-serif text-lg font-bold text-green-900">
                              Earl&apos;s Landscaping
                            </span>
                          </div>
                          <div className="space-y-3">
                            <div className="h-10 rounded-lg bg-green-100" />
                            <div className="grid grid-cols-3 gap-2">
                              <div className="h-16 rounded-lg bg-green-50 border border-green-100" />
                              <div className="h-16 rounded-lg bg-green-50 border border-green-100" />
                              <div className="h-16 rounded-lg bg-green-50 border border-green-100" />
                            </div>
                            <div className="h-24 rounded-lg bg-orange-50 border border-orange-100" />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div>
                    <div className="mb-4 flex items-center gap-3">
                      <div
                        className="flex h-10 w-10 items-center justify-center rounded-xl"
                        style={{
                          backgroundColor: isDark ? "#1a1a24" : product.accentBg,
                          color: product.accent,
                        }}
                      >
                        <Icon className="h-5 w-5" />
                      </div>
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          isDark
                            ? "bg-gray-800 text-gray-300"
                            : "bg-gray-100 text-muted"
                        }`}
                      >
                        {product.category}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                      {product.name}
                    </h3>
                    <p
                      className={`mt-2 text-base font-medium ${
                        isDark ? "text-cyan-400" : "text-accent"
                      }`}
                    >
                      {product.tagline}
                    </p>
                    <p className="mt-4 leading-relaxed text-muted">
                      {product.description}
                    </p>

                    <ul className="mt-6 space-y-3">
                      {product.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3 text-sm"
                        >
                          <span
                            className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
                            style={{ backgroundColor: product.accent }}
                          />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
