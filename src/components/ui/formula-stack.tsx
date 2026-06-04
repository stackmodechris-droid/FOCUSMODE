"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

const TILES = [
  { id: "ginkgo", label: "Ginkgo Biloba" },
  { id: "neural", label: "Synergy" },
  { id: "ginseng", label: "Red Ginseng" },
  { id: "bolt", label: "Sustained Power" },
  { id: "caps", label: "Veg Capsules" },
];

/** Adapted "stack integrator": the synergistic Focus Mode formula stack. */
export function FormulaStack() {
  return (
    <section
      className={cn(
        "group relative mx-auto w-full max-w-[880px] overflow-hidden premium-card backdrop-blur-xl",
        "bg-[linear-gradient(180deg,rgba(18,20,20,0.92),rgba(12,15,15,0.96))]",
        "shadow-[inset_0_2px_0_rgba(255,255,255,0.05),0_50px_130px_-40px_rgba(0,0,0,0.85)]"
      )}
    >
      <div className="pointer-events-none absolute -left-20 -top-20 sm:-left-28 sm:-top-28 h-64 w-64 sm:h-80 sm:w-80 rounded-full bg-[radial-gradient(closest-side,rgba(46,185,223,0.18),transparent_70%)] blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -right-20 sm:-bottom-24 sm:-right-28 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-[radial-gradient(closest-side,rgba(253,228,0,0.16),transparent_70%)] blur-3xl" />

      <div className="relative p-6 sm:p-8 md:p-14">
        <h2 className="font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          One synergistic stack
        </h2>
        <p className="mt-4 max-w-2xl leading-relaxed text-silver/70">
          Two clinically-dosed botanicals working in concert — oxygen delivery meets neurochemical drive — in a clean,
          plant-based capsule. No fillers, no fluff.
        </p>

        <div className="mx-auto mt-8 sm:mt-10 flex max-w-[620px] flex-wrap items-center justify-center gap-5 sm:gap-6 md:gap-8">
          {TILES.map((t, i) => (
            <motion.div
              key={t.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="flex flex-col items-center gap-3"
            >
              <div
                className={cn(
                  "flex h-20 w-20 items-center justify-center border border-white/10 sm:h-24 sm:w-24 md:h-28 md:w-28",
                  "bg-[linear-gradient(180deg,rgba(24,28,28,0.92),rgba(14,17,17,0.95))]",
                  "shadow-[inset_0_2px_2px_rgba(255,255,255,0.06),0_26px_70px_-22px_rgba(0,0,0,0.9)]"
                )}
              >
                {/* Animated SVG icons for each stack element — no more static icons */}
                {t.id === "ginkgo" && (
                  <svg width="38" height="38" viewBox="0 0 38 38" className="text-neural">
                    <circle cx="19" cy="19" r="15" fill="none" stroke="currentColor" strokeOpacity="0.2" strokeWidth="1.5" />
                    <path d="M12 14 Q19 9 26 14" fill="none" stroke="#2eb9df" strokeWidth="2.25" strokeLinecap="round" />
                    <path d="M11 21 Q19 26 27 21" fill="none" stroke="#2eb9df" strokeWidth="2.25" strokeLinecap="round" />
                    <circle cx="19" cy="19" r="3.5" fill="#2eb9df" fillOpacity="0.5">
                      <animate attributeName="r" values="2.8;4.2;2.8" dur="2.8s" repeatCount="indefinite" />
                    </circle>
                  </svg>
                )}
                {t.id === "neural" && (
                  <svg width="38" height="38" viewBox="0 0 38 38" className="text-neural">
                    <circle cx="19" cy="12" r="3" fill="#2eb9df" />
                    <circle cx="10" cy="26" r="3" fill="#2eb9df" />
                    <circle cx="28" cy="26" r="3" fill="#2eb9df" />
                    <line x1="19" y1="15" x2="12" y2="23" stroke="#2eb9df" strokeOpacity="0.6" strokeWidth="1.5" />
                    <line x1="19" y1="15" x2="26" y2="23" stroke="#2eb9df" strokeOpacity="0.6" strokeWidth="1.5" />
                    <circle cx="19" cy="12" r="1.2" fill="#fde400">
                      <animate attributeName="opacity" values="0.4;1;0.4" dur="1.6s" repeatCount="indefinite" />
                    </circle>
                  </svg>
                )}
                {t.id === "ginseng" && (
                  <svg width="38" height="38" viewBox="0 0 38 38" className="text-neural">
                    <path d="M19 7 L19 31" stroke="#2eb9df" strokeWidth="2" strokeOpacity="0.3" />
                    <path d="M12 13 Q19 18 26 13" fill="none" stroke="#fde400" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M12 25 Q19 20 26 25" fill="none" stroke="#fde400" strokeWidth="2.5" strokeLinecap="round" />
                    <circle cx="19" cy="19" r="4" fill="none" stroke="#2eb9df" strokeWidth="1.5">
                      <animate attributeName="r" values="3.2;5.2;3.2" dur="3.1s" repeatCount="indefinite" />
                    </circle>
                  </svg>
                )}
                {t.id === "bolt" && (
                  <svg width="38" height="38" viewBox="0 0 38 38" className="text-bolt">
                    <polygon points="20,6 10,21 18,21 16,33 28,15 19,15" fill="#fde400" fillOpacity="0.15" stroke="#fde400" strokeWidth="1.75" strokeLinejoin="round" />
                    <animate attributeName="fill-opacity" values="0.1;0.45;0.1" dur="1.4s" repeatCount="indefinite" />
                  </svg>
                )}
                {t.id === "caps" && (
                  <svg width="38" height="38" viewBox="0 0 38 38">
                    {/* Small pill representation using the brand colors */}
                    <rect x="9" y="14" width="20" height="10" rx="5" fill="#2eb9df" fillOpacity="0.15" stroke="#2eb9df" strokeWidth="1.5" />
                    <rect x="19" y="14" width="10" height="10" rx="5" fill="#fde400" fillOpacity="0.7" />
                    <circle cx="14" cy="19" r="1.6" fill="#fff" fillOpacity="0.6">
                      <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2.4s" repeatCount="indefinite" />
                    </circle>
                  </svg>
                )}
              </div>
              <span className="font-mono-data text-[11px] uppercase tracking-widest text-silver/60">{t.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
