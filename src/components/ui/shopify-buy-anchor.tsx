"use client";


interface Props {
  children: React.ReactNode;
  className?: string;
}

export function ShopifyBuyAnchor({ children, className }: Props) {
  return (
    <a href="/focus-mode" className={className}>
      {children}
    </a>
  );
}
