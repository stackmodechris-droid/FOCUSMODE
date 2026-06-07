"use client";

import { GREENS, GREENS_CART_URL, SHOPIFY_CART_URL, SITE, trackAddToCart } from "@/lib/site";
import { LiquidGlassButton, LiquidGlassFilter } from "@/components/ui/liquid-glass-button";
import { ProductGlow } from "@/components/ui/product-glow";
import { Reveal, SectionLabel } from "@/components/ui/reveal";
import { Check, ShieldCheck, Truck, Zap } from "lucide-react";
import { motion } from "motion/react";
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

      {/* Shop Hero — clean, premium, dual-product focused (beats cluttered GNC grids) */}
      <section className="border-b border-white/10 pt-16 md:pt-20">
        <div className="mx-auto max-w-7xl px-5 py-16 md:py-20 md:px-8 text-center">
          <SectionLabel>The Daily Edge Protocol</SectionLabel>
          <h1 className="mt-4 font-heading text-4xl font-semibold tracking-[-1.2px] text-white md:text-6xl">
            Two products.<br />One complete daily foundation.
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-[15px] md:text-lg text-silver/70">
            Focus Mode capsules for 6+ hours of clean mental clarity + Daily Greens Powder for whole-plant vitamins, minerals, and adaptogens that fuel the physical and cognitive base your performance demands. Premium. Transparent. USA made.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#focus" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1e90ff] hover:bg-[#1a7dd9] active:scale-[0.985] px-8 py-3.5 text-[15px] font-heading font-bold text-white transition">Focus Mode — ${focusPrice}</a>
            <a href="#greens" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#16a34a] hover:bg-[#15803d] active:scale-[0.985] px-8 py-3.5 text-[15px] font-heading font-bold text-white transition">Super Energy Blend — ${greensPrice}</a>
            <Link href="#stack" className="premium-cta-secondary px-8 py-3.5 text-sm">Full Stack</Link>
          </div>
          <p className="mt-4 text-[11px] text-silver/50 tracking-[1.5px] uppercase">30-day guarantee on both • Ships today from USA</p>
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
                <div className="font-medium tracking-[1px] text-xs text-neural mb-3">WHAT'S INSIDE — TAP TO EXPLORE SYNERGY</div>
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
                <img
                  src={GREENS.factsImage}
                  alt="Daily Greens Powder Supplement Facts label"
                  className="w-full h-auto rounded-lg border border-white/10"
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
