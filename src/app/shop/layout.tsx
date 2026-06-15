import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop | Focus Mode Botanical Capsules & Daily Greens",
  description:
    "Shop Focus Mode botanical focus capsules and Focus Mode Greens Energy Superfood Blend. Plant-based daily greens, Ginkgo, Red Asian Ginseng, 20+ superfoods, and USA manufacturing.",
  alternates: { canonical: "/shop" },
};

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
