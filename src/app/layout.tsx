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
    default: "Focus Mode — The #1 Focus Supplement for Sharper Minds & Peak Performance",
    template: "%s | Focus Mode",
  },
  description:
    "Think faster. Work smarter. Perform at your highest level. Focus Mode delivers 6+ hours of clean, crash-free mental clarity, reduced fatigue, and scientifically proven focus — for entrepreneurs, professionals, students, creators, and high-performers in business, school, medicine, and beyond — anyone who needs a sharper, more productive mind. 40% off. 30-day guarantee.",
  applicationName: SITE.name,
  keywords: [
    "best focus supplement",
    "nootropic for focus and productivity",
    "crash free focus supplement",
    "brain fog supplement",
    "Ginkgo Biloba Ginseng nootropic",
    "Focus Mode supplement",
    "mental clarity supplement",
    "focus for entrepreneurs professionals students",
    "Stackmode",
    "6 hour focus no crash",
    "clinical focus formula",
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
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon-32x32.png"],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: "Focus Mode — Elite Focus Supplement for Peak Performance",
    description:
      "6+ hours of clean, crash-free focus. Sharper mind, less fatigue, proven results for entrepreneurs, professionals, students, creators & high-performers.",
    url: SITE.url,
    images: [
      { url: "/og/og-1200x900.png", width: 1200, height: 900, alt: "Focus Mode — No AI, real focus supplement" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Focus Mode — The Best Focus Supplement for a Sharper, More Productive Mind",
    description: "6+ hours of clean, crash-free mental clarity. Reduces fatigue & headaches. Scientifically backed for peak performance in work, school, business & life.",
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
      alternateName: "Stackmode Network",
      url: SITE.url,
      logo: `${SITE.url}/logo.png`,
      founder: { "@type": "Person", name: SITE.founder },
      sameAs: [SITE.partnerUrl],
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
      name: "Focus Mode — Cognitive Performance Formula",
      image: [`${SITE.url}/products/1780438169847-generated-label-image-2.png`],
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
      },
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
