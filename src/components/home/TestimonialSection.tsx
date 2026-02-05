import { useLanguage } from "@/contexts/LanguageContext";
import { Star, Play } from "lucide-react";
import { useState } from "react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar?: string;
  videoUrl?: string;
  videoThumbnail?: string;
}

export function TestimonialSection() {
  const { t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);

  const testimonial: Testimonial = {
    name: "Client Name",
    role: "Position",
    company: "Company Name",
    quote: t("testimonial.quote"),
    videoUrl: "", // Add your YouTube/Vimeo embed URL here
    videoThumbnail: "", // Add thumbnail URL
  };

   return (
     <section className="pt-16 md:pt-24 pb-6 md:pb-8 bg-gradient-to-br from-[hsl(270,40%,12%)] via-[hsl(270,30%,8%)] to-primary">
      <div className="container px-4 md:px-6">
         <div className="text-center mb-10">
           <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">{t("testimonial.title")}</h2>
           <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
            {t("testimonial.subtitle")}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-card rounded-3xl overflow-hidden shadow-2xl border border-border/50">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Quote Section */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg md:text-xl lg:text-2xl font-medium text-foreground mb-8 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent/20 to-accent/40 flex items-center justify-center">
                    <span className="text-lg font-bold text-accent">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>

              {/* Video Section */}
              <div className="relative aspect-video lg:aspect-auto bg-gradient-to-br from-muted/50 to-muted group">
                {testimonial.videoUrl && isPlaying ? (
                  <iframe
                    src={testimonial.videoUrl}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <>
                    {/* Placeholder/Thumbnail */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary flex items-center justify-center">
                      {testimonial.videoThumbnail ? (
                        <img 
                          src={testimonial.videoThumbnail} 
                          alt={`${testimonial.name} testimonial`}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      ) : (
                        <div className="text-center p-8">
                          <div className="w-24 h-24 rounded-full bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform cursor-pointer"
                               onClick={() => testimonial.videoUrl && setIsPlaying(true)}>
                            <Play className="h-10 w-10 text-primary-foreground ml-1" />
                          </div>
                          <p className="text-primary-foreground/60 text-sm">
                            {t("testimonial.watchVideo")}
                          </p>
                        </div>
                      )}
                    </div>
                    
                    {/* Play Button Overlay */}
                    {testimonial.videoUrl && (
                      <button
                        onClick={() => setIsPlaying(true)}
                        className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors"
                        aria-label="Play testimonial video"
                      >
                        <div className="w-20 h-20 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                          <Play className="h-8 w-8 text-primary ml-1" />
                        </div>
                      </button>
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
