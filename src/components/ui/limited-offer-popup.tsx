"use client";

import { GREENS, PRODUCT_IMAGES, SITE } from "@/lib/site";
import { ShoppingBag, X, Zap } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

interface Props {
  /** show on mount */
  defaultOpen?: boolean;
}

export function LimitedOfferPopup({ defaultOpen = false }: Props) {
  const [open, setOpen] = useState(() => {
    if (defaultOpen) return true;
    const key = "fm_popup_shown";
    return !localStorage.getItem(key);
  });

  const close = () => setOpen(false);

  const goShop = () => {
    const el = document.createElement("div");
    el.textContent = "⚡ LOCKED IN";
    el.className = "fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[100] text-4xl font-bold text-bolt pointer-events-none";
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 650);
    setTimeout(() => {
      window.location.href = "/shop";
    }, 280);
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md" onClick={close}>
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ type: "spring", stiffness: 260, damping: 26 }}
            onClick={e => e.stopPropagation()}
            className="relative w-full max-w-xl overflow-hidden rounded-2xl premium-card shadow-2xl"
          >
            {/* Light ambient background with subtle glow halos */}
            <div className="absolute inset-0 z-0 overflow-hidden rounded-2xl">
              <div className="absolute left-1/2 top-1/2 h-[85%] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neural/10 blur-[100px] animate-glow-pulse" />
              <div className="absolute left-1/2 top-1/2 h-[65%] w-[65%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-bolt/10 blur-[80px] animate-glow-pulse" />
            </div>

            {/* Content */}
            <div className="relative z-10">
              {/* Yellow header bar */}
              <div className="relative bg-[#ffcb00] px-5 py-4 text-black rounded-t-2xl">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-[10px] tracking-[2px] text-black/60">EXCLUSIVE OFFER</div>
                    <div className="font-heading text-xl sm:text-2xl font-extrabold tracking-[-0.5px] leading-tight mt-1">
                      BUILD YOUR STACK
                    </div>
                  </div>
                  <button onClick={close} className="rounded p-1 hover:bg-black/10" aria-label="Close">
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <div className="mt-1 text-xs sm:text-sm opacity-80">Focus Mode + Super Energy Blend. Limited time pricing.</div>
              </div>

              <div className="p-5 sm:p-6">
                {/* Products grid */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  {/* Focus Mode */}
                  <div className="flex flex-col items-center rounded-xl border border-yellow-200 bg-white/70 p-3 sm:p-4 text-center">
                    <div className="relative h-20 w-20 sm:h-24 sm:w-24">
                      <Image
                        src={PRODUCT_IMAGES.front}
                        alt="Focus Mode"
                        fill
                        className="object-contain"
                        sizes="96px"
                      />
                    </div>
                    <div className="mt-2 font-heading text-sm sm:text-base font-bold text-gray-900">Focus Mode</div>
                    <div className="mt-0.5 text-[10px] uppercase tracking-wider text-blue-500 font-medium">Brain Booster</div>
                    <div className="mt-1.5 flex items-baseline gap-1.5">
                      <span className="font-heading text-xl sm:text-2xl font-extrabold text-gray-900">${SITE.price}</span>
                      <span className="text-xs text-gray-400 line-through">${SITE.originalPrice}</span>
                    </div>
                    <span className="mt-1 rounded bg-green-100 px-1.5 py-0.5 text-[10px] font-bold text-green-700">SAVE ${Math.round(SITE.originalPrice - SITE.price)}</span>
                  </div>

                  {/* Super Energy Blend */}
                  <div className="flex flex-col items-center rounded-xl border border-green-200 bg-white/70 p-3 sm:p-4 text-center">
                    <div className="relative h-20 w-20 sm:h-24 sm:w-24">
                      <Image
                        src={GREENS.images.front}
                        alt={GREENS.name}
                        fill
                        className="object-contain"
                        sizes="96px"
                      />
                    </div>
                    <div className="mt-2 font-heading text-sm sm:text-base font-bold text-gray-900">{GREENS.name}</div>
                    <div className="mt-0.5 text-[10px] uppercase tracking-wider text-green-600 font-medium">Daily Energy</div>
                    <div className="mt-1.5 flex items-baseline gap-1.5">
                      <span className="font-heading text-xl sm:text-2xl font-extrabold text-gray-900">${GREENS.price}</span>
                    </div>
                    <span className="mt-1 rounded bg-green-100 px-1.5 py-0.5 text-[10px] font-bold text-green-700">PLANT POWER</span>
                  </div>
                </div>

                <button
                  onClick={goShop}
                  className="premium-cta mt-5 w-full py-3 text-base sm:text-lg flex items-center justify-center gap-2"
                >
                  SHOP NOW <ShoppingBag className="h-5 w-5" />
                </button>

                <div className="mt-3 text-center">
                  <button onClick={close} className="text-xs text-gray-400 hover:text-gray-600 underline-offset-4 hover:underline">
                    No thanks
                  </button>
                  <p className="mt-2 text-[10px] text-gray-400">30-day guarantee • Ships from USA</p>
                </div>
              </div>
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
      {show && <LimitedOfferPopup defaultOpen />}
    </>
  );
}
