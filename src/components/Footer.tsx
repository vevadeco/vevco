import Link from "next/link";
import { ContactDetails } from "@/components/ContactDetails";
import { Logo } from "@/components/Logo";
import { ShopifyPartnerMark } from "@/components/ShopifyPartnerMark";
import { publicPages } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <Link href="/">
              <Logo />
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
              Web design, web development, and Shopify e-commerce for Hamilton,
              Burlington, Oakville, St. Catharines, and the Niagara region.
              Since 2012.
            </p>
            <p className="mt-4 text-sm text-muted">Hamilton, ON · service area</p>
            <ContactDetails stacked className="mt-2 text-sm" />
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">On this site</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link
                  href="/#work"
                  className="text-muted transition-colors hover:text-foreground"
                >
                  Our work
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-muted transition-colors hover:text-foreground"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/#rfp"
                  className="text-muted transition-colors hover:text-foreground"
                >
                  Request a proposal
                </Link>
              </li>
              <li>
                <Link
                  href="/#faq"
                  className="text-muted transition-colors hover:text-foreground"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-foreground">Services and areas</p>
            <ul className="mt-3 space-y-2 text-sm">
              {publicPages.map((page) => (
                <li key={page.href}>
                  <Link
                    href={page.href}
                    className="text-muted transition-colors hover:text-foreground"
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-6 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <ShopifyPartnerMark />
          <p className="text-center text-sm text-muted sm:text-right">
            &copy; {new Date().getFullYear()} Vevade. Since 2012.
          </p>
        </div>
      </div>
    </footer>
  );
}
