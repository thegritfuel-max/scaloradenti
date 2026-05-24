import { useState, useRef, useEffect } from "react";
import { MessageSquare, Send, X, Bot, Sparkles, AlertCircle, HeartPulse, BrainCircuit, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ChatMessage } from "../types";

interface DentConsultantWidgetProps {
  onOpenBooking: () => void;
}

export default function DentConsultantWidget({ onOpenBooking }: DentConsultantWidgetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [shownPromptHint, setShownPromptHint] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestionPrompts = [
    { text: "Does a laser root canal hurt?", icon: "🔥" },
    { text: "How long do E-Max veneers last?", icon: "✨" },
    { text: "What elite comforts do you have?", icon: "🛋️" },
    { text: "Tell me about Dr. Julian Scalora", icon: "👨‍⚕️" }
  ];

  useEffect(() => {
    // Add warm welcome message
    if (messages.length === 0) {
      setMessages([
        {
          id: "welcome",
          role: "assistant",
          content: "Welcome to **Scalora Dental Studio**, Beverly Hills. I am **DentAssist**, your virtual AI Dental Consultant. \n\nHow can I guide your smile journey with precision today? Ask me about cosmetic veneers, guided implants, or our therapeutic spa comforts.",
          timestamp: new Date()
        }
      ]);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [isOpen, messages, isLoading]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: "user-" + Date.now(),
      role: "user",
      content: textToSend,
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage("");
    setShownPromptHint(false);
    setIsLoading(true);

    try {
      const historyPayload = messages.map((m) => ({
        role: m.role,
        content: m.content
      }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: textToSend, history: historyPayload })
      });

      if (!res.ok) {
        throw new Error("Failed to communicate with consultation core.");
      }

      const data = await res.json();
      
      const assistantMsg: ChatMessage = {
        id: "assistant-" + Date.now(),
        role: "assistant",
        content: data.text,
        timestamp: new Date()
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (err: any) {
      console.error(err);
      const errorMsg: ChatMessage = {
        id: "error-" + Date.now(),
        role: "assistant",
        content: "I apologize. Our clinical network is undergoing optimization. Please feel free to call our direct registration desk at **+1 (310) 555-0190** or book a slot below.",
        timestamp: new Date()
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 350 }}
            className="w-[92vw] sm:w-[400px] h-[580px] bg-white border border-slate-200/80 shadow-2xl rounded-3xl overflow-hidden flex flex-col mb-4"
          >
            {/* Header */}
            <div className="bg-slate-950 p-4 shrink-0 flex items-center justify-between text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-xl pointer-events-none" />
              
              <div className="flex items-center gap-2.5 relative z-10">
                <div className="p-2 rounded-xl bg-sky-500/20 text-sky-400 border border-sky-400/20">
                  <HeartPulse className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <h3 className="font-bold text-sm tracking-wide flex items-center gap-1.5">
                    <span>DentAssist Consultant</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  </h3>
                  <p className="text-[10px] text-sky-300 font-medium">Scalora Virtual Suite • AI Grounded</p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 bg-white/10 hover:bg-white/20 transition-colors rounded-full text-slate-300 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-3.5 text-xs shadow-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-slate-900 text-slate-100 rounded-tr-none"
                        : "bg-white text-slate-800 border border-slate-100 rounded-tl-none whitespace-pre-line"
                    }`}
                  >
                    {msg.role === "assistant" && (
                      <div className="flex items-center gap-1.5 text-sky-600 font-bold mb-1.5 text-[10px] uppercase font-mono tracking-wider">
                        <Bot className="w-3.5 h-3.5" />
                        <span>AI Diagnosis Advice</span>
                      </div>
                    )}
                    <span className="font-sans block">{msg.content}</span>
                  </div>
                </div>
              ))}

              {/* Skeleton Loading */}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] rounded-2xl p-4 bg-white border border-slate-100 rounded-tl-none space-y-2 w-2/3">
                    <div className="flex items-center gap-1 text-sky-500 font-bold text-[9px] uppercase font-mono mb-1">
                      <BrainCircuit className="w-3.5 h-3.5 animate-spin" />
                      <span>Analyzing Clinical Solution...</span>
                    </div>
                    <div className="h-2 bg-slate-200 rounded animate-pulse w-full" />
                    <div className="h-2 bg-slate-200 rounded animate-pulse w-[80%]" />
                    <div className="h-2 bg-slate-200 rounded animate-pulse w-[50%]" />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Prompt Hints */}
            {shownPromptHint && (
              <div className="p-3 bg-white border-t border-slate-100 shrink-0">
                <p className="text-[10px] text-slate-400 font-bold mb-2 uppercase tracking-wide font-mono flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-sky-500" />
                  <span>Interactive Consultation Guidelines</span>
                </p>
                <div className="grid grid-cols-2 gap-1.5">
                  {suggestionPrompts.map((p) => (
                    <button
                      key={p.text}
                      onClick={() => handleSendMessage(p.text)}
                      className="p-2 border border-slate-100 hover:border-sky-200 hover:bg-sky-50/30 text-slate-600 hover:text-slate-900 duration-150 rounded-xl text-[11px] text-left leading-normal flex items-start gap-1"
                    >
                      <span className="shrink-0">{p.icon}</span>
                      <span className="line-clamp-2">{p.text}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Footer Form */}
            <div className="p-3 bg-white border-t border-slate-100 shrink-0 flex gap-2">
              <input
                type="text"
                placeholder="Ask clinical queries or amenities..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage(inputMessage)}
                className="flex-1 px-3.5 py-2.5 text-xs bg-slate-50 border border-slate-200 focus:outline-none focus:border-sky-400 rounded-xl text-slate-800"
              />
              <button
                onClick={() => handleSendMessage(inputMessage)}
                disabled={isLoading || !inputMessage.trim()}
                className="p-2.5 bg-sky-500 text-slate-950 rounded-xl hover:bg-sky-400 disabled:opacity-50 duration-200 flex items-center justify-center shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>

            {/* Micro direct-booking bridge */}
            <div className="p-2.5 bg-slate-50 border-t border-slate-100 text-center shrink-0">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenBooking();
                }}
                className="inline-flex items-center gap-1 text-[10px] font-bold text-slate-900 hover:text-sky-600 uppercase tracking-widest transition-colors"
              >
                <Calendar className="w-3 h-3" />
                <span>Bypass Virtual Consultant & Book Slot</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Launcher Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 bg-slate-900 border border-slate-800 text-white rounded-full flex items-center justify-center shadow-2xl relative cursor-pointer"
        id="consulting-launcher-btn"
      >
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-sky-400 rounded-full border-2 border-slate-900 animate-bounce" />
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6 text-sky-400" />}
      </motion.button>
    </div>
  );
}
