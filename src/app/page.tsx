import { ArticlesGrid } from "@/components/ui/blog-posts";
import { LockedInVisual } from "@/components/ui/locked-in-visual";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { FormulaStack } from "@/components/ui/formula-stack";
import { Hero } from "@/components/ui/hero";
import { IngredientsSchematic } from "@/components/ui/ingredients-schematic";
import { OpenOfferButton } from "@/components/ui/limited-offer-popup";
import { LiquidGlassButton, LiquidGlassFilter } from "@/components/ui/liquid-glass-button";
import { MarqueeTrust } from "@/components/ui/marquee-trust";
import { PricingSection } from "@/components/ui/pricing-section";
import { FocusRoiCalculator } from "@/components/ui/focus-roi-calculator";
import { Reveal, SectionLabel } from "@/components/ui/reveal";
import { ProductShowcase } from "@/components/ui/spatial-product-showcase";
import { StatsCard } from "@/components/ui/stats-card-1";
import { StickyBuyBar } from "@/components/ui/sticky-buy-bar";
import { Testimonials } from "@/components/ui/testimonials";
import { HomeLazyPopups } from "@/components/ui/home-lazy-popups";
import { SHOPIFY_CART_URL } from "@/lib/site";
import { Brain, Coins, TrendingUp } from "lucide-react";
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

      {/* Premium trust + quick buy bar — elegant, not cluttered. Mobile: stack CTAs to fix cramp/sizing, no overlap with content. */}
      <div className="border-b border-white/10 bg-[#0c0f0f]">
        <div className="mx-auto max-w-7xl px-5 py-3 md:py-4">
          <div className="flex flex-col items-center justify-between gap-2 md:gap-3 md:flex-row">
            <div className="premium-trust-bar flex flex-wrap items-center gap-x-3 gap-y-1 text-center md:text-left">
              <span className="font-medium text-neural/90">40% OFF</span>
              <span className="hidden h-2.5 w-px bg-white/15 sm:block" />
              <span className="text-[12px] sm:text-[13px]">30-day guarantee • USA made • For ambitious minds</span>
            </div>
            <div className="flex w-full flex-col items-stretch gap-1.5 sm:gap-2 sm:w-auto sm:flex-row sm:items-center">
              <OpenOfferButton className="hidden sm:inline-flex" />
              <a href={SHOPIFY_CART_URL} className="premium-cta w-full justify-center text-sm sm:w-auto sm:text-[14.5px]">
                BUY $59.99 <span className="hidden xs:inline">NOW</span>
              </a>
              <a href="#pricing" className="premium-cta-secondary w-full justify-center text-xs px-4 py-2.5 sm:w-auto sm:text-sm sm:px-5">
                See bundles
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* The Cost of Brain Fog */}
      <section id="cost" className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-20 md:py-24 md:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionLabel>The Hidden Tax</SectionLabel>
            <h2 className="mt-4 font-heading text-3xl font-semibold leading-tight tracking-[-0.8px] text-white md:text-5xl md:tracking-[-1.6px]">
              Slow thinking is costing you <span className="text-neural">real opportunities</span>
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-silver/70 md:text-[16px]">
              Every distracted hour, missed detail, and foggy decision compounds into lost opportunities, revenue, and momentum — in school, business, creative work, and life.
              Built for anyone who needs a sharper mind and sustained output without the crash.
            </p>
          </Reveal>

          <div className="mt-12 grid items-start gap-5 lg:grid-cols-3">
            <Reveal className="lg:col-span-2 grid gap-5 sm:grid-cols-3">
              {[
                { icon: Brain, stat: "Memory", label: "Recall critical details, conversations, lessons, and strategies under pressure" },
                { icon: TrendingUp, stat: "Speed", label: "Move faster on deals, exams, calls, code, content, and execution windows" },
                { icon: Coins, stat: "Output", label: "Turn clean focus into more wins — in business, school, markets, and creative work" },
              ].map((c, i) => (
                <div key={i} className="premium-card p-7">
                  <c.icon className="h-6 w-6 text-neural" />
                  <p className="mt-5 font-heading text-3xl font-semibold tracking-[-0.6px] text-white">{c.stat}</p>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-silver/55">{c.label}</p>
                </div>
              ))}
            </Reveal>
            <Reveal delay={0.1} className="flex justify-center lg:justify-end">
              <StatsCard
                title="Avg. Weekly Output"
                currentValue={163}
                valuePostfix="%"
                description="Reported focus & output lift after switching to Focus Mode"
                chartData={incomeChart}
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="border-b border-white/10 bg-[#111414]">
        <div className="mx-auto max-w-7xl px-5 py-20 md:py-24 md:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <SectionLabel>The Solution</SectionLabel>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-[-0.6px] text-white md:text-5xl">
              Everything you need to stay locked in — and outperform
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-silver/70">
              Scientifically proven ingredients. 6+ hours of clean focus. Zero jitters, zero crashes, fewer headaches. The edge for entrepreneurs, professionals, students, and creators who want a sharper mind every day.
            </p>
          </Reveal>
          <div className="mt-9 md:mt-10">
            <LockedInVisual />
          </div>
        </div>
      </section>

      <section id="performance" className="border-b border-white/10 bg-[#111414] scroll-mt-20">
        <div className="mx-auto max-w-7xl px-5 py-20 md:py-24 md:px-8">
          <Reveal className="mx-auto max-w-3xl text-center">
            <SectionLabel>For Ambitious Minds</SectionLabel>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-[-0.6px] text-white md:text-5xl">
              Designed for ambitious minds ready to perform — and keep performing for life
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-silver/70">
              Sustained concentration, rapid recall, and resilient mental energy powered by clinically studied antioxidants — empowering students to thrive in school, professionals to lead with clarity, creators to ship their best work, and lifelong learners to protect their cognitive health for decades.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Unwavering Focus",
                body: "Stay fully locked in on your studies, projects, or most important work — tuning out the noise so you can deliver exceptional results, time after time.",
                svg: (
                  <svg width="64" height="38" viewBox="0 0 64 38" className="mb-4">
                    <rect x="6" y="14" width="52" height="3" rx="1" fill="#2eb9df" fillOpacity="0.2" />
                    <rect x="6" y="14" width="18" height="3" rx="1" fill="#2eb9df">
                      <animate attributeName="x" values="6;32;6" dur="2.1s" repeatCount="indefinite" />
                    </rect>
                    <circle cx="52" cy="15.5" r="7" fill="none" stroke="#2eb9df" strokeOpacity="0.5" strokeWidth="1.5" />
                    <circle cx="52" cy="15.5" r="4" fill="#2eb9df">
                      <animate attributeName="r" values="3;5.5;3" dur="1.8s" repeatCount="indefinite" />
                    </circle>
                  </svg>
                ),
              },
              {
                title: "Effortless Recall",
                body: "Access lessons, ideas, facts, and details the moment you need them — whether in an exam, a crucial meeting, or a creative breakthrough.",
                svg: (
                  <svg width="64" height="38" viewBox="0 0 64 38" className="mb-4">
                    {/* Abstract memory network — connected nodes for universal recall */}
                    <circle cx="12" cy="28" r="3" fill="#2eb9df" fillOpacity="0.3" />
                    <circle cx="22" cy="18" r="3" fill="#2eb9df" fillOpacity="0.3" />
                    <circle cx="34" cy="24" r="3" fill="#2eb9df" fillOpacity="0.3" />
                    <circle cx="46" cy="12" r="3" fill="#2eb9df" fillOpacity="0.3" />
                    <circle cx="56" cy="26" r="3" fill="#2eb9df" fillOpacity="0.3" />
                    <line x1="12" y1="28" x2="22" y2="18" stroke="#2eb9df" strokeWidth="1.5" strokeOpacity="0.4" />
                    <line x1="22" y1="18" x2="34" y2="24" stroke="#2eb9df" strokeWidth="1.5" strokeOpacity="0.4" />
                    <line x1="34" y1="24" x2="46" y2="12" stroke="#2eb9df" strokeWidth="1.5" strokeOpacity="0.4" />
                    <line x1="46" y1="12" x2="56" y2="26" stroke="#2eb9df" strokeWidth="1.5" strokeOpacity="0.4" />
                    <circle cx="34" cy="24" r="2.5" fill="#2eb9df">
                      <animate attributeName="opacity" values="0.6;1;0.6" dur="1.8s" repeatCount="indefinite" />
                    </circle>
                  </svg>
                ),
              },
              {
                title: "Lasting Mental Energy",
                body: "Power through demanding days with steady, clear thinking — supported by natural antioxidants that help nourish and protect your brain for peak performance today and healthy cognitive vitality for years to come.",
                svg: (
                  <svg width="64" height="38" viewBox="0 0 64 38" className="mb-4">
                    <rect x="9" y="9" width="8" height="20" rx="1" fill="#2eb9df" fillOpacity="0.2" />
                    <rect x="23" y="14" width="8" height="15" rx="1" fill="#2eb9df" fillOpacity="0.2" />
                    <rect x="37" y="6" width="8" height="23" rx="1" fill="#2eb9df" fillOpacity="0.2" />
                    <rect x="9" y="9" width="8" height="20" rx="1" fill="#2eb9df">
                      <animate attributeName="height" values="8;20;8" dur="1.65s" repeatCount="indefinite" />
                      <animate attributeName="y" values="21;9;21" dur="1.65s" repeatCount="indefinite" />
                    </rect>
                    <rect x="23" y="14" width="8" height="15" rx="1" fill="#2eb9df">
                      <animate attributeName="height" values="5;15;5" dur="2.1s" repeatCount="indefinite" />
                      <animate attributeName="y" values="29;14;29" dur="2.1s" repeatCount="indefinite" />
                    </rect>
                    <rect x="37" y="6" width="8" height="23" rx="1" fill="#2eb9df">
                      <animate attributeName="height" values="10;23;10" dur="1.9s" repeatCount="indefinite" />
                      <animate attributeName="y" values="19;6;19" dur="1.9s" repeatCount="indefinite" />
                    </rect>
                  </svg>
                ),
              },
            ].map((item, idx) => (
              <Reveal key={item.title} delay={idx * 0.04} className="group premium-card p-7 transition-all hover:border-white/15">
                <div className="text-neural/70 group-hover:text-neural transition-colors">
                  {item.svg}
                </div>
                <h3 className="font-heading text-[21px] font-semibold tracking-[-0.3px] text-white">{item.title}</h3>
                <p className="mt-3 text-[13.5px] leading-relaxed text-silver/60">{item.body}</p>
                <div className="mt-4 h-px w-8 bg-gradient-to-r from-bolt/60 to-transparent" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Focus Mode is the best */}
      <section className="border-b border-white/10 bg-[#111414]">
        <div className="mx-auto max-w-7xl px-5 py-20 md:py-24 md:px-8">
          <Reveal className="mx-auto mb-10 max-w-2xl text-center">
            <SectionLabel>The Difference</SectionLabel>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-[-0.6px] text-white md:text-5xl">
              Built for ambitious minds.<br />Not for those who settle for average.
            </h2>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { title: "Caffeine & Stim Stacks", body: "Spikes, jitters, 2pm crash. Tolerance builds fast. Not for sustained 8-hour decision sessions.", bad: true },
              { title: "Generic Nootropics", body: "Under-dosed blends, mystery fillers, no clinical transparency. Marketing over molecules.", bad: true },
              { title: "Focus Mode", body: "Two exact clinical extracts — 24% flavones Ginkgo + 7% ginsenosides Ginseng. Zero fillers. Transparent. Proven to deliver sharper focus, less fatigue, and real productivity gains.", bad: false },
            ].map((c, i) => (
              <Reveal key={i} delay={i * 0.05} className={`premium-card p-7 transition-all ${c.bad ? "opacity-70" : "border-neural/40 glow-neural"}`}>
                <div className={`text-[10px] tracking-[1.5px] ${c.bad ? "text-silver/35" : "text-neural"}`}>{c.bad ? "THE OLD WAY" : "THE NEW STANDARD"}</div>
                <div className="mt-3 mb-1">
                  {c.bad ? (
                    <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden>
                      <circle cx="11" cy="11" r="9" fill="none" stroke="#6b7280" strokeOpacity="0.4" strokeWidth="1.5" />
                      <line x1="7" y1="7" x2="15" y2="15" stroke="#6b7280" strokeOpacity="0.6" strokeWidth="1.5" strokeLinecap="round">
                        <animate attributeName="stroke-opacity" values="0.4;0.85;0.4" dur="2.4s" repeatCount="indefinite" />
                      </line>
                      <line x1="15" y1="7" x2="7" y2="15" stroke="#6b7280" strokeOpacity="0.6" strokeWidth="1.5" strokeLinecap="round">
                        <animate attributeName="stroke-opacity" values="0.5;0.9;0.5" dur="2.1s" repeatCount="indefinite" />
                      </line>
                    </svg>
                  ) : (
                    <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden>
                      <circle cx="11" cy="11" r="9" fill="none" stroke="#fde400" strokeOpacity="0.3" strokeWidth="1.5" />
                      <polyline points="6.5,11 9.5,14.5 15.5,7.5" fill="none" stroke="#fde400" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="18">
                        <animate attributeName="stroke-dashoffset" values="18;0;18" dur="2.8s" repeatCount="indefinite" />
                        <animate attributeName="stroke-opacity" values="0.6;1;0.6" dur="2.2s" repeatCount="indefinite" />
                      </polyline>
                      <circle cx="11" cy="11" r="3.5" fill="#fde400" fillOpacity="0.15">
                        <animate attributeName="r" values="2.5;4.5;2.5" dur="2.4s" repeatCount="indefinite" />
                      </circle>
                    </svg>
                  )}
                </div>
                <h4 className="font-heading text-[21px] font-semibold tracking-[-0.3px] text-white">{c.title}</h4>
                <p className="mt-3 text-[13.5px] leading-relaxed text-silver/60">{c.body}</p>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-center text-xs tracking-[1.5px] text-silver/35">Why serious students, professionals, creators, and lifelong learners choose Focus Mode.</p>
        </div>
      </section>

      {/* Interactive product showcase */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-20 md:py-24 md:px-8">
          <Reveal className="mx-auto mb-12 max-w-2xl text-center">
            <SectionLabel>Inside The Bottle</SectionLabel>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-[-0.6px] text-white md:text-5xl">
              Engineered for real results — at any age
            </h2>
          </Reveal>
          <div className="premium-product-stage"> {/* seamless, no border — product viz pops on its own with shadows */}
            <ProductShowcase />
          </div>
        </div>
      </section>

      {/* Ingredients */}
      <section id="formula" className="border-b border-white/10 bg-[#111414]">
        <div className="mx-auto max-w-7xl px-5 py-20 md:py-24 md:px-8">
          <Reveal className="mx-auto mb-12 max-w-2xl text-center">
            <SectionLabel>The Formula</SectionLabel>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-[-0.6px] text-white md:text-5xl">
              Two clinically-proven ingredients. <span className="text-neural">Zero fillers. Zero compromise.</span>
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-silver/70">
              24% flavones. 7% ginsenosides. Transparent, antioxidant-rich dosing that delivers sharper focus, faster thinking, and sustained productivity for students and high-achievers — backed by real science and centuries of traditional use.
            </p>
          </Reveal>
          <IngredientsSchematic />
          <div className="mt-14">
            <FormulaStack />
          </div>
        </div>
      </section>

      {/* Interactive ROI */}
      <section className="border-b border-white/10 bg-[#111414] scroll-mt-12">
        <div className="mx-auto max-w-7xl px-5 py-20 md:py-24 md:px-8">
          <Reveal className="mx-auto mb-10 max-w-2xl text-center">
            <SectionLabel>The Real Cost of a Foggy Mind</SectionLabel>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-[-0.6px] text-white md:text-5xl">
              Put a number on what brain fog is costing you.<br />Then watch it flip.
            </h2>
          </Reveal>
          <FocusRoiCalculator />
        </div>
      </section>

      {/* Pricing / Buy */}
      <section id="pricing" className="border-b border-white/10 scroll-mt-12">
        <div className="mx-auto max-w-7xl px-5 py-12 md:py-16 md:px-8">
          <Reveal className="mx-auto mb-6 max-w-2xl text-center">
            <SectionLabel>Limited Time • 40% Off</SectionLabel>
            <h2 className="mt-2 font-heading text-3xl font-semibold tracking-[-0.6px] text-white md:text-5xl">
              Buy once. <span className="text-neural">Out-think everyone.</span>
            </h2>
            <p className="mt-2 text-silver/70">One bottle. 6+ hours of proven focus per dose. 30 days. Zero risk.</p>
          </Reveal>
          <PricingSection />
        </div>
      </section>

      {/* Founder Story / Real Results */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-20 md:py-24 md:px-8">
          <Reveal className="mx-auto mb-12 max-w-2xl text-center">
            <SectionLabel>The Real Story</SectionLabel>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-[-0.6px] text-white md:text-5xl">
              How the ingredients changed everything for me — and can for you
            </h2>
            <p className="mt-3 text-silver/70">Stackmodechris — the founder who formulated Focus Mode for himself after mental fatigue nearly cost him everything.</p>
          </Reveal>
          <Testimonials />
        </div>
      </section>

      {/* Articles teaser */}
      <section className="border-b border-white/10 bg-[#111414]">
        <div className="mx-auto max-w-7xl px-5 py-20 md:py-24 md:px-8 mobile-bottom-safe">
          <Reveal className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <SectionLabel>Learn</SectionLabel>
              <h2 className="mt-4 font-heading text-3xl font-semibold tracking-[-0.6px] text-white md:text-5xl">
                Sharpen your mind. Outperform everyone.
              </h2>
            </div>
            <Link href="/articles" className="text-sm font-medium text-neural/90 hover:text-neural transition">
              View all articles →
            </Link>
          </Reveal>
          <ArticlesGrid limit={3} />
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <div className="mx-auto max-w-7xl px-5 py-20 md:py-24 md:px-8 mobile-bottom-safe">
          <Reveal className="mx-auto mb-10 max-w-2xl text-center">
            <SectionLabel>Questions</SectionLabel>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-[-0.6px] text-white md:text-5xl">
              Frequently asked
            </h2>
          </Reveal>
          <FaqAccordion withSchema />
          <div className="mt-10 flex justify-center">
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
