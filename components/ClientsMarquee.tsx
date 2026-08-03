"use client";

import { motion } from "framer-motion";

export default function ClientsMarquee() {
  const logoImages = [
    { src: "/logos/logo1.png", alt: "Brand Logo 1" },
    { src: "/logos/logo2.png", alt: "Brand Logo 2" },
    { src: "/logos/logo3.png", alt: "Brand Logo 3" },
    { src: "/logos/logo4.png", alt: "Brand Logo 4" },
    { src: "/logos/logo5.png", alt: "Brand Logo 5" },
    { src: "/logos/logo6.png", alt: "Brand Logo 6" },
    { src: "/logos/logo7.png", alt: "Brand Logo 7" },
  ];

  // Duplicate for seamless infinite marquee loop effect
  const duplicatedLogos = [...logoImages, ...logoImages, ...logoImages];

  return (
    <section className="py-8 bg-[#00dce5] border-y border-white text-black overflow-hidden max-w-full w-full relative select-none z-20">
      {/* The Scrolling Container */}
      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex gap-16 items-center shrink-0"
          animate={{ x: ["0%", "50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 22,
              ease: "linear",
            },
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div key={index} className="flex items-center gap-16 shrink-0">
              <span className="text-2xl text-black/60">•</span>
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-10 sm:h-14 w-auto object-contain brightness-0 hover:brightness-100 transition-all duration-300 pointer-events-none"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}