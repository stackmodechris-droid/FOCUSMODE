"use client";

import { ProductGlow } from "@/components/ui/product-glow";
import { SectionLabel } from "@/components/ui/reveal";
import { GREENS, SITE, trackPurchase } from "@/lib/site";
import { Check, Clock, ShieldCheck, Truck } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";

const INCLUDES = [
  "60 capsules · full 30-day supply",
  "Premium botanical focus formula",
  "USA manufactured · no synthetic stimulants",
  "Transparent Ginkgo + Red Asian Ginseng extracts (24% flavones / 7% ginsenosides)",
];

const TRUST = [
  { icon: Truck, label: "Fast shipping" },
  { icon: ShieldCheck, label: "Secure checkout" },
  { icon: Check, label: "30-day empty bottle guarantee" },
];

// Fun limited time countdown (client only, resets on refresh for demo)
function LimitedTimer() {
  const [time, setTime] = useState({ m: 47, s: 19 });

  useEffect(() => {
    const id = setInterval(() => {
      setTime(t => {
        let s = t.s - 1;
        let m = t.m;
        if (s < 0) { s = 59; m = Math.max(0, m - 1); }
        return { m, s };
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="inline-flex items-center gap-1.5 rounded bg-red-500/10 px-3 py-1 text-xs font-mono-data uppercase tracking-widest text-red-400">
      <Clock className="h-3.5 w-3.5" /> LIMITED — {time.m}:{time.s.toString().padStart(2, '0')} LEFT AT THIS PRICE
    </div>
  );
}

export function PricingSection() {
  const discount = SITE.discountPercent ?? 60;
  const orig = SITE.originalPrice ?? 100;

  return (
    <div className="grid items-center justify-items-center gap-10 lg:grid-cols-2 lg:gap-14">
      <div className="relative flex items-center justify-center">
        <div className="premium-product-stage max-w-[340px]">
          <ProductGlow src="/products/focus-mode-nootropic-supplement-bottle.png" alt="Focus Mode supplement bottle" size={460} glow="dual" priority className="max-w-[260px] sm:max-w-[320px] md:max-w-none" />
          {/* Fun floating urgency badge — premium, "on" the seamless stage */}
          <div className="premium-badge absolute -top-3 right-3 shadow-xl">
            60% OFF TODAY ONLY
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="premium-card relative overflow-hidden border-neural/30 p-8 md:p-10 discount-pulse"
      >
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-neural/5 blur-3xl" />

        <div className="flex items-center justify-between">
          <SectionLabel>🔥 SMALL BATCH · SHIPS TODAY</SectionLabel>
          <LimitedTimer />
        </div>

        <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight text-white md:text-4xl">
          Focus Mode <span className="text-neural">Botanical Focus Formula</span>
        </h2>

        {/* High-converting price block with anchoring + scarcity */}
        <div className="mt-6 flex flex-wrap items-baseline gap-x-4 gap-y-1">
          <div>
            <span className="font-heading text-5xl sm:text-6xl font-extrabold text-white">${SITE.price}</span>
            <span className="ml-1 align-super text-sm text-silver/60">USD</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-mono-data text-lg line-through text-silver/40">${orig}</span>
            <span className="rounded bg-bolt px-3 py-0.5 text-sm font-bold uppercase tracking-wider text-black">SAVE {discount}%</span>
          </div>
        </div>
        <p className="mt-1 text-sm text-neural font-medium">Limited Time Discount — Ends When Timer Hits Zero</p>

        <p className="mt-2 text-[11px] text-silver/50">Subscribe &amp; save extra 15% at checkout • Ships same day from USA</p>

        <ul className="mt-6 space-y-2.5">
          {INCLUDES.map((item) => (
            <li key={item} className="flex items-center gap-3 text-sm text-silver/85">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center bg-neural/15 text-neural">
                <Check className="h-3.5 w-3.5" />
              </span>
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex items-center gap-2 rounded border border-neural/30 bg-neural/10 px-4 py-3 text-xs text-neural">
          <ShieldCheck className="h-4 w-4" />
          <span><strong>30-day support.</strong> Secure checkout, fast shipping, and simple help if the product is not the right fit for your routine.</span>
        </div>

        <div className="mt-7 border-t border-white/10 pt-7">
          <div className="mb-3 flex items-center gap-2 text-[10px] tracking-[1.5px] text-silver/50">
            <div className="h-px flex-1 bg-white/10" /> SECURE SHOPIFY CHECKOUT <div className="h-px flex-1 bg-white/10" />
          </div>
          <Link href="/focus-mode" className="premium-cta mt-2 block w-full py-4 text-center text-base font-semibold" onClick={() => trackPurchase({ value: SITE.price, currency: "USD" })}>
            Buy Focus Mode — ${SITE.price}
          </Link>
          <Link
            href="/focus-mode"
            className="mt-3 block text-center font-mono-data text-[10px] uppercase tracking-widest text-silver/50 hover:text-neural underline-offset-4 hover:underline"
          >
            or view full Focus Mode details →
          </Link>
        </div>

        <div className="mt-5 flex items-center justify-between gap-3 rounded-xl border border-[#16a34a]/20 bg-[#16a34a]/5 px-4 py-3 text-xs">
          <div className="text-silver/70 min-w-0">Want the complete bundle? Add <span className="text-[#7ee6a0] font-semibold">Super Energy Blend</span> — ${GREENS.price}</div>
          <Link href="/green-energy" className="shrink-0 font-bold text-[#7ee6a0] hover:text-[#16a34a] transition-colors">Add Greens →</Link>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-silver/55">
          {TRUST.map((t) => (
            <span key={t.label} className="flex items-center gap-2">
              <t.icon className="h-4 w-4 text-neural" />
              {t.label}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
