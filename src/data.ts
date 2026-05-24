import { ServiceItem, DoctorProfile, TestimonialItem, FAQItem } from "./types";

export const CLINIC_SERVICES: ServiceItem[] = [
  {
    id: "cosmetic",
    title: "Cosmetic Veneers",
    category: "Esthetics",
    description: "Premium porcelain shells custom-engineered by master ceramists to correct alignment, gaps, & structural discolorations.",
    detailedDescription: "Using ultra-thin, translucent porcelain bonded seamlessly to your teeth, our custom veneers look completely natural and reflect light exactly like authentic enamel. Crafted individually in our premium laboratory.",
    priceEstimate: "From $1,800 / tooth",
    duration: "2 sessions",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "implants",
    title: "3D Guided Implants",
    category: "Restoration",
    description: "Biocompatible high-precision restorations to replace missing teeth, returning full load capacity & natural aesthetics.",
    detailedDescription: "Using state-of-the-art 3D CBCT imaging and guided surgical templates, Dr. Vance positions titanium or biological zirconia implants with micrometric precision. This results in minimal discomfort and ultra-fast healing.",
    priceEstimate: "From $3,500 / implant",
    duration: "1 - 3 months",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "whitening",
    title: "Clinical Laser Whitening",
    category: "Esthetics",
    description: "Advanced light-activated oxygen therapy that gently lifts up to eight shades of staining in just under 60 minutes.",
    detailedDescription: "Our specialized whitening laser targets deeply embedded organic pigments beneath your enamel without causing dentin hypersensitivity. Includes custom home-care booster trays to preserve elite longevity.",
    priceEstimate: "From $650",
    duration: "60 minutes",
    image: "https://images.unsplash.com/photo-1512223792601-592a9809eed4?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "aligners",
    title: "Invisalign® Platinum",
    category: "Orthodontics",
    description: "Virtually invisible medical-grade polymer aligners custom-formed to straighten teeth safely and discreetly.",
    detailedDescription: "Using a high-speed iTero digital panoramic arch scanner, we generate an animated 3D progression chart of your dental shift. Enjoy perfect clinical adjustments with zero metallic wires or physical distress.",
    priceEstimate: "From $4,500",
    duration: "6 - 12 months",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "root-canal",
    title: "Laser Endodontics",
    category: "Therapeutics",
    description: "Microscopic root canal treatment that eliminates pulp infections gently using targeted acoustic laser disinfection.",
    detailedDescription: "By operating under powerful Carl Zeiss surgical microscopes and employing Erbium laser pulses, we disinfect infected root pathways gently. High comfort rates and 98% long-term tooth preservation.",
    priceEstimate: "From $1,200",
    duration: "1 session",
    image: "https://images.unsplash.com/photo-1460150031242-218a00fdfd41?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "pediatric",
    title: "Sensory Family Care",
    category: "Pediatric",
    description: "Reassuring, slow-paced family dental care styled within child-friendly interactive sensory rooms.",
    detailedDescription: "Designed specifically to overcome dental anxiety in children. Our sensory approach involves sound-absorbing therapeutic walls, cartoon VR headset distractions, and rewarding educational games.",
    priceEstimate: "From $250",
    duration: "45 minutes",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=600&q=80"
  }
];

export const CLINIC_DOCTORS: DoctorProfile[] = [
  {
    id: "dr-julian",
    name: "Dr. Julian Scalora",
    role: "Founder & Master Cosmetic Dentist",
    designation: "DDS, Columbia University School of Dental Medicine",
    image: "/src/assets/images/lead_dentist_portrait_1779615704138.png",
    bio: "With over 18 years of clinical artistry, Dr. Scalora combines orthodontic structure with premium dental porcelain to design smiles that act as natural portrait frameworks.",
    specialties: ["Aesthetic Smile Design", "Porcelain Veneers Coordination", "Laser Gum Sculpting"],
    education: "Postgraduate Residency in Advanced Prosthodontics at Columbia Dental",
    languages: ["English", "Italian"]
  },
  {
    id: "dr-clara",
    name: "Dr. Clara Vance",
    role: "Chief Dental Surgeon & Implantologist",
    designation: "DDS, PhD in Implantology, Harvard School of Dental Medicine",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80",
    bio: "Dr. Vance is a double-boarded reconstructive specialist who pioneered 3D computer-guided bone tissue engineering. Her delicate medical touch makes surgery feel entirely peaceful.",
    specialties: ["Computer-Guided Implants", "Maxillofacial Bone Grafting", "Sedation Dentistry"],
    education: "Clinical Fellowship, International Congress of Oral Implantologists (ICOI)",
    languages: ["English", "Spanish", "German"]
  }
];

export const CLINIC_TESTIMONIALS: TestimonialItem[] = [
  {
    id: "t1",
    clientName: "Eleanor Vance",
    stars: 5,
    treatment: "Cosmetic Porcelain Veneers",
    review: "Scalora finished my dental veneers last autumn, and my confidence has completely changed. The clinical environment is so soothing, with heated massage chairs and noise-canceling headsets.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    verified: true,
    date: "March 2026"
  },
  {
    id: "t2",
    clientName: "Marcus Sterling",
    stars: 5,
    treatment: "Full Arch 3D Guided Implants",
    review: "I was extremely concerned about implant surgery. Dr. Vance used structural 3D templates, and the operation was completely painless. Absolute luxury clinical service from start to finish.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    verified: true,
    date: "April 2026"
  },
  {
    id: "t3",
    clientName: "Audrey Laurent",
    stars: 5,
    treatment: "Invisalign Treatment",
    review: "The visual simulations showed my exact teeth progress. No uncomfortable metal, and the entire team treated me with absolute boutique hospitality. Highly recommended!",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    verified: true,
    date: "May 2026"
  }
];

export const CLINIC_FAQS: FAQItem[] = [
  {
    category: "General",
    question: "What amenities are provided to address dental anxiety?",
    answer: "We offer high-end spa comforts including virtual reality video distraction glasses, warm therapeutic lavender face towels, customized Bose noise-canceling headsets, and premium medically supervised nitrous oxide or oral twilight sedation to assure absolute calmness."
  },
  {
    category: "Veneers",
    question: "Do cosmetic veneers damage my underlying natural teeth?",
    answer: "Dr. Scalora practices minimally invasive dentistry, preserving 95% of your natural structure. We shave off less than 0.3mm of enamel (about the width of a contact lens) using microscopic preparation, guaranteeing that your teeth beneath remain healthy and structurally intact."
  },
  {
    category: "Implants",
    question: "How long does the guided dental implant process require?",
    answer: "Our 3D computer-guided placement requires less than 30 minutes in the chair. Normal healing and bone integration require 8 to 12 weeks, during which you will wear comfortable cosmetic crowns so you never exit our studio without a fully complete smile structure."
  },
  {
    category: "Billing",
    question: "Do you collaborate with dental insurance providers?",
    answer: "We are a boutique out-of-network clinic to guarantee we never compromise on premium medical materials or visual time. Our registrars will prepare and submit all electronic claim files on your behalf so your carrier reimburses you directly to the highest policy values."
  }
];

export const COMFORT_AMENITIES = [
  { id: "vr", label: "Virtual Reality Video Glasses" },
  { id: "bose", label: "Bose Noise-Canceling Headphones" },
  { id: "massage", label: "Heated Therapeutic Massage Chair" },
  { id: "aroma", label: "Warm Lavender Essential Towels" },
  { id: "sedation", label: "Mild Dental Twilight Sedation Options" }
];
