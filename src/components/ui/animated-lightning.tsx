"use client";

import { motion } from "motion/react";

/**
 * Split comparison lightning — dim cracked bolt (old way) vs clean powerful bolt (Focus Mode).
 * Pure SVG + Framer Motion.
 */
export function AnimatedLightning({ className }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Soft dual-tone glow */}
      <motion.div
        className="absolute inset-0 rounded-full blur-[50px]"
        style={{ background: "radial-gradient(circle, rgba(253,228,0,0.25) 0%, rgba(46,185,223,0.12) 60%, transparent 100%)" }}
        animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      <svg
        viewBox="0 0 420 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 w-[320px] h-[210px] sm:w-[400px] sm:h-[260px]"
        aria-hidden
      >
        <defs>
          <linearGradient id="boltGrad" x1="100" y1="20" x2="100" y2="260" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fde400" />
            <stop offset="50%" stopColor="#2eb9df" />
            <stop offset="100%" stopColor="#fde400" />
          </linearGradient>
          <linearGradient id="boltDim" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#94a3b8" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#64748b" stopOpacity="0.3" />
          </linearGradient>
          <filter id="boltGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="faintGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Dividing line */}
        <motion.line
          x1="210"
          y1="30"
          x2="210"
          y2="250"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1"
          strokeDasharray="4 6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        {/* ===== LEFT — OLD WAY (dim, cracked, jittery) ===== */}
        <motion.g
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Dim cracked bolt */}
          <motion.path
            d="M100 25 L68 115 L90 115 L78 190 L120 95 L98 95 L112 25 Z"
            fill="url(#boltDim)"
            filter="url(#faintGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          {/* Crack lines on bolt */}
          {[
            { d: "M 80 70 L 88 78", delay: 0.4 },
            { d: "M 95 140 L 103 148", delay: 0.6 },
            { d: "M 72 160 L 80 168", delay: 0.8 },
          ].map((c, i) => (
            <motion.path
              key={`crack-${i}`}
              d={c.d}
              stroke="#94a3b8"
              strokeWidth="1.2"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: [0, 1, 0], opacity: [0, 0.5, 0] }}
              transition={{ duration: 1, delay: c.delay, repeat: Infinity, repeatDelay: 1.8 }}
            />
          ))}
          {/* Jitter sparks */}
          {[
            { d: "M 55 85 L 62 82", delay: 0.5 },
            { d: "M 130 75 L 124 72", delay: 0.7 },
            { d: "M 60 155 L 67 152", delay: 0.9 },
          ].map((s, i) => (
            <motion.path
              key={`spark-${i}`}
              d={s.d}
              stroke="#fde400"
              strokeWidth="1.5"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: [0, 1, 0], opacity: [0, 0.4, 0] }}
              transition={{ duration: 0.8, delay: s.delay, repeat: Infinity, repeatDelay: 2 }}
            />
          ))}
          {/* Coffee cup silhouette beneath */}
          <motion.g
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <path
              d="M 82 215 L 82 232 Q 82 238 88 238 L 112 238 Q 118 238 118 232 L 118 215 Z"
              fill="none"
              stroke="#94a3b8"
              strokeWidth="1.2"
              strokeOpacity="0.3"
            />
            <path
              d="M 118 220 Q 128 220 128 226 Q 128 232 118 232"
              fill="none"
              stroke="#94a3b8"
              strokeWidth="1.2"
              strokeOpacity="0.3"
            />
          </motion.g>
          <text x="100" y="255" textAnchor="middle" fill="#94a3b8" fillOpacity="0.35" fontSize="9" fontFamily="monospace" letterSpacing="1.5">OLD WAY</text>
        </motion.g>

        {/* ===== RIGHT — FOCUS MODE (clean, powerful) ===== */}
        <motion.g
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          {/* Clean powerful bolt */}
          <motion.path
            d="M310 20 L260 120 L290 120 L270 200 L330 95 L300 95 L320 20 Z"
            fill="url(#boltGrad)"
            filter="url(#boltGlow)"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
          {/* Energy crackle */}
          {[
            { d: "M240 80 L250 85", delay: 0.4 },
            { d: "M350 70 L360 65", delay: 0.5 },
            { d: "M245 150 L255 148", delay: 0.6 },
            { d: "M345 140 L355 138", delay: 0.7 },
            { d: "M275 230 L285 235", delay: 0.8 },
            { d: "M335 220 L345 225", delay: 0.9 },
          ].map((c, i) => (
            <motion.path
              key={`energy-${i}`}
              d={c.d}
              stroke="#fde400"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: [0, 1, 0], opacity: [0, 1, 0] }}
              transition={{ duration: 1.2, delay: c.delay, repeat: Infinity, repeatDelay: 1.5 }}
            />
          ))}
          {/* Outer energy ring */}
          <motion.ellipse
            cx="300"
            cy="115"
            rx="60"
            ry="80"
            stroke="#2eb9df"
            strokeWidth="1"
            strokeOpacity="0.2"
            fill="none"
            animate={{ rx: [60, 70, 60], ry: [80, 90, 80], opacity: [0.15, 0.35, 0.15] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Capsule silhouette beneath */}
          <motion.g
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <rect x="285" y="218" width="30" height="18" rx="9" fill="none" stroke="#2eb9df" strokeWidth="1.2" strokeOpacity="0.4" />
            <line x1="300" y1="218" x2="300" y2="236" stroke="#2eb9df" strokeWidth="1" strokeOpacity="0.25" />
          </motion.g>
          <text x="300" y="255" textAnchor="middle" fill="#2eb9df" fillOpacity="0.6" fontSize="9" fontFamily="monospace" letterSpacing="1.5">FOCUS MODE</text>
        </motion.g>
      </svg>
    </div>
  );
}
