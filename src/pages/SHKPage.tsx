import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BranchHero from "@/components/branch/BranchHero";
import PainPointsSection from "@/components/branch/PainPointsSection";
import BranchFeaturesSection from "@/components/branch/BranchFeaturesSection";
import BranchFAQSection from "@/components/branch/BranchFAQSection";
import BranchPricingSection from "@/components/branch/BranchPricingSection";
import LocalSEOSection from "@/components/branch/LocalSEOSection";
import BranchCTASection from "@/components/branch/BranchCTASection";
import TestimonialSection from "@/components/branch/TestimonialSection";
import { useSEO, useSchemaOrg } from "@/hooks/useSEO";
import { Flame, Droplets, PhoneOff, Calendar, FileQuestion, Moon, AlertTriangle, Clock, FileText, MessageCircle, Users, ArrowRight } from "lucide-react";

const painPoints = [
  { icon: Flame, situation: "Freitag, 17:30 Uhr: Heizung ausgefallen", consequence: "Der Kunde ruft an – aber Sie sind auf dem Heimweg. Anruf verpasst, Notfall woanders gemeldet." },
  { icon: Droplets, situation: "Wasserrohrbruch um 22 Uhr", consequence: "Kunde hinterlässt Nachricht auf dem AB. Sie hören sie erst am nächsten Morgen." },
  { icon: PhoneOff, situation: "Monteur beim Kunden – Telefon im Auto", consequence: "10 verpasste Anrufe in 3 Stunden. Wer war dringend, wer nicht?" },
  { icon: Calendar, situation: "Wartungstermin soll verschoben werden", consequence: "Endlose Telefonate für eine simple Terminänderung." },
  { icon: FileQuestion, situation: "'Was kostet eine neue Heizung?'", consequence: "Angebot-Anfragen stapeln sich. Keine Zeit, alle zu beantworten." },
  { icon: Moon, situation: "Wochenende: WhatsApp-Anfragen", consequence: "Kunden erwarten Antwort. Sie wollen aber Feierabend." },
];

const features = [
  { title: "Notfall-Erkennung", description: "Keywords wie 'Heizung aus', 'Wasserrohrbruch', 'kein Warmwasser' werden erkannt und sofort an Sie weitergeleitet.", icon: AlertTriangle },
  { title: "24/7 Erreichbarkeit", description: "Auch nachts und am Wochenende. Kunden erreichen immer jemanden – Notfälle werden sofort eskaliert.", icon: Clock },
  { title: "Wartungstermine automatisch", description: "Jährliche Heizungswartung? Der Empfang schlägt Termine vor und bestätigt.", icon: Calendar },
  { title: "Angebots-Anfragen sammeln", description: "'Was kostet eine Wärmepumpe?' – Anfragen werden strukturiert erfasst, Sie antworten wenn Zeit ist.", icon: FileText },
  { title: "WhatsApp für Kunden", description: "Viele Kunden schreiben lieber als anzurufen. Der Empfang antwortet auch per WhatsApp.", icon: MessageCircle },
  { title: "Notdienst-Kalender", description: "Wer hat diese Woche Notdienst? Der Empfang leitet an den richtigen Mitarbeiter weiter.", icon: Users },
];

const faqs = [
  { question: "Wie erkennt der Empfang einen Notfall?", answer: "Durch Keyword-Erkennung: Begriffe wie 'Heizung ausgefallen', 'kein Warmwasser', 'Wasserrohrbruch', 'Gasgeruch' werden sofort als Notfall eingestuft. Sie können die Keywords anpassen und erweitern." },
  { question: "Was passiert bei einem Notfall außerhalb der Geschäftszeiten?", answer: "Der Notfall wird per SMS und/oder Anruf an die hinterlegte Notdienst-Nummer weitergeleitet. Sie entscheiden, wer wann erreichbar sein soll." },
  { question: "Können mehrere Mitarbeiter Notdienst haben?", answer: "Ja. Sie können einen Notdienst-Kalender hinterlegen. Der Empfang leitet an den jeweils zuständigen Mitarbeiter weiter." },
  { question: "Was ist mit Angebots-Anfragen für größere Projekte?", answer: "Anfragen für neue Heizungen, Badsanierungen etc. werden strukturiert erfasst: Kontaktdaten, Projektbeschreibung, Budget-Vorstellung. Sie erhalten alles übersichtlich aufbereitet." },
  { question: "Kann ich festlegen, welche Leistungen ich anbiete?", answer: "Ja. Sie hinterlegen Ihre Leistungen (Heizung, Sanitär, Klima, Solar etc.) und der Empfang antwortet basierend auf diesen Informationen." },
];

