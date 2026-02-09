import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Shield } from "lucide-react";

interface PackageData {
  name: string;
  tagline: string;
  benefits: string[];
  monthly: string;
  setup: string;
  cta: string;
  badge: string;
}

const BranchPricingSection = ({ pkg }: { pkg: PackageData }) => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-5 md:px-8 max-w-lg">
        <div className="bg-card rounded-2xl p-8 border-2 border-primary shadow-lg relative">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-sm font-medium px-4 py-1 rounded-full">
            {pkg.badge}
          </span>
          <h2 className="text-2xl font-bold mt-2 mb-1">{pkg.name}</h2>
          <p className="text-muted-foreground text-sm mb-6">{pkg.tagline}</p>

          <div className="mb-6">
            <span className="text-4xl font-bold">{pkg.monthly} €</span>
            <span className="text-muted-foreground">/Monat</span>
            <p className="text-sm text-muted-foreground mt-1">+ {pkg.setup} € einmalig (Setup)</p>
          </div>

          <ul className="space-y-3 mb-8">
            {pkg.benefits.map((b, i) => (
              <li key={i} className="flex items-start gap-2 text-sm">
                <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <Button size="lg" className="w-full" asChild>
            <Link to="/#kontakt">{pkg.cta}</Link>
          </Button>

          <p className="text-center text-xs text-muted-foreground mt-4 flex items-center justify-center gap-1">
            <Shield className="h-3 w-3" /> 30 Tage Geld-zurück-Garantie
          </p>
        </div>
        <p className="text-center text-xs text-muted-foreground mt-3">Alle Preise zzgl. MwSt.</p>
      </div>
    </section>
  );
};

export default BranchPricingSection;
