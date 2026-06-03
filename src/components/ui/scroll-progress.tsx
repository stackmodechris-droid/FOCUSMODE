"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

/**
 * Fun Google-inspired scroll progress bar at the very top.
 * Keeps the reader oriented and adds a game-like "almost there" feel while scrolling.
 * Uses bolt yellow to fit brand.
 */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
      setProgress(Math.min(100, Math.max(0, scrolled)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[60] h-[3px] w-full bg-border/40">
      <motion.div
        className="h-full bg-bolt"
        style={{ width: `${progress}%` }}
        transition={{ type: "spring", stiffness: 120, damping: 30 }}
      />
      {/* tiny fun pulse at the head */}
      {progress > 3 && progress < 98 && (
        <div
          className="absolute top-0 h-[3px] w-8 bg-bolt/60 blur-[1px]"
          style={{ left: `calc(${progress}% - 4px)` }}
        />
      )}
    </div>
  );
}
