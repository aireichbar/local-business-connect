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
      answer: "Nein, überhaupt nicht. Wir kümmern uns um alles – von der Erstellung bis zur Wartung. Sie müssen nur sagen, was Sie möchten. Keine IT-Kenntnisse nötig."
    },
    {
      question: "Wie lange dauert es, bis meine Website online ist?",
      answer: "Ein einfacher OnePager ist in der Regel innerhalb von 1-2 Wochen fertig. Bei umfangreicheren Projekten oder dem digitalen Empfang planen wir 2-4 Wochen ein – je nach Abstimmungsbedarf."
    },
    {
      question: "Was passiert, wenn ich später mehr brauche?",
      answer: "Kein Problem! Unser System ist modular. Sie können jederzeit vom Einstiegspaket auf Wachstum oder den digitalen Empfang upgraden. Die bereits gezahlten Einmalkosten werden angerechnet."
    },
    {
      question: "Was kostet mich der digitale Empfang im Monat?",
      answer: "Der digitale Empfang kostet 139 €/Monat, inklusive aller Features: Website-Chat, WhatsApp-Anbindung, automatisierte Antworten und 24/7 Erreichbarkeit. Keine versteckten Kosten."
    },
    {
      question: "Kann ich monatlich kündigen?",
      answer: "Ja, alle unsere Pakete mit monatlichen Kosten sind monatlich kündbar. Keine langen Vertragslaufzeiten. Bei Kündigung bleibt Ihre Website selbstverständlich online."
    },
    {
      question: "Funktioniert das auch für meine Branche?",
      answer: "Der digitale Empfang eignet sich für alle Branchen mit Kundenkontakt: Handwerker, Therapeuten, Friseure, Restaurants, Werkstätten, Arztpraxen und viele mehr. Im Erstgespräch prüfen wir gemeinsam, ob es für Sie passt."
    },
    {
      question: "Wer ist mein Ansprechpartner bei Fragen?",
      answer: "Sie haben immer einen persönlichen Ansprechpartner aus dem Kreis Borken. Keine anonymen Hotlines, keine Warteschleifen. Direkter Kontakt per E-Mail oder Telefon."
    }
  ];

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="blob-decoration bottom-0 left-0 w-80 h-80 bg-primary/5" />
      
      <div className="container mx-auto container-narrow relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="trust-badge mb-6">
            <HelpCircle className="w-4 h-4 text-primary" />
            Häufige Fragen
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Sie fragen – wir antworten
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Die wichtigsten Fragen vorab beantwortet. Bei weiteren Fragen sind wir gerne persönlich für Sie da.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="card-elevated border border-border/50 rounded-2xl px-6 data-[state=open]:shadow-lg transition-shadow"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
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
