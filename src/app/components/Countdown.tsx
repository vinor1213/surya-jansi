"use client";

import { useEffect, useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(): TimeLeft {
  const wedding = new Date("2026-06-25T10:30:00+05:30").getTime();
  const now = new Date().getTime();
  const diff = Math.max(0, wedding - now);

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((diff % (1000 * 60)) / 1000),
  };
}

function TimeUnit({ value, label }: { value: number; label: string }) {
  // Animation for number changes
  const numberVariants: Variants = {
    initial: { 
      opacity: 0, 
      y: -20,
      scale: 0.8 
    },
    animate: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      }
    },
    exit: { 
      opacity: 0, 
      y: 20,
      scale: 0.8,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      }
    }
  };

  return (
    <motion.div 
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className="relative w-20 h-20 md:w-28 md:h-28 flex items-center justify-center rounded-sm"
        style={{
          background: "rgba(127,29,29,0.08)",
          border: "1px solid rgba(212,175,55,0.35)",
          boxShadow: "inset 0 0 20px rgba(212,175,55,0.05), 0 4px 20px rgba(0,0,0,0.08)",
        }}
        whileHover={{ 
          scale: 1.05,
          borderColor: "rgba(212,175,55,0.6)",
          transition: { duration: 0.2 }
        }}
      >
        {/* Corner accents */}
        <span
          className="absolute top-1.5 left-1.5 w-2 h-2 border-t border-l"
          style={{ borderColor: "#D4AF37" }}
        />
        <span
          className="absolute top-1.5 right-1.5 w-2 h-2 border-t border-r"
          style={{ borderColor: "#D4AF37" }}
        />
        <span
          className="absolute bottom-1.5 left-1.5 w-2 h-2 border-b border-l"
          style={{ borderColor: "#D4AF37" }}
        />
        <span
          className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b border-r"
          style={{ borderColor: "#D4AF37" }}
        />

        {/* Animated number */}
        <AnimatePresence mode="wait">
          <motion.span
            key={value}
            className="font-cinzel font-bold text-3xl md:text-4xl"
            style={{ color: "#7F1D1D" }}
            variants={numberVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {String(value).padStart(2, "0")}
          </motion.span>
        </AnimatePresence>

        {/* Subtle pulse glow */}
        <motion.div
          className="absolute inset-0 rounded-sm"
          style={{
            background: "radial-gradient(circle at center, rgba(212,175,55,0.05), transparent 70%)",
          }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
      <motion.p
        className="font-cinzel text-xs tracking-[0.3em] uppercase mt-3"
        style={{ color: "rgba(127,29,29,0.7)" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        {label}
      </motion.p>
    </motion.div>
  );
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Animation variants
  const sectionVariants: Variants = {
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

  const headerVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: -30 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const countdownContainerVariants: Variants = {
    hidden: { 
      opacity: 0,
      scale: 0.95 
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const separatorVariants: Variants = {
    hidden: { 
      opacity: 0,
      scale: 0.5 
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const infoVariants: Variants = {
    hidden: { 
      opacity: 0,
      y: 30 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const infoItemVariants: Variants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.95 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      className="py-10 relative overflow-hidden"
      style={{ backgroundColor: "#FFF8E7" }}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 kolam-bg opacity-40" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Header */}
        <motion.div variants={headerVariants}>
          <motion.p
            className="font-cinzel text-xs tracking-[0.5em] uppercase mb-4"
            style={{ color: "#D4AF37" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Counting Down To
          </motion.p>
          <motion.h2
            className="font-cormorant italic text-4xl md:text-5xl mb-3"
            style={{ color: "#7F1D1D" }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            The Auspicious Day
          </motion.h2>
          <motion.p
            className="font-tamil text-base mb-12"
            style={{ color: "rgba(43,43,43,0.6)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            ஆனி மாதம் 11-ஆம் தேதி · வியாழக்கிழமை
          </motion.p>
        </motion.div>

        {/* Countdown units */}
        <motion.div 
          className="flex items-start justify-center gap-4 md:gap-8"
          variants={countdownContainerVariants}
        >
          <TimeUnit value={timeLeft.days} label="Days" />
          
          <motion.div
            className="text-3xl md:text-4xl font-cormorant mt-5 md:mt-8"
            style={{ color: "#D4AF37" }}
            variants={separatorVariants}
          >
            :
          </motion.div>
          
          <TimeUnit value={timeLeft.hours} label="Hours" />
          
          <motion.div
            className="text-3xl md:text-4xl font-cormorant mt-5 md:mt-8"
            style={{ color: "#D4AF37" }}
            variants={separatorVariants}
          >
            :
          </motion.div>
          
          <TimeUnit value={timeLeft.minutes} label="Minutes" />
          
          <motion.div
            className="text-3xl md:text-4xl font-cormorant mt-5 md:mt-8"
            style={{ color: "#D4AF37" }}
            variants={separatorVariants}
          >
            :
          </motion.div>
          
          <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </motion.div>

        {/* Nakshatra info */}
        <motion.div
          className="mt-16 inline-flex flex-wrap items-center justify-center gap-6 md:gap-12 px-10 py-5 border rounded-sm"
          style={{
            borderColor: "rgba(212,175,55,0.3)",
            background: "rgba(212,175,55,0.04)",
          }}
          variants={infoVariants}
        >
          {[
            { label: "Vaaram", value: "Viyaazha Kilamai" },
            { label: "Natchathiram", value: "Swathi" },
            { label: "Yogam", value: "Amirtha Yogam" },
            { label: "Lagnam", value: "Midhunam" },
          ].map((item, index) => (
            <motion.div 
              key={item.label} 
              className="text-center"
              variants={infoItemVariants}
              custom={index}
            >
              <motion.p
                className="font-cinzel text-xs tracking-widest uppercase mb-1"
                style={{ color: "rgba(127,29,29,0.6)" }}
                whileHover={{ color: "#D4AF37" }}
              >
                {item.label}
              </motion.p>
              <motion.p
                className="font-cormorant italic text-lg"
                style={{ color: "#7F1D1D" }}
                whileHover={{ scale: 1.05, color: "#D4AF37" }}
              >
                {item.value}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}