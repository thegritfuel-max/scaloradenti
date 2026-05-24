import { useState, useEffect } from "react";
import { Sparkles, Calendar, HeartPulse, X, Play, BadgeAlert, Sun, Moon, Volume2, PhoneCall, CheckCircle2, Star } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Import Custom Modular Components
import FloatingNavbar from "./components/FloatingNavbar";
import Hero from "./components/Hero";
import ClinicStory from "./components/ClinicStory";
import ServicesSection from "./components/ServicesSection";
import InteractiveBeforeAfter from "./components/InteractiveBeforeAfter";
import WhyChooseUs from "./components/WhyChooseUs";
import MeetDoctors from "./components/MeetDoctors";
import BookingForm from "./components/BookingForm";
import Testimonials from "./components/Testimonials";
import ProcessTimeline from "./components/ProcessTimeline";
import EmergencyBanner from "./components/EmergencyBanner";
import FAQAccordion from "./components/FAQAccordion";
import PremiumFooter from "./components/PremiumFooter";
import SocialProofAndBlog from "./components/SocialProofAndBlog";
import DentConsultantWidget from "./components/DentConsultantWidget";

export default function App() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false);
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(true);

  // Monitor Scroll for Sticky CTA display
  useEffect(() => {
    const handleScroll = () => {
      setShowStickyCTA(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Monitor Mouse Moves for custom cursor (only on desktop resolutions)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth >= 768) {
        setCursorPos({ x: e.clientX, y: e.clientY });
      }
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleBookClick = () => {
    const bookingSection = document.getElementById("book-slot");
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleConsultClick = () => {
    const consultBtn = document.getElementById("consulting-launcher-btn");
    consultBtn?.click();
  };

  return (
    <div className={`min-h-screen relative font-sans transition-colors duration-500 overflow-x-hidden ${darkTheme ? "bg-slate-950 text-white" : "bg-[#F8FBFF] text-slate-900"}`}>
      
      {/* 1. Custom Interactive Cursor Glow */}
      {!isMobile && (
        <div
          className="fixed w-10 h-10 border border-sky-400 rounded-full pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 transition-transform duration-100 ease-out flex items-center justify-center mix-blend-difference"
          style={{ left: `${cursorPos.x}px`, top: `${cursorPos.y}px` }}
        >
          <div className="w-1.5 h-1.5 bg-sky-400 rounded-full" />
        </div>
      )}

      {/* 2. Sticky Theme Controller Button */}
      <div className="fixed top-24 right-4 z-40">
        <button
          onClick={() => setDarkTheme(!darkTheme)}
          className={`p-3 rounded-full shadow-xl border transition-all duration-300 hover:scale-105 flex items-center justify-center cursor-pointer ${
            darkTheme
              ? "bg-slate-900 text-amber-400 border-slate-800 shadow-slate-950/40"
              : "bg-white text-slate-800 border-slate-150 shadow-slate-300/30"
          }`}
          title="Toggle Elite Visual Theme"
        >
          {darkTheme ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>

      {/* 3. Live Booking Activity Ticker Header (Micro interaction) */}
      <div className="bg-slate-900 text-white py-2 px-6 flex items-center justify-center gap-3 text-[11px] font-mono tracking-wider uppercase border-b border-white/5 relative z-50">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        <span className="font-semibold text-emerald-400">Live Studio Update:</span>
        <span className="text-slate-300">Only 2 cosmetic diagnostics remaining for Dr. Julian Scalora today.</span>
        <button
          onClick={handleBookClick}
          className="underline text-sky-400 hover:text-sky-300 text-[10px] font-bold ml-2 transition-colors uppercase tracking-widest"
        >
          Lock assessment spot
        </button>
      </div>

      {/* 4. Floating Navbar */}
      <FloatingNavbar onBookClick={handleBookClick} onConsultClick={handleConsultClick} />

      {/* 5. Master Page Sections */}
      <main className="space-y-0 relative">
        <Hero
          onBookClick={handleBookClick}
          onVideoModalOpen={() => setVideoModalOpen(true)}
        />
        
        <ClinicStory />

        <ServicesSection onBookClick={handleBookClick} />

        <InteractiveBeforeAfter />

        <WhyChooseUs />

        <MeetDoctors onBookClick={handleBookClick} />

        <EmergencyBanner onBookClick={handleBookClick} />

        <Testimonials />

        <ProcessTimeline />

        <SocialProofAndBlog />

        {/* Section packaging the premium booking inputs form */}
        <div id="booking-section" className="bg-slate-950 rounded-t-[48px] overflow-hidden">
          <BookingForm />
        </div>

        <FAQAccordion />
      </main>

      {/* 6. Premium Footer */}
      <PremiumFooter onBookClick={handleBookClick} />

      {/* 7. AI Chatbot Widget (DentAssist) */}
      <DentConsultantWidget onOpenBooking={handleBookClick} />

      {/* 8. Sticky Action Callout Panel (Appears on Scroll) */}
      <AnimatePresence>
        {showStickyCTA && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-6 left-6 z-40 bg-white/90 backdrop-blur-md border border-slate-100 p-4 rounded-2xl shadow-2xl flex items-center gap-4 max-w-[340px] hidden sm:flex font-sans"
          >
            <div className="p-2 bg-sky-50 text-sky-600 rounded-xl shrink-0">
              <Sparkles className="w-5 h-5 animate-spin" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-[10px] uppercase font-bold text-slate-400 font-mono tracking-wider block">Complimentary Offer</span>
              <p className="text-[11px] text-slate-700 font-medium leading-normal line-clamp-2">
                Save an assessment slot now & obtain a fully personalized 3D digital smile simulation.
              </p>
            </div>
            <button
              onClick={handleBookClick}
              className="bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-[10px] uppercase tracking-wider py-2.5 px-4 rounded-xl shrink-0 transition-all duration-150"
            >
              Reserve Slot
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 9. Floating WhatsApp Direct Concierge */}
      <a
        href="https://wa.me/13105550190"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 z-40 w-11 h-11 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full flex items-center justify-center shadow-xl hover:scale-105 duration-200"
        title="Direct VIP Concierge Live Chat"
      >
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.003 5.324 5.328 0 11.859 0c3.166.001 6.141 1.233 8.377 3.469 2.235 2.237 3.465 5.213 3.464 8.379-.003 6.525-5.329 11.852-11.859 11.852-1.996-.001-3.956-.503-5.7-1.458L0 24zm6.59-4.846c1.6.95 3.1 1.45 4.6 1.45 5.3 0 9.7-4.3 9.7-9.6 0-2.6-1-5-2.8-6.8-1.8-1.8-4.2-2.8-6.9-2.8-5.3 0-9.7 4.3-9.7 9.6 0 1.9.5 3.8 1.5 5.4l-.4 1.5.4 1.2.6-1.5z"></path>
        </svg>
      </a>

      {/* 10. High-End Clinic Tour Video Dialog Modal */}
      <AnimatePresence>
        {videoModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-slate-950/80 backdrop-blur-md">
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-slate-900 rounded-[32px] overflow-hidden max-w-3xl w-full border border-white/5 shadow-2xl relative"
            >
              <button
                onClick={() => setVideoModalOpen(false)}
                className="absolute top-4 right-4 bg-slate-950/45 hover:bg-slate-900 border border-white/15 p-2 rounded-full text-slate-300 hover:text-white transition-colors z-20 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Simulated High-End Tour Film frame */}
              <div className="relative aspect-video bg-slate-950 flex items-center justify-center p-8 select-none">
                <img
                  src="/src/assets/images/luxury_clinic_interior_1779615683153.png"
                  alt="Simulated live video clinic tour overlay"
                  className="absolute inset-0 w-full h-full object-cover opacity-35"
                  referrerPolicy="no-referrer"
                />

                <div className="relative z-10 text-center space-y-6 max-w-md mx-auto">
                  <div className="mx-auto w-16 h-16 rounded-full bg-sky-505 bg-sky-500 text-slate-950 flex items-center justify-center shadow-lg border border-sky-400">
                    <Volume2 className="w-6 h-6 animate-pulse" />
                  </div>

                  <div className="space-y-2">
                    <span className="text-[10px] tracking-widest font-mono font-bold uppercase text-sky-400 block">Live Cinematic Walkthrough</span>
                    <h3 className="text-2xl font-bold font-sans text-white leading-tight">Welcome to Scalora Luxury Sanctuary</h3>
                    <p className="text-slate-400 text-xs">
                      Experience the visual calmness of our Beverly Hills lobby, laser surgery decks, and private relaxation lounges. Our registrars are prepared to host your first visit.
                    </p>
                  </div>

                  <div className="flex justify-center gap-3">
                    <button
                      onClick={handleBookClick}
                      className="px-6 py-3 bg-white text-slate-950 font-bold text-xs uppercase rounded-xl hover:bg-slate-100 transition-colors"
                    >
                      Bypass Tour & Book Now
                    </button>
                    <button
                      onClick={() => setVideoModalOpen(false)}
                      className="px-5 py-3 bg-slate-800 text-slate-300 font-semibold text-xs rounded-xl"
                    >
                      Return to site
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
