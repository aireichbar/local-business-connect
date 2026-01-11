import { Layers, MapPin, Settings, Heart, ArrowRight, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const SolutionSection = () => {
  const features = [
    {
      icon: Zap,
      title: "Sofort einsatzbereit",
      description: "Keine Wochen Wartezeit. Ihr digitaler Empfang ist in wenigen Tagen online."
    },
    {
      icon: Layers,
      title: "Wächst mit Ihnen",
      description: "Starten Sie klein und erweitern Sie bei Bedarf – ohne von vorn zu beginnen."
    },
    {
      icon: MapPin,
      title: "Lokal & Persönlich",
      description: "Ihr Ansprechpartner sitzt im Kreis Borken – nicht in einem anonymen Call-Center."
    },
    {
      icon: Shield,
      title: "DSGVO-konform",
      description: "Alle Daten bleiben in Deutschland. Sichere Kommunikation garantiert."
    },
    {
      icon: Settings,
      title: "Alles aus einer Hand",
      description: "Website, Empfang, Wartung – Sie haben einen Ansprechpartner für alles."
    },
    {
      icon: Heart,
      title: "Kein Technik-Deutsch",
      description: "Wir reden Klartext. Keine komplizierten Fachbegriffe, nur Lösungen."
    }
  ];

  return (
    <section className="section-padding relative overflow-hidden" style={{ background: "var(--gradient-warm)" }}>
      {/* Decorative elements */}
      <div className="blob-decoration top-20 left-0 w-80 h-80 bg-primary/5" />
      <div className="blob-decoration bottom-0 right-0 w-96 h-96 bg-accent/5" />
      
      <div className="container mx-auto px-5 md:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Content */}
          <div>
            <span className="trust-badge mb-6">
              <span className="w-2 h-2 rounded-full bg-success" />
              Die Lösung
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              aireichbar macht Ihren Betrieb <br className="hidden lg:block" />
              <span className="text-gradient-primary">digital erreichbar</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              Ein digitales Ökosystem, das Kundenanfragen beantwortet, während Sie sich 
              auf Ihre eigentliche Arbeit konzentrieren. Kein Technik-Wissen nötig.
            </p>
            
            <a href="#pakete">
              <Button variant="outline" size="lg" className="group gap-2">
                Pakete vergleichen
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>

          {/* Features grid */}
          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="group p-6 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
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