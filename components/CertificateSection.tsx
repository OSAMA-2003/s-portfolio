"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  CheckCircle2,
  Eye,
  ShieldCheck,
  X,
  CalendarDays,
  BadgeCheck,
} from "lucide-react";

export default function CertificateSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section
      className="py-24 bg-[#050708] relative overflow-hidden border-t border-white/10"
      id="certificate"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#00dce5]/10 rounded-full blur-[160px] pointer-events-none" />

      <div
        className="max-w-[1440px] mx-auto px-6 lg:px-16 relative z-10"
        dir="rtl"
      >
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-mono text-xs text-[#00dce5] tracking-widest uppercase mb-3 font-bold flex items-center gap-2">
            <ShieldCheck className="w-4 h-4" />
            <span>الاعتماد والتوثيق الرسمي</span>
          </span>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-bold mb-4">
            وثيقة ممارس حر
          </h2>

          <p className="text-white/60 max-w-2xl text-sm sm:text-base leading-relaxed">
            وثيقة ممارس حر صادرة من وزارة الموارد البشرية والتنمية الاجتماعية
            في المملكة العربية السعودية، تثبت تسجيل الممارس كمستقل في مجال
            تصميم الأزياء.
          </p>
        </div>

        {/* Main Card */}
        <div className="max-w-6xl mx-auto bg-white/[0.03] border border-white/10 rounded-3xl p-5 sm:p-8 lg:p-10 backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.8)] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* Information */}
          <div className="lg:col-span-5 space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#00dce5]/10 border border-[#00dce5]/30 text-[#00dce5] px-4 py-2 rounded-full text-xs font-bold">
              <BadgeCheck className="w-4 h-4" />
              <span>وثيقة رسمية</span>
            </div>

            <div>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-bold leading-tight mb-4">
                ممارس حر معتمد في مجال تصميم الأزياء
              </h3>

              <p className="text-white/65 text-sm sm:text-base leading-relaxed">
                وثيقة رسمية صادرة عن{" "}
                <span className="text-white font-semibold">
                  وزارة الموارد البشرية والتنمية الاجتماعية السعودية
                </span>{" "}
                لإثبات تسجيل الممارس كمستقل في مجال{" "}
                <span className="text-[#00dce5] font-semibold">
                  Graphic Designing
                </span>
                .
              </p>
            </div>

            {/* Details */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-white/80 text-sm">
                <CheckCircle2 className="w-4 h-4 text-[#00dce5] shrink-0" />
                <span>
                  صادرة من وزارة الموارد البشرية والتنمية الاجتماعية
                </span>
              </div>

              <div className="flex items-center gap-3 text-white/80 text-sm">
                <CheckCircle2 className="w-4 h-4 text-[#00dce5] shrink-0" />
                <span>مجال الممارسة: تصميم الجرافيك</span>
              </div>

              <div className="flex items-center gap-3 text-white/80 text-sm">
                <CalendarDays className="w-4 h-4 text-[#00dce5] shrink-0" />
                <span>تاريخ الإصدار: 10 فبراير 2025</span>
              </div>


            </div>

            {/* Official ID */}
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-4">
              <p className="text-white/40 text-[11px] mb-1">
                Authorized Document ID
              </p>

              <p className="text-white font-mono text-sm tracking-wider">
                FL-249155243
              </p>
            </div>

            {/* Button */}
            <button
              onClick={() => setModalOpen(true)}
              className="bg-[#00dce5] text-black px-7 py-3.5 rounded-full font-bold text-xs sm:text-sm hover:shadow-[0_0_35px_rgba(0,220,229,0.7)] transition-all inline-flex items-center gap-2"
            >
              <Eye className="w-4 h-4" />
              <span>عرض الوثيقة كاملة</span>
            </button>
          </div>

          {/* Certificate Image */}
          <div
            className="lg:col-span-7 relative group cursor-pointer"
            onClick={() => setModalOpen(true)}
          >
            <div className="relative rounded-2xl overflow-hidden border-2 border-white/15 group-hover:border-[#00dce5] transition-all duration-500 shadow-2xl bg-white">
              <img
                src="/certificate.jpg"
                alt="وثيقة ممارس حر الصادرة من وزارة الموارد البشرية والتنمية الاجتماعية"
                className="block w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                draggable={false}
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="bg-[#00dce5] text-black text-xs font-bold px-5 py-3 rounded-full shadow-lg flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  تكبير الوثيقة
                </span>
              </div>
            </div>

            <p className="text-center text-white/30 text-xs mt-4">
              اضغط على الوثيقة لعرضها بحجم أكبر
            </p>
          </div>
        </div>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6"
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-7xl max-h-[95vh] bg-black rounded-2xl overflow-hidden border border-white/20 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 z-30 w-11 h-11 rounded-full bg-black/80 border border-white/20 text-white hover:text-[#00dce5] hover:border-[#00dce5] flex items-center justify-center transition-all"
                aria-label="إغلاق"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image */}
              <div className="w-full max-h-[95vh] overflow-auto flex items-center justify-center p-3 sm:p-6">
                <img
                  src="/certificate.jpg"
                  alt="وثيقة ممارس حر"
                  className="max-w-full h-auto object-contain rounded-lg"
                  draggable={false}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}