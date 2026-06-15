import { ArticlesGrid } from "@/components/ui/blog-posts";
import { OpenOfferButton } from "@/components/ui/limited-offer-popup";
import { LiquidGlassButton, LiquidGlassFilter } from "@/components/ui/liquid-glass-button";
import { Reveal, SectionLabel } from "@/components/ui/reveal";
import { SITE } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Focus Mode Articles | Botanicals, Greens & Daily Performance",
  description:
    "Articles from Focus Mode on botanical focus routines, plant-based greens, discipline, productivity, wellness, and daily performance for busy high-performers.",
  alternates: { canonical: "/articles" },
  openGraph: { images: ["/og/Front.png"] },
  twitter: {
    card: "summary_large_image",
    title: "Focus Mode Articles | Botanicals, Greens & Daily Performance",
    description: "Articles on botanical focus routines, plant-based greens, discipline, productivity, wellness, and daily performance.",
    images: ["/og/Front.png"],
  },
};

export default function ArticlesPage() {
  return (
    <>
      <LiquidGlassFilter />
      <section className="bg-white pt-16 md:pt-20">
        <div className="mx-auto max-w-7xl px-5 py-16 md:py-20 md:px-8">
          <Reveal className="mx-auto mb-14 max-w-2xl text-center">
            <SectionLabel>The Edge Library</SectionLabel>
            <h1 className="mt-5 font-heading text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl">
              Build Your <span className="text-neural">Daily Edge</span>
            </h1>
            <p className="mt-5 text-base leading-relaxed text-gray-600 md:text-lg">
              Practical reads on focus routines, botanical ingredients, whole-plant nutrition, discipline, and daily performance for entrepreneurs, professionals, students, creators, and high-performers.
            </p>
          </Reveal>

          <ArticlesGrid variant="light" />

          <div className="mt-16 flex flex-col items-center gap-3">
            <LiquidGlassButton href="/focus-mode" trackPrice={SITE.price}>Get Focus Mode</LiquidGlassButton>
            <OpenOfferButton />
            <p className="text-[10px] text-gray-500">Or open the popup — answer 1 question, see your personal “why buy now”.</p>
          </div>
        </div>
      </section>
    </>
  );
}
