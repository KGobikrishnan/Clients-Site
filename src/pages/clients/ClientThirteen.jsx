import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  Sun, 
  BatteryLow, 
  Zap, 
  TrendingDown, 
  ShieldCheck, 
  BadgePercent, 
  LineChart, 
  Droplets, 
  Phone, 
  MessageCircle, 
  Instagram, 
  Facebook,
  Linkedin,
  ChevronRight,
  MapPin,
  ExternalLink,
  Cpu,
  ArrowUpRight,
  Globe,
  Smartphone, // <-- Added missing import
  Files       // <-- Added missing import
} from 'lucide-react';

const ClientThirteen = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-quart',
    });
  }, []);

  const solarProducts = [
    { 
      id: "S1",
      title: "On-Grid Nexus", 
      icon: <Sun size={32} />, 
      desc: "Zero EB Bills. Auto-export excess power and accumulate green credits daily.",
      img: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=800",
      roi: "4 Years"
    },
    { 
      id: "S2",
      title: "Tesla-Grade Storage", 
      icon: <BatteryLow size={32} />, 
      desc: "Lithium-Ferro-Phosphate (LFP) batteries for 15+ years of lifecycle.",
      img: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?q=80&w=800",
      roi: "Uninterrupted"
    },
    { 
      id: "S3",
      title: "Smart Hybrid Inverters", 
      icon: <Cpu size={32} />, 
      desc: "Combined grid-tie and battery-backup with AI-based power management.",
      img: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=800",
      roi: "Critical Loads"
    },
    { 
      id: "S4",
      title: "Evacuated Tube Tech", 
      icon: <Droplets size={32} />, 
      desc: "Pressurized hot water 24/7. Borosilicate glass tubes with 95% absorption.",
      img: "https://images.unsplash.com/photo-1595185955000-880c5112660d?q=80&w=800",
      roi: "Lifetime Water"
    }
  ];

  return (
    <div className="bg-[#0a0a0a] text-white overflow-x-hidden font-sans pb-24 selection:bg-yellow-500 selection:text-black">
      
      {/* --- ENERGY TICKER --- */}
      <div className="bg-yellow-500 text-black text-[10px] font-black text-center py-2 uppercase tracking-[0.3em] sticky top-0 z-[60] shadow-xl">
        ⚡ Solar Potential Today: 98% Clear Sky | 25% Govt Subsidy Slots Remaining
      </div>

      {/* --- TECH NAV --- */}
      <nav className="fixed w-full top-8 z-50 bg-black/40 backdrop-blur-2xl border-b border-white/5 px-6 py-4 flex justify-between items-center shadow-2xl">
        <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-yellow-500 rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(234,179,8,0.4)]">
                <Zap size={20} className="text-black" fill="currentColor" />
            </div>
            <h2 className="text-xl font-black tracking-tighter uppercase italic">Solar<span className="text-yellow-500">Pulse</span></h2>
        </div>
        <a href="tel:+919900088000" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5 active:scale-90 transition">
            <Phone size={18} className="text-yellow-500" />
        </a>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative h-[90vh] flex items-end pb-16 px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1600" 
            alt="Solar Farm" 
            className="w-full h-full object-cover scale-110 opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 w-full">
          <span data-aos="fade-right" className="bg-yellow-500 text-black px-3 py-1 rounded-sm text-[10px] font-black uppercase tracking-widest mb-6 inline-flex items-center gap-2">
            <Globe size={12} /> Approved MNRE Installer
          </span>
          <h1 data-aos="fade-up" className="text-6xl font-black mb-6 leading-[0.9] tracking-tighter uppercase italic">
            Zero Bills. <br/> <span className="text-yellow-500 underline decoration-yellow-500/30">Harvest</span> <br/> The Sun.
          </h1>
          <div className="flex flex-col gap-3">
             <button className="bg-yellow-500 text-black py-4 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-2xl shadow-yellow-500/20 active:bg-yellow-600 transition">Get Free Design Audit</button>
             <button className="bg-white/5 backdrop-blur-md border border-white/10 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest">Savings Calculator</button>
          </div>
        </div>
      </section>

      {/* --- ROI METRICS --- */}
      <section className="py-16 px-8 bg-black grid grid-cols-2 gap-4 border-b border-white/5">
          {[
            { v: "90%", l: "Bill Savings", i: <TrendingDown size={20}/> },
            { v: "25Y", l: "Panel Life", i: <ShieldCheck size={20}/> },
            { v: "4Y", l: "Payback TAT", i: <LineChart size={20}/> },
            { v: "0%", l: "Downpayment", i: <BadgePercent size={20}/> }
          ].map((stat, i) => (
            <div key={i} data-aos="zoom-in" data-aos-delay={i*100} className="p-8 bg-white/5 rounded-3xl border border-white/5 text-center flex flex-col items-center">
               <div className="text-yellow-500 mb-2 opacity-50">{stat.i}</div>
               <h3 className="text-3xl font-black text-yellow-500 tracking-tighter italic font-sans">{stat.v}</h3>
               <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest mt-1">{stat.l}</p>
            </div>
          ))}
      </section>

      {/* --- SOLUTIONS CATALOG --- */}
      <section className="py-24 px-6 bg-[#0a0a0a]">
        <div className="mb-12">
            <p className="text-yellow-500 font-bold text-[10px] uppercase tracking-widest mb-2 italic">Product Engineering</p>
            <h2 className="text-4xl font-black tracking-tighter uppercase italic leading-none">The Solar <br/> Matrix</h2>
        </div>

        <div className="space-y-12">
          {solarProducts.map((p, idx) => (
            <div key={idx} data-aos="fade-up" className="relative p-6 bg-white/5 rounded-[2.5rem] border border-white/10 overflow-hidden group">
               <div className="flex flex-col gap-6">
                  <div className="relative h-64 overflow-hidden rounded-3xl">
                     <img src={p.img} alt={p.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
                     <div className="absolute top-6 left-6 bg-yellow-500 text-black p-4 rounded-2xl shadow-xl">
                        {p.icon}
                     </div>
                  </div>
                  <div>
                    <span className="text-yellow-500 font-mono text-[10px] font-black tracking-[0.4em]">ROI: {p.roi}</span>
                    <h3 className="text-2xl font-black uppercase italic my-3 leading-none">{p.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed italic mb-8">"{p.desc}"</p>
                    <button className="w-full py-4 bg-white text-black rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 active:scale-95 transition">
                        Technical Specs <ChevronRight size={14} />
                    </button>
                  </div>
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- RADAR DUMMY MAP --- */}
      <section className="py-24 bg-black relative overflow-hidden">
         <div className="px-8 mb-10 text-center">
            <h2 className="text-4xl font-black uppercase italic tracking-tighter leading-none mb-4">Operations <br/> Command</h2>
            <p className="text-yellow-500 font-black text-[10px] uppercase tracking-widest mb-2">Central Hub • Serving South India</p>
         </div>
         
         <div className="px-4">
            <div className="w-full h-[400px] rounded-[3.5rem] overflow-hidden bg-[#0d0d0d] relative group border border-white/10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1a1a1a_1px,transparent_1px)] bg-[size:30px_30px] opacity-20"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-yellow-500/20 rounded-full animate-ping"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <div className="w-14 h-14 bg-yellow-500 rounded-full flex items-center justify-center text-black shadow-[0_0_50px_rgba(234,179,8,0.5)]">
                        <MapPin size={28} fill="currentColor" />
                    </div>
                    <div className="mt-6 bg-white p-5 rounded-2xl shadow-2xl text-black text-center min-w-[200px]">
                        <p className="text-[9px] font-black text-gray-400 uppercase leading-none mb-1">Central Hub</p>
                        <h5 className="font-black italic text-lg leading-tight">Thudiyalur Road, CBE</h5>
                    </div>
                </div>
                <button className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-black text-[10px] uppercase tracking-widest flex items-center gap-2 shadow-2xl">
                    Full Network <ExternalLink size={12} />
                </button>
            </div>
         </div>
      </section>

      {/* --- JEALOUSY SECTION --- */}
      <section className="py-24 px-8 bg-yellow-500 text-black rounded-[4rem] mx-2 mb-20 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-80 h-80 bg-white/20 rounded-full blur-[120px] opacity-50"></div>
         <div className="relative z-10">
            <h2 className="text-3xl font-black mb-12 leading-none uppercase italic text-center">Solar Mastery</h2>
            <div className="space-y-10">
               {[
                 { t: "Tier-1 Modules", d: "We only use high-efficiency Monocrystalline PERC solar panels.", i: <ShieldCheck size={32} /> },
                 { t: "Live Monitoring", d: "Track your real-time generation on our mobile app.", i: <Smartphone size={32} /> },
                 { t: "Paperwork Desk", d: "End-to-end subsidy handling by our expert team.", i: <Files size={32} /> }
               ].map((item, i) => (
                  <div key={i} data-aos="fade-up" className="flex gap-5 items-start bg-black/5 p-6 rounded-[2.5rem] border border-black/10">
                     <div className="text-black flex-shrink-0">{item.i}</div>
                     <div>
                        <h4 className="font-black text-lg uppercase tracking-tight">{item.t}</h4>
                        <p className="text-sm opacity-70 leading-relaxed font-medium italic">{item.d}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-24 px-10 bg-black text-white font-sans text-center">
        <div className="flex flex-col items-center mb-16">
            <Zap size={48} className="text-yellow-500 mb-6" />
            <h2 className="text-3xl font-black uppercase tracking-[0.2em] mb-4 italic font-sans">SolarPulse</h2>
            <p className="max-w-xs opacity-50 text-[10px] leading-relaxed font-bold uppercase tracking-widest italic">Empowering Tamil Nadu with Renewable Energy since 2016.</p>
        </div>
        <div className="grid grid-cols-2 gap-8 text-left border-y border-white/10 py-12 mb-16">
            <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-yellow-500 mb-2">Office</p>
                <p className="text-[11px] font-bold leading-relaxed italic text-gray-500 uppercase">Energy Square, <br/> Coimbatore - 641029</p>
            </div>
            <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-yellow-500 mb-2">Contact</p>
                <p className="text-[11px] font-bold leading-relaxed italic text-gray-500 uppercase">+91 99000 88000</p>
            </div>
        </div>
        <div className="flex justify-center gap-8 mb-16">
           <Instagram size={24} className="opacity-30 hover:text-yellow-500 transition cursor-pointer" />
           <Linkedin size={24} className="opacity-30 hover:text-blue-500 transition cursor-pointer" />
           <Facebook size={24} className="opacity-30 hover:text-blue-600 transition cursor-pointer" />
        </div>
        <div className="text-[9px] font-black text-white/10 uppercase tracking-[0.8em]">© 2026 SOLARPULSE</div>
      </footer>

      {/* --- STICKY MOBILE ACTION BAR --- */}
      <div className="fixed bottom-0 w-full z-[60] p-4 bg-black/80 backdrop-blur-xl flex gap-3 shadow-2xl border-t border-white/10">
         <button className="flex-1 bg-white text-black py-4 rounded-xl font-black text-[10px] uppercase tracking-widest active:scale-95 transition">
           ROI Calc
         </button>
         <button className="flex-1 bg-yellow-500 text-black py-4 rounded-xl font-black text-[10px] uppercase tracking-widest active:scale-95 transition flex items-center justify-center gap-2">
           <MessageCircle size={14} fill="currentColor" /> Quote
         </button>
      </div>

    </div>
  );
};

export default ClientThirteen;