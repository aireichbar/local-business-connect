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
import { PhoneOff, Clock, FileText, Calendar, UserX, Moon, CalendarRange, Users, Home, BellRing, Globe, Shield, Lock, Server, FileCheck, Check } from "lucide-react";

const painPoints = [
  { icon: PhoneOff, situation: "Patient liegt auf der Liege – das Telefon klingelt", consequence: "Sie unterbrechen die Behandlung oder der Anruf geht verloren." },
  { icon: Clock, situation: "Therapie-Serien mit 6 Terminen koordinieren", consequence: "Endlose Telefonate für die Abstimmung. Zeit, die für Patienten fehlt." },
  { icon: FileText, situation: "Neuer Patient mit Rezept – braucht Ersttermin", consequence: "Bis Sie zurückrufen, hat er woanders gebucht." },
  { icon: Calendar, situation: "Patient sagt 2 Stunden vorher ab", consequence: "Leere Behandlungszeit. 80€+ Umsatz verloren." },
  { icon: UserX, situation: "Rezeption ist besetzt oder krank", consequence: "Therapeuten müssen zwischen Behandlung und Telefon jonglieren." },
  { icon: Moon, situation: "Abends & am Wochenende: Terminanfragen per WhatsApp", consequence: "Sie antworten erst Montag. Patient hat längst woanders gebucht." },
];

const features = [
  { title: "Rezeptannahme automatisiert", description: "Der digitale Empfang fragt nach Rezeptdaten, Diagnose und Wunschzeiten – alles wird strukturiert erfasst.", icon: FileText },
  { title: "Therapieserien planen", description: "Patient braucht 6 Termine? Der Empfang schlägt passende Serien vor und bestätigt.", icon: CalendarRange },
  { title: "Wartelisten-Management", description: "Bei Absagen wird automatisch der nächste Patient auf der Warteliste benachrichtigt.", icon: Users },
  { title: "Hausbesuch-Koordination", description: "Anfragen für mobile Physiotherapie werden erfasst und an Sie weitergeleitet.", icon: Home },
  { title: "Erinnerungen gegen No-Shows", description: "Automatische SMS/WhatsApp-Erinnerungen reduzieren Terminausfälle um bis zu 40%.", icon: BellRing },
  { title: "Mehrsprachige Kommunikation", description: "Patienten können auf Deutsch, Englisch oder Niederländisch kommunizieren.", icon: Globe },
];

const faqs = [
  { question: "Ist der digitale Empfang DSGVO-konform für Patientendaten?", answer: "Ja, vollständig. Wir verarbeiten Daten nach Art. 28 DSGVO als Auftragsverarbeiter. Ein AVV ist Bestandteil des Vertrags. Alle Server stehen in Deutschland." },
  { question: "Kann der Empfang Rezeptdaten erfassen?", answer: "Ja. Der digitale Empfang fragt strukturiert nach: Diagnose/ICD-Code, Verordnungsmenge, Arztpraxis, gewünschte Termine. Sie erhalten alles übersichtlich aufbereitet." },
  { question: "Wie werden Therapieserien geplant?", answer: "Wenn ein Patient z.B. 6x KG braucht, schlägt der Empfang passende Terminserien vor (z.B. immer Dienstag 10 Uhr) und bestätigt nach Verfügbarkeit." },
  { question: "Was passiert bei kurzfristigen Absagen?", answer: "Der Empfang nimmt die Absage entgegen, aktualisiert den Kalender und kann automatisch den nächsten Patienten auf der Warteliste benachrichtigen." },
  { question: "Funktioniert das mit meiner Praxissoftware?", answer: "Der digitale Empfang synchronisiert mit gängigen Kalendersystemen (Google, Outlook). Direkte Integration mit Branchensoftware (Theorg, Starke DMS) ist in Planung." },
];

const pkg = {
  name: "Digitaler Empfang",
  tagline: "Behandeln Sie – wir kümmern uns um den Rest.",
  benefits: ["Automatische Terminannahme per Telefon & WhatsApp", "Rezeptdaten strukturiert erfassen", "Therapieserien planen lassen", "Erinnerungen gegen No-Shows", "Wartelisten-Management inklusive", "100% DSGVO-konform"],
  monthly: "299",
  setup: "499",
  cta: "Ich gewinne Zeit",
  badge: "🏥 Für Physiopraxen",
};

