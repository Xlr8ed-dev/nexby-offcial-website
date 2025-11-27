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
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;

