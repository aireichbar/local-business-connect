import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import PackagesSection from "@/components/sections/PackagesSection";
import DigitalReceptionSection from "@/components/sections/DigitalReceptionSection";
import AudioDemoSection from "@/components/sections/AudioDemoSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <PackagesSection />
        <DigitalReceptionSection />
        <AudioDemoSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
