"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, useAnimation, useInView, Variants } from "framer-motion";

// Inline SVG decorative elements for temple/Tamil motifs
function KollamPattern() {
  return (
    <svg
      viewBox="0 0 200 200"
      className="w-full h-full opacity-10"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="100" cy="100" r="90" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
      <circle cx="100" cy="100" r="70" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
      <circle cx="100" cy="100" r="50" fill="none" stroke="#D4AF37" strokeWidth="0.5" />
      <circle cx="100" cy="100" r="30" fill="none" stroke="#D4AF37" strokeWidth="1" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const x1 = 100 + 30 * Math.cos(rad);
        const y1 = 100 + 30 * Math.sin(rad);
        const x2 = 100 + 90 * Math.cos(rad);
        const y2 = 100 + 90 * Math.sin(rad);
        return (
          <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#D4AF37" strokeWidth="0.5" />
        );
      })}
      {[0, 60, 120, 180, 240, 300].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        const cx = 100 + 70 * Math.cos(rad);
        const cy = 100 + 70 * Math.sin(rad);
        return (
          <circle key={angle} cx={cx} cy={cy} r="5" fill="none" stroke="#D4AF37" strokeWidth="0.7" />
        );
      })}
    </svg>
  );
}

function OrnateFrame() {
  return (
    <svg viewBox="0 0 400 60" className="w-full" xmlns="http://www.w3.org/2000/svg">
      <line x1="0" y1="30" x2="150" y2="30" stroke="#D4AF37" strokeWidth="0.8" />
      <circle cx="160" cy="30" r="4" fill="none" stroke="#D4AF37" strokeWidth="1" />
      <circle cx="175" cy="30" r="6" fill="none" stroke="#D4AF37" strokeWidth="1" />
      <circle cx="200" cy="30" r="10" fill="none" stroke="#D4AF37" strokeWidth="1.5" />
      <circle cx="200" cy="30" r="4" fill="#D4AF37" />
      <circle cx="225" cy="30" r="6" fill="none" stroke="#D4AF37" strokeWidth="1" />
      <circle cx="240" cy="30" r="4" fill="none" stroke="#D4AF37" strokeWidth="1" />
      <line x1="250" y1="30" x2="400" y2="30" stroke="#D4AF37" strokeWidth="0.8" />
    </svg>
  );
}