const pkg = {
  name: "Digitaler Empfang",
  tagline: "Notfälle sofort, Routine automatisch – rund um die Uhr.",
  benefits: ["Notfall-Erkennung mit sofortiger Weiterleitung", "24/7 Erreichbarkeit (auch nachts & Wochenende)", "Wartungstermine automatisch vereinbaren", "Angebots-Anfragen strukturiert sammeln", "WhatsApp-Integration inklusive", "Notdienst-Kalender für Ihr Team"],
  monthly: "299",
  setup: "499",
  cta: "Kein Notfall mehr verpassen",
  badge: "🔥 Für SHK-Betriebe",
};

const SHKPage = () => {
  useSEO({
    title: "Erreichbarkeit für SHK-Betriebe | aireichbar",
    description: "Heizungsnotfall um 18 Uhr? Ihr digitaler Empfang ist erreichbar. Automatische Anrufannahme für SHK-Betriebe in Bocholt, Borken und dem Münsterland.",
    canonical: "https://www.aireichbar.de/shk",
  });

  useSchemaOrg({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
  }, "shk-faq-schema");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <BranchHero
          badge="🔥 Speziell für SHK-Betriebe im Kreis Borken"
          breadcrumb="SHK-Betriebe"
          h1Line1="Keine verpassten Notfälle –"
          h1Line2="Ihr SHK-Betrieb ist immer erreichbar"
          subheadline="Heizung ausgefallen, Wasserrohrbruch, verstopfter Abfluss – Ihr digitaler Empfang erkennt Notfälle und leitet sie sofort weiter. Routine-Anfragen werden automatisch bearbeitet."
        />
        <PainPointsSection title="Kennen Sie diese Situationen?" painPoints={painPoints} />

        {/* Triage Section */}
        <section className="py-16">
          <div className="container mx-auto px-5 md:px-8 max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Intelligente Triage – Notfälle sofort, Routine automatisch</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Der digitale Empfang erkennt den Unterschied zwischen "Heizung kaputt" und "Wartungstermin anfragen".</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-destructive/5 border-destructive/20 border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <AlertTriangle className="h-6 w-6 text-destructive" />
                  <h3 className="text-lg font-semibold">Notfälle</h3>
                </div>
                <ul className="space-y-3 text-sm">
                  {["Heizung ausgefallen / kein Warmwasser", "Wasserrohrbruch / Wasserschaden", "Gasgeruch", "Verstopfung mit Rückstau"].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 mt-0.5 text-destructive" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-4 bg-card rounded-lg">
                  <p className="text-sm font-medium text-destructive">→ Sofortige Weiterleitung per SMS/Anruf an Sie</p>
                </div>
              </div>
              <div className="bg-primary/5 border-primary/20 border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                  <h3 className="text-lg font-semibold">Routine-Anfragen</h3>
                </div>
                <ul className="space-y-3 text-sm">
                  {["Wartungstermin vereinbaren", "Angebot für neue Heizung anfragen", "Terminverschiebung", "Allgemeine Fragen zu Leistungen"].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 mt-0.5 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-4 bg-card rounded-lg">
                  <p className="text-sm font-medium text-primary">→ Automatisch bearbeitet, gesammelt für Sie</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <BranchFeaturesSection title="Ihr digitaler Empfang für SHK" features={features} />
        <TestimonialSection quote="Seit wir den digitalen Empfang nutzen, verpassen wir keinen Heizungsnotfall mehr. Die Kunden sind begeistert, dass immer jemand erreichbar ist." author="SHK-Betrieb aus dem Kreis Borken" />
        <BranchPricingSection pkg={pkg} />
        <BranchFAQSection faqs={faqs} />
        <LocalSEOSection
          title="Für SHK-Betriebe im Kreis Borken und Münsterland"
          subtitle="Wir kennen die Herausforderungen lokaler Heizungs- und Sanitärbetriebe."
          terms={["SHK Bocholt", "Heizungsbauer Borken", "Sanitär Ahaus", "Klima Rhede", "Heizungsnotdienst Stadtlohn", "Installateur Gronau", "Wärmepumpe Münsterland"]}
        />
        <BranchCTASection title="Kein Notfall mehr verpassen?" subtitle="Testen Sie den digitalen Empfang 30 Tage risikofrei. Wenn Sie nicht zufrieden sind, bekommen Sie Ihr Geld zurück." />
      </main>
      <Footer />
    </div>
  );
};

export default SHKPage;
