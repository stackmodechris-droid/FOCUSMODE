import { FaqAccordion } from "@/components/ui/faq-accordion";
import { OpenOfferButton } from "@/components/ui/limited-offer-popup";
import { LiquidGlassButton, LiquidGlassFilter } from "@/components/ui/liquid-glass-button";
import { Reveal, SectionLabel } from "@/components/ui/reveal";
import { SITE } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Focus Mode FAQ | Botanical Capsules, Greens, Dosing & Safety",
  description:
    "Focus Mode FAQ for botanical focus capsules and plant-based daily greens: ingredients, suggested use, safety, shipping, and secure checkout details.",
  alternates: { canonical: "/faq" },
  openGraph: { images: ["/og/Front.png"] },
  twitter: {
    card: "summary_large_image",
    title: "Focus Mode FAQ | Botanical Capsules, Greens, Dosing & Safety",
    description: "Answers about Focus Mode capsules, Focus Mode Greens Energy Superfood Blend, ingredients, suggested use, shipping, and checkout.",
    images: ["/og/Front.png"],
  },
};

export default function FaqPage() {
  return (
    <>
      <LiquidGlassFilter />
      <section className="pt-16 md:pt-20">
        <div className="mx-auto max-w-3xl px-5 py-16 md:py-20 md:px-8">
          <Reveal className="mb-12 text-center">
            <SectionLabel>Questions</SectionLabel>
            <h1 className="mt-5 font-heading text-4xl font-extrabold leading-tight text-white md:text-5xl">
              Frequently Asked Questions
            </h1>
            <p className="mt-4 text-silver/65">Everything you need to know before you lock in.</p>
          </Reveal>
          <FaqAccordion withSchema />
          <div className="mt-14 flex flex-col items-center gap-3">
            <LiquidGlassButton href="/focus-mode" trackPrice={SITE.price}>Get Focus Mode Now</LiquidGlassButton>
            <OpenOfferButton />
            <p className="text-[10px] text-silver/50">Or answer 1 fun question inside the popup for a personalized “why you need this”</p>
          </div>
        </div>
      </section>
    </>
  );
}
