import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  Sparkles, 
  ShieldCheck, 
  MapPin, 
  Phone, 
  ArrowRight, 
  ChevronRight,
  ExternalLink,
  Zap,
  Target,
  Maximize,
  Activity,
  Smile,
  Search,
  Menu,
  Heart,
  Stethoscope,
  CheckCircle2,
  Crosshair,
  Layers,
  Fingerprint,
  RotateCw,
  Gauge,
  Instagram,
  MessageCircle,
  Dna,
  UserCheck
} from 'lucide-react';

const ClientTwentyFour = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-expo',
    });
  }, []);

  const dentalArchives = [
    { 
      id: "DT-01",
      title: "Sculpted Veneers", 
      cat: "Aesthetic Atelier", 
      desc: "Architectural smile reconstruction using biological ceramic layers.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxzIjqG3q79FNbsVlUT6_dcxibpvsdKBjgQA&s"
    },
    { 
      id: "DT-02",
      title: "Guided Implants", 
      cat: "Robotic Precision", 
      desc: "3D mapped titanium root placement with zero-trauma protocols.",
      img: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=800"
    },
    { 
      id: "DT-03",
      title: "Invisible Align", 
      cat: "Orthodontics", 
      desc: "AI-engineered transparent force systems for malocclusion correction.",
      img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800"
    }
  ];

  return (
    <div className="bg-[#fdfdfd] text-[#1a1c1e] overflow-x-hidden font-sans pb-24 selection:bg-teal-100 selection:text-teal-900">
      
      {/* --- CLINICAL DATA STRIP --- */}
      <div className="bg-[#1a1c1e] text-teal-400 text-[9px] font-black text-center py-2.5 uppercase tracking-[0.5em] sticky top-0 z-[70] border-b border-white/5 shadow-2xl">
        DATA_STRIP: RS_PURAM_HUB_ACTIVE • STERILIZATION_LVL: 100% • 3D_SCANNER_ONLINE
      </div>

      {/* --- ATELIER NAV --- */}
      <nav className="fixed top-10 left-1/2 -translate-x-1/2 w-[92%] z-[60] bg-white/40 backdrop-blur-3xl border border-black/5 px-8 py-5 rounded-sm flex justify-between items-center shadow-sm">
        <div className="flex items-center gap-3">
            <h2 className="text-xl font-bold tracking-[0.4em] uppercase text-[#1a1c1e]">Pearl<span className="font-light italic text-teal-600">D</span></h2>
        </div>
        <div className="hidden lg:flex gap-12 text-[10px] font-black uppercase tracking-[0.3em] text-black/30">
            <a href="#archives" className="hover:text-teal-600 transition">Archives</a>
            <a href="#diagnostic" className="hover:text-teal-600 transition">Diagnostic</a>
        </div>
        <button className="bg-[#1a1c1e] text-white p-3 rounded-full hover:bg-teal-600 transition active:scale-90 shadow-xl">
            <UserCheck size={18} />
        </button>
      </nav>

      {/* --- HERO: THE ARCHITECTURAL SMILE --- */}
      <section className="relative min-h-screen flex items-center justify-center px-8 pt-32 overflow-hidden bg-white">
        {/* Parallax Background Scrawls */}
        <div className="absolute top-40 left-10 opacity-[0.03] pointer-events-none hidden lg:block">
            <Dna size={400} strokeWidth={0.5} className="rotate-45" />
        </div>
        
        <div className="relative z-10 w-full max-w-7xl grid lg:grid-cols-2 gap-20 items-center">
            <div data-aos="fade-right">
                <span className="text-teal-600 font-black text-[10px] uppercase tracking-[0.8em] mb-12 block">
                   The Dental Sanctuary
                </span>
                <h1 className="text-7xl md:text-[12rem] font-light leading-[0.8] tracking-tighter italic text-[#1a1c1e] mb-12">
                    Grace <br/> <span className="font-bold not-italic">Restored.</span>
                </h1>
                <p className="max-w-xs text-[11px] font-medium leading-relaxed opacity-40 uppercase tracking-widest mb-16">
                    Redefining oral healthcare through architectural smile design and robotic surgical precision.
                </p>
                <div className="flex flex-wrap gap-8 items-center">
                    <button className="bg-[#1a1c1e] text-white px-12 py-5 rounded-sm font-bold text-[10px] uppercase tracking-widest shadow-2xl hover:bg-teal-700 transition duration-500">Book Diagnosis</button>
                    <div className="flex items-center gap-4">
                        <span className="w-10 h-[1px] bg-black/20"></span>
                        <span className="text-[10px] font-black uppercase tracking-widest opacity-30 italic">Since 2015</span>
                    </div>
                </div>
            </div>

            <div className="relative" data-aos="zoom-out-left">
                <div className="absolute inset-0 bg-teal-500/5 blur-[100px]"></div>
                <div className="relative aspect-[3/4] rounded-sm overflow-hidden border border-black/5 p-2 bg-white shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200" alt="Clinic" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent"></div>
                </div>
                {/* Floating Bio-Metric Log */}
                <div className="absolute -bottom-10 -right-6 bg-white border border-black/5 p-10 rounded-sm shadow-2xl min-w-[280px] z-30">
                    <div className="flex justify-between items-center mb-10">
                        <p className="text-[10px] font-black uppercase tracking-widest opacity-30">Bio_Metric_Log</p>
                        <RotateCw size={14} className="text-teal-500 animate-spin" />
                    </div>
                    <div className="space-y-8">
                        <div>
                            <div className="flex justify-between items-end mb-3"><span className="text-[10px] opacity-40 uppercase font-black tracking-tighter">Smile Curve</span><span className="text-sm font-black text-teal-600">99.4%</span></div>
                            <div className="h-[1px] w-full bg-slate-100 overflow-hidden"><div className="h-full bg-teal-500 w-[99%]"></div></div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="text-center border-r border-black/5"><p className="text-[8px] opacity-30 uppercase font-black mb-1">Status</p><p className="text-xs font-black text-green-500 uppercase">Elite</p></div>
                            <div className="text-center"><p className="text-[8px] opacity-30 uppercase font-black mb-1">Unit</p><p className="text-xs font-black text-blue-500 uppercase">Active</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* --- EXPERTISE ARCHIVES --- */}
      <section id="archives" className="py-32 px-4 bg-white border-y border-black/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-24 px-8">
            <h2 className="text-4xl md:text-8xl font-bold tracking-tighter uppercase leading-none">The Care <br/> <span className="font-light italic text-teal-600">Archives</span></h2>
            <div className="h-[1px] flex-grow bg-black/5 mx-10 hidden md:block"></div>
            <p className="text-[10px] font-black opacity-30 uppercase tracking-[0.4em] text-right">Series 2026 / DV_CLINIC</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto px-4">
            {dentalArchives.map((item, i) => (
                <div key={i} data-aos="fade-up" data-aos-delay={i*150} className="group cursor-pointer">
                    <div className="relative aspect-[4/5] overflow-hidden mb-10 bg-stone-100 rounded-sm">
                        <img src={item.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0" alt={item.title} />
                        <div className="absolute top-6 left-6 text-teal-600 opacity-0 group-hover:opacity-100 transition duration-500">
                            <Maximize size={32} strokeWidth={1} />
                        </div>
                    </div>
                    <div className="px-2">
                        <div className="flex justify-between items-center border-b border-black/5 pb-4 mb-4">
                            <span className="text-[9px] font-black uppercase tracking-widest text-teal-600">{item.cat}</span>
                            <span className="text-[8px] font-mono opacity-30 uppercase tracking-tighter">{item.id}</span>
                        </div>
                        <h4 className="text-3xl font-bold uppercase tracking-tight mb-4 leading-none">{item.title}</h4>
                        <p className="text-[11px] font-medium leading-relaxed opacity-40 italic">"{item.desc}"</p>
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* --- DIAGNOSTIC LAB SECTION (NEW PATTERN) --- */}
      <section id="diagnostic" className="py-32 px-8 bg-[#fcfdfe] overflow-hidden relative">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.02] pointer-events-none">
            <h2 className="text-[25rem] font-black vertical-text">CLINIC</h2>
        </div>
        
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative" data-aos="zoom-in">
                <div className="bg-[#1a1c1e] p-12 rounded-sm shadow-2xl relative overflow-hidden">
                    <div className="absolute top-[-10%] right-[-10%] w-40 h-40 bg-teal-500/20 rounded-full blur-[60px]"></div>
                    <div className="flex justify-between items-center mb-16 text-white/50">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-teal-400 shadow-xl"><Gauge size={20} /></div>
                            <h5 className="font-black uppercase text-[10px] tracking-widest italic">Diagnostic Status</h5>
                        </div>
                        <span className="text-[8px] font-bold uppercase animate-pulse">Scanning Path...</span>
                    </div>
                    <div className="space-y-12">
                        <div>
                            <div className="flex justify-between text-[10px] text-white/40 font-bold uppercase mb-4 tracking-widest"><span>Structural Integrity</span><span>100%</span></div>
                            <div className="h-[2px] w-full bg-white/5 overflow-hidden"><div className="w-[100%] h-full bg-teal-500 shadow-[0_0_15px_#2dd4bf]"></div></div>
                        </div>
                        <div className="grid grid-cols-2 gap-8 mt-12">
                            <div className="bg-white/5 p-8 border border-white/5 text-white/40"><Target className="mb-4 text-teal-400" size={24}/><p className="text-2xl font-bold text-white italic">Precise</p></div>
                            <div className="bg-white/5 p-8 border border-white/5 text-white/40"><ShieldCheck className="mb-4 text-teal-400" size={24}/><p className="text-2xl font-bold text-white italic">Painless</p></div>
                        </div>
                    </div>
                </div>
            </div>
            <div data-aos="fade-left">
                <h2 className="text-5xl md:text-8xl font-light leading-none mb-12">Clinical <br/> <span className="font-bold italic text-teal-600">Standard.</span></h2>
                <div className="space-y-12">
                    {[
                        { t: "3D Intraoral Scan", d: "Digital precision mapping for zero-error restorations and alignments." },
                        { t: "WaterLase Tech", d: "No-needle, no-drill dentistry for an absolute trauma-free experience." },
                        { t: "Micro-Surgical Gear", d: "Industry leading magnification for surgical excellence at every layer." }
                    ].map((step, idx) => (
                        <div key={idx} className="group cursor-pointer">
                            <div className="flex items-center gap-8 mb-4">
                                <span className="text-teal-600 font-black text-xs uppercase tracking-widest">0{idx+1}</span>
                                <div className="h-[1px] w-16 bg-teal-600/30 group-hover:w-full transition-all duration-700"></div>
                            </div>
                            <h4 className="text-2xl font-bold uppercase tracking-tight mb-3 leading-none">{step.t}</h4>
                            <p className="text-[11px] font-medium opacity-40 uppercase tracking-widest leading-loose max-w-sm">{step.d}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* --- THE "LENS" DUMMY MAP: LOCATION ATELIER --- */}
      <section className="py-32 bg-white px-4 relative overflow-hidden text-[#1a1c1e]">
         <div className="max-w-7xl mx-auto text-center mb-24">
            <h2 className="text-5xl md:text-9xl font-black uppercase italic tracking-tighter">Location <br/> <span className="font-light not-italic underline decoration-teal-600">Atelier.</span></h2>
            <p className="mt-8 text-slate-300 text-[10px] font-black uppercase tracking-[1em] italic">RS_PURAM • Theni • TN_ZONE_01</p>
         </div>
         
         <div className="px-4">
            <div className="w-full h-[650px] bg-[#f8fafc] relative group flex items-center justify-center border border-black/5 shadow-inner overflow-hidden">
                {/* --- ARTISTIC MEDICAL GRID MAP UI --- */}
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1.5px,transparent_1.5px)] bg-[size:30px_30px] opacity-40"></div>
                
                {/* Extreme Macro Lens Circles */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] border border-black/[0.03] rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-black/[0.05] rounded-full animate-pulse"></div>

                {/* Pin UI */}
                <div className="relative z-20 flex flex-col items-center">
                    <div className="w-24 h-24 bg-[#1a1c1e] rounded-full flex items-center justify-center text-white shadow-2xl scale-125 active:scale-95 transition cursor-pointer border-4 border-teal-500 group-hover:scale-110">
                        <MapPin size={32} fill="currentColor" className="text-teal-400" />
                    </div>
                    <div className="mt-12 bg-white p-12 rounded-sm shadow-2xl text-[#1a1c1e] text-center border-t-4 border-teal-600 min-w-[380px]">
                        <p className="text-[10px] font-black text-stone-300 uppercase tracking-widest mb-3 font-mono leading-none tracking-tighter">NODE_LOC: RS_PURAM_HUB</p>
                        <h5 className="font-black italic text-3xl leading-tight uppercase tracking-tight mb-8">Pearl Dental Center</h5>
                        <button className="w-full py-6 bg-[#1a1c1e] text-white rounded-sm font-black text-[11px] uppercase tracking-widest active:scale-95 transition flex items-center justify-center gap-3 shadow-xl">Get Route Access <ExternalLink size={14} /></button>
                    </div>
                </div>
            </div>
         </div>
      </section>

      {/* --- FOOTER: THE CLINICAL LOG --- */}
      <footer className="py-32 px-10 bg-[#1a1c1e] text-white font-sans text-center relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
            <Smile size={50} className="text-teal-600 mx-auto mb-12 opacity-60" />
            <h2 className="text-4xl md:text-8xl font-light italic leading-[0.85] tracking-tighter mb-16">The Evolution <br/> of Oral Beauty.</h2>
            
            <div className="flex justify-center gap-16 mb-24 border-y border-white/5 py-12">
                <Instagram size={24} className="opacity-20 hover:opacity-100 hover:text-teal-500 transition cursor-pointer" />
                <MessageCircle size={24} className="opacity-20 hover:opacity-100 hover:text-teal-500 transition cursor-pointer" />
                <Target size={24} className="opacity-20 hover:opacity-100 hover:text-teal-500 transition cursor-pointer" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-[11px] font-black uppercase tracking-[0.5em] text-white/20 leading-relaxed font-sans">
                <p>Opp. GH • RS Puram • Theni</p>
                <p>Hotline Protocol: +91 99000 22000</p>
            </div>
        </div>
        
        <div className="mt-40 pt-10 text-[9px] font-black text-white/5 uppercase tracking-[1.5em]">
          © 2026 PEARLDENTAL • THE CLINICAL ATELIER
        </div>
      </footer>

      {/* --- STICKY PILL --- */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 w-fit z-[80] p-1 bg-white/80 backdrop-blur-3xl border border-black/5 rounded-full flex gap-1 shadow-2xl scale-110">
         <button className="bg-[#1a1c1e] text-white px-8 py-4 rounded-full font-bold text-[10px] uppercase tracking-widest active:scale-95 transition">
           Consult
         </button>
         <button className="bg-teal-600 text-white px-8 py-4 rounded-full font-bold text-[10px] uppercase tracking-widest active:scale-95 transition">
           Emergency
         </button>
      </div>

      <style>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
        .stroke-text {
          -webkit-text-stroke: 1.5px #0d9488;
          color: transparent;
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

    </div>
  );
};

export default ClientTwentyFour;