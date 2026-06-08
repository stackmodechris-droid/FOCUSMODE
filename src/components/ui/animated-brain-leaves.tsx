"use client";

import { motion } from "motion/react";

/**
 * Realistic brain with drifting fog clouds and downward arrows.
 * Represents the cognitive decline of brain fog. Pure SVG + Framer Motion.
 */
export function AnimatedBrainLeaves({ className }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Soft pink brain glow */}
      <motion.div
        className="absolute inset-0 rounded-full blur-[60px]"
        style={{ background: "radial-gradient(circle, rgba(255,77,141,0.22) 0%, rgba(255,26,107,0.08) 50%, transparent 100%)" }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.75, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <svg
        viewBox="0 0 260 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 w-[190px] h-[250px] sm:w-[240px] sm:h-[310px]"
        aria-hidden
      >
        <defs>
          <linearGradient id="brainGrad" x1="130" y1="40" x2="130" y2="230" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ff4d8d" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#ff1a6b" stopOpacity="0.06" />
          </linearGradient>
          <linearGradient id="fogGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ff99bb" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#ff4d8d" stopOpacity="0.2" />
          </linearGradient>
          <filter id="fogBlur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" />
          </filter>
        </defs>

        {/* Brain outline — realistic two-hemisphere shape */}
        <motion.path
          d="M130 38 C100 38 72 52 58 78 C48 98 46 122 50 148 C54 172 64 192 78 208 C86 216 94 222 100 226 L100 238 L118 238 L118 250 Q118 270 130 285 Q142 270 142 250 L142 238 L160 238 L160 226 C166 222 174 216 182 208 C196 192 206 172 210 148 C214 122 212 98 202 78 C188 52 160 38 130 38 Z"
          stroke="#ff4d8d"
          strokeWidth="1.8"
          strokeOpacity="0.5"
          fill="url(#brainGrad)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />

        {/* Central longitudinal fissure */}
        <motion.path
          d="M130 42 Q126 75 128 110 Q130 145 128 180 Q126 210 130 238"
          stroke="#ff3377"
          strokeWidth="1.2"
          strokeOpacity="0.35"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.8, delay: 0.3, ease: "easeOut" }}
        />

        {/* Left hemisphere gyri (fold ridges) */}
        {[
          "M 62 88 Q 85 78 105 88",
          "M 56 118 Q 82 108 102 118",
          "M 54 148 Q 80 138 100 148",
          "M 60 178 Q 84 168 104 178",
          "M 72 202 Q 92 192 108 202",
          "M 85 68 Q 105 58 120 68",
        ].map((d, i) => (
          <motion.path
            key={`l-${i}`}
            d={d}
            stroke="#ff6699"
            strokeWidth="1"
            strokeOpacity="0.22"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, delay: 0.5 + i * 0.1, ease: "easeOut" }}
          />
        ))}

        {/* Right hemisphere gyri */}
        {[
          "M 198 88 Q 175 78 155 88",
          "M 204 118 Q 178 108 158 118",
          "M 206 148 Q 180 138 160 148",
          "M 200 178 Q 176 168 156 178",
          "M 188 202 Q 168 192 152 202",
          "M 175 68 Q 155 58 140 68",
        ].map((d, i) => (
          <motion.path
            key={`r-${i}`}
            d={d}
            stroke="#ff6699"
            strokeWidth="1"
            strokeOpacity="0.22"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, delay: 0.6 + i * 0.1, ease: "easeOut" }}
          />
        ))}

        {/* Fog clouds — drifting across upper brain */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          {/* Cloud 1 — upper left */}
          <motion.g
            animate={{ x: [-6, 8, -6], opacity: [0.35, 0.6, 0.35] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          >
            <ellipse cx="85" cy="72" rx="28" ry="14" fill="url(#fogGrad)" filter="url(#fogBlur)" />
            <ellipse cx="105" cy="68" rx="22" ry="11" fill="url(#fogGrad)" filter="url(#fogBlur)" />
            <ellipse cx="68" cy="76" rx="18" ry="9" fill="url(#fogGrad)" filter="url(#fogBlur)" />
          </motion.g>

          {/* Cloud 2 — upper right */}
          <motion.g
            animate={{ x: [5, -7, 5], opacity: [0.3, 0.55, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <ellipse cx="185" cy="78" rx="26" ry="13" fill="url(#fogGrad)" filter="url(#fogBlur)" />
            <ellipse cx="165" cy="74" rx="20" ry="10" fill="url(#fogGrad)" filter="url(#fogBlur)" />
            <ellipse cx="200" cy="80" rx="16" ry="8" fill="url(#fogGrad)" filter="url(#fogBlur)" />
          </motion.g>

          {/* Cloud 3 — top center, drifting across both hemispheres */}
          <motion.g
            animate={{ x: [-10, 12, -10], opacity: [0.25, 0.5, 0.25] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          >
            <ellipse cx="130" cy="55" rx="34" ry="15" fill="url(#fogGrad)" filter="url(#fogBlur)" />
            <ellipse cx="110" cy="52" rx="24" ry="11" fill="url(#fogGrad)" filter="url(#fogBlur)" />
            <ellipse cx="150" cy="54" rx="20" ry="9" fill="url(#fogGrad)" filter="url(#fogBlur)" />
          </motion.g>
        </motion.g>

        {/* Down arrows — cognitive decline */}
        <motion.g
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.6 }}
        >
          {/* Left arrow */}
          <motion.g
            animate={{ opacity: [0.4, 0.9, 0.4], y: [0, 4, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0 }}
          >
            <path d="M 100 300 L 100 316" stroke="#ff4d8d" strokeWidth="2" strokeLinecap="round" />
            <path d="M 94 310 L 100 318 L 106 310" stroke="#ff4d8d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </motion.g>

          {/* Center arrow */}
          <motion.g
            animate={{ opacity: [0.5, 1, 0.5], y: [0, 5, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          >
            <path d="M 130 306 L 130 324" stroke="#ff3377" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M 124 318 L 130 326 L 136 318" stroke="#ff3377" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </motion.g>

          {/* Right arrow */}
          <motion.g
            animate={{ opacity: [0.4, 0.9, 0.4], y: [0, 4, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          >
            <path d="M 160 300 L 160 316" stroke="#ff4d8d" strokeWidth="2" strokeLinecap="round" />
            <path d="M 154 310 L 160 318 L 166 310" stroke="#ff4d8d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </motion.g>
        </motion.g>
      </svg>
    </div>
  );
}
