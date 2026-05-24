import { useState, useEffect } from "react";
import { Star, ShieldCheck, ChevronLeft, ChevronRight, Quote, Heart } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { CLINIC_TESTIMONIALS } from "../data";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % CLINIC_TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + CLINIC_TESTIMONIALS.length) % CLINIC_TESTIMONIALS.length);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 8000); // auto slide every 8s
    return () => clearInterval(timer);
  }, []);

  const activeTestimonial = CLINIC_TESTIMONIALS[activeIndex];

  return (
    <section className="py-24 bg-[#F8FBFF] relative overflow-hidden" id="testimonials">
      
      {/* Visual background element */}
      <div className="absolute top-1/3 left-[-5%] w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-5%] w-80 h-80 bg-sky-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Title elements */}
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-100/50 text-sky-600 text-xs font-semibold uppercase tracking-wider font-sans">
            <Heart className="w-3.5 h-3.5 text-sky-500 fill-current" />
            <span>Patient Devotion</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-sans font-bold tracking-tight text-slate-900 leading-tight">
            Client Stories of Confidence
          </h2>
          
          <p className="text-slate-500 max-w-xl text-sm font-sans">
            Read comments from patients who unlocked gorgeous cosmetic results and pain-free restorations in our premium studio.
          </p>
        </div>

        {/* Carousel slide card */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4 }}
              className="bg-white border border-slate-100 p-8 sm:p-12 rounded-[32px] shadow-lg relative"
            >
              <Quote className="absolute top-8 right-8 w-14 h-14 text-slate-100 pointer-events-none stroke-[3]" />

              <div className="space-y-6">
                
                {/* Stars and verified tags */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    {[...Array(activeTestimonial.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-sky-400 text-sky-400" />
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 bg-sky-50 border border-sky-100 text-sky-600 text-[10px] font-bold px-2.5 py-1 rounded-xl uppercase font-mono tracking-wider">
                    <ShieldCheck className="w-3.5 h-3.5 text-sky-500" />
                    <span>Verified Patient</span>
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-slate-700 font-sans text-base sm:text-lg leading-relaxed font-normal italic pr-2">
                  \"{activeTestimonial.review}\"
                </p>

                {/* Patient Profile row */}
                <div className="flex items-center justify-between border-t border-slate-150 pt-6">
                  <div className="flex items-center gap-4">
                    <img
                      src={activeTestimonial.avatar}
                      alt={activeTestimonial.clientName}
                      className="w-12 h-12 rounded-full object-cover border-2 border-sky-100 shadow"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{activeTestimonial.clientName}</h4>
                      <span className="text-[10px] uppercase tracking-wider font-mono text-slate-400 font-bold block mt-0.5">
                        Care: {activeTestimonial.treatment}
                      </span>
                    </div>
                  </div>

                  <span className="text-xs text-slate-400 font-mono font-medium">{activeTestimonial.date}</span>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-3 bg-white border border-slate-200 hover:border-slate-350 active:bg-slate-50 duration-150 rounded-full text-slate-700 shadow-sm"
              title="Previous testimony"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="p-3 bg-slate-900 hover:bg-slate-800 active:bg-slate-950 duration-150 rounded-full text-white shadow-lg"
              title="Next testimony"
            >
              <ChevronRight className="w-5 h-5 text-sky-400" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