const PhysiotherapiePage = () => {
  useSEO({
    title: "Digitaler Empfang für Physiotherapie-Praxen | aireichbar",
    description: "Behandeln statt telefonieren. Automatische Terminannahme für Physiopraxen. 24/7 erreichbar, DSGVO-konform. Kreis Borken. 30 Tage testen.",
    canonical: "https://www.aireichbar.de/physiotherapie",
  });

  useSchemaOrg({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
  }, "physio-faq-schema");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <BranchHero
          badge="🏥 Speziell für Physiotherapie-Praxen im Kreis Borken"
          breadcrumb="Physiotherapie"
          h1Line1="Behandeln Sie Ihre Patienten –"
          h1Line2="wir nehmen die Anrufe an"
          subheadline="Ihr digitaler Empfang nimmt Terminwünsche entgegen, beantwortet Fragen zu Verfügbarkeiten und entlastet Ihr Team – während Sie therapieren."
          trustItems={["DSGVO-konform", "30 Tage testen", "Server in Deutschland"]}
        />
        <PainPointsSection title="Der Alltag in der Praxis – kennen Sie das?" painPoints={painPoints} />
        <BranchFeaturesSection title="Ihr digitaler Empfang – 24/7 erreichbar, DSGVO-konform" features={features} />

        {/* DSGVO Compliance Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-5 md:px-8 max-w-4xl">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Datenschutz auf höchstem Niveau</h2>
              <p className="text-muted-foreground">Als Physiotherapie-Praxis arbeiten Sie mit sensiblen Gesundheitsdaten. Wir nehmen das ernst.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: Shield, title: "DSGVO-konform", desc: "Alle Prozesse erfüllen die Anforderungen der DSGVO. Auftragsverarbeitungsvertrag (AVV) inklusive." },
                { icon: Server, title: "Server in Deutschland", desc: "Alle Daten werden ausschließlich auf deutschen Servern (IONOS Cloud, Frankfurt) gespeichert." },
                { icon: Lock, title: "Verschlüsselte Übertragung", desc: "Alle Kommunikation ist TLS-verschlüsselt. Ihre Patientendaten sind jederzeit geschützt." },
                { icon: FileCheck, title: "Dokumentation", desc: "Vollständige Dokumentation aller Verarbeitungstätigkeiten für Ihre Unterlagen." },
              ].map((item) => (
                <div key={item.title} className="bg-card rounded-xl p-6 border">
                  <item.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Wettbewerbs-Differenzierung */}
        <section className="py-16">
          <div className="container mx-auto px-5 md:px-8 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Warum aireichbar statt Doctolib oder fonio?</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4"></th>
                    <th className="text-center py-3 px-4 bg-primary/5 font-semibold">aireichbar</th>
                    <th className="text-center py-3 px-4">Andere</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["5 Kanäle (Tel + WhatsApp + E-Mail + Web + Chat)", true, "Meist nur Telefon"],
                    ["Lokaler Ansprechpartner vor Ort", true, "Callcenter/Support"],
                    ["Keine Provision pro Buchung", true, "Oft Zusatzkosten"],
                    ["WhatsApp Business Integration", true, "Selten"],
                    ["Preis", "299 €/Mo", "150-500 €/Mo + Extras"],
                  ].map(([feature, us, them], i) => (
                    <tr key={i} className="border-b">
                      <td className="py-3 px-4">{feature}</td>
                      <td className="text-center py-3 px-4 bg-primary/5">
                        {us === true ? <Check className="inline h-5 w-5 text-primary" /> : <span className="font-semibold">{us}</span>}
                      </td>
                      <td className="text-center py-3 px-4">{them}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <BranchPricingSection pkg={pkg} />
        <BranchFAQSection faqs={faqs} />
        <LocalSEOSection
          title="Für Physiotherapie-Praxen im Kreis Borken"
          subtitle="Wir sind in Bocholt ansässig und kennen die Bedürfnisse lokaler Praxen."
          terms={["Physiotherapie Bocholt", "Physiopraxis Borken", "Physiotherapeut Ahaus", "KG Rhede", "Manuelle Therapie Stadtlohn", "Physiotherapie Gronau"]}
        />
        <BranchCTASection title="Bereit, sich auf Ihre Patienten zu konzentrieren?" subtitle="Testen Sie den digitalen Empfang 30 Tage risikofrei. Wenn Sie nicht zufrieden sind, bekommen Sie Ihr Geld zurück." />
      </main>
      <Footer />
    </div>
  );
};

export default PhysiotherapiePage;
