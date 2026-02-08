import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getWhatsAppUrl, getWhatsAppUrlPt } from "@/lib/whatsapp";

export function ContactCTA() {
  const { language } = useLanguage();
  const whatsappUrl = language === "pt" ? getWhatsAppUrlPt() : getWhatsAppUrl();

  return (
    <section className="py-8 md:py-12">
      <div className="container px-4 md:px-6 flex justify-center">
        <Button 
          variant="outline" 
          size="lg" 
          asChild 
          className="text-muted-foreground border-border hover:bg-accent hover:text-accent-foreground"
        >
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            {language === "pt" ? "Entre em contato" : "Get in Touch"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    </section>
  );
}
