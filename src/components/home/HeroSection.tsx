import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, TrendingUp, Zap } from "lucide-react";
import logo from "@/assets/logo.png";

const floatingIcons = [
  { icon: Sparkles, delay: "0s", position: "top-20 left-[10%]" },
  { icon: TrendingUp, delay: "1s", position: "top-32 right-[15%]" },
  { icon: Zap, delay: "2s", position: "bottom-32 left-[20%]" },
];

export function HeroSection() {
  return (
    <section className="relative bg-gradient-hero py-20 md:py-32 lg:py-40 overflow-hidden">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_hsl(217_91%_60%/0.15),_transparent_50%)] animate-pulse-slow" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_hsl(217_91%_60%/0.1),_transparent_40%)]" />
      
      {/* Floating Icons */}
      {floatingIcons.map((item, index) => (
        <div
          key={index}
          className={`absolute ${item.position} hidden lg:block animate-float`}
          style={{ animationDelay: item.delay }}
        >
          <div className="bg-accent/10 backdrop-blur-sm rounded-2xl p-4">
            <item.icon className="h-8 w-8 text-accent/60" />
          </div>
        </div>
      ))}
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      
      <div className="container px-4 md:px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-8 animate-slide-up">
            <div className="relative">
              <img src={logo} alt="" className="h-5 w-5" aria-hidden="true" />
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-accent rounded-full animate-ping" />
            </div>
            <span className="text-sm font-medium text-primary-foreground">
              Boutique SEO Agency
            </span>
          </div>
          
          {/* Headline with Animated Text */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            <span className="animate-fade-in inline-block">High-Impact SEO</span>
            <span className="block text-accent animate-slide-up" style={{ animationDelay: "0.2s" }}>
              That Drives Growth
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.4s" }}>
            Goody SEO is a boutique agency specializing in cost-efficient strategies 
            that enhance your online presence and drive measurable business results.
          </p>
          
          {/* CTA Buttons with Hover Effects */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.6s" }}>
            <Button variant="hero" size="xl" asChild className="group">
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                Book a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild className="group">
              <Link to="/services/seo">
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
              </Link>
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-primary-foreground/10 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <p className="text-sm text-primary-foreground/50 mb-4">Trusted by growing businesses worldwide</p>
            <div className="flex flex-wrap justify-center gap-8 text-primary-foreground/40">
              <span className="text-2xl font-bold">150+</span>
              <span className="text-primary-foreground/20">|</span>
              <span className="text-sm font-medium self-center">Clients Served</span>
              <span className="text-primary-foreground/20">|</span>
              <span className="text-2xl font-bold">3x</span>
              <span className="text-primary-foreground/20">|</span>
              <span className="text-sm font-medium self-center">Avg. Traffic Growth</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
