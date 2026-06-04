"use client";

import { SHOPIFY_CART_URL, trackAddToCart } from "@/lib/site";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function ShopifyBuyAnchor({ children, className }: Props) {
  return (
    <a href={SHOPIFY_CART_URL} onClick={trackAddToCart} className={className}>
      {children}
    </a>
  );
}
