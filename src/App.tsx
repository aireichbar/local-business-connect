import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Datenschutz from "./pages/Datenschutz";
import Impressum from "./pages/Impressum";
import UeberUns from "./pages/UeberUns";
import NotFound from "./pages/NotFound";
import CookieBanner from "./components/CookieBanner";
import ScrollToTopOnNavigate from "./components/ScrollToTopOnNavigate";

// Branchen-Seiten
import HandwerkPage from "./pages/HandwerkPage";
import FriseurPage from "./pages/FriseurPage";
import PhysiotherapiePage from "./pages/PhysiotherapiePage";
import SHKPage from "./pages/SHKPage";
import ElektroPage from "./pages/ElektroPage";

// Lokale Seiten
import BocholtPage from "./pages/BocholtPage";
import BorkenPage from "./pages/BorkenPage";
import AhausPage from "./pages/AhausPage";
import RhedePage from "./pages/RhedePage";
import StadtlohnPage from "./pages/StadtlohnPage";
import GronauPage from "./pages/GronauPage";
import VredenPage from "./pages/VredenPage";
import GescherPage from "./pages/GescherPage";
import IsselburgPage from "./pages/IsselburgPage";

// Info-Seiten
import FAQPage from "./pages/FAQPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTopOnNavigate />
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Branchen-Seiten */}
          <Route path="/handwerk" element={<HandwerkPage />} />
          <Route path="/friseur" element={<FriseurPage />} />
          <Route path="/physiotherapie" element={<PhysiotherapiePage />} />
          <Route path="/shk" element={<SHKPage />} />
          <Route path="/elektro" element={<ElektroPage />} />
          
          {/* Lokale Seiten */}
          <Route path="/bocholt" element={<BocholtPage />} />
          <Route path="/borken" element={<BorkenPage />} />
          <Route path="/ahaus" element={<AhausPage />} />
          <Route path="/rhede" element={<RhedePage />} />
          <Route path="/stadtlohn" element={<StadtlohnPage />} />
          <Route path="/gronau" element={<GronauPage />} />
          <Route path="/vreden" element={<VredenPage />} />
          <Route path="/gescher" element={<GescherPage />} />
          <Route path="/isselburg" element={<IsselburgPage />} />
          
          {/* Info-Seiten */}
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/ueber-uns" element={<UeberUns />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/impressum" element={<Impressum />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieBanner />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
