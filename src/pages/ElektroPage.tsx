import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BranchHero from "@/components/branch/BranchHero";
import PainPointsSection from "@/components/branch/PainPointsSection";
import BranchFeaturesSection from "@/components/branch/BranchFeaturesSection";
import BranchFAQSection from "@/components/branch/BranchFAQSection";
import BranchPricingSection from "@/components/branch/BranchPricingSection";
import LocalSEOSection from "@/components/branch/LocalSEOSection";
import BranchCTASection from "@/components/branch/BranchCTASection";
import { useSEO, useSchemaOrg } from "@/hooks/useSEO";
import { Zap, PhoneOff, Clock, Calendar, AlertTriangle, Moon, MessageCircle, FileText, Inbox, Check } from "lucide-react";

const painPoints = [
  { icon: Zap, situation: "Sicherungskasten ist offen – das Telefon klingelt", consequence: "Sie können nicht rangehen. Potenzielle Neukunden rufen woanders an." },
  { icon: PhoneOff, situation: "Auf der Leiter beim Kunden – 5 verpasste Anrufe", consequence: "Wer war wichtig? Wer nur eine Preisanfrage? Keine Ahnung." },
  { icon: Clock, situation: "'Wie viel kostet ein Elektriker pro Stunde?'", consequence: "Standard-Fragen kosten Sie Zeit, die Sie nicht haben." },
  { icon: Calendar, situation: "Kunde will Termin für Zählerkasten-Erneuerung", consequence: "Endlose Telefonate für eine simple Terminabstimmung." },
  { icon: AlertTriangle, situation: "Stromausfall beim Kunden – Notfall-Anfrage abends", consequence: "Sie sehen die Nachricht erst am nächsten Morgen." },
  { icon: Moon, situation: "Wochenende: Anfragen per WhatsApp", consequence: "Kunden erwarten Antwort. Sie wollen aber frei haben." },
];

const features = [
  { title: "Standard-Anfragen automatisch beantworten", description: "'Was kostet eine Steckdose?' – Der digitale Empfang kennt Ihre Preise und antwortet sofort.", icon: MessageCircle },
  { title: "Terminbuchung ohne Unterbrechung", description: "Kunde will Termin für Elektroinstallation? Wird automatisch mit Ihrem Kalender abgeglichen.", icon: Calendar },
  { title: "Notfall-Erkennung", description: "'Stromausfall', 'Kurzschluss', 'Sicherung raus' – Notfälle werden sofort an Sie weitergeleitet.", icon: AlertTriangle },
  { title: "Angebots-Anfragen sammeln", description: "Smart Home, PV-Anlage, Wallbox – Anfragen werden strukturiert erfasst für Ihre Bearbeitung.", icon: FileText },
  { title: "5 Kanäle, ein Posteingang", description: "Telefon, WhatsApp, E-Mail, Website, Kontaktformular – alles an einem Ort.", icon: Inbox },
  { title: "24/7 erreichbar", description: "Auch abends und am Wochenende. Notfälle werden sofort eskaliert, Rest wartet auf Sie.", icon: Clock },
];

const faqs = [
  { question: "Kann der digitale Empfang Preise für Elektroarbeiten nennen?", answer: "Ja. Sie hinterlegen Ihre Preise im System – Stundensätze, Pauschalen, Richtwerte. Der Empfang gibt diese Informationen an Kunden weiter. Für komplexe Projekte (PV-Anlage, Smart Home) verweist er auf ein individuelles Angebot." },
  { question: "Was passiert bei einem Stromausfall-Notfall?", answer: "Der digitale Empfang erkennt Notfall-Keywords wie 'Stromausfall', 'kein Strom', 'Kurzschluss', 'Sicherung springt'. Diese Anfragen werden sofort per SMS/Anruf an Sie oder Ihren Notdienst weitergeleitet." },
  { question: "Können Kunden Fotos von ihrem Sicherungskasten schicken?", answer: "Ja, über WhatsApp. Der digitale Empfang erfasst Bilder und leitet sie an Sie weiter. So können Sie vorab einschätzen, was der Kunde braucht." },
  { question: "Funktioniert das auch für Gewerbekunden?", answer: "Absolut. Der Empfang unterscheidet nicht zwischen Privat- und Gewerbekunden. Anfragen für DGUV V3-Prüfungen, Büroinstallationen etc. werden genauso bearbeitet." },
  { question: "Kann ich festlegen, welche Arbeiten ich nicht mache?", answer: "Ja. Wenn Sie z.B. keine PV-Anlagen installieren, hinterlegen Sie das. Der Empfang verweist höflich darauf, dass Sie diesen Service nicht anbieten." },
];

