"use client";


interface Props {
  children: React.ReactNode;
  className?: string;
}

export function ShopifyBuyAnchor({ children, className }: Props) {
  return (
    <a href="/shop" className={className}>
      {children}
    </a>
  );
}
