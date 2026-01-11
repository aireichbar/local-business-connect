import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import StatsSection from "@/components/sections/StatsSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import PackagesSection from "@/components/sections/PackagesSection";
import ROICalculatorSection from "@/components/sections/ROICalculatorSection";
import DigitalReceptionSection from "@/components/sections/DigitalReceptionSection";
import AudioDemoSection from "@/components/sections/AudioDemoSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import ContactSection from "@/components/sections/ContactSection";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* 1. Hook - Emotionaler Einstieg */}
        <HeroSection />
        
        {/* 2. Problem - Schmerz verstärken */}
        <ProblemSection />
        
        {/* 3. Lösung - Die Antwort präsentieren */}
        <SolutionSection />
        
        {/* 4. Zahlen - Glaubwürdigkeit aufbauen */}
        <StatsSection />
        
        {/* 5. Demo - Produkt erlebbar machen */}
        <DigitalReceptionSection />
        <AudioDemoSection />
        
        {/* 6. Social Proof - Vertrauen stärken */}
        <TestimonialsSection />
        
        {/* 7. Wie es funktioniert - Einfachheit zeigen */}
        <HowItWorksSection />
        
        {/* 8. ROI-Rechner - Wert demonstrieren */}
        <ROICalculatorSection />
        
        {/* 9. Pakete - Angebot klar machen */}
        <PackagesSection />
        
        {/* 9. FAQ - Einwände entkräften */}
        <FAQSection />
        
        {/* 10. Final CTA - Zum Handeln bewegen */}
        <FinalCTASection />
        
        {/* 11. Kontakt - Conversion ermöglichen */}
        <ContactSection />
      </main>
      <Footer />
      
      {/* Floating elements */}
      <FloatingCTA />
    </div>
  );
};

export default Index;
