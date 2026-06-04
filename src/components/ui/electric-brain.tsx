"use client";

import { cn } from "@/lib/utils";

/**
 * Ambient premium background orbs for depth in story/learn sections.
 * Clean, luxurious, no tech grid/particles (removes coded vibe).
 * Purely decorative (aria-hidden).
 */
export function ElectricBrainBg({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      {/* Clean premium ambient depth — soft orbs only, no HUD grid or particle scan (Atlas luxury, not coded) */}
      <div className="absolute left-1/2 top-[-10%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-neural/[0.035] blur-[140px]" />
      <div className="absolute bottom-[-15%] right-1/3 h-[420px] w-[420px] rounded-full bg-bolt/[0.03] blur-[130px]" />
    </div>
  );
}
