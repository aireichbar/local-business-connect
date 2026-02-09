import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FAQ {
  question: string;
  answer: string;
}

interface BranchFAQSectionProps {
  faqs: FAQ[];
  title?: string;
}

const BranchFAQSection = ({ faqs, title = "Häufige Fragen" }: BranchFAQSectionProps) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-5 md:px-8 max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">{title}</h2>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border rounded-lg px-4">
              <AccordionTrigger className="text-left hover:no-underline py-4">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default BranchFAQSection;
