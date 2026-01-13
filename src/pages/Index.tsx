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
import FAQSection from "@/components/sections/FAQSection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import ContactSection from "@/components/sections/ContactSection";
import FloatingCTA from "@/components/FloatingCTA";
import ScrollToTop from "@/components/ScrollToTop";
import SkipToContent from "@/components/SkipToContent";
import ProductChatWidget from "@/components/ProductChatWidget";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SkipToContent />
      <Header />
      <main id="main-content">
        {/* 1. Hook - Emotionaler Einstieg */}
        <HeroSection />
        
        {/* 2. Problem - Schmerz verstärken */}
        <AnimatedSection animation="fade-up">
          <ProblemSection />
        </AnimatedSection>
        
        {/* 3. Lösung - Die Antwort präsentieren */}
        <AnimatedSection animation="fade-up" delay={100}>
          <SolutionSection />
        </AnimatedSection>
        
        {/* 4. Zahlen - Glaubwürdigkeit aufbauen */}
        <AnimatedSection animation="scale">
          <StatsSection />
        </AnimatedSection>
        
        {/* 5. Demo - Produkt erlebbar machen */}
        <AnimatedSection animation="fade-up">
          <DigitalReceptionSection />
        </AnimatedSection>
        
        {/* 6. Wie es funktioniert - Einfachheit zeigen */}
        <AnimatedSection animation="fade-up">
          <HowItWorksSection />
        </AnimatedSection>
        
        {/* 7. ROI-Rechner - Wert demonstrieren */}
        <AnimatedSection animation="scale">
          <ROICalculatorSection />
        </AnimatedSection>
        
        {/* 8. Pakete - Angebot klar machen */}
        <AnimatedSection animation="fade-up">
          <PackagesSection />
        </AnimatedSection>
        
        {/* 9. FAQ - Einwände entkräften */}
        <AnimatedSection animation="fade-up">
          <FAQSection />
        </AnimatedSection>
        
        {/* 10. Final CTA - Zum Handeln bewegen */}
        <AnimatedSection animation="scale">
          <FinalCTASection />
        </AnimatedSection>
        
        {/* 11. Kontakt - Conversion ermöglichen */}
        <AnimatedSection animation="fade-up">
          <ContactSection />
        </AnimatedSection>
      </main>
      <Footer />
      
      {/* Floating elements */}
      <FloatingCTA />
      <ScrollToTop />
      <ProductChatWidget />
    </div>
  );
};

export default Index;
