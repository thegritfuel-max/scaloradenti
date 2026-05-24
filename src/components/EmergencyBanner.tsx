import { ShieldAlert, PhoneCall, Heart, Calendar } from "lucide-react";
import { motion } from "motion/react";

interface EmergencyBannerProps {
  onBookClick: () => void;
}

export default function EmergencyBanner({ onBookClick }: EmergencyBannerProps) {
  return (
    <section className="py-12 bg-gradient-to-r from-rose-950 via-slate-950 to-slate-900 border-y border-rose-900 text-white relative overflow-hidden">
      
      {/* Wave glow pulse */}
      <div className="absolute top-0 left-0 bottom-0 w-32 bg-rose-500/10 blur-xl animate-pulse pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Core clinical text and status */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-left">
          <div className="p-3.5 bg-rose-500 text-slate-950 rounded-2xl shrink-0 flex items-center justify-center animate-pulse">
            <ShieldAlert className="w-6 h-6 text-slate-950" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
              <span className="text-[10px] tracking-widest font-mono font-bold text-rose-400 uppercase">24/7 Critical Relief Support</span>
            </div>
            
            <h3 className="text-xl md:text-2xl font-bold font-sans tracking-tight mt-1">
              Acute Pain or Broken Tooth? See an Expert Today.
            </h3>
            
            <p className="text-xs text-rose-200 mt-1 max-w-xl font-sans">
              We allocate dedicated rescue slots everyday to tackle trauma, dislodged crowns, and aggressive abscess discomfort. Zero medical delays.
            </p>
          </div>
        </div>

        {/* Action triggers */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0 w-full sm:w-auto">
          <a
            href="tel:+13105550190"
            className="flex items-center justify-center gap-2 bg-rose-500 hover:bg-rose-400 text-slate-950 text-xs font-black uppercase tracking-wider px-6 py-4 rounded-xl shadow-lg shadow-rose-500/15 transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            <PhoneCall className="w-4 h-4 text-slate-950" />
            <span>Priority Hotline: +1 (310) 555-0190</span>
          </a>

          <button
            onClick={onBookClick}
            className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs font-bold uppercase tracking-wide px-6 py-4 rounded-xl border border-white/15"
          >
            <Calendar className="w-4 h-4 text-sky-400" />
            <span>Request Emergency Spot</span>
          </button>
        </div>

      </div>
    </section>
  );
}
