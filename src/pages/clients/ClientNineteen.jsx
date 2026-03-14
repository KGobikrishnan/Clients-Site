import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  Activity, 
  Dna, 
  Stethoscope, 
  Zap, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Phone, 
  Instagram, 
  Linkedin, 
  MessageCircle, 
  ArrowRight, 
  ChevronRight,
  ExternalLink,
  Target,
  Brain,
  Timer,
  HeartPulse,
  UserPlus,
  Smartphone,
  Fingerprint,
  Radio,
  Microscope,
  Bone,
  Dumbbell,
  ClipboardList,
  Flame,
  Gauge,
  Layers
} from 'lucide-react';

const ClientNineteen = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-quart',
    });
  }, []);

  const clinicalServices = [
    { 
      id: "DX-101",
      title: "Bio-Mech Analytics", 
      cat: "Movement Science", 
      img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800",
      stats: { power: "98%", speed: "High" }
    },
    { 
      id: "DX-102",
      title: "Neuro-Rehab Hub", 
      cat: "Brain & Nerve", 
      img: "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=800",
      stats: { power: "92%", speed: "Custom" }
    },
    { 
      id: "DX-103",
      title: "Elite Sports Lab", 
      cat: "Athlete Recovery", 
      img: "https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?q=80&w=800",
      stats: { power: "100%", speed: "Turbo" }
    }
  ];

  return (
    <div className="bg-[#f4f7fa] text-[#0a192f] overflow-x-hidden font-sans pb-24 selection:bg-[#0052cc] selection:text-white">
      
      {/* --- ELITE TOP BAR --- */}
      <div className="bg-[#0052cc] text-white text-[10px] font-black text-center py-2.5 uppercase tracking-[0.4em] sticky top-0 z-[70] shadow-xl">
        ⚡ STATUS: CLINIC_ACTIVE • ISO_9001_CERTIFIED • RS PURAM HUB • DOCTORS_ON_CALL
      </div>

      {/* --- CYBER NAV --- */}
      <nav className="fixed top-10 left-1/2 -translate-x-1/2 w-[94%] z-[60] bg-white/40 backdrop-blur-3xl border border-white/60 px-8 py-5 rounded-[2rem] flex justify-between items-center shadow-2xl">
        <div className="flex items-center gap-4">
            <div className="w-11 h-11 bg-[#0a192f] rounded-2xl flex items-center justify-center shadow-xl group cursor-pointer">
                <Activity size={22} className="text-[#0052cc] animate-pulse" />
            </div>
            <h2 className="text-2xl font-black tracking-tighter uppercase italic">Recover<span className="font-light not-italic text-blue-600">Well</span></h2>
        </div>
        <button className="bg-[#0052cc] text-white p-3.5 rounded-2xl active:scale-90 transition shadow-lg">
            <UserPlus size={20} />
        </button>
      </nav>

      {/* --- HERO: THE MOTION CANVAS --- */}
      <section className="relative min-h-screen flex items-center justify-center px-8 pt-32 overflow-hidden bg-white">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[radial-gradient(#0052cc_1px,transparent_1px)] bg-[size:30px_30px]"></div>
        
        <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center max-w-7xl">
            <div data-aos="fade-right">
                <span className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-8 inline-flex items-center gap-3">
                   <Target size={14} /> Kinetic Performance Hub
                </span>
                <h1 className="text-7xl md:text-[9rem] font-black leading-[0.8] tracking-tighter uppercase italic text-[#0a192f]">
                    Zero <br/> <span className="text-transparent stroke-text">Limits.</span>
                </h1>
                <p className="text-lg text-slate-500 mt-12 mb-10 max-w-md font-medium leading-relaxed italic">Restoring human mobility through high-precision diagnostics and biomechanical alignment.</p>
                <div className="flex gap-4">
                    <button className="bg-[#0a192f] text-white px-10 py-5 rounded-[2rem] font-black text-[12px] uppercase tracking-widest shadow-2xl hover:bg-[#0041a3] transition">Start Recovery</button>
                    <button className="w-14 h-14 bg-white border border-blue-100 rounded-full flex items-center justify-center text-blue-600 shadow-xl"><ChevronRight /></button>
                </div>
            </div>

            <div className="relative" data-aos="zoom-in-left">
                <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-100 rounded-full blur-[100px] opacity-40"></div>
                <div className="relative h-[600px] rounded-[5rem] overflow-hidden border-[15px] border-[#f8faff] shadow-2xl">
                    <img src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1000" alt="Clinic" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f]/60 to-transparent"></div>
                </div>
                <div className="absolute top-1/2 -left-12 bg-white p-8 rounded-[2.5rem] shadow-2xl border border-white/50 min-w-[200px]">
                    <Activity className="text-blue-600 mb-2" size={32} />
                    <p className="text-3xl font-black text-[#0a192f]">99.8%</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Diagnostic Accuracy</p>
                </div>
            </div>
        </div>
      </section>

      {/* --- NEW SECTION: THE MOVEMENT DIAGNOSTIC LAB --- */}
      <section className="py-32 bg-[#f8faff] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-20 items-center">
            <div data-aos="fade-right">
                <h2 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none mb-10">The Kinetic <br/> <span className="text-[#0052cc]">Analysis.</span></h2>
                <div className="space-y-6">
                    {[
                        { t: "Muscle Tone Mapping", d: "Using infrared sensors to detect muscle imbalances.", i: <Dna /> },
                        { t: "Joint ROM Scan", d: "Digital calculation of your range of motion progress.", i: <Layers /> },
                        { t: "Force Distribution", d: "Analyzing pressure points during your walk cycle.", i: <Fingerprint /> }
                    ].map((item, i) => (
                        <div key={i} className="flex gap-6 items-center p-6 bg-white rounded-3xl border border-blue-50 shadow-sm hover:shadow-xl transition duration-500">
                            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600">{item.i}</div>
                            <div>
                                <h4 className="font-black uppercase text-sm mb-1">{item.t}</h4>
                                <p className="text-xs opacity-50 italic">{item.d}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="relative group" data-aos="zoom-in">
                <div className="bg-[#0a192f] p-10 rounded-[4rem] shadow-2xl relative overflow-hidden border border-white/10">
                    <div className="absolute top-[-10%] right-[-10%] w-40 h-40 bg-blue-600/20 rounded-full blur-[60px]"></div>
                    <div className="flex justify-between items-center mb-10">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white"><Gauge /></div>
                            <h5 className="font-black text-white uppercase italic">Live Recovery Feed</h5>
                        </div>
                        <span className="text-[10px] text-green-400 font-bold uppercase animate-pulse">Processing...</span>
                    </div>
                    <div className="space-y-8">
                        <div>
                            <div className="flex justify-between text-[10px] text-white/40 font-bold uppercase mb-2"><span>Stability Index</span><span>92%</span></div>
                            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden"><div className="w-[92%] h-full bg-blue-600"></div></div>
                        </div>
                        <div>
                            <div className="flex justify-between text-[10px] text-white/40 font-bold uppercase mb-2"><span>Mobility Range</span><span>78%</span></div>
                            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden"><div className="w-[78%] h-full bg-green-500"></div></div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-10">
                            <div className="bg-white/5 p-6 rounded-3xl border border-white/5"><Flame className="text-orange-500 mb-2" size={20}/><p className="text-2xl font-black text-white italic">Active</p></div>
                            <div className="bg-white/5 p-6 rounded-3xl border border-white/5"><HeartPulse className="text-red-500 mb-2" size={20}/><p className="text-2xl font-black text-white italic">Strong</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* --- SOLUTION MATRIX: CLEAN & COMPACT --- */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto mb-20 flex flex-col md:flex-row justify-between items-end gap-6">
            <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-none">Treatment <br/> <span className="text-blue-600">Matrix</span></h2>
            <p className="max-w-xs text-xs font-bold opacity-30 uppercase tracking-widest text-right">High-Performance protocols for long-term clinical relief.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {clinicalServices.map((item, i) => (
                <div key={i} data-aos="fade-up" data-aos-delay={i*100} className="bg-[#f8faff] rounded-[3rem] border border-blue-50 overflow-hidden group hover:bg-[#0a192f] transition-all duration-700">
                    <div className="h-56 overflow-hidden relative">
                        <img src={item.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition duration-1000" alt={item.title} />
                        <div className="absolute top-4 left-4 bg-blue-600 text-white p-3 rounded-2xl shadow-xl">{item.id}</div>
                    </div>
                    <div className="p-8">
                        <p className="text-[10px] font-black uppercase tracking-widest text-[#0052cc] group-hover:text-blue-400 transition mb-2">{item.cat}</p>
                        <h4 className="text-2xl font-black uppercase italic text-[#0a192f] group-hover:text-white transition leading-none mb-6">{item.title}</h4>
                        <div className="flex gap-4 border-t border-blue-100 group-hover:border-white/10 pt-6">
                            <div className="flex-1 text-center">
                                <p className="text-[8px] font-black opacity-30 group-hover:opacity-100 group-hover:text-white uppercase">Power</p>
                                <p className="text-lg font-black italic group-hover:text-blue-400">{item.stats.power}</p>
                            </div>
                            <div className="flex-1 text-center border-l border-blue-100 group-hover:border-white/10">
                                <p className="text-[8px] font-black opacity-30 group-hover:opacity-100 group-hover:text-white uppercase">Mode</p>
                                <p className="text-lg font-black italic group-hover:text-blue-400">{item.stats.speed}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* --- CLINICAL HUB: SCANNER MAP --- */}
      <section className="py-32 bg-[#0a192f] px-4 relative overflow-hidden">
         <div className="px-4">
            <div className="w-full h-[600px] rounded-[5rem] overflow-hidden bg-white/5 relative group flex items-center justify-center border border-white/10 shadow-2xl">
                <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] bg-[size:30px_30px] opacity-40"></div>
                <div className="absolute top-0 left-0 w-full h-[4px] bg-blue-600/40 animate-scan z-10"></div>
                
                <div className="relative z-20 flex flex-col items-center">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-[#0a192f] shadow-2xl scale-110 active:scale-95 transition cursor-pointer border-[10px] border-[#0052cc]">
                        <MapPin size={32} fill="currentColor" />
                    </div>
                    <div className="mt-12 bg-white p-12 rounded-[3.5rem] shadow-2xl text-[#0a192f] text-center border-b-[12px] border-[#0052cc] min-w-[350px]">
                        <p className="text-[10px] font-black text-slate-300 uppercase tracking-[0.5em] mb-3 font-mono">NODE_LOC: HUB_CBE</p>
                        <h5 className="font-black italic text-3xl leading-tight uppercase tracking-tight mb-8">RecoverWell HQ</h5>
                        <button className="w-full py-5 bg-[#0a192f] text-white rounded-[2rem] font-black text-[11px] uppercase tracking-widest active:scale-95 transition">Open Navigation</button>
                    </div>
                </div>
            </div>
         </div>
      </section>

      {/* --- FOOTER: THE MOTION CARD --- */}
      <footer className="py-32 px-10 bg-white text-[#0a192f] font-sans text-center relative overflow-hidden border-t border-blue-50">
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-50 rounded-full blur-[120px] opacity-60"></div>
        <div className="max-w-4xl mx-auto relative z-10">
            <HeartPulse size={50} className="text-[#0052cc] mx-auto mb-10" />
            <h2 className="text-3xl md:text-8xl font-black uppercase italic leading-[0.85] tracking-tighter mb-16 italic">Evolution <br/> in Healing.</h2>
            <div className="flex justify-center gap-16 mb-20 border-y border-blue-50 py-12">
                <Instagram size={24} className="opacity-30 hover:opacity-100 hover:text-pink-500 transition cursor-pointer" />
                <Linkedin size={24} className="opacity-30 hover:opacity-100 hover:text-blue-500 transition cursor-pointer" />
                <MessageCircle size={24} className="opacity-30 hover:opacity-100 hover:text-green-500 transition cursor-pointer" />
            </div>
            <p className="text-[11px] font-black uppercase tracking-[1em] opacity-20">RS PURAM • COIMBATORE • 2026</p>
        </div>
      </footer>

      {/* --- ACTION PILL --- */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 w-fit z-[80] p-1 bg-[#0a192f]/80 backdrop-blur-3xl border border-white/10 rounded-full flex gap-1 shadow-2xl scale-110">
         <button className="bg-white text-[#0a192f] px-8 py-4 rounded-full font-black text-[10px] uppercase tracking-widest active:scale-95 transition flex items-center justify-center gap-2">
           <Smartphone size={14} /> My Portal
         </button>
         <button className="bg-[#0052cc] text-white px-8 py-4 rounded-full font-black text-[10px] uppercase tracking-widest active:scale-95 transition flex items-center justify-center gap-2 shadow-xl shadow-blue-500/20">
           <Zap size={14} fill="currentColor" /> Trial Session
         </button>
      </div>

      <style>{`
        .stroke-text {
          -webkit-text-stroke: 1.5px #0a192f;
          color: transparent;
        }
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          50% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
        .animate-scan {
          animation: scan 4s linear infinite;
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

    </div>
  );
};

export default ClientNineteen;