import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface BranchCTASectionProps {
  title: string;
  subtitle: string;
}

const BranchCTASection = ({ title, subtitle }: BranchCTASectionProps) => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-5 md:px-8 max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-primary-foreground/80 mb-8">{subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" asChild>
            <Link to="/#kontakt">Kostenlose Beratung</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            asChild
          >
            <a href="tel:+4932221802294">Jetzt Demo anrufen</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BranchCTASection;
