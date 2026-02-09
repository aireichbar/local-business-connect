import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useSEO, useSchemaOrg } from "@/hooks/useSEO";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Phone, Euro, Settings, Shield, HelpCircle } from "lucide-react";

const allgemeinFAQs = [
  { id: "was-ist-digitaler-empfang", question: "Was ist ein digitaler Empfang?", answer: "Ein digitaler Empfang ist ein KI-gestütztes System, das Kundenanfragen über verschiedene Kanäle automatisch bearbeitet – Telefon, WhatsApp, E-Mail, Website-Chat und Kontaktformulare. Er funktioniert wie eine virtuelle Rezeption: Anrufe werden angenommen, Fragen beantwortet, Termine vorgeschlagen und Notfälle weitergeleitet. So sind Sie 24/7 erreichbar, ohne selbst ans Telefon gehen zu müssen." },
  { id: "fuer-wen-geeignet", question: "Für wen ist der digitale Empfang geeignet?", answer: "Der digitale Empfang eignet sich für alle Betriebe, die regelmäßig Kundenanfragen erhalten und nicht immer erreichbar sein können: Handwerksbetriebe, Friseursalons, Physiotherapie-Praxen, Arztpraxen, Anwaltskanzleien, Kosmetikstudios und viele mehr. Besonders geeignet für Betriebe mit 1-20 Mitarbeitern, die keine eigene Rezeption haben." },
  { id: "wie-schnell-einsatzbereit", question: "Wie schnell ist der digitale Empfang einsatzbereit?", answer: "Nach dem Onboarding (ca. 30-60 Minuten) ist Ihr digitaler Empfang sofort einsatzbereit. Im Onboarding hinterlegen Sie Ihre Firmendaten, Öffnungszeiten, Leistungen und individuelle Antworten. Danach können Sie direkt die Rufumleitung aktivieren oder die neue Nummer nutzen." },
];

const kostenFAQs = [
  { id: "was-kostet-digitaler-empfang", question: "Was kostet der digitale Empfang?", answer: "Der digitale Empfang kostet 299 € pro Monat zzgl. 499 € einmaliges Setup. Im Preis enthalten: 5 Kommunikationskanäle (Telefon, WhatsApp, E-Mail, Website-Chat, Kontaktformular), 300 Telefon-Minuten pro Monat, 200 WhatsApp-Konversationen pro Monat, DSGVO-konforme Datenverarbeitung und persönlicher Support. Alle Preise verstehen sich zzgl. MwSt." },
  { id: "vertragslaufzeit", question: "Gibt es eine Mindestvertragslaufzeit?", answer: "Ja, die Mindestvertragslaufzeit beträgt 12 Monate. Allerdings bieten wir eine 30-Tage-Geld-zurück-Garantie: Wenn Sie innerhalb der ersten 30 Tage nicht zufrieden sind, erstatten wir Ihnen die komplette Einrichtungsgebühr und die erste Monatsrate." },
  { id: "versteckte-kosten", question: "Gibt es versteckte Kosten?", answer: "Nein. Der Preis von 299 €/Monat enthält alle Leistungen. Zusätzliche Kosten entstehen nur, wenn Sie die inkludierten Fair-Use-Grenzen überschreiten (300 Telefon-Minuten/Monat, 200 WhatsApp-Konversationen/Monat). Überschreitungen werden mit 0,15 €/Minute bzw. 0,10 €/Konversation berechnet." },
  { id: "kuendigung", question: "Wie kann ich kündigen?", answer: "Die Kündigung ist jederzeit zum Ende der Vertragslaufzeit möglich, mit einer Frist von 30 Tagen. Die Kündigung kann per E-Mail, Brief oder über das Dashboard erfolgen. Ihre Daten werden nach Vertragsende DSGVO-konform gelöscht." },
];

