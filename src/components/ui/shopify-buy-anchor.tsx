"use client";

import Link from "next/link";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function ShopifyBuyAnchor({ children, className }: Props) {
  return (
    <Link href="/focus-mode" className={className}>
      {children}
    </Link>
  );
}
