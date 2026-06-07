import { ElectricBrainBg } from "@/components/ui/electric-brain";
import { OpenOfferButton } from "@/components/ui/limited-offer-popup";
import { LiquidGlassButton, LiquidGlassFilter } from "@/components/ui/liquid-glass-button";
import { ProductGlow } from "@/components/ui/product-glow";
import { Reveal, SectionLabel } from "@/components/ui/reveal";
import { INGREDIENTS } from "@/lib/site";
import { Activity, Brain, Database, Leaf, Lock, Target, Zap } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Science | Best Focus Supplement Ingredients & Clinical Dosing",
  description:
    "Ginkgo Biloba 24% flavones + Red Asian Ginseng 7% ginsenosides. The exact clinical formula inside Focus Mode — the crash-free focus supplement for students, professionals, entrepreneurs and creators.",
  alternates: { canonical: "/learn-more" },
};

const MECHANICS = [
  { icon: Zap, title: "Dopaminergic Activation", body: "Ginsenosides support dopamine and acetylcholine — the neurochemicals behind motivation, learning, and crisp decision-making for students and professionals alike." },
  { icon: Activity, title: "Synaptic Velocity + Antioxidant Shield", body: "Optimized oxygen and blood flow plus powerful natural antioxidants enhance processing speed, memory, and long-term brain health." },
  { icon: Brain, title: "Cognitive Endurance", body: "Adaptogens help buffer stress and prevent the afternoon crash, sustaining clear thinking for 6+ hours — ideal for long school days or demanding careers." },
  { icon: Database, title: "The Focus Mode Standard", body: "Aggressively dosed, clinically-backed, fully transparent. 100% label accuracy. Zero proprietary blends. Kid-friendly clean formula for growing minds and adult performance." },
];

const HOW_TO = [
  { icon: Target, title: "Time It Right", body: "Take 2 capsules 20-30 minutes before your most important study session, meeting, creative block, or exam." },
  { icon: Leaf, title: "Stay Consistent", body: "Take twice daily. Benefits to blood flow, neurochemistry, and antioxidant protection compound with consistent use for lasting results." },
  { icon: Lock, title: "Lock The Environment", body: "Eliminate distractions. Phone away, one task at a time. Focus Mode helps your mind do the rest — for kids and adults." },
];

export default function LearnMorePage() {
  return (
    <>
      <LiquidGlassFilter />
      <section className="relative overflow-hidden border-b border-white/10 bg-[#0c0f0f] pt-16 md:pt-20">
        <ElectricBrainBg />
        <div className="relative mx-auto max-w-4xl px-5 py-20 md:py-24 text-center md:px-8">
          <Reveal>
            <SectionLabel>The Formula</SectionLabel>
            <h1 className="mx-auto mt-6 max-w-3xl font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-white md:text-6xl">
              The Architecture of <span className="text-neural">Elite Focus</span>
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-silver/75 md:text-lg">
              We engineered a neuro-activation sequence for real life. Discover the clinically-dosed ingredients behind 6+ hours of sustained focus, reduced mental fatigue, and a sharper mind — for entrepreneurs, professionals, students, and creators who perform at the highest level.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <LiquidGlassButton href="/focus-mode">Get The Formula</LiquidGlassButton>
              <LiquidGlassButton href="/#formula" variant="glass">Explore Ingredients</LiquidGlassButton>
              <OpenOfferButton />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Neural mechanics */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-20 md:py-24 md:px-8">
          <Reveal className="mb-12">
            <SectionLabel>How It Works</SectionLabel>
            <h2 className="mt-4 max-w-2xl font-heading text-3xl font-semibold tracking-[-0.5px] text-white md:text-4xl">
              Focus isn&apos;t willpower. It&apos;s a biochemical state.
            </h2>
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2">
            {MECHANICS.map((m, i) => (
              <Reveal key={m.title} delay={i * 0.06}>
                <div className="h-full premium-card p-7">
                  <m.icon className="h-6 w-6 text-neural" />
                  <h3 className="mt-5 font-heading text-[19px] font-semibold tracking-[-0.2px] text-white">{m.title}</h3>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-silver/60">{m.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical components */}
      <section className="border-b border-white/10 bg-[#111414]">
        <div className="mx-auto max-w-7xl px-5 py-20 md:py-24 md:px-8">
          <Reveal className="mb-12 text-center">
            <SectionLabel>Clinical Components</SectionLabel>
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
        </div>
      </section>

      {/* How to use */}
      <section>
        <div className="mx-auto max-w-7xl px-5 py-20 md:py-24 md:px-8">
          <Reveal className="mb-10 text-center">
            <SectionLabel>How to Use</SectionLabel>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-[-0.5px] text-white md:text-4xl">
              How to execute
            </h2>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-3">
            {HOW_TO.map((p, i) => (
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
          <div className="mt-12 flex justify-center">
            <LiquidGlassButton href="/focus-mode">Get Focus Mode</LiquidGlassButton>
          </div>
        </div>
      </section>
    </>
  );
}
