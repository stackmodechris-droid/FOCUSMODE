"use client";

import { FaqAccordion } from "@/components/ui/faq-accordion";
import { ProductGlow } from "@/components/ui/product-glow";
import { ShopifyFocusEmbed, ShopifyGreensEmbed } from "@/components/ui/shopify-buy-embed";
import { GREENS, SITE } from "@/lib/site";
import { Check, Clock, Leaf, ShieldCheck, Star, Truck, Zap } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
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

export function ShopContent() {
  const [activeGreensIngredient, setActiveGreensIngredient] = useState<number | null>(null);
  const [showFacts, setShowFacts] = useState(false);
  const focusPrice = SITE.price;
  const greensPrice = GREENS.price;

  return (
    <div className="bg-white text-gray-900">
      {/* HERO */}
      <section className="border-b border-gray-100 pt-16 md:pt-24">
        <div className="mx-auto max-w-7xl px-5 py-12 md:py-20 md:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-yellow-50 border border-yellow-200 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[1.5px] text-yellow-700 mb-5">
              <Zap className="h-3 w-3" /> 40% OFF — LIMITED TIME
            </div>
            <h1 className="font-heading text-4xl font-semibold tracking-[-1.2px] md:text-6xl text-gray-900">
              The daily edge.<br />Add to cart in seconds.
            </h1>
            <p className="mt-5 mx-auto max-w-2xl text-[15px] md:text-lg text-gray-500">
              Two clean, clinical products built for sharper work, better output, and zero crash. Choose one or bundle both.
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
              <div className="mt-5 rounded-xl border border-gray-100 bg-gray-50 p-4 overflow-hidden">
                <ShopifyFocusEmbed />
              </div>
              <Link href="/focus-mode" className="mt-3 block text-center text-sm font-medium text-blue-600 hover:text-blue-700 hover:underline">
                View full Focus Mode details →
              </Link>
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
              <div className="mt-5 rounded-xl border border-gray-100 bg-gray-50 p-4 overflow-hidden">
                <ShopifyGreensEmbed />
              </div>
              <Link href="/green-energy" className="mt-3 block text-center text-sm font-medium text-green-600 hover:text-green-700 hover:underline">
                View full Super Energy Blend details →
              </Link>
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

              <p className="mt-8 text-[10px] text-gray-400">Ships same day • 30-day guarantee • Subscribe & save extra at checkout</p>
            </div>
          </div>
        </div>
      </section>

      {/* GREENS — detailed */}
      <section id="greens" className="border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-5 py-16 md:py-20 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative flex justify-center order-1 lg:order-0">
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

              <p className="mt-8 text-[10px] text-gray-400">{GREENS.usage} • {GREENS.manufactured} made • No artificial additives</p>
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

      {/* HOW TO USE */}
      <section className="border-b border-gray-100 bg-gray-50/50">
        <div className="mx-auto max-w-7xl px-5 py-16 md:py-20 md:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[1.5px] text-blue-600 mb-4">
              Protocol
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-[-1px] text-gray-900">How to Use</h2>
            <p className="mt-3 text-gray-500 max-w-xl mx-auto">Simple routines. Maximum results. Designed to fit any lifestyle.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Focus Mode How To */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center">
                  <Zap className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[2px] text-blue-500 font-semibold">Focus Mode Capsules</div>
                  <div className="font-heading text-lg font-semibold text-gray-900">The 2×2 Protocol</div>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { step: "1", title: "Morning dose", desc: "Take 2 capsules with water 20–30 min before your first deep-work block or meeting." },
                  { step: "2", title: "Afternoon dose", desc: "Take 2 capsules after lunch to sustain clarity through the 2pm slump." },
                  { step: "3", title: "Lock in", desc: "Eliminate distractions. Phone away. One task at a time. Let the extracts do the rest." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-3">
                    <div className="shrink-0 h-6 w-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">{item.step}</div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">{item.title}</div>
                      <div className="text-sm text-gray-500">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-lg bg-blue-50/60 p-3 text-xs text-blue-700">
                Pro tip: Pair with Super Energy Blend in the morning for all-day physical + mental stamina.
              </div>
            </div>

            {/* Greens How To */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-10 w-10 rounded-full bg-green-50 flex items-center justify-center">
                  <Leaf className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[2px] text-green-600 font-semibold">Super Energy Blend</div>
                  <div className="font-heading text-lg font-semibold text-gray-900">The 60-Second Ritual</div>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { step: "1", title: "Scoop", desc: "Add 1 scoop (4.2g) to 6–8 oz of cold water, juice, or your smoothie." },
                  { step: "2", title: "Mix", desc: "Stir or shake for 10 seconds until fully dissolved." },
                  { step: "3", title: "Drink", desc: "Consume within 10 minutes of mixing for optimal nutrient density." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-3">
                    <div className="shrink-0 h-6 w-6 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-xs font-bold">{item.step}</div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">{item.title}</div>
                      <div className="text-sm text-gray-500">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-lg bg-green-50/60 p-3 text-xs text-green-700">
                Best taken in the morning on an empty stomach or with a light breakfast.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-5 py-16 md:py-20 md:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 border border-gray-200 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[1.5px] text-gray-600 mb-4">
              Questions
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-[-1px] text-gray-900">Frequently Asked Questions</h2>
            <p className="mt-3 text-gray-500 max-w-xl mx-auto">Everything you need to know before you lock in.</p>
          </div>
          <FaqAccordion withSchema variant="light" />
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
