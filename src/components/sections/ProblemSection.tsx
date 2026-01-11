import { Phone, Clock, UserX, AlertCircle, TrendingDown } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: Phone,
      title: "Ständig nicht erreichbar",
      description: "Kunden rufen an – aber Sie sind gerade im Einsatz, auf der Baustelle oder mit einem anderen Kunden beschäftigt.",
      stat: "3-5",
      statLabel: "verpasste Anrufe pro Tag"
    },
    {
      icon: Clock,
      title: "Anfragen nach Feierabend",
      description: "60% der Suchanfragen passieren abends oder am Wochenende – wenn Ihr Geschäft geschlossen ist.",
      stat: "60%",
      statLabel: "außerhalb der Öffnungszeiten"
    },
    {
      icon: UserX,
      title: "Kunden warten nicht",
      description: "Wer Sie nicht erreicht, ruft den nächsten Anbieter an. Die Konkurrenz ist nur einen Klick entfernt.",
      stat: "< 30",
      statLabel: "Sekunden Geduld"
    },
    {
      icon: AlertCircle,
      title: "Technik-Frust statt Kerngeschäft",
      description: "Website pflegen, E-Mails beantworten, Social Media – wann soll man das noch schaffen?",
      stat: "5+",
      statLabel: "Stunden pro Woche verloren"
    }
  ];

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="blob-decoration -top-32 -right-32 w-96 h-96 bg-destructive/5" />
      
      <div className="container mx-auto container-narrow relative">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="trust-badge mb-6" style={{ background: 'hsl(var(--destructive) / 0.1)', borderColor: 'hsl(var(--destructive) / 0.2)', color: 'hsl(var(--destructive))' }}>
            <TrendingDown className="w-4 h-4" />
            Das Problem
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Kommt Ihnen das bekannt vor?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Als lokaler Unternehmer kennen Sie diese Situationen nur zu gut – 
            und sie kosten Sie jeden Tag bares Geld.
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
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {problem.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {problem.description}
                  </p>
                  {/* Mini stat */}
                  <div className="inline-flex items-center gap-2 bg-destructive/5 rounded-lg px-4 py-2">
                    <span className="text-2xl font-bold text-destructive">{problem.stat}</span>
                    <span className="text-sm text-muted-foreground">{problem.statLabel}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Transition text */}
        <div className="text-center mt-16">
          <p className="text-xl md:text-2xl text-foreground font-medium">
            Was wäre, wenn das alles <span className="text-primary font-bold">automatisch</span> funktionieren würde?
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;