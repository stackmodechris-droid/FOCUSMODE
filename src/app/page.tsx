import { ArticlesGrid } from "@/components/ui/blog-posts";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { FocusRoiCalculator } from "@/components/ui/focus-roi-calculator";
import { FormulaStack } from "@/components/ui/formula-stack";
import { Hero } from "@/components/ui/hero";
import { HomeLazyPopups } from "@/components/ui/home-lazy-popups";
import { IngredientsSchematic } from "@/components/ui/ingredients-schematic";
import { LiquidGlassButton, LiquidGlassFilter } from "@/components/ui/liquid-glass-button";
import { LockedInVisual } from "@/components/ui/locked-in-visual";
import { MarqueeTrust } from "@/components/ui/marquee-trust";
import { PricingSection } from "@/components/ui/pricing-section";
import { ProductGlow } from "@/components/ui/product-glow";
import { Reveal, SectionLabel } from "@/components/ui/reveal";
import { ShopifyBuyAnchor } from "@/components/ui/shopify-buy-anchor";
import { ProductShowcase } from "@/components/ui/spatial-product-showcase";
import { StatsCard } from "@/components/ui/stats-card-1";
import { StickyBuyBar } from "@/components/ui/sticky-buy-bar";
import { Testimonials } from "@/components/ui/testimonials";
import { GREENS, GREENS_CART_URL, SHOPIFY_CART_URL, SITE } from "@/lib/site";
import { Brain, Coins, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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

      {/* DUAL PRODUCT VISUAL SHOP — High-converting, minimal text, strong visuals */}
      <section id="products" className="border-b border-white/10 bg-[#0c0f0f]">
        <div className="mx-auto max-w-7xl px-5 py-8 md:py-10">
          {/* Punchy header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex items-start gap-4">
              <div className="shrink-0">
                <div className="bg-bolt text-black font-heading font-extrabold text-2xl md:text-[30px] leading-none px-5 py-2.5 rounded-md tracking-[-0.5px]">40% OFF</div>
                <div className="text-center text-[10px] text-bolt/90 font-bold tracking-[2px] mt-1">TODAY ONLY</div>
              </div>
              <div>
                <div className="text-sm uppercase tracking-[2px] text-neural">All-Natural • Plant-Based • USA Made</div>
                <div className="font-heading text-2xl md:text-3xl text-white mt-1 leading-tight">Focus + Daily Greens.<br />Peak performance, zero crash.</div>
              </div>
            </div>
            <div className="md:text-right flex-shrink-0">
              <Link href="/shop" className="inline-flex items-center justify-center bg-bolt text-black font-heading font-bold px-8 py-3 rounded-md text-base w-full md:w-auto hover:brightness-105 active:scale-[0.985] transition">
                VIEW FULL STACK
              </Link>
              <div className="text-[10px] text-silver/50 mt-1 tracking-widest">Ships today • 30-day guarantee</div>
            </div>
          </div>

          {/* Two visual product cards — less text, big images, direct CTAs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-6xl mx-auto pt-6">
            {/* Focus Mode — Blue accent card */}
            <div className="premium-card p-6 flex flex-col border-[#1e90ff]/30">
              <div className="flex gap-4 items-start">
                <div className="w-20 h-20 flex-shrink-0 relative">
                  <Image src="/products/1780438169847-generated-label-image-2.png" alt="Focus Mode supplement bottle" fill className="object-contain" priority />
                </div>
                <div className="flex-1">
                  <div className="inline-block uppercase text-[10px] tracking-[1.5px] bg-[#1e90ff]/10 text-[#1e90ff] px-2 py-0.5 rounded">6+ HOUR CLEAN FOCUS</div>
                  <div className="font-heading text-2xl mt-1">Focus Mode</div>
                  <div className="text-sm text-silver/70 mt-1">Clinically-dosed Ginkgo + Ginseng. Sharp mental energy. Zero jitters. Zero crash.</div>
                </div>
              </div>

              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-heading text-4xl tabular-nums">${SITE.price}</span>
                <span className="text-sm text-silver/50 line-through">was ${SITE.originalPrice}</span>
                <span className="ml-2 text-xs font-bold bg-bolt text-black px-2 py-0.5 rounded">40% OFF</span>
              </div>

              <div className="mt-3 text-xs text-silver/60 flex flex-wrap gap-x-4">
                <span>✓ Brain boost &amp; focus</span>
                <span>✓ Zero crash</span>
                <span>✓ 30-day supply</span>
              </div>

              <div className="mt-auto pt-5">
                <ShopifyBuyAnchor className="premium-cta w-full justify-center py-3 text-sm">Buy Focus Mode — ${SITE.price}</ShopifyBuyAnchor>
              </div>
              <div className="text-center text-[10px] mt-2 text-silver/50">60 capsules • USA made</div>
            </div>

            {/* Green Super Energy Blend — Green accent card */}
            <div className="premium-card p-6 flex flex-col border-[#16a34a]/30">
              <div className="flex gap-4 items-start">
                <div className="w-20 h-20 flex-shrink-0 relative">
                  <Image src="/greens/1780842565396-generated-label-image-2_800x800.png" alt="Super Energy Blend label" fill className="object-contain" />
                </div>
                <div className="flex-1">
                  <div className="inline-block uppercase text-[10px] tracking-[1.5px] bg-[#16a34a]/10 text-[#16a34a] px-2 py-0.5 rounded">WHOLE-PLANT DAILY ENERGY</div>
                  <div className="font-heading text-2xl mt-1">Super Energy Blend</div>
                  <div className="text-sm text-silver/70 mt-1">20+ plants, superfoods &amp; adaptogens. Clean sustained energy + daily vitality foundation.</div>
                </div>
              </div>

              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-heading text-4xl tabular-nums">${GREENS.price}</span>
                <span className="text-sm text-silver/50">30 servings</span>
              </div>

              <div className="mt-3 text-xs text-silver/60 flex flex-wrap gap-x-4">
                <span>✓ All-day clean energy</span>
                <span>✓ Brain &amp; body support</span>
                <span>✓ 1 scoop daily</span>
              </div>

              <div className="mt-3 flex gap-2">
                <div className="w-10 h-10 relative rounded border border-white/10 overflow-hidden"><Image src="/greens/1780842565402-generated-label-image-3_800x800.png" alt="Super Energy Blend" fill className="object-contain" /></div>
                <div className="w-10 h-10 relative rounded border border-white/10 overflow-hidden"><Image src="/greens/1780842565406-generated-label-image-0_800x800.png" alt="Super Energy Blend" fill className="object-contain" /></div>
              </div>

              <div className="mt-auto pt-5">
                <a href={GREENS_CART_URL} className="flex-1 inline-flex items-center justify-center gap-2 rounded-md bg-[#16a34a] hover:bg-[#15803d] px-6 py-3 font-heading text-sm font-bold text-white w-full transition active:scale-[0.985]">
                  Buy Super Energy Blend — ${GREENS.price}
                </a>
              </div>
              <div className="text-center text-[10px] mt-2 text-silver/50">USA made • No artificial additives</div>
            </div>
          </div>

          {/* Direct dual CTAs — high conversion row */}
          <div className="mt-6 max-w-[620px] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <ShopifyBuyAnchor className="premium-cta flex-1 justify-center py-3.5 text-[15px]">
                Buy Focus Mode — ${SITE.price}
              </ShopifyBuyAnchor>
              <a href={GREENS_CART_URL} className="flex-1 inline-flex items-center justify-center gap-2 rounded-md bg-[#16a34a] hover:bg-[#15803d] px-6 py-3.5 font-heading text-[15px] font-bold text-white transition active:scale-[0.985]">
                Buy Super Energy Blend — ${GREENS.price}
              </a>
            </div>
            <p className="mt-2 text-center text-xs text-silver/60">Stack both for complete daily edge. 30-day guarantee.</p>
          </div>
        </div>
      </section>

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
        </div>
      </section>

      {/* DESIGNED FOR — Visual, minimal text, high scan */}
      <section className="border-b border-white/10 bg-[#111414]">
        <div className="mx-auto max-w-7xl px-5 py-12 md:py-14 md:px-8">
          <div className="text-center mb-6">
            <SectionLabel>Built For</SectionLabel>
          </div>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            {["Entrepreneurs & Founders", "Professionals & Executives", "Students & High-Achievers", "Creators & Deep Workers", "Athletes & Coaches"].map((label, i) => (
              <div key={i} className="premium-card px-5 py-2.5 text-silver/90 border-white/10">{label}</div>
            ))}
          </div>
          <p className="text-center text-xs text-silver/50 mt-5">6+ hours clean focus. No crash. For anyone who gets paid to think clearly.</p>
        </div>
      </section>

      {/* THE DIFFERENCE — Visual comparison, minimal text */}
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
        </div>
      </section>

      {/* ROI CALCULATOR — Interactive high-converter */}
      <section className="border-b border-white/10 bg-[#111414] scroll-mt-12">
        <div className="mx-auto max-w-7xl px-5 py-14 md:py-16 md:px-8">
          <div className="text-center mb-8">
            <SectionLabel>See The Impact</SectionLabel>
            <h2 className="mt-2 font-heading text-3xl font-semibold tracking-[-0.6px] text-white md:text-5xl">What is fog costing you?</h2>
          </div>
          <FocusRoiCalculator />
        </div>
      </section>

      {/* SUPER ENERGY BLEND — Visual + direct */}
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
                <a href={GREENS_CART_URL} className="premium-cta px-7">Buy Super Energy Blend — ${GREENS.price}</a>
                <Link href="/shop#greens" className="premium-cta-secondary px-7">Learn more</Link>
              </div>
              <p className="mt-2 text-[10px] text-silver/50">30 servings • USA made</p>
            </div>

            <div className="relative flex justify-center">
              <div className="premium-product-stage max-w-[360px]">
                <ProductGlow
                  src={GREENS.images.front}
                  alt="Super Energy Blend greens tub"
                  size={420}
                  glow="neural"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING — High converting close */}
      <section id="pricing" className="border-b border-white/10 scroll-mt-12">
        <div className="mx-auto max-w-7xl px-5 py-12 md:py-14 md:px-8">
          <div className="text-center mb-6">
            <SectionLabel>Limited • 40% Off Today</SectionLabel>
            <h2 className="mt-1 font-heading text-3xl font-semibold tracking-[-0.6px] text-white md:text-5xl">One bottle. Out-think everyone.</h2>
          </div>
          <PricingSection />
        </div>
      </section>

      {/* REAL RESULTS */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-14 md:py-16 md:px-8">
          <div className="text-center mb-8">
            <SectionLabel>Real Results</SectionLabel>
            <h2 className="mt-2 font-heading text-3xl font-semibold tracking-[-0.6px] text-white md:text-5xl">How it changed everything.</h2>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* LEARN + FAQ — Keep light */}
      <section className="border-b border-white/10 bg-[#111414]">
        <div className="mx-auto max-w-7xl px-5 py-14 md:py-16 md:px-8 mobile-bottom-safe">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <SectionLabel>Learn</SectionLabel>
              <h2 className="mt-2 font-heading text-3xl font-semibold tracking-[-0.6px] text-white md:text-5xl">Sharpen your mind.</h2>
            </div>
            <Link href="/articles" className="text-sm font-medium text-neural/90 hover:text-neural">All articles →</Link>
          </div>
          <ArticlesGrid limit={3} />
        </div>
      </section>

      <section id="faq">
        <div className="mx-auto max-w-7xl px-5 py-14 md:py-16 md:px-8 mobile-bottom-safe">
          <div className="text-center mb-8">
            <SectionLabel>Questions</SectionLabel>
            <h2 className="mt-2 font-heading text-3xl font-semibold tracking-[-0.6px] text-white md:text-5xl">Frequently asked</h2>
          </div>
          <FaqAccordion withSchema />
          <div className="mt-8 flex justify-center">
            <LiquidGlassButton href={SHOPIFY_CART_URL}>Buy Focus Mode Now</LiquidGlassButton>
          </div>
        </div>
      </section>

      <StickyBuyBar />

      {/* Premium limited offer popup — lazy-loaded client only after ~22s (tuned timing + perf). Elegant, non-intrusive conversion. */}
      <HomeLazyPopups />
    </>
  );
}
