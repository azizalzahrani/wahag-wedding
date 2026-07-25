import React, { useState } from 'react';
import { JOURNAL_ARTICLES } from '../data/studioData';
import { BookOpen, Calendar, Clock, ArrowLeft, X, Send, CheckCircle2 } from 'lucide-react';

export default function JournalSection() {
  const [activeArticle, setActiveArticle] = useState(null);
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (emailInput) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmailInput('');
      }, 4000);
    }
  };

  return (
    <section className="py-24 bg-[#0B080C] text-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1A0B1A] border border-[#D6C2A5]/30 text-[#D6C2A5] text-xs font-body mb-4">
            <BookOpen size={14} className="text-[#E67E22]" />
            <span>المجلة الإبداعية الفكرية</span>
          </span>

          <h2 className="font-display text-4xl lg:text-6xl font-black text-[#FAF7F2] leading-tight mb-6">
            مجلة «وَهَج»
          </h2>

          <p className="font-body text-[#FAF7F2]/70 text-lg">
            مقالاتٌ ورؤى نقدية حول فن السينوغرافيا المعمارية، وفلسفة المكان، وثقافة الفخامة السعودية المحدثة.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {JOURNAL_ARTICLES.map((article) => (
            <div
              key={article.id}
              onClick={() => setActiveArticle(article)}
              className="group bg-[#1A0B1A]/40 border border-[#2A132B] rounded-3xl overflow-hidden shadow-xl hover:border-[#D6C2A5]/50 transition-all duration-500 cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="h-56 overflow-hidden relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95 group-hover:opacity-100"
                  />
                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#0B080C]/80 backdrop-blur-md text-[#D6C2A5] font-body text-xs">
                    {article.category}
                  </span>
                </div>

                <div className="p-6 text-right space-y-3">
                  <div className="flex items-center gap-4 text-[11px] font-body text-[#FAF7F2]/50">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {article.date}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {article.readTime}</span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-[#FAF7F2] group-hover:text-[#D6C2A5] transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="font-body text-xs text-[#FAF7F2]/70 line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 text-right">
                <span className="inline-flex items-center gap-2 text-xs font-heading font-bold text-[#D6C2A5] group-hover:translate-x-[-4px] transition-transform">
                  <span>اقرأ المقال كاملاً</span>
                  <ArrowLeft size={14} />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Invitation Style Newsletter Card */}
        <div className="p-10 lg:p-14 rounded-3xl bg-gradient-to-r from-[#1A0B1A] via-[#2A132B] to-[#1A0B1A] border border-[#D6C2A5]/40 text-center max-w-3xl mx-auto shadow-2xl relative">
          <div className="w-12 h-12 rounded-full bg-[#D6C2A5]/10 border border-[#D6C2A5] flex items-center justify-center mx-auto mb-4">
            <Send size={20} className="text-[#D6C2A5]" />
          </div>

          <h3 className="font-display text-3xl font-extrabold text-[#FAF7F2] mb-3">
            دعوة خاصة للانضمام إلى النشرة
          </h3>

          <p className="font-body text-sm text-[#FAF7F2]/80 max-w-md mx-auto mb-8">
            تصلك رسالتنا المغلفة بالجمال والإلهام مرة واحدة كل شهر، وتتضمن قراءات في أرشيف الفخامة وأسرار التخطيط.
          </p>

          <form onSubmit={handleSubscribe} className="max-w-md mx-auto space-y-3">
            <div className="flex items-center gap-2 bg-[#0B080C] p-1.5 rounded-full border border-[#2A132B] focus-within:border-[#D6C2A5]">
              <input
                type="email"
                required
                placeholder="أدخل عنوان بريدك الإلكتروني..."
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="w-full bg-transparent px-4 text-sm text-[#FAF7F2] placeholder-[#FAF7F2]/40 focus:outline-none text-right font-body"
              />
              <button
                type="submit"
                className="px-6 py-2.5 rounded-full bg-[#D6C2A5] text-[#0B080C] font-heading font-bold text-xs hover:bg-[#C7B08B] transition-colors whitespace-nowrap"
              >
                تأكيد الانضمام
              </button>
            </div>

            {subscribed && (
              <div className="flex items-center justify-center gap-2 text-xs text-[#2ECC71] pt-2 font-body">
                <CheckCircle2 size={16} />
                <span>تم إرسال بطاقة الترحيب إلى بريدك بنجاح.</span>
              </div>
            )}
          </form>
        </div>

      </div>

      {/* Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 bg-[#0B080C]/90 backdrop-blur-2xl overflow-y-auto p-4 sm:p-8 flex justify-center items-start animate-fade-in">
          <div className="max-w-3xl w-full bg-[#1A0B1A] border border-[#D6C2A5]/30 rounded-3xl p-6 sm:p-12 relative text-right shadow-2xl my-8">
            
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-6 left-6 p-3 rounded-full bg-[#0B080C] border border-[#2A132B] text-[#FAF7F2] hover:border-[#D6C2A5] transition-colors"
            >
              <X size={20} />
            </button>

            <span className="inline-block px-3 py-1 rounded-full bg-[#E67E22]/10 text-[#E67E22] font-body text-xs mb-4">
              {activeArticle.category} • {activeArticle.readTime}
            </span>

            <h2 className="font-display text-3xl sm:text-5xl font-black text-[#FAF7F2] mb-6 leading-snug">
              {activeArticle.title}
            </h2>

            <img
              src={activeArticle.image}
              alt={activeArticle.title}
              className="w-full h-80 object-cover rounded-2xl border border-[#2A132B] mb-8"
            />

            <div className="font-body text-base text-[#FAF7F2]/80 leading-relaxed whitespace-pre-line space-y-4">
              {activeArticle.content}
            </div>

            <div className="pt-8 mt-8 border-t border-[#2A132B] flex justify-between items-center">
              <span className="text-xs text-[#D6C2A5] font-body">استوديو «وَهَج» للتصميم والإخراج السينمائي</span>
              <button
                onClick={() => setActiveArticle(null)}
                className="px-6 py-2 rounded-full bg-[#2A132B] text-[#FAF7F2] font-body text-xs hover:bg-[#D6C2A5] hover:text-[#0B080C] transition-colors"
              >
                إغلاق المقال
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
