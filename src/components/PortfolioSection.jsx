import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS } from '../data/studioData';
import { Sparkles, MapPin, Users, Eye, X, ArrowLeft } from 'lucide-react';

export default function PortfolioSection({ openInquiry }) {
  const [filter, setFilter] = useState('all');
  const [activeDrawerProject, setActiveDrawerProject] = useState(null);
  const [activeLightboxImage, setActiveLightboxImage] = useState(null);

  const filteredProjects = filter === 'all'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(p => p.category === filter);

  return (
    <section className="py-24 bg-gradient-to-b from-[#0B080C] via-[#1A0B1A]/40 to-[#0B080C] text-[#FAF7F2] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1A0B1A] border border-[#D6C2A5]/30 text-[#D6C2A5] text-xs font-body mb-4">
            <Sparkles size={14} className="text-[#E67E22]" />
            <span>معرض المشاريع والقصص</span>
          </span>

          <h2 className="font-display text-4xl lg:text-6xl font-black text-[#FAF7F2] leading-tight mb-6">
            روائع الأعراس والمناسبات الاستثنائية
          </h2>

          <p className="font-body text-[#FAF7F2]/70 text-lg">
            تصفّح نماذج سينمائية لمشاريعنا المنفذة بين العلا، الرياض، جدة، والدرعية، حيث تجسّدت الرؤية إلى واقعٍ مبهر.
          </p>
        </div>

        {/* Filters */}
        <div className="flex items-center justify-center flex-wrap gap-3 mb-16">
          <button
            onClick={() => setFilter('all')}
            className={`px-5 py-2 rounded-full font-body text-xs sm:text-sm transition-all ${
              filter === 'all' ? 'bg-[#D6C2A5] text-[#0B080C] font-bold' : 'bg-[#1A0B1A] text-[#FAF7F2]/70 border border-[#2A132B]'
            }`}
          >
            جميع الأعمال
          </button>
          <button
            onClick={() => setFilter('destination-weddings')}
            className={`px-5 py-2 rounded-full font-body text-xs sm:text-sm transition-all ${
              filter === 'destination-weddings' ? 'bg-[#D6C2A5] text-[#0B080C] font-bold' : 'bg-[#1A0B1A] text-[#FAF7F2]/70 border border-[#2A132B]'
            }`}
          >
            أعراس الوجهات (العلا والبحر الأحمر)
          </button>
          <button
            onClick={() => setFilter('royal-weddings')}
            className={`px-5 py-2 rounded-full font-body text-xs sm:text-sm transition-all ${
              filter === 'royal-weddings' ? 'bg-[#D6C2A5] text-[#0B080C] font-bold' : 'bg-[#1A0B1A] text-[#FAF7F2]/70 border border-[#2A132B]'
            }`}
          >
            الأعراس الكبرى والقصور
          </button>
          <button
            onClick={() => setFilter('intimate-gatherings')}
            className={`px-5 py-2 rounded-full font-body text-xs sm:text-sm transition-all ${
              filter === 'intimate-gatherings' ? 'bg-[#D6C2A5] text-[#0B080C] font-bold' : 'bg-[#1A0B1A] text-[#FAF7F2]/70 border border-[#2A132B]'
            }`}
          >
            المناسبات الخاصة والفلل
          </button>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-[#1A0B1A]/40 border border-[#2A132B] rounded-3xl overflow-hidden shadow-2xl hover:border-[#D6C2A5]/50 transition-all duration-500 flex flex-col justify-between"
            >
              {/* Cover Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B080C] via-transparent to-transparent opacity-90" />
                
                {/* Location Badge */}
                <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 rounded-full bg-[#0B080C]/70 backdrop-blur-md border border-[#2A132B] text-xs font-body text-[#D6C2A5]">
                  <MapPin size={12} className="text-[#E67E22]" />
                  <span>{project.location}</span>
                </div>

                {/* Color Palette Indicators */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 p-1.5 rounded-full bg-[#0B080C]/70 backdrop-blur-md border border-[#2A132B]">
                  {project.palette.map((color, i) => (
                    <span
                      key={i}
                      className="w-3 h-3 rounded-full border border-[#FAF7F2]/20"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8 text-right space-y-4 flex-1 flex flex-col justify-between">
                <div>
                  <span className="font-body text-xs text-[#E67E22] uppercase tracking-wider block mb-1">
                    {project.style} • {project.season} {project.year}
                  </span>
                  <h3 className="font-display text-3xl font-bold text-[#FAF7F2] group-hover:text-[#D6C2A5] transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-body text-sm text-[#FAF7F2]/70 mt-2 line-clamp-2">
                    {project.subtitle}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#2A132B]/80 flex items-center justify-between">
                  <div className="flex items-center gap-4 text-xs text-[#FAF7F2]/50 font-body">
                    <span className="flex items-center gap-1">
                      <Users size={12} /> {project.guests}
                    </span>
                  </div>

                  <button
                    onClick={() => setActiveDrawerProject(project)}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2A132B] text-[#D6C2A5] font-heading text-xs font-bold hover:bg-[#D6C2A5] hover:text-[#0B080C] transition-all"
                  >
                    <span>استكشف تفاصيل القصة</span>
                    <Eye size={14} />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Case Study Detail Drawer Modal */}
      {activeDrawerProject && (
        <div className="fixed inset-0 z-50 bg-[#0B080C]/90 backdrop-blur-2xl overflow-y-auto p-4 sm:p-8 flex justify-center items-start animate-fade-in">
          <div className="max-w-4xl w-full bg-[#1A0B1A] border border-[#D6C2A5]/30 rounded-3xl p-6 sm:p-12 relative text-right shadow-2xl my-8">
            
            {/* Close Drawer Button */}
            <button
              onClick={() => setActiveDrawerProject(null)}
              className="absolute top-6 left-6 p-3 rounded-full bg-[#0B080C] border border-[#2A132B] text-[#FAF7F2] hover:border-[#D6C2A5] transition-colors"
            >
              <X size={20} />
            </button>

            {/* Header info */}
            <div className="space-y-3 mb-8">
              <span className="inline-block px-3 py-1 rounded-full bg-[#E67E22]/10 text-[#E67E22] font-body text-xs">
                {activeDrawerProject.location} • {activeDrawerProject.guests}
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-black text-[#FAF7F2]">
                {activeDrawerProject.title}
              </h2>
              <p className="font-body text-lg text-[#D6C2A5]">
                {activeDrawerProject.subtitle}
              </p>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {activeDrawerProject.gallery.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`صورة ${idx + 1}`}
                  onClick={() => setActiveLightboxImage(img)}
                  className="w-full h-64 object-cover rounded-2xl border border-[#2A132B] cursor-pointer hover:opacity-90 transition-opacity"
                />
              ))}
            </div>

            {/* Concept Story */}
            <div className="space-y-4 mb-8 p-6 rounded-2xl bg-[#0B080C] border border-[#2A132B]">
              <h3 className="font-heading text-xl font-bold text-[#D6C2A5]">مفهوم القصة والسينوغرافيا</h3>
              <p className="font-body text-base text-[#FAF7F2]/80 leading-relaxed">
                {activeDrawerProject.conceptStory}
              </p>
            </div>

            {/* Design Specifications */}
            <div className="space-y-4 mb-8">
              <h3 className="font-heading text-xl font-bold text-[#FAF7F2]">مواصفات وتفاصيل التنفيذ:</h3>
              <ul className="space-y-2 font-body text-sm text-[#FAF7F2]/80 list-disc list-inside">
                {activeDrawerProject.designNotes.map((note, i) => (
                  <li key={i}>{note}</li>
                ))}
              </ul>
            </div>

            {/* Inquiry CTA inside modal */}
            <div className="pt-6 border-t border-[#2A132B] flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={() => {
                  setActiveDrawerProject(null);
                  openInquiry();
                }}
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D6C2A5] to-[#D4A89C] text-[#0B080C] font-heading font-bold text-sm shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                <span>صمّم رحلتك المماثلة</span>
                <ArrowLeft size={16} />
              </button>

              <button
                onClick={() => setActiveDrawerProject(null)}
                className="text-xs font-body text-[#FAF7F2]/60 hover:text-[#FAF7F2]"
              >
                إغلاق النافذة
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Lightbox Image View */}
      {activeLightboxImage && (
        <div className="fixed inset-0 z-50 bg-[#0B080C]/95 backdrop-blur-2xl p-4 flex items-center justify-center">
          <button
            onClick={() => setActiveLightboxImage(null)}
            className="absolute top-6 left-6 p-3 rounded-full bg-[#1A0B1A] border border-[#2A132B] text-[#FAF7F2]"
          >
            <X size={24} />
          </button>
          <img
            src={activeLightboxImage}
            alt="صورة مكبرة"
            className="max-w-full max-h-[85vh] object-contain rounded-xl border border-[#D6C2A5]/30 shadow-2xl"
          />
        </div>
      )}

    </section>
  );
}
