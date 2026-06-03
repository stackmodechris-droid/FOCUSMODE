import type { Metadata } from "next";
import { SITE, FDA_DISCLAIMER } from "@/lib/site";
import { SectionLabel } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service and shipping information for Focus Mode by The Stackmode Network LLC.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

const SECTIONS = [
  {
    id: "agreement",
    h: "1. Agreement to Terms",
    p: [
      `By accessing or purchasing from Focus Mode, operated by ${SITE.legalName}, you agree to be bound by these Terms of Service. If you do not agree, please do not use this site or purchase our products.`,
    ],
  },
  {
    id: "products",
    h: "2. Products & Dietary Supplement Notice",
    p: [
      "Focus Mode is a dietary supplement intended for healthy adults aged 18 and over. It is not intended to diagnose, treat, cure, or prevent any disease.",
      FDA_DISCLAIMER,
      "Consult a licensed healthcare professional before use, especially if you are pregnant, nursing, taking medication, or have a medical condition.",
    ],
  },
  {
    id: "orders",
    h: "3. Orders & Payment",
    p: [
      "All orders are processed securely through Shopify. Prices are listed in USD and are subject to change without notice. We reserve the right to refuse or cancel any order.",
    ],
  },
  {
    id: "shipping",
    h: "4. Shipping Information",
    p: [
      "Focus Mode is manufactured in the USA. Orders typically ship within 1-3 business days. Delivery times vary by location. You will receive tracking information once your order ships.",
      "We are not responsible for carrier delays. Risk of loss passes to you upon delivery to the carrier.",
    ],
  },
  {
    id: "returns",
    h: "5. Returns & Refunds",
    p: [
      "If you are unsatisfied, contact us at " + SITE.email + " to discuss your options. Refund eligibility may depend on product condition and time since purchase.",
    ],
  },
  {
    id: "liability",
    h: "6. Limitation of Liability",
    p: [
      `To the fullest extent permitted by law, ${SITE.legalName} shall not be liable for any indirect, incidental, or consequential damages arising from the use of our products or website.`,
    ],
  },
];

export default function TermsPage() {
  return (
    <section className="hud-grid pt-16 md:pt-20">
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-20 md:px-8">
        <SectionLabel>Legal</SectionLabel>
        <h1 className="mt-5 font-heading text-4xl font-extrabold leading-tight text-white md:text-5xl">
          Terms of Service
        </h1>
        <p className="mt-4 font-mono-data text-xs uppercase tracking-widest text-silver/50">
          Last updated: {new Date().getFullYear()}
        </p>

        <div className="mt-12 space-y-10">
          {SECTIONS.map((s) => (
            <div key={s.id} id={s.id} className="scroll-mt-24">
              <h2 className="font-heading text-xl font-bold text-white">{s.h}</h2>
              {s.p.map((para, i) => (
                <p key={i} className="mt-3 text-sm leading-relaxed text-silver/70">{para}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
