import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Lazy-loaded GenAI Client to prevent crashes during startup if API key is missing
let aiInstance: null | GoogleGenAI = null;
function getGeminiClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey || apiKey === "MY_GEMINI_API_KEY") {
    return null;
  }
  if (!aiInstance) {
    aiInstance = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });
  }
  return aiInstance;
}

// AI Dental Consulting Assistant Endpoint (Server-Side proxy for Gemini)
app.post("/api/chat", async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Message is required." });
    }

    const ai = getGeminiClient();

    const systemInstruction = 
      "You are 'DentAssist', the virtual AI Dental Consultant for Scalora Dental Studio, " +
      "an ultra-premium, high-end luxury dental boutique located in Beverly Hills, California. " +
      "Your tone is incredibly polished, clinical, elegant, deeply empathetic, and reassuring. " +
      "Scalora Dental Studio offers premier services including: " +
      "1. Cosmetic Dentistry (Veneers, Smile Makeovers, Bonding, inlays) - custom-crafted by master ceramists. " +
      "2. Dental Implants (Full mouth reconstructions, 3D Guided single implants) - with Dr. Clara Vance. " +
      "3. Microscopic Painless Root Canals - using gentle laser endodontics. " +
      "4. Teeth Whitening - Zoom Laser + take-home custom boutique kits. " +
      "5. Invisalign Clear Aligners - with full virtual smile preview scans. " +
      "6. Pediatric Dentistry & Family Care - tailored for sensory comfort. " +
      "Our practice is led by Dr. Julian Scalora (Master Cosmetic Dentist) and Dr. Clara Vance (Implantology surgeon). " +
      "We provide premium spa amenities: warm lavender therapy towels, Bose noise-canceling headphones, and virtual reality glasses. " +
      "Never give final clinical diagnostics or absolute promises of outcome. Always present potential modern treatments " +
      "and suggest scheduling a complimentary visual assessment or virtual appointment with our specialists. " +
      "Structure your responses elegantly with bullet points and paragraphs. Speak directly to patients seeking elite care.";

    if (!ai) {
      // Elegant clinical simulator fallback when API Key is missing or default
      const mockResponses = [
        "Thank you for contacting **Scalora Dental Studio**. Based on your query, we highly recommend custom **Cosmetic Veneers** or our 3D-guided **Implants** systems. Our clinic offers fully relaxing amenities like heated massage chairs and noise-canceling headsets to assure absolute peace. Would you like me to guide you to our **Appointment Booking Form** or schedule a virtual consultations with Dr. Julian Scalora?",
        "That sounds like a concerns that our lead surgeon, **Dr. Clara Vance**, can address beautifully. We offer advanced painless laser therapeutics to ensure treatment is quick and entirely comfortable. I can reserve a slot for a detailed 3D CBCT diagnostics scan if you share your preferred dates.",
        "A healthy, sparkling smile is our absolute commitment. For teeth whitening or alignment, we offer bespoke **Invisalign Clear Aligners** and clinical laser teeth whitening. We would love to welcome you to our sensory oasis in Beverly Hills! Can I help you initiate the booking process below?"
      ];
      // Simple text match to customize simulation slightly
      let responseText = mockResponses[0];
      const lowerMsg = message.toLowerCase();
      if (lowerMsg.includes("pain") || lowerMsg.includes("root canal") || lowerMsg.includes("hurt") || lowerMsg.includes("emergency")) {
        responseText = `At **Scalora Dental Studio**, patient comfort is our highest priority. We apologize that you are experiencing this. For acute distress or possible treatment, Dr. Clara Vance performs microscopically guided, completely comfortable laser endodontic root canal treatments. We also host a 24/7 dedicated dental emergency line. I strongly suggest requesting an immediate evaluation using the form below, or call our priority concierge at **+1 (310) 555-0190**. We will prioritize seeing you today.`;
      } else if (lowerMsg.includes("whitening") || lowerMsg.includes("cosmetic") || lowerMsg.includes("veneer") || lowerMsg.includes("smile") || lowerMsg.includes("align")) {
        responseText = `A gorgeous, confident smile is custom-crafted here like premium fine art. Dr. Julian Scalora leverages ultra-thin porcelain veneers, translucent cosmetic bonding, and advanced **Invisalign 3D Smile Analysis** to build natural, radiant smiles with absolute precision. We would be delighted to host you for a comprehensive aesthetic simulation. May I take your details or guide you to our luxury booking concierge?`;
      } else if (lowerMsg.includes("implant") || lowerMsg.includes("missing") || lowerMsg.includes("screw") || lowerMsg.includes("surgery")) {
        responseText = `For missing or failing teeth, Scalora Dental Studio specializes in dental restoration using biocompatible, high-density titanium and zirconia **Dental Implants**. Dr. Clara Vance is a world-class reconstructive dental surgeon who utilizes custom 3D computer-guided surgical templates. This guarantees near-zero recovery time and absolute long-term durability. Would you like me to request an implant diagnostics appointment for you?`;
      }
      return res.json({ text: responseText, simulates: true });
    }

    // Call the genuine Gemini API server-side
    const promptContents = [];
    if (history && Array.isArray(history)) {
      for (const turn of history) {
        promptContents.push({
          role: turn.role === "user" ? "user" : "model",
          parts: [{ text: turn.content }]
        });
      }
    }
    promptContents.push({ role: "user", parts: [{ text: message }] });

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: promptContents,
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.7,
      }
    });

    const textOutput = response.text || "I apologize, but I am unable to generate a detailed response at this moment. Please double check with our front-desk concierge.";
    return res.json({ text: textOutput });
  } catch (error: any) {
    console.error("Gemini API Error in backend:", error);
    return res.status(500).json({ error: error.message || "Failed to process dental consultation request." });
  }
});

// Premium Booking Form Reservation Endpoint
app.post("/api/book", (req, res) => {
  const { name, email, phone, service, date, message } = req.body;
  if (!name || !email || !phone || !service || !date) {
    return res.status(400).json({ error: "Please complete all luxury registration fields." });
  }
  // Store or process reservation
  return res.json({
    success: true,
    bookingId: "SCDS-" + Math.floor(100000 + Math.random() * 900000),
    message: `Thank you, ${name}. Your elite consultation request for cosmetic ${service} has been prioritized. Dr. Scalora's clinical registrar will contact you at ${phone} or via ${email} within 2 hours to finalize your diagnostic appointment.`
  });
});

// Setup Vite Dev server or Serve static files in production
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Scalora Server] Up and running on http://localhost:${PORT}`);
  });
}

startServer();
