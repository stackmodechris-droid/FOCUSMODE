import { AnnouncementBar } from "@/components/ui/announcement-bar";
import { FloatingReviewButton } from "@/components/ui/floating-review-button";
import { Footer } from "@/components/ui/footer";
import { MetaPixel } from "@/components/ui/meta-pixel";
import { MobileMenuProvider } from "@/components/ui/mobile-menu-context";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { Navbar1 } from "@/components/ui/shadcnblocks-com-navbar1";
import { SITE } from "@/lib/site";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Sora } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Focus Mode | Botanical Focus Capsules & Plant-Based Daily Greens",
    template: "%s | Focus Mode",
  },
  description:
    "Shop Focus Mode Brain Boosting Capsules and Focus Mode Greens Energy Superfood Blend: botanical focus support, plant-based daily greens, 20+ superfoods, and USA manufacturing.",
  applicationName: SITE.name,
  keywords: [
    "focus supplement",
    "daily greens powder",
    "whole plant greens",
    "superfood greens",
    "botanical focus supplement",
    "nootropic for focus and productivity",
    "plant based greens powder",
    "greens energy superfood blend",
    "ginkgo biloba ginseng focus",
    "Focus Mode supplement",
    "mental clarity supplement",
    "focus for entrepreneurs professionals students",
    "natural brain booster",
    "all natural energy supplement",
    "straight from nature supplement",
    "daily wellness supplement",
    "memory mental clarity supplement",
    "botanical focus formula",
    "Atlanta focus supplement",
  ],
  authors: [{ name: SITE.legalName, url: SITE.partnerUrl }],
  creator: SITE.founder,
  publisher: SITE.legalName,
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
      { url: "/logo.png", sizes: "800x800", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon-32x32.png"],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: "Focus Mode | Botanical Focus Capsules & Plant-Based Daily Greens",
    description:
      "Shop Focus Mode Brain Boosting Capsules and Focus Mode Greens Energy Superfood Blend: botanical focus support, plant-based daily greens, 20+ superfoods, and USA manufacturing.",
    url: SITE.url,
    images: [
      { url: "/og/Front.png", width: 1448, height: 1086, alt: "Focus Mode botanical focus capsules and daily greens" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Focus Mode | Botanical Focus Capsules & Plant-Based Daily Greens",
    description: "Buy Focus Mode capsules and Focus Mode Greens Energy Superfood Blend. Botanical focus support plus plant-based daily greens.",
    images: ["/og/Front.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fde400",
  viewportFit: "cover",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE.url}/#organization`,
      name: SITE.legalName,
      alternateName: ["Stackmode Network", "Focus Mode"],
      url: SITE.url,
      logo: `${SITE.url}/logo.png`,
      founder: { "@type": "Person", name: SITE.founder },
      sameAs: [SITE.partnerUrl, "https://stackmode.net"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Atlanta",
        addressRegion: "GA",
        addressCountry: "US",
      },
      telephone: "+1-678-558-4327",
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      publisher: { "@id": `${SITE.url}/#organization` },
    },
    {
      "@type": "Product",
      "@id": `${SITE.url}/#product`,
      name: SITE.productTitle,
      image: [
        `${SITE.url}/products/focus-mode-nootropic-supplement-bottle.png`,
        `${SITE.url}/products/focus-mode-brain-booster-bottles.png`,
      ],
      description: SITE.description,
      brand: { "@type": "Brand", name: SITE.brand },
      sku: "FM-60CAP",
      offers: {
        "@type": "Offer",
        url: `${SITE.url}/shop`,
        priceCurrency: SITE.currency,
        price: String(SITE.price),
        availability: "https://schema.org/InStock",
        seller: { "@id": `${SITE.url}/#organization` },
        shippingDetails: {
          "@type": "OfferShippingDetails",
          shippingRate: {
            "@type": "MonetaryAmount",
            value: "5.99",
            currency: "USD",
          },
          shippingDestination: {
            "@type": "DefinedRegion",
            addressCountry: "US",
          },
          deliveryTime: {
            "@type": "ShippingDeliveryTime",
            handlingTime: {
              "@type": "QuantitativeValue",
              minValue: 0,
              maxValue: 1,
              unitCode: "DAY",
            },
            transitTime: {
              "@type": "QuantitativeValue",
              minValue: 2,
              maxValue: 5,
              unitCode: "DAY",
            },
          },
        },
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: 5,
        reviewCount: 1,
        bestRating: 5,
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": `${SITE.url}/#localbusiness`,
      name: SITE.legalName,
      url: SITE.url,
      logo: `${SITE.url}/logo.png`,
      image: `${SITE.url}/logo.png`,
      description: "Focus Mode botanical supplements by Stackmode Network: focus capsules, daily greens, plant-based ingredients, and USA manufacturing for high-performers.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Atlanta",
        addressRegion: "GA",
        addressCountry: "US",
      },
      telephone: "+1-678-558-4327",
      sameAs: [SITE.partnerUrl],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <link rel="preconnect" href="https://www.facebook.com" />
        <link rel="dns-prefetch" href="https://www.facebook.com" />
        <link rel="preconnect" href="https://sdks.shopifycdn.com" />
        <link rel="dns-prefetch" href="https://sdks.shopifycdn.com" />
        <link rel="preconnect" href="https://qg5zmc-rx.myshopify.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Meta Pixel Code — init + PageView in <head> for all pages */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${SITE.metaPixelId}');
fbq('track', 'PageView');`}
        </Script>
        {/* End Meta Pixel Code */}
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ScrollToTop />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-100 focus:rounded-lg focus:bg-bolt focus:px-4 focus:py-2 focus:text-black focus:font-bold"
        >
          Skip to content
        </a>
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element -- Required Meta Pixel noscript fallback (1x1 transparent tracking pixel for no-JS). Standard per Meta docs; cannot/should not use next/image for this. */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${SITE.metaPixelId}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
        <MetaPixel />

        <MobileMenuProvider>
          <AnnouncementBar />
          <Navbar1 />
          <main id="main-content" className="flex-1">{children}</main>
          <Footer />
        </MobileMenuProvider>

        <FloatingReviewButton />

        {/* Google Survey Opt-in */}
        <Script src="https://apis.google.com/js/platform.js?onload=renderOptIn" strategy="lazyOnload" />
        <Script id="google-survey-optin" strategy="lazyOnload">
          {`
            window.renderOptIn = function() {
              if (window.gapi && window.gapi.load) {
                window.gapi.load('surveyoptin', function() {
                  window.gapi.surveyoptin.render(
                    {
                      // REQUIRED FIELDS
                      "merchant_id": 5808927323,
                      "order_id": "ORDER_ID",
                      "email": "CUSTOMER_EMAIL",
                      "delivery_country": "US",
                      "estimated_delivery_date": new Date().toISOString().split('T')[0],

                      // OPTIONAL FIELDS
                      "products": [{"gtin":"GTIN1"}, {"gtin":"GTIN2"}]
                    });
                });
              }
            }
          `}
        </Script>

        {/* Google Merchant Widget */}
        <Script src="https://www.gstatic.com/shopping/merchant/merchantwidget.js" strategy="lazyOnload" />
        <Script id="google-merchant-widget" strategy="lazyOnload">
          {`
            if (typeof window !== 'undefined') {
              window.addEventListener('load', function () {
                if (window.merchantwidget) {
                  window.merchantwidget.start({
                       merchant_id: 5808927323,
                       position: 'BOTTOM_RIGHT'
                  });
                }
              });
            }
          `}
        </Script>
      </body>
    </html>
  );
}
