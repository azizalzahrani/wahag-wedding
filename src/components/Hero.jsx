import React, { useState, useEffect } from 'react';
import { HERO_SLIDES } from '../data/studioData';
import { Sparkles, ChevronLeft, ChevronRight, MapPin, ArrowDownRight } from 'lucide-react';

export default function Hero({ openInquiry, setActivePage }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const slide = HERO_SLIDES[currentSlide];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#0B080C]">
      
      {/* Background Image Carousel with Parallax & Grain Effect */}
      {HERO_SLIDES.map((item, idx) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover scale-105 animate-pulse transition-transform duration-10000 opacity-35"
          />
          {/* Layered Color Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B080C] via-[#1A0B1A]/80 to-[#0B080C]/60" />
          <div className="absolute inset-0 bg-radial from-transparent via-[#0B080C]/40 to-[#0B080C]" />
        </div>
      ))}

      {/* Decorative Fine Lines & Ambient Grain Overlay */}
      <div className="absolute inset-0 bg-grain pointer-events-none z-20 opacity-40" />

      {/* Content Container */}
      <div className="relative z-30 max-w-5xl mx-auto px-6 text-center flex flex-col items-center justify-center">
        
        {/* Subtle Category Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1A0B1A]/80 border border-[#D6C2A5]/40 text-[#D6C2A5] text-xs font-body mb-8 backdrop-blur-md shadow-xl animate-fade-in">
          <Sparkles size={14} className="text-[#E67E22]" />
          <span>استوديو التصميم والسينوغرافيا المعمارية — المملكة العربية السعودية</span>
        </div>

        {/* Main Headline */}
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-[#FAF7F2] leading-[1.15] tracking-tight mb-8 drop-shadow-2xl">
          نُصمّم لحظاتٍ <br />
          <span className="text-gold-gradient italic">لا تُمحى من الذاكرة</span>
        </h1>

        {/* Subtitle */}
        <p className="font-body text-lg sm:text-2xl text-[#FAF7F2]/80 max-w-2xl font-light leading-relaxed mb-12">
          {slide.subtitle}
        </p>

        {/* Location Indicator & Project Reference */}
        <div className="flex items-center gap-3 px-5 py-2 rounded-full bg-[#0B080C]/60 backdrop-blur-md border border-[#2A132B] text-xs text-[#FAF7F2]/70 mb-10">
          <MapPin size={14} className="text-[#E67E22]" />
          <span>الوجهة: <strong className="text-[#D6C2A5]">{slide.location}</strong></span>
          <span className="text-[#2A132B]">|</span>
          <span>المشروع: <strong className="text-[#FAF7F2]">{slide.projectRef}</strong></span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto">
          <button
            onClick={openInquiry}
            className="w-full sm:w-auto px-10 py-4 rounded-full bg-gradient-to-r from-[#D6C2A5] via-[#C7B08B] to-[#D4A89C] text-[#0B080C] font-heading font-extrabold text-lg shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3"
          >
            <Sparkles size={20} />
            <span>ابدأ قصتك</span>
          </button>

          <button
            onClick={() => {
              setActivePage('portfolio');
              window.scrollTo({ top: window.innerHeight * 0.8, behavior: 'smooth' });
            }}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#1A0B1A]/80 backdrop-blur-md border border-[#D6C2A5]/30 text-[#FAF7F2] hover:text-[#D6C2A5] hover:border-[#D6C2A5] font-heading font-bold text-base transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>استكشف أعمالنا</span>
            <ArrowDownRight size={18} />
          </button>
        </div>

        {/* Slide Controls & Indicators */}
        <div className="mt-16 flex items-center gap-6">
          <button
            onClick={() => setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1))}
            className="p-2 rounded-full bg-[#1A0B1A]/80 border border-[#2A132B] text-[#FAF7F2] hover:border-[#D6C2A5] transition-colors"
          >
            <ChevronRight size={20} />
          </button>

          <div className="flex items-center gap-2">
            {HERO_SLIDES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  idx === currentSlide ? 'w-8 bg-[#D6C2A5]' : 'w-2 bg-[#FAF7F2]/30'
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length)}
            className="p-2 rounded-full bg-[#1A0B1A]/80 border border-[#2A132B] text-[#FAF7F2] hover:border-[#D6C2A5] transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
        </div>

      </div>
    </section>
  );
}
