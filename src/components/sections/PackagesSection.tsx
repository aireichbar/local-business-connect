import { Button } from "@/components/ui/button";
import { Check, Star, ArrowRight } from "lucide-react";

const PackagesSection = () => {
  const packages = [
    {
      name: "Einstieg",
      price: "399",
      priceLabel: "€ einmalig",
      mrr: null,
      description: "Professionelle Website ohne Aufwand.",
      features: [
        "Moderne OnePager-Website",
        "Responsives Design",
        "SSL-Zertifikat",
        "Google-Sichtbarkeit",
        "Ihre Domain"
      ],
      cta: "Jetzt starten",
      highlighted: false,
      badge: null
    },
    {
      name: "Wachstum",
      price: "499",
      priceLabel: "€ einmalig",
      mrr: "79",
      description: "Website mit Rundum-Service.",
      features: [
        "Mehrseitige Website",
        "Betrieb & Wartung inkl.",
        "6 Anpassungen/Jahr",
        "SEO-Optimierung",
        "Mobiloptimiert",
        "Persönlicher Ansprechpartner"
      ],
      cta: "Wachstum wählen",
      highlighted: true,
      badge: "Empfohlen"
    },
    {
      name: "Digitaler Empfang",
      price: "699",
      priceLabel: "€ einmalig",
      mrr: "139",
      description: "Automatisierte Kundenkommunikation.",
      features: [
        "Alles aus Wachstum",
        "Chat-Integration",
        "WhatsApp-Anbindung",
        "Automatische Antworten",
        "Kontaktdaten-Erfassung",
        "24/7 erreichbar",
        "Monatliche Reports"
      ],
      cta: "Empfang aktivieren",
      highlighted: false,
      badge: "Premium"
    }
  ];

  return (
    <section id="pakete" className="section-padding bg-background relative overflow-hidden">
      <div className="container mx-auto px-5 md:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="trust-badge mb-4">
            Preise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Transparente Pakete
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Faire Preise, klare Leistungen. Keine versteckten Kosten.
          </p>
        </div>

        {/* Packages grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <div 
              key={pkg.name}
              className={`relative rounded-2xl p-5 sm:p-6 lg:p-8 transition-all duration-300 flex flex-col ${
                pkg.highlighted 
                  ? "bg-primary text-primary-foreground shadow-xl lg:scale-105 z-10" 
                  : "bg-card border border-border hover:shadow-lg"
              }`}
            >
              {/* Badge */}
              {pkg.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold ${
                    pkg.highlighted 
                      ? "bg-accent text-accent-foreground" 
                      : "bg-primary text-primary-foreground"
                  }`}>
                    {pkg.highlighted && <Star className="w-3 h-3 fill-current" />}
                    {pkg.badge}
                  </div>
                </div>
              )}

              {/* Header */}
              <div className="mb-4 pt-2">
                <h3 className={`text-xl font-bold mb-1 ${pkg.highlighted ? "" : "text-foreground"}`}>
                  {pkg.name}
                </h3>
                <p className={`text-sm ${pkg.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  {pkg.description}
                </p>
              </div>

              {/* Pricing */}
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className={`text-4xl font-bold ${pkg.highlighted ? "" : "text-foreground"}`}>
                    {pkg.price}
                  </span>
                  <span className={`text-sm ${pkg.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                    {pkg.priceLabel}
                  </span>
                </div>
                {pkg.mrr && (
                  <p className={`mt-1 text-sm ${pkg.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                    + {pkg.mrr} €/Monat
                  </p>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-6 flex-grow">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                      pkg.highlighted ? "text-accent" : "text-success"
                    }`} />
                    <span className={`text-sm ${pkg.highlighted ? "text-primary-foreground/90" : "text-foreground"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a href="#kontakt" className="mt-auto">
                <Button 
                  variant={pkg.highlighted ? "secondary" : "outline"} 
                  size="lg" 
                  className={`w-full group ${pkg.highlighted ? "bg-white text-primary hover:bg-white/90" : ""}`}
                >
                  {pkg.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
          ))}
        </div>

        {/* Trust note */}
        <p className="text-center text-muted-foreground text-sm mt-8">
          Alle Preise zzgl. MwSt. • Monatlich kündbar
        </p>
      </div>
    </section>
  );
};

export default PackagesSection;
