import { Award, GraduationCap, Languages, Sparkles, Mail, Phone, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { CLINIC_DOCTORS } from "../data";

interface MeetDoctorsProps {
  onBookClick: () => void;
}

export default function MeetDoctors({ onBookClick }: MeetDoctorsProps) {
  return (
    <section id="doctors" className="py-24 bg-slate-50 relative overflow-hidden">
      
      {/* Background Soft Orbs */}
      <div className="absolute top-1/3 left-[-10%] w-[35vw] h-[35vw] bg-emerald-100/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-10%] w-[30vw] h-[30vw] bg-blue-100/25 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section title */}
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-100/60 text-emerald-600 text-xs font-semibold font-sans uppercase tracking-wider">
            <Award className="w-4 h-4 text-emerald-500" />
            <span>Master Oral Specialists</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-sans font-bold tracking-tight text-slate-900 leading-tight">
            Meet Our World-Class Specialists
          </h2>
          
          <p className="text-slate-500 max-w-xl text-sm font-sans">
            Our clinicians are faculty lecturers, patent-holders, and artistic masters. Every smile is assessed by both prosthetic and implantological panels.
          </p>
        </div>

        {/* Highlight Double Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {CLINIC_DOCTORS.map((doctor, idx) => (
            <motion.div
              key={doctor.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.15 }}
              className="bg-white rounded-[32px] border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl duration-300 flex flex-col md:flex-row h-auto md:h-[450px]"
            >
              {/* Doctor Portrait Image container */}
              <div className="relative w-full md:w-2/5 h-[300px] md:h-full shrink-0 overflow-hidden bg-slate-55 shadow-inner">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover object-top hover:scale-[1.03] transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-90 pointer-events-none" />
                
                {/* Visual designator tag */}
                <span className="absolute bottom-4 left-4 bg-sky-500/90 text-[10px] text-slate-950 font-bold uppercase font-sans tracking-widest px-3 py-1.5 rounded-xl border border-sky-400/20 backdrop-blur-sm shadow">
                  Verified specialist
                </span>
              </div>

              {/* Doctor Details details */}
              <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-sky-600 font-mono tracking-wider block">
                      {doctor.role}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 font-sans tracking-tight mt-0.5">
                      {doctor.name}
                    </h3>
                  </div>

                  <p className="text-slate-500 text-xs font-sans leading-relaxed">
                    {doctor.bio}
                  </p>

                  {/* Specialties checklist */}
                  <div className="space-y-2 border-t pt-4 border-slate-100">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block font-mono">Expertise Areas:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {doctor.specialties.map((spec) => (
                        <span
                          key={spec}
                          className="px-2.5 py-1 bg-slate-50 border border-slate-100 rounded-lg text-[10px] text-slate-600 font-sans font-medium"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Academic credentials and direct reservation links */}
                <div className="border-t border-slate-100 pt-4 space-y-3 shrink-0">
                  <div className="flex items-center gap-2 text-[11px] text-slate-500 font-sans">
                    <GraduationCap className="w-4 h-4 text-sky-500 shrink-0" />
                    <span className="truncate leading-none">{doctor.designation}</span>
                  </div>

                  <div className="flex items-center gap-4 pt-1">
                    <button
                      onClick={onBookClick}
                      className="text-[11px] text-slate-900 font-bold uppercase tracking-wider hover:text-sky-600 flex items-center gap-1.5 font-sans"
                    >
                      <span>Request assessment with {doctor.name.split(" ")[1]}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
