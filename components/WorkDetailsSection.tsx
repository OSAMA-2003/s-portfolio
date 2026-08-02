"use client";

import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, X, Sparkles, Layers, Eye } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface ProjectDetail {
  id: string;
  coverImage: string;
  galleryImages: string[];
  title: string;
  category: string;
  description: string;
  year: string;
  deliverables: string[];
}

export const PROJECTS_DATA: ProjectDetail[] = [
  {
    id: "brand1",
    coverImage: "/brands/brand1/cover.jfif",
    galleryImages: [
      "/brands/brand1/HN9jC3RXUAE90Om.jfif",
      "/brands/brand1/HN9jEJdWIAAP96E.jfif",
      "/brands/brand1/HN9jExSWgAEegcA.jfif",
    ],
    title: "هوية بصرية متكاملة",
    category: "01 / BRAND IDENTITY",
    description:
      "تصميم هوية بصرية كاملة تجمع بين الأصالة واللمسات الحداثية المعاصرة. تم بناء هذا المشروع لتقديم انطباع بصري قوي يترسخ في أذهان العملاء عبر مختلف الوسائط.",
    year: "2024",
    deliverables: ["تصميم الشعار", "دليل الهوية البصرية", "بطاقات الأعمال", "القرطاسية الرسمية"],
  },
  {
    id: "brand2",
    coverImage: "/brands/brand2/cover.jfif",
    galleryImages: [
      "/brands/brand2/HOaCJ7CXgAAQwfE.jfif",
      "/brands/brand2/HOaCJ7IXAAEGSJ5.jfif",
      "/brands/brand2/HOaCJ7JWMAABEbo.jfif",
    ],
    title: "نظام وتطبيقات العلامة التجارية",
    category: "02 / BRAND SYSTEM",
    description:
      "نظام تصميمي متكامل يضمن الاتساق البصري عبر كافة منصات التواصل والوسائط المطبوعة مع مراعاة أعلى درجات المرونة والتميز الجمالي.",
    year: "2024",
    deliverables: ["نظام التصميم الشامل", "القوالب الرقمية", "إرشادات الاستخدام", "تصاميم تطبيقات الجوال"],
  },
  {
    id: "brand3",
    coverImage: "/brands/brand3/cover.jfif",
    galleryImages: [
      "/brands/brand3/HOO9no8WwAAi5LN.jfif",
      "/brands/brand3/HOO9no9WUAAHAUR.jfif",
      "/brands/brand3/HOO9nowW8AAVEW5.jfif",
    ],
    title: "إخراج فني وحملات إعلانية",
    category: "03 / ART DIRECTION",
    description:
      "إخراج فني لحملة تسويقية متكاملة تعزز حضور العلامة وتجذب الفئة المستهدفة بأسلوب بصري ابتكاري يعكس قيمة المنتج.",
    year: "2023",
    deliverables: ["الإخراج الفني", "المطبوعات الإعلانية", "البوسترات الجدارية", "تصاميم الشوارع"],
  },
  {
    id: "brand4",
    coverImage: "/brands/brand4/HOpECMXXIAAIPd8.jfif",
    galleryImages: [
      "/brands/brand4/HOpCetNW8AAz7oj.jfif",
      "/brands/brand4/HOpDNMHWoAABepW.jfif",
      "/brands/brand4/HOpDNMJWAAAD9UN.jfif",
    ],
    title: "تصاميم التواصل الاجتماعي",
    category: "04 / SOCIAL MEDIA",
    description:
      "سلسلة من المنشورات والتصاميم التفاعلية المصممة خصيصاً لحسابات التواصل الاجتماعي لرفع نسب التفاعل وإبراز قوة الهوية.",
    year: "2024",
    deliverables: ["منشورات انستغرام", "تصاميم القصص (Stories)", "بنرات التويتر", "الإعلانات الممولة"],
  },
  {
    id: "brand5",
    coverImage: "/brands/brand5/cover.jfif",
    galleryImages: [
      "/brands/brand5/HOPSx8qXQAAEW0V.jfif",
      "/brands/brand5/HOPSx8rWcAA0ndU.jfif",
      "/brands/brand5/HOPSx8xWQAAD4Fh.jfif",
    ],
    title: "تصميم التغليف والمطبوعات",
    category: "05 / PACKAGING & PRINT",
    description:
      "ابتكار غلاف منتج فريد يعكس الفخامة والجودة، مع الاهتمام بجميع تفاصيل الطباعة والتجربة اللمسية المتميزة.",
    year: "2023",
    deliverables: ["تصميم التغليف", "العلب الفاخرة", "ملصقات المنتجات", "نماذج ثلاثية الأبعاد (3D)"],
  },
  {
    id: "brand6",
    coverImage: "/brands/brand6/cover.jfif",
    galleryImages: [
      "/brands/brand6/HOVFwpZWcAAPRKF.jfif",
      "/brands/brand6/HOVFwpeWIAAKabz.jfif",
      "/brands/brand6/HOVFwq2WgAAPBNg.jfif",
    ],
    title: "ابتكار الشعارات والرموز الإبداعية",
    category: "06 / LOGO & MARK",
    description:
      "تصميم رموز وشعارات دقيقة تحمل معاني عميقة وسهلة التذكر، مصممة بأعلى معايير الهندسة البصرية والنسب الذهبية.",
    year: "2024",
    deliverables: ["ابتكار الشعار", "هندسة الشبكة البصرية", "الأنماط الزخرفية", "تطبيقات متعددة الاستخدام"],
  },
];

