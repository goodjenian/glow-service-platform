import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, TrendingUp, Zap, Database, Bot, BarChart3 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getWhatsAppUrl, getWhatsAppUrlPt } from "@/lib/whatsapp";
import { EntropyBackground } from "@/components/effects/EntropyBackground";

const floatingIcons = [
  { icon: Sparkles, delay: "0s", position: "top-20 left-[10%]" },
  { icon: TrendingUp, delay: "1s", position: "top-32 right-[15%]" },
  { icon: Zap, delay: "2s", position: "bottom-32 left-[20%]" },
  { icon: Database, delay: "1.5s", position: "top-40 right-[8%]" },
  { icon: Bot, delay: "0.5s", position: "bottom-40 right-[25%]" },
  { icon: BarChart3, delay: "2.5s", position: "bottom-20 left-[8%]" },
];

export function HeroSection() {
  const { language, t } = useLanguage();
  const whatsappUrl = language === "pt" ? getWhatsAppUrlPt() : getWhatsAppUrl();

  return (
    <section className="relative bg-primary py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Entropy Particle Animation */}
      <EntropyBackground className="opacity-60" />
      
      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />
      
      {/* Data Flow Lines */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(217 91% 60%)" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(217 91% 60%)" stopOpacity="1" />
              <stop offset="100%" stopColor="hsl(217 91% 60%)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,200 Q400,100 800,200 T1600,200"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            className="animate-flow"
          />
          <path
            d="M0,400 Q400,300 800,400 T1600,400"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            className="animate-flow"
            style={{ animationDelay: "1s" }}
          />
        </svg>
      </div>
      
      {/* Floating Icons */}
      {floatingIcons.map((item, index) => (
        <div
          key={index}
          className={`absolute ${item.position} hidden lg:block animate-float`}
          style={{ animationDelay: item.delay }}
        >
          <div className="bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-4 border border-primary-foreground/10">
            <item.icon className="h-8 w-8 text-accent/60" />
          </div>
        </div>
      ))}
      
      <div className="container px-4 md:px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-full px-4 py-2 mb-8 animate-slide-up">
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
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                {t("hero.cta")}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button variant="contact" size="xl" asChild className="group">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                {t("hero.whatsapp")}
                <ArrowRight className="ml-2 h-5 w-5 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
              </a>
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-primary-foreground/10 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <p className="text-sm text-primary-foreground/40 mb-4">{t("hero.trust")}</p>
            <div className="flex flex-wrap justify-center gap-8 text-primary-foreground/50">
              <span className="text-2xl font-bold">150+</span>
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
      
      <style>{`
        @keyframes flow {
          0% { stroke-dashoffset: 1000; }
          100% { stroke-dashoffset: 0; }
        }
        .animate-flow {
          stroke-dasharray: 100 50;
          animation: flow 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
