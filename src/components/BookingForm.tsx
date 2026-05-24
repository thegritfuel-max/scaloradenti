import React, { useState } from "react";
import { Calendar, Phone, Mail, User, ShieldAlert, Sparkles, CheckCircle2, Ticket, Heart, RotateCcw } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { CLINIC_SERVICES, COMFORT_AMENITIES } from "../data";
import { BookingPayload } from "../types";

export default function BookingForm() {
  const [formData, setFormData] = useState<BookingPayload>({
    name: "",
    email: "",
    phone: "",
    service: "cosmetic",
    preferredDate: "",
    preferredTime: "10:00",
    notes: "",
    comfortSelection: []
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [successResponse, setSuccessResponse] = useState<{
    bookingId: string;
    message: string;
  } | null>(null);

  const handleCheckboxChange = (id: string) => {
    setFormData((prev) => {
      const exists = prev.comfortSelection.includes(id);
      if (exists) {
        return { ...prev, comfortSelection: prev.comfortSelection.filter((item) => item !== id) };
      } else {
        return { ...prev, comfortSelection: [...prev.comfortSelection, id] };
      }
    });
  };

  const validateForm = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = "Full Patient Name is required";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Provide a valid clinical email";
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      tempErrors.phone = "Provide a valid contact phone number";
    }
    if (!formData.preferredDate) {
      tempErrors.preferredDate = "Select your preferred clinic appointment date";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          date: `${formData.preferredDate} T${formData.preferredTime}`,
          message: `${formData.notes}. Comforts requested: ${formData.comfortSelection.join(", ")}`
        })
      });

      if (!res.ok) {
        throw new Error("Failed to submit reservation.");
      }

      const data = await res.json();
      setSuccessResponse({
        bookingId: data.bookingId,
        message: data.message
      });
    } catch (err: any) {
      console.error(err);
      setErrors({ form: "We are apologies. Reservation network error. Please call +1 (310) 555-0190" });
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "cosmetic",
      preferredDate: "",
      preferredTime: "10:00",
      notes: "",
      comfortSelection: []
    });
    setSuccessResponse(null);
    setErrors({});
  };

  return (
    <section id="book-slot" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Decorative luxury vector nodes */}
      <div className="absolute top-1/4 left-[-10%] w-[45vw] h-[45vw] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-10%] w-[35vw] h-[35vw] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Animate Booking Container card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left instructions block */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-sky-400 text-[10px] uppercase font-mono tracking-widest border border-white/5 font-bold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Diagnostic Consultation Priority</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-sans font-bold tracking-tight leading-tight">
              Reserve Your Bespoke Smile Assessment.
            </h2>

            <p className="text-slate-400 text-sm leading-relaxed">
              Unlock a fully customized diagnostics experience in our Beverly Hills facility. Provide your details and choose sensory comforts to ensure a completely warm and soothing dental visit.
            </p>

            {/* List checklist points of service */}
            <div className="space-y-3.5 pt-4 border-t border-slate-800">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0" />
                <span className="text-xs text-slate-350">Confirm slots directly in under 2 hours</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0" />
                <span className="text-xs text-slate-350">Guaranteed 1-on-1 focus with lead cosmetic doctors</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0" />
                <span className="text-xs text-slate-350">Complete access to VR headsets & heated massage chairs</span>
              </div>
            </div>
          </div>

          {/* Right Form column */}
          <div className="lg:col-span-7">
            <div className="bg-slate-950/40 border border-white/5 backdrop-blur-md rounded-[32px] p-8 md:p-10 shadow-2xl relative min-h-[460px] flex flex-col justify-center">
              
              <AnimatePresence mode="wait">
                {!successResponse ? (
                  // The actual schedule Form (staggered sliders)
                  <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      
                      {/* Name FIELD */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase tracking-wider font-mono text-slate-400 font-bold block">Patient Name</label>
                        <div className="relative">
                          <User className="absolute left-3 top-3.5 w-4 h-4 text-slate-500" />
                          <input
                            type="text"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className={`w-full bg-white/5 border ${errors.name ? "border-rose-500" : "border-white/10 focus:border-sky-400"} text-slate-100 placeholder-slate-600 rounded-xl py-3 px-10 text-xs focus:outline-none transition-colors duration-200`}
                          />
                        </div>
                        {errors.name && <span className="text-[10px] font-mono text-rose-400 block">{errors.name}</span>}
                      </div>

                      {/* CLINIC EMAIL */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase tracking-wider font-mono text-slate-400 font-bold block">Clinical Email</label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3.5 w-4 h-4 text-slate-500" />
                          <input
                            type="email"
                            placeholder="patient@medical.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className={`w-full bg-white/5 border ${errors.email ? "border-rose-500" : "border-white/10 focus:border-sky-400"} text-slate-100 placeholder-slate-600 rounded-xl py-3 px-10 text-xs focus:outline-none transition-colors duration-200`}
                          />
                        </div>
                        {errors.email && <span className="text-[10px] font-mono text-rose-400 block">{errors.email}</span>}
                      </div>

                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      
                      {/* PHONE concierge */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase tracking-wider font-mono text-slate-400 font-bold block">Concierge SMS Phone</label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-3.5 w-4 h-4 text-slate-500" />
                          <input
                            type="tel"
                            placeholder="+1 (310) 999-8888"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className={`w-full bg-white/5 border ${errors.phone ? "border-rose-500" : "border-white/10 focus:border-sky-400"} text-slate-100 placeholder-slate-600 rounded-xl py-3 px-10 text-xs focus:outline-none transition-colors duration-200`}
                          />
                        </div>
                        {errors.phone && <span className="text-[10px] font-mono text-rose-400 block">{errors.phone}</span>}
                      </div>

                      {/* SERVICE choices */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase tracking-wider font-mono text-slate-400 font-bold block">Preferred Medical Treatment</label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full bg-slate-900 border border-white/10 focus:border-sky-400 text-slate-200 rounded-xl py-3.5 px-4 text-xs focus:outline-none cursor-pointer"
                        >
                          {CLINIC_SERVICES.map((s) => (
                            <option key={s.id} value={s.id} className="text-slate-200 bg-slate-950 font-sans">
                              {s.title}
                            </option>
                          ))}
                        </select>
                      </div>

                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      
                      {/* DATE */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase tracking-wider font-mono text-slate-400 font-bold block">Consultation Date</label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-3.5 w-4 h-4 text-slate-500 pointer-events-none" />
                          <input
                            type="date"
                            value={formData.preferredDate}
                            onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                            className={`w-full bg-white/5 border ${errors.preferredDate ? "border-rose-500" : "border-white/10 focus:border-sky-400"} text-slate-100 rounded-xl py-3 px-10 text-xs focus:outline-none transition-colors duration-200 cursor-pointer`}
                          />
                        </div>
                        {errors.preferredDate && <span className="text-[10px] font-mono text-rose-400 block">{errors.preferredDate}</span>}
                      </div>

                      {/* TIME slot */}
                      <div className="space-y-1.5">
                        <label className="text-[10px] uppercase tracking-wider font-mono text-slate-400 font-bold block">Preferred Time Slot</label>
                        <select
                          value={formData.preferredTime}
                          onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                          className="w-full bg-slate-900 border border-white/10 focus:border-sky-400 text-slate-200 rounded-xl py-3 px-4 text-xs focus:outline-none cursor-pointer"
                        >
                          <option value="09:00">09:00 AM - Diagnostic Block</option>
                          <option value="11:30">11:30 AM - Surgical Ortho Block</option>
                          <option value="14:00">02:00 PM - Patient Assessment</option>
                          <option value="16:30">04:30 PM - Cosmetic Porcelain Integration</option>
                        </select>
                      </div>

                    </div>

                    {/* SPA COMFORT checklist */}
                    <div className="space-y-2 pt-2">
                      <label className="text-[10px] uppercase tracking-widest font-mono text-sky-400 font-bold block">Configure Your Custom Calming Amenities</label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] font-sans">
                        {COMFORT_AMENITIES.map((am) => {
                          const isSelected = formData.comfortSelection.includes(am.id);
                          return (
                            <div
                              key={am.id}
                              onClick={() => handleCheckboxChange(am.id)}
                              className={`flex items-center gap-2.5 p-2.5 border rounded-xl cursor-pointer duration-150 transition-all ${
                                isSelected
                                  ? "bg-sky-500/10 border-sky-400 text-white"
                                  : "bg-white/5 border-white/5 text-slate-400 hover:border-white/10 hover:text-slate-350"
                              }`}
                            >
                              <div className={`w-3.5 h-3.5 rounded border flex items-center justify-center shrink-0 ${isSelected ? "border-sky-400 bg-sky-400" : "border-slate-600"}`}>
                                {isSelected && <span className="text-[9px] text-slate-950 font-bold leading-none">✓</span>}
                              </div>
                              <span className="truncate">{am.label}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Notes */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase tracking-wider font-mono text-slate-400 font-bold block">Patient Notes / Calming Requests</label>
                      <textarea
                        rows={2}
                        placeholder="Detail dental concerns or sensory trigger sensitivities to accommodate..."
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="w-full bg-white/5 border border-white/10 focus:border-sky-400 text-slate-100 placeholder-slate-600 rounded-xl p-3 text-xs focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Submit concierge button */}
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full py-4 bg-sky-400 hover:bg-sky-300 text-slate-950 font-extrabold uppercase tracking-widest text-xs rounded-xl shadow-lg shadow-sky-500/15 duration-200 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2"
                    >
                      {isLoading ? (
                        <span>TRANSMITTING ENCRYPTED REGISTRATION...</span>
                      ) : (
                        <>
                          <Ticket className="w-4 h-4 text-slate-950" />
                          <span>Reserve Priority Consultation Pass</span>
                        </>
                      )}
                    </button>
                    {errors.form && <p className="text-rose-400 text-xs font-mono text-center flex items-center justify-center gap-1.5"><ShieldAlert className="w-4 h-4" />{errors.form}</p>}
                  </motion.form>
                ) : (
                  
                  // Success State - Beautiful animated Pass template
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="space-y-6 text-center font-sans p-2"
                  >
                    <div className="flex justify-center">
                      <div className="p-4 bg-emerald-500/20 text-emerald-400 rounded-full border border-emerald-400/30 animate-bounce">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold px-3 py-1 bg-emerald-950/40 rounded-full border border-emerald-500/20 inline-block">
                        Elite Consultation Confirmed
                      </span>
                      <h3 className="text-3xl font-bold font-sans tracking-tight">Your Priority Studio Pass</h3>
                      <p className="text-slate-450 text-xs max-w-sm mx-auto leading-relaxed">
                        {successResponse.message}
                      </p>
                    </div>

                    {/* Physical ticket mock */}
                    <div className="mx-auto max-w-[340px] bg-slate-900 border border-slate-800 rounded-2xl relative overflow-hidden text-left p-5 flex flex-col justify-between h-[155px]">
                      
                      {/* Ticket header */}
                      <div className="flex justify-between items-start border-b pb-3 border-slate-800/80">
                        <div>
                          <span className="text-[10px] tracking-wide uppercase text-sky-400 font-bold block">SCALORA</span>
                          <span className="text-[8px] tracking-[0.2em] uppercase text-slate-500 font-medium">Dental Studio</span>
                        </div>
                        <div className="text-right">
                          <span className="text-[8px] text-slate-500 uppercase block">SLOT TYPE</span>
                          <span className="text-[10px] text-slate-200 font-bold uppercase">{formData.service}</span>
                        </div>
                      </div>

                      {/* Ticket Body row */}
                      <div className="grid grid-cols-2 gap-4 py-3 border-b border-slate-800/80">
                        <div>
                          <span className="text-[8px] text-slate-500 uppercase block font-bold">PATIENT</span>
                          <span className="text-[11px] text-slate-100 font-bold truncate block">{formData.name}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-[8px] text-slate-500 uppercase block font-bold">DATE / TIME</span>
                          <span className="text-[10px] text-slate-200 block truncate">{formData.preferredDate} @ {formData.preferredTime}</span>
                        </div>
                      </div>

                      {/* Ticket barcode code */}
                      <div className="flex justify-between items-center bg-slate-950/30 p-2 rounded-xl border border-white/5">
                        <span className="text-[10px] font-mono text-slate-400 tracking-wider">CODE: {successResponse.bookingId}</span>
                        <div className="flex gap-0.5">
                          <span className="w-1.5 h-4 bg-slate-650 inline-block rounded-sm" />
                          <span className="w-0.5 h-4 bg-slate-650 inline-block rounded-sm" />
                          <span className="w-[3px] h-4 bg-slate-650 inline-block rounded-sm" />
                          <span className="w-1.5 h-4 bg-slate-650 inline-block rounded-sm" />
                          <span className="w-[1px] h-4 bg-slate-650 inline-block rounded-sm" />
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={handleReset}
                      className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold uppercase py-2.5 px-5 rounded-full border border-slate-700"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Book Another slot</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
