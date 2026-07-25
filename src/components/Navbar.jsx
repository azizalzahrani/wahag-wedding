import React, { useState, useEffect } from 'react';
import { STUDIO_INFO, NAVIGATION_LINKS } from '../data/studioData';
import { Volume2, VolumeX, Menu, X, Sparkles, PhoneCall } from 'lucide-react';
import { ambientAudio } from '../utils/ambientAudio';

export default function Navbar({ activePage, setActivePage, openInquiry }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAudioToggle = () => {
    const playing = ambientAudio.toggle();
    setAudioPlaying(playing);
  };

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0B080C]/85 backdrop-blur-xl border-b border-[#2A132B]/60 py-3 shadow-2xl'
            : 'bg-gradient-to-b from-[#0B080C]/90 via-[#0B080C]/40 to-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Logo & Brand Emblem */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-right focus:outline-none"
          >
            {/* WAHAJ Gold Emblem Logo */}
            <div className="relative w-10 h-10 flex items-center justify-center rounded-full bg-[#1A0B1A] border border-[#D6C2A5]/50 group-hover:border-[#D6C2A5] group-hover:shadow-[0_0_15px_rgba(214,194,165,0.4)] transition-all duration-500 overflow-hidden shrink-0">
              <img src="/favicon.svg" alt="وَهَج Logo" className="w-8 h-8 group-hover:scale-110 transition-transform duration-500" />
            </div>

            <div className="flex flex-col">
              <span className="font-display text-2xl font-black tracking-widest text-[#FAF7F2] group-hover:text-[#D6C2A5] transition-colors">
                {STUDIO_INFO.name}
              </span>
              <span className="font-body text-[10px] text-[#D6C2A5]/80 tracking-wider">
                {STUDIO_INFO.subtitle}
              </span>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 bg-[#1A0B1A]/40 backdrop-blur-md px-6 py-2 rounded-full border border-[#2A132B]">
            {NAVIGATION_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`font-body text-sm transition-all duration-300 relative py-1 ${
                  activePage === link.id
                    ? 'text-[#D6C2A5] font-semibold'
                    : 'text-[#FAF7F2]/70 hover:text-[#FAF7F2]'
                }`}
              >
                {link.label}
                {activePage === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D6C2A5] to-transparent rounded-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Action Buttons & Sound Toggle */}
          <div className="hidden lg:flex items-center gap-4">
            
            {/* Ambient Sound Synthesizer Toggle */}
            <button
              onClick={handleAudioToggle}
              title={audioPlaying ? "إيقاف الموسيقى المحيطية" : "تشغيل الموسيقى المحيطية"}
              className={`p-2.5 rounded-full border transition-all duration-300 flex items-center justify-center ${
                audioPlaying
                  ? 'bg-[#E67E22]/20 border-[#E67E22] text-[#E67E22] animate-pulse'
                  : 'bg-[#1A0B1A] border-[#2A132B] text-[#FAF7F2]/60 hover:text-[#D6C2A5] hover:border-[#D6C2A5]/40'
              }`}
            >
              {audioPlaying ? <Volume2 size={18} /> : <VolumeX size={18} />}
            </button>

            {/* Main Inquiry Button */}
            <button
              onClick={openInquiry}
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#D6C2A5] via-[#C7B08B] to-[#D4A89C] text-[#0B080C] font-heading font-bold text-sm shadow-xl hover:shadow-[#D6C2A5]/20 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <Sparkles size={16} className="text-[#0B080C] group-hover:rotate-45 transition-transform" />
              <span>ابدأ قصتك</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={handleAudioToggle}
              className={`p-2 rounded-full border ${
                audioPlaying ? 'bg-[#E67E22]/20 border-[#E67E22] text-[#E67E22]' : 'bg-[#1A0B1A] border-[#2A132B] text-[#FAF7F2]'
              }`}
            >
              {audioPlaying ? <Volume2 size={18} /> : <VolumeX size={18} />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-[#1A0B1A] border border-[#2A132B] text-[#FAF7F2]"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0B080C]/95 backdrop-blur-2xl lg:hidden flex flex-col justify-between pt-28 pb-10 px-8 transition-all">
          <div className="flex flex-col gap-6">
            {NAVIGATION_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-right font-display text-2xl font-bold py-2 transition-colors border-b border-[#2A132B]/40 ${
                  activePage === link.id ? 'text-[#D6C2A5]' : 'text-[#FAF7F2]/80 hover:text-[#FAF7F2]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-4 mt-8">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openInquiry();
              }}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-[#D6C2A5] to-[#D4A89C] text-[#0B080C] font-heading font-bold text-center text-lg shadow-xl"
            >
              ابدأ قصتك الآن
            </button>

            <div className="flex items-center justify-between text-xs text-[#FAF7F2]/50 font-body">
              <span>الرياض • جدة • العلا</span>
              <span>concierge@example.com</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
