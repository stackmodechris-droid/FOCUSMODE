"use client";

import { SITE } from "@/lib/site";
import { Quote } from "lucide-react";
import { motion } from "motion/react";

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  itemReviewed: {
    "@type": "Product",
    "@id": `${SITE.url}/#product`,
    name: SITE.productTitle,
    image: `${SITE.url}/products/focus-mode-nootropic-supplement-bottle.png`,
    brand: { "@type": "Brand", name: SITE.brand },
  },
  author: { "@type": "Person", name: SITE.founder },
  reviewBody:
    "I built Focus Mode because I wanted a simple daily botanical routine for demanding work. I chose Ginkgo Biloba (24% flavones) and Red Asian Ginseng (7% ginsenosides) because the formula needed to feel focused, disciplined, and clean.",
  reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
  publisher: { "@type": "Organization", name: SITE.legalName },
};

export function Testimonials() {
  // Real founder story — no fake reviews. Focused on the ingredients, results, and shopping the product.
  return (
    <div className="mx-auto max-w-4xl">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <motion.figure
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="premium-card p-8 md:p-12 relative"
      >
        <Quote className="absolute right-8 top-8 h-10 w-10 text-neural/10" />

        <div className="text-[15px] md:text-[17px] leading-relaxed text-silver/85">
          I built Focus Mode because I wanted a simple daily botanical routine for demanding work, study, trading, and creation — something clean enough to fit a disciplined lifestyle.
          <br /><br />
          I locked in on two exact ingredients: <span className="text-white font-medium">Ginkgo Biloba (24% flavones)</span> and <span className="text-white font-medium">Red Asian Ginseng (7% ginsenosides)</span>, then kept the capsule clean, plant-based, and direct.
          <br /><br />
          Focus Mode is for people who take their output seriously. It is built for focus, powered by discipline, and made to pair with a routine that already includes sleep, hydration, nutrition, and hard work.
        </div>

        <figcaption className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="font-heading text-lg font-semibold text-white tracking-[-0.2px]">Stackmodechris</p>
            <p className="text-sm text-neural/80 tracking-[0.5px]">Founder, Focus Mode</p>
          </div>
          <div className="text-xs text-silver/50 md:text-right leading-tight">
            Built for focus • Powered by discipline<br />
            Botanical capsules for demanding daily routines
          </div>
        </figcaption>
      </motion.figure>
    </div>
  );
}
