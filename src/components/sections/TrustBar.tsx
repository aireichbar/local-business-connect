import { motion } from "framer-motion";
import { Star, Users, Award, TrendingUp } from "lucide-react";

const TrustBar = () => {
  const stats = [
    {
      icon: Users,
      value: "50+",
      label: "Lokale Betriebe",
    },
    {
      icon: Star,
      value: "4.9",
      label: "Kundenbewertung",
    },
    {
      icon: TrendingUp,
      value: "98%",
      label: "Zufriedenheit",
    },
    {
      icon: Award,
      value: "2024",
      label: "Gegründet in Bocholt",
    },
  ];

  return (
    <section className="py-8 md:py-10 bg-background border-b border-border/30">
      <div className="container mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
            Vertrauen von lokalen Unternehmen aus dem Münsterland
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 w-full max-w-3xl">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-2 group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-2xl md:text-3xl font-bold text-foreground">
                  {stat.value}
                </span>
                <span className="text-xs text-muted-foreground mt-0.5">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBar;
