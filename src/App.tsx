import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ScrollToTop } from "@/components/ScrollToTop";
import { HelmetProvider } from "react-helmet-async";
import { lazy, Suspense } from "react";

const Toaster = lazy(() => import("@/components/ui/toaster").then(m => ({ default: m.Toaster })));
const Sonner = lazy(() => import("@/components/ui/sonner").then(m => ({ default: m.Toaster })));
const TooltipProvider = lazy(() => import("@/components/ui/tooltip").then(m => ({ default: m.TooltipProvider })));

const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const SEOPage = lazy(() => import("./pages/services/SEOPage"));
const GEOPage = lazy(() => import("./pages/services/GEOPage"));
const SiteExpressPage = lazy(() => import("./pages/services/SiteExpressPage"));
const PaidTrafficPage = lazy(() => import("./pages/services/PaidTrafficPage"));
const AIAgentsPage = lazy(() => import("./pages/services/AIAgentsPage"));
const SocialMediaPage = lazy(() => import("./pages/services/SocialMediaPage"));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage"));
const TermsPage = lazy(() => import("./pages/TermsPage"));

const queryClient = new QueryClient();

/** All page routes – rendered once for EN (/) and once for PT (/pt) */
const pageRoutes = (
  <>
    <Route index element={<Index />} />
    <Route path="about" element={<AboutPage />} />
    <Route path="services/seo" element={<SEOPage />} />
    <Route path="services/geo" element={<GEOPage />} />
    <Route path="services/site-express" element={<SiteExpressPage />} />
    <Route path="services/paid-traffic" element={<PaidTrafficPage />} />
    <Route path="services/ai-agents" element={<AIAgentsPage />} />
    <Route path="services/social-media" element={<SocialMediaPage />} />
    <Route path="privacy" element={<PrivacyPage />} />
    <Route path="terms" element={<TermsPage />} />
  </>
);

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <LanguageProvider>
            <ScrollToTop />
            <Suspense fallback={null}>
              <Routes>
                {/* EN routes */}
                <Route path="/">{pageRoutes}</Route>
                {/* PT routes – same components, language derived from /pt prefix */}
                <Route path="/pt">{pageRoutes}</Route>
                {/* 404 */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </LanguageProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
