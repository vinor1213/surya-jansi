"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Couple", href: "#couple" },
  { label: "Families", href: "#families" },
  { label: "Event", href: "#event" },
  { label: "Venue", href: "#venue" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation variants
  const navVariants: Variants = {
    hidden: { 
      y: -100,
      opacity: 0 
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const logoVariants: Variants = {
    hidden: { 
      opacity: 0,
      x: -20 
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const linkContainerVariants: Variants = {
    hidden: { 
      opacity: 0 
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const linkVariants: Variants = {
    hidden: { 
      opacity: 0,
      y: -10 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const mobileMenuVariants: Variants = {
    hidden: { 
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const mobileLinkVariants: Variants = {
    hidden: { 
      opacity: 0,
      x: -20 
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const mobileLinkContainerVariants: Variants = {
    hidden: { 
      opacity: 0 
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "nav-blur bg-maroon-dark/90 shadow-maroon py-3"
          : "bg-transparent py-5"
      }`}
      style={{ 
        backgroundColor: scrolled ? "rgba(92,21,21,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(10px)" : "none",
      }}
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#home"
          className="flex items-center gap-2 group"
          variants={logoVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div 
            className="w-8 h-8 rounded-full border border-gold-DEFAULT flex items-center justify-center transition-all duration-300 group-hover:shadow-gold"
            style={{ borderColor: "#D4AF37" }}
          >
            <span className="font-cinzel text-xs font-bold" style={{ color: "#D4AF37" }}>
              S&amp;J
            </span>
          </div>
          <motion.span 
            className="font-cinzel text-sm tracking-widest hidden sm:block" 
            style={{ color: "#D4AF37" }}
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            SURYA · JANSI
          </motion.span>
        </motion.a>

        {/* Desktop nav */}
        <motion.ul 
          className="hidden lg:flex items-center gap-8"
          variants={linkContainerVariants}
          initial="hidden"
          animate="visible"
        >
          {navLinks.map((link) => (
            <motion.li key={link.href} variants={linkVariants}>
              <a
                href={link.href}
                className="font-cinzel text-xs tracking-widest transition-colors duration-200 relative"
                style={{ color: "rgba(245,230,163,0.85)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "#D4AF37")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(245,230,163,0.85)")
                }
              >
                {link.label}
                {/* Underline animation */}
                <motion.span
                  className="absolute -bottom-0.5 left-0 w-full h-[1px] bg-gold-DEFAULT"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ transformOrigin: "left" }}
                />
              </a>
            </motion.li>
          ))}
        </motion.ul>

        {/* Mobile menu button */}
        <motion.button
          className="lg:hidden p-2 rounded"
          style={{ color: "#D4AF37" }}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{ rotate: mobileOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </motion.button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="lg:hidden nav-blur border-t overflow-hidden"
            style={{
              backgroundColor: "rgba(92,21,21,0.97)",
              borderColor: "rgba(212,175,55,0.3)",
            }}
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <motion.ul 
              className="flex flex-col py-4"
              variants={mobileLinkContainerVariants}
              initial="hidden"
              animate="visible"
            >
              {navLinks.map((link) => (
                <motion.li key={link.href} variants={mobileLinkVariants}>
                  <a
                    href={link.href}
                    className="block px-8 py-3 font-cinzel text-sm tracking-widest transition-colors hover:bg-gold-DEFAULT/10"
                    style={{ color: "rgba(245,230,163,0.9)" }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}