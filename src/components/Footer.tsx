import Link from "next/link";
import { Logo } from "@/components/Logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <Link href="/">
              <Logo />
            </Link>
            <p className="mt-3 max-w-xs text-sm text-muted">
              Custom development and marketing solutions built around your business.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 text-sm">
            <Link
              href="#work"
              className="text-muted transition-colors hover:text-foreground"
            >
              Our Work
            </Link>
            <Link
              href="#services"
              className="text-muted transition-colors hover:text-foreground"
            >
              Services
            </Link>
            <Link
              href="#rfp"
              className="text-muted transition-colors hover:text-foreground"
            >
              Request Proposal
            </Link>
            <Link
              href="#faq"
              className="text-muted transition-colors hover:text-foreground"
            >
              FAQ
            </Link>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-8 text-center text-sm text-muted sm:text-left">
          &copy; {new Date().getFullYear()} VevadeCo. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
