import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  ShieldCheck, 
  Users, 
  Briefcase, 
  HeartPulse, 
  Car, 
  CheckCircle, 
  ChevronRight,
  Headphones,
  FileText,
  BadgeCheck,
  Instagram,
  Facebook,
  PhoneCall,
  ArrowUpRight,
  Zap,
  Globe,
  Award,
  MessageCircle // <-- Missing import fixed here
} from 'lucide-react';

const ClientSix = () => {
  useEffect(() => {
    AOS.init({ 
      duration: 800, 
      once: true,
      easing: 'ease-out-quart' 
    });
  }, []);

  const insurancePlans = [
    { 
      title: "Family Health Guard", 
      icon: <HeartPulse size={30}/>, 
      desc: "Cashless hospitalization in 5000+ premium network hospitals across India.",
      tag: "Best for Families",
      color: "bg-rose-50 text-rose-600"
    },
    { 
      title: "Full Vehicle Shield", 
      icon: <Car size={30}/>, 
      desc: "Zero-depreciation cover with 24/7 spot assistance and instant policy renewal.",
      tag: "Instant Approval",
      color: "bg-blue-50 text-blue-600"
    },
    { 
      title: "Life Fortress", 
      icon: <ShieldCheck size={30}/>, 
      desc: "Strategic financial security plans tailored for your family's long-term legacy.",
      tag: "High Returns",
      color: "bg-amber-50 text-amber-600"
    },
    { 
      title: "Corporate Asset", 
      icon: <Briefcase size={30}/>, 
      desc: "Comprehensive risk management for small businesses and large enterprises.",
      tag: "For Business",
      color: "bg-indigo-50 text-indigo-600"
    }
  ];

  return (
    <div className="bg-[#f4f7f9] text-[#1a2b3c] font-serif overflow-x-hidden pb-24">
      
      {/* --- GEOMETRIC NAVBAR --- */}
      <nav className="fixed w-full top-0 z-50 bg-[#0d1b2a] text-white px-6 py-5 flex justify-between items-center shadow-2xl">
        <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-amber-500 rounded-sm rotate-45 flex items-center justify-center">
                <ShieldCheck size={18} className="-rotate-45 text-[#0d1b2a]" />
            </div>
            <h2 className="text-xl font-bold tracking-widest uppercase font-sans">Guardia<span className="text-amber-500">Insure</span></h2>
        </div>
        <a href="tel:+919900055000" className="bg-amber-500 text-[#0d1b2a] p-2.5 rounded-full active:scale-90 transition shadow-lg">
            <PhoneCall size={18} />
        </a>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-16 px-6 bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[#f8f1e6] hidden md:block"></div>
        <div className="relative z-10">
            <div data-aos="fade-right">
                <span className="text-amber-600 font-bold font-sans uppercase tracking-[0.3em] text-[10px] mb-4 block">Since 2005 • IRDAI Registered Partner</span>
                <h1 className="text-5xl md:text-8xl font-black leading-[1.05] text-[#0d1b2a] mb-6 tracking-tighter">
                  Securing <br/> What Matters <br/> <span className="italic text-amber-600 underline decoration-amber-200">The Most.</span>
                </h1>
                <p className="text-slate-500 text-sm leading-relaxed mb-10 max-w-xs font-sans font-medium">
                  Theni District's premier insurance advisors. We bridge the gap between risk and absolute financial freedom.
                </p>
                <div className="flex gap-4 font-sans mb-16">
                    <button className="flex-1 bg-[#0d1b2a] text-white py-4 rounded-sm font-bold text-[10px] uppercase tracking-widest shadow-2xl active:scale-95 transition">Get Free Audit</button>
                    <button className="flex-1 border-2 border-[#0d1b2a] text-[#0d1b2a] py-4 rounded-sm font-bold text-[10px] uppercase tracking-widest active:scale-95 transition">Check Premium</button>
                </div>
            </div>
            
            <div className="relative" data-aos="zoom-in" data-aos-delay="200">
                <img 
                    src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=1000" 
                    className="rounded-sm shadow-2xl grayscale hover:grayscale-0 transition duration-1000 border-b-[12px] border-amber-500 object-cover h-[400px] w-full" 
                    alt="Legacy protection" 
                />
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-6 rounded-sm shadow-xl border border-slate-100">
                    <p className="text-3xl font-black text-[#0d1b2a] font-sans">99.8%</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-sans">Claim Success</p>
                </div>
            </div>
        </div>
      </section>

      {/* --- TRUST TICKER --- */}
      <div className="bg-[#0d1b2a] py-8 overflow-hidden border-y border-amber-500/20 font-sans">
        <div className="flex gap-12 px-6 whitespace-nowrap animate-marquee">
            {['CASHLESS NETWORK', 'PAPERLESS CLAIMS', '24/7 ROADSIDE ASSIST', 'LOWEST PREMIUMS', 'TAX BENEFITS'].map((text, i) => (
                <div key={i} className="flex items-center gap-3 text-amber-500 font-black text-[10px] tracking-[0.2em]">
                    <BadgeCheck size={16} fill="currentColor" className="text-[#0d1b2a]" /> {text}
                </div>
            ))}
        </div>
      </div>

      {/* --- ASYMMETRIC PLANS SECTION --- */}
      <section className="py-24 px-6 bg-white font-sans">
        <div className="mb-16">
            <h2 className="text-4xl font-black text-[#0d1b2a] uppercase tracking-tighter leading-none mb-4">Our Shield <br/> Portfolio</h2>
            <div className="w-12 h-1.5 bg-amber-500"></div>
        </div>
        
        <div className="grid grid-cols-1 gap-10">
            {insurancePlans.map((p, i) => (
                <div key={i} data-aos="fade-up" className="relative group p-8 border border-slate-100 bg-[#fdfcfb] rounded-sm hover:shadow-2xl transition-all duration-500">
                    <div className="flex justify-between items-start mb-8">
                        <div className={`${p.color} w-16 h-16 rounded-full flex items-center justify-center shadow-inner`}>
                            {p.icon}
                        </div>
                        <span className="text-[9px] font-black uppercase tracking-widest text-slate-300 border border-slate-100 px-3 py-1">{p.tag}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3 uppercase tracking-tight text-[#0d1b2a]">{p.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed mb-8 font-medium italic">"{p.desc}"</p>
                    <button className="flex items-center gap-3 text-[#0d1b2a] font-black text-[10px] uppercase tracking-widest group-hover:gap-6 transition-all">
                        Request Quote <ArrowUpRight size={16} className="text-amber-500" />
                    </button>
                </div>
            ))}
        </div>
      </section>

      {/* --- DATA CENTER: WHY TRUST US? --- */}
      <section className="py-24 px-8 bg-[#0d1b2a] text-white rounded-t-[4rem] font-sans relative overflow-hidden text-center md:text-left">
        <div className="relative z-10">
            <h2 className="text-4xl font-black mb-16 leading-none uppercase italic text-amber-500">The Guardia Advantage</h2>
            <div className="space-y-12">
                {[
                    { t: "Seamless Claims", d: "A dedicated claim specialist is assigned to you within 15 mins.", i: <FileText size={36} /> },
                    { t: "Global Coverage", d: "Partnered with top 25+ IRDAI companies for best pricing.", i: <Globe size={36} /> },
                    { t: "Expert Advisory", d: "We audit your risk profile to suggest only what you truly need.", i: <Award size={36} /> }
                ].map((item, i) => (
                    <div key={i} data-aos="fade-left" className="flex flex-col md:flex-row gap-6 items-center md:items-start bg-white/5 p-6 rounded-xl border border-white/5">
                        <div className="text-amber-500">{item.i}</div>
                        <div>
                            <h4 className="font-bold text-xl uppercase tracking-tight mb-2">{item.t}</h4>
                            <p className="text-sm opacity-60 leading-relaxed font-medium">{item.d}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* --- IMAGE GALLERY --- */}
      <section className="py-24 bg-[#f8f1e6]">
        <div className="px-8 mb-12">
            <p className="text-amber-700 font-bold text-[10px] uppercase tracking-widest mb-2 font-sans">Visual Assurance</p>
            <h2 className="text-4xl font-black text-[#0d1b2a] uppercase italic tracking-tighter">Protected <br/> Lifestyles</h2>
        </div>
        <div className="flex overflow-x-auto gap-5 px-8 no-scrollbar snap-x pb-8">
            {[
                "https://images.unsplash.com/photo-1600880210819-f5b89f144609?q=80&w=600",
                "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=600",
                "https://images.unsplash.com/photo-1521791136064-7986c2959213?q=80&w=600",
                "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600"
            ].map((url, i) => (
                <div key={i} className="flex-shrink-0 w-[80vw] h-80 rounded-sm overflow-hidden snap-center shadow-2xl border-2 border-white">
                    <img src={url} className="w-full h-full object-cover" alt="Insured" loading="lazy" />
                </div>
            ))}
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-24 px-10 text-center bg-[#0d1b2a] text-white border-t border-white/5 font-sans">
        <div className="flex flex-col items-center mb-12">
            <ShieldCheck size={48} className="text-amber-500 mb-6" />
            <h2 className="text-3xl font-black uppercase tracking-[0.2em] mb-4">Guardia Insure</h2>
            <p className="max-w-xs opacity-50 text-xs leading-relaxed font-medium uppercase tracking-widest italic">Authorized Partner for Theni District Since 2005.</p>
        </div>
        
        <div className="flex justify-center gap-8 mb-16">
           <Instagram size={24} className="text-white/30 hover:text-amber-500 transition" />
           <Facebook size={24} className="text-white/30 hover:text-blue-500 transition" />
           <MessageCircle size={24} className="text-white/30 hover:text-green-500 transition" />
        </div>

        <div className="space-y-6 mb-16 text-center">
            <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-amber-500 mb-2">Corporate Office</p>
                <p className="text-xs font-bold leading-relaxed text-white/80 italic">Theni Bypass Road, Opp. Collectorate,<br/> Madurai Main Road, 625531</p>
            </div>
            <div className="pt-6 border-t border-white/5">
                <p className="text-[10px] font-black uppercase tracking-widest text-amber-500 mb-2">Claims Support</p>
                <p className="text-xl font-black text-white tracking-tighter">+91 99000 55000</p>
            </div>
        </div>
        
        <div className="text-[9px] font-black text-white/10 uppercase tracking-[0.8em] border-t border-white/5 pt-12">
          © 2026 GUARDIA • SECURED BY NAVI
        </div>
      </footer>

      {/* --- STICKY MOBILE ACTION BAR --- */}
      <div className="fixed bottom-0 w-full z-[60] p-4 bg-[#0d1b2a]/95 backdrop-blur-md flex gap-3 shadow-2xl font-sans border-t border-white/10">
         <button className="flex-1 bg-amber-500 text-[#0d1b2a] py-4 rounded-sm font-black text-[10px] uppercase tracking-[0.2em] active:scale-95 transition">
           Get Quote
         </button>
         <button className="flex-1 border-2 border-amber-500 text-amber-500 py-4 rounded-sm font-black text-[10px] uppercase tracking-[0.2em] active:scale-95 transition flex items-center justify-center gap-2">
           <Zap size={14} fill="currentColor" /> Renew Now
         </button>
      </div>

      <style>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .animate-marquee { animation: marquee 20s linear infinite; display: flex; width: max-content; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

    </div>
  );
};

export default ClientSix;