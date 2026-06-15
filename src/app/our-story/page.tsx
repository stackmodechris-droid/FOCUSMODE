import { ArticlesGrid } from "@/components/ui/blog-posts";
import { ElectricBrainBg } from "@/components/ui/electric-brain";
import { Founders } from "@/components/ui/founders";
import { OpenOfferButton } from "@/components/ui/limited-offer-popup";
import { LiquidGlassButton, LiquidGlassFilter } from "@/components/ui/liquid-glass-button";
import { ProductGlow } from "@/components/ui/product-glow";
import { Reveal, SectionLabel } from "@/components/ui/reveal";
import { INGREDIENTS, SITE } from "@/lib/site";
import { Activity, Brain, Cpu, Database, Eye, Leaf, Zap } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Story | Focus Mode Botanical Supplements",
  description:
    "The story behind Focus Mode botanical focus capsules and daily greens: plant-based ingredients, transparent formulas, USA manufacturing, and a disciplined performance lifestyle.",
  alternates: { canonical: "/our-story" },
  openGraph: { images: ["/og/Front.png"] },
  twitter: {
    card: "summary_large_image",
    title: "Our Story | Focus Mode Botanical Supplements",
    description: "The story behind Focus Mode botanical focus capsules and daily greens.",
    images: ["/og/Front.png"],
  },
};

const PHILOSOPHY = [
  { icon: Cpu, title: "Mind as the Ultimate Asset", body: "Your routine shapes your output. Focus Mode is built for people who treat discipline, nutrition, and focus as daily standards." },
  { icon: Eye, title: "Formula Transparency", body: "No proprietary blend mystery. The core botanicals and label details are clear so customers know what they are buying." },
  { icon: Leaf, title: "Plant-Based Ingredients", body: "Botanical capsules and greens-first nutrition, selected for clean daily use and manufactured in the USA." },
];

