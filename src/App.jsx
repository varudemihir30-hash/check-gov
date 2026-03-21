import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import LanguagePopup from './components/LanguagePopup';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import UploadVerify from './components/UploadVerify';
import VerificationResult from './components/VerificationResult';
import HowItWorks from './components/HowItWorks';
import FraudAwareness from './components/FraudAwareness';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="app-container bg-ivory" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <LanguagePopup />
        <Navbar />
        <Hero />
        <UploadVerify />
        <VerificationResult />
        <HowItWorks />
        <FraudAwareness />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
