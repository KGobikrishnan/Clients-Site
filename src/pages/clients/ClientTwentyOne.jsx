import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  Zap, 
  ShieldCheck, 
  Droplets, 
  Gauge, 
  Activity, 
  MapPin, 
  Phone, 
  Instagram, 
  Youtube, 
  ArrowRight, 
  ChevronRight,
  ExternalLink,
  Target,
  Maximize,
  Timer,
  Car,
  Wind,
  Layers,
  MessageCircle,
  Award,
  Sparkle
} from 'lucide-react';

const ClientTwentyOne = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-expo',
    });
  }, []);

  const eliteServices = [
    { 
      id: "GL-01",
      title: "9H Ceramic", 
      cat: "Molecular Shield", 
      desc: "Permanent chemical bonding with paint for hydrophobic mirror finish.",
      img: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=800",
      spec: "Hardness: 9H+"
    },
    { 
      id: "GL-02",
      title: "TPU Armor", 
      cat: "Paint Protection Film", 
      desc: "Instant self-healing technology against stone chips and road debris.",
      img: "https://www.primetimepdr.com/wp-content/uploads/2023/06/Science-Behind-Paint-Protection-Film.png",
      spec: "Heal: Instant"
    },
    { 
      id: "GL-03",
      title: "Deep Detail", 
      cat: "Cabin Restoration", 
      desc: "Surgical level interior sanitization and premium leather nourishment.",
      img: "https://cdn.shopify.com/s/files/1/0742/8938/1681/files/Car_Interior_Restoration.png?v=1738762710",
      spec: "Steam: 140°C"
    }
  ];

  return (
    <div className="bg-[#080808] text-white overflow-x-hidden font-sans pb-24 selection:bg-green-500 selection:text-black">
      
      {/* --- GLOSS TICKER --- */}
      <div className="bg-green-500 text-black text-[10px] font-black text-center py-2.5 uppercase tracking-[0.4em] sticky top-0 z-[60] shadow-xl">
        🧪 LABORATORY STATUS: STUDIO_ACTIVE • CERAMIC_CURE_READY • PPF_SLOTS_OPEN • GOBY_V2_DETECTOR_ACTIVE
      </div>

      {/* --- AERODYNAMIC NAV --- */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 w-[94%] z-[60] bg-black/40 backdrop-blur-2xl border border-white/10 px-8 py-5 rounded-[1rem] flex justify-between items-center shadow-2xl skew-x-[-10deg]">
        <div className="flex items-center gap-3 skew-x-[10deg]">
            <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.4)]">
                <Zap size={22} className="text-black" fill="currentColor" />
            </div>
            <h2 className="text-xl font-black tracking-tighter uppercase italic">Gloss<span className="text-green-500 font-sans not-italic">Labs</span></h2>
        </div>
        <button className="bg-white text-black p-3.5 rounded-full active:scale-90 transition shadow-lg skew-x-[10deg]">
            <Gauge size={20} />
        </button>
      </nav>

      {/* --- HERO: THE MIRROR EFFECT --- */}
      <section className="relative min-h-screen flex items-center justify-center px-8 pt-20 overflow-hidden bg-black">
        {/* Animated Light Sweep Background */}
        <div className="absolute inset-0 opacity-[0.1] pointer-events-none overflow-hidden">
            <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-green-500 to-transparent animate-sweep"></div>
        </div>
        
        <div className="relative z-10 w-full max-w-7xl grid lg:grid-cols-2 gap-20 items-center">
            <div data-aos="fade-right">
                <span className="bg-green-500/10 text-green-500 px-4 py-1 rounded-sm text-[10px] font-black uppercase tracking-widest mb-8 inline-block border border-green-500/30">
                   Automotive Aesthetic Lab
                </span>
                <h1 className="text-7xl md:text-[10rem] font-black leading-[0.8] tracking-tighter uppercase italic text-white">
                    Gloss <br/> <span className="text-transparent stroke-text">Obsessed.</span>
                </h1>
                <p className="text-lg text-gray-500 mt-12 mb-10 max-w-md font-medium leading-relaxed italic uppercase">Transforming automotive paint into high-definition reflective glass surfaces.</p>
                <div className="flex gap-4">
                    <button className="bg-green-500 text-black px-12 py-5 rounded-sm font-black text-[12px] uppercase tracking-widest shadow-[0_0_40px_rgba(34,197,94,0.3)] active:scale-95 transition">Book Inspection</button>
                    <button className="w-16 h-16 bg-white/5 border border-white/10 rounded-sm flex items-center justify-center text-white hover:bg-white hover:text-black transition duration-500"><Maximize /></button>
                </div>
            </div>

            <div className="relative" data-aos="zoom-out-left">
                <div className="absolute -top-10 -right-10 w-64 h-64 bg-green-500/20 rounded-full blur-[100px] opacity-40"></div>
                <div className="relative h-[550px] rounded-lg overflow-hidden border border-white/10 shadow-2xl rotate-2 hover:rotate-0 transition duration-1000">
                    <img src="https://content.jdmagicbox.com/v2/comp/jaipur/w5/0141px141.x141.200813122611.t1w5/catalogue/car-spa-and-shine-ajmer-road-jaipur-car-washing-services-bt973gnjdp.jpg" alt="Detailing" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                </div>
                {/* Floating Telemetry Card */}
                <div className="absolute bottom-10 -left-12 bg-black/80 backdrop-blur-xl p-8 rounded-lg border border-white/10 shadow-2xl min-w-[240px]">
                    <div className="flex gap-4 mb-4">
                        <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center text-green-500"><Sparkle /></div>
                        <div>
                            <p className="text-[10px] font-black opacity-30 uppercase">Reflectance</p>
                            <p className="text-sm font-black text-green-500 uppercase italic">99.2% Mirror</p>
                        </div>
                    </div>
                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                        <div className="w-[99%] h-full bg-green-500"></div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* --- TECH MARQUEE --- */}
      <div className="bg-white py-12 overflow-hidden whitespace-nowrap flex select-none skew-y-[-2deg]">
          <p className="text-black text-3xl md:text-5xl font-black italic uppercase tracking-tighter animate-marquee">
            • 9H CERAMIC • SELF-HEALING PPF • PAINT CORRECTION • GRAPHENE COATING • STEAM DETAILING • 
          </p>
          <p className="text-black text-3xl md:text-5xl font-black italic uppercase tracking-tighter animate-marquee">
            • 9H CERAMIC • SELF-HEALING PPF • PAINT CORRECTION • GRAPHENE COATING • STEAM DETAILING • 
          </p>
      </div>

      {/* --- SERVICE MATRIX: THE ARCHITECTURAL GRID --- */}
      <section id="services" className="py-32 px-6 bg-[#080808]">
        <div className="max-w-7xl mx-auto mb-24 px-4 flex flex-col md:flex-row justify-between items-end gap-10">
            <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter leading-none italic">Lab <br/> <span className="text-green-500 font-sans not-italic">Protocols</span></h2>
            <div className="h-[1px] flex-grow bg-white/10 mx-10 hidden md:block"></div>
            <p className="max-w-xs text-[10px] font-black opacity-30 uppercase tracking-widest text-right leading-relaxed text-gray-400">Scientific surface protection engineered for luxury & performance automotive assets.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {eliteServices.map((item, i) => (
                <div key={i} data-aos="fade-up" data-aos-delay={i*100} className="relative group bg-white/5 border border-white/5 rounded-sm p-1 hover:bg-green-500/5 transition duration-700">
                    <div className="h-64 overflow-hidden relative">
                        <img src={item.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-1000 scale-110 group-hover:scale-100" alt={item.title} />
                        <div className="absolute top-4 left-4 bg-green-500 text-black px-4 py-1.5 rounded-sm font-black text-[9px] uppercase">
                           {item.spec}
                        </div>
                    </div>
                    <div className="p-8">
                        <div className="flex justify-between items-center mb-6">
                            <span className="text-green-500 font-mono text-[10px] font-black">{item.id}</span>
                            <Layers size={16} className="opacity-20" />
                        </div>
                        <h4 className="text-3xl font-black uppercase italic mb-4 leading-none">{item.title}</h4>
                        <p className="text-gray-500 text-xs leading-relaxed italic mb-8 uppercase tracking-tighter">"{item.desc}"</p>
                        <button className="w-full py-4 bg-white/5 border border-white/10 text-white rounded-sm font-black text-[10px] uppercase tracking-widest hover:bg-green-500 hover:text-black transition">Process Intel</button>
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* --- THE SCANNER DUMMY MAP --- */}
      <section className="py-32 bg-[#080808] px-4 relative overflow-hidden text-white">
         <div className="max-w-7xl mx-auto text-center mb-24">
            <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter">Studio <br/> Coordinates</h2>
            <p className="mt-8 text-green-500 text-[10px] font-black uppercase tracking-[0.5em] italic">RS Puram Main Hub • Cumbum • 641012</p>
         </div>
         
         <div className="px-4">
            <div className="w-full h-[600px] rounded-lg overflow-hidden bg-white/5 relative group flex items-center justify-center border border-white/10 shadow-2xl">
                {/* --- ARTISTIC SCANNER MAP UI --- */}
                <div className="absolute inset-0 bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] bg-[size:40px_40px] opacity-40"></div>
                <div className="absolute top-0 left-0 w-full h-[3px] bg-green-500/30 animate-scan z-10"></div>
                
                {/* Circular Viewfinder Elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-green-500/10 rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border-2 border-dashed border-white/5 rounded-full animate-[spin_30s_linear_infinite]"></div>

                {/* Location Marker UI */}
                <div className="relative z-20 flex flex-col items-center">
                    <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center text-black shadow-[0_0_60px_rgba(34,197,94,0.4)] scale-110 active:scale-95 transition cursor-pointer">
                        <MapPin size={36} fill="currentColor" />
                    </div>
                    <div className="mt-12 bg-black p-10 rounded-sm shadow-2xl text-white text-center border-b-4 border-green-500 min-w-[320px]">
                        <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mb-3 font-mono leading-none">LOC_NODE: STUDIO_01</p>
                        <h5 className="font-black italic text-3xl leading-tight uppercase tracking-tight mb-8">Reflect Hub HQ</h5>
                        <div className="flex flex-col gap-3">
                            <div className="flex justify-between items-center bg-white/5 p-4 rounded-sm border border-white/10">
                                <span className="text-[10px] font-black uppercase opacity-40">Bay Status</span>
                                <span className="text-[10px] font-black uppercase text-green-500">Ready for Cure</span>
                            </div>
                        </div>
                    </div>
                </div>

                <button className="absolute bottom-12 bg-white text-black px-12 py-5 rounded-full font-black text-[11px] uppercase tracking-widest active:scale-95 transition shadow-2xl">
                    View Live Directions <ExternalLink size={14} className="ml-2" />
                </button>
            </div>
         </div>
      </section>

      {/* --- FOOTER: THE INDUSTRIAL LOG --- */}
      <footer className="py-32 px-10 bg-black text-white text-center relative overflow-hidden border-t border-white/5">
        <div className="max-w-4xl mx-auto relative z-10">
            <Zap size={48} className="text-green-500 mx-auto mb-10 shadow-[0_0_40px_rgba(34,197,94,0.5)]" />
            <h2 className="text-3xl md:text-8xl font-black uppercase italic leading-[0.85] tracking-tighter mb-16">Pure Art. <br/> Pure Protection. <br/> Pure Gloss.</h2>
            
            <div className="flex justify-center gap-12 mb-20 border-y border-white/5 py-12">
                <Instagram size={24} className="opacity-20 hover:opacity-100 hover:text-green-500 transition cursor-pointer" />
                <Youtube size={24} className="opacity-20 hover:opacity-100 hover:text-green-500 transition cursor-pointer" />
                <MessageCircle size={24} className="opacity-20 hover:opacity-100 hover:text-green-500 transition cursor-pointer" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-[11px] font-black uppercase tracking-[0.5em] text-white/20">
                <p>RS Puram • Cumbum • TN</p>
                <p>Hotline: +91 99000 55000</p>
            </div>
        </div>
        
        <div className="mt-40 pt-10 text-[9px] font-black text-white/5 uppercase tracking-[1.5em]">
          © 2026 GLOSS LABS • SURFACE SCIENTISTS
        </div>
      </footer>

      {/* --- ACTION PILL --- */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 w-fit z-[80] p-1 bg-black/80 backdrop-blur-3xl border border-white/10 rounded-full flex gap-1 shadow-2xl scale-110">
         <button className="bg-white text-black px-8 py-4 rounded-full font-black text-[10px] uppercase tracking-widest active:scale-95 transition flex items-center justify-center gap-2">
           <Layers size={14} /> Packages
         </button>
         <button className="bg-green-500 text-black px-8 py-4 rounded-full font-black text-[10px] uppercase tracking-widest active:scale-95 transition flex items-center justify-center gap-2">
           <MessageCircle size={14} fill="currentColor" /> Chat Now
         </button>
      </div>

      <style>{`
        .stroke-text {
          -webkit-text-stroke: 1.5px #22c55e;
          color: transparent;
        }
        @keyframes sweep {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        .animate-sweep {
          animation: sweep 4s ease-in-out infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 40s linear infinite;
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

export default ClientTwentyOne;