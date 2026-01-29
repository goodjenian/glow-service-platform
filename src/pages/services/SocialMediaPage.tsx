import { ServicePageLayout } from "@/components/ServicePageLayout";
import { Share2 } from "lucide-react";

const features = [
  {
    title: "Video Content Creation",
    description: "Engaging short-form and long-form video content optimized for each platform—Instagram Reels, TikTok, YouTube, and more.",
  },
  {
    title: "Visual Graphics",
    description: "Eye-catching images, infographics, and carousel posts that stop the scroll and drive engagement.",
  },
  {
    title: "Brand Consistency",
    description: "Cohesive visual identity across all platforms that reinforces your brand and builds recognition.",
  },
  {
    title: "Content Calendar",
    description: "Strategic planning and scheduling to maintain consistent presence and maximize reach.",
  },
  {
    title: "Platform Optimization",
    description: "Content tailored to each platform's unique requirements, algorithms, and audience expectations.",
  },
  {
    title: "Trend Integration",
    description: "Stay relevant with timely content that leverages trending topics and formats for maximum visibility.",
  },
];

const benefits = [
  "Professional-quality content without the overhead",
  "Consistent posting schedule maintained",
  "Content optimized for each platform",
  "Increased engagement and follower growth",
  "Time savings on content creation",
  "Analytics-driven content optimization",
];

export default function SocialMediaPage() {
  return (
    <ServicePageLayout
      title="Social Media Content"
      subtitle="Visual Content Creation"
      description="Engaging videos and images that capture attention and convert followers into customers. Professional content creation for all your social channels."
      icon={Share2}
      features={features}
      benefits={benefits}
      ctaText="Elevate Your Social Presence"
    />
  );
}
