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
import { PhoneOff, MessageCircleWarning, Wrench, CalendarX, Moon, UserX, Phone, MessageCircle, Calendar, AlertTriangle, FileText, Inbox } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const painPoints = [
  { icon: PhoneOff, situation: "Sie sind auf dem Dach – das Telefon klingelt", consequence: "Der Kunde ruft beim Wettbewerber an. Ein Auftrag weniger." },
  { icon: MessageCircleWarning, situation: "Montagmorgen: 12 Nachrichten auf der Mailbox", consequence: "Keine Zeit, alle zurückzurufen. Die Hälfte geht verloren." },
  { icon: Wrench, situation: "Mitten in der Installation – Anruf verpasst", consequence: "Vielleicht war es der Großauftrag des Monats." },
  { icon: CalendarX, situation: "Kunde sagt kurzfristig ab", consequence: "Sie stehen vor verschlossener Tür. Anfahrt umsonst." },
  { icon: Moon, situation: "Sonntagabend: Notfallanfrage per WhatsApp", consequence: "Sie sehen sie erst Montagmittag. Der Kunde hat längst jemand anderen." },
  { icon: UserX, situation: "Bürokraft krank oder im Urlaub", consequence: "Das Telefon läuft heiß, aber Sie stecken beim Kunden." },
];

const features = [
  { title: "Anrufe automatisch angenommen & sortiert", description: "Ihr digitaler Empfang nimmt jeden Anruf entgegen, erfasst das Anliegen und leitet Notfälle sofort weiter.", icon: Phone },
  { title: "WhatsApp-Anfragen sofort beantwortet", description: "Kunden schreiben per WhatsApp – Ihr Empfang antwortet sofort mit relevanten Infos.", icon: MessageCircle },
  { title: "Termine vorgeschlagen & bestätigt", description: "Automatische Terminabstimmung mit Ihrem Kalender. Keine Doppelbuchungen.", icon: Calendar },
  { title: "Notfälle von Routineanfragen getrennt", description: "Keywords wie 'Wasserrohrbruch' oder 'Stromausfall' werden erkannt und sofort eskaliert.", icon: AlertTriangle },
  { title: "Angebots-Anfragen gesammelt", description: "Anfragen werden strukturiert erfasst – Sie antworten, wenn Sie Zeit haben.", icon: FileText },
  { title: "5 Kanäle, ein Posteingang", description: "Telefon, WhatsApp, E-Mail, Website-Chat, Kontaktformular – alles zentral.", icon: Inbox },
];

const faqs = [
  { question: "Funktioniert das auch, wenn ich auf der Baustelle bin?", answer: "Ja, genau dafür ist der digitale Empfang gemacht. Anrufe werden automatisch angenommen, egal wo Sie sind. Sie bekommen eine Zusammenfassung per App oder E-Mail, wenn Sie Zeit haben." },
  { question: "Was passiert bei einem Notfall?", answer: "Der digitale Empfang erkennt dringende Anfragen (z.B. 'Wasserrohrbruch', 'Stromausfall') und leitet diese sofort an Sie weiter – per SMS, Anruf oder Push-Nachricht." },
  { question: "Kann ich festlegen, welche Leistungen ich anbiete?", answer: "Absolut. Im Onboarding hinterlegen Sie alle Ihre Leistungen, Preise und Verfügbarkeiten. Der digitale Empfang antwortet basierend auf diesen Informationen." },
  { question: "Brauche ich eine neue Telefonnummer?", answer: "Nein, Sie können Ihre bestehende Nummer behalten und eine Rufumleitung einrichten. Oder Sie nutzen eine zusätzliche Nummer speziell für den digitalen Empfang." },
  { question: "Ist das DSGVO-konform?", answer: "Ja. Alle Daten werden auf Servern in Deutschland gespeichert. Wir haben einen Auftragsverarbeitungsvertrag (AVV) und erfüllen alle Anforderungen der DSGVO." },
];

