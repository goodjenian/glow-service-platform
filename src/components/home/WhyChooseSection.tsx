import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Coins, Users, FlaskConical } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function WhyChooseSection() {
  const { language, t } = useLanguage();

  const cards = [
    {
      icon: Award,
      iconColor: "text-blue-500",
      iconBg: "bg-blue-500/10",
      title: t("whyChoose.proven.title"),
      points: [
        t("whyChoose.proven.point1"),
        t("whyChoose.proven.point2"),
        t("whyChoose.proven.point3"),
      ],
    },
    {
      icon: Coins,
      iconColor: "text-amber-500",
      iconBg: "bg-amber-500/10",
      title: t("whyChoose.pricing.title"),
      points: [
        t("whyChoose.pricing.point1"),
        t("whyChoose.pricing.point2"),
        t("whyChoose.pricing.point3"),
      ],
    },
    {
      icon: Users,
      iconColor: "text-purple-500",
      iconBg: "bg-purple-500/10",
      title: t("whyChoose.team.title"),
      points: [
        t("whyChoose.team.point1"),
        t("whyChoose.team.point2"),
        t("whyChoose.team.point3"),
      ],
    },
    {
      icon: FlaskConical,
      iconColor: "text-rose-500",
      iconBg: "bg-rose-500/10",
      title: t("whyChoose.approach.title"),
      points: [
        t("whyChoose.approach.point1"),
        t("whyChoose.approach.point2"),
        t("whyChoose.approach.point3"),
      ],
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-12">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {t("whyChoose.title")}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t("whyChoose.subtitle")}
            </p>
          </div>
          <Button variant="accent" size="xl" asChild className="group shrink-0">
            <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
              {t("whyChoose.cta")}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <Card key={index} className="border-border/50 bg-muted/30 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${card.iconBg} mb-6`}>
                  <card.icon className={`h-6 w-6 ${card.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                <ul className="space-y-3">
                  {card.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 shrink-0" />
                      <span className="text-muted-foreground text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
