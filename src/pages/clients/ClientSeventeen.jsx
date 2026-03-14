import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  Droplet, 
  Leaf, 
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
  ShoppingBag,
  FlameKindling,
  History,
  MessageCircle,
  TrendingDown,
  Award
} from 'lucide-react';

const ClientSeventeen = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-quart',
    });
  }, []);

  const premiumOils = [
    { 
      id: "OIL-01",
      title: "Vagai Wood Groundnut", 
      cat: "Rich Protein", 
      desc: "Slow-pressed in Vaagai wood to retain natural Vitamin E and deep nutty aroma.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd7BvpyR-XVUVhP3ax_R4Yyc6lPsYjokGI-w&s",
      temp: "< 38°C"
    },
    { 
      id: "OIL-02",
      title: "Artisan Sesame", 
      cat: "Heart Gold", 
      desc: "Blended with traditional palm jaggery for that authentic black gingelly flavor.",
      img: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?q=80&w=800",
      temp: "< 35°C"
    },
    { 
      id: "OIL-03",
      title: "Sun-Dried Coconut", 
      cat: "Immunity Booster", 
      desc: "Extracted from sulphur-free copras for a crystal clear, edible grade purity.",
      img: "https://5.imimg.com/data5/ANDROID/Default/2024/3/398788415/YX/AB/FK/211809733/product-jpeg-500x500.jpg",
      temp: "< 40°C"
    }
  ];

  return (
    <div className="bg-[#fcfaf2] text-[#2d241e] overflow-x-hidden font-sans pb-24 selection:bg-amber-200 selection:text-amber-900">
      
      {/* --- PURITY TICKER --- */}
      <div className="bg-[#412e1a] text-amber-200 text-[9px] font-black text-center py-2.5 uppercase tracking-[0.4em] sticky top-0 z-[60] border-b border-white/5 shadow-xl">
        🌿 100% Marachekku Extraction • No Sulphur • Natural Sedimentation Active 
      </div>

      {/* --- VEDIC NAV --- */}
      <nav className="fixed w-full top-9 z-50 bg-white/70 backdrop-blur-2xl border-b border-amber-100 px-6 py-4 flex justify-between items-center shadow-lg">
        <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-amber-700 rounded-full flex items-center justify-center shadow-xl">
                <Droplet size={20} className="text-amber-100 fill-amber-100/20" />
            </div>
            <h2 className="text-xl font-black tracking-tighter uppercase italic text-[#412e1a]">Vedic<span className="text-amber-700 font-sans">Oils</span></h2>
        </div>
        <a href="https://wa.me/919900044000" className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center active:scale-90 transition shadow-lg">
            <MessageCircle size={18} />
        </a>
      </nav>

      {/* --- HERO: THE WOODEN LEGACY --- */}
      <section className="relative h-[95vh] flex items-end pb-20 px-8 overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHZrT6r07jQXzQnY1DFVyvZOVaJt-9jDDYYQ&s" alt="Oil Pour" className="w-full h-full object-cover scale-110 opacity-30 blur-[2px]" />
          {/* Subtle Wood Texture Overlay */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#fcfaf2] via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 w-full">
          <span data-aos="fade-right" className="bg-amber-700 text-amber-100 px-3 py-1 rounded-sm text-[10px] font-black uppercase tracking-widest mb-6 inline-block shadow-lg">
            Ancient Vaagai Wood Press
          </span>
          <h1 data-aos="fade-up" className="text-6xl md:text-[10rem] font-black mb-6 leading-[0.85] tracking-tighter uppercase italic text-[#412e1a] font-serif">
            Pure <br/> <span className="text-amber-700 underline decoration-amber-200">Essence.</span>
          </h1>
          <p data-aos="fade-up" data-aos-delay="200" className="text-sm text-stone-500 mb-8 max-w-xs font-medium leading-relaxed italic">Reviving the "Uyar Sakthi" of traditional oils. No heat, no chemicals, just nature's gold.</p>
          <div className="flex flex-col gap-3">
             <button className="bg-[#412e1a] text-white py-4 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-2xl active:bg-amber-900 transition">Shop Fresh Batch</button>
             <button className="bg-white border-2 border-amber-700 text-amber-700 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest active:scale-95 transition">Extraction Process</button>
          </div>
        </div>
      </section>

      {/* --- QUALITY STATS: THE TRUTH --- */}
      <section className="py-16 px-8 bg-white grid grid-cols-2 gap-4 border-y border-amber-50">
          {[
            { v: "100%", l: "Wood Pressed", i: <FlameKindling size={20}/> },
            { v: "0%", l: "Sulfur/Paraffin", i: <ShieldCheck size={20}/> },
            { v: "< 40°C", l: "Press Temp", i: <Activity size={20}/> },
            { v: "Direct", l: "Farmer Sourced", i: <History size={20}/> }
          ].map((stat, i) => (
            <div key={i} data-aos="zoom-in" data-aos-delay={i*100} className="p-8 bg-amber-50/50 rounded-[2.5rem] border border-amber-100 text-center flex flex-col items-center">
               <div className="text-amber-700 mb-2 opacity-50">{stat.i}</div>
               <h3 className="text-3xl font-black text-[#412e1a] tracking-tighter italic font-serif">{stat.v}</h3>
               <p className="text-[9px] font-bold text-stone-400 uppercase tracking-widest mt-1">{stat.l}</p>
            </div>
          ))}
      </section>

      {/* --- OIL MATRIX: ARTISAN CARDS --- */}
      <section className="py-24 px-6 bg-[#fcfaf2]">
        <div className="mb-16">
            <p className="text-amber-700 font-bold text-[10px] uppercase tracking-widest mb-2 italic">Artisan Inventory</p>
            <h2 className="text-4xl font-black tracking-tighter uppercase italic leading-none text-[#412e1a]">Nature's <br/> Liquid Gold</h2>
        </div>

        <div className="space-y-12">
          {premiumOils.map((item, idx) => (
            <div key={idx} data-aos="fade-up" className="relative group overflow-hidden rounded-[3rem] bg-white border border-amber-100 shadow-xl shadow-amber-900/5">
               <div className="relative h-[450px] overflow-hidden">
                  <img src={item.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition duration-1000" alt={item.title} />
                  <div className="absolute top-6 left-6 bg-amber-700 text-white p-4 rounded-2xl shadow-xl">
                    <Droplet size={24} />
                  </div>
                  <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl border border-amber-100 font-mono text-[10px] font-black">
                     TEMP: {item.temp}
                  </div>
               </div>
               <div className="p-8">
                  <span className="text-amber-700 font-mono text-[10px] font-black uppercase tracking-widest mb-2 block">{item.id}</span>
                  <p className="text-stone-400 font-bold text-[9px] uppercase tracking-widest mb-1">{item.cat}</p>
                  <h3 className="text-3xl font-black uppercase italic leading-none text-[#412e1a] mb-4">{item.title}</h3>
                  <p className="text-stone-500 text-xs leading-relaxed italic mb-8">"{item.desc}"</p>
                  <button className="w-full py-5 bg-[#412e1a] text-white rounded-2xl font-black text-[10px] uppercase tracking-widest active:scale-95 transition flex items-center justify-center gap-2 shadow-xl shadow-stone-200">
                    Order on WhatsApp <ChevronRight size={14} />
                  </button>
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- TRADITION VS MODERN (Jealousy Section) --- */}
      <section className="py-24 px-8 bg-[#412e1a] text-white rounded-t-[4rem] mx-2 my-10 relative overflow-hidden shadow-2xl border-t border-amber-500/20">
         <div className="absolute top-0 right-0 w-80 h-80 bg-amber-700 rounded-full blur-[120px] opacity-20"></div>
         <div className="relative z-10">
            <h2 className="text-4xl font-black mb-16 leading-none uppercase italic text-amber-200 text-center font-serif">The Purity <br/> Code.</h2>
            <div className="space-y-12">
               {[
                 { t: "No Sulphur Copras", d: "Naturally sun-dried for 15 days. No chemicals used for preservation.", i: <Zap size={32} /> },
                 { t: "Vagai Wood Extraction", d: "Wood absorbs the friction heat, keeping the oil cold and nutrient-rich.", i: <FlameKindling size={32} /> },
                 { t: "Natural Sedimentation", d: "We don't use high-speed filters. We let the oil sit for 4 days to settle naturally.", i: <Activity size={32} /> }
               ].map((item, i) => (
                  <div key={i} data-aos="fade-left" className="flex gap-6 items-start bg-white/5 p-6 rounded-3xl border border-white/10 backdrop-blur-md">
                     <div className="text-amber-500 mt-1">{item.i}</div>
                     <div>
                        <h4 className="font-black text-xl uppercase tracking-tight mb-2">{item.t}</h4>
                        <p className="text-sm opacity-60 leading-relaxed font-medium italic">"{item.d}"</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* --- THE "OIL DROP" DUMMY MAP SECTION --- */}
      <section className="py-24 bg-[#fcfaf2] relative overflow-hidden font-sans">
         <div className="px-8 mb-10 text-center md:text-left">
            <h2 className="text-4xl font-black uppercase italic tracking-tighter leading-none mb-4 text-[#412e1a]">Locate Our <br/> Mill Yard</h2>
            <p className="text-amber-700 font-black text-[10px] uppercase tracking-widest mb-2 italic">Kangayam Hub • Tamil Nadu</p>
         </div>
         
         <div className="px-4">
            <div className="w-full h-[400px] rounded-[3.5rem] overflow-hidden bg-white relative group border-4 border-amber-50 flex items-center justify-center shadow-inner">
                {/* --- ARTISTIC OIL DROP MAP UI --- */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#fef3c7_1px,transparent_1px)] bg-[size:25px_25px] opacity-40"></div>
                
                {/* Thick Oil Drop Ripple Design */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-amber-100/20 rounded-full animate-[pulse_5s_infinite]"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] border-2 border-amber-200/40 rounded-full"></div>

                {/* Location Marker */}
                <div className="relative z-10 flex flex-col items-center">
                    <div className="w-16 h-16 bg-amber-700 rounded-full flex items-center justify-center text-white shadow-[0_0_60px_rgba(180,83,9,0.4)]">
                        <MapPin size={32} fill="currentColor" />
                    </div>
                    <div className="mt-6 bg-[#412e1a] p-5 rounded-2xl shadow-2xl text-white text-center min-w-[220px] border border-white/10">
                        <p className="text-[9px] font-black text-amber-500 uppercase leading-none mb-1">Traditional Mill HQ</p>
                        <h5 className="font-black italic text-lg leading-tight uppercase">Temple Road, Kangayam</h5>
                        <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-center gap-2">
                           <span className="text-[8px] font-black uppercase text-green-400">Pressing Active</span>
                           <Activity size={10} className="text-amber-500" />
                        </div>
                    </div>
                </div>

                <button className="absolute bottom-10 bg-white text-[#412e1a] px-8 py-3 rounded-full font-black text-[10px] uppercase tracking-widest flex items-center gap-2 shadow-2xl active:scale-95 transition border border-amber-100">
                    Open Navigation <ExternalLink size={12} />
                </button>
            </div>
         </div>
      </section>

      {/* --- FOOTER: THE EARTHY MILL CARD --- */}
      <footer className="py-24 px-10 bg-white text-[#412e1a] font-sans overflow-hidden relative border-t border-amber-50 text-center">
        <div className="absolute bottom-0 right-0 opacity-5 text-[15rem] font-black italic -mr-20 -mb-20 pointer-events-none uppercase text-amber-900">VEDIC</div>
        <div className="flex flex-col items-center mb-16">
            <Droplet size={48} className="text-amber-700 mb-6" />
            <h2 className="text-3xl font-black uppercase tracking-[0.2em] mb-4 italic text-[#412e1a] leading-none font-serif">Vedic Oils</h2>
            <p className="max-w-xs opacity-50 text-[10px] leading-relaxed font-bold uppercase tracking-widest italic text-center font-sans">Artisan Wood Pressed Extraction • Reviving Traditional Health since 2018.</p>
        </div>
        
        <div className="grid grid-cols-2 gap-8 text-left border-y border-amber-50 py-12 mb-16 font-sans">
            <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-amber-700 mb-2">The Mill</p>
                <p className="text-[11px] font-bold leading-relaxed italic text-stone-500 uppercase">12, Temple Road, <br/> Kangayam, TN - 638701</p>
            </div>
            <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-amber-700 mb-2">Support</p>
                <p className="text-[11px] font-bold leading-relaxed italic text-stone-500 uppercase">shop@vedicoils.com <br/> +91 99000 44000</p>
            </div>
        </div>

        <div className="flex justify-center gap-8 mb-16">
           <Instagram size={24} className="opacity-30 hover:text-pink-500 transition cursor-pointer" />
           <Facebook size={24} className="opacity-30 hover:text-blue-500 transition cursor-pointer" />
           <MessageCircle size={24} className="opacity-30 hover:text-green-500 transition cursor-pointer" />
        </div>
        
        <div className="text-[9px] font-black text-stone-300 uppercase tracking-[0.8em] pt-10">
          © 2026 VEDIC OILS • UNFILTERED PURITY
        </div>
      </footer>

      {/* --- STICKY MOBILE ACTION BAR --- */}
      <div className="fixed bottom-0 w-full z-[60] p-4 bg-white/60 backdrop-blur-xl flex gap-3 shadow-2xl font-sans border-t border-amber-50">
         <button className="flex-1 bg-[#412e1a] text-white py-4 rounded-xl font-black text-[10px] uppercase tracking-widest active:scale-95 transition flex items-center justify-center gap-2">
           <ShoppingBag size={14} /> Shop Now
         </button>
         <button className="flex-1 bg-amber-700 text-white py-4 rounded-xl font-black text-[10px] uppercase tracking-widest active:scale-95 transition flex items-center justify-center gap-2 shadow-xl shadow-amber-900/20">
           <MessageCircle size={14} fill="currentColor" /> WhatsApp
         </button>
      </div>

    </div>
  );
};

export default ClientSeventeen;