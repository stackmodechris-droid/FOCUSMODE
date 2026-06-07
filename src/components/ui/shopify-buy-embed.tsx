"use client";

import { useEffect, useRef } from "react";

const SHOPIFY_SCRIPT = "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
const DOMAIN = "qg5zmc-rx.myshopify.com";
const TOKEN = "8485ea7ca81bb3c6f160c39df0f8aba8";

let sdkPromise: Promise<void> | null = null;

function loadShopifySDK() {
  if (sdkPromise) return sdkPromise;
  if (typeof window !== "undefined" && (window as unknown as Record<string, unknown>).ShopifyBuy) {
    sdkPromise = Promise.resolve();
    return sdkPromise;
  }
  sdkPromise = new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.async = true;
    script.src = SHOPIFY_SCRIPT;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error("Shopify SDK failed to load"));
    document.head.appendChild(script);
  });
  return sdkPromise;
}

interface ShopifyEmbedProps {
  productId: string;
  options: Record<string, unknown>;
  nodeRef: React.RefObject<HTMLDivElement | null>;
}

function useShopifyEmbed({ productId, options, nodeRef }: ShopifyEmbedProps) {
  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;
    if (node.dataset.shopifyInit === "true") return;

    loadShopifySDK().then(() => {
      const currentNode = nodeRef.current;
      if (!currentNode) return;
      if (currentNode.dataset.shopifyInit === "true") return;
      currentNode.dataset.shopifyInit = "true";
      currentNode.innerHTML = "";

      const ShopifyBuy = (window as unknown as Record<string, unknown>).ShopifyBuy as Record<string, unknown> | undefined;
      if (!ShopifyBuy) return;
      const buildClient = ShopifyBuy.buildClient as (cfg: Record<string, string>) => unknown;
      const client = buildClient({ domain: DOMAIN, storefrontAccessToken: TOKEN });
      const onReady = (ShopifyBuy.UI as Record<string, unknown>).onReady as (client: unknown) => Promise<Record<string, (type: string, cfg: Record<string, unknown>) => void>>;
      onReady(client).then((ui) => {
        if (!nodeRef.current) return;
        ui.createComponent("product", {
          id: productId,
          node: currentNode,
          moneyFormat: "%24%7B%7Bamount%7D%7D",
          options,
        });
      });
    });

    return () => {
      if (node) {
        node.innerHTML = "";
        delete node.dataset.shopifyInit;
      }
    };
  }, [productId, options, nodeRef]);
}