export default function OurStoryPage() {
  return (
    <>
      <LiquidGlassFilter />
      <section className="relative overflow-hidden border-b border-border bg-surface-dim">
        <ElectricBrainBg />
        <div className="relative mx-auto max-w-4xl px-5 py-20 md:py-24 text-center md:px-8">
          <Reveal>
            <SectionLabel>Our Standard</SectionLabel>
            <h1 className="mx-auto mt-6 max-w-3xl font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-white md:text-6xl">
              Built for Discipline, <br />
              <span className="text-silver">Built for </span>
              <span className="text-neural">Focus.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-silver/75 md:text-lg">
              We built Focus Mode for people who want a cleaner daily routine around work, study, training, trading,
              and creation.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:py-24 md:px-8 lg:grid-cols-2">
          <Reveal>
            <SectionLabel>Founder · Focus Mode</SectionLabel>
            <h2 className="mt-5 font-heading text-3xl font-extrabold leading-tight text-white md:text-4xl">
              The Story of {SITE.founder}
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-silver/70">
              <p>
                Before Focus Mode existed, Christopher was building through long workdays, constant context switching,
                and the pressure of staying consistent while running multiple ventures.
              </p>
              <p>
                &ldquo;I wanted a cleaner routine, not another chaotic spike. Something simple, botanical, transparent,
                and easy to repeat every day.&rdquo;
              </p>
              <p>
                So {SITE.founder} and the Focus Mode team built a focused botanical capsule formula, then added
                a plant-based greens blend for whole-body daily wellness.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <LiquidGlassButton href="/focus-mode" trackPrice={SITE.price}>Get Focus Mode</LiquidGlassButton>
              <OpenOfferButton />
            </div>
          </Reveal>
          <Reveal delay={0.15} className="flex justify-center">
            <div className="premium-product-stage max-w-[320px]">
              <ProductGlow src="/products/focus-mode-capsules-product.png" alt="Focus Mode bottle and capsules" size={460} glow="dual" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Philosophy */}
      <section className="border-b border-border bg-surface-dim">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8">
          <Reveal className="mb-12 text-center">
            <h2 className="font-heading text-3xl font-extrabold leading-tight text-white md:text-4xl">Our Philosophy</h2>
            <p className="mt-4 text-silver/65">We build simple daily wellness products for people who take their routine seriously.</p>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {PHILOSOPHY.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="h-full premium-card p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-neural/10 text-neural">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 font-heading text-[19px] font-semibold tracking-[-0.2px] text-white">{p.title}</h3>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-silver/60">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* The Full Stack — Green Energy */}
      <section className="border-b border-white/10 bg-[#111414]">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <SectionLabel>The Full Stack</SectionLabel>
              <h2 className="mt-4 font-heading text-3xl font-extrabold leading-tight text-white md:text-4xl">
                Mind + Body. <span className="text-neural">One System.</span>
              </h2>
              <p className="mt-5 text-base leading-relaxed text-silver/70">
                Focus Mode started with the capsule: Ginkgo Biloba and Red Asian Ginseng in a clean vegetable
                capsule format for demanding daily routines.
              </p>
              <p className="mt-4 text-base leading-relaxed text-silver/70">
                That&apos;s why we built <span className="text-white font-semibold">Focus Mode Greens Energy Superfood Blend</span>.
                20+ superfoods, greens, fruits, vegetables, and adaptogens in one scoop for whole-plant daily nutrition.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/green-energy" className="premium-cta px-7">Try Super Energy Blend</Link>
                <Link href="/green-energy" className="premium-cta-secondary px-7">Learn more</Link>
              </div>
            </Reveal>
            <Reveal delay={0.15} className="flex justify-center">
              <div className="premium-product-stage max-w-[360px]">
                <Image
                  src="/greens/super-energy-blend-greens-powder-front.png"
                  alt="Super Energy Blend — daily greens powder"
                  width={420}
                  height={420}
                  className="h-auto w-full object-contain"
                  priority
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* The Network */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8">
          <Reveal className="mb-14 text-center">
            <SectionLabel>The Team</SectionLabel>
            <h2 className="mt-5 font-heading text-3xl font-extrabold leading-tight text-white md:text-4xl">
              The Focus Mode Team
            </h2>
            <p className="mt-4 text-silver/65">A mission-driven team helping high-performers in business, school, creative work, and the markets win with a sharper mind.</p>
          </Reveal>
          <Founders />
          <div className="mt-14 flex justify-center">
            <LiquidGlassButton href="/focus-mode" trackPrice={SITE.price}>Get Focus Mode</LiquidGlassButton>
          </div>
        </div>
      </section>

      {/* Formula */}
      <section className="border-b border-white/10 bg-[#111414]">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8">
          <Reveal className="mb-12 text-center">
            <SectionLabel>The Formula</SectionLabel>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-[-0.5px] text-white md:text-4xl">
              A Look Inside The Capsule
            </h2>
            <p className="mt-4 text-silver/65">No proprietary blend mystery. Just a simple look at what is inside.</p>
          </Reveal>

          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal className="flex justify-center">
              <div className="premium-product-stage max-w-[320px]">
                <ProductGlow src="/products/focus-mode-open-supplement-bottle.png" alt="Focus Mode capsules" size={460} glow="dual" className="max-w-[280px] sm:max-w-sm md:max-w-none" />
              </div>
            </Reveal>
            <div className="space-y-5">
              {INGREDIENTS.map((ing, i) => (
                <Reveal key={ing.name} delay={i * 0.1}>
                  <div className="premium-card p-6">
                    <div className="flex items-center justify-between font-mono-data text-[11px] uppercase tracking-widest text-neural">
                      <span>{ing.spec}</span>
                      <span className="text-neural">{ing.dose}</span>
                    </div>
                    <h3 className="mt-3 font-heading text-xl font-bold text-white">{ing.name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-silver/65">{ing.detail}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Zap, title: "Botanical Focus", body: "Red Asian Ginseng standardized to 7% Ginsenosides." },
              { icon: Activity, title: "Ginkgo Extract", body: "Ginkgo Biloba Leaf Extract standardized to 24% Flavone Glycosides." },
              { icon: Brain, title: "Daily Routine", body: "Designed to fit work, study, trading, gaming, and creative schedules." },
              { icon: Database, title: "The Standard", body: "Transparent ingredients, plant-based capsules, and no proprietary blend mystery." },
            ].map((m, i) => (
              <Reveal key={m.title} delay={i * 0.06}>
                <div className="h-full premium-card p-6">
                  <m.icon className="h-5 w-5 text-neural" />
                  <h3 className="mt-4 font-heading text-[16px] font-semibold tracking-[-0.2px] text-white">{m.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-silver/60">{m.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Journal */}
      <section>
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <Reveal>
              <SectionLabel>The Journal</SectionLabel>
              <h2 className="mt-3 font-heading text-3xl font-semibold tracking-[-0.6px] text-white md:text-4xl">Sharpen your mind.</h2>
              <p className="mt-3 text-silver/65 max-w-lg">Readable guides on focus, discipline, botanicals, greens, and daily performance routines.</p>
            </Reveal>
            <Link href="/articles" className="text-sm font-medium text-neural/90 hover:text-neural transition-colors">All articles →</Link>
          </div>
          <ArticlesGrid limit={3} variant="dark" />
        </div>
      </section>
    </>
  );
}
