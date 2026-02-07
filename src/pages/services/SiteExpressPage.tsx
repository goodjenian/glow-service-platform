import { ServicePageLayout } from "@/components/ServicePageLayout";
import { Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function SiteExpressPage() {
  const { t } = useLanguage();

  const features = [
    { title: t("siteExpress.feature1.title"), description: t("siteExpress.feature1.desc") },
    { title: t("siteExpress.feature2.title"), description: t("siteExpress.feature2.desc") },
    { title: t("siteExpress.feature3.title"), description: t("siteExpress.feature3.desc") },
    { title: t("siteExpress.feature4.title"), description: t("siteExpress.feature4.desc") },
    { title: t("siteExpress.feature5.title"), description: t("siteExpress.feature5.desc") },
    { title: t("siteExpress.feature6.title"), description: t("siteExpress.feature6.desc") },
  ];

  const benefits = [
    t("siteExpress.benefit1"),
    t("siteExpress.benefit2"),
    t("siteExpress.benefit3"),
    t("siteExpress.benefit4"),
    t("siteExpress.benefit5"),
    t("siteExpress.benefit6"),
  ];

  const strategies = [
    { title: t("siteExpress.strategy1.title"), description: t("siteExpress.strategy1.desc") },
    { title: t("siteExpress.strategy2.title"), description: t("siteExpress.strategy2.desc") },
    { title: t("siteExpress.strategy3.title"), description: t("siteExpress.strategy3.desc") },
    { title: t("siteExpress.strategy4.title"), description: t("siteExpress.strategy4.desc") },
  ];

  const results = [
    { metric: t("siteExpress.result1.metric"), description: t("siteExpress.result1.desc") },
    { metric: t("siteExpress.result2.metric"), description: t("siteExpress.result2.desc") },
    { metric: t("siteExpress.result3.metric"), description: t("siteExpress.result3.desc") },
    { metric: t("siteExpress.result4.metric"), description: t("siteExpress.result4.desc") },
  ];

  const faqs = [
    { question: t("siteExpress.faq.q1"), answer: t("siteExpress.faq.a1") },
    { question: t("siteExpress.faq.q2"), answer: t("siteExpress.faq.a2") },
    { question: t("siteExpress.faq.q3"), answer: t("siteExpress.faq.a3") },
  ];

  return (
    <ServicePageLayout
      title={t("siteExpress.title")}
      subtitle={t("siteExpress.subtitle")}
      description={t("siteExpress.desc")}
      icon={Zap}
      features={features}
      benefits={benefits}
      ctaText={t("siteExpress.cta")}
      serviceColor="beige"
      serviceName="Site Express"
      importance={t("siteExpress.importance")}
      strategies={strategies}
      results={results}
      faqs={faqs}
      relatedServices={[
        { name: t("nav.paidTraffic"), href: "/services/paid-traffic", description: "Paid advertising" },
        { name: t("nav.seo"), href: "/services/seo", description: "Optimize your new site for search" },
      ]}
    />
  );
}
