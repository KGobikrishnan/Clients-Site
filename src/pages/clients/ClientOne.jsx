import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const ClientOne = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      mirror: true,
      easing: 'ease-out-back',
    });
  }, []);

  const woodTypes = [
    { name: "Burma Teak", origin: "Imported", strength: "10/10", img: "https://bfppl.com/wp-content/uploads/2023/03/burma-teak-application-11-min.jpg" },
    { name: "Indian Rosewood", origin: "Local", strength: "9/10", img: "https://5.imimg.com/data5/WHATSAPP/Default/2024/3/404577862/PT/SD/PB/32339738/new-product-500x500.jpeg" },
    { name: "American Walnut", origin: "Imported", strength: "8/10", img: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?q=80&w=600" },
    { name: "Country Wood", origin: "Local", strength: "7/10", img: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=600" }
  ];

  return (
    <div className="bg-[#fcfaf7] text-[#3e2723] overflow-x-hidden font-sans">
      
      {/* --- APP-STYLE NAV --- */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-xl border-b border-orange-100 px-6 py-4 flex justify-between items-center shadow-sm">
        <h2 className="text-xl font-black tracking-tighter text-[#5d4037] uppercase italic"><span className="text-orange-600">Timbers</span></h2>
        <div className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 border border-orange-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
            </div>
        </div>
      </nav>

      {/* --- HERO: THE WOOD STORY --- */}
      <section className="relative h-[95vh] flex items-end pb-20 px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=1600" 
            alt="Timber Workshop" 
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#3e2723] via-[#3e2723]/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 w-full text-white">
          <span data-aos="fade-right" className="bg-orange-600 px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-widest mb-4 inline-block italic">Crafting Since 1998</span>
          <h1 data-aos="fade-up" className="text-5xl md:text-8xl font-black mb-4 leading-tight tracking-tighter uppercase italic">The Art of <br/> <span className="text-orange-500">Living Wood.</span></h1>
          <p data-aos="fade-up" data-aos-delay="200" className="text-sm md:text-lg font-medium opacity-80 mb-8 max-w-md leading-relaxed">
            Sourcing the world's finest logs to build your family's heritage. Hand-finished in our Cumbum Yard.
          </p>
          <div className="flex flex-col md:flex-row gap-3" data-aos="fade-up" data-aos-delay="400">
             <button className="bg-orange-600 py-4 px-8 rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl">Browse Wood Library</button>
             <button className="bg-white/10 backdrop-blur-md border border-white/20 py-4 px-8 rounded-2xl font-black text-xs uppercase tracking-widest">Our Legacy</button>
          </div>
        </div>
        <div className="absolute bottom-6 right-6 text-white/30 text-[80px] font-black italic select-none">V-T</div>
      </section>

      {/* --- QUICK STATS: MOBILE GRID --- */}
      <section className="py-12 bg-white px-8 grid grid-cols-2 gap-4 border-b border-orange-50">
          <div data-aos="zoom-in" className="p-6 bg-stone-50 rounded-[2.5rem] border border-stone-100 text-center">
            <h3 className="text-3xl font-black text-orange-700 tracking-tighter italic">25+</h3>
            <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mt-1">Years Experience</p>
          </div>
          <div data-aos="zoom-in" data-aos-delay="100" className="p-6 bg-stone-50 rounded-[2.5rem] border border-stone-100 text-center">
            <h3 className="text-3xl font-black text-orange-700 tracking-tighter italic">10K+</h3>
            <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mt-1">Logs Processed</p>
          </div>
      </section>

      {/* --- SEASONING PROCESS: STORYTELLING --- */}
      <section className="py-24 px-8">
         <div className="flex flex-col gap-10">
            <div data-aos="fade-right">
                <p className="text-orange-600 font-black text-[10px] uppercase tracking-widest mb-2">The Quality Secret</p>
                <h2 className="text-4xl font-black tracking-tighter leading-tight uppercase italic">Natural <br/> Seasoning</h2>
            </div>
            <div className="relative" data-aos="zoom-in">
               <img src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=800" className="rounded-[3.5rem] shadow-2xl grayscale hover:grayscale-0 transition duration-1000" alt="Timber Log" />
               <div className="absolute -bottom-6 -right-4 bg-orange-600 text-white p-6 rounded-3xl shadow-xl">
                  <p className="font-black text-2xl tracking-tighter italic">12 Weeks</p>
                  <p className="text-[10px] font-bold uppercase leading-none opacity-80">Nature's drying</p>
               </div>
            </div>
            <p data-aos="fade-up" className="text-stone-500 font-medium leading-loose text-sm italic">
                Every log in our Cumbum yard undergoes a rigorous natural seasoning process. We don't use chemical kilns. We let the Theni air slowly stabilize the moisture, ensuring your furniture never warps or cracks for generations.
            </p>
         </div>
      </section>

      {/* --- WOOD TYPE EXPLORER: ENGAGING GRID --- */}
      <section className="bg-[#f3ece4] py-24 px-6 rounded-[4rem] mx-2">
        <div className="text-center mb-12">
            <p className="text-orange-700 font-black text-[10px] uppercase tracking-widest mb-2">Global & Local Sourcing</p>
            <h2 data-aos="fade-up" className="text-3xl font-black tracking-tighter uppercase italic">The Timber Library</h2>
        </div>

        <div className="space-y-12">
          {woodTypes.map((wood, index) => (
            <div key={index} data-aos="fade-up" className="bg-white rounded-[3rem] p-4 shadow-sm border border-stone-100 group">
                <div className="relative h-64 overflow-hidden rounded-[2.5rem]">
                    <img src={wood.img} alt={wood.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-1000" />
                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-1 rounded-full text-[10px] font-black uppercase text-orange-700 tracking-tighter shadow-md">{wood.origin}</div>
                </div>
                <div className="p-8">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-2xl font-black tracking-tight italic uppercase">{wood.name}</h3>
                        <span className="text-orange-600 font-black text-xs italic">★ {wood.strength}</span>
                    </div>
                    <p className="text-stone-400 text-sm font-medium leading-relaxed mb-8 italic">The choice for premium durability and rich textures.</p>
                    <button className="w-full py-4 border-2 border-[#3e2723] rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-[#3e2723] hover:text-white transition">Get Quote per Cu.Ft</button>
                </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- RECENT PROJECTS: MASSIVE VISUALS --- */}
      <section className="py-24 px-8 space-y-32">
        <div className="text-center">
            <h2 className="text-3xl font-black tracking-tighter uppercase italic">Iconic Works</h2>
            <div className="h-1 w-12 bg-orange-600 mx-auto mt-2"></div>
        </div>

        <div className="space-y-40">
          <div className="flex flex-col gap-10">
            <div className="group overflow-hidden rounded-[3rem] shadow-2xl" data-aos="zoom-in">
              <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2f/7b/d6/bd/caption.jpg?w=900&h=500&s=1" alt="Work 1" className="group-hover:scale-105 transition duration-1000" />
            </div>
            <div data-aos="fade-up">
              <span className="text-orange-600 font-black text-4xl italic opacity-20">01.</span>
              <h3 className="text-3xl font-black mb-4 tracking-tighter uppercase italic">The Heritage Villa</h3>
              <p className="text-stone-500 text-sm leading-loose font-medium mb-6 italic">A massive project in Theni using aged Indian Rosewood for structural beams and custom doors.</p>
              <button className="text-orange-700 font-black text-xs uppercase tracking-widest border-b-2 border-orange-100 pb-1">View Full Case Study</button>
            </div>
          </div>

          <div className="flex flex-col gap-10">
            <div className="group overflow-hidden rounded-[3rem] shadow-2xl" data-aos="zoom-in">
              <img src="https://images.unsplash.com/photo-1538688525198-9b88f6f53126?q=80&w=800" alt="Work 2" className="group-hover:scale-105 transition duration-1000" />
            </div>
            <div data-aos="fade-up">
              <span className="text-orange-600 font-black text-4xl italic opacity-20">02.</span>
              <h3 className="text-3xl font-black mb-4 tracking-tighter uppercase italic">Modern Loft Studio</h3>
              <p className="text-stone-500 text-sm leading-loose font-medium mb-6 italic">Hand-finished Burma Teak furniture for a contemporary office space in Coimbatore.</p>
              <button className="text-orange-700 font-black text-xs uppercase tracking-widest border-b-2 border-orange-100 pb-1">View Full Case Study</button>
            </div>
          </div>
        </div>
      </section>

      {/* --- CEO QUOTE: HIGH IMPACT --- */}
      <section className="bg-orange-600 py-32 text-center text-white px-10 rounded-[4rem] mx-2 mb-10 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[100px] rounded-full"></div>
          <div data-aos="fade-up">
              <p className="text-6xl mb-8 font-serif opacity-30">“</p>
              <h2 className="text-2xl md:text-5xl font-light italic max-w-4xl mx-auto leading-tight tracking-tight">
                "Wood is a living material. We treat it as an investment for your future generations."
              </h2>
              <div className="h-1 w-12 bg-white/30 mx-auto my-8"></div>
              <p className="font-black uppercase tracking-[0.3em] text-[10px]">Founder</p>
          </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#1a110e] text-white/40 py-20 px-8 text-center border-t border-white/5">
        <h2 className="text-3xl font-black text-white italic mb-4 tracking-tighter uppercase">Timbers</h2>
        <p className="max-w-xs mx-auto mb-12 text-sm font-medium italic">Premium logs and handcrafted furniture since 1998. The pride of Cumbum.</p>
        
        <div className="grid grid-cols-2 gap-8 text-left mb-16 border-y border-white/5 py-12">
            <div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-500 mb-4">Cumbum Yard</h4>
                <p className="text-[11px] leading-relaxed text-white font-bold">Cumbum-Theni Road,<br/> Industrial Zone, 625531</p>
            </div>
            <div>
                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-500 mb-4">Support</h4>
                <p className="text-[11px] leading-relaxed text-white font-bold">info@timber.com<br/>+91 99000 77000</p>
            </div>
        </div>

        <p className="text-[9px] uppercase tracking-[0.8em] font-black opacity-20">
          © 2026 Crafted by Navi Promotions
        </p>
      </footer>

      {/* --- MOBILE STICKY ACTION BAR --- */}
      <div className="fixed bottom-0 w-full z-[60] bg-white/20 backdrop-blur-xl border-t border-white/10 p-4 flex gap-3 shadow-2xl">
         <button className="flex-1 bg-[#3e2723] text-white py-4 rounded-2xl font-black text-center text-[10px] uppercase tracking-widest shadow-2xl">Call Sales</button>
         <button className="flex-1 bg-orange-600 text-white py-4 rounded-2xl font-black text-center text-[10px] uppercase tracking-widest shadow-2xl">WhatsApp Quote</button>
      </div>

    </div>
  );
};

export default ClientOne;