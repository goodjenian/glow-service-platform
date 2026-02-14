import { ServicePageLayout } from "@/components/ServicePageLayout";
import { Search } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function SEOServicesPage() {
  const { t, language } = useLanguage();

  const features = [
    { title: t("seo.feature1.title"), description: t("seo.feature1.desc") },
    { title: t("seo.feature2.title"), description: t("seo.feature2.desc") },
    { title: t("seo.feature3.title"), description: t("seo.feature3.desc") },
    { title: t("seo.feature4.title"), description: t("seo.feature4.desc") },
    { title: t("seo.feature5.title"), description: t("seo.feature5.desc") },
    { title: t("seo.feature6.title"), description: t("seo.feature6.desc") },
  ];

  const benefits = [
    t("seo.benefit1"),
    t("seo.benefit2"),
    t("seo.benefit3"),
    t("seo.benefit4"),
    t("seo.benefit5"),
    t("seo.benefit6"),
  ];

  const strategies = [
    { title: t("seo.strategy1.title"), description: t("seo.strategy1.desc") },
    { title: t("seo.strategy2.title"), description: t("seo.strategy2.desc") },
    { title: t("seo.strategy3.title"), description: t("seo.strategy3.desc") },
    { title: t("seo.strategy4.title"), description: t("seo.strategy4.desc") },
  ];

  const results = [
    { metric: t("seo.result1.metric"), description: t("seo.result1.desc") },
    { metric: t("seo.result2.metric"), description: t("seo.result2.desc") },
    { metric: t("seo.result3.metric"), description: t("seo.result3.desc") },
    { metric: t("seo.result4.metric"), description: t("seo.result4.desc") },
  ];

  const faqs = [
    { question: t("seo.faq.q1"), answer: t("seo.faq.a1") },
    { question: t("seo.faq.q2"), answer: t("seo.faq.a2") },
    { question: t("seo.faq.q3"), answer: t("seo.faq.a3") },
  ];

  return (
    <ServicePageLayout
      title={t("seo.title")}
      metaTitle={language === "pt" ? "Serviços de SEO - Estratégia Orgânica Avançada | GoodySEO" : "SEO Services - Advanced Organic Strategy | GoodySEO"}
      metaDescription={language === "pt" ? "Serviços profissionais de SEO para empresas SaaS e E-commerce. Estratégias data-driven para aumentar tráfego orgânico e conversões." : "Professional SEO services for SaaS and E-commerce. Data-driven strategies to boost organic traffic and conversions."}
      subtitle={t("seo.subtitle")}
      description={t("seo.desc")}
      icon={Search}
      features={features}
      benefits={benefits}
      ctaText={t("seo.cta")}
      serviceColor="blue"
      serviceName="SEO Services"
      importance={t("seo.importance")}
      strategies={strategies}
      results={results}
      faqs={faqs}
      relatedServices={[
        { name: t("nav.geo"), href: "/services/geo", description: "AI search visibility for LLMs" },
        { name: t("nav.aiAgents"), href: "/services/ai-agents", description: "Automate SEO tasks" },
      ]}
    />
  );
}
