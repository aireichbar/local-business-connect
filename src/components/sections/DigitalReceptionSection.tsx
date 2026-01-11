import { MessageCircle, Clock, Smile, Shield } from "lucide-react";
import WhatsAppChat from "@/components/WhatsAppChat";
import PhoneMockup from "@/components/PhoneMockup";

const DigitalReceptionSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Rund um die Uhr erreichbar",
      description: "Auch abends, am Wochenende oder wenn Sie im Einsatz sind."
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
      title: "Sammelt Kontaktdaten",
      description: "Wenn persönliche Beratung nötig ist, werden alle wichtigen Daten erfasst."
    }
  ];

  return (
    <section id="digitaler-empfang" className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 bg-gradient-to-r from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-5 md:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Content */}
          <div>
            <span className="trust-badge mb-4">
              Digitaler Empfang
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
              Ihr Unternehmen antwortet – 
              <span className="text-muted-foreground"> auch wenn Sie nicht können</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Ein Kunde schreibt über WhatsApp oder Ihre Website. Anstatt zu warten, 
              bekommt er sofort eine freundliche Antwort. Das ist der digitale Empfang.
            </p>

            {/* Benefits */}
            <div className="space-y-4">
              {benefits.map((benefit) => (
                <div 
                  key={benefit.title} 
                  className="group flex gap-4 p-4 rounded-xl hover:bg-secondary/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Phone Mockup with WhatsApp Chat */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 blur-[60px] rounded-full scale-90" />
              
              {/* Phone with WhatsApp Chat */}
              <div className="relative animate-float">
                <PhoneMockup>
                  <WhatsAppChat />
                </PhoneMockup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalReceptionSection;