const funktionenFAQs = [
  { id: "welche-kanaele", question: "Welche Kommunikationskanäle werden unterstützt?", answer: "Der digitale Empfang unterstützt 5 Kanäle: 1) Telefon – Anrufe werden automatisch angenommen und bearbeitet, 2) WhatsApp Business – Nachrichten werden sofort beantwortet, 3) E-Mail – eingehende Mails werden verarbeitet, 4) Website-Chat – Live-Chat auf Ihrer Website, 5) Kontaktformulare – Anfragen werden strukturiert erfasst. Alle Kanäle laufen in einem zentralen Dashboard zusammen." },
  { id: "wie-klingt-telefon", question: "Wie klingt der digitale Empfang am Telefon?", answer: "Der digitale Empfang klingt natürlich und professionell – nicht wie ein Roboter. Die Begrüßung wird individuell für Ihren Betrieb angepasst. Sie können den Ton und Stil anpassen. Testen Sie selbst: Rufen Sie unsere Demo an unter +49 322 218 02294." },
  { id: "terminbuchung", question: "Wie funktioniert die automatische Terminbuchung?", answer: "Der digitale Empfang fragt den Kunden nach dem gewünschten Termin, prüft die Verfügbarkeit in Ihrem Kalender (Google Calendar, Outlook oder andere) und schlägt passende Alternativen vor. Nach Bestätigung wird der Termin automatisch eingetragen und der Kunde erhält eine Bestätigung per WhatsApp oder E-Mail." },
  { id: "notfall-erkennung", question: "Werden Notfälle erkannt und weitergeleitet?", answer: "Ja. Der digitale Empfang erkennt dringende Anfragen anhand von Keywords wie 'Notfall', 'dringend', 'Heizung ausgefallen', 'Wasserrohrbruch' etc. Diese werden sofort per SMS und/oder Anruf an Sie oder den diensthabenden Mitarbeiter weitergeleitet. Die Notfall-Keywords können Sie individuell anpassen." },
  { id: "antworten-anpassen", question: "Kann ich die Antworten selbst anpassen?", answer: "Ja, vollständig. Im Dashboard können Sie alle Antworten, Begrüßungen, Preisauskünfte und FAQ-Texte selbst bearbeiten. Der digitale Empfang antwortet basierend auf den Informationen, die Sie hinterlegt haben. Änderungen sind jederzeit möglich und werden sofort aktiv." },
];

const technikFAQs = [
  { id: "bestehende-nummer", question: "Kann ich meine bestehende Telefonnummer behalten?", answer: "Ja. Sie können Ihre bestehende Nummer behalten und eine Rufumleitung zum digitalen Empfang einrichten. Alternativ erhalten Sie eine zusätzliche Nummer speziell für den digitalen Empfang." },
  { id: "kalender-integration", question: "Funktioniert das mit meinem bestehenden Kalender?", answer: "Ja. Der digitale Empfang synchronisiert mit Google Calendar, Microsoft Outlook und Apple Calendar. Termine werden automatisch eingetragen und abgeglichen. Doppelbuchungen sind ausgeschlossen." },
  { id: "technisches-wissen", question: "Brauche ich technisches Wissen?", answer: "Nein. Der digitale Empfang ist so einfach wie ein Smartphone. Das Onboarding führt Sie Schritt für Schritt durch die Einrichtung. Danach können Sie im Dashboard alles per Klick anpassen." },
];

