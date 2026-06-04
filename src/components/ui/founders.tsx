"use client";

import * as React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface Member {
  name: string;
  role: string;
  initials: string;
  themeColor: string;
}

const MEMBERS: Member[] = [
  { name: "Stackmodechris", role: "Founder & Formulator", initials: "SC", themeColor: "bg-neural/20" },
  { name: "Performance Lab", role: "Formulation", initials: "PL", themeColor: "bg-neural/20" },
  { name: "Edge Systems", role: "Systems", initials: "ES", themeColor: "bg-secondary-container/40" },
  { name: "Stackmode Network", role: "The Mission", initials: "SN", themeColor: "bg-neural/15" },
];

/** Adapted "team showcase" — the Stackmode Network behind Focus Mode. */
export function Founders() {
  return (
    <motion.div
      className="grid w-full grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 md:gap-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } }}
    >
      {MEMBERS.map((m, index) => (
        <motion.div
          key={m.name}
          className="w-full max-w-[180px] justify-self-center md:max-w-none"
          variants={{ hidden: { y: 24, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
          whileHover={{ y: -10, scale: 1.04, zIndex: 40 }}
          style={{ zIndex: MEMBERS.length - index }}
        >
          <div className={cn("relative flex h-[200px] flex-col items-center justify-between overflow-hidden premium-card p-4 text-center sm:p-5 md:h-[260px]")}>
            <div className={cn("absolute -bottom-10 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full blur-2xl", m.themeColor)} />
            <div className="relative z-10">
              <h3 className="font-heading text-sm font-bold text-white md:text-base">{m.name}</h3>
              <p className="mt-1 font-mono-data text-[10px] uppercase tracking-widest text-silver/55">{m.role}</p>
            </div>
            <div className="relative z-10 flex h-16 w-16 items-center justify-center border border-neural/30 bg-surface-dim font-heading text-xl font-extrabold text-neural sm:h-20 sm:w-20 sm:text-2xl md:h-24 md:w-24">
              {m.initials}
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
