"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import * as React from "react";

interface LiquidGlassButtonProps {
  href?: string;
  variant?: "bolt" | "glass";
  className?: string;
  children: React.ReactNode;
}

/**
 * Premium Shopify / Atlas-style high-converting CTA.
 * Signature tactile primary with optional liquid refraction (kept for hero magic).
 * Falls back to unified .premium-cta treatment so every buy button feels bespoke, fast, expensive.
 * Keeps the user's liked liquid/glare animations.
 */
export const LiquidGlassButton = React.forwardRef<HTMLButtonElement, LiquidGlassButtonProps>(
  ({ className, children, href, variant = "bolt" }, ref) => {
    const isBolt = variant === "bolt";

    const content = (
      <span
        className={cn(
          // Base premium shopify cta + liquid extras when bolt
          "group relative inline-flex items-center justify-center gap-2 overflow-hidden font-heading text-[15px] font-semibold tracking-[-0.12px] transition-all duration-200 active:scale-[0.985]",
          isBolt
            ? "premium-cta px-9 py-[17px] hover:glow-bolt"
            : "premium-cta-secondary px-8 py-4 border-2 border-white/20 hover:border-bolt",
          className
        )}
        style={isBolt ? { backdropFilter: "url(#liquid-glass-filter)" } : undefined}
      >
        {/* Liquid glass refraction + moving glare (only for primary bolt variant — the cool effect user liked). Amplified for richer glass premium feel. */}
        {isBolt && (
          <>
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background:
                  "linear-gradient(120deg, rgba(255,255,255,0) 25%, rgba(255,255,255,0.55) 48%, rgba(255,255,255,0) 72%)",
                transform: "translateX(-120%)",
              }}
            />
            <span
              aria-hidden
              className="pointer-events-none absolute inset-y-0 -left-1/3 z-0 w-1/3 -skew-x-12 bg-white/32 blur-[2px] transition-transform duration-700 ease-out group-hover:translate-x-[480%]"
            />
          </>
        )}
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </span>
    );

    if (href) {
      return (
        <Link href={href} className="inline-flex">
          {content}
        </Link>
      );
    }

    return (
      <button ref={ref} type="button" className="inline-flex">
        {content}
      </button>
    );
  }
);
LiquidGlassButton.displayName = "LiquidGlassButton";

/** Mount once near the root so the SVG turbulence glass filter is available. */
export function LiquidGlassFilter() {
  return (
    <svg aria-hidden width="0" height="0" className="absolute">
      <defs>
        <filter id="liquid-glass-filter">
          <feTurbulence type="fractalNoise" baseFrequency="0.008 0.008" numOctaves={2} seed={92} result="noise" />
          <feGaussianBlur in="noise" stdDeviation={2} result="blur" />
          <feDisplacementMap in="SourceGraphic" in2="blur" scale={18} xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
    </svg>
  );
}
