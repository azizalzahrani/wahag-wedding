import React, { useState } from 'react';
import { PHILOSOPHY_POINTS, PROCESS_STEPS } from '../data/studioData';
import { Compass, Sparkles, Layers, ShieldCheck, HeartHandshake, Award } from 'lucide-react';

export default function StudioStory({ openInquiry }) {
  const [activeProcessStep, setActiveProcessStep] = useState(0);

  return (
    <section className="py-24 bg-gradient-to-b from-[#0B080C] via-[#1A0B1A]/50 to-[#0B080C] text-[#FAF7F2] relative overflow-hidden">
      
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#2A132B]/40 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#E67E22]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1A0B1A] border border-[#D6C2A5]/30 text-[#D6C2A5] text-xs font-body mb-4">
            <Compass size={14} className="text-[#E67E22]" />
            <span>فلسفتنا وهويتنا الإبداعية</span>
          </span>
          
          <h2 className="font-display text-4xl lg:text-6xl font-black text-[#FAF7F2] leading-tight mb-6">
            لسنا منظّمين للمناسبات، بل صُنّاعٌ للذكرى التاريخية
          </h2>

          <p className="font-body text-[#FAF7F2]/70 text-lg leading-relaxed">
            نؤمن في استوديو «وَهَج» بأن الأعراس والمناسبات الفاخرة هي تجسيدٌ بصرِيٌّ وحِسِّيٌّ للقصة الشخصية. نحن نمزج السينوغرافيا المعمارية، وفن الهوت كوتور، وأصالة الضيافة السعودية لتشييد عوالم مؤقتة تفيض بالسحر والأناقة.
          </p>
        </div>

        {/* Philosophy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-28">
          {PHILOSOPHY_POINTS.map((point) => (
            <div
              key={point.number}
              className="p-8 rounded-2xl bg-[#1A0B1A]/60 border border-[#2A132B] hover:border-[#D6C2A5]/50 transition-all duration-500 hover:-translate-y-2 group relative overflow-hidden shadow-xl"
            >
              <div className="absolute top-0 right-0 w-full h-[2px] bg-gradient-to-l from-transparent via-[#D6C2A5]/40 to-transparent group-hover:via-[#D6C2A5] transition-all" />
              
              <span className="font-display text-3xl font-black text-[#D6C2A5]/40 group-hover:text-[#D6C2A5] transition-colors mb-4 block">
                {point.number}
              </span>

              <h3 className="font-heading text-xl font-bold text-[#FAF7F2] mb-3 group-hover:text-[#D6C2A5] transition-colors">
                {point.title}
              </h3>

              <p className="font-body text-[#FAF7F2]/70 text-sm leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive "Our Process" Timeline */}
        <div className="p-8 lg:p-14 rounded-3xl bg-[#1A0B1A]/80 border border-[#2A132B] shadow-2xl relative">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-[#E67E22] font-body text-xs font-semibold tracking-wider">
              من الفكرة حتى التصفيق الختامي
            </span>
            <h3 className="font-display text-3xl lg:text-4xl font-extrabold text-[#FAF7F2] mt-2">
              رحلة التصميم والتنفيذ في «وَهَج»
            </h3>
          </div>

          {/* Process Step Navigation */}
          <div className="flex items-center justify-between overflow-x-auto no-scrollbar gap-4 pb-6 border-b border-[#2A132B]/80 mb-10">
            {PROCESS_STEPS.map((step, idx) => (
              <button
                key={step.step}
                onClick={() => setActiveProcessStep(idx)}
                className={`whitespace-nowrap px-5 py-3 rounded-xl font-heading text-sm transition-all duration-300 flex items-center gap-3 ${
                  idx === activeProcessStep
                    ? 'bg-[#D6C2A5] text-[#0B080C] font-bold shadow-lg scale-105'
                    : 'bg-[#0B080C]/60 text-[#FAF7F2]/60 hover:text-[#FAF7F2] hover:bg-[#2A132B]'
                }`}
              >
                <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                  idx === activeProcessStep ? 'bg-[#0B080C] text-[#D6C2A5]' : 'bg-[#2A132B] text-[#FAF7F2]'
                }`}>
                  {step.step}
                </span>
                <span>{step.phase}</span>
              </button>
            ))}
          </div>

          {/* Active Process Step Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4 text-right">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E67E22]/10 text-[#E67E22] text-xs font-body">
                <span>الإطار الزمني المتوقع: {PROCESS_STEPS[activeProcessStep].duration}</span>
              </div>

              <h4 className="font-display text-2xl lg:text-3xl font-extrabold text-[#FAF7F2]">
                {PROCESS_STEPS[activeProcessStep].title}
              </h4>

              <p className="font-body text-[#FAF7F2]/80 text-base leading-relaxed">
                {PROCESS_STEPS[activeProcessStep].description}
              </p>

              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={openInquiry}
                  className="px-6 py-2.5 rounded-full bg-[#D6C2A5] text-[#0B080C] font-heading font-bold text-sm hover:bg-[#C7B08B] transition-colors"
                >
                  استشر مهندسي التجارب
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 p-8 rounded-2xl bg-[#0B080C] border border-[#2A132B] flex flex-col justify-center space-y-4">
              <div className="flex items-center gap-3 text-[#D6C2A5]">
                <Layers size={24} />
                <span className="font-heading font-bold">مخرجات هذه المرحلة</span>
              </div>
              <ul className="space-y-2 font-body text-xs text-[#FAF7F2]/70 list-disc list-inside">
                <li>لوحات الاستلهام المخصصة (Moodboards)</li>
                <li>المخططات المكانية الهندسية ثلاثية الأبعاد</li>
                <li>قائمة الموردين المعتمدين والمخطط المالي</li>
                <li>جدول الإشراف التنفيذي الدقيق</li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
