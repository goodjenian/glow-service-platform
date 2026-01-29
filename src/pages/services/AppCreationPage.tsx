import { ServicePageLayout } from "@/components/ServicePageLayout";
import { Smartphone } from "lucide-react";

const features = [
  {
    title: "Full-Stack Applications",
    description: "Build complete web applications with database, authentication, and backend logic using Base44's powerful no-code platform.",
  },
  {
    title: "Rapid Prototyping",
    description: "Go from idea to working prototype in hours, not weeks. Perfect for validating concepts and MVPs before major investment.",
  },
  {
    title: "AI-Powered Development",
    description: "Leverage AI assistance to generate app components, workflows, and logic. Describe what you need and watch it come to life.",
  },
  {
    title: "Database Integration",
    description: "Built-in database management for storing and managing your application data without complex backend configuration.",
  },
  {
    title: "User Authentication",
    description: "Secure login, signup, and user management out of the box. Support for multiple auth methods and user roles.",
  },
  {
    title: "API Integrations",
    description: "Connect your app to external services, payment gateways, and third-party APIs for enhanced functionality.",
  },
];

const benefits = [
  "Build functional apps 10x faster than traditional development",
  "No coding skills required—we handle all technical aspects",
  "Scalable infrastructure that grows with your business",
  "Seamless integration with your existing tools and workflows",
  "Ongoing support and feature updates included",
  "Perfect complement to our Site Express frontend services",
];

export default function AppCreationPage() {
  return (
    <ServicePageLayout
      title="App Creation"
      subtitle="Full-Stack Apps Powered by Base44"
      description="Transform your business ideas into powerful web applications. We build complete full-stack apps with databases, user auth, and AI features using Base44's cutting-edge platform."
      icon={Smartphone}
      features={features}
      benefits={benefits}
      ctaText="Build Your App"
      relatedServices={[
        { name: "Site Express", href: "/services/site-express", description: "Frontend development with Lovable" },
        { name: "AI Agents", href: "/services/ai-agents", description: "Automation & sales AI with n8n" },
      ]}
    />
  );
}
