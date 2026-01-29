import { ServicePageLayout } from "@/components/ServicePageLayout";
import { Sparkles } from "lucide-react";

const features = [
  {
    title: "LLM Visibility Audit",
    description: "Analyze how AI systems like ChatGPT, Perplexity, and Claude perceive and reference your brand and content.",
  },
  {
    title: "Entity Enrichment",
    description: "Strengthen your brand's knowledge graph presence to improve recognition by generative AI systems.",
  },
  {
    title: "Schema Enhancement",
    description: "Advanced structured data implementation designed specifically for AI consumption and understanding.",
  },
  {
    title: "LLM.txt Configuration",
    description: "Configure machine-readable instructions that guide AI models on how to interact with your content.",
  },
  {
    title: "AI Tracking & Analytics",
    description: "Monitor and measure your share of visibility in AI-generated responses and recommendations.",
  },
  {
    title: "Content Optimization for AI",
    description: "Restructure content to be more digestible and citable by large language models.",
  },
];

const benefits = [
  "Future-proof your SEO for the AI-first search landscape",
  "Increase brand mentions in AI-generated responses",
  "Improve entity recognition across AI platforms",
  "Stay ahead of competitors in generative search",
  "Detailed visibility reports for AI systems",
  "Ongoing optimization as AI search evolves",
];

export default function GEOPage() {
  return (
    <ServicePageLayout
      title="GEO Optimization"
      subtitle="Generative Engine Optimization"
      description="Future-proof your SEO with strategies designed for AI search visibility. Schema, LLM.txt, entity enrichment, and tracking to increase your share of search in AI-driven results."
      icon={Sparkles}
      features={features}
      benefits={benefits}
      ctaText="Start Your GEO Audit"
    />
  );
}
