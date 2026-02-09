import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { TestimonialSection } from "@/components/home/TestimonialSection";
import { FAQSection } from "@/components/home/FAQSection";
import { FreeAnalysisCTA } from "@/components/home/FreeAnalysisCTA";
import { WhyPartnerSection } from "@/components/home/WhyPartnerSection";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Search, 
  Sparkles, 
  Zap, 
  Bot, 
  Share2, 
  ArrowRight,
  DollarSign
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getWhatsAppUrl, getWhatsAppUrlPt } from "@/lib/whatsapp";


// Service color configs matching brand identity
const serviceColors = {
  seo: {
    bg: "bg-blue-500/15",
    icon: "text-blue-500",
    border: "group-hover:border-blue-500/30",
  },
  geo: {
    bg: "bg-purple-500/15",
    icon: "text-purple-500",
    border: "group-hover:border-purple-500/30",
  },
  siteExpress: {
    bg: "bg-amber-500/15",
    icon: "text-amber-500",
    border: "group-hover:border-amber-500/30",
  },
  paidTraffic: {
    bg: "bg-teal-500/15",
    icon: "text-teal-500",
    border: "group-hover:border-teal-500/30",
  },
  aiAgents: {
    bg: "bg-emerald-500/15",
    icon: "text-emerald-500",
    border: "group-hover:border-emerald-500/30",
  },
  socialMedia: {
    bg: "bg-rose-500/15",
    icon: "text-rose-500",
    border: "group-hover:border-rose-500/30",
  },
};

const Index = () => {
  const { language, t } = useLanguage();
  const whatsappUrl = language === "pt" ? getWhatsAppUrlPt() : getWhatsAppUrl();

  const services = [
    {
      title: t("services.seo.title"),
      description: t("services.seo.desc"),
      icon: Search,
      href: "/services/seo",
      colors: serviceColors.seo,
    },
    {
      title: t("services.geo.title"),
      description: t("services.geo.desc"),
      icon: Sparkles,
      href: "/services/geo",
      colors: serviceColors.geo,
    },
    {
      title: t("services.siteExpress.title"),
      description: t("services.siteExpress.desc"),
      icon: Zap,
      href: "/services/site-express",
      colors: serviceColors.siteExpress,
    },
    {
      title: t("services.paidTraffic.title"),
      description: t("services.paidTraffic.desc"),
      icon: DollarSign,
      href: "/services/paid-traffic",
      colors: serviceColors.paidTraffic,
    },
    {
      title: t("services.aiAgents.title"),
      description: t("services.aiAgents.desc"),
      icon: Bot,
      href: "/services/ai-agents",
      colors: serviceColors.aiAgents,
    },
    {
      title: t("services.socialMedia.title"),
      description: t("services.socialMedia.desc"),
      icon: Share2,
      href: "/services/social-media",
      colors: serviceColors.socialMedia,
    },
  ];

  return (
    <Layout>
      <HeroSection />

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t("services.title")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("services.subtitle")}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link key={index} to={service.href} className="group">
                <Card className={`h-full hover-lift border-border/50 bg-gradient-card transition-all duration-300 ${service.colors.border}`}>
                  <CardHeader>
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${service.colors.bg} mb-4`}>
                      <service.icon className={`h-6 w-6 ${service.colors.icon}`} />
                    </div>
                    <CardTitle className="group-hover:text-accent transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground text-base">
                      {service.description}
                    </CardDescription>
                    <div className="mt-4 flex items-center text-accent font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      {t("services.learnMore")} <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <WhyPartnerSection />


      {/* Free Analysis CTA */}
      <FreeAnalysisCTA />

      {/* Testimonial Section */}
      <TestimonialSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="bg-card rounded-3xl p-8 md:p-12 lg:p-16 text-center relative overflow-hidden border border-border/30">
            <div className="relative">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                {t("cta.title")}
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                {t("cta.desc")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="default" size="xl" asChild>
                  <a href="https://calendly.com/business-goodyseo/30min" target="_blank" rel="noopener noreferrer">
                    {t("cta.button")}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button variant="contact" size="xl" asChild>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    {t("hero.whatsapp")}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
