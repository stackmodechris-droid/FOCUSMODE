"use client";

import { ProductGlow } from "@/components/ui/product-glow";
import { ShopifyFocusEmbed, ShopifyGreensEmbed } from "@/components/ui/shopify-buy-embed";
import { GREENS, GREENS_CART_URL, SHOPIFY_CART_URL, SITE } from "@/lib/site";
import { Check, Clock, Leaf, ShieldCheck, Star, Truck, Zap } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

function LimitedTimer() {
  const [time, setTime] = useState({ m: 47, s: 19 });
  useEffect(() => {
    const id = setInterval(() => {
      setTime(t => {
        let s = t.s - 1; let m = t.m;
        if (s < 0) { s = 59; m = Math.max(0, m - 1); }
        return { m, s };
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="inline-flex items-center gap-1.5 rounded bg-red-50 px-3 py-1 text-xs font-mono-data uppercase tracking-widest text-red-500">
      <Clock className="h-3.5 w-3.5" /> LIMITED — {time.m}:{time.s.toString().padStart(2, '0')} LEFT AT THIS PRICE
    </div>
  );
}

const focusIncludes = [
  "60 capsules · full 30-day supply",
  "6+ hours of crash-free focus",
  "USA manufactured · zero fillers",
  "24% Ginkgo flavones + 7% Ginsenosides",
];

const trustItems = [
  { icon: Truck, label: "Fast shipping" },
  { icon: ShieldCheck, label: "30-day guarantee" },
  { icon: Star, label: "4.9/5 rating" },
];

export default function ShopPage() {
  const [activeGreensIngredient, setActiveGreensIngredient] = useState<number | null>(null);
  const [showFacts, setShowFacts] = useState(false);
  const focusPrice = SITE.price;
  const greensPrice = GREENS.price;

  return (
    <div className="bg-white text-gray-900">
      {/* HERO — massive discount first */}
      <section className="border-b border-gray-100 pt-16 md:pt-24">
        <div className="mx-auto max-w-7xl px-5 py-12 md:py-20 md:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-yellow-50 border border-yellow-200 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[1.5px] text-yellow-700 mb-5">
              <Zap className="h-3 w-3" /> 40% OFF — LIMITED TIME
            </div>
            <h1 className="font-heading text-4xl font-semibold tracking-[-1.2px] md:text-6xl text-gray-900">
              The edge stack.<br />Add to cart in seconds.
            </h1>
            <p className="mt-5 mx-auto max-w-2xl text-[15px] md:text-lg text-gray-500">
              Two clean, clinical products built for sharper work, better output, and zero crash. Choose one or stack both.
            </p>
          </div>

          {/* Price cards */}
          <div className="mt-10 grid gap-5 md:grid-cols-2 max-w-4xl mx-auto">
            {/* Focus Mode */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="relative rounded-2xl border-2 border-yellow-300 bg-white p-6 shadow-lg">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded bg-yellow-400 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-black shadow-sm">40% OFF TODAY</div>
              <div className="flex items-center gap-3">
                <div className="w-20 h-20 shrink-0 rounded-xl overflow-hidden bg-gray-50">
                  <Image src="/products/1780438169847-generated-label-image-2.png" alt="Focus Mode" width={80} height={80} className="w-full h-full object-contain" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[2px] text-blue-500 font-semibold">All-Natural Brain Booster</div>
                  <h2 className="font-heading text-2xl font-semibold text-gray-900">Focus Mode</h2>
                </div>
              </div>
              <div className="mt-4 flex items-baseline gap-3">
                <span className="font-heading text-5xl font-extrabold text-gray-900">${focusPrice}</span>
                <span className="text-lg text-gray-400 line-through decoration-2">${SITE.originalPrice}</span>
                <span className="rounded bg-green-100 px-2 py-0.5 text-xs font-bold text-green-700">SAVE ${Math.round(SITE.originalPrice - focusPrice)}</span>
              </div>
              <div className="mt-3 space-y-1.5 text-sm text-gray-600">
                {focusIncludes.map(t => <div key={t} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-green-500" /> {t}</div>)}
              </div>
              <div className="mt-5 rounded-xl border border-gray-100 bg-gray-50 p-4">
                <ShopifyFocusEmbed />
              </div>
            </motion.div>

            {/* Super Energy Blend */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-20 h-20 shrink-0 rounded-xl overflow-hidden bg-gray-50">
                  <Image src={GREENS.images.front} alt={GREENS.name} width={80} height={80} className="w-full h-full object-contain" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[2px] text-green-600 font-semibold">Whole-Plant Daily Energy</div>
                  <h2 className="font-heading text-2xl font-semibold text-gray-900">{GREENS.name}</h2>
                </div>
              </div>
              <div className="mt-4 flex items-baseline gap-3">
                <span className="font-heading text-5xl font-extrabold text-gray-900">${greensPrice}</span>
                <span className="text-sm text-gray-400">{GREENS.servings} servings</span>
              </div>
              <div className="mt-3 space-y-1.5 text-sm text-gray-600">
                {["20+ plants, superfoods & adaptogens", "Clean sustained energy foundation", "One scoop daily"].map(t => <div key={t} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-green-500" /> {t}</div>)}
              </div>
              <div className="mt-5 rounded-xl border border-gray-100 bg-gray-50 p-4">
                <ShopifyGreensEmbed />
              </div>
            </motion.div>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-500">
            {trustItems.map(t => <span key={t.label} className="flex items-center gap-2"><t.icon className="h-4 w-4 text-blue-500" /> {t.label}</span>)}
          </div>
        </div>
      </section>

      {/* FOCUS MODE — detailed */}
      <section id="focus" className="border-b border-gray-100 bg-gray-50/50">
        <div className="mx-auto max-w-7xl px-5 py-16 md:py-20 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative flex justify-center">
              <div className="premium-product-stage max-w-[420px]">
                <ProductGlow src="/products/1780438169847-generated-label-image-2.png" alt="Focus Mode" size={520} glow="dual" priority />
              </div>
            </div>
            <div>
              <div className="uppercase tracking-[2px] text-[10px] text-blue-500 mb-2 font-semibold">Elite Nootropic</div>
              <h2 className="font-heading text-4xl md:text-5xl font-semibold tracking-[-1px] text-gray-900">Focus Mode</h2>
              <p className="mt-3 text-lg text-gray-600">6+ hours of clean, crash-free mental clarity. Sharper decisions, faster recall, zero fog.</p>

              <div className="mt-6 flex items-baseline gap-3">
                <span className="font-heading text-5xl font-extrabold tabular-nums tracking-[-1.5px] text-gray-900">${focusPrice}</span>
                <span className="text-lg text-gray-400 line-through decoration-2">${SITE.originalPrice}</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <span className="rounded bg-yellow-300 px-3 py-0.5 text-xs font-bold tracking-wider text-black">40% OFF</span>
                <LimitedTimer />
              </div>

              <div className="mt-6 space-y-2.5 text-[14px] text-gray-700">
                {["2 clinically-dosed extracts (24% Ginkgo flavones + 7% Ginsenosides)", "Zero synthetic stimulants. Zero crash. Zero fillers.", "USA manufactured · 30-day empty-bottle guarantee"].map((t, i) => (
                  <div key={i} className="flex gap-3"><Check className="h-4 w-4 mt-0.5 text-blue-500 shrink-0" /> {t}</div>
                ))}
              </div>

              <div className="mt-8">
                <a href={SHOPIFY_CART_URL} className="premium-cta w-full justify-center">
                  Buy Focus Mode Now <Zap className="h-4 w-4" />
                </a>
              </div>
              <p className="mt-3 text-[10px] text-gray-400">Ships same day • 30-day guarantee • Subscribe & save extra at checkout</p>
            </div>
          </div>
        </div>
      </section>

      {/* GREENS — detailed */}
      <section id="greens" className="border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-5 py-16 md:py-20 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative flex justify-center order-1 lg:order-none">
              <div className="premium-product-stage max-w-[420px]">
                <ProductGlow src={GREENS.images.front} alt={GREENS.name} size={520} glow="neural" priority />
              </div>
              <button onClick={() => setShowFacts(!showFacts)} className="absolute -bottom-2 right-4 text-[10px] tracking-[1.5px] px-4 py-1.5 rounded-full border border-gray-200 bg-white hover:bg-gray-50 transition text-gray-500">
                {showFacts ? "HIDE" : "VIEW"} FULL SUPPLEMENT FACTS
              </button>
            </div>
            <div>
              <div className="uppercase tracking-[2px] text-[10px] text-green-600 mb-2 font-semibold">Whole-Plant Daily Nutrition</div>
              <h2 className="font-heading text-4xl md:text-5xl font-semibold tracking-[-1px] text-gray-900">{GREENS.name}</h2>
              <p className="mt-3 text-lg text-gray-600">{GREENS.description}</p>

              <div className="mt-6 flex items-baseline gap-3">
                <span className="font-heading text-5xl font-extrabold tabular-nums tracking-[-1.5px] text-gray-900">${greensPrice}</span>
                <span className="text-gray-500">USD • {GREENS.servings} servings</span>
              </div>

              <div className="mt-6 p-5 rounded-xl border border-gray-200 bg-gray-50">
                <div className="font-medium text-green-600 tracking-[1px] text-xs mb-2">WHY IT WORKS FOR YOUR ROUTINE</div>
                <p className="text-[14px] text-gray-700">{GREENS.howItWorks}</p>
              </div>

              <div className="mt-8">
                <div className="font-medium tracking-[1px] text-xs text-green-600 mb-3">WHAT&apos;S INSIDE — TAP TO EXPLORE</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {GREENS.ingredients.map((ing, idx) => (
                    <button key={idx} onClick={() => setActiveGreensIngredient(activeGreensIngredient === idx ? null : idx)}
                      className={`text-left px-4 py-3 rounded-lg border text-sm transition ${activeGreensIngredient === idx ? "border-green-400 bg-green-50" : "border-gray-200 hover:border-gray-300"}`}>
                      <div className="font-medium text-gray-900">{ing.name}</div>
                      {activeGreensIngredient === idx && <div className="mt-1 text-[12px] text-gray-500">{ing.role}</div>}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <a href={GREENS_CART_URL} className="premium-cta w-full justify-center bg-[#16a34a] text-white hover:bg-[#15803d] shadow-[0_1px_0_0_rgba(255,255,255,0.25)_inset,0_2px_8px_-2px_rgba(22,163,74,0.45)]">
                  Buy Energy Blend Now <Leaf className="h-4 w-4" />
                </a>
              </div>
              <p className="mt-3 text-[10px] text-gray-400">{GREENS.usage} • {GREENS.manufactured} made • No artificial additives</p>
            </div>
          </div>

          {showFacts && (
            <div className="mt-12 max-w-3xl mx-auto border border-gray-200 rounded-2xl overflow-hidden bg-gray-50">
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
                <div className="font-medium text-gray-900">Full Supplement Facts — 30 Servings</div>
                <button onClick={() => setShowFacts(false)} className="text-gray-500 hover:text-gray-900">Close</button>
              </div>
              <div className="p-4">
                <Image src={GREENS.factsImage} alt="Daily Greens Supplement Facts" width={842} height={461} className="h-auto w-full rounded-lg border border-gray-200" />
              </div>
              <div className="px-6 py-4 text-[11px] text-gray-500 border-t border-gray-200">{GREENS.fdaDisclaimer}</div>
            </div>
          )}
        </div>
      </section>

      {/* BUNDLE */}
      <section id="stack" className="border-b border-gray-100 bg-gray-50/50">
        <div className="mx-auto max-w-5xl px-5 py-16 md:py-20 md:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-yellow-50 border border-yellow-200 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[1.5px] text-yellow-700 mb-4">
            Best Value
          </div>
          <h2 className="font-heading text-3xl md:text-5xl font-semibold tracking-[-1px] text-gray-900">Focus Mode + {GREENS.name}</h2>
          <p className="mt-4 max-w-xl mx-auto text-gray-600">
            One scoop of whole-plant nutrition + two capsules of clinical nootropics. The complete protocol for ambitious minds.
          </p>

          <div className="mt-10 grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            <div className="rounded-2xl border border-gray-200 bg-white p-7 text-left">
              <div className="text-green-600 text-xs tracking-[1.5px] font-semibold">STEP 1 — FOUNDATION</div>
              <div className="mt-2 font-heading text-2xl text-gray-900">{GREENS.name}</div>
              <div className="text-sm text-gray-500 mt-1">20+ plants, superfoods & adaptogens in 60 seconds.</div>
              <div className="mt-4 text-2xl font-semibold tabular-nums text-gray-900">${greensPrice}</div>
            </div>
            <div className="rounded-2xl border-2 border-yellow-300 bg-white p-7 text-left shadow-md">
              <div className="text-blue-600 text-xs tracking-[1.5px] font-semibold">STEP 2 — PERFORMANCE</div>
              <div className="mt-2 font-heading text-2xl text-gray-900">Focus Mode Capsules</div>
              <div className="text-sm text-gray-500 mt-1">6+ hours clean, crash-free clarity powered by clinical extracts.</div>
              <div className="mt-4 text-2xl font-semibold tabular-nums text-gray-900">${focusPrice} <span className="text-xs align-super text-gray-400 line-through">${SITE.originalPrice}</span></div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3 w-full max-w-2xl mx-auto">
            <a href={SHOPIFY_CART_URL} className="premium-cta flex-1 justify-center min-w-[200px]">
              Buy Focus Mode <Zap className="h-4 w-4" />
            </a>
            <a href={GREENS_CART_URL} className="premium-cta flex-1 justify-center min-w-[200px] bg-[#16a34a] text-white hover:bg-[#15803d] shadow-[0_1px_0_0_rgba(255,255,255,0.25)_inset,0_2px_8px_-2px_rgba(22,163,74,0.45)]">
              Buy Energy Blend <Leaf className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Trust */}
      <div className="max-w-4xl mx-auto px-5 py-12 text-center text-gray-500 text-sm">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
          <span className="flex items-center gap-2"><Truck className="h-4 w-4" /> Ships same day from USA</span>
          <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> 30-day empty-bottle guarantee on both</span>
          <span>No artificial additives • Transparent sourcing</span>
        </div>
        <p className="mt-6 text-[11px] max-w-md mx-auto text-gray-400">{GREENS.warnings}</p>
        <p className="mt-2 text-[11px] text-gray-400">{GREENS.fdaDisclaimer}</p>
      </div>
    </div>
  );
}
