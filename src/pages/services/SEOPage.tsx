import { ServicePageLayout } from "@/components/ServicePageLayout";
import { Search } from "lucide-react";

const features = [
  {
    title: "Technical SEO Audit",
    description: "Comprehensive crawlability, indexing, and site architecture analysis. We identify and fix issues that prevent search engines from properly accessing your content.",
  },
  {
    title: "On-Page Optimization",
    description: "Keyword-focused titles, meta descriptions, and entity alignment. Get an easy-to-follow plan to maximize page visibility.",
  },
  {
    title: "Content Strategy",
    description: "Scalable, keyword-driven content strategies with structured briefings and publishing plans to grow traffic with clarity.",
  },
  {
    title: "Core Web Vitals",
    description: "Page speed optimization and user experience improvements that satisfy both visitors and search engine algorithms.",
  },
  {
    title: "Schema & Structured Data",
    description: "Rich snippets implementation to enhance your search listings and improve click-through rates.",
  },
  {
    title: "Link Profile Analysis",
    description: "Evaluate your backlink portfolio, identify toxic links, and develop strategies for quality link acquisition.",
  },
];

const benefits = [
  "Actionable audit reports with prioritized recommendations",
  "Implementation support for your technical team",
  "Monthly progress tracking and reporting",
  "Competitor analysis and benchmarking",
  "Keyword research and opportunity mapping",
  "Regular strategy reviews and optimization",
];

export default function SEOServicesPage() {
  return (
    <ServicePageLayout
      title="SEO Services"
      subtitle="Search Engine Optimization"
      description="Maximize your organic visibility with comprehensive Technical, On-Page, and Content SEO strategies that drive qualified traffic and business growth."
      icon={Search}
      features={features}
      benefits={benefits}
      ctaText="Get Your SEO Audit"
      relatedServices={[
        { name: "GEO Optimization", href: "/services/geo", description: "AI search visibility for LLMs" },
        { name: "AI Agents", href: "/services/ai-agents", description: "Automate SEO tasks with n8n" },
      ]}
    />
  );
}
