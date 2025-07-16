import { Toaster } from "sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import FloatingActionButtons from "./components/FloatingActionButtons";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import WhyChooseUs from "./pages/WhyChooseUs";
import Gallery from "./pages/Gallery";
import FAQs from "./pages/FAQs";
import Contact from "./pages/Contact";
import News from "./pages/News";
import NotFound from "./pages/NotFound";
import OurTeam from "./pages/our-team";
import PatientInfo from "./pages/patient-info";
import VisitingHours from "./pages/visiting-hours";
import Insurance from "./pages/insurance";
import Billing from "./pages/billing";
import Testimonials from "./pages/testimonials";
import Appointment from "./pages/appointment";
import Doctors from "./pages/doctors";
import Locations from "./pages/locations";
import HealthTips from "./pages/health-tips";

// New Feature Imports
import { CommunityPage, InsuranceFeatures } from "./features";
import EmergencyServices from "./pages/EmergencyServices";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1">
            <Routes>
              <Route index element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/why-choose-us" element={<WhyChooseUs />} />
              <Route path="/news" element={<News />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/faqs" element={<FAQs />} />
              <Route path="/contact" element={<Contact />} />
              
              {/* New Routes */}
              <Route path="/our-team" element={<OurTeam />} />
              <Route path="/patient-info" element={<PatientInfo />}>
                <Route path="er-visit" element={<PatientInfo />} />
              </Route>
              <Route path="/visiting-hours" element={<VisitingHours />} />
              <Route path="/insurance" element={<Insurance />} />
              <Route path="/billing" element={<Billing />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/appointment" element={<Appointment />} />
              
              {/* New Feature Routes */}
              <Route path="/community" element={<CommunityPage />} />
              <Route path="/insurance/features" element={<InsuranceFeatures />} />
              <Route path="/emergency" element={<EmergencyServices />} />
              
              <Route path="/doctors" element={<Doctors />} />
              <Route path="/locations" element={<Locations />} />
              <Route path="/health-tips" element={<HealthTips />} />
              
              {/* Service Subpages */}
              <Route path="/services/general-medicine" element={<Services defaultTab="general-medicine" />} />
              <Route path="/services/dental" element={<Services defaultTab="dental" />} />
              <Route path="/services/gynecology" element={<Services defaultTab="gynecology" />} />
              <Route path="/services/urology" element={<Services defaultTab="urology" />} />
              <Route path="/services/pulmonology" element={<Services defaultTab="pulmonology" />} />
              <Route path="/services/pediatrics" element={<Services defaultTab="pediatrics" />} />
              <Route path="/services/infertility" element={<Services defaultTab="infertility" />} />
              
              {/* Catch-all route */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <FloatingActionButtons />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
