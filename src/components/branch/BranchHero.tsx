import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

interface BranchHeroProps {
  badge: string;
  breadcrumb: string;
  h1Line1: string;
  h1Line2: string;
  subheadline: string;
  trustItems?: string[];
}

const BranchHero = ({ badge, breadcrumb, h1Line1, h1Line2, subheadline, trustItems }: BranchHeroProps) => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-5 md:px-8 max-w-6xl">
        <nav className="text-sm text-muted-foreground mb-6" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-primary">Startseite</Link>
          <span className="mx-2">/</span>
          <Link to="/#branchen" className="hover:text-primary">Branchen</Link>
          <span className="mx-2">/</span>
          <span>{breadcrumb}</span>
        </nav>

        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
          {badge}
        </span>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
          {h1Line1}<br />
          <span className="text-primary">{h1Line2}</span>
        </h1>

        <p className="text-xl text-muted-foreground max-w-2xl mb-8">{subheadline}</p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" asChild>
            <Link to="/#kontakt">Kostenlose Beratung <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="tel:+4932221802294">Demo anrufen: +49 322 218 02294</a>
          </Button>
        </div>

        {trustItems && (
          <div className="flex flex-wrap gap-6 mt-10 text-sm text-muted-foreground">
            {trustItems.map((item) => (
              <span key={item} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" /> {item}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BranchHero;
