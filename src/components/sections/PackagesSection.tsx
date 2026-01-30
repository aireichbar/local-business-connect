import { motion } from "framer-motion";
import PricingCard from "./pricing/PricingCard";
import TrustIndicators from "./pricing/TrustIndicators";
import { packages } from "./pricing/packagesData";

const PackagesSection = () => {
  // Mobile order: Package 3 (highlighted) first, then 2, then 1
  const mobileOrderedPackages = [packages[2], packages[1], packages[0]];


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

        {/* Mobile: Stacked with Package 3 first, label above */}
        <div className="md:hidden space-y-6">
          {mobileOrderedPackages.map((pkg, index) => (
            <div key={pkg.name}>
              {/* Label above Package 3 (first on mobile) */}
              {index === 0 && (
                <p className="text-center text-sm text-muted-foreground mb-3 font-medium">
                  Empfohlene Lösung für die meisten Betriebe
                </p>
              )}
              <PricingCard pkg={pkg} index={index} />
            </div>
          ))}
        </div>

        {/* Desktop: Staircase layout - all cards equal height with CTAs aligned */}
        <div className="hidden md:block pb-14">
          <div className="grid grid-cols-3 gap-6 lg:gap-8">
            {packages.map((pkg, index) => {
              // Staircase offset: Card 1 lowest, Card 2 medium, Card 3 highest
              // Using padding-top inside a wrapper to push cards down, creating the staircase effect
              const paddingTop = ["pt-16", "pt-8", "pt-0"];
              
              return (
                <motion.div
                  key={pkg.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`${paddingTop[index]} flex`}
                >
                  <div className="flex-1">
                    <PricingCard pkg={pkg} index={index} isStaircase />
                  </div>
                </motion.div>
              );
            })}
          </div>
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
