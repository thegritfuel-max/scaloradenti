import React, { useState } from "react";
import { Phone, Mail, MapPin, MailCheck, Twitter, Instagram, Linkedin, HeartPulse, Send, Calendar, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface PremiumFooterProps {
  onBookClick: () => void;
}

export default function PremiumFooter({ onBookClick }: PremiumFooterProps) {
  const [emailSub, setEmailSub] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailSub.trim() || !emailSub.includes("@")) return;
    setIsSubscribed(true);
    setEmailSub("");
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-16 px-6 border-t border-slate-900 overflow-hidden relative">
      
      {/* Decorative vector background */}
      <div className="absolute top-0 right-[20%] w-96 h-96 bg-sky-505 bg-sky-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Column 1 - Brand description */}
        <div className="lg:col-span-4 space-y-6">
          <div className="flex items-center gap-2.5">
            <div className="p-2.5 bg-sky-500 text-slate-950 rounded-full">
              <HeartPulse className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <span className="text-white font-extrabold tracking-wider font-sans text-base block leading-none">
                SCALORA
              </span>
              <span className="text-sky-400 uppercase tracking-[0.25em] font-bold text-[9px] block mt-1">
                Dental Studio
              </span>
            </div>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed font-sans font-normal max-w-sm">
            Scalora Dental Studio represents the absolute synthesis of restorative clinical accuracy and premium tranquil hospitality. Located inside Beverly Hills' premier medical quarters.
          </p>

          {/* Socials verified */}
          <div className="flex items-center gap-3 pt-2">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-slate-900 hover:bg-sky-500 hover:text-slate-950 duration-200 border border-slate-800 rounded-xl" title="Instagram">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-slate-900 hover:bg-sky-500 hover:text-slate-950 duration-200 border border-slate-800 rounded-xl" title="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2.5 bg-slate-900 hover:bg-sky-500 hover:text-slate-950 duration-200 border border-slate-800 rounded-xl" title="Twitter">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Column 2 - Quick navigational links */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="text-xs uppercase tracking-widest font-mono text-white font-bold">Navigations</h4>
          <ul className="space-y-2.5 text-xs font-sans font-medium">
            <li>
              <a href="#story" className="hover:text-sky-400 transition-colors">Our Story</a>
            </li>
            <li>
              <a href="#services" className="hover:text-sky-400 transition-colors">Bespoke Services</a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-sky-400 transition-colors">Smile Case Studies</a>
            </li>
            <li>
              <a href="#doctors" className="hover:text-sky-400 transition-colors">Master Surgeons</a>
            </li>
            <li>
              <a href="#faqs" className="hover:text-sky-400 transition-colors">FAQs</a>
            </li>
          </ul>
        </div>

        {/* Column 3 - Clinical Hours & Info */}
        <div className="lg:col-span-3 space-y-4 font-sans text-xs">
          <h4 className="text-xs uppercase tracking-widest font-mono text-white font-bold">Studio Hours</h4>
          <ul className="space-y-2 leading-relaxed">
            <li className="flex justify-between border-b border-slate-900 pb-1.5">
              <span>Monday - Thursday</span>
              <span className="text-slate-200 font-bold">08:00 AM - 05:00 PM</span>
            </li>
            <li className="flex justify-between border-b border-slate-900 pb-1.5">
              <span>Friday block</span>
              <span className="text-slate-200 font-bold">08:00 AM - 02:00 PM</span>
            </li>
            <li className="flex justify-between border-b border-slate-900 pb-1.5 text-rose-400 font-bold">
              <span>Surgical Emergency</span>
              <span>24 Hours Active</span>
            </li>
          </ul>

          <div className="space-y-2.5 pt-3 border-t border-slate-900 font-sans">
            <a href="tel:+13105550190" className="flex items-center gap-2 hover:text-sky-400 transition-colors">
              <Phone className="w-4 h-4 text-sky-500" />
              <span>+1 (310) 555-0190</span>
            </a>
            <a href="mailto:concierge@scaloradental.com" className="flex items-center gap-2 hover:text-sky-400 transition-colors">
              <Mail className="w-4 h-4 text-sky-500" />
              <span>concierge@scaloradental.com</span>
            </a>
          </div>
        </div>

        {/* Column 4 - Dynamic Maps & Newsletter */}
        <div className="lg:col-span-3 space-y-4">
          <h4 className="text-xs uppercase tracking-widest font-mono text-white font-bold">Our Location</h4>
          
          {/* Aesthetic Mock Google Map Panel */}
          <div className="bg-slate-900/80 border border-slate-800 p-3.5 rounded-2xl relative select-none">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-5 h-5 text-rose-500 shrink-0 mt-0.5 animate-bounce" />
              <div>
                <span className="text-slate-200 text-[11px] font-bold block">Scalora Dental Suite</span>
                <span className="text-slate-500 text-[9px] font-mono leading-relaxed block mt-0.5">
                  9454 Wilshire Blvd, <br />Beverly Hills, CA 90212
                </span>
              </div>
            </div>

            {/* Simulated map route directions button */}
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block text-center bg-slate-950 hover:bg-slate-800/80 text-white font-bold text-[9px] uppercase tracking-widest py-2 rounded-xl transition-all border border-slate-800"
            >
              Get GPS Directions
            </a>
          </div>

          {/* Newsletter section */}
          <div className="space-y-2 pt-2 border-t border-slate-900">
            <span className="text-[10px] uppercase font-bold text-slate-400 block font-mono">Smile Insights Bulletin</span>
            <AnimatePresence mode="wait">
              {!isSubscribed ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubscribe}
                  className="flex gap-2"
                >
                  <input
                    type="email"
                    placeholder="Enter email..."
                    value={emailSub}
                    onChange={(e) => setEmailSub(e.target.value)}
                    className="flex-1 min-w-0 bg-slate-900/50 border border-slate-800 text-xs px-3.5 py-2 rounded-xl focus:outline-none focus:border-sky-500 text-white"
                  />
                  <button
                    type="submit"
                    className="p-2.5 bg-sky-500 text-slate-950 hover:bg-sky-400 rounded-xl transition-all font-bold shrink-0"
                    title="Subscribe"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-2.5 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 text-[10px] font-sans font-bold flex items-center gap-2 justify-center"
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Elite subscription synchronized!</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>

      {/* Copyright row details */}
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-600 gap-4 font-mono">
        <div>
          <span>© 2026 Scalora Dental Studio. All rights reserved. Dr. Julian Scalora, DDS.</span>
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-slate-400 transition-colors">HIPAA Compliance</a>
          <span>●</span>
          <a href="#" className="hover:text-slate-400 transition-colors">Privacy Charter</a>
        </div>
      </div>
    </footer>
  );
}
