import { useLanguage } from "@/contexts/LanguageContext";
import { Star } from "lucide-react";
import telaAmbientalLogo from "@/assets/tela-ambiental-logo.png";
import brunaCacao from "@/assets/bruna-cacao.jpeg";

export function TestimonialSection() {
  const { t, language } = useLanguage();

  const testimonial = {
    name: "Bruna Cação",
    role: language === "pt" ? "Co-fundadora" : "Co-founder",
    company: "Tela Ambiental",
    companyUrl: "https://telaambiental.com.br/",
    quote: language === "pt" 
      ? "Começamos a trabalhar com a GoodySEO e já vimos ótimos resultados na nossa presença online. Estamos muito animados com o crescimento do negócio, então eu definitivamente recomendaria a GoodySEO para o seu negócio também."
      : "We've started working with GoodySEO and have already seen great results in our online presence. We're very excited about the business growth, so I'd definitely recommend GoodySEO for your business as well.",
    logo: telaAmbientalLogo,
  };

   return (
     <section className="pt-16 md:pt-24 pb-6 md:pb-8 bg-background relative overflow-hidden">
       {/* Decorative gradient blobs */}
       <div className="absolute top-0 left-1/4 w-96 h-96 bg-[hsl(270,60%,90%)] rounded-full blur-3xl opacity-40 -translate-y-1/2" />
       <div className="absolute top-1/2 right-0 w-80 h-80 bg-[hsl(217,60%,90%)] rounded-full blur-3xl opacity-40 translate-x-1/2" />
       <div className="absolute bottom-0 left-0 w-72 h-72 bg-[hsl(330,60%,92%)] rounded-full blur-3xl opacity-30 -translate-x-1/2 translate-y-1/2" />
       
       <div className="container px-4 md:px-6 relative z-10">
         <div className="text-center mb-10">
           <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">{t("testimonial.title")}</h2>
           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("testimonial.subtitle")}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl overflow-hidden shadow-2xl border border-border/50 p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Photo & Logo */}
              <div className="flex-shrink-0 flex flex-col items-center gap-4">
                <img 
                  src={brunaCacao} 
                  alt="Bruna Cação"
                  className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-border/30"
                />
                <a href={testimonial.companyUrl} target="_blank" rel="noopener noreferrer">
                  <img 
                    src={testimonial.logo} 
                    alt={`${testimonial.company} logo`}
                    className="w-20 h-auto object-contain"
                  />
                </a>
              </div>

              {/* Quote & Author */}
              <div className="flex-1 text-center md:text-left">
                {/* Stars */}
                <div className="flex gap-1 mb-4 justify-center md:justify-start">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <blockquote className="text-lg md:text-xl lg:text-2xl font-medium text-foreground mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role},{" "}
                    <a href={testimonial.companyUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                      {testimonial.company}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
