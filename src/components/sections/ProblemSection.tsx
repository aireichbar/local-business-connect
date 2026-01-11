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
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="blob-decoration -top-32 -right-32 w-96 h-96 bg-destructive/5" />
      
      <div className="container mx-auto container-narrow relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="trust-badge mb-6">
            <span className="w-2 h-2 rounded-full bg-destructive animate-pulse-soft" />
            Das Problem
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Kennen Sie das?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Viele lokale Unternehmen kämpfen täglich mit denselben Herausforderungen – 
            und verlieren dabei bares Geld.
          </p>
        </div>

        {/* Problem cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <div 
              key={problem.title}
              className="group card-elevated p-8 lg:p-10 border border-border/50 card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-destructive/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <problem.icon className="w-7 h-7 text-destructive" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
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