import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import StudioStory from './components/StudioStory';
import CelebrationsSection from './components/CelebrationsSection';
import PortfolioSection from './components/PortfolioSection';
import DestinationsSection from './components/DestinationsSection';
import ServicesSection from './components/ServicesSection';
import JournalSection from './components/JournalSection';
import ContactSection from './components/ContactSection';
import InquiryModal from './components/InquiryModal';
import LegalModal from './components/LegalModal';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [activeLegalDoc, setActiveLegalDoc] = useState(null);

  const openInquiry = () => setIsInquiryOpen(true);
  const closeInquiry = () => setIsInquiryOpen(false);

  const openLegal = (docKey) => setActiveLegalDoc(docKey);
  const closeLegal = () => setActiveLegalDoc(null);

  return (
    <div className="min-h-screen bg-[#0B080C] text-[#FAF7F2] font-body relative flex flex-col justify-between selection:bg-[#D6C2A5]/30 selection:text-[#FAF7F2]">
      
      {/* Sticky Glassmorphism Header */}
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        openInquiry={openInquiry}
      />

      {/* Main Dynamic View Content */}
      <main className="flex-grow">
        {activePage === 'home' && (
          <div className="space-y-0 animate-fade-in">
            <Hero openInquiry={openInquiry} setActivePage={setActivePage} />
            <StudioStory openInquiry={openInquiry} />
            <CelebrationsSection openInquiry={openInquiry} />
            <PortfolioSection openInquiry={openInquiry} />
            <DestinationsSection openInquiry={openInquiry} />
            <ServicesSection openInquiry={openInquiry} />
            <JournalSection />
            <ContactSection openInquiry={openInquiry} />
          </div>
        )}

        {activePage === 'studio' && (
          <div className="pt-20 animate-fade-in">
            <StudioStory openInquiry={openInquiry} />
          </div>
        )}

        {activePage === 'celebrations' && (
          <div className="pt-20 animate-fade-in">
            <CelebrationsSection openInquiry={openInquiry} />
          </div>
        )}

        {activePage === 'portfolio' && (
          <div className="pt-20 animate-fade-in">
            <PortfolioSection openInquiry={openInquiry} />
          </div>
        )}

        {activePage === 'destinations' && (
          <div className="pt-20 animate-fade-in">
            <DestinationsSection openInquiry={openInquiry} />
          </div>
        )}

        {activePage === 'services' && (
          <div className="pt-20 animate-fade-in">
            <ServicesSection openInquiry={openInquiry} />
          </div>
        )}

        {activePage === 'journal' && (
          <div className="pt-20 animate-fade-in">
            <JournalSection />
          </div>
        )}

        {activePage === 'contact' && (
          <div className="pt-20 animate-fade-in">
            <ContactSection openInquiry={openInquiry} />
          </div>
        )}
      </main>

      {/* Persistent Refined Footer */}
      <Footer
        setActivePage={setActivePage}
        openInquiry={openInquiry}
        openLegal={openLegal}
      />

      {/* Multi-Step Interactive Inquiry Journey Modal */}
      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={closeInquiry}
      />

      {/* Legal & Privacy Policy Modal */}
      <LegalModal
        docKey={activeLegalDoc}
        onClose={closeLegal}
      />

    </div>
  );
}
