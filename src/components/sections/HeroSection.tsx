import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const HeroSection = () => {
  const benefits = [
    "Immer erreichbar",
    "Professioneller Auftritt",
    "Keine laufende Arbeit",
  ];

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: "32px 32px"
        }} />
      </div>

      <div className="container mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 backdrop-blur-sm px-4 py-2 mb-8 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
            <span className="text-primary-foreground/90 text-sm font-medium">
              Für lokale Unternehmen im Kreis Borken
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-slide-up">
            Ihr Unternehmen – <br />
            <span className="text-primary-foreground/90">jederzeit erreichbar.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-primary-foreground/80 mb-8 leading-relaxed max-w-2xl animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Das digitale Ökosystem, das Ihren Betrieb entlastet – 
            von der modernen Website bis zum automatisierten Empfang.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap gap-4 mb-10 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-2 text-primary-foreground/90">
                <CheckCircle2 className="w-5 h-5 text-success" />
                <span className="font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <a href="#kontakt">
              <Button variant="cta" size="xl" className="group">
                Jetzt unverbindlich anfragen
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="#pakete">
              <Button variant="heroOutline" size="xl">
                Pakete entdecken
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path 
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" 
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
