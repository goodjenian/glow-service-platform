import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "pt";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    "nav.services": "Services",
    "nav.about": "About",
    "nav.seo": "SEO Services",
    "nav.geo": "GEO Optimization",
    "nav.siteExpress": "Site Express",
    "nav.appCreation": "App Creation",
    "nav.aiAgents": "AI Agents",
    "nav.socialMedia": "Social Media",
    "nav.bookCall": "Book a Call",

    // Hero
    "hero.badge": "Boutique Marketing Agency",
    "hero.title1": "High-Impact",
    "hero.title2": "Automations That Drives Growth",
    "hero.description": "Goody SEO is a boutique agency specializing in data-driven automation strategies that enhance your online presence and drive measurable business results.",
    "hero.cta": "Book a Free Consultation",
    "hero.whatsapp": "Get in Touch",
    "hero.trust": "Trusted by growing businesses worldwide",
    "hero.clients": "Clients Served",
    "hero.growth": "Avg. Traffic Growth",

    // Services
    "services.title": "Our Services",
    "services.subtitle": "Comprehensive digital solutions tailored to your business goals",
    "services.seo.title": "SEO Services",
    "services.seo.desc": "Technical, On-Page & Content optimization to boost your organic visibility and drive qualified traffic.",
    "services.geo.title": "GEO Optimization",
    "services.geo.desc": "Future-proof your visibility for AI search engines and LLMs with entity enrichment and schema strategies.",
    "services.siteExpress.title": "Site Express",
    "services.siteExpress.desc": "Rapid frontend development with Lovable. Get your professional site live in days, not months.",
    "services.appCreation.title": "App Creation",
    "services.appCreation.desc": "Full-stack web applications with Base44. Databases, auth, and AI features included.",
    "services.aiAgents.title": "AI Agents",
    "services.aiAgents.desc": "Automate SEO tasks and deploy intelligent sales agents with n8n workflows and custom AI solutions.",
    "services.socialMedia.title": "Social Media",
    "services.socialMedia.desc": "Engaging visual content creation for your social channels. Videos, images, and graphics that convert.",
    "services.learnMore": "Learn more",

    // Why Partner
    "partner.title": "Why Partner with Goody SEO?",
    "partner.desc": "We leverage cutting-edge automation and AI workflows to accelerate your growth. Our n8n-powered systems handle repetitive tasks while our team focuses on strategic optimization that delivers measurable results.",
    "partner.tailored": "Tailored Strategies",
    "partner.tailoredDesc": "Custom automation solutions built for your specific business goals",
    "partner.datadriven": "Data-Driven Results",
    "partner.datadrivenDesc": "Every decision powered by AI analytics and real-time insights",
    "partner.boutique": "Boutique Attention",
    "partner.boutiqueDesc": "Personal service with enterprise-level automation",
    "partner.proven": "Proven Track Record",
    "partner.provenDesc": "Consistent results powered by intelligent workflows",

    // CTA
    "cta.title": "Ready to Grow Your Business?",
    "cta.desc": "Let's discuss your goals and create an automation strategy that delivers real results.",
    "cta.button": "Schedule Your Free Consultation",

    // Reviews
    "reviews.title": "Reviews",
    "reviews.subtitle": "What clients say",

    // Testimonial
    "testimonial.title": "What Our Clients Say",
    "testimonial.subtitle": "Real results from businesses like yours",
    "testimonial.quote": "The results have been phenomenal. We've seen significant growth in organic traffic and our automation workflows have saved countless hours every week.",
    "testimonial.watchVideo": "Watch the full testimonial",

    // About Page
    "about.founderRole": "Founder & SEO Strategist",
    "about.yearsExp": "Years Experience",
    "about.bio": "Economist with a data science background acting in the digital marketing world. Experienced with executive SEO for SaaS and E-commerce companies across Portugal, Armenia, United States, and Brazil.",
    "about.expTitle": "International Experience",
    "about.expSubtitle": "Building SEO strategies for companies across 4 continents",
    "about.exp1Location": "United Kingdom",
    "about.exp2Location": "United States",
    "about.exp3Location": "Portugal",
    "about.exp4Location": "Armenia",
    "about.education": "Education",
    "about.masters": "Master's in MKT Analytics & Data Science",
    "about.bachelors": "Bachelor's in Economic Science",
    "about.skills": "Technical Skills",
    "about.languages": "Languages",
    "about.teamTitle": "Our Team",
    "about.teamDesc": "A network of experienced professionals in digital marketing, technology, and creative design.",
    "about.team1Role": "SEO Specialists",
    "about.team1Desc": "Technical and content optimization experts",
    "about.team2Role": "Automation Engineers",
    "about.team2Desc": "n8n and AI workflow architects",
    "about.team3Role": "Creative Designers",
    "about.team3Desc": "Visual content and UX professionals",
    "about.ctaTitle": "Ready to Work Together?",
    "about.ctaDesc": "Let's discuss how our expertise can accelerate your business growth.",

    // Footer
    "footer.desc": "Boutique agency specializing in high-impact, data-driven automation strategies that enhance your online presence and drive business growth.",
    "footer.services": "Services",
    "footer.contact": "Contact",
    "footer.rights": "All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",

    // Service Pages
    "service.whatWeDeliver": "What We Deliver",
    "service.whatWeDeliverDesc": "Comprehensive solutions tailored to your business needs",
    "service.whyChoose": "Why Choose Goody SEO?",
    "service.whyChooseDesc": "We're a boutique agency that treats every client like a priority, not just another account. Our personalized approach delivers measurable results.",
    "service.related": "Related Services",
    "service.relatedDesc": "Explore our other services that complement this offering",
    "service.ctaTitle": "Ready to Transform Your Digital Presence?",
    "service.ctaDesc": "Let's discuss how we can help your business grow with our proven strategies.",
    "service.ctaButton": "Book Your Free Consultation",

    // SEO Page
    "seo.title": "SEO Services",
    "seo.subtitle": "Search Engine Optimization",
    "seo.desc": "Maximize your organic visibility with comprehensive Technical, On-Page, and Content SEO strategies that drive qualified traffic and business growth.",
    "seo.cta": "Get Your SEO Audit",
    "seo.feature1.title": "Technical SEO Audit",
    "seo.feature1.desc": "Comprehensive crawlability, indexing, and site architecture analysis. We identify and fix issues that prevent search engines from properly accessing your content.",
    "seo.feature2.title": "On-Page Optimization",
    "seo.feature2.desc": "Keyword-focused titles, meta descriptions, and entity alignment. Get an easy-to-follow plan to maximize page visibility.",
    "seo.feature3.title": "Content Strategy",
    "seo.feature3.desc": "Scalable, keyword-driven content strategies with structured briefings and publishing plans to grow traffic with clarity.",
    "seo.feature4.title": "Core Web Vitals",
    "seo.feature4.desc": "Page speed optimization and user experience improvements that satisfy both visitors and search engine algorithms.",
    "seo.feature5.title": "Schema & Structured Data",
    "seo.feature5.desc": "Rich snippets implementation to enhance your search listings and improve click-through rates.",
    "seo.feature6.title": "Link Profile Analysis",
    "seo.feature6.desc": "Evaluate your backlink portfolio, identify toxic links, and develop strategies for quality link acquisition.",
    "seo.benefit1": "Actionable audit reports with prioritized recommendations",
    "seo.benefit2": "Implementation support for your technical team",
    "seo.benefit3": "Monthly progress tracking and reporting",
    "seo.benefit4": "Competitor analysis and benchmarking",
    "seo.benefit5": "Keyword research and opportunity mapping",
    "seo.benefit6": "Regular strategy reviews and optimization",

    // GEO Page
    "geo.title": "GEO Optimization",
    "geo.subtitle": "Generative Engine Optimization",
    "geo.desc": "Future-proof your SEO with strategies designed for AI search visibility. Schema, LLM.txt, entity enrichment, and tracking to increase your share of search in AI-driven results.",
    "geo.cta": "Start Your GEO Audit",
    "geo.feature1.title": "LLM Visibility Audit",
    "geo.feature1.desc": "Analyze how AI systems like ChatGPT, Perplexity, and Claude perceive and reference your brand and content.",
    "geo.feature2.title": "Entity Enrichment",
    "geo.feature2.desc": "Strengthen your brand's knowledge graph presence to improve recognition by generative AI systems.",
    "geo.feature3.title": "Schema Enhancement",
    "geo.feature3.desc": "Advanced structured data implementation designed specifically for AI consumption and understanding.",
    "geo.feature4.title": "LLM.txt Configuration",
    "geo.feature4.desc": "Configure machine-readable instructions that guide AI models on how to interact with your content.",
    "geo.feature5.title": "AI Tracking & Analytics",
    "geo.feature5.desc": "Monitor and measure your share of visibility in AI-generated responses and recommendations.",
    "geo.feature6.title": "Content Optimization for AI",
    "geo.feature6.desc": "Restructure content to be more digestible and citable by large language models.",
    "geo.benefit1": "Future-proof your SEO for the AI-first search landscape",
    "geo.benefit2": "Increase brand mentions in AI-generated responses",
    "geo.benefit3": "Improve entity recognition across AI platforms",
    "geo.benefit4": "Stay ahead of competitors in generative search",
    "geo.benefit5": "Detailed visibility reports for AI systems",
    "geo.benefit6": "Ongoing optimization as AI search evolves",

    // Site Express Page
    "siteExpress.title": "Site Express",
    "siteExpress.subtitle": "Rapid Frontend Development with Lovable",
    "siteExpress.desc": "Professional website development at lightning speed. We create beautiful, responsive sites using Lovable to get you online faster—perfect for landing pages, portfolios, and business websites.",
    "siteExpress.cta": "Launch Your Site Fast",
    "siteExpress.feature1.title": "Rapid Development",
    "siteExpress.feature1.desc": "Get your professional website live in days, not months. We use cutting-edge tools like Lovable for accelerated delivery.",
    "siteExpress.feature2.title": "Modern Design",
    "siteExpress.feature2.desc": "Clean, professional aesthetics that reflect your brand identity and convert visitors into customers.",
    "siteExpress.feature3.title": "Responsive Layouts",
    "siteExpress.feature3.desc": "Perfect display across all devices—desktop, tablet, and mobile—with no compromises on user experience.",
    "siteExpress.feature4.title": "SEO-Ready Structure",
    "siteExpress.feature4.desc": "Built with search engines in mind from day one. Proper semantic HTML, meta tags, and performance optimization.",
    "siteExpress.feature5.title": "Performance Focused",
    "siteExpress.feature5.desc": "Lightning-fast load times with optimized assets, lazy loading, and modern web technologies.",
    "siteExpress.feature6.title": "Easy Maintenance",
    "siteExpress.feature6.desc": "Clean, well-documented code that's easy to update and maintain as your business grows.",
    "siteExpress.benefit1": "Go live in days instead of months",
    "siteExpress.benefit2": "No coding knowledge required from your side",
    "siteExpress.benefit3": "Built-in SEO best practices",
    "siteExpress.benefit4": "Modern, conversion-focused design",
    "siteExpress.benefit5": "Mobile-first responsive layouts",
    "siteExpress.benefit6": "Ongoing support and updates available",

    // App Creation Page
    "appCreation.title": "App Creation",
    "appCreation.subtitle": "Full-Stack Development with Base44",
    "appCreation.desc": "Complete web applications with databases, authentication, and AI capabilities. Powered by Base44 for rapid full-stack development.",
    "appCreation.cta": "Build Your App",
    "appCreation.feature1.title": "Database Integration",
    "appCreation.feature1.desc": "Built-in database management with automatic API generation. Store and manage your data effortlessly.",
    "appCreation.feature2.title": "User Authentication",
    "appCreation.feature2.desc": "Secure login systems with email, social auth, and role-based access control out of the box.",
    "appCreation.feature3.title": "AI Features",
    "appCreation.feature3.desc": "Integrate AI capabilities like content generation, chat, and intelligent automation into your app.",
    "appCreation.feature4.title": "Custom Workflows",
    "appCreation.feature4.desc": "Build complex business logic with visual workflow builders and automated processes.",
    "appCreation.feature5.title": "API Integration",
    "appCreation.feature5.desc": "Connect to external services and APIs to extend your application's capabilities.",
    "appCreation.feature6.title": "Scalable Architecture",
    "appCreation.feature6.desc": "Enterprise-ready infrastructure that grows with your business needs.",
    "appCreation.benefit1": "Full-stack apps without the complexity",
    "appCreation.benefit2": "Built-in database and authentication",
    "appCreation.benefit3": "AI-powered features ready to use",
    "appCreation.benefit4": "Rapid development and deployment",
    "appCreation.benefit5": "Scalable cloud infrastructure",
    "appCreation.benefit6": "Ongoing maintenance and support",

    // AI Agents Page
    "aiAgents.title": "AI Agents & Automation",
    "aiAgents.subtitle": "Intelligent Automation with n8n",
    "aiAgents.desc": "Automate SEO tasks and deploy AI agents for sales and marketing with custom n8n workflows. Work smarter, not harder.",
    "aiAgents.cta": "Automate Your Marketing",
    "aiAgents.feature1.title": "SEO Task Automation",
    "aiAgents.feature1.desc": "Automate repetitive SEO workflows like reporting, monitoring, and data collection with intelligent n8n integrations.",
    "aiAgents.feature2.title": "AI Sales Agents",
    "aiAgents.feature2.desc": "Deploy conversational AI agents that qualify leads, answer questions, and guide prospects through your sales funnel 24/7.",
    "aiAgents.feature3.title": "Custom Workflows",
    "aiAgents.feature3.desc": "Build tailored automation workflows that connect your tools and streamline your marketing operations.",
    "aiAgents.feature4.title": "Lead Enrichment",
    "aiAgents.feature4.desc": "Automatically enrich and score leads using AI to prioritize high-value opportunities for your sales team.",
    "aiAgents.feature5.title": "Content Automation",
    "aiAgents.feature5.desc": "Streamline content creation, distribution, and repurposing with AI-powered workflows.",
    "aiAgents.feature6.title": "Analytics & Reporting",
    "aiAgents.feature6.desc": "Automated dashboards and reports that deliver insights directly to your inbox or Slack.",
    "aiAgents.benefit1": "Save hours on repetitive marketing tasks",
    "aiAgents.benefit2": "24/7 lead qualification and engagement",
    "aiAgents.benefit3": "Seamless integration with your existing tools",
    "aiAgents.benefit4": "Scalable automation that grows with you",
    "aiAgents.benefit5": "Custom solutions built for your needs",
    "aiAgents.benefit6": "Ongoing optimization and support",

    // Social Media Page
    "socialMedia.title": "Social Media Content",
    "socialMedia.subtitle": "Visual Content Creation",
    "socialMedia.desc": "Engaging videos and images that capture attention and convert followers into customers. Professional content creation for all your social channels.",
    "socialMedia.cta": "Elevate Your Social Presence",
    "socialMedia.feature1.title": "Video Content Creation",
    "socialMedia.feature1.desc": "Engaging short-form and long-form video content optimized for each platform—Instagram Reels, TikTok, YouTube, and more.",
    "socialMedia.feature2.title": "Visual Graphics",
    "socialMedia.feature2.desc": "Eye-catching images, infographics, and carousel posts that stop the scroll and drive engagement.",
    "socialMedia.feature3.title": "Brand Consistency",
    "socialMedia.feature3.desc": "Cohesive visual identity across all platforms that reinforces your brand and builds recognition.",
    "socialMedia.feature4.title": "Content Calendar",
    "socialMedia.feature4.desc": "Strategic planning and scheduling to maintain consistent presence and maximize reach.",
    "socialMedia.feature5.title": "Platform Optimization",
    "socialMedia.feature5.desc": "Content tailored to each platform's unique requirements, algorithms, and audience expectations.",
    "socialMedia.feature6.title": "Trend Integration",
    "socialMedia.feature6.desc": "Stay relevant with timely content that leverages trending topics and formats for maximum visibility.",
    "socialMedia.benefit1": "Professional-quality content without the overhead",
    "socialMedia.benefit2": "Consistent posting schedule maintained",
    "socialMedia.benefit3": "Content optimized for each platform",
    "socialMedia.benefit4": "Increased engagement and follower growth",
    "socialMedia.benefit5": "Time savings on content creation",
    "socialMedia.benefit6": "Analytics-driven content optimization",
  },
  pt: {
    // Navigation
    "nav.services": "Serviços",
    "nav.about": "Sobre",
    "nav.seo": "Serviços SEO",
    "nav.geo": "Otimização GEO",
    "nav.siteExpress": "Site Express",
    "nav.appCreation": "Criação de Apps",
    "nav.aiAgents": "Agentes IA",
    "nav.socialMedia": "Redes Sociais",
    "nav.bookCall": "Agendar Chamada",

    // Hero
    "hero.badge": "Agência boutique de marketing",
    "hero.title1": "Alto impacto",
    "hero.title2": "Automações que impulsionam o crescimento",
    "hero.description": "A Goody SEO é uma agência boutique especializada em estratégias de automação baseadas em dados que melhoram sua presença online e geram resultados mensuráveis.",
    "hero.cta": "Agende uma consulta gratuita",
    "hero.whatsapp": "Entre em contato",
    "hero.trust": "Confiada por empresas em crescimento no mundo todo",
    "hero.clients": "Clientes atendidos",
    "hero.growth": "Crescimento médio de tráfego",

    // Services
    "services.title": "Nossos serviços",
    "services.subtitle": "Soluções digitais completas adaptadas aos seus objetivos de negócio",
    "services.seo.title": "Serviços SEO",
    "services.seo.desc": "Otimização técnica, on-page e de conteúdo para aumentar sua visibilidade orgânica e atrair tráfego qualificado.",
    "services.geo.title": "Otimização GEO",
    "services.geo.desc": "Prepare-se para o futuro com visibilidade em motores de busca IA e LLMs através de enriquecimento de entidades e estratégias de schema.",
    "services.siteExpress.title": "Site Express",
    "services.siteExpress.desc": "Desenvolvimento frontend rápido com Lovable. Coloque seu site profissional no ar em dias, não meses.",
    "services.appCreation.title": "Criação de apps",
    "services.appCreation.desc": "Aplicações web full-stack com Base44. Banco de dados, autenticação e recursos de IA incluídos.",
    "services.aiAgents.title": "Agentes IA",
    "services.aiAgents.desc": "Automatize tarefas de SEO e implante agentes de vendas inteligentes com workflows n8n e soluções de IA personalizadas.",
    "services.socialMedia.title": "Redes sociais",
    "services.socialMedia.desc": "Criação de conteúdo visual envolvente para seus canais sociais. Vídeos, imagens e gráficos que convertem.",
    "services.learnMore": "Saiba mais",

    // Why Partner
    "partner.title": "Por que ser parceiro da Goody SEO?",
    "partner.desc": "Utilizamos automação de ponta e workflows de IA para acelerar seu crescimento. Nossos sistemas com n8n lidam com tarefas repetitivas enquanto nossa equipe foca na otimização estratégica que entrega resultados mensuráveis.",
    "partner.tailored": "Estratégias personalizadas",
    "partner.tailoredDesc": "Soluções de automação customizadas para seus objetivos específicos de negócio",
    "partner.datadriven": "Resultados baseados em dados",
    "partner.datadrivenDesc": "Cada decisão alimentada por análises de IA e insights em tempo real",
    "partner.boutique": "Atenção boutique",
    "partner.boutiqueDesc": "Atendimento pessoal com automação de nível empresarial",
    "partner.proven": "Histórico comprovado",
    "partner.provenDesc": "Resultados consistentes alimentados por workflows inteligentes",

    // CTA
    "cta.title": "Pronto para crescer seu negócio?",
    "cta.desc": "Vamos discutir seus objetivos e criar uma estratégia de automação que entrega resultados reais.",
    "cta.button": "Agende sua consulta gratuita",

    // Reviews
    "reviews.title": "Avaliações",
    "reviews.subtitle": "O que nossos clientes dizem",

    // Testimonial
    "testimonial.title": "O que nossos clientes dizem",
    "testimonial.subtitle": "Resultados reais de empresas como a sua",
    "testimonial.quote": "Os resultados foram fenomenais. Vimos um crescimento significativo no tráfego orgânico e nossos workflows de automação economizaram incontáveis horas toda semana.",
    "testimonial.watchVideo": "Assista ao depoimento completo",

    // About Page
    "about.founderRole": "Fundador e estrategista SEO",
    "about.yearsExp": "Anos de experiência",
    "about.bio": "Economista com formação em ciência de dados atuando no mundo do marketing digital. Experiente com SEO executivo para empresas SaaS e E-commerce em Portugal, Armênia, Estados Unidos e Brasil.",
    "about.expTitle": "Experiência internacional",
    "about.expSubtitle": "Construindo estratégias SEO para empresas em 4 continentes",
    "about.exp1Location": "Reino Unido",
    "about.exp2Location": "Estados Unidos",
    "about.exp3Location": "Portugal",
    "about.exp4Location": "Armênia",
    "about.education": "Formação",
    "about.masters": "Mestrado em MKT Analytics & Data Science",
    "about.bachelors": "Bacharelado em Ciências Econômicas",
    "about.skills": "Habilidades técnicas",
    "about.languages": "Idiomas",
    "about.teamTitle": "Nossa equipe",
    "about.teamDesc": "Uma rede de profissionais experientes em marketing digital, tecnologia e design criativo.",
    "about.team1Role": "Especialistas SEO",
    "about.team1Desc": "Experts em otimização técnica e de conteúdo",
    "about.team2Role": "Engenheiros de automação",
    "about.team2Desc": "Arquitetos de workflows n8n e IA",
    "about.team3Role": "Designers criativos",
    "about.team3Desc": "Profissionais de conteúdo visual e UX",
    "about.ctaTitle": "Pronto para trabalhar conosco?",
    "about.ctaDesc": "Vamos discutir como nossa expertise pode acelerar o crescimento do seu negócio.",

    // Footer
    "footer.desc": "Agência boutique especializada em estratégias de automação de alto impacto e baseadas em dados que melhoram sua presença online e impulsionam o crescimento do negócio.",
    "footer.services": "Serviços",
    "footer.contact": "Contato",
    "footer.rights": "Todos os direitos reservados.",
    "footer.privacy": "Política de privacidade",
    "footer.terms": "Termos de serviço",

    // Service Pages
    "service.whatWeDeliver": "O que entregamos",
    "service.whatWeDeliverDesc": "Soluções completas adaptadas às necessidades do seu negócio",
    "service.whyChoose": "Por que escolher a Goody SEO?",
    "service.whyChooseDesc": "Somos uma agência boutique que trata cada cliente como prioridade, não apenas mais uma conta. Nossa abordagem personalizada entrega resultados mensuráveis.",
    "service.related": "Serviços relacionados",
    "service.relatedDesc": "Explore nossos outros serviços que complementam esta oferta",
    "service.ctaTitle": "Pronto para transformar sua presença digital?",
    "service.ctaDesc": "Vamos discutir como podemos ajudar seu negócio a crescer com nossas estratégias comprovadas.",
    "service.ctaButton": "Agende sua consulta gratuita",

    // SEO Page
    "seo.title": "Serviços SEO",
    "seo.subtitle": "Otimização para motores de busca",
    "seo.desc": "Maximize sua visibilidade orgânica com estratégias abrangentes de SEO Técnico, On-Page e de Conteúdo que geram tráfego qualificado e crescimento de negócios.",
    "seo.cta": "Solicite Sua Auditoria SEO",
    "seo.feature1.title": "Auditoria SEO Técnica",
    "seo.feature1.desc": "Análise completa de rastreabilidade, indexação e arquitetura do site. Identificamos e corrigimos problemas que impedem os motores de busca de acessar seu conteúdo adequadamente.",
    "seo.feature2.title": "Otimização On-Page",
    "seo.feature2.desc": "Títulos focados em palavras-chave, meta descriptions e alinhamento de entidades. Receba um plano fácil de seguir para maximizar a visibilidade das páginas.",
    "seo.feature3.title": "Estratégia de Conteúdo",
    "seo.feature3.desc": "Estratégias de conteúdo escaláveis e orientadas por palavras-chave com briefings estruturados e planos de publicação para crescer o tráfego com clareza.",
    "seo.feature4.title": "Core Web Vitals",
    "seo.feature4.desc": "Otimização de velocidade de página e melhorias de experiência do usuário que satisfazem tanto visitantes quanto algoritmos de busca.",
    "seo.feature5.title": "Schema e Dados Estruturados",
    "seo.feature5.desc": "Implementação de rich snippets para melhorar suas listagens de busca e aumentar taxas de clique.",
    "seo.feature6.title": "Análise de Perfil de Links",
    "seo.feature6.desc": "Avalie seu portfólio de backlinks, identifique links tóxicos e desenvolva estratégias para aquisição de links de qualidade.",
    "seo.benefit1": "Relatórios de auditoria acionáveis com recomendações priorizadas",
    "seo.benefit2": "Suporte de implementação para sua equipe técnica",
    "seo.benefit3": "Acompanhamento e relatórios mensais de progresso",
    "seo.benefit4": "Análise de concorrentes e benchmarking",
    "seo.benefit5": "Pesquisa de palavras-chave e mapeamento de oportunidades",
    "seo.benefit6": "Revisões regulares de estratégia e otimização",

    // GEO Page
    "geo.title": "Otimização GEO",
    "geo.subtitle": "Otimização para engines generativas",
    "geo.desc": "Prepare seu SEO para o futuro com estratégias projetadas para visibilidade em buscas com IA. Schema, LLM.txt, enriquecimento de entidades e rastreamento para aumentar sua participação em resultados gerados por IA.",
    "geo.cta": "Inicie Sua Auditoria GEO",
    "geo.feature1.title": "Auditoria de Visibilidade LLM",
    "geo.feature1.desc": "Analise como sistemas de IA como ChatGPT, Perplexity e Claude percebem e referenciam sua marca e conteúdo.",
    "geo.feature2.title": "Enriquecimento de Entidades",
    "geo.feature2.desc": "Fortaleça a presença da sua marca no grafo de conhecimento para melhorar o reconhecimento por sistemas de IA generativa.",
    "geo.feature3.title": "Aprimoramento de Schema",
    "geo.feature3.desc": "Implementação avançada de dados estruturados projetada especificamente para consumo e compreensão por IA.",
    "geo.feature4.title": "Configuração LLM.txt",
    "geo.feature4.desc": "Configure instruções legíveis por máquina que orientam modelos de IA sobre como interagir com seu conteúdo.",
    "geo.feature5.title": "Rastreamento e Analytics de IA",
    "geo.feature5.desc": "Monitore e meça sua participação de visibilidade em respostas e recomendações geradas por IA.",
    "geo.feature6.title": "Otimização de Conteúdo para IA",
    "geo.feature6.desc": "Reestruture conteúdo para ser mais digestível e citável por grandes modelos de linguagem.",
    "geo.benefit1": "Prepare seu SEO para o cenário de busca IA-first",
    "geo.benefit2": "Aumente menções da marca em respostas geradas por IA",
    "geo.benefit3": "Melhore o reconhecimento de entidades em plataformas de IA",
    "geo.benefit4": "Fique à frente dos concorrentes em busca generativa",
    "geo.benefit5": "Relatórios detalhados de visibilidade para sistemas de IA",
    "geo.benefit6": "Otimização contínua conforme a busca IA evolui",

    // Site Express Page
    "siteExpress.title": "Site Express",
    "siteExpress.subtitle": "Desenvolvimento frontend rápido com Lovable",
    "siteExpress.desc": "Desenvolvimento profissional de sites na velocidade da luz. Criamos sites bonitos e responsivos usando Lovable para colocá-lo online mais rápido—perfeito para landing pages, portfólios e sites empresariais.",
    "siteExpress.cta": "Lance Seu Site Rápido",
    "siteExpress.feature1.title": "Desenvolvimento Rápido",
    "siteExpress.feature1.desc": "Coloque seu site profissional no ar em dias, não meses. Usamos ferramentas de ponta como Lovable para entrega acelerada.",
    "siteExpress.feature2.title": "Design Moderno",
    "siteExpress.feature2.desc": "Estética limpa e profissional que reflete a identidade da sua marca e converte visitantes em clientes.",
    "siteExpress.feature3.title": "Layouts Responsivos",
    "siteExpress.feature3.desc": "Exibição perfeita em todos os dispositivos—desktop, tablet e mobile—sem comprometer a experiência do usuário.",
    "siteExpress.feature4.title": "Estrutura Pronta para SEO",
    "siteExpress.feature4.desc": "Construído com motores de busca em mente desde o primeiro dia. HTML semântico apropriado, meta tags e otimização de performance.",
    "siteExpress.feature5.title": "Foco em Performance",
    "siteExpress.feature5.desc": "Tempos de carregamento ultrarrápidos com assets otimizados, lazy loading e tecnologias web modernas.",
    "siteExpress.feature6.title": "Manutenção Fácil",
    "siteExpress.feature6.desc": "Código limpo e bem documentado que é fácil de atualizar e manter conforme seu negócio cresce.",
    "siteExpress.benefit1": "Entre no ar em dias ao invés de meses",
    "siteExpress.benefit2": "Nenhum conhecimento de programação necessário do seu lado",
    "siteExpress.benefit3": "Melhores práticas de SEO integradas",
    "siteExpress.benefit4": "Design moderno focado em conversão",
    "siteExpress.benefit5": "Layouts responsivos mobile-first",
    "siteExpress.benefit6": "Suporte e atualizações contínuas disponíveis",

    // App Creation Page
    "appCreation.title": "Criação de apps",
    "appCreation.subtitle": "Desenvolvimento full-stack com Base44",
    "appCreation.desc": "Aplicações web completas com banco de dados, autenticação e recursos de IA. Alimentado por Base44 para desenvolvimento full-stack rápido.",
    "appCreation.cta": "Construa Seu App",
    "appCreation.feature1.title": "Integração de Banco de Dados",
    "appCreation.feature1.desc": "Gerenciamento de banco de dados integrado com geração automática de API. Armazene e gerencie seus dados sem esforço.",
    "appCreation.feature2.title": "Autenticação de Usuários",
    "appCreation.feature2.desc": "Sistemas de login seguros com email, auth social e controle de acesso baseado em funções prontos para uso.",
    "appCreation.feature3.title": "Recursos de IA",
    "appCreation.feature3.desc": "Integre recursos de IA como geração de conteúdo, chat e automação inteligente no seu app.",
    "appCreation.feature4.title": "Workflows Personalizados",
    "appCreation.feature4.desc": "Construa lógica de negócios complexa com construtores visuais de workflow e processos automatizados.",
    "appCreation.feature5.title": "Integração de APIs",
    "appCreation.feature5.desc": "Conecte-se a serviços externos e APIs para estender as capacidades da sua aplicação.",
    "appCreation.feature6.title": "Arquitetura Escalável",
    "appCreation.feature6.desc": "Infraestrutura pronta para empresas que cresce com as necessidades do seu negócio.",
    "appCreation.benefit1": "Apps full-stack sem a complexidade",
    "appCreation.benefit2": "Banco de dados e autenticação integrados",
    "appCreation.benefit3": "Recursos com IA prontos para usar",
    "appCreation.benefit4": "Desenvolvimento e deploy rápidos",
    "appCreation.benefit5": "Infraestrutura em nuvem escalável",
    "appCreation.benefit6": "Manutenção e suporte contínuos",

    // AI Agents Page
    "aiAgents.title": "Agentes IA & automação",
    "aiAgents.subtitle": "Automação inteligente com n8n",
    "aiAgents.desc": "Automatize tarefas de SEO e implante agentes IA para vendas e marketing com workflows n8n personalizados. Trabalhe de forma mais inteligente, não mais difícil.",
    "aiAgents.cta": "Automatize Seu Marketing",
    "aiAgents.feature1.title": "Automação de Tarefas SEO",
    "aiAgents.feature1.desc": "Automatize workflows de SEO repetitivos como relatórios, monitoramento e coleta de dados com integrações n8n inteligentes.",
    "aiAgents.feature2.title": "Agentes de Vendas IA",
    "aiAgents.feature2.desc": "Implante agentes IA conversacionais que qualificam leads, respondem perguntas e guiam prospects pelo seu funil de vendas 24/7.",
    "aiAgents.feature3.title": "Workflows Personalizados",
    "aiAgents.feature3.desc": "Construa workflows de automação sob medida que conectam suas ferramentas e otimizam suas operações de marketing.",
    "aiAgents.feature4.title": "Enriquecimento de Leads",
    "aiAgents.feature4.desc": "Enriqueça e pontue leads automaticamente usando IA para priorizar oportunidades de alto valor para sua equipe de vendas.",
    "aiAgents.feature5.title": "Automação de Conteúdo",
    "aiAgents.feature5.desc": "Otimize criação, distribuição e reaproveitamento de conteúdo com workflows alimentados por IA.",
    "aiAgents.feature6.title": "Analytics e Relatórios",
    "aiAgents.feature6.desc": "Dashboards e relatórios automatizados que entregam insights diretamente no seu email ou Slack.",
    "aiAgents.benefit1": "Economize horas em tarefas de marketing repetitivas",
    "aiAgents.benefit2": "Qualificação e engajamento de leads 24/7",
    "aiAgents.benefit3": "Integração perfeita com suas ferramentas existentes",
    "aiAgents.benefit4": "Automação escalável que cresce com você",
    "aiAgents.benefit5": "Soluções personalizadas construídas para suas necessidades",
    "aiAgents.benefit6": "Otimização e suporte contínuos",

    // Social Media Page
    "socialMedia.title": "Conteúdo para redes sociais",
    "socialMedia.subtitle": "Criação de conteúdo visual",
    "socialMedia.desc": "Vídeos e imagens envolventes que capturam atenção e convertem seguidores em clientes. Criação de conteúdo profissional para todos os seus canais sociais.",
    "socialMedia.cta": "Eleve Sua Presença Social",
    "socialMedia.feature1.title": "Criação de Vídeo",
    "socialMedia.feature1.desc": "Conteúdo de vídeo curto e longo envolvente otimizado para cada plataforma—Instagram Reels, TikTok, YouTube e mais.",
    "socialMedia.feature2.title": "Gráficos Visuais",
    "socialMedia.feature2.desc": "Imagens chamativas, infográficos e posts carrossel que param o scroll e geram engajamento.",
    "socialMedia.feature3.title": "Consistência de Marca",
    "socialMedia.feature3.desc": "Identidade visual coesa em todas as plataformas que reforça sua marca e constrói reconhecimento.",
    "socialMedia.feature4.title": "Calendário de Conteúdo",
    "socialMedia.feature4.desc": "Planejamento e agendamento estratégico para manter presença consistente e maximizar alcance.",
    "socialMedia.feature5.title": "Otimização por Plataforma",
    "socialMedia.feature5.desc": "Conteúdo adaptado aos requisitos únicos, algoritmos e expectativas de audiência de cada plataforma.",
    "socialMedia.feature6.title": "Integração de Tendências",
    "socialMedia.feature6.desc": "Fique relevante com conteúdo oportuno que aproveita tópicos e formatos em alta para máxima visibilidade.",
    "socialMedia.benefit1": "Conteúdo de qualidade profissional sem overhead",
    "socialMedia.benefit2": "Cronograma de postagem consistente mantido",
    "socialMedia.benefit3": "Conteúdo otimizado para cada plataforma",
    "socialMedia.benefit4": "Aumento de engajamento e crescimento de seguidores",
    "socialMedia.benefit5": "Economia de tempo na criação de conteúdo",
    "socialMedia.benefit6": "Otimização de conteúdo baseada em dados",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("language");
    if (saved === "en" || saved === "pt") return saved;
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith("pt")) return "pt";
    return "en";
  });

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
