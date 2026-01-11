import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

const HeroSection = () => {
  const benefits = [
    "Immer erreichbar",
    "Professioneller Auftritt",
    "Keine laufende Arbeit",
  ];

  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      
      {/* Decorative blobs */}
      <div className="blob-decoration top-20 right-10 w-96 h-96 bg-white/10" />
      <div className="blob-decoration bottom-40 left-10 w-80 h-80 bg-white/5" />
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 -z-10 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px"
        }} />
      </div>

      <div className="container mx-auto px-5 md:px-8 py-20 md:py-28">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full bg-white/10 backdrop-blur-md px-5 py-2.5 mb-10 animate-fade-in border border-white/20">
            <Sparkles className="w-4 h-4 text-cta" />
            <span className="text-white/90 text-sm font-medium">
              Für lokale Unternehmen im Kreis Borken
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-8 animate-slide-up">
            Ihr Unternehmen – <br />
            <span className="text-white/90">jederzeit erreichbar.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl lg:text-2xl text-white/80 mb-10 leading-relaxed max-w-2xl animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Das digitale Ökosystem, das Ihren Betrieb entlastet – 
            von der modernen Website bis zum automatisierten Empfang.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap gap-5 mb-12 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-2.5 text-white/90">
                <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-success" />
                </div>
                <span className="font-medium text-sm md:text-base">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <a href="#kontakt">
              <Button variant="cta" size="xl" className="group text-base md:text-lg">
                Jetzt unverbindlich anfragen
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="#pakete">
              <Button variant="heroOutline" size="xl" className="text-base md:text-lg">
                Pakete entdecken
              </Button>
            </a>
          </div>

          {/* Trust indicator */}
          <div className="mt-16 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <p className="text-white/50 text-sm">
              Persönliche Betreuung • Keine versteckten Kosten • Lokaler Ansprechpartner
            </p>
          </div>
        </div>
      </div>

      {/* Bottom wave - smoother curve */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path 
            d="M0 120L48 108C96 96 192 72 288 60C384 48 480 48 576 54C672 60 768 72 864 78C960 84 1056 84 1152 78C1248 72 1344 60 1392 54L1440 48V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z" 
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;