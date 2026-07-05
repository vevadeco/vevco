import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/Logo";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      <Logo size="lg" />
      <h1 className="mt-8 text-6xl font-extrabold tracking-tight text-foreground">
        404
      </h1>
      <p className="mt-4 max-w-md text-lg text-muted">
        This page doesn&apos;t exist. Let&apos;s get you back to building something custom.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white hover:bg-accent-hover"
      >
        Back to homepage
        <ArrowUpRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
