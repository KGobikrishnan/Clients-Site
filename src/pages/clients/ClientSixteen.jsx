import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  Scissors, 
  Sparkles, 
  Heart, 
  Crown, 
  ShoppingBag, 
  MapPin, 
  Phone, 
  Instagram, 
  Facebook, 
  Mail, 
  ArrowRight, 
  ChevronRight,
  ExternalLink,
  Zap,
  Gem,
  Languages,
  MessageCircle,
  Palette,
  Star
} from 'lucide-react';

const ClientSixteen = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-quart',
    });
  }, []);

  const signatureCollections = [
    { 
      id: "C1",
      title: "Royal Aari Bridal", 
      cat: "Hand-Embroidered", 
      desc: "Intricate 24k gold thread work on pure velvet and silk organza.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_FF0EvvrwvvgmrdGl0lkinAP7v4zMbtzHiA&s"
    },
    { 
      id: "C2",
      title: "Pastel Fusion", 
      cat: "Indo-Western", 
      desc: "Contemporary silhouettes blended with traditional Zardosi embellishments.",
      img: "https://diademstore.com/cdn/shop/articles/Pastel_Pink_Floral_Embroidery_Lycra_Partywear_Gown_1_8af6e208-495c-42e4-9973-09773b599ae8_360x.webp?v=1756804775"
    },
    { 
      id: "C3",
      title: "Temple Silks", 
      cat: "Designer Sarees", 
      desc: "Handpicked heritage weaves redefined for the modern woman.",
      img: "https://shangriladesigner.com/cdn/shop/files/03-NEW.jpg?v=1734102697"
    }
  ];

  const workshopGallery = [
    "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=600",
    "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=600",
    "https://images.unsplash.com/photo-1583311406620-ca60f5f9a5a3?q=80&w=600",
    "https://images.unsplash.com/photo-1594553429371-d88d428271bb?q=80&w=600"
  ];

  return (
    <div className="bg-[#fdfbf9] text-[#2d2d2d] overflow-x-hidden font-serif pb-24 selection:bg-rose-200 selection:text-rose-900">
      
      {/* --- ELITE TICKER --- */}
      <div className="bg-[#1c1c1c] text-rose-200 text-[10px] font-black text-center py-2.5 uppercase tracking-[0.4em] sticky top-0 z-[60] border-b border-white/5">
        ✨ Exclusive: Bridal Bookings Open for Dec 2026 • 24-Hour Trial Fitting Active 
      </div>

      {/* --- EDITORIAL NAV --- */}
      <nav className="fixed w-full top-9 z-50 bg-white/70 backdrop-blur-2xl border-b border-rose-100 px-6 py-4 flex justify-between items-center shadow-lg">
        <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-[#1c1c1c] rounded-full flex items-center justify-center shadow-xl">
                <Scissors size={18} className="text-rose-200" />
            </div>
            <h2 className="text-xl font-bold tracking-[0.3em] uppercase">Aura<span className="font-light italic text-rose-800">Boutique</span></h2>
        </div>
        <a href="tel:+919988776655" className="w-10 h-10 rounded-full bg-rose-50 text-rose-800 flex items-center justify-center border border-rose-100 active:scale-90 transition shadow-sm">
            <Phone size={18} />
        </a>
      </nav>

      {/* --- HERO: THE VOGUE ENTRY --- */}
      <section className="relative h-[95vh] flex items-end pb-20 px-8 overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=1600" 
            alt="Couture" 
            className="w-full h-full object-cover scale-110 opacity-40 motion-safe:animate-[pulse_10s_infinite]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#fdfbf9] via-[#fdfbf9]/20 to-transparent"></div>
        </div>
        
        <div className="relative z-10 w-full">
          <span data-aos="fade-right" className="bg-rose-800 text-white px-3 py-1 rounded-sm text-[10px] font-bold uppercase tracking-widest mb-6 inline-block shadow-lg">
            Bespoke Designer Studio
          </span>
          <h1 data-aos="fade-up" className="text-6xl md:text-[10rem] font-black mb-6 leading-[0.85] tracking-tighter uppercase italic text-[#1c1c1c]">
            Pure <br/> <span className="text-rose-800 underline decoration-rose-200">Grace.</span>
          </h1>
          <p data-aos="fade-up" data-aos-delay="200" className="text-sm text-stone-500 mb-8 max-w-xs font-medium leading-relaxed italic">Crafting identities, one stitch at a time. Hand-embroidered masterpieces for the extraordinary woman.</p>
          <div className="flex flex-col gap-3">
             <button className="bg-[#1c1c1c] text-white py-4 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-2xl active:bg-rose-900 transition">Book My Fitting</button>
             <button className="bg-white border-2 border-rose-100 text-rose-800 py-4 rounded-xl font-black text-[10px] uppercase tracking-widest active:scale-95 transition">View Lookbook</button>
          </div>
        </div>
      </section>

      {/* --- COUTURE STATS --- */}
      <section className="py-16 px-8 bg-white grid grid-cols-2 gap-4 border-y border-rose-50">
          {[
            { v: "2K+", l: "Happy Brides", i: <Heart size={20}/> },
            { v: "15Y", l: "Master Crafts", i: <Gem size={20}/> },
            { v: "100%", l: "Perfect Fit", i: <Scissors size={20}/> },
            { v: "Fast", l: "Couture TAT", i: <Zap size={20}/> }
          ].map((stat, i) => (
            <div key={i} data-aos="zoom-in" data-aos-delay={i*100} className="p-8 bg-rose-50/30 rounded-[2.5rem] border border-rose-100 text-center flex flex-col items-center">
               <div className="text-rose-800 mb-2 opacity-50">{stat.i}</div>
               <h3 className="text-3xl font-black text-[#1c1c1c] tracking-tighter italic">{stat.v}</h3>
               <p className="text-[9px] font-bold text-stone-400 uppercase tracking-widest mt-1">{stat.l}</p>
            </div>
          ))}
      </section>

      {/* --- COLLECTION REVEAL: MAGAZINE STYLE --- */}
      <section className="py-24 px-6 bg-[#fdfbf9]">
        <div className="mb-16">
            <p className="text-rose-800 font-bold text-[10px] uppercase tracking-widest mb-2 italic">Aura Collection '26</p>
            <h2 className="text-4xl font-black tracking-tighter uppercase italic leading-none text-[#1c1c1c]">Signature <br/> Couture</h2>
        </div>

        <div className="space-y-16">
          {signatureCollections.map((item, idx) => (
            <div key={idx} data-aos="fade-up" className="relative group overflow-hidden rounded-[3rem] bg-white border border-rose-50 shadow-xl shadow-rose-900/5">
               <div className="relative h-[450px] overflow-hidden">
                  <img src={item.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition duration-1000" alt={item.title} />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl">
                    <Crown size={24} className="text-rose-800" />
                  </div>
               </div>
               <div className="p-8">
                  <span className="text-rose-800 font-mono text-[10px] font-black uppercase tracking-widest mb-2 block">STYLE_ID: {item.id}</span>
                  <p className="text-stone-400 font-bold text-[9px] uppercase tracking-widest mb-1">{item.cat}</p>
                  <h3 className="text-3xl font-black uppercase italic leading-none text-[#1c1c1c] mb-4">{item.title}</h3>
                  <p className="text-stone-500 text-xs leading-relaxed italic mb-8">"{item.desc}"</p>
                  <button className="w-full py-5 bg-[#1c1c1c] text-white rounded-2xl font-black text-[10px] uppercase tracking-widest active:scale-95 transition flex items-center justify-center gap-2 shadow-xl shadow-stone-200">
                    Get Custom Quote <ArrowRight size={14} />
                  </button>
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- THE CRAFT DEPTH (Jealousy Section) --- */}
      <section className="py-24 px-8 bg-[#1c1c1c] text-white rounded-t-[4rem] mx-2 my-10 relative overflow-hidden shadow-2xl">
         <div className="absolute top-0 right-0 w-80 h-80 bg-rose-900 rounded-full blur-[120px] opacity-20"></div>
         <div className="relative z-10">
            <h2 className="text-4xl font-black mb-16 leading-none uppercase italic text-rose-200 text-center">Handmade <br/> Eternity.</h2>
            <div className="space-y-12">
               {[
                 { t: "Authentic Weaves", d: "Sourcing heritage silks directly from Kanchipuram and Banaras looms.", i: <Palette size={32} /> },
                 { t: "Couture Fitting", d: "Three-stage fitting process to ensure zero-gape tailoring for every body type.", i: <Scissors size={32} /> },
                 { t: "Hand-Aari Work", d: "Traditional embroidery done by master artisans with 20+ years experience.", i: <Star size={32} /> }
               ].map((item, i) => (
                  <div key={i} data-aos="fade-left" className="flex gap-6 items-start bg-white/5 p-6 rounded-3xl border border-white/10 backdrop-blur-md">
                     <div className="text-rose-200 mt-1">{item.i}</div>
                     <div>
                        <h4 className="font-black text-xl uppercase tracking-tight mb-2">{item.t}</h4>
                        <p className="text-sm opacity-60 leading-relaxed font-medium italic">"{item.d}"</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* --- THE "AURA" DUMMY MAP SECTION --- */}
      <section className="py-24 bg-[#fdfbf9] relative overflow-hidden font-sans">
         <div className="px-8 mb-10 text-center md:text-left">
            <h2 className="text-4xl font-black uppercase italic tracking-tighter leading-none mb-4 text-[#1c1c1c]">Locate The <br/> Studio</h2>
            <p className="text-rose-800 font-black text-[10px] uppercase tracking-widest mb-2 italic">Gandhipuram HQ • Coimbatore</p>
         </div>
         
         <div className="px-4">
            <div className="w-full h-[400px] rounded-full overflow-hidden bg-white relative group border-4 border-rose-50 flex items-center justify-center shadow-inner">
                {/* --- ARTISTIC FLORAL MAP UI --- */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#fff1f2_1px,transparent_1px)] bg-[size:25px_25px] opacity-40"></div>
                
                {/* Visual Ripple Design */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-rose-100 rounded-full animate-ping opacity-30"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] border border-rose-50 rounded-full"></div>

                {/* Location Marker */}
                <div className="relative z-10 flex flex-col items-center">
                    <div className="w-16 h-16 bg-rose-800 rounded-full flex items-center justify-center text-white shadow-[0_0_60px_rgba(159,18,57,0.4)]">
                        <MapPin size={32} fill="currentColor" />
                    </div>
                    <div className="mt-6 bg-white p-5 rounded-2xl shadow-2xl text-[#1c1c1c] text-center min-w-[220px] border border-rose-100">
                        <p className="text-[9px] font-black text-rose-400 uppercase leading-none mb-1">Aura Design Studio</p>
                        <h5 className="font-black italic text-lg leading-tight uppercase">Cumbum,Theni</h5>
                        <div className="mt-3 pt-3 border-t border-rose-50 flex items-center justify-center gap-2">
                           <span className="text-[8px] font-black uppercase text-green-600">Open Now</span>
                           <Sparkles size={10} className="text-rose-400" />
                        </div>
                    </div>
                </div>

                <button className="absolute bottom-10 bg-[#1c1c1c] text-white px-8 py-3 rounded-full font-black text-[10px] uppercase tracking-widest flex items-center gap-2 shadow-2xl active:scale-95 transition border border-white/10">
                    Open Coordinates <ExternalLink size={12} />
                </button>
            </div>
         </div>
      </section>

      {/* --- FOOTER: THE LUXE CARD --- */}
      <footer className="py-24 px-10 bg-white text-[#1c1c1c] font-sans overflow-hidden relative border-t border-rose-50 text-center">
        <div className="absolute bottom-0 right-0 opacity-5 text-[15rem] font-black italic -mr-20 -mb-20 pointer-events-none uppercase text-rose-900">Aura</div>
        <div className="flex flex-col items-center mb-16">
            <Scissors size={48} className="text-rose-800 mb-6" />
            <h2 className="text-3xl font-black uppercase tracking-[0.2em] mb-4 italic text-[#1c1c1c] leading-none font-serif">Aura Boutique</h2>
            <p className="max-w-xs opacity-50 text-[10px] leading-relaxed font-bold uppercase tracking-widest italic text-center">Custom Couture • Redefining Feminine Luxury in Coimbatore since 2011.</p>
        </div>
        
        <div className="grid grid-cols-2 gap-8 text-left border-y border-rose-50 py-12 mb-16 font-sans">
            <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-rose-800 mb-2">The Studio</p>
                <p className="text-[11px] font-bold leading-relaxed italic text-stone-500 uppercase">Cross Cut Road, <br/> Cumbum, Theni - 12</p>
            </div>
            <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-rose-800 mb-2">Connect</p>
                <p className="text-[11px] font-bold leading-relaxed italic text-stone-500 uppercase">design@auraboutique.com <br/> +91 99887 76655</p>
            </div>
        </div>

        <div className="flex justify-center gap-8 mb-16">
           <Instagram size={24} className="opacity-30 hover:text-pink-500 transition cursor-pointer" />
           <Facebook size={24} className="opacity-30 hover:text-blue-500 transition cursor-pointer" />
           <MessageCircle size={24} className="opacity-30 hover:text-green-500 transition cursor-pointer" />
        </div>
        
        <div className="text-[9px] font-black text-stone-300 uppercase tracking-[0.8em] pt-10">
          © 2026 AURA BOUTIQUE • CRAFTED WITH SOUL
        </div>
      </footer>

      {/* --- STICKY MOBILE ACTION BAR --- */}
      <div className="fixed bottom-0 w-full z-[60] p-4 bg-white/60 backdrop-blur-xl flex gap-3 shadow-2xl font-sans border-t border-rose-100">
         <button className="flex-1 bg-[#1c1c1c] text-white py-4 rounded-xl font-black text-[10px] uppercase tracking-widest active:scale-95 transition flex items-center justify-center gap-2">
           <ShoppingBag size={14} /> Shop Now
         </button>
         <button className="flex-1 bg-rose-800 text-white py-4 rounded-xl font-black text-[10px] uppercase tracking-widest active:scale-95 transition flex items-center justify-center gap-2 shadow-xl shadow-rose-200">
           <MessageCircle size={14} fill="currentColor" /> WhatsApp
         </button>
      </div>

    </div>
  );
};

export default ClientSixteen;