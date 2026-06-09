"use client";

import { SITE, trackPurchase } from "@/lib/site";
import { X } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";

export function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="relative z-50 flex h-9 w-full items-center justify-center bg-bolt"
    >
      <Link
        href="/shop"
        className="flex items-center gap-2 pr-8 text-xs font-heading font-bold text-black sm:text-sm"
        onClick={() => trackPurchase({ value: SITE.price, currency: "USD" })}
      >
        <span className="inline-flex items-center gap-1.5">
          <span className="rounded bg-black px-1.5 py-0.5 text-[10px] font-extrabold text-bolt">
            60% OFF
          </span>
          <span className="uppercase tracking-[0.5px]">TODAY — Limited Time</span>
        </span>
        <motion.span
          animate={{ x: [0, 3, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          className="hidden sm:inline"
        >
          →
        </motion.span>
      </Link>

      <button
        type="button"
        aria-label="Dismiss announcement"
        onClick={() => setDismissed(true)}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-1 text-black/60 transition hover:bg-black/10 hover:text-black"
      >
        <X className="h-3.5 w-3.5" />
      </button>
    </motion.div>
  );
}
