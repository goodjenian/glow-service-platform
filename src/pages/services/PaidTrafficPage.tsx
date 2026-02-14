import { ServicePageLayout } from "@/components/ServicePageLayout";
import { Target } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function PaidTrafficPage() {
  const { t, language } = useLanguage();

  const features = [
    { title: t("paidTraffic.feature1.title"), description: t("paidTraffic.feature1.desc") },
    { title: t("paidTraffic.feature2.title"), description: t("paidTraffic.feature2.desc") },
    { title: t("paidTraffic.feature3.title"), description: t("paidTraffic.feature3.desc") },
    { title: t("paidTraffic.feature4.title"), description: t("paidTraffic.feature4.desc") },
    { title: t("paidTraffic.feature5.title"), description: t("paidTraffic.feature5.desc") },
    { title: t("paidTraffic.feature6.title"), description: t("paidTraffic.feature6.desc") },
  ];

  const benefits = [
    t("paidTraffic.benefit1"),
    t("paidTraffic.benefit2"),
    t("paidTraffic.benefit3"),
    t("paidTraffic.benefit4"),
    t("paidTraffic.benefit5"),
    t("paidTraffic.benefit6"),
  ];

  const strategies = [
    { title: t("paidTraffic.strategy1.title"), description: t("paidTraffic.strategy1.desc") },
    { title: t("paidTraffic.strategy2.title"), description: t("paidTraffic.strategy2.desc") },
    { title: t("paidTraffic.strategy3.title"), description: t("paidTraffic.strategy3.desc") },
    { title: t("paidTraffic.strategy4.title"), description: t("paidTraffic.strategy4.desc") },
  ];

  const results = [
    { metric: t("paidTraffic.result1.metric"), description: t("paidTraffic.result1.desc") },
    { metric: t("paidTraffic.result2.metric"), description: t("paidTraffic.result2.desc") },
    { metric: t("paidTraffic.result3.metric"), description: t("paidTraffic.result3.desc") },
    { metric: t("paidTraffic.result4.metric"), description: t("paidTraffic.result4.desc") },
  ];

  const faqs = [
    { question: t("paidTraffic.faq.q1"), answer: t("paidTraffic.faq.a1") },
    { question: t("paidTraffic.faq.q2"), answer: t("paidTraffic.faq.a2") },
    { question: t("paidTraffic.faq.q3"), answer: t("paidTraffic.faq.a3") },
  ];

  return (
    <ServicePageLayout
      title={t("paidTraffic.title")}
      metaTitle={language === "pt" ? "Tráfego Pago - Google Ads & Meta Ads | GoodySEO" : "Paid Traffic - Google Ads & Meta Ads Management | GoodySEO"}
      metaDescription={language === "pt" ? "Gestão profissional de tráfego pago com Google Ads e Meta Ads. Maximize seu ROI com campanhas otimizadas por dados." : "Professional paid traffic management with Google Ads and Meta Ads. Maximize your ROI with data-optimized campaigns."}
      subtitle={t("paidTraffic.subtitle")}
      description={t("paidTraffic.desc")}
      icon={Target}
      features={features}
      benefits={benefits}
      ctaText={t("paidTraffic.cta")}
      serviceColor="teal"
      serviceName="Paid Traffic"
      importance={t("paidTraffic.importance")}
      strategies={strategies}
      results={results}
      faqs={faqs}
      relatedServices={[
        { name: t("nav.seo"), href: "/services/seo", description: "Organic visibility" },
        { name: t("nav.socialMedia"), href: "/services/social-media", description: "Social content creation" },
      ]}
    />
  );
}
