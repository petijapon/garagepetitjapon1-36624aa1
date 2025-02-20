
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import About from "./pages/About";
import Listings from "./pages/Listings";
import Administrative from "./pages/Administrative";
import Gallery from "./pages/Gallery";
import Admin from "./pages/Admin";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";
import Chatbot from "./components/Chatbot";
import Boutique from "./pages/Boutique";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/annonces" element={<Listings />} />
          <Route path="/administratif" element={<Administrative />} />
          <Route path="/galerie" element={<Gallery />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/parametres" element={<Settings />} />
          <Route path="/boutique" element={<Boutique />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Chatbot />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
