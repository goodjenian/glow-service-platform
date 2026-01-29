import { ServicePageLayout } from "@/components/ServicePageLayout";
import { Zap } from "lucide-react";

const features = [
  {
    title: "Rapid Development",
    description: "Get your professional website live in days, not months. We use cutting-edge tools like Lovable for accelerated delivery.",
  },
  {
    title: "Modern Design",
    description: "Clean, professional aesthetics that reflect your brand identity and convert visitors into customers.",
  },
  {
    title: "Responsive Layouts",
    description: "Perfect display across all devices—desktop, tablet, and mobile—with no compromises on user experience.",
  },
  {
    title: "SEO-Ready Structure",
    description: "Built with search engines in mind from day one. Proper semantic HTML, meta tags, and performance optimization.",
  },
  {
    title: "Performance Focused",
    description: "Lightning-fast load times with optimized assets, lazy loading, and modern web technologies.",
  },
  {
    title: "Easy Maintenance",
    description: "Clean, well-documented code that's easy to update and maintain as your business grows.",
  },
];

const benefits = [
  "Go live in days instead of months",
  "No coding knowledge required from your side",
  "Built-in SEO best practices",
  "Modern, conversion-focused design",
  "Mobile-first responsive layouts",
  "Ongoing support and updates available",
];

export default function SiteExpressPage() {
  return (
    <ServicePageLayout
      title="Site Express"
      subtitle="Rapid Frontend Development"
      description="Professional website development at lightning speed. We create beautiful, responsive sites using modern technologies like Lovable to get you online faster."
      icon={Zap}
      features={features}
      benefits={benefits}
      ctaText="Launch Your Site Fast"
    />
  );
}
