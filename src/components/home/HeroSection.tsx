import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getWhatsAppUrl, getWhatsAppUrlPt } from "@/lib/whatsapp";
import { DottedSurface } from "@/components/effects/DottedSurface";
import { HeroFloatingIcons } from "@/components/home/HeroFloatingIcons";

export function HeroSection() {
  const { language, t } = useLanguage();
  const whatsappUrl = language === "pt" ? getWhatsAppUrlPt() : getWhatsAppUrl();

  return (
    <section className="relative bg-[hsl(220,8%,12%)] py-16 md:py-24 lg:py-32 overflow-hidden min-h-[80vh] flex items-center">
      {/* Dotted Surface Background */}
      <DottedSurface />
      
      {/* Floating Service Icons */}
      <HeroFloatingIcons />
       
       {/* Gradient fade at top */}
       <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[hsl(220,8%,12%)] to-transparent z-10" />
       
      <div className="container px-4 md:px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated Badge */}
           <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-8 animate-slide-up">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-sm font-medium text-primary-foreground">
              {t("hero.badge")}
            </span>
          </div>
          
          {/* Headline with Animated Text */}
           <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
             <span className="animate-fade-in inline-block bg-gradient-to-r from-[hsl(270,70%,65%)] to-[hsl(217,91%,60%)] bg-clip-text text-transparent">{t("hero.title1")}</span>
             <span className="block bg-gradient-to-r from-white via-[hsl(270,80%,75%)] to-[hsl(217,91%,70%)] bg-clip-text text-transparent animate-slide-up" style={{ animationDelay: "0.2s" }}>
              {t("hero.title2")}
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/70 mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.4s" }}>
            {t("hero.description")}
          </p>
          
          {/* CTA Buttons with Hover Effects */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.6s" }}>
            <Button variant="heroOutline" size="xl" asChild className="group">
              <a href="https://calendly.com/business-goodyseo/30min" target="_blank" rel="noopener noreferrer">
                {t("hero.cta")}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
             <Button variant="contact" size="xl" asChild className="group">
               <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                 {t("hero.whatsapp")}
                 <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
          
          {/* Trust Indicators */}
           <div className="mt-12 pt-8 border-t border-primary-foreground/20 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <p className="text-sm text-primary-foreground/40 mb-4">{t("hero.trust")}</p>
            <div className="flex flex-wrap justify-center gap-8 text-primary-foreground/50">
              <span className="text-2xl font-bold">50+</span>
              <span className="text-primary-foreground/20">|</span>
              <span className="text-sm font-medium self-center">{t("hero.clients")}</span>
              <span className="text-primary-foreground/20">|</span>
              <span className="text-2xl font-bold">3x</span>
              <span className="text-primary-foreground/20">|</span>
              <span className="text-sm font-medium self-center">{t("hero.growth")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
