"use client";

import { SHOPIFY_CART_URL, SITE, trackAddToCart } from "@/lib/site";
import { X, Zap } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

interface Props {
  /** auto trigger after ms (0 = disabled) */
  autoAfterMs?: number;
  /** show on mount for testing */
  defaultOpen?: boolean;
}

export function LimitedOfferPopup({ autoAfterMs = 45000, defaultOpen = false }: Props) {
  const [open, setOpen] = useState(defaultOpen);
  const [hasShown, setHasShown] = useState(false);

  // Auto open once only (localStorage so it never nags repeat visitors). Waits ~45s after landing.
  useEffect(() => {
    if (defaultOpen) return;
    const key = "fm_popup_shown";
    if (localStorage.getItem(key)) return;

    const t = setTimeout(() => {
      if (!hasShown) {
        setOpen(true);
        setHasShown(true);
        localStorage.setItem(key, "1");
      }
    }, autoAfterMs);
    return () => clearTimeout(t);
  }, [autoAfterMs, hasShown, defaultOpen]);

  const close = () => setOpen(false);

  const goBuy = () => {
    trackAddToCart();
    // fun: small celebration before redirect
    const el = document.createElement("div");
    el.textContent = "⚡ LOCKED IN";
    el.className = "fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[100] text-4xl font-bold text-bolt pointer-events-none";
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 650);
    setTimeout(() => {
      window.location.href = SHOPIFY_CART_URL;
    }, 280);
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm" onClick={close}>
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
            onClick={e => e.stopPropagation()}
            className="relative w-full max-w-md overflow-hidden rounded-2xl premium-card shadow-2xl"
          >
            {/* fun header with color pop like the pasted CSS */}
            <div className="relative bg-[#ffcb00] px-6 py-5 text-black rounded-t-2xl">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-[10px] tracking-[2px] text-bolt/70">EXCLUSIVE OFFER</div>
                  <div className="font-heading text-3xl font-extrabold tracking-[-1px] leading-none mt-1">
                    40% OFF — YOUR PRICE LOCKED
                  </div>
                </div>
                <button onClick={close} className="rounded p-1 hover:bg-black/10" aria-label="Close">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="mt-1 text-sm opacity-80">Only <span className="font-bold">${SITE.price}</span> (was ${SITE.originalPrice}). Offer ends soon.</div>
            </div>

            <div className="p-6 text-center">
              <div className="font-heading text-4xl sm:text-5xl font-extrabold text-white">${SITE.price}</div>
              <div className="text-bolt text-sm mt-1">40% off — was ${SITE.originalPrice}</div>

              <button
                onClick={goBuy}
                className="premium-cta mt-5 w-full py-3.5 text-lg flex items-center justify-center gap-2"
              >
                CLAIM NOW <Zap className="h-5 w-5" />
              </button>

              <button onClick={close} className="mt-3 text-xs text-silver/50 hover:text-silver/70 underline-offset-4 hover:underline">
                No thanks
              </button>
              <p className="mt-3 text-[10px] text-silver/40">30-day guarantee • Ships from USA</p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

/** Optional trigger button you can place anywhere for "fun interactive" */
export function OpenOfferButton({ className = "" }: { className?: string }) {
  const [show, setShow] = useState(false);
  return (
    <>
      <button
        onClick={() => setShow(true)}
        className={`premium-cta-secondary inline-flex items-center gap-2 px-4 py-2 text-sm ${className}`}
      >
        <Zap className="h-4 w-4" /> Discover your edge
      </button>
      <LimitedOfferPopup defaultOpen={show} autoAfterMs={0} />
    </>
  );
}
