import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";

interface Feature {
  title: string;
  description: string;
}

interface RelatedService {
  name: string;
  href: string;
  description: string;
}

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  features: Feature[];
  benefits: string[];
  ctaText?: string;
  relatedServices?: RelatedService[];
}

export function ServicePageLayout({
  title,
  subtitle,
  description,
  icon: Icon,
  features,
  benefits,
  ctaText = "Get Started Today",
  relatedServices,
}: ServicePageLayoutProps) {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_hsl(217_91%_60%/0.1),_transparent_50%)]" />
        <div className="container px-4 md:px-6 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/20 mb-6">
              <Icon className="w-8 h-8 text-accent" />
            </div>
            <p className="text-accent font-medium mb-4 tracking-wide uppercase">
              {subtitle}
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 animate-slide-up">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="xl" asChild>
                <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                  {ctaText}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Deliver</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions tailored to your business needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="hover-lift border-border/50 bg-gradient-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose Goody SEO?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                We're a boutique agency that treats every client like a priority, 
                not just another account. Our personalized approach delivers measurable results.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="rounded-full bg-accent/20 p-1 mt-0.5">
                      <Check className="h-4 w-4 text-accent" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-hero flex items-center justify-center">
                <Icon className="w-32 h-32 text-primary-foreground/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services Section */}
      {relatedServices && relatedServices.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Related Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore our other services that complement this offering
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {relatedServices.map((service, index) => (
                <Link key={index} to={service.href} className="group">
                  <Card className="h-full hover-lift border-border/50 bg-gradient-card transition-all duration-300 group-hover:border-accent/30">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                        {service.name}
                      </h3>
                      <p className="text-muted-foreground">{service.description}</p>
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
      )}

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="bg-gradient-hero rounded-3xl p-8 md:p-12 lg:p-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help your business grow with our proven strategies.
            </p>
            <Button variant="hero" size="xl" asChild>
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                Book Your Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
