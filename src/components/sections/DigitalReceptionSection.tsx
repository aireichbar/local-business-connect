import { MessageCircle, Clock, Smile, Shield } from "lucide-react";
import phoneImage from "@/assets/phone-mockup.png";

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
    <section id="digitaler-empfang" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Content */}
          <div>
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Digitaler Empfang
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ihr Unternehmen antwortet – <br className="hidden md:block" />
              auch wenn Sie es nicht können.
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Stellen Sie sich vor: Ein Kunde schreibt Ihnen über WhatsApp oder Ihre Website. 
              Anstatt zu warten oder Sie zu stören, bekommt er sofort eine freundliche Antwort. 
              Das ist der digitale Empfang.
            </p>

            {/* Benefits */}
            <div className="space-y-6">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Phone mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full" />
              
              {/* Phone */}
              <div className="relative animate-float">
                <img 
                  src={phoneImage} 
                  alt="WhatsApp Chat auf Smartphone" 
                  className="w-72 md:w-80 drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalReceptionSection;
