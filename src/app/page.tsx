import { ArticlesGrid } from "@/components/ui/blog-posts";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { FocusRoiCalculator } from "@/components/ui/focus-roi-calculator";
import { FormulaStack } from "@/components/ui/formula-stack";
import { GreenSmoothieAnimation } from "@/components/ui/green-smoothie";
import { Hero } from "@/components/ui/hero";
import { HomeLazyPopups } from "@/components/ui/home-lazy-popups";
import { IngredientsSchematic } from "@/components/ui/ingredients-schematic";
import { LiquidGlassButton, LiquidGlassFilter } from "@/components/ui/liquid-glass-button";
import { LockedInVisual } from "@/components/ui/locked-in-visual";
import { MarqueeTrust } from "@/components/ui/marquee-trust";
import { PricingSection } from "@/components/ui/pricing-section";
import { Reveal, SectionLabel } from "@/components/ui/reveal";
import { ProductShowcase } from "@/components/ui/spatial-product-showcase";
import { StatsCard } from "@/components/ui/stats-card-1";
import { StickyBuyBar } from "@/components/ui/sticky-buy-bar";
import { Testimonials } from "@/components/ui/testimonials";
import { GREENS, SITE } from "@/lib/site";
import { Brain, Coins, TrendingUp } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Focus Mode | #1 All-Natural Focus Supplement & Daily Greens for Clean Energy",
  description:
    "The #1 all-natural focus supplement and daily greens powder. 6+ hours crash-free focus + clean all-day energy. Clinical Ginkgo + Ginseng + 20+ superfoods. Zero fillers, zero caffeine, zero crash. USA made. 40% off today + 30-day guarantee.",
  alternates: { canonical: "/" },
};

const incomeChart = [
  { name: "W1", value: 38 },
  { name: "W2", value: 52 },
  { name: "W3", value: 61 },
  { name: "W4", value: 74 },
  { name: "W5", value: 88 },
  { name: "W6", value: 100 },
];

