import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Wrench, Scissors, Stethoscope, Car, Building2, MessageCircle, Phone, Mail, Globe } from "lucide-react";
import PhoneMockup from "@/components/PhoneMockup";
import WhatsAppChat from "@/components/WhatsAppChat";
import PhoneCallDemo from "@/components/PhoneCallDemo";
import EmailDemo from "@/components/EmailDemo";
import WebsiteChatDemo from "@/components/WebsiteChatDemo";

const HeroSection = () => {
  const [activeChannel, setActiveChannel] = useState<'whatsapp' | 'telefon' | 'email' | 'website'>('whatsapp');

  const channels = [
    { id: 'whatsapp' as const, label: 'WhatsApp', icon: MessageCircle },
    { id: 'telefon' as const, label: 'Telefon', icon: Phone },
    { id: 'email' as const, label: 'E-Mail', icon: Mail },
    { id: 'website' as const, label: 'Website', icon: Globe },
  ];

  const industries = [
    { icon: Wrench, label: "Handwerker" },
    { icon: Scissors, label: "Friseure" },
    { icon: Stethoscope, label: "Praxen" },
    { icon: Car, label: "Werkstätten" },
    { icon: Building2, label: "Dienstleister" },
  ];

  const scrollToDemo = () => {
    const demoSection = document.getElementById('digitaler-empfang');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderDemo = () => {
    switch (activeChannel) {
      case 'whatsapp':
        return <WhatsAppChat />;
      case 'telefon':
        return <PhoneCallDemo />;
      case 'email':
        return <EmailDemo />;
      case 'website':
        return <WebsiteChatDemo />;
      default:
        return <WhatsAppChat />;
    }
  };

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Background gradient */}
      <div 
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      
      {/* Animated circles */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full border border-white/10 opacity-30 animate-pulse-soft" />
      <div className="absolute top-1/3 right-1/3 w-[400px] h-[400px] rounded-full border border-white/10 opacity-20" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] rounded-full bg-white/5 blur-3xl" />

      <div className="container mx-auto px-4 sm:px-5 md:px-8 pt-20 pb-16 sm:pt-24 sm:pb-20 md:pt-28 md:pb-24 lg:pt-32 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Content */}
          <div className="order-2 lg:order-1">

            {/* Headline - NEW */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.1] mb-4 sm:mb-5 animate-slide-up">
              Kundenkontakt über
              <span className="block text-accent mt-1">alle Kanäle.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl text-white/80 mb-6 sm:mb-8 leading-relaxed max-w-xl animate-slide-up" style={{ animationDelay: "0.1s" }}>
              Ihr digitaler Empfang beantwortet Kundenanfragen rund um die Uhr – 
              per WhatsApp, Telefon, E-Mail und Website-Chat.
            </p>

            {/* Industry Badges */}
            <div className="mb-6 sm:mb-8 animate-slide-up" style={{ animationDelay: "0.15s" }}>
              <p className="text-white/60 text-xs uppercase tracking-wider mb-3">Perfekt für:</p>
              <div className="flex flex-wrap gap-2">
                {industries.map((industry) => (
                  <div 
                    key={industry.label}
                    className="flex items-center gap-1.5 bg-white/10 rounded-full px-3 py-1.5 text-white/90 text-xs sm:text-sm font-medium backdrop-blur-sm border border-white/10"
                  >
                    <industry.icon className="w-3.5 h-3.5" />
                    <span>{industry.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Link to="/#kontakt" className="w-full sm:w-auto">
                <Button 
                  variant="cta" 
                  size="lg" 
                  className="group bg-white text-primary hover:bg-white/90 shadow-xl w-full sm:w-auto"
                >
                  Kostenlose Beratung
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Button 
                variant="ghost" 
                size="lg" 
                className="text-white hover:bg-white/10 gap-2 w-full sm:w-auto"
                onClick={scrollToDemo}
              >
                <Play className="w-4 h-4" />
                Demo anhören
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-4 mt-6 sm:mt-8 text-white/60 text-xs animate-slide-up" style={{ animationDelay: "0.25s" }}>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-400"></span>
                DSGVO-konform
              </span>
              <span>•</span>
              <span>Lokaler Support aus Bocholt</span>
            </div>
          </div>

          {/* Right: Phone Mockup with Channel Tabs */}
          <div className="order-1 lg:order-2 flex flex-col items-center lg:items-end animate-slide-up" style={{ animationDelay: "0.15s" }}>
            {/* Channel Tabs - always in one row */}
            <div className="flex justify-center gap-1.5 sm:gap-2 mb-3 sm:mb-4 w-full">
              {channels.map((channel) => (
                <button
                  key={channel.id}
                  onClick={() => setActiveChannel(channel.id)}
                  className={`flex items-center justify-center gap-1 px-2 sm:px-3 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-medium transition-all duration-300 whitespace-nowrap ${
                    activeChannel === channel.id
                      ? 'bg-white text-primary shadow-lg'
                      : 'bg-white/10 text-white/80 hover:bg-white/20 border border-white/10'
                  }`}
                >
                  <channel.icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 flex-shrink-0" />
                  <span>{channel.label}</span>
                </button>
              ))}
            </div>

            <div className="relative">
              {/* Glow effect behind phone */}
              <div className="absolute -inset-8 bg-accent/20 rounded-full blur-3xl opacity-50" />
              
              <PhoneMockup key={activeChannel}>
                {renderDemo()}
              </PhoneMockup>
              
              {/* Floating badge */}
              <div className="absolute -bottom-2 -left-4 sm:-left-8 bg-white rounded-xl shadow-xl px-3 sm:px-4 py-2 sm:py-3 animate-fade-in" style={{ animationDelay: "0.5s" }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Antwortzeit</p>
                    <p className="text-sm font-bold text-foreground">&lt; 3 Sekunden</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path 
            d="M0 100L60 90C120 80 240 60 360 50C480 40 600 40 720 45C840 50 960 60 1080 65C1200 70 1320 70 1380 70L1440 70V100H1380C1320 100 1200 100 1080 100C960 100 840 100 720 100C600 100 480 100 360 100C240 100 120 100 60 100H0Z" 
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;