"use client";

import dynamic from "next/dynamic";

// Lazy loaded only on client, no SSR for the popup (saves initial payload + no flash)
const LimitedOfferPopup = dynamic(
  () => import("./limited-offer-popup").then((m) => ({ default: m.LimitedOfferPopup })),
  { ssr: false, loading: () => null }
);

export function HomeLazyPopups() {
  return <LimitedOfferPopup />;
}
