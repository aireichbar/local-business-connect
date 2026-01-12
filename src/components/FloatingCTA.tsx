import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const FloatingCTA = () => {
  const [showCTA, setShowCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.8;
      setShowCTA(window.scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <a
      href="#kontakt"
      className={`fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 transition-all duration-500 ${
        showCTA ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      }`}
    >
      <Button variant="cta" size="sm" className="shadow-cta gap-2 rounded-full sm:text-base sm:px-4 sm:py-2">
        <MessageCircle className="w-4 h-4" />
        <span className="hidden sm:inline">Anfragen</span>
      </Button>
    </a>
  );
};

export default FloatingCTA;
