import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Leistungen", href: "#pakete" },
    { label: "Digitaler Empfang", href: "#digitaler-empfang" },
    { label: "Über uns", href: "#so-funktioniert-es" },
    { label: "Kontakt", href: "#kontakt" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-xl shadow-sm border-b border-border/50" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-5 md:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 md:h-24">
          {/* Logo - transparent background, works on both light and dark */}
          <a href="/" className="flex items-center">
            <img 
              src={logo} 
              alt="aireichbar" 
              className={`h-8 sm:h-10 md:h-12 w-auto object-contain transition-all duration-300 ${
                isScrolled ? "" : "brightness-0 invert"
              }`}
              style={{ background: 'none', border: 'none', boxShadow: 'none' }}
            />
          </a>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a href="#kontakt">
              <Button 
                variant="cta" 
                size="default"
                className={`${!isScrolled ? "shadow-lg" : ""}`}
              >
                Kostenlos beraten lassen
              </Button>
            </a>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden p-2 -mr-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menü öffnen"
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-white"}`} />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-border shadow-lg">
            <nav className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => (
                <a 
                  key={link.label}
                  href={link.href}
                  className="text-foreground font-medium py-3 px-4 rounded-lg hover:bg-secondary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a href="#kontakt" onClick={() => setIsMobileMenuOpen(false)} className="mt-2">
                <Button variant="cta" size="lg" className="w-full">
                  Kostenlos beraten lassen
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
