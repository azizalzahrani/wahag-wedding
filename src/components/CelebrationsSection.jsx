import React, { useState } from 'react';
import { CELEBRATION_CATEGORIES } from '../data/studioData';
import { Sparkles, ArrowLeft, CheckCircle } from 'lucide-react';

export default function CelebrationsSection({ openInquiry }) {
  const [selectedCategory, setSelectedCategory] = useState(CELEBRATION_CATEGORIES[0].id);

  const activeCategory = CELEBRATION_CATEGORIES.find(c => c.id === selectedCategory) || CELEBRATION_CATEGORIES[0];

  return (
    <section className="py-24 bg-[#0B080C] text-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1A0B1A] border border-[#D6C2A5]/30 text-[#D6C2A5] text-xs font-body mb-4">
            <Sparkles size={14} className="text-[#E67E22]" />
            <span>مجالات الاختصاص والتميز</span>
          </span>

          <h2 className="font-display text-4xl lg:text-6xl font-black text-[#FAF7F2] leading-tight mb-6">
            المناسبات والاحتفالات
          </h2>

          <p className="font-body text-[#FAF7F2]/70 text-lg">
            كل فئة من مناسباتنا هي عالم قائم بذاته، نُصمّم له هوية بصرية، ولغة ضوئية، ونظام ضيافة مخصص لا يُمحى.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-4 mb-16">
          {CELEBRATION_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-3 rounded-full font-heading text-sm sm:text-base transition-all duration-300 ${
                selectedCategory === cat.id
                  ? 'bg-gradient-to-r from-[#D6C2A5] to-[#D4A89C] text-[#0B080C] font-bold shadow-xl scale-105'
                  : 'bg-[#1A0B1A] text-[#FAF7F2]/70 hover:text-[#FAF7F2] border border-[#2A132B] hover:border-[#D6C2A5]/40'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Selected Category Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#1A0B1A]/40 border border-[#2A132B] p-8 lg:p-14 rounded-3xl backdrop-blur-xl">
          
          {/* Visual Editorial Image */}
          <div className="lg:col-span-6 relative group overflow-hidden rounded-2xl border border-[#2A132B]">
            <img
              src={activeCategory.image}
              alt={activeCategory.title}
              className="w-full h-[400px] lg:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B080C] via-transparent to-transparent opacity-80" />
            
            <div className="absolute bottom-6 right-6 left-6 text-right">
              <span className="font-body text-xs text-[#D6C2A5] uppercase tracking-widest block mb-1">
                {activeCategory.englishTitle}
              </span>
              <h3 className="font-display text-2xl font-bold text-[#FAF7F2]">
                {activeCategory.title}
              </h3>
            </div>
          </div>

          {/* Details & Features */}
          <div className="lg:col-span-6 space-y-6 text-right">
            <h3 className="font-display text-3xl lg:text-4xl font-extrabold text-[#FAF7F2] leading-tight">
              {activeCategory.subtitle}
            </h3>

            <p className="font-body text-[#FAF7F2]/80 text-base lg:text-lg leading-relaxed">
              {activeCategory.description}
            </p>

            {/* Features list */}
            <div className="space-y-3 pt-4 border-t border-[#2A132B]">
              <h4 className="font-heading font-bold text-[#D6C2A5] text-sm">نطاق الخدمات والتميز:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeCategory.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-body text-[#FAF7F2]/90">
                    <CheckCircle size={16} className="text-[#E67E22] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Inquiry Action */}
            <div className="pt-6">
              <button
                onClick={openInquiry}
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D6C2A5] to-[#C7B08B] text-[#0B080C] font-heading font-bold text-sm shadow-xl hover:scale-105 transition-all flex items-center gap-2"
              >
                <span>طلب استشارة لهذه المناسبة</span>
                <ArrowLeft size={16} />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
