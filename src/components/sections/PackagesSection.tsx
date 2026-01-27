import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import PricingCard from "./pricing/PricingCard";
import { packages } from "./pricing/packagesData";

const PackagesSection = () => {
  return (
    <section id="pakete" className="py-20 md:py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-5 md:px-8 relative max-w-6xl">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Eine Sache weniger, um die Sie sich kümmern müssen
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Nicht jeder Betrieb braucht sofort alles – aber jeder braucht Entlastung.
          </p>
          <p className="text-muted-foreground max-w-xl mx-auto mt-2">
            Deshalb können Sie klein starten und jederzeit erweitern.
          </p>
        </motion.div>

        {/* Packages grid */}
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {packages.map((pkg, index) => (
            <PricingCard key={pkg.name} pkg={pkg} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Nicht sicher? In einem kurzen Gespräch finden wir heraus, was zu Ihrem Betrieb passt.
          </p>
          <Link to="/#kontakt">
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full group"
            >
              Kostenloses Gespräch vereinbaren
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>

        {/* Trust note */}
        <p className="text-center text-muted-foreground text-sm mt-8">
          Alle Preise zzgl. MwSt. • Monatliche Gebühren bei 24 Monaten Mindestlaufzeit
        </p>
      </div>
    </section>
  );
};

export default PackagesSection;
