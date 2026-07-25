import React from 'react';
import { LEGAL_DOCS } from '../data/studioData';
import { X, ShieldCheck } from 'lucide-react';

export default function LegalModal({ docKey, onClose }) {
  if (!docKey) return null;

  const doc = LEGAL_DOCS[docKey] || LEGAL_DOCS.privacy;

  return (
    <div className="fixed inset-0 z-50 bg-[#0B080C]/90 backdrop-blur-2xl p-4 sm:p-8 flex items-center justify-center overflow-y-auto animate-fade-in">
      <div className="max-w-3xl w-full bg-[#1A0B1A] border border-[#D6C2A5]/30 rounded-3xl p-6 sm:p-12 relative text-right shadow-2xl my-6">
        
        <button
          onClick={onClose}
          className="absolute top-6 left-6 p-2.5 rounded-full bg-[#0B080C] border border-[#2A132B] text-[#FAF7F2] hover:border-[#D6C2A5] transition-colors"
        >
          <X size={18} />
        </button>

        <div className="flex items-center gap-2 text-[#E67E22] font-body text-xs mb-4">
          <ShieldCheck size={16} />
          <span>وثيقة تنظيمية — استوديو «وَهَج» ({doc.lastUpdated})</span>
        </div>

        <h2 className="font-display text-3xl font-extrabold text-[#FAF7F2] mb-8">
          {doc.title}
        </h2>

        <div className="space-y-6 text-right font-body">
          {doc.sections.map((sec, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-[#0B080C] border border-[#2A132B]">
              <h3 className="font-heading font-bold text-lg text-[#D6C2A5] mb-2">{sec.h}</h3>
              <p className="text-sm text-[#FAF7F2]/80 leading-relaxed">{sec.p}</p>
            </div>
          ))}
        </div>

        <div className="pt-8 mt-8 border-t border-[#2A132B] text-left">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-[#D6C2A5] text-[#0B080C] font-heading font-bold text-xs hover:bg-[#C7B08B] transition-colors"
          >
            إغلاق الوثيقة
          </button>
        </div>

      </div>
    </div>
  );
}
