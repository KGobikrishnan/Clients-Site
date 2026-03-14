import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  Eye, 
  Glasses, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Phone, 
  Instagram, 
  Facebook, 
  ArrowRight, 
  ChevronRight,
  ExternalLink,
  Zap,
  MessageCircle,
  TrendingUp,
  Award,
  CircleDot,
  Fingerprint,
  Maximize,
  Search,
  Menu
} from 'lucide-react';

const ClientTwenty = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-expo',
    });
  }, []);

  const designerBatch = [
    { 
      id: "BATCH-26/A",
      title: "Monarch Titanium", 
      cat: "Structural Frames", 
      desc: "Architectural precision in brushed metal.",
      img: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=800"
    },
    { 
      id: "BATCH-26/B",
      title: "Onyx Digital", 
      cat: "Blue-Cut Shield", 
      desc: "Advanced refraction for the screen-native generation.",
      img: "https://flikertag.com/cdn/shop/files/208_1.jpg?v=1769883196&width=1445"
    },
    { 
      id: "BATCH-26/C",
      title: "Solstice Noir", 
      cat: "High-Contrast Shades", 
      desc: "Deep polarization for harsh summer exposure.",
      img: "https://assets2.glasses.com/cdn-record-files-pi/edd219d0-7257-44df-8b20-b17900f3b1a5/73afdc18-95e2-40a2-93e2-b179011dc6fc/0RB2389__901_31__P21__shad__qt.png?impolicy=GL_IGFB"
    }
  ];

  return (
    <div className="bg-[#fcfaf7] text-[#1a1a1a] overflow-x-hidden font-serif selection:bg-cyan-100 selection:text-cyan-900 pb-24">
      
      {/* --- ELITE NAV --- */}
      <nav className="fixed top-0 w-full z-[70] bg-white/10 backdrop-blur-md border-b border-black/5 px-8 py-6 flex justify-between items-center">
        <div className="flex items-center gap-10">
            <h2 className="text-xl font-bold tracking-[0.5em] uppercase text-[#1a1a1a]">Ocular<span className="font-light italic">V</span></h2>
            <div className="hidden lg:flex gap-8 text-[9px] font-black uppercase tracking-[0.3em] text-black/40">
                <a href="#archive" className="hover:text-cyan-600 transition">Archives</a>
                <a href="#lab" className="hover:text-cyan-600 transition">The Lab</a>
            </div>
        </div>
        <div className="flex items-center gap-6">
            <Search size={18} className="opacity-30" />
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white active:scale-90 transition">
                <Menu size={18} />
            </div>
        </div>
      </nav>

      {/* --- HERO: THE ASYMMETRIC VISION --- */}
      <section className="relative min-h-screen flex flex-col md:flex-row items-center pt-24">
        {/* Left Editorial Side */}
        <div className="w-full md:w-1/2 h-full px-8 md:px-20 py-20 flex flex-col justify-center border-r border-black/5">
            <div data-aos="fade-right">
                <p className="text-cyan-600 font-black text-[10px] uppercase tracking-[0.8em] mb-12">Collection • 2026</p>
                <h1 className="text-6xl md:text-[10rem] font-light leading-[0.8] tracking-tighter italic mb-12">
                    Style <br/> <span className="font-bold not-italic">Defined.</span>
                </h1>
                <p className="max-w-xs text-[11px] font-medium leading-relaxed opacity-40 uppercase tracking-widest mb-12">
                    High-end optical curation blending clinical precision with architectural frame design.
                </p>
                <button className="flex items-center gap-6 group">
                    <span className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-cyan-600 transition-colors duration-500">
                        <ArrowRight size={20} />
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em]">Explore Atelier</span>
                </button>
            </div>
        </div>

        {/* Right Visual Side */}
        <div className="w-full md:w-1/2 h-full relative p-8 md:p-20">
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm group" data-aos="zoom-out-left">
                <img src="https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=1200" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100" alt="Vogue View" />
                <div className="absolute inset-0 bg-cyan-900/10 mix-blend-overlay"></div>
            </div>
            {/* Absolute Floating Badge */}
            <div className="absolute top-1/2 -left-10 bg-white p-8 border border-black/5 shadow-2xl hidden md:block" data-aos="fade-up">
                <h3 className="text-4xl font-light italic">50+</h3>
                <p className="text-[8px] font-black uppercase tracking-widest opacity-30 mt-2">Elite Brands</p>
            </div>
        </div>

        {/* Side Vertical Text */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 h-fit opacity-[0.03] pointer-events-none hidden lg:block">
            <p className="text-[15rem] font-black uppercase vertical-text leading-none">CLARITY</p>
        </div>
      </section>

      {/* --- TECHNICAL ARCHIVE --- */}
      <section id="archive" className="py-32 px-4 bg-white border-y border-black/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-24 px-4">
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase leading-none italic">The Frame <br/> <span className="font-light not-italic">Archive</span></h2>
            <div className="h-[1px] flex-grow bg-black/10 mx-10 hidden md:block"></div>
            <p className="text-[10px] font-black opacity-30 uppercase tracking-widest text-right">001 — 003 Series</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {designerBatch.map((item, i) => (
                <div key={i} data-aos="fade-up" data-aos-delay={i*150} className="group cursor-pointer">
                    <div className="relative aspect-[4/5] overflow-hidden mb-8 bg-stone-100">
                        <img src={item.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={item.title} />
                        <div className="absolute top-6 left-6 text-white opacity-0 group-hover:opacity-100 transition duration-500">
                            <Maximize size={24} />
                        </div>
                    </div>
                    <div className="px-2">
                        <div className="flex justify-between items-center border-b border-black/5 pb-4 mb-4">
                            <span className="text-[8px] font-black uppercase tracking-widest text-cyan-600">{item.cat}</span>
                            <span className="text-[8px] font-mono opacity-30 uppercase">{item.id}</span>
                        </div>
                        <h4 className="text-2xl font-bold uppercase tracking-tight mb-2">{item.title}</h4>
                        <p className="text-[11px] font-medium leading-relaxed opacity-40 italic">"{item.desc}"</p>
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* --- THE BOUTIQUE LAB (Different Pattern) --- */}
      <section id="lab" className="py-32 px-8 bg-[#fcfaf7] overflow-hidden">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative" data-aos="zoom-in">
                <div className="grid grid-cols-2 gap-4">
                    <div className="h-[400px] bg-stone-200 rounded-sm overflow-hidden mt-12 shadow-xl">
                        <img src="https://backgroundimages.withfloats.com/actual/5ce901ea67ab530001a9c5d9.jpg" className="w-full h-full object-cover" alt="Clinic" />
                    </div>
                    <div className="h-[400px] bg-cyan-900 rounded-sm p-8 flex flex-col justify-end text-white shadow-xl">
                        <Fingerprint size={48} className="mb-6 opacity-30" />
                        <h5 className="text-2xl font-bold uppercase tracking-tighter leading-none italic">Biometric Precision</h5>
                    </div>
                </div>
            </div>
            <div data-aos="fade-left">
                <h2 className="text-5xl md:text-7xl font-light leading-none mb-10">Advanced <br/> <span className="font-bold italic">Clinical Hub.</span></h2>
                <div className="space-y-10">
                    {[
                        { t: "Automated Refraction", d: "Zero-error prescription through AI-based ocular scanners." },
                        { t: "Style Concierge", d: "Personal frame curation based on facial geometry and tone." },
                        { t: "Express Atelier", d: "In-house lab for premium lens fitting within 20 minutes." }
                    ].map((step, idx) => (
                        <div key={idx} className="group cursor-pointer">
                            <div className="flex items-center gap-6 mb-4">
                                <span className="text-cyan-600 font-black text-xs uppercase tracking-widest">Step {idx+1}</span>
                                <div className="h-[1px] w-12 bg-cyan-600/30 group-hover:w-full transition-all duration-700"></div>
                            </div>
                            <h4 className="text-xl font-bold uppercase tracking-tight mb-2">{step.t}</h4>
                            <p className="text-[11px] font-medium opacity-40 uppercase tracking-widest leading-loose">{step.d}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* --- ARTISTIC BOUTIQUE MAP --- */}
      <section className="py-32 bg-white px-4 relative overflow-hidden">
         <div className="max-w-6xl mx-auto text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-light uppercase tracking-tighter italic">Visit The <span className="font-bold not-italic underline decoration-cyan-600">Atelier.</span></h2>
            <p className="mt-4 text-[10px] font-black uppercase tracking-[0.5em] opacity-30">Race Course • Coimbatore</p>
         </div>
         
         <div className="px-4">
            <div className="w-full h-[550px] rounded-sm overflow-hidden bg-white relative group flex items-center justify-center border border-black/5 shadow-inner">
                {/* --- ARTISTIC LENS MAP UI --- */}
                <div className="absolute inset-0 bg-[#f8f8f8] opacity-60"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-black/[0.05] rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-black/[0.05] rounded-full"></div>

                {/* Location Marker UI */}
                <div className="relative z-20 flex flex-col items-center">
                    <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center text-white shadow-2xl active:scale-95 transition cursor-pointer">
                        <MapPin size={32} className="text-cyan-400" fill="currentColor" />
                    </div>
                    <div className="mt-10 bg-white p-10 rounded-sm shadow-2xl text-[#1a1a1a] text-center border-t-4 border-cyan-600 min-w-[320px]">
                        <p className="text-[10px] font-black text-stone-300 uppercase tracking-widest mb-2 font-mono leading-none">Studio_Location</p>
                        <h5 className="font-bold italic text-2xl leading-tight uppercase tracking-tight mb-6">Elite Vision Hub</h5>
                        <p className="text-[10px] font-medium opacity-30 leading-relaxed uppercase tracking-[0.2em]">14, Optical Plaza, Race Course Road, Coimbatore</p>
                    </div>
                </div>

                <button className="absolute bottom-12 bg-black text-white px-10 py-4 rounded-full font-black text-[10px] uppercase tracking-widest active:scale-95 transition shadow-2xl">
                    Open in Maps <ExternalLink size={12} className="text-cyan-400 ml-2" />
                </button>
            </div>
         </div>
      </section>

      {/* --- FOOTER: BOUTIQUE CARD --- */}
      <footer className="py-32 px-10 bg-[#1a1a1a] text-white font-sans text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
            <Eye size={40} className="text-cyan-500 mx-auto mb-10 opacity-60" />
            <h2 className="text-3xl md:text-5xl font-light italic leading-none mb-10 tracking-tighter">Crafting Superior <br/> Clarity Since 2010.</h2>
            
            <div className="flex justify-center gap-12 mb-20 border-y border-white/10 py-10">
                <Instagram size={20} className="opacity-30 hover:opacity-100 transition cursor-pointer" />
                <Facebook size={20} className="opacity-30 hover:opacity-100 transition cursor-pointer" />
                <MessageCircle size={20} className="opacity-30 hover:opacity-100 transition cursor-pointer" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-[9px] font-black uppercase tracking-[0.5em] text-white/30 leading-relaxed">
                <p>Optical Plaza • Race Course • Coimbatore</p>
                <p>Private Appointments: +91 99887 76655</p>
            </div>
        </div>
        
        <div className="mt-32 pt-10 text-[9px] font-black text-white/5 uppercase tracking-[1em]">
          © 2026 OCULARVISION • THE VISIONARY ARCHIVE
        </div>
      </footer>

      {/* --- STICKY PILL --- */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 w-fit z-[60] p-1 bg-white/80 backdrop-blur-3xl border border-black/10 rounded-full flex gap-1 shadow-2xl scale-110">
         <button className="bg-black text-white px-8 py-4 rounded-full font-bold text-[10px] uppercase tracking-widest active:scale-95 transition">
           Catalogue
         </button>
         <button className="bg-cyan-600 text-white px-8 py-4 rounded-full font-bold text-[10px] uppercase tracking-widest active:scale-95 transition">
           Book Test
         </button>
      </div>

      <style>{`
        .stroke-text {
          -webkit-text-stroke: 1.5px #0891b2;
          color: transparent;
        }
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

    </div>
  );
};

export default ClientTwenty;