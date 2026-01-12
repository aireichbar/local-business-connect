import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Star, ArrowRight, Shield, MessageCircle, Phone, Mail, FileText, Database } from "lucide-react";

const PackagesSection = () => {
  const packages = [
    {
      name: "Einstieg",
      price: "399",
      priceLabel: "€ einmalig",
      mrr: null,
      mrrNote: null,
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
      mrrNote: "bei 24 Monaten Laufzeit",
      description: "Website mit Rundum-Service.",
      features: [
        "Mehrseitige Website",
        "Betrieb & Wartung inkl.",
        "6 Anpassungen/Jahr",
        "SEO-Optimierung",
        "Mobiloptimiert",
        "Persönlicher Ansprechpartner",
        "DSGVO-konform"
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
      mrrNote: "bei 24 Monaten Laufzeit",
      description: "Automatisierte Kundenkommunikation.",
      features: [
        "Alles aus Wachstum",
        "Telefonie-Integration",
        "WhatsApp-Anbindung",
        "E-Mail-Automatisierung",
        "Kontaktformular inkl.",
        "24/7 erreichbar",
        "Ihre Daten bleiben bei Ihnen"
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
                  <div className="mt-1">
                    <p className={`text-sm ${pkg.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                      + {pkg.mrr} €/Monat
                    </p>
                    {pkg.mrrNote && (
                      <p className={`text-xs mt-0.5 ${pkg.highlighted ? "text-primary-foreground/50" : "text-muted-foreground/70"}`}>
                        {pkg.mrrNote}
                      </p>
                    )}
                  </div>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-6 flex-1">
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
              <Link to="/#kontakt" className="mt-auto">
                <Button 
                  variant={pkg.highlighted ? "secondary" : "outline"} 
                  size="lg" 
                  className={`w-full group ${pkg.highlighted ? "bg-white text-primary hover:bg-white/90" : ""}`}
                >
                  {pkg.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          ))}
        </div>

        {/* Digitaler Empfang Info Box */}
        <div className="max-w-4xl mx-auto mt-10">
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-foreground mb-2">
                  Was beinhaltet der Digitale Empfang?
                </h4>
                <p className="text-muted-foreground text-sm">
                  Eine vollständige Kommunikationslösung für Ihren Betrieb – automatisiert und rund um die Uhr verfügbar.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="flex items-center gap-3 bg-background rounded-lg p-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-sm text-foreground">Telefonie</span>
              </div>
              <div className="flex items-center gap-3 bg-background rounded-lg p-3">
                <MessageCircle className="w-5 h-5 text-success" />
                <span className="text-sm text-foreground">WhatsApp</span>
              </div>
              <div className="flex items-center gap-3 bg-background rounded-lg p-3">
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-sm text-foreground">E-Mail</span>
              </div>
              <div className="flex items-center gap-3 bg-background rounded-lg p-3">
                <FileText className="w-5 h-5 text-primary" />
                <span className="text-sm text-foreground">Kontaktformular</span>
              </div>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Auch für bestehende Websites:</strong> Der Digitale Empfang kann problemlos in Ihre bereits vorhandene Website integriert werden.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Database className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">Ihre Daten gehören Ihnen:</strong> Sämtliche erfassten Kundendaten verbleiben ausschließlich bei Ihnen – volle Kontrolle, volle Transparenz.
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Shield className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  <strong className="text-foreground">DSGVO-konform:</strong> Alle Pakete mit monatlicher Gebühr erfüllen die Anforderungen der Datenschutz-Grundverordnung.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust note */}
        <p className="text-center text-muted-foreground text-sm mt-8">
          Alle Preise zzgl. MwSt. • Monatliche Gebühren bei 24 Monaten Mindestlaufzeit
        </p>
      </div>
    </section>
  );
};

export default PackagesSection;
