import { useEffect, useState, useRef } from "react";
import { TrendingUp, Clock, Users, Zap } from "lucide-react";

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    {
      icon: Clock,
      value: 24,
      suffix: "/7",
      label: "Erreichbarkeit",
      description: "Ihr Unternehmen antwortet rund um die Uhr"
    },
    {
      icon: TrendingUp,
      value: 40,
      suffix: "%",
      label: "Weniger verpasste Anfragen",
      description: "Durchschnittliche Steigerung unserer Kunden"
    },
    {
      icon: Users,
      value: 3,
      suffix: " Std.",
      label: "Zeit gespart pro Woche",
      description: "Durch automatisierte Kundenkommunikation"
    },
    {
      icon: Zap,
      value: 30,
      suffix: " Sek.",
      label: "Antwortzeit",
      description: "Ihr Empfang reagiert sofort"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 md:py-20 bg-primary relative overflow-hidden">
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
          backgroundSize: "32px 32px"
        }} />
      </div>
      
      <div className="container mx-auto px-5 md:px-8 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center"
              style={{ 
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.6s ease-out ${index * 0.1}s`
              }}
            >
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-7 h-7 text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-extrabold text-white mb-2">
                <AnimatedNumber 
                  value={stat.value} 
                  suffix={stat.suffix} 
                  isVisible={isVisible} 
                  delay={index * 100}
                />
              </div>
              <p className="text-white font-semibold mb-1">{stat.label}</p>
              <p className="text-white/70 text-sm hidden md:block">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AnimatedNumber = ({ 
  value, 
  suffix, 
  isVisible, 
  delay 
}: { 
  value: number; 
  suffix: string; 
  isVisible: boolean; 
  delay: number;
}) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const timeout = setTimeout(() => {
      let start = 0;
      const end = value;
      const duration = 1500;
      const stepTime = 50;
      const steps = duration / stepTime;
      const increment = end / steps;

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setDisplayValue(end);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(start));
        }
      }, stepTime);

      return () => clearInterval(timer);
    }, delay);

    return () => clearTimeout(timeout);
  }, [isVisible, value, delay]);

  return <span>{displayValue}{suffix}</span>;
};

export default StatsSection;
