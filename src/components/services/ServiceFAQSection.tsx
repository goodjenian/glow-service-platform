import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";

interface FAQ {
  question: string;
  answer: string;
}

interface ServiceFAQSectionProps {
  faqs: FAQ[];
  accentColor?: string;
}

export function ServiceFAQSection({ faqs, accentColor = "text-accent" }: ServiceFAQSectionProps) {
  const { t } = useLanguage();

  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-foreground">{t("faq.title")}</span>{" "}
            <span className={accentColor}>{t("faq.titleHighlight")}</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background rounded-xl border border-border/50 px-6 data-[state=open]:shadow-lg transition-shadow"
              >
                <AccordionTrigger className="text-left hover:no-underline py-5 gap-4">
                  <span className="font-semibold text-base">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
