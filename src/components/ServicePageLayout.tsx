import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowRight, TrendingUp, Target, Lightbulb, BarChart3, Award, Coins, Users, FlaskConical } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { getWhatsAppUrl, getWhatsAppUrlPt } from "@/lib/whatsapp";
import { ServiceFloatingIcons } from "@/components/services/ServiceFloatingIcons";
import { ServiceFAQSection } from "@/components/services/ServiceFAQSection";
import { SeoHead } from "@/components/SeoHead";
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

interface Strategy {
  title: string;
  description: string;
}

interface Result {
  metric: string;
  description: string;
}

interface FAQ {
  question: string;
  answer: string;
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
  importance?: string;
  strategies?: Strategy[];
  results?: Result[];
  faqs?: FAQ[];
  additionalContent?: React.ReactNode;
  metaTitle?: string;
  metaDescription?: string;
}

const colorClasses: Record<ServiceColor, { gradient: string; accent: string; iconBg: string; accentBg: string; textAccent: string }> = {
  blue: {
    gradient: "bg-gradient-to-br from-[hsl(217,91%,20%)] via-[hsl(217,80%,30%)] to-[hsl(220,70%,25%)]",
    accent: "text-blue-400",
    iconBg: "bg-blue-500/20",
    accentBg: "bg-blue-500/10",
    textAccent: "text-blue-400",
  },
  purple: {
    gradient: "bg-gradient-to-br from-[hsl(280,70%,20%)] via-[hsl(280,60%,30%)] to-[hsl(290,50%,25%)]",
    accent: "text-purple-400",
    iconBg: "bg-purple-500/20",
    accentBg: "bg-purple-500/10",
    textAccent: "text-purple-400",
  },
  beige: {
    gradient: "bg-gradient-to-br from-[hsl(35,30%,20%)] via-[hsl(35,40%,30%)] to-[hsl(40,35%,25%)]",
    accent: "text-amber-300",
    iconBg: "bg-amber-500/20",
    accentBg: "bg-amber-500/10",
    textAccent: "text-amber-400",
  },
  teal: {
    gradient: "bg-gradient-to-br from-[hsl(175,70%,15%)] via-[hsl(175,60%,25%)] to-[hsl(180,50%,20%)]",
    accent: "text-teal-400",
    iconBg: "bg-teal-500/20",
    accentBg: "bg-teal-500/10",
    textAccent: "text-teal-400",
  },
  green: {
    gradient: "bg-gradient-to-br from-[hsl(145,70%,15%)] via-[hsl(145,60%,25%)] to-[hsl(150,50%,20%)]",
    accent: "text-emerald-400",
    iconBg: "bg-emerald-500/20",
    accentBg: "bg-emerald-500/10",
    textAccent: "text-emerald-400",
  },
  rose: {
    gradient: "bg-gradient-to-br from-[hsl(350,70%,20%)] via-[hsl(350,60%,30%)] to-[hsl(355,50%,25%)]",
    accent: "text-rose-400",
    iconBg: "bg-rose-500/20",
    accentBg: "bg-rose-500/10",
    textAccent: "text-rose-400",
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
  importance,
  strategies,
  results,
  faqs,
  additionalContent,
  metaTitle,
  metaDescription,
}: ServicePageLayoutProps) {
  const { language, t } = useLanguage();

  // REMOVI O usePageMeta DAQUI

  const whatsappUrl = language === "pt" 
    ? getWhatsAppUrlPt(serviceName || title) 
    : getWhatsAppUrl(serviceName || title);
   
  const colors = colorClasses[serviceColor];

  const whyChooseCards = [
    {
      icon: Award,
      iconColor: "text-blue-500",
      iconBg: "bg-blue-500/10",
      title: t("whyChoose.proven.title"),
      points: [
        t("whyChoose.proven.point1"),
        t("whyChoose.proven.point2"),
        t("whyChoose.proven.point3"),
      ],
    },
    {
      icon: Coins,
      iconColor: "text-amber-500",
      iconBg: "bg-amber-500/10",
      title: t("whyChoose.pricing.title"),
      points: [
        t("whyChoose.pricing.point1"),
        t("whyChoose.pricing.point2"),
        t("whyChoose.pricing.point3"),
      ],
    },
    {
      icon: Users,
      iconColor: "text-purple-500",
      iconBg: "bg-purple-500/10",
      title: t("whyChoose.team.title"),
      points: [
        t("whyChoose.team.point1"),
        t("whyChoose.team.point2"),
        t("whyChoose.team.point3"),
      ],
    },
    {
      icon: FlaskConical,
      iconColor: "text-rose-500",
      iconBg: "bg-rose-500/10",
      title: t("whyChoose.approach.title"),
      points: [
        t("whyChoose.approach.point1"),
        t("whyChoose.approach.point2"),
        t("whyChoose.approach.point3"),
      ],
    },
  ];

  // Derive canonical path from window location (pathname only, no query params)
  const canonicalPath = typeof window !== "undefined"
    ? window.location.pathname
    : "/";

  // Build Service schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": metaTitle ? metaTitle.split(" - ")[0] : title,
    "description": metaDescription || description,
    "provider": {
      "@type": "MarketingAgency",
      "name": "GoodySEO",
      "url": "https://goodyseo.com"
    },
    "areaServed": "Worldwide",
    "url": `https://goodyseo.com${canonicalPath}`
  };

  // Build FAQPage schema when FAQs are present
  const faqSchema = faqs && faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  const schemas = [serviceSchema, ...(faqSchema ? [faqSchema] : [])];

  return (
    <Layout>
      <SeoHead
        title={metaTitle || `${title} | GoodySEO`}
        description={metaDescription || description}
        path={canonicalPath}
        schemas={schemas}
      />

      {/* Hero Section */}
      <section className={`relative ${colors.gradient} py-20 md:py-32 overflow-hidden`}>
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />
        
        {/* Glowing Orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        
        {/* Service-specific floating icons */}
        <ServiceFloatingIcons icon={Icon} accentColor={colors.accent} />
        
        <div className="container px-4 md:px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${colors.iconBg} mb-6`}>
              <Icon className={`w-8 h-8 ${colors.accent}`} />
            </div>
            <p className={`${colors.accent} font-medium mb-4 tracking-wide uppercase`}>
              {subtitle}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-white via-[hsl(270,80%,80%)] to-white bg-clip-text text-transparent pb-1 tracking-tight">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-white/70 mb-8 animate-slide-up">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="heroOutline" size="xl" asChild>
                <a href="https://calendly.com/business-goodyseo/30min" target="_blank" rel="noopener noreferrer">
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

      {/* Importance Section */}
      {importance && (
        <section className="py-16 md:py-24 border-b border-border/30">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2 rounded-lg ${colors.accentBg}`}>
                  <Lightbulb className={`w-6 h-6 ${colors.accent}`} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">{t("service.importanceTitle")}</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {importance}
              </p>
            </div>
          </div>
        </section>
      )}

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

      {/* Strategies Section */}
      {strategies && strategies.length > 0 && (
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className={`p-2 rounded-lg ${colors.accentBg}`}>
                  <Target className={`w-6 h-6 ${colors.accent}`} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">{t("service.strategiesTitle")}</h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t("service.strategiesDesc")}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {strategies.map((strategy, index) => (
                <div key={index} className="flex gap-4">
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full ${colors.accentBg} flex items-center justify-center`}>
                    <span className={`font-bold ${colors.accent}`}>{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{strategy.title}</h3>
                    <p className="text-muted-foreground">{strategy.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Results Section */}
      {results && results.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className={`p-2 rounded-lg ${colors.accentBg}`}>
                  <BarChart3 className={`w-6 h-6 ${colors.accent}`} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">{t("service.resultsTitle")}</h2>
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t("service.resultsDesc")}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {results.map((result, index) => (
                <Card key={index} className={`text-center border-border/50 ${colors.accentBg}`}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-center mb-3">
                      <TrendingUp className={`w-8 h-8 ${colors.accent}`} />
                    </div>
                    <p className={`text-2xl md:text-3xl font-bold ${colors.accent} mb-2`}>{result.metric}</p>
                    <p className="text-sm text-muted-foreground">{result.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Section - Galactic Fed Style */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container px-4 md:px-6">
          {/* Header */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {t("whyChoose.title")}
              </h2>
              <p className="text-lg text-muted-foreground">
                {t("whyChoose.subtitle")}
              </p>
            </div>
            <Button variant="accent" size="xl" asChild className="group shrink-0">
              <a href="https://calendly.com/business-goodyseo/30min" target="_blank" rel="noopener noreferrer">
                {t("whyChoose.cta")}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseCards.map((card, index) => (
              <Card key={index} className="border-border/50 bg-muted/30 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${card.iconBg} mb-6`}>
                    <card.icon className={`h-6 w-6 ${card.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                  <ul className="space-y-3">
                    {card.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 shrink-0" />
                        <span className="text-muted-foreground text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {faqs && faqs.length > 0 && (
        <ServiceFAQSection faqs={faqs} accentColor={colors.textAccent} />
      )}

      {/* Additional Content */}
      {additionalContent}

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
          <div className="bg-[hsl(220,15%,8%)] rounded-3xl p-8 md:p-12 lg:p-16 text-center relative overflow-hidden border border-border/30">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-[hsl(270,80%,75%)] to-[hsl(217,91%,70%)] bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] pb-1 tracking-tight">
              {t("service.ctaTitle")}
            </h2>
            <p className="text-lg text-white mb-8 max-w-2xl mx-auto font-semibold drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              {t("service.ctaDesc")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center px-4 sm:px-0">
              <Button variant="heroOutline" size="xl" asChild className="w-full sm:w-auto text-base sm:text-lg">
                <a href="https://calendly.com/business-goodyseo/30min" target="_blank" rel="noopener noreferrer">
                  {t("service.ctaButton")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="contact" size="xl" asChild className="w-full sm:w-auto">
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