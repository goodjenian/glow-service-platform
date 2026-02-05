import { ServicePageLayout } from "@/components/ServicePageLayout";
import { Bot } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AIAgentsPage() {
  const { t } = useLanguage();

  const features = [
    { title: t("aiAgents.feature1.title"), description: t("aiAgents.feature1.desc") },
    { title: t("aiAgents.feature2.title"), description: t("aiAgents.feature2.desc") },
    { title: t("aiAgents.feature3.title"), description: t("aiAgents.feature3.desc") },
    { title: t("aiAgents.feature4.title"), description: t("aiAgents.feature4.desc") },
    { title: t("aiAgents.feature5.title"), description: t("aiAgents.feature5.desc") },
    { title: t("aiAgents.feature6.title"), description: t("aiAgents.feature6.desc") },
  ];

  const benefits = [
    t("aiAgents.benefit1"),
    t("aiAgents.benefit2"),
    t("aiAgents.benefit3"),
    t("aiAgents.benefit4"),
    t("aiAgents.benefit5"),
    t("aiAgents.benefit6"),
  ];

  const strategies = [
    { title: t("aiAgents.strategy1.title"), description: t("aiAgents.strategy1.desc") },
    { title: t("aiAgents.strategy2.title"), description: t("aiAgents.strategy2.desc") },
    { title: t("aiAgents.strategy3.title"), description: t("aiAgents.strategy3.desc") },
    { title: t("aiAgents.strategy4.title"), description: t("aiAgents.strategy4.desc") },
  ];

  const results = [
    { metric: t("aiAgents.result1.metric"), description: t("aiAgents.result1.desc") },
    { metric: t("aiAgents.result2.metric"), description: t("aiAgents.result2.desc") },
    { metric: t("aiAgents.result3.metric"), description: t("aiAgents.result3.desc") },
    { metric: t("aiAgents.result4.metric"), description: t("aiAgents.result4.desc") },
  ];

  return (
    <ServicePageLayout
      title={t("aiAgents.title")}
      subtitle={t("aiAgents.subtitle")}
      description={t("aiAgents.desc")}
      icon={Bot}
      features={features}
      benefits={benefits}
      ctaText={t("aiAgents.cta")}
      serviceColor="green"
      serviceName="AI Agents"
      importance={t("aiAgents.importance")}
      strategies={strategies}
      results={results}
      relatedServices={[
        { name: t("nav.appCreation"), href: "/services/app-creation", description: "Full-stack apps with Base44" },
        { name: t("nav.seo"), href: "/services/seo", description: "Optimize your organic presence" },
      ]}
    />
  );
}