interface WorkDetailsSectionProps {
  selectedProject?: ProjectDetail | null;
  onSelectProject?: (proj: ProjectDetail | null) => void;
}

export default function WorkDetailsSection({
  selectedProject: externalSelectedProject,
  onSelectProject: externalOnSelectProject,
}: WorkDetailsSectionProps) {
  const [internalSelectedProject, setInternalSelectedProject] = useState<ProjectDetail | null>(null);

  const activeProject = externalSelectedProject !== undefined ? externalSelectedProject : internalSelectedProject;

  const setActiveProject = (proj: ProjectDetail | null) => {
    if (externalOnSelectProject) {
      externalOnSelectProject(proj);
    } else {
      setInternalSelectedProject(proj);
    }
  };

  const handleNextProject = () => {
    if (!activeProject) return;
    const currentIndex = PROJECTS_DATA.findIndex((p) => p.id === activeProject.id);
    const nextIndex = (currentIndex + 1) % PROJECTS_DATA.length;
    setActiveProject(PROJECTS_DATA[nextIndex]);
  };

  const handlePrevProject = () => {
    if (!activeProject) return;
    const currentIndex = PROJECTS_DATA.findIndex((p) => p.id === activeProject.id);
    const prevIndex = (currentIndex - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length;
    setActiveProject(PROJECTS_DATA[prevIndex]);
  };

  return (
    <section className="py-28 bg-[#07090a] relative overflow-hidden text-right" id="work-details" dir="rtl">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[#00dce5]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6 border-b border-white/10 pb-8">
          <div>
            <span className="font-mono text-xs text-[#00dce5] tracking-widest uppercase mb-3 block font-bold">
              معرض التفاصيل الكاملة
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-bold flex items-center gap-3">
              <span>تفاصيل مخرجات الأعمال</span>
              <Layers className="w-8 h-8 text-[#00dce5]" />
            </h2>
          </div>

          <p className="text-white/60 max-w-md text-sm sm:text-base leading-relaxed">
            استعرض المعرض الشامل لكل مشروع مع جميع ملحقات التصميم والصور التوضيحية.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((proj) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-white/[0.03] border border-white/10 rounded-3xl overflow-hidden hover:border-[#00dce5]/50 hover:bg-white/[0.05] transition-all duration-500 group flex flex-col justify-between"
            >
              {/* Cover Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <img
                  src={proj.coverImage}
                  alt={proj.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                <span className="absolute top-4 right-4 bg-black/70 backdrop-blur-md text-[#00dce5] text-xs font-mono px-3 py-1 rounded-full border border-[#00dce5]/30">
                  {proj.category}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col gap-4 text-right flex-grow">
                <h3 className="font-serif text-xl sm:text-2xl text-white font-bold group-hover:text-[#00dce5] transition-colors">
                  {proj.title}
                </h3>
                <p className="text-white/60 text-xs sm:text-sm leading-relaxed line-clamp-2">
                  {proj.description}
                </p>

                {/* Deliverables Badges */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {proj.deliverables.map((item, idx) => (
                    <span
                      key={idx}
                      className="bg-white/5 text-white/70 text-[11px] px-2.5 py-1 rounded-lg border border-white/10"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0 mt-auto">
                <button
                  onClick={() => setActiveProject(proj)}
                  className="w-full py-3.5 bg-[#00dce5]/10 border border-[#00dce5]/30 text-[#00dce5] rounded-2xl font-bold text-xs hover:bg-[#00dce5] hover:text-black transition-all flex items-center justify-center gap-2 group-hover:shadow-[0_0_25px_rgba(0,220,229,0.35)]"
                >
                  <Eye className="w-4 h-4" />
                  <span>استعرض صور وتفاصيل المشروع</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full Work Details Modal Overlay */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-2xl overflow-y-auto flex justify-center p-4 sm:p-8"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-[#0b0d0e] border border-white/15 rounded-3xl w-full max-w-5xl my-auto overflow-hidden relative shadow-[0_0_80px_rgba(0,220,229,0.25)] text-right"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-6 left-6 z-30 w-11 h-11 rounded-full bg-white/10 hover:bg-[#00dce5] hover:text-black text-white flex items-center justify-center transition-all border border-white/20"
                aria-label="إغلاق"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Cover Banner */}
              <div className="relative w-full h-[300px] sm:h-[400px] overflow-hidden bg-black">
                <img
                  src={activeProject.coverImage}
                  alt={activeProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d0e] via-black/40 to-transparent" />

                <div className="absolute bottom-6 right-6 left-6 flex flex-col gap-2">
                  <span className="font-mono text-xs text-[#00dce5] tracking-widest uppercase font-bold">
                    {activeProject.category}
                  </span>
                  <h3 className="font-serif text-3xl sm:text-5xl font-bold text-white">
                    {activeProject.title}
                  </h3>
                </div>
              </div>

              {/* Modal Content Body */}
              <div className="p-6 sm:p-10 space-y-10">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 bg-white/[0.03] p-6 rounded-2xl border border-white/10">
                  <div>
                    <span className="block text-xs text-white/50 font-mono mb-1">
                      سنة التنفيذ
                    </span>
                    <span className="font-bold text-white text-base sm:text-lg">
                      {activeProject.year}
                    </span>
                  </div>
                  <div>
                    <span className="block text-xs text-white/50 font-mono mb-1">
                      مجال المشروع
                    </span>
                    <span className="font-bold text-[#00dce5] text-base sm:text-lg">
                      {activeProject.category.split("/")[1] || activeProject.category}
                    </span>
                  </div>
                  <div className="col-span-2">
                    <span className="block text-xs text-white/50 font-mono mb-1">
                      مخرجات التصميم
                    </span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {activeProject.deliverables.map((item, i) => (
                        <span
                          key={i}
                          className="bg-[#00dce5]/10 text-[#00dce5] text-xs px-2.5 py-1 rounded-lg border border-[#00dce5]/30 font-medium"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Project Narrative */}
                <div>
                  <h4 className="font-serif text-xl font-bold text-white mb-3">
                    عن المشروع والاستراتيجية
                  </h4>
                  <p className="text-white/70 leading-relaxed text-base sm:text-lg">
                    {activeProject.description}
                  </p>
                </div>

                {/* Gallery Images Grid */}
                <div>
                  <h4 className="font-serif text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <span>صور وتطبيقات المشروع البصرية</span>
                    <span className="text-xs text-[#00dce5] font-mono font-normal">
                      ({activeProject.galleryImages.length} صور)
                    </span>
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {activeProject.galleryImages.map((imgSrc, index) => (
                      <div
                        key={index}
                        className="rounded-2xl overflow-hidden border border-white/10 bg-black/40 aspect-[4/3] group relative shadow-lg"
                      >
                        <img
                          src={imgSrc}
                          alt={`${activeProject.title} ${index + 1}`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Switcher */}
                <div className="flex items-center justify-between border-t border-white/10 pt-8 mt-6">
                  <button
                    onClick={handlePrevProject}
                    className="flex items-center gap-2 text-white/70 hover:text-[#00dce5] text-sm font-bold transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                    <span>المشروع السابق</span>
                  </button>

                  <button
                    onClick={handleNextProject}
                    className="flex items-center gap-2 text-white/70 hover:text-[#00dce5] text-sm font-bold transition-colors"
                  >
                    <span>المشروع التالي</span>
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
