export const SITE = {
  name: "Focus Mode",
  brand: "Focus Mode",
  legalName: "The Stackmode Network LLC",
  founder: "Stackmodechris",
  url: "https://focusmodeshop.com",
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
    "The highest-performing all-natural focus supplement on earth. Straight from nature. 6+ hours of clean, crash-free mental clarity, sharper decisions, and zero fatigue — for entrepreneurs, professionals, students, creators, and high-performers who refuse to let brain fog hold them back. Scientifically dosed Ginkgo + Ginseng. Zero fillers. USA made. 30-day guarantee. Halal-friendly ingredients.",
  metaPixelId: "1808935510076455",
} as const;

export const SHOPIFY_CART_URL =
  "https://qg5zmc-rx.myshopify.com/cart/47880589476098:1?channel=buy_button";

export const GREENS_CART_URL =
  "https://qg5zmc-rx.myshopify.com/cart/47960755863810:1?channel=buy_button";

export const GREENS = {
  name: "Super Energy Blend",
  brand: "Focus Mode",
  price: 45,
  currency: "USD",
  netWeight: "0.28 lb (126 g)",
  servings: 30,
  servingSize: "1 scoop (4.2 g)",
  supplyDays: 30,
  description:
    "Pure plant-based Super Energy Blend for clean, sustained energy and daily vitality. 20+ whole plants, superfoods and adaptogens in one scoop — the natural foundation for athletes, busy professionals, students, and anyone who wants real all-day energy and brain support without jitters or crashes.",
  howItWorks:
    "Mix one scoop into 6–8 oz of cold water or your morning beverage and you're done — a full spectrum of superfoods in under a minute, so you can get back to what matters.",
  ingredientsIntro:
    "A thoughtfully sourced blend of greens, berries, roots, and adaptogens — Barley Grass, Spirulina, Broccoli, Wheatgrass, Beet Root, Acai, Blueberry, Pomegranate, Turmeric, Ginger, Panax Ginseng, Ashwagandha, and more — rounded out with Black Pepper Extract to maximize absorption.",
  ingredients: [
    { name: "Barley Grass Powder (leaf)", amount: "—", role: "Chlorophyll + natural vitamins for sustained energy" },
    { name: "Spirulina Powder (whole plant)", amount: "—", role: "Complete protein + antioxidants for mental stamina" },
    { name: "Broccoli Powder (leaf)", amount: "—", role: "Sulforaphane support for cellular health" },
    { name: "Wheat Grass Powder (leaf)", amount: "—", role: "Detox support + concentrated greens nutrition" },
    { name: "Beet Root Powder", amount: "—", role: "Natural nitrates for blood flow & endurance" },
    { name: "Acai Juice Powder (fruit)", amount: "—", role: "Anthocyanins for brain & recovery" },
    { name: "Blueberry Powder (fruit)", amount: "—", role: "Flavonoids for cognitive protection" },
    { name: "Pomegranate Powder (fruit)", amount: "—", role: "Polyphenols for cardiovascular & cellular health" },
    { name: "Turmeric Extract (root)", amount: "—", role: "Curcumin for healthy inflammation response" },
    { name: "Ginger Powder (root)", amount: "—", role: "Digestive comfort & absorption" },
    { name: "Panax Ginseng Powder (root)", amount: "—", role: "Adaptogen for mental energy & resilience (synergizes with Focus Mode)" },
    { name: "Ashwagandha Powder (root)", amount: "—", role: "Stress adaptation & calm focus" },
    { name: "Green Tea Extract (leaf)", amount: "—", role: "Gentle L-theanine + catechins for smooth alertness" },
    { name: "Black Pepper Extract", amount: "—", role: "Piperine to dramatically increase nutrient absorption" },
  ],
  factsImage: "/greens/d0247e84c2ab57d48958ef01f29b2654de5b944d-842x461.png",
  usage: "1 scoop daily in 6–8 oz of cold water or beverage; consume within 10 minutes of mixing.",
  manufactured: "USA",
  additives: "None",
  warnings:
    "⚠️ Not intended for use by pregnant or nursing mothers, children under 18, or individuals with known medical conditions without physician approval. Do not exceed the recommended dose. Keep out of reach of children. Do not use if safety seal is damaged or missing. Store in a cool, dry place.",
  fdaDisclaimer:
    "These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. Consult a healthcare professional before use.",
  images: {
    front: "/greens/1780842565396-generated-label-image-2_800x800.png",
    angle1: "/greens/1780842565402-generated-label-image-3_800x800.png",
    angle2: "/greens/1780842565406-generated-label-image-0_800x800.png",
    angle3: "/greens/1780842565435-generated-label-image-1_800x800.png",
  },
} as const;

export const NAV_LINKS = [
  { label: "Focus Mode", href: "/focus-mode" },
  { label: "Green Energy", href: "/green-energy" },
  { label: "Shop", href: "/shop" },
  { label: "Articles", href: "/articles" },
  { label: "Story", href: "/our-story" },
  { label: "Science", href: "/learn-more" },
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

/** Fire Meta Pixel AddToCart event if fbq is available. */
export function trackAddToCart() {
  if (typeof window !== "undefined" && (window as unknown as Record<string, unknown>).fbq) {
    ((window as unknown as Record<string, (cmd: string, event: string) => void>).fbq)("track", "AddToCart");
  }
}