// Floating light particles with Framer Motion
function LightParticles() {
  const [particles] = useState(
    Array.from({ length: 20 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 10,
      opacity: Math.random() * 0.3 + 0.1,
    }))
  );

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: "radial-gradient(circle, rgba(212,175,55,0.6), rgba(245,230,163,0.2))",
            boxShadow: "0 0 10px rgba(212,175,55,0.2)",
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            opacity: [p.opacity, p.opacity * 1.5, p.opacity],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// Animated groom cartoon with Framer Motion
function GroomCartoon() {
  return (
    <motion.div 
      className="relative w-24 h-36 sm:w-32 sm:h-48 md:w-40 md:h-56"
      animate={{
        y: [0, -15, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/10 to-transparent rounded-full blur-2xl" />
      <svg viewBox="0 0 200 260" className="w-full h-full">
        {/* Body/Groom */}
        <g>
          {/* Turban */}
          <ellipse cx="100" cy="35" rx="45" ry="25" fill="#D4AF37" opacity="0.9" />
          <ellipse cx="100" cy="45" rx="35" ry="20" fill="#F5E6A3" />
          <path d="M65 35 Q80 20 100 15 Q120 20 135 35" stroke="#D4AF37" strokeWidth="2" fill="none" />
          <circle cx="100" cy="25" r="8" fill="#D4AF37" opacity="0.6" />

          {/* Face */}
          <ellipse cx="100" cy="70" rx="35" ry="40" fill="#E8C9A0" />

          {/* Eyes */}
          <ellipse cx="85" cy="65" rx="6" ry="7" fill="white" />
          <ellipse cx="115" cy="65" rx="6" ry="7" fill="white" />
          <circle cx="87" cy="67" r="3.5" fill="#2C1810" />
          <circle cx="117" cy="67" r="3.5" fill="#2C1810" />

          {/* Eyebrows */}
          <path d="M78 55 Q85 50 92 55" stroke="#5C3D2E" strokeWidth="2" fill="none" />
          <path d="M108 55 Q115 50 122 55" stroke="#5C3D2E" strokeWidth="2" fill="none" />

          {/* Nose */}
          <path d="M98 70 Q100 78 103 70" stroke="#C49A6C" strokeWidth="1.5" fill="none" />

          {/* Smile */}
          <path d="M90 85 Q100 95 110 85" stroke="#8B5E3C" strokeWidth="2" fill="none" />

          {/* Mustache */}
          <path d="M80 78 Q90 85 100 80 Q110 85 120 78" stroke="#4A3222" strokeWidth="2.5" fill="none" />

          {/* Beard */}
          <path d="M70 85 Q75 105 100 110 Q125 105 130 85" stroke="#4A3222" strokeWidth="1.5" fill="none" opacity="0.3" />

          {/* Body (Veshti/Shirt) */}
          <path d="M65 105 L135 105 L145 200 L55 200 Z" fill="#FFFFFF" opacity="0.9" />
          <path d="M65 105 L100 110 L135 105" stroke="#D4AF37" strokeWidth="1.5" fill="none" />

          {/* Angavastram */}
          <path d="M60 110 Q50 140 55 170" stroke="#F5E6A3" strokeWidth="3" fill="none" opacity="0.7" />
          <path d="M140 110 Q150 140 145 170" stroke="#F5E6A3" strokeWidth="3" fill="none" opacity="0.7" />

          {/* Garland */}
          <path d="M70 110 Q85 130 100 125 Q115 130 130 110" stroke="#FF6B6B" strokeWidth="4" fill="none" opacity="0.6" />
          <circle cx="75" cy="115" r="3" fill="#FF6B6B" opacity="0.5" />
          <circle cx="90" cy="122" r="3" fill="#FFD93D" opacity="0.5" />
          <circle cx="105" cy="122" r="3" fill="#6BCB77" opacity="0.5" />
          <circle cx="120" cy="115" r="3" fill="#FF6B6B" opacity="0.5" />

          {/* Hands */}
          <circle cx="55" cy="150" r="12" fill="#E8C9A0" />
          <circle cx="145" cy="150" r="12" fill="#E8C9A0" />
        </g>
      </svg>
    </motion.div>
  );
}

// Animated bride cartoon with Framer Motion
function BrideCartoon() {
  return (
    <motion.div 
      className="relative w-24 h-36 sm:w-32 sm:h-48 md:w-40 md:h-56"
      animate={{
        y: [0, -15, 0],
      }}
      transition={{
        duration: 3.5,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 0.5,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#F5E6A3]/10 to-transparent rounded-full blur-2xl" />
      <svg viewBox="0 0 200 260" className="w-full h-full">
        <g>
          {/* Hair */}
          <ellipse cx="100" cy="45" rx="50" ry="35" fill="#1A1A1A" />
          <path d="M50 45 Q50 80 70 100 Q90 110 100 105" stroke="#1A1A1A" strokeWidth="3" fill="none" />
          <path d="M150 45 Q150 80 130 100 Q110 110 100 105" stroke="#1A1A1A" strokeWidth="3" fill="none" />

          {/* Pottu/Bindi */}
          <circle cx="100" cy="60" r="5" fill="#FF0000" />

          {/* Face */}
          <ellipse cx="100" cy="70" rx="38" ry="42" fill="#D4A574" />

          {/* Eyes */}
          <ellipse cx="85" cy="65" rx="8" ry="9" fill="white" />
          <ellipse cx="115" cy="65" rx="8" ry="9" fill="white" />
          <circle cx="87" cy="67" r="4.5" fill="#2C1810" />
          <circle cx="117" cy="67" r="4.5" fill="#2C1810" />
          <circle cx="88" cy="65" r="1.5" fill="white" />
          <circle cx="118" cy="65" r="1.5" fill="white" />

          {/* Eyebrows */}
          <path d="M75 55 Q85 48 95 55" stroke="#2C1810" strokeWidth="2" fill="none" />
          <path d="M105 55 Q115 48 125 55" stroke="#2C1810" strokeWidth="2" fill="none" />

          {/* Nose */}
          <path d="M98 72 Q102 82 106 72" stroke="#C49A6C" strokeWidth="1.5" fill="none" />

          {/* Lips */}
          <path d="M90 90 Q100 98 110 90" stroke="#C41E3A" strokeWidth="2.5" fill="#C41E3A" opacity="0.7" />

          {/* Blush */}
          <ellipse cx="75" cy="80" rx="10" ry="6" fill="#FFB6C1" opacity="0.3" />
          <ellipse cx="125" cy="80" rx="10" ry="6" fill="#FFB6C1" opacity="0.3" />

          {/* Earrings */}
          <circle cx="58" cy="75" r="6" fill="#D4AF37" opacity="0.7" />
          <circle cx="142" cy="75" r="6" fill="#D4AF37" opacity="0.7" />

          {/* Necklace */}
          <path d="M65 108 Q100 125 135 108" stroke="#D4AF37" strokeWidth="3" fill="none" />
          <circle cx="80" cy="115" r="3" fill="#FF6B6B" />
          <circle cx="100" cy="120" r="4" fill="#D4AF37" />
          <circle cx="120" cy="115" r="3" fill="#FF6B6B" />

          {/* Blouse/Saree */}
          <path d="M60 108 L140 108 L145 200 L55 200 Z" fill="#FF6B6B" opacity="0.85" />
          <path d="M65 108 L100 115 L135 108" stroke="#D4AF37" strokeWidth="1.5" fill="none" />

          {/* Saree pallu */}
          <path d="M60 120 Q45 150 40 180" stroke="#FF6B6B" strokeWidth="8" fill="none" opacity="0.7" />
          <path d="M45 150 Q55 160 50 180" stroke="#D4AF37" strokeWidth="1" fill="none" opacity="0.5" />

          {/* Hands */}
          <circle cx="55" cy="155" r="12" fill="#D4A574" />
          <circle cx="145" cy="155" r="12" fill="#D4A574" />

          {/* Mehndi */}
          <circle cx="55" cy="155" r="2" fill="#8B4513" opacity="0.3" />
          <circle cx="58" cy="153" r="2" fill="#8B4513" opacity="0.3" />
          <circle cx="52" cy="153" r="2" fill="#8B4513" opacity="0.3" />
        </g>
      </svg>
    </motion.div>
  );
}

// Background overlay with light effects using Framer Motion
function BackgroundOverlay() {
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const interval = setInterval(() => {
      setGlowPosition({
        x: 30 + Math.random() * 40,
        y: 30 + Math.random() * 40,
      });
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Gradient overlay - reduced opacity */}
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at center, rgba(212,175,55,0.02) 0%, transparent 70%)",
        }}
      />

      {/* Animated glow - reduced opacity with Framer Motion */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(212,175,55,0.08), rgba(245,230,163,0.02))",
        }}
        animate={{
          left: `${glowPosition.x}%`,
          top: `${glowPosition.y}%`,
          x: "-50%",
          y: "-50%",
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
        }}
      />

      {/* Diagonal light rays - reduced opacity */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-full w-[1px]"
            style={{
              left: `${(i + 1) * 12.5}%`,
              background: `linear-gradient(to bottom, transparent, rgba(212,175,55,${0.02 + Math.random() * 0.03}), transparent)`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              delay: i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  // Animation variants with proper typing
  const containerVariants: Variants = {
    hidden: { 
      opacity: 0 
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const scaleVariants: Variants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8 
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-[85vh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden pt-16 lg:pt-20"
      style={{ backgroundColor: "#7F1D1D" }}
    >
      {/* Background silk pattern */}
      <div className="absolute inset-0 silk-texture opacity-30" />

      {/* Background overlay with lights */}
      <BackgroundOverlay />

      {/* Floating light particles */}
      <LightParticles />

      {/* Radial glow - reduced */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(212,175,55,0.04) 0%, transparent 70%)",
        }}
      />

      {/* Corner kolam decorations - smaller with fade animation */}
      <motion.div 
        className="absolute top-0 left-0 w-24 sm:w-32 h-24 sm:h-32 opacity-15"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      >
        <KollamPattern />
      </motion.div>
      <motion.div 
        className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 opacity-15 rotate-90"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
      >
        <KollamPattern />
      </motion.div>
      <motion.div 
        className="absolute bottom-0 left-0 w-24 sm:w-32 h-24 sm:h-32 opacity-15 -rotate-90"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
      >
        <KollamPattern />
      </motion.div>
      <motion.div 
        className="absolute bottom-0 right-0 w-24 sm:w-32 h-24 sm:h-32 opacity-15 rotate-180"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1, delay: 1.1, ease: "easeOut" }}
      >
        <KollamPattern />
      </motion.div>

      {/* Large background mandala - smaller with slow rotation */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div 
          className="w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] opacity-3"
          animate={{ rotate: 360 }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <KollamPattern />
        </motion.div>
      </div>

      {/* Main content */}
      <motion.div 
        className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        animate={visible ? "visible" : "hidden"}
      >
        {/* Auspicious header */}
        <motion.div variants={itemVariants}>
          <p
            className="font-tamil text-xs tracking-[0.3em] mb-0.5"
            style={{ color: "rgba(212,175,55,0.7)" }}
          >
            ஸ்ரீ பச்சையம்மன் துணை
          </p>
          <p
            className="font-cinzel text-[8px] sm:text-[10px] tracking-[0.4em] uppercase mb-4 sm:mb-6"
            style={{ color: "rgba(245,230,163,0.6)" }}
          >
            Sri Pachaiyamman Thunai
          </p>
        </motion.div>

        {/* Ornate divider */}
        <motion.div 
          variants={itemVariants}
          className="mb-4 sm:mb-6"
        >
          <OrnateFrame />
        </motion.div>

        {/* Tagline */}
        <motion.div variants={itemVariants}>
          <p
            className="font-cormorant italic text-sm sm:text-base md:text-lg tracking-widest mb-4 sm:mb-6"
            style={{ color: "rgba(245,230,163,0.8)" }}
          >
            Together with their families
          </p>
        </motion.div>

        {/* Groom name */}
        <motion.div variants={itemVariants}>
          <h1
            className="font-cormorant font-bold italic leading-[1.1] mb-0.5"
            style={{
              fontSize: "clamp(2.2rem, 8vw, 5.5rem)",
              color: "#D4AF37",
              textShadow: "0 0 30px rgba(212,175,55,0.2)",
            }}
          >
            A. Surya
          </h1>
          <p
            className="font-cinzel text-[8px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.5em] uppercase mb-3 sm:mb-4 px-2"
            style={{ color: "rgba(245,230,163,0.65)" }}
          >
            B.E. · Anbu Finance &amp; Consulting, Dharmapuri
          </p>
        </motion.div>

        {/* Ampersand */}
        <motion.div 
          variants={scaleVariants}
          className="mb-3 sm:mb-4"
        >
          <p
            className="font-cormorant italic text-3xl sm:text-4xl md:text-5xl"
            style={{ color: "rgba(212,175,55,0.5)" }}
          >
            &amp;
          </p>
        </motion.div>

        {/* Bride name */}
        <motion.div variants={itemVariants}>
          <h1
            className="font-cormorant font-bold italic leading-[1.1] mb-0.5"
            style={{
              fontSize: "clamp(2rem, 7vw, 5rem)",
              color: "#F5E6A3",
              textShadow: "0 0 30px rgba(245,230,163,0.15)",
            }}
          >
            Dr. R. Jansi
          </h1>
          <p
            className="font-cinzel text-[8px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.5em] uppercase mb-4 sm:mb-6"
            style={{ color: "rgba(245,230,163,0.65)" }}
          >
            B.D.S.
          </p>
        </motion.div>

        {/* Date badge */}
        <motion.div 
          variants={itemVariants}
          className="mt-3 sm:mt-6"
        >
          <div className="hidden sm:block">
            <OrnateFrame />
          </div>
          <div
            className="inline-block px-5 sm:px-8 py-3 sm:py-4 border"
            style={{
              borderColor: "rgba(212,175,55,0.3)",
              background: "rgba(212,175,55,0.04)",
              backdropFilter: "blur(10px)",
            }}
          >
            <p
              className="font-cinzel text-[8px] sm:text-[10px] tracking-[0.4em] sm:tracking-[0.5em] uppercase mb-0.5 sm:mb-1"
              style={{ color: "rgba(212,175,55,0.7)" }}
            >
              Sacred Union
            </p>
            <p
              className="font-cormorant font-semibold text-lg sm:text-xl md:text-2xl whitespace-nowrap"
              style={{ color: "#F5E6A3" }}
            >
              Thursday, 25<sup>th</sup> June 2026
            </p>
            <p
              className="font-garamond text-[10px] sm:text-xs mt-0.5 sm:mt-1"
              style={{ color: "rgba(245,230,163,0.65)" }}
            >
              10:30 a.m. – 11:30 a.m.
            </p>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          variants={itemVariants}
          className="mt-6 sm:mt-8 flex flex-col items-center gap-1.5"
        >
          <p
            className="font-cinzel text-[8px] sm:text-[10px] tracking-[0.3em] sm:tracking-[0.4em] uppercase"
            style={{ color: "rgba(212,175,55,0.5)" }}
          >
            Scroll to explore
          </p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{ color: "#D4AF37" }}
          >
            <ChevronDown size={16} className="sm:w-5 sm:h-5" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}