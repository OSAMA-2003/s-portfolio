"use client";

import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      num: "01",
      title: "الهوية البصرية",
      description:
        "تصميم هوية متكاملة تعكس روح وقيم علامتك التجارية، من الشعار إلى الألوان والخطوط.",
    },
    {
      num: "02",
      title: "تصميم الشعارات",
      description:
        "ابتكار شعارات فريدة ومميزة تترسخ في ذهن العميل وتميزك عن المنافسين.",
    },
    {
      num: "03",
      title: "السوشيال ميديا",
      description:
        "تصاميم جذابة لحسابات التواصل الاجتماعي تزيد من التفاعل وتبرز رسالتك.",
    },
    {
      num: "04",
      title: "تصميم وتطوير المواقع",
      description:
        "مواقع ويب عصرية ومتجاوبة، ومتاجر إلكترونية احترافية على منصتي سلة وزد.",
    },

  ];

  return (
    <section className="py-28 bg-[#0a0c0c] relative overflow-hidden" id="services">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 gap-6"
        >
          <div>
            <span className="font-mono text-xs text-[#00dce5] tracking-widest uppercase mb-3 block font-bold">
              خدماتي
            </span>
            <h2 className="font-serif text-4xl lg:text-6xl text-white font-bold">
              ماذا أقدم؟
            </h2>
          </div>
          <p className="text-white/70 max-w-md text-lg leading-relaxed">
            حلول تصميم متكاملة تجمع بين الجمالية والفاعلية لتلبية احتياجات علامتك التجارية.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.06] hover:border-[#00dce5]/50 transition-all duration-500 group relative overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-0 left-0 w-32 h-32 bg-[#00dce5]/5 rounded-br-full -z-0 group-hover:scale-150 transition-transform duration-700 pointer-events-none" />

              <div className="relative z-10">
                <div className="font-serif text-3xl text-white/30 font-bold mb-8 group-hover:text-[#00dce5] transition-colors">
                  {service.num}
                </div>
                <h3 className="font-serif text-2xl text-white font-bold mb-4">
                  {service.title}
                </h3>
                <p className="text-white/60 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>

              <div className="mt-8 flex justify-end">
                <div className="w-12 h-12 rounded-full border border-[#00dce5]/30 flex items-center justify-center text-[#00dce5] group-hover:bg-[#00dce5] group-hover:text-black transition-all shadow-[0_0_15px_rgba(0,220,229,0.2)]">
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
