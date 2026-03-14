import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  AudioLines, 
  ShieldCheck, 
  Zap, 
  Settings, 
  Instagram, 
  Youtube, 
  MessageCircle, 
  Phone, 
  MapPin, 
  ExternalLink,
  ChevronRight,
  Gauge,
  Sparkles,
  Layers,
  Wrench,
  Award, // <-- Inga Award icon add pannittaen
  BadgeCheck
} from 'lucide-react';

const ClientEight = () => {
  useEffect(() => {
    AOS.init({ 
      duration: 800, 
      once: true,
      easing: 'ease-in-out' 
    });
  }, []);

  const signatureBuilds = [
    { 
      name: "The Sonic Beast", 
      mods: "2000W RMS | Android 13 | Component Setup", 
      img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=800",
      tag: "Audio Master"
    },
    { 
      name: "Satin Stealth", 
      mods: "Matte PPF | Ceramic Tint | De-chrome", 
      img: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=800",
      tag: "Body Styling"
    },
    { 
      name: "Neon Cabin", 
      mods: "64-Color Ambient | Leather Bucket Seats", 
      img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800",
      tag: "Interior Art"
    },
    { 
      name: "Luxury Cockpit", 
      mods: "Italian Nappa Leather | Custom Stitching", 
      img: "https://images.unsplash.com/photo-1594732832278-abd644401416?q=80&w=800",
      tag: "Premium Trim"
    }
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=600",
    "https://images.unsplash.com/photo-1603584173870-7f3ca930776b?q=80&w=600",
    "https://images.unsplash.com/photo-1562591188-12c162f72e92?q=80&w=600",
    "https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=600"
  ];

  return (
    <div className="bg-[#050505] text-white overflow-x-hidden font-sans pb-24 selection:bg-blue-500">
      
      {/* --- TECH STRIP --- */}
      <div className="bg-blue-600 text-white text-[9px] font-black text-center py-2 uppercase tracking-[0.3em] sticky top-0 z-[60] shadow-[0_0_20px_rgba(37,99,235,0.4)]">
        🔥 Flash Sale: 20% Off on Full Body PPF & Ceramic Coating | Zero Wire-Cut Installation 
      </div>

      {/* --- BRUTALIST NAV --- */}
      <nav className="fixed w-full top-8 z-50 bg-black/60 backdrop-blur-2xl border-b border-white/5 px-6 py-5 flex justify-between items-center shadow-lg">
        <h2 className="text-xl font-black tracking-tighter uppercase italic">Drive<span className="text-blue-500 font-sans">Modz</span></h2>
        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(37,99,235,0.5)] active:scale-90 transition">
            <Zap size={18} fill="currentColor" />
        </div>
      </nav>

      {/* --- HERO: THE VIBE --- */}
      <section className="relative h-[90vh] flex items-end pb-16 px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1600" alt="Supercar" className="w-full h-full object-cover scale-110 opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent"></div>
        </div>
        <div className="relative z-10 w-full text-center md:text-left">
          <span data-aos="fade-right" className="bg-blue-600 px-3 py-1 rounded-sm text-[10px] font-black uppercase tracking-widest mb-4 inline-block italic">Coimbatore's #1 Mod Studio</span>
          <h1 data-aos="fade-up" className="text-6xl font-black mb-6 leading-[0.9] tracking-tighter uppercase italic">Refine. <br/> <span className="text-blue-500 underline decoration-blue-500/30">Perform.</span> <br/> Protect.</h1>
          <p data-aos="fade-up" data-aos-delay="200" className="text-sm opacity-60 mb-8 max-w-xs mx-auto md:mx-0 font-medium leading-relaxed italic">Transforming stock cars into signature masterpieces with global-grade equipment.</p>
          <div className="flex flex-col gap-3">
             <button className="bg-blue-600 py-4 rounded-sm font-black text-[10px] uppercase tracking-widest shadow-xl active:bg-blue-700 transition">Book My Slot</button>
             <button className="bg-white/5 backdrop-blur-md border border-white/10 py-4 rounded-sm font-black text-[10px] uppercase tracking-widest">View Our Builds</button>
          </div>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="py-16 px-8 bg-white grid grid-cols-2 gap-6 border-b border-stone-100">
          {[
            { v: "500+", l: "Master Builds", i: <Settings size={20}/> },
            { v: "100%", l: "Warranty Safe", i: <ShieldCheck size={20}/> },
            { v: "9Y", l: "Excellence", i: <Award size={20}/> },
            { v: "0.1ms", l: "Audio Lag", i: <AudioLines size={20}/> }
          ].map((stat, i) => (
            <div key={i} data-aos="zoom-in" data-aos-delay={i*100} className="p-8 bg-[#050505] rounded-3xl border border-white/5 text-center flex flex-col items-center shadow-xl">
               <div className="text-blue-500 mb-2 opacity-50">{stat.i}</div>
               <h3 className="text-3xl font-black text-blue-500 tracking-tighter italic font-sans">{stat.v}</h3>
               <p className="text-[9px] font-bold text-gray-500 uppercase tracking-widest mt-1">{stat.l}</p>
            </div>
          ))}
      </section>

      {/* --- SIGNATURE SERVICES --- */}
      <section className="py-24 bg-[#0a0a0a] rounded-t-[4rem] text-white border-t border-white/5">
        <div className="px-8 mb-12">
            <p className="text-blue-500 font-bold text-[10px] uppercase tracking-widest mb-2 italic">Elite Modification</p>
            <h2 className="text-4xl font-black tracking-tighter uppercase leading-none">Studio <br/> Portfolio</h2>
        </div>
        
        <div className="flex overflow-x-auto gap-6 px-8 no-scrollbar snap-x pb-8">
            {signatureBuilds.map((b, i) => (
                <div key={i} className="flex-shrink-0 w-[85vw] bg-white/5 rounded-[3rem] overflow-hidden snap-center border border-white/5 shadow-2xl">
                    <div className="relative h-64 overflow-hidden">
                        <img src={b.img} className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700" alt={b.name} />
                        <div className="absolute top-6 left-6 bg-blue-600 text-white px-4 py-1 rounded-full text-[9px] font-black uppercase tracking-widest shadow-lg">{b.tag}</div>
                    </div>
                    <div className="p-8">
                        <h3 className="text-2xl font-black text-white uppercase italic mb-2 leading-none font-sans">{b.name}</h3>
                        <p className="text-gray-500 text-xs font-medium leading-relaxed mb-8 italic">"{b.mods}"</p>
                        <button className="w-full py-4 bg-white text-black rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 active:scale-95 transition">
                            View Specs <ChevronRight size={14} />
                        </button>
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* --- WHY US SECTION --- */}
      <section className="py-24 px-8 bg-white text-black relative">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16"></div>
        <div className="relative z-10">
            <h2 className="text-3xl font-black mb-12 leading-none uppercase italic text-black">Why DriveModz <br/> <span className="text-blue-600">Is Different?</span></h2>
            <div className="space-y-12">
                {[
                    { t: "Zero Wire-Cut", d: "Using OEM couplers ensures your car's factory warranty remains intact.", i: <Layers size={36} /> },
                    { t: "Dust-Free Bay", d: "Our PPF & Ceramic coating are applied in pressurized environments.", i: <Sparkles size={36} /> },
                    { t: "Authorised Dealer", d: "Direct partnerships with Sony, Pioneer, 3M, and Avery Dennison.", i: <BadgeCheck size={36} /> }
                ].map((item, i) => (
                    <div key={i} data-aos="fade-up" className="flex gap-6 items-start group">
                        <div className="text-white bg-black p-4 rounded-2xl group-hover:bg-blue-600 transition-all duration-500">{item.i}</div>
                        <div>
                            <h4 className="font-black text-lg uppercase tracking-tight text-black">{item.t}</h4>
                            <p className="text-xs text-gray-500 leading-relaxed font-medium italic">{item.d}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* --- MASONRY BUILD GALLERY --- */}
      <section className="py-24 bg-[#050505] border-y border-white/5">
        <div className="px-8 mb-10 text-center">
            <h2 className="text-3xl font-black text-white uppercase italic tracking-tighter leading-none mb-4">The Build <br/> Gallery</h2>
            <div className="w-12 h-1 bg-blue-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-2 gap-3 px-3">
            {gallery.map((url, i) => (
                <div key={i} data-aos="zoom-in" className={`overflow-hidden rounded-[2rem] shadow-xl border border-white/10 ${i % 3 === 0 ? 'col-span-2 h-64' : 'h-48'}`}>
                    <img src={url} className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-700" alt="Build" />
                </div>
            ))}
        </div>
      </section>

      {/* --- GOOGLE MAPS SECTION --- */}
      <section className="py-24 bg-white relative overflow-hidden text-black font-sans">
         <div className="px-8 mb-10">
            <div className="flex items-center gap-3 mb-2">
                <MapPin className="text-blue-600" size={20} />
                <p className="text-blue-600 font-bold text-[10px] uppercase tracking-widest italic leading-none">Our Studio Location</p>
            </div>
            <h2 className="text-4xl font-black uppercase italic tracking-tighter leading-none mb-6 text-black">Drive into <br/> Our Studio</h2>
         </div>
         
         <div className="px-4">
            <div className="w-full h-[400px] rounded-[3.5rem] overflow-hidden shadow-2xl border-4 border-[#050505]/5 relative">
                <iframe 
                    title="DriveModz Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15667.653655455!2d76.9536531!3d10.9822646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859abf0000001%3A0x67396a84d43642e!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen="" 
                    loading="lazy" 
                    className="grayscale hover:grayscale-0 transition-all duration-1000"
                ></iframe>
                
                <div className="absolute top-6 left-6 bg-black text-white p-5 rounded-3xl shadow-xl border border-white/10">
                    <p className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-1 leading-none">Studio HQ</p>
                    <h5 className="font-black italic">Bypass Road, Coimbatore</h5>
                    <button className="mt-3 flex items-center gap-2 text-[9px] font-black text-white/50 uppercase tracking-widest">
                        Get Directions <ExternalLink size={10} />
                    </button>
                </div>
            </div>
         </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-24 px-10 bg-black text-white font-sans overflow-hidden relative border-t border-white/5 text-center">
        <div className="absolute bottom-0 right-0 opacity-5 text-[10rem] font-black italic -mr-20 -mb-10 pointer-events-none uppercase">Drive</div>
        <div className="flex flex-col items-center mb-16">
            <Gauge size={48} className="text-blue-600 mb-6" />
            <h2 className="text-3xl font-black uppercase tracking-[0.2em] mb-4 italic font-sans">DriveModz</h2>
            <p className="max-w-xs opacity-50 text-[10px] leading-relaxed font-bold uppercase tracking-widest italic">Redefining the Coimbatore Automotive Scene Since 2015.</p>
        </div>
        
        <div className="grid grid-cols-2 gap-8 text-left border-y border-white/10 py-12 mb-16">
            <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-blue-500 mb-2">The Studio</p>
                <p className="text-[11px] leading-relaxed opacity-80 italic font-medium">Bypass Road, Coimbatore - 641045</p>
            </div>
            <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-blue-500 mb-2">Bookings</p>
                <p className="text-[11px] leading-relaxed opacity-80 italic font-medium">drivemodz@gmail.com <br/> +91 98989 77665</p>
            </div>
        </div>

        <div className="flex justify-center gap-8 mb-16">
           <Instagram size={24} className="opacity-30 hover:text-blue-500 transition cursor-pointer" />
           <Youtube size={24} className="opacity-30 hover:text-red-500 transition cursor-pointer" />
           <MessageCircle size={24} className="opacity-30 hover:text-green-500 transition cursor-pointer" />
        </div>
        
        <div className="text-[9px] font-black text-white/10 uppercase tracking-[0.8em] pt-10">
          © 2026 DRIVEMODZ • DESIGNED FOR THE BOLD
        </div>
      </footer>

      {/* --- MOBILE STICKY ACTION BAR --- */}
      <div className="fixed bottom-0 w-full z-[60] p-4 bg-black/95 backdrop-blur-md flex gap-3 shadow-2xl font-sans border-t border-white/10">
         <button className="flex-1 bg-white text-black py-4 rounded-sm font-black text-[10px] uppercase tracking-[0.2em] active:scale-95 transition flex items-center justify-center gap-2">
           <Wrench size={14} /> Book Slot
         </button>
         <button className="flex-1 border-2 border-blue-600 text-blue-600 py-4 rounded-sm font-black text-[10px] uppercase tracking-[0.2em] active:scale-95 transition flex items-center justify-center gap-2">
           <Phone size={14} /> Call Expert
         </button>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

    </div>
  );
};

export default ClientEight;