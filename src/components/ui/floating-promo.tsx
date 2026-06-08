"use client";

import { ShoppingCart } from "lucide-react";
import Link from "next/link";

/**
 * Fixed floating promo CTA for the homepage.
 * - Bottom-right: yellow cart circle with "40% off • Shop today" badge
 */
export function FloatingPromo() {
  return (
    <Link
      href="/shop"
      aria-label="Shop now — 40% off"
      className="fixed bottom-20 right-4 z-40 flex items-center gap-0 md:bottom-6 md:right-6 group"
    >
      {/* Badge label — hidden on mobile */}
      <span className="hidden md:inline-flex items-center rounded-full bg-black px-3 py-1.5 text-[11px] font-heading font-bold tracking-wide text-white shadow-lg transition-transform duration-200 group-hover:translate-x-0.5">
        40% off • Shop today
      </span>

      {/* Yellow circle with cart icon */}
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-bolt shadow-[0_2px_8px_rgba(0,0,0,0.15),0_0_0_1px_rgba(0,0,0,0.05)] transition-transform duration-200 group-hover:scale-105 active:scale-95">
        <ShoppingCart className="h-5 w-5 text-black" strokeWidth={2} />
      </span>
    </Link>
  );
}
