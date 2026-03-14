import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  Droplets, 
  Sprout, 
  Wind, 
  Activity, 
  ShieldCheck, 
  Smartphone, 
  MapPin, 
  Phone, 
  Instagram, 
  Facebook, 
  ArrowRight, 
  ChevronRight,
  ExternalLink,
  Zap,
  CheckCircle,
  Database,
  Waves,
  MessageCircle,
  TrendingUp,
  Award
} from 'lucide-react';

const ClientFifteen = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-quart',
    });
  }, []);

  const signatureSystems = [
    { 
      id: "01",
      title: "Inline Drip", 
      cat: "Row Crops", 
      desc: "Uniform distribution for Sugarcane & Banana.",
      img: "https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?q=80&w=800"
    },
    { 
      id: "02",
      title: "Orchard Kit", 
      cat: "Tree Care", 
      desc: "High-flow button drip for Coconut groves.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCThqVHQR2aE59cHsa-92nHqldO61ISZqeQA&s"
    },
    { 
      id: "03",
      title: "Aero-Mist", 
      cat: "Polyhouse", 
      desc: "Micro-sprinklers for nursery management.",
      img: "https://truemist.in/wp-content/uploads/2020/12/truemist-pics-28.jpg"
    },
    { 
      id: "04",
      title: "Smart Hub", 
      cat: "Automation", 
      desc: "App-based irrigation control systems.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNNlCBjWu-rkGD6JcI18loO01qNTY1JWQRjg&s"
    }
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1515150144523-01cff1c30424?q=80&w=600",
    "https://images.unsplash.com/photo-1585314062340-f1a5a7c9328d?q=80&w=600",
    "https://images.unsplash.com/photo-1563514220747-c337cb0d3633?q=80&w=600",
    "https://images.unsplash.com/photo-1592919016382-354ec56209b5?q=80&w=600"
  ];

  return (
    <div className="bg-[#f5f8f2] text-stone-900 overflow-x-hidden font-sans pb-24 selection:bg-green-600 selection:text-white">
      
      {/* --- AGRO TICKER --- */}
      <div className="bg-[#1a3a1a] text-green-400 text-[10px] font-black text-center py-2.5 uppercase tracking-[0.3em] sticky top-0 z-[60] border-b border-green-900/30">
        🌱 Govt. Subsidy: PMKSY 100% Subsidy Slots Open for Theni District Farmers
      </div>

      {/* --- NAV --- */}
      <nav className="fixed w-full top-9 z-50 bg-white/70 backdrop-blur-xl border-b border-green-100 px-4 py-4 flex justify-between items-center shadow-lg">
        <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center shadow-lg shadow-green-900/20">
                <Waves size={18} className="text-white animate-pulse" />
            </div>
            <h2 className="text-lg font-black tracking-tighter uppercase italic text-[#1a3a1a]">Agro<span className="text-green-600 font-sans">Flow</span></h2>
        </div>
        <a href="tel:+919900077000" className="w-9 h-9 rounded-full bg-[#1a3a1a] flex items-center justify-center active:scale-90 transition">
            <Phone size={16} className="text-green-400" />
        </a>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative h-[85vh] flex items-end pb-12 px-6 overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?q=80&w=1600" alt="Irrigation" className="w-full h-full object-cover scale-105 opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent"></div>
        </div>
        <div className="relative z-10 w-full">
          <span data-aos="fade-right" className="bg-green-600 text-white px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-widest mb-4 inline-block shadow-lg">
            Theni's Precision Leader
          </span>
          <h1 data-aos="fade-up" className="text-5xl font-black mb-6 leading-[1] tracking-tighter uppercase italic text-[#1a3a1a]">
            More Crop. <br/> <span className="text-green-600 underline decoration-green-200">Per Drop.</span>
          </h1>
          <button className="bg-[#1a3a1a] text-white py-4 px-8 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-xl active:bg-green-700 transition w-full">Request Site Audit</button>
        </div>
      </section>

      {/* --- STATS --- */}
      <section className="py-12 px-4 bg-white grid grid-cols-2 gap-3 border-y border-green-50">
          {[
            { v: "70%", l: "Water Saved", i: <Droplets size={18}/> },
            { v: "40%", l: "Higher Yield", i: <TrendingUp size={18}/> },
            { v: "10Y", l: "System Life", i: <ShieldCheck size={18}/> },
            { v: "ISI", l: "Certified", i: <Award size={18}/> }
          ].map((stat, i) => (
            <div key={i} data-aos="zoom-in" className="p-4 bg-green-50/50 rounded-2xl border border-green-100 text-center flex flex-col items-center">
               <div className="text-green-600 mb-1 opacity-60">{stat.i}</div>
               <h3 className="text-xl font-black text-[#1a3a1a] tracking-tighter italic">{stat.v}</h3>
               <p className="text-[8px] font-bold text-stone-400 uppercase tracking-widest">{stat.l}</p>
            </div>
          ))}
      </section>

      {/* --- IRRIGATION SYSTEMS: 1x2 GRID IN MOBILE --- */}
      <section className="py-20 px-4 bg-[#fcfdfa]">
        <div className="text-center mb-10">
            <p className="text-green-600 font-bold text-[10px] uppercase tracking-widest mb-1 italic">Product Engineering</p>
            <h2 className="text-3xl font-black tracking-tighter uppercase italic leading-none text-[#1a3a1a]">Irrigation <br/> Systems</h2>
        </div>

        {/* --- GRID MODIFIED: 2 COLUMNS ON MOBILE --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {signatureSystems.map((item, idx) => (
            <div key={idx} data-aos="fade-up" className="relative group overflow-hidden rounded-2xl bg-white border border-green-100 shadow-lg shadow-green-900/5 flex flex-col h-full">
               <div className="relative h-32 overflow-hidden">
                  <img src={item.img} className="w-full h-full object-cover group-hover:scale-105 transition duration-1000" alt={item.title} />
                  <div className="absolute top-2 left-2 bg-green-600 text-white p-1.5 rounded-lg shadow-xl">
                    <Activity size={14} />
                  </div>
               </div>
               <div className="p-3 flex flex-col justify-between flex-grow">
                  <div>
                    <span className="text-green-600 font-mono text-[7px] font-black uppercase tracking-widest mb-1 block">AG-{item.id}</span>
                    <h3 className="text-xs font-black uppercase italic text-[#1a3a1a] leading-tight mb-1">{item.title}</h3>
                    <p className="text-[9px] text-stone-400 font-bold mb-1 uppercase">{item.cat}</p>
                    <p className="text-[9px] text-stone-500 leading-tight mb-3 italic line-clamp-2">"{item.desc}"</p>
                  </div>
                  <button className="w-full py-2 bg-[#1a3a1a] text-white rounded-lg font-black text-[8px] uppercase tracking-widest active:scale-95 transition">Specs</button>
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- WHY US --- */}
      <section className="py-20 px-6 bg-green-900 text-white rounded-[3rem] mx-2 mb-20 relative overflow-hidden shadow-2xl">
         <div className="absolute top-0 right-0 w-64 h-64 bg-green-500 rounded-full blur-[100px] opacity-20"></div>
         <div className="relative z-10">
            <h2 className="text-3xl font-black mb-10 leading-none uppercase italic text-green-400 text-center">Smart <br/> Tech</h2>
            <div className="space-y-8">
               {[
                 { t: "IoT Hub", d: "Control water flow via Mobile app.", i: <Smartphone size={24} /> },
                 { t: "Yield Max", d: "Precise fertigation for plant health.", i: <Zap size={24} /> },
                 { t: "Local Crew", d: "24-Hour on-field support in Theni.", i: <CheckCircle size={24} /> }
               ].map((item, i) => (
                  <div key={i} data-aos="fade-left" className="flex gap-4 items-start bg-white/5 p-5 rounded-2xl border border-white/10 backdrop-blur-md">
                     <div className="text-green-400 mt-1">{item.i}</div>
                     <div>
                        <h4 className="font-black text-sm uppercase tracking-tight mb-1">{item.t}</h4>
                        <p className="text-[10px] opacity-60 leading-tight italic">"{item.d}"</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* --- DUMMY MAP --- */}
      <section className="py-20 bg-white px-4 relative overflow-hidden">
         <div className="flex items-center gap-2 mb-6 text-[#1a3a1a]">
            <MapPin size={18} />
            <p className="font-black text-[10px] uppercase tracking-widest italic">Cumbum Bypass, Theni</p>
         </div>
         <div className="w-full h-[300px] rounded-[2.5rem] overflow-hidden bg-slate-100 relative group border-4 border-green-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#f0fdf4_1px,transparent_1px)] bg-[size:25px_25px] opacity-40"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-green-200 rounded-full animate-ping opacity-20"></div>
            <div className="relative z-10 flex flex-col items-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white shadow-2xl">
                    <MapPin size={24} fill="currentColor" />
                </div>
            </div>
            <button className="absolute bottom-4 left-4 bg-white text-[#1a3a1a] px-4 py-2 rounded-xl font-black text-[9px] uppercase tracking-widest border border-green-100 shadow-xl">Coordinates</button>
         </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-20 px-8 bg-white text-stone-900 border-t border-green-50 text-center">
        <div className="flex flex-col items-center mb-10">
            <Sprout size={40} className="text-green-600 mb-4" />
            <h2 className="text-2xl font-black uppercase tracking-[0.2em] mb-2 italic text-[#1a3a1a]">AgroFlow</h2>
            <p className="max-w-xs opacity-50 text-[9px] leading-relaxed font-bold uppercase tracking-widest italic text-center">Empowering Theni District's Green Growth Since 2018.</p>
        </div>
        
        <div className="grid grid-cols-2 gap-6 text-left border-y border-stone-50 py-10 mb-10 font-sans">
            <div>
                <p className="text-[9px] font-black uppercase tracking-widest text-green-600 mb-1">Yard</p>
                <p className="text-[10px] font-bold italic text-stone-400 uppercase leading-tight">Green Plaza, Bypass Road, Theni</p>
            </div>
            <div>
                <p className="text-[9px] font-black uppercase tracking-widest text-green-600 mb-1">Office</p>
                <p className="text-[10px] font-bold italic text-stone-400 uppercase leading-tight">info@agroflow.com<br/>+91 99000 77000</p>
            </div>
        </div>

        <div className="flex justify-center gap-6 mb-10 opacity-30">
           <Instagram size={20} /><Facebook size={20} /><MessageCircle size={20} />
        </div>
        
        <div className="text-[8px] font-black text-stone-300 uppercase tracking-[0.8em]">
          © 2026 AGROFLOW • THENI DISTRICT
        </div>
      </footer>

      {/* --- STICKY ACTIONS --- */}
      <div className="fixed bottom-0 w-full z-[60] p-4 bg-white/60 backdrop-blur-xl flex gap-3 shadow-2xl font-sans border-t border-green-50">
         <button className="flex-1 bg-[#1a3a1a] text-white py-4 rounded-xl font-black text-[9px] uppercase tracking-widest active:scale-95 transition">
           Subsidy
         </button>
         <button className="flex-1 bg-green-600 text-white py-4 rounded-xl font-black text-[9px] uppercase tracking-widest active:scale-95 transition">
           WhatsApp
         </button>
      </div>

    </div>
  );
};

export default ClientFifteen;