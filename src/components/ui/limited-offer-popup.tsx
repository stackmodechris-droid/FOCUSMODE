"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { SHOPIFY_CART_URL, SITE } from "@/lib/site";
import { X, Zap, Trophy } from "lucide-react";

const FOCUS_DRAINS = [
  { label: "Distractions during study or deep work", insight: "You lose critical hours to noise. Focus Mode helps you lock in and get more done." },
  { label: "Back-to-back meetings, classes, and constant pings", insight: "Context switching drains mental fuel. This clean formula helps restore steady clarity." },
  { label: "The afternoon foggy crash that kills productivity", insight: "High-performers and students alike report sustained energy and focus for 6+ hours after the first dose." },
  { label: "Slow recall and mental fatigue holding you back", insight: "Natural antioxidants and clinically dosed extracts support sharper memory and brain vitality at any age." },
];

interface Props {
  /** auto trigger after ms (0 = disabled) */
  autoAfterMs?: number;
  /** show on mount for testing */
  defaultOpen?: boolean;
}

export function LimitedOfferPopup({ autoAfterMs = 22000, defaultOpen = false }: Props) {
  const [open, setOpen] = useState(defaultOpen);
  const [step, setStep] = useState<"intro" | "quiz" | "result">("intro");
  const [selected, setSelected] = useState<number | null>(null);
  const [hasShown, setHasShown] = useState(false);

  // Auto open once per session (fun re-engagement, not annoying)
  useEffect(() => {
    if (defaultOpen) return;
    const key = "fm_popup_shown";
    if (sessionStorage.getItem(key)) return;

    const t = setTimeout(() => {
      if (!hasShown) {
        setOpen(true);
        setHasShown(true);
        sessionStorage.setItem(key, "1");
      }
    }, autoAfterMs);
    return () => clearTimeout(t);
  }, [autoAfterMs, hasShown, defaultOpen]);

  const current = selected !== null ? FOCUS_DRAINS[selected] : null;

  const handleSelect = (i: number) => {
    setSelected(i);
    // fun little delay for "calculating"
    setTimeout(() => setStep("result"), 420);
  };

  const close = () => {
    setOpen(false);
    // reset for next possible open
    setTimeout(() => {
      setStep("intro");
      setSelected(null);
    }, 300);
  };

  const goBuy = () => {
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
                  <div className="text-[10px] tracking-[2px] text-bolt/70">OPERATOR ALERT</div>
                  <div className="font-heading text-3xl font-extrabold tracking-[-1px] leading-none mt-1">
                    40% OFF STILL LIVE
                  </div>
                </div>
                <button onClick={close} className="rounded p-1 hover:bg-black/10" aria-label="Close">
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="mt-1 text-sm opacity-80">Your price is locked at <span className="font-bold">${SITE.price}</span> (from ${SITE.originalPrice}). Timer is running.</div>
            </div>

            <div className="p-6">
              {step === "intro" && (
                <>
                  <div className="flex items-center gap-2 text-bolt">
                    <Trophy className="h-5 w-5" />
                    <span className="text-xs tracking-[1.5px] text-bolt/80">1-QUESTION POWER-UP</span>
                  </div>
                  <h3 className="mt-2 font-heading text-2xl font-bold text-white">What’s quietly killing your edge today?</h3>
                  <p className="mt-2 text-sm text-silver/70">Answer honestly. We’ll show you exactly how Focus Mode pays for itself in your world.</p>

                  <div className="mt-5 grid gap-2.5">
                    {FOCUS_DRAINS.map((d, i) => (
                      <button
                        key={i}
                        onClick={() => { setStep("quiz"); handleSelect(i); }}
                        className="group w-full rounded-lg premium-card px-4 py-3 text-left text-sm text-silver/90 transition hover:border-bolt hover:text-white active:scale-[0.985]"
                      >
                        {d.label}
                      </button>
                    ))}
                  </div>
                  <button onClick={close} className="mt-4 w-full text-center text-xs tracking-widest text-silver/40 hover:text-silver/70">No thanks, I’ll keep guessing</button>
                </>
              )}

              {step === "quiz" && (
                <div className="py-8 text-center">
                  <div className="mx-auto mb-4 h-2 w-2 animate-ping rounded-full bg-bolt" />
                  <p className="font-mono-data text-xs text-silver/60">CALCULATING YOUR EDGE DEFICIT…</p>
                </div>
              )}

              {step === "result" && current && (
                <>
                  <div className="rounded-xl border border-bolt/40 bg-bolt/5 p-5">
                    <div className="text-xs uppercase tracking-widest text-bolt">YOUR INSIGHT</div>
                    <p className="mt-2 text-lg font-medium text-white leading-tight">“{current.insight}”</p>
                  </div>

                  <div className="mt-6 text-center">
                    <div className="text-sm text-silver/70">That’s why high-performers run on</div>
                    <div className="mt-1 font-heading text-5xl font-extrabold text-white">${SITE.price}</div>
                    <div className="text-bolt">— 40% off the regular $100. Limited time.</div>
                  </div>

                  <button
                    onClick={goBuy}
                    className="premium-cta mt-6 w-full py-4 text-xl flex items-center justify-center gap-2"
                  >
                    CLAIM MY BOTTLE NOW <Zap className="h-5 w-5" />
                  </button>

                  <div className="mt-3 text-center">
                    <button onClick={close} className="text-xs text-silver/50 hover:text-silver/70 underline-offset-4 hover:underline">
                      I’ll come back when I’m more focused (bad idea)
                    </button>
                  </div>
                  <p className="mt-4 text-[10px] text-center text-silver/40">30-day empty bottle guarantee • Ships today from USA</p>
                </>
              )}
            </div>

            {/* tiny scroll-driven fun footer like the pasted keyframes inspiration */}
            <div className="border-t border-border bg-surface-container-low/60 px-6 py-2 text-center text-[10px] font-mono-data tracking-widest text-silver/40">
              THE FASTER YOU DECIDE, THE SOONER YOUR BRAIN PAYS YOU BACK
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
        <Zap className="h-4 w-4" /> What’s my focus leak? (unlock offer)
      </button>
      <LimitedOfferPopup defaultOpen={show} autoAfterMs={0} />
    </>
  );
}
