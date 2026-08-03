"use client";

import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  type CSSProperties,
} from "react";
import { ArrowLeft, ArrowRight, X, Layers, Eye } from "lucide-react";
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
      "/brands/brand1/HOKV7dFXUAA_B-L.jfif",

      "/brands/brand1/HOKV7duWIAA9qsd.jfif",
      "/brands/brand1/HOKWFkAWsAAQkPc.jfif",
    ],
    title: "هوية بصرية متكاملة",
    category: "01 / BRAND IDENTITY",
    description:
      "تصميم هوية بصرية كاملة تجمع بين الأصالة واللمسات الحداثية المعاصرة. تم بناء هذا المشروع لتقديم انطباع بصري قوي يترسخ في أذهان العملاء عبر مختلف الوسائط.",
    year: "2026",
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
    year: "2026",
    deliverables: ["نظام التصميم الشامل", "القوالب الرقمية", "إرشادات الاستخدام", "تصاميم تطبيقات الجوال"],
  },
  {
    id: "brand3",
    coverImage: "/brands/brand3/cover.jfif",
    galleryImages: [
      "/brands/brand3/GyeVxZxXkAEnlxs.jfif",
      "/brands/brand3/aa.jfif",
      "/brands/brand3/sfds.jfif",
    ],
    title: "إخراج فني وحملات إعلانية",
    category: "03 / ART DIRECTION",
    description:
      "إخراج فني لحملة تسويقية متكاملة تعزز حضور العلامة وتجذب الفئة المستهدفة بأسلوب بصري ابتكاري يعكس قيمة المنتج.",
    year: "2026",
    deliverables: ["الإخراج الفني", "المطبوعات الإعلانية", "البوسترات الجدارية", "تصاميم الشوارع"],
  },
  {
    id: "brand4",
    coverImage: "/brands/brand4/cover.jfif",
    galleryImages: [
      "/brands/brand4/HOpCetNW8AAz7oj.jfif",
      "/brands/brand4/HOpDNMHWoAABepW.jfif",
      "/brands/brand4/HOpDNMJWAAAD9UN.jfif",
    ],
    title: "تصاميم التواصل الاجتماعي",
    category: "04 / SOCIAL MEDIA",
    description:
      "سلسلة من المنشورات والتصاميم التفاعلية المصممة خصيصاً لحسابات التواصل الاجتماعي لرفع نسب التفاعل وإبراز قوة الهوية.",
    year: "2026",
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
    year: "2026",
    deliverables: ["تصميم التغليف", "العلب الفاخرة", "ملصقات المنتجات", "نماذج ثلاثية الأبعاد (3D)"],
  },
  {
    id: "brand6",
    coverImage: "/brands/brand6/cover.jfif",
    galleryImages: [
      "/brands/brand6/G-unVbSWUAAc049.jfif",
      "/brands/brand6/G-unVbybQAQLYo6.jfif",
      "/brands/brand6/wffa.jfif",
    ],
    title: "ابتكار الشعارات والرموز الإبداعية",
    category: "06 / LOGO & MARK",
    description:
      "تصميم رموز وشعارات دقيقة تحمل معاني عميقة وسهلة التذكر، مصممة بأعلى معايير الهندسة البصرية والنسب الذهبية.",
    year: "2026",
    deliverables: ["ابتكار الشعار", "هندسة الشبكة البصرية", "الأنماط الزخرفية", "تطبيقات متعددة الاستخدام"],
  },
  {
    id: "brand7",
    coverImage: "/brands/brand7/cover.jfif",
    galleryImages: [
      "/brands/brand7/GzEKDg1WwAA6yCT.jfif",
      "/brands/brand7/GzEKDhGXgAApdcH.jfif",
      "/brands/brand7/GzEKDhUW4AAXbvY.jfif",
    ],
    title: "هوية تجارية معاصرة",
    category: "07 / MODERN IDENTITY",
    description:
      "تطوير هوية تجارية عصرية وشاملة تعتمد على مبادئ التجريد الهندسي والتناغم الأيقوني لتقديم علامة تجارية فريدة.",
    year: "2026",
    deliverables: ["تطوير الهوية", "الدليل الارشادي", "التصاميم الرقمية", "المطبوعات الفاخرة"],
  },
  {
    id: "brand8",
    coverImage: "/brands/brand8/cover.jfif",
    galleryImages: [
      "/brands/brand8/HG35CMwagAAJJQN.jfif",
      "/brands/brand8/HG35CMxaAAALEPM.jfif",
      "/brands/brand8/HG35CMxacAAthNp.jfif",
    ],
    title: "تصاميم المنتجات الرقمية",
    category: "08 / DIGITAL PRODUCTS",
    description:
      "واجهات ومكونات بصرية حديثة مصممة للمنتجات والتطبيقات الرقمية لضمان تجربة مستخدم مبهرة وجذابة.",
    year: "2026",
    deliverables: ["واجهات المستخدم", "الأيقونات المخصصة", "قوالب العرض", "أنظمة الألوان"],
  },
  {
    id: "brand9",
    coverImage: "/brands/brand9/cover.jfif",
    galleryImages: [
      "/brands/brand9/Gt_bs0GXsAApkg-.jfif",
      "/brands/brand9/Gt_bs0JWwAEG7-2.jfif",
    ],
    title: "دليل وتطبيقات الهوية البصرية",
    category: "09 / BRAND GUIDELINES",
    description:
      "صياغة وتنفيذ دليل متكامل لتطبيقات العلامة التجارية يشمل استخدام الخطوط، الألوان، وأساليب العرض والتسويق.",
    year: "2026",
    deliverables: ["كتاب الهوية", "قواعد الطباعة", "تطبيقات القرطاسية", "نماذج الإعلانات"],
  },
  {
    id: "brand10",
    coverImage: "/brands/brand10/cover.jpg",
    galleryImages: [
      "/brands/brand10/HNOkQzAW4AAmC7R.jfif",
      "/brands/brand10/HNOkuqmWQAAK0xV.jfif",
    ],
    title: "التصميم الإعلاني والبصري",
    category: "10 / ADVERTISING DESIGN",
    description:
      "تصاميم إعلانية مبتكرة موجهة للحملات التسويقية لترسيخ حضور العلامة في الأسواق وإثارة اهتمام الفئة المستهدفة.",
    year: "2026",
    deliverables: ["الحملات الإعلانية", "المطبوعات التسويقية", "بنرات الويب", "البوسترات"],
  },
];

