import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  Smartphone, 
  Tv, 
  Wind, 
  WashingMachine, 
  Microwave, 
  Speaker, 
  Cpu, 
  Truck, 
  ShieldCheck, 
  CreditCard, 
  Wrench, 
  MessageCircle, 
  Instagram, 
  Facebook, 
  Youtube,
  Zap,
  TrendingDown,
  Award,
  Layers,
  ChevronRight
} from 'lucide-react';

const ClientFour = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
      easing: 'ease-in-out',
    });
  }, []);

  const categories = [
    { name: "Entertainment", icon: <Tv size={32} />, tag: "OLED & QLED", img: "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=800" },
    { name: "Smart Cooling", icon: <Wind size={32} />, tag: "Inverter Tech", img: "https://m.media-amazon.com/images/I/81RcZLJHiNL.jpg" },
    { name: "Home Laundry", icon: <WashingMachine size={32} />, tag: "Front Load", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpKviJNrUCFwEf3_ZQEhs1mT5TrxsEdOFKWw&s" },
    { name: "Kitchen Tech", icon: <Microwave size={32} />, tag: "Built-in", img: "https://rukminim2.flixcart.com/image/480/640/xif0q/microwave-new/l/c/l/-original-imagsn4prgthn6ph.jpeg?q=90" }
  ];

  const deals = [
    { name: "Sony Bravia XR", price: "₹84,990", old: "₹1,04,990", img: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=600" },
    { name: "Samsung Sidebar", price: "₹62,000", old: "₹75,000", img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=600" }
  ];

  const brands = ["SONY", "SAMSUNG", "LG", "APPLE", "DAIKIN", "WHIRLPOOL", "BOSCH", "PANASONIC"];

  return (
    <div className="bg-[#050505] text-white overflow-x-hidden font-sans pb-24 selection:bg-blue-500">
      
      {/* --- NEON TOP BAR --- */}
      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-purple-700 text-white text-[10px] font-black text-center py-2.5 uppercase tracking-[0.2em] sticky top-0 z-[60] shadow-[0_0_20px_rgba(37,99,235,0.4)]">
        ⚡ Mega Exchange Festival: Get Up to ₹15,000 Off on Old Appliances • 0% Downpayment Live
      </div>

      {/* --- APP-STYLE NAV --- */}
      <nav className="fixed w-full top-9 z-50 bg-black/60 backdrop-blur-2xl border-b border-white/10 px-6 py-4 flex justify-between items-center shadow-lg">
        <h2 className="text-xl font-black tracking-tighter uppercase italic text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Max<span className="text-white">Electronics</span></h2>
        <div className="w-10 h-10 rounded-2xl bg-blue-600/10 border border-blue-500/30 flex items-center justify-center text-blue-500 active:scale-90 transition">
            <Zap size={20} fill="currentColor" />
        </div>
      </nav>

      {/* --- HERO: THE DIGITAL SHOWROOM --- */}
      <section className="relative h-[85vh] flex items-end pb-16 px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=1600" 
            alt="Showroom" 
            className="w-full h-full object-cover scale-110 opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 w-full">
          <p data-aos="fade-right" className="text-blue-500 font-black text-[10px] uppercase tracking-[0.4em] mb-4 flex items-center gap-2">
            <Cpu size={14} /> Theni's Largest Tech Hub
          </p>
          <h1 data-aos="fade-up" className="text-5xl font-black mb-6 leading-tight tracking-tighter uppercase italic">Upgrade Your <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Future Home.</span></h1>
          <div className="flex flex-col gap-3">
             <button className="bg-blue-600 py-4 rounded-2xl font-black text-xs uppercase tracking-widest shadow-[0_0_30px_rgba(37,99,235,0.3)] active:bg-blue-700 transition">View Best Sellers</button>
             <button className="bg-white/5 backdrop-blur-md border border-white/20 py-4 rounded-2xl font-black text-xs uppercase tracking-widest">Compare EMI Plans</button>
          </div>
        </div>
      </section>

      {/* --- BRAND MARQUEE --- */}
      <section className="py-10 bg-white/5 border-y border-white/5 overflow-hidden">
         <div className="flex overflow-x-auto gap-12 px-8 no-scrollbar opacity-40 grayscale hover:grayscale-0 transition duration-700">
            {brands.concat(brands).map((brand, i) => (
              <span key={i} className="text-2xl font-black tracking-tighter flex-shrink-0">{brand}</span>
            ))}
         </div>
      </section>

      {/* --- SERVICE CARDS: MOBILE GRID --- */}
      <section className="py-16 px-8 grid grid-cols-2 gap-4">
          {[
            { t: "Easy EMI", d: "0% Interest", i: <CreditCard size={28}/> },
            { t: "Express", d: "24h Delivery", i: <Truck size={28}/> },
            { t: "Warranty", d: "Direct Brand", i: <ShieldCheck size={28}/> },
            { t: "Support", d: "Certified Team", i: <Wrench size={28}/> }
          ].map((item, i) => (
            <div key={i} data-aos="zoom-in" data-aos-delay={i*100} className="p-6 bg-white/5 rounded-[2.5rem] border border-white/10 text-center flex flex-col items-center">
               <div className="text-blue-500 mb-3">{item.i}</div>
               <h4 className="font-black text-xs uppercase tracking-tight">{item.t}</h4>
               <p className="text-[10px] text-gray-500 mt-1 font-bold">{item.d}</p>
            </div>
          ))}
      </section>

      {/* --- CATEGORY SHOWCASE: FULL WIDTH --- */}
      <section className="py-20 px-6">
        <div className="mb-12">
            <p className="text-blue-500 font-black text-[10px] uppercase tracking-widest">Global Range</p>
            <h2 data-aos="fade-right" className="text-4xl font-black tracking-tighter uppercase italic leading-none">The Smart <br/> Selection</h2>
        </div>

        <div className="space-y-12">
          {categories.map((cat, idx) => (
            <div key={idx} data-aos="fade-up" className="relative h-[450px] rounded-[3.5rem] overflow-hidden group shadow-2xl shadow-blue-900/10">
               <img src={cat.img} alt={cat.name} className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition duration-1000" />
               <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
               <div className="absolute bottom-10 left-10 right-10 text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-3xl mx-auto mb-4 flex items-center justify-center text-white shadow-2xl">
                    {cat.icon}
                  </div>
                  <p className="text-blue-400 font-black text-[10px] uppercase tracking-widest mb-1">{cat.tag}</p>
                  <h3 className="text-3xl font-black uppercase italic mb-6">{cat.name}</h3>
                  <button className="w-full py-4 bg-white text-black rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl active:scale-95 transition">Explore Models</button>
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- HOT DEALS (New Section) --- */}
      <section className="py-20 px-8 bg-white/5 border-y border-white/10">
        <div className="mb-12 flex justify-between items-end">
            <h2 className="text-3xl font-black tracking-tighter uppercase italic">Today's <br/> Price Drop</h2>
            <div className="bg-red-600 text-white px-3 py-1 rounded-lg text-[10px] font-black uppercase mb-1">Live Deals</div>
        </div>
        
        <div className="grid grid-cols-1 gap-10">
           {deals.map((deal, i) => (
             <div key={i} data-aos="fade-up" className="bg-black/40 p-4 rounded-[3rem] border border-white/5 flex flex-col gap-6">
                <div className="relative h-64 rounded-[2.5rem] overflow-hidden">
                   <img src={deal.img} className="w-full h-full object-cover" alt={deal.name} />
                   <div className="absolute top-4 right-4 bg-red-600 px-4 py-1 rounded-full text-[10px] font-black uppercase italic">Save 20%</div>
                </div>
                <div className="px-4 pb-4">
                   <h3 className="text-2xl font-black uppercase italic mb-2">{deal.name}</h3>
                   <div className="flex items-center gap-4 mb-6">
                      <span className="text-2xl font-black text-blue-500">{deal.price}</span>
                      <span className="text-sm text-gray-500 line-through font-bold">{deal.old}</span>
                   </div>
                   <button className="w-full py-4 border-2 border-white/20 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition">Grab Now</button>
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* --- JEALOUSY SECTION: WHY MAX? --- */}
      <section className="py-24 px-8 bg-gradient-to-br from-blue-900 via-[#050505] to-purple-900 rounded-[4rem] mx-2 my-10 relative overflow-hidden shadow-2xl">
         <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600 rounded-full blur-[120px] opacity-20"></div>
         <div className="relative z-10">
            <h2 className="text-3xl font-black mb-12 leading-none uppercase italic text-center">The Max <br/> <span className="text-blue-400">Difference.</span></h2>
            <div className="space-y-10">
               {[
                 { t: "Best Price Match", d: "We beat any online price from Amazon or Flipkart.", i: <TrendingDown size={32} /> },
                 { t: "Legacy of Trust", d: "25 Years serving 1 Lakh+ happy families in Theni District.", i: <Award size={32} /> },
                 { t: "Certified Spares", d: "Only genuine brand-authorized spare parts for all services.", i: <ShieldCheck size={32} /> }
               ].map((item, i) => (
                  <div key={i} data-aos="fade-left" className="flex gap-5 items-start bg-white/5 p-6 rounded-3xl border border-white/10 backdrop-blur-md">
                     <div className="text-blue-400 flex-shrink-0">
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
      <footer className="py-24 px-10 text-center bg-black border-t border-white/10">
        <h2 className="text-3xl font-black text-blue-500 italic tracking-tighter uppercase mb-4 leading-none text-center">Max Electronics <br/> <span className="text-white/20">Cumbum & Theni</span></h2>
        
        <div className="flex justify-center gap-5 mb-12">
           <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-blue-500 border border-white/10 active:scale-90 transition">
             <Facebook size={20} />
           </div>
           <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-pink-500 border border-white/10 active:scale-90 transition">
             <Instagram size={20} />
           </div>
           <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-red-500 border border-white/10 active:scale-90 transition">
             <Youtube size={20} />
           </div>
        </div>

        <div className="space-y-4 mb-16 px-6 py-10 bg-white/5 rounded-[2.5rem] border border-white/5 text-left">
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">Main Showroom</p>
              <p className="text-xs font-bold leading-relaxed italic text-white/80">Cumbum Road, Near Old Bus Stand, <br/> Theni District - 625531</p>
            </div>
            <div className="pt-4 border-t border-white/5 flex justify-between items-center">
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-1">Contact Hub</p>
                <p className="text-sm font-black text-blue-500 tracking-tight">+91 99000 77000</p>
              </div>
              <ChevronRight size={20} className="text-gray-800" />
            </div>
        </div>
        
        <div className="text-[9px] font-black text-white/10 uppercase tracking-[0.5em] border-t border-white/5 pt-10">
          © 2026 MAX ELECTRONICS • NAVI PROMOTIONS
        </div>
      </footer>

      {/* --- MOBILE STICKY ACTION BAR --- */}
      <div className="fixed bottom-0 w-full z-[60] bg-black/40 backdrop-blur-xl border-t border-white/10 p-4 flex gap-3 shadow-2xl">
         <button className="flex-1 bg-white text-black py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest active:scale-95 transition">Store Offers</button>
         <button className="flex-1 bg-blue-600 text-white py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 active:scale-95 transition">
           <MessageCircle size={14} /> WhatsApp 
         </button>
      </div>

    </div>
  );
};

export default ClientFour;