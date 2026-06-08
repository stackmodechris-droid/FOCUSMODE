"use client";

import { motion } from "motion/react";

/**
 * Brain silhouette with organic leaves + lightning accents.
 * Represents focus + nature synergy. Pure SVG + Framer Motion.
 */
export function AnimatedBrainLeaves({ className }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Soft ambient glow */}
      <motion.div
        className="absolute inset-0 rounded-full blur-[60px]"
        style={{ background: "radial-gradient(circle, rgba(46,185,223,0.18) 0%, rgba(34,197,94,0.1) 50%, transparent 100%)" }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      <svg
        viewBox="0 0 240 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 w-[180px] h-[200px] sm:w-[220px] sm:h-[240px]"
        aria-hidden
      >
        <defs>
          <linearGradient id="brainGrad" x1="120" y1="50" x2="120" y2="200" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#2eb9df" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#2eb9df" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="leafGrad2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#4ade80" />
            <stop offset="100%" stopColor="#16a34a" />
          </linearGradient>
        </defs>

        {/* Brain outline */}
        <motion.path
          d="M120 55 C85 55 60 80 60 115 C60 145 80 165 95 175 C100 180 105 185 105 195 L105 205 L135 205 L135 195 C135 185 140 180 145 175 C160 165 180 145 180 115 C180 80 155 55 120 55 Z"
          stroke="#2eb9df"
          strokeWidth="2"
          strokeOpacity="0.4"
          fill="url(#brainGrad)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />

        {/* Brain fold lines */}
        <motion.path
          d="M85 105 Q105 95 120 105 Q140 115 155 105"
          stroke="#2eb9df"
          strokeWidth="1.5"
          strokeOpacity="0.25"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        />
        <motion.path
          d="M90 135 Q110 125 125 135 Q145 145 160 135"
          stroke="#2eb9df"
          strokeWidth="1.5"
          strokeOpacity="0.25"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.7, ease: "easeOut" }}
        />

        {/* Left leaf growing from brain */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.7, ease: "easeOut" }}
        >
          <motion.path
            d="M70 110 Q45 100 35 85 Q50 95 70 105"
            fill="url(#leafGrad2)"
            animate={{ rotate: [-2, 4, -2] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "70px 110px" }}
          />
          <motion.path
            d="M70 120 Q40 120 30 135 Q50 125 70 125"
            fill="url(#leafGrad2)"
            animate={{ rotate: [2, -3, 2] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "70px 120px" }}
          />
        </motion.g>

        {/* Right leaf growing from brain */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.7, ease: "easeOut" }}
        >
          <motion.path
            d="M170 105 Q195 95 205 80 Q190 90 170 100"
            fill="url(#leafGrad2)"
            animate={{ rotate: [2, -4, 2] }}
            transition={{ duration: 4.3, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "170px 105px" }}
          />
          <motion.path
            d="M170 125 Q200 125 210 140 Q190 130 170 130"
            fill="url(#leafGrad2)"
            animate={{ rotate: [-2, 3, -2] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
            style={{ transformOrigin: "170px 125px" }}
          />
        </motion.g>

        {/* Top lightning accent */}
        <motion.g
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <motion.path
            d="M115 50 L108 35 L113 35 L108 20"
            stroke="#fde400"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M125 50 L132 35 L127 35 L132 22"
            stroke="#fde400"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            animate={{ opacity: [0.3, 0.9, 0.3] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          />
        </motion.g>

        {/* Bottom root / stem */}
        <motion.path
          d="M120 205 Q120 225 120 240"
          stroke="#22c55e"
          strokeWidth="2"
          strokeOpacity="0.3"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 1.8, ease: "easeOut" }}
        />
        <motion.path
          d="M120 225 Q105 235 100 245"
          stroke="#22c55e"
          strokeWidth="1.5"
          strokeOpacity="0.25"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 2.0, ease: "easeOut" }}
        />
        <motion.path
          d="M120 225 Q135 235 140 245"
          stroke="#22c55e"
          strokeWidth="1.5"
          strokeOpacity="0.25"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 2.2, ease: "easeOut" }}
        />
      </svg>
    </div>
  );
}
