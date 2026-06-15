import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import { SectionLabel } from "@/components/ui/reveal";

export const metadata: Metadata = {
  title: "Return & Refund Policy",
  description: `Return and refund policies for ${SITE.name}. Details on our 30-day non-delivery guarantee.`,
  alternates: { canonical: "/returns" },
  robots: { index: true, follow: true },
};

const SECTIONS = [
  {
    h: "1. Overview",
    p: [
      `At ${SITE.legalName} (operating as ${SITE.name}), we strive to ensure our customers are completely satisfied. This Return Policy explicitly outlines the terms and conditions under which returns and refunds are processed, in compliance with standard consumer protection guidelines.`,
    ],
  },
  {
    h: "2. Return Window & Eligibility (Non-Delivery)",
    p: [
      "We offer a full refund if your order has not been delivered within 30 days of the purchase date. For health and safety reasons, we cannot accept returns of supplement products once they have been delivered. Therefore, returns or refunds are exclusively granted in the event of non-delivery within this 30-day timeframe.",
      "• Return Window: 30 days from the date of purchase.",
      "• Item Condition: Not applicable (Returns only accepted for non-delivery).",
      "• Return Method: By email (Contact our support team).",
    ],
  },
  {
    h: "3. Return Fees & Restocking Fees",
    p: [
      "We believe in a transparent pricing policy.",
      "• Restocking Fee: No restocking fee. ($0.00)",
      "• Return Shipping Fee: Not applicable (Refunds issued for non-delivery).",
    ],
  },
  {
    h: "4. How to Request a Return or Refund",
    p: [
      `If you meet the eligibility criteria (non-delivery after 30 days), you can request a refund by contacting us directly. Please provide your order details and the email address associated with the purchase.`,
      `Email: ${SITE.email}`,
    ],
  },
  {
    h: "5. Processing Time",
    p: [
      "Once your refund request is received and reviewed, we will send you an email to notify you of the approval or rejection of your refund. If approved, your refund will be processed immediately, and a credit will automatically be applied to your credit card or original method of payment within 5-10 business days, depending on your card issuer's policies.",
    ],
  },
];

export default function ReturnsPage() {
  return (
    <section className="pt-16 md:pt-20">
      <div className="mx-auto max-w-3xl px-5 py-16 md:py-20 md:px-8">
        <SectionLabel>Legal</SectionLabel>
        <h1 className="mt-5 font-heading text-4xl font-extrabold leading-tight text-white md:text-5xl">
          Return & Refund Policy
        </h1>
        <p className="mt-4 font-mono-data text-xs uppercase tracking-widest text-silver/50">
          Last updated: {new Date().getFullYear()}
        </p>

        <div className="mt-12 space-y-10">
          {SECTIONS.map((s, idx) => (
            <div key={idx}>
              <h2 className="font-heading text-xl font-bold text-white">{s.h}</h2>
              {s.p.map((para, i) => (
                <p key={i} className="mt-3 text-sm leading-relaxed text-silver/70">
                  {para}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
