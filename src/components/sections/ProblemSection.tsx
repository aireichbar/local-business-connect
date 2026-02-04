import { Phone, Clock, XCircle, TrendingDown, ArrowRight, CheckCircle2, XCircle as XIcon } from "lucide-react";
import { motion } from "framer-motion";

const ProblemSection = () => {
  const problems = [
    {
      icon: Phone,
      title: "Nicht erreichbar",
      stat: "3-5 Anrufe/Tag verpasst",
      color: "from-red-500/20 to-orange-500/20",
    },
    {
      icon: Clock,
      title: "Anfragen nach Feierabend",
      stat: "60% außerhalb Ihrer Zeiten",
      color: "from-orange-500/20 to-yellow-500/20",
    },
    {
      icon: XCircle,
      title: "Kunden zur Konkurrenz",
      stat: "< 30s Geduld",
      color: "from-yellow-500/20 to-red-500/20",
    },
    {
      icon: TrendingDown,
      title: "Keine Zeit fürs Digitale",
      stat: "5+ Stunden/Woche verloren",
      color: "from-red-500/20 to-pink-500/20",
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const beforeItems = [
    "Anrufe gehen ins Leere",
    "Kunden warten vergeblich",
    "Termine werden vergessen",
    "Stress & Überlastung",
  ];

  const afterItems = [
    "24/7 Erreichbarkeit",
    "Sofortige Antworten",
    "Automatische Buchungen",
    "Mehr Zeit für Ihre Arbeit",
  ];

  return (
    <section className="py-12 md:py-16 bg-background relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--destructive)) 1px, transparent 0)`,
          backgroundSize: "24px 24px"
        }} />
      </div>

      <div className="container mx-auto px-5 md:px-8 relative">
        {/* Compact header */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-10"
        >
          <span className="trust-badge mb-3 bg-destructive/10 text-destructive">Das Problem</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            Kommt Ihnen das bekannt vor?
          </h2>
        </motion.div>

        {/* Animated problem cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-10"
        >
          {problems.map((problem) => (
            <motion.div 
              key={problem.title}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                transition: { type: "spring", stiffness: 400, damping: 17 }
              }}
              className="group relative bg-card rounded-xl p-4 md:p-5 border border-border/50 hover:border-destructive/40 transition-all duration-300 text-center cursor-default overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${problem.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <motion.div 
                  className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-destructive/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-destructive/20 transition-all duration-300"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  <problem.icon className="w-6 h-6 md:w-7 md:h-7 text-destructive" />
                </motion.div>
                <h3 className="font-semibold text-foreground text-sm md:text-base mb-1">
                  {problem.title}
                </h3>
                <p className="text-xs md:text-sm text-destructive font-medium">
                  {problem.stat}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Transition text - between cards and split screen */}
        <motion.p 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center text-lg md:text-xl font-medium text-foreground mb-8 md:mb-10"
        >
          Was wäre, wenn das <span className="text-primary font-bold relative">
            automatisch
            <motion.span 
              className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            />
          </span> funktioniert?
        </motion.p>

        {/* Before/After Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            {/* Before */}
            <motion.div 
              className="bg-gradient-to-br from-destructive/5 to-destructive/10 rounded-2xl p-5 md:p-6 border border-destructive/20"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-destructive/20 flex items-center justify-center">
                  <XIcon className="w-4 h-4 text-destructive" />
                </div>
                <h3 className="font-bold text-foreground">Ohne Aireichbar</h3>
              </div>
              <ul className="space-y-2.5">
                {beforeItems.map((item, index) => (
                  <motion.li 
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <XIcon className="w-4 h-4 text-destructive/60 flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* After */}
            <motion.div 
              className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-5 md:p-6 border border-primary/20"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                </div>
                <h3 className="font-bold text-foreground">Mit Aireichbar</h3>
              </div>
              <ul className="space-y-2.5">
                {afterItems.map((item, index) => (
                  <motion.li 
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 text-sm text-foreground"
                  >
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
