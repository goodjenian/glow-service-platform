import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ScrollToTop } from "@/components/ScrollToTop";
import { HelmetProvider } from "react-helmet-async"; // <--- NOVO IMPORT
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutPage from "./pages/AboutPage";
import SEOPage from "./pages/services/SEOPage";
import GEOPage from "./pages/services/GEOPage";
import SiteExpressPage from "./pages/services/SiteExpressPage";
import PaidTrafficPage from "./pages/services/PaidTrafficPage";
import AIAgentsPage from "./pages/services/AIAgentsPage";
import SocialMediaPage from "./pages/services/SocialMediaPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";

const queryClient = new QueryClient();

const App = () => (
  // Envolvemos tudo com o HelmetProvider aqui embaixo
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services/seo" element={<SEOPage />} />
              <Route path="/services/geo" element={<GEOPage />} />
              <Route path="/services/site-express" element={<SiteExpressPage />} />
              <Route path="/services/paid-traffic" element={<PaidTrafficPage />} />
              <Route path="/services/ai-agents" element={<AIAgentsPage />} />
              <Route path="/services/social-media" element={<SocialMediaPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;