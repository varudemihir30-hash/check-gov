import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './context/LanguageContext';
import LanguagePopup from './components/LanguagePopup';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CookieConsentBanner from './components/CookieConsentBanner';

import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import DisclaimerPage from './pages/DisclaimerPage';
import TermsConditionsPage from './pages/TermsConditionsPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <LanguageProvider>
      <HelmetProvider>
        <BrowserRouter>
          <div
            className="app-container bg-ivory"
            style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', paddingBottom: '96px' }}
          >
            <LanguagePopup />
            <Navbar />

            <main className="flex-1" style={{ width: '100%' }}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutUsPage />} />
                <Route path="/contact" element={<ContactUsPage />} />
                <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
                <Route path="/disclaimer" element={<DisclaimerPage />} />
                <Route path="/terms-and-conditions" element={<TermsConditionsPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </main>

            <Footer />
            <CookieConsentBanner />
          </div>
        </BrowserRouter>
      </HelmetProvider>
    </LanguageProvider>
  );
}

export default App;
