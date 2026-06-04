"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Fires Meta Pixel PageView on client-side route changes (Next.js app router SPA navigation).
 * The initial PageView is handled by the init script in layout.
 * This ensures accurate "PageView" events across all navigations.
 *
 * Note: Only depends on pathname (not search params) to avoid useSearchParams()
 * CSR bailout / missing Suspense boundary during static prerender of _not-found etc.
 */
export function MetaPixel() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const fbq = (window as unknown as { fbq?: (event: string, ...args: unknown[]) => void }).fbq;
      if (typeof fbq === "function") {
        fbq("track", "PageView");
      }
    }
  }, [pathname]);

  return null;
}
