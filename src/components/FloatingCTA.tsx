import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FloatingCTA = () => {
  const [showCTA, setShowCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.6;
      setShowCTA(window.scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-500 ${
        showCTA ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}
    >
      {/* Gradient fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/95 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 py-3 sm:py-4 relative">
        <div className="flex items-center justify-between gap-4 max-w-2xl mx-auto">
          <div className="hidden sm:block">
            <p className="text-sm font-medium text-foreground">Bereit für bessere Erreichbarkeit?</p>
          </div>
          <Link to="/#kontakt" className="flex-1 sm:flex-none">
            <Button 
              variant="cta" 
              size="default" 
              className="w-full sm:w-auto shadow-cta gap-2 group"
            >
              Kostenlose Beratung
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FloatingCTA;