export default function Home() {
  return (
    <>
      <LiquidGlassFilter />
      <Hero />
      <MarqueeTrust />

      {/* VISUAL IMPACT — Short, punchy, stats forward */}
      <section id="impact" className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-14 md:py-16 md:px-8">
          <Reveal className="mx-auto max-w-2xl text-center mb-8">
            <SectionLabel>The Real Cost</SectionLabel>
            <h2 className="mt-3 font-heading text-3xl font-semibold tracking-[-0.6px] text-white md:text-5xl">
              Brain fog is stealing your edge.<br />Get it back.
            </h2>
          </Reveal>

          <div className="grid items-start gap-5 lg:grid-cols-3 max-w-6xl mx-auto">
            <Reveal className="lg:col-span-2 grid gap-5 sm:grid-cols-3">
              {[
                { icon: Brain, stat: "Memory", label: "Recall details, conversations & strategies when it matters" },
                { icon: TrendingUp, stat: "Speed", label: "Move faster on deals, exams, calls & execution" },
                { icon: Coins, stat: "Output", label: "Turn focus into more wins — business, school, creative" },
              ].map((c, i) => (
                <div key={i} className="premium-card p-7 text-center sm:text-left">
                  <c.icon className="h-6 w-6 text-neural mx-auto sm:mx-0" />
                  <p className="mt-4 font-heading text-3xl font-semibold tracking-[-0.6px] text-white">{c.stat}</p>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-silver/60">{c.label}</p>
                </div>
              ))}
            </Reveal>
            <Reveal delay={0.1} className="flex justify-center lg:justify-end">
              <StatsCard
                title="Avg. Weekly Output"
                currentValue={163}
                valuePostfix="%"
                description="Reported focus & output lift"
                chartData={incomeChart}
              />
            </Reveal>
          </div>
          <div className="mt-8 flex justify-center">
            <a href="/focus-mode" className="premium-cta px-8">Buy Focus Mode — ${SITE.price}</a>
          </div>
        </div>
      </section>

      {/* THE DIFFERENCE — Why us first */}
      <section className="border-b border-white/10 bg-[#111414]">
        <div className="mx-auto max-w-7xl px-5 py-14 md:py-16 md:px-8">
          <Reveal className="mx-auto mb-8 max-w-2xl text-center">
            <SectionLabel>The Difference</SectionLabel>
            <h2 className="mt-3 font-heading text-3xl font-semibold tracking-[-0.6px] text-white md:text-5xl">Not all focus is created equal.</h2>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-3 max-w-6xl mx-auto">
            {[
              { title: "Caffeine & Stims", body: "Spikes. Jitters. 2pm crash. Tolerance builds fast.", bad: true },
              { title: "Generic Nootropics", body: "Under-dosed. Mystery fillers. Marketing over molecules.", bad: true },
              { title: "Focus Mode", body: "24% Ginkgo flavones + 7% Ginsenosides Ginseng. Exact clinical doses. Zero fillers. Zero crash.", bad: false },
            ].map((c, i) => (
              <Reveal key={i} delay={i * 0.04} className={`premium-card p-6 ${c.bad ? "opacity-60" : "border-neural/40 glow-neural"}`}>
                <div className={`text-[10px] tracking-[1.5px] mb-2 ${c.bad ? "text-silver/40" : "text-neural"}`}>{c.bad ? "OLD WAY" : "THE EDGE"}</div>
                <h4 className="font-heading text-xl font-semibold tracking-[-0.3px] text-white">{c.title}</h4>
                <p className="mt-2 text-[13.5px] leading-relaxed text-silver/70">{c.body}</p>
              </Reveal>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <a href="/focus-mode" className="premium-cta px-8">Get The Clinical Edge</a>
          </div>
        </div>
      </section>

      {/* BENEFITS — Visual first (interactive orbit) */}
      <section id="benefits" className="border-b border-white/10 bg-[#111414]">
        <div className="mx-auto max-w-7xl px-5 py-14 md:py-16 md:px-8">
          <Reveal className="mx-auto max-w-2xl text-center mb-6">
            <SectionLabel>6 Core Benefits</SectionLabel>
            <h2 className="mt-3 font-heading text-3xl font-semibold tracking-[-0.6px] text-white md:text-5xl">
              Everything you need to stay locked in
            </h2>
          </Reveal>
          <div className="mt-6">
            <LockedInVisual />
          </div>
          <div className="mt-8 flex justify-center">
            <a href="/focus-mode" className="premium-cta px-8">Unlock All 6 Benefits</a>
          </div>
        </div>
      </section>

      {/* VISUAL PRODUCT — Clean showcase */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-12 md:py-14 md:px-8">
          <div className="text-center mb-6">
            <SectionLabel>Engineered Inside</SectionLabel>
            <h2 className="mt-2 font-heading text-3xl font-semibold tracking-[-0.6px] text-white md:text-5xl">Premium. Clinical. No fillers.</h2>
          </div>
          <div className="premium-product-stage">
            <ProductShowcase />
          </div>
          <div className="mt-8 flex justify-center">
            <a href="/focus-mode" className="premium-cta px-8">Buy Focus Mode Now</a>
          </div>
        </div>
      </section>

      {/* FORMULA — Visual + clinical (lean on components) */}
      <section id="formula" className="border-b border-white/10 bg-[#111414]">
        <div className="mx-auto max-w-7xl px-5 py-14 md:py-16 md:px-8">
          <div className="text-center mb-8">
            <SectionLabel>The Formula</SectionLabel>
            <h2 className="mt-2 font-heading text-3xl font-semibold tracking-[-0.6px] text-white md:text-5xl">
              Two clinical extracts.<br /><span className="text-neural">Zero fillers.</span>
            </h2>
          </div>
          <IngredientsSchematic />
          <div className="mt-10">
            <FormulaStack />
          </div>
          <div className="mt-8 flex justify-center">
            <a href="/focus-mode" className="premium-cta px-8">Get The Exact Formula</a>
          </div>
        </div>
      </section>

      {/* REAL RESULTS — Social proof before pricing */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-14 md:py-16 md:px-8">
          <div className="text-center mb-8">
            <SectionLabel>Real Results</SectionLabel>
            <h2 className="mt-2 font-heading text-3xl font-semibold tracking-[-0.6px] text-white md:text-5xl">How it changed everything.</h2>
          </div>
          <Testimonials />
          <div className="mt-8 flex justify-center">
            <a href="/focus-mode" className="premium-cta px-8">Join 10,000+ High Performers</a>
          </div>
        </div>
      </section>

      {/* PRICING — The offer */}
      <section id="pricing" className="border-b border-white/10 scroll-mt-12">
        <div className="mx-auto max-w-7xl px-5 py-12 md:py-14 md:px-8">
          <div className="text-center mb-6">
            <SectionLabel>Limited • 40% Off Today</SectionLabel>
            <h2 className="mt-1 font-heading text-3xl font-semibold tracking-[-0.6px] text-white md:text-5xl">One bottle. Out-think everyone.</h2>
          </div>
          <PricingSection />
        </div>
      </section>

      {/* FAQ — Handle objections right after price */}
      <section id="faq" className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-14 md:py-16 md:px-8 mobile-bottom-safe">
          <div className="text-center mb-8">
            <SectionLabel>Questions</SectionLabel>
            <h2 className="mt-2 font-heading text-3xl font-semibold tracking-[-0.6px] text-white md:text-5xl">Frequently asked</h2>
          </div>
          <FaqAccordion withSchema />
          <div className="mt-8 flex justify-center">
            <LiquidGlassButton href="/focus-mode">Buy Focus Mode Now</LiquidGlassButton>
          </div>
        </div>
      </section>

      {/* SUPER ENERGY BLEND — Upsell after main offer */}
      <section className="border-b border-white/10 bg-[#111414]">
        <div className="mx-auto max-w-7xl px-5 py-12 md:py-14 md:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <SectionLabel>Whole-Plant Daily Energy</SectionLabel>
              <h2 className="mt-2 font-heading text-3xl md:text-5xl font-semibold tracking-[-0.8px] text-white">Super Energy Blend</h2>
              <p className="mt-3 text-silver/75">20+ plants, superfoods &amp; adaptogens in one scoop. Clean all-day energy + the foundation that makes Focus Mode work even better.</p>
              <div className="mt-5 flex flex-wrap gap-x-4 gap-y-1 text-sm text-silver/70">
                <div>✓ 1 scoop = 60 seconds</div>
                <div>✓ Spirulina, Beet, Acai, Ginseng + more</div>
                <div>✓ Fuels body &amp; brain</div>
              </div>
              <div className="mt-6 flex gap-3">
                <a href="/green-energy" className="premium-cta px-7">Buy Super Energy Blend — ${GREENS.price}</a>
                <Link href="/green-energy" className="premium-cta-secondary px-7">Learn more</Link>
              </div>
              <p className="mt-2 text-[10px] text-silver/50">30 servings • USA made</p>
            </div>

            <div className="relative flex justify-center">
              <GreenSmoothieAnimation className="max-w-[360px]" />
            </div>
          </div>
        </div>
      </section>

      {/* ROI CALCULATOR — Rational justification */}
      <section className="border-b border-white/10 bg-[#111414] scroll-mt-12">
        <div className="mx-auto max-w-7xl px-5 py-14 md:py-16 md:px-8">
          <div className="text-center mb-8">
            <SectionLabel>See The Impact</SectionLabel>
            <h2 className="mt-2 font-heading text-3xl font-semibold tracking-[-0.6px] text-white md:text-5xl">What is fog costing you?</h2>
          </div>
          <FocusRoiCalculator />
          <div className="mt-8 flex justify-center">
            <a href="/focus-mode" className="premium-cta px-8">Stop The Leak — Buy Now</a>
          </div>
        </div>
      </section>

      {/* ARTICLES — Learn more */}
      <section className="border-b border-white/10 bg-[#111414]">
        <div className="mx-auto max-w-7xl px-5 py-14 md:py-16 md:px-8 mobile-bottom-safe">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <SectionLabel>Learn</SectionLabel>
              <h2 className="mt-2 font-heading text-3xl font-semibold tracking-[-0.6px] text-white md:text-5xl">Sharpen your mind.</h2>
            </div>
            <Link href="/articles" className="text-sm font-medium text-neural/90 hover:text-neural">All articles →</Link>
          </div>
          <ArticlesGrid limit={3} variant="dark" />
          <div className="mt-8 flex justify-center">
            <a href="/focus-mode" className="premium-cta px-8">Shop Focus Mode</a>
          </div>
        </div>
      </section>

      <StickyBuyBar />

      {/* Premium limited offer popup — lazy-loaded client only after ~22s (tuned timing + perf). Elegant, non-intrusive conversion. */}
      <HomeLazyPopups />
    </>
  );
}
