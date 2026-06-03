import type { Metadata } from "next";
import { Cpu, Eye, Leaf } from "lucide-react";
import { Reveal, SectionLabel } from "@/components/ui/reveal";
import { LiquidGlassButton, LiquidGlassFilter } from "@/components/ui/liquid-glass-button";
import { OpenOfferButton } from "@/components/ui/limited-offer-popup";
import { ProductGlow } from "@/components/ui/product-glow";
import { ElectricBrainBg } from "@/components/ui/electric-brain";
import { Founders } from "@/components/ui/founders";
import { SITE } from "@/lib/site";
import { SHOPIFY_CART_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Story — Engineered by the Elite",
  description:
    "Focus Mode was built by Stackmodechris and The Stackmode Network to solve cognitive fatigue in high-stakes environments. This is our story.",
  alternates: { canonical: "/our-story" },
};

const PHILOSOPHY = [
  { icon: Cpu, title: "Performance as Infrastructure", body: "Treat your mind like a high-availability server. Uptime is mandatory. Our formula supports the structural health of your neural networks." },
  { icon: Eye, title: "Clinical Transparency", body: "No proprietary blends. No hidden fillers. Every milligram is accounted for, published, and justified by peer-reviewed research." },
  { icon: Leaf, title: "Pure Ingredients", body: "Sourced globally for maximum bioavailability. If an ingredient doesn't meet the rigorous standards of elite cognitive optimization, it doesn't enter our supply chain." },
];

export default function OurStoryPage() {
  return (
    <>
      <LiquidGlassFilter />
      <section className="relative overflow-hidden border-b border-border bg-surface-dim pt-16 md:pt-20">
        <ElectricBrainBg density={22} />
        <div className="relative mx-auto max-w-4xl px-5 py-20 md:py-24 text-center md:px-8">
          <Reveal>
            <SectionLabel>Design Protocol</SectionLabel>
            <h1 className="mx-auto mt-6 max-w-3xl font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-white md:text-6xl">
              Engineered by the Elite, <br />
              <span className="text-silver">for the </span>
              <span className="text-bolt text-glow-bolt">Elite.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-silver/75 md:text-lg">
              We didn&apos;t set out to build another supplement company. We set out to solve a critical infrastructure
              problem: cognitive fatigue in high-stakes environments.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Story */}
      <section className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:py-24 md:px-8 lg:grid-cols-2">
          <Reveal>
            <SectionLabel>Founder · Stackmode Network LLC</SectionLabel>
            <h2 className="mt-5 font-heading text-3xl font-extrabold leading-tight text-white md:text-4xl">
              The Story of {SITE.founder}
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-silver/70">
              <p>
                Before Focus Mode existed, Christopher was pushing the absolute limits of entrepreneurial endurance —
                running multiple ventures, managing global teams, and operating in a state of perpetual high-alert.
                The bottleneck wasn&apos;t a lack of ambition. It was neuro-chemical depletion.
              </p>
              <p>
                &ldquo;The industry was saturated with low-grade stimulants masking the problem. I needed cognitive
                infrastructure, not a temporary spike. I needed my brain to function like a supercomputer — reliably,
                every single day.&rdquo;
              </p>
              <p>
                So {SITE.founder} and The Stackmode Network engineered the solution: a clinically-dosed, fully
                transparent formula for sustained cognitive performance. Now, it&apos;s available to everyone who
                demands the same relentless output.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <LiquidGlassButton href={SHOPIFY_CART_URL}>Get Focus Mode</LiquidGlassButton>
              <OpenOfferButton />
            </div>
          </Reveal>
          <Reveal delay={0.15} className="flex justify-center">
            <div className="premium-product-stage max-w-[320px]">
              <ProductGlow src="/products/bottle-capsules.png" alt="Focus Mode bottle and capsules" size={460} glow="dual" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Philosophy */}
      <section className="border-b border-border bg-surface-dim">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8">
          <Reveal className="mb-12 text-center">
            <h2 className="font-heading text-3xl font-extrabold leading-tight text-white md:text-4xl">Our Philosophy</h2>
            <p className="mt-4 text-silver/65">We don&apos;t sell &ldquo;energy.&rdquo; We provide the biological architecture for sustained, unyielding focus.</p>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {PHILOSOPHY.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="h-full premium-card p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-bolt/10 text-bolt">
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

      {/* The Network */}
      <section className="hud-grid">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-8">
          <Reveal className="mb-14 text-center">
            <SectionLabel>The Team</SectionLabel>
            <h2 className="mt-5 font-heading text-3xl font-extrabold leading-tight text-white md:text-4xl">
              The Stackmode Network
            </h2>
            <p className="mt-4 text-silver/65">A mission-driven team helping high-performers in business, school, creative work, and the markets win with a sharper mind.</p>
          </Reveal>
          <Founders />
          <div className="mt-14 flex justify-center">
            <LiquidGlassButton href={SHOPIFY_CART_URL}>Get Focus Mode</LiquidGlassButton>
          </div>
        </div>
      </section>
    </>
  );
}
