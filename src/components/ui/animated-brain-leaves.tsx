"use client";

import { motion } from "motion/react";

/**
 * Realistic ROUND human cerebrum (front view) with drifting fog + downward arrows.
 * Wide oval — width > height — matches real human brain proportions.
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
        viewBox="0 0 290 230"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 w-[240px] h-[190px] sm:w-[310px] sm:h-[245px]"
        aria-hidden
      >
        <defs>
          <radialGradient id="brainFill" cx="50%" cy="45%" r="58%">
            <stop offset="0%" stopColor="#ff4d8d" stopOpacity="0.18" />
            <stop offset="65%" stopColor="#ff1a6b" stopOpacity="0.09" />
            <stop offset="100%" stopColor="#cc0055" stopOpacity="0.03" />
          </radialGradient>
          <linearGradient id="fogGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ff99bb" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#ff4d8d" stopOpacity="0.2" />
          </linearGradient>
          <filter id="fogBlur" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="4.5" />
          </filter>
        </defs>

        {/*
          CEREBRUM — wide oval frontal view. Width ≈ 240, height ≈ 165.
          Left lobe bulges left, right lobe bulges right.
          Brainstem nub at bottom center.
        */}
        <motion.path
          d="
            M 145 18
            C 134 10, 111 13, 96 24
            C 78 19, 60 29, 55 45
            C 36 49, 27 67, 31 84
            C 16 96, 15 119, 29 132
            C 21 151, 32 171, 51 177
            C 57 195, 78 202, 96 197
            C 110 211, 132 207, 139 191
            C 142 181, 142 164, 140 146
            C 137 121, 137 94, 140 68
            C 142 46, 146 30, 145 18
            C 144 30, 148 46, 150 68
            C 153 94, 153 121, 150 146
            C 148 164, 148 181, 151 191
            C 158 207, 180 211, 194 197
            C 212 202, 233 195, 239 177
            C 258 171, 269 151, 261 132
            C 275 119, 274 96, 259 84
            C 263 67, 254 49, 235 45
            C 230 29, 212 19, 194 24
            C 179 13, 156 10, 145 18 Z
          "
          stroke="#ff4d8d"
          strokeWidth="2"
          strokeOpacity="0.62"
          fill="url(#brainFill)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.2, ease: "easeOut" }}
        />

        {/* Central longitudinal fissure */}
        <motion.path
          d="M 145 19 C 137 43, 150 61, 143 84 C 137 105, 150 126, 143 148 C 137 170, 151 188, 145 207"
          stroke="#ff3377"
          strokeWidth="1.7"
          strokeOpacity="0.48"
          strokeLinecap="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.8, delay: 0.3, ease: "easeOut" }}
        />

        {/* LEFT hemisphere gyri — horizontal arcs from center outward */}
        {[
          "M 68 47 C 85 35, 112 35, 128 49 C 116 55, 94 55, 82 66",
          "M 44 75 C 63 62, 92 66, 122 72 C 105 82, 76 79, 58 94",
          "M 36 109 C 58 92, 91 96, 130 103 C 113 116, 79 112, 54 126",
          "M 41 142 C 64 128, 96 129, 127 137 C 108 151, 75 148, 58 163",
          "M 62 176 C 80 162, 105 164, 129 174 C 113 185, 91 184, 77 194",
          "M 91 34 C 84 49, 93 58, 108 62",
          "M 74 96 C 68 113, 78 122, 98 124",
          "M 95 139 C 85 153, 93 166, 113 168",
          "M 121 62 C 106 78, 111 92, 133 93",
          "M 119 112 C 102 127, 109 145, 131 147",
        ].map((d, i) => (
          <motion.path
            key={`l-${i}`}
            d={d}
            stroke="#ff6699"
            strokeWidth="1.1"
            strokeOpacity="0.26"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, delay: 0.5 + i * 0.07, ease: "easeOut" }}
          />
        ))}

        {/* RIGHT hemisphere gyri — mirrored */}
        {[
          "M 222 47 C 205 35, 178 35, 162 49 C 174 55, 196 55, 208 66",
          "M 246 75 C 227 62, 198 66, 168 72 C 185 82, 214 79, 232 94",
          "M 254 109 C 232 92, 199 96, 160 103 C 177 116, 211 112, 236 126",
          "M 249 142 C 226 128, 194 129, 163 137 C 182 151, 215 148, 232 163",
          "M 228 176 C 210 162, 185 164, 161 174 C 177 185, 199 184, 213 194",
          "M 199 34 C 206 49, 197 58, 182 62",
          "M 216 96 C 222 113, 212 122, 192 124",
          "M 195 139 C 205 153, 197 166, 177 168",
          "M 169 62 C 184 78, 179 92, 157 93",
          "M 171 112 C 188 127, 181 145, 159 147",
        ].map((d, i) => (
          <motion.path
            key={`r-${i}`}
            d={d}
            stroke="#ff6699"
            strokeWidth="1.1"
            strokeOpacity="0.26"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.2, delay: 0.6 + i * 0.07, ease: "easeOut" }}
          />
        ))}

        {/* Fog clouds */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
        >
          {/* Cloud 1 — upper left */}
          <motion.g
            animate={{ x: [-5, 8, -5], opacity: [0.35, 0.62, 0.35] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          >
            <ellipse cx="86" cy="60" rx="32" ry="13" fill="url(#fogGrad)" filter="url(#fogBlur)" />
            <ellipse cx="112" cy="56" rx="22" ry="10" fill="url(#fogGrad)" filter="url(#fogBlur)" />
            <ellipse cx="64" cy="64" rx="18" ry="8" fill="url(#fogGrad)" filter="url(#fogBlur)" />
          </motion.g>

          {/* Cloud 2 — upper right */}
          <motion.g
            animate={{ x: [5, -8, 5], opacity: [0.3, 0.58, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <ellipse cx="204" cy="60" rx="32" ry="13" fill="url(#fogGrad)" filter="url(#fogBlur)" />
            <ellipse cx="178" cy="56" rx="22" ry="10" fill="url(#fogGrad)" filter="url(#fogBlur)" />
            <ellipse cx="226" cy="64" rx="18" ry="8" fill="url(#fogGrad)" filter="url(#fogBlur)" />
          </motion.g>

          {/* Cloud 3 — top center */}
          <motion.g
            animate={{ x: [-10, 12, -10], opacity: [0.25, 0.52, 0.25] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          >
            <ellipse cx="145" cy="38" rx="38" ry="14" fill="url(#fogGrad)" filter="url(#fogBlur)" />
            <ellipse cx="120" cy="36" rx="25" ry="10" fill="url(#fogGrad)" filter="url(#fogBlur)" />
            <ellipse cx="170" cy="36" rx="23" ry="9" fill="url(#fogGrad)" filter="url(#fogBlur)" />
          </motion.g>
        </motion.g>

        {/* Down arrows below brainstem */}
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
            <path d="M 118 214 L 118 226" stroke="#ff4d8d" strokeWidth="2" strokeLinecap="round" />
            <path d="M 112 220 L 118 228 L 124 220" stroke="#ff4d8d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </motion.g>

          {/* Center arrow */}
          <motion.g
            animate={{ opacity: [0.5, 1, 0.5], y: [0, 5, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          >
            <path d="M 145 214 L 145 228" stroke="#ff3377" strokeWidth="2.2" strokeLinecap="round" />
            <path d="M 139 222 L 145 230 L 151 222" stroke="#ff3377" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </motion.g>

          {/* Right arrow */}
          <motion.g
            animate={{ opacity: [0.4, 0.9, 0.4], y: [0, 4, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          >
            <path d="M 172 214 L 172 226" stroke="#ff4d8d" strokeWidth="2" strokeLinecap="round" />
            <path d="M 166 220 L 172 228 L 178 220" stroke="#ff4d8d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </motion.g>
        </motion.g>
      </svg>
    </div>
  );
}
