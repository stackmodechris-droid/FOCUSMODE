export const SITE = {
  name: "Focus Mode",
  brand: "Focus Mode",
  legalName: "The Stackmode Network LLC",
  founder: "Stackmodechris",
  url: "https://focusmode.stackmode.net",
  partnerUrl: "https://stackmode.net",
  tagline: "Think Faster. Work Smarter. Earn More.",
  price: 59.99,
  originalPrice: 100,
  discountPercent: 40,
  currency: "USD",
  capsules: 60,
  supplyDays: 30,
  email: "support@stackmode.net",
  description:
    "The highest-performing focus supplement on earth. 6+ hours of clean, crash-free mental clarity, sharper decisions, and zero fatigue — for entrepreneurs, professionals, students, creators, and high-performers who refuse to let brain fog hold them back. Scientifically dosed Ginkgo + Ginseng. USA made. 30-day guarantee.",
  metaPixelId: "1808935510076455",
} as const;

export const SHOPIFY_CART_URL =
  "https://qg5zmc-rx.myshopify.com/cart/47880589476098:1?channel=buy_button";

export const NAV_LINKS = [
  { label: "Our Story", href: "/our-story" },
  { label: "Journal", href: "/articles" },
  { label: "The Formula", href: "/learn-more" },
  { label: "Solution", href: "/#benefits" },
  { label: "For Ambitious Minds", href: "/#performance" },
] as const;

export const PRODUCT_IMAGES = {
  front: "/products/1780438169847-generated-label-image-2.png",
  trio: "/products/1780438169836-generated-label-image-3.png",
  capsules: "/products/1780438169844-generated-label-image-0.png",
  open: "/products/1780438169849-generated-label-image-1.png",
  pill: "/products/pill.png",
} as const;

export const FAQS: { q: string; a: string }[] = [
  {
    q: "How fast does Focus Mode work?",
    a: "Most high-performers feel the brain fog lift within 20-30 minutes. Ginkgo Biloba increases oxygen delivery to neural pathways while Red Asian Ginseng ramps up dopamine and acetylcholine for fast, clean mental activation.",
  },
  {
    q: "Will it give me jitters or a crash like caffeine?",
    a: "No. Focus Mode contains zero synthetic stimulants and zero caffeine. You get 6+ hours of sustained, locked-in focus with no anxiety and no afternoon crash.",
  },
  {
    q: "Who is Focus Mode designed for?",
    a: "Entrepreneurs building businesses, professionals crushing deadlines, students mastering exams, creators writing and shipping, doctors and executives making critical calls under pressure, business leaders scaling, and anyone who needs a sharper, more productive mind without jitters or crashes. If mental fatigue, brain fog, or slow thinking is costing you time, money, or opportunities — this is for you.",
  },
  {
    q: "How do I take it?",
    a: "Take 2 capsules, twice daily. For maximum performance, take 20-30 minutes before your most important study session, meeting, exam, or deep-work block.",
  },
  {
    q: "What's actually inside?",
    a: "Two clinically-backed, antioxidant-rich ingredients: Ginkgo Biloba Leaf Extract (24% Flavones) for cerebral blood flow and mental clarity, and Red Asian Ginseng Extract (7% Ginsenosides) for dopamine support and stress resilience — in clean, plant-based capsules. Zero fillers. Safe and effective for students, professionals, and adults seeking long-term brain health.",
  },
  {
    q: "Is it safe and where is it made?",
    a: "Focus Mode is manufactured in the USA. These statements have not been evaluated by the FDA. This product is not intended to diagnose, treat, cure, or prevent any disease. Consult a healthcare professional before use.",
  },
];

export const INGREDIENTS = [
  {
    name: "Ginkgo Biloba Leaf Extract",
    spec: "24% Flavones",
    dose: "120mg",
    role: "Oxygen delivery + faster synaptic firing",
    detail:
      "Ancient Asian herb used for centuries to enhance blood flow to the brain. Rich in natural antioxidants that help protect neural pathways, increase oxygen delivery, and support sharper mental clarity — for students and adults alike — within 20-30 minutes.",
  },
  {
    name: "Red Asian Ginseng Extract",
    spec: "7% Ginsenosides",
    dose: "200mg",
    role: "Dopamine production + stress adaptation",
    detail:
      "Adapts your nervous system for sustained performance under pressure. Boosts neurochemical production (dopamine, acetylcholine), energizes mental stamina, and provides antioxidant support for long-term brain health and resilience in demanding school, work, or creative seasons.",
  },
];

export const FDA_DISCLAIMER =
  "These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. Consult a healthcare professional before use.";