const pkg = {
  name: "Digitaler Empfang",
  tagline: "Installieren Sie – wir kümmern uns um den Rest.",
  benefits: ["Automatische Beantwortung von Preisanfragen", "Terminbuchung ohne Unterbrechung", "Notfall-Erkennung mit Sofort-Weiterleitung", "Angebots-Anfragen strukturiert gesammelt", "WhatsApp mit Foto-Empfang", "inkl. 300 Telefon-Minuten/Monat"],
  monthly: "299",
  setup: "499",
  cta: "Jetzt Zeit sparen",
  badge: "⚡ Für Elektrobetriebe",
};

const services = [
  "Elektroinstallation Neubau", "Altbausanierung", "Sicherungskästen", "Steckdosen & Schalter",
  "Beleuchtung", "Smart Home", "Photovoltaik", "Wallbox / E-Mobilität",
  "Netzwerk & EDV", "Blitzschutz", "Prüfung nach DGUV V3", "Notdienst",
];

const ElektroPage = () => {
  useSEO({
    title: "Digitaler Empfang für Elektrobetriebe | aireichbar",
    description: "Kundenanfragen automatisch entgegennehmen während Sie installieren. Für Elektrobetriebe im Kreis Borken. 24/7 erreichbar. 30 Tage testen.",
    canonical: "https://www.aireichbar.de/elektro",
  });

  useSchemaOrg({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
  }, "elektro-faq-schema");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <BranchHero
          badge="⚡ Speziell für Elektrobetriebe im Kreis Borken"
          breadcrumb="Elektrobetriebe"
          h1Line1="Installieren Sie –"
          h1Line2="wir kümmern uns um Ihre Anrufe"
          subheadline="Sicherungskasten, Steckdosen, Smart Home – Sie brauchen volle Konzentration. Ihr digitaler Empfang nimmt Kundenanfragen entgegen, während Sie arbeiten."
        />
        <PainPointsSection title="Der Alltag im Elektrobetrieb – kennen Sie das?" painPoints={painPoints} />
        <BranchFeaturesSection title="Ihr digitaler Empfang – wie ein zusätzlicher Mitarbeiter im Büro" features={features} />

        {/* Services Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-5 md:px-8 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Der digitale Empfang kennt Ihre Leistungen</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {services.map((service) => (
                <div key={service} className="flex items-center gap-2 p-3 bg-card rounded-lg border">
                  <Check className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm">{service}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-muted-foreground mt-6 text-sm">Im Onboarding hinterlegen Sie alle Ihre Leistungen und Preise. Der digitale Empfang antwortet basierend auf diesen Informationen.</p>
          </div>
        </section>

        <BranchPricingSection pkg={pkg} />
        <BranchFAQSection faqs={faqs} />
        <LocalSEOSection
          title="Für Elektrobetriebe im Kreis Borken"
          subtitle="Von Bocholt bis Gronau, von Borken bis Ahaus – wir unterstützen lokale Elektrobetriebe."
          terms={["Elektriker Bocholt", "Elektrobetrieb Borken", "Elektroinstallation Ahaus", "Elektriker Rhede", "Smart Home Münsterland", "Wallbox Installation Kreis Borken"]}
        />
        <BranchCTASection title="Bereit, sich auf Ihre Arbeit zu konzentrieren?" subtitle="Testen Sie den digitalen Empfang 30 Tage risikofrei. Wenn Sie nicht zufrieden sind, bekommen Sie Ihr Geld zurück." />
      </main>
      <Footer />
    </div>
  );
};

export default ElektroPage;
