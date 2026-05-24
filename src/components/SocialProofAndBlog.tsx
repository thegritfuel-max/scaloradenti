import { Sparkles, Instagram, BookOpen, Clock, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

const INSTAGRAM_POSTS = [
  { id: "p1", img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=400&q=80", tag: "#ScaloraSmiles" },
  { id: "p2", img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=400&q=80", tag: "#BeverlyHillsDentist" },
  { id: "p3", img: "/src/assets/images/luxury_clinic_interior_1779615683153.png", tag: "#DentalZenSpace" },
  { id: "p4", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80", tag: "#VeneersArtistry" }
];

const BLOG_ARTICLES = [
  {
    id: "b1",
    cat: "Materials Science",
    title: "Demystifying Lithia Disilicate: The Translucent Magic of E-Max Veneers",
    excerpt: "Discover how our custom-layered biological dental ceramics duplicate identical light absorption rates and textures of natural human enamel structures.",
    readTime: "5 min read",
    date: "May 24, 2026",
    img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=500&q=80"
  },
  {
    id: "b2",
    cat: "Endodontics Evolution",
    title: "The Silent Root Canal: Micro Erbium Lasers & Zeiss Precision",
    excerpt: "No drills, no high-pitch metal scraping. Read how targeted laser frequencies cleanse and protect tooth canals with near-perfect comfort ratings.",
    readTime: "4 min read",
    date: "April 18, 2026",
    img: "https://images.unsplash.com/photo-1460150031242-218a00fdfd41?auto=format&fit=crop&w=500&q=80"
  }
];

export default function SocialProofAndBlog() {
  return (
    <section className="py-24 bg-white relative overflow-hidden" id="social-blog">
      
      {/* Background soft shadow */}
      <div className="absolute top-[30%] left-[-5%] w-80 h-80 bg-blue-50 bg-sky-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 space-y-24">
        
        {/* PARt 1: INSTAGRAM FEED */}
        <div className="space-y-12">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-sky-50 border border-sky-100 text-sky-600 rounded-full text-xs font-semibold font-sans uppercase">
              <Instagram className="w-3.5 h-3.5" />
              <span>@ScaloraDentalStudio</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold font-sans tracking-tight text-slate-900">
              Follow Our Curated Visual Feed
            </h2>
            
            <p className="text-slate-400 text-sm max-w-md font-sans">
              Discover active clinical previews, patient reviews, and relaxing architectural layouts inside our pristine Beverly Hills boutique.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {INSTAGRAM_POSTS.map((post, idx) => (
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                key={post.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="group relative rounded-[24px] overflow-hidden shadow-sm aspect-square bg-slate-100 border border-slate-200/50 block cursor-pointer"
              >
                <img
                  src={post.img}
                  alt={post.tag}
                  className="w-full h-full object-cover group-hover:scale-105 duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none" />
                
                {/* Tag label */}
                <span className="absolute bottom-3 left-3 bg-white/90 backdrop-blur text-slate-800 text-[9px] font-mono font-bold tracking-wider rounded px-2 py-1 select-none">
                  {post.tag}
                </span>

                <div className="absolute top-4 right-4 p-2 bg-sky-505 bg-sky-500 text-slate-950 rounded-full opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 duration-305 pointer-events-none">
                  <Instagram className="w-4 h-4 text-slate-950" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* PART 2: BLOG PREVIEWS */}
        <div className="pt-16 border-t border-slate-100 space-y-12" id="blog">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 border border-slate-200/50 text-slate-700 rounded-full text-xs font-semibold font-sans uppercase">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Editorial Library</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-sans tracking-tight text-slate-900 leading-tight">
                Insights On Precision Restoration
              </h2>
            </div>
            
            <p className="text-slate-400 text-sm max-w-sm font-sans leading-relaxed">
              Explore educational articles authored by our head clinicians covering modern laser endodontics, biological ceramics, and facial analysis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BLOG_ARTICLES.map((art, idx) => (
              <motion.article
                key={art.id}
                initial={{ opacity: 0, x: idx === 0 ? -25 : 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="bg-slate-50 hover:bg-white rounded-[32px] border border-slate-100 p-6 flex flex-col sm:flex-row gap-6 hover:shadow-xl duration-300 items-center cursor-pointer"
              >
                {/* Article image */}
                <div className="w-full sm:w-2/5 h-[170px] shrink-0 rounded-2xl overflow-hidden shadow-inner object-cover bg-slate-100">
                  <img
                    src={art.img}
                    alt={art.title}
                    className="w-full h-full object-cover hover:scale-105 duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Article texts */}
                <div className="flex-1 flex flex-col justify-between h-auto py-1 space-y-4">
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase font-bold text-sky-600 font-mono tracking-wider block">
                      {art.cat}
                    </span>
                    
                    <h3 className="text-base font-bold text-slate-900 font-sans tracking-tight line-clamp-2 leading-snug">
                      {art.title}
                    </h3>

                    <p className="text-slate-400 text-[11px] leading-relaxed line-clamp-3">
                      {art.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t border-slate-200/60 pt-3">
                    <div className="flex items-center gap-3 text-[10px] text-slate-400 font-mono">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-sky-500" />
                        {art.readTime}
                      </span>
                      <span>•</span>
                      <span>{art.date}</span>
                    </div>

                    <span className="text-[10px] font-bold text-slate-900 uppercase font-mono tracking-wider hover:text-sky-600 flex items-center gap-1">
                      <span>Read</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
