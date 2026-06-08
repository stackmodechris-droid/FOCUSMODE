"use client";

import { PRODUCT_IMAGES } from "@/lib/site";
import { Activity, Brain, Pill, ShieldCheck, Timer, Zap, type LucideIcon } from "lucide-react";
import { AnimatePresence, motion, type Variants } from "motion/react";
import Image from "next/image";
import { useState } from "react";

type ViewId = "formula" | "capsules" | "open" | "pill";

interface Metric {
  label: string;
  value: number;
  icon: LucideIcon;
}

interface ProductView {
  id: ViewId;
  label: string;
  title: string;
  description: string;
  image: string;
  status: string;
  metrics: Metric[];
}

const VIEWS: Record<ViewId, ProductView> = {
  formula: {
    id: "formula",
    label: "Formula",
    title: "Cognitive Performance Formula",
    description:
      "60 vegetable capsules engineered to cut through brain fog in 20-30 minutes. Zero fillers. Zero synthetic stimulants. Pure cognitive output for students, professionals, and lifelong learners.",
    image: PRODUCT_IMAGES.front,
    status: "In Stock • Ships Today",
    metrics: [
      { label: "Clarity Onset", value: 92, icon: Zap },
      { label: "Focus Duration", value: 88, icon: Timer },
    ],
  },
  capsules: {
    id: "capsules",
    label: "Dose",
    title: "2 Caps, Twice Daily",
    description:
      "Take 20-30 minutes before study sessions, important meetings, or deep creative work. Clean, plant-based capsules absorb fast for rapid neural activation — suitable for growing minds and adult performance.",
    image: PRODUCT_IMAGES.capsules,
    status: "Clinical Dose",
    metrics: [
      { label: "Absorption", value: 95, icon: Activity },
      { label: "Bioavailability", value: 90, icon: Pill },
    ],
  },
  open: {
    id: "open",
    label: "Inside",
    title: "What's Inside",
    description:
      "Ginkgo Biloba (24% Flavones) — powerful antioxidants for oxygen delivery and brain protection + Red Asian Ginseng (7% Ginsenosides) for dopamine, stress adaptation, and sustained stamina. Clinically dosed for all ages.",
    image: PRODUCT_IMAGES.open,
    status: "Premium Quality",
    metrics: [
      { label: "Synaptic Speed", value: 94, icon: Brain },
      { label: "Memory Recall", value: 86, icon: Activity },
    ],
  },
  pill: {
    id: "pill",
    label: "The Pill",
    title: "Engineered Capsule",
    description:
      "One premium capsule. Zero fillers. The exact clinical extracts — with natural antioxidants — that deliver 6+ hours of locked-in focus and support long-term brain health. See the real thing.",
    image: PRODUCT_IMAGES.pill,
    status: "Ready for You",
    metrics: [
      { label: "Purity", value: 99, icon: ShieldCheck },
      { label: "Activation", value: 91, icon: Zap },
    ],
  },
};

const imageVariants: Variants = {
  initial: { opacity: 0, scale: 1.2, filter: "blur(14px)", rotate: -12 },
  animate: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    rotate: 0,
    transition: { type: "spring", stiffness: 220, damping: 22 },
  },
  exit: { opacity: 0, scale: 0.7, filter: "blur(16px)", transition: { duration: 0.22 } },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
  exit: { opacity: 0 },
};
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { type: "spring", stiffness: 120, damping: 18 } },
  exit: { opacity: 0, y: -8 },
};

export function ProductShowcase() {
  const [active, setActive] = useState<ViewId>("formula");
  const data = VIEWS[active];

  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      {/* Visual */}
      <div className="relative flex items-center justify-center">
        {/* Clean premium stage — subtle static depth, no spinning tech rings */}
        <div className="absolute aspect-square w-[82%] rounded-full border border-white/10" />
        <div className="absolute aspect-square w-[68%] rounded-full bg-neural/10 blur-3xl" />
        <div className="absolute aspect-square w-[46%] rounded-full bg-bolt/8 blur-3xl" />
        <div className="relative flex aspect-square w-full max-w-lg items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={data.id}
              variants={imageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="relative h-full w-full"
            >
              <Image
                src={data.image}
                alt={data.title}
                fill
                sizes="(max-width: 1024px) 80vw, 40vw"
                className="object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
              />
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 whitespace-nowrap rounded border border-black/10 bg-white/90 px-2 py-1 text-[8px] tracking-[1px] text-gray-600 backdrop-blur sm:-bottom-2 sm:px-4 sm:py-2 sm:text-[10px] sm:tracking-[1.5px]">
          <span className="mr-2 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-neural align-middle" />
          {data.status}
        </div>
      </div>

      {/* Details */}
      <div>
        <div className="mb-6 flex flex-wrap gap-2 sm:flex-nowrap">
          {Object.values(VIEWS).map((v) => (
            <button
              key={v.id}
              type="button"
              onClick={() => setActive(v.id)}
              className={`relative px-3 py-1.5 sm:px-4 sm:py-2 font-mono-data text-[10px] sm:text-xs uppercase tracking-widest transition-colors rounded-full ${
                active === v.id ? "text-black" : "text-silver/60 hover:text-white"
              }`}
            >
              {active === v.id && (
                <motion.span layoutId="spec-pill" className="absolute inset-0 bg-bolt" transition={{ type: "spring", stiffness: 240, damping: 24 }} />
              )}
              <span className="relative z-10">{v.label}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={active} variants={containerVariants} initial="hidden" animate="visible" exit="exit">
            <motion.h3 variants={itemVariants} className="font-heading text-3xl font-bold tracking-tight text-white md:text-4xl">
              {data.title}
            </motion.h3>
            <motion.p variants={itemVariants} className="mt-4 max-w-md leading-relaxed text-silver/70">
              {data.description}
            </motion.p>

            <motion.div variants={itemVariants} className="mt-8 space-y-5 premium-card p-6">
              {data.metrics.map((m, i) => (
                <div key={m.label}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="flex items-center gap-2 text-silver">
                      <m.icon className="h-4 w-4 text-neural" /> {m.label}
                    </span>
                    <span className="font-mono-data text-xs text-neural">{m.value}%</span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden bg-surface-container-high">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${m.value}%` }}
                      transition={{ duration: 1, delay: 0.3 + i * 0.15 }}
                      className="h-full bg-linear-to-r from-neural to-bolt"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
