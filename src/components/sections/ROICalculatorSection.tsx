import { useEffect, useRef, useState } from "react";
import { Phone, Clock, Calculator, TrendingUp, CheckCircle } from "lucide-react";

const ROICalculatorSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState({
    calls: 0,
    hours: 0,
    timeValue: 0,
    savings: 0,
  });

  const targetValues = {
    calls: 20,
    hours: 14,
    timeValue: 560,
    monthlyCost: 139,
    setupCost: 699,
  };

  const calculatedSavings = targetValues.timeValue - targetValues.monthlyCost;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 1500;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);

      setAnimatedValues({
        calls: Math.round(targetValues.calls * eased),
        hours: Math.round(targetValues.hours * eased),
        timeValue: Math.round(targetValues.timeValue * eased),
        savings: Math.round(calculatedSavings * eased),
      });

      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible]);

  const benefits = [
    "Weniger Leerlauf",
    "Weniger Rückrufe",
    "Bessere Auslastung",
  ];

  const stats = [
    {
      icon: Phone,
      label: "Durchschnittliche Anrufe pro Tag",
      value: animatedValues.calls,
      suffix: "Anrufe",
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
    },
    {
      icon: Clock,
      label: "Zeitaufwand pro Monat",
      value: animatedValues.hours,
      suffix: "Stunden",
      iconBg: "bg-accent/10",
      iconColor: "text-accent",
    },
    {
      icon: Calculator,
      label: "Zeitwert (bei 40€/h)",
      value: animatedValues.timeValue,
      suffix: "€",
      iconBg: "bg-success/10",
      iconColor: "text-success",
    },
    {
      icon: TrendingUp,
      label: "Kosten Digitaler Empfang",
      value: targetValues.monthlyCost,
      suffix: "€/Monat",
      iconBg: "bg-accent/10",
      iconColor: "text-accent",
      highlight: true,
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="roi-rechner"
      className="section-padding bg-gradient-to-b from-primary via-primary to-primary/95 relative overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="blob-decoration w-96 h-96 bg-accent/20 top-0 right-0" />
        <div className="blob-decoration w-80 h-80 bg-white/5 bottom-20 left-10" />
      </div>

      <div className="container mx-auto px-5 md:px-8 relative">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium bg-white/10 text-white/90 mb-4">
            Rechenbeispiel
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Zahlen am Beispiel eines Betriebs
            <br className="hidden sm:block" />
            <span className="text-accent"> im Kreis Borken</span>
          </h2>
          <p className="text-white/70 max-w-xl mx-auto text-lg">
            So rechnet sich der digitale Empfang für Ihren Betrieb.
          </p>
        </div>

        {/* Main Calculator Card */}
        <div className="max-w-2xl mx-auto">
          <div
            className={`bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 md:p-8 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Stats Grid */}
            <div className="space-y-4 mb-8">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`flex items-center justify-between py-4 ${
                    index < stats.length - 1 ? "border-b border-white/10" : ""
                  }`}
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        stat.highlight ? "bg-accent/20" : "bg-white/10"
                      }`}
                    >
                      <stat.icon
                        className={`w-5 h-5 ${
                          stat.highlight ? "text-accent" : "text-white/70"
                        }`}
                      />
                    </div>
                    <span className="text-white/80 text-sm md:text-base">
                      {stat.label}
                    </span>
                  </div>
                  <div
                    className={`text-right font-bold ${
                      stat.highlight ? "text-accent" : "text-white"
                    }`}
                  >
                    <span className="text-2xl md:text-3xl">{stat.value}</span>
                    <span className="text-sm ml-1 opacity-70">{stat.suffix}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Benefits Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2"
                >
                  <CheckCircle className="w-4 h-4 text-success" />
                  <span className="text-white/80 text-sm">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Savings Section */}
            <div className="bg-white/5 rounded-xl p-4 md:p-6">
              <h4 className="text-white/70 text-center mb-4 md:mb-6 text-sm uppercase tracking-wider">
                Ihre monatliche Ersparnis
              </h4>

              {/* Bar Chart - Mobile optimized */}
              <div className="flex items-end justify-center gap-3 sm:gap-6 md:gap-10 mb-4 md:mb-6 h-32 sm:h-40 md:h-48">
                {/* Zeitwert Bar */}
                <div className="flex flex-col items-center">
                  <span className="text-white font-bold text-sm sm:text-lg mb-1 sm:mb-2">
                    {animatedValues.timeValue}€
                  </span>
                  <div
                    className="w-10 sm:w-14 md:w-20 bg-white/30 rounded-t-lg transition-all duration-1000"
                    style={{
                      height: isVisible ? "80px" : "0px",
                    }}
                  />
                  <span className="text-white/60 text-xs sm:text-sm mt-1 sm:mt-2">Zeitwert</span>
                </div>

                {/* Minus Sign */}
                <div className="text-white/50 text-lg sm:text-2xl font-light pb-6 sm:pb-8">−</div>

                {/* Kosten Bar */}
                <div className="flex flex-col items-center">
                  <span className="text-accent font-bold text-sm sm:text-lg mb-1 sm:mb-2">
                    {targetValues.monthlyCost}€
                  </span>
                  <div
                    className="w-10 sm:w-14 md:w-20 bg-accent/60 rounded-t-lg transition-all duration-1000 delay-300"
                    style={{
                      height: isVisible ? `${(targetValues.monthlyCost / targetValues.timeValue) * 80}px` : "0px",
                    }}
                  />
                  <span className="text-white/60 text-xs sm:text-sm mt-1 sm:mt-2">Kosten</span>
                </div>

                {/* Equals Sign */}
                <div className="text-white/50 text-lg sm:text-2xl font-light pb-6 sm:pb-8">=</div>

                {/* Ersparnis Bar */}
                <div className="flex flex-col items-center">
                  <span className="text-success font-bold text-sm sm:text-lg mb-1 sm:mb-2">
                    {animatedValues.savings}€
                  </span>
                  <div
                    className="w-10 sm:w-14 md:w-20 bg-success/70 rounded-t-lg transition-all duration-1000 delay-500"
                    style={{
                      height: isVisible ? `${(calculatedSavings / targetValues.timeValue) * 80}px` : "0px",
                    }}
                  />
                  <span className="text-success text-xs sm:text-sm mt-1 sm:mt-2 font-medium">
                    Ersparnis
                  </span>
                </div>
              </div>
            </div>

            {/* Pricing Summary */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-3 sm:p-4 text-center">
                <span className="text-white/60 text-xs sm:text-sm">Einrichtung</span>
                <div className="mt-1">
                  <span className="text-white text-xl sm:text-2xl font-bold">
                    {targetValues.setupCost}
                  </span>
                  <span className="text-white/60 text-xs sm:text-sm">€</span>
                </div>
                <span className="text-white/50 text-xs">einmalig</span>
              </div>
              <div className="bg-accent/20 border border-accent/30 rounded-xl p-3 sm:p-4 text-center">
                <span className="text-white/80 text-xs sm:text-sm">Monatlich</span>
                <div className="mt-1">
                  <span className="text-accent text-xl sm:text-2xl font-bold">
                    {targetValues.monthlyCost}
                  </span>
                  <span className="text-accent/80 text-xs sm:text-sm">€</span>
                </div>
                <span className="text-white/60 text-xs">pro Monat</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculatorSection;
