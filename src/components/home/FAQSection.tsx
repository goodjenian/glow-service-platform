import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";

export function FAQSection() {
  const { t } = useLanguage();

  const faqs = [
    {
      question: t("faq.home.q1"),
      answer: t("faq.home.a1"),
    },
    {
      question: t("faq.home.q2"),
      answer: t("faq.home.a2"),
    },
    {
      question: t("faq.home.q3"),
      answer: t("faq.home.a3"),
    },
    {
      question: t("faq.home.q4"),
      answer: t("faq.home.a4"),
    },
    {
      question: t("faq.home.q5"),
      answer: t("faq.home.a5"),
    },
    {
      question: t("faq.home.q6"),
      answer: t("faq.home.a6"),
    },
    {
      question: t("faq.home.q7"),
      answer: t("faq.home.a7"),
    },
    {
      question: t("faq.home.q8"),
      answer: t("faq.home.a8"),
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-foreground">{t("faq.title")}</span>{" "}
            <span className="text-accent">{t("faq.titleHighlight")}</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="grid md:grid-cols-2 gap-4">
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
