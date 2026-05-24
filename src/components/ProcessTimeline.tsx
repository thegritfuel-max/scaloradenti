import { Sparkles, Compass, SearchCode, Coffee, Smile } from "lucide-react";
import { motion } from "motion/react";

const TIMELINE_STEPS = [
  {
    step: "01",
    title: "Sensory Intake & Concierge Check-in",
    brief: "Enter our Beverly Hills wellness oasis. Our registrars greet you with premium refreshments and capture your amenity preferences (aromatherapy, VR topics, heated chair temperature).",
    icon: <Coffee className="w-5 h-5 text-sky-500" />
  },
  {
    step: "02",
    title: "3D Virtual Macro Diagnostics Scan",
    brief: "We map your mouth using low-emission 3D CBCT and iTero panoramic sensors. drs. Scalora and Vance design a dynamic virtual progression chart for your smile structure.",
    icon: <SearchCode className="w-5 h-5 text-sky-500" />
  },
  {
    step: "03",
    title: "Focused Pain-free Treatment Block",
    brief: "Settle into your session. With Bose noise-canceling headsets and cinematic VR glasses on, our master clinicians apply computerized laser therapies to prepare dental veneers or implants.",
    icon: <Compass className="w-5 h-5 text-sky-500" />
  },
  {
    step: "04",
    title: "Cosmetic Reveal & Preservation",
    brief: "Witness your radiant new smile. We provide customized maintenance booster packages and dental kits, ensuring long-term prosthetic durability and clinical brilliance.",
    icon: <Smile className="w-5 h-5 text-sky-500" />
  }
];

export default function ProcessTimeline() {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="timeline">
      
      {/* Decorative Blur elements */}
      <div className="absolute top-[30%] right-[-10%] w-96 h-96 bg-sky-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title elements */}
        <div className="flex flex-col items-center text-center mb-20 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider font-sans">
            <Sparkles className="w-3.5 h-3.5 text-sky-500" />
            <span>Operational Precision</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-sans font-bold tracking-tight text-slate-900 max-w-3xl leading-tight">
            Our Four-Step Precision Treatment Journey
          </h2>
          
          <p className="text-slate-500 max-w-xl text-sm font-sans">
            No rush, no high pressure, and zero metallic scraping noise. Read how we design a soothing treatment journey from lobby arrivals to smile reveals.
          </p>
        </div>

        {/* Timeline Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Connector horizontal rule across desktop */}
          <div className="absolute top-1/2 left-[5%] right-[5%] h-px bg-slate-100 hidden lg:block -translate-y-12 pointer-events-none" />

          {TIMELINE_STEPS.map((col, idx) => (
            <motion.div
              key={col.step}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="bg-slate-50 border border-slate-100 p-8 rounded-[30px] flex flex-col justify-between space-y-6 relative group hover:bg-white hover:shadow-xl duration-300 pointer-events-auto"
            >
              {/* Step indicator circle top row */}
              <div className="flex items-center justify-between">
                <span className="text-4xl font-black font-sans text-slate-200 group-hover:text-sky-250 transition-colors duration-350">
                  {col.step}
                </span>

                <div className="p-3 bg-white rounded-2xl text-sky-600 shadow-sm border border-slate-100">
                  {col.icon}
                </div>
              </div>

              {/* Title & brief */}
              <div className="space-y-2">
                <h3 className="text-base font-bold font-sans tracking-tight text-slate-950">
                  {col.title}
                </h3>
                
                <p className="text-xs text-slate-500 leading-relaxed font-sans">
                  {col.brief}
                </p>
              </div>

              {/* Decorative accent footer line */}
              <div className="w-1/3 h-1 bg-sky-200 group-hover:bg-sky-500 rounded-full transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
