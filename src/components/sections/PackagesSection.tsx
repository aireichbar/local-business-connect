import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const PackagesSection = () => {
  const packages = [
    {
      name: "Einstieg",
      tagline: "Der perfekte Start",
      price: "349",
      priceLabel: "€ einmalig",
      mrr: null,
      description: "Endlich eine professionelle Website – ohne Aufwand, ohne Folgekosten.",
      features: [
        "Moderne OnePager-Website",
        "Responsives Design",
        "Lokale Sichtbarkeit",
        "SSL-Verschlüsselung",
        "1 Änderungsrunde inklusive"
      ],
      cta: "Jetzt starten",
      highlighted: false
    },
    {
      name: "Wachstum",
      tagline: "Beliebteste Wahl",
      price: "349",
      priceLabel: "€ einmalig",
      mrr: "49",
      description: "Ihre Website wächst mit Ihrem Unternehmen – automatisch.",
      features: [
        "Mehrseitige Website",
        "Start, Leistungen, Über uns, Kontakt",
        "Laufende Pflege & Updates",
        "SEO-Optimierung",
        "Skalierbare Struktur",
        "Persönlicher Ansprechpartner"
      ],
      cta: "Wachstum starten",
      highlighted: true
    },
    {
      name: "Digitaler Empfang",
      tagline: "Maximale Entlastung",
      price: "699",
      priceLabel: "€ einmalig",
      mrr: "139",
      description: "Ihr Unternehmen ist erreichbar – auch wenn Sie gerade keine Zeit haben.",
      features: [
        "Alles aus Wachstum",
        "Automatisierter Empfang",
        "Website-Chat Integration",
        "WhatsApp-Anbindung",
        "Beantwortet Kundenanfragen",
        "Nimmt Kontaktdaten auf",
        "24/7 Erreichbarkeit"
      ],
      cta: "Empfang aktivieren",
      highlighted: false
    }
  ];

  return (
    <section id="pakete" className="section-padding bg-background">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Transparente Preise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Wählen Sie Ihr Paket
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Faire Preise, klare Leistungen. Starten Sie dort, wo es für Sie Sinn macht.
          </p>
        </div>

        {/* Packages grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div 
              key={pkg.name}
              className={`relative rounded-2xl p-8 transition-all duration-300 ${
                pkg.highlighted 
                  ? "bg-primary text-primary-foreground scale-105 shadow-lg" 
                  : "bg-card border-2 border-border card-hover"
              }`}
            >
              {/* Badge */}
              {pkg.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 bg-cta text-cta-foreground px-4 py-1.5 rounded-full text-sm font-semibold shadow-cta">
                    <Star className="w-4 h-4" />
                    {pkg.tagline}
                  </div>
                </div>
              )}

              {/* Header */}
              <div className="mb-6">
                <h3 className={`text-2xl font-bold mb-2 ${pkg.highlighted ? "" : "text-foreground"}`}>
                  {pkg.name}
                </h3>
                {!pkg.highlighted && (
                  <p className="text-muted-foreground text-sm">{pkg.tagline}</p>
                )}
              </div>

              {/* Pricing */}
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className={`text-4xl font-bold ${pkg.highlighted ? "" : "text-foreground"}`}>
                    {pkg.price}
                  </span>
                  <span className={`text-lg ${pkg.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    {pkg.priceLabel}
                  </span>
                </div>
                {pkg.mrr && (
                  <p className={`mt-1 ${pkg.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    + {pkg.mrr} €/Monat
                  </p>
                )}
              </div>

              {/* Description */}
              <p className={`mb-8 leading-relaxed ${pkg.highlighted ? "text-primary-foreground/90" : "text-muted-foreground"}`}>
                {pkg.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                      pkg.highlighted ? "text-success" : "text-accent"
                    }`} />
                    <span className={pkg.highlighted ? "text-primary-foreground/90" : "text-foreground"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a href="#kontakt">
                <Button 
                  variant={pkg.highlighted ? "cta" : "outline"} 
                  size="lg" 
                  className="w-full"
                >
                  {pkg.cta}
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
