import { ProductGlow } from "@/components/ui/product-glow";
import { ShopifyGreensEmbed } from "@/components/ui/shopify-buy-embed";
import { GREENS } from "@/lib/site";
import { Check, Clock, Leaf, ShieldCheck, Star, Truck } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Super Energy Blend | Best Daily Greens Powder for Clean Energy & Focus",
  description:
    "Buy the best daily greens powder with 20+ superfoods & adaptogens. Spirulina, Beet Root, Acai, Ginseng, Ashwagandha. Clean sustained energy without jitters or crashes. 30 servings. USA made. 30-day guarantee.",
  alternates: { canonical: "/green-energy" },
  openGraph: {
    title: "Super Energy Blend | Best Daily Greens Powder for Clean Energy & Focus",
    description: "20+ superfoods in one scoop. Clean energy. No crash. 30 servings.",
    url: "/green-energy",
  },
  twitter: {
    card: "summary_large_image",
    title: "Super Energy Blend | Best Daily Greens Powder for Clean Energy & Focus",
    description: "20+ superfoods in one scoop. Clean energy. No crash. 30 servings.",
    images: ["/og/og-1200x900.png"],
  },
};

const TRUST = [
  { icon: Truck, label: "Fast shipping" },
  { icon: ShieldCheck, label: "30-day guarantee" },
  { icon: Star, label: "4.9/5 rating" },
];

const HOW_TO = [
  { step: "1", title: "Scoop", desc: "Add 1 scoop (4.2g) to 6–8 oz of cold water, juice, or your smoothie." },
  { step: "2", title: "Mix", desc: "Stir or shake for 10 seconds until fully dissolved." },
  { step: "3", title: "Drink", desc: "Consume within 10 minutes of mixing for optimal nutrient density." },
];

