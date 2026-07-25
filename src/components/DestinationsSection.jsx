import React, { useState } from 'react';
import { DESTINATIONS } from '../data/studioData';
import { Globe, MapPin, Sparkles, CheckCircle2, ArrowLeft } from 'lucide-react';

export default function DestinationsSection({ openInquiry }) {
  const [selectedDestination, setSelectedDestination] = useState(DESTINATIONS[0]);

  return (
    <section className="py-24 bg-[#0B080C] text-[#FAF7F2] relative overflow-hidden">
      
      {/* Decorative Map Grid Lines */}
      <div className="absolute inset-0 bg-grain pointer-events-none opacity-30" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1A0B1A] border border-[#D6C2A5]/30 text-[#D6C2A5] text-xs font-body mb-4">
            <Globe size={14} className="text-[#E67E22]" />
            <span>جغرافية السحر والإلهام</span>
          </span>

          <h2 className="font-display text-4xl lg:text-6xl font-black text-[#FAF7F2] leading-tight mb-6">
            وجهات «وَهَج» الاستثنائية
          </h2>

          <p className="font-body text-[#FAF7F2]/70 text-lg">
            نحفظ جغرافية المملكة العربية السعودية ووجهات الفخامة العالمية في ذاكرتنا التخطيطية، لتقديم حلول لوجستية ومكانية متكاملة.
          </p>
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {DESTINATIONS.map((dest) => (
            <button
              key={dest.id}
              onClick={() => setSelectedDestination(dest)}
              className={`text-right rounded-3xl p-6 transition-all duration-500 border relative overflow-hidden group ${
                selectedDestination.id === dest.id
                  ? 'bg-[#1A0B1A] border-[#D6C2A5] shadow-2xl scale-105'
                  : 'bg-[#1A0B1A]/40 border-[#2A132B] hover:border-[#D6C2A5]/40'
              }`}
            >
              <div className="h-48 rounded-2xl overflow-hidden mb-4 relative">
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B080C] via-transparent to-transparent opacity-80" />
                <span className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-[#0B080C]/80 text-[#D6C2A5] font-body text-xs">
                  {dest.region}
                </span>
              </div>

              <h3 className="font-display text-2xl font-bold text-[#FAF7F2] mb-2 group-hover:text-[#D6C2A5] transition-colors">
                {dest.name}
              </h3>

              <p className="font-body text-xs text-[#FAF7F2]/70 line-clamp-2">
                {dest.description}
              </p>
            </button>
          ))}
        </div>

        {/* Selected Destination Atmosphere Card */}
        <div className="p-8 lg:p-14 rounded-3xl bg-gradient-to-r from-[#1A0B1A] via-[#2A132B]/60 to-[#1A0B1A] border border-[#D6C2A5]/30 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-6 text-right">
            <div className="flex items-center gap-2 text-[#E67E22] font-body text-xs">
              <MapPin size={14} />
              <span>دليل التخطيط المكاني — {selectedDestination.name}</span>
            </div>

            <h3 className="font-display text-3xl lg:text-4xl font-extrabold text-[#FAF7F2]">
              طابع المناسبة في {selectedDestination.name}
            </h3>

            <p className="font-body text-[#FAF7F2]/80 text-base lg:text-lg leading-relaxed">
              {selectedDestination.description}
            </p>

            <div className="space-y-3 pt-4 border-t border-[#2A132B]">
              <h4 className="font-heading font-bold text-[#D6C2A5] text-sm">أبرز المزايا والاعتبارات اللوجستية:</h4>
              <div className="space-y-2 font-body text-xs text-[#FAF7F2]/90">
                {selectedDestination.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#E67E22]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={openInquiry}
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D6C2A5] to-[#D4A89C] text-[#0B080C] font-heading font-bold text-sm shadow-xl hover:scale-105 transition-all flex items-center gap-2"
              >
                <span>استكشف جدوى التنفيذ في {selectedDestination.name}</span>
                <ArrowLeft size={16} />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-80 rounded-2xl overflow-hidden border border-[#2A132B]">
            <img
              src={selectedDestination.image}
              alt={selectedDestination.name}
              className="w-full h-full object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
