import { Link } from "react-router-dom";
import { Zap, MapPin, Shield, Puzzle, Clock, HeartHandshake, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const SolutionSection = () => {
  const features = [
    {
      icon: Zap,
      title: "Sofort einsatzbereit",
      description: "In wenigen Tagen ist Ihr digitaler Empfang online."
    },
    {
      icon: Puzzle,
      title: "Modular aufgebaut",
      description: "Starten Sie klein und erweitern Sie bei Bedarf."
    },
    {
      icon: MapPin,
      title: "Lokaler Partner",
      description: "Ihr Ansprechpartner sitzt im Kreis Borken."
    },
    {
      icon: Shield,
      title: "DSGVO-konform",
      description: "Alle Daten bleiben sicher in Deutschland."
    },
    {
      icon: Clock,
      title: "24/7 erreichbar",
      description: "Ihr Empfang antwortet rund um die Uhr."
    },
    {
      icon: HeartHandshake,
      title: "Kein Technik-Stress",
      description: "Wir machen das für Sie – verständlich erklärt."
    }
  ];

  return (
    <section className="section-padding relative overflow-hidden" style={{ background: "var(--gradient-subtle)" }}>
      <div className="container mx-auto px-5 md:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Content */}
          <div>
            <span className="trust-badge mb-4">
              Die Lösung
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              <span className="text-gradient-primary">Aireichbar</span> macht Ihren Betrieb digital erreichbar
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Ein digitales System, das Ihre Kunden begrüßt, Fragen beantwortet 
              und Kontaktdaten sammelt – während Sie sich auf Ihre Arbeit konzentrieren.
            </p>
            
            <Link to="/#pakete">
              <Button variant="outline" size="lg" className="group gap-2">
                Pakete ansehen
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="group bg-card rounded-xl p-5 border border-border/50 hover:border-primary/30 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1 text-sm">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
