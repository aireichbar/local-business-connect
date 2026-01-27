import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  return (
    <a
      href="https://wa.me/4917553187011?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20Ihre%20digitalen%20L%C3%B6sungen."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-40 w-14 h-14 rounded-full bg-success hover:bg-success/90 shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
      aria-label="WhatsApp Kontakt"
    >
      <MessageCircle className="w-6 h-6 text-white" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-foreground text-background text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden sm:block">
        WhatsApp schreiben
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
