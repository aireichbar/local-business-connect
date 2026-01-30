import { motion } from "framer-motion";
import PricingCard from "./pricing/PricingCard";
import TrustIndicators from "./pricing/TrustIndicators";
import { packages } from "./pricing/packagesData";

const PackagesSection = () => {
  // On mobile, show highlighted package first
  const mobileOrderedPackages = [...packages].sort((a, b) => {
    if (a.isHighlighted) return -1;
    if (b.isHighlighted) return 1;
    return 0;
  });

  return (
    <section id="pakete" className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="container mx-auto px-5 md:px-8 relative max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-14 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground mb-4 tracking-tight">
            Drei Wege zu mehr Ruhe im Arbeitsalltag
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Vom digitalen Aushängeschild bis zur vollautomatischen Empfangskraft.
          </p>
        </motion.div>

        {/* Mobile: Stacked with highlighted first */}
        <div className="md:hidden space-y-6">
          {mobileOrderedPackages.map((pkg, index) => (
            <PricingCard key={pkg.name} pkg={pkg} index={index} />
          ))}
        </div>

        {/* Desktop: Grid in original order */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {packages.map((pkg, index) => (
            <PricingCard key={pkg.name} pkg={pkg} index={index} />
          ))}
        </div>

        {/* Trust Indicators */}
        <TrustIndicators />

        {/* Pricing note */}
        <p className="text-center text-muted-foreground text-xs mt-10">
          Alle Preise zzgl. MwSt.
        </p>
      </div>
    </section>
  );
};

export default PackagesSection;
