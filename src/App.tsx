import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import SalesSolutionsPage from "./pages/SalesSolutionsPage";
import HRSolutionsPage from "./pages/HRSolutionsPage";
import ExhibitionsPage from "./pages/ExhibitionsPage";
import OperationsSolutionsPage from "./pages/OperationsSolutionsPage";
import CareersPage from "./pages/CareersPage";
import AboutUsPage from "./pages/AboutUsPage";
import ExpoInsightPage from "./pages/ExpoInsightPage";
import ExpoThankYouPage from "./pages/ExpoThankYouPage";
import AIRecruiterPage from "./pages/AIRecruiterPage";
import AIRecruiterThankYouPage from "./pages/AIRecruiterThankYouPage";
import AITeleCallerPage from "./pages/AITeleCallerPage";
import AITeleCallerThankYouPage from "./pages/AITeleCallerThankYouPage";
import RealEstatePage from "./pages/RealEstatePage";
import RealEstateThankYouPage from "./pages/RealEstateThankYouPage";
// import DynamicFormContainer from './components/DynamicFormContainer';
import ThankYou from "./components/ThankYou";
import ManufacturingPage from "./pages/ManufacturingPage";
import PharmaPage from "./pages/PharmaPage";
import GovernmentAICallAssistantPage from "./pages/GovernmentAICallAssistantPage";
import SalesXPage from "./pages/SalesXPage";
import CallAnalyserPage from "./pages/CallAnalyserPage";
import SupportAssistPage from "./pages/SupportAssistPage";
import UniversityExamPage from "./pages/UniversityExamPage";
import TenderQueryAutomationPage from "./pages/TenderQueryAutomationPage";
import CitizenAIInterfacePage from "./pages/CitizenAIInterfacePage";
import ExamPilotThankYouPage from "./pages/ExamPilotThankYouPage";
import ManufacturingThankYouPage from "./pages/ManufacturingThankYouPage";
import PharmaThankYouPage from "./pages/PharmaThankYouPage";
import GovernmentThankYouPage from "./pages/GovernmentThankYouPage";
import SalesXThankYouPage from "./pages/SalesXThankYouPage";
import CallAnalyserThankYouPage from "./pages/CallAnalyserThankYouPage";
import SupportAssistThankYouPage from "./pages/SupportAssistThankYouPage";
import PartnershipsPage from "./pages/PartnershipsPage";
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
          <Navbar />
          <Routes>
            {/* <Route path="/form/:formId" element={<DynamicFormContainer />} /> */}
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/contact-us" element={<ContactPage />} />
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
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/partnerships" element={<PartnershipsPage />} />
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
            <Route
              path="/solutions/government/tender-query-automation"
              element={<TenderQueryAutomationPage />}
            />
            <Route
              path="/solutions/government/citizen-ai-interface"
              element={<CitizenAIInterfacePage />}
            />
            <Route
              path="/solutions/industry/real-estate"
              element={<RealEstatePage />}
            />
            <Route
              path="/solutions/industry/manufacturing"
              element={<ManufacturingPage />}
            />
            <Route
              path="/solutions/industry/manufacturing/thank-you"
              element={<ManufacturingThankYouPage />}
            />
            <Route path="/solutions/industry/pharma" element={<PharmaPage />} />
            <Route
              path="/solutions/industry/pharma/thank-you"
              element={<PharmaThankYouPage />}
            />
            <Route
              path="/solutions/government/ai-call-assistant"
              element={<GovernmentAICallAssistantPage />}
            />
            <Route
              path="/solutions/government/thank-you"
              element={<GovernmentThankYouPage />}
            />
            <Route
              path="/solutions/industry/real-estate/thank-you"
              element={<RealEstateThankYouPage />}
            />
          </Routes>
          <Footer />
          <Chatbot />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
