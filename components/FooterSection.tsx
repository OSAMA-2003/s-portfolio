"use client";

import { motion } from "framer-motion";

export default function FooterSection() {
  return (
    <footer className="w-full bg-black pt-32 pb-10 border-t-8 border-[#00dce5] relative overflow-hidden" id="contact">
      <div className="w-full px-6 lg:px-20 flex flex-col items-center justify-center relative z-10 min-h-[50vh]">
        <motion.a
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="group relative inline-block text-center mb-20"
          href="mailto:hello@sara.com"
        >
          <h2 className="font-serif text-6xl sm:text-8xl lg:text-[180px] leading-none uppercase tracking-tighter outline-text-white group-hover:text-[#00dce5] group-hover:outline-none transition-all duration-500">
            LET'S
            <br />
            TALK.
          </h2>
          <div className="absolute inset-x-0 bottom-0 h-2 lg:h-4 bg-[#00dce5] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
        </motion.a>

        <div className="w-full max-w-[1400px] flex flex-col md:flex-row justify-between items-center gap-10 border-t border-white/20 pt-10 mt-auto">
          <div className="flex items-center gap-4">
            <span className="font-serif text-2xl font-bold tracking-widest text-[#00dce5]">
              سارة
            </span>
            <span className="text-white/50 text-sm font-mono tracking-widest uppercase">
              © {new Date().getFullYear()} SARA CREATIVE STUDIO
            </span>
          </div>

          <div className="flex gap-8">
            <a
              className="text-white hover:text-[#00dce5] transition-colors font-mono text-sm uppercase tracking-widest"
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <a
              className="text-white hover:text-[#00dce5] transition-colors font-mono text-sm uppercase tracking-widest"
              href="https://behance.net"
              target="_blank"
              rel="noreferrer"
            >
              Behance
            </a>
            <a
              className="text-white hover:text-[#00dce5] transition-colors font-mono text-sm uppercase tracking-widest"
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
