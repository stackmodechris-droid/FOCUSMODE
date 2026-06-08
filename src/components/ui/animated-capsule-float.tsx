"use client";

import { motion } from "motion/react";

/**
 * Clinical formula capsules — Ginkgo leaf (blue) + Ginseng root (green).
 * Pure SVG + Framer Motion, zero heavy assets.
 */
export function AnimatedCapsuleFloat({ className }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Soft dual-tone glow */}
      <motion.div
        className="absolute inset-0 rounded-full blur-[50px]"
        style={{ background: "radial-gradient(circle, rgba(46,185,223,0.2) 0%, rgba(34,197,94,0.12) 50%, transparent 100%)" }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      <svg
        viewBox="0 0 320 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 w-[260px] h-[180px] sm:w-[310px] sm:h-[210px]"
        aria-hidden
      >
        <defs>
          <linearGradient id="capBlue" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#7ec4ff" />
            <stop offset="100%" stopColor="#1e90ff" />
          </linearGradient>
          <linearGradient id="capGreen" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#86efac" />
            <stop offset="100%" stopColor="#22c55e" />
          </linearGradient>
          <filter id="capGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Blue capsule (Ginkgo Biloba) — floating */}
        <motion.g
          animate={{ y: [0, -12, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Glow */}
          <ellipse cx="90" cy="110" rx="38" ry="20" fill="rgba(30,144,255,0.15)" filter="url(#capGlow)" />
          {/* Body */}
          <rect x="62" y="95" width="56" height="32" rx="16" fill="url(#capBlue)" opacity="0.9" />
          {/* Highlight */}
          <path d="M74 102 Q90 100 106 102" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" fill="none" />
          {/* Ginkgo leaf pattern */}
          <motion.path
            d="M90 105 Q82 98 80 92 Q86 97 90 103 Q94 97 100 92 Q98 98 90 105"
            fill="rgba(255,255,255,0.25)"
            animate={{ opacity: [0.2, 0.45, 0.2] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.g>

        {/* Green capsule (Red Asian Ginseng) — floating offset */}
        <motion.g
          animate={{ y: [0, -10, 0], rotate: [0, -3, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          {/* Glow */}
          <ellipse cx="230" cy="115" rx="38" ry="20" fill="rgba(34,197,94,0.15)" filter="url(#capGlow)" />
          {/* Body */}
          <rect x="202" y="100" width="56" height="32" rx="16" fill="url(#capGreen)" opacity="0.9" />
          {/* Highlight */}
          <path d="M214 107 Q230 105 246 107" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" fill="none" />
          {/* Ginseng root pattern — small forked root shape */}
          <motion.g
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          >
            <path d="M230 112 Q228 118 226 122" stroke="rgba(255,255,255,0.3)" strokeWidth="1.2" strokeLinecap="round" fill="none" />
            <path d="M230 112 Q232 117 235 120" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeLinecap="round" fill="none" />
            <path d="M230 112 Q227 115 223 117" stroke="rgba(255,255,255,0.25)" strokeWidth="0.9" strokeLinecap="round" fill="none" />
          </motion.g>
        </motion.g>

        {/* Clinical connecting line — dashed with traveling molecule dots */}
        <motion.path
          d="M148 110 Q185 95 202 115"
          stroke="#fde400"
          strokeWidth="1.5"
          strokeDasharray="5 5"
          strokeLinecap="round"
          fill="none"
          animate={{ strokeDashoffset: [0, -20] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }}
        />
        {/* Traveling molecule dots along the line */}
        {[
          { cx: 158, cy: 105, delay: 0 },
          { cx: 178, cy: 100, delay: 0.6 },
          { cx: 195, cy: 108, delay: 1.2 },
        ].map((m, i) => (
          <motion.circle
            key={`mol-${i}`}
            cx={m.cx}
            cy={m.cy}
            r="2.5"
            fill="#fde400"
            animate={{ opacity: [0.3, 0.9, 0.3], cy: [m.cy - 2, m.cy + 2, m.cy - 2] }}
            transition={{ duration: 2.5, delay: m.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}

        {/* Ingredient-themed floating particles */}
        {/* Tiny ginkgo leaf shapes */}
        {[
          { x: 55, y: 75, delay: 0 },
          { x: 110, y: 155, delay: 1.2 },
        ].map((p, i) => (
          <motion.path
            key={`leaf-${i}`}
            d={`M${p.x} ${p.y} Q${p.x - 5} ${p.y - 6} ${p.x - 3} ${p.y - 10} Q${p.x + 2} ${p.y - 5} ${p.x} ${p.y}`}
            fill="#2eb9df"
            opacity="0.4"
            animate={{ y: [0, -8, 0], opacity: [0.2, 0.5, 0.2], rotate: [0, 8, 0] }}
            transition={{ duration: 4 + i, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
        {/* Tiny root-shaped particles */}
        {[
          { x: 245, y: 70, delay: 0.7 },
          { x: 200, y: 160, delay: 1.8 },
        ].map((r, i) => (
          <motion.g
            key={`root-${i}`}
            animate={{ y: [0, -6, 0], opacity: [0.2, 0.45, 0.2] }}
            transition={{ duration: 3.5 + i, delay: r.delay, repeat: Infinity, ease: "easeInOut" }}
          >
            <path d={`M${r.x} ${r.y} L${r.x} ${r.y + 5}`} stroke="#22c55e" strokeWidth="1.2" strokeLinecap="round" opacity="0.5" />
            <path d={`M${r.x} ${r.y + 3} L${r.x + 3} ${r.y + 6}`} stroke="#22c55e" strokeWidth="0.9" strokeLinecap="round" opacity="0.4" />
          </motion.g>
        ))}
      </svg>
    </div>
  );
}
