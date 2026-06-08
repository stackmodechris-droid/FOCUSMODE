import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop | Focus Mode — Best All-Natural Focus Supplement & Daily Greens",
  description:
    "Shop the best all-natural focus supplement and daily greens powder. Focus Mode capsules + Super Energy Blend. 6+ hours crash-free focus + clean all-day energy. USA made. 60% off + 30-day guarantee.",
  alternates: { canonical: "/shop" },
};

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
