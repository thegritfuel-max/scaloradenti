import { useState } from "react";
import { Sparkles, Calendar, BadgeDollarSign, Timer, ArrowUpRight, CheckCircle2, Laugh, Eye, RefreshCw, Smile } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { CLINIC_SERVICES } from "../data";
import { ServiceItem } from "../types";

interface ServicesSectionProps {
  onBookClick: () => void;
}

export default function ServicesSection({ onBookClick }: ServicesSectionProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Return icons based on service id
  const getServiceIcon = (id: string) => {
    switch (id) {
      case "cosmetic":
        return <Sparkles className="w-6 h-6 text-sky-500" />;
      case "implants":
        return <Laugh className="w-6 h-6 text-sky-500" />;
      case "whitening":
        return <Smile className="w-6 h-6 text-sky-500" />;
      case "aligners":
        return <Eye className="w-6 h-6 text-sky-500" />;
      case "root-canal":
        return <RefreshCw className="w-6 h-6 text-sky-500" />;
      default:
        return <Smile className="w-6 h-6 text-sky-500" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
      
      {/* Ambient gradient top shadow */}
      <div className="absolute top-[10%] right-[-10%] w-96 h-96 bg-blue-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header content resembling reference layout */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-100/60 border border-sky-100 text-sky-600 font-sans text-xs font-semibold uppercase tracking-wider">
              <span>Our Service Offerings</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-sans font-bold tracking-tight text-slate-900 leading-[1.1]">
              Your Complete Guide <br />to Restorative Health
            </h2>
          </div>

          <p className="text-slate-500 max-w-sm text-sm font-sans leading-relaxed">
            We offer premier dentistry tailored to your structural parameters and cosmetic desires. Experience absolute surgical and endodontic visual excellence.
          </p>
        </div>

        {/* Dynamic Grid representing Framer motion layouts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CLINIC_SERVICES.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08 }}
              className="group relative bg-white border border-slate-100/80 rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl duration-300 flex flex-col h-[400px] cursor-pointer"
              onClick={() => setSelectedService(service)}
            >
              {/* Service Hero background Image */}
              <div className="relative w-full h-[180px] shrink-0 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                
                {/* Gradient shading overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />
                
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-slate-950 font-bold font-sans text-[10px] tracking-wider uppercase px-3 py-1 rounded-full border border-slate-100">
                  {service.category}
                </span>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <h3 className="font-bold text-lg font-sans tracking-tight">{service.title}</h3>
                </div>
              </div>

              {/* Service Details below */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3.5 mb-3">
                    <div className="p-2.5 rounded-2xl bg-sky-50 text-sky-600 transition-colors duration-300 group-hover:bg-sky-500 group-hover:text-white shrink-0">
                      {getServiceIcon(service.id)}
                    </div>
                    <span className="text-xs text-slate-400 leading-snug line-clamp-2 pr-2 font-sans font-medium">{service.description}</span>
                  </div>
                </div>

                {/* Footer specs inside card */}
                <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
                  <div className="flex items-center gap-4 text-[11px] font-mono font-semibold text-slate-500">
                    <span className="flex items-center gap-1">
                      <BadgeDollarSign className="w-3.5 h-3.5 text-sky-500" />
                      {service.priceEstimate}
                    </span>
                    <span className="flex items-center gap-1">
                      <Timer className="w-3.5 h-3.5 text-sky-400" />
                      {service.duration}
                    </span>
                  </div>

                  <span className="w-8 h-8 rounded-full bg-slate-9ml bg-slate-100 text-slate-650 group-hover:bg-slate-950 group-hover:text-white flex items-center justify-center transition-colors duration-300 font-sans">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Service Inspection Dialog (Framer Modal popup) */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-slate-950/60 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="relative bg-white rounded-[32px] overflow-hidden w-full max-w-2xl shadow-2xl border border-slate-100"
              >
                <div className="p-8 space-y-6">
                  {/* Title & category */}
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[10px] tracking-widest font-mono font-bold uppercase text-sky-600">
                        {selectedService.category} Description
                      </span>
                      <h3 className="text-3xl font-bold text-slate-950 font-sans tracking-tight mt-1">
                        {selectedService.title}
                      </h3>
                    </div>
                    
                    <button
                      onClick={() => setSelectedService(null)}
                      className="text-slate-400 hover:text-slate-900 border border-slate-100 hover:border-slate-300 p-2 rounded-full transition-colors font-semibold text-sm"
                    >
                      ✕
                    </button>
                  </div>

                  {/* Description image or paragraph */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    <img
                      src={selectedService.image}
                      alt={selectedService.title}
                      className="w-full h-[180px] object-cover rounded-2xl"
                      referrerPolicy="no-referrer"
                    />
                    <div className="space-y-4">
                      <p className="text-slate-600 text-xs leading-relaxed font-sans font-medium">
                        {selectedService.detailedDescription}
                      </p>
                      <div className="p-3.5 bg-sky-50 rounded-2xl border border-sky-100 text-xs text-sky-850 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0" />
                        <span>Includes elite visual 3D simulation analysis.</span>
                      </div>
                    </div>
                  </div>

                  {/* Specifications and action buttons */}
                  <div className="border-t border-slate-100 pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-6 text-xs text-slate-500 font-mono">
                      <div>
                        <span className="block text-[10px] text-slate-400 uppercase">Premium Pricing</span>
                        <span className="font-bold text-slate-800">{selectedService.priceEstimate}</span>
                      </div>
                      <div className="border-l border-slate-200 pl-6">
                        <span className="block text-[10px] text-slate-400 uppercase">Appointment Time</span>
                        <span className="font-bold text-slate-800">{selectedService.duration}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setSelectedService(null)}
                        className="px-5 py-3 text-xs font-semibold text-slate-600 hover:text-slate-950 rounded-full"
                      >
                        Close
                      </button>
                      <button
                        onClick={() => {
                          setSelectedService(null);
                          onBookClick();
                        }}
                        className="flex items-center gap-2 bg-slate-950 hover:bg-slate-900 text-white text-xs font-bold uppercase tracking-wide px-6 py-3.5 rounded-full shadow-lg"
                      >
                        <Calendar className="w-4 h-4 text-sky-400" />
                        <span>Book Slot Now</span>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
