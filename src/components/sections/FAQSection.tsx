import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQSection = () => {
  const faqs = [
    {
      question: "Brauche ich technische Kenntnisse?",
      answer: "Nein, überhaupt nicht. Wir kümmern uns um alles – von der Erstellung bis zur Wartung. Keine IT-Kenntnisse nötig."
    },
    {
      question: "Wie lange dauert es, bis meine Website online ist?",
      answer: "Ein OnePager ist in 1-2 Wochen fertig. Bei umfangreicheren Projekten planen wir 2-4 Wochen ein."
    },
    {
      question: "Was passiert, wenn ich später mehr brauche?",
      answer: "Kein Problem! Sie können jederzeit upgraden. Die bereits gezahlten Einmalkosten werden angerechnet."
    },
    {
      question: "Was kostet der digitale Empfang im Monat?",
      answer: "Der digitale Empfang kostet 139 €/Monat, inklusive aller Features. Keine versteckten Kosten."
    },
    {
      question: "Funktioniert das auch für meine Branche?",
      answer: "Der digitale Empfang eignet sich für alle Branchen mit Kundenkontakt: Handwerker, Therapeuten, Friseure, Restaurants und mehr."
    },
    {
      question: 'Was ist im Wachstum-Paket mit "6 Anpassungen/Jahr" gemeint?',
      answer: "Sie können bis zu sechs Mal im Jahr kleinere Änderungen an Texten, Bildern oder Layouts anfragen – wir setzen diese zeitnah um."
    },
    {
      question: "Welche Domain bekomme ich?",
      answer: "Sie können Ihre bestehende Domain nutzen oder wir registrieren eine neue für Sie. Die Domain gehört selbstverständlich Ihnen."
    },
    {
      question: "Kann ich meine bestehende Website behalten?",
      answer: "Ja! Der Digitale Empfang kann problemlos in Ihre bereits vorhandene Website integriert werden."
    },
    {
      question: "Wer hat Zugriff auf meine Kundendaten?",
      answer: "Nur Sie. Alle erfassten Daten verbleiben ausschließlich bei Ihnen – volle Kontrolle, volle Transparenz, DSGVO-konform."
    },
    {
      question: "Wie läuft der Onboarding-Prozess ab?",
      answer: "Nach Auftragserteilung führen wir ein kurzes Gespräch, sammeln Ihre Inhalte und setzen alles um. Sie müssen sich um nichts kümmern."
    },
    {
      question: "Gibt es Vertragslaufzeiten?",
      answer: "Ja, die monatlichen Pakete haben eine Mindestlaufzeit von 24 Monaten. Das einmalige Einstieg-Paket ist ohne Laufzeit."
    },
    {
      question: "Wie schnell erhalte ich Support bei Problemen?",
      answer: "In der Regel antworten wir innerhalb von 24 Stunden. Bei dringenden Anliegen sind wir oft noch schneller."
    },
    {
      question: "Wie funktioniert die WhatsApp-Integration?",
      answer: "Wir verbinden Ihre Geschäftsnummer mit dem digitalen Empfang. Kunden schreiben wie gewohnt – die KI antwortet automatisch."
    },
    {
      question: "Was passiert, wenn die KI eine Frage nicht beantworten kann?",
      answer: "In diesem Fall sammelt sie die Kontaktdaten und Sie erhalten eine Benachrichtigung, um persönlich zu reagieren."
    },
    {
      question: "Kann ich den digitalen Empfang testen?",
      answer: "Gerne zeigen wir Ihnen in einem kostenlosen Beratungsgespräch eine Live-Demo, damit Sie sehen, wie es in der Praxis funktioniert."
    }
  ];

  return (
    <section id="faq" className="section-padding bg-background relative overflow-hidden">
      <div className="container mx-auto container-narrow relative">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="trust-badge mb-4">
            <HelpCircle className="w-4 h-4" />
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Häufige Fragen
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Die wichtigsten Fragen vorab beantwortet.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border/50 rounded-xl px-6 data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

