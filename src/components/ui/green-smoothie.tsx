"use client";

import { motion } from "motion/react";

/**
 * Premium green smoothie swirl animation with floating vitamins & electric arcs.
 * Pure SVG/CSS, zero heavy assets. Fast-loading.
 */
export function GreenSmoothieAnimation({ className }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Electric glow aura behind the glass */}
      <motion.div
        className="absolute inset-0 rounded-full blur-[60px]"
        style={{ background: "radial-gradient(circle, rgba(74,222,128,0.18) 0%, rgba(34,197,94,0.06) 60%, transparent 100%)" }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />

      <svg
        viewBox="0 0 240 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10 w-[200px] h-[270px] sm:w-[240px] sm:h-[320px]"
        aria-hidden
      >
        <defs>
          {/* Glass gradient */}
          <linearGradient id="glass" x1="120" y1="60" x2="120" y2="280" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="rgba(255,255,255,0.7)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.2)" />
          </linearGradient>

          {/* Green smoothie liquid gradient */}
          <linearGradient id="greenLiquid" x1="120" y1="80" x2="120" y2="260" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#4ade80" />
            <stop offset="50%" stopColor="#22c55e" />
            <stop offset="100%" stopColor="#15803d" />
          </linearGradient>

          {/* Swirl gradient */}
          <radialGradient id="swirlCore" cx="120" cy="170" r="80" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#86efac" stopOpacity="0.9" />
            <stop offset="70%" stopColor="#22c55e" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#15803d" stopOpacity="0.3" />
          </radialGradient>

          {/* Electric glow filter */}
          <filter id="electricGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Clip path for liquid inside glass */}
          <clipPath id="glassClip">
            <path d="M70 60 L80 260 Q80 280 100 280 L140 280 Q160 280 160 260 L170 60 Z" />
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

        {/* Electric arcs around the glass */}
        <motion.g
          animate={{ opacity: [0.3, 0.9, 0.3] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          filter="url(#electricGlow)"
        >
          <path d="M55 120 L45 110 L50 100 L38 90" stroke="#facc15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M185 130 L195 120 L190 105 L202 95" stroke="#facc15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M48 200 L38 210 L45 225 L35 240" stroke="#facc15" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M192 210 L204 220 L198 235 L208 245" stroke="#facc15" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </motion.g>

        {/* Small spark dots around the glass */}
        {[
          { cx: 42, cy: 95, r: 1.5 },
          { cx: 198, cy: 92, r: 1.2 },
          { cx: 35, cy: 215, r: 1.8 },
          { cx: 205, cy: 230, r: 1.4 },
          { cx: 55, cy: 80, r: 1 },
          { cx: 188, cy: 75, r: 1.3 },
        ].map((s, i) => (
          <motion.circle
            key={`spark-${i}`}
            cx={s.cx}
            cy={s.cy}
            r={s.r}
            fill="#fef08a"
            animate={{ opacity: [0.2, 1, 0.2], scale: [0.8, 1.4, 0.8] }}
            transition={{ duration: 1.5 + i * 0.3, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
          />
        ))}

        {/* Glass shadow */}
        <ellipse cx="120" cy="285" rx="55" ry="8" fill="rgba(0,0,0,0.12)" />

        {/* Main glass shape */}
        <path
          d="M70 60 L80 260 Q80 280 100 280 L140 280 Q160 280 160 260 L170 60"
          stroke="rgba(0,0,0,0.08)"
          strokeWidth="2"
          fill="url(#glass)"
          filter="url(#softShadow)"
        />

        {/* Glass rim */}
        <ellipse cx="120" cy="60" rx="50" ry="8" stroke="rgba(0,0,0,0.1)" strokeWidth="2" fill="rgba(255,255,255,0.5)" />
        <ellipse cx="120" cy="60" rx="45" ry="6" fill="rgba(255,255,255,0.3)" />

        {/* Green liquid fill */}
        <g clipPath="url(#glassClip)">
          {/* Base liquid */}
          <motion.path
            d="M60 100 Q120 90 180 100 L180 280 L60 280 Z"
            fill="url(#greenLiquid)"
            animate={{ d: [
              "M60 100 Q120 90 180 100 L180 280 L60 280 Z",
              "M60 95 Q120 105 180 95 L180 280 L60 280 Z",
              "M60 100 Q120 90 180 100 L180 280 L60 280 Z",
            ]}}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Swirling vortex */}
          <motion.g
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            style={{ transformOrigin: "120px 170px" }}
          >
            <ellipse cx="120" cy="170" rx="55" ry="40" fill="url(#swirlCore)" opacity="0.5" />
            <path
              d="M80 170 Q120 130 160 170 Q120 210 80 170"
              stroke="#86efac"
              strokeWidth="2"
              strokeLinecap="round"
              fill="none"
              opacity="0.4"
            />
            <path
              d="M90 170 Q120 140 150 170 Q120 200 90 170"
              stroke="#4ade80"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
              opacity="0.5"
            />
          </motion.g>

          {/* Floating vitamin capsules inside the liquid */}
          {[
            { cx: 105, cy: 150, w: 8, h: 3, rot: 25, delay: 0, dur: 4 },
            { cx: 130, cy: 180, w: 7, h: 2.5, rot: -15, delay: 1.2, dur: 3.5 },
            { cx: 115, cy: 210, w: 9, h: 3.5, rot: 40, delay: 0.6, dur: 4.2 },
            { cx: 140, cy: 140, w: 6, h: 2, rot: 10, delay: 2, dur: 3.8 },
          ].map((v, i) => (
            <motion.g
              key={`cap-${i}`}
              animate={{
                cy: [v.cy, v.cy - 12, v.cy],
                cx: [v.cx, v.cx + (i % 2 === 0 ? 6 : -6), v.cx],
                rotate: [v.rot, v.rot + 20, v.rot],
              }}
              transition={{ duration: v.dur, delay: v.delay, repeat: Infinity, ease: "easeInOut" }}
            >
              <ellipse cx={v.cx} cy={v.cy} rx={v.w} ry={v.h} fill="#fbbf24" opacity="0.85" />
              <ellipse cx={v.cx} cy={v.cy} rx={v.w * 0.5} ry={v.h} fill="#f59e0b" opacity="0.7" />
            </motion.g>
          ))}

          {/* Floating white tablet circles */}
          {[
            { cx: 120, cy: 165, r: 2.5, delay: 0.3, dur: 3.5 },
            { cx: 95, cy: 195, r: 2, delay: 0.9, dur: 4 },
            { cx: 145, cy: 205, r: 3, delay: 1.5, dur: 3.2 },
            { cx: 108, cy: 130, r: 1.8, delay: 2.2, dur: 3.8 },
            { cx: 135, cy: 225, r: 2.2, delay: 0.5, dur: 4.5 },
          ].map((t, i) => (
            <motion.circle
              key={`tab-${i}`}
              cx={t.cx}
              cy={t.cy}
              r={t.r}
              fill="#fefce8"
              opacity={0.8}
              animate={{
                cy: [t.cy, t.cy - 10, t.cy],
                cx: [t.cx, t.cx + (i % 2 === 0 ? 5 : -5), t.cx],
                opacity: [0.5, 0.95, 0.5],
              }}
              transition={{ duration: t.dur, delay: t.delay, repeat: Infinity, ease: "easeInOut" }}
            />
          ))}

          {/* Floating particles / blend bits */}
          {[
            { cx: 100, cy: 140, r: 3, delay: 0, duration: 3 },
            { cx: 135, cy: 160, r: 2.5, delay: 0.5, duration: 3.5 },
            { cx: 115, cy: 190, r: 4, delay: 1, duration: 4 },
            { cx: 125, cy: 150, r: 2, delay: 1.5, duration: 2.5 },
            { cx: 105, cy: 210, r: 3.5, delay: 0.8, duration: 3.2 },
            { cx: 140, cy: 180, r: 2, delay: 2, duration: 3.8 },
            { cx: 95, cy: 170, r: 2.5, delay: 1.2, duration: 4.2 },
          ].map((p, i) => (
            <motion.circle
              key={i}
              cx={p.cx}
              cy={p.cy}
              r={p.r}
              fill="#bbf7d0"
              opacity={0.7}
              animate={{
                cy: [p.cy, p.cy - 15, p.cy],
                cx: [p.cx, p.cx + (i % 2 === 0 ? 8 : -8), p.cx],
                opacity: [0.4, 0.9, 0.4],
              }}
              transition={{
                duration: p.duration,
                delay: p.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Surface wave line */}
          <motion.path
            d="M65 100 Q90 105 120 100 Q150 95 175 100"
            stroke="#86efac"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
            animate={{ d: [
              "M65 100 Q90 105 120 100 Q150 95 175 100",
              "M65 100 Q90 95 120 100 Q150 105 175 100",
              "M65 100 Q90 105 120 100 Q150 95 175 100",
            ]}}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
        </g>

        {/* Glass highlight */}
        <path
          d="M82 70 L88 250"
          stroke="rgba(255,255,255,0.6)"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.5"
        />
        <path
          d="M158 70 L152 250"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.3"
        />
      </svg>
    </div>
  );
}
