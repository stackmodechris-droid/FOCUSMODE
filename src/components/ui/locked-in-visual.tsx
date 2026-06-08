"use client";

import { Activity, Brain, Database, Leaf, ShieldCheck, Timer, Zap, type LucideIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Benefit {
  icon: LucideIcon;
  title: string;
  desc: string;
  metric: string;
  accent: "neural" | "bolt";
}

const BENEFITS: Benefit[] = [
  { icon: Brain, title: "Sharper Mental Clarity", desc: "Cut through brain fog and distraction within 20-30 minutes. Think clearer, longer.", metric: "20-30 MIN", accent: "neural" },
  { icon: Zap, title: "Faster Decision-Making", desc: "Enhanced processing for sharp calls in business, exams, creative work, and high-stakes moments.", metric: "SPEED +", accent: "bolt" },
  { icon: Timer, title: "Sustained Focus", desc: "Stay locked in for 6+ hours with zero jitters and zero afternoon crashes. Real productivity.", metric: "6+ HOURS", accent: "bolt" },
  { icon: Database, title: "Improved Memory", desc: "Remember critical details, patterns, conversations, and strategies when it matters most.", metric: "RECALL +", accent: "neural" },
  { icon: ShieldCheck, title: "No Jitters, No Crash", desc: "Zero caffeine, zero synthetic stimulants. Pure, clean mental performance all day.", metric: "CLEAN", accent: "bolt" },
  { icon: Activity, title: "Neurological Support", desc: "Better blood flow + powerful antioxidants = fewer headaches, less fatigue, and long-term brain vitality.", metric: "VITALITY +", accent: "neural" },
];

// Angles for 6 nodes, evenly spaced, starting from top
const ANGLES = [-90, -30, 30, 90, 150, 210];

export function LockedInVisual() {
  const [active, setActive] = useState<number | null>(null);
  const activeBenefit = active !== null ? BENEFITS[active] : null;

  // Responsive orbit radius + card scale for no overlaps, no clipping, perfect on mobile & desktop
  // Tuned wider spacing on mobile so squares (nodes) not too close to pill or each other
  const [orbitRadius, setOrbitRadius] = useState(178);
  const [cardScale, setCardScale] = useState(1);

  useEffect(() => {
    const updateLayout = () => {
      const w = window.innerWidth;
      if (w < 375) {
        setOrbitRadius(115);
        setCardScale(0.88);
      } else if (w < 420) {
        setOrbitRadius(125);
        setCardScale(0.92);
      } else if (w < 640) {
        setOrbitRadius(142);
        setCardScale(0.96);
      } else if (w < 768) {
        setOrbitRadius(158);
        setCardScale(1);
      } else {
        setOrbitRadius(192);
        setCardScale(1);
      }
    };
    updateLayout();
    window.addEventListener("resize", updateLayout);
    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-[860px] select-none min-h-[380px] pt-2 pb-2 sm:min-h-[440px] sm:pt-4 sm:pb-4 md:min-h-[600px] md:pt-10 md:pb-8 overflow-hidden">
      {/* Ambient background — clean premium orbs + subtle static rings (no spinning coded tech) */}
      <svg
        className="pointer-events-none absolute inset-0 -m-6 sm:-m-8 h-[100%] w-[100%] sm:h-[110%] sm:w-[110%] opacity-35"
        viewBox="0 0 800 620"
        fill="none"
        aria-hidden
      >
        {/* Static elegant rings for depth */}
        <circle cx="400" cy="310" r="268" stroke="#2eb9df" strokeOpacity="0.07" strokeWidth="1" strokeDasharray="2 10" />
        <circle cx="400" cy="310" r="210" stroke="#fde400" strokeOpacity="0.05" strokeWidth="1" />
        <circle cx="400" cy="310" r="198" stroke="#fde400" strokeOpacity="0.07" strokeWidth="1.25" strokeDasharray="1 7" />

        {/* Soft pulsing core for premium life (very subtle) */}
        <motion.circle
          cx="400"
          cy="310"
          r="92"
          stroke="#2eb9df"
          strokeOpacity="0.16"
          strokeWidth="1"
          animate={{ r: [88, 99, 88], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Subtle brain outline behind the pill — thematic anchor */}
        <motion.path
          d="M400 140 C355 140 320 160 305 195 C293 225 290 260 295 295 C300 330 315 360 335 382 C345 394 355 402 365 408 L365 423 L390 423 L390 440 Q390 465 400 485 Q410 465 410 440 L410 423 L435 423 L435 408 C445 402 455 394 465 382 C485 360 500 330 505 295 C510 260 507 225 495 195 C480 160 445 140 400 140 Z"
          stroke="#64748b"
          strokeWidth="1"
          strokeOpacity="0.04"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: "easeOut" }}
        />
        {/* Central fissure */}
        <motion.path
          d="M400 145 Q395 190 398 235 Q400 280 398 325 Q395 365 400 420"
          stroke="#64748b"
          strokeWidth="0.8"
          strokeOpacity="0.03"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2.5, delay: 0.5, ease: "easeOut" }}
        />

        {/* Neural mesh — faint connecting lines between node positions */}
        {[
          // Hexagon perimeter connections
          { a: -90, b: -30 },
          { a: -30, b: 30 },
          { a: 30, b: 90 },
          { a: 90, b: 150 },
          { a: 150, b: 210 },
          { a: 210, b: -90 },
          // Cross connections for mesh feel
          { a: -90, b: 90 },
          { a: -30, b: 150 },
          { a: 30, b: 210 },
        ].map((conn, idx) => {
          const r = 250 * (orbitRadius / 192);
          const radA = (conn.a * Math.PI) / 180;
          const radB = (conn.b * Math.PI) / 180;
          const x1 = 400 + Math.cos(radA) * r;
          const y1 = 310 + Math.sin(radA) * r;
          const x2 = 400 + Math.cos(radB) * r;
          const y2 = 310 + Math.sin(radB) * r;
          return (
            <motion.line
              key={`mesh-${idx}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#2eb9df"
              strokeOpacity="0.04"
              strokeWidth="0.8"
              strokeLinecap="round"
              animate={{ strokeOpacity: [0.03, 0.07, 0.03] }}
              transition={{ duration: 5 + idx * 0.5, repeat: Infinity, ease: "easeInOut", delay: idx * 0.3 }}
            />
          );
        })}

        {/* 6 radial connection lines - base faint (responsive to orbit) */}
        {ANGLES.map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const lineR = 250 * (orbitRadius / 192);
          const x2 = 400 + Math.cos(rad) * lineR;
          const y2 = 310 + Math.sin(rad) * lineR;
          const isActive = active === i;
          return (
            <motion.line
              key={i}
              x1="400"
              y1="310"
              x2={x2}
              y2={y2}
              stroke={isActive ? (BENEFITS[i].accent === "bolt" ? "#fde400" : "#2eb9df") : "#2eb9df"}
              strokeOpacity={isActive ? 0.4 : 0.08}
              strokeWidth={isActive ? 1.5 : 1}
              strokeLinecap="round"
            />
          );
        })}

        {/* Subtle orbiting dots on outer ring - minimal motion */}
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.circle
            key={`dot-${i}`}
            r="2.5"
            fill="#fde400"
            initial={{ opacity: 0.3 }}
            animate={{
              opacity: [0.2, 0.85, 0.2],
            }}
            transition={{
              duration: 3.8 + i * 0.7,
              repeat: Infinity,
              delay: i * 0.9,
              ease: "easeInOut",
            }}
          >
            <animateMotion
              dur={`${22 + i * 3}s`}
              repeatCount="indefinite"
              path="M400,310 m-268,0 a268,268 0 1,0 536,0 a268,268 0 1,0 -536,0"
            />
          </motion.circle>
        ))}
        {Array.from({ length: 4 }).map((_, i) => (
          <motion.circle
            key={`dot2-${i}`}
            r="1.8"
            fill="#2eb9df"
            initial={{ opacity: 0.25 }}
            animate={{ opacity: [0.15, 0.7, 0.15] }}
            transition={{ duration: 4.2 + i, repeat: Infinity, delay: 1.2 + i * 0.6 }}
          >
            <animateMotion
              dur={`${17 + i * 2.5}s`}
              repeatCount="indefinite"
              path="M400,310 m-198,0 a198,198 0 1,0 396,0 a198,198 0 1,0 -396,0"
            />
          </motion.circle>
        ))}
      </svg>

      {/* Central glowing explanation text layers — BIG GLOWING WORDS BEHIND THE PILL (smaller on mobile) */}
      <div className="pointer-events-none absolute left-1/2 top-[18%] sm:top-[28%] z-0 -translate-x-1/2 -translate-y-1/2 text-center">
        <AnimatePresence mode="wait">
          {activeBenefit && (
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.7, filter: "blur(14px)" }}
              animate={{ opacity: [0.06, 0.13, 0.06], scale: 1, filter: "blur(6px)" }}
              exit={{ opacity: 0, scale: 0.8, filter: "blur(18px)" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading text-[28px] sm:text-[44px] md:text-[78px] font-black tracking-[-3.5px] md:tracking-[-5.5px] leading-[0.82] text-white max-w-[88%] mx-auto"
              style={{
                textShadow:
                  activeBenefit.accent === "bolt"
                    ? "0 0 80px rgba(253,228,0,0.55), 0 0 160px rgba(253,228,0,0.25)"
                    : "0 0 80px rgba(46,185,223,0.55), 0 0 160px rgba(46,185,223,0.25)",
              }}
            >
              {activeBenefit.title.split(" ").slice(-1)[0].toUpperCase()}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* The actual pill — absolutely centered in tall container so nodes never clip or overlap text/edges */}
      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 flex h-[210px] w-full max-w-[280px] items-center justify-center sm:h-[255px] sm:max-w-[320px] md:h-[360px] md:max-w-[440px]">
        {/* Layered glowing orbs behind pill (the "glow behind these") */}
        <div
          className="absolute left-1/2 top-1/2 h-[68%] w-[68%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neural/25 blur-[110px]"
          style={{ animation: "glow-pulse 5.5s ease-in-out infinite" }}
        />
        <div
          className="absolute left-1/2 top-1/2 h-[46%] w-[46%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-bolt/20 blur-[92px]"
          style={{ animation: "glow-pulse 4.2s ease-in-out infinite 1.1s" }}
        />
        {/* Extra ethereal glow layers */}
        <motion.div
          className="absolute left-1/2 top-1/2 h-[82%] w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              active !== null && activeBenefit?.accent === "bolt"
                ? "radial-gradient(circle, rgba(253,228,0,0.12) 0%, transparent 70%)"
                : "radial-gradient(circle, rgba(46,185,223,0.1) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
          animate={{ scale: active !== null ? 1.08 : 1 }}
          transition={{ duration: 0.4 }}
        />

        {/* Layered ghost pills for depth + using the pill.png prominently (cool factor) */}
        <div className="absolute left-1/2 top-[51%] z-0 -translate-x-1/2 -translate-y-1/2 opacity-20 blur-[2px]">
          <Image src="/products/focus-mode-premium-capsule.png" alt="" width={240} height={240} className="rotate-[-12deg] scale-[0.72]" />
        </div>
        <div className="absolute left-1/2 top-[49%] z-0 -translate-x-1/2 -translate-y-1/2 opacity-10 blur-[6px]">
          <Image src="/products/focus-mode-premium-capsule.png" alt="" width={270} height={270} className="rotate-[17deg] scale-[0.82]" />
        </div>

        {/* The Pill PNG itself — large, floating, glowing */}
        <motion.div
          className="relative z-20"
          animate={{
            y: [0, -9, 0],
            rotate: active !== null ? (activeBenefit?.accent === "bolt" ? 1.5 : -1.2) : 0,
          }}
          transition={{ y: { duration: 5.8, repeat: Infinity, ease: "easeInOut" }, rotate: { duration: 0.45 } }}
          whileHover={{ scale: 1.015 }}
        >
          <div className="relative">
            {/* Inner subtle highlight ring on the pill */}
            <div className="absolute inset-0 -m-3 rounded-full border border-white/10" />
            <Image
              src="/products/focus-mode-premium-capsule.png"
              alt="Focus Mode premium capsule — the core of locked-in performance"
              width={420}
              height={420}
              className="relative z-10 h-auto w-[158px] drop-shadow-[0_40px_90px_rgba(0,0,0,0.75)] sm:w-[188px] md:w-[240px] select-none"
              draggable={false}
              priority
            />
            {/* Tiny animated energy pulse overlay on pill */}
            <motion.div
              className="absolute left-1/2 top-1/2 z-30 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white mix-blend-screen"
              animate={{ scale: [0.6, 1.9, 0.6], opacity: [0.0, 0.65, 0.0] }}
              transition={{ duration: 1.9, repeat: Infinity, ease: "easeOut" }}
            />
          </div>
        </motion.div>

        {/* Plant watermark behind pill — all-natural signal */}
        <motion.div
          className="absolute bottom-[-12%] right-[8%] z-0 opacity-[0.07] sm:opacity-[0.09]"
          animate={{ rotate: [0, 3, 0], y: [0, -4, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Leaf className="h-16 w-16 sm:h-20 sm:w-20 text-green-400" />
        </motion.div>

        {/* LOCKED status badge floating near pill */}
        <div className="absolute bottom-[6%] left-1/2 z-30 -translate-x-1/2 rounded-full border border-black/10 bg-white/90 px-2 py-0.5 text-[6px] tracking-[2px] text-neural/90 backdrop-blur sm:bottom-[8%] sm:px-3 sm:py-0.5 sm:text-[7px] sm:tracking-[2.5px]">
          <span className="mr-1.5 inline-block h-1 w-1 animate-pulse rounded-full bg-neural align-middle" />
          STAY LOCKED
        </div>
      </div>

      {/* Orbiting benefit nodes — interactive, glow on hover/activate */}
      {BENEFITS.map((b, i) => {
        const angle = ANGLES[i];
        const rad = (angle * Math.PI) / 180;
        const x = Math.cos(rad) * orbitRadius;
        const y = Math.sin(rad) * orbitRadius;
        const isActive = active === i;
        const Icon = b.icon;

        return (
          <div
            key={i}
            className="absolute left-1/2 top-1/2 z-30"
            style={{
              transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
            }}
          >
            <motion.button
              type="button"
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(i)}
              onBlur={() => setActive(null)}
              onClick={() => setActive(active === i ? null : i)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.985 }}
              animate={{
                scale: isActive ? 1.06 : 1,
                y: isActive ? -2 : 0,
              }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className={`group relative flex w-[80px] flex-col items-center rounded-2xl border px-1.5 py-1.5 text-center transition-all sm:w-[108px] md:w-[138px] ${
                isActive
                  ? b.accent === "bolt"
                    ? "border-bolt bg-white shadow-[0_0_0_1px_rgba(253,228,0,0.25),0_12px_32px_-10px_rgba(0,0,0,0.18)]"
                    : "border-neural bg-white shadow-[0_0_0_1px_rgba(46,185,223,0.25),0_12px_32px_-10px_rgba(0,0,0,0.18)]"
                  : "border-black/10 bg-white shadow-sm hover:border-black/25 hover:shadow-md"
              }`}
              style={{ transform: `scale(${cardScale})`, transformOrigin: "center" }}
              aria-label={b.title}
            >
              {/* Node glow ring when active */}
              {isActive && (
                <div
                  className="pointer-events-none absolute -inset-px rounded-2xl"
                  style={{
                    boxShadow:
                      b.accent === "bolt"
                        ? "0 0 0 1px rgba(253,228,0,0.35), 0 0 36px rgba(253,228,0,0.22)"
                        : "0 0 0 1px rgba(46,185,223,0.35), 0 0 36px rgba(46,185,223,0.22)",
                  }}
                />
              )}

              {/* Mini animated SVG icon container — pulsing ring + icon */}
              <div className="relative mb-1 mt-0.5 flex h-8 w-8 items-center justify-center sm:h-8 sm:w-8 md:h-9 md:w-9">
                <svg width="28" height="28" viewBox="0 0 28 28" className="absolute h-[32px] w-[32px] sm:h-[32px] sm:w-[32px] md:h-[36px] md:w-[36px]">
                  <motion.circle
                    cx="14"
                    cy="14"
                    r="11"
                    fill="none"
                    stroke={b.accent === "bolt" ? "#fde400" : "#2eb9df"}
                    strokeOpacity={isActive ? 0.55 : 0.18}
                    strokeWidth="1.25"
                    animate={isActive ? { r: [10, 12.5, 10] } : {}}
                    transition={{ duration: 1.4, repeat: isActive ? Infinity : 0 }}
                  />
                  <motion.circle
                    cx="14"
                    cy="14"
                    r="7"
                    fill="none"
                    stroke={b.accent === "bolt" ? "#fde400" : "#2eb9df"}
                    strokeOpacity={isActive ? 0.4 : 0.1}
                    strokeWidth="0.9"
                    strokeDasharray="2 4"
                    animate={{ rotate: isActive ? [0, 180] : 0 }}
                    transition={{ duration: 2.8, repeat: isActive ? Infinity : 0, ease: "linear" }}
                  />
                </svg>
                <Icon className={`relative h-4 w-4 sm:h-4 sm:w-4 md:h-5 md:w-5 ${isActive ? (b.accent === "bolt" ? "text-bolt" : "text-neural") : b.accent === "bolt" ? "text-bolt/70 group-hover:text-bolt" : "text-neural/70 group-hover:text-neural"}`} />
              </div>

              <div className="font-heading text-[9px] font-bold leading-tight tracking-[-0.1px] text-gray-950 sm:text-[10px] md:text-[11px]">
                {b.title}
              </div>
              <div className="mt-0.5 font-mono-data text-[7px] tracking-[1.2px] text-neural sm:text-[7.5px]">{b.metric}</div>

              {/* Inline glowing explanation on the node itself for extra clarity */}
              <p className="mt-0.5 line-clamp-2 text-[7.5px] leading-snug text-silver/70 group-hover:text-black sm:text-[8px]">
                {b.desc}
              </p>
            </motion.button>
          </div>
        );
      })}

      {/* Bottom subtle caption */}
      <div className="pointer-events-none absolute -bottom-1 left-1/2 z-10 -translate-x-1/2 text-center text-[7px] tracking-[1.5px] text-silver/60 sm:-bottom-0 sm:text-[8px]">
        <span className="text-gray-500">HOVER OR TAP NODES TO ACTIVATE GLOW EXPLANATIONS</span>
      </div>
    </div>
  );
}
