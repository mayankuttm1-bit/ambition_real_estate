import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingActions from './components/layout/FloatingActions';
import LeadModal from './components/common/LeadModal';
import PropertyDetailModal from './components/common/PropertyDetailModal';

import HomePage from './pages/HomePage';
import PropertiesPage from './pages/PropertiesPage';
import ServicesPage from './pages/ServicesPage';
import InvestmentGuidePage from './pages/InvestmentGuidePage';
import ContactPage from './pages/ContactPage';

// Helper to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [selectedProperty, setSelectedProperty] = useState(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingPropertyContext, setBookingPropertyContext] = useState(null);

  const handleOpenBooking = (property = null) => {
    setBookingPropertyContext(property);
    setIsBookingModalOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingModalOpen(false);
    setBookingPropertyContext(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-luxury-paper text-luxury-ink">
      <ScrollToTop />
      
      {/* Navbar */}
      <Navbar onOpenBookingModal={() => handleOpenBooking()} />

      {/* Primary View */}
      <main className="flex-1">
        <Routes>
          <Route 
            path="/" 
            element={
              <HomePage 
                onSelectProperty={(p) => setSelectedProperty(p)} 
                onOpenBookingModal={(p) => handleOpenBooking(p)} 
              />
            } 
          />
          <Route 
            path="/properties" 
            element={
              <PropertiesPage 
                onSelectProperty={(p) => setSelectedProperty(p)} 
                onOpenBookingModal={(p) => handleOpenBooking(p)} 
              />
            } 
          />
          <Route 
            path="/services" 
            element={
              <ServicesPage 
                onOpenBookingModal={(p) => handleOpenBooking(p)} 
              />
            } 
          />
          <Route 
            path="/investment-guide" 
            element={
              <InvestmentGuidePage 
                onOpenBookingModal={(p) => handleOpenBooking(p)} 
              />
            } 
          />
          <Route 
            path="/contact" 
            element={<ContactPage />} 
          />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Call & WhatsApp Buttons */}
      <FloatingActions onOpenBookingModal={() => handleOpenBooking()} />

      {/* Modals */}
      <PropertyDetailModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
        onBookVisit={(p) => handleOpenBooking(p)}
      />

      <LeadModal
        isOpen={isBookingModalOpen}
        onClose={handleCloseBooking}
        initialProperty={bookingPropertyContext}
      />
    </div>
  );
}
