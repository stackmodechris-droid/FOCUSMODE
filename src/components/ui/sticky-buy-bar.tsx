"use client";

import { SHOPIFY_CART_URL, SITE } from "@/lib/site";
import { Zap } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

/** Mobile-first sticky buy bar that appears after the user scrolls past the hero. */
export function StickyBuyBar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 28 }}
          className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#0c0f0f]/95 backdrop-blur-2xl md:hidden"
        >
          <div className="flex items-center gap-3 px-4 py-3">
            <Image src="/products/bottle-front.png" alt="Focus Mode" width={44} height={44} className="h-11 w-11 object-contain" />
            <div className="flex-1">
              <p className="font-heading text-sm font-bold leading-tight text-white">Focus Mode</p>
              <p className="text-xs tracking-wide text-bolt">${SITE.price} <span className="line-through text-silver/40">${SITE.originalPrice ?? 100}</span> · 40% OFF · {SITE.capsules} caps</p>
            </div>
            <Link
              href={SHOPIFY_CART_URL}
              className="premium-cta inline-flex items-center gap-1.5 px-5 py-2.5 text-sm active:bg-[#ffea3d]"
            >
              BUY <Zap className="h-4 w-4 fill-black" />
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
