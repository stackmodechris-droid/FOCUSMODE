import { Footer } from "@/components/ui/footer";
import { MetaPixel } from "@/components/ui/meta-pixel";
import { Navbar1 } from "@/components/ui/shadcnblocks-com-navbar1";
import { SHOPIFY_CART_URL, SITE } from "@/lib/site";
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
    default: "Focus Supplement | Focus Mode — 6+ Hours Clean Focus, No Crash",
    template: "%s | Focus Mode",
  },
  description:
    "Focus supplement engineered for entrepreneurs, professionals, students & creators. 6+ hours of clean, crash-free mental clarity with Ginkgo Biloba (24% flavones) + Red Asian Ginseng (7% ginsenosides). Atlanta-based. 40% off. 30-day guarantee. No jitters, no caffeine.",
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
    "Stackmode focus supplement",
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
    title: "Focus Supplement | Focus Mode — Clean 6+ Hour Focus, No Crash",
    description:
      "The focus supplement for peak performers. 6+ hours clean mental clarity, no jitters, no crash. Ginkgo + Ginseng. Made for entrepreneurs, pros, students, creators. Atlanta-based Stackmode Network.",
    url: SITE.url,
    images: [
      { url: "/og/og-1200x900.png", width: 1448, height: 1086, alt: "Focus Mode — Elite focus supplement, no crash, Atlanta made" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Focus Supplement: 6+ Hours Clean Focus No Crash | Focus Mode",
    description: "Ginkgo Biloba + Red Asian Ginseng focus supplement. Sharper mind, zero fog, sustained performance for ambitious minds. Atlanta-based.",
    images: ["/og/og-1200x900.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: "#fde400",
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
        `${SITE.url}/products/1780438169847-generated-label-image-2.png`,
        `${SITE.url}/products/1780438169836-generated-label-image-3.png`,
      ],
      description: SITE.description,
      brand: { "@type": "Brand", name: SITE.brand },
      sku: "FM-60CAP",
      offers: {
        "@type": "Offer",
        url: SHOPIFY_CART_URL,
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
    {
      "@type": "FAQPage",
      "@id": `${SITE.url}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "How fast does Focus Mode work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most high-performers feel the brain fog lift within 20-30 minutes. Ginkgo Biloba increases oxygen delivery to neural pathways while Red Asian Ginseng ramps up dopamine and acetylcholine for fast, clean mental activation.",
          },
        },
        {
          "@type": "Question",
          name: "Will it give me jitters or a crash like caffeine?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Focus Mode contains zero synthetic stimulants and zero caffeine. You get 6+ hours of sustained, locked-in focus with no anxiety and no afternoon crash.",
          },
        },
        {
          "@type": "Question",
          name: "Who is Focus Mode designed for?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Entrepreneurs building businesses, professionals crushing deadlines, students mastering exams, creators writing and shipping, doctors and executives making critical calls under pressure, business leaders scaling, and anyone who needs a sharper, more productive mind without jitters or crashes.",
          },
        },
        {
          "@type": "Question",
          name: "How do I take it?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Take 2 capsules, twice daily. For maximum performance, take 20-30 minutes before your most important study session, meeting, exam, or deep-work block.",
          },
        },
        {
          "@type": "Question",
          name: "What's actually inside Focus Mode?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Two clinically-backed, antioxidant-rich ingredients: Ginkgo Biloba Leaf Extract (24% Flavones) for cerebral blood flow and mental clarity, and Red Asian Ginseng Extract (7% Ginsenosides) for dopamine support and stress resilience — in clean, plant-based capsules. Zero fillers.",
          },
        },
      ],
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
      className={`dark ${sora.variable} ${inter.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <head>
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

        <Navbar1 />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
