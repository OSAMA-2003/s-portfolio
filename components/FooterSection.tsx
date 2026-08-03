"use client";

import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram, FaBehance, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { ArrowLeft } from "lucide-react";

export default function FooterSection() {
  const whatsappUrl = "https://wa.me/966507032928";
  const phoneNumber = "+966 50 703 2928";

  return (
    <footer className="w-full bg-black pt-32 pb-10 border-t-8 border-[#00dce5] relative overflow-hidden" id="contact">
      {/* Background Cyan Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00dce5]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="w-full px-6 lg:px-20 flex flex-col items-center justify-center relative z-10 min-h-[50vh]">

        {/* Main LET'S TALK Call to Action */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <a
            className="group relative inline-block text-center"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            <h2 className="font-serif text-6xl sm:text-8xl lg:text-[180px] leading-none uppercase tracking-tighter outline-text-white group-hover:text-[#00dce5] group-hover:outline-none transition-all duration-500">
              LET'S
              <br />
              TALK.
            </h2>
            <div className="absolute inset-x-0 bottom-0 h-2 lg:h-4 bg-[#00dce5] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
          </a>


        </motion.div>

        {/* Footer Bottom Bar */}
        <div className="w-full max-w-[1400px] flex flex-col md:flex-row justify-between items-center gap-10 border-t border-white/20 pt-10 mt-auto">
          <div className="flex items-center gap-4">
            <span className="font-serif text-2xl font-bold tracking-widest text-[#00dce5]">
              سارة
            </span>
            <span className="text-white/50 text-sm font-mono tracking-widest uppercase">
              © {new Date().getFullYear()} SARA CREATIVE STUDIO
            </span>
          </div>

          {/* Social Icons & Links */}
          <div className="flex items-center gap-6 flex-wrap justify-center">
            <a
              className="text-white hover:text-[#25D366] transition-colors font-mono text-sm uppercase tracking-widest flex items-center gap-2"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp className="w-5 h-5 text-[#25D366]" />
              <span>WhatsApp</span>
            </a>
            <a
              className="text-white hover:text-[#00dce5] transition-colors font-mono text-sm uppercase tracking-widest flex items-center gap-2"
              href="https://www.behance.net/sarah421"
              target="_blank"
              rel="noreferrer"
            >
              <FaBehance className="w-5 h-5" />
              <span>Behance</span>
            </a>
            <a
              className="text-white hover:text-[#00dce5] transition-colors font-mono text-sm uppercase tracking-widest flex items-center gap-2"
              href="https://x.com/sarahgraphic_1"
              target="_blank"
              rel="noreferrer"
            >
              <FaXTwitter className="w-5 h-5" />
              <span>X (Twitter)</span>
            </a>
            {/* <a
              className="text-white hover:text-[#00dce5] transition-colors font-mono text-sm uppercase tracking-widest flex items-center gap-2"
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="w-5 h-5" />
              <span>Instagram</span>
            </a>
            <a
              className="text-white hover:text-[#00dce5] transition-colors font-mono text-sm uppercase tracking-widest flex items-center gap-2"
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
