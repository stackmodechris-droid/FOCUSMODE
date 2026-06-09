"use client";

import { NAV_LINKS, SITE, trackPurchase } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-colors duration-300",
        scrolled
          ? "border-border bg-surface-dim/90 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link href="/" className="flex items-center gap-2.5 group" aria-label="Focus Mode home">
          <Image
            src="/logo.png"
            alt="Focus Mode logo"
            width={36}
            height={36}
            className="h-9 w-9 drop-glow-neural transition-transform group-hover:scale-110"
            priority
          />
          <span className="font-heading text-lg font-extrabold tracking-tight text-white">
            FOCUS<span className="text-neural">MODE</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-mono-data text-xs uppercase tracking-widest text-silver/80 transition-colors hover:text-bolt"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/focus-mode"
            className="hidden items-center gap-2 bg-bolt px-6 py-2.5 font-heading text-sm font-bold text-black transition-all hover:scale-105 hover:glow-bolt md:inline-flex"
            onClick={() => trackPurchase({ value: SITE.price, currency: "USD" })}
          >
            BUY NOW
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center border border-border text-white md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-x-0 top-16 border-b border-border bg-surface-dim/98 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-6">
              {NAV_LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-border/50 py-4 font-heading text-lg font-bold text-white"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="/focus-mode"
                onClick={() => {
                  trackPurchase({ value: SITE.price, currency: "USD" });
                  setOpen(false);
                }}
                className="mt-4 inline-flex items-center justify-center gap-2 bg-bolt py-4 font-heading font-bold text-black"
              >
                BUY NOW
              </Link>
              <p className="mt-4 text-center font-mono-data text-[10px] uppercase tracking-widest text-silver/50">
                {SITE.tagline}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
