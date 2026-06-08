"use client";

import { ShoppingCart } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

/**
 * Fixed floating promo CTA for the homepage.
 * - Bottom-right: yellow cart circle with "60% off • Shop today" badge
 * - Mobile: spaced well above sticky buy bar with periodic attention vibration
 */
export function FloatingPromo() {
  return (
    <Link
      href="/shop"
      aria-label="Shop now — 60% off"
      className="fixed bottom-[130px] right-4 z-55 flex items-center gap-0 md:bottom-6 md:right-6 group"
    >
      {/* Badge label — hidden on mobile */}
      <span className="hidden md:inline-flex items-center rounded-full bg-black px-3 py-1.5 text-[11px] font-heading font-bold tracking-wide text-bolt shadow-lg transition-transform duration-200 group-hover:translate-x-0.5">
        60% off • Shop today
      </span>

      {/* Yellow circle with cart icon — subtle periodic jingle vibration on mobile */}
      <motion.span
        className="flex h-12 w-12 items-center justify-center rounded-full bg-bolt shadow-[0_2px_8px_rgba(0,0,0,0.15),0_0_0_1px_rgba(0,0,0,0.05)] transition-transform duration-200 group-hover:scale-105 active:scale-95"
        animate={{
          rotate: [0, -4, 4, -3, 3, 0],
          x: [0, -2, 2, -1, 1, 0],
        }}
        transition={{
          duration: 0.6,
          repeat: Infinity,
          repeatDelay: 4,
          ease: "easeInOut",
        }}
        whileHover={{ rotate: 0, x: 0 }}
      >
        <ShoppingCart className="h-5 w-5 text-black" strokeWidth={2} />
      </motion.span>
    </Link>
  );
}
