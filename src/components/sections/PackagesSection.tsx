import PricingCard from "./pricing/PricingCard";
import DigitalReceptionInfo from "./pricing/DigitalReceptionInfo";
import { packages } from "./pricing/packagesData";

const PackagesSection = () => {
  return (
    <section id="pakete" className="section-padding bg-background relative overflow-hidden">
      <div className="container mx-auto px-5 md:px-8 relative">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="trust-badge mb-4">Preise</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Transparente Pakete
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Faire Preise, klare Leistungen. Keine versteckten Kosten.
          </p>
        </div>

        {/* Packages grid */}
        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto items-stretch">
          {packages.map((pkg) => (
            <PricingCard key={pkg.name} pkg={pkg} />
          ))}
        </div>

        {/* Digitaler Empfang Info Box */}
        <DigitalReceptionInfo />

        {/* Trust note */}
        <p className="text-center text-muted-foreground text-sm mt-8">
          Alle Preise zzgl. MwSt. • Monatliche Gebühren bei 24 Monaten Mindestlaufzeit
        </p>
      </div>
    </section>
  );
};

export default PackagesSection;
