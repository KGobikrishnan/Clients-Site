import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  Construction, 
  Ruler, 
  HardHat, 
  Files, 
  Activity, 
  MapPin, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook, 
  ArrowRight, 
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  DraftingCompass,
  MessageCircle, // Fixed: Added missing import
  Trello,
  ShieldAlert,
  SearchCode
} from 'lucide-react';

const ClientEleven = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  const expertise = [
    { 
      id: "01",
      title: "Structural Design", 
      icon: <DraftingCompass size={32}/>, 
      desc: "Earthquake-resistant designs with optimized steel usage for lifetime safety.",
      img: "https://images.unsplash.com/photo-1541888946425-d81bb19480c5?q=80&w=800"
    },
    { 
      id: "02",
      title: "Civil Construction", 
      icon: <Construction size={32}/>, 
      desc: "Turnkey residential & commercial projects from foundation to finishing.",
      img: "https://images.unsplash.com/photo-1503387762-592dea58ef21?q=80&w=800"
    },
    { 
      id: "03",
      title: "Estimations (BOQ)", 
      icon: <Ruler size={32}/>, 
      desc: "Pre-construction cost auditing to ensure 0% budget overflow.",
      img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800"
    },
    { 
      id: "04",
      title: "Quality Audit", 
      icon: <CheckCircle2 size={32}/>, 
      desc: "3rd party site supervision & non-destructive testing of concrete.",
      img: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800"
    }
  ];

  return (
    <div className="bg-[#f0f2f5] text-[#1a202c] overflow-x-hidden font-sans pb-24 selection:bg-[#0056b3] selection:text-white">
      
      {/* --- BLUEPRINT GRID BACKGROUND --- */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.04] z-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:30px_30px]"></div>

      {/* --- INDUSTRIAL NAV --- */}
      <nav className="fixed w-full z-50 bg-[#0d172a] text-white px-6 py-5 flex justify-between items-center border-b border-blue-500/20 shadow-2xl">
        <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-lg rotate-12">
                <Trello size={20} className="-rotate-12 text-white" />
            </div>
            <h2 className="text-xl font-bold tracking-[0.2em] uppercase">STRUCT<span className="text-blue-500">AXIS</span></h2>
        </div>
        <a href="tel:+919988776655" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center active:scale-90 transition">
            <Phone size={18} />
        </a>
      </nav>

      {/* --- HERO: THE ENGINEERED VISION --- */}
      <section className="relative h-[90vh] flex items-end pb-20 px-8 overflow-hidden bg-[#0d172a]">
        <div className="absolute inset-0 z-0 opacity-50">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmWTODAYCsCPRpkIsdNzTsn6f255JJ5UX5Fw&s" 
            alt="Structural Site" 
            className="w-full h-full object-cover scale-110 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d172a] via-[#0d172a]/20 to-transparent"></div>
        </div>
        
        <div className="relative z-10 w-full">
          <span data-aos="fade-right" className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-md font-mono text-[10px] font-black uppercase tracking-widest mb-6 inline-flex items-center gap-2 border border-blue-500/30">
            <SearchCode size={12} /> System Code: AX-9.0 Verified
          </span>
          <h1 data-aos="fade-up" className="text-5xl font-black mb-6 leading-[1] tracking-tighter uppercase italic text-white">
            Precision <br/> <span className="text-blue-500">Structural</span> <br/> Logic.
          </h1>
          <div className="flex flex-col gap-3">
             <button className="bg-blue-600 text-white py-4 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-[0_0_30px_rgba(37,99,235,0.3)] active:bg-blue-700 transition">Analyze Site Plan</button>
             <button className="bg-white/5 backdrop-blur-md border border-white/10 text-white py-4 rounded-xl font-black text-[10px] uppercase tracking-widest active:bg-white/10 transition">Download BOQ</button>
          </div>
        </div>
      </section>

      {/* --- THE BLUEPRINT JOURNEY --- */}
      <section className="py-24 px-8 bg-white relative overflow-hidden">
        <div className="mb-16">
            <h2 className="text-4xl font-black tracking-tighter uppercase leading-none text-[#0d172a]">The Axis <br/> <span className="text-blue-600 italic">Methodology</span></h2>
            <div className="h-1.5 w-16 bg-blue-600 mt-4"></div>
        </div>
        
        <div className="space-y-16">
            {[
                { s: "PHASE 01", t: "Geotech Forensics", d: "Digital soil density analysis and bearing capacity calibration.", i: <ShieldAlert className="text-blue-600" /> },
                { s: "PHASE 02", t: "Dynamic Modeling", d: "Wind load & Seismic simulation using industrial grade Revit engines.", i: <Activity className="text-blue-600" /> },
                { s: "PHASE 03", t: "Turnkey Casting", d: "Real-time site supervision with concrete strength grade monitoring.", i: <HardHat className="text-blue-600" /> }
            ].map((step, i) => (
                <div key={i} data-aos="fade-up" className="flex gap-6 items-start group">
                    <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition duration-500">
                            {step.i}
                        </div>
                        <div className="w-0.5 h-16 bg-blue-100 group-last:hidden"></div>
                    </div>
                    <div>
                        <span className="text-blue-600 font-mono text-[10px] font-black tracking-widest">{step.s}</span>
                        <h4 className="text-2xl font-black uppercase tracking-tight text-[#0d172a]">{step.t}</h4>
                        <p className="text-sm text-slate-500 leading-relaxed mt-2 italic font-medium">"{step.d}"</p>
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* --- LIVE WORK GALLERY: MASSIVE VISUALS --- */}
      <section className="py-24 bg-[#0d172a] text-white">
        <div className="px-8 mb-12 flex justify-between items-end">
            <h2 className="text-3xl font-black uppercase italic tracking-tighter leading-none">Engineering <br/> <span className="text-blue-500">Archives</span></h2>
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-blue-500">
                <ChevronRight size={24} />
            </div>
        </div>
        
        <div className="flex overflow-x-auto gap-6 px-8 no-scrollbar snap-x pb-8">
            {[
                { t: "The Skyline Villa", l: "Coimbatore South", url: "https://www.skylinebuilders.com/uploads/media/Skyline-Ranch-II6516653f7fc7d.webp" },
                { t: "Indus Warehouse", l: "Cumbum Corridor", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCUMJ3nWjfz6nZWoz0ZL7bXmmCnRhGczzQuQ&s" },
                { t: "PSG Heights", l: "PSG Tech Road", url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYiC7CoNanvkRV-X712vslVfkYuzx-ACwUsw&s" }
            ].map((proj, i) => (
                <div key={i} className="flex-shrink-0 w-[85vw] h-[500px] bg-slate-800 rounded-[2rem] overflow-hidden snap-center border border-white/5 relative shadow-2xl">
                    <img src={proj.url} className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0" alt="Work" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-10 flex flex-col justify-end">
                        <div className="flex items-center gap-2 mb-2">
                            <MapPin size={12} className="text-blue-500" />
                            <p className="text-blue-500 font-black text-[10px] uppercase tracking-widest">{proj.l}</p>
                        </div>
                        <h3 className="text-3xl font-black uppercase tracking-tight mb-6">{proj.t}</h3>
                        <div className="flex gap-4">
                            <span className="bg-white/10 px-4 py-2 rounded-lg text-[10px] font-bold border border-white/10 uppercase">Cast Complete</span>
                            <span className="bg-blue-600/20 px-4 py-2 rounded-lg text-[10px] font-bold border border-blue-500/20 uppercase text-blue-400">100% Stability</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* --- TECHNICAL DATA GRID --- */}
      <section className="py-24 px-6 bg-white border-y border-slate-100">
        <div className="text-center mb-16">
            <p className="text-blue-600 font-black text-[10px] uppercase tracking-widest mb-2">Core Competencies</p>
            <h2 className="text-4xl font-black tracking-tighter uppercase text-[#0d172a]">Engineering <br/> Solutions</h2>
        </div>

        <div className="grid grid-cols-1 gap-12 max-w-5xl mx-auto">
          {expertise.map((item, idx) => (
            <div key={idx} data-aos="fade-up" className="relative p-1 border-b border-slate-100 pb-12">
                <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-full md:w-1/2 relative h-64 overflow-hidden rounded-3xl shadow-xl">
                        <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                        <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md p-5 rounded-2xl shadow-xl">
                            {item.icon}
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <span className="text-blue-600 font-mono text-xs font-black tracking-[0.4em]">AX_ENG_0{item.id}</span>
                        <h3 className="text-3xl font-black tracking-tighter mb-4 uppercase italic text-[#0d172a]">{item.title}</h3>
                        <p className="text-slate-500 text-sm font-medium leading-loose mb-8">"{item.desc}"</p>
                        <button className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-[#0d172a] group">
                            Technical Scope <ArrowRight size={16} className="group-hover:translate-x-2 transition duration-300 text-blue-600" />
                        </button>
                    </div>
                </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- GOOGLE MAPS INTEGRATION --- */}
      <section className="py-24 bg-[#f8fbfe] relative overflow-hidden text-black font-sans">
         <div className="px-8 mb-10">
            <h2 className="text-4xl font-black uppercase tracking-tighter leading-none mb-6 text-[#0d172a]">Locate Our <br/> Engineering Hub</h2>
            <div className="flex items-center gap-3">
                <MapPin className="text-blue-600" size={20} />
                <p className="text-slate-500 font-bold text-xs uppercase tracking-widest italic">Avinashi Road, Coimbatore</p>
            </div>
         </div>
         
         <div className="px-4">
            <div className="w-full h-[400px] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white relative">
                <iframe 
                    title="StructAxis Location"
                    src="http://googleusercontent.com/maps.google.com/4" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    className="grayscale contrast-125 hover:grayscale-0 transition-all duration-1000"
                ></iframe>
                
                <div className="absolute top-6 left-6 bg-[#0d172a] text-white p-6 rounded-2xl shadow-xl border border-white/10">
                    <p className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-1 leading-none">Registered HQ</p>
                    <h5 className="font-bold italic text-lg mb-4 leading-tight">Engineering Hub, <br/> Coimbatore</h5>
                    <button className="bg-blue-600 px-5 py-2.5 rounded-lg text-[9px] font-black uppercase tracking-widest flex items-center gap-2">
                        Get Directions <ExternalLink size={12} />
                    </button>
                </div>
            </div>
         </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-24 px-10 bg-[#0d172a] text-white font-sans overflow-hidden relative border-t-2 border-blue-600">
        <div className="absolute top-0 right-0 opacity-5 text-[12rem] font-black italic -mr-20 -mt-20 pointer-events-none uppercase text-white">AXIS</div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 relative z-10">
            <div>
                <h2 className="text-3xl font-black uppercase tracking-[0.2em] mb-6 italic text-white leading-none">STRUCT<span className="text-blue-500">AXIS</span></h2>
                <p className="max-w-sm opacity-50 text-[11px] leading-relaxed font-bold uppercase tracking-widest italic mb-10">
                    Specialized Structural Auditing and Multi-Scale Civil Construction based in Coimbatore. 
                    Redefining structural safety standards since 2014.
                </p>
                <div className="flex gap-8 mb-16">
                   <Instagram size={20} className="text-white/30 hover:text-blue-500 transition cursor-pointer" />
                   <Facebook size={20} className="text-white/30 hover:text-blue-500 transition cursor-pointer" />
                   <Files size={20} className="text-white/30 hover:text-blue-500 transition cursor-pointer" />
                </div>
            </div>
            
            <div className="grid grid-cols-1 gap-10">
                <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-blue-500 mb-2">Technical Base</p>
                    <p className="text-sm leading-relaxed opacity-80 italic font-medium">Avinashi Road, Opp. PSG Tech, <br/> Coimbatore - 641014</p>
                </div>
                <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-blue-500 mb-2">Registered Inquiry</p>
                    <p className="text-xl font-black text-white tracking-tighter">+91 99887 76655</p>
                </div>
            </div>
        </div>
        
        <div className="text-[9px] font-black text-white/10 uppercase tracking-[0.8em] text-center pt-20 border-t border-white/5 mt-10">
          © 2026 STRUCTAXIS CIVIL ENGINEERING • SECURED BY NAVI
        </div>
      </footer>

      {/* --- STICKY MOBILE ACTION BAR --- */}
      <div className="fixed bottom-0 w-full z-[60] p-4 bg-[#0d172a]/95 backdrop-blur-md flex gap-3 shadow-2xl font-sans border-t border-blue-500/20">
         <button className="flex-1 bg-white text-[#0d172a] py-4 rounded-xl font-black text-[10px] uppercase tracking-widest active:scale-95 transition flex items-center justify-center gap-2">
           <Files size={14} /> Download BOQ
         </button>
         <button className="flex-1 bg-blue-600 text-white py-4 rounded-xl font-black text-[10px] uppercase tracking-widest active:scale-95 transition flex items-center justify-center gap-2">
           <MessageCircle size={14} fill="currentColor" /> Live Inquiry
         </button>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

    </div>
  );
};

export default ClientEleven;