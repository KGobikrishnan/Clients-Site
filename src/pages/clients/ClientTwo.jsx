import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
// Standard Icons for Premium UI
import { 
  Phone, Facebook, Instagram, MessageCircle, MapPin, 
  Bed, Maximize2, Layers, Drone, Palette, FolderCheck, 
  Star, CheckCircle2, Navigation, Image as ImageIcon 
} from 'lucide-react';

const ClientTwo = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
      easing: 'ease-out-quart'
    });
  }, []);

  const galleryImages = [
    { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGpYKamCzYE8Z7AFDm1067yDDBsec7LE0x4w&s", title: "Modern Facade" },
    { url: "https://i.pinimg.com/736x/eb/b3/e6/ebb3e6f8681d4b5b6e748b58dba70450.jpg", title: "Luxury Living" },
    { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRaHnWYEcusK2HPlJj61OZ3hnawEAylvsCSg&s", title: "Master Bedroom" },
    { url: "https://i.pinimg.com/originals/ea/80/f0/ea80f0310c455e8ef84f19ee2d26d254.jpg", title: "Modular Kitchen" },
    { url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800", title: "Green Balcony" }
  ];

  const featuredProperties = [
    { 
      id: 1, 
      title: "Skyline Imperial Villa", 
      location: "Theni - Periyakulam Road", 
      price: "₹1.45 Cr", 
      img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=800",
      beds: 4, area: "3200 sqft", tag: "Exclusive", status: "Ready to Move"
    },
    { 
      id: 2, 
      title: "Greenfield Heights", 
      location: "Cumbum Main Road", 
      price: "₹82 L", 
      img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=800",
      beds: 3, area: "1850 sqft", tag: "Top Rated", status: "Launching Soon"
    },
    { 
      id: 3, 
      title: "Royal Palms Residency", 
      location: "Vaigai Dam Area", 
      price: "₹65 L", 
      img: "https://is1-2.housingcdn.com/012c1500/10f180e09292e8e6052401fa5fa6fa9f/v0/fs/friends_royal_palms-chawani-kota-friends_sps_international_india_private_limited.jpeg",
      beds: 3, area: "2100 sqft", tag: "Best Value", status: "90% Sold"
    }
  ];

  return (
    <div className="bg-[#fcfdfd] text-slate-900 overflow-x-hidden font-sans pb-24 selection:bg-blue-100">
      
      {/* --- PREMIUM APP NAVBAR --- */}
      <nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100 px-6 py-4 flex justify-between items-center shadow-sm">
        <h2 className="text-xl font-black text-blue-700 tracking-tighter uppercase italic">Estate<span className="text-slate-400">Flow</span></h2>
        <div className="flex gap-3">
            <a href="tel:+919876543210" className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg active:scale-90 transition">
               <Phone size={18} />
            </a>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative h-[85vh] flex items-end pb-16 px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1200" 
            alt="Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/30 to-transparent"></div>
        </div>
        
        <div className="relative z-10 w-full text-white">
          <p data-aos="fade-right" className="text-blue-400 font-black text-[10px] uppercase tracking-[0.3em] mb-3 flex items-center gap-2">
            <Navigation size={12} /> Premier Choice in Theni District
          </p>
          <h1 data-aos="fade-up" className="text-5xl font-black mb-6 leading-[1.1] uppercase italic tracking-tighter">Your Legacy <br/> <span className="text-white opacity-40">Starts Here.</span></h1>
          <div className="flex flex-col gap-3">
             <button className="bg-blue-600 py-4 rounded-2xl font-black text-xs uppercase tracking-widest active:bg-blue-700 transition shadow-xl">Browse Catalog</button>
             <button className="bg-white/10 backdrop-blur-md border border-white/20 py-4 rounded-2xl font-black text-xs uppercase tracking-widest">About SR Groups</button>
          </div>
        </div>
      </section>

      {/* --- NEW: HORIZONTAL SCROLL GALLERY --- */}
      <section className="py-12 bg-white">
        <div className="px-6 mb-6 flex justify-between items-end">
          <div>
            <p className="text-blue-600 font-black text-[10px] uppercase tracking-widest">Visual Experience</p>
            <h3 className="text-2xl font-black tracking-tighter uppercase italic">Site Gallery</h3>
          </div>
          <ImageIcon size={20} className="text-slate-300 mb-1" />
        </div>
        
        <div className="flex overflow-x-auto gap-4 px-6 no-scrollbar snap-x">
          {galleryImages.map((img, i) => (
            <div key={i} className="flex-shrink-0 w-[85vw] md:w-[400px] snap-center">
              <div className="relative h-64 rounded-[2.5rem] overflow-hidden shadow-lg border border-slate-100">
                <img src={img.url} loading="lazy" className="w-full h-full object-cover" alt={img.title} />
                <div className="absolute bottom-4 left-6 bg-white/90 backdrop-blur-md px-4 py-1 rounded-full text-[10px] font-black uppercase text-slate-800 tracking-tighter">
                  {img.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- TRUST STATS --- */}
      <section className="py-12 bg-slate-50 px-8 grid grid-cols-2 gap-4 border-y border-slate-100">
          <div data-aos="zoom-in" className="p-6 bg-white rounded-[2.5rem] border border-slate-100 text-center shadow-sm">
            <h3 className="text-3xl font-black text-blue-700 tracking-tighter italic">500+</h3>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1 leading-none">Families <br/> Settled</p>
          </div>
          <div data-aos="zoom-in" data-aos-delay="100" className="p-6 bg-slate-900 rounded-[2.5rem] border border-slate-800 text-center text-white shadow-xl">
            <h3 className="text-3xl font-black text-blue-400 tracking-tighter italic">100%</h3>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1 leading-none">Verified <br/> DTCP/RERA</p>
          </div>
      </section>

      {/* --- LISTINGS: MOBILE CARDS --- */}
      <section className="py-20 px-6">
        <div className="mb-12 text-center">
            <h2 className="text-4xl font-black tracking-tighter uppercase italic leading-none">Curated <br/> <span className="text-blue-600">Inventory</span></h2>
            <div className="w-12 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="space-y-16">
          {featuredProperties.map((p, index) => (
            <div key={index} data-aos="fade-up" className="group">
                <div className="relative h-96 overflow-hidden rounded-[3rem] shadow-2xl mb-8">
                    <img src={p.img} loading="lazy" alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-1000" />
                    <div className="absolute top-6 left-6 flex flex-col gap-2">
                      <span className="bg-white/90 backdrop-blur-md px-4 py-1 rounded-full text-[10px] font-black uppercase text-blue-700 shadow-md w-fit flex items-center gap-2">
                        <FolderCheck size={12} /> {p.tag}
                      </span>
                      <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-[10px] font-black uppercase shadow-md w-fit">{p.status}</span>
                    </div>
                </div>
                <div className="px-2">
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="text-3xl font-black tracking-tighter italic uppercase text-slate-900">{p.title}</h3>
                        <span className="text-xl font-black text-blue-600">{p.price}</span>
                    </div>
                    <p className="text-slate-400 font-bold text-[11px] uppercase mb-6 flex items-center gap-2">
                       <MapPin size={14} className="text-blue-600" /> {p.location}
                    </p>
                    <div className="grid grid-cols-2 gap-3 mb-8">
                        <div className="bg-slate-50 border border-slate-100 px-6 py-4 rounded-2xl flex items-center gap-3">
                           <Bed size={20} className="text-blue-600" />
                           <div>
                             <p className="text-[9px] font-black text-slate-400 uppercase">Bedroom</p>
                             <p className="font-black text-sm text-slate-800">{p.beds > 0 ? `${p.beds} BHK` : 'Plot'}</p>
                           </div>
                        </div>
                        <div className="bg-slate-50 border border-slate-100 px-6 py-4 rounded-2xl flex items-center gap-3">
                           <Maximize2 size={20} className="text-blue-600" />
                           <div>
                             <p className="text-[9px] font-black text-slate-400 uppercase">Sale Area</p>
                             <p className="font-black text-sm text-slate-800">{p.area}</p>
                           </div>
                        </div>
                    </div>
                    <button className="w-full py-5 bg-slate-900 text-white rounded-[1.5rem] font-black text-xs uppercase tracking-widest active:scale-95 transition shadow-lg">Request Site Visit</button>
                </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- IMMERSION: APP FEATURES GRID --- */}
      <section className="py-24 px-8 bg-blue-600 text-white rounded-[4rem] mx-2 relative overflow-hidden shadow-2xl shadow-blue-200">
         <div className="absolute top-0 right-0 w-80 h-80 bg-blue-400 rounded-full blur-[100px] opacity-30"></div>
         <div className="relative z-10">
            <h2 className="text-4xl font-black tracking-tighter uppercase italic leading-none mb-10 text-center">Digital <br/> <span className="text-blue-100">Immersion.</span></h2>
            <div className="space-y-10">
               {[
                 { t: "Drone View", d: "Aerial perspective of your future neighborhood in Cumbum Valley.", i: <Drone size={32} /> },
                 { t: "Interior Staging", d: "Swap floor tiles and wall colors live on your screen.", i: <Palette size={32} /> },
                 { t: "Verified Docs", d: "Secure digital vault for 100% parent document transparency.", i: <Layers size={32} /> }
               ].map((item, i) => (
                  <div key={i} data-aos="fade-up" className="flex gap-5 items-start bg-white/5 p-6 rounded-3xl border border-white/10 backdrop-blur-sm">
                     <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 text-blue-100">
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
      <footer className="py-24 px-10 text-center bg-white border-t border-slate-50">
        <h2 className="text-3xl font-black text-blue-700 italic tracking-tighter uppercase mb-6 leading-none">SR Properties</h2>
        <p className="text-slate-400 text-sm font-bold mb-10 italic leading-relaxed">The most trusted bridge between people and their dream sanctuaries in Theni District.</p>
        
        <div className="flex justify-center gap-5 mb-12">
           <a href="#" className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-blue-600 border border-slate-100 active:scale-90 transition shadow-sm">
             <Facebook size={20} />
           </a>
           <a href="#" className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-pink-600 border border-slate-100 active:scale-90 transition shadow-sm">
             <Instagram size={20} />
           </a>
           <a href="https://wa.me/919876543210" className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-green-600 border border-slate-100 active:scale-90 transition shadow-sm">
             <MessageCircle size={20} />
           </a>
        </div>

        <div className="space-y-4 mb-16 px-4 py-8 bg-slate-50 rounded-3xl">
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">Head Office</p>
              <p className="text-xs font-bold leading-relaxed italic text-slate-800">Theni Bypass Road, Opp. Medical College, <br/> Theni District - 625531</p>
            </div>
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1">WhatsApp Hub</p>
              <p className="text-sm font-black text-blue-600 tracking-tight">+91 98765 43210</p>
            </div>
        </div>
        
        <div className="text-[9px] font-black text-slate-200 uppercase tracking-[0.5em] border-t pt-10">
          © 2026 ESTATEFLOW • NAVI PROMOTIONS
        </div>
      </footer>

      {/* --- STICKY MOBILE ACTION BAR --- */}
      <div className="fixed bottom-0 w-full z-[60] bg-white/40 backdrop-blur-xl border-t border-slate-100 p-4 flex gap-3 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
         <button className="flex-1 bg-slate-900 text-white py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 active:scale-95 transition">
           <Layers size={14} /> Floor Plans
         </button>
         <button className="flex-1 bg-blue-600 text-white py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 active:scale-95 transition">
           <MessageCircle size={14} /> WhatsApp Hub
         </button>
      </div>

    </div>
  );
};

export default ClientTwo;