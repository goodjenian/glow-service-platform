import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { DottedSurface } from "@/components/ui/dotted-surface";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[hsl(220,70%,4%)]">
      {/* 3D Dotted Surface Background */}
      <DottedSurface className="z-0" />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[hsl(220,70%,4%)] z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(217_91%_60%/0.15),_transparent_70%)] z-10" />
      
      {/* Content */}
      <div className="container px-4 md:px-6 relative z-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[hsl(217,91%,60%/0.15)] backdrop-blur-sm border border-[hsl(217,91%,60%/0.3)] rounded-full px-5 py-2.5 mb-8 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[hsl(217,91%,60%)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[hsl(217,91%,60%)]"></span>
            </span>
            <span className="text-sm font-medium text-[hsl(0,0%,95%)]">
              Consultoria de SEO & Marketing Digital
            </span>
          </div>
          
          {/* Simplified H1 */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[hsl(0,0%,100%)] mb-6 leading-tight tracking-tight">
            <span className="block animate-fade-in">Estratégias que</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[hsl(217,91%,60%)] to-[hsl(200,90%,70%)] animate-slide-up" style={{ animationDelay: "0.2s" }}>
              Impulsionam Resultados
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-[hsl(220,20%,75%)] mb-10 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.4s" }}>
            Consultoria especializada em SEO, GEO e automação com IA. 
            Transformamos sua presença digital em crescimento mensurável.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: "0.6s" }}>
            <Button 
              size="xl" 
              asChild 
              className="group bg-[hsl(217,91%,60%)] hover:bg-[hsl(217,91%,55%)] text-[hsl(0,0%,100%)] border-0 shadow-[0_0_30px_hsl(217,91%,60%/0.4)]"
            >
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                Agende uma Consulta
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="xl" 
              asChild 
              className="group border-[hsl(217,91%,60%/0.5)] text-[hsl(0,0%,100%)] hover:bg-[hsl(217,91%,60%/0.1)] hover:border-[hsl(217,91%,60%)]"
            >
              <Link to="/services/seo">
                Nossos Serviços
                <ArrowRight className="ml-2 h-5 w-5 opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
              </Link>
            </Button>
          </div>
          
          {/* Trust Stats */}
          <div className="mt-16 pt-8 border-t border-[hsl(217,91%,60%/0.2)] animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[hsl(217,91%,60%)]">150+</div>
                <div className="text-sm text-[hsl(220,20%,60%)]">Clientes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[hsl(217,91%,60%)]">3x</div>
                <div className="text-sm text-[hsl(220,20%,60%)]">Crescimento</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[hsl(217,91%,60%)]">5+</div>
                <div className="text-sm text-[hsl(220,20%,60%)]">Anos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
