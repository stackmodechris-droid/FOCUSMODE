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
import { Brain, Check, Coins, TrendingUp } from "lucide-react";
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

      {/* BOTH PRODUCTS AT TOP — Clean all-natural energy & focus supplement story.
          Optimized horizontal shop layout. Prominent discount. Two clear buy buttons.
          Targets athletes, businessmen, students, brain/energy boost, focus, sustained clean energy.
          Green SuperFood visuals from provided assets. */}
      <section id="products" className="border-b border-white/10 bg-[#0c0f0f]">
        <div className="mx-auto max-w-7xl px-5 py-8 md:py-10">
          {/* Promo header with discount in your face + shop top right */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex items-start gap-4">
              <div className="shrink-0">
                <div className="bg-bolt text-black font-heading font-extrabold text-2xl md:text-[30px] leading-none px-5 py-2.5 rounded-md tracking-[-0.5px]">40% OFF</div>
                <div className="text-center text-[10px] text-bolt/90 font-bold tracking-[2px] mt-1">TODAY ONLY</div>
              </div>
              <div>
                <div className="text-sm uppercase tracking-[2px] text-neural">All-Natural • Plant-Based • Halal Suitable</div>
                <div className="font-heading text-2xl md:text-3xl text-white mt-1 leading-tight">Clean Energy.<br />Sharp Focus. Real Results.</div>
                <div className="mt-1 text-bolt text-sm font-medium">Save $40 on Focus Mode today • Sustained energy & brain boost for athletes, professionals, students & high-performers</div>
              </div>
            </div>

            {/* Shop button top right */}
            <div className="md:text-right flex-shrink-0">
              <Link href="/shop" className="inline-flex items-center justify-center bg-bolt text-black font-heading font-bold px-8 py-3 rounded-md text-base w-full md:w-auto hover:brightness-105 active:scale-[0.985] transition">
                SHOP NOW
              </Link>
              <div className="text-[10px] text-silver/50 mt-1 tracking-widest">Ships today from USA • 30-day guarantee</div>
            </div>
          </div>

          {/* Story intro — best writing for clean energy all natural supplement */}
          <div className="max-w-3xl mx-auto text-center py-6">
            <p className="text-[15px] leading-relaxed text-silver/80">
              Pure plant-based power for the modern high-performer. Whether you're an athlete chasing endurance, a businessman making critical decisions, a student powering through exams and schoolwork, or anyone who needs reliable brain energy and all-day vitality — our clean, all-natural formulas deliver sustained focus and energy without jitters, crashes, or synthetic stimulants. Nature's edge for body and mind.
            </p>
          </div>

          {/* Two products — horizontal shop style, easy to choose and click */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-6xl mx-auto">
            {/* Focus Mode Supplement */}
            <div className="premium-card p-6 flex flex-col">
              <div className="flex gap-4 items-start">
                <div className="w-20 h-20 flex-shrink-0">
                  <img src="/products/1780438169847-generated-label-image-2.png" alt="Focus Mode supplement bottle" className="w-full h-full object-contain" />
                </div>
                <div className="flex-1">
                  <div className="uppercase text-neural text-xs tracking-[1.5px]">6+ HOUR CLEAN FOCUS</div>
                  <div className="font-heading text-2xl mt-0.5">Focus Mode Supplement</div>
                  <div className="text-sm text-silver/70 mt-1">Clinically-dosed Ginkgo + Ginseng. All-natural plant extracts for sharp mental energy and sustained concentration.</div>
                </div>
              </div>

              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-heading text-4xl tabular-nums">${SITE.price}</span>
                <span className="text-sm text-silver/50 line-through">was ${SITE.originalPrice}</span>
                <span className="ml-2 text-xs font-bold bg-bolt text-black px-2 py-0.5 rounded">40% OFF</span>
              </div>

              <div className="mt-3 text-xs text-silver/60 flex flex-wrap gap-x-4">
                <span>✓ Brain boost & focus</span>
                <span>✓ Zero crash energy</span>
                <span>✓ For athletes, pros & students</span>
              </div>

              <div className="mt-auto pt-5">
                <ShopifyBuyAnchor className="premium-cta w-full justify-center py-3 text-sm">Buy Focus Mode Supplement — ${SITE.price}</ShopifyBuyAnchor>
              </div>
              <div className="text-center text-[10px] mt-2 text-silver/50">60 capsules • 30-day supply • USA made</div>
            </div>

            {/* Green SuperFood / Green Energy Blend — with superfood images */}
            <div className="premium-card p-6 flex flex-col">
              <div className="flex gap-4 items-start">
                <div className="w-20 h-20 flex-shrink-0">
                  <img src="/greens/1780842565396-generated-label-image-2_800x800.png" alt="Green SuperFood label" className="w-full h-full object-contain" />
                </div>
                <div className="flex-1">
                  <div className="uppercase text-neural text-xs tracking-[1.5px]">WHOLE-PLANT DAILY ENERGY</div>
                  <div className="font-heading text-2xl mt-0.5">Green SuperFood</div>
                  <div className="text-sm text-silver/70 mt-1">20+ plants, superfoods & adaptogens. The pure, all-natural foundation for clean sustained energy and daily vitality.</div>
                </div>
              </div>

              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-heading text-4xl tabular-nums">$49.99</span>
                <span className="text-sm text-silver/50">30 servings</span>
              </div>

              <div className="mt-3 text-xs text-silver/60 flex flex-wrap gap-x-4">
                <span>✓ All-day clean energy</span>
                <span>✓ Brain & body support</span>
                <span>✓ Athletes • Business • School</span>
              </div>

              {/* Extra superfood visuals for the provided assets */}
              <div className="mt-3 flex gap-2">
                <img src="/greens/1780842565402-generated-label-image-3_800x800.png" alt="Green SuperFood angle" className="w-10 h-10 object-contain rounded border border-white/10" />
                <img src="/greens/1780842565406-generated-label-image-0_800x800.png" alt="Green SuperFood angle" className="w-10 h-10 object-contain rounded border border-white/10" />
              </div>

              <div className="mt-auto pt-5">
                <a href={GREENS_CART_URL} className="flex-1 inline-flex items-center justify-center gap-2 rounded-md bg-[#16a34a] hover:bg-[#15803d] px-6 py-3 font-heading text-sm font-bold text-white w-full transition active:scale-[0.985]">
                  Buy Green SuperFood — $49.99
                </a>
              </div>
              <div className="text-center text-[10px] mt-2 text-silver/50">1 scoop daily • USA made • No artificial additives</div>
            </div>
          </div>

          {/* Two direct buttons — clean choice for the two products */}
          <div className="mt-6 max-w-[620px] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <ShopifyBuyAnchor className="premium-cta flex-1 justify-center py-3.5 text-[15px]">
                Buy Focus Mode Supplement — ${SITE.price}
              </ShopifyBuyAnchor>

              <a href={GREENS_CART_URL} className="flex-1 inline-flex items-center justify-center gap-2 rounded-md bg-[#16a34a] hover:bg-[#15803d] px-6 py-3.5 font-heading text-[15px] font-bold text-white transition active:scale-[0.985]">
                Buy Green Energy Blend — $49.99
              </a>
            </div>
            <p className="mt-2 text-center text-xs text-silver/60">Choose one or both. All natural. Plant-based. Halal suitable. Clean energy & focus that lasts.</p>
          </div>
        </div>
      </section>

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

      {/* Visual Daily Greens Superfood section (informational + shop energy, highly visual) */}
      <section className="border-b border-white/10 bg-[#111414]">
        <div className="mx-auto max-w-7xl px-5 py-16 md:py-20 md:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div>
              <SectionLabel>Whole-Plant Foundation</SectionLabel>
              <h2 className="mt-3 font-heading text-3xl md:text-5xl font-semibold tracking-[-0.8px] text-white">Daily Greens Powder</h2>
              <p className="mt-4 text-silver/70 text-[15px]">
                {GREENS.description}
              </p>
              <ul className="mt-6 space-y-2 text-sm text-silver/75">
                <li className="flex gap-3"><Check className="h-4 w-4 mt-0.5 text-neural" /> Mix 1 scoop in 6–8 oz water or smoothie — done in under 60 seconds</li>
                <li className="flex gap-3"><Check className="h-4 w-4 mt-0.5 text-neural" /> 20+ plants including Spirulina, Barley Grass, Beet, Acai, Turmeric, Ginseng & Ashwagandha + Black Pepper for max absorption</li>
                <li className="flex gap-3"><Check className="h-4 w-4 mt-0.5 text-neural" /> Fuels the physical & mental base that makes Focus Mode even more effective</li>
              </ul>
              <div className="mt-7 flex gap-3">
                <Link href="/shop#greens" className="premium-cta px-7">Buy Daily Greens — $49.99</Link>
                <Link href="/shop" className="premium-cta-secondary px-7">Explore the full stack</Link>
              </div>
              <p className="mt-3 text-[10px] text-silver/50">30 servings • USA made • No artificial additives</p>
            </div>

            {/* Visual — reuse ProductGlow with one of the clean new greens labels */}
            <div className="relative flex justify-center">
              <div className="premium-product-stage max-w-[380px]">
                <ProductGlow
                  src={GREENS.images.front}
                  alt="Daily Greens Powder tub — whole plant superfood nutrition"
                  size={460}
                  glow="neural"
                />
              </div>
            </div>
          </div>
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
