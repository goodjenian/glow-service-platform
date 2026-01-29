import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Search, 
  Sparkles, 
  Zap, 
  Bot, 
  Share2, 
  ArrowRight,
  CheckCircle2,
  Target,
  TrendingUp,
  Users
} from "lucide-react";
import logo from "@/assets/logo.png";

const services = [
  {
    title: "SEO Services",
    description: "Technical, On-Page & Content optimization to boost your organic visibility and drive qualified traffic.",
    icon: Search,
    href: "/services/seo",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    title: "GEO Optimization",
    description: "Future-proof your visibility for AI search engines and LLMs with entity enrichment and schema strategies.",
    icon: Sparkles,
    href: "/services/geo",
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    title: "Site Express",
    description: "Rapid frontend development with modern technologies. Get your professional site live in days, not months.",
    icon: Zap,
    href: "/services/site-express",
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    title: "AI Agents",
    description: "Automate SEO tasks and deploy intelligent sales agents with n8n workflows and custom AI solutions.",
    icon: Bot,
    href: "/services/ai-agents",
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    title: "Social Media",
    description: "Engaging visual content creation for your social channels. Videos, images, and graphics that convert.",
    icon: Share2,
    href: "/services/social-media",
    color: "bg-rose-500/10 text-rose-600",
  },
];

const stats = [
  { value: "150+", label: "Clients Served" },
  { value: "3x", label: "Average Traffic Growth" },
  { value: "95%", label: "Client Satisfaction" },
  { value: "10+", label: "Years Experience" },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-20 md:py-32 lg:py-40 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_hsl(217_91%_60%/0.15),_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_hsl(217_91%_60%/0.1),_transparent_40%)]" />
        
        <div className="container px-4 md:px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-8">
              <img src={logo} alt="" className="h-5 w-5" />
              <span className="text-sm font-medium text-primary-foreground">
                Boutique SEO Agency
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-in">
              High-Impact SEO
              <span className="block text-accent">That Drives Growth</span>
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto animate-slide-up">
              Goody SEO is a boutique agency specializing in cost-efficient strategies 
              that enhance your online presence and drive measurable business results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Button variant="hero" size="xl" asChild>
                <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                  Book a Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/services/seo">
                  Explore Services
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-card border-y border-border">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business goals
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link key={index} to={service.href} className="group">
                <Card className="h-full hover-lift border-border/50 bg-gradient-card transition-all duration-300 group-hover:border-accent/30">
                  <CardHeader>
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${service.color} mb-4`}>
                      <service.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="group-hover:text-accent transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground text-base">
                      {service.description}
                    </CardDescription>
                    <div className="mt-4 flex items-center text-accent font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn more <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="py-16 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Partner with Goody SEO?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We're not just another SEO agency. We're your dedicated growth partners, 
                combining technical expertise with strategic thinking to deliver results that matter.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-accent/20 p-2 mt-1">
                    <Target className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Tailored Strategies</h3>
                    <p className="text-sm text-muted-foreground">
                      Custom solutions built for your specific business goals
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-accent/20 p-2 mt-1">
                    <TrendingUp className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Data-Driven Results</h3>
                    <p className="text-sm text-muted-foreground">
                      Every decision backed by analytics and insights
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-accent/20 p-2 mt-1">
                    <Users className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Boutique Attention</h3>
                    <p className="text-sm text-muted-foreground">
                      Personal service, not an assembly line approach
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-accent/20 p-2 mt-1">
                    <CheckCircle2 className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Proven Track Record</h3>
                    <p className="text-sm text-muted-foreground">
                      Consistent results across diverse industries
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-hero flex items-center justify-center overflow-hidden">
                <img src={logo} alt="Goody SEO" className="w-48 h-48 opacity-80 animate-float" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-6 shadow-xl border border-border">
                <div className="text-3xl font-bold text-foreground mb-1">3x</div>
                <div className="text-sm text-muted-foreground">Average traffic growth</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="bg-gradient-hero rounded-3xl p-8 md:p-12 lg:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_hsl(217_91%_60%/0.2),_transparent_60%)]" />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
                Ready to Grow Your Business?
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
                Let's discuss your goals and create a strategy that delivers real results.
              </p>
              <Button variant="hero" size="xl" asChild>
                <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                  Schedule Your Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
