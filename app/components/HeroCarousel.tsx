"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/rek_banner.png",
  "/carousel2.png",
  "/carousel3.png",
  "/carousel4.png"
];

export function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // 3.5 seconds per slide

    return () => clearInterval(timer);
  }, [isHovered]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1, y: [0, -15, 0] }}
      transition={{
        opacity: { duration: 1, delay: 0.2, ease: "easeOut" },
        scale: { duration: 1, delay: 0.2, ease: "easeOut" },
        y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
      }}
      className="mt-16 relative w-[95%] mx-auto rounded-2xl overflow-hidden border border-[#E5E7EB] shadow-[0px_4px_40px_rgba(0,0,0,0.06)] bg-white/50 aspect-[1376/768]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-tr from-[#6B21A8]/10 to-transparent mix-blend-multiply z-20 pointer-events-none" />

      <AnimatePresence>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0 z-10"
        >
          <Image
            src={images[currentIndex]}
            alt={`Hero Carousel Image ${currentIndex + 1}`}
            fill
            className="object-cover rounded-2xl"
            priority={currentIndex === 0}
          />
        </motion.div>
      </AnimatePresence>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-[#6B21A8] w-8' : 'bg-[#E5E7EB] w-2 hover:bg-[#6B21A8]/50'}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </motion.div>
  );
}
