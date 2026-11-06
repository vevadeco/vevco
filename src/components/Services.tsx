import Link from "next/link";
import { Code2, Target, Sparkles, BarChart3, ShoppingBag } from "lucide-react";
import { services } from "@/lib/content";
import { FadeIn } from "@/components/FadeIn";
import { ShopifyPartnerMark } from "@/components/ShopifyPartnerMark";
import { publicPages } from "@/lib/site";

const iconMap = {
  code: Code2,
  shopping: ShoppingBag,
  target: Target,
  sparkles: Sparkles,
  chart: BarChart3,
} as const;

const cardTones = [
  {
    icon: "bg-blue-100 text-blue-800 group-hover:bg-blue-800 group-hover:text-white",
    bar: "bg-blue-700",
  },
  {
    icon: "bg-violet-100 text-violet-800 group-hover:bg-violet-800 group-hover:text-white",
    bar: "bg-violet-700",
  },
  {
    icon: "bg-teal-100 text-teal-800 group-hover:bg-teal-800 group-hover:text-white",
    bar: "bg-teal-800",
  },
  {
    icon: "bg-amber-100 text-amber-900 group-hover:bg-amber-800 group-hover:text-white",
    bar: "bg-amber-700",
  },
  {
    icon: "bg-sky-100 text-sky-900 group-hover:bg-sky-800 group-hover:text-white",
    bar: "bg-sky-700",
  },
] as const;

export function Services() {
  return (
    <section id="services" className="section-violet scroll-mt-28 px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="mb-14 text-center">
          <p className="section-eyebrow mb-3">What We Do</p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Web, app &amp; Shopify development
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Since 2012 we&apos;ve handled strategy, design, development, and
            launch for businesses in Hamilton, Burlington, Oakville, St.
            Catharines, and the Niagara region — one small team that owns the
            full stack.
          </p>
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            const tone = cardTones[i % cardTones.length];
            return (
              <FadeIn key={service.title} delay={i * 80}>
                <div className="card-lift group relative h-full overflow-hidden rounded-2xl border border-border bg-white p-8 shadow-sm">
                  <div className={`absolute inset-x-0 top-0 h-1 ${tone.bar}`} />
                  <div
                    className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition-colors ${tone.icon}`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted">
                    {service.description}
                  </p>
                  {"href" in service && service.href ? (
                    <Link
                      href={service.href}
                      className="mt-4 inline-flex text-sm font-semibold text-accent underline-offset-2 hover:underline"
                    >
                      Learn more
                    </Link>
                  ) : null}
                </div>
              </FadeIn>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <ShopifyPartnerMark />
        </div>

        <nav aria-label="Service areas" className="mt-12">
          <p className="mb-4 text-center text-sm font-semibold text-foreground">
            Where we work
          </p>
          <ul className="flex flex-wrap justify-center gap-3">
            {publicPages.map((page) => (
              <li key={page.href}>
                <Link
                  href={page.href}
                  className="inline-flex rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-foreground shadow-sm transition-colors hover:border-blue-500 hover:bg-blue-50 hover:text-blue-900"
                >
                  {page.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
