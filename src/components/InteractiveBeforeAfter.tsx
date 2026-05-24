import React, { useState, useRef, useEffect } from "react";
import { Sparkles, MoveHorizontal } from "lucide-react";
import { motion } from "motion/react";

export default function InteractiveBeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0-100)
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const beforeImage = "/src/assets/images/smile_before_treatment_1779615724402.png";
  const afterImage = "/src/assets/images/smile_after_treatment_1779615744230.png";

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const position = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(position);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleClickMove = (e: React.MouseEvent) => {
    handleMove(e.clientX);
  };

  return (
    <section id="gallery" className="py-24 bg-white relative overflow-hidden">
      {/* Background soft glowing orb */}
      <div className="absolute top-1/4 right-[10%] w-96 h-96 bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-[5%] w-80 h-80 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-sky-600 text-xs font-semibold mb-4"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Smile Transformation Gallery</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-sans font-bold tracking-tight text-slate-900 max-w-3xl leading-tight"
          >
            Real Patient Smile Makeovers
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-500 font-sans mt-4 max-w-xl text-base"
          >
            Hover or drag the clinic divider below to witness the extreme therapeutic transformation from natural anomalies to porcelain perfection.
          </motion.p>
        </div>

        {/* Triple Column Presentation - Left Panel, Middle Slider, Right Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Clinical Case Info panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 space-y-6"
          >
            <h3 className="text-xl font-bold text-slate-900 border-b pb-4 border-slate-100 flex items-center justify-between">
              <span>Case Study 401</span>
              <span className="text-xs bg-emerald-50 text-emerald-600 px-2 py-1 rounded">Active Veneers</span>
            </h3>

            <div className="space-y-4">
              <div>
                <span className="text-xs text-slate-400 font-mono block uppercase">Anomalies Treated</span>
                <p className="text-sm text-slate-700 font-medium font-sans">Enamel discoloration, mild spacing issues, teeth wear.</p>
              </div>

              <div>
                <span className="text-xs text-slate-400 font-mono block uppercase">Procedures Applied</span>
                <p className="text-sm text-slate-700 font-medium font-sans">Laser gum re-contouring & 10 E-Max lithium disilicate translucent veneers.</p>
              </div>

              <div>
                <span className="text-xs text-slate-400 font-mono block uppercase">Patient Recovering</span>
                <p className="text-sm text-slate-700 font-medium font-sans">Zero recovery period. Fully functional in 48 hours.</p>
              </div>
            </div>

            <div className="p-4 bg-sky-50/50 rounded-2xl border border-sky-100/30">
              <span className="text-[11px] font-semibold text-sky-700 block uppercase mb-1">Dr. Julian Scalora Says:</span>
              <p className="text-xs text-slate-600 italic">
                \"We aligned the tooth arch flow precisely with the patient's lower lip curvature. The translucent disilicate porcelain reflects natural daylight perfectly.\"
              </p>
            </div>
          </motion.div>

          {/* Center Slider */}
          <div className="lg:col-span-6 flex justify-center">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative w-full max-w-[500px] h-[500px] select-none rounded-[32px] overflow-hidden border-4 border-white shadow-2xl bg-slate-100 touch-none"
              ref={containerRef}
              onClick={handleClickMove}
            >
              {/* After Treatment Image (Fully styled on bottom) */}
              <img
                src={afterImage}
                alt="After cosmetic veneer treatment"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                referrerPolicy="no-referrer"
              />

              {/* Before Treatment Image (Clipped on top half) */}
              <div
                className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
                style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
              >
                <img
                  src={beforeImage}
                  alt="Before treatment anomalies"
                  className="absolute inset-0 w-[500px] h-[500px] max-w-none object-cover pointer-events-none"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Slider Line Divider */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize flex items-center justify-center pointer-events-none shadow-lg"
                style={{ left: `${sliderPosition}%` }}
              >
                <div
                  className="w-10 h-10 bg-slate-900 border-2 border-white rounded-full flex items-center justify-center text-white cursor-ew-resize pointer-events-auto hover:bg-sky-500 hover:scale-110 active:scale-95 duration-200 shadow-xl"
                  onMouseDown={handleMouseDown}
                  onTouchStart={handleMouseDown}
                >
                  <MoveHorizontal className="w-5 h-5 text-sky-200 group-hover:text-white" />
                </div>
              </div>

              {/* Label Badges */}
              <div className="absolute top-4 left-4 bg-slate-950/70 p-2.5 rounded-xl text-white text-[10px] uppercase font-mono tracking-wider backdrop-blur-sm pointer-events-none">
                Before Care
              </div>
              <div className="absolute top-4 right-4 bg-sky-500/80 p-2.5 rounded-xl text-slate-955 text-[10px] uppercase font-mono tracking-wider backdrop-blur-sm pointer-events-none">
                After Luxury Care
              </div>
            </motion.div>
          </div>

          {/* Right Clinical Metrics Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 space-y-6 bg-slate-50 p-6 rounded-[24px] border border-slate-100"
          >
            <h4 className="text-sm font-bold text-slate-900 tracking-wider font-mono uppercase">Transformation Stats</h4>
            
            <div className="space-y-4">
              <div className="space-y-1">
                <span className="text-2xl font-bold text-sky-500 block">100%</span>
                <span className="text-xs text-slate-500 block">Biocompatible Materials</span>
                <div className="w-full h-1 bg-slate-200 rounded-full overflow-hidden">
                  <div className="w-full h-full bg-sky-400 rounded-full" />
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-2xl font-bold text-slate-900 block">0%</span>
                <span className="text-xs text-slate-500 block">Hypersensitivity Reported</span>
                <div className="w-full h-1 bg-slate-200 rounded-full overflow-hidden">
                  <div className="w-[1%] h-full bg-slate-900 rounded-full" />
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-2xl font-bold text-slate-900 block">15 yrs</span>
                <span className="text-xs text-slate-500 block">Average Ceramic Longevity</span>
                <div className="w-full h-1 bg-slate-200 rounded-full overflow-hidden">
                  <div className="w-[90%] h-full bg-slate-800 rounded-full" />
                </div>
              </div>
            </div>

            <div className="border-t pt-4 border-slate-200">
              <p className="text-xs text-slate-400">
                Interested in your cosmetic dental potential? Reserve an appointment below and obtain an AI visual simulation.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