export default function GreenEnergyPage() {
  return (
    <div className="bg-white text-gray-900">
      {/* HERO */}
      <section className="border-b border-gray-100 pt-16 md:pt-24">
        <div className="mx-auto max-w-7xl px-5 py-12 md:py-20 md:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="relative flex justify-center">
              <div className="premium-product-stage max-w-[420px]">
                <ProductGlow src={GREENS.images.front} alt={GREENS.name} size={520} glow="neural" priority />
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-green-50 border border-green-200 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[1.5px] text-green-700 mb-5">
                <Leaf className="h-3 w-3" /> WHOLE-PLANT NUTRITION
              </div>
              <div className="uppercase tracking-[2px] text-[10px] text-green-600 mb-2 font-semibold">Whole-Plant Daily Energy</div>
              <h1 className="font-heading text-4xl md:text-5xl font-semibold tracking-[-1px] text-gray-900">{GREENS.name}</h1>
              <p className="mt-3 text-lg text-gray-600">{GREENS.description}</p>

              <div className="mt-6 flex items-baseline gap-3">
                <span className="font-heading text-5xl font-extrabold tabular-nums tracking-[-1.5px] text-gray-900">${GREENS.price}</span>
                <span className="text-gray-500">USD • {GREENS.servings} servings</span>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <div className="inline-flex items-center gap-1.5 rounded bg-red-50 px-3 py-1 text-xs font-mono-data uppercase tracking-widest text-red-500">
                  <Clock className="h-3.5 w-3.5" /> IN STOCK — SHIPS TODAY
                </div>
              </div>

              <div className="mt-6 space-y-2.5 text-[14px] text-gray-700">
                {["20+ plants, superfoods & adaptogens", "Clean sustained energy foundation", "One scoop daily in 60 seconds", "USA manufactured · No artificial additives"].map((t, i) => (
                  <div key={i} className="flex gap-3"><Check className="h-4 w-4 mt-0.5 text-green-600 shrink-0" /> {t}</div>
                ))}
              </div>

              <div className="mt-6 rounded-xl border border-gray-100 bg-gray-50 p-4 overflow-hidden">
                <ShopifyGreensEmbed />
              </div>

              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500">
                {TRUST.map((t) => (
                  <span key={t.label} className="flex items-center gap-2"><t.icon className="h-4 w-4 text-green-600" /> {t.label}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW TO USE */}
      <section className="border-b border-gray-100 bg-gray-50/50">
        <div className="mx-auto max-w-7xl px-5 py-16 md:py-20 md:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-green-50 border border-green-100 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[1.5px] text-green-600 mb-4">Protocol</div>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-[-1px] text-gray-900">How to Use</h2>
            <p className="mt-3 text-gray-500 max-w-xl mx-auto">The 60-second ritual that fuels your entire day.</p>
          </div>
          <div className="max-w-xl mx-auto rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
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
              {HOW_TO.map((item) => (
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
              Best taken in the morning on an empty stomach or with a light breakfast. Pair with <Link href="/focus-mode" className="font-semibold underline">Focus Mode</Link> for complete mind + body coverage.
            </div>
          </div>
        </div>
      </section>

      {/* INGREDIENTS */}
      <section className="border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-5 py-16 md:py-20 md:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 border border-gray-200 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[1.5px] text-gray-600 mb-4">Ingredients</div>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-[-1px] text-gray-900">What&apos;s inside</h2>
            <p className="mt-3 text-gray-500 max-w-xl mx-auto">20+ whole plants, superfoods, and adaptogens — thoughtfully sourced.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-5xl mx-auto">
            {GREENS.ingredients.map((ing, idx) => (
              <div key={idx} className="text-left px-4 py-3 rounded-lg border border-gray-200 bg-white hover:border-green-300 transition">
                <div className="font-medium text-gray-900">{ing.name}</div>
                <div className="mt-1 text-[12px] text-gray-500">{ing.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPLEMENT FACTS */}
      <section className="border-b border-gray-100 bg-gray-50/50">
        <div className="mx-auto max-w-7xl px-5 py-16 md:py-20 md:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 border border-gray-200 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[1.5px] text-gray-600 mb-4">Transparency</div>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-[-1px] text-gray-900">Full Supplement Facts</h2>
          </div>
          <div className="max-w-3xl mx-auto border border-gray-200 rounded-2xl overflow-hidden bg-white">
            <div className="p-4">
              <Image src={GREENS.factsImage} alt="Daily Greens Supplement Facts" width={842} height={461} className="h-auto w-full rounded-lg border border-gray-200" />
            </div>
            <div className="px-6 py-4 text-[11px] text-gray-500 border-t border-gray-200">{GREENS.fdaDisclaimer}</div>
          </div>
        </div>
      </section>

      {/* TRUST + GUARANTEE */}
      <section className="border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-5 py-16 md:py-20 md:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-[-1px] text-gray-900">30-day empty-bottle guarantee</h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">Try it risk-free. If you don&apos;t feel the difference, full refund — no questions asked.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
            {TRUST.map((t) => (
              <span key={t.label} className="flex items-center gap-2"><t.icon className="h-4 w-4 text-green-600" /> {t.label}</span>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-b border-gray-100 bg-gray-50/50">
        <div className="mx-auto max-w-7xl px-5 py-16 md:py-20 md:px-8 text-center">
          <div className="relative flex justify-center mb-8">
            <div className="premium-product-stage max-w-[280px]">
              <Image src={GREENS.images.front} alt={GREENS.name} width={280} height={280} className="h-auto w-full object-contain" priority />
            </div>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-[-1px] text-gray-900">Fuel your day the clean way</h2>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">One scoop. 20+ superfoods. Ships today from the USA.</p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link href="/shop" className="inline-flex items-center justify-center rounded-xl bg-green-500 px-8 py-4 text-sm font-bold uppercase tracking-wider text-white hover:bg-green-600 transition">Buy Now — ${GREENS.price}</Link>
            <Link href="/shop" className="inline-flex items-center justify-center rounded-xl border border-gray-300 px-8 py-4 text-sm font-medium text-gray-700 hover:bg-gray-50 transition">View Shop →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
