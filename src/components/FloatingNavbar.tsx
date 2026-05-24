import React, { useState, useEffect } from "react";
import { Menu, X, Phone, Calendar, HeartPulse } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface FloatingNavbarProps {
  onBookClick: () => void;
  onConsultClick: () => void;
}

export default function FloatingNavbar({ onBookClick, onConsultClick }: FloatingNavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Our Story", href: "#story" },
    { name: "Services", href: "#services" },
    { name: "Smile Gallery", href: "#gallery" },
    { name: "Why Scalora", href: "#why-choose-us" },
    { name: "Our Experts", href: "#doctors" },
    { name: "FAQs", href: "#faqs" },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl rounded-full transition-all duration-350 ${
          isScrolled
            ? "bg-white/90 backdrop-blur-xl shadow-md border border-slate-200/80 py-2.5 px-6"
            : "bg-white/70 backdrop-blur-xl border border-white/40 shadow-sm py-3.5 px-8"
        }`}
        id="luxury-navbar"
      >
        <div className="flex items-center justify-between">
          {/* Logo Brand */}
          <a
            href="#"
            className="flex items-center gap-2.5 group"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <div className="p-2 rounded-xl bg-sky-50 text-sky-500 transition-colors duration-300 group-hover:bg-sky-500 group-hover:text-white">
              <HeartPulse className="w-5 h-5 animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-[17px] font-bold tracking-tight font-sans text-slate-900">
                SCALORA
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] font-bold text-sky-500">
                Dental Studio
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-[13px] font-semibold tracking-wide transition-colors duration-200 relative group py-1 text-slate-700 hover:text-sky-500"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] transition-all duration-300 group-hover:w-full bg-sky-500" />
              </a>
            ))}
          </div>

          {/* Contact & CTA Buttons */}
          <div className="hidden md:flex items-center gap-5">
            <a
              href="tel:+13105550190"
              className="flex items-center gap-2 text-xs font-semibold py-2 px-4 rounded-full transition-all duration-300 text-slate-600 hover:text-sky-500 bg-slate-50 hover:bg-sky-50/50 border border-slate-100"
            >
              <Phone className="w-3.5 h-3.5 text-sky-500" />
              <span>+1 (310) 555-0190</span>
            </a>

            <button
              onClick={onBookClick}
              className="flex items-center gap-2 text-xs font-bold tracking-wide uppercase px-6 py-2.5 rounded-full shadow-md hover:bg-opacity-95 transition-all bg-slate-900 text-white hover:bg-slate-800"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Reserve Slot</span>
            </button>
          </div>

          {/* Mobile Hamburguer */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={onConsultClick}
              className={`p-2 rounded-full transition-colors duration-200 ${
                isScrolled ? "bg-slate-800 text-sky-400" : "bg-sky-50 text-sky-600"
              }`}
              title="Virtual Dental AI AI Chat"
            >
              <HeartPulse className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-full text-slate-900"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Slideout */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-24 left-6 right-6 z-40 bg-white/95 backdrop-blur-xl border border-slate-200/80 rounded-3xl p-6 shadow-xl flex flex-col gap-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-slate-800 hover:text-sky-500 text-sm font-semibold tracking-wide py-2 border-b border-slate-100"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="flex flex-col gap-3 pt-2">
              <a
                href="tel:+13105550190"
                className="flex items-center justify-center gap-2 bg-slate-50 text-slate-800 text-xs font-semibold py-3 px-4 rounded-xl border border-slate-100"
              >
                <Phone className="w-3.5 h-3.5 text-sky-500" />
                <span>+1 (310) 555-0190</span>
              </a>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onBookClick();
                }}
                className="flex items-center justify-center gap-2 bg-slate-900 text-white text-xs font-bold uppercase py-3 px-4 rounded-xl shadow-md"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Reserve Slot Now</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
