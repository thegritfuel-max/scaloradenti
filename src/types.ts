export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  description: string;
  detailedDescription: string;
  priceEstimate: string;
  duration: string;
  image: string;
}

export interface DoctorProfile {
  id: string;
  name: string;
  role: string;
  designation: string;
  image: string;
  bio: string;
  specialties: string[];
  education: string;
  languages: string[];
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  stars: number;
  treatment: string;
  review: string;
  avatar: string;
  verified: boolean;
  date: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface BookingPayload {
  name: string;
  email: string;
  phone: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
  comfortSelection: string[];
}

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}
