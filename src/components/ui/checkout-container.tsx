"use client";

import { useEffect, useId, useRef, useState } from "react";

interface ShopifyUI {
  createComponent: (type: string, config: Record<string, unknown>) => void;
}
interface ShopifyClient {
  buildClient: (cfg: { domain: string; storefrontAccessToken: string }) => unknown;
  UI: { onReady: (client: unknown) => Promise<ShopifyUI> };
}

declare global {
  interface Window {
    ShopifyBuy?: ShopifyClient;
  }
}

const SCRIPT_URL = "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";

const OPTIONS = {
  product: {
    styles: {
      title: { display: "none" },
      description: { display: "none" },
      img: { display: "none" },
      imgWrapper: { display: "none" },
      button: {
        "font-size": "15px",
        "padding-top": "18px",
        "padding-bottom": "18px",
        color: "#121414",
        ":hover": { color: "#121414", "background-color": "#dec800" },
        "background-color": "#fde400",
        "border-radius": "0px",
        "font-weight": "800",
        "letter-spacing": "0.04em",
        "text-transform": "uppercase",
      },
      price: { display: "none" },
      compareAt: { display: "none" },
    },
    buttonDestination: "checkout",
    text: { button: "Buy Now · Secure Shopify Checkout" },
  },
  cart: {
    styles: {
      button: {
        "background-color": "#fde400",
        color: "#121414",
      },
    },
  },
};

/**
 * Embeds the official Shopify Buy Button for Focus Mode.
 * Loads the SDK once, then renders the product component into a unique node.
 */
export function CheckoutContainer({ className }: { className?: string }) {
  const nodeRef = useRef<HTMLDivElement>(null);
  const domId = `product-component-${useId().replace(/:/g, "")}`;
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let cancelled = false;

    function initShopify() {
      if (cancelled || !window.ShopifyBuy || !nodeRef.current) return;
      const node = document.getElementById(domId);
      if (!node) return;
      // avoid double-render
      if (node.childNodes.length > 0) return;

      const client = window.ShopifyBuy.buildClient({
        domain: "qg5zmc-rx.myshopify.com",
        storefrontAccessToken: "8485ea7ca81bb3c6f160c39df0f8aba8",
      });

      window.ShopifyBuy.UI.onReady(client).then((ui) => {
        if (cancelled) return;
        ui.createComponent("product", {
          id: "9428000047362",
          node,
          moneyFormat: "%24%7B%7Bamount%7D%7D",
          options: OPTIONS,
        });
        setLoaded(true);
      });
    }

    function loadScript() {
      const existing = document.querySelector<HTMLScriptElement>(`script[src="${SCRIPT_URL}"]`);
      if (existing) {
        existing.addEventListener("load", () => { initShopify(); setLoaded(true); });
        if (window.ShopifyBuy) { initShopify(); setLoaded(true); }
        return;
      }
      const script = document.createElement("script");
      script.async = true;
      script.src = SCRIPT_URL;
      script.onload = () => {
        initShopify();
        setLoaded(true);
      };
      (document.head || document.body).appendChild(script);
    }

    if (window.ShopifyBuy && window.ShopifyBuy.UI) {
      initShopify();
      // Defer setState out of effect body to satisfy react-hooks and avoid potential cascading renders (perf)
      setTimeout(() => setLoaded(true), 0);
    } else {
      loadScript();
    }

    return () => {
      cancelled = true;
    };
  }, [domId]);

  return (
    <div className={className}>
      <div id={domId} ref={nodeRef} />
      {!loaded && (
        <div className="pointer-events-none mt-1 flex h-11 items-center justify-center rounded-lg border border-white/8 bg-[#141717] px-5 text-xs font-mono-data uppercase tracking-[1.5px] text-silver/40">
          LOADING SECURE CHECKOUT…
        </div>
      )}
    </div>
  );
}
