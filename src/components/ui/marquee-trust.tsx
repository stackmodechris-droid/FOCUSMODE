const ITEMS = [
  "100% PLANT-BASED • ALL NATURAL",
  "HALAL SUITABLE • PURE INGREDIENTS",
  "USA MANUFACTURED",
  "4.9/5 ELITE RATED",
  "$59.99 — 40% OFF $100 (FOCUS)",
  "$49.99 DAILY GREENS — 30 SERVINGS",
  "ZERO JITTERS · ZERO CRASH",
  "SUSTAINED CLEAN ENERGY + ELITE FOCUS",
  "CLINICALLY DOSED · 24% FLAVONES + 7% GINSENOSIDES",
  "60 CAPSULES + 1 SCOOP GREENS = COMPLETE PROTOCOL",
  "NO SYNTHETIC STIMULANTS · NO ARTIFICIAL ADDITIVES",
  "BUILT FOR HIGH-PERFORMERS",
  "WHOLE-PLANT VITAMINS + ADAPTOGENS",
  "30-DAY EMPTY BOTTLE GUARANTEE",
];

export function MarqueeTrust() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="relative flex overflow-hidden border-y border-border bg-surface-dim py-3 sm:py-4">
      <div className="flex shrink-0 animate-marquee items-center gap-6 sm:gap-8 whitespace-nowrap pr-6 sm:pr-8">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-2 sm:gap-3 font-mono-data text-[10px] sm:text-xs uppercase tracking-widest text-silver/60">
            {/* SVG bolt marker for more visual examples at top */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#fde400" aria-hidden>
              <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
            </svg>
            {item}
          </span>
        ))}
      </div>
      <div aria-hidden className="flex shrink-0 animate-marquee items-center gap-6 sm:gap-8 whitespace-nowrap pr-6 sm:pr-8">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-2 sm:gap-3 font-mono-data text-[10px] sm:text-xs uppercase tracking-widest text-silver/60">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#fde400" aria-hidden>
              <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
            </svg>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
