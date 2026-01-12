import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Play, Wifi } from "lucide-react";

const HeroSection = () => {
  const benefits = [
    "Immer erreichbar",
    "Lokaler Partner",
    "Keine Technik-Kenntnisse nötig",
  ];

  const scrollToDemo = () => {
    const demoSection = document.getElementById('digitaler-empfang');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      
      {/* Animated circles */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full border border-white/10 opacity-30 animate-pulse-soft" />
      <div className="absolute top-1/3 right-1/3 w-[400px] h-[400px] rounded-full border border-white/10 opacity-20" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-white/5 blur-3xl" />
      
      {/* WiFi signal decoration - matching logo */}
      <div className="absolute top-1/3 right-[15%] hidden lg:flex flex-col items-center gap-2 opacity-20">
        <Wifi className="w-32 h-32 text-white" />
      </div>

      <div className="container mx-auto px-4 sm:px-5 md:px-8 pt-24 pb-20 sm:pt-28 sm:pb-24 md:pt-36 md:pb-32 lg:pt-40 lg:pb-36">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 mb-6 sm:mb-8 animate-fade-in border border-white/20">
            <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-white/90 text-xs sm:text-sm font-medium">
              Für lokale Unternehmen im Kreis Borken
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] mb-3 sm:mb-4 animate-slide-up">
            Ihr Unternehmen ist
            <span className="text-accent"> immer erreichbar</span> – 
            auch wenn Sie es nicht sind.
          </h1>
          
          <h2 className="text-sm sm:text-base text-white/70 font-medium mb-4 sm:mb-6 animate-slide-up" style={{ animationDelay: "0.05s" }}>
            Digitale Erreichbarkeit für lokale Unternehmen im Kreis Borken
          </h2>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-white/80 mb-8 sm:mb-10 leading-relaxed max-w-2xl animate-slide-up" style={{ animationDelay: "0.1s" }}>
            Während Sie arbeiten, beantwortet Ihr digitaler Empfang Kundenanfragen 
            automatisch – per Website, WhatsApp und mehr.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap gap-2 sm:gap-4 mb-8 sm:mb-10 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-1.5 sm:gap-2 text-white/90 bg-white/10 rounded-full px-3 sm:px-4 py-1.5 sm:py-2">
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-accent" />
                <span className="text-xs sm:text-sm font-medium">{benefit}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <Link to="/#kontakt" className="w-full sm:w-auto">
              <Button 
                variant="cta" 
                size="lg" 
                className="group bg-white text-primary hover:bg-white/90 shadow-xl w-full sm:w-auto"
              >
                Kostenlose Beratung
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button 
              variant="ghost" 
              size="lg" 
              className="text-white hover:bg-white/10 gap-2 w-full sm:w-auto"
              onClick={scrollToDemo}
            >
              <Play className="w-4 h-4" />
              Demo anhören
            </Button>
          </div>

        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path 
            d="M0 100L60 90C120 80 240 60 360 50C480 40 600 40 720 45C840 50 960 60 1080 65C1200 70 1320 70 1380 70L1440 70V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0Z" 
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