const focusOptions = {
  product: {
    styles: {
      product: { "@media (min-width: 601px)": { "max-width": "100%", "margin-left": "0", "margin-bottom": "50px" }, "@media (max-width: 600px)": { "max-width": "100%", "margin-left": "0", "margin-bottom": "20px" }, "text-align": "left" },
      title: { "font-size": "26px", color: "#000000" },
      button: { "font-size": "18px", "padding-top": "17px", "padding-bottom": "17px", color: "#000000", ":hover": { color: "#000000", "background-color": "#dce600" }, "background-color": "#f4ff00", ":focus": { "background-color": "#dce600" }, "border-radius": "5px", "padding-left": "67px", "padding-right": "67px" },
      quantityInput: { "font-size": "18px", "padding-top": "17px", "padding-bottom": "17px" },
      price: { "font-weight": "bold", "font-size": "18px", color: "#000000" },
      compareAt: { "font-weight": "bold", "font-size": "15.299999999999999px", color: "#000000" },
      unitPrice: { "font-weight": "bold", "font-size": "15.299999999999999px", color: "#000000" }
    },
    layout: "horizontal",
    contents: { img: false, imgWithCarousel: true, button: false, buttonWithQuantity: true, description: false },
    width: "100%",
    text: { button: "Add to cart" }
  },
  productSet: { styles: { products: { "@media (min-width: 601px)": { "margin-left": "-20px" } } } },
  modalProduct: {
    contents: { img: false, imgWithCarousel: true, button: false, buttonWithQuantity: true, description: false },
    styles: {
      product: { "@media (min-width: 601px)": { "max-width": "100%", "margin-left": "0px", "margin-bottom": "0px" } },
      button: { "font-size": "18px", "padding-top": "17px", "padding-bottom": "17px", color: "#000000", ":hover": { color: "#000000", "background-color": "#dce600" }, "background-color": "#f4ff00", ":focus": { "background-color": "#dce600" }, "border-radius": "5px", "padding-left": "67px", "padding-right": "67px" },
      quantityInput: { "font-size": "18px", "padding-top": "17px", "padding-bottom": "17px" },
      title: { "font-family": "Helvetica Neue, sans-serif", "font-weight": "bold", "font-size": "26px", color: "#4c4c4c" },
      price: { "font-family": "Helvetica Neue, sans-serif", "font-weight": "normal", "font-size": "18px", color: "#4c4c4c" },
      compareAt: { "font-family": "Helvetica Neue, sans-serif", "font-weight": "normal", "font-size": "15.299999999999999px", color: "#4c4c4c" },
      unitPrice: { "font-family": "Helvetica Neue, sans-serif", "font-weight": "normal", "font-size": "15.299999999999999px", color: "#4c4c4c" }
    },
    text: { button: "Add to cart" }
  },
  option: { styles: { label: { "font-weight": "bold", color: "#ffffff" }, select: { "font-weight": "bold" } } },
  cart: {
    styles: {
      button: { "font-size": "18px", "padding-top": "17px", "padding-bottom": "17px", color: "#000000", ":hover": { color: "#000000", "background-color": "#dce600" }, "background-color": "#f4ff00", ":focus": { "background-color": "#dce600" }, "border-radius": "5px" },
      title: { color: "#ffffff" }, header: { color: "#ffffff" }, lineItems: { color: "#ffffff" }, subtotalText: { color: "#ffffff" }, subtotal: { color: "#ffffff" }, notice: { color: "#ffffff" }, currency: { color: "#ffffff" }, close: { color: "#ffffff", ":hover": { color: "#ffffff" } }, empty: { color: "#ffffff" }, noteDescription: { color: "#ffffff" }, discountText: { color: "#ffffff" }, discountIcon: { fill: "#ffffff" }, discountAmount: { color: "#ffffff" }, cart: { "background-color": "#000000" }, footer: { "background-color": "#000000" }
    },
    text: { total: "Subtotal", button: "Checkout" }
  },
  toggle: {
    styles: {
      toggle: { "background-color": "#f4ff00", ":hover": { "background-color": "#dce600" }, ":focus": { "background-color": "#dce600" } },
      count: { "font-size": "18px", color: "#000000", ":hover": { color: "#000000" } },
      iconPath: { fill: "#000000" }
    }
  },
  lineItem: {
    styles: {
      variantTitle: { color: "#ffffff" }, title: { color: "#ffffff" }, price: { color: "#ffffff" }, fullPrice: { color: "#ffffff" }, discount: { color: "#ffffff" }, discountIcon: { fill: "#ffffff" }, quantity: { color: "#ffffff" }, quantityIncrement: { color: "#ffffff", "border-color": "#ffffff" }, quantityDecrement: { color: "#ffffff", "border-color": "#ffffff" }, quantityInput: { color: "#ffffff", "border-color": "#ffffff" }
    }
  }
};

