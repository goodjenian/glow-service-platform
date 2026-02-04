import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { TestimonialSection } from "@/components/home/TestimonialSection";
import { ReviewsSection } from "@/components/home/ReviewsSection";
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
  CheckCircle2,
  Target,
  TrendingUp,
  Users,
  Smartphone
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getWhatsAppUrl, getWhatsAppUrlPt } from "@/lib/whatsapp";
import n8nWorkflow from "@/assets/n8n-workflow.jpg";
import { EntropyBackground } from "@/components/effects/EntropyBackground";

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
  appCreation: {
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
      title: t("services.appCreation.title"),
      description: t("services.appCreation.desc"),
      icon: Smartphone,
      href: "/services/app-creation",
      colors: serviceColors.appCreation,
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("services.title")}</h2>
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

      {/* Why Choose Us Section */}
      <section id="about" className="py-16 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {t("partner.title")}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {t("partner.desc")}
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-accent/20 p-2 mt-1">
                    <Target className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{t("partner.tailored")}</h3>
                    <p className="text-sm text-muted-foreground">
                      {t("partner.tailoredDesc")}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-accent/20 p-2 mt-1">
                    <TrendingUp className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{t("partner.datadriven")}</h3>
                    <p className="text-sm text-muted-foreground">
                      {t("partner.datadrivenDesc")}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-accent/20 p-2 mt-1">
                    <Users className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{t("partner.boutique")}</h3>
                    <p className="text-sm text-muted-foreground">
                      {t("partner.boutiqueDesc")}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-accent/20 p-2 mt-1">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{t("partner.proven")}</h3>
                    <p className="text-sm text-muted-foreground">
                      {t("partner.provenDesc")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={n8nWorkflow} 
                  alt="n8n workflow automation dashboard" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-6 shadow-xl border border-border">
                <div className="text-3xl font-bold text-foreground mb-1">3x</div>
                <div className="text-sm text-muted-foreground">{t("hero.growth")}</div>
              </div>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="mt-16 text-center">
            <Button variant="contact" size="xl" asChild className="group">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                {t("hero.whatsapp")}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <TestimonialSection />

      {/* Reviews Section */}
      <ReviewsSection />

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="bg-primary rounded-3xl p-8 md:p-12 lg:p-16 text-center relative overflow-hidden">
            <EntropyBackground className="opacity-30" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_hsl(217_91%_60%/0.1),_transparent_60%)]" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
                {t("cta.title")}
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                {t("cta.desc")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="heroOutline" size="xl" asChild>
                  <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
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
