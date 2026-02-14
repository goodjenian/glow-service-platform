import { ServicePageLayout } from "@/components/ServicePageLayout";
import { Zap, Smartphone, Check, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl, getWhatsAppUrlPt } from "@/lib/whatsapp";

export default function SiteExpressPage() {
  const { language, t } = useLanguage();
  const whatsappUrl = language === "pt" ? getWhatsAppUrlPt("Site Express + Mobile App") : getWhatsAppUrl("Site Express + Mobile App");

  const features = [
    { title: t("siteExpress.feature1.title"), description: t("siteExpress.feature1.desc") },
    { title: t("siteExpress.feature2.title"), description: t("siteExpress.feature2.desc") },
    { title: t("siteExpress.feature3.title"), description: t("siteExpress.feature3.desc") },
    { title: t("siteExpress.feature4.title"), description: t("siteExpress.feature4.desc") },
    { title: t("siteExpress.feature5.title"), description: t("siteExpress.feature5.desc") },
    { title: t("siteExpress.feature6.title"), description: t("siteExpress.feature6.desc") },
  ];

  const benefits = [
    t("siteExpress.benefit1"),
    t("siteExpress.benefit2"),
    t("siteExpress.benefit3"),
    t("siteExpress.benefit4"),
    t("siteExpress.benefit5"),
    t("siteExpress.benefit6"),
  ];

  const strategies = [
    { title: t("siteExpress.strategy1.title"), description: t("siteExpress.strategy1.desc") },
    { title: t("siteExpress.strategy2.title"), description: t("siteExpress.strategy2.desc") },
    { title: t("siteExpress.strategy3.title"), description: t("siteExpress.strategy3.desc") },
    { title: t("siteExpress.strategy4.title"), description: t("siteExpress.strategy4.desc") },
  ];

  const results = [
    { metric: t("siteExpress.result1.metric"), description: t("siteExpress.result1.desc") },
    { metric: t("siteExpress.result2.metric"), description: t("siteExpress.result2.desc") },
    { metric: t("siteExpress.result3.metric"), description: t("siteExpress.result3.desc") },
    { metric: t("siteExpress.result4.metric"), description: t("siteExpress.result4.desc") },
  ];

  const faqs = [
    { question: t("siteExpress.faq.q1"), answer: t("siteExpress.faq.a1") },
    { question: t("siteExpress.faq.q2"), answer: t("siteExpress.faq.a2") },
    { question: t("siteExpress.faq.q3"), answer: t("siteExpress.faq.a3") },
    { question: t("siteExpress.faq.q4"), answer: t("siteExpress.faq.a4") },
  ];

  const mobileFeatures = [
    t("siteExpress.mobileApp.feature1"),
    t("siteExpress.mobileApp.feature2"),
    t("siteExpress.mobileApp.feature3"),
    t("siteExpress.mobileApp.feature4"),
  ];

  const mobileAppSection = (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-500 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Smartphone className="h-4 w-4" />
                {t("siteExpress.mobileApp.subtitle")}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {t("siteExpress.mobileApp.title")}
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                {t("siteExpress.mobileApp.desc")}
              </p>
              <ul className="space-y-3 mb-8">
                {mobileFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-500/10 flex items-center justify-center mt-0.5">
                      <Check className="h-3.5 w-3.5 text-amber-500" />
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button variant="accent" size="lg" asChild className="group">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  {t("siteExpress.mobileApp.cta")}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>

            {/* Visual */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-[500px] bg-card rounded-[3rem] border-4 border-border shadow-2xl flex flex-col items-center justify-center p-6 relative overflow-hidden">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-border rounded-b-2xl" />
                  <Smartphone className="h-16 w-16 text-amber-500/30 mb-4" />
                  <div className="text-center">
                    <p className="font-bold text-lg mb-1">{language === "pt" ? "Seu App" : "Your App"}</p>
                    <p className="text-sm text-muted-foreground">iOS & Android</p>
                  </div>
                  <div className="mt-6 space-y-3 w-full">
                    <div className="h-3 bg-muted rounded-full w-full" />
                    <div className="h-3 bg-muted rounded-full w-3/4" />
                    <div className="h-3 bg-muted rounded-full w-5/6" />
                    <div className="h-10 bg-amber-500/20 rounded-xl w-full mt-4 flex items-center justify-center">
                      <span className="text-amber-500 text-xs font-semibold">CTA</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-card rounded-2xl p-4 shadow-xl border border-border">
                  <div className="text-xl font-bold text-amber-500">+</div>
                  <div className="text-xs text-muted-foreground">{language === "pt" ? "Serviço extra" : "Add-on service"}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <ServicePageLayout
      title={t("siteExpress.title")}
      metaTitle={language === "pt" ? "Site Express - Criação Rápida de Sites & Apps | GoodySEO" : "Site Express - Fast Website & App Development | GoodySEO"}
      metaDescription={language === "pt" ? "Criação rápida de sites profissionais com possibilidade de expansão para apps mobile iOS e Android. Desenvolvimento ágil com a GoodySEO." : "Fast professional website creation with optional mobile app expansion for iOS and Android. Agile development by GoodySEO."}
      subtitle={t("siteExpress.subtitle")}
      description={t("siteExpress.desc")}
      icon={Zap}
      features={features}
      benefits={benefits}
      ctaText={t("siteExpress.cta")}
      serviceColor="beige"
      serviceName="Site Express"
      importance={t("siteExpress.importance")}
      strategies={strategies}
      results={results}
      faqs={faqs}
      additionalContent={mobileAppSection}
      relatedServices={[
        { name: t("nav.paidTraffic"), href: "/services/paid-traffic", description: "Paid advertising" },
        { name: t("nav.seo"), href: "/services/seo", description: "Optimize your new site for search" },
      ]}
    />
  );
}