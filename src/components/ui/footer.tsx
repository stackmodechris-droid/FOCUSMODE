"use client";

import { FDA_DISCLAIMER, SHOPIFY_CART_URL, SITE, trackAddToCart } from "@/lib/site";
import Image from "next/image";
import Link from "next/link";

const COLS = [
  {
    title: "Shop",
    links: [
      { label: "Buy Focus Mode", href: SHOPIFY_CART_URL },
      { label: "The Formula", href: "/learn-more" },
      { label: "How It Works", href: "/#benefits" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", href: "/our-story" },
      { label: "Articles", href: "/articles" },
      { label: "Stackmode Network", href: SITE.partnerUrl },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of Service", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Shipping Info", href: "/terms#shipping" },
      { label: "Contact", href: `mailto:${SITE.email}` },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface-dim">
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
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      onClick={l.href === SHOPIFY_CART_URL ? trackAddToCart : undefined}
                      className="text-sm text-silver/70 transition-colors hover:text-white"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
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
              © {new Date().getFullYear()} {SITE.legalName}. All rights reserved.
            </p>

            {/* Organized marketing + contact at bottom of pages (shopping site focus) */}
            <div className="flex flex-col md:flex-row md:items-center gap-3 text-xs">
              <a
                href={SITE.partnerUrl}
                className="font-medium text-silver/70 hover:text-neural transition-colors"
              >
                Learn how to trade and grow your business at stackmode.net
              </a>
              <span className="hidden md:inline text-silver/30">·</span>
              <div className="flex items-center gap-3">
                <a
                  href="tel:+16785584327"
                  className="premium-cta-secondary inline-flex items-center gap-1.5 px-3 py-1 text-xs"
                >
                  Call / Text 678-558-4327
                </a>
                <a
                  href="mailto:tradingeducation@stackmode.net"
                  className="premium-cta-secondary inline-flex items-center gap-1.5 px-3 py-1 text-xs"
                >
                  tradingeducation@stackmode.net
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
