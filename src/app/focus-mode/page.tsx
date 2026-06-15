import { FaqAccordion } from "@/components/ui/faq-accordion";
import { GoogleReviewBadge } from "@/components/ui/google-review-badge";
import { ProductGlow } from "@/components/ui/product-glow";
import { ShopifyFocusEmbed } from "@/components/ui/shopify-buy-embed";
import { TrackViewContent } from "@/components/ui/track-view-content";
import { TrackableLink } from "@/components/ui/trackable-link";
import { SITE } from "@/lib/site";
import { Check, Clock, ShieldCheck, Star, Truck, Zap } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: SITE.productTitle,
  description:
    "Focus Mode is a premium botanical nootropic supplement with Ginkgo Biloba and Red Asian Ginseng for memory, mental clarity, focus, productivity, and daily cognitive performance.",
  alternates: { canonical: "/focus-mode" },
  openGraph: {
    title: SITE.productTitle,
    description: "Premium botanical focus formula with Ginkgo Biloba, Red Asian Ginseng, plant-based capsules, and no synthetic stimulants.",
    url: "/focus-mode",
    images: ["/og/Front.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.productTitle,
    description: "Premium botanical focus formula with Ginkgo Biloba and Red Asian Ginseng.",
    images: ["/og/Front.png"],
  },
};

const INCLUDES = [
  "60 capsules · full 30-day supply",
  "Premium botanical focus formula",
  "USA manufactured · no synthetic stimulants",
  "24% Ginkgo flavones + 7% Ginsenosides",
  "Plant-based vegetable capsules",
];

const TRUST = [
  { icon: Truck, label: "Fast shipping" },
  { icon: ShieldCheck, label: "30-day guarantee" },
  { icon: Star, label: "Google reviewed" },
];

const HOW_TO = [
  { step: "1", title: "Morning dose", desc: "Take 2 capsules with water 20–30 min before your first deep-work block or meeting." },
  { step: "2", title: "Afternoon dose", desc: "Take 2 capsules after lunch to sustain clarity through the 2pm slump." },
  { step: "3", title: "Lock in", desc: "Eliminate distractions. Phone away. One task at a time. Build the routine around your hardest work." },
];

