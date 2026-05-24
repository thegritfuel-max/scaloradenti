import { useState } from "react";
import { ArrowUpRight, Play, Star, ShieldCheck, HeartPulse, Award, Calendar, Lightbulb } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeroProps {
  onBookClick: () => void;
  onVideoModalOpen: () => void;
}

export default function Hero({ onBookClick, onVideoModalOpen }: HeroProps) {
  const doctorImage = "/src/assets/images/lead_dentist_portrait_1779615704138.png";

  return (
    <section className="relative min-h-screen bg-[#F8FBFF] pt-32 pb-20 overflow-hidden" id="hero">
      
      {/* Decorative High-End Ambient Blobs & Grid overlays */}
      <div className="absolute top-[-10%] left-[-5%] w-[45vw] h-[45vw] bg-sky-200/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[30%] right-[-10%] w-[40vw] h-[40vw] bg-blue-100/30 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Grid Pattern mask */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.35] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Text and CTA Column */}
          <div className="lg:col-span-7 space-y-8 pr-2">
            
            {/* Small Elegant Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-sky-600 font-sans text-xs font-semibold shadow-sm"
            >
              <ShieldCheck className="w-4 h-4 text-sky-500" />
              <span>Beverly Hills' Ultimate Dental Studio</span>
            </motion.div>

            {/* Large Typography Header */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-5xl sm:text-6xl md:text-[68px] font-sans font-bold tracking-tight text-slate-950 leading-[1.08]"
              >
                Creating <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-sky-600 to-slate-900">
                  Beautiful Smiles
                </span> <br />
                With Precision.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="text-slate-500 font-sans text-base md:text-lg max-w-2xl leading-relaxed"
              >
                Welcome to Scalora Dental Studio. Led by renowned facial sculptors and laser dental specialists, we craft bespoke smiles in a relaxing, sensory-designed environment.
              </motion.p>
            </div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1"
            >
              <button
                onClick={onBookClick}
                className="group flex items-center justify-center gap-3 bg-slate-950 hover:bg-slate-900 text-white font-bold tracking-wide uppercase text-xs px-8 py-4.5 rounded-full shadow-lg hover:shadow-slate-950/25 transition-all duration-300 transform hover:scale-[1.02]"
              >
                <Calendar className="w-4 h-4 text-sky-400 group-hover:rotate-12 duration-200" />
                <span>Book Appointment</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-sky-300 transition-colors" />
              </button>

              <button
                onClick={onVideoModalOpen}
                className="group flex items-center justify-center gap-3 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-bold tracking-wide uppercase text-xs px-8 py-4.5 rounded-full shadow-md duration-300"
              >
                <span className="w-8 h-8 rounded-full bg-sky-50 text-sky-600 group-hover:bg-sky-500 group-hover:text-white transition-all flex items-center justify-center">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </span>
                <span>Watch Clinic Tour</span>
              </button>
            </motion.div>

            {/* Trust highlights & Staggered stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="border-t border-slate-200/80 pt-8 mt-4 grid grid-cols-3 gap-6 mr-6"
            >
              <div>
                <span className="text-3xl md:text-4xl font-sans font-extrabold text-slate-900 tracking-tight block">
                  24X7
                </span>
                <span className="text-[10px] md:text-xs text-slate-400 font-sans tracking-wide uppercase font-semibold">
                  Emergency Care
                </span>
              </div>
              <div className="border-l border-slate-200 pl-6">
                <span className="text-3xl md:text-4xl font-sans font-extrabold text-slate-900 tracking-tight block">
                  18k+
                </span>
                <span className="text-[10px] md:text-xs text-slate-400 font-sans tracking-wide uppercase font-semibold">
                  Smiles Perfected
                </span>
              </div>
              <div className="border-l border-slate-200 pl-6">
                <span className="text-3xl md:text-4xl font-sans font-extrabold text-sky-500 tracking-tight block flex items-center gap-0.5">
                  4.9★
                </span>
                <span className="text-[10px] md:text-xs text-slate-400 font-sans tracking-wide uppercase font-semibold">
                  Google Top Rating
                </span>
              </div>
            </motion.div>

          </div>

          {/* Right Image Space Column */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mx-auto max-w-[380px] sm:max-w-[420px]"
            >
              {/* Doctor Frame */}
              <div className="relative rounded-[40px] overflow-hidden border-8 border-white bg-slate-100 shadow-2xl skew-y-1 transform hover:skew-y-0 transition-transform duration-700">
                <img
                  src={doctorImage}
                  alt="Dr. Julian Scalora"
                  className="w-full h-[470px] object-cover object-top hover:scale-105 duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Micro Shade Layer inside card */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

                {/* Micro credit signature on doctor image */}
                <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-white">
                  <div>
                    <span className="text-xs text-sky-300 uppercase tracking-widest block font-mono">Founder</span>
                    <span className="text-sm font-bold block">Dr. Julian Scalora</span>
                  </div>
                  <div className="px-2.5 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] uppercase font-mono tracking-widest text-slate-100">
                    Columbia Graduate
                  </div>
                </div>
              </div>

              {/* FLOATING ACTIVE INFORMATION CARD #1 */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute -right-6 top-[20%] bg-white border border-slate-100 p-4 rounded-2xl shadow-xl flex items-center gap-3 shrink-0 max-w-[200px]"
              >
                <div className="p-2.5 rounded-xl bg-sky-50 text-sky-500">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 font-mono uppercase font-bold tracking-wide block">Gold Level</span>
                  <span className="text-xs text-slate-800 font-bold">Invisalign® Preferred Provider</span>
                </div>
              </motion.div>

              {/* FLOATING ACTIVE INFORMATION CARD #2 */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="absolute -left-6 bottom-[10%] bg-slate-900 text-white p-4 rounded-2xl shadow-xl flex items-center gap-3 min-w-[210px] shrink-0"
              >
                <div className="p-2.5 rounded-xl bg-sky-400 text-slate-950">
                  <HeartPulse className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <span className="text-[9px] text-sky-300 font-mono uppercase tracking-widest block font-bold">Client Comfort</span>
                  <p className="text-[11px] text-slate-200">Sensory VR & Warm Towels</p>
                </div>
              </motion.div>

              {/* Micro pulse glowing effect behind doctor */}
              <div className="absolute -z-10 top-[15%] left-[15%] w-72 h-72 rounded-full border border-sky-400/20 animate-[ping_4s_infinite]" />
              <div className="absolute -z-10 bottom-[20%] right-[10%] w-80 h-80 rounded-full border border-blue-400/10 animate-[ping_6s_infinite]" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
