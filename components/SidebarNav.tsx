"use client";

import { useEffect, useState } from "react";
import { Mail, Menu, X } from "lucide-react";

export default function SidebarNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [rotatorDegrees, setRotatorDegrees] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight > 0) {
        const scrollPercent = window.scrollY / scrollHeight;
        setRotatorDegrees(scrollPercent * 360);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Vertical Sidebar Navigation */}
      <nav
        className="fixed top-0 right-0 h-full w-24 bg-black z-50 border-l border-white/10 hidden lg:flex flex-col items-center justify-between py-10"
        id="side-nav"
      >
        <div className="font-serif text-2xl font-bold rotate-90 tracking-widest text-[#00dce5]">
          سارة
        </div>

        <div
          className="flex flex-col gap-16 text-sm uppercase tracking-widest transition-transform duration-100 ease-out"
          style={{ transform: `rotate(${rotatorDegrees}deg)` }}
        >
          <a className="vertical-text hover:text-[#00dce5] transition-colors" href="#work">
            أعمالي
          </a>
          <a className="vertical-text hover:text-[#00dce5] transition-colors" href="#services">
            خدماتي
          </a>
          <a className="vertical-text hover:text-[#00dce5] transition-colors" href="#about">
            عني
          </a>
        </div>

        <a
          href="mailto:hello@sara.com"
          className="w-12 h-12 rounded-full border border-[#00dce5] flex items-center justify-center text-[#00dce5] hover:bg-[#00dce5] hover:text-black transition-colors cursor-pointer"
          title="تواصل معي"
        >
          <Mail className="w-5 h-5" />
        </a>
      </nav>

      {/* Mobile Header */}
      <header className="fixed top-0 left-0 w-full z-50 py-4 bg-black border-b border-white/10 lg:hidden">
        <div className="w-full px-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-serif text-2xl font-bold tracking-tight text-[#00dce5]">
              سارة
            </span>
          </div>
          <button
            className="p-2 text-white hover:text-[#00dce5] transition-colors"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="فتح القائمة"
          >
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 bg-black z-[100] transition-transform duration-500 ease-in-out flex flex-col p-10 ${
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <button
          className="self-end p-2 mb-10 text-[#00dce5]"
          onClick={() => setMobileMenuOpen(false)}
          aria-label="إغلاق القائمة"
        >
          <X className="w-8 h-8" />
        </button>

        <nav className="flex flex-col gap-8 text-right font-serif">
          <a
            className="text-4xl outline-text-white hover:text-[#00dce5] transition-all"
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
          >
            الرئيسية
          </a>
          <a
            className="text-4xl outline-text-white hover:text-[#00dce5] transition-all"
            href="#work"
            onClick={() => setMobileMenuOpen(false)}
          >
            أعمالي
          </a>
          <a
            className="text-4xl outline-text-white hover:text-[#00dce5] transition-all"
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
          >
            خدماتي
          </a>
          <a
            className="text-4xl outline-text-white hover:text-[#00dce5] transition-all"
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
          >
            عني
          </a>
          <a
            className="text-4xl outline-text-white hover:text-[#00dce5] transition-all"
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
          >
            تواصل
          </a>
        </nav>
      </div>
    </>
  );
}
