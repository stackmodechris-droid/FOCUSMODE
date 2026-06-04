"use client";

import dynamic from "next/dynamic";

// Client-only wrapper for the limited offer popup (ssr: false must be in a Client Component)
const LimitedOfferPopupClient = dynamic(
  () => import("@/components/ui/limited-offer-popup").then((m) => ({ default: m.LimitedOfferPopup })),
  { ssr: false }
);

export default LimitedOfferPopupClient;
