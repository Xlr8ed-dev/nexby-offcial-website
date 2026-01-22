import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Suspense, lazy } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageLoader from "./components/PageLoader";

const HomePage = lazy(() => import("./pages/HomePage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const SalesSolutionsPage = lazy(() => import("./pages/SalesSolutionsPage"));
const HRSolutionsPage = lazy(() => import("./pages/HRSolutionsPage"));
const OperationsSolutionsPage = lazy(
  () => import("./pages/OperationsSolutionsPage"),
);
const ExhibitionsPage = lazy(() => import("./pages/ExhibitionsPage"));
const CareersPage = lazy(() => import("./pages/CareersPage"));
const AboutUsPage = lazy(() => import("./pages/AboutUsPage"));
const PartnershipsPage = lazy(() => import("./pages/PartnershipsPage"));

const ExpoInsightPage = lazy(() => import("./pages/ExpoInsightPage"));
const ExpoThankYouPage = lazy(() => import("./pages/ExpoThankYouPage"));

const AIRecruiterPage = lazy(() => import("./pages/AIRecruiterPage"));
const AIRecruiterThankYouPage = lazy(
  () => import("./pages/AIRecruiterThankYouPage"),
);

const AITeleCallerPage = lazy(() => import("./pages/AITeleCallerPage"));
const AITeleCallerThankYouPage = lazy(
  () => import("./pages/AITeleCallerThankYouPage"),
);

const SalesXPage = lazy(() => import("./pages/SalesXPage"));
const SalesXThankYouPage = lazy(() => import("./pages/SalesXThankYouPage"));

const CallAnalyserPage = lazy(() => import("./pages/CallAnalyserPage"));
const CallAnalyserThankYouPage = lazy(
  () => import("./pages/CallAnalyserThankYouPage"),
);

const SupportAssistPage = lazy(() => import("./pages/SupportAssistPage"));
const SupportAssistThankYouPage = lazy(
  () => import("./pages/SupportAssistThankYouPage"),
);

const UniversityExamPage = lazy(() => import("./pages/UniversityExamPage"));
const ExamPilotThankYouPage = lazy(
  () => import("./pages/ExamPilotThankYouPage"),
);

const GovernmentAICallAssistantPage = lazy(
  () => import("./pages/GovernmentAICallAssistantPage"),
);
const TenderQueryAutomationPage = lazy(
  () => import("./pages/TenderQueryAutomationPage"),
);
const CitizenAIInterfacePage = lazy(
  () => import("./pages/CitizenAIInterfacePage"),
);
const GovernmentThankYouPage = lazy(
  () => import("./pages/GovernmentThankYouPage"),
);

const RealEstatePage = lazy(() => import("./pages/RealEstatePage"));
const RealEstateThankYouPage = lazy(
  () => import("./pages/RealEstateThankYouPage"),
);

const ManufacturingPage = lazy(() => import("./pages/ManufacturingPage"));
const ManufacturingThankYouPage = lazy(
  () => import("./pages/ManufacturingThankYouPage"),
);

const PharmaPage = lazy(() => import("./pages/PharmaPage"));
const PharmaThankYouPage = lazy(() => import("./pages/PharmaThankYouPage"));

const ThankYou = lazy(() => import("./components/ThankYou"));
const Chatbot = lazy(() => import("./components/Chatbot"));

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <meta
          name="google-site-verification"
          content={import.meta.env.VITE_GOOGLE_SITE_VERIFICATION}
        />
      </Helmet>
      <BrowserRouter>
        <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
          <Navbar />

          {/* Page Loader */}
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/contact-us" element={<ContactPage />} />
              <Route path="/thank-you" element={<ThankYou />} />

              {/* Solutions */}
              <Route path="/solutions/sales" element={<SalesSolutionsPage />} />
              <Route
                path="/solutions/recruitment"
                element={<HRSolutionsPage />}
              />
              <Route
                path="/solutions/operations"
                element={<OperationsSolutionsPage />}
              />
              <Route
                path="/solutions/exhibitions"
                element={<ExhibitionsPage />}
              />
              <Route
                path="/solutions/university-exam-portal"
                element={<UniversityExamPage />}
              />
              <Route
                path="/solutions/university-exam-portal/thank-you"
                element={<ExamPilotThankYouPage />}
              />

              {/* Government */}
              <Route
                path="/solutions/government/ai-call-assistant"
                element={<GovernmentAICallAssistantPage />}
              />
              <Route
                path="/solutions/government/tender-query-automation"
                element={<TenderQueryAutomationPage />}
              />
              <Route
                path="/solutions/government/citizen-ai-interface"
                element={<CitizenAIInterfacePage />}
              />
              <Route
                path="/solutions/government/thank-you"
                element={<GovernmentThankYouPage />}
              />

              {/* Industry */}
              <Route
                path="/solutions/industry/real-estate"
                element={<RealEstatePage />}
              />
              <Route
                path="/solutions/industry/real-estate/thank-you"
                element={<RealEstateThankYouPage />}
              />
              <Route
                path="/solutions/industry/manufacturing"
                element={<ManufacturingPage />}
              />
              <Route
                path="/solutions/industry/manufacturing/thank-you"
                element={<ManufacturingThankYouPage />}
              />
              <Route
                path="/solutions/industry/pharma"
                element={<PharmaPage />}
              />
              <Route
                path="/solutions/industry/pharma/thank-you"
                element={<PharmaThankYouPage />}
              />

              {/* Products */}
              <Route
                path="/products/expo-insight"
                element={<ExpoInsightPage />}
              />
              <Route
                path="/products/expo-insight/thank-you"
                element={<ExpoThankYouPage />}
              />
              <Route
                path="/products/ai-recruiter"
                element={<AIRecruiterPage />}
              />
              <Route
                path="/products/ai-recruiter/thank-you"
                element={<AIRecruiterThankYouPage />}
              />
              <Route
                path="/products/ai-telecaller"
                element={<AITeleCallerPage />}
              />
              <Route
                path="/products/ai-telecaller/thank-you"
                element={<AITeleCallerThankYouPage />}
              />
              <Route path="/products/salesx" element={<SalesXPage />} />
              <Route
                path="/products/salesx/thank-you"
                element={<SalesXThankYouPage />}
              />
              <Route
                path="/products/call-analyser"
                element={<CallAnalyserPage />}
              />
              <Route
                path="/products/call-analyser/thank-you"
                element={<CallAnalyserThankYouPage />}
              />
              <Route
                path="/products/support-assist"
                element={<SupportAssistPage />}
              />
              <Route
                path="/products/support-assist/thank-you"
                element={<SupportAssistThankYouPage />}
              />

              {/* Static */}
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/about-us" element={<AboutUsPage />} />
              <Route path="/partnerships" element={<PartnershipsPage />} />
            </Routes>
          </Suspense>

          <Footer />

          {/* Chatbot loads AFTER page is interactive */}
          <Suspense fallback={null}>
            <Chatbot />
          </Suspense>
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
