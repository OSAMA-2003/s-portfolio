"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { AnimatedCounter } from "./AnimatedCounter";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#060808] w-full"
      id="home"
    >
      {/* Background Cyan Glow Spheres */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[300px] sm:w-[700px] h-[300px] sm:h-[700px] bg-[#00dce5]/15 rounded-full blur-[100px] sm:blur-[160px] pointer-events-none" />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.08, 0.14, 0.08],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-1/2 right-1/4 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-[#00dce5]/10 rounded-full blur-[90px] sm:blur-[140px] pointer-events-none"
      />

      {/* Background Oversized Typography */}
      <div className="absolute top-[16%] left-1/2 -translate-x-1/2 w-full text-center pointer-events-none opacity-20 select-none z-10 flex justify-center overflow-hidden">
        <h1
          className="font-serif text-[14vw] sm:text-[12vw] leading-none text-transparent tracking-widest uppercase font-black whitespace-nowrap"
          style={{ WebkitTextStroke: "1px #00dce5" }}
        >
          GRAPHIC <span className="ml-4 sm:ml-16 block">DESIGNER</span>
        </h1>
      </div>

      <div className="max-w-[1500px] mx-auto w-full px-4 sm:px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-20 items-center min-h-[80vh]">

        {/* Content Column (RTL) */}
        <div className="col-span-1 lg:col-span-5 flex flex-col gap-6 order-2 lg:order-1 mt-0 relative z-30 justify-center" dir="rtl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-3"
          >
            <p className="text-white/70 text-base sm:text-lg font-medium">مرحباً. أنا سارة</p>
            <h2 className="font-serif text-white leading-tight text-4xl sm:text-5xl lg:text-7xl font-bold">
              أصمم أفكارك <br />
              بدقة <span className="text-[#00dce5] drop-shadow-[0_0_25px_rgba(0,220,229,0.6)]">وإبداع</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white/70 max-w-md text-base sm:text-lg leading-relaxed"
          >
            مصممة جرافيك أمتلك شغفاً بتحويل الأفكار إلى تصاميم بصرية تترك أثراً وتلهم.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center gap-4 mt-2"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#work"
              className="bg-[#00dce5] text-black px-6 sm:px-8 py-3.5 rounded-full font-bold text-sm shadow-[0_0_35px_rgba(0,220,229,0.5)] hover:shadow-[0_0_55px_rgba(0,220,229,0.85)] transition-all flex items-center gap-2 group"
            >
              <span>استكشف أعمالي</span>
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#about"
              className="border border-white/20 text-white px-6 sm:px-8 py-3.5 rounded-full font-bold text-sm hover:border-[#00dce5] hover:text-[#00dce5] hover:bg-white/5 transition-all flex items-center gap-3"
            >
              <span>تعرف عليّ</span>
              <div className="w-2.5 h-2.5 rounded-full bg-[#00dce5] shadow-[0_0_10px_#00dce5]" />
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="hidden lg:flex flex-col items-center gap-2 mt-12 w-fit text-white/50"
          >
            <a href="#work" className="flex flex-col items-center gap-2 hover:text-[#00dce5] transition-colors group">
              <div className="w-5 h-9 border border-white/30 rounded-full flex justify-center p-1 relative">
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                  className="w-1.5 h-2 bg-[#00dce5] rounded-full shadow-[0_0_8px_#00dce5]"
                />
              </div>
              <span className="font-mono text-[10px] tracking-widest text-white/50 group-hover:text-[#00dce5] transition-colors">
                Scroll to explore
              </span>
            </a>
          </motion.div>
        </div>

        {/* Visual Column */}
        <div className="col-span-1 lg:col-span-7 relative min-h-[45vh] sm:min-h-[55vh] lg:min-h-[75vh] flex flex-col items-center justify-center order-1 lg:order-2">

          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              opacity: { duration: 1, delay: 0.3 },
              scale: { duration: 1, delay: 0.3 },
            }}
            className="relative z-20 w-full max-w-[320px] sm:max-w-[480px] lg:max-w-[640px] aspect-square flex items-center justify-center"
          >
            <img
              src="/hero.png"
              alt="سارة — مصممة جرافيك"
              className="w-full h-full object-contain relative z-20 transition-transform duration-500 hover:scale-105"
              style={{
                filter: "drop-shadow(0px 0px 14px rgba(255, 255, 255, 0.95)) drop-shadow(0px 0px 35px rgba(0, 220, 229, 0.45))",
              }}
            />
          </motion.div>

          {/* Animated Stat Counters */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className=" mt-0 absolute bottom-0 lg:left-8 z-30 flex gap-6 sm:gap-8 items-center bg-black/50 backdrop-blur-md px-5 sm:px-6 py-3 rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.8)] max-w-full"
          >
            <div className="flex flex-col items-center">
              <span className="font-serif text-white text-2xl sm:text-4xl font-bold leading-none">
                <AnimatedCounter prefix="+" target={3} duration={1} />
              </span>
              <span className="text-white/60 mt-1 text-[10px] sm:text-xs font-medium whitespace-nowrap">سنوات خبرة</span>
            </div>

            <div className="w-px bg-white/20 h-8 sm:h-10" />

            <div className="flex flex-col items-center">
              <span className="font-serif text-white text-2xl sm:text-4xl font-bold leading-none">
                <AnimatedCounter target={50} suffix="+" duration={2.5} />
              </span>
              <span className="text-white/60 mt-1 text-[10px] sm:text-xs font-medium whitespace-nowrap">مشروع مكتمل</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}