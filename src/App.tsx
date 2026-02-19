import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import Work from "./pages/Work";
import Process from "./pages/Process";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Scroll to top on route change
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top smoothly on route change
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    };

    // Use requestAnimationFrame to ensure DOM is updated before scrolling
    requestAnimationFrame(() => {
      scrollToTop();
    });
  }, [location.pathname]);

  return null;
}

// Update page title based on route
function PageTitle() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    let title = "Asellus";

    if (path === "/services") title = "Asellus | Services";
    else if (path === "/work") title = "Asellus | Work";
    else if (path === "/process") title = "Asellus | Process";
    else if (path === "/contact") title = "Asellus | Contact";

    document.title = title;
  }, [location.pathname]);

  return null;
}

import { SmoothScroll } from "./components/layout/SmoothScroll";
// ... imports

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <SmoothScroll>
        <BrowserRouter>
          <ScrollToTop />
          <PageTitle />
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ... other routes */}
            <Route path="/services" element={<Services />} />
            <Route path="/work" element={<Work />} />
            <Route path="/process" element={<Process />} />
            <Route path="/contact" element={<Contact />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </SmoothScroll>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
