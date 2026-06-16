"use client";

import { GraduationCap, Briefcase, Heart } from "lucide-react";
import { motion, Variants, useInView } from "framer-motion";
import { useRef } from "react";

function FloralDivider() {
  return (
    <motion.div 
      className="flex items-center justify-center gap-3 my-6"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="h-px w-16" style={{ background: "rgba(212,175,55,0.4)" }} />
      <motion.svg 
        viewBox="0 0 40 40" 
        className="w-6 h-6" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        animate={{ rotate: 360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <circle cx="20" cy="20" r="4" fill="#D4AF37" />
        <circle cx="20" cy="8" r="2.5" fill="#D4AF37" opacity="0.6" />
        <circle cx="20" cy="32" r="2.5" fill="#D4AF37" opacity="0.6" />
        <circle cx="8" cy="20" r="2.5" fill="#D4AF37" opacity="0.6" />
        <circle cx="32" cy="20" r="2.5" fill="#D4AF37" opacity="0.6" />
        <circle cx="11.5" cy="11.5" r="2" fill="#D4AF37" opacity="0.4" />
        <circle cx="28.5" cy="11.5" r="2" fill="#D4AF37" opacity="0.4" />
        <circle cx="11.5" cy="28.5" r="2" fill="#D4AF37" opacity="0.4" />
        <circle cx="28.5" cy="28.5" r="2" fill="#D4AF37" opacity="0.4" />
      </motion.svg>
      <div className="h-px w-16" style={{ background: "rgba(212,175,55,0.4)" }} />
    </motion.div>
  );
}

function PersonCard({
  role,
  name,
  credential,
  workplace,
  description,
  isGroom,
  index,
}: {
  role: string;
  name: string;
  credential: string;
  workplace?: string;
  description: string;
  isGroom: boolean;
  index: number;
}) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  const cardVariants: Variants = {
    hidden: { 
      opacity: 0,
      x: index === 0 ? -50 : 50,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: index * 0.2,
      },
    },
  };

  const contentVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: 0.3 + index * 0.1,
      },
    },
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative card-hover p-8 md:p-12 rounded-sm"
      style={{
        background: isGroom
          ? "linear-gradient(135deg, #7F1D1D 0%, #5C1515 100%)"
          : "linear-gradient(135deg, #FFF8E7 0%, #F8F5F0 100%)",
        border: `1px solid ${isGroom ? "rgba(212,175,55,0.4)" : "rgba(127,29,29,0.2)"}`,
        boxShadow: isGroom
          ? "0 20px 60px rgba(127,29,29,0.3)"
          : "0 20px 60px rgba(0,0,0,0.08)",
      }}
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      whileHover={{
        scale: 1.02,
        boxShadow: isGroom
          ? "0 30px 80px rgba(127,29,29,0.4)"
          : "0 30px 80px rgba(0,0,0,0.12)",
        transition: { duration: 0.3 },
      }}
    >
      {/* Corner ornaments with animations */}
      {["top-3 left-3", "top-3 right-3", "bottom-3 left-3", "bottom-3 right-3"].map(
        (pos, i) => (
          <motion.span
            key={i}
            className={`absolute ${pos} w-4 h-4`}
            style={{
              borderTop: i < 2 ? `1px solid ${isGroom ? "rgba(212,175,55,0.5)" : "rgba(127,29,29,0.3)"}` : "none",
              borderBottom: i >= 2 ? `1px solid ${isGroom ? "rgba(212,175,55,0.5)" : "rgba(127,29,29,0.3)"}` : "none",
              borderLeft: i % 2 === 0 ? `1px solid ${isGroom ? "rgba(212,175,55,0.5)" : "rgba(127,29,29,0.3)"}` : "none",
              borderRight: i % 2 === 1 ? `1px solid ${isGroom ? "rgba(212,175,55,0.5)" : "rgba(127,29,29,0.3)"}` : "none",
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
            transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
          />
        )
      )}

      <motion.div 
        className="text-center"
        variants={contentVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Role badge */}
        <motion.p
          className="font-cinzel text-xs tracking-[0.5em] uppercase mb-4"
          style={{ color: isGroom ? "rgba(212,175,55,0.7)" : "rgba(127,29,29,0.6)" }}
          whileHover={{ 
            letterSpacing: "0.8em",
            transition: { duration: 0.3 }
          }}
        >
          {role}
        </motion.p>

        {/* Avatar placeholder with initials */}
        <motion.div 
          className="mx-auto mb-6 relative"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="w-28 h-28 rounded-full mx-auto flex items-center justify-center border-2"
            style={{
              background: isGroom
                ? "rgba(212,175,55,0.12)"
                : "rgba(127,29,29,0.08)",
              borderColor: isGroom ? "rgba(212,175,55,0.5)" : "rgba(127,29,29,0.3)",
            }}
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 300,
              damping: 20,
              delay: 0.4 + index * 0.1,
            }}
          >
            <motion.span
              className="font-cormorant italic text-4xl font-bold"
              style={{ color: isGroom ? "#D4AF37" : "#7F1D1D" }}
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : { scale: 0 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
            >
              {name.split(" ").slice(-1)[0][0]}
            </motion.span>
          </motion.div>
          {/* Halo ring */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              border: `1px solid ${isGroom ? "rgba(212,175,55,0.2)" : "rgba(127,29,29,0.15)"}`,
              transform: "scale(1.15)",
            }}
            animate={{
              scale: [1.15, 1.25, 1.15],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.5,
            }}
          />
        </motion.div>

        {/* Name */}
        <motion.h2
          className="font-cormorant italic font-bold text-3xl md:text-4xl mb-2"
          style={{ color: isGroom ? "#F5E6A3" : "#7F1D1D" }}
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
        >
          {name}
        </motion.h2>
        <motion.p
          className="font-cinzel text-xs tracking-widest uppercase mb-6"
          style={{ color: isGroom ? "rgba(212,175,55,0.8)" : "rgba(127,29,29,0.7)" }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
        >
          {credential}
        </motion.p>

        <FloralDivider />

        <motion.p
          className="font-garamond text-base leading-relaxed"
          style={{ color: isGroom ? "rgba(245,230,163,0.85)" : "rgba(43,43,43,0.75)" }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
        >
          {description}
        </motion.p>

        {workplace && (
          <motion.div
            className="mt-5 flex items-center justify-center gap-2"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.5,
              }}
            >
              <Briefcase
                size={13}
                style={{ color: isGroom ? "rgba(212,175,55,0.7)" : "rgba(127,29,29,0.6)" }}
              />
            </motion.div>
            <p
              className="font-cinzel text-xs tracking-wider"
              style={{ color: isGroom ? "rgba(212,175,55,0.7)" : "rgba(127,29,29,0.6)" }}
            >
              {workplace}
            </p>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}

export default function CoupleSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const sectionVariants: Variants = {
    hidden: { opacity: 0 },
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
      y: -30,
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

  const subtitleVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  const heartVariants: Variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
        delay: 0.3,
      },
    },
  };

  const dividerVariants: Variants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2,
      },
    },
  };

  const bottomVariants: Variants = {
    hidden: { 
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        delay: 0.8,
      },
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      id="couple"
      className="py-10 relative overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Background */}
      <div className="absolute inset-0 silk-texture opacity-30" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.p
            className="font-cinzel text-xs tracking-[0.6em] uppercase mb-4"
            style={{ color: "#D4AF37" }}
            variants={subtitleVariants}
          >
            The Blessed Union
          </motion.p>
          <motion.h2
            className="font-cormorant italic text-4xl md:text-6xl mb-4"
            style={{ color: "#7F1D1D" }}
            variants={headerVariants}
          >
            The Couple
          </motion.h2>
          <div className="flex items-center justify-center gap-4">
            <motion.div 
              className="h-px w-24" 
              style={{ background: "rgba(212,175,55,0.5)" }}
              variants={dividerVariants}
            />
            <motion.div
              variants={heartVariants}
              whileHover={{ 
                scale: 1.3,
                rotate: 20,
                transition: { duration: 0.3 }
              }}
            >
              <Heart size={14} style={{ color: "#D4AF37" }} />
            </motion.div>
            <motion.div 
              className="h-px w-24" 
              style={{ background: "rgba(212,175,55,0.5)" }}
              variants={dividerVariants}
            />
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <PersonCard
            role="The Groom"
            name="A. Surya"
            credential="B.E. — Bachelor of Engineering"
            workplace="Anbu Finance & Consulting, Dharmapuri"
            description="Son of Mr. M.R. Anbalagan & Mrs. A. Thenmozhi, S. Kalpana of Mathikopalayam, Dharmapuri Town."
            isGroom={true}
            index={0}
          />
          <PersonCard
            role="The Bride"
            name="Dr. R. Jansi"
            credential="B.D.S. — Bachelor of Dental Surgery"
            description="Daughter of Mr. K. Ravi & Mrs. R. Pachiyammal of Deveerahalli, Krishnagiri District."
            isGroom={false}
            index={1}
          />
        </div>

        {/* Center joining symbol */}
        <motion.div 
          className="text-center mt-16"
          variants={bottomVariants}
        >
          <motion.div
            className="inline-flex flex-col items-center gap-3 px-10 py-6 rounded-sm"
            style={{
              background: "rgba(127,29,29,0.05)",
              border: "1px solid rgba(212,175,55,0.25)",
            }}
            whileHover={{
              scale: 1.02,
              borderColor: "rgba(212,175,55,0.5)",
              boxShadow: "0 10px 40px rgba(212,175,55,0.1)",
              transition: { duration: 0.3 },
            }}
          >
            <motion.p
              className="font-cormorant italic text-3xl"
              style={{ color: "#7F1D1D" }}
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ delay: 1.0, duration: 0.5 }}
            >
              Two families, one destiny
            </motion.p>
            
            {/* Animated sparkle dots */}
            <motion.div 
              className="flex gap-2"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="w-2 h-2 rounded-full"
                  style={{ background: "#D4AF37" }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}