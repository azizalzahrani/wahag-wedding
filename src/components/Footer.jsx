import React, { useState } from 'react';
import { STUDIO_INFO, NAVIGATION_LINKS } from '../data/studioData';
import { ArrowUp, Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function Footer({ setActivePage, openInquiry, openLegal }) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSubscribed(true);
      setTimeout(() => {
        setNewsletterSubscribed(false);
        setNewsletterEmail('');
      }, 4000);
    }
  };

  return (
    <footer className="relative bg-[#0B080C] border-t border-[#2A132B] text-[#FAF7F2] pt-20 pb-12 overflow-hidden">
      
      {/* Background ambient radial glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-[#2A132B]/30 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-[#E67E22]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Top Call to Action Banner */}
        <div className="mb-20 p-10 lg:p-16 rounded-3xl bg-gradient-to-r from-[#1A0B1A] via-[#2A132B]/70 to-[#1A0B1A] border border-[#D6C2A5]/30 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#D6C2A5] to-transparent" />
          
          <div className="max-w-2xl text-right">
            <span className="inline-block px-3 py-1 rounded-full bg-[#E67E22]/10 text-[#E67E22] font-body text-xs mb-3 border border-[#E67E22]/20">
              احجز مناسبتك القادمة
            </span>
            <h2 className="font-display text-3xl lg:text-5xl font-black text-[#FAF7F2] leading-tight mb-4">
              هل أنت جاهز لتصميم تجربة لا تُنسى؟
            </h2>
            <p className="font-body text-[#FAF7F2]/70 text-base lg:text-lg">
              استشارتنا الخاصة تبدأ بحوار ملهم لاستكشاف رؤيتك وتحويلها إلى واقع سينمائي مبهر.
            </p>
          </div>

          <button
            onClick={openInquiry}
            className="whitespace-nowrap px-8 py-4 rounded-full bg-gradient-to-r from-[#D6C2A5] to-[#D4A89C] text-[#0B080C] font-heading font-extrabold text-lg shadow-2xl hover:scale-105 transition-all duration-300"
          >
            ابدأ رحلة الاستفسار
          </button>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-6 text-right">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#1A0B1A] border border-[#D6C2A5]/50 flex items-center justify-center overflow-hidden shadow-lg shrink-0">
                <img src="/favicon.svg" alt="وَهَج Logo" className="w-10 h-10" />
              </div>
              <div>
                <h3 className="font-display text-3xl font-black text-[#FAF7F2]">{STUDIO_INFO.name}</h3>
                <p className="font-body text-xs text-[#D6C2A5]">{STUDIO_INFO.subtitle}</p>
              </div>
            </div>

            <p className="font-body text-[#FAF7F2]/70 text-sm leading-relaxed max-w-md">
              {STUDIO_INFO.description}
            </p>

            <div className="pt-2">
              <p className="font-body text-xs text-[#FAF7F2]/50">استوديوهاتنا الحصرية:</p>
              <div className="mt-2 space-y-2 font-body text-xs text-[#FAF7F2]/80">
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-[#D6C2A5]" />
                  <span>الرياض: حي السفارات — المربع الإبداعي</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={14} className="text-[#D6C2A5]" />
                  <span>جدة: حي الشاطئ — واجهة الكورنيش</span>
                </div>
              </div>
            </div>
          </div>

          {/* Nav Links */}
          <div className="space-y-4 text-right">
            <h4 className="font-heading font-bold text-lg text-[#D6C2A5]">الأقسام الرئيسية</h4>
            <ul className="space-y-2 font-body text-sm text-[#FAF7F2]/70">
              {NAVIGATION_LINKS.map(link => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      setActivePage(link.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-[#D6C2A5] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contacts */}
          <div className="space-y-4 text-right">
            <h4 className="font-heading font-bold text-lg text-[#D6C2A5]">التواصل المباشر</h4>
            <ul className="space-y-3 font-body text-xs text-[#FAF7F2]/70">
              <li className="flex items-center gap-2 justify-start">
                <Phone size={14} className="text-[#E67E22]" />
                <span dir="ltr">+966 11 000 0000</span>
              </li>
              <li className="flex items-center gap-2 justify-start">
                <Mail size={14} className="text-[#E67E22]" />
                <span>concierge@wahajstudio.sa</span>
              </li>
              <li className="pt-2">
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1A0B1A] border border-[#2A132B] text-[#D6C2A5] hover:border-[#D6C2A5] transition-colors"
                >
                  <span>محادثة الواتساب الفورية</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Invitation */}
          <div className="space-y-4 text-right">
            <h4 className="font-heading font-bold text-lg text-[#D6C2A5]">نشرة «وَهَج» الخاصة</h4>
            <p className="font-body text-xs text-[#FAF7F2]/70">
              انضم إلى القائمة السريّة لنشرتنا الفصلية، لتصلك قصص التصميم، والوجهات النادرة، وإلهام الفخامة.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="بريدك الإلكتروني..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#1A0B1A] border border-[#2A132B] text-sm text-[#FAF7F2] placeholder-[#FAF7F2]/30 focus:outline-none focus:border-[#D6C2A5]"
                />
                <button
                  type="submit"
                  className="absolute left-1.5 top-1.5 bottom-1.5 px-3 rounded-lg bg-[#D6C2A5] text-[#0B080C] flex items-center justify-center hover:bg-[#C7B08B] transition-colors"
                >
                  <Send size={14} className="rotate-180" />
                </button>
              </div>

              {newsletterSubscribed && (
                <div className="flex items-center gap-1.5 text-xs text-[#2ECC71] pt-1">
                  <CheckCircle2 size={14} />
                  <span>تم إرسال الدعوة بنجاح. مرحباً بك.</span>
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 border-t border-[#2A132B]/60 flex flex-col lg:flex-row items-center justify-between gap-4 font-body text-xs text-[#FAF7F2]/50">
          <div className="flex flex-wrap items-center gap-6">
            <button onClick={() => openLegal('privacy')} className="hover:text-[#D6C2A5] transition-colors">
              سياسة الخصوصية
            </button>
            <button onClick={() => openLegal('terms')} className="hover:text-[#D6C2A5] transition-colors">
              الشروط والأحكام
            </button>
            <button onClick={() => openLegal('portfolio')} className="hover:text-[#D6C2A5] transition-colors">
              حقوق النشر والتصوير
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-right">
            <span>© {new Date().getFullYear()} استوديو «وَهَج» لتصميم التجارب والأعراس الفاخرة. جميع الحقوق محفوظة.</span>
            <span className="hidden sm:inline text-[#2A132B]">|</span>
            <span className="text-[#D6C2A5]/90 font-medium">
              Designed by{' '}
              <a
                href="https://www.azion-labs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#D6C2A5] hover:underline"
              >
                AZION Labs
              </a>{' '}
              (<a
                href="https://www.azion-labs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-[#D6C2A5]"
              >
                www.azion-labs.com
              </a>)
            </span>
            <button
              onClick={scrollToTop}
              title="العودة لأعلى الصفحة"
              className="p-2 rounded-full bg-[#1A0B1A] border border-[#2A132B] text-[#D6C2A5] hover:border-[#D6C2A5] transition-colors"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
