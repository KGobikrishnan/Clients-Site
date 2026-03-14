import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  Wind, 
  Snowflake, 
  Wrench, 
  Zap, 
  ShieldCheck, 
  Clock, 
  Thermometer, 
  Droplets, 
  Phone, 
  MessageCircle, 
  Instagram, 
  Facebook,
  ChevronRight,
  ShieldAlert,
  Cpu,
  Navigation,
  ExternalLink,
  Award
} from 'lucide-react';

const ClientNine = () => {
  useEffect(() => {
    AOS.init({ 
      duration: 800, 
      once: true,
      easing: 'ease-out-quart' 
    });
  }, []);

  const serviceCategories = [
    { 
      title: "Jet Pump Service", 
      icon: <Droplets size={32} />, 
      desc: "Deep pressure cleaning for indoor & outdoor units to boost cooling by 40%.",
      price: "₹599",
      img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=600"
    },
    { 
      title: "Gas Restoration", 
      icon: <Snowflake size={32} />, 
      desc: "Eco-safe refrigerant top-up with thorough nitrogen pressure leak testing.",
      price: "₹1999",
      img: "https://5.imimg.com/data5/SELLER/Default/2025/1/485152672/SO/MU/KA/135785103/ac-gas-refilling-services-500x500.jpg"
    },
    { 
      title: "PCB Tech Repair", 
      icon: <Cpu size={32} />, 
      desc: "Advanced logic board repairing for Inverter ACs using imported spares.",
      price: "₹899",
      img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=600"
    },
    { 
      title: "Stealth Install", 
      icon: <Navigation size={32} />, 
      desc: "Precision mounting with perfect drainage slope and zero-vibration clamp tech.",
      price: "₹1499",
      img: "https://optcool.in/wp-content/uploads/2025/11/wmremove-transformed-12.jpeg"
    }
  ];

  return (
    <div className="bg-[#f8fbfe] text-slate-900 overflow-x-hidden font-sans pb-24 selection:bg-blue-200">
      
      {/* --- LIVE STATUS BAR --- */}
      <div className="bg-blue-600 text-white text-[10px] font-black text-center py-2 uppercase tracking-[0.3em] sticky top-0 z-[60] shadow-lg">
        ❄️ Summer Rush: 12 Teams Active In Coimbatore | 90-Min Arrival Guaranteed
      </div>

      {/* --- APP-STYLE NAV --- */}
      <nav className="fixed w-full top-8 z-50 bg-white/70 backdrop-blur-xl border-b border-blue-50 px-6 py-5 flex justify-between items-center shadow-xl">
        <h2 className="text-xl font-black tracking-tighter uppercase italic text-blue-700">Frost<span className="text-slate-400 font-normal">Fix</span></h2>
        <a href="tel:+919876543210" className="bg-blue-600 text-white p-2.5 rounded-full active:scale-90 transition shadow-lg shadow-blue-200">
            <Phone size={18} />
        </a>
      </nav>

      {/* --- HERO: THE FROST EXPERIENCE --- */}
      <section className="relative h-[90vh] flex items-end pb-16 px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://www.shutterstock.com/image-photo/smart-ac-on-wall-600nw-2651668011.jpg" alt="AC Service" className="w-full h-full object-cover scale-110 grayscale-[0.5] contrast-125" />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/30 to-transparent"></div>
        </div>
        <div className="relative z-10 w-full text-white">
          <span data-aos="fade-right" className="bg-blue-500 px-3 py-1 rounded-sm text-[10px] font-black uppercase tracking-widest mb-4 inline-block italic">Certified Master Technicians</span>
          <h1 data-aos="fade-up" className="text-6xl font-black mb-6 leading-[0.9] tracking-tighter uppercase italic">Instant <br/> <span className="text-blue-300">Cooling.</span> <br/> Zero Stress.</h1>
          <p data-aos="fade-up" data-aos-delay="200" className="text-sm opacity-80 mb-8 max-w-xs font-medium leading-relaxed italic">Professional AC repair and restoration at your doorstep within 90 minutes. 30-Day peace of mind warranty.</p>
          <div className="flex flex-col gap-3">
             <button className="bg-blue-500 py-4 rounded-sm font-black text-[10px] uppercase tracking-widest shadow-xl active:bg-blue-600 transition">Book Emergency Repair</button>
             <button className="bg-white/10 backdrop-blur-md border border-white/10 py-4 rounded-sm font-black text-[10px] uppercase tracking-widest">Our Price List</button>
          </div>
        </div>
      </section>

      {/* --- STATS: THE CHILL NUMBERS --- */}
      <section className="py-16 px-8 bg-white grid grid-cols-2 gap-6 border-b border-blue-50">
          {[
            { v: "10K+", l: "Units Restored", i: <Zap size={20}/> },
            { v: "90m", l: "Avg Arrival", i: <Clock size={20}/> },
            { v: "30D", l: "Service Warranty", i: <ShieldCheck size={20}/> },
            { v: "15+", l: "Tech Teams", i: <Award size={20}/> }
          ].map((stat, i) => (
            <div key={i} data-aos="zoom-in" data-aos-delay={i*100} className="p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center flex flex-col items-center">
               <div className="text-blue-600 mb-2 opacity-40">{stat.i}</div>
               <h3 className="text-3xl font-black text-blue-700 tracking-tighter italic font-sans">{stat.v}</h3>
               <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">{stat.l}</p>
            </div>
          ))}
      </section>

      {/* --- SOLUTIONS GRID: BOLD & DETAILED --- */}
      <section className="py-24 px-6 bg-[#f0f7ff]">
        <div className="mb-12">
            <p className="text-blue-600 font-bold text-[10px] uppercase tracking-widest mb-2 italic">Expert Solutions</p>
            <h2 className="text-4xl font-black tracking-tighter uppercase italic leading-none">The Frost <br/> Catalog</h2>
        </div>

        <div className="space-y-12">
          {serviceCategories.map((s, idx) => (
            <div key={idx} data-aos="fade-up" className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-blue-50 group">
               <div className="relative h-64 overflow-hidden">
                  <img src={s.img} className="w-full h-full object-cover group-hover:scale-105 transition duration-1000" alt={s.title} />
                  <div className="absolute top-6 left-6 bg-blue-600 text-white p-4 rounded-2xl shadow-xl">
                    {s.icon}
                  </div>
                  <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl text-blue-700 font-black text-lg shadow-lg">
                    {s.price}
                  </div>
               </div>
               <div className="p-8">
                  <h3 className="text-2xl font-black uppercase italic mb-3 text-slate-800">{s.title}</h3>
                  <p className="text-slate-500 text-xs font-medium leading-relaxed mb-8 italic">"{s.desc}"</p>
                  <button className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 active:scale-95 transition shadow-xl shadow-slate-200">
                    Book This Service <ChevronRight size={14} />
                  </button>
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- JEALOUSY SECTION: WHY TRUST US? --- */}
      <section className="py-24 px-8 bg-blue-700 text-white rounded-t-[4rem] mx-2 my-10 relative overflow-hidden shadow-2xl">
         <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500 rounded-full blur-[120px] opacity-30"></div>
         <div className="relative z-10">
            <h2 className="text-3xl font-black mb-12 leading-none uppercase italic text-center text-blue-100">The FrostFix <br/> Standard.</h2>
            <div className="space-y-10">
               {[
                 { t: "No Hidden Costs", d: "Digital invoice provided before starting any part replacement.", i: <ShieldAlert size={36} /> },
                 { v: "Deep Chemical Wash", d: "We use non-toxic coils cleaners that kill 99.9% bacteria and allergens.", i: <Droplets size={36} /> },
                 { t: "Multi-Brand Experts", d: "Certified repair specialists for Daikin, Mitsubishi, LG & Samsung.", i: <Wrench size={36} /> }
               ].map((item, i) => (
                  <div key={i} data-aos="fade-left" className="flex gap-6 items-start bg-white/10 p-6 rounded-3xl border border-white/10 backdrop-blur-sm">
                     <div className="text-blue-200 flex-shrink-0">
                        {item.i}
                     </div>
                     <div>
                        <h4 className="font-black text-lg uppercase tracking-tight">{item.t}</h4>
                        <p className="text-sm opacity-60 leading-relaxed font-medium italic">{item.d}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* --- IMAGE GRID: WORK IN ACTION --- */}
      <section className="py-24 bg-white border-y border-blue-50">
        <div className="px-8 mb-10 text-center">
            <h2 className="text-3xl font-black text-slate-800 uppercase italic tracking-tighter leading-none mb-4">Field <br/> Operations</h2>
            <div className="w-12 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-2 gap-3 px-3">
            {[
              "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=400",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpBiASBap81zAQ9-8FJWhEgUlKxA7ABKrOTw&s",
              "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=400",
              "https://5.imimg.com/data5/EX/IW/NU/SELLER-2573779/ac-installation-ans-maintenance-service-500x500.png"
            ].map((url, i) => (
                <div key={i} data-aos="zoom-in" className={`overflow-hidden rounded-[2rem] shadow-xl border border-blue-50 ${i % 3 === 0 ? 'col-span-2 h-64' : 'h-48'}`}>
                    <img src={url} className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700" alt="Work" />
                </div>
            ))}
        </div>
      </section>

      {/* --- FOOTER: LOCAL FOOTPRINT --- */}
      <footer className="py-24 px-10 text-center bg-slate-950 text-white font-sans overflow-hidden relative">
        <div className="absolute bottom-0 right-0 opacity-5 text-[10rem] font-black italic -mr-20 -mb-10 pointer-events-none uppercase">CHILL</div>
        <div className="flex flex-col items-center text-center mb-16">
            <Wind size={48} className="text-blue-500 mb-6" />
            <h2 className="text-3xl font-black uppercase tracking-[0.2em] mb-4 italic">FrostFix</h2>
            <p className="max-w-xs opacity-50 text-[10px] leading-relaxed font-bold uppercase tracking-widest italic text-center">Certified Cooling Partners in Coimbatore District Since 2012.</p>
        </div>
        
        <div className="grid grid-cols-2 gap-8 text-left border-y border-white/5 py-12 mb-16">
            <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-blue-500 mb-2">Service Hub</p>
                <p className="text-[11px] leading-relaxed opacity-80 italic font-medium">Saibaba Colony, <br/> Coimbatore - 641011</p>
            </div>
            <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-blue-500 mb-2">Connect</p>
                <p className="text-[11px] leading-relaxed opacity-80 italic font-medium">help@frostfix.com <br/> +91 98765 43210</p>
            </div>
        </div>

        <div className="flex justify-center gap-8 mb-16">
           <Instagram size={24} className="opacity-30 hover:text-pink-500 transition cursor-pointer" />
           <Facebook size={24} className="opacity-30 hover:text-blue-500 transition cursor-pointer" />
           <MessageCircle size={24} className="opacity-30 hover:text-green-500 transition cursor-pointer" />
        </div>
        
        <div className="text-[9px] font-black text-white/10 uppercase tracking-[0.8em] text-center pt-10">
          © 2026 FROSTFIX • POWERED BY NAVI
        </div>
      </footer>

      {/* --- MOBILE STICKY ACTION BAR --- */}
      <div className="fixed bottom-0 w-full z-[60] p-4 bg-white/40 backdrop-blur-md flex gap-3 shadow-2xl font-sans border-t border-blue-50">
         <button className="flex-1 bg-slate-900 text-white py-4 rounded-sm font-black text-[10px] uppercase tracking-widest active:scale-95 transition flex items-center justify-center gap-2 shadow-xl">
           <Thermometer size={14} /> Price List
         </button>
         <button className="flex-1 bg-blue-600 text-white py-4 rounded-sm font-black text-[10px] uppercase tracking-widest active:scale-95 transition flex items-center justify-center gap-2">
           <Zap size={14} fill="currentColor" /> Book Now
         </button>
      </div>

    </div>
  );
};

export default ClientNine;