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
      relatedServices={[
        { name: t("nav.appCreation"), href: "/services/app-creation", description: "Full-stack apps with Base44" },
        { name: t("nav.seo"), href: "/services/seo", description: "Optimize your new site for search" },
      ]}
    />
  );
}
