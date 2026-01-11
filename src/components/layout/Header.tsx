import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Pakete", href: "#pakete" },
    { label: "Digitaler Empfang", href: "#digitaler-empfang" },
    { label: "Kontakt", href: "#kontakt" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-xl shadow-md border-b border-border/50" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-5 md:px-8">
        <div className="flex items-center justify-between h-18 md:h-24">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
            <div className={`text-2xl md:text-3xl font-extrabold transition-colors duration-300 ${
              isScrolled ? "text-primary" : "text-white"
            }`}>
              ai<span className="text-accent group-hover:text-cta transition-colors">reichbar</span>
            </div>
          </a>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.label}
                href={link.href}
                className={`font-semibold transition-all duration-300 hover:text-cta relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-cta after:transition-all after:duration-300 hover:after:w-full ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a href="#kontakt">
              <Button variant={isScrolled ? "cta" : "heroOutline"} size="lg" className="font-semibold">
                Jetzt anfragen
              </Button>
            </a>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-3 -mr-3"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menü öffnen"
          >
            {isMobileMenuOpen ? (
              <X className={`w-7 h-7 ${isScrolled ? "text-foreground" : "text-white"}`} />
            ) : (
              <Menu className={`w-7 h-7 ${isScrolled ? "text-foreground" : "text-white"}`} />
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-elevated">
            <nav className="flex flex-col p-6 gap-2">
              {navLinks.map((link) => (
                <a 
                  key={link.label}
                  href={link.href}
                  className="text-foreground font-semibold py-4 px-4 rounded-xl hover:bg-secondary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a href="#kontakt" onClick={() => setIsMobileMenuOpen(false)} className="mt-4">
                <Button variant="cta" size="xl" className="w-full font-semibold">
                  Jetzt anfragen
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