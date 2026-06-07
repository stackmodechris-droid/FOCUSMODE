"use client";

import { LiquidGlassFilter } from "@/components/ui/liquid-glass-button";
import { ProductGlow } from "@/components/ui/product-glow";
import { SectionLabel } from "@/components/ui/reveal";
import { GREENS, GREENS_CART_URL, SHOPIFY_CART_URL, SITE, trackAddToCart } from "@/lib/site";
import { Check, ShieldCheck, Truck, Zap } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ShopPage() {
  const [activeGreensIngredient, setActiveGreensIngredient] = useState<number | null>(null);
  const [showFacts, setShowFacts] = useState(false);

  const focusPrice = SITE.price;
  const greensPrice = GREENS.price;

  return (
    <>
      <LiquidGlassFilter />

      <section className="border-b border-white/10 pt-16 md:pt-20">
        <div className="mx-auto max-w-7xl px-5 py-12 md:py-16 md:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <SectionLabel>Buy In Seconds</SectionLabel>
            <h1 className="mt-4 font-heading text-4xl font-semibold tracking-[-1.2px] text-white md:text-6xl">
              Pick your edge.<br />Checkout fast.
            </h1>
            <p className="mt-5 mx-auto max-w-2xl text-[15px] md:text-lg text-silver/70">
              No endless supplement aisle. Choose the all-natural brain booster, the whole-plant energy blend, or stack both for the complete daily protocol.
            </p>
          </div>

          <div className="mt-9 grid gap-4 lg:grid-cols-3">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="premium-card border-[#1e90ff]/30 p-6">
              <div className="premium-product-stage mx-auto max-w-[260px]">
                <ProductGlow src="/products/1780438169847-generated-label-image-2.png" alt="Focus Mode all-natural brain booster" size={360} glow="dual" priority />
              </div>
              <div className="mt-4 text-[10px] uppercase tracking-[2px] text-[#7ec4ff]">All-Natural Brain Booster</div>
              <h2 className="mt-1 font-heading text-3xl font-semibold text-white">Focus Mode</h2>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="font-heading text-4xl font-bold">${focusPrice}</span>
                <span className="text-sm text-silver/50 line-through">${SITE.originalPrice}</span>
                <span className="rounded bg-bolt px-2 py-0.5 text-xs font-bold text-black">40% OFF</span>
              </div>
              <div className="mt-4 space-y-2 text-sm text-silver/75">
                {["6+ hours clean focus", "Ginkgo + Ginseng clinical extracts", "Zero synthetic stimulants"].map((t) => (
                  <div key={t} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-neural" /> {t}</div>
                ))}
              </div>
              <a href={SHOPIFY_CART_URL} onClick={trackAddToCart} className="premium-cta mt-6 w-full py-4">
                Buy Focus Mode — ${focusPrice} <Zap className="h-4 w-4 fill-black" />
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="premium-card border-[#16a34a]/30 p-6">
              <div className="premium-product-stage mx-auto max-w-[260px]">
                <ProductGlow src={GREENS.images.front} alt="Super Energy Blend whole-plant greens" size={360} glow="neural" priority />
              </div>
              <div className="mt-4 text-[10px] uppercase tracking-[2px] text-[#7ee6a0]">Whole-Plant Daily Energy</div>
              <h2 className="mt-1 font-heading text-3xl font-semibold text-white">{GREENS.name}</h2>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="font-heading text-4xl font-bold">${greensPrice}</span>
                <span className="text-sm text-silver/50">{GREENS.servings} servings</span>
              </div>
              <div className="mt-4 space-y-2 text-sm text-silver/75">
                {["20+ plants, superfoods & adaptogens", "Clean sustained energy foundation", "One scoop daily"].map((t) => (
                  <div key={t} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-neural" /> {t}</div>
                ))}
              </div>
              <a href={GREENS_CART_URL} onClick={trackAddToCart} className="premium-cta mt-6 w-full bg-[#16a34a] py-4 text-white hover:bg-[#15803d]">
                Buy Energy Blend — ${greensPrice} <Zap className="h-4 w-4 fill-white" />
              </a>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }} className="premium-card flex flex-col justify-between p-6">
              <div>
                <div className="text-[10px] uppercase tracking-[2px] text-neural">Best Routine</div>
                <h2 className="mt-2 font-heading text-3xl font-semibold text-white">Complete Daily Edge Stack</h2>
                <p className="mt-3 text-sm text-silver/70">
                  Start with clean whole-plant energy, then layer in Focus Mode for the work blocks, studying, calls, and deep execution that move your life forward.
                </p>
                <div className="mt-5 grid gap-2 text-sm text-silver/75">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">Step 1: one scoop Super Energy Blend</div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">Step 2: Focus Mode before deep work</div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-4">Result: energy + clarity + consistency</div>
                </div>
              </div>
              <div className="mt-6 grid gap-2">
                <a href={GREENS_CART_URL} onClick={trackAddToCart} className="premium-cta-secondary w-full border-[#16a34a]/40 text-[#7ee6a0]">Add Greens — ${greensPrice}</a>
                <a href={SHOPIFY_CART_URL} onClick={trackAddToCart} className="premium-cta w-full">Add Focus — ${focusPrice}</a>
              </div>
            </motion.div>
          </div>

          <p className="mt-5 text-center text-[11px] text-silver/50 tracking-[1.5px] uppercase">30-day guarantee on both • Shopify secure checkout • Ships today from USA</p>
        </div>
      </section>

      {/* FOCUS MODE — prominent shop treatment */}
      <section id="focus" className="border-b border-white/10 bg-[#111414]">
        <div className="mx-auto max-w-7xl px-5 py-16 md:py-20 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Visual — reuse the proven ProductGlow treatment for consistency */}
            <div className="relative flex justify-center">
              <div className="premium-product-stage max-w-[420px]">
                <ProductGlow
                  src="/products/1780438169847-generated-label-image-2.png"
                  alt="Focus Mode — 60 capsules, 30-day cognitive performance formula"
                  size={520}
                  glow="dual"
                  priority
                />
              </div>
            </div>

            {/* Details + conversion */}
            <div>
              <div className="uppercase tracking-[2px] text-[10px] text-neural mb-2">Elite Nootropic</div>
              <h2 className="font-heading text-4xl md:text-5xl font-semibold tracking-[-1px] text-white">Focus Mode</h2>
              <p className="mt-3 text-lg text-silver/75">6+ hours of clean, crash-free mental clarity. Sharper decisions, faster recall, zero fog.</p>

              <div className="mt-6 flex items-baseline gap-3">
                <span className="font-heading text-[56px] font-semibold tabular-nums tracking-[-1.5px] text-white">${focusPrice}</span>
                <span className="text-silver/60">USD • 60 capsules</span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <span className="rounded bg-bolt/90 px-3 py-0.5 text-xs font-bold tracking-wider text-black">40% OFF</span>
                <span className="text-silver/50 line-through text-sm">was ${SITE.originalPrice}</span>
              </div>

              <div className="mt-6 space-y-2.5 text-[13.5px] text-silver/80">
                {["2 clinically-dosed extracts (24% Ginkgo flavones + 7% Ginsenosides)", "Zero synthetic stimulants. Zero crash. Zero fillers.", "USA manufactured • 30-day empty-bottle guarantee"].map((t, i) => (
                  <div key={i} className="flex gap-3"><Check className="h-4 w-4 mt-0.5 text-neural shrink-0" /> {t}</div>
                ))}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href={SHOPIFY_CART_URL}
                  onClick={trackAddToCart}
                  className="premium-cta flex-1 justify-center py-4 text-base"
                >
                  Buy Focus Mode Now — ${focusPrice} <Zap className="h-4 w-4 fill-black" />
                </a>
                <Link href="/learn-more" className="premium-cta-secondary flex-1 justify-center py-4 text-base">See the full formula science</Link>
              </div>
              <p className="mt-3 text-[10px] text-silver/50">Ships same day • 30-day guarantee • Subscribe & save extra at checkout</p>
            </div>
          </div>
        </div>
      </section>

      {/* DAILY GREENS — visual, rich, shop-first treatment */}
      <section id="greens" className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-16 md:py-20 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Visuals — ProductGlow + the exact assets user provided */}
            <div className="relative flex justify-center order-1 lg:order-none">
              <div className="premium-product-stage max-w-[420px]">
                <ProductGlow
                  src={GREENS.images.front}
                  alt="Daily Greens Powder — 30 servings of whole-plant nutrition"
                  size={520}
                  glow="neural"
                  priority
                />
              </div>
              <button
                onClick={() => setShowFacts(!showFacts)}
                className="absolute -bottom-2 right-4 text-[10px] tracking-[1.5px] px-4 py-1.5 rounded-full border border-white/15 bg-[#0c0f0f] hover:bg-white/5 transition text-silver/70"
              >
                {showFacts ? "HIDE" : "VIEW"} FULL SUPPLEMENT FACTS
              </button>
            </div>

            <div>
              <div className="uppercase tracking-[2px] text-[10px] text-neural mb-2">Whole-Plant Daily Nutrition</div>
              <h2 className="font-heading text-4xl md:text-5xl font-semibold tracking-[-1px] text-white">{GREENS.name}</h2>
              <p className="mt-3 text-lg text-silver/75">{GREENS.description}</p>

              <div className="mt-6 flex items-baseline gap-3">
                <span className="font-heading text-[56px] font-semibold tabular-nums tracking-[-1.5px] text-white">${greensPrice}</span>
                <span className="text-silver/60">USD • {GREENS.servings} servings</span>
              </div>

              <div className="mt-6 p-5 rounded-xl border border-white/10 bg-[#0c0f0f]">
                <div className="font-medium text-neural tracking-[1px] text-xs mb-2">WHY IT WORKS FOR YOUR ROUTINE</div>
                <p className="text-[13.5px] text-silver/80">{GREENS.howItWorks}</p>
              </div>

              <div className="mt-8">
                <div className="font-medium tracking-[1px] text-xs text-neural mb-3">WHAT&apos;S INSIDE — TAP TO EXPLORE SYNERGY</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {GREENS.ingredients.map((ing, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveGreensIngredient(activeGreensIngredient === idx ? null : idx)}
                      className={`text-left px-4 py-3 rounded-lg border text-sm transition ${activeGreensIngredient === idx ? "border-neural bg-neural/5" : "border-white/10 hover:border-white/20"}`}
                    >
                      <div className="font-medium text-white">{ing.name}</div>
                      {activeGreensIngredient === idx && (
                        <div className="mt-1 text-[12px] text-silver/70">{ing.role}</div>
                      )}
                    </button>
                  ))}
                </div>
                <p className="mt-2 text-[11px] text-silver/50">Black Pepper Extract dramatically increases absorption of Turmeric, Ginseng & other key compounds — the same adaptogens that amplify Focus Mode.</p>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href={GREENS_CART_URL}
                  onClick={trackAddToCart}
                  className="premium-cta flex-1 justify-center py-4 text-base"
                >
                  Buy Daily Greens — ${greensPrice} <Zap className="h-4 w-4 fill-black" />
                </a>
                <button onClick={() => setShowFacts(true)} className="premium-cta-secondary flex-1 justify-center py-4 text-base">
                  View Full Supplement Facts
                </button>
              </div>
              <p className="mt-3 text-[10px] text-silver/50">{GREENS.usage} • {GREENS.manufactured} made • No artificial additives</p>
            </div>
          </div>

          {/* Facts panel (uses the exact clean label image the user supplied) */}
          {showFacts && (
            <div className="mt-12 max-w-3xl mx-auto border border-white/10 rounded-2xl overflow-hidden bg-[#0c0f0f]">
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                <div className="font-medium">Full Supplement Facts — 30 Servings</div>
                <button onClick={() => setShowFacts(false)} className="text-silver/60 hover:text-white">Close</button>
              </div>
              <div className="p-4">
                <Image
                  src={GREENS.factsImage}
                  alt="Daily Greens Powder Supplement Facts label"
                  width={842}
                  height={461}
                  className="h-auto w-full rounded-lg border border-white/10"
                />
              </div>
              <div className="px-6 py-4 text-[11px] text-silver/60 border-t border-white/10">
                {GREENS.fdaDisclaimer}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* THE COMPLETE STACK — highest converting bundle education */}
      <section id="stack" className="border-b border-white/10 bg-[#111414]">
        <div className="mx-auto max-w-5xl px-5 py-16 md:py-20 md:px-8 text-center">
          <SectionLabel>The Smartest Daily Combination</SectionLabel>
          <h2 className="mt-3 font-heading text-3xl md:text-5xl font-semibold tracking-[-1px] text-white">Focus Mode + Daily Greens</h2>
          <p className="mt-4 max-w-xl mx-auto text-silver/70">
            One scoop of whole-plant nutrition + two capsules of clinical nootropics. The physical + mental foundation high-performers actually use. Get both and lock in the protocol.
          </p>

          <div className="mt-10 grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            <div className="premium-card p-7 text-left">
              <div className="text-neural text-xs tracking-[1.5px]">STEP 1 — FOUNDATION</div>
              <div className="mt-2 font-heading text-2xl">Daily Greens Powder</div>
              <div className="text-sm text-silver/70 mt-1">Vitamins, minerals, adaptogens & antioxidants from 20+ plants in 60 seconds.</div>
              <div className="mt-4 text-2xl font-semibold tabular-nums">${greensPrice}</div>
            </div>
            <div className="premium-card p-7 text-left">
              <div className="text-neural text-xs tracking-[1.5px]">STEP 2 — PERFORMANCE</div>
              <div className="mt-2 font-heading text-2xl">Focus Mode Capsules</div>
              <div className="text-sm text-silver/70 mt-1">6+ hours clean, crash-free clarity powered by exact clinical extracts (24% / 7%).</div>
              <div className="mt-4 text-2xl font-semibold tabular-nums">${focusPrice} <span className="text-xs align-super text-silver/50">(40% off)</span></div>
            </div>
          </div>

          <div className="mt-8">
            <a href={GREENS_CART_URL} onClick={trackAddToCart} className="premium-cta mr-3 px-8 py-4">Add Greens — ${greensPrice}</a>
            <a href={SHOPIFY_CART_URL} onClick={trackAddToCart} className="premium-cta px-8 py-4">Add Focus — ${focusPrice}</a>
          </div>
          <p className="mt-3 text-xs text-silver/50">Or buy both separately — the complete protocol for ambitious minds.</p>
        </div>
      </section>

      {/* Trust & details footer for the shop page */}
      <div className="max-w-4xl mx-auto px-5 py-12 text-center text-silver/60 text-sm">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
          <span className="flex items-center gap-2"><Truck className="h-4 w-4" /> Ships same day from USA</span>
          <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> 30-day empty-bottle guarantee on both</span>
          <span>No artificial additives • Transparent sourcing</span>
        </div>
        <p className="mt-6 text-[11px] max-w-md mx-auto">{GREENS.warnings}</p>
        <p className="mt-2 text-[11px]">{GREENS.fdaDisclaimer}</p>
      </div>
    </>
  );
}
