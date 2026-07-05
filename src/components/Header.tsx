import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/Logo";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 sm:px-6">
      <nav className="glass-nav mx-auto flex max-w-6xl items-center justify-between rounded-2xl border border-border px-4 py-3 shadow-sm sm:px-6">
        <Link href="/">
          <Logo size="sm" />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="#work"
            className="text-sm font-medium text-muted transition-colors hover:text-foreground"
          >
            Our Work
          </Link>
          <Link
            href="#services"
            className="text-sm font-medium text-muted transition-colors hover:text-foreground"
          >
            Services
          </Link>
          <Link
            href="#process"
            className="text-sm font-medium text-muted transition-colors hover:text-foreground"
          >
            Process
          </Link>
          <Link
            href="#faq"
            className="text-sm font-medium text-muted transition-colors hover:text-foreground"
          >
            FAQ
          </Link>
        </div>

        <Link
          href="#rfp"
          className="inline-flex items-center gap-1.5 rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
        >
          Request Proposal
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </nav>
    </header>
  );
}
