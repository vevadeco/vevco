"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-white/95 p-3 backdrop-blur-md md:hidden">
      <Link
        href="#rfp"
        className="btn-primary w-full py-3 text-sm"
      >
        Request Proposal
        <ArrowUpRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
