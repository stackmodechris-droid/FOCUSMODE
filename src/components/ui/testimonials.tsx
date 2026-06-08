"use client";

import { Quote } from "lucide-react";
import { motion } from "motion/react";

export function Testimonials() {
  // Real founder story — no fake reviews. Focused on the ingredients, results, and shopping the product.
  return (
    <div className="mx-auto max-w-4xl">
      <motion.figure
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="premium-card p-8 md:p-12 relative"
      >
        <Quote className="absolute right-8 top-8 h-10 w-10 text-neural/10" />

        <div className="text-[15px] md:text-[17px] leading-relaxed text-silver/85">
          I built Focus Mode because I was the first customer. Mental fatigue was destroying my output — slow decisions, missed details, and the feeling my brain couldn&apos;t keep up.
          <br /><br />
          I locked in on two exact ingredients: <span className="text-white font-medium">Ginkgo Biloba (24% flavones)</span> for oxygen delivery and clarity, and <span className="text-white font-medium">Red Asian Ginseng (7% ginsenosides)</span> for dopamine support and sustained stamina.
          <br /><br />
          The difference was immediate. Afternoon fatigue disappeared. I could power through demanding work and creative marathons with sharp recall. My businesses scaled because my brain stopped being the bottleneck.
        </div>

        <figcaption className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="font-heading text-lg font-semibold text-white tracking-[-0.2px]">Stackmodechris</p>
            <p className="text-sm text-neural/80 tracking-[0.5px]">Founder, Focus Mode</p>
          </div>
          <div className="text-xs text-silver/50 md:text-right leading-tight">
            Eliminated mental fatigue • 8–10+ hrs locked focus daily<br />
            Scaled businesses &amp; protected long-term brain health
          </div>
        </figcaption>
      </motion.figure>
    </div>
  );
}