const greensOptions = {
  product: {
    styles: {
      product: { "@media (min-width: 601px)": { "max-width": "100%", "margin-left": "0", "margin-bottom": "50px" }, "@media (max-width: 600px)": { "max-width": "100%", "margin-left": "0", "margin-bottom": "20px" }, "text-align": "left" },
      title: { "font-size": "26px", color: "#000000" },
      button: { "font-size": "18px", "padding-top": "17px", "padding-bottom": "17px", color: "#000000", ":hover": { color: "#000000", "background-color": "#00e611" }, "background-color": "#00ff13", ":focus": { "background-color": "#00e611" }, "border-radius": "5px", "padding-left": "67px", "padding-right": "67px" },
      quantityInput: { "font-size": "18px", "padding-top": "17px", "padding-bottom": "17px" },
      price: { "font-weight": "bold", "font-size": "18px", color: "#000000" },
      compareAt: { "font-weight": "bold", "font-size": "15.299999999999999px", color: "#000000" },
      unitPrice: { "font-weight": "bold", "font-size": "15.299999999999999px", color: "#000000" }
    },
    layout: "horizontal",
    contents: { img: false, imgWithCarousel: true, button: false, buttonWithQuantity: true, description: false },
    width: "100%",
    text: { button: "Add to cart" }
  },
  productSet: { styles: { products: { "@media (min-width: 601px)": { "margin-left": "-20px" } } } },
  modalProduct: {
    contents: { img: false, imgWithCarousel: true, button: false, buttonWithQuantity: true, description: false },
    styles: {
      product: { "@media (min-width: 601px)": { "max-width": "100%", "margin-left": "0px", "margin-bottom": "0px" } },
      button: { "font-size": "18px", "padding-top": "17px", "padding-bottom": "17px", color: "#000000", ":hover": { color: "#000000", "background-color": "#00e611" }, "background-color": "#00ff13", ":focus": { "background-color": "#00e611" }, "border-radius": "5px", "padding-left": "67px", "padding-right": "67px" },
      quantityInput: { "font-size": "18px", "padding-top": "17px", "padding-bottom": "17px" },
      title: { "font-family": "Helvetica Neue, sans-serif", "font-weight": "bold", "font-size": "26px", color: "#4c4c4c" },
      price: { "font-family": "Helvetica Neue, sans-serif", "font-weight": "normal", "font-size": "18px", color: "#4c4c4c" },
      compareAt: { "font-family": "Helvetica Neue, sans-serif", "font-weight": "normal", "font-size": "15.299999999999999px", color: "#4c4c4c" },
      unitPrice: { "font-family": "Helvetica Neue, sans-serif", "font-weight": "normal", "font-size": "15.299999999999999px", color: "#4c4c4c" }
    },
    text: { button: "Add to cart" }
  },
  option: { styles: { label: { "font-weight": "bold", color: "#ffffff" }, select: { "font-weight": "bold" } } },
  cart: {
    styles: {
      button: { "font-size": "18px", "padding-top": "17px", "padding-bottom": "17px", color: "#000000", ":hover": { color: "#000000", "background-color": "#00e611" }, "background-color": "#00ff13", ":focus": { "background-color": "#00e611" }, "border-radius": "5px" },
      title: { color: "#ffffff" }, header: { color: "#ffffff" }, lineItems: { color: "#ffffff" }, subtotalText: { color: "#ffffff" }, subtotal: { color: "#ffffff" }, notice: { color: "#ffffff" }, currency: { color: "#ffffff" }, close: { color: "#ffffff", ":hover": { color: "#ffffff" } }, empty: { color: "#ffffff" }, noteDescription: { color: "#ffffff" }, discountText: { color: "#ffffff" }, discountIcon: { fill: "#ffffff" }, discountAmount: { color: "#ffffff" }, cart: { "background-color": "#000000" }, footer: { "background-color": "#000000" }
    },
    text: { total: "Subtotal", button: "Checkout" }
  },
  toggle: {
    styles: {
      toggle: { "background-color": "#00ff13", ":hover": { "background-color": "#00e611" }, ":focus": { "background-color": "#00e611" } },
      count: { "font-size": "18px", color: "#000000", ":hover": { color: "#000000" } },
      iconPath: { fill: "#000000" }
    }
  },
  lineItem: {
    styles: {
      variantTitle: { color: "#ffffff" }, title: { color: "#ffffff" }, price: { color: "#ffffff" }, fullPrice: { color: "#ffffff" }, discount: { color: "#ffffff" }, discountIcon: { fill: "#ffffff" }, quantity: { color: "#ffffff" }, quantityIncrement: { color: "#ffffff", "border-color": "#ffffff" }, quantityDecrement: { color: "#ffffff", "border-color": "#ffffff" }, quantityInput: { color: "#ffffff", "border-color": "#ffffff" }
    }
  }
};

export function ShopifyFocusEmbed() {
  const nodeRef = useRef<HTMLDivElement>(null);
  useShopifyEmbed({ productId: "9428000047362", options: focusOptions as unknown as Record<string, unknown>, nodeRef });
  return <div ref={nodeRef} className="fm-shopify-embed w-full" />;
}

export function ShopifyGreensEmbed() {
  const nodeRef = useRef<HTMLDivElement>(null);
  useShopifyEmbed({ productId: "9451359273218", options: greensOptions as unknown as Record<string, unknown>, nodeRef });
  return <div ref={nodeRef} className="fm-shopify-embed w-full" />;
}
