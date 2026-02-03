import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { getWhatsAppUrl, getWhatsAppUrlPt } from "@/lib/whatsapp";
import type { LucideIcon } from "lucide-react";

interface Feature {
  title: string;
  description: string;
}

interface RelatedService {
  name: string;
  href: string;
  description: string;
}

type ServiceColor = "blue" | "purple" | "beige" | "teal" | "green" | "rose";

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  features: Feature[];
  benefits: string[];
  ctaText?: string;
  relatedServices?: RelatedService[];
  serviceColor?: ServiceColor;
  serviceName?: string;
}

const colorClasses: Record<ServiceColor, { gradient: string; accent: string; iconBg: string }> = {
  blue: {
    gradient: "bg-gradient-to-br from-[hsl(217,91%,20%)] via-[hsl(217,80%,30%)] to-[hsl(220,70%,25%)]",
    accent: "text-blue-400",
    iconBg: "bg-blue-500/20",
  },
  purple: {
    gradient: "bg-gradient-to-br from-[hsl(280,70%,20%)] via-[hsl(280,60%,30%)] to-[hsl(290,50%,25%)]",
    accent: "text-purple-400",
    iconBg: "bg-purple-500/20",
  },
  beige: {
    gradient: "bg-gradient-to-br from-[hsl(35,30%,20%)] via-[hsl(35,40%,30%)] to-[hsl(40,35%,25%)]",
    accent: "text-amber-300",
    iconBg: "bg-amber-500/20",
  },
  teal: {
    gradient: "bg-gradient-to-br from-[hsl(175,70%,15%)] via-[hsl(175,60%,25%)] to-[hsl(180,50%,20%)]",
    accent: "text-teal-400",
    iconBg: "bg-teal-500/20",
  },
  green: {
    gradient: "bg-gradient-to-br from-[hsl(145,70%,15%)] via-[hsl(145,60%,25%)] to-[hsl(150,50%,20%)]",
    accent: "text-emerald-400",
    iconBg: "bg-emerald-500/20",
  },
  rose: {
    gradient: "bg-gradient-to-br from-[hsl(350,70%,20%)] via-[hsl(350,60%,30%)] to-[hsl(355,50%,25%)]",
    accent: "text-rose-400",
    iconBg: "bg-rose-500/20",
  },
};

export function ServicePageLayout({
  title,
  subtitle,
  description,
  icon: Icon,
  features,
  benefits,
  ctaText = "Get Started Today",
  relatedServices,
  serviceColor = "blue",
  serviceName,
}: ServicePageLayoutProps) {
  const { language, t } = useLanguage();
  const whatsappUrl = language === "pt" 
    ? getWhatsAppUrlPt(serviceName || title) 
    : getWhatsAppUrl(serviceName || title);
  
  const colors = colorClasses[serviceColor];

  return (
    <Layout>
      {/* Hero Section */}
      <section className={`relative ${colors.gradient} py-20 md:py-32 overflow-hidden`}>
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
        
        {/* Glowing Orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        
        <div className="container px-4 md:px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${colors.iconBg} mb-6`}>
              <Icon className={`w-8 h-8 ${colors.accent}`} />
            </div>
            <p className={`${colors.accent} font-medium mb-4 tracking-wide uppercase`}>
              {subtitle}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-white via-[hsl(270,80%,80%)] to-white bg-clip-text text-transparent">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-8 animate-slide-up">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="heroOutline" size="xl" asChild>
                <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                  {ctaText}
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
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("service.whatWeDeliver")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("service.whatWeDeliverDesc")}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover-lift border-border/50 bg-gradient-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t("service.whyChoose")}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {t("service.whyChooseDesc")}
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="rounded-full bg-accent/20 p-1 mt-0.5">
                      <Check className="h-4 w-4 text-accent" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className={`aspect-square rounded-2xl ${colors.gradient} flex items-center justify-center`}>
                <Icon className="w-32 h-32 text-white/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      {relatedServices && relatedServices.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("service.related")}</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t("service.relatedDesc")}
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {relatedServices.map((service, index) => (
                <Link key={index} to={service.href} className="group">
                  <Card className="h-full hover-lift border-border/50 bg-gradient-card transition-all duration-300 group-hover:border-accent/30">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-muted-foreground">{service.description}</p>
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
      )}

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="bg-gradient-hero rounded-3xl p-8 md:p-12 lg:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              {t("service.ctaTitle")}
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              {t("service.ctaDesc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="heroOutline" size="xl" asChild>
                <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                  {t("service.ctaButton")}
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
      </section>
    </Layout>
  );
}