const pkg = {
  name: "Digitaler Empfang",
  tagline: "Ihr digitaler Empfang – immer erreichbar, auch auf der Baustelle.",
  benefits: ["Anrufe werden automatisch angenommen", "WhatsApp-Anfragen sofort bearbeitet", "Notfälle von Routineanfragen getrennt", "Termine vorgeschlagen & bestätigt", "Ihr Team wird spürbar entlastet", "inkl. 300 Minuten Telefonie/Monat"],
  monthly: "299",
  setup: "499",
  cta: "Ich gewinne Zeit",
  badge: "🏆 Die Lösung für Handwerksbetriebe",
};

const HandwerkPage = () => {
  useSEO({
    title: "Digitaler Empfang für Handwerksbetriebe | aireichbar",
    description: "24/7 erreichbar auf der Baustelle. Automatische Anrufannahme, WhatsApp & Terminbuchung für Handwerker im Kreis Borken. 30 Tage testen.",
    canonical: "https://www.aireichbar.de/handwerk",
  });

  useSchemaOrg({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
  }, "handwerk-faq-schema");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <BranchHero
          badge="🔧 Speziell für Handwerksbetriebe im Kreis Borken"
          breadcrumb="Handwerk"
          h1Line1="Ihr Betrieb ist erreichbar –"
          h1Line2="auch wenn Sie auf der Baustelle sind"
          subheadline="Anfragen kommen an, Termine gehen nicht verloren, der Arbeitsalltag wird ruhiger. Für Handwerksbetriebe in Bocholt, Borken, Ahaus und dem gesamten Kreis Borken."
          trustItems={["30 Tage testen", "DSGVO-konform", "Ansprechpartner vor Ort"]}
        />
        <PainPointsSection title="Situationen, die Sie kennen" painPoints={painPoints} />
        <BranchFeaturesSection title="Ihre digitale Zentrale – wie eine zusätzliche Bürokraft" features={features} />

        {/* Audio Demo */}
        <section className="py-12">
          <div className="container mx-auto px-5 md:px-8 max-w-3xl">
            <div className="bg-muted/50 rounded-xl p-6 text-center">
              <p className="text-sm text-muted-foreground mb-2">So klingt Ihr digitaler Empfang:</p>
              <p className="italic text-foreground mb-4">"Müller Elektrotechnik, guten Tag! Wie kann ich Ihnen helfen?"</p>
              <Button variant="outline" size="sm" asChild>
                <a href="tel:+4932221802294"><Phone className="mr-2 h-4 w-4" /> Selbst testen: +49 322 218 02294</a>
              </Button>
            </div>
          </div>
        </section>

        <BranchPricingSection pkg={pkg} />
        <BranchFAQSection faqs={faqs} />
        <LocalSEOSection
          title="Ihr lokaler Ansprechpartner im Kreis Borken"
          subtitle="aireichbar ist in Bocholt ansässig. Wir kennen die Herausforderungen lokaler Handwerksbetriebe – und sind persönlich für Sie da."
          terms={["Bocholt", "Borken", "Ahaus", "Rhede", "Isselburg", "Stadtlohn", "Gronau", "Vreden", "Gescher"]}
          useCityLinks
        />

        {/* Ansprechpartner */}
        <section className="py-8">
          <div className="container mx-auto px-5 md:px-8 max-w-4xl">
            <div className="p-6 bg-card rounded-xl border text-center">
              <p className="font-medium">Christian Schubert</p>
              <p className="text-sm text-muted-foreground">Gründer & Ansprechpartner</p>
              <p className="text-sm text-muted-foreground mt-2">Arnold-Janssen-Straße 2A, 46397 Bocholt</p>
            </div>
          </div>
        </section>

        <BranchCTASection title="Bereit, keine Aufträge mehr zu verlieren?" subtitle="Testen Sie den digitalen Empfang 30 Tage risikofrei. Wenn Sie nicht zufrieden sind, bekommen Sie Ihr Geld zurück." />
      </main>
      <Footer />
    </div>
  );
};

export default HandwerkPage;
