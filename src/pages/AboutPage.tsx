import { Layout } from "@/components/layout/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Award, Globe, Briefcase, GraduationCap } from "lucide-react";
import { getWhatsAppUrl, getWhatsAppUrlPt } from "@/lib/whatsapp";
import caiquePhoto from "@/assets/caique-gudjenian.png";

export default function AboutPage() {
  const { language, t } = useLanguage();
  const whatsappUrl = language === "pt" ? getWhatsAppUrlPt() : getWhatsAppUrl();

  const experiences = [
    {
      period: "2025 - Current",
      company: "JRPASS.COM",
      location: t("about.exp1Location"),
      role: "Senior SEO Specialist",
    },
    {
      period: "2025-04 - 2025-11",
      company: "Galactic Fed",
      location: t("about.exp2Location"),
      role: "SEO Consultant",
    },
    {
      period: "2023-01 - 2024-02",
      company: "Unik SEO",
      location: t("about.exp3Location"),
      role: "Technical SEO Manager",
    },
    {
      period: "2020-02 - 2022-12",
      company: "Renderforest",
      location: t("about.exp4Location"),
      role: "SEO Team Lead",
    },
  ];

  const skills = [
    "Google Analytics",
    "Google Search Console",
    "Screaming Frog",
    "SemRush",
    "Ahrefs",
    "n8n",
    "Python",
    "HTML/CSS",
  ];

  const languages = ["Portuguese", "English", "Spanish", "Armenian"];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-accent/30 shadow-2xl">
                  <img
                    src={caiquePhoto}
                    alt="Caíque Gudjenian - Founder"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-card rounded-2xl p-4 shadow-xl border border-border">
                  <div className="text-2xl font-bold text-accent">5+</div>
                  <div className="text-xs text-muted-foreground">{t("about.yearsExp")}</div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-[hsl(270,80%,75%)] to-[hsl(217,91%,70%)] bg-clip-text text-transparent">
                Caíque Gudjenian
              </h1>
              <p className="text-xl text-primary-foreground/80 mb-2">
                {t("about.founderRole")}
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-primary-foreground/60 mb-6">
                <MapPin className="h-4 w-4" />
                <span>São Paulo, Brazil</span>
              </div>

              <p className="text-lg text-primary-foreground/70 mb-8 max-w-xl">
                {t("about.bio")}
              </p>

              <Button variant="contact" size="lg" asChild className="group">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  {t("hero.whatsapp")}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("about.expTitle")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("about.expSubtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 border border-border/50 hover:border-accent/30 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-accent/10 rounded-xl p-3">
                    <Briefcase className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{exp.role}</h3>
                    <p className="text-accent font-medium">{exp.company}</p>
                    <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                      <Globe className="h-3 w-3" />
                      <span>{exp.location}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{exp.period}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="mt-16 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">{t("about.education")}</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card rounded-2xl p-6 border border-border/50">
                <div className="flex items-start gap-4">
                  <div className="bg-purple-500/10 rounded-xl p-3">
                    <GraduationCap className="h-6 w-6 text-purple-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{t("about.masters")}</h4>
                    <p className="text-accent">Nova IMS - Portugal</p>
                    <p className="text-sm text-muted-foreground">2022 - 2024</p>
                  </div>
                </div>
              </div>
              <div className="bg-card rounded-2xl p-6 border border-border/50">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500/10 rounded-xl p-3">
                    <GraduationCap className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{t("about.bachelors")}</h4>
                    <p className="text-accent">Universidade Mackenzie - Brazil</p>
                    <p className="text-sm text-muted-foreground">2013 - 2017</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills & Languages */}
          <div className="mt-16 max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-accent" />
                {t("about.skills")}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Globe className="h-5 w-5 text-accent" />
                {t("about.languages")}
              </h3>
              <div className="flex flex-wrap gap-2">
                {languages.map((lang) => (
                  <span
                    key={lang}
                    className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("about.teamTitle")}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("about.teamDesc")}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl p-6 border border-border/50 text-center">
              <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-semibold mb-2">{t("about.team1Role")}</h3>
              <p className="text-sm text-muted-foreground">{t("about.team1Desc")}</p>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border/50 text-center">
              <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="font-semibold mb-2">{t("about.team2Role")}</h3>
              <p className="text-sm text-muted-foreground">{t("about.team2Desc")}</p>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border/50 text-center">
              <div className="w-16 h-16 bg-rose-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="font-semibold mb-2">{t("about.team3Role")}</h3>
              <p className="text-sm text-muted-foreground">{t("about.team3Desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="bg-primary rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              {t("about.ctaTitle")}
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              {t("about.ctaDesc")}
            </p>
            <Button variant="contact" size="xl" asChild className="group">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                {t("hero.whatsapp")}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
