"use client";

import { FDA_DISCLAIMER, SITE } from "@/lib/site";
import Image from "next/image";
import Link from "next/link";

const COLS = [
  {
    title: "Shop",
    links: [
      { label: "Focus Mode Capsules", href: "/shop#focus" },
      { label: "Super Energy Blend", href: "/shop#greens" },
      { label: "How It Works", href: "/shop" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", href: "/our-story" },
      { label: "The Formula", href: "/our-story" },
      { label: "Articles", href: "/articles" },
      { label: "Partner Network", href: SITE.partnerUrl },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Service", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Return Policy", href: "/returns" },
      { label: "Shipping Info", href: "/terms#shipping" },
      { label: "Contact", href: `mailto:${SITE.email}` },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-dim pb-[env(safe-area-inset-bottom)]">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-5 md:gap-10">
          <div className="col-span-2 md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5">
              <Image src="/logo.png" alt="Focus Mode logo" width={40} height={40} className="h-10 w-10 drop-glow-neural" />
              <span className="font-heading text-xl font-extrabold tracking-tight text-white">
                FOCUS<span className="text-neural">MODE</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-silver/70">
              {SITE.tagline} Engineered by {SITE.founder} and {SITE.legalName} for entrepreneurs, professionals, students, creators, and high-performers who demand a sharper mind.
            </p>
            <p className="mt-1 text-sm font-semibold text-neural">
              Based in Atlanta, Georgia • USA Manufactured
            </p>
            <p className="mt-4 font-mono-data text-xs uppercase tracking-widest text-silver/50">
              {SITE.capsules} Capsules · {SITE.supplyDays}-Day Supply · USA Manufactured
            </p>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 font-mono-data text-[10px] uppercase tracking-[1.5px] text-silver/40">
              <span>Shopify Secure</span><span>·</span><span>Shop Pay</span><span>·</span><span>Apple Pay</span>
            </div>
          </div>

          {COLS.map((col) => (
            <div key={col.title}>
              <h3 className="font-mono-data text-xs uppercase tracking-widest text-neural">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => {
                  const isExternal = l.href.startsWith("http") || l.href.startsWith("mailto:");
                  return (
                    <li key={l.label}>
                      {isExternal ? (
                        <a
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-silver/70 transition-colors hover:text-white"
                        >
                          {l.label}
                        </a>
                      ) : (
                        <Link
                          href={l.href}
                          className="text-sm text-silver/70 transition-colors hover:text-white"
                        >
                          {l.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-border pt-8">
          <p className="text-xs leading-relaxed text-silver/45">
            <span className="font-mono-data uppercase tracking-widest text-silver/60">FDA Disclaimer — </span>
            {FDA_DISCLAIMER}
          </p>
          <div className="mt-6 flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <p className="font-mono-data text-xs text-silver/50">
              © {new Date().getFullYear()} {SITE.legalName}. All rights reserved. • <span className="text-neural/80">GoAdd Focus. Based in Atlanta.</span>
            </p>

            {/* Contact */}
            <div className="flex flex-wrap items-center gap-3 text-xs w-full md:w-auto">
            <a
              href="tel:+16785584327"
              className="premium-cta-secondary inline-flex items-center gap-1.5 px-3 py-1 text-xs shrink-0"
            >
              Call / Text 678-558-4327
            </a>
            <a
              href="mailto:focusmodesupplementsshop@proton.me"
              className="premium-cta-secondary inline-flex items-center gap-1.5 px-3 py-1 text-xs max-w-full truncate"
            >
              <span className="truncate">focusmodesupplementsshop@proton.me</span>
            </a>
          </div>
          </div>

          {/* Ultra-subtle transparent footer strip at the very bottom for backlinks/SEO on every page */}
          <div className="mt-5 pt-3 border-t border-white/5 text-center">
            <p className="font-mono-data text-[9px] md:text-[10px] tracking-[1.5px] text-silver/20">
              The Stackmode Network LLC • Atlanta, Georgia •{" "}
              <a
                href={SITE.partnerUrl}
                target="_blank"
                rel="noopener"
                className="text-silver/30 hover:text-silver/50 transition-colors underline-offset-2 hover:underline"
              >
                Stackmode.net
              </a>
              {" "}— GoAdd Focus Mode to your routine.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
