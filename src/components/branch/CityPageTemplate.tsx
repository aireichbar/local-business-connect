import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BranchCTASection from "@/components/branch/BranchCTASection";
import { useSEO } from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, MapPin, Phone, MessageCircle, Mail, Globe, FileText } from "lucide-react";

interface CityPageConfig {
  city: string;
  seoTitle: string;
  seoDescription: string;
  canonical: string;
  h1: string;
  intro: string;
  districts: string[];
  neighborCities: string[];
  specialNote?: string;
}

const channels = [
  { icon: Phone, title: "Telefon-KI", desc: "Anrufe werden automatisch angenommen und bearbeitet." },
  { icon: MessageCircle, title: "WhatsApp", desc: "Kundenanfragen sofort per WhatsApp beantworten." },
  { icon: Mail, title: "E-Mail", desc: "Eingehende E-Mails automatisch verarbeiten." },
  { icon: Globe, title: "Website-Chat", desc: "Live-Chat direkt auf Ihrer Website." },
  { icon: FileText, title: "Kontaktformular", desc: "Anfragen strukturiert erfassen." },
];

const CityPageTemplate = ({ config }: { config: CityPageConfig }) => {
  useSEO({
    title: config.seoTitle,
    description: config.seoDescription,
    canonical: config.canonical,
  });

  useEffect(() => {
    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.id = `local-schema-${config.city.toLowerCase()}`;
    schema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "aireichbar",
      description: `Digitaler Empfang für Unternehmen in ${config.city}`,
      url: config.canonical,
      telephone: "+491755366559",
      email: "info@aireichbar.de",
      address: { "@type": "PostalAddress", streetAddress: "Arnold-Janssen-Straße 2A", addressLocality: "Bocholt", postalCode: "46397", addressRegion: "Nordrhein-Westfalen", addressCountry: "DE" },
      areaServed: [{ "@type": "City", name: config.city, containedInPlace: { "@type": "AdministrativeArea", name: "Kreis Borken" } }],
      priceRange: "€€",
      openingHoursSpecification: { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" },
    });
    document.head.appendChild(schema);
    return () => { const el = document.getElementById(`local-schema-${config.city.toLowerCase()}`); if (el) document.head.removeChild(el); };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        {/* Hero */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-5 md:px-8 max-w-6xl">
            <nav className="text-sm text-muted-foreground mb-6" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-primary">Startseite</Link>
              <span className="mx-2">/</span>
              <Link to="/#regionen" className="hover:text-primary">Regionen</Link>
              <span className="mx-2">/</span>
              <span>{config.city}</span>
            </nav>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <MapPin className="inline h-4 w-4 mr-1" /> {config.city}, Kreis Borken
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">{config.h1}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mb-8">{config.intro}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link to="/#kontakt">Kostenlose Beratung <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
            </div>
          </div>
        </section>

        {/* 5 Kanäle */}
        <section className="py-16">
          <div className="container mx-auto px-5 md:px-8 max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">5 Kanäle – eine Lösung für {config.city}</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {channels.map((ch) => (
                <div key={ch.title} className="bg-card rounded-xl p-6 border shadow-sm">
                  <ch.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">{ch.title}</h3>
                  <p className="text-sm text-muted-foreground">{ch.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Branchen */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-5 md:px-8 max-w-4xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Für alle Branchen in {config.city}</h2>
            <p className="text-muted-foreground mb-8">Egal ob Handwerk, Praxis oder Dienstleister – der digitale Empfang passt sich Ihrem Betrieb an.</p>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              {[
                { label: "Handwerk", href: "/handwerk" },
                { label: "Friseursalons", href: "/friseur" },
                
                { label: "SHK-Betriebe", href: "/shk" },
                { label: "Elektrobetriebe", href: "/elektro" },
              ].map((b) => (
                <Link key={b.href} to={b.href} className="px-4 py-2 bg-card rounded-full border hover:border-primary transition-colors">
                  {b.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Ortsteile */}
        <section className="py-16">
          <div className="container mx-auto px-5 md:px-8 max-w-4xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Auch in Ihrem Stadtteil verfügbar</h2>
            {config.specialNote && <p className="text-muted-foreground mb-6">{config.specialNote}</p>}
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              {config.districts.map((d) => (
                <span key={d} className="px-4 py-2 bg-muted rounded-full">{d}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing quick */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-5 md:px-8 max-w-2xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Digitaler Empfang für {config.city}</h2>
            <p className="text-muted-foreground mb-6">Ab 299 €/Monat. Einmalig 499 € Setup. 30 Tage Geld-zurück-Garantie.</p>
            <ul className="space-y-2 text-sm text-left max-w-md mx-auto mb-8">
              {["5 Kommunikationskanäle", "24/7 erreichbar", "DSGVO-konform", "Lokaler Ansprechpartner in Bocholt", "Keine versteckten Kosten"].map((b) => (
                <li key={b} className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" />{b}</li>
              ))}
            </ul>
            <Button size="lg" asChild>
              <Link to="/#kontakt">Kostenlose Beratung</Link>
            </Button>
          </div>
        </section>

        {/* Ansprechpartner */}
        <section className="py-12">
          <div className="container mx-auto px-5 md:px-8 max-w-4xl">
            <div className="p-6 bg-card rounded-xl border text-center">
              <p className="font-medium">Christian Schubert</p>
              <p className="text-sm text-muted-foreground">Gründer & Ansprechpartner</p>
              <p className="text-sm text-muted-foreground mt-2">Arnold-Janssen-Straße 2A, 46397 Bocholt</p>
            </div>
          </div>
        </section>

        {/* Nachbarstädte */}
        <section className="py-12 border-t">
          <div className="container mx-auto px-5 md:px-8 max-w-4xl">
            <h3 className="text-lg font-semibold mb-4 text-center">Auch in der Nähe verfügbar</h3>
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              {config.neighborCities.map((city) => (
                <Link key={city} to={`/${city.toLowerCase()}`} className="px-4 py-2 bg-muted rounded-full hover:bg-muted/80 transition-colors">
                  Digitaler Empfang {city}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <BranchCTASection title={`Bereit für digitale Erreichbarkeit in ${config.city}?`} subtitle="Testen Sie den digitalen Empfang 30 Tage risikofrei." />
      </main>
      <Footer />
    </div>
  );
};

export default CityPageTemplate;
