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
      question: "Funktioniert das auch für meine Branche?",
      answer: "Der digitale Empfang eignet sich für alle Branchen mit Kundenkontakt: Handwerker, Therapeuten, Friseure, Restaurants und mehr."
    },
    {
      question: "Wer hat Zugriff auf meine Kundendaten?",
      answer: "Nur Sie. Alle erfassten Daten verbleiben ausschließlich bei Ihnen – volle Kontrolle, volle Transparenz, DSGVO-konform."
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

