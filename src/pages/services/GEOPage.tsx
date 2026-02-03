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
      relatedServices={[
        { name: t("nav.seo"), href: "/services/seo", description: "Traditional search optimization" },
        { name: t("nav.appCreation"), href: "/services/app-creation", description: "Full-stack apps with Base44" },
      ]}
    />
  );
}
