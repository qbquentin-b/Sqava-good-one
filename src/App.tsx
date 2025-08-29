import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import AboutUs from './components/AboutUs';
import Packages from './components/Packages';
import WhyUs from './components/WhyUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LegalNotice from './components/LegalNotice';
import PrivacyPolicy from './components/PrivacyPolicy';
import CookieManager from './components/CookieManager';

// Page d'accueil
const HomePage = () => (
  <>
    <Header />
    <Hero />
    <Footer />
    <CookieManager />
  </>
);

// Page À propos
const AboutPage = () => (
  <>
    <Header />
    <div className="pt-20">
      <About />
      <AboutUs />
    </div>
    <Footer />
    <CookieManager />
  </>
);

// Page Offres
const OffersPage = () => (
  <>
    <Header />
    <div className="pt-20">
      <Packages />
    </div>
    <Footer />
    <CookieManager />
  </>
);

// Page Pourquoi nous choisir
const WhyUsPage = () => (
  <>
    <Header />
    <div className="pt-20">
      <WhyUs />
    </div>
    <Footer />
    <CookieManager />
  </>
);

// Page Contact
const ContactPage = () => (
  <>
    <Header />
    <div className="pt-20">
      <Contact />
    </div>
    <Footer />
    <CookieManager />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/a-propos" element={<AboutPage />} />
          <Route path="/offres" element={<OffersPage />} />
          <Route path="/pourquoi-nous-choisir" element={<WhyUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/mentions-legales" element={<LegalNotice />} />
          <Route path="/politique-confidentialite" element={<PrivacyPolicy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;