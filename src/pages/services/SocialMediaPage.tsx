import { ServicePageLayout } from "@/components/ServicePageLayout";
import { Share2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function SocialMediaPage() {
  const { t } = useLanguage();

  const features = [
    { title: t("socialMedia.feature1.title"), description: t("socialMedia.feature1.desc") },
    { title: t("socialMedia.feature2.title"), description: t("socialMedia.feature2.desc") },
    { title: t("socialMedia.feature3.title"), description: t("socialMedia.feature3.desc") },
    { title: t("socialMedia.feature4.title"), description: t("socialMedia.feature4.desc") },
    { title: t("socialMedia.feature5.title"), description: t("socialMedia.feature5.desc") },
    { title: t("socialMedia.feature6.title"), description: t("socialMedia.feature6.desc") },
  ];

  const benefits = [
    t("socialMedia.benefit1"),
    t("socialMedia.benefit2"),
    t("socialMedia.benefit3"),
    t("socialMedia.benefit4"),
    t("socialMedia.benefit5"),
    t("socialMedia.benefit6"),
  ];

  const strategies = [
    { title: t("socialMedia.strategy1.title"), description: t("socialMedia.strategy1.desc") },
    { title: t("socialMedia.strategy2.title"), description: t("socialMedia.strategy2.desc") },
    { title: t("socialMedia.strategy3.title"), description: t("socialMedia.strategy3.desc") },
    { title: t("socialMedia.strategy4.title"), description: t("socialMedia.strategy4.desc") },
  ];

  const results = [
    { metric: t("socialMedia.result1.metric"), description: t("socialMedia.result1.desc") },
    { metric: t("socialMedia.result2.metric"), description: t("socialMedia.result2.desc") },
    { metric: t("socialMedia.result3.metric"), description: t("socialMedia.result3.desc") },
    { metric: t("socialMedia.result4.metric"), description: t("socialMedia.result4.desc") },
  ];

  return (
    <ServicePageLayout
      title={t("socialMedia.title")}
      subtitle={t("socialMedia.subtitle")}
      description={t("socialMedia.desc")}
      icon={Share2}
      features={features}
      benefits={benefits}
      ctaText={t("socialMedia.cta")}
      serviceColor="rose"
      serviceName="Social Media"
      importance={t("socialMedia.importance")}
      strategies={strategies}
      results={results}
      relatedServices={[
        { name: t("nav.siteExpress"), href: "/services/site-express", description: "Fast frontend development" },
        { name: t("nav.seo"), href: "/services/seo", description: "Optimize your organic presence" },
      ]}
    />
  );
}
