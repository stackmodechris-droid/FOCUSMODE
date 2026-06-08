"use client";

import { motion } from "motion/react";

/**
 * Animated sprouting plant SVG — organic growth, swaying leaves.
 * Pure SVG + Framer Motion, zero heavy assets.
 */
export function AnimatedPlant({ className }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Soft green glow */}
      <motion.div
        className="absolute inset-0 rounded-full blur-[55px]"
        style={{ background: "radial-gradient(circle, rgba(34,197,94,0.25) 0%, rgba(132,239,172,0.08) 60%, transparent 100%)" }}
        animate={{ scale: [1, 1.12, 1], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
      />

      <svg
        viewBox="0 0 200 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 w-[150px] h-[210px] sm:w-[180px] sm:h-[250px]"
        aria-hidden
      >
        <defs>
          <linearGradient id="stemGrad" x1="100" y1="180" x2="100" y2="60" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#15803d" />
            <stop offset="100%" stopColor="#22c55e" />
          </linearGradient>
          <linearGradient id="leafGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#4ade80" />
            <stop offset="100%" stopColor="#16a34a" />
          </linearGradient>
        </defs>

        {/* Soil mound */}
        <ellipse cx="100" cy="255" rx="45" ry="10" fill="rgba(0,0,0,0.08)" />

        {/* Stem — grows upward */}
        <motion.path
          d="M100 255 Q100 200 100 180 Q100 140 100 110 Q100 90 100 75"
          stroke="url(#stemGrad)"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        {/* Left leaf */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
        >
          <motion.path
            d="M100 140 Q60 130 45 110 Q55 125 100 135"
            fill="url(#leafGrad)"
            animate={{ rotate: [-2, 3, -2] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "100px 140px" }}
          />
        </motion.g>

        {/* Right leaf */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6, ease: "easeOut" }}
        >
          <motion.path
            d="M100 115 Q140 105 155 85 Q145 100 100 110"
            fill="url(#leafGrad)"
            animate={{ rotate: [2, -3, 2] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "100px 115px" }}
          />
        </motion.g>

        {/* Top leaf cluster */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
        >
          <motion.path
            d="M100 75 Q75 55 70 40 Q80 55 100 70"
            fill="url(#leafGrad)"
            animate={{ rotate: [-3, 4, -3] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "100px 75px" }}
          />
          <motion.path
            d="M100 75 Q125 55 130 40 Q120 55 100 70"
            fill="url(#leafGrad)"
            animate={{ rotate: [3, -4, 3] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "100px 75px" }}
          />
          <motion.path
            d="M100 70 Q100 45 100 35 Q100 50 100 68"
            fill="#22c55e"
            opacity="0.9"
            animate={{ rotate: [-1, 2, -1] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "100px 70px" }}
          />
        </motion.g>

        {/* Sparkle / dew drops */}
        {[
          { cx: 70, cy: 110, delay: 1.5 },
          { cx: 130, cy: 85, delay: 1.8 },
          { cx: 100, cy: 45, delay: 2.1 },
        ].map((d, i) => (
          <motion.circle
            key={i}
            cx={d.cx}
            cy={d.cy}
            r="3"
            fill="#86efac"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: [0, 0.8, 0], scale: [0, 1.2, 0] }}
            transition={{ duration: 2, delay: d.delay, repeat: Infinity, repeatDelay: 2 }}
          />
        ))}
      </svg>
    </div>
  );
}
