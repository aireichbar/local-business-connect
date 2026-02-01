import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={scrollToTop}
      className={`fixed bottom-52 right-4 sm:bottom-24 sm:right-6 z-40 w-10 h-10 sm:w-10 sm:h-10 rounded-full shadow-lg bg-card hover:bg-secondary border-border transition-all duration-300 ${
        isVisible 
          ? "translate-y-0 opacity-100" 
          : "translate-y-4 opacity-0 pointer-events-none"
      }`}
      aria-label="Nach oben scrollen"
    >
      <ArrowUp className="h-4 w-4 sm:h-5 sm:w-5" />
    </Button>
  );
};

export default ScrollToTop;
