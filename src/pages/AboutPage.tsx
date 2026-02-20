import { Layout } from "@/components/layout/Layout";
import { useLanguage } from "@/contexts/LanguageContext";
import { SeoHead } from "@/components/SeoHead";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Globe, Briefcase, GraduationCap, Rocket, Users, Star, Target } from "lucide-react";
import { getWhatsAppUrl, getWhatsAppUrlPt } from "@/lib/whatsapp";
import caiquePhoto from "@/assets/caique-gudjenian.png";
import troPhoto from "@/assets/tro-kalaydjian.webp";
import caioPhoto from "@/assets/caio-gudjenian.webp";

// Schema: Person (founder)
const founderSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Caíque Gudjenian",
  "jobTitle": "Founder & SEO Strategist",
  "worksFor": {
    "@type": "MarketingAgency",
    "name": "GoodySEO",
    "url": "https://goodyseo.com"
  },
  "knowsAbout": ["SEO", "GEO", "AI Automation", "Digital Marketing", "n8n"],
  "alumniOf": [
    { "@type": "EducationalOrganization", "name": "Nova IMS - Portugal" },
    { "@type": "EducationalOrganization", "name": "Universidade Mackenzie - Brazil" }
  ]
};

export default function AboutPage() {
  const { language, t } = useLanguage();
  const whatsappUrl = language === "pt" ? getWhatsAppUrlPt() : getWhatsAppUrl();

  const metaTitle = language === "pt"
    ? "Sobre Nós - Agência Boutique de Marketing Digital | GoodySEO"
    : "About Us - Boutique Digital Marketing Agency | GoodySEO";
  const metaDescription = language === "pt"
    ? "Conheça a GoodySEO: agência boutique de marketing digital com foco em SEO, IA e automação. Atendemos clientes nos EUA, Brasil e Europa."
    : "Meet GoodySEO: a boutique digital marketing agency focused on SEO, AI, and automation. Serving clients in the US, Brazil, and Europe.";

  const timeline = [
    {
      year: "2019-2024",
      title: language === "pt" ? "Jornada do Fundador" : "Founder's Journey",
      description: language === "pt" 
        ? "Anos de experiência construindo estratégias SEO para empresas SaaS e E-commerce em Portugal, Armênia, Estados Unidos e Reino Unido."
        : "Years of experience building SEO strategies for SaaS and E-commerce companies in Portugal, Armenia, United States and United Kingdom.",
      icon: Briefcase,
      color: "bg-blue-500",
    },
    {
      year: "2024",
      title: language === "pt" ? "Fundação da Goody SEO" : "Goody SEO Founded",
      description: language === "pt"
        ? "Início da jornada empreendedora com a abertura da consultoria de SEO. Primeiro cliente conquistado através de networking estratégico."
        : "Beginning of the entrepreneurial journey with the SEO consultancy opening. First client acquired through strategic networking.",
      icon: Rocket,
      color: "bg-purple-500",
    },
    {
      year: "2025",
      title: language === "pt" ? "Crescimento e Consolidação" : "Growth & Consolidation",
      description: language === "pt"
        ? "Expansão da base de clientes com mais 3 empresas de SEO. Desenvolvimento de processos automatizados e workflows de IA."
        : "Client base expansion with 3 more SEO companies. Development of automated processes and AI workflows.",
      icon: Users,
      color: "bg-emerald-500",
    },
    {
      year: "2026",
      title: language === "pt" ? "Novos Horizontes" : "New Horizons",
      description: language === "pt"
        ? "Lançamento de novos serviços: Tráfego Pago, Agentes IA, Social Media e Site Express. Foco em soluções integradas de marketing digital."
        : "Launch of new services: Paid Traffic, AI Agents, Social Media and Site Express. Focus on integrated digital marketing solutions.",
      icon: Target,
      color: "bg-amber-500",
    },
  ];

  const skills = [
    "Google Analytics", "Google Search Console", "Screaming Frog",
    "SemRush", "Ahrefs", "n8n", "Python", "HTML/CSS",
  ];

  const languages = ["Portuguese", "English", "Spanish", "Armenian"];

  return (
    <Layout>
      <SeoHead
        title={metaTitle}
        description={metaDescription}
        path="/about"
        schemas={[founderSchema]}
      />

      {/* About Us Hero Section */}
      <section className="py-16 md:py-24 bg-primary">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-[hsl(270,80%,75%)] to-[hsl(217,91%,70%)] bg-clip-text text-transparent pb-1 tracking-tight">
              {language === "pt" ? "Sobre nós" : "About Us"}
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 mb-8 leading-relaxed">
              {language === "pt" 
                ? "Somos uma agência boutique de marketing digital especializada em estratégias de crescimento orgânico e inteligência artificial. Atendemos clientes ao redor do mundo, com foco especial nos Estados Unidos, Brasil e Europa."
                : "We are a boutique digital marketing agency specialized in organic growth strategies and artificial intelligence. We serve clients around the world, with a special focus on the United States, Brazil, and Europe."
              }
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <Globe className="h-5 w-5 text-accent" />
                <span className="text-primary-foreground/90">
                  {language === "pt" ? "Clientes globais" : "Global Clients"}
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="text-primary-foreground/90">USA • Brazil • Europe</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Timeline Section */}
      <section className="py-16 md:py-24 overflow-hidden bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {language === "pt" ? "Nossa jornada" : "Our Journey"}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {language === "pt" 
                ? "Da expertise internacional à consultoria boutique que transforma negócios"
                : "From international expertise to the boutique consultancy that transforms businesses"
              }
            </p>
          </div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-emerald-500 to-amber-500 transform -translate-x-1/2 hidden md:block" />
            
            {timeline.map((item, index) => (
              <div 
                key={index}
                className={`relative flex items-center mb-12 md:mb-16 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"}`}>
                  <div 
                    className="bg-card rounded-2xl p-6 border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                      <div className={`${item.color} rounded-xl p-2`}>
                        <item.icon className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-2xl md:text-3xl font-bold text-accent">{item.year}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                </div>

                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-card border-4 border-accent items-center justify-center z-10">
                  <Star className="h-3 w-3 text-accent" />
                </div>

                <div className="hidden md:block w-5/12" />
              </div>
            ))}

            <div className="text-center mt-8">
              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-6 py-3 rounded-full font-semibold animate-pulse">
                <Rocket className="h-5 w-5" />
                {language === "pt" ? "Próxima parada: Infinito e além!" : "Next stop: To Infinity & Beyond!"}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
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
                  <div className="text-2xl font-bold text-accent">7+</div>
                  <div className="text-xs text-muted-foreground">{t("about.yearsExp")}</div>
                </div>
              </div>
            </div>

            <div className="order-2 lg:order-1 text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-2 pb-2 bg-gradient-to-r from-foreground via-[hsl(270,80%,60%)] to-[hsl(217,91%,60%)] bg-clip-text text-transparent tracking-tight">
                {t("about.founderRole")}
              </h2>
              <p className="text-2xl font-semibold text-foreground mb-2">
                Caíque Gudjenian
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground mb-6">
                <MapPin className="h-4 w-4" />
                <span>São Paulo, Brazil</span>
              </div>

              <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                {t("about.bio")}
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                <div className="bg-card rounded-2xl p-4 border border-border/50 hover:border-purple-500/30 transition-all">
                  <div className="flex items-start gap-3">
                    <div className="bg-purple-500/10 rounded-xl p-2">
                      <GraduationCap className="h-5 w-5 text-purple-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">{t("about.masters")}</h4>
                      <p className="text-accent text-sm">Nova IMS - Portugal</p>
                    </div>
                  </div>
                </div>
                <div className="bg-card rounded-2xl p-4 border border-border/50 hover:border-blue-500/30 transition-all">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-500/10 rounded-xl p-2">
                      <GraduationCap className="h-5 w-5 text-blue-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm">{t("about.bachelors")}</h4>
                      <p className="text-accent text-sm">Universidade Mackenzie - Brazil</p>
                    </div>
                  </div>
                </div>
              </div>

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

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-muted/40 relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 pb-2 bg-gradient-to-r from-foreground via-[hsl(270,80%,60%)] to-[hsl(217,91%,60%)] bg-clip-text text-transparent tracking-tight">
              {t("about.teamTitle")}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t("about.teamDesc")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Trô Armen Kalaydjian */}
            <div className="bg-card rounded-3xl p-8 border border-border/50 hover:border-accent/40 transition-all hover:-translate-y-2 hover:shadow-2xl animate-fade-in group">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-accent/30 shadow-xl transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1">
                    <img
                      src={troPhoto}
                      alt="Trô Armen Kalaydjian - Software Architecture Specialist"
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute -bottom-3 -right-3 bg-card rounded-xl px-3 py-1.5 shadow-lg border border-border text-center">
                    <div className="text-lg font-bold text-accent">3+</div>
                    <div className="text-xs text-muted-foreground leading-tight">
                      {language === "pt" ? "anos exp." : "yrs exp."}
                    </div>
                  </div>
                </div>
                <h3 className="font-bold text-foreground text-xl mb-1">Trô Armen Kalaydjian</h3>
                <p className="text-accent font-semibold text-sm mb-4">
                  {language === "pt" ? "Especialista em Arquitetura de Software" : "Software Architecture Specialist"}
                </p>
                <p className="text-muted-foreground text-sm mb-6">
                  {language === "pt"
                    ? "Responsável por construir o backend seguro e escalável que sustenta as operações digitais, garantindo que integrações e automações complexas funcionem perfeitamente."
                    : "Responsible for building the secure, scalable backend that underpins digital operations, ensuring complex integrations and automations run flawlessly."
                  }
                </p>
                <div className="bg-muted/60 rounded-2xl p-4 w-full border border-border/40">
                  <div className="flex items-center gap-2 mb-3">
                    <GraduationCap className="h-4 w-4 text-accent flex-shrink-0" />
                    <span className="text-xs font-semibold text-foreground/70 uppercase tracking-wide">
                      {language === "pt" ? "Formação" : "Education"}
                    </span>
                  </div>
                  <p className="text-accent text-sm font-medium">Computer Science Technician</p>
                  <p className="text-muted-foreground text-xs">IFSP</p>
                </div>
              </div>
            </div>

            {/* Caio Gudjenian */}
            <div className="bg-card rounded-3xl p-8 border border-border/50 hover:border-accent/40 transition-all hover:-translate-y-2 hover:shadow-2xl animate-fade-in group" style={{ animationDelay: "150ms" }}>
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-accent/30 shadow-xl transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1">
                    <img
                      src={caioPhoto}
                      alt="Caio Gudjenian - Social Media Specialist"
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute -bottom-3 -right-3 bg-card rounded-xl px-3 py-1.5 shadow-lg border border-border text-center">
                    <div className="text-lg font-bold text-accent">5+</div>
                    <div className="text-xs text-muted-foreground leading-tight">
                      {language === "pt" ? "anos exp." : "yrs exp."}
                    </div>
                  </div>
                </div>
                <h3 className="font-bold text-foreground text-xl mb-1">Caio Gudjenian</h3>
                <p className="text-accent font-semibold text-sm mb-4">
                  {language === "pt" ? "Especialista em Social Media" : "Social Media Specialist"}
                </p>
                <p className="text-muted-foreground text-sm mb-6">
                  {language === "pt"
                    ? "Responsável pela estratégia inspiradora de redes sociais, construindo e fortalecendo o reconhecimento da marca e a conexão com a comunidade."
                    : "Responsible for inspiring social media strategy, building and strengthening brand awareness and connection with the community."
                  }
                </p>
                <div className="bg-muted/60 rounded-2xl p-4 w-full border border-border/40">
                  <div className="flex items-center gap-2 mb-3">
                    <GraduationCap className="h-4 w-4 text-accent flex-shrink-0" />
                    <span className="text-xs font-semibold text-foreground/70 uppercase tracking-wide">
                      {language === "pt" ? "Formação" : "Education"}
                    </span>
                  </div>
                  <p className="text-accent text-sm font-medium">Marketing</p>
                  <p className="text-muted-foreground text-xs mb-2">Anhembi Morumbi</p>
                  <p className="text-accent text-sm font-medium">Growth Hacking</p>
                  <p className="text-muted-foreground text-xs">ESPM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="bg-[hsl(270,40%,15%)] rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              {t("about.ctaTitle")}
            </h2>
            <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
              {t("about.ctaDesc")}
            </p>
            <Button size="xl" asChild className="group bg-[hsl(250,50%,55%)] text-white hover:bg-[hsl(250,50%,48%)] shadow-lg hover:shadow-xl hover:-translate-y-0.5">
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