const datenschutzFAQs = [
  { id: "dsgvo-konform", question: "Ist der digitale Empfang DSGVO-konform?", answer: "Ja, vollständig. Wir verarbeiten alle Daten nach den Vorgaben der DSGVO. Ein Auftragsverarbeitungsvertrag (AVV) ist Bestandteil des Vertrags. Alle Server stehen in Deutschland (IONOS Cloud, Frankfurt)." },
  { id: "wo-daten-gespeichert", question: "Wo werden meine Daten gespeichert?", answer: "Alle Daten werden ausschließlich auf Servern in Deutschland gespeichert (IONOS Cloud, Rechenzentrum Frankfurt). Wir nutzen keine Server in den USA oder anderen Drittländern. Die Datenübertragung ist TLS-verschlüsselt." },
  { id: "patientendaten", question: "Ist der digitale Empfang für Patientendaten geeignet?", answer: "Ja. Der digitale Empfang erfüllt die erhöhten Anforderungen für Gesundheitsdaten nach Art. 9 DSGVO. Wir bieten einen speziellen Auftragsverarbeitungsvertrag für medizinische Betriebe. Alle technischen und organisatorischen Maßnahmen (TOMs) sind dokumentiert." },
];

const categories = [
  { id: "allgemein", icon: HelpCircle, label: "Allgemein", faqs: allgemeinFAQs },
  { id: "kosten", icon: Euro, label: "Kosten & Vertrag", faqs: kostenFAQs },
  { id: "funktionen", icon: Settings, label: "Funktionen", faqs: funktionenFAQs },
  { id: "technik", icon: Phone, label: "Technik & Integration", faqs: technikFAQs },
  { id: "datenschutz", icon: Shield, label: "Datenschutz & Sicherheit", faqs: datenschutzFAQs },
];

const allFAQs = categories.flatMap((c) => c.faqs);

const FAQPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  useSEO({
    title: "Häufige Fragen zum Digitalen Empfang | aireichbar",
    description: "Was kostet ein digitaler Empfang? Wie funktioniert KI-Telefonie? Ist das DSGVO-konform? Alle Antworten für Handwerker und Dienstleister.",
    canonical: "https://www.aireichbar.de/faq",
  });

  useSchemaOrg({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFAQs.map((f) => ({ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: f.answer } })),
  }, "faq-page-schema");

  const filteredCategories = categories.map((cat) => ({
    ...cat,
    faqs: cat.faqs.filter((f) => !searchTerm || f.question.toLowerCase().includes(searchTerm.toLowerCase()) || f.answer.toLowerCase().includes(searchTerm.toLowerCase())),
  })).filter((cat) => cat.faqs.length > 0);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow">
        <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-5 md:px-8 max-w-4xl">
            <nav className="text-sm text-muted-foreground mb-6">
              <Link to="/" className="hover:text-primary">Startseite</Link><span className="mx-2">/</span><span>FAQ</span>
            </nav>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">Häufig gestellte Fragen</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">Alles, was Sie über den digitalen Empfang wissen müssen.</p>
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input type="text" placeholder="Frage suchen..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10 h-12 text-base" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 border-b">
          <div className="container mx-auto px-5 md:px-8 max-w-4xl">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map(({ icon: Icon, label, id }) => (
                <a key={id} href={`#${id}`} className="flex items-center gap-2 px-4 py-2 bg-muted rounded-full hover:bg-muted/80 transition-colors text-sm">
                  <Icon className="h-4 w-4" />{label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-5 md:px-8 max-w-3xl">
            {filteredCategories.map(({ id, icon: Icon, label, faqs }) => (
              <div key={id} id={id} className="mb-12">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2"><Icon className="h-6 w-6 text-primary" />{label}</h2>
                <Accordion type="single" collapsible className="space-y-3">
                  {faqs.map((faq) => (
                    <AccordionItem key={faq.id} value={faq.id} className="border rounded-lg px-4">
                      <AccordionTrigger className="text-left hover:no-underline py-4">{faq.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-4">{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-5 md:px-8 max-w-2xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Frage nicht dabei?</h2>
            <p className="text-muted-foreground mb-8">Kontaktieren Sie uns direkt – wir antworten innerhalb von 24 Stunden.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild><Link to="/#kontakt">Kontakt aufnehmen</Link></Button>
              <Button variant="outline" asChild><a href="tel:+4932221802294">Demo anrufen</a></Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQPage;