const PERSPECTIVE = 1400;
const SCALE_STEP = 0.15;
const MAX_VISIBLE = 2;
const DEPTH = 220;

export function Smooth3DSlideshow({
  onOpenDetails,
}: {
  onOpenDetails: (proj: ProjectDetail) => void;
}) {
  const list = PROJECTS_DATA;
  const n = list.length;
  const loop = true;
  const [active, setActive] = useState(0);

  const [dimensions, setDimensions] = useState({
    cardWidth: 480,
    cardHeight: 360,
    gap: 8,
    tilt: 10,
    sideTilt: 6,
  });

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 640) {
        const cardW = Math.min(w - 48, 310);
        setDimensions({
          cardWidth: cardW,
          cardHeight: Math.round(cardW * 0.85),
          gap: 5,
          tilt: 6,
          sideTilt: 4,
        });
      } else if (w < 1024) {
        setDimensions({
          cardWidth: 400,
          cardHeight: 310,
          gap: 7,
          tilt: 8,
          sideTilt: 5,
        });
      } else {
        setDimensions({
          cardWidth: 500,
          cardHeight: 380,
          gap: 9,
          tilt: 12,
          sideTilt: 7,
        });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { cardWidth, cardHeight, gap, tilt, sideTilt } = dimensions;

  useEffect(() => {
    setActive((a) => Math.max(0, Math.min(n - 1, a)));
  }, [n]);

  const lockRef = useRef(false);

  const lock = useCallback(() => {
    lockRef.current = true;
    window.setTimeout(() => {
      lockRef.current = false;
    }, 450);
  }, []);

  const step = useCallback(
    (dir: number) => {
      if (lockRef.current) return;
      lock();
      setActive((a) => (((a + dir) % n) + n) % n);
    },
    [n, lock]
  );

  const handleCardClick = useCallback(
    (i: number) => {
      if (lockRef.current) return;
      if (i === active) {
        onOpenDetails(PROJECTS_DATA[i]);
      } else {
        lock();
        setActive(i);
      }
    },
    [active, onOpenDetails, lock]
  );

  // Responsive Professional Touch Swipe Gesture Handling
  const touchStartX = useRef<number | null>(null);
  const touchCurrentX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchCurrentX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    touchCurrentX.current = e.touches[0].clientX;
    const diffX = touchStartX.current - e.touches[0].clientX;
    const diffY = touchStartY.current - e.touches[0].clientY;

    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 10) {
      if (e.cancelable) {
        e.preventDefault();
      }
    }
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchCurrentX.current === null) return;
    const diffX = touchStartX.current - touchCurrentX.current;

    if (Math.abs(diffX) > 25) {
      if (diffX > 0) {
        step(1); // Swipe Left -> Next
      } else {
        step(-1); // Swipe Right -> Prev
      }
    }
    touchStartX.current = null;
    touchCurrentX.current = null;
    touchStartY.current = null;
  };

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        step(1);
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        step(-1);
      }
    },
    [step]
  );

  const rootStyle: CSSProperties = {
    position: "relative",
    width: "100%",
    minHeight: cardHeight + 140,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    perspective: `${PERSPECTIVE}px`,
    overflow: "hidden",
    outline: "none",
  };

  return (
    <div
      style={rootStyle}
      tabIndex={0}
      role="group"
      aria-roledescription="carousel"
      onKeyDown={onKeyDown}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="py-4 select-none touch-none sm:touch-pan-y"
    >


      <div
        style={{
          position: "relative",
          width: cardWidth,
          height: cardHeight,
          transformStyle: "preserve-3d",
        }}
      >
        {list.map((proj, i) => {
          let rel = i - active;
          if (loop) {
            if (rel > n / 2) rel -= n;
            if (rel < -n / 2) rel += n;
          }
          const ax = Math.abs(rel);
          const visible = ax <= MAX_VISIBLE;
          const isActive = rel === 0;
          const sc = Math.max(0.4, 1 - ax * SCALE_STEP);
          const tx = rel * (gap * 28);
          const tz = -ax * DEPTH;
          const ry = -rel * tilt;
          const rz = rel * sideTilt;

          const cardStyle: CSSProperties = {
            position: "absolute",
            left: "50%",
            top: "50%",
            width: cardWidth,
            height: cardHeight,
            borderRadius: 16,
            overflow: "hidden",
            transformStyle: "preserve-3d",
            transformOrigin: "center center",
            transform: `translate(-50%, -50%) translateX(${tx}px) translateZ(${tz}px) rotateY(${ry}deg) rotateZ(${rz}deg) scale(${sc})`,
            transition: "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.6s ease",
            opacity: visible ? 1 : 0,
            cursor: "pointer",
            pointerEvents: visible ? "auto" : "none",
            backgroundColor: "#0c0e0e",
            boxShadow: isActive
              ? "0 20px 50px rgba(0, 220, 229, 0.35)"
              : "0 10px 30px rgba(0,0,0,0.8)",
            border: isActive
              ? "2px solid rgba(0, 220, 229, 0.85)"
              : "1px solid rgba(255, 255, 255, 0.1)",
          };

          return (
            <div
              key={proj.id}
              style={cardStyle}
              onClick={() => handleCardClick(i)}
              aria-label={proj.title}
              className="group relative"
            >
              <img
                src={proj.coverImage}
                alt={proj.title}
                draggable={false}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
                className="transition-transform duration-700 group-hover:scale-105"
              />

              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(0,0,0,0) 20%, rgba(0,0,0,0.92) 100%)",
                  pointerEvents: "none",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  left: 20,
                  right: 20,
                  bottom: 20,
                  pointerEvents: "none",
                }}
                className="flex flex-col gap-1 text-right"
              >
                {/* <span className="font-mono text-[11px] sm:text-xs text-[#00dce5] tracking-widest uppercase font-bold">
                  {proj.category}
                </span> */}
                <span
                  style={{
                    color: "#ffffff",
                    fontSize: 22,
                    fontWeight: 700,
                    lineHeight: "1.25",
                  }}
                  className="sm:text-2xl"
                >
                  {proj.title}
                </span>

                {isActive && (
                  <span className="inline-flex items-center gap-1.5 text-xs text-[#00dce5] font-bold mt-2 animate-pulse">
                    <span>انقر لعرض تفاصيل المشروع الكاملة</span>
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>



      {/* Navigation Arrow & Dot Controls */}
      <div className="flex items-center gap-6 mt-6 sm:mt-10 z-30">
        <button
          onClick={() => step(-1)}
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/20 hover:border-[#00dce5] hover:text-[#00dce5] hover:bg-white/5 flex items-center justify-center text-white transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)] active:scale-95"
          aria-label="Previous Slide"
        >
          <ArrowRight className="w-5 h-5" />
        </button>

        <div className="flex gap-2 items-center">
          {list.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all ${active === i
                ? "w-7 sm:w-8 bg-[#00dce5] shadow-[0_0_10px_#00dce5]"
                : "w-2 bg-white/30 hover:bg-white/60"
                }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <button
          onClick={() => step(1)}
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-white/20 hover:border-[#00dce5] hover:text-[#00dce5] hover:bg-white/5 flex items-center justify-center text-white transition-all shadow-[0_0_15px_rgba(0,0,0,0.5)] active:scale-95"
          aria-label="Next Slide"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export default function WorkSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);

  const handleNextProject = () => {
    if (!selectedProject) return;
    const currentIndex = PROJECTS_DATA.findIndex((p) => p.id === selectedProject.id);
    const nextIndex = (currentIndex + 1) % PROJECTS_DATA.length;
    setSelectedProject(PROJECTS_DATA[nextIndex]);
  };

  const handlePrevProject = () => {
    if (!selectedProject) return;
    const currentIndex = PROJECTS_DATA.findIndex((p) => p.id === selectedProject.id);
    const prevIndex = (currentIndex - 1 + PROJECTS_DATA.length) % PROJECTS_DATA.length;
    setSelectedProject(PROJECTS_DATA[prevIndex]);
  };

  return (
    <section className="bg-black relative py-20 overflow-hidden" id="work">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[700px] h-[400px] sm:h-[500px] bg-[#00dce5]/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Section Header */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 mb-6 text-center flex flex-col items-center">
        <span className="font-mono text-xs text-[#00dce5] tracking-widest uppercase mb-3 block font-bold">
          معرض الهويات البصرية
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-6xl text-white font-bold mb-3">
          أبرز المشاريع والتصاميم
        </h2>
        <p className="text-white/60 max-w-lg text-sm sm:text-base leading-relaxed">
          اسحب بأصبعك أو انقر على أي مشروع لاستعراض التفاصيل ومعرض الصور الكامل.
        </p>
      </div>

      {/* 3D Coverflow Gallery */}
      <div className="w-full relative z-20">
        <Smooth3DSlideshow onOpenDetails={setSelectedProject} />
      </div>

      {/* Work Details Overlay Modal */}
      <AnimatePresence>
        {selectedProject && (
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
              dir="rtl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 left-6 z-30 w-11 h-11 rounded-full bg-white/10 hover:bg-[#00dce5] hover:text-black text-white flex items-center justify-center transition-all border border-white/20"
                aria-label="إغلاق"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Cover Banner */}
              <div className="relative w-full h-[300px] sm:h-[400px] overflow-hidden bg-black">
                <img
                  src={selectedProject.coverImage}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d0e] via-black/40 to-transparent" />

                <div className="absolute bottom-6 right-6 left-6 flex flex-col gap-2">
                  {/* <span className="font-mono text-xs text-[#00dce5] tracking-widest uppercase font-bold">
                    {selectedProject.category}
                  </span> */}
                  <h3 className="font-serif text-3xl sm:text-5xl font-bold text-white">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              {/* Modal Content Body */}
              <div className="p-6 sm:p-10 space-y-10">
                {/* Meta Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 bg-white/[0.03] p-6 rounded-2xl border border-white/10">
                  <div>
                    <span className="block text-xs text-white/50 font-mono mb-1">
                      سنة التنفيذ
                    </span>
                    <span className="font-bold text-white text-base sm:text-lg">
                      {selectedProject.year}
                    </span>
                  </div>
                  <div>
                    <span className="block text-xs text-white/50 font-mono mb-1">
                      مجال المشروع
                    </span>
                    <span className="font-bold text-[#00dce5] text-base sm:text-lg">
                      {selectedProject.category.split("/")[1] || selectedProject.category}
                    </span>
                  </div>
                  <div className="col-span-2">
                    <span className="block text-xs text-white/50 font-mono mb-1">
                      مخرجات التصميم
                    </span>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {selectedProject.deliverables.map((item, i) => (
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

                {/* Project Description */}
                <div>
                  <h4 className="font-serif text-xl font-bold text-white mb-3">
                    عن المشروع واستراتيجية التصميم
                  </h4>
                  <p className="text-white/70 leading-relaxed text-base sm:text-lg">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Gallery Images Grid */}
                <div>
                  <h4 className="font-serif text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <span>صور وتطبيقات المشروع البصرية</span>
                    <span className="text-xs text-[#00dce5] font-mono font-normal">
                      ({selectedProject.galleryImages.length} صور)
                    </span>
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {selectedProject.galleryImages.map((imgSrc, index) => (
                      <div
                        key={index}
                        className="rounded-2xl overflow-hidden border border-white/10 bg-black/40 aspect-[4/3] group relative shadow-lg"
                      >
                        <img
                          src={imgSrc}
                          alt={`${selectedProject.title} ${index + 1}`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Switcher Footer */}
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
