import type { Metadata } from "next";
import { ShopContent } from "./shop-content";

export const metadata: Metadata = {
  title: "Shop Focus Mode | Botanical Focus Capsules & Daily Greens Powder",
  description:
    "Buy Focus Mode Brain Boosting Capsules and Focus Mode Greens Energy Superfood Blend. Botanical focus support, plant-based daily greens, 20+ superfoods, USA made.",
  alternates: { canonical: "/shop" },
  openGraph: {
    title: "Shop Focus Mode | Botanical Focus Capsules & Daily Greens Powder",
    description: "Buy Focus Mode capsules and Focus Mode Greens Energy Superfood Blend. Botanical focus support plus plant-based daily greens.",
    url: "/shop",
    images: ["/og/Front.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shop Focus Mode | Botanical Focus Capsules & Daily Greens Powder",
    description: "Buy Focus Mode capsules and Focus Mode Greens Energy Superfood Blend.",
    images: ["/og/Front.png"],
  },
};

export default function ShopPage() {
  return (
    <>
      <link rel="preload" as="script" href="https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js" />
      <ShopContent />
    </>
  );
}
