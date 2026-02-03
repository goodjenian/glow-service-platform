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
      relatedServices={[
        { name: t("nav.appCreation"), href: "/services/app-creation", description: "Full-stack apps with Base44" },
        { name: t("nav.seo"), href: "/services/seo", description: "Optimize your organic presence" },
      ]}
    />
  );
}
