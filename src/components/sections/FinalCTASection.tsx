import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const FinalCTASection = () => {
  const benefits = [
    "Kostenlose Erstberatung",
    "Keine versteckten Kosten",
    "Persönlicher Ansprechpartner"
  ];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      {/* Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: "32px 32px"
        }} />
      </div>
      
      <div className="container mx-auto px-5 md:px-8 relative">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Bereit, immer erreichbar zu sein?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-white/80 mb-8"
          >
            Lassen Sie uns gemeinsam herausfinden, wie Aireichbar Ihrem Unternehmen helfen kann.
          </motion.p>

          {/* Benefits with stagger animation */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div 
                key={benefit} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-2 text-white/90 bg-white/10 rounded-full px-4 py-2 hover:bg-white/20 transition-all duration-300 cursor-default"
              >
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium">{benefit}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Primary CTA - emphasized */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
          >
            <Link to="/#kontakt">
              <Button 
                variant="cta" 
                size="xl" 
                className="group bg-white text-primary hover:bg-white/90 shadow-2xl hover:shadow-[0_20px_50px_rgba(255,255,255,0.3)]"
              >
                Jetzt Gespräch vereinbaren
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </Button>
            </Link>
            <p className="text-white/50 text-sm mt-4">
              Unverbindlich & kostenfrei
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
