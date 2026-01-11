import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Heart, Users, Target, Shield, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const UeberUns = () => {
  const values = [
    {
      icon: Heart,
      title: "Lokal verwurzelt",
      description: "Wir kennen die Region, die Menschen und die Herausforderungen kleiner Betriebe im Kreis Borken."
    },
    {
      icon: Users,
      title: "Persönlich & nahbar",
      description: "Kein anonymer Support, sondern ein direkter Ansprechpartner, der Ihren Betrieb versteht."
    },
    {
      icon: Target,
      title: "Pragmatisch",
      description: "Keine Buzzwords, keine leeren Versprechen – nur Lösungen, die wirklich funktionieren."
    },
    {
      icon: Shield,
      title: "Verlässlich",
      description: "Wenn wir etwas zusagen, halten wir es. Pünktlich, transparent und ohne Überraschungen."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero */}
        <section className="pt-32 pb-16 md:pt-40 md:pb-24 relative overflow-hidden">
          <div 
            className="absolute inset-0 -z-10"
            style={{ background: "var(--gradient-hero)" }}
          />
          
          <div className="container mx-auto px-4 sm:px-5 md:px-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 mb-6 border border-white/20">
                <MapPin className="w-4 h-4 text-accent" />
                <span className="text-white/90 text-sm font-medium">
                  Aus Bocholt – für die Region
                </span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Digitale Lösungen mit 
                <span className="text-accent"> lokaler Verbundenheit</span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
                aireichbar ist Ihr Partner für digitale Erreichbarkeit – von Handwerkern und Friseuren 
                bis zu Praxen und Restaurants im Kreis Borken.
              </p>
            </div>
          </div>
          
          {/* Wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
              <path 
                d="M0 100L60 90C120 80 240 60 360 50C480 40 600 40 720 45C840 50 960 60 1080 65C1200 70 1320 70 1380 70L1440 70V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0Z" 
                fill="hsl(var(--background))"
              />
            </svg>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-5 md:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="trust-badge mb-4">Unsere Mission</span>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                    Lokale Betriebe digital stärken
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Viele kleine Unternehmen in unserer Region kämpfen mit den gleichen Herausforderungen: 
                    verpasste Anrufe, unklare Online-Präsenz und zu wenig Zeit für Kundenkommunikation.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Wir glauben, dass jeder Betrieb – ob Bäcker, Elektriker oder Physiotherapeut – 
                    professionelle digitale Werkzeuge verdient, die einfach funktionieren und bezahlbar sind.
                  </p>
                </div>
                
                <div className="bg-secondary/30 rounded-2xl p-8 border border-border/50">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Standort</h3>
                      <p className="text-muted-foreground text-sm">Bocholt, Kreis Borken</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />
                      <span>Persönliche Beratung vor Ort möglich</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />
                      <span>Kurze Wege, schnelle Reaktion</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle2 className="w-4 h-4 text-success flex-shrink-0" />
                      <span>Wir verstehen lokale Bedürfnisse</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24" style={{ background: "var(--gradient-subtle)" }}>
          <div className="container mx-auto px-4 sm:px-5 md:px-8">
            <div className="text-center mb-12">
              <span className="trust-badge mb-4">Unsere Werte</span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Worauf Sie sich verlassen können
              </h2>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {values.map((value) => (
                <div key={value.title} className="bg-card rounded-xl p-6 border border-border/50 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-primary">
          <div className="container mx-auto px-4 sm:px-5 md:px-8 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
              Bereit für den nächsten Schritt?
            </h2>
            <p className="text-white/80 max-w-xl mx-auto mb-8">
              Lassen Sie uns unverbindlich sprechen und herausfinden, wie wir Ihren Betrieb unterstützen können.
            </p>
            <Link to="/#kontakt">
              <Button 
                variant="secondary" 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 gap-2"
              >
                Kontakt aufnehmen
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default UeberUns;
