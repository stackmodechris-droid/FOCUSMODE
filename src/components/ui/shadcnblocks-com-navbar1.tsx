"use client"

import { Leaf, Menu, X, Zap } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

const Navbar1 = ({
  logo = {
    url: "/",
    src: "/logo.png",
    alt: "Focus Mode logo",
    title: "FOCUSMODE",
  },
}: {
  logo?: { url: string; src: string; alt: string; title: string }
}) => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [progress, setProgress] = useState(0)

  // Subtle top progress line for orientation (integrated into the header = perfectly seamless top, no separate bar/gap)
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const scrolled = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100
      setProgress(Math.min(100, Math.max(0, scrolled)))
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "Journal", href: "/articles" },
    { label: "Story", href: "/our-story" },
    { label: "Formula", href: "/learn-more" },
  ]

  const closeMobile = () => setMobileOpen(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.04] bg-[#0c0f0f]">
      {/* Integrated flush progress — no separate fixed 3px element, no gap, seamless to viewport top */}
      <div className="absolute left-0 top-0 h-px w-full bg-white/10">
        <div className="h-full bg-neural transition-[width] duration-100" style={{ width: `${progress}%` }} />
      </div>
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* Desktop */}
        <nav className="hidden h-20 items-center justify-between lg:flex">
          {/* Logo - premium refined */}
          <Link href={logo.url} className="flex items-center gap-3 group" aria-label="Focus Mode home">
            <div className="relative">
              <Image
                src={logo.src}
                width={42}
                height={42}
                className="h-10 w-10 drop-glow-neural transition-transform duration-300 group-hover:scale-[1.04]"
                alt={logo.alt}
                priority
              />
            </div>
            <span className="font-heading text-[21px] font-semibold tracking-[-0.4px] text-white">
              FOCUS<span className="text-neural tracking-[-0.2px]">MODE</span>
            </span>
          </Link>

          {/* Elegant centered links - premium, minimal, no heavy dropdowns */}
          <div className="flex items-center gap-7 text-sm lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-medium text-silver/80 transition-all hover:text-white relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-neural after:transition-all hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side — High-converting dual product buttons: Blue Focus + Green Super Energy Blend */}
          <div className="flex items-center gap-2.5">
            <Link
              href="/shop"
              className="group inline-flex items-center gap-2 rounded-full bg-bolt hover:brightness-105 active:scale-[0.985] px-5 py-2.5 text-sm font-heading font-extrabold text-black transition-all shadow-[0_1px_0_0_rgba(255,255,255,0.45)_inset,0_2px_10px_-2px_rgba(253,228,0,0.55)]"
            >
              Shop Now
              <Zap className="h-3.5 w-3.5 fill-black/80 transition group-hover:translate-x-px" />
            </Link>
            <Link
              href="/shop"

              className="group inline-flex items-center gap-2 rounded-full bg-[#1e90ff] hover:bg-[#1a7dd9] active:scale-[0.985] px-5 py-2.5 text-sm font-heading font-bold text-white transition-all shadow-[0_1px_0_0_rgba(255,255,255,0.25)_inset,0_2px_8px_-2px_rgba(30,144,255,0.45)]"
            >
              Focus Mode
              <Zap className="h-3.5 w-3.5 fill-white/90 transition group-hover:translate-x-px" />
            </Link>
            <Link
              href="/shop"

              className="group inline-flex items-center gap-2 rounded-full bg-[#16a34a] hover:bg-[#15803d] active:scale-[0.985] px-5 py-2.5 text-sm font-heading font-bold text-white transition-all shadow-[0_1px_0_0_rgba(255,255,255,0.2)_inset,0_2px_8px_-2px_rgba(22,163,74,0.45)]"
            >
              Super Energy Blend
              <Leaf className="h-3.5 w-3.5 transition group-hover:translate-x-px" />
            </Link>
          </div>
        </nav>

        {/* Mobile - premium compact: logo + menu only. Buy CTA lives in the elegant full menu + sticky bar + other sections to avoid cramp/overlap with title on small screens. */}
        <div className="flex h-16 items-center justify-between lg:hidden">
          <Link href={logo.url} className="flex items-center gap-2.5" aria-label="Focus Mode home">
            <Image src={logo.src} width={36} height={36} className="h-9 w-9 drop-glow-neural" alt={logo.alt} priority />
            <span className="font-heading text-[19px] font-semibold tracking-[-0.3px] text-white">
              FOCUS<span className="text-neural">MODE</span>
            </span>
          </Link>

          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMobileOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition active:bg-white/5"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Premium mobile overlay menu - elegant full screen, not default sheet slop */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.12 }}
            className="fixed inset-0 z-[70] bg-[#0a0c0c] lg:hidden"
            onClick={closeMobile}
          >
            <div className="flex h-full flex-col" onClick={(e) => e.stopPropagation()}>
              {/* Top bar */}
              <div className="flex h-16 items-center justify-between border-b border-white/10 px-5">
                <Link href="/" className="flex items-center gap-2.5" onClick={closeMobile}>
                  <Image src={logo.src} width={32} height={32} className="h-8 w-8" alt={logo.alt} />
                  <span className="font-heading text-xl font-semibold tracking-[-0.3px] text-white">
                    FOCUS<span className="text-neural">MODE</span>
                  </span>
                </Link>
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={closeMobile}
                  className="flex h-10 w-10 items-center justify-center rounded-full text-white/80 active:bg-white/5"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Elegant large links */}
              <div className="flex flex-col gap-1 px-6 pt-10 text-xl">
                {navLinks.map((link, idx) => (
                  <Link
                    key={idx}
                    href={link.href}
                    onClick={closeMobile}
                    className="py-4 font-heading font-medium text-white border-b border-white/10 last:border-0 active:text-neural transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/faq"
                  onClick={closeMobile}
                  className="py-4 font-heading font-medium text-white/90 border-b border-white/10 active:text-neural transition-colors"
                >
                  FAQ
                </Link>
              </div>

              {/* Bottom premium dual CTA block — Blue Focus + Green Super Energy Blend (high converting) */}
              <div className="mt-auto p-6 space-y-2.5">
                <Link
                  href="/shop"

                  className="flex w-full items-center justify-center gap-2.5 rounded-full bg-[#1e90ff] active:scale-[0.985] py-4 text-lg font-heading font-bold text-white shadow-[0_1px_0_0_rgba(255,255,255,0.25)_inset]"
                >
                  Focus Mode <Zap className="h-5 w-5 fill-white/90" />
                </Link>
                <Link
                  href="/shop"

                  className="flex w-full items-center justify-center gap-2.5 rounded-full bg-[#16a34a] active:scale-[0.985] py-4 text-lg font-heading font-bold text-white shadow-[0_1px_0_0_rgba(255,255,255,0.2)_inset]"
                >
                  Super Energy Blend <Leaf className="h-5 w-5" />
                </Link>
                <Link
                  href="/shop"
                  onClick={closeMobile}
                  className="flex w-full items-center justify-center gap-2.5 rounded-full bg-bolt active:scale-[0.985] py-4 text-lg font-heading font-extrabold text-black shadow-[0_1px_0_0_rgba(255,255,255,0.45)_inset]"
                >
                  Shop Now <Zap className="h-5 w-5 fill-black/80" />
                </Link>
                <p className="pt-1 text-center text-[10px] font-mono-data uppercase tracking-[2px] text-silver/40">
                  30 day guarantee • Ships from USA
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export { Navbar1 }
