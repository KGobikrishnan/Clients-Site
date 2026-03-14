import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  Activity, 
  Stethoscope, 
  HeartPulse, 
  Clock, 
  ShieldCheck, 
  Smartphone, 
  MapPin, 
  Phone, 
  ArrowRight, 
  ChevronRight,
  ExternalLink,
  Zap,
  Target,
  Brain,
  Microscope,
  Award,
  MessageCircle,
  Plus,
  UserCheck,
  Timer,
  CheckCircle2,
  Syringe,
  Instagram,
  Search,
  Menu,
  ActivitySquare
} from 'lucide-react';

const ClientTwentyThree = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-expo',
    });
  }, []);

  const medicalArchives = [
    { 
      id: "DX-01",
      title: "Bio-Scan Checkup", 
      cat: "Preventive Care", 
      desc: "Full-body clinical assessment using the latest diagnostic sensors.",
      img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800"
    },
    { 
      id: "DX-02",
      title: "Viral Defense", 
      cat: "Infectious Care", 
      desc: "Rapid diagnostic and stabilization for acute fever and infections.",
      img: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=800"
    },
    { 
      id: "DX-03",
      title: "Glycemic Control", 
      cat: "Diabetes Care", 
      desc: "Precision management of blood sugar levels and lifestyle mapping.",
      img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=800"
    }
  ];

  return (
    <div className="bg-[#f8f9fa] text-[#1a1a1a] overflow-x-hidden font-sans pb-24 selection:bg-blue-100 selection:text-blue-900">
      
      {/* --- ELITE NAV --- */}
      <nav className="fixed top-0 w-full z-[70] bg-white/10 backdrop-blur-md border-b border-black/5 px-8 py-6 flex justify-between items-center">
        <div className="flex items-center gap-10">
            <h2 className="text-xl font-black tracking-[0.3em] uppercase text-[#1a1a1a]">DV<span className="font-light italic text-blue-600">CARE</span></h2>
            <div className="hidden lg:flex gap-8 text-[9px] font-black uppercase tracking-[0.3em] text-black/40">
                <a href="#archives" className="hover:text-blue-600 transition">Archives</a>
                <a href="#lab" className="hover:text-blue-600 transition">The Lab</a>
            </div>
        </div>
        <div className="flex items-center gap-6">
            <Search size={18} className="opacity-30" />
            <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white active:scale-90 transition cursor-pointer">
                <Menu size={18} />
            </div>
        </div>
      </nav>

      {/* --- HERO: THE EDITORIAL SPLIT --- */}
      <section className="relative min-h-screen flex flex-col md:flex-row items-center pt-24 bg-white">
        {/* Left Text Block */}
        <div className="w-full md:w-1/2 h-full px-8 md:px-20 py-20 flex flex-col justify-center border-r border-black/5">
            <div data-aos="fade-right">
                <p className="text-blue-600 font-black text-[10px] uppercase tracking-[0.8em] mb-12">EST. 2011 • COIMBATORE</p>
                <h1 className="text-6xl md:text-[10rem] font-light leading-[0.8] tracking-tighter italic mb-12">
                    Healing <br/> <span className="font-bold not-italic">Defined.</span>
                </h1>
                <p className="max-w-xs text-[11px] font-medium leading-relaxed opacity-40 uppercase tracking-widest mb-12">
                    Advanced clinical family medicine blending empathy with 15+ years of pathological expertise.
                </p>
                <button className="flex items-center gap-6 group">
                    <span className="w-16 h-16 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-500 shadow-xl">
                        <Plus size={24} />
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-[0.3em]">Consult Expert</span>
                </button>
            </div>
        </div>

        {/* Right Visual Block */}
        <div className="w-full md:w-1/2 h-full relative p-8 md:p-20">
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm group" data-aos="zoom-out-left">
                <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1200" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100" alt="Clinical Excellence" />
                <div className="absolute inset-0 bg-blue-900/5 mix-blend-overlay"></div>
            </div>
            {/* Absolute Badge */}
            <div className="absolute top-1/2 -left-10 bg-white p-10 border border-black/5 shadow-2xl hidden md:block" data-aos="fade-up">
                <h3 className="text-5xl font-light italic">99%</h3>
                <p className="text-[8px] font-black uppercase tracking-widest opacity-30 mt-2">Recovery Rate</p>
            </div>
        </div>

        {/* Parallax Vertical Text */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 h-fit opacity-[0.03] pointer-events-none hidden lg:block">
            <p className="text-[15rem] font-black uppercase vertical-text leading-none">VIGNESH</p>
        </div>
      </section>

      {/* --- CLINICAL ARCHIVE GRID --- */}
      <section id="archives" className="py-32 px-4 bg-[#f8f9fa] border-y border-black/5">
        <div className="max-w-7xl mx-auto">
            <div className="mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-10 px-4">
                <h2 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase leading-none">The Care <br/> <span className="font-light italic">Archives</span></h2>
                <div className="h-[1px] flex-grow bg-black/10 mx-10 hidden md:block"></div>
                <p className="text-[10px] font-black opacity-30 uppercase tracking-widest text-right">Reference Series / 01—03</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
                {medicalArchives.map((item, i) => (
                    <div key={i} data-aos="fade-up" data-aos-delay={i*150} className="group cursor-pointer">
                        <div className="relative aspect-[4/5] overflow-hidden mb-8 bg-stone-200">
                            <img src={item.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0" alt={item.title} />
                            <div className="absolute top-6 left-6 text-blue-600 opacity-0 group-hover:opacity-100 transition duration-500">
                                <ActivitySquare size={32} />
                            </div>
                        </div>
                        <div className="px-2">
                            <div className="flex justify-between items-center border-b border-black/5 pb-4 mb-4">
                                <span className="text-[8px] font-black uppercase tracking-widest text-blue-600">{item.cat}</span>
                                <span className="text-[8px] font-mono opacity-30 uppercase">{item.id}</span>
                            </div>
                            <h4 className="text-2xl font-bold uppercase tracking-tight mb-2 leading-none">{item.title}</h4>
                            <p className="text-[11px] font-medium leading-relaxed opacity-40 italic">"{item.desc}"</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* --- THE MEDICAL LAB (Bento Pattern) --- */}
      <section id="lab" className="py-32 px-8 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
            <div className="relative" data-aos="zoom-in">
                <div className="grid grid-cols-2 gap-4">
                    <div className="h-[400px] bg-stone-100 rounded-sm overflow-hidden mt-12 shadow-xl border border-black/5">
                        <img src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800" className="w-full h-full object-cover" alt="Clinic Interior" />
                    </div>
                    <div className="h-[400px] bg-[#0052cc] rounded-sm p-8 flex flex-col justify-end text-white shadow-xl">
                        <Microscope size={48} className="mb-6 opacity-30" />
                        <h5 className="text-2xl font-bold uppercase tracking-tighter leading-none italic">In-house Diagnostics</h5>
                    </div>
                </div>
            </div>
            <div data-aos="fade-left">
                <h2 className="text-5xl md:text-7xl font-light leading-none mb-10">Facility <br/> <span className="font-bold italic text-blue-600">Standards.</span></h2>
                <div className="space-y-10">
                    {[
                        { t: "Pathological Precision", d: "Standardised testing protocols for zero-error clinical diagnostic mapping." },
                        { t: "Tele-Health Cloud", d: "Encrypted digital follow-ups for home-care management and recovery." },
                        { t: "NABL Grade Gear", d: "Equipped with industry-leading sterilization and monitoring systems." }
                    ].map((step, idx) => (
                        <div key={idx} className="group cursor-pointer">
                            <div className="flex items-center gap-6 mb-4">
                                <span className="text-blue-600 font-black text-xs uppercase tracking-widest">Protocol {idx+1}</span>
                                <div className="h-[1px] w-12 bg-blue-600/30 group-hover:w-full transition-all duration-700"></div>
                            </div>
                            <h4 className="text-xl font-bold uppercase tracking-tight mb-2 leading-none">{step.t}</h4>
                            <p className="text-[11px] font-medium opacity-40 uppercase tracking-widest leading-loose">{step.d}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>

      {/* --- THE "V-TRACE" DUMMY MAP (C-PATTERN) --- */}
      <section className="py-32 bg-[#f8f9fa] px-4 relative overflow-hidden">
         <div className="max-w-6xl mx-auto text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-light uppercase tracking-tighter italic text-[#1a1a1a]">Visit The <span className="font-bold not-italic underline decoration-blue-600">Atelier.</span></h2>
            <p className="mt-4 text-[10px] font-black uppercase tracking-[0.5em] opacity-30 italic">Anna Salai • Coimbatore</p>
         </div>
         
         <div className="px-4">
            <div className="w-full h-[550px] rounded-sm overflow-hidden bg-white relative group flex items-center justify-center border border-black/5 shadow-inner">
                {/* --- ARTISTIC CARDIOGRAM MAP UI --- */}
                <div className="absolute inset-0 bg-[#fefefe] opacity-60"></div>
                
                {/* Cardiogram Line Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:50px_50px] opacity-30"></div>
                
                {/* Heartbeat Wave Animation (Dummy Vector) */}
                <div className="absolute top-1/2 left-0 w-full h-[100px] -translate-y-1/2 opacity-10 pointer-events-none overflow-hidden">
                    <div className="w-[200%] h-full flex animate-pulse-slow">
                        <Activity size={100} strokeWidth={0.5} className="text-blue-600" />
                        <Activity size={100} strokeWidth={0.5} className="text-blue-600" />
                    </div>
                </div>

                {/* Location Marker UI */}
                <div className="relative z-20 flex flex-col items-center">
                    <div className="w-20 h-20 bg-[#1a1a1a] rounded-full flex items-center justify-center text-white shadow-2xl active:scale-95 transition cursor-pointer scale-110">
                        <MapPin size={32} className="text-blue-500" fill="currentColor" />
                    </div>
                    <div className="mt-10 bg-white p-10 rounded-sm shadow-2xl text-[#1a1a1a] text-center border-t-4 border-blue-600 min-w-[320px]">
                        <p className="text-[10px] font-black text-stone-300 uppercase tracking-widest mb-3 font-mono leading-none tracking-tighter">NODE_LOC: RS_PURAM_HUB</p>
                        <h5 className="font-bold italic text-2xl leading-tight uppercase tracking-tight mb-6">Dr.Vignesh Care</h5>
                        <p className="text-[10px] font-medium opacity-30 leading-relaxed uppercase tracking-[0.2em]">Anna Salai, RS Puram, Coimbatore - 05</p>
                    </div>
                </div>

                <button className="absolute bottom-12 bg-black text-white px-10 py-4 rounded-full font-bold text-[10px] uppercase tracking-widest active:scale-95 transition shadow-2xl">
                    Get Access Protocol <ExternalLink size={12} className="text-blue-400 ml-2" />
                </button>
            </div>
         </div>
      </section>

      {/* --- FOOTER: THE CLINICAL ARCHIVE --- */}
      <footer className="py-32 px-10 bg-[#1a1a1a] text-white font-sans text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
            <HeartPulse size={40} className="text-blue-500 mx-auto mb-10 opacity-60" />
            <h2 className="text-3xl md:text-5xl font-light italic leading-none mb-10 tracking-tighter italic">Healing Through <br/> Pure Science.</h2>
            
            <div className="flex justify-center gap-12 mb-20 border-y border-white/10 py-10">
                <Instagram size={20} className="opacity-30 hover:opacity-100 transition cursor-pointer" />
                <Award size={20} className="opacity-30 hover:opacity-100 transition cursor-pointer" />
                <MessageCircle size={20} className="opacity-30 hover:opacity-100 transition cursor-pointer" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-[9px] font-black uppercase tracking-[0.5em] text-white/30 leading-relaxed">
                <p>Health Circle • Anna Salai • Coimbatore</p>
                <p>Hotline Protocol: +91 99000 33000</p>
            </div>
        </div>
        
        <div className="mt-32 pt-10 text-[9px] font-black text-white/5 uppercase tracking-[1em]">
          © 2026 DR.VIGNESH CARE • THE CLINICAL ATELIER
        </div>
      </footer>

      {/* --- STICKY PILL --- */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 w-fit z-[80] p-1 bg-white/80 backdrop-blur-3xl border border-black/10 rounded-full flex gap-1 shadow-2xl scale-110">
         <button className="bg-black text-white px-8 py-4 rounded-full font-bold text-[10px] uppercase tracking-widest active:scale-95 transition">
           Queuing
         </button>
         <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-[10px] uppercase tracking-widest active:scale-95 transition">
           Consult Now
         </button>
      </div>

      <style>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
        .animate-pulse-slow {
          animation: pulse-wave 10s linear infinite;
        }
        @keyframes pulse-wave {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

    </div>
  );
};

export default ClientTwentyThree;