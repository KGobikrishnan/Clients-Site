import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  Sparkles, 
  Heart, 
  Crown, 
  Camera, 
  MapPin, 
  Phone, 
  Instagram, 
  Facebook, 
  ArrowRight, 
  ChevronRight,
  ExternalLink,
  Zap,
  MessageCircle,
  Gem,
  Palette,
  Flower2,
  Brush,
  Scissors,
  UserCheck,
  Star,
  Activity,
  ShieldCheck,
  Search,
  Menu
} from 'lucide-react';

const ClientEighteen = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-expo',
    });
  }, []);

  const archiveLooks = [
    { 
      id: "A-01",
      title: "Gold Tradition", 
      type: "Muhurtham Special", 
      img: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?q=80&w=800",
      vibe: "Divine & Timeless"
    },
    { 
      id: "A-02",
      title: "Satin Dusk", 
      type: "Reception Glam", 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg_I7nIR77mmeEeK5FV2PkEKT2w28p79BdVg&s",
      vibe: "Elegant & Shimmer"
    },
    { 
      id: "A-03",
      title: "Henna Muse", 
      type: "Organic Bridal", 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0sbMIhomNgQCxg1485giDwKLjvy1cysRewA&s",
      vibe: "Natural & Intricate"
    }
  ];

  return (
    <div className="bg-[#fcfaf7] text-[#1a1a1a] overflow-x-hidden font-serif selection:bg-[#c4a484] selection:text-white pb-24">
      
      {/* --- MINIMALIST FLOATING NAV --- */}
      <nav className="fixed top-8 left-1/2 -translate-x-1/2 w-[92%] z-[70] bg-white/40 backdrop-blur-3xl border border-white/40 px-8 py-5 rounded-full flex justify-between items-center shadow-sm">
        <h2 className="text-lg font-bold tracking-[0.4em] uppercase text-[#1a1a1a]">B<span className="font-light italic">Glam</span></h2>
        <div className="flex items-center gap-8">
            <div className="hidden lg:flex gap-10 text-[10px] font-black uppercase tracking-[0.3em] text-[#1a1a1a]/40">
                <a href="#about" className="hover:text-[#c4a484] transition">Artist</a>
                <a href="#archive" className="hover:text-[#c4a484] transition">Archive</a>
            </div>
            <button className="bg-[#1a1a1a] text-white p-3 rounded-full hover:bg-[#c4a484] transition active:scale-90">
                <Menu size={16} />
            </button>
        </div>
      </nav>

      {/* --- HERO: THE EDITORIAL ENTRY --- */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
            <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] bg-[#c4a484]/10 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="relative z-10 text-center">
          <span data-aos="fade-down" className="text-[#c4a484] text-[10px] font-bold uppercase tracking-[0.8em] mb-10 block">Luxury Bridal Boutique</span>
          <h1 data-aos="zoom-in" className="text-7xl md:text-[13rem] font-light leading-none mb-12 tracking-tighter italic">
            Refined <br/> <span className="font-bold not-italic text-[#1a1a1a]">Beauty.</span>
          </h1>
          <div className="flex flex-col md:flex-row justify-center items-center gap-10 mt-16" data-aos="fade-up" data-aos-delay="400">
             <button className="px-12 py-5 bg-[#1a1a1a] text-white rounded-full font-bold text-[10px] uppercase tracking-widest hover:shadow-2xl transition">Book The Glow</button>
             <p className="max-w-[200px] text-left text-[10px] font-medium leading-relaxed opacity-40 uppercase tracking-widest">Handcrafted bridal transformations based in South India.</p>
          </div>
        </div>
      </section>

      {/* --- MARQUEE: THE SIGNATURE PHILOSOPHY --- */}
      <div className="bg-[#1a1a1a] py-8 overflow-hidden whitespace-nowrap flex select-none">
          <p className="text-[#c4a484] text-3xl md:text-5xl font-light italic uppercase tracking-tighter animate-marquee">
            Custom Couture • Minimal Dewy Glow • Heritage Styling • Precision Draping •&nbsp;
          </p>
          <p className="text-[#c4a484] text-3xl md:text-5xl font-light italic uppercase tracking-tighter animate-marquee">
            Custom Couture • Minimal Dewy Glow • Heritage Styling • Precision Draping •&nbsp;
          </p>
      </div>

      {/* --- BOUTIQUE ARCHIVE GRID --- */}
      <section id="archive" className="py-32 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
            <div className="mb-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                <h2 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase leading-none">The 2026 <br/> <span className="italic font-light">Archive</span></h2>
                <div className="flex items-center gap-4 text-[#c4a484]">
                    <span className="text-[10px] font-black tracking-widest uppercase">Explore Series</span>
                    <ChevronRight size={20} />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                {archiveLooks.map((look, i) => (
                    <div key={i} data-aos="fade-up" data-aos-delay={i*100} className={`md:col-span-${i === 0 ? '7' : (i === 1 ? '5' : '12')} group cursor-pointer`}>
                        <div className="overflow-hidden rounded-sm relative aspect-[4/5] bg-stone-100">
                            <img src={look.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-1000 scale-105 group-hover:scale-100" alt={look.title} />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition duration-500"></div>
                        </div>
                        <div className="mt-8 flex justify-between items-start border-b border-stone-100 pb-8">
                            <div>
                                <p className="text-[#c4a484] text-[9px] font-bold uppercase tracking-widest mb-1">{look.type}</p>
                                <h4 className="text-2xl font-bold uppercase tracking-tight">{look.title}</h4>
                            </div>
                            <span className="text-stone-300 italic text-xs">"{look.vibe}"</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* --- METRICS: MINIMALIST LUXE --- */}
      <section className="py-24 px-8 bg-[#fcfaf7]">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
                { v: "1500+", l: "Weddings" },
                { v: "12Y", l: "Excellence" },
                { v: "HD", l: "Canvas" },
                { v: "100%", l: "Trial Slot" }
            ].map((s, i) => (
                <div key={i} className="text-center">
                    <h3 className="text-4xl md:text-5xl font-light italic text-[#c4a484] mb-2">{s.v}</h3>
                    <p className="text-[8px] font-black text-stone-400 uppercase tracking-widest">{s.l}</p>
                </div>
            ))}
        </div>
      </section>

      {/* --- ARTISTIC MIRROR MAP (The Boutique Vibe) --- */}
      <section className="py-32 bg-white px-4 relative overflow-hidden">
         <div className="max-w-6xl mx-auto">
            <div className="mb-20 text-center">
                <h2 className="text-4xl md:text-6xl font-light uppercase tracking-tighter italic text-[#1a1a1a]">Visit The <span className="font-bold not-italic">Atelier</span></h2>
                <p className="mt-4 text-[#c4a484] text-[10px] font-bold uppercase tracking-widest italic">Race Course • Coimbatore</p>
            </div>
            
            <div className="w-full h-[500px] rounded-sm overflow-hidden bg-[#fafafa] relative group flex items-center justify-center border border-stone-100">
                {/* --- MODERN GRID MAP UI --- */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                
                {/* Floating Elements for Mirror Effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-white border border-stone-100 rounded-full shadow-2xl rotate-45 animate-[pulse_8s_infinite] opacity-50"></div>

                {/* Location Pin Design */}
                <div className="relative z-10 flex flex-col items-center">
                    <div className="w-20 h-20 bg-[#1a1a1a] rounded-full flex items-center justify-center text-white shadow-2xl scale-110">
                        <MapPin size={32} className="text-[#c4a484]" fill="currentColor" />
                    </div>
                    <div className="mt-8 bg-white p-8 rounded-sm shadow-xl text-[#1a1a1a] text-center border-t-4 border-[#c4a484] min-w-[280px]">
                        <p className="text-[10px] font-black text-stone-300 uppercase tracking-widest mb-2 leading-none">Studio Location</p>
                        <h5 className="font-bold italic text-lg leading-tight uppercase">Elite Bridal Center</h5>
                        <p className="text-[10px] mt-4 font-medium opacity-40 leading-relaxed uppercase tracking-widest">14, Royal Square, Coimbatore</p>
                    </div>
                </div>

                <button className="absolute bottom-12 bg-white border border-stone-200 text-[#1a1a1a] px-10 py-4 rounded-full font-bold text-[10px] uppercase tracking-widest flex items-center gap-3 active:scale-95 transition shadow-sm">
                    Open in Maps <ExternalLink size={12} className="text-[#c4a484]" />
                </button>
            </div>
         </div>
      </section>

      {/* --- FOOTER: BOUTIQUE CARD --- */}
      <footer className="py-32 px-10 bg-[#1a1a1a] text-white font-sans text-center relative">
        <div className="max-w-4xl mx-auto relative z-10">
            <Brush size={40} className="text-[#c4a484] mx-auto mb-8 opacity-60" />
            <h2 className="text-3xl md:text-5xl font-light italic leading-none mb-10 tracking-tighter">Crafting Confidence <br/> Since 2015.</h2>
            
            <div className="flex justify-center gap-12 mb-20 border-y border-white/10 py-10">
                <Instagram size={20} className="hover:text-[#c4a484] transition cursor-pointer" />
                <Facebook size={20} className="hover:text-[#c4a484] transition cursor-pointer" />
                <MessageCircle size={20} className="hover:text-[#c4a484] transition cursor-pointer" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-[10px] font-bold uppercase tracking-[0.5em] text-white/30">
                <p>Based in Race Course Road, CBE</p>
                <p>Contact: +91 99000 11000</p>
            </div>
        </div>
        
        <div className="mt-32 pt-8 text-[9px] font-black text-white/5 uppercase tracking-[1em]">
          © 2026 BRIDEGLAM • THE BOUTIQUE EDITORIAL
        </div>
      </footer>

      {/* --- ACTION BAR: FLOATING PILL --- */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 w-fit z-[60] p-1 bg-[#1a1a1a]/80 backdrop-blur-3xl border border-white/10 rounded-full flex gap-1 shadow-2xl shadow-black/50">
         <button className="bg-white text-[#1a1a1a] px-8 py-4 rounded-full font-bold text-[10px] uppercase tracking-widest active:scale-95 transition flex items-center gap-2">
           <Gem size={14} /> Price List
         </button>
         <button className="bg-[#c4a484] text-white px-8 py-4 rounded-full font-bold text-[10px] uppercase tracking-widest active:scale-95 transition flex items-center gap-2">
           <Zap size={14} fill="currentColor" /> Book Trial
         </button>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 30s linear infinite;
        }
        .stroke-text {
          -webkit-text-stroke: 1px #1a1a1a;
          color: transparent;
        }
      `}</style>

    </div>
  );
};

export default ClientEighteen;