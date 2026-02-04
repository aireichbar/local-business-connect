import { Zap, MapPin, Shield, Clock, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";

const SolutionSection = () => {
  const benefits = [
    { icon: Zap, text: "In wenigen Tagen online" },
    { icon: Clock, text: "24/7 erreichbar" },
    { icon: MapPin, text: "Lokaler Partner aus Bocholt" },
    { icon: Shield, text: "DSGVO-konform" },
    { icon: HeartHandshake, text: "Kein Technik-Stress" },
  ];

  return (
    <section className="py-12 md:py-16 relative overflow-hidden" style={{ background: "var(--gradient-subtle)" }}>
      <div className="container mx-auto px-5 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="trust-badge mb-3"
          >
            Die Lösung
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 leading-tight"
          >
            <span className="text-gradient-primary">Aireichbar</span> übernimmt Ihren Empfang
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
          >
            Ihr digitales System begrüßt Kunden, beantwortet Fragen und sammelt Kontaktdaten – 
            automatisch und zuverlässig.
          </motion.p>

          {/* Benefits as horizontal pills with hover effects */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {benefits.map((benefit, index) => (
              <motion.div 
                key={benefit.text}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  transition: { type: "spring", stiffness: 400, damping: 17 }
                }}
                className="flex items-center gap-2 bg-card rounded-full px-4 py-2 border border-border/50 hover:border-primary/40 hover:shadow-md hover:bg-primary/5 transition-all duration-300 cursor-default"
              >
                <benefit.icon className="w-4 h-4 text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">{benefit.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
