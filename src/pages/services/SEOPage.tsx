import { ServicePageLayout } from "@/components/ServicePageLayout";
import { Search } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function SEOServicesPage() {
  const { t } = useLanguage();

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

  return (
    <ServicePageLayout
      title={t("seo.title")}
      subtitle={t("seo.subtitle")}
      description={t("seo.desc")}
      icon={Search}
      features={features}
      benefits={benefits}
      ctaText={t("seo.cta")}
      serviceColor="blue"
      serviceName="SEO Services"
      relatedServices={[
        { name: t("nav.geo"), href: "/services/geo", description: "AI search visibility for LLMs" },
        { name: t("nav.aiAgents"), href: "/services/ai-agents", description: "Automate SEO tasks with n8n" },
      ]}
    />
  );
}
