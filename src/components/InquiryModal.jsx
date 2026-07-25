import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, ArrowLeft, ArrowRight, MessageSquare, Phone } from 'lucide-react';

export default function InquiryModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    eventType: 'أعراس الوجاهة والفخامة',
    location: 'العُلا',
    eventDate: '',
    guestCount: '٢٠٠ - ٥٠٠ ضيف',
    stylePreference: 'صحراوي نحتي فاخر',
    sensoryPrompt: '',
    clientName: '',
    phone: '',
    email: '',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleNext = () => setStep((prev) => Math.min(prev + 1, 5));
  const handlePrev = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappMessage = encodeURIComponent(
    `مرحباً استوديو «وَهَج»، يرغب العميل ${formData.clientName || 'المرتقب'} في حجز استشارة خاصة لمناسبة (${formData.eventType}) في وجهة (${formData.location}).`
  );

  return (
    <div className="fixed inset-0 z-50 bg-[#0B080C]/90 backdrop-blur-2xl p-4 sm:p-8 flex items-center justify-center overflow-y-auto animate-fade-in">
      <div className="max-w-2xl w-full bg-[#1A0B1A] border border-[#D6C2A5]/40 rounded-3xl p-6 sm:p-12 relative text-right shadow-2xl my-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 left-6 p-2.5 rounded-full bg-[#0B080C] border border-[#2A132B] text-[#FAF7F2] hover:border-[#D6C2A5] transition-colors"
        >
          <X size={18} />
        </button>

        {!submitted ? (
          <div>
            {/* Step Progress Indicators */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#2A132B]">
              <div className="flex items-center gap-2 text-xs font-body text-[#D6C2A5]">
                <Sparkles size={14} className="text-[#E67E22]" />
                <span>رحلة الاستفسار والاستشارة — الخطوة {step} من ٥</span>
              </div>
              <div className="flex gap-1.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span
                    key={i}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === step ? 'w-6 bg-[#D6C2A5]' : i < step ? 'w-2 bg-[#E67E22]' : 'w-2 bg-[#FAF7F2]/20'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Form Step Content */}
            <form onSubmit={handleSubmit}>
              
              {/* STEP 1: Event Type */}
              {step === 1 && (
                <div className="space-y-6 animate-fade-in">
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#FAF7F2]">
                    ما هو طابع المناسبة التي تُخططون لها؟
                  </h3>
                  <p className="font-body text-xs text-[#FAF7F2]/70">
                    اختر الفئة الأساسية لتوجيه فريق السينوغرافيا والتصميم.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      'أعراس الوجاهة والفخامة',
                      'أعراس الوجهات (العلا والبحر الأحمر)',
                      'المناسبات الخاصة والفلل',
                      'تجارب العلامات التجارية والعروض'
                    ].map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setFormData({ ...formData, eventType: item })}
                        className={`p-5 rounded-2xl text-right font-heading text-sm transition-all border ${
                          formData.eventType === item
                            ? 'bg-[#D6C2A5] text-[#0B080C] font-bold border-[#D6C2A5]'
                            : 'bg-[#0B080C] text-[#FAF7F2]/80 border-[#2A132B] hover:border-[#D6C2A5]/40'
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 2: Location & Date */}
              {step === 2 && (
                <div className="space-y-6 animate-fade-in">
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#FAF7F2]">
                    الوجهة والموعد المرتقب
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <label className="block font-heading text-xs text-[#D6C2A5] mb-2">اختر الوجهة المفضلة:</label>
                      <select
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full p-4 rounded-xl bg-[#0B080C] border border-[#2A132B] text-sm text-[#FAF7F2] focus:border-[#D6C2A5] focus:outline-none"
                      >
                        <option value="العُلا">العُلا — صحراء حرة عويرض</option>
                        <option value="الرياض">الرياض — القصور والأحياء الملكية</option>
                        <option value="جدة">جدة — واجهة الكورنيش والبحر</option>
                        <option value="الدرعية">الدرعية — البساتين التاريخية</option>
                        <option value="البحر الأحمر">وجهة البحر الأحمر للجزر الخاصة</option>
                        <option value="وجهة عالمية">وجهة عالمية خارجية</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-heading text-xs text-[#D6C2A5] mb-2">التاريخ التقريبي للمناسبة:</label>
                      <input
                        type="text"
                        placeholder="مثال: الشتاء القادم / نوفمبر ٢٠٢٦"
                        value={formData.eventDate}
                        onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                        className="w-full p-4 rounded-xl bg-[#0B080C] border border-[#2A132B] text-sm text-[#FAF7F2] focus:border-[#D6C2A5] focus:outline-none"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: Guests & Style */}
              {step === 3 && (
                <div className="space-y-6 animate-fade-in">
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#FAF7F2]">
                    عدد الضيوف والأسلوب البصري
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <label className="block font-heading text-xs text-[#D6C2A5] mb-2">نطاق عدد الحضور المتوقع:</label>
                      <select
                        value={formData.guestCount}
                        onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                        className="w-full p-4 rounded-xl bg-[#0B080C] border border-[#2A132B] text-sm text-[#FAF7F2] focus:border-[#D6C2A5] focus:outline-none"
                      >
                        <option value="أقل من ١٠٠ ضيف">أقل من ١٠٠ ضيف (حميمية خاصة)</option>
                        <option value="١٠٠ - ٣٠٠ ضيف">١٠٠ - ٣٠٠ ضيف</option>
                        <option value="٣٠٠ - ٦٠٠ ضيف">٣٠٠ - ٦٠٠ ضيف</option>
                        <option value="أكثر من ٧٠٠ ضيف">أكثر من ٧٠٠ ضيف (زفاف ملكي كبير)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-heading text-xs text-[#D6C2A5] mb-2">الأسلوب المعماري المفضل:</label>
                      <select
                        value={formData.stylePreference}
                        onChange={(e) => setFormData({ ...formData, stylePreference: e.target.value })}
                        className="w-full p-4 rounded-xl bg-[#0B080C] border border-[#2A132B] text-sm text-[#FAF7F2] focus:border-[#D6C2A5] focus:outline-none"
                      >
                        <option value="صحراوي نحتي فاخر">صحراوي نحتي فاخر (العلا)</option>
                        <option value="كريستالي ساحلي حديث">كريستالي ساحلي حديث (جدة)</option>
                        <option value="معماري شامخ وقصور">معماري شامخ وقصور (الرياض)</option>
                        <option value="طيني نبتي أصيل معاصر">طيني نجدي أصيل معاصر (الدرعية)</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 4: Emotional & Sensory Prompt */}
              {step === 4 && (
                <div className="space-y-6 animate-fade-in">
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#FAF7F2] leading-tight">
                    صف لنا الشعور الذي تريدون أن يتذكره الضيوف
                  </h3>
                  <p className="font-body text-xs text-[#D6C2A5]">
                    سؤالنا الأيقوني في استوديو «وَهَج»: ما هي العاطفة أو النغمة أو الانطباع البصري الذي تسعون لتركه؟
                  </p>

                  <textarea
                    rows={4}
                    placeholder="مثال: نريد أن يشعر الضيوف وكأنهم دخلوا واحة سحرية هادئة تعزف فيها أوتار العود بتناغم مع ضوء الشموع الدافئة..."
                    value={formData.sensoryPrompt}
                    onChange={(e) => setFormData({ ...formData, sensoryPrompt: e.target.value })}
                    className="w-full p-4 rounded-2xl bg-[#0B080C] border border-[#2A132B] text-sm text-[#FAF7F2] placeholder-[#FAF7F2]/30 focus:border-[#D6C2A5] focus:outline-none font-body leading-relaxed"
                  />
                </div>
              )}

              {/* STEP 5: Contact Info */}
              {step === 5 && (
                <div className="space-y-6 animate-fade-in">
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#FAF7F2]">
                    تفاصيل التواصل الخاص
                  </h3>
                  <p className="font-body text-xs text-[#FAF7F2]/70">
                    سنقوم بإعداد ملف دراسة أولي وإحالة الطلب إلى كبير مهندسي الاستوديو.
                  </p>

                  <div className="space-y-4">
                    <input
                      type="text"
                      required
                      placeholder="الاسم الكريم / اسم العائلة *"
                      value={formData.clientName}
                      onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                      className="w-full p-4 rounded-xl bg-[#0B080C] border border-[#2A132B] text-sm text-[#FAF7F2] focus:border-[#D6C2A5] focus:outline-none"
                    />

                    <input
                      type="tel"
                      required
                      placeholder="رقم الهاتف (الواتساب) *"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-4 rounded-xl bg-[#0B080C] border border-[#2A132B] text-sm text-[#FAF7F2] focus:border-[#D6C2A5] focus:outline-none"
                    />

                    <input
                      type="email"
                      required
                      placeholder="البريد الإلكتروني *"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-4 rounded-xl bg-[#0B080C] border border-[#2A132B] text-sm text-[#FAF7F2] focus:border-[#D6C2A5] focus:outline-none"
                    />
                  </div>
                </div>
              )}

              {/* Step Navigation Controls */}
              <div className="pt-8 mt-8 border-t border-[#2A132B] flex items-center justify-between">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="px-5 py-2.5 rounded-full bg-[#0B080C] text-[#FAF7F2] font-body text-xs hover:bg-[#2A132B] transition-colors flex items-center gap-2"
                  >
                    <ArrowRight size={14} />
                    <span>السابق</span>
                  </button>
                ) : <div />}

                {step < 5 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-8 py-3 rounded-full bg-[#D6C2A5] text-[#0B080C] font-heading font-bold text-sm hover:bg-[#C7B08B] transition-colors flex items-center gap-2"
                  >
                    <span>المتابعة</span>
                    <ArrowLeft size={16} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-10 py-3.5 rounded-full bg-gradient-to-r from-[#D6C2A5] to-[#D4A89C] text-[#0B080C] font-heading font-extrabold text-sm shadow-xl hover:scale-105 transition-all flex items-center gap-2"
                  >
                    <Sparkles size={16} />
                    <span>إرسال طلب الاستشارة الخاصة</span>
                  </button>
                )}
              </div>

            </form>
          </div>
        ) : (
          /* Confirmation Screen */
          <div className="text-center py-10 space-y-6 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-[#2ECC71]/10 border border-[#2ECC71] flex items-center justify-center mx-auto text-[#2ECC71]">
              <CheckCircle2 size={36} />
            </div>

            <h3 className="font-display text-3xl font-black text-[#FAF7F2]">
              تم استلام طلبكم بنجاح، مرحباً بكم في عالم «وَهَج»
            </h3>

            <p className="font-body text-[#FAF7F2]/80 text-base max-w-md mx-auto leading-relaxed">
              يقوم مدير الضيافة والاستشارة الخاصة بمراجعة بياناتكم وسيتم التواصل معكم في غضون ٢٤ ساعة لتحديد موعد الاستشارة المغلقة في استوديو الرياض أو جدة.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#25D366] text-[#0B080C] font-heading font-bold text-sm flex items-center justify-center gap-2 shadow-xl hover:scale-105 transition-all"
              >
                <MessageSquare size={16} />
                <span>فتح المحادثة الفورية عبر الواتساب</span>
              </a>

              <button
                onClick={onClose}
                className="px-6 py-3 rounded-full bg-[#0B080C] border border-[#2A132B] text-[#FAF7F2] font-body text-xs hover:border-[#D6C2A5] transition-colors"
              >
                العودة للموقع
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
