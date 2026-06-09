"use client";

import { trackPurchase } from "@/lib/site";
import Link from "next/link";
import type { ComponentProps, MouseEventHandler, ReactNode } from "react";

interface TrackableLinkProps extends Omit<ComponentProps<typeof Link>, "onClick"> {
  price?: number;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

/** Next.js Link wrapper that fires a Meta Pixel Purchase event on click before navigating. */
export function TrackableLink({ price, children, onClick, ...props }: TrackableLinkProps) {
  return (
    <Link
      {...props}
      onClick={(e) => {
        trackPurchase({ value: price ?? 0, currency: "USD" });
        onClick?.(e);
      }}
    >
      {children}
    </Link>
  );
}
