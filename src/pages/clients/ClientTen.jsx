import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  Leaf, 
  Globe, 
  ShieldCheck, 
  Award, 
  Scale, 
  Quote, 
  ArrowUpRight, 
  Instagram, 
  Facebook, 
  Mail,
  MapPin,
  CircleDot,
  Truck,
  Zap,
  Sprout,
  PackageCheck,
  Languages,
  Verified,
  MessageCircle // <-- Added missing import here
} from 'lucide-react';

const ClientTen = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  const premiumSpices = [
    { 
      id: "01",
      title: "Bold Cardamom", 
      type: "Grade: 8mm Deep Green", 
      img: "https://foodcare.in/cdn/shop/files/CARDAMAM.png?v=1768271123",
      desc: "Sourced from the high-altitude plantations of Cumbum Valley. Exceptional aroma and natural color."
    },
    { 
      id: "02",
      title: "Black Gold Pepper", 
      type: "Grade: TGSEB Bold", 
      img: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?q=80&w=800",
      desc: "Sun-dried organic black pepper with high piperine content, specifically for international markets."
    },
    { 
      id: "03",
      title: "Malabar Nutmeg", 
      type: "Whole w/o Shell", 
      img: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=800",
      desc: "Aromatic nutmeg seeds harvested at the peak of maturity for maximum oil retention."
    }
  ];

  return (
    <div className="bg-[#fdfcf9] text-[#1a2414] overflow-x-hidden font-serif selection:bg-[#4a5d23] selection:text-white pb-24">
      
      {/* --- LOGISTICS TICKER --- */}
      <div className="bg-[#1a2414] text-[#a3c293] text-[9px] font-black text-center py-2 uppercase tracking-[0.3em] sticky top-0 z-[60] border-b border-white/5">
        🌍 Port Dispatch: Cochin & Tuticorin | Harvesting Season: 2026 Active | APEDA Certified
      </div>

      {/* --- PREMIUM NAVBAR --- */}
      <nav className="fixed w-full top-8 z-50 bg-white/70 backdrop-blur-xl border-b border-[#e2e8f0] px-8 py-5 flex justify-between items-center shadow-sm">
        <h2 className="text-xl font-bold tracking-[0.3em] uppercase text-[#1a2414]">THENI<span className="font-light italic text-[#4a5d23]">GOLD</span></h2>
        <div className="flex gap-4 items-center">
            <div className="w-10 h-10 rounded-full bg-[#1a2414] flex items-center justify-center shadow-lg active:scale-90 transition">
                <Leaf size={18} className="text-green-400" />
            </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative h-[95vh] flex items-end pb-20 px-8 overflow-hidden bg-[#1a2414]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://cdn.mos.cms.futurecdn.net/JRmnphiD6EG2NAzshoFa9U.jpg" 
            alt="Spice Hills" 
            className="w-full h-full object-cover opacity-60 scale-110 motion-safe:animate-[pulse_10s_infinite]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a2414] via-[#1a2414]/20 to-transparent"></div>
        </div>
        
        <div className="relative z-10 w-full text-white">
          <span data-aos="fade-right" className="bg-[#4a5d23] text-green-100 px-3 py-1 rounded-sm text-[10px] font-bold uppercase tracking-widest mb-6 inline-block border border-green-500/30">
            Western Ghats Export House
          </span>
          <h1 data-aos="fade-up" className="text-6xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter uppercase italic font-serif">
            Nature's <br/> <span className="text-[#a3c293]">Essence.</span>
          </h1>
          <div className="flex flex-col gap-3">
             <button className="bg-[#a3c293] text-[#1a2414] py-4 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-xl active:bg-green-300 transition">Download Price List</button>
             <button className="bg-white/5 backdrop-blur-md border border-white/20 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest active:bg-white/10 transition">The Valley Story</button>
          </div>
        </div>
      </section>

      {/* --- EXPORT PRIDE METRICS --- */}
      <section className="py-16 px-8 bg-white grid grid-cols-2 gap-4 border-b border-[#e2e8f0]">
          {[
            { v: "15+", l: "Countries", i: <Globe size={20}/> },
            { v: "500T", l: "Annual Yield", i: <Truck size={20}/> },
            { v: "FSSAI", l: "Quality Code", i: <ShieldCheck size={20}/> },
            { v: "8mm", l: "Gold Grade", i: <Zap size={20}/> }
          ].map((stat, i) => (
            <div key={i} data-aos="zoom-in" data-aos-delay={i*100} className="p-8 bg-[#fdfcf9] rounded-[2.5rem] border border-[#e2e8f0] text-center flex flex-col items-center shadow-sm">
               <div className="text-[#4a5d23] mb-2 opacity-40">{stat.i}</div>
               <h3 className="text-3xl font-black text-[#1a2414] tracking-tighter italic">{stat.v}</h3>
               <p className="text-[9px] font-bold text-stone-400 uppercase tracking-widest mt-1">{stat.l}</p>
            </div>
          ))}
      </section>

      {/* --- THE SIGNATURE RANGE --- */}
      <section className="py-24 px-6 bg-[#fdfcf9]">
        <div className="mb-16">
            <h2 className="text-4xl font-black tracking-tighter uppercase italic leading-none text-[#1a2414]">The Spice <br/> <span className="text-[#4a5d23]">Inventory</span></h2>
            <div className="h-1 w-16 bg-[#4a5d23] mt-4"></div>
        </div>

        <div className="space-y-16">
          {premiumSpices.map((item, idx) => (
            <div key={idx} data-aos="fade-up" className="group">
                <div className="relative h-96 overflow-hidden rounded-[3rem] shadow-2xl mb-8">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-1000" />
                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black uppercase text-[#1a2414] shadow-sm">
                        {item.type}
                    </div>
                </div>
                <div className="px-2">
                    <h3 className="text-3xl font-black tracking-tight mb-3 uppercase italic text-[#1a2414]">{item.title}</h3>
                    <p className="text-stone-500 text-sm font-medium leading-relaxed mb-8 italic">"{item.desc}"</p>
                    <button className="w-full py-5 bg-[#1a2414] text-white rounded-2xl font-black text-[10px] uppercase tracking-widest active:scale-95 transition shadow-xl">Get Wholesale Quote</button>
                </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- HARVEST STORY --- */}
      <section className="py-24 px-8 bg-[#1a2414] text-white rounded-[4rem] mx-2 my-10 relative overflow-hidden shadow-2xl">
         <div className="absolute top-0 right-0 w-80 h-80 bg-[#4a5d23] rounded-full blur-[120px] opacity-20"></div>
         <div className="relative z-10">
            <h2 className="text-4xl font-black mb-12 leading-none uppercase italic text-[#a3c293] text-center font-serif">The Theni <br/> Advantage.</h2>
            <div className="space-y-12">
               {[
                 { t: "Cumbum Micro-Climate", d: "Naturally cultivated in the fertile humidity of the Western Ghats, ensuring oil-rich seeds.", i: <Sprout size={36} /> },
                 { t: "Vacuum Lock Packing", d: "Every batch is sealed in ISO-grade vacuum bags to retain aroma for 12+ months.", i: <PackageCheck size={36} /> },
                 { t: "Direct Yard Sourcing", d: "No middlemen. Direct procurement from Theni auction centers for best pricing.", i: <Verified size={36} /> }
               ].map((item, i) => (
                  <div key={i} data-aos="fade-left" className="flex gap-6 items-start">
                     <div className="text-[#a3c293] mt-1">{item.i}</div>
                     <div>
                        <h4 className="font-bold text-xl uppercase tracking-tight mb-2 font-sans">{item.t}</h4>
                        <p className="text-sm opacity-60 leading-relaxed font-medium italic">"{item.d}"</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-24 px-10 bg-white text-[#1a2414] font-sans border-t border-stone-100 text-center">
        <div className="flex flex-col items-center mb-16">
            <Leaf size={48} className="text-[#4a5d23] mb-6" />
            <h2 className="text-3xl font-black uppercase tracking-[0.2em] mb-4 italic text-[#1a2414]">Theni Gold</h2>
            <p className="max-w-xs opacity-50 text-[10px] leading-relaxed font-bold uppercase tracking-widest italic">Supplying the World's Best Spices from the heart of Theni District.</p>
        </div>
        
        <div className="grid grid-cols-2 gap-8 text-left border-y border-stone-50 py-12 mb-16">
            <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-[#4a5d23] mb-2">Primary Yard</p>
                <p className="text-[11px] leading-relaxed italic text-stone-600">Main Road, Cumbum Valley, <br/> Theni District - 625516</p>
            </div>
            <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-[#4a5d23] mb-2">Registered HQ</p>
                <p className="text-[11px] leading-relaxed italic text-stone-600">export@thenigold.com <br/> +91 99000 77000</p>
            </div>
        </div>

        <div className="flex justify-center gap-8 mb-16">
           <Instagram size={24} className="opacity-30 hover:text-pink-500 transition cursor-pointer" />
           <Facebook size={24} className="opacity-30 hover:text-blue-500 transition cursor-pointer" />
           <Mail size={24} className="opacity-30 hover:text-red-500 transition cursor-pointer" />
        </div>
        
        <div className="text-[9px] font-black text-stone-200 uppercase tracking-[0.8em] pt-10">
          © 2026 THENI GOLD SPICES • QUALITY REDEFINED
        </div>
      </footer>

      {/* --- STICKY MOBILE ACTION BAR --- */}
      <div className="fixed bottom-0 w-full z-[60] p-4 bg-white/60 backdrop-blur-xl flex gap-3 shadow-2xl font-sans border-t border-stone-100">
         <button className="flex-1 bg-[#1a2414] text-white py-4 rounded-xl font-black text-[10px] uppercase tracking-widest active:scale-95 transition">
           Bulk Inquiry
         </button>
         <button className="flex-1 bg-[#4a5d23] text-white py-4 rounded-xl font-black text-[10px] uppercase tracking-widest active:scale-95 transition flex items-center justify-center gap-2">
           <MessageCircle size={14} fill="currentColor" /> WhatsApp
         </button>
      </div>

    </div>
  );
};

export default ClientTen;