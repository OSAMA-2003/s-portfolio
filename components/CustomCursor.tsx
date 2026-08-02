"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    const projectCards = document.querySelectorAll(".project-card");

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    projectCards.forEach((card) => {
      card.addEventListener("mouseenter", handleMouseEnter);
      card.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      projectCards.forEach((card) => {
        card.removeEventListener("mouseenter", handleMouseEnter);
        card.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      className={`fixed pointer-events-none z-[9999] mix-blend-difference transition-transform duration-100 ease-out hidden lg:flex items-center justify-center rounded-full ${
        isHovered
          ? "w-24 h-24 bg-white text-black scale-100 -translate-x-12 -translate-y-12"
          : "w-4 h-4 bg-[#00ffff] -translate-x-2 -translate-y-2"
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      {isHovered && (
        <span className="text-[10px] font-bold uppercase tracking-wider text-black">
          VIEW
        </span>
      )}
    </div>
  );
}
