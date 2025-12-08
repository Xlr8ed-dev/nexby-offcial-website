import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import SalesSolutionsPage from './pages/SalesSolutionsPage';
import HRSolutionsPage from './pages/HRSolutionsPage';
import ExhibitionsPage from './pages/ExhibitionsPage';
import OperationsSolutionsPage from './pages/OperationsSolutionsPage';
import CareersPage from './pages/CareersPage';
import AboutUsPage from './pages/AboutUsPage';
import PartnershipsPage from './pages/PartnershipsPage';
import PartnershipThankYouPage from './pages/PartnershipThankYouPage';
import GovernmentAICallAssistantPage from './pages/GovernmentAICallAssistantPage';
import GovernmentThankYouPage from './pages/GovernmentThankYouPage';
import TenderQueryAutomationPage from './pages/TenderQueryAutomationPage';
import CitizenAIInterfacePage from './pages/CitizenAIInterfacePage';

import ExpoInsightPage from './pages/ExpoInsightPage';
import ExpoThankYouPage from './pages/ExpoThankYouPage';
import AIRecruiterPage from './pages/AIRecruiterPage';
import AIRecruiterThankYouPage from './pages/AIRecruiterThankYouPage';
import AITeleCallerPage from './pages/AITeleCallerPage';
import AITeleCallerThankYouPage from './pages/AITeleCallerThankYouPage';
import RealEstatePage from './pages/RealEstatePage';
import RealEstateThankYouPage from './pages/RealEstateThankYouPage';
import SalesXPage from './pages/SalesXPage';
import SalesXThankYouPage from './pages/SalesXThankYouPage';
import CallAnalyserPage from './pages/CallAnalyserPage';
import CallAnalyserThankYouPage from './pages/CallAnalyserThankYouPage';
import SupportAssistPage from './pages/SupportAssistPage';
import SupportAssistThankYouPage from './pages/SupportAssistThankYouPage';
import ManufacturingPage from './pages/ManufacturingPage';
import ManufacturingThankYouPage from './pages/ManufacturingThankYouPage';
import PharmaPage from './pages/PharmaPage';
import PharmaThankYouPage from './pages/PharmaThankYouPage';
import UniversityExamPage from './pages/UniversityExamPage';
import ExamPilotThankYouPage from './pages/ExamPilotThankYouPage';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact-us" element={<ContactPage />} />
            <Route path="/solutions/sales" element={<SalesSolutionsPage />} />
            <Route path="/solutions/recruitment" element={<HRSolutionsPage />} />
            <Route path="/solutions/operations" element={<OperationsSolutionsPage />} />
            <Route path="/solutions/exhibitions" element={<ExhibitionsPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/partnerships" element={<PartnershipsPage />} />
            <Route path="/partnerships/thank-you" element={<PartnershipThankYouPage />} />
            <Route path="/products/expo-insight" element={<ExpoInsightPage />} />
            <Route path="/products/expo-insight/thank-you" element={<ExpoThankYouPage />} />
            <Route path="/products/ai-recruiter" element={<AIRecruiterPage />} />
            <Route path="/products/ai-recruiter/thank-you" element={<AIRecruiterThankYouPage />} />
            <Route path="/products/ai-telecaller" element={<AITeleCallerPage />} />
            <Route path="/products/ai-telecaller/thank-you" element={<AITeleCallerThankYouPage />} />
            <Route path="/products/salesx" element={<SalesXPage />} />
            <Route path="/products/salesx/thank-you" element={<SalesXThankYouPage />} />
            <Route path="/products/call-analyser" element={<CallAnalyserPage />} />
            <Route path="/products/call-analyser/thank-you" element={<CallAnalyserThankYouPage />} />
            <Route path="/products/support-assist" element={<SupportAssistPage />} />
            <Route path="/products/support-assist/thank-you" element={<SupportAssistThankYouPage />} />
            <Route path="/solutions/industry/real-estate" element={<RealEstatePage />} />
            <Route path="/solutions/industry/real-estate/thank-you" element={<RealEstateThankYouPage />} />
            <Route path="/solutions/industry/manufacturing" element={<ManufacturingPage />} />
            <Route path="/solutions/industry/manufacturing/thank-you" element={<ManufacturingThankYouPage />} />
            <Route path="/solutions/industry/pharma" element={<PharmaPage />} />
            <Route path="/solutions/industry/pharma/thank-you" element={<PharmaThankYouPage />} />
            <Route path="/solutions/government/ai-call-assistant" element={<GovernmentAICallAssistantPage />} />
            <Route path="/solutions/government/thank-you" element={<GovernmentThankYouPage />} />
            <Route path="/solutions/government/tender-query-automation" element={<TenderQueryAutomationPage />} />
            <Route path="/solutions/government/tender-query-automation" element={<TenderQueryAutomationPage />} />
            <Route path="/solutions/government/citizen-ai-interface" element={<CitizenAIInterfacePage />} />
            <Route path="/solutions/university-exam-portal" element={<UniversityExamPage />} />
            <Route path="/solutions/university-exam-portal/thank-you" element={<ExamPilotThankYouPage />} />

          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;

