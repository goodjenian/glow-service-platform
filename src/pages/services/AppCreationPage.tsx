import { ServicePageLayout } from "@/components/ServicePageLayout";
import { Smartphone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AppCreationPage() {
  const { t } = useLanguage();

  const features = [
    { title: t("appCreation.feature1.title"), description: t("appCreation.feature1.desc") },
    { title: t("appCreation.feature2.title"), description: t("appCreation.feature2.desc") },
    { title: t("appCreation.feature3.title"), description: t("appCreation.feature3.desc") },
    { title: t("appCreation.feature4.title"), description: t("appCreation.feature4.desc") },
    { title: t("appCreation.feature5.title"), description: t("appCreation.feature5.desc") },
    { title: t("appCreation.feature6.title"), description: t("appCreation.feature6.desc") },
  ];

  const benefits = [
    t("appCreation.benefit1"),
    t("appCreation.benefit2"),
    t("appCreation.benefit3"),
    t("appCreation.benefit4"),
    t("appCreation.benefit5"),
    t("appCreation.benefit6"),
  ];

  const strategies = [
    { title: t("appCreation.strategy1.title"), description: t("appCreation.strategy1.desc") },
    { title: t("appCreation.strategy2.title"), description: t("appCreation.strategy2.desc") },
    { title: t("appCreation.strategy3.title"), description: t("appCreation.strategy3.desc") },
    { title: t("appCreation.strategy4.title"), description: t("appCreation.strategy4.desc") },
  ];

  const results = [
    { metric: t("appCreation.result1.metric"), description: t("appCreation.result1.desc") },
    { metric: t("appCreation.result2.metric"), description: t("appCreation.result2.desc") },
    { metric: t("appCreation.result3.metric"), description: t("appCreation.result3.desc") },
    { metric: t("appCreation.result4.metric"), description: t("appCreation.result4.desc") },
  ];

  return (
    <ServicePageLayout
      title={t("appCreation.title")}
      subtitle={t("appCreation.subtitle")}
      description={t("appCreation.desc")}
      icon={Smartphone}
      features={features}
      benefits={benefits}
      ctaText={t("appCreation.cta")}
      serviceColor="teal"
      serviceName="App Creation"
      importance={t("appCreation.importance")}
      strategies={strategies}
      results={results}
      relatedServices={[
        { name: t("nav.siteExpress"), href: "/services/site-express", description: "Fast frontend development" },
        { name: t("nav.aiAgents"), href: "/services/ai-agents", description: "Intelligent automation with n8n" },
      ]}
    />
  );
}
