import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Info } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getWhatsAppUrl, getWhatsAppUrlPt } from "@/lib/whatsapp";

interface PricingTier {
  name: string;
  description?: string;
  items: {
    label: string;
    price: string;
    period?: string;
  }[];
  includes?: string[];
  highlight?: boolean;
}

interface ServicePricingSectionProps {
  tiers: PricingTier[];
  serviceName: string;
  accentColor?: string;
  accentBg?: string;
  note?: string;
}

export function ServicePricingSection({ 
  tiers, 
  serviceName,
  accentColor = "text-accent",
  accentBg = "bg-accent/10",
  note
}: ServicePricingSectionProps) {
  const { t, language } = useLanguage();
  const whatsappUrl = language === "pt" 
    ? getWhatsAppUrlPt(serviceName) 
    : getWhatsAppUrl(serviceName);

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("pricing.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("pricing.subtitle")}
          </p>
        </div>

        <div className={`grid gap-6 max-w-5xl mx-auto ${tiers.length === 1 ? 'md:grid-cols-1 max-w-xl' : tiers.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3'}`}>
          {tiers.map((tier, index) => (
            <Card 
              key={index} 
              className={`relative border-border/50 ${tier.highlight ? `border-2 ${accentColor.replace('text-', 'border-')}` : ''} hover:shadow-lg transition-shadow`}
            >
              {tier.highlight && (
                <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 ${accentBg} ${accentColor} text-xs font-semibold rounded-full`}>
                  {t("pricing.popular")}
                </div>
              )}
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                {tier.description && (
                  <p className="text-sm text-muted-foreground mb-4">{tier.description}</p>
                )}
                
                <div className="space-y-3 mb-6">
                  {tier.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex justify-between items-baseline border-b border-border/30 pb-2">
                      <span className="text-muted-foreground text-sm">{item.label}</span>
                      <div className="text-right">
                        <span className={`font-bold ${accentColor}`}>{item.price}</span>
                        {item.period && (
                          <span className="text-xs text-muted-foreground ml-1">{item.period}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {tier.includes && tier.includes.length > 0 && (
                  <div className="mb-6">
                    <p className="text-sm font-semibold mb-3">{t("pricing.includes")}</p>
                    <ul className="space-y-2">
                      {tier.includes.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check className={`w-4 h-4 ${accentColor} shrink-0 mt-0.5`} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    {t("pricing.cta")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Note */}
        <div className="mt-8 max-w-3xl mx-auto">
          <div className="flex items-start gap-3 p-4 bg-background rounded-xl border border-border/50">
            <Info className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground italic">
              {note || t("pricing.note")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
