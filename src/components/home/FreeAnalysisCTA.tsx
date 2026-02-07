import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function FreeAnalysisCTA() {
  const { t } = useLanguage();
  const emailSubject = encodeURIComponent(t("freeAnalysis.emailSubject"));
  const emailBody = encodeURIComponent(t("freeAnalysis.emailBody"));
  const emailUrl = `mailto:business@goodyseo.com?subject=${emailSubject}&body=${emailBody}`;

  return (
    <section className="py-16 md:py-24 bg-[hsl(270,60%,55%)]">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t("freeAnalysis.title")}
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            {t("freeAnalysis.desc")}
          </p>
          <Button 
            variant="outline" 
            size="xl" 
            asChild 
            className="bg-white text-[hsl(270,60%,45%)] hover:bg-white/90 hover:text-[hsl(270,60%,35%)] border-0 shadow-lg"
          >
            <a href={emailUrl}>
              <Mail className="mr-2 h-5 w-5" />
              {t("freeAnalysis.cta")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
