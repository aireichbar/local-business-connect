import { MessageCircle, Clock, Smile, Shield, Phone, Mail, Globe } from "lucide-react";
import WhatsAppChat from "@/components/WhatsAppChat";
import PhoneCallDemo from "@/components/PhoneCallDemo";
import EmailDemo from "@/components/EmailDemo";
import WebsiteChatDemo from "@/components/WebsiteChatDemo";
import PhoneMockup from "@/components/PhoneMockup";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

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

  const channels = [
    { id: "whatsapp", label: "WhatsApp", icon: MessageCircle },
    { id: "phone", label: "Telefon", icon: Phone },
    { id: "email", label: "E-Mail", icon: Mail },
    { id: "website", label: "Website", icon: Globe },
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
              Omnichannel Lösung
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
              Ein Empfang für 
              <span className="text-primary"> alle Kanäle</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Ob WhatsApp, Telefon oder E-Mail – Ihr digitaler Empfang antwortet 
              professionell auf jedem Kanal. Ihre Kunden wählen selbst, wie sie Sie erreichen möchten.
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

          {/* Phone Mockup with Channel Tabs */}
          <div className="flex flex-col items-center lg:items-end">
            <Tabs defaultValue="whatsapp" className="w-full max-w-[320px]">
              {/* Channel Tabs */}
              <TabsList className="w-full mb-4 bg-secondary/50 p-1 rounded-xl">
                {channels.map((channel) => (
                  <TabsTrigger
                    key={channel.id}
                    value={channel.id}
                    className="flex-1 flex items-center justify-center gap-1.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg py-2 text-xs sm:text-sm transition-all"
                  >
                    <channel.icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{channel.label}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 blur-[60px] rounded-full scale-90" />
                
                {/* Phone with different channel demos */}
                <div className="relative animate-float">
                  <TabsContent value="whatsapp" className="mt-0">
                    <PhoneMockup>
                      <WhatsAppChat />
                    </PhoneMockup>
                  </TabsContent>
                  
                  <TabsContent value="phone" className="mt-0">
                    <PhoneMockup>
                      <PhoneCallDemo />
                    </PhoneMockup>
                  </TabsContent>
                  
                  <TabsContent value="email" className="mt-0">
                    <PhoneMockup>
                      <EmailDemo />
                    </PhoneMockup>
                  </TabsContent>
                  
                  <TabsContent value="website" className="mt-0">
                    <PhoneMockup>
                      <WebsiteChatDemo />
                    </PhoneMockup>
                  </TabsContent>
                </div>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitalReceptionSection;
