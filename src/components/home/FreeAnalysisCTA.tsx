import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Sparkles, TrendingUp, Zap, Target } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ctaIllustration from "@/assets/cta-illustration.png";

export function FreeAnalysisCTA() {
  const { t } = useLanguage();
  const emailSubject = encodeURIComponent(t("freeAnalysis.emailSubject"));
  const emailBody = encodeURIComponent(t("freeAnalysis.emailBody"));
  const emailUrl = `mailto:business@goodyseo.com?subject=${emailSubject}&body=${emailBody}`;

  return (
    <section className="py-16 md:py-24 relative overflow-hidden bg-gradient-to-br from-white via-[hsl(217,91%,95%)] to-[hsl(270,60%,92%)]">
      {/* Animated floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Stars/sparkles */}
        <div className="absolute top-[10%] left-[5%] w-2 h-2 bg-primary/30 rounded-full animate-pulse" />
        <div className="absolute top-[20%] left-[15%] w-1 h-1 bg-primary/20 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
        <div className="absolute top-[15%] right-[20%] w-1.5 h-1.5 bg-primary/25 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-[30%] left-[10%] w-1 h-1 bg-primary/15 rounded-full animate-pulse" style={{ animationDelay: "1.5s" }} />
        <div className="absolute bottom-[20%] right-[30%] w-2 h-2 bg-primary/20 rounded-full animate-pulse" style={{ animationDelay: "0.8s" }} />
        
        {/* Floating icons */}
        <div className="absolute top-[25%] left-[8%] opacity-20 animate-bounce" style={{ animationDuration: "3s" }}>
          <Sparkles className="h-8 w-8 text-primary" />
        </div>
        <div className="absolute bottom-[35%] left-[20%] opacity-15 animate-bounce" style={{ animationDuration: "4s", animationDelay: "1s" }}>
          <TrendingUp className="h-6 w-6 text-primary" />
        </div>
        <div className="absolute top-[40%] left-[12%] opacity-10 animate-bounce" style={{ animationDuration: "3.5s", animationDelay: "0.5s" }}>
          <Zap className="h-10 w-10 text-primary" />
        </div>
        <div className="absolute bottom-[25%] left-[5%] opacity-15 animate-bounce" style={{ animationDuration: "4.5s", animationDelay: "2s" }}>
          <Target className="h-7 w-7 text-primary" />
        </div>
        
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(270,60%,92%)]/30 to-transparent" />
      </div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          {/* Text content */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {t("freeAnalysis.title")}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
              {t("freeAnalysis.desc")}
            </p>
            <Button 
              variant="default" 
              size="xl" 
              asChild
            >
              <a href={emailUrl}>
                <Mail className="mr-2 h-5 w-5" />
                {t("freeAnalysis.cta")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
          
          {/* Illustration */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              <img 
                src={ctaIllustration} 
                alt="Goody SEO illustration" 
                className="w-80 h-auto drop-shadow-2xl animate-float"
              />
              {/* Glow effect behind illustration */}
              <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl -z-10 scale-75" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
