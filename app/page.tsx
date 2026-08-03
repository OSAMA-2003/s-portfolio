"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ClientsMarquee from "@/components/ClientsMarquee";
import WorkSection from "@/components/WorkSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CertificateSection from "@/components/CertificateSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -40px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    const staggerElements = document.querySelectorAll(".stagger-reveal");
    staggerElements.forEach((el) => observer.observe(el));

    return () => {
      staggerElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white selection:bg-[#00dce5] selection:text-black font-sans overflow-hidden">
      {/* Top Glass Floating Navbar & Fixed Right Social Bar */}
      <Navbar />

      <main className="w-full">
        {/* Hero Section */}
        <HeroSection />

        {/* Client Marquee Banner */}
        <ClientsMarquee />

        {/* Services Section */}
        <ServicesSection />

        {/* 3D Work / Portfolio Showcase Section with Modal Details */}
        <WorkSection />

        {/* About Section */}
        <AboutSection />

        {/* Testimonials Section */}
        <TestimonialsSection />

        {/* Accredited Freelance Certificate Section */}
        <CertificateSection />

        {/* Contact / Footer Section */}
        <FooterSection />
      </main>
    </div>
  );
}
