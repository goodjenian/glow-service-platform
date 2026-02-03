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
      relatedServices={[
        { name: t("nav.siteExpress"), href: "/services/site-express", description: "Fast frontend development" },
        { name: t("nav.seo"), href: "/services/seo", description: "Optimize your organic presence" },
      ]}
    />
  );
}
