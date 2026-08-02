"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "./AnimatedCounter";

export default function AboutSection() {
  return (
    <section className="py-32 bg-[#00dce5] text-black relative overflow-hidden" id="about">
      {/* Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Crect width='8' height='8' fill='%2300dce5'/%3E%3Cpath d='M0 0L8 8ZM8 0L0 8Z' stroke='%23000000' stroke-width='1'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="w-full max-w-[1400px] mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-10"
        >
          <h2 className="font-serif text-5xl lg:text-8xl leading-[0.95] font-black uppercase">
            التصميم بالنسبة لي <br />
            <span className="text-white mix-blend-difference">مو مجرد شكل...</span>
          </h2>

          <p className="text-xl lg:text-3xl leading-relaxed font-bold max-w-xl">
            هو فكرة، إحساس، وقصة بتتحكي بصريًا. أنا بؤمن إن كل علامة تجارية ليها روح، ودوري هو إني أجسد الروح دي من خلال لغة بصرية فريدة بتمزج بين الحداثة والأصالة.
          </p>

          <div className="grid grid-cols-3 gap-10 border-t-4 border-black pt-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="block font-serif text-5xl lg:text-7xl font-black">
                <AnimatedCounter prefix="+" target={3} duration={1.5} />
              </span>
              <span className="font-mono uppercase font-bold tracking-widest mt-2 block text-sm">
                سنوات خبرة
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className="block font-serif text-5xl lg:text-7xl font-black">
                <AnimatedCounter target={50} suffix="+" duration={1.5} />
              </span>
              <span className="font-mono uppercase font-bold tracking-widest mt-2 block text-sm">
                مشروع مكتمل
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <span className="block font-serif text-5xl lg:text-7xl font-black">
                <AnimatedCounter target={20} suffix="+" duration={1.5} />
              </span>
              <span className="font-mono uppercase font-bold tracking-widest mt-2 block text-sm">
                عميل سعيد
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Sara Logo Showcase Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-square lg:aspect-[4/3] bg-black border-[8px] border-black shadow-2xl rounded-3xl p-12 flex items-center justify-center group overflow-hidden"
        >
          {/* Subtle Background Glow */}
          <div className="absolute inset-0 bg-[#00dce5]/10 group-hover:bg-[#00dce5]/20 transition-colors duration-500 pointer-events-none" />

          {/* Logo Display */}
          <img
            src="/Logo.png"
            alt="سارة — Logo"
            className="w-full h-auto object-contain relative z-10 transition-transform duration-700 group-hover:scale-110 drop-shadow-[0_0_25px_rgba(0,220,229,0.5)]"
          />
        </motion.div>
      </div>
    </section>
  );
}
