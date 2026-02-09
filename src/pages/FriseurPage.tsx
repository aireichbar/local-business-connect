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
import { Scissors, Clock, MessageCircleWarning, CalendarX, UserX, Moon, Calendar, Euro, BellRing, Users, Inbox, Mic } from "lucide-react";

const painPoints = [
  { icon: Scissors, situation: "Kundin sitzt mit Farbe im Haar – das Telefon klingelt", consequence: "Sie können nicht rangehen. Die Anruferin bucht woanders." },
  { icon: Clock, situation: "Samstag, 10 Uhr: Hochbetrieb", consequence: "5 verpasste Anrufe in einer Stunde. 5 potenzielle Neukunden weg." },
  { icon: MessageCircleWarning, situation: "WhatsApp-Anfrage: 'Habt ihr morgen noch was frei?'", consequence: "Sie antworten 4 Stunden später. Der Termin ist längst vergeben – beim Konkurrenten." },
  { icon: CalendarX, situation: "Kundin sagt 30 Minuten vorher ab", consequence: "Leerer Stuhl. 80€ Umsatz verloren." },
  { icon: UserX, situation: "Ihre Rezeptionistin ist krank", consequence: "Sie müssen zwischen Schneiden und Telefonieren jonglieren." },
  { icon: Moon, situation: "Sonntagabend: Terminanfrage per Instagram", consequence: "Sie sehen sie erst Montag. Die Kundin hat längst woanders gebucht." },
];

const features = [
  { title: "Automatische Terminbuchung", description: "Kunden nennen ihren Wunschtermin, der digitale Empfang prüft die Verfügbarkeit und bestätigt – alles automatisch.", icon: Calendar },
  { title: "Preisauskunft ohne Unterbrechung", description: "'Was kostet Balayage?' – Ihr digitaler Empfang kennt Ihre Preisliste und antwortet sofort.", icon: Euro },
  
  { title: "Wartelisten-Management", description: "Jemand sagt ab? Der nächste auf der Warteliste wird automatisch benachrichtigt.", icon: Users },
  { title: "Alle Kanäle, ein Posteingang", description: "Telefon, WhatsApp, Instagram, E-Mail – alle Anfragen zentral an einem Ort.", icon: Inbox },
  { title: "Ihr Stil, Ihre Stimme", description: "Der digitale Empfang begrüßt Ihre Kunden so, wie Sie es tun würden.", icon: Mic },
];

const faqs = [
  { question: "Können Kundinnen weiterhin direkt bei mir anrufen?", answer: "Ja! Sie entscheiden, wann der digitale Empfang übernimmt. Zum Beispiel nur wenn Sie beschäftigt sind, außerhalb der Öffnungszeiten, oder immer. Dringende Anrufe können jederzeit durchgestellt werden." },
  { question: "Kennt der digitale Empfang meine Preise und Leistungen?", answer: "Ja. Im Onboarding hinterlegen Sie alle Informationen: Preise für Schnitt, Farbe, Styling, Öffnungszeiten, verfügbare Stylisten. Der Empfang antwortet auf Basis dieser Daten." },
  { question: "Was passiert, wenn eine Kundin absagt?", answer: "Der digitale Empfang nimmt die Absage entgegen, aktualisiert den Kalender und kann optional die nächste Person auf der Warteliste benachrichtigen." },
  { question: "Funktioniert das auch mit meinem bestehenden Kalender?", answer: "Ja. Der digitale Empfang synchronisiert mit Google Calendar, Outlook und vielen Branchenlösungen. Doppelbuchungen sind ausgeschlossen." },
  { question: "Wie klingt der digitale Empfang?", answer: "Natürlich und professionell. Sie können die Begrüßung und den Ton anpassen. Rufen Sie unsere Demo an und überzeugen Sie sich selbst: +49 322 218 02294" },
];

