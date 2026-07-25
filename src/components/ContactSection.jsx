import React from 'react';
import { STUDIO_INFO } from '../data/studioData';
import { MapPin, Phone, Mail, Clock, Calendar, Sparkles, MessageSquare } from 'lucide-react';

export default function ContactSection({ openInquiry }) {
  return (
    <section className="py-24 bg-[#0B080C] text-[#FAF7F2] relative overflow-hidden">
      
      {/* Background ambient radial glow */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-[#2A132B]/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1A0B1A] border border-[#D6C2A5]/30 text-[#D6C2A5] text-xs font-body mb-4">
            <Calendar size={14} className="text-[#E67E22]" />
            <span>جلسات الاستشارة بالموعد المسبق</span>
          </span>

          <h2 className="font-display text-4xl lg:text-6xl font-black text-[#FAF7F2] leading-tight mb-6">
            تواصل مع استوديو «وَهَج»
          </h2>

          <p className="font-body text-[#FAF7F2]/70 text-lg">
            نستقبل عملاءنا في استوديوهاتنا الخاصة بالرياض وجدة بعناية فائقة، ووفق حجز مسبق يضمن التفرغ الكامل لمناقشة رؤيتكم.
          </p>
        </div>

        {/* Studios Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
          {STUDIO_INFO.studios.map((st, idx) => (
            <div
              key={idx}
              className="p-8 lg:p-12 rounded-3xl bg-[#1A0B1A]/50 border border-[#2A132B] hover:border-[#D6C2A5]/50 transition-all duration-500 text-right space-y-6 shadow-2xl relative overflow-hidden group"
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-3xl font-black text-[#D6C2A5]">
                  استوديو {st.city}
                </span>
                <span className="p-3 rounded-2xl bg-[#0B080C] border border-[#2A132B] text-[#E67E22]">
                  <MapPin size={20} />
                </span>
              </div>

              <div className="space-y-3 font-body text-sm text-[#FAF7F2]/80">
                <p className="font-bold text-[#FAF7F2]">{st.district}</p>
                <p>{st.address}</p>
              </div>

              <div className="pt-4 border-t border-[#2A132B] space-y-2 font-body text-xs text-[#FAF7F2]/70">
                <div className="flex items-center gap-2">
                  <Phone size={14} className="text-[#D6C2A5]" />
                  <span dir="ltr">{st.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={14} className="text-[#D6C2A5]" />
                  <span>{st.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={14} className="text-[#D6C2A5]" />
                  <span>ساعات الاستقبال: الأحد - الخميس (١٠:٠٠ صباحاً - ٧:٠٠ مساءً)</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={openInquiry}
                  className="w-full py-3 rounded-full bg-[#0B080C] border border-[#2A132B] text-[#D6C2A5] font-heading font-bold text-xs hover:bg-[#D6C2A5] hover:text-[#0B080C] transition-all flex items-center justify-center gap-2"
                >
                  <span>طلب موعد زيارة في استوديو {st.city}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Consultation Callout */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-[#1A0B1A] to-[#2A132B] border border-[#D6C2A5]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-right space-y-1">
            <h3 className="font-display text-xl font-bold text-[#FAF7F2]">
              هل تحتاج لمحادثة فورية مع مسؤول الضيافة والاستفسار؟
            </h3>
            <p className="font-body text-xs text-[#FAF7F2]/70">
              خدمة الواتساب المباشر متاحة للإجابة على التساؤلات الأولية وتنسيق الأجندة.
            </p>
          </div>

          <a
            href="https://wa.me/966500009988"
            target="_blank"
            rel="noreferrer"
            className="whitespace-nowrap px-6 py-3 rounded-full bg-[#25D366] text-[#0B080C] font-heading font-bold text-sm flex items-center gap-2 shadow-xl hover:scale-105 transition-all"
          >
            <MessageSquare size={16} />
            <span>محادثة الفخامة عبر الواتساب</span>
          </a>
        </div>

      </div>
    </section>
  );
}
