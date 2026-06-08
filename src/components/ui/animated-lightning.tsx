"use client";

import { motion } from "motion/react";

/**
 * Animated lightning bolt SVG — bold, energetic, pulsing.
 * Pure SVG + Framer Motion, zero heavy assets.
 */
export function AnimatedLightning({ className }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Pulsing glow aura */}
      <motion.div
        className="absolute inset-0 rounded-full blur-[50px]"
        style={{ background: "radial-gradient(circle, rgba(253,228,0,0.35) 0%, rgba(46,185,223,0.12) 60%, transparent 100%)" }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      />

      <svg
        viewBox="0 0 200 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 w-[160px] h-[220px] sm:w-[200px] sm:h-[280px]"
        aria-hidden
      >
        <defs>
          <linearGradient id="boltGrad" x1="100" y1="20" x2="100" y2="260" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fde400" />
            <stop offset="50%" stopColor="#2eb9df" />
            <stop offset="100%" stopColor="#fde400" />
          </linearGradient>
          <filter id="boltGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Main bolt */}
        <motion.path
          d="M115 20 L65 120 L95 120 L75 200 L135 95 L105 95 L125 20 Z"
          fill="url(#boltGrad)"
          filter="url(#boltGlow)"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        {/* Crackle lines around bolt */}
        {[
          { d: "M45 80 L55 85", delay: 0.3 },
          { d: "M150 70 L160 65", delay: 0.4 },
          { d: "M50 150 L60 148", delay: 0.5 },
          { d: "M145 140 L155 138", delay: 0.6 },
          { d: "M80 230 L90 235", delay: 0.7 },
          { d: "M130 220 L140 225", delay: 0.8 },
        ].map((c, i) => (
          <motion.path
            key={i}
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
          cx="100"
          cy="120"
          rx="70"
          ry="90"
          stroke="#2eb9df"
          strokeWidth="1"
          strokeOpacity="0.25"
          fill="none"
          animate={{ rx: [70, 80, 70], ry: [90, 100, 90], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
      </svg>
    </div>
  );
}
