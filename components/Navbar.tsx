"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, Menu, X } from "lucide-react";
import { FaBehance, FaLinkedin, FaInstagram, FaWhatsapp, FaXTwitter } from "react-icons/fa6";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const whatsappUrl = "https://wa.me/966507032928";

  const navLinks = [
    { id: "home", label: "الرئيسية", href: "#home" },
    { id: "services", label: "خدماتي", href: "#services" },
    { id: "work", label: "أعمالي", href: "#work" },
    { id: "about", label: "عني", href: "#about" },
    { id: "contact", label: "تواصل", href: "#contact" },
  ];

  // Scroll Spy: Activate Navbar tab when scrolling through sections
  useEffect(() => {
    const sectionElements = navLinks
      .map((link) => document.querySelector(link.href))
      .filter(Boolean) as HTMLElement[];

    if (!sectionElements.length) return;

    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -45% 0px",
      threshold: 0.15,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          if (id) {
            setActiveTab(id);
          }
        }
      });
    }, observerOptions);

    sectionElements.forEach((el) => observer.observe(el));

    return () => {
      sectionElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      {/* Top Floating Glass Navigation Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-xl border-b border-white/10">
        <div className="h-20 max-w-[1440px] mx-auto px-6 lg:px-16 flex items-center justify-between">
          {/* Logo from public/Logo.png */}
          <a href="#home" className="flex items-center gap-3 group">
            <img
              src="/Logo.png"
              alt="سارة — استوديو التصميم الإبداعي"
              className="h-24 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </a>

          {/* Desktop Arabic Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setActiveTab(link.id)}
                className={`text-sm py-1 transition-all relative flex flex-col items-center font-bold ${activeTab === link.id
                  ? "text-[#00dce5]"
                  : "text-white/80 hover:text-[#00dce5]"
                  }`}
              >
                {link.label}
                {activeTab === link.id && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00dce5] absolute -bottom-2 shadow-[0_0_10px_#00dce5]" />
                )}
              </a>
            ))}
          </nav>

          {/* Right CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden md:flex items-center gap-2 border border-[#25D366]/40 bg-[#25D366]/10 text-white px-5 py-2.5 rounded-full text-xs font-bold hover:bg-[#25D366] hover:text-black hover:shadow-[0_0_20px_rgba(37,211,102,0.5)] transition-all group"
            >
              <FaWhatsapp className="w-4 h-4 text-[#25D366] group-hover:text-black transition-colors" />
              <span>تواصل عبر الواتساب</span>
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-[#00dce5]"
              aria-label="القائمة"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-2xl z-40 transition-transform duration-500 lg:hidden flex flex-col items-center justify-center p-8 ${mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
      >
        <nav className="flex flex-col items-center gap-8 text-center">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => {
                setActiveTab(link.id);
                setMobileMenuOpen(false);
              }}
              className={`text-3xl font-bold transition-colors ${activeTab === link.id ? "text-[#00dce5]" : "text-white hover:text-[#00dce5]"
                }`}
            >
              {link.label}
            </a>
          ))}

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-4 flex items-center gap-2 bg-[#25D366] text-black px-6 py-3 rounded-full text-base font-bold shadow-[0_0_25px_rgba(37,211,102,0.6)]"
          >
            <FaWhatsapp className="w-5 h-5" />
            <span>واتساب: +966 50 703 2928</span>
          </a>
        </nav>
      </div>

      {/* Fixed Right Social Bar */}
      <aside className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-6 p-4 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
        <a
          className="text-white/60 hover:text-[#25D366] transition-colors text-center"
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          title="WhatsApp"
        >
          <FaWhatsapp className="w-5 h-5 text-[#25D366]" />
        </a>
        <a
          className="text-white/60 hover:text-[#00dce5] transition-colors text-center"
          href="https://www.behance.net/sarah421"
          target="_blank"
          rel="noreferrer"
          title="Behance"
        >
          <FaBehance className="w-4 h-4" />
        </a>
        <a
          className="text-white/60 hover:text-[#00dce5] transition-colors text-center"
          href="https://x.com/sarahgraphic_1"
          target="_blank"
          rel="noreferrer"
          title="X (Twitter)"
        >
          <FaXTwitter className="w-4 h-4" />
        </a>
        {/* <a
          className="text-white/60 hover:text-[#00dce5] transition-colors text-center"
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          title="LinkedIn"
        >
          <FaLinkedin className="w-4 h-4" />
        </a> */}
        {/* <a
          className="text-white/60 hover:text-[#00dce5] transition-colors text-center"
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          title="Instagram"
        >
          <FaInstagram className="w-4 h-4" />
        </a> */}
        <div className="w-1.5 h-1.5 bg-[#00dce5] rounded-full mx-auto shadow-[0_0_10px_#00dce5]" />
      </aside>
    </>
  );
}
