import { Phone, Clock, TrendingDown, XCircle } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: Phone,
      title: "Nicht erreichbar",
      description: "Auf der Baustelle, beim Kunden, in der Behandlung – Sie können nicht immer ans Telefon gehen.",
      stat: "3-5",
      statLabel: "verpasste Anrufe/Tag"
    },
    {
      icon: Clock,
      title: "Anfragen nach Feierabend",
      description: "Die meisten Menschen suchen abends oder am Wochenende – wenn Sie nicht im Büro sind.",
      stat: "60%",
      statLabel: "außerhalb Ihrer Zeiten"
    },
    {
      icon: XCircle,
      title: "Kunden gehen zur Konkurrenz",
      description: "Wer keine schnelle Antwort bekommt, ruft beim nächsten Anbieter an.",
      stat: "< 30s",
      statLabel: "Geduld der Kunden"
    },
    {
      icon: TrendingDown,
      title: "Zeit fehlt fürs Digitale",
      description: "Website pflegen, Anfragen beantworten, Social Media – wann soll das noch passieren?",
      stat: "5+",
      statLabel: "Stunden/Woche verloren"
    }
  ];

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/50 to-transparent" />
      
      <div className="container mx-auto container-narrow relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="trust-badge mb-4">
            Das Problem
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Kommt Ihnen das bekannt vor?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Als lokaler Unternehmer kennen Sie diese Situationen – 
            und sie kosten Sie jeden Tag bares Geld.
          </p>
        </div>

        {/* Problem grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((problem, index) => (
            <div 
              key={problem.title}
              className="group bg-card rounded-2xl p-8 border border-border/50 hover:border-destructive/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center flex-shrink-0 group-hover:bg-destructive/20 transition-colors">
                  <problem.icon className="w-6 h-6 text-destructive" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {problem.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-xl font-bold text-destructive">{problem.stat}</span>
                    <span className="text-muted-foreground">{problem.statLabel}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Transition */}
        <div className="text-center mt-16">
          <p className="text-xl font-medium text-foreground">
            Was wäre, wenn das alles <span className="text-primary font-bold">automatisch</span> funktionieren würde?
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
