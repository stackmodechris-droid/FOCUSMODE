"use client";

import { motion } from "motion/react";

/**
 * Tasty green smoothie animation — creamy, vibrant, and appetizing.
 * Pure SVG/CSS, zero heavy assets. Fast-loading.
 */
export function GreenSmoothieAnimation({ className }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Soft green glow aura behind the glass */}
      <motion.div
        className="absolute inset-0 rounded-full blur-[60px]"
        style={{ background: "radial-gradient(circle, rgba(132,239,172,0.22) 0%, rgba(34,197,94,0.08) 60%, transparent 100%)" }}
        animate={{ scale: [1, 1.12, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Bolt-yellow energy aura — signals focus + energy, not just greens */}
      <motion.div
        className="absolute inset-0 rounded-full blur-[55px]"
        style={{ background: "radial-gradient(circle, rgba(253,228,0,0.12) 0%, rgba(46,185,223,0.06) 55%, transparent 100%)" }}
        animate={{ scale: [1, 1.18, 1], opacity: [0.4, 0.75, 0.4] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
      />

      <svg
        viewBox="0 0 260 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 w-[220px] h-[290px] sm:w-[260px] sm:h-[340px]"
        aria-hidden
      >
        <defs>
          {/* Glass gradient */}
          <linearGradient id="glass" x1="130" y1="60" x2="130" y2="300" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="rgba(255,255,255,0.65)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.15)" />
          </linearGradient>

          {/* Vibrant creamy green smoothie gradient */}
          <linearGradient id="smoothieGreen" x1="130" y1="85" x2="130" y2="275" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#86efac" />
            <stop offset="30%" stopColor="#4ade80" />
            <stop offset="70%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#15803d" />
          </linearGradient>

          {/* Creamy swirl inside */}
          <radialGradient id="creamSwirl" cx="130" cy="180" r="75" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#bbf7d0" stopOpacity="0.8" />
            <stop offset="60%" stopColor="#4ade80" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#22c55e" stopOpacity="0.2" />
          </radialGradient>

          {/* Froth / foam top layer */}
          <linearGradient id="froth" x1="130" y1="75" x2="130" y2="105" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ecfdf5" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#bbf7d0" stopOpacity="0.4" />
          </linearGradient>

          {/* Clip path for liquid inside glass */}
          <clipPath id="glassClip">
            <path d="M75 60 L85 275 Q85 295 105 295 L155 295 Q175 295 175 275 L185 60 Z" />
          </clipPath>

          {/* Soft shadow filter */}
          <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
            <feOffset dx="0" dy="6" result="offsetblur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.25" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Glass shadow on surface */}
        <ellipse cx="130" cy="305" rx="60" ry="9" fill="rgba(0,0,0,0.12)" />

        {/* Main glass body */}
        <path
          d="M75 60 L85 275 Q85 295 105 295 L155 295 Q175 295 175 275 L185 60"
          stroke="rgba(0,0,0,0.08)"
          strokeWidth="2"
          fill="url(#glass)"
          filter="url(#softShadow)"
        />

        {/* Glass rim */}
        <ellipse cx="130" cy="60" rx="55" ry="9" stroke="rgba(0,0,0,0.1)" strokeWidth="2" fill="rgba(255,255,255,0.45)" />
        <ellipse cx="130" cy="60" rx="48" ry="7" fill="rgba(255,255,255,0.3)" />

        {/* Green liquid fill — fuller and creamier */}
        <g clipPath="url(#glassClip)">
          {/* Base smoothie body */}
          <motion.path
            d="M65 95 Q130 82 195 95 L195 295 L65 295 Z"
            fill="url(#smoothieGreen)"
            animate={{ d: [
              "M65 95 Q130 82 195 95 L195 295 L65 295 Z",
              "M65 90 Q130 100 195 90 L195 295 L65 295 Z",
              "M65 95 Q130 82 195 95 L195 295 L65 295 Z",
            ]}}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Creamy inner swirl */}
          <motion.g
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "130px 185px" }}
          >
            <ellipse cx="130" cy="185" rx="60" ry="45" fill="url(#creamSwirl)" opacity="0.55" />
            <path
              d="M85 185 Q130 145 175 185 Q130 225 85 185"
              stroke="#bbf7d0"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
              opacity="0.5"
            />
            <path
              d="M95 185 Q130 155 165 185 Q130 215 95 185"
              stroke="#86efac"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              opacity="0.55"
            />
          </motion.g>

          {/* Floating bubbles / seeds inside the smoothie */}
          {[
            { cx: 110, cy: 160, r: 3.5, delay: 0, dur: 3.5 },
            { cx: 145, cy: 195, r: 2.8, delay: 0.7, dur: 4 },
            { cx: 125, cy: 225, r: 4, delay: 1.3, dur: 3.8 },
            { cx: 150, cy: 145, r: 2.2, delay: 2.1, dur: 4.2 },
            { cx: 100, cy: 210, r: 3, delay: 0.4, dur: 3.3 },
            { cx: 140, cy: 175, r: 2.5, delay: 1.6, dur: 3.6 },
            { cx: 118, cy: 135, r: 2, delay: 2.8, dur: 4.5 },
            { cx: 165, cy: 200, r: 3.2, delay: 0.9, dur: 3.9 },
          ].map((b, i) => (
            <motion.circle
              key={`bubble-${i}`}
              cx={b.cx}
              cy={b.cy}
              r={b.r}
              fill="#dcfce7"
              opacity={0.75}
              animate={{
                cy: [b.cy, b.cy - 14, b.cy],
                cx: [b.cx, b.cx + (i % 2 === 0 ? 7 : -7), b.cx],
                opacity: [0.45, 0.9, 0.45],
                scale: [1, 1.15, 1],
              }}
              transition={{ duration: b.dur, delay: b.delay, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}

          {/* Tiny green herb / leaf flecks */}
          {[
            { cx: 120, cy: 155, r: 1.8, delay: 0.2, dur: 4 },
            { cx: 135, cy: 180, r: 1.5, delay: 1, dur: 3.5 },
            { cx: 108, cy: 205, r: 2, delay: 1.8, dur: 4.2 },
            { cx: 152, cy: 165, r: 1.6, delay: 0.6, dur: 3.8 },
            { cx: 128, cy: 240, r: 1.4, delay: 2.4, dur: 3.3 },
          ].map((f, i) => (
            <motion.circle
              key={`fleck-${i}`}
              cx={f.cx}
              cy={f.cy}
              r={f.r}
              fill="#14532d"
              opacity={0.35}
              animate={{
                cy: [f.cy, f.cy - 8, f.cy],
                cx: [f.cx, f.cx + (i % 2 === 0 ? 4 : -4), f.cx],
              }}
              transition={{ duration: f.dur, delay: f.delay, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}

          {/* Surface wave line */}
          <motion.path
            d="M70 95 Q100 100 130 95 Q160 90 190 95"
            stroke="#bbf7d0"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
            animate={{ d: [
              "M70 95 Q100 100 130 95 Q160 90 190 95",
              "M70 95 Q100 90 130 95 Q160 100 190 95",
              "M70 95 Q100 100 130 95 Q160 90 190 95",
            ]}}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </g>

        {/* Frothy top layer peeking over the rim */}
        <motion.path
          d="M75 60 Q90 68 105 62 Q120 70 135 63 Q150 69 165 62 Q175 67 185 60"
          fill="url(#froth)"
          animate={{ d: [
            "M75 60 Q90 68 105 62 Q120 70 135 63 Q150 69 165 62 Q175 67 185 60",
            "M75 60 Q90 64 105 70 Q120 62 135 68 Q150 63 165 69 Q175 64 185 60",
            "M75 60 Q90 68 105 62 Q120 70 135 63 Q150 69 165 62 Q175 67 185 60",
          ]}}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Straw */}
        <g>
          <path
            d="M148 65 L158 25 L166 27 L156 67 Z"
            fill="rgba(0,0,0,0.12)"
          />
          <path
            d="M147 65 L157 24 L165 26 L155 66 Z"
            fill="#fde68a"
            stroke="rgba(0,0,0,0.06)"
            strokeWidth="0.5"
          />
          {/* Straw stripes */}
          <path d="M150 50 L160 51" stroke="#f59e0b" strokeWidth="1.5" opacity="0.35" strokeLinecap="round" />
          <path d="M153 38 L163 39" stroke="#f59e0b" strokeWidth="1.5" opacity="0.35" strokeLinecap="round" />
        </g>

        {/* Tiny lightning accent at straw base — energy signal */}
        <motion.g
          animate={{ opacity: [0.3, 0.9, 0.3] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M138 58 L133 68 L136 68 L132 78" stroke="#fde400" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </motion.g>

        {/* Small leaf garnish on rim */}
        <motion.g
          animate={{ rotate: [0, 2, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <path
            d="M105 62 Q92 52 88 40 Q100 48 108 58 Z"
            fill="#22c55e"
            opacity="0.85"
          />
          <path
            d="M105 62 Q98 52 96 44"
            stroke="#15803d"
            strokeWidth="0.8"
            fill="none"
            opacity="0.6"
          />
        </motion.g>

        {/* Glass highlight */}
        <path
          d="M88 72 L94 265"
          stroke="rgba(255,255,255,0.55)"
          strokeWidth="2.5"
          strokeLinecap="round"
          opacity="0.45"
        />
        <path
          d="M172 72 L166 265"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.25"
        />
      </svg>
    </div>
  );
}
