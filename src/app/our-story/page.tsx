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
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Story | Atlanta Focus Supplement by Focus Mode",
  description:
    "The story behind Focus Mode — the Atlanta-based all-natural focus supplement. Clinical Ginkgo + Ginseng for no-crash mental clarity. Straight from nature. Halal-friendly ingredients.",
  alternates: { canonical: "/our-story" },
};

const PHILOSOPHY = [
  { icon: Cpu, title: "Mind as the Ultimate Asset", body: "Your cognition is the foundation of every win. Focus Mode protects and elevates it with clinical precision — for sustained high performance." },
  { icon: Eye, title: "Clinical Transparency", body: "No proprietary blends. No hidden fillers. Every milligram is accounted for, published, and justified by peer-reviewed research." },
  { icon: Leaf, title: "Pure Ingredients", body: "Sourced globally for maximum bioavailability. If an ingredient doesn't meet the rigorous standards of elite cognitive optimization, it doesn't enter our supply chain." },
];

export default function OurStoryPage() {
  return (
    <>
      <LiquidGlassFilter />
      <section className="relative overflow-hidden border-b border-border bg-surface-dim pt-16 md:pt-20">
        <ElectricBrainBg />
        <div className="relative mx-auto max-w-4xl px-5 py-20 md:py-24 text-center md:px-8">
          <Reveal>
            <SectionLabel>Our Standard</SectionLabel>
            <h1 className="mx-auto mt-6 max-w-3xl font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-white md:text-6xl">
              Engineered by the Elite, <br />
              <span className="text-silver">for the </span>
              <span className="text-neural">Elite.</span>
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
            <SectionLabel>Founder · Focus Mode</SectionLabel>
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
                So {SITE.founder} and the Focus Mode team engineered the solution: a clinically-dosed, fully
                transparent formula for sustained cognitive performance. Now, it&apos;s available to everyone who
                demands the same relentless output.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <LiquidGlassButton href="/focus-mode">Get Focus Mode</LiquidGlassButton>
              <OpenOfferButton />
            </div>
          </Reveal>
          <Reveal delay={0.15} className="flex justify-center">
            <div className="premium-product-stage max-w-[320px]">
              <ProductGlow src="/products/1780438169844-generated-label-image-0.png" alt="Focus Mode bottle and capsules" size={460} glow="dual" />
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
            <LiquidGlassButton href="/focus-mode">Get Focus Mode</LiquidGlassButton>
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
            <p className="mt-4 text-silver/65">No proprietary blends. Just pure, performance engineering.</p>
          </Reveal>

          <div className="grid items-center gap-10 lg:grid-cols-2">
            <Reveal className="flex justify-center">
              <div className="premium-product-stage max-w-[320px]">
                <ProductGlow src="/products/1780438169849-generated-label-image-1.png" alt="Focus Mode capsules" size={460} glow="dual" className="max-w-[280px] sm:max-w-sm md:max-w-none" />
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
              { icon: Zap, title: "Dopaminergic Activation", body: "Ginsenosides support dopamine and acetylcholine for motivation and crisp decision-making." },
              { icon: Activity, title: "Synaptic Velocity", body: "Optimized oxygen and blood flow enhance processing speed and memory." },
              { icon: Brain, title: "Cognitive Endurance", body: "Adaptogens buffer stress and prevent the afternoon crash for 6+ hours of clarity." },
              { icon: Database, title: "The Standard", body: "Aggressively dosed, clinically-backed, fully transparent. Zero proprietary blends." },
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
              <p className="mt-3 text-silver/65 max-w-lg">Evidence-based reads on focus, discipline, and elite cognitive performance.</p>
            </Reveal>
            <Link href="/articles" className="text-sm font-medium text-neural/90 hover:text-neural transition-colors">All articles →</Link>
          </div>
          <ArticlesGrid limit={3} />
        </div>
      </section>
    </>
  );
}
