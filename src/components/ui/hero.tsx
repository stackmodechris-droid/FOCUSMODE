"use client";

import { LiquidGlassButton } from "@/components/ui/liquid-glass-button";
import { ProductGlow } from "@/components/ui/product-glow";
import { SHOPIFY_CART_URL } from "@/lib/site";
import { ChevronDown, Star } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0a0c0c]">
      {/* Premium seamless top visual: very faint grid flows under the glass navbar for continuity (no gap, no slop) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 hud-grid opacity-30" />
      {/* Soft orbs for 3D richness */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/3 h-[520px] w-[520px] rounded-full bg-bolt/[0.035] blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 h-[380px] w-[380px] rounded-full bg-neural/[0.04] blur-[110px]" />
      </div>

      {/* Content - padded to sit below the glass nav, while bg/grid flows seamless to top edge */}
      <div className="relative mx-auto max-w-5xl px-5 pt-20 pb-4 text-center md:pt-24 md:pb-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.21, 0.92, 0.25, 1] }}
        >
          {/* Refined premium badge - Atlas/Shopify clean */}
          <div className="premium-badge mb-6">
            LIMITED • 40% OFF • $59.99
          </div>

          {/* Premium headline - tighter, bolder, luxurious spacing */}
          <h1 className="font-heading text-[42px] font-semibold leading-[0.96] tracking-[-2.2px] text-white sm:text-[56px] md:text-[72px] lg:text-[84px]">
            Elite focus.<br />
            <span className="text-bolt tracking-[-2.6px]">Engineered for operators.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-[620px] text-[15px] leading-relaxed text-silver/70 md:mt-7 md:text-[17px]">
            6+ hours of clean, crash-free mental power. Sharper decisions, faster recall, zero fog — for founders, professionals, students, creators, and anyone who gets paid to think clearly.
          </p>

          {/* Premium CTAs - tactile, rich */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <LiquidGlassButton href={SHOPIFY_CART_URL} className="px-9 py-[18px] text-[15px]">
              Claim $59.99 Bottle <Star className="h-4 w-4 fill-black" />
            </LiquidGlassButton>
            <Link
              href="/learn-more"
              className="premium-cta-secondary px-8 py-[17px] text-sm"
            >
              See the formula
            </Link>
          </div>

          {/* Trust row - clean, not spammy */}
          <div className="mt-9 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-silver/60">
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
            <a href="#pricing" className="font-medium text-bolt/90 hover:text-bolt transition">Shop now →</a>
          </div>
        </motion.div>
      </div>

      {/* Hero product showcase - prominent, 3D, beautiful (seamless premium floating stage — no border, matches the perfect render in Image #1) */}
      <div className="relative z-10 mx-auto -mt-2 max-w-5xl px-5 pb-14 md:-mt-4 md:pb-20">
        <div className="premium-product-stage mx-auto max-w-[780px]">
          <ProductGlow
            src="/products/bottle-trio.png"
            alt="Focus Mode bottles"
            size={680}
            glow="dual"
            priority
            className="mx-auto max-w-[720px]"
          />
        </div>
        <div className="mt-3 flex justify-center text-silver/30">
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
