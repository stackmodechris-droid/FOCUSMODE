import type { Metadata } from "next";
import { Reveal, SectionLabel } from "@/components/ui/reveal";
import { ArticlesGrid } from "@/components/ui/blog-posts";
import { LiquidGlassButton, LiquidGlassFilter } from "@/components/ui/liquid-glass-button";
import { OpenOfferButton } from "@/components/ui/limited-offer-popup";
import { SHOPIFY_CART_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Articles — Focus, Discipline & Peak Performance",
  description:
    "Evidence-based articles on beating brain fog, building discipline, fighting mental fatigue, and sharpening memory for entrepreneurs, professionals, students, creators, and high-performers.",
  alternates: { canonical: "/articles" },
};

export default function ArticlesPage() {
  return (
    <>
      <LiquidGlassFilter />
      <section className="pt-16 md:pt-20">
        <div className="mx-auto max-w-7xl px-5 py-16 md:py-20 md:px-8">
          <Reveal className="mx-auto mb-14 max-w-2xl text-center">
            <SectionLabel>The Edge Library</SectionLabel>
            <h1 className="mt-5 font-heading text-4xl font-extrabold leading-tight text-white md:text-5xl">
              Sharpen Your <span className="text-neural">Mental Edge</span> — For Life
            </h1>
            <p className="mt-5 text-base leading-relaxed text-silver/70 md:text-lg">
              The science of focus, discipline, and elite cognitive performance — written for entrepreneurs, professionals, students, creators, and high-performers in business, school, medicine, and beyond who refuse to let brain fog cost them another day.
            </p>
          </Reveal>

          <ArticlesGrid />

          <div className="mt-16 flex flex-col items-center gap-3">
            <LiquidGlassButton href={SHOPIFY_CART_URL}>Get Focus Mode</LiquidGlassButton>
            <OpenOfferButton />
            <p className="text-[10px] text-silver/50">Or open the popup — answer 1 question, see your personal “why buy now”.</p>
          </div>
        </div>
      </section>
    </>
  );
}
