import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  Globe, Ship, Leaf, ShieldCheck, Award, Clock, 
  PackageCheck, ChevronRight, Zap, Truck, Instagram, 
  Facebook, MessageCircle, Phone, MapPin, ExternalLink 
} from 'lucide-react';

const ClientSeven = () => {
  useEffect(() => {
    AOS.init({ 
      duration: 800, 
      once: true,
      easing: 'ease-out-back' 
    });
  }, []);

  const productList = [
    { 
      name: "Semi-Husked Coconut", 
      specs: "Weight: 550g - 650g | Maturity: 100%", 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe1EeHCbE_pmkyc-yPVQ5emAcnjHaO8kWtYw&s",
      use: "Ideal for retail & culinary use globally."
    },
    { 
      name: "Mature Full-Husked", 
      specs: "Long Shelf Life | High Oil Content", 
      img: "https://5.imimg.com/data5/SELLER/Default/2025/6/517577235/FI/IP/OX/244202733/rr-500x500.jpg",
      use: "Perfect for industrial milk & oil extraction."
    },
    { 
      name: "Coconut Coir Fiber", 
      specs: "Low EC | High Water Retention", 
      img: "https://tiimg.tistatic.com/fp/1/003/377/coconut-coir-770.jpg",
      use: "Export grade for global Horticulture projects."
    },
    { 
      name: "Desiccated Powder", 
      specs: "Fine/Medium Grade | Sulphur Free", 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdxhInW32OqmveCjoinsbQtCUPa9r0sjSEXg&s",
      use: "Bakery standard for Europe & Middle East markets."
    }
  ];

  const yardGallery = [
    { url: "https://5.imimg.com/data5/ANDROID/Default/2023/6/316232654/XT/UB/JK/5275592/product-jpeg-500x500.jpg", title: "Harvest Processing" },
    { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ17J9WFvMNccBaq3E4ep5ZS-7dJ3iyPWLrqA&s", title: "Quality Grading" },
    { url: "https://content.jdmagicbox.com/comp/pollachi/n2/pwfl1526131160t4t7n2/catalogue/69a4acc893a069c94285aba6098c856b-hobu5rt.jpg", title: "Loading Dock" },
    { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxN_qMUm9N9LT-2E3RZ3t9v3R9Z4EsTpe_jw&s", title: "Export Packing" },
    { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLWfciBGTtCUGQIbDHqhqXfRAgUvOUE8uE7Q&s", title: "Global Shipping" },
    { url: "https://tiimg.tistatic.com/fp/1/006/751/fresh-green-tender-coconut-865.jpg", title: "Primary Storage" }
  ];

  return (
    <div className="bg-[#fcfaf7] text-[#2d241e] overflow-x-hidden font-sans pb-24 selection:bg-green-100">
      
      {/* --- EXPORT STRIP --- */}
      <div className="bg-[#1a4731] text-green-400 text-[9px] font-black text-center py-2 uppercase tracking-[0.3em] sticky top-0 z-[60] border-b border-green-900/50">
        🚢 Current Shipments: Dubai, Rotterdam, Singapore | FSSAI & APEDA Certified
      </div>

      {/* --- MODERN ORGANIC NAV --- */}
      <nav className="fixed w-full top-8 z-50 bg-white/80 backdrop-blur-xl border-b border-stone-100 px-6 py-4 flex justify-between items-center shadow-lg">
        <h2 className="text-xl font-black text-[#1a4731] tracking-tighter uppercase italic">Vedic<span className="text-[#8b5a2b] font-normal">Global</span></h2>
        <div className="w-10 h-10 rounded-full bg-[#1a4731] text-white flex items-center justify-center shadow-xl active:scale-90 transition">
            <Globe size={18} />
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative h-[90vh] flex items-end pb-16 px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://th-i.thgim.com/public/incoming/cqn7u2/article70604618.ece/alternates/FREE_1200/9869_6_2_2026_19_18_23_1_DSC_1112.JPG" alt="Plantation" className="w-full h-full object-cover scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
        </div>
        <div className="relative z-10 w-full text-white">
          <span data-aos="fade-right" className="bg-[#8b5a2b] px-3 py-1 rounded-sm text-[10px] font-black uppercase tracking-widest mb-4 inline-block italic">Direct from Cumbum Yards</span>
          <h1 data-aos="fade-up" className="text-5xl font-black mb-6 leading-[1.05] tracking-tighter uppercase italic">Roots in India <br/> <span className="text-green-400 font-normal">Reach Global.</span></h1>
          <p data-aos="fade-up" data-aos-delay="200" className="text-sm opacity-80 mb-8 max-w-xs font-medium leading-relaxed italic">Supplying premium grade South Indian coconuts to the world's leading industries.</p>
          <div className="flex flex-col gap-3">
             <button className="bg-green-700 py-4 rounded-sm font-black text-[10px] uppercase tracking-widest shadow-xl">Download Catalog</button>
             <button className="bg-white/10 backdrop-blur-md border border-white/20 py-4 rounded-sm font-black text-[10px] uppercase tracking-widest">Our Logistics</button>
          </div>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="py-16 px-8 bg-white grid grid-cols-2 gap-6 border-b border-stone-100">
          {[
            { v: "15+", l: "Countries", i: <Globe size={20}/> },
            { v: "2K+", l: "Metric Tons", i: <Ship size={20}/> },
            { v: "100%", l: "Organic", i: <Leaf size={20}/> },
            { v: "24/7", l: "Logistics", i: <Truck size={20}/> }
          ].map((stat, i) => (
            <div key={i} data-aos="zoom-in" data-aos-delay={i*100} className="p-6 bg-[#fcfaf7] rounded-3xl border border-stone-100 text-center flex flex-col items-center shadow-sm">
               <div className="text-green-800 mb-2 opacity-30">{stat.i}</div>
               <h3 className="text-2xl font-black text-[#1a4731] tracking-tighter italic">{stat.v}</h3>
               <p className="text-[9px] font-bold text-stone-400 uppercase tracking-widest mt-1">{stat.l}</p>
            </div>
          ))}
      </section>

      {/* --- EXPORT RANGE --- */}
      <section className="py-24 bg-[#1a4731] rounded-t-[4rem] text-white">
        <div className="px-8 mb-12">
            <p className="text-green-400 font-bold text-[10px] uppercase tracking-widest mb-2 italic">Premium Portfolio</p>
            <h2 className="text-4xl font-black tracking-tighter uppercase leading-none">The Vedic Produce</h2>
        </div>
        <div className="flex overflow-x-auto gap-6 px-8 no-scrollbar snap-x pb-8">
            {productList.map((p, i) => (
                <div key={i} className="flex-shrink-0 w-[80vw] bg-white rounded-[3rem] overflow-hidden snap-center shadow-2xl">
                    <div className="relative h-64 overflow-hidden">
                        <img src={p.img} className="w-full h-full object-cover" alt={p.name} />
                        <div className="absolute top-6 left-6 bg-green-600 text-white px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-widest shadow-lg">Export Grade</div>
                    </div>
                    <div className="p-8">
                        <h3 className="text-2xl font-black text-[#1a4731] uppercase italic mb-2 leading-none">{p.name}</h3>
                        <p className="text-[#8b5a2b] font-black text-[9px] uppercase tracking-widest mb-4">{p.specs}</p>
                        <p className="text-stone-400 text-xs font-medium leading-relaxed mb-8 italic">"{p.use}"</p>
                        <button className="w-full py-4 bg-[#fcfaf7] text-[#1a4731] rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 border border-stone-100 shadow-sm active:scale-95 transition">Technical Data</button>
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* --- MASSIVE YARD GALLERY (Enhanced) --- */}
      <section className="py-24 bg-[#fcfaf7]">
        <div className="px-8 mb-12 text-center">
            <p className="text-green-600 font-bold text-[10px] uppercase tracking-widest mb-2 italic">Industrial Strength</p>
            <h2 className="text-4xl font-black text-[#1a4731] uppercase italic tracking-tighter leading-none mb-4">Our Export <br/> Yard Floor</h2>
            <div className="w-12 h-1 bg-[#8b5a2b] mx-auto"></div>
        </div>
        
        {/* Horizontal Auto-Scroll Gallery or Grid */}
        <div className="grid grid-cols-2 gap-3 px-3">
            {yardGallery.map((img, i) => (
                <div key={i} data-aos="zoom-in" className={`relative overflow-hidden rounded-[2rem] shadow-xl ${i % 3 === 0 ? 'col-span-2 h-72' : 'h-48'}`}>
                    <img src={img.url} className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700" alt={img.title} />
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[9px] font-black uppercase text-[#1a4731] tracking-tighter shadow-sm border border-white/50">
                        {img.title}
                    </div>
                </div>
            ))}
        </div>

        <div className="mt-12 px-8">
            <div className="bg-[#1a4731] p-8 rounded-[3rem] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10"></div>
                <h4 className="text-white font-black text-xl mb-4 italic uppercase">Processing Capacity</h4>
                <div className="space-y-4">
                    <div className="flex justify-between items-end">
                        <p className="text-green-400 text-[10px] font-bold uppercase tracking-widest">Daily Grading</p>
                        <p className="text-white font-black text-lg leading-none italic">50,000+ Units</p>
                    </div>
                    <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                        <div className="w-[85%] h-full bg-green-500 shadow-[0_0_10px_#22c55e]"></div>
                    </div>
                    <div className="flex justify-between items-end">
                        <p className="text-green-400 text-[10px] font-bold uppercase tracking-widest">Storage Space</p>
                        <p className="text-white font-black text-lg leading-none italic">25,000 Sq.Ft</p>
                    </div>
                    <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                        <div className="w-[95%] h-full bg-green-500 shadow-[0_0_10px_#22c55e]"></div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* --- GOOGLE MAPS INTEGRATION --- */}
      <section className="py-24 bg-white relative overflow-hidden">
         <div className="px-8 mb-10">
            <div className="flex items-center gap-3 mb-2">
                <MapPin className="text-[#8b5a2b]" size={20} />
                <p className="text-[#8b5a2b] font-bold text-[10px] uppercase tracking-widest italic leading-none">Global Hub Location</p>
            </div>
            <h2 className="text-4xl font-black text-[#1a4731] uppercase italic tracking-tighter leading-none mb-6">Find Our <br/> Presence</h2>
         </div>
         
         <div className="px-4">
            <div className="w-full h-[400px] rounded-[3.5rem] overflow-hidden shadow-2xl border-4 border-[#fcfaf7] relative">
                {/* Real Google Map Embed - Centered on Pollachi/Cumbum Region */}
                <iframe 
                    title="Vedic Global Yard"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125555.22676059298!2d77.1610488!3d10.6548545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba836f32e60404f%3A0x6b63c87e41d8e136!2sPollachi%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale hover:grayscale-0 transition-all duration-1000"
                ></iframe>
                
                {/* Floating Map Label */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md p-5 rounded-3xl shadow-xl border border-stone-100">
                    <p className="text-[10px] font-black text-stone-400 uppercase tracking-widest mb-1 leading-none">Export HQ</p>
                    <h5 className="font-black text-[#1a4731] italic">Market Yard, Pollachi</h5>
                    <button className="mt-3 flex items-center gap-2 text-[9px] font-black text-[#8b5a2b] uppercase tracking-widest">
                        Get Directions <ExternalLink size={10} />
                    </button>
                </div>
            </div>
         </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-24 px-10 bg-[#1a4731] text-white font-sans overflow-hidden relative">
        <div className="absolute bottom-0 right-0 opacity-5 text-[10rem] font-black italic -mr-20 -mb-10 pointer-events-none">INDIA</div>
        <div className="flex flex-col items-center text-center mb-16">
            <Leaf size={48} className="text-green-400 mb-6" />
            <h2 className="text-3xl font-black uppercase tracking-[0.2em] mb-4">Vedic Global</h2>
            <p className="max-w-xs opacity-50 text-[10px] leading-relaxed font-bold uppercase tracking-widest italic">Connecting Indian Farmers with the Global Market since 2018.</p>
        </div>
        
        <div className="grid grid-cols-2 gap-8 text-left border-y border-white/10 py-12 mb-16">
            <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-green-400 mb-2">Primary Yard</p>
                <p className="text-[11px] leading-relaxed opacity-80 italic font-medium">Market Yard Road, <br/> Cumbum, TN - 642001</p>
            </div>
            <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-green-400 mb-2">Corporate Office</p>
                <p className="text-[11px] leading-relaxed opacity-80 italic font-medium">Exports Tower, <br/> Coimbatore - 641018</p>
            </div>
        </div>

        <div className="flex justify-center gap-8 mb-16">
           <Instagram size={24} className="opacity-30 hover:text-pink-400 transition cursor-pointer" />
           <Facebook size={24} className="opacity-30 hover:text-blue-400 transition cursor-pointer" />
           <MessageCircle size={24} className="opacity-30 hover:text-green-400 transition cursor-pointer" />
        </div>
        
        <div className="text-[9px] font-black text-white/10 uppercase tracking-[0.8em] text-center pt-10">
          © 2026 VEDIC GLOBAL • EXCELLENCE IN EXPORT
        </div>
      </footer>

      {/* --- STICKY MOBILE ACTION BAR --- */}
      <div className="fixed bottom-0 w-full z-[60] p-4 bg-[#1a4731]/95 backdrop-blur-md flex gap-3 shadow-2xl font-sans border-t border-green-900">
         <button className="flex-1 bg-[#8b5a2b] text-white py-4 rounded-sm font-black text-[10px] uppercase tracking-[0.2em] active:scale-95 transition flex items-center justify-center gap-2 shadow-xl shadow-amber-900/20">
           <PackageCheck size={14} /> Request Quote
         </button>
         <button className="flex-1 border-2 border-green-400 text-green-400 py-4 rounded-sm font-black text-[10px] uppercase tracking-[0.2em] active:scale-95 transition flex items-center justify-center gap-2">
           <Phone size={14} /> Call Sales
         </button>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

    </div>
  );
};

export default ClientSeven;