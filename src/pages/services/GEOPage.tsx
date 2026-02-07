import { ServicePageLayout } from "@/components/ServicePageLayout";
import { Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function GEOPage() {
  const { t } = useLanguage();

  const features = [
    { title: t("geo.feature1.title"), description: t("geo.feature1.desc") },
    { title: t("geo.feature2.title"), description: t("geo.feature2.desc") },
    { title: t("geo.feature3.title"), description: t("geo.feature3.desc") },
    { title: t("geo.feature4.title"), description: t("geo.feature4.desc") },
    { title: t("geo.feature5.title"), description: t("geo.feature5.desc") },
    { title: t("geo.feature6.title"), description: t("geo.feature6.desc") },
  ];

  const benefits = [
    t("geo.benefit1"),
    t("geo.benefit2"),
    t("geo.benefit3"),
    t("geo.benefit4"),
    t("geo.benefit5"),
    t("geo.benefit6"),
  ];

  const strategies = [
    { title: t("geo.strategy1.title"), description: t("geo.strategy1.desc") },
    { title: t("geo.strategy2.title"), description: t("geo.strategy2.desc") },
    { title: t("geo.strategy3.title"), description: t("geo.strategy3.desc") },
    { title: t("geo.strategy4.title"), description: t("geo.strategy4.desc") },
  ];

  const results = [
    { metric: t("geo.result1.metric"), description: t("geo.result1.desc") },
    { metric: t("geo.result2.metric"), description: t("geo.result2.desc") },
    { metric: t("geo.result3.metric"), description: t("geo.result3.desc") },
    { metric: t("geo.result4.metric"), description: t("geo.result4.desc") },
  ];

  const faqs = [
    { question: t("geo.faq.q1"), answer: t("geo.faq.a1") },
    { question: t("geo.faq.q2"), answer: t("geo.faq.a2") },
    { question: t("geo.faq.q3"), answer: t("geo.faq.a3") },
  ];

  return (
    <ServicePageLayout
      title={t("geo.title")}
      subtitle={t("geo.subtitle")}
      description={t("geo.desc")}
      icon={Sparkles}
      features={features}
      benefits={benefits}
      ctaText={t("geo.cta")}
      serviceColor="purple"
      serviceName="GEO Optimization"
      importance={t("geo.importance")}
      strategies={strategies}
      results={results}
      faqs={faqs}
      relatedServices={[
        { name: t("nav.seo"), href: "/services/seo", description: "Traditional search optimization" },
        { name: t("nav.aiAgents"), href: "/services/ai-agents", description: "Intelligent automation" },
      ]}
    />
  );
}
