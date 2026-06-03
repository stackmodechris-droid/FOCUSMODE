"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useMemo } from "react";

/**
 * Ambient animated "electric brain" background:
 * a drifting neural-particle field + scanning grid for the tech/brain aesthetic.
 * Purely decorative (aria-hidden), GPU-light.
 */
export function ElectricBrainBg({ className, density = 22 }: { className?: string; density?: number }) {
  const nodes = useMemo(() => {
    // Deterministic pseudo-random (sine hash) so renders stay pure/stable.
    const rand = (n: number) => {
      const v = Math.sin(n * 127.1 + 311.7) * 43758.5453;
      return v - Math.floor(v);
    };
    return Array.from({ length: density }).map((_, i) => ({
      id: i,
      x: rand(i + 1) * 100,
      y: rand(i + 7.3) * 100,
      size: 1 + rand(i + 13.9) * 2.5,
      delay: rand(i + 21.1) * 4,
      dur: 3 + rand(i + 33.3) * 4,
      bolt: rand(i + 41.7) > 0.6,
    }));
  }, [density]);

  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div className="absolute inset-0 hud-grid animate-grid-scroll opacity-60" />
      <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-neural/10 blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 h-[360px] w-[360px] rounded-full bg-bolt/10 blur-[120px]" />
      <svg className="absolute inset-0 h-full w-full">
        {nodes.map((n) => (
          <motion.circle
            key={n.id}
            cx={`${n.x}%`}
            cy={`${n.y}%`}
            r={n.size}
            fill={n.bolt ? "#fde400" : "#2eb9df"}
            initial={{ opacity: 0.1 }}
            animate={{ opacity: [0.1, 0.9, 0.1], y: [0, -12, 0] }}
            transition={{ duration: n.dur, delay: n.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </svg>
    </div>
  );
}
