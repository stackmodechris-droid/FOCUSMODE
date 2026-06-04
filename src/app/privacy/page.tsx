import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { SectionLabel } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Focus Mode and The Stackmode Network LLC collect, use, and protect your personal information.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

const SECTIONS = [
  {
    h: "1. Information We Collect",
    p: [
      "We collect information you provide at checkout (name, email, shipping address, and payment details processed securely by Shopify) and analytics data such as pages visited and device type.",
    ],
  },
  {
    h: "2. How We Use Your Information",
    p: [
      "To process and ship your orders, provide customer support, send order updates, and — with your consent — marketing communications you can opt out of at any time.",
    ],
  },
  {
    h: "3. Payment Security",
    p: [
      "All payments are processed by Shopify using industry-standard encryption. We never store your full payment card details on our servers.",
    ],
  },
  {
    h: "4. Cookies & Analytics",
    p: [
      "We use cookies and similar technologies to operate the store, remember your cart, and understand site performance. You can control cookies through your browser settings.",
    ],
  },
  {
    h: "5. Sharing Your Information",
    p: [
      "We share data only with service providers necessary to fulfill your order (e.g., Shopify, shipping carriers) and as required by law. We do not sell your personal information.",
    ],
  },
  {
    h: "6. Your Rights",
    p: [
      `You may request access to, correction of, or deletion of your personal data by contacting ${SITE.email}.`,
    ],
  },
  {
    h: "7. Contact",
    p: [`Questions about this policy? Email us at ${SITE.email}. Learn more about us at ${SITE.partnerUrl}.`],
  },
];

export default function PrivacyPage() {
  return (
    <section className="pt-16 md:pt-20">
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-20 md:px-8">
        <SectionLabel>Legal</SectionLabel>
        <h1 className="mt-5 font-heading text-4xl font-extrabold leading-tight text-white md:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 font-mono-data text-xs uppercase tracking-widest text-silver/50">
          Last updated: {new Date().getFullYear()}
        </p>

        <div className="mt-12 space-y-10">
          {SECTIONS.map((s, idx) => (
            <div key={idx}>
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
