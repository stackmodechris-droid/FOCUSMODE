"use client";

import { AnimatedBrainLeaves } from "@/components/ui/animated-brain-leaves";
import { AnimatedLightning } from "@/components/ui/animated-lightning";
import { AnimatedPlant } from "@/components/ui/animated-plant";
import { ProductGlow } from "@/components/ui/product-glow";
import { GREENS, SITE } from "@/lib/site";
import { ChevronDown, Leaf, ShieldCheck, Star, Truck, Zap } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0a0c0c]">
      {/* Ambient background glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 -top-20 h-[360px] w-[600px] sm:h-[480px] sm:w-[900px] -translate-x-1/2 rounded-full bg-linear-to-b from-[#fde400]/[0.07] to-transparent blur-[80px] sm:blur-[120px]" />
        <div className="absolute top-1/4 right-[5%] h-[240px] w-[240px] sm:h-[380px] sm:w-[380px] rounded-full bg-[#2eb9df]/[0.05] blur-[70px] sm:blur-[100px]" />
        <div className="absolute top-[10%] left-[8%] h-[200px] w-[200px] sm:h-[320px] sm:w-[320px] rounded-full bg-[#2eb9df]/[0.04] blur-[60px] sm:blur-[90px]" />
        <div className="absolute bottom-0 inset-x-0 h-32 bg-linear-to-t from-white/60 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 pt-14 pb-4 md:pt-20 md:pb-2">
        {/* MOBILE-FIRST: Animated visual composition at the very top */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.21, 0.92, 0.25, 1] }}
          className="flex items-end justify-center gap-2 sm:gap-6 mb-10 md:mb-14 overflow-hidden"
        >
          <AnimatedLightning className="scale-[0.38] sm:scale-[0.60]" />
          <AnimatedBrainLeaves className="scale-[0.58] sm:scale-[0.85]" />
          <AnimatedPlant className="scale-[0.62] sm:scale-[0.90]" />
        </motion.div>

        {/* Headline — punchy, short */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.21, 0.92, 0.25, 1] }}
          className="text-center"
        >
          <div className="premium-badge mb-4">
            ALL-NATURAL • SHIPS FROM USA • 30-DAY GUARANTEE
          </div>

          <h1 className="mx-auto max-w-4xl font-heading text-[38px] font-semibold leading-[0.95] tracking-[-1.8px] text-white sm:text-[52px] md:text-[68px] lg:text-[80px]">
            Unlock your daily edge
          </h1>

          <p className="mx-auto mt-4 max-w-[580px] text-[15px] leading-relaxed text-silver/70 md:text-[17px]">
            Clean focus + all-day energy. Two clinical products. Zero stimulant crash.
          </p>

          {/* Compact trust row */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-silver/60">
            <div className="flex items-center gap-1.5">
              <div className="flex" aria-label="4.9 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-bolt text-bolt" />
                ))}
              </div>
              <span className="font-medium text-white/80">4.9/5</span>
            </div>
            <span className="hidden h-3 w-px bg-white/15 sm:inline-block" />
            <span className="inline-flex items-center gap-1 text-silver/55"><Truck className="h-3.5 w-3.5 text-neural" /> Ships today</span>
            <span className="hidden h-3 w-px bg-white/15 sm:inline-block" />
            <span className="inline-flex items-center gap-1 text-silver/55"><ShieldCheck className="h-3.5 w-3.5 text-neural" /> 30-day guarantee</span>
          </div>
        </motion.div>
      </div>

      {/* Product cards */}
      <div className="relative z-10 mx-auto mt-6 max-w-7xl px-5 pb-10 sm:pb-14 md:pb-20">
        <div className="grid gap-4 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="premium-card relative overflow-hidden border-[#1e90ff]/30 p-5 md:p-7"
          >
            <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-[#1e90ff]/10 blur-3xl" />
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-[0.9fr_1.1fr] items-center gap-3">
              <div className="premium-product-stage px-1 py-2">
                <ProductGlow
                  src="/products/1780438169836-generated-label-image-3.png"
                  alt="Focus Mode all-natural brain booster bottles"
                  size={430}
                  glow="dual"
                  priority
                  className="mx-auto max-w-[260px] sm:max-w-[300px] lg:max-w-[380px]"
                />
              </div>
              <div>
                <div className="inline-flex items-center gap-1 rounded-full border border-[#1e90ff]/30 bg-[#1e90ff]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[1.5px] text-[#7ec4ff]">
                  <Zap className="h-5 w-5" /> Brain Booster
                </div>
                <h2 className="mt-3 font-heading text-3xl font-semibold tracking-[-0.8px] text-white md:text-4xl">Focus Mode</h2>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="font-heading text-4xl font-bold text-white">${SITE.price}</span>
                  <span className="text-sm text-silver/45 line-through">${SITE.originalPrice}</span>
                  <span className="rounded bg-bolt px-2 py-0.5 text-xs font-bold text-black">60% OFF</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2 text-[12px] text-silver/70">
                  <span className="rounded-full bg-white/5 px-3 py-1">Ginkgo + Ginseng</span>
                  <span className="rounded-full bg-white/5 px-3 py-1">Zero crash</span>
                  <span className="rounded-full bg-white/5 px-3 py-1">60 capsules</span>
                </div>
                <Link href="/shop" className="premium-cta mt-5 w-full">
                  Shop Now <Star className="h-4 w-4 fill-black" />
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="premium-card relative overflow-hidden border-[#16a34a]/30 p-5 md:p-7"
          >
            <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-[#16a34a]/10 blur-3xl" />
            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-[0.9fr_1.1fr] items-center gap-3">
              <div className="premium-product-stage px-1 py-2">
                <ProductGlow
                  src={GREENS.images.front}
                  alt="Super Energy Blend greens jar"
                  size={410}
                  glow="neural"
                  priority
                  className="mx-auto max-w-[240px] sm:max-w-[280px] lg:max-w-[360px]"
                />
              </div>
              <div>
                <div className="inline-flex items-center gap-1 rounded-full border border-[#16a34a]/30 bg-[#16a34a]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[1.5px] text-[#7ee6a0]">
                  <Leaf className="h-5 w-5" /> Whole-Plant Energy
                </div>
                <h2 className="mt-3 font-heading text-3xl font-semibold tracking-[-0.8px] text-white md:text-4xl">{GREENS.name}</h2>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="font-heading text-4xl font-bold text-white">${GREENS.price}</span>
                  <span className="text-sm text-silver/55">{GREENS.servings} servings</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2 text-[12px] text-silver/70">
                  <span className="rounded-full bg-white/5 px-3 py-1">20+ plants</span>
                  <span className="rounded-full bg-white/5 px-3 py-1">Adaptogens</span>
                  <span className="rounded-full bg-white/5 px-3 py-1">1 scoop daily</span>
                </div>
                <Link href="/shop" className="premium-cta mt-5 w-full">
                  Shop Now <Leaf className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bundle upsell strip */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.32 }}
          className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/2.5 px-5 py-3.5 backdrop-blur-sm"
        >
          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-sm text-silver/70">
            <span className="text-neural font-bold text-xs uppercase tracking-[1.5px]">Complete Daily Edge</span>
            <span className="hidden sm:inline text-white/20">·</span>
            <span className="hidden sm:inline">Focus Mode + Super Energy Blend</span>
            <span className="text-xs text-silver/45 text-center w-full sm:w-auto">Clean energy + locked-in focus, zero crash</span>
          </div>
          <Link href="/shop" className="shrink-0 text-xs font-bold uppercase tracking-[1.5px] text-bolt hover:text-bolt/80 transition-colors">
            View Complete Bundle →
          </Link>
        </motion.div>

        <div className="mt-3 grid gap-2 text-center text-[11px] uppercase tracking-[1.5px] text-silver/45 sm:grid-cols-4">
          <div className="rounded-full border border-white/10 px-3 py-2">Halal ingredients</div>
          <div className="rounded-full border border-white/10 px-3 py-2">Straight from nature</div>
          <div className="rounded-full border border-white/10 px-3 py-2">USA manufactured</div>
          <div className="rounded-full border border-white/10 px-3 py-2">No artificial additives</div>
        </div>

        <div className="mt-5 flex justify-center text-silver/30">
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
