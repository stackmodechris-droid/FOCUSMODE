"use client";

import { INGREDIENTS } from "@/lib/site";
import { motion } from "motion/react";
import Image from "next/image";

const FACTS = [
  { label: "Serving Size", value: "2 Capsules" },
  { label: "Servings Per Container", value: "30" },
];

export function IngredientsSchematic() {
  return (
    <div className="grid gap-8 sm:gap-6 lg:grid-cols-[1fr_0.8fr]">
      {/* Ingredient readouts */}
      <div className="grid gap-6 sm:gap-5 md:gap-6 sm:grid-cols-2">
        {INGREDIENTS.map((ing, i) => (
          <motion.div
            key={ing.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative premium-card p-6"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-neural via-bolt to-transparent" />
            <div className="flex items-center justify-between font-mono-data text-[11px] uppercase tracking-widest text-neural">
              <span>ACTIVE {i + 1}</span>
              <span className="text-neural">{ing.dose}</span>
            </div>
            <h3 className="mt-4 font-heading text-xl font-bold text-white">{ing.name}</h3>
            <p className="mt-1 font-mono-data text-xs uppercase tracking-widest text-silver/50">{ing.spec}</p>
            <p className="mt-4 text-sm leading-relaxed text-silver/65">{ing.detail}</p>
            <div className="mt-5 border-t border-border pt-4 font-mono-data text-[11px] uppercase tracking-widest text-neural">
              ▸ {ing.role}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Supplement Facts technical panel */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative border-2 border-silver/40 bg-surface-dim p-6 font-mono-data text-gray-900"
      >
        <h3 className="border-b-4 border-silver pb-2 font-heading text-2xl font-extrabold tracking-tight">
          Supplement Facts
        </h3>
        {FACTS.map((f) => (
          <div key={f.label} className="flex items-center justify-between border-b border-silver/30 py-1.5 text-xs">
            <span className="text-silver/70">{f.label}</span>
            <span className="text-white">{f.value}</span>
          </div>
        ))}
        <div className="mt-3 flex items-center justify-between border-b-2 border-silver py-1 text-[10px] uppercase tracking-widest text-silver/60">
          <span>Amount Per Serving</span>
          <span>% DV</span>
        </div>
        {INGREDIENTS.map((ing) => (
          <div key={ing.name} className="flex items-start justify-between border-b border-silver/20 py-2 text-xs">
            <span className="max-w-[70%] text-white">
              {ing.name} <span className="text-silver/50">({ing.spec})</span>
            </span>
            <span className="text-white">{ing.dose}</span>
            <span className="text-silver/50">†</span>
          </div>
        ))}
        <p className="mt-3 text-[10px] leading-relaxed text-silver/45">
          † Daily Value not established. Other ingredients: Plant-based vegetable capsule (Hypromellose), Silicon
          Dioxide. Zero fillers. Zero synthetic stimulants.
        </p>

        {/* Cool mini glowing pill accent using the Pill.png — subtle, not text slop */}
        <div className="pointer-events-none absolute -bottom-3 -right-3 hidden opacity-70 lg:block">
          <div className="relative">
            <div className="absolute inset-0 -m-6 rounded-full bg-bolt/10 blur-[28px]" />
            <Image
              src="/products/focus-mode-premium-capsule.png"
              alt=""
              width={92}
              height={92}
              className="rotate-[22deg] drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
