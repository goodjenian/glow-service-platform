import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { getWhatsAppUrl, getWhatsAppUrlPt } from "@/lib/whatsapp";
import seoIllustration from "@/assets/seo-illustration.webp";

export function WhyPartnerSection() {
  const { t, language } = useLanguage();
  const whatsappUrl = language === "pt" ? getWhatsAppUrlPt() : getWhatsAppUrl();

  const services = [
    {
      title: t("partner.tailored"),
      description: t("partner.tailoredDesc"),
      href: "/services/seo",
      color: "border-blue-500",
    },
    {
      title: t("partner.datadriven"),
      description: t("partner.datadrivenDesc"),
      href: "/services/geo",
      color: "border-purple-500",
    },
    {
      title: t("partner.boutique"),
      description: t("partner.boutiqueDesc"),
      href: "/services/site-express",
      color: "border-amber-500",
    },
    {
      title: t("partner.proven"),
      description: t("partner.provenDesc"),
      href: "/services/ai-agents",
      color: "border-emerald-500",
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Services List */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-2">
              {language === "pt" ? "O que podemos fazer" : "What we can do"}
              <span className="text-accent">.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              {t("partner.desc")}
            </p>
            
            <div className="space-y-8">
              {services.map((service, index) => (
                <div key={index} className={`border-l-4 ${service.color} pl-6`}>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="relative lg:sticky lg:top-24">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={seoIllustration} 
                alt={language === "pt" ? "Dashboard de analytics e dados" : "Analytics and data dashboard"}
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Stats Cards */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-6 shadow-xl border border-border">
              <div className="text-3xl font-bold text-foreground mb-1">3x</div>
              <div className="text-sm text-muted-foreground">{t("hero.growth")}</div>
            </div>
            
            <div className="absolute -top-4 -right-4 bg-card rounded-2xl p-4 shadow-xl border border-border">
              <div className="text-2xl font-bold text-foreground mb-1">50+</div>
              <div className="text-xs text-muted-foreground">{t("hero.clients")}</div>
            </div>
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="flex justify-center mt-16">
          <Button 
            variant="outline" 
            size="lg" 
            asChild 
            className="bg-[hsl(220,10%,25%)] text-white border-[hsl(220,10%,25%)] hover:bg-[hsl(220,10%,30%)] hover:border-[hsl(220,10%,30%)]"
          >
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              {language === "pt" ? "Entre em contato" : "Get in Touch"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
