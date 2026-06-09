import { AnnouncementBar } from "@/components/ui/announcement-bar";
import { Footer } from "@/components/ui/footer";
import { MetaPixel } from "@/components/ui/meta-pixel";
import { MobileMenuProvider } from "@/components/ui/mobile-menu-context";
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
    default: "Focus Mode | Best All-Natural Focus Supplement — 6+ Hour Clean Focus, Zero Crash",
    template: "%s | Focus Mode",
  },
  description:
    "Buy the best all-natural focus supplement for 6+ hours of crash-free mental clarity. Clinical Ginkgo Biloba 24% flavones + Red Asian Ginseng 7% ginsenosides. 60 capsules, 30-day supply. Zero fillers, zero caffeine, zero crash. USA made. 60% off + 30-day guarantee.",
  applicationName: SITE.name,
  keywords: [
    "focus supplement",
    "daily greens powder",
    "whole plant greens",
    "superfood greens",
    "best focus supplement",
    "nootropic for focus and productivity",
    "crash free focus supplement",
    "brain fog supplement",
    "ginkgo biloba ginseng focus",
    "Focus Mode supplement",
    "mental clarity supplement",
    "focus for entrepreneurs professionals students",
    "natural brain booster",
    "all natural energy supplement",
    "straight from nature supplement",
    "clean focus no crash",
    "6 hour focus no crash",
    "clinical focus formula",
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
    title: "Focus Mode | Best All-Natural Focus Supplement — 6+ Hour Clean Focus, Zero Crash",
    description:
      "Buy the best all-natural focus supplement. 6+ hours of crash-free mental clarity with clinical Ginkgo Biloba 24% flavones + Red Asian Ginseng 7% ginsenosides. 60 capsules. Zero fillers, zero caffeine. USA made. 60% off + 30-day guarantee.",
    url: SITE.url,
    images: [
      { url: "/og/Front.png", width: 1448, height: 1086, alt: "Focus Mode — Elite focus supplement, no crash, Atlanta made" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "#1 All-Natural Focus Supplement | 6+ Hours Clean Focus, Zero Crash | Focus Mode",
    description: "Buy the #1 all-natural focus supplement with clinical Ginkgo Biloba + Red Asian Ginseng. 6+ hours crash-free mental clarity. 60 capsules. Zero fillers, zero caffeine. USA made. 60% off + 30-day guarantee.",
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
      name: "Focus Mode Focus Supplement",
      image: [
        `${SITE.url}/products/focus-mode-nootropic-supplement-bottle.png`,
        `${SITE.url}/products/focus-mode-brain-booster-bottles.png`,
      ],
      description: SITE.description,
      brand: { "@type": "Brand", name: SITE.brand },
      sku: "FM-60CAP",
      offers: {
        "@type": "Offer",
        url: "/shop",
        priceCurrency: SITE.currency,
        price: SITE.price,
        availability: "https://schema.org/InStock",
        seller: { "@id": `${SITE.url}/#organization` },
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "127",
        bestRating: "5",
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": `${SITE.url}/#localbusiness`,
      name: SITE.legalName,
      url: SITE.url,
      logo: `${SITE.url}/logo.png`,
      image: `${SITE.url}/logo.png`,
      description: "Atlanta-based focus supplement and cognitive performance formula by Stackmode Network. Clean, crash-free mental clarity for high-performers.",
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
      </body>
    </html>
  );
}
