import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  Wind, 
  ShieldAlert, 
  Droplets, 
  ThermometerSnowflake, 
  VolumeX, 
  Home, 
  CheckCircle2, 
  ArrowRight, 
  Phone, 
  MessageCircle, 
  Instagram, 
  Facebook,
  Hammer,
  Award,
  Zap,
  Maximize
} from 'lucide-react';

const ClientFive = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
      easing: 'ease-in-out',
    });
  }, []);

  const solutions = [
    { 
      name: "Casement Windows", 
      tag: "Maximum Airflow",
      desc: "Traditional open-out design with multi-point locking. Perfect for high-rise buildings in windy areas.",
      img: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=800" 
    },
    { 
      name: "Sliding Systems", 
      tag: "Space Saver",
      desc: "Smooth glide technology with high-grade rollers. Ideal for balconies and deck entries.",
      img: "https://assets.bldnxt.in/catalog/product/cache/1/image/a77c1558d860704591e3027d1ebed402/_/o/_onon834570_5f11b2a7a5292.jpg" 
    },
    { 
      name: "Villa Windows", 
      tag: "Built-in Security",
      desc: "Integrated grill and bug mesh system. Safety without compromising the aesthetic view.",
      img: "https://5.imimg.com/data5/SC/BJ/OW/SELLER-37055091/upvc-villa-window.jpg" 
    },
    { 
      name: "Tilt & Turn", 
      tag: "European Style",
      desc: "Dual action hardware for controlled ventilation and easy cleaning from inside.",
      img: "https://images.unsplash.com/photo-1503708928676-1cb796a0891e?q=80&w=800" 
    }
  ];

  const galleryGrid = [
    "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=600",
    "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?q=80&w=600",
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=600",
    "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=600"
  ];

  return (
    <div className="bg-[#fcfcfc] text-slate-900 overflow-x-hidden font-sans pb-24 selection:bg-cyan-100">
      
      {/* --- GLASS NAVBAR --- */}
      <nav className="fixed w-full top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-100 px-6 py-4 flex justify-between items-center shadow-sm">
        <h2 className="text-xl font-black tracking-tighter uppercase text-cyan-600 italic">Clear<span className="text-slate-400">View</span></h2>
        <div className="flex gap-3">
            <div className="w-10 h-10 rounded-full bg-cyan-600 text-white flex items-center justify-center shadow-lg active:scale-90 transition">
                <Hammer size={18} />
            </div>
        </div>
      </nav>

      {/* --- HERO: ARCHITECTURAL IMPACT --- */}
      <section className="relative h-[90vh] flex items-end pb-16 px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1600" 
            alt="Interior" 
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent"></div>
        </div>
        
        <div className="relative z-10 w-full">
          <p data-aos="fade-right" className="text-cyan-600 font-black text-[10px] uppercase tracking-[0.4em] mb-4 flex items-center gap-2">
            <Award size={14} /> German Engineered UPVC Systems
          </p>
          <h1 data-aos="fade-up" className="text-5xl font-black mb-6 leading-tight tracking-tighter uppercase italic">Shut the <br/> <span className="text-cyan-600">Noise Out.</span></h1>
          <div className="flex flex-col gap-3">
             <button className="bg-cyan-600 py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-[0_0_30px_rgba(8,145,178,0.3)] active:bg-cyan-700 transition">Get Free Site Audit</button>
             <button className="bg-slate-900 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest">Explore Solutions</button>
          </div>
        </div>
      </section>

      {/* --- PERFORMANCE GRID: WHY UPVC? --- */}
      <section className="py-16 px-8 grid grid-cols-2 gap-4 bg-white">
          {[
            { t: "40dB Noise Cut", i: <VolumeX size={28}/> },
            { t: "Energy Saving", i: <ThermometerSnowflake size={28}/> },
            { t: "Storm Proof", i: <Wind size={28}/> },
            { t: "UV Resistant", i: <Zap size={28}/> }
          ].map((item, i) => (
            <div key={i} data-aos="zoom-in" data-aos-delay={i*100} className="p-6 bg-slate-50 rounded-[2.5rem] border border-slate-100 text-center flex flex-col items-center">
               <div className="text-cyan-600 mb-3">{item.i}</div>
               <h4 className="font-black text-[10px] uppercase tracking-tighter leading-tight text-slate-500">{item.t}</h4>
            </div>
          ))}
      </section>

      {/* --- STORY SECTION: THE COMPARISON --- */}
      <section className="py-24 px-8">
         <div className="flex flex-col gap-10">
            <div data-aos="fade-right">
                <p className="text-cyan-600 font-black text-[10px] uppercase tracking-widest mb-2">Build for a Lifetime</p>
                <h2 className="text-4xl font-black tracking-tighter leading-tight uppercase italic text-slate-800">Why Settle <br/> for Wood?</h2>
            </div>
            <div className="relative" data-aos="zoom-in">
               <img src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=800" className="rounded-[3.5rem] shadow-2xl" alt="Comparison" />
               <div className="absolute -bottom-6 -right-4 bg-slate-900 text-white p-6 rounded-3xl shadow-xl">
                  <p className="font-black text-2xl tracking-tighter text-cyan-400 italic">20+ Years</p>
                  <p className="text-[10px] font-bold uppercase leading-none opacity-60">Maintenance Free</p>
               </div>
            </div>
            <p data-aos="fade-up" className="text-slate-500 font-medium leading-loose text-sm italic">
                Traditional wood warps, rots, and needs painting every 2 years. Our German-tech UPVC is termite-proof, fire-retardant, and stays white for decades. The choice of modern architects in Theni.
            </p>
         </div>
      </section>

      {/* --- SOLUTIONS GRID: VERTICAL SCROLL --- */}
      <section className="py-20 px-6 bg-slate-50 rounded-[4rem] mx-2">
        <div className="text-center mb-16">
            <p className="text-cyan-600 font-black text-[10px] uppercase tracking-widest mb-2">Premium Fenestration</p>
            <h2 data-aos="fade-up" className="text-3xl font-black tracking-tighter uppercase italic leading-none">The Luxury <br/> Collection</h2>
        </div>

        <div className="space-y-12">
          {solutions.map((item, idx) => (
            <div key={idx} data-aos="fade-up" className="bg-white rounded-[3rem] overflow-hidden shadow-sm border border-slate-100 group">
                <div className="relative h-72 overflow-hidden">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-1000" />
                    <div className="absolute top-6 left-6 bg-cyan-600 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">{item.tag}</div>
                </div>
                <div className="p-8">
                    <h3 className="text-2xl font-black tracking-tight mb-3 uppercase italic text-slate-800 flex items-center justify-between">
                        {item.name} <Maximize size={18} className="text-slate-200" />
                    </h3>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed mb-8">{item.desc}</p>
                    <button className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-lg active:scale-95 transition">Get Quote</button>
                </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- HORIZONTAL PORTFOLIO --- */}
      <section className="py-24 bg-white">
        <div className="px-8 mb-8 flex justify-between items-end">
            <h2 className="text-3xl font-black tracking-tighter uppercase italic">Recent <br/> Installs</h2>
            <div className="text-cyan-600 font-black text-[10px] uppercase flex items-center gap-2 border-b-2 border-cyan-100 pb-1">
                View All <ArrowRight size={14} />
            </div>
        </div>
        <div className="flex overflow-x-auto gap-4 px-8 no-scrollbar snap-x">
           {galleryGrid.map((img, i) => (
             <div key={i} className="flex-shrink-0 w-[80vw] aspect-[4/3] rounded-[3rem] overflow-hidden snap-center shadow-xl border border-slate-100">
                <img src={img} loading="lazy" className="w-full h-full object-cover" alt="Installation" />
             </div>
           ))}
        </div>
      </section>

      {/* --- TECHNICAL SPECS (Jealousy Section) --- */}
      <section className="py-24 px-8 bg-slate-900 text-white rounded-[4rem] mx-2 my-10 relative overflow-hidden shadow-2xl">
         <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-600 rounded-full blur-[120px] opacity-20"></div>
         <div className="relative z-10">
            <h2 className="text-3xl font-black mb-12 leading-none uppercase italic text-center">The ClearView <br/> <span className="text-cyan-400">Blueprint.</span></h2>
            <div className="space-y-10">
               {[
                 { t: "Rain Drainage System", d: "Built-in tracks to ensure zero water leakage even in heavy Cumbum monsoons.", i: <Droplets size={32} /> },
                 { t: "Multi-Point Locking", d: "Maximum security with hardware imported from Germany.", i: <ShieldAlert size={32} /> },
                 { t: "Fusion Welded Joints", d: "No gaps, no dust, and superior structural strength.", i: <CheckCircle2 size={32} /> }
               ].map((item, i) => (
                  <div key={i} data-aos="fade-left" className="flex gap-5 items-start bg-white/5 p-6 rounded-3xl border border-white/10 backdrop-blur-md">
                     <div className="text-cyan-400 flex-shrink-0">
                        {item.i}
                     </div>
                     <div>
                        <h4 className="font-black text-lg uppercase tracking-tight">{item.t}</h4>
                        <p className="text-sm opacity-60 leading-relaxed font-medium">{item.d}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* --- FOOTER: LOCAL FOOTPRINT --- */}
      <footer className="py-24 px-10 text-center bg-white border-t border-slate-100">
        <h2 className="text-3xl font-black text-cyan-600 italic tracking-tighter uppercase mb-4 leading-none">ClearView <br/> <span className="text-slate-300">UPVC Windows</span></h2>
        
        <div className="flex justify-center gap-5 mb-12">
           <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-blue-600 border border-slate-100 active:scale-90 transition">
             <Facebook size={20} />
           </div>
           <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-pink-500 border border-slate-100 active:scale-90 transition">
             <Instagram size={20} />
           </div>
           <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-green-600 border border-slate-100 active:scale-90 transition">
             <MessageCircle size={20} />
           </div>
        </div>

        <div className="space-y-4 mb-16 px-6 py-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 text-left">
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Corporate Office</p>
              <p className="text-xs font-bold leading-relaxed italic text-slate-800 uppercase">102, Windows Plaza, Coimbatore Road,<br/> Theni District - 625531</p>
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Support Hub</p>
              <p className="text-sm font-black text-cyan-600 tracking-tight">+91 99887 76655</p>
            </div>
        </div>
        
        <div className="text-[9px] font-black text-slate-200 uppercase tracking-[0.5em] border-t border-slate-50 pt-10">
          © 2026 CLEARVIEW UPVC • NAVI PROMOTIONS
        </div>
      </footer>

      {/* --- MOBILE STICKY ACTION BAR --- */}
      <div className="fixed bottom-0 w-full z-[60] bg-white/40 backdrop-blur-xl border-t border-slate-100 p-4 flex gap-3 shadow-2xl">
         <button className="flex-1 bg-slate-900 text-white py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest active:scale-95 transition">Request Quote</button>
         <button className="flex-1 bg-cyan-600 text-white py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 active:scale-95 transition">
           <MessageCircle size={14} /> WhatsApp 
         </button>
      </div>

    </div>
  );
};

export default ClientFive;