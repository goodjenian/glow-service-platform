 import { useLanguage } from "@/contexts/LanguageContext";
 import { Star } from "lucide-react";
 import citycostLogo from "@/assets/citycost-logo.png";
 import kartaLogo from "@/assets/karta-logo.png";

interface Review {
  quote: string;
  quotePt: string;
  company: string;
  website: string;
   logo: string;
   logoImage: string;
}

export function ReviewsSection() {
  const { language, t } = useLanguage();

  const reviews: Review[] = [
    {
      quote: "The strategies provided by Goody SEO when launching our website were both effective and cost-efficient, exceeding our expectations in terms of indexability and traffic generation.",
      quotePt: "As estratégias fornecidas pela Goody SEO ao lançar nosso site foram eficazes e econômicas, superando nossas expectativas em termos de indexabilidade e geração de tráfego.",
      company: "CityCost",
      website: "citycost.org",
       logo: "🏙️",
       logoImage: citycostLogo,
    },
    {
      quote: "Goody SEO found an effective way to gain market share in our highly competitive niche and helped us target new organic sales.",
      quotePt: "A Goody SEO encontrou uma forma eficaz de ganhar participação de mercado em nosso nicho altamente competitivo e nos ajudou a conquistar novas vendas orgânicas.",
      company: "Karta",
      website: "karta.com",
       logo: "🗺️",
       logoImage: kartaLogo,
    },
  ];

   return (
     <section className="pt-8 md:pt-12 pb-16 md:pb-24 bg-background relative overflow-hidden">
       {/* Decorative gradient blobs */}
       <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-[hsl(270,60%,92%)] rounded-full blur-3xl opacity-40" />
       <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-[hsl(217,60%,92%)] rounded-full blur-3xl opacity-30 translate-y-1/2" />
       
       <div className="container px-4 md:px-6 relative z-10">
         <div className="text-center mb-12">
           <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("reviews.title")}
          </h2>
           <p className="text-lg text-muted-foreground">
            {t("reviews.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-xl border border-border/20"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6 justify-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground text-center mb-8 leading-relaxed">
                {language === "pt" ? review.quotePt : review.quote}
              </p>

              {/* Company */}
              <div className="flex flex-col items-center">
               <div className="w-14 h-14 bg-background rounded-full flex items-center justify-center mb-3 overflow-hidden shadow-md">
                   <img 
                     src={review.logoImage} 
                     alt={`${review.company} logo`}
                     className="w-10 h-10 object-contain"
                   />
                </div>
                <a
                  href={`https://${review.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent font-semibold hover:underline"
                >
                  {review.website}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
