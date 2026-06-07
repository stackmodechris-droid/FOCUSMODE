import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQS } from "@/lib/site";

export function FaqAccordion({ withSchema = false, variant = "dark" }: { withSchema?: boolean; variant?: "dark" | "light" }) {
  const isLight = variant === "light";
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="mx-auto max-w-3xl">
      {withSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      )}
      <Accordion type="single" collapsible className="gap-0">
        {FAQS.map((f, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className={isLight ? "border-b border-gray-200 last:border-b-0" : "border-b border-white/10 last:border-b-0"}
          >
            <AccordionTrigger className={`py-5 font-heading text-[15px] font-semibold hover:no-underline md:text-[17px] tracking-[-0.1px] ${isLight ? "text-gray-900 hover:text-gray-800" : "text-white"}`}>
              {f.q}
            </AccordionTrigger>
            <AccordionContent className={isLight ? "text-gray-600" : "text-silver/70"}>
              <p className={`text-[14.5px] leading-relaxed ${isLight ? "text-gray-600" : "text-silver/65"}`}>{f.a}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
