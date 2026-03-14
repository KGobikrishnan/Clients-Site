import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  ShoppingBag, 
  Leaf, 
  Droplets, 
  Zap, 
  Clock, 
  ShieldCheck, 
  MessageCircle, 
  Instagram, 
  Facebook,
  Heart,
  ChefHat,
  Star,
  Truck
} from 'lucide-react';

const ClientThree = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
      easing: 'ease-out-quart'
    });
  }, []);

  const signatureProducts = [
    { 
      id: 1, 
      name: "Fresh Idly/Dosa Batter", 
      tag: "Best Seller", 
      desc: "Naturally fermented for 12 hours. Zero soda, zero preservatives. Prepared in Cumbum valley.",
      img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=800",
      price: "₹60"
    },
    { 
      id: 2, 
      name: "Stone-Ground Sambar Masala", 
      tag: "Aromatic", 
      desc: "15 hand-roasted spices ground in traditional stone mills for that authentic taste.",
      img: "https://m.media-amazon.com/images/I/61B5R2AOQPL.jpg",
      price: "₹45"
    },
    { 
      id: 3, 
      name: "Dosa", 
      tag: "Pure Organic", 
      desc: "Traditional. 100% natural",
      img: "https://i0.wp.com/cookingfromheart.com/wp-content/uploads/2018/06/Crispy-Dosa-2.jpg?resize=676%2C994&ssl=1",
      price: "₹280"
    },
    { 
        id: 4, 
        name: "Garlic Puliyodharai Mix", 
        tag: "Instant Relish", 
        desc: "Tangy and spicy mix. Just mix with hot rice & enjoy a quick home meal.",
        img: "https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=800",
        price: "₹85"
    }
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1613292443284-8d10ef9383fe?q=80&w=600",
    "https://images.unsplash.com/photo-1516684732162-798a0062be99?q=80&w=600",
    "https://images.unsplash.com/photo-1626074353765-517a681e40be?q=80&w=600",
    "https://images.unsplash.com/photo-1606491956391-70868b5d0f47?q=80&w=600"
  ];

  return (
    <div className="bg-[#fffcf7] text-stone-900 overflow-x-hidden font-sans pb-24 selection:bg-orange-100">
      
      {/* --- FOMO TOP BAR --- */}
      <div className="bg-orange-600 text-white text-[10px] font-black text-center py-2 uppercase tracking-[0.2em] sticky top-0 z-[60] shadow-md">
        🔥 Next Fresh Batch: Tomorrow 7 AM | Order Before 9 PM
      </div>

      {/* --- MOBILE APP NAV --- */}
      <nav className="fixed w-full top-8 z-50 bg-white/80 backdrop-blur-xl border-b border-orange-50 px-6 py-4 flex justify-between items-center shadow-sm">
        <h2 className="text-xl font-black text-orange-700 italic tracking-tighter uppercase">Namma<span className="text-green-700 font-sans">HomeFoods</span></h2>
        <div className="flex gap-3">
            <button className="w-10 h-10 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center border border-orange-100 active:scale-90 transition">
               <ShoppingBag size={18} />
            </button>
        </div>
      </nav>

      {/* --- HERO: THE HUNGER TRIGGER --- */}
      <section className="relative h-[85vh] flex items-end pb-16 px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1589301760014-d929f3979dbc?q=80&w=1200" 
            alt="Idly Batter" 
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 w-full text-white">
          <p data-aos="fade-right" className="text-green-400 font-black text-[10px] uppercase tracking-[0.3em] mb-3 flex items-center gap-2">
            <Leaf size={12} /> 100% Preservative Free
          </p>
          <h1 data-aos="fade-up" className="text-5xl font-black mb-6 leading-[1.1] tracking-tighter uppercase italic">True Taste <br/> <span className="text-orange-400">of Home.</span></h1>
          <div className="flex flex-col gap-3">
             <button className="bg-orange-600 py-4 rounded-2xl font-black text-xs uppercase tracking-widest active:bg-orange-700 transition shadow-xl">Shop Today's Batch</button>
             <button className="bg-white/10 backdrop-blur-md border border-white/20 py-4 rounded-2xl font-black text-xs uppercase tracking-widest">Our Kitchen Story</button>
          </div>
        </div>
      </section>

      {/* --- HORIZONTAL KITCHEN GALLERY --- */}
      <section className="py-12 bg-white">
        <div className="px-6 mb-6 flex justify-between items-end">
            <div>
              <p className="text-orange-600 font-black text-[10px] uppercase tracking-widest">Behind the Scenes</p>
              <h3 className="text-2xl font-black tracking-tighter uppercase italic">Our Kitchen</h3>
            </div>
            <ChefHat size={20} className="text-stone-300 mb-1" />
        </div>
        <div className="flex overflow-x-auto gap-4 px-6 no-scrollbar snap-x">
           {galleryImages.map((img, i) => (
             <div key={i} className="flex-shrink-0 w-[75vw] aspect-square rounded-[2.5rem] overflow-hidden snap-center shadow-lg border border-stone-100">
                <img src={img} loading="lazy" className="w-full h-full object-cover" alt="Kitchen process" />
             </div>
           ))}
        </div>
      </section>

      {/* --- HYGIENE MARKERS --- */}
      <section className="py-12 bg-stone-50 px-8 grid grid-cols-2 gap-4 border-y border-stone-100">
          <div data-aos="fade-up" className="p-6 bg-white rounded-[2.5rem] border border-green-100 flex flex-col items-center text-center shadow-sm">
            <Droplets className="text-green-600 mb-2" size={24} />
            <p className="text-[10px] font-black text-stone-400 uppercase tracking-widest leading-none">RO Purified <br/> Water</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="100" className="p-6 bg-white rounded-[2.5rem] border border-orange-100 flex flex-col items-center text-center shadow-sm">
            <Zap className="text-orange-600 mb-2" size={24} />
            <p className="text-[10px] font-black text-stone-400 uppercase tracking-widest leading-none">Stone Ground <br/> Precision</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="200" className="p-6 bg-white rounded-[2.5rem] border border-stone-100 flex flex-col items-center text-center shadow-sm">
            <ShieldCheck className="text-blue-600 mb-2" size={24} />
            <p className="text-[10px] font-black text-stone-400 uppercase tracking-widest leading-none">Zero <br/> Chemicals</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="300" className="p-6 bg-white rounded-[2.5rem] border border-stone-100 flex flex-col items-center text-center shadow-sm">
            <Clock className="text-stone-600 mb-2" size={24} />
            <p className="text-[10px] font-black text-stone-400 uppercase tracking-widest leading-none">Daily <br/> Fresh Batch</p>
          </div>
      </section>

      {/* --- PRODUCTS LIST --- */}
      <section id="products" className="py-20 px-6">
        <div className="mb-12 text-center">
            <h2 className="text-4xl font-black tracking-tighter uppercase italic leading-none">The Morning <br/> <span className="text-orange-600">Essentials</span></h2>
            <div className="w-12 h-1 bg-orange-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="space-y-16">
          {signatureProducts.map((p, index) => (
            <div key={index} data-aos="fade-up" className="group">
                <div className="relative h-80 overflow-hidden rounded-[3rem] shadow-2xl mb-8">
                    <img src={p.img} loading="lazy" alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-1000" />
                    <div className="absolute top-6 left-6">
                      <span className="bg-white/90 backdrop-blur-md px-4 py-1 rounded-full text-[10px] font-black uppercase text-orange-700 shadow-md w-fit flex items-center gap-2">
                        <Star size={12} fill="currentColor" /> {p.tag}
                      </span>
                    </div>
                </div>
                <div className="px-2">
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="text-3xl font-black tracking-tighter italic uppercase text-stone-900">{p.name}</h3>
                        <span className="text-xl font-black text-orange-700">{p.price}</span>
                    </div>
                    <p className="text-stone-400 font-medium text-sm leading-relaxed mb-8">
                        {p.desc}
                    </p>
                    <button className="w-full py-5 bg-stone-900 text-white rounded-[1.5rem] font-black text-xs uppercase tracking-widest active:scale-95 transition shadow-lg flex items-center justify-center gap-3">
                       <ShoppingBag size={16} /> Add to Basket
                    </button>
                </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- WHY US: THE MOTHER'S KITCHEN LOGIC --- */}
      <section className="py-24 px-8 bg-green-900 text-white rounded-[4rem] mx-2 relative overflow-hidden shadow-2xl">
         <div className="absolute top-0 right-0 w-80 h-80 bg-green-800 rounded-full blur-[100px] opacity-30"></div>
         <div className="relative z-10">
            <h2 className="text-4xl font-black tracking-tighter uppercase italic leading-none mb-10 text-center">Purely <br/> <span className="text-green-400">Handcrafted.</span></h2>
            <div className="space-y-10">
               {[
                 { t: "Stone Ground", d: "Retains all nutrients and natural oils unlike high-speed industrial grinders.", i: <Zap size={32} /> },
                 { t: "Purified Process", d: "We use only RO Purified water and Grade-A IR20 rice.", i: <Droplets size={32} /> },
                 { t: "Direct to Home", d: "No middle-men. No store shelves. From our kitchen to your table.", i: <Truck size={32} /> }
               ].map((item, i) => (
                  <div key={i} data-aos="fade-up" className="flex gap-5 items-start bg-white/5 p-6 rounded-3xl border border-white/10 backdrop-blur-sm">
                     <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 text-green-400">
                        {item.i}
                     </div>
                     <div>
                        <h4 className="font-black text-lg uppercase tracking-tight">{item.t}</h4>
                        <p className="text-sm opacity-70 leading-relaxed font-medium">{item.d}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* --- FOOTER: LOCAL FOOTPRINT --- */}
      <footer className="py-24 px-10 text-center bg-white border-t border-stone-50">
        <h2 className="text-3xl font-black text-orange-700 italic tracking-tighter uppercase mb-6 leading-none">Home Foods <br/> <span className="text-stone-300">Cumbum Valley</span></h2>
        
        <div className="flex justify-center gap-5 mb-10">
           <a href="#" className="w-12 h-12 bg-stone-50 rounded-full flex items-center justify-center text-blue-600 border border-stone-100 active:scale-90 transition">
             <Facebook size={20} />
           </a>
           <a href="#" className="w-12 h-12 bg-stone-50 rounded-full flex items-center justify-center text-pink-600 border border-stone-100 active:scale-90 transition">
             <Instagram size={20} />
           </a>
           <a href="#" className="w-12 h-12 bg-stone-50 rounded-full flex items-center justify-center text-green-600 border border-stone-100 active:scale-90 transition">
             <MessageCircle size={20} />
           </a>
        </div>

        <div className="space-y-4 mb-16 px-4 py-8 bg-[#fff9f0] rounded-3xl">
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-stone-400 mb-1">Kitchen Address</p>
              <p className="text-xs font-bold leading-relaxed italic text-stone-800">Plot No 42, Gandhi Nagar, <br/> Cumbum, Theni District - 625516</p>
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-stone-400 mb-1">Support</p>
              <p className="text-sm font-black text-orange-600 tracking-tight">+91 88776 65544</p>
            </div>
        </div>
        
        <div className="text-[9px] font-black text-stone-200 uppercase tracking-[0.5em] border-t pt-10">
          © 2026 NAMMA HOME FOODS • NAVI PROMOTIONS
        </div>
      </footer>

      {/* --- STICKY MOBILE ACTION BAR --- */}
      <div className="fixed bottom-0 w-full z-[60] bg-white/40 backdrop-blur-xl border-t border-stone-100 p-4 flex gap-3 shadow-2xl">
         <button className="flex-1 bg-stone-900 text-white py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 active:scale-95 transition">
           <ShoppingBag size={14} /> View Menu
         </button>
         <button className="flex-1 bg-green-700 text-white py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 active:scale-95 transition">
           <MessageCircle size={14} /> WhatsApp Order
         </button>
      </div>

    </div>
  );
};

export default ClientThree;