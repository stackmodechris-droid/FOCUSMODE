"use client";

import { cn } from "@/lib/utils";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

interface ProductGlowProps {
  src: string;
  alt: string;
  size?: number;
  className?: string;
  glow?: "bolt" | "neural" | "dual";
  float?: boolean;
  priority?: boolean;
  tilt?: boolean;
}

/**
 * Glowing, animated product image. Adds a colored glow halo behind the bottle,
 * an optional float animation, and a mouse-tilt 3D effect on desktop.
 */
export function ProductGlow({
  src,
  alt,
  size = 420,
  className,
  glow = "dual",
  float = true,
  priority = false,
  tilt = true,
}: ProductGlowProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), { stiffness: 150, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-12, 12]), { stiffness: 150, damping: 18 });

  function onMove(e: React.MouseEvent) {
    if (!tilt || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  }
  function onLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn("relative flex items-center justify-center overflow-hidden", className)}
      style={{ perspective: 1000 }}
    >
      {/* Glow halos */}
      {(glow === "neural" || glow === "dual") && (
        <div className="absolute left-1/2 top-1/2 h-[90%] w-[90%] -translate-x-1/2 -translate-y-1/2 animate-glow-pulse rounded-full bg-neural/55 blur-[80px]" />
      )}
      {(glow === "bolt" || glow === "dual") && (
        <div className="absolute left-1/2 top-1/2 h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2 animate-glow-pulse rounded-full bg-bolt/45 blur-[70px]" />
      )}

      {/* Soft studio ground/floor shadow for premium floating 3D product photography (makes the seamless render pop exactly like the reference Image #1 — no outer frame needed).
          Static soft shadow for simplicity/perf; the bottle's own tilt + main drop-shadows sell the 3D. */}
      <div
        aria-hidden
        className="absolute left-1/2 top-[78%] -translate-x-1/2 w-[68%] h-8 rounded-full bg-black/40 blur-[18px] z-0"
      />

      <motion.div
        initial={priority ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: "spring", stiffness: 80, damping: 16 }}
        style={tilt ? { rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" } : undefined}
        className={cn("relative z-10", float && "animate-float-y")}
      >
        <Image
          src={src}
          alt={alt}
          width={size}
          height={size}
          priority={priority}
          className="h-auto w-full select-none object-contain"
          style={{ filter: "drop-shadow(0 32px 70px rgba(0,0,0,0.65)) drop-shadow(0 8px 18px rgba(0,0,0,0.35))" }}
          draggable={false}
        />
      </motion.div>
    </div>
  );
}