export default function FocusModePage() {
  const discount = SITE.discountPercent ?? 60;
  const orig = SITE.originalPrice ?? 100;

  return (
    <div className="bg-white text-gray-900">
      <TrackViewContent name="Focus Mode" value={SITE.price} currency="USD" />
      {/* HERO */}
      <section className="border-b border-gray-100 pt-16 md:pt-24">
        <div className="mx-auto max-w-7xl px-5 py-12 md:py-20 md:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="relative flex justify-center">
              <div className="premium-product-stage max-w-[420px]">
                <ProductGlow src="/products/focus-mode-nootropic-supplement-bottle.png" alt="Focus Mode supplement bottle" size={520} glow="dual" priority />
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-yellow-50 border border-yellow-200 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[1.5px] text-yellow-700 mb-5">
                <Zap className="h-3 w-3" /> 60% OFF — LIMITED TIME
              </div>
              <div className="uppercase tracking-[2px] text-[10px] text-blue-500 mb-2 font-semibold">Premium Botanical Focus Formula</div>
              <h1 className="font-heading text-3xl md:text-5xl font-semibold tracking-[-1px] text-gray-900">{SITE.productTitle}</h1>
              <p className="mt-3 text-lg text-gray-600">{SITE.shortDescription}</p>

              <div className="mt-6 flex flex-wrap items-baseline gap-3">
                <span className="font-heading text-5xl font-extrabold tabular-nums tracking-[-1.5px] text-gray-900">${SITE.price}</span>
                <span className="text-lg text-gray-400 line-through decoration-2">${orig}</span>
                <span className="rounded bg-yellow-300 px-3 py-0.5 text-xs font-bold tracking-wider text-black">SAVE {discount}%</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <div className="inline-flex items-center gap-1.5 rounded bg-red-50 px-3 py-1 text-xs font-mono-data uppercase tracking-widest text-red-500">
                  <Clock className="h-3.5 w-3.5" /> LIMITED TIME PRICE
                </div>
              </div>

              <div className="mt-6 space-y-2.5 text-[14px] text-gray-700">
                {INCLUDES.map((t, i) => (
                  <div key={i} className="flex gap-3"><Check className="h-4 w-4 mt-0.5 text-blue-500 shrink-0" /> {t}</div>
                ))}
              </div>

              <div className="mt-6 rounded-xl border border-gray-100 bg-gray-50 p-4 overflow-hidden">
                <ShopifyFocusEmbed />
              </div>

              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500">
                {TRUST.map((t) => (
                  <span key={t.label} className="flex items-center gap-2"><t.icon className="h-4 w-4 text-blue-500" /> {t.label}</span>
                ))}
              </div>
              <div className="mt-4">
                <GoogleReviewBadge />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW TO USE */}
      <section className="border-b border-gray-100 bg-gray-50/50">
        <div className="mx-auto max-w-7xl px-5 py-16 md:py-20 md:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-100 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[1.5px] text-blue-600 mb-4">Protocol</div>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-[-1px] text-gray-900">How to Use</h2>
            <p className="mt-3 text-gray-500 max-w-xl mx-auto">A simple focus ritual for disciplined work, study, trading, creation, and training days.</p>
          </div>
          <div className="max-w-xl mx-auto rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
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
              {HOW_TO.map((item) => (
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
              Pro tip: Pair with <Link href="/green-energy" className="font-semibold underline">Super Energy Blend</Link> in the morning for all-day physical + mental stamina.
            </div>
          </div>
        </div>
      </section>

      {/* INGREDIENTS HIGHLIGHT */}
      <section className="border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-5 py-16 md:py-20 md:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 border border-gray-200 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[1.5px] text-gray-600 mb-4">Formula</div>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-[-1px] text-gray-900">Two botanical extracts. No synthetic stimulants.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="text-[10px] uppercase tracking-[2px] text-blue-500 font-semibold mb-2">Extract 1</div>
              <h3 className="font-heading text-xl font-semibold text-gray-900">Ginkgo Biloba Leaf Extract</h3>
              <p className="mt-2 text-sm text-gray-600">24% Flavone Glycosides — a premium botanical extract used in wellness routines for mental clarity, focus, and daily cognitive performance.</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="text-[10px] uppercase tracking-[2px] text-blue-500 font-semibold mb-2">Extract 2</div>
              <h3 className="font-heading text-xl font-semibold text-gray-900">Red Asian Ginseng Extract</h3>
              <p className="mt-2 text-sm text-gray-600">7% Ginsenosides — a classic botanical extract selected for high-performers who want a disciplined, plant-based focus ritual.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST + GUARANTEE */}
      <section className="border-b border-gray-100 bg-gray-50/50">
        <div className="mx-auto max-w-7xl px-5 py-16 md:py-20 md:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-[-1px] text-gray-900">30-day empty-bottle guarantee</h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">Simple, transparent support if the product is not the right fit for your routine. Secure checkout, fast shipping, and USA manufacturing.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            {TRUST.map((t) => (
              <span key={t.label} className="flex items-center gap-2"><t.icon className="h-4 w-4 text-blue-500" /> {t.label}</span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-5 py-16 md:py-20 md:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 border border-gray-200 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[1.5px] text-gray-600 mb-4">Questions</div>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-[-1px] text-gray-900">Frequently Asked</h2>
          </div>
          <FaqAccordion withSchema variant="light" />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-b border-gray-100 bg-gray-50/50">
        <div className="mx-auto max-w-7xl px-5 py-16 md:py-20 md:px-8 text-center">
          <div className="relative flex justify-center mb-8">
            <div className="premium-product-stage max-w-[280px] overflow-hidden">
              <Image src="/products/focus-mode-nootropic-supplement-bottle.png" alt="Focus Mode" width={280} height={280} className="h-auto w-full object-contain" priority />
            </div>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-[-1px] text-gray-900">Ready to lock in?</h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">One bottle. 60 vegetable capsules. Built for focus, powered by discipline, and shipped from the USA.</p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <TrackableLink href="/shop" price={SITE.price} className="inline-flex items-center justify-center rounded-xl bg-bolt px-8 py-4 text-sm font-bold uppercase tracking-wider text-black hover:bg-bolt-dim transition">Buy Now — ${SITE.price}</TrackableLink>
            <Link href="/shop" className="inline-flex items-center justify-center rounded-xl border border-gray-300 px-8 py-4 text-sm font-medium text-gray-700 hover:bg-gray-50 transition">View Shop →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
