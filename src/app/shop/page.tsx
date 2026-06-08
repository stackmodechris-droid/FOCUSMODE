import type { Metadata } from "next";
import { ShopContent } from "./shop-content";

export const metadata: Metadata = {
  title: "Shop Focus Mode | Best Nootropic & Daily Greens — 60% Off Today",
  description:
    "Buy Focus Mode focus supplement and Super Energy Blend daily greens. 60% off today. Clinical Ginkgo + Ginseng. 20+ superfoods. Zero fillers. USA made. 30-day guarantee. Free same-day shipping.",
  alternates: { canonical: "/shop" },
  openGraph: {
    title: "Shop Focus Mode | Best Nootropic & Daily Greens — 60% Off Today",
    description: "Buy Focus Mode and Super Energy Blend. 60% off today. Clinical formulas. Zero fillers. USA made.",
    url: "/shop",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shop Focus Mode | Best Nootropic & Daily Greens — 60% Off Today",
    description: "Buy Focus Mode and Super Energy Blend. 60% off today. Clinical formulas. Zero fillers. USA made.",
    images: ["/og/og-1200x900.png"],
  },
};

export default function ShopPage() {
  return <ShopContent />;
}
