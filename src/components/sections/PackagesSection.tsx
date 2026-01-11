import { Button } from "@/components/ui/button";
import { Check, Star, ArrowRight, Sparkles } from "lucide-react";

const PackagesSection = () => {
  const packages = [
    {
      name: "Einstieg",
      tagline: "Der perfekte Start",
      price: "399",
      priceLabel: "€ einmalig",
      mrr: null,
      description: "Endlich online – mit einer professionellen Website, die Vertrauen schafft.",
      features: [
        "Moderne OnePager-Website",
        "Responsives Design für alle Geräte",
        "Lokale Google-Sichtbarkeit",
        "SSL-Zertifikat inklusive",
        "Ihre Domain, Ihr Hosting"
      ],
      cta: "Jetzt starten",
      highlighted: false,
      badge: null
    },
    {
      name: "Wachstum",
      tagline: "Empfohlen",
      price: "499",
      priceLabel: "€ einmalig",
      mrr: "79",
      description: "Ihre Website wächst mit Ihrem Unternehmen – wir kümmern uns um alles.",
      features: [
        "Mehrseitige Website",
        "Betrieb & Wartung inklusive",
        "6 Anpassungen pro Jahr",
        "SEO-Optimierung",
        "Mobiloptimiert",
        "Persönlicher Ansprechpartner",
        "E-Mail-Support"
      ],
      cta: "Wachstum starten",
      highlighted: true,
      badge: "Beliebt"
    },
    {
      name: "Digitaler Empfang",
      tagline: "Maximale Entlastung",
      price: "699",
      priceLabel: "€ einmalig",
      mrr: "139",
      description: "Ihr Unternehmen antwortet automatisch – auch wenn Sie gerade arbeiten.",
      features: [
        "Alles aus Wachstum",
        "Intelligenter Chat-Empfang",
        "WhatsApp-Integration",
        "Beantwortet Kundenanfragen",
        "Sammelt Kontaktdaten",
        "24/7 Erreichbarkeit",
        "Terminvereinbarung",
        "Monatliche Reports"
      ],
      cta: "Empfang aktivieren",
      highlighted: false,
      badge: "Premium"
    }
  ];

  return (
    <section id="pakete" className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="blob-decoration top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/3" />
      
      <div className="container mx-auto px-5 md:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="trust-badge mb-6">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Transparente Preise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Wählen Sie Ihr Paket
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Drei Pakete, eine Philosophie: Faire Preise, klare Leistungen, keine versteckten Kosten.
          </p>
        </div>

        {/* Packages grid */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
          {packages.map((pkg, index) => (
            <div 
              key={pkg.name}
              className={`relative rounded-3xl p-8 lg:p-10 transition-all duration-500 flex flex-col ${
                pkg.highlighted 
                  ? "bg-primary text-primary-foreground lg:scale-105 shadow-elevated z-10" 
                  : "bg-card border-2 border-border card-hover"
              }`}
            >
              {/* Badge */}
              {pkg.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-bold shadow-lg ${
                    pkg.highlighted 
                      ? "bg-cta text-cta-foreground" 
                      : "bg-accent text-accent-foreground"
                  }`}>
                    {pkg.highlighted ? <Star className="w-4 h-4 fill-current" /> : <Sparkles className="w-4 h-4" />}
                    {pkg.badge}
                  </div>
                </div>
              )}

              {/* Header */}
              <div className="mb-6 pt-2">
                <h3 className={`text-2xl lg:text-3xl font-bold mb-2 ${pkg.highlighted ? "" : "text-foreground"}`}>
                  {pkg.name}
                </h3>
                {!pkg.highlighted && (
                  <p className="text-muted-foreground">{pkg.tagline}</p>
                )}
              </div>

              {/* Pricing */}
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className={`text-5xl font-extrabold ${pkg.highlighted ? "" : "text-foreground"}`}>
                    {pkg.price}
                  </span>
                  <span className={`text-lg ${pkg.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    {pkg.priceLabel}
                  </span>
                </div>
                {pkg.mrr && (
                  <p className={`mt-2 text-sm ${pkg.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    + {pkg.mrr} €/Monat für Betrieb & Service
                  </p>
                )}
                {!pkg.mrr && (
                  <p className={`mt-2 text-sm ${pkg.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    Einmalige Zahlung, keine laufenden Kosten
                  </p>
                )}
              </div>

              {/* Description */}
              <p className={`mb-8 leading-relaxed ${pkg.highlighted ? "text-primary-foreground/90" : "text-muted-foreground"}`}>
                {pkg.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-10 flex-grow">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                      pkg.highlighted ? "bg-white/20" : "bg-success/10"
                    }`}>
                      <Check className={`w-3 h-3 ${
                        pkg.highlighted ? "text-white" : "text-success"
                      }`} />
                    </div>
                    <span className={`text-sm ${pkg.highlighted ? "text-primary-foreground/90" : "text-foreground"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a href="#kontakt" className="mt-auto">
                <Button 
                  variant={pkg.highlighted ? "cta" : "outline"} 
                  size="lg" 
                  className={`w-full group ${pkg.highlighted ? "bg-white text-primary hover:bg-white/90" : ""}`}
                >
                  {pkg.cta}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </div>
          ))}
        </div>

        {/* Trust notes */}
        <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-muted-foreground">
          <span className="flex items-center gap-2">
            <Check className="w-4 h-4 text-success" />
            Alle Preise zzgl. MwSt.
          </span>
          <span className="flex items-center gap-2">
            <Check className="w-4 h-4 text-success" />
            Monatlich kündbar
          </span>
          <span className="flex items-center gap-2">
            <Check className="w-4 h-4 text-success" />
            Keine versteckten Kosten
          </span>
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;