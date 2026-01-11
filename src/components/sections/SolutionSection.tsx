import { Layers, MapPin, Settings, Heart } from "lucide-react";

const SolutionSection = () => {
  const features = [
    {
      icon: Layers,
      title: "Modular",
      description: "Starten Sie klein und wachsen Sie mit Ihren Anforderungen."
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
    <section className="section-padding bg-secondary/30">
      <div className="container mx-auto container-narrow">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Die Lösung
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            aireichbar – Ihr digitales Ökosystem
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ein System, das mit Ihrem Unternehmen wächst. Von der einfachen Website 
            bis zum vollautomatisierten digitalen Empfang.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="text-center p-6"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
                <feature.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
