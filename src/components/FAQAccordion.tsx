import { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { CLINIC_FAQS } from "../data";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faqs" className="py-24 bg-slate-50 relative overflow-hidden">
      
      {/* Background decoration */}
      <div className="absolute top-[20%] left-[-10%] w-96 h-96 bg-blue-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Title sections */}
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-sky-100/60 border border-sky-100 text-sky-600 text-xs font-semibold uppercase tracking-wider font-sans">
            <HelpCircle className="w-4 h-4 text-sky-500" />
            <span>Transparency & Trust</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-sans font-bold tracking-tight text-slate-900 leading-tight">
            Frequently Asked Queries
          </h2>
          
          <p className="text-slate-500 max-w-xl text-sm font-sans">
            Have questions about cosmetic veneers, sedation parameters, digital scans, or dental financial billing? Browse our verified clinic resolutions below.
          </p>
        </div>

        {/* Collapsing List Items */}
        <div className="space-y-4">
          {CLINIC_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="bg-white border border-slate-100 rounded-[24px] overflow-hidden shadow-sm transition-all duration-200"
              >
                {/* Accordion header button click trigger */}
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left p-6 flex justify-between items-center gap-4 focus:outline-none"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] tracking-widest font-mono font-bold text-sky-500 uppercase px-2 py-1 bg-sky-50 rounded">
                      {faq.category}
                    </span>
                    <h3 className="text-xs sm:text-sm md:text-base font-bold text-slate-900 font-sans tracking-tight">
                      {faq.question}
                    </h3>
                  </div>

                  <span className={`p-1.5 bg-slate-50 border border-slate-150 rounded-full text-slate-500 transition-transform duration-200 shrink-0 ${isOpen ? "rotate-180" : ""}`}>
                    <ChevronDown className="w-4 h-4 text-slate-700" />
                  </span>
                </button>

                {/* Body paragraph content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 border-t border-slate-50">
                        <p className="text-xs sm:text-sm text-slate-500 font-sans leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Support helper notes row */}
        <div className="mt-12 p-6 bg-slate-9ml bg-white border border-slate-100 rounded-[24px] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-sky-50 text-sky-600">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900 font-sans">Have alternate bespoke visual queries?</h4>
              <p className="text-[11px] text-slate-400 mt-0.5">Talk instantly with our customized virtual AI assistant in the right corner!</p>
            </div>
          </div>

          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              const b = document.getElementById("consulting-launcher-btn");
              b?.click();
            }}
            className="text-[11px] bg-slate-900 hover:bg-slate-800 text-white font-bold uppercase tracking-wider px-5 py-2.5 rounded-xl block font-sans"
          >
            Ask DentAssist Now
          </a>
        </div>

      </div>
    </section>
  );
}
