import { Layers, MapPin, Settings, Heart, ArrowRight } from "lucide-react";

const SolutionSection = () => {
  const features = [
    {
      icon: Layers,
      title: "Modular",
      description: "Starten Sie klein und wachsen Sie mit Ihren Anforderungen – ohne Überforderung."
    },
    {
      icon: MapPin,
      title: "Lokal",
      description: "Persönliche Betreuung im Kreis Borken – kein anonymer Großanbieter."
    },
    {
      icon: Settings,
      title: "Automatisiert",
      description: "Technologie, die für Sie arbeitet – nicht andersherum."
    },
    {
      icon: Heart,
      title: "Verständlich",
      description: "Keine IT-Sprache, sondern klare Lösungen für echte Probleme."
    }
  ];

  return (
    <section className="section-padding relative overflow-hidden" style={{ background: "var(--gradient-warm)" }}>
      {/* Decorative elements */}
      <div className="blob-decoration top-20 left-0 w-80 h-80 bg-primary/5" />
      <div className="blob-decoration bottom-0 right-0 w-96 h-96 bg-accent/5" />
      
      <div className="container mx-auto container-narrow relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="trust-badge mb-6">
            <span className="w-2 h-2 rounded-full bg-success" />
            Die Lösung
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            aireichbar – <span className="text-gradient-primary">Ihr digitales Ökosystem</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ein System, das mit Ihrem Unternehmen wächst. Von der einfachen Website 
            bis zum vollautomatisierten digitalen Empfang.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group text-center p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-border/50 card-hover"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Link */}
        <div className="text-center mt-12">
          <a 
            href="#pakete" 
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300"
          >
            Unsere Pakete ansehen
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;