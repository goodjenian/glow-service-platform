import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SEOPage from "./pages/services/SEOPage";
import GEOPage from "./pages/services/GEOPage";
import SiteExpressPage from "./pages/services/SiteExpressPage";
import AppCreationPage from "./pages/services/AppCreationPage";
import AIAgentsPage from "./pages/services/AIAgentsPage";
import SocialMediaPage from "./pages/services/SocialMediaPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services/seo" element={<SEOPage />} />
            <Route path="/services/geo" element={<GEOPage />} />
            <Route path="/services/site-express" element={<SiteExpressPage />} />
            <Route path="/services/app-creation" element={<AppCreationPage />} />
            <Route path="/services/ai-agents" element={<AIAgentsPage />} />
            <Route path="/services/social-media" element={<SocialMediaPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
