import { useEffect, useRef, useState } from "react";
import { Phone, Clock, TrendingUp, Settings2 } from "lucide-react";
import { Slider } from "@/components/ui/slider";

const ROICalculatorSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [callsPerDay, setCallsPerDay] = useState(20);
  const [hourlyRate, setHourlyRate] = useState(30);
  const [animatedValues, setAnimatedValues] = useState({
    calls: 0,
    hours: 0,
    timeValue: 0,
    savings: 0,
  });

  const minutesPerCall = 3;
  const workDaysPerMonth = 22;
  const hoursPerMonth = Math.round((callsPerDay * minutesPerCall * workDaysPerMonth) / 60);
  const timeValue = hoursPerMonth * hourlyRate;
  const monthlyCost = 249;
  const setupCost = 1990;
  const calculatedSavings = Math.max(0, timeValue - monthlyCost);

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
        calls: Math.round(callsPerDay * eased),
        hours: Math.round(hoursPerMonth * eased),
        timeValue: Math.round(timeValue * eased),
        savings: Math.round(calculatedSavings * eased),
      });

      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible, callsPerDay, hourlyRate, hoursPerMonth, timeValue, calculatedSavings]);

  useEffect(() => {
    if (isVisible) {
      setAnimatedValues({
        calls: callsPerDay,
        hours: hoursPerMonth,
        timeValue: timeValue,
        savings: calculatedSavings,
      });
    }
  }, [callsPerDay, hourlyRate, hoursPerMonth, timeValue, calculatedSavings, isVisible]);

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
        {/* Header - Compact */}
        <div className="text-center mb-8 md:mb-10">
          <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium bg-white/10 text-white/90 mb-3">
            Ihr individueller Mehrwert
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">
            Berechnen Sie Ihre <span className="text-accent">persönliche Ersparnis</span>
          </h2>
        </div>

        {/* Main Calculator - Two Column Layout */}
        <div className="max-w-5xl mx-auto">
          <div
            className={`bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 md:p-6 lg:p-8 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
              {/* Left: Input Controls */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Settings2 className="w-4 h-4 text-accent" />
                  <h4 className="text-white font-semibold text-sm">Ihre Werte</h4>
                </div>
                
                {/* Sliders - Compact */}
                <div className="space-y-5">
                  {/* Calls per day */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-white/70 text-sm">Anrufe pro Tag</label>
                      <span className="text-accent font-bold">{callsPerDay}</span>
                    </div>
                    <Slider
                      value={[callsPerDay]}
                      onValueChange={(value) => setCallsPerDay(value[0])}
                      min={5}
                      max={50}
                      step={1}
                      className="w-full"
                    />
                  </div>
                  
                  {/* Hourly rate */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-white/70 text-sm">Stundensatz</label>
                      <span className="text-accent font-bold">{hourlyRate}€/h</span>
                    </div>
                    <Slider
                      value={[hourlyRate]}
                      onValueChange={(value) => setHourlyRate(value[0])}
                      min={15}
                      max={80}
                      step={5}
                      className="w-full"
                    />
                  </div>
                </div>

                {/* Quick Stats - Horizontal */}
                <div className="grid grid-cols-3 gap-3 mt-6 pt-5 border-t border-white/10">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Phone className="w-3.5 h-3.5 text-white/50" />
                    </div>
                    <p className="text-white font-bold text-lg">{animatedValues.calls}</p>
                    <p className="text-white/50 text-[10px] uppercase tracking-wider">Anrufe/Tag</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Clock className="w-3.5 h-3.5 text-white/50" />
                    </div>
                    <p className="text-white font-bold text-lg">{animatedValues.hours}h</p>
                    <p className="text-white/50 text-[10px] uppercase tracking-wider">pro Monat</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <TrendingUp className="w-3.5 h-3.5 text-white/50" />
                    </div>
                    <p className="text-white font-bold text-lg">{animatedValues.timeValue}€</p>
                    <p className="text-white/50 text-[10px] uppercase tracking-wider">Zeitwert</p>
                  </div>
                </div>
              </div>

              {/* Right: Results */}
              <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                <h4 className="text-white/70 text-center mb-4 text-xs uppercase tracking-wider">
                  Ihre monatliche Ersparnis
                </h4>

                {/* Visual Calculation */}
                <div className="flex items-center justify-center gap-2 sm:gap-4 mb-5">
                  <div className="text-center">
                    <p className="text-white/60 text-[10px] uppercase mb-1">Zeitwert</p>
                    <p className="text-white font-bold text-xl sm:text-2xl">{animatedValues.timeValue}€</p>
                  </div>
                  <span className="text-white/40 text-xl">−</span>
                  <div className="text-center">
                    <p className="text-white/60 text-[10px] uppercase mb-1">Kosten</p>
                    <p className="text-accent font-bold text-xl sm:text-2xl">{monthlyCost}€</p>
                  </div>
                  <span className="text-white/40 text-xl">=</span>
                  <div className="text-center">
                    <p className="text-success text-[10px] uppercase mb-1 font-medium">Ersparnis</p>
                    <p className="text-success font-bold text-2xl sm:text-3xl">{animatedValues.savings}€</p>
                  </div>
                </div>

                {/* Progress Bar Visualization */}
                <div className="relative h-3 bg-white/10 rounded-full overflow-hidden mb-5">
                  <div 
                    className="absolute left-0 top-0 h-full bg-gradient-to-r from-success to-success/70 rounded-full transition-all duration-700"
                    style={{ width: `${timeValue > 0 ? Math.min((calculatedSavings / timeValue) * 100, 100) : 0}%` }}
                  />
                  <div 
                    className="absolute right-0 top-0 h-full bg-accent/50 rounded-full transition-all duration-700"
                    style={{ width: `${timeValue > 0 ? Math.min((monthlyCost / timeValue) * 100, 100) : 0}%` }}
                  />
                </div>

                {/* Pricing Summary - Integrated */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/5 rounded-lg p-3 text-center">
                    <p className="text-white/50 text-[10px] uppercase">Einrichtung</p>
                    <p className="text-white font-bold text-lg">{setupCost}€</p>
                    <p className="text-white/40 text-[10px]">einmalig</p>
                  </div>
                  <div className="bg-accent/20 rounded-lg p-3 text-center border border-accent/30">
                    <p className="text-white/70 text-[10px] uppercase">Monatlich</p>
                    <p className="text-accent font-bold text-lg">{monthlyCost}€</p>
                    <p className="text-white/50 text-[10px]">pro Monat</p>
                  </div>
                </div>

                {/* ROI Highlight */}
                <div className="mt-4 pt-4 border-t border-white/10 text-center">
                  <p className="text-white/60 text-xs">
                    Amortisation der Einrichtung in{" "}
                    <span className="text-accent font-bold">
                      {calculatedSavings > 0 ? Math.ceil(setupCost / calculatedSavings) : "–"}
                    </span>{" "}
                    Monaten
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculatorSection;