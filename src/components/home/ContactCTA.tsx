import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getWhatsAppUrl, getWhatsAppUrlPt } from "@/lib/whatsapp";

export function ContactCTA() {
  const { language, t } = useLanguage();
  const whatsappUrl = language === "pt" ? getWhatsAppUrlPt() : getWhatsAppUrl();

  return (
    <section className="py-16 md:py-20">
      <div className="container px-4 md:px-6">
        <div className="bg-gradient-to-r from-[hsl(270,60%,50%)] to-[hsl(270,50%,40%)] rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-[20%] left-[10%] w-2 h-2 bg-white/30 rounded-full animate-pulse" />
            <div className="absolute bottom-[30%] right-[15%] w-1.5 h-1.5 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }} />
            <div className="absolute top-[40%] right-[25%] w-1 h-1 bg-white/20 rounded-full animate-pulse" style={{ animationDelay: "1s" }} />
          </div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-6">
              <MessageCircle className="h-8 w-8 text-white" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {language === "pt" ? "Vamos conversar sobre seu projeto?" : "Ready to discuss your project?"}
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              {language === "pt" 
                ? "Entre em contato agora e descubra como podemos acelerar o crescimento do seu negócio."
                : "Get in touch now and discover how we can accelerate your business growth."
              }
            </p>
            
            <Button 
              variant="outline" 
              size="xl" 
              asChild 
              className="bg-white text-[hsl(270,60%,45%)] hover:bg-white/90 hover:text-[hsl(270,60%,35%)] border-0 shadow-lg"
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                {language === "pt" ? "Entre em contato" : "Get in Touch"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
