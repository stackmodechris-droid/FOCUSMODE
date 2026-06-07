"use client";

import { LiquidGlassButton } from "@/components/ui/liquid-glass-button";
import { ProductGlow } from "@/components/ui/product-glow";
import { GREENS, GREENS_CART_URL, SHOPIFY_CART_URL, SITE, trackAddToCart } from "@/lib/site";
import { ChevronDown, Leaf, ShieldCheck, Star, Truck, Zap } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0a0c0c]">
      {/* Premium seamless dark stage — no HUD grid (clean Atlas luxury, not coded tech) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(253,228,0,0.015)_0%,transparent_60%)]" />
      {/* Soft orbs for 3D richness */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-16 sm:-top-24 left-1/3 h-[320px] w-[320px] sm:h-[520px] sm:w-[520px] rounded-full bg-neural/[0.035] blur-[80px] sm:blur-[120px]" />
        <div className="absolute top-1/4 sm:top-1/3 right-1/4 h-[240px] w-[240px] sm:h-[380px] sm:w-[380px] rounded-full bg-neural/4 blur-[70px] sm:blur-[110px]" />
      </div>

      {/* Content - padded to sit below the glass nav, while bg/grid flows seamless to top edge */}
      <div className="relative mx-auto max-w-7xl px-5 pt-16 pb-4 md:pt-20 md:pb-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.21, 0.92, 0.25, 1] }}
          className="text-center"
        >
          <div className="premium-badge mb-6">
            ALL-NATURAL DAILY PERFORMANCE • SHIPS FROM USA
          </div>

          <h1 className="mx-auto max-w-5xl font-heading text-[40px] font-semibold leading-[0.95] tracking-[-2px] text-white sm:text-[56px] md:text-[74px] lg:text-[88px]">
            Buy the daily edge stack.<br />
            <span className="text-neural tracking-[-2.6px]">Focus + clean energy.</span>
          </h1>

          <p className="mx-auto mt-5 max-w-[760px] text-[15px] leading-relaxed text-silver/70 md:text-[17px]">
            Focus Mode is the all-natural brain booster. Super Energy Blend is the whole-plant energy foundation. Two clean products built for sharper work, better output, and zero stimulant crash.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-silver/60">
            <div className="flex items-center gap-2">
              <div className="flex" aria-label="4.9 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-bolt text-bolt" />
                ))}
              </div>
              <span className="font-medium text-white/80">4.9/5</span>
              <span className="text-silver/40">from ambitious students, professionals &amp; creators</span>
            </div>
            <span className="hidden h-3 w-px bg-white/15 sm:inline-block" />
            <span className="inline-flex items-center gap-1 text-silver/55"><Truck className="h-4 w-4 text-neural" /> Ships today</span>
            <span className="inline-flex items-center gap-1 text-silver/55"><ShieldCheck className="h-4 w-4 text-neural" /> 30-day guarantee</span>
          </div>
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto mt-8 max-w-7xl px-5 pb-10 sm:pb-14 md:pb-20">
        <div className="grid gap-4 lg:grid-cols-[1fr_1fr_0.85fr]">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="premium-card relative overflow-hidden border-[#1e90ff]/30 p-5 md:p-7"
          >
            <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-[#1e90ff]/10 blur-3xl" />
            <div className="relative z-10 grid grid-cols-[0.9fr_1.1fr] items-center gap-3">
              <div className="premium-product-stage px-1 py-2">
                <ProductGlow
                  src="/products/1780438169836-generated-label-image-3.png"
                  alt="Focus Mode all-natural brain booster bottles"
                  size={430}
                  glow="dual"
                  priority
                  className="mx-auto max-w-[210px] sm:max-w-[260px] lg:max-w-[300px]"
                />
              </div>
              <div>
                <div className="inline-flex items-center gap-1 rounded-full border border-[#1e90ff]/30 bg-[#1e90ff]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[1.5px] text-[#7ec4ff]">
                  <Zap className="h-3 w-3" /> All-Natural Brain Booster
                </div>
                <h2 className="mt-3 font-heading text-3xl font-semibold tracking-[-0.8px] text-white md:text-4xl">Focus Mode</h2>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="font-heading text-4xl font-bold text-white">${SITE.price}</span>
                  <span className="text-sm text-silver/45 line-through">${SITE.originalPrice}</span>
                  <span className="rounded bg-bolt px-2 py-0.5 text-xs font-bold text-black">40% OFF</span>
                </div>
                <div className="mt-3 flex flex-wrap gap-2 text-[12px] text-silver/70">
                  <span className="rounded-full bg-white/5 px-3 py-1">Ginkgo + Ginseng</span>
                  <span className="rounded-full bg-white/5 px-3 py-1">Zero crash</span>
                  <span className="rounded-full bg-white/5 px-3 py-1">60 capsules</span>
                </div>
                <LiquidGlassButton href={SHOPIFY_CART_URL} className="mt-5 w-full px-6 py-[16px] text-[14px]">
                  Buy Focus Mode <Star className="h-4 w-4 fill-black" />
                </LiquidGlassButton>
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
            <div className="relative z-10 grid grid-cols-[0.9fr_1.1fr] items-center gap-3">
              <div className="premium-product-stage px-1 py-2">
                <ProductGlow
                  src={GREENS.images.front}
                  alt="Super Energy Blend greens jar"
                  size={410}
                  glow="neural"
                  priority
                  className="mx-auto max-w-[190px] sm:max-w-[240px] lg:max-w-[285px]"
                />
              </div>
              <div>
                <div className="inline-flex items-center gap-1 rounded-full border border-[#16a34a]/30 bg-[#16a34a]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[1.5px] text-[#7ee6a0]">
                  <Leaf className="h-3 w-3" /> Whole-Plant Energy
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
                <a href={GREENS_CART_URL} onClick={trackAddToCart} className="premium-cta mt-5 w-full bg-[#16a34a] text-white hover:bg-[#15803d]">
                  Buy Energy Blend <Leaf className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.26 }}
            className="premium-card flex flex-col justify-between p-6 text-center lg:text-left"
          >
            <div>
              <div className="text-[10px] font-bold uppercase tracking-[2px] text-neural">The Daily Edge Protocol</div>
              <h2 className="mt-3 font-heading text-3xl font-semibold tracking-[-0.7px] text-white">Stack both. Feel the difference.</h2>
              <div className="mt-4 grid grid-cols-3 gap-2 text-center text-[11px] text-silver/70">
                <div className="rounded-xl border border-white/10 bg-white/3 p-3">Clean energy</div>
                <div className="rounded-xl border border-white/10 bg-white/3 p-3">Mental clarity</div>
                <div className="rounded-xl border border-white/10 bg-white/3 p-3">No crash</div>
              </div>
              <p className="mt-4 text-sm text-silver/65">
                Big supplement stores bury you in endless grids. Focus Mode gives you the two-product stack that matters: natural daily energy plus locked-in cognitive performance.
              </p>
            </div>
            <div className="mt-6 flex flex-col gap-2">
              <Link href="/shop" className="premium-cta w-full">Shop the full stack</Link>
              <Link href="/learn-more" className="premium-cta-secondary w-full">See the formula</Link>
            </div>
          </motion.div>
        </div>

        <div className="mt-4 grid gap-2 text-center text-[11px] uppercase tracking-[1.5px] text-silver/45 sm:grid-cols-4">
          <div className="rounded-full border border-white/10 px-3 py-2">Shopify secure checkout</div>
          <div className="rounded-full border border-white/10 px-3 py-2">USA manufactured</div>
          <div className="rounded-full border border-white/10 px-3 py-2">Transparent labels</div>
          <div className="rounded-full border border-white/10 px-3 py-2">No artificial additives</div>
        </div>

        <div className="mt-5 flex justify-center text-silver/30">
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
