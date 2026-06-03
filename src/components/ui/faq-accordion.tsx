import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { FAQS } from "@/lib/site";

export function FaqAccordion({ withSchema = false }: { withSchema?: boolean }) {
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
            className="border-b border-white/10 last:border-b-0"
          >
            <AccordionTrigger className="py-5 font-heading text-[15px] font-semibold text-white hover:no-underline md:text-[17px] tracking-[-0.1px]">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-silver/70">
              <p className="text-[14.5px] leading-relaxed text-silver/65">{f.a}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
