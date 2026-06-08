"use client";

import { GREENS, SITE } from "@/lib/site";
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
          className="fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-white/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-2xl md:hidden"
        >
          <div className="flex items-center gap-2 px-3 py-2">
            <Image src="/products/1780438169847-generated-label-image-2.png" alt="Focus Mode" width={32} height={32} className="h-8 w-8 object-contain" />
            <div className="flex-1 min-w-0">
              <p className="font-heading text-[11px] font-bold leading-tight text-gray-900">Focus Mode • Daily Greens</p>
              <p className="text-[9px] tracking-wide text-neural tabular-nums">${SITE.price} (60% off) + Greens ${GREENS.price}</p>
            </div>
            <Link
              href="/focus-mode"
              className="premium-cta inline-flex items-center gap-1 px-3 py-1.5 text-[10px] active:bg-[#ffea3d]"
            >
              BUY NOW <Zap className="h-3 w-3 fill-black" />
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
