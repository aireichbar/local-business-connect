import { Phone, Clock, UserX, AlertCircle } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: Phone,
      title: "Ständig nicht erreichbar",
      description: "Kunden rufen an – aber Sie sind gerade im Einsatz oder mit einem anderen Kunden beschäftigt."
    },
    {
      icon: Clock,
      title: "Verpasste Anfragen",
      description: "Wer nicht erreichbar ist, verliert potenzielle Kunden an die Konkurrenz."
    },
    {
      icon: UserX,
      title: "Zu wenig Zeit",
      description: "Der Alltag ist stressig genug – für Website und Digitales bleibt keine Energie."
    },
    {
      icon: AlertCircle,
      title: "Unprofessioneller Eindruck",
      description: "Ohne moderne Online-Präsenz wirkt Ihr Betrieb veraltet – auch wenn die Qualität stimmt."
    }
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto container-narrow">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Das Problem
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Kennen Sie das?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Viele lokale Unternehmen kämpfen täglich mit denselben Herausforderungen – 
            und verlieren dabei bares Geld.
          </p>
        </div>

        {/* Problem cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((problem, index) => (
            <div 
              key={problem.title}
              className="card-elevated p-8 border border-border/50 card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center">
                  <problem.icon className="w-7 h-7 text-destructive" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
