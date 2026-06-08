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

        {/* Brain outline — anatomical front-view cerebrum */}
        <motion.path
          d="M130 32
             C110 32, 88 40, 74 56
             C60 72, 52 94, 52 120
             C52 148, 60 174, 74 194
             C82 206, 90 214, 96 220
             C100 224, 104 226, 108 228
             L108 242
             C108 252, 112 262, 118 268
             C122 272, 126 274, 130 274
             C134 274, 138 272, 142 268
             C148 262, 152 252, 152 242
             L152 228
             C156 226, 160 224, 164 220
             C170 214, 178 206, 186 194
             C200 174, 208 148, 208 120
             C208 94, 200 72, 186 56
             C172 40, 150 32, 130 32 Z"
          stroke="#ff4d8d"
          strokeWidth="1.8"
          strokeOpacity="0.5"
          fill="url(#brainGrad)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />

        {/* Central longitudinal fissure — slightly organic */}
        <motion.path
          d="M130 38 Q127 60 129 85 Q131 110 128 135 Q126 160 129 185 Q132 210 130 238"
          stroke="#ff3377"
          strokeWidth="1.2"
          strokeOpacity="0.35"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.8, delay: 0.3, ease: "easeOut" }}
        />

        {/* Left hemisphere gyri — organic curved folds */}
        {[
          "M 66 82 Q 88 72 108 84",
          "M 58 108 Q 82 96 106 108",
          "M 54 134 Q 80 122 104 136",
          "M 56 160 Q 78 148 102 162",
          "M 64 186 Q 86 174 108 188",
          "M 76 210 Q 94 198 112 212",
          "M 82 58 Q 100 48 118 58",
          "M 72 72 Q 92 62 112 74",
          "M 88 228 Q 100 220 114 230",
          "M 96 244 Q 108 236 122 246",
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
            transition={{ duration: 1.2, delay: 0.5 + i * 0.08, ease: "easeOut" }}
          />
        ))}

        {/* Right hemisphere gyri — organic curved folds */}
        {[
          "M 194 82 Q 172 72 152 84",
          "M 202 108 Q 178 96 154 108",
          "M 206 134 Q 180 122 156 136",
          "M 204 160 Q 182 148 158 162",
          "M 196 186 Q 174 174 152 188",
          "M 184 210 Q 166 198 148 212",
          "M 178 58 Q 160 48 142 58",
          "M 188 72 Q 168 62 148 74",
          "M 172 228 Q 160 220 146 230",
          "M 164 244 Q 152 236 138 246",
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
            transition={{ duration: 1.2, delay: 0.6 + i * 0.08, ease: "easeOut" }}
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
