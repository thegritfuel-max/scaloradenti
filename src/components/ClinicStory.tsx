import { Sparkles, Milestone, CheckCircle2, Award, HeartPulse, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

export default function ClinicStory() {
  const clinicLobbyImg = "/src/assets/images/luxury_clinic_interior_1779615683153.png";

  return (
    <section id="story" className="py-24 bg-white relative overflow-hidden">
      
      {/* Decorative Blur Ambient circles */}
      <div className="absolute top-1/4 left-[-10%] w-96 h-96 bg-sky-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-[-5%] w-80 h-80 bg-slate-100 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column - Visual Mosaic of Photos */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Primary Lobby Image with 32px rounded style */}
              <div className="relative rounded-[32px] overflow-hidden border-[10px] border-slate-50 shadow-2xl">
                <img
                  src={clinicLobbyImg}
                  alt="Scalora Dental Studio Luxury Interior Lobby"
                  className="w-full h-[400px] object-cover hover:scale-105 duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Offset Visual card #2 overlapping */}
              <motion.div
                initial={{ opacity: 0, y: 30, x: 20 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute -bottom-8 -right-4 w-[240px] hidden sm:block bg-slate-900 text-white p-5 rounded-3xl shadow-2xl border border-slate-800"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-xl bg-sky-500 text-slate-950">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold font-mono tracking-widest uppercase text-sky-400">Sterilization Gold</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  We maintain zero-emission HEPA filtration, ozone sterile water, and custom state-of-the-art clinical sanitation metrics.
                </p>
              </motion.div>

              {/* Decorative luxury plaque */}
              <div className="absolute top-6 left-6 bg-white/70 backdrop-blur-md px-4 py-2 rounded-2xl shadow-md border border-white/40 text-slate-800 text-xs font-bold inline-flex items-center gap-1.5 font-sans">
                <Award className="w-4 h-4 text-sky-600" />
                <span>Modern Spa Aesthetics</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Story narrative */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-sky-600 font-sans text-xs font-semibold"
              >
                <Milestone className="w-3.5 h-3.5" />
                <span>Our Philosophy</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl font-sans font-bold tracking-tight text-slate-950 leading-[1.12]"
              >
                Our Story: Reshaping Visual Comfort & Medical Trust.
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-slate-500 font-sans text-base leading-relaxed"
              >
                Scalora Dental Studio was conceived under the guideline that modern medical procedures do not have to evoke distress. We have completely designed our Beverly Hills workspace around a sensory calming environment.
              </motion.p>
            </div>

            {/* List structures */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-4 font-sans"
            >
              <div className="flex gap-4 items-start">
                <div className="p-2 bg-sky-50 text-sky-600 rounded-xl shrink-0 mt-0.5">
                  <HeartPulse className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 font-sans">Artisan Porcelain Layering</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Every cosmetic E-Max cover is customized by our master ceramist in a high-tech laboratory to duplicate natural enamel translucency.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-2 bg-sky-50 text-sky-600 rounded-xl shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 font-sans">Low-Emission Dental Diagnostics</h4>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    By leveraging state-of-the-art near-zero emission visual digital x-rays, we maximize diagnostic resolution while reducing radiation exposure by 90%.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Core signature stats block */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-6 bg-slate-50 rounded-[24px] border border-slate-100 flex items-center justify-between gap-6"
            >
              <div className="text-center flex-1">
                <span className="text-2xl md:text-3xl font-sans font-extrabold text-slate-900 tracking-tight block">99.4%</span>
                <span className="text-[10px] text-slate-400 tracking-wider uppercase font-semibold block mt-1">Satisfaction Rate</span>
              </div>
              <div className="w-px h-10 bg-slate-200" />
              <div className="text-center flex-1">
                <span className="text-2xl md:text-3xl font-sans font-extrabold text-slate-900 tracking-tight block">15+ Yrs</span>
                <span className="text-[10px] text-slate-400 tracking-wider uppercase font-semibold block mt-1">Average Enamel Life</span>
              </div>
              <div className="w-px h-10 bg-slate-200" />
              <div className="text-center flex-1">
                <span className="text-2xl md:text-3xl font-sans font-extrabold text-sky-500 tracking-tight block">Zero</span>
                <span className="text-[10px] text-slate-400 tracking-wider uppercase font-semibold block mt-1">Anxiety Incidents</span>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
