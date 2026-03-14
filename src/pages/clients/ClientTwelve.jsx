import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  Microscope, 
  FlaskConical, 
  Stethoscope, 
  Activity, 
  Clock, 
  ShieldCheck, 
  Smartphone, 
  MapPin, 
  Phone, 
  ExternalLink,
  ChevronRight,
  ClipboardCheck,
  Zap,
  TestTube2,
  Syringe,
  MessageCircle,
  Instagram,
  Facebook,
  Cpu,
  Navigation,
  CheckCircle,
  ArrowRight,
  ShieldAlert,
  Dna
} from 'lucide-react';

const ClientTwelve = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-quart',
    });
  }, []);

  const healthPackages = [
    { 
      id: "P1",
      title: "Full Body", 
      tests: "85+ Tests", 
      desc: "Profiling of Vitamin D, B12 & Cardiac.",
      price: "₹2,499",
      tag: "Best"
    },
    { 
      id: "P2",
      title: "Diabetes", 
      tests: "HbA1c Vital", 
      desc: "Precision tracking for diabetic care.",
      price: "₹899",
      tag: "Top"
    },
    { 
      id: "P3",
      title: "Women", 
      tests: "Thyroid & PCOS", 
      desc: "Hormonal and bone health screening.",
      price: "₹1,799",
      tag: "Vital"
    },
    { 
      id: "P4",
      title: "Senior", 
      tests: "Elder Care", 
      desc: "Kidney, PSA & Arthritis profile.",
      price: "₹1,999",
      tag: "Safety"
    }
  ];

  const clinicGallery = [
    { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV7kcjmpPjE56k58WPMBsfjPbPVRj0gLz-Fg&s", title: "Automated Analyzers" },
    { url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQxm20A0sc5DZ9FSZHn8EVKBVdZgV0vseX-Q&s", title: "Sterile Sample Zone" },
    { url: "https://images.unsplash.com/photo-1582719202047-76d3432ee323?q=80&w=800", title: "Expert Phlebotomy" },
    { url: "https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?q=80&w=800", title: "Molecular Lab" }
  ];

  return (
    <div className="bg-[#fcfdfe] text-slate-900 overflow-x-hidden font-sans pb-24 selection:bg-blue-600 selection:text-white">
      
      {/* --- PULSE TOP BAR --- */}
      <div className="bg-[#0052cc] text-white text-[10px] font-black text-center py-2.5 uppercase tracking-[0.3em] sticky top-0 z-[60] shadow-lg">
        ⚡ Live: Home Sample Collection Available in Theni & Cumbum
      </div>

      {/* --- CYBER-NAVBAR --- */}
      <nav className="fixed w-full top-9 z-50 bg-white/70 backdrop-blur-xl border-b border-blue-50 px-4 py-4 flex justify-between items-center shadow-lg shadow-blue-900/5">
        <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-200">
                <Activity size={18} className="text-white animate-pulse" />
            </div>
            <h2 className="text-lg font-black tracking-tighter uppercase italic text-blue-700">Cure<span className="text-slate-400 font-sans">Lab</span></h2>
        </div>
        <a href="tel:+918877665544" className="w-9 h-9 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 active:scale-90 transition">
            <Phone size={16} />
        </a>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative h-[85vh] flex items-end pb-12 px-6 overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe9WW36Qtfv54YPz3ppbQlUKUWdBokZGPRZw&s" alt="Lab Tech" className="w-full h-full object-cover scale-110 opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent"></div>
        </div>
        <div className="relative z-10 w-full">
          <span data-aos="fade-right" className="bg-blue-600/10 text-blue-600 px-3 py-1 rounded-md text-[10px] font-black uppercase tracking-widest mb-4 inline-flex items-center gap-2 border border-blue-100">
            <ShieldCheck size={12} /> Theni's #1 Robotic Lab
          </span>
          <h1 data-aos="fade-up" className="text-5xl font-black mb-6 leading-[1] tracking-tighter uppercase italic text-slate-900">
            Precision <br/> <span className="text-blue-600">Reports.</span>
          </h1>
          <div className="flex flex-col gap-3">
             <button className="bg-blue-600 text-white py-4 rounded-xl font-black text-[10px] uppercase tracking-widest shadow-xl active:bg-blue-700 transition flex items-center justify-center gap-2">
               <Syringe size={14} /> Home Sample Pickup
             </button>
          </div>
        </div>
      </section>

      {/* --- STATS GRID --- */}
      <section className="py-12 px-4 bg-white grid grid-cols-2 gap-3 border-b border-blue-50">
          {[
            { v: "50K+", l: "Theni Clients", i: <CheckCircle size={18}/> },
            { v: "12 Hr", l: "Report TAT", i: <Clock size={18}/> },
            { v: "100%", l: "Automated", i: <Cpu size={18}/> },
            { v: "Fast", l: "Pickup", i: <Navigation size={18}/> }
          ].map((stat, i) => (
            <div key={i} data-aos="zoom-in" className="p-4 bg-[#f8fbff] rounded-2xl border border-blue-50 text-center flex flex-col items-center">
               <div className="text-blue-600 mb-1 opacity-40">{stat.i}</div>
               <h3 className="text-xl font-black text-blue-700 tracking-tighter italic">{stat.v}</h3>
               <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">{stat.l}</p>
            </div>
          ))}
      </section>

      {/* --- DYNAMIC REPORT MOCKUP --- */}
      <section className="py-20 px-6 bg-[#0d172a] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[120px] opacity-20"></div>
        <div className="relative z-10">
            <h2 className="text-3xl font-black tracking-tighter uppercase italic text-blue-400 mb-8 leading-none">Smart <br/> Portal</h2>
            <div className="bg-white p-5 rounded-[2rem] shadow-2xl text-slate-900" data-aos="flip-up">
                <div className="flex justify-between items-center mb-4 pb-3 border-b border-slate-100">
                    <p className="text-[8px] font-black text-blue-600 uppercase">Patient: #4529</p>
                    <div className="px-2 py-0.5 bg-green-100 rounded-full text-green-600 font-bold text-[8px] uppercase">Ready</div>
                </div>
                <div className="space-y-3">
                    <div className="flex justify-between items-center"><p className="text-[10px] font-bold">Hemoglobin</p><p className="text-[10px] font-black text-blue-600 italic">14.8</p></div>
                    <div className="w-full h-1 bg-slate-100 rounded-full overflow-hidden"><div className="w-[85%] h-full bg-blue-600"></div></div>
                </div>
                <button className="w-full mt-6 py-3 border-2 border-blue-600 text-blue-600 rounded-xl font-black text-[9px] uppercase tracking-widest flex items-center justify-center gap-2">
                   <Smartphone size={12} /> WhatsApp Report
                </button>
            </div>
        </div>
      </section>

      {/* --- HEALTH SCREENING: 1x2 GRID IN MOBILE --- */}
      <section className="py-20 px-4 bg-white">
        <div className="text-center mb-10">
            <p className="text-blue-600 font-bold text-[10px] uppercase tracking-widest mb-1 italic">Preventive Care</p>
            <h2 className="text-3xl font-black tracking-tighter uppercase italic leading-none text-slate-800">Health <br/> Screening</h2>
        </div>

        {/* --- GRID MODIFIED: 2 COLUMNS ON MOBILE --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {healthPackages.map((p, idx) => (
            <div key={idx} data-aos="fade-up" className="relative p-4 bg-white rounded-2xl border border-blue-50 shadow-lg shadow-blue-900/5 group overflow-hidden flex flex-col justify-between h-full">
               <div className="relative z-10">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[8px] font-black uppercase text-blue-500">{p.tag}</span>
                    <ClipboardCheck size={12} className="text-blue-200" />
                  </div>
                  <h3 className="text-sm font-black uppercase italic text-slate-900 leading-tight mb-1">{p.title}</h3>
                  <p className="text-blue-600 font-bold text-[9px] mb-2">{p.tests}</p>
                  <p className="text-slate-400 text-[9px] leading-tight mb-4 italic line-clamp-2">"{p.desc}"</p>
               </div>
               <div className="pt-3 border-t border-slate-50 flex flex-col gap-2">
                  <p className="text-sm font-black text-slate-900">{p.price}</p>
                  <button className="w-full bg-slate-900 text-white py-2 rounded-lg font-black text-[8px] uppercase tracking-widest active:scale-95 transition">Book</button>
               </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- FACILITY GALLERY --- */}
      <section className="py-20 bg-[#f8fbff] border-y border-blue-50">
        <div className="px-6 mb-8 flex justify-between items-end">
            <h2 className="text-2xl font-black tracking-tighter uppercase italic leading-none">Facility</h2>
            <Microscope size={20} className="text-blue-600" />
        </div>
        <div className="flex overflow-x-auto gap-4 px-6 no-scrollbar snap-x">
           {clinicGallery.map((img, i) => (
             <div key={i} className="flex-shrink-0 w-[70vw] h-60 rounded-3xl overflow-hidden snap-center shadow-xl relative">
                <img src={img.url} loading="lazy" className="w-full h-full object-cover" alt="Clinic" />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[8px] font-black uppercase text-blue-700 tracking-tighter border border-blue-50 shadow-sm">
                    {img.title}
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* --- DUMMY ARTISTIC MAP --- */}
      <section className="py-20 bg-white px-4 relative overflow-hidden">
         <div className="flex items-center gap-2 mb-6 text-blue-600">
            <MapPin size={18} />
            <p className="font-bold text-[9px] uppercase tracking-widest italic">Theni Bypass Road</p>
         </div>
         
         <div className="w-full h-[300px] rounded-[2.5rem] overflow-hidden bg-slate-100 relative group shadow-inner border-2 border-slate-50">
            <div className="absolute inset-0 bg-[#e5e7eb] opacity-40"></div>
            <div className="absolute top-[40%] left-0 w-full h-10 bg-white/50 -rotate-3"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-[0_0_30px_rgba(37,99,235,0.6)] animate-bounce">
                    <Activity size={20} />
                </div>
            </div>
            <button className="absolute bottom-4 left-4 bg-blue-600 text-white px-4 py-2 rounded-xl font-black text-[9px] uppercase tracking-widest flex items-center gap-2 shadow-2xl">
                Open Maps <ExternalLink size={10} />
            </button>
         </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-20 px-8 bg-white text-slate-900 font-sans border-t border-slate-100 text-center">
        <div className="flex flex-col items-center mb-10">
            <FlaskConical size={40} className="text-blue-600 mb-4" />
            <h2 className="text-2xl font-black uppercase tracking-[0.2em] mb-2 italic text-blue-700">CureLab</h2>
            <p className="max-w-xs opacity-50 text-[9px] leading-relaxed font-bold uppercase tracking-widest italic">Theni District's Trusted Diagnostic Partner.</p>
        </div>
        
        <div className="grid grid-cols-2 gap-6 text-left border-y border-slate-50 py-10 mb-10">
            <div>
                <p className="text-[9px] font-black uppercase tracking-widest text-blue-600 mb-1">Center</p>
                <p className="text-[10px] leading-relaxed italic text-slate-500 uppercase">Theni Bypass, <br/> Opp. Medical College</p>
            </div>
            <div>
                <p className="text-[9px] font-black uppercase tracking-widest text-blue-600 mb-1">Connect</p>
                <p className="text-[10px] leading-relaxed italic text-slate-500">care@curelab.com <br/> +91 88776 65544</p>
            </div>
        </div>

        <div className="flex justify-center gap-6 mb-10 opacity-30">
           <Instagram size={20} /><Facebook size={20} /><MessageCircle size={20} />
        </div>
        
        <div className="text-[8px] font-black text-slate-200 uppercase tracking-[0.5em]">
          © 2026 CURELAB THENI
        </div>
      </footer>

      {/* --- STICKY MOBILE ACTION BAR --- */}
      <div className="fixed bottom-0 w-full z-[60] p-4 bg-white/60 backdrop-blur-xl flex gap-3 shadow-2xl font-sans border-t border-blue-50">
         <button className="flex-1 bg-slate-900 text-white py-3.5 rounded-xl font-black text-[9px] uppercase tracking-widest active:scale-95 transition">
           Reports
         </button>
         <button className="flex-1 bg-blue-600 text-white py-3.5 rounded-xl font-black text-[9px] uppercase tracking-widest active:scale-95 transition">
           Book Now
         </button>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

    </div>
  );
};

export default ClientTwelve;