import { Link } from "react-router-dom";
import { ArrowRight, Search, Sparkles, Zap, Bot, Share2, DollarSign } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import n8nWorkflow from "@/assets/n8n-workflow.jpg";

export function WhyPartnerSection() {
  const { t } = useLanguage();

  const services = [
    {
      title: t("services.seo.title"),
      description: "Our analytical approach to SEO allows us to pair quick wins with larger, high-impact projects, ensuring that you see an uptick in revenue as quickly as possible as well as sustainable long-term growth.",
      descriptionPt: "Nossa abordagem analítica de SEO nos permite combinar vitórias rápidas com projetos de alto impacto, garantindo aumento de receita o mais rápido possível e crescimento sustentável a longo prazo.",
      href: "/services/seo",
      color: "border-blue-500",
    },
    {
      title: t("services.geo.title"),
      description: "Prepare your brand for AI-powered search engines with entity enrichment, structured data, and knowledge graph optimization that ensures visibility in ChatGPT, Perplexity, and Google SGE responses.",
      descriptionPt: "Prepare sua marca para motores de busca com IA através de enriquecimento de entidades, dados estruturados e otimização de knowledge graph que garantem visibilidade em respostas do ChatGPT, Perplexity e Google SGE.",
      href: "/services/geo",
      color: "border-purple-500",
    },
    {
      title: t("services.siteExpress.title"),
      description: "Get your professional website live in days, not months. Our AI-powered development process delivers beautiful, fast-loading, conversion-optimized sites at a fraction of traditional agency costs.",
      descriptionPt: "Coloque seu site profissional no ar em dias, não meses. Nosso processo de desenvolvimento com IA entrega sites bonitos, rápidos e otimizados para conversão por uma fração do custo de agências tradicionais.",
      href: "/services/site-express",
      color: "border-amber-500",
    },
    {
      title: t("services.paidTraffic.title"),
      description: "Strategic Google Ads, Meta Ads, and LinkedIn campaigns with AI-optimized bidding and targeting. Get immediate visibility and qualified leads while maximizing your advertising ROI.",
      descriptionPt: "Campanhas estratégicas de Google Ads, Meta Ads e LinkedIn com lances e segmentação otimizados por IA. Obtenha visibilidade imediata e leads qualificados maximizando seu ROI em publicidade.",
      href: "/services/paid-traffic",
      color: "border-teal-500",
    },
    {
      title: t("services.aiAgents.title"),
      description: "Automate repetitive marketing tasks and deploy AI sales agents that qualify leads 24/7. Our intelligent workflows connect your tools and optimize operations while you focus on strategy.",
      descriptionPt: "Automatize tarefas de marketing repetitivas e implante agentes de vendas com IA que qualificam leads 24/7. Nossos workflows inteligentes conectam suas ferramentas e otimizam operações enquanto você foca na estratégia.",
      href: "/services/ai-agents",
      color: "border-emerald-500",
    },
    {
      title: t("services.socialMedia.title"),
      description: "Professional video and image content optimized for each social platform. Build brand awareness, nurture leads, and drive engagement with scroll-stopping visuals that convert followers into customers.",
      descriptionPt: "Conteúdo profissional de vídeo e imagem otimizado para cada plataforma social. Construa consciência de marca, nutra leads e gere engajamento com visuais que convertem seguidores em clientes.",
      href: "/services/social-media",
      color: "border-rose-500",
    },
  ];

  const { language } = useLanguage();

  return (
    <section id="about" className="py-16 md:py-24 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Services List */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-2">
              {language === "pt" ? "O que podemos fazer" : "What we can do"}
              <span className="text-accent">.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10">
              {t("partner.desc")}
            </p>
            
            <div className="space-y-8">
              {services.map((service, index) => (
                <div key={index} className={`border-l-4 ${service.color} pl-6`}>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {language === "pt" ? service.descriptionPt : service.description}
                  </p>
                  <Link 
                    to={service.href} 
                    className="text-accent font-medium text-sm inline-flex items-center hover:underline"
                  >
                    {t("services.learnMore")}
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="relative lg:sticky lg:top-24">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src={n8nWorkflow} 
                alt={language === "pt" ? "Dashboard de automação de workflows" : "Workflow automation dashboard"}
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Stats Cards */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-6 shadow-xl border border-border">
              <div className="text-3xl font-bold text-foreground mb-1">3x</div>
              <div className="text-sm text-muted-foreground">{t("hero.growth")}</div>
            </div>
            
            <div className="absolute -top-4 -right-4 bg-card rounded-2xl p-4 shadow-xl border border-border">
              <div className="text-2xl font-bold text-foreground mb-1">150+</div>
              <div className="text-xs text-muted-foreground">{t("hero.clients")}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
