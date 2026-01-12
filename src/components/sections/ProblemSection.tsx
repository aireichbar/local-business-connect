import { Phone, Clock, XCircle, TrendingDown } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: Phone,
      title: "Nicht erreichbar",
      stat: "3-5 Anrufe/Tag verpasst"
    },
    {
      icon: Clock,
      title: "Anfragen nach Feierabend",
      stat: "60% außerhalb Ihrer Zeiten"
    },
    {
      icon: XCircle,
      title: "Kunden zur Konkurrenz",
      stat: "< 30s Geduld"
    },
    {
      icon: TrendingDown,
      title: "Keine Zeit fürs Digitale",
      stat: "5+ Stunden/Woche verloren"
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-background relative overflow-hidden">
      <div className="container mx-auto px-5 md:px-8">
        {/* Compact header */}
        <div className="text-center mb-8 md:mb-10">
          <span className="trust-badge mb-3">Das Problem</span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            Kommt Ihnen das bekannt vor?
          </h2>
        </div>

        {/* Horizontal problem cards - icon focused */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
          {problems.map((problem) => (
            <div 
              key={problem.title}
              className="group bg-card rounded-xl p-4 md:p-5 border border-border/50 hover:border-destructive/30 hover:shadow-md transition-all duration-300 text-center"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-destructive/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-destructive/20 transition-colors">
                <problem.icon className="w-6 h-6 md:w-7 md:h-7 text-destructive" />
              </div>
              <h3 className="font-semibold text-foreground text-sm md:text-base mb-1">
                {problem.title}
              </h3>
              <p className="text-xs md:text-sm text-destructive font-medium">
                {problem.stat}
              </p>
            </div>
          ))}
        </div>

        {/* Transition */}
        <p className="text-center text-lg md:text-xl font-medium text-foreground">
          Was wäre, wenn das <span className="text-primary font-bold">automatisch</span> funktioniert?
        </p>
      </div>
    </section>
  );
};

export default ProblemSection;