const pkg = {
  name: "Digitaler Empfang",
  tagline: "Nie wieder Kunden verlieren – auch wenn Sie schneiden.",
  benefits: ["Automatische Terminbuchung per Telefon & WhatsApp", "Preisauskunft ohne Unterbrechung", "Wartelisten-Management inklusive", "Alle Kanäle in einem Posteingang", "inkl. 200 WhatsApp-Konversationen/Monat"],
  monthly: "299",
  setup: "499",
  cta: "Ich gewinne Zeit",
  badge: "✂️ Beliebt bei Salons",
};

const FriseurPage = () => {
  useSEO({
    title: "KI-Empfang für Friseursalons | aireichbar",
    description: "Nie wieder Kunden verlieren während Sie schneiden. Automatische Terminbuchung per Telefon & WhatsApp. Für Salons im Kreis Borken. 30 Tage testen.",
    canonical: "https://www.aireichbar.de/friseur",
  });

  useSchemaOrg({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
  }, "friseur-faq-schema");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <BranchHero
          badge="✂️ Speziell für Friseursalons im Kreis Borken"
          breadcrumb="Friseursalons"
          h1Line1="Kunden rufen an. Sie schneiden."
          h1Line2="Niemand geht ran. Das ändern wir."
          subheadline="Ihr digitaler Empfang nimmt Terminwünsche an, beantwortet Fragen zu Preisen und sorgt dafür, dass kein Kunde verloren geht – während Sie sich auf Ihre Arbeit konzentrieren."
        />
        <PainPointsSection title="Der Alltag im Salon – kennen Sie das?" painPoints={painPoints} />
        <BranchFeaturesSection title="Ihr digitaler Empfang – wie eine Rezeptionistin, die nie Pause macht" features={features} />
        <TestimonialSection quote="Seitdem der digitale Empfang läuft, verpassen wir keine Terminanfragen mehr. Ich kann mich voll auf meine Kundinnen konzentrieren – das Telefon stört nicht mehr." author="Inhaberin eines Salons in Bocholt" />

        {/* Savings Calculator */}
        <section className="py-16">
          <div className="container mx-auto px-5 md:px-8 max-w-2xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">So viel Umsatz geht Ihnen verloren</h2>
            <p className="text-muted-foreground mb-8">Jeder verpasste Anruf ist ein potenzieller Kunde, der woanders bucht.</p>
            <div className="bg-muted/50 rounded-xl p-8">
              <div className="grid grid-cols-2 gap-6 text-left mb-6">
                <div>
                  <label className="text-sm text-muted-foreground">Verpasste Anrufe pro Woche</label>
                  <p className="text-3xl font-bold">~10</p>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground">Durchschnittlicher Bon</label>
                  <p className="text-3xl font-bold">65 €</p>
                </div>
              </div>
              <div className="border-t pt-6">
                <p className="text-sm text-muted-foreground">Potenzieller Umsatzverlust pro Monat</p>
                <p className="text-4xl font-bold text-destructive">2.600 €</p>
                <p className="text-sm text-muted-foreground mt-2">(10 Anrufe × 65€ × 4 Wochen)</p>
              </div>
            </div>
            <p className="mt-6 text-muted-foreground">Der digitale Empfang kostet <strong>299 €/Monat</strong>. Schon ein einziger gewonnener Kunde pro Woche macht ihn rentabel.</p>
          </div>
        </section>

        <BranchPricingSection pkg={pkg} />
        <BranchFAQSection faqs={faqs} />
        <LocalSEOSection
          title="Für Friseursalons im Kreis Borken"
          subtitle="Ob Bocholt, Borken, Ahaus oder Gronau – wir sind Ihr lokaler Partner für digitale Erreichbarkeit."
          terms={["Friseur in Bocholt", "Friseur in Borken", "Friseur in Ahaus", "Friseur in Rhede", "Friseur in Stadtlohn", "Friseur in Gronau", "Friseur in Vreden", "Friseur in Gescher", "Friseur in Isselburg"]}
        />
        <BranchCTASection title="Bereit, keine Kunden mehr zu verlieren?" subtitle="Testen Sie den digitalen Empfang 30 Tage risikofrei. Wenn Sie nicht zufrieden sind, bekommen Sie Ihr Geld zurück." />
      </main>
      <Footer />
    </div>
  );
};

export default FriseurPage;
