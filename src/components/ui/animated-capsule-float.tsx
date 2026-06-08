"use client";

import { motion } from "motion/react";

/**
 * Two floating capsules with soft glow — Focus Mode + Greens visual.
 * Pure SVG + Framer Motion, zero heavy assets.
 */
export function AnimatedCapsuleFloat({ className }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Soft ambient glow */}
      <motion.div
        className="absolute inset-0 rounded-full blur-[50px]"
        style={{ background: "radial-gradient(circle, rgba(46,185,223,0.2) 0%, rgba(34,197,94,0.12) 50%, transparent 100%)" }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      <svg
        viewBox="0 0 260 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 w-[220px] h-[170px] sm:w-[260px] sm:h-[200px]"
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

        {/* Blue capsule (Focus Mode) — floating */}
        <motion.g
          animate={{ y: [0, -12, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Glow */}
          <ellipse cx="90" cy="100" rx="35" ry="18" fill="rgba(30,144,255,0.15)" filter="url(#capGlow)" />
          {/* Body */}
          <rect x="65" y="85" width="50" height="30" rx="15" fill="url(#capBlue)" opacity="0.9" />
          {/* Highlight */}
          <path d="M75 92 Q90 90 105 92" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" fill="none" />
        </motion.g>

        {/* Green capsule (Greens) — floating offset */}
        <motion.g
          animate={{ y: [0, -10, 0], rotate: [0, -3, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          {/* Glow */}
          <ellipse cx="170" cy="110" rx="35" ry="18" fill="rgba(34,197,94,0.15)" filter="url(#capGlow)" />
          {/* Body */}
          <rect x="145" y="95" width="50" height="30" rx="15" fill="url(#capGreen)" opacity="0.9" />
          {/* Highlight */}
          <path d="M155 102 Q170 100 185 102" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" fill="none" />
        </motion.g>

        {/* Connecting energy line between capsules */}
        <motion.path
          d="M120 100 Q145 85 145 110"
          stroke="#fde400"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          strokeLinecap="round"
          fill="none"
          animate={{ strokeDashoffset: [0, -16] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />

        {/* Small floating particles */}
        {[
          { cx: 60, cy: 70, r: 2.5, delay: 0 },
          { cx: 200, cy: 65, r: 2, delay: 0.7 },
          { cx: 130, cy: 55, r: 3, delay: 1.4 },
          { cx: 80, cy: 140, r: 2, delay: 2.1 },
          { cx: 185, cy: 145, r: 2.5, delay: 0.5 },
        ].map((p, i) => (
          <motion.circle
            key={i}
            cx={p.cx}
            cy={p.cy}
            r={p.r}
            fill={i % 2 === 0 ? "#2eb9df" : "#22c55e"}
            opacity="0.5"
            animate={{ cy: [p.cy, p.cy - 10, p.cy], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 3, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </svg>
    </div>
  );
}
