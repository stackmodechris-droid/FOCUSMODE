"use client";

import { motion } from "motion/react";

const INGREDIENTS = [
  {
    name: "Ginkgo Biloba",
    spec: "24% Flavones",
    dose: "120mg",
    role: "Oxygen delivery",
    accent: "neural",
    desc: "Ancient Asian herb that increases cerebral blood flow, delivering more oxygen to neural pathways for faster synaptic firing and sharper mental clarity.",
  },
  {
    name: "Red Ginseng",
    spec: "7% Ginsenosides",
    dose: "200mg",
    role: "Neurochemical drive",
    accent: "bolt",
    desc: "Clinically-backed adaptogen that boosts dopamine and acetylcholine production, fueling sustained mental stamina and stress resilience.",
  },
];

const BADGES = [
  { label: "Sustained Power" },
  { label: "Veg Capsules" },
  { label: "Zero Fillers" },
];

function AccentBar({ color }: { color: string }) {
  return (
    <div
      className="h-1 w-12 rounded-full"
      style={{ background: color === "neural" ? "#2eb9df" : "#fde400" }}
    />
  );
}

/** Premium synergistic formula stack — two ingredients in concert. */
export function FormulaStack() {
  return (
    <div className="mx-auto w-full max-w-[920px]">
      <div className="text-center">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl font-semibold tracking-[-0.6px] text-gray-900 sm:text-4xl"
        >
          One synergistic stack
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-gray-500"
        >
          Two clinically-dosed botanicals working in concert — oxygen delivery meets neurochemical drive — in a clean,
          plant-based capsule. No fillers, no fluff.
        </motion.p>
      </div>

      <div className="mt-10 flex flex-col items-stretch gap-6 md:flex-row md:items-center">
        {/* Ingredient cards */}
        {INGREDIENTS.map((ing, i) => (
          <motion.div
            key={ing.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12 }}
            className="premium-card flex-1 p-6 md:p-8"
          >
            <AccentBar color={ing.accent} />
            <div className="mt-4 flex items-center justify-between">
              <h3 className="font-heading text-xl font-bold text-gray-900 sm:text-2xl">{ing.name}</h3>
              <span
                className="rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wider"
                style={{
                  background: ing.accent === "neural" ? "rgba(46,185,223,0.10)" : "rgba(253,228,0,0.20)",
                  color: ing.accent === "neural" ? "#1a7fa8" : "#7c6f00",
                }}
              >
                {ing.spec}
              </span>
            </div>
            <p className="mt-1 font-mono-data text-xs uppercase tracking-widest text-gray-400">{ing.dose}</p>
            <p className="mt-4 text-sm leading-relaxed text-gray-600">{ing.desc}</p>
            <div className="mt-5 flex items-center gap-2 text-sm font-medium text-gray-900">
              <span
                className="inline-block h-1.5 w-1.5 rounded-full"
                style={{ background: ing.accent === "neural" ? "#2eb9df" : "#fde400" }}
              />
              {ing.role}
            </div>
          </motion.div>
        ))}

        {/* Synergy bridge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col items-center justify-center gap-2 self-center px-2"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 4V16M4 10H16" stroke="#2eb9df" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <span className="font-mono-data text-[10px] uppercase tracking-[2px] text-gray-400">Synergy</span>
        </motion.div>
      </div>

      {/* Bottom badges */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-8 flex flex-wrap items-center justify-center gap-3"
      >
        {BADGES.map((b) => (
          <span
            key={b.label}
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-600 shadow-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gray-900" />
            {b.label}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
