import { motion } from "framer-motion";
import PricingCard from "./pricing/PricingCard";
import TrustIndicators from "./pricing/TrustIndicators";
import { packages } from "./pricing/packagesData";

const PackagesSection = () => {
  const pkg = packages[0];

  return (
    <section id="pakete" className="py-20 md:py-28 bg-background relative overflow-hidden">
      <div className="container mx-auto px-5 md:px-8 relative max-w-2xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-14 md:mb-16"
        >
        <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground mb-4 tracking-tight">
            Kein Anruf & keine Nachricht geht mehr verloren.
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Ihr digitaler Empfang übernimmt – per Telefon, WhatsApp und E-Mail
          </p>
        </motion.div>

        {/* Single centered card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <PricingCard pkg={pkg} index={0} />
        </motion.div>

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
