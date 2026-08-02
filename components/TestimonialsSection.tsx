"use client";

import { motion } from "framer-motion";

export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      image: "/testimonials/brave_screenshot_x.com.png",
      name: "فيصل العتيبي",
      role: "مؤسس شركة ريادية",
      text: "العمل مع سارة كان تجربة استثنائية! الهوية البصرية التي صممتها فاقت توقعاتنا وأعطت مشروعنا انطباعاً مذهلاً أمام المستثمرين.",
    },
    {
      id: 2,
      image: "/testimonials/brave_screenshot_x.com (1).png",
      name: "نورة الشمري",
      role: "مديرة تسويق",
      text: "دقة في المواعيد وإبداع لا حدود له. التصاميم كانت عصرية وجميلة جداً، وجذبت آلاف المتابعين لحساباتنا من الأسبوع الأول.",
    },
    {
      id: 3,
      image: "/testimonials/brave_screenshot_x.com.png",
      name: "عبدالله السالم",
      role: "الرئيس التنفيذي",
    },
    {
      id: 4,
      image: "/testimonials/brave_screenshot_x.com (1).png",
      name: "مها العنزي",
      role: "صانعة محتوى",
    },
  ];

  // Duplicate for seamless infinite loop effect
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-28 bg-[#060808] relative overflow-hidden" id="testimonials">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00dce5]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 mb-16 text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-xs text-[#00dce5] tracking-widest uppercase mb-3 block font-bold"
        >
          آراء العملاء
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-bold"
        >
          ماذا يقول العملاء عن إبداعي؟
        </motion.h2>
      </div>

      {/* Infinite Animated Marquee Container */}
      <div className="relative flex overflow-hidden w-full max-w-full">
        <motion.div
          className="flex gap-8 items-stretch shrink-0"
          animate={{ x: ["0%", "50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
        >
          {duplicatedTestimonials.map((item, idx) => (
            <div
              key={idx}
              className="w-[340px] sm:w-[420px] bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#00dce5]/50 hover:bg-white/[0.07] transition-all duration-500 shrink-0 group relative overflow-hidden"
            >
              {/* Top Image Preview Card */}
              <div className="w-full rounded-2xl overflow-hidden mb-6 border border-white/10 aspect-[16/9] bg-black/40 relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>



              {/* Author Footer */}
              <div className="flex items-center justify-between border-t border-white/10 pt-4 mt-auto">
                <div className="flex flex-col text-right">
                  <span className="font-bold text-white text-base">
                    {item.name}
                  </span>
                  <span className="text-white/50 text-xs mt-0.5">
                    {item.role}
                  </span>
                </div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#00dce5] shadow-[0_0_10px_#00dce5]" />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
