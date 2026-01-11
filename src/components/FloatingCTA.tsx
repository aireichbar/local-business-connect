import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp, MessageCircle } from "lucide-react";

const FloatingCTA = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showCTA, setShowCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.8;
      setShowScrollTop(window.scrollY > heroHeight);
      setShowCTA(window.scrollY > heroHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 left-6 z-50 w-10 h-10 rounded-full bg-card border border-border shadow-md flex items-center justify-center transition-all duration-300 hover:bg-primary hover:text-white hover:border-primary ${
          showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`}
        aria-label="Nach oben scrollen"
      >
        <ArrowUp className="w-4 h-4" />
      </button>

      {/* Floating CTA button */}
      <a
        href="#kontakt"
        className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
          showCTA ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`}
      >
        <Button variant="cta" size="default" className="shadow-cta gap-2 rounded-full">
          <MessageCircle className="w-4 h-4" />
          Anfragen
        </Button>
      </a>
    </>
  );
};

export default FloatingCTA;
