"use client";

import { motion } from "motion/react";
import { Brain, Zap, Timer, Database, ShieldCheck, Activity, type LucideIcon } from "lucide-react";

interface Benefit {
  icon: LucideIcon;
  title: string;
  desc: string;
  metric: string;
}

const BENEFITS: Benefit[] = [
  { icon: Brain, title: "Daily Mental Clarity", desc: "A simple botanical ritual for deep work, studying, trading, and creation.", metric: "DAILY RITUAL" },
  { icon: Zap, title: "Decision Routine", desc: "Support a focused state before business, exams, creative work, and high-stakes moments.", metric: "READY" },
  { icon: Timer, title: "Structured Focus", desc: "Use it consistently before the work blocks that matter most.", metric: "FOCUS BLOCK" },
  { icon: Database, title: "Memory Routine", desc: "Pair your study, planning, and work systems with a consistent botanical ritual.", metric: "RECALL" },
  { icon: ShieldCheck, title: "No Synthetic Stimulants", desc: "Zero caffeine and no synthetic stimulants in the capsule formula.", metric: "0 STIMULANTS" },
  { icon: Activity, title: "Botanical Support", desc: "Ginkgo, Red Asian Ginseng, and antioxidants in a clean capsule routine.", metric: "BOTANICAL" },
];

export function BenefitCards() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {BENEFITS.map((b, i) => (
        <motion.article
          key={b.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: i * 0.06 }}
          whileHover={{ y: -3 }}
          className="group relative overflow-hidden premium-card p-7"
        >
          <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-neural/8 blur-3xl transition-opacity duration-500 group-hover:bg-neural/15" />

          <div className="relative">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-neural/10 text-neural">
              <b.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-6 font-heading text-[20px] font-semibold tracking-[-0.2px] text-white">{b.title}</h3>
            <p className="mt-3 text-[13.5px] leading-relaxed text-silver/60">{b.desc}</p>
            <span className="mt-5 inline-block text-[10px] tracking-[1.5px] text-neural/90">
              {b.metric}
            </span>
          </div>
        </motion.article>
      ))}
    </div>
  );
}
