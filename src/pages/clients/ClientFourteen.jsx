import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  Camera, 
  Aperture, 
  Film, 
  Images, 
  Heart, 
  Sparkles, 
  MapPin, 
  Phone, 
  Instagram, 
  Facebook, 
  Youtube, 
  ArrowUpRight, 
  PlayCircle,
  Clock,
  Award,
  ChevronRight,
  ExternalLink,
  Zap,
  MessageCircle
} from 'lucide-react';

const ClientFourteen = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-quart',
    });
  }, []);

  const cinematicWorks = [
    { id: "01", title: "The Royal Union", cat: "Wedding Narrative", img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800" },
    { id: "02", title: "Noir Fashion", cat: "Editorial", img: "https://images.unsplash.com/photo-1537832816519-689ad163238b?q=80&w=800" },
    { id: "03", title: "First Breath", cat: "Maternity", img: "https://images.unsplash.com/photo-1559131397-f94da358f7ca?q=80&w=800" },
    { id: "04", title: "Urban Soul", cat: "Portraits", img: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=800" },
    { id: "05", title: "Corporate Aura", cat: "Commercial", img: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=800" }
  ];

  return (
    <div className="bg-[#030303] text-white overflow-x-hidden font-sans selection:bg-amber-500 selection:text-black">
      
      {/* --- CINEMATIC TICKER --- */}
      <div className="bg-amber-500 text-black text-[9px] font-black text-center py-2 uppercase tracking-[0.4em] sticky top-0 z-[60] shadow-2xl">
        🎞️ Now Booking: Summer Weddings 2026 • 48-Hour Sneak Peek Delivery Active 
      </div>

      {/* --- MINIMALIST NAV --- */}
      <nav className="fixed w-full top-8 z-50 bg-black/40 backdrop-blur-2xl border-b border-white/5 px-6 py-5 flex justify-between items-center">
        <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-amber-500 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.4)]">
                <Aperture size={20} className="text-black animate-spin-slow" />
            </div>
            <h2 className="text-xl font-black tracking-tighter uppercase italic">Focus<span className="text-amber-500 font-sans">Frame</span></h2>
        </div>
        <a href="tel:+919900077000" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center active:scale-90 transition">
            <Phone size={18} className="text-amber-500" />
        </a>
      </nav>

      {/* --- HERO: THE SHUTTER DROP --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1600" alt="Hero" className="w-full h-full object-cover opacity-50 scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center px-6">
          <p data-aos="fade-down" className="text-amber-500 font-mono text-[10px] uppercase tracking-[0.6em] mb-6">Mastery through the lens</p>
          <h1 data-aos="zoom-out" className="text-7xl md:text-[12rem] font-black leading-[0.8] tracking-tighter uppercase italic">
            Visual <br/> <span className="text-transparent stroke-text">Poetry.</span>
          </h1>
          <div className="mt-12 flex flex-col gap-4 items-center">
             <button className="bg-white text-black px-10 py-4 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-amber-500 transition-all shadow-xl active:scale-95">Book Studio Session</button>
             <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-white transition group">
                Watch Showreel <PlayCircle size={16} className="text-amber-500 group-hover:scale-110 transition" />
             </button>
          </div>
        </div>

        {/* Floating Background Text */}
        <div className="absolute -bottom-10 left-0 w-full whitespace-nowrap opacity-[0.02] pointer-events-none">
            <h2 className="text-[20rem] font-black uppercase italic leading-none">Perspective</h2>
        </div>
      </section>

      {/* --- KEY STATS: THE EXPOSURE --- */}
      <section className="py-20 px-8 bg-black grid grid-cols-2 gap-4 border-y border-white/5">
          {[
            { v: "500+", l: "Weddings", i: <Heart size={20}/> },
            { v: "15d", l: "Fast Edit", i: <Zap size={20}/> },
            { v: "12Y", l: "Experience", i: <Award size={20}/> },
            { v: "4K", l: "Resolution", i: <Film size={20}/> }
          ].map((stat, i) => (
            <div key={i} data-aos="zoom-in" data-aos-delay={i*100} className="p-8 bg-white/5 rounded-[2rem] border border-white/5 text-center flex flex-col items-center">
               <div className="text-amber-500 mb-2 opacity-50">{stat.i}</div>
               <h3 className="text-3xl font-black text-white tracking-tighter italic">{stat.v}</h3>
               <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest mt-1">{stat.l}</p>
            </div>
          ))}
      </section>

      {/* --- SELECTED WORKS: FILM STRIP LAYOUT --- */}
      <section className="py-24 px-6 bg-[#030303]">
        <div className="mb-16">
            <p className="text-amber-500 font-bold text-[10px] uppercase tracking-widest mb-2 italic">Visual Archives</p>
            <h2 className="text-4xl font-black tracking-tighter uppercase italic leading-none">The Frame <br/> Collection</h2>
        </div>

        <div className="space-y-12">
          {cinematicWorks.map((work, idx) => (
            <div key={idx} data-aos="fade-up" className="relative group overflow-hidden rounded-[3rem] border border-white/10">
               <div className="absolute top-6 right-6 z-20 w-12 h-12 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-amber-500">
                  <ArrowUpRight size={18} />
               </div>
               <div className="relative h-[450px] overflow-hidden">
                  <img src={work.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition duration-1000" alt={work.title} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
               </div>
               <div className="absolute bottom-10 left-10">
                  <span className="text-amber-500 font-mono text-[10px] font-black uppercase tracking-widest mb-1 block">CODE_REF: {work.id}</span>
                  <p className="text-white/40 font-bold text-[9px] uppercase tracking-widest mb-1">{work.cat}</p>
                  <h3 className="text-3xl font-black uppercase italic leading-none">{work.title}</h3>
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- STUDIO DEPTH: THE JEALOUSY SECTION --- */}
      <section className="py-24 px-8 bg-amber-500 text-black rounded-[4rem] mx-2 my-10 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-80 h-80 bg-white/20 rounded-full blur-[120px] opacity-50"></div>
         <div className="relative z-10">
            <h2 className="text-4xl font-black mb-12 leading-none uppercase italic text-center">Studio <br/> Standards</h2>
            <div className="space-y-12">
               {[
                 { t: "Cinematic Lighting", d: "Using Profoto B10X AirTTL systems for world-class editorial depth.", i: <Zap size={32} /> },
                 { t: "Fast Post-Process", d: "Proprietary AI-color grading workflow ensures album delivery in 15 days.", i: <Clock size={32} /> },
                 { t: "Gear Superiority", d: "Capturing details in 10-bit LOG using Sony Alpha 7R V & GM Lenses.", i: <Images size={32} /> }
               ].map((item, i) => (
                  <div key={i} data-aos="fade-up" className="flex gap-6 items-start bg-black/5 p-6 rounded-[2.5rem] border border-black/10">
                     <div className="text-black mt-1">{item.i}</div>
                     <div>
                        <h4 className="font-black text-lg uppercase tracking-tight">{item.t}</h4>
                        <p className="text-sm opacity-70 leading-relaxed font-medium italic">"{item.d}"</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* --- THE "LENS" DUMMY MAP SECTION --- */}
      <section className="py-24 bg-black relative overflow-hidden font-sans">
         <div className="px-8 mb-10">
            <h2 className="text-4xl font-black uppercase italic tracking-tighter leading-none mb-4">Locate <br/> The Lens</h2>
            <p className="text-amber-500 font-black text-[10px] uppercase tracking-widest mb-2">Main Studio • Theni District</p>
         </div>
         
         <div className="px-4">
            <div className="w-full h-[400px] rounded-full overflow-hidden bg-[#0a0a0a] relative group border-[20px] border-white/5 flex items-center justify-center">
                {/* --- ARTISTIC LENS MAP UI --- */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1a1a1a_1px,transparent_1px)] bg-[size:25px_25px] opacity-30"></div>
                
                {/* Aperture Blades Design */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-0 left-1/2 w-1 h-full bg-white rotate-45"></div>
                    <div className="absolute top-0 left-1/2 w-1 h-full bg-white -rotate-45"></div>
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-white"></div>
                </div>

                {/* Location Marker */}
                <div className="relative z-10 flex flex-col items-center">
                    <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center text-black shadow-[0_0_60px_rgba(245,158,11,0.6)] animate-pulse">
                        <MapPin size={32} fill="currentColor" />
                    </div>
                    <div className="mt-6 bg-white p-5 rounded-2xl shadow-2xl text-black text-center min-w-[220px]">
                        <p className="text-[9px] font-black text-gray-400 uppercase leading-none mb-1">HQ Studio</p>
                        <h5 className="font-black italic text-lg leading-tight">Camera Street, CBE</h5>
                        <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-center gap-2">
                           <span className="text-[8px] font-black uppercase text-green-600">Active Now</span>
                           <Sparkles size={10} className="text-amber-500" />
                        </div>
                    </div>
                </div>

                <button className="absolute bottom-12 bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-3 rounded-full font-black text-[10px] uppercase tracking-widest flex items-center gap-2 active:scale-95 transition">
                    Open Navigation <ExternalLink size={12} />
                </button>
            </div>
         </div>
      </section>

      {/* --- FOOTER: THE SHUTTER SPEED --- */}
      <footer className="py-24 px-10 bg-black text-white font-sans overflow-hidden relative border-t border-white/5 text-center">
        <div className="absolute bottom-0 right-0 opacity-5 text-[15rem] font-black italic -mr-20 -mb-20 pointer-events-none uppercase">FOCUS</div>
        <div className="flex flex-col items-center mb-16">
            <Aperture size={48} className="text-amber-500 mb-6" />
            <h2 className="text-3xl font-black uppercase tracking-[0.2em] mb-4 italic leading-none font-sans">FocusFrame</h2>
            <p className="max-w-xs opacity-50 text-[10px] leading-relaxed font-bold uppercase tracking-widest italic text-center">Telling Stories That Live Forever Through Lights & Frames Since 2012.</p>
        </div>
        
        <div className="grid grid-cols-2 gap-8 text-left border-y border-white/10 py-12 mb-16 font-sans">
            <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-amber-500 mb-2">The Studio</p>
                <p className="text-[11px] font-bold leading-relaxed italic text-gray-500 uppercase">Camera Street, <br/> Theni - 625513</p>
            </div>
            <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-amber-500 mb-2">Connect</p>
                <p className="text-[11px] font-bold leading-relaxed italic text-gray-500 uppercase">hello@focusframe.com <br/> +91 99000 77000</p>
            </div>
        </div>

        <div className="flex justify-center gap-8 mb-16">
           <Instagram size={24} className="opacity-30 hover:text-pink-500 transition cursor-pointer" />
           <Youtube size={24} className="opacity-30 hover:text-red-500 transition cursor-pointer" />
           <Facebook size={24} className="opacity-30 hover:text-blue-500 transition cursor-pointer" />
        </div>
        
        <div className="text-[9px] font-black text-white/10 uppercase tracking-[0.8em] pt-10">
          © 2026 FOCUSFRAME • CINEMATIC STORYTELLERS
        </div>
      </footer>

      {/* --- STICKY MOBILE ACTION BAR --- */}
      <div className="fixed bottom-0 w-full z-[60] p-4 bg-black/80 backdrop-blur-xl flex gap-3 shadow-2xl font-sans border-t border-white/5">
         <button className="flex-1 bg-white text-black py-4 rounded-xl font-black text-[10px] uppercase tracking-widest active:scale-95 transition flex items-center justify-center gap-2">
           <Images size={14} /> Portfolio
         </button>
         <button className="flex-1 bg-amber-500 text-black py-4 rounded-xl font-black text-[10px] uppercase tracking-widest active:scale-95 transition flex items-center justify-center gap-2 shadow-xl shadow-amber-500/20">
           <MessageCircle size={14} fill="currentColor" /> Book Now
         </button>
      </div>

      <style>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255,255,255,0.4);
        }
        .animate-spin-slow {
          animation: spin 10s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

    </div>
  );
};

export default ClientFourteen;