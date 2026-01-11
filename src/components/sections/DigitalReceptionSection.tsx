import { MessageCircle, Clock, Smile, Shield, Zap } from "lucide-react";
import WhatsAppChat from "@/components/WhatsAppChat";

const DigitalReceptionSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Rund um die Uhr erreichbar",
      description: "Auch abends, am Wochenende oder wenn Sie gerade im Einsatz sind."
    },
    {
      icon: MessageCircle,
      title: "Beantwortet Fragen sofort",
      description: "Öffnungszeiten, Leistungen, Preise – Ihre Kunden bekommen direkt Antworten."
    },
    {
      icon: Smile,
      title: "Freundlich & professionell",
      description: "Natürliche Kommunikation, die zu Ihrem Betrieb passt."
    },
    {
      icon: Shield,
      title: "Nimmt Kontakte auf",
      description: "Wenn eine persönliche Beratung nötig ist, sammelt der Empfang alle wichtigen Daten."
    }
  ];

  return (
    <section id="digitaler-empfang" className="section-padding relative overflow-hidden" style={{ background: "var(--gradient-warm)" }}>
      {/* Decorative elements */}
      <div className="blob-decoration top-20 right-0 w-96 h-96 bg-accent/5" />
      <div className="blob-decoration bottom-0 left-0 w-80 h-80 bg-primary/5" />
      
      <div className="container mx-auto px-5 md:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Content */}
          <div>
            <span className="trust-badge mb-6">
              <Zap className="w-4 h-4 text-accent" />
              Digitaler Empfang
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Ihr Unternehmen antwortet – <br className="hidden lg:block" />
              <span className="text-muted-foreground">auch wenn Sie es nicht können.</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
              Stellen Sie sich vor: Ein Kunde schreibt Ihnen über WhatsApp oder Ihre Website. 
              Anstatt zu warten oder Sie zu stören, bekommt er sofort eine freundliche Antwort. 
              Das ist der digitale Empfang.
            </p>

            {/* Benefits */}
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={benefit.title} 
                  className="group flex gap-5 p-4 rounded-2xl hover:bg-card/80 transition-colors duration-300"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <benefit.icon className="w-7 h-7 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1 text-lg">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* WhatsApp Chat Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-primary/20 blur-[80px] rounded-full scale-75" />
              
              {/* WhatsApp Chat */}
              <div className="relative animate-float">
                <WhatsAppChat />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalReceptionSection;