import { Shield, Users, Calendar, Headphones } from "lucide-react";
import { motion } from "framer-motion";

const indicators = [
  {
    icon: Shield,
    text: "DSGVO-konform & EU-Hosting",
  },
  {
    icon: Users,
    text: "Persönliche Einrichtung – kein Baukasten",
  },
  {
    icon: Calendar,
    text: "Feste Vertragslaufzeit von 24 Monaten",
  },
  {
    icon: Headphones,
    text: "Support & laufende Betreuung inklusive",
  },
];

const TrustIndicators = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      viewport={{ once: true }}
      className="mt-16 pt-10 border-t border-border/50"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {indicators.map((indicator) => (
          <div
            key={indicator.text}
            className="flex items-center gap-3 text-muted-foreground"
          >
            <div className="w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center flex-shrink-0">
              <indicator.icon className="w-5 h-5 text-foreground/60" />
            </div>
            <span className="text-sm">{indicator.text}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default TrustIndicators;
