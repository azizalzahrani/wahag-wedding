import React from 'react';
import { SERVICES } from '../data/studioData';
import { Layers, Sparkles, ArrowLeft } from 'lucide-react';

export default function ServicesSection({ openInquiry }) {
  return (
    <section className="py-24 bg-gradient-to-b from-[#0B080C] via-[#1A0B1A]/30 to-[#0B080C] text-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1A0B1A] border border-[#D6C2A5]/30 text-[#D6C2A5] text-xs font-body mb-4">
            <Layers size={14} className="text-[#E67E22]" />
            <span>محاور التخصص الإبداعي</span>
          </span>

          <h2 className="font-display text-4xl lg:text-6xl font-black text-[#FAF7F2] leading-tight mb-6">
            خدمات الاستوديو كشراكة إبداعية
          </h2>

          <p className="font-body text-[#FAF7F2]/70 text-lg">
            لا نقدم باقات نمطية جامدة، بل نصمّم منظومة تنفيذية متكاملة تتكيف بدقة مع تطلعات العائلة ومستويات الفخامة المطلوبة.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="p-8 rounded-3xl bg-[#1A0B1A]/50 border border-[#2A132B] hover:border-[#D6C2A5]/50 transition-all duration-500 hover:-translate-y-2 group flex flex-col justify-between"
            >
              <div>
                <span className="font-display text-2xl font-black text-[#E67E22] block mb-4">
                  {service.number}
                </span>

                <h3 className="font-heading text-xl font-bold text-[#FAF7F2] mb-1 group-hover:text-[#D6C2A5] transition-colors">
                  {service.title}
                </h3>
                <span className="font-body text-[11px] text-[#D6C2A5]/70 block mb-4">
                  {service.englishTitle}
                </span>

                <p className="font-body text-xs text-[#FAF7F2]/70 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              <button
                onClick={openInquiry}
                className="w-full py-2.5 rounded-xl bg-[#0B080C] border border-[#2A132B] text-[#D6C2A5] font-heading text-xs font-bold hover:bg-[#D6C2A5] hover:text-[#0B080C] transition-all flex items-center justify-center gap-2"
              >
                <span>طلب هذا المحور</span>
                <ArrowLeft size={12} />
              </button>
            </div>
          ))}
        </div>

        {/* Banner */}
        <div className="p-10 rounded-3xl bg-[#1A0B1A] border border-[#D6C2A5]/30 text-center max-w-4xl mx-auto space-y-4">
          <h3 className="font-display text-2xl lg:text-3xl font-extrabold text-[#FAF7F2]">
            هل ترغب في دمج عدة محاور إبداعية في خطة تنفيذية واحدة؟
          </h3>
          <p className="font-body text-[#FAF7F2]/70 text-sm">
            يمكنك تخصيص نطاق العمل بالكامل خلال جلسة الاستشارة الأولى مع فريق التصميم في الرياض أو جدة.
          </p>
          <div className="pt-2">
            <button
              onClick={openInquiry}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D6C2A5] to-[#D4A89C] text-[#0B080C] font-heading font-bold text-sm shadow-xl hover:scale-105 transition-all inline-flex items-center gap-2"
            >
              <Sparkles size={16} />
              <span>ابدأ تصميم منطومة خدمتك الخاصة</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
