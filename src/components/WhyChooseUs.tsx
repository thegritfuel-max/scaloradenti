import { ShieldCheck, HeartPulse, Sparkles, Microscope, Fan, Eye, Zap } from "lucide-react";
import { motion } from "motion/react";

export const BENTO_ITEMS = [
  {
    id: "bento-1",
    span: "lg:col-span-8",
    bg: "bg-slate-900 text-white",
    icon: <HeartPulse className="w-8 h-8 text-sky-400" />,
    badge: "Premium Experience",
    title: "Elite Anxiety-Free Dental Oasis",
    description: "Every treatment room is optimized for absolute comfort. Immerse yourself in therapeutic lavender aromatherapy while enjoying virtual reality glasses carrying your favorite cinema, insulated by warm massage chairs and customized Bose noise-cancel headphones."
  },
  {
    id: "bento-2",
    span: "lg:col-span-4",
    bg: "bg-white text-slate-800 border border-slate-100",
    icon: <Microscope className="w-8 h-8 text-sky-600" />,
    badge: "Precision Clinical Equipment",
    title: "10X Carl Zeiss Surgical Microscopes",
    description: "By scaling our clinical vision tenfold, we protect healthy tooth structures, ensure micrometric margins on custom veneers, and execute microscopic endodontical remedies."
  },
  {
    id: "bento-3",
    span: "lg:col-span-4",
    bg: "bg-sky-50/50 text-slate-800 border border-sky-100/30",
    icon: <Zap className="w-8 h-8 text-sky-600" />,
    badge: "Advanced Tech",
    title: "Erbium Pain-Free Laser Therapeutics",
    description: "Our water-cooled micro lasers disinfect root pathways and design symmetry on gum tissues without physical scrapers or mechanical drills, reducing recovery periods."
  },
  {
    id: "bento-4",
    span: "lg:col-span-8",
    bg: "bg-white text-slate-800 border border-slate-100",
    icon: <ShieldCheck className="w-8 h-8 text-sky-600" />,
    badge: "Bio-Safety Metrics",
    title: "100% Biocompatible Metal-free Chemistry",
    description: "We are deeply committed to restorative systemic wellness. Scalora utilizes exclusively premium hypoallergenic lithium disilicate (E-Max), heavy-duty clinical zirconia, and non-toxic materials. Enjoy dental structures that integrate flawlessly with soft tissue structures."
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 bg-white relative overflow-hidden">
      
      {/* Decorative vector overlays */}
      <div className="absolute top-1/3 left-[-5%] w-96 h-96 bg-sky-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-[-10%] w-[500px] h-[500px] bg-blue-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Title */}
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold uppercase tracking-wider font-sans">
            <Sparkles className="w-3.5 h-3.5 text-sky-500" />
            <span>Why Scalora Dental Studio</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-sans font-bold tracking-tight text-slate-900 max-w-3xl leading-tight">
            The Golden Standard of Modern Dental Precision.
          </h2>
          
          <p className="text-slate-500 max-w-xl text-sm font-sans">
            We merge diagnostic technologies, sterile biological engineering, and aesthetic sensibilities to deliver painless dentist encounters.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {BENTO_ITEMS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`p-8 sm:p-10 rounded-[32px] shadow-sm flex flex-col justify-between group ${item.span} ${item.bg}`}
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="transition-transform duration-300 group-hover:scale-105">
                    {item.icon}
                  </div>
                  
                  <span className={`text-[10px] font-mono uppercase font-bold tracking-widest px-3 py-1 rounded-full ${
                    item.bg.includes("slate-900") ? "bg-white/10 text-sky-400" : "bg-sky-50 text-sky-600"
                  }`}>
                    {item.badge}
                  </span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl font-bold font-sans tracking-tight">{item.title}</h3>
                  <p className={`text-xs sm:text-sm leading-relaxed font-sans ${
                    item.bg.includes("slate-900") ? "text-slate-300" : "text-slate-500"
                  }`}>
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Bento micro visual anchor line */}
              <div className={`mt-8 border-t w-1/4 ${
                item.bg.includes("slate-900") ? "border-slate-800" : "border-slate-100"
              }`} />
            </motion.div>
          ))}
        </div>

        {/* Highlighted tech labels banner */}
        <div className="mt-16 py-6 px-10 bg-slate-50 rounded-2xl border border-slate-100 flex flex-wrap justify-center sm:justify-between items-center gap-6 font-sans text-xs text-slate-600 font-semibold">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-sky-500 shrink-0" />
            <span>3D CBCT DIAGNOSTIC SCANS</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-sky-500 shrink-0" />
            <span>Carl Zeiss Ophthalmology Microscopes</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-sky-500 shrink-0" />
            <span>Erbium Pain-Free Dental Lasers</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-sky-500 shrink-0" />
            <span>Ozone Air & Water Purifications</span>
          </div>
        </div>

      </div>
    </section>
  );
}
