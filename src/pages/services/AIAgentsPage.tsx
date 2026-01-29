import { ServicePageLayout } from "@/components/ServicePageLayout";
import { Bot } from "lucide-react";

const features = [
  {
    title: "SEO Task Automation",
    description: "Automate repetitive SEO workflows like reporting, monitoring, and data collection with intelligent n8n integrations.",
  },
  {
    title: "AI Sales Agents",
    description: "Deploy conversational AI agents that qualify leads, answer questions, and guide prospects through your sales funnel 24/7.",
  },
  {
    title: "Custom Workflows",
    description: "Build tailored automation workflows that connect your tools and streamline your marketing operations.",
  },
  {
    title: "Lead Enrichment",
    description: "Automatically enrich and score leads using AI to prioritize high-value opportunities for your sales team.",
  },
  {
    title: "Content Automation",
    description: "Streamline content creation, distribution, and repurposing with AI-powered workflows.",
  },
  {
    title: "Analytics & Reporting",
    description: "Automated dashboards and reports that deliver insights directly to your inbox or Slack.",
  },
];

const benefits = [
  "Save hours on repetitive marketing tasks",
  "24/7 lead qualification and engagement",
  "Seamless integration with your existing tools",
  "Scalable automation that grows with you",
  "Custom solutions built for your needs",
  "Ongoing optimization and support",
];

export default function AIAgentsPage() {
  return (
    <ServicePageLayout
      title="AI Agents & Automation"
      subtitle="Intelligent Automation"
      description="Automate SEO tasks and deploy AI agents for sales and marketing with custom n8n workflows. Work smarter, not harder."
      icon={Bot}
      features={features}
      benefits={benefits}
      ctaText="Automate Your Marketing"
    />
  );
}
