import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  Cpu, 
  Terminal, 
  Zap, 
  HardDrive, 
  MapPin, 
  Phone, 
  Instagram, 
  Youtube, 
  ArrowRight, 
  ExternalLink,
  Maximize,
  MessageCircle,
  Activity,
  Box,
  Binary,
  Microchip,
  Server,
  Monitor,
  Fan,
  MousePointer2,
  Lock
} from 'lucide-react';

const ClientTwentyTwo = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-expo',
    });
  }, []);

  const techInventory = [
    { 
      code: "0x88FF",
      title: "Custom Rigs", 
      cat: "Precision Workstations", 
      img: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=800",
      specs: ["Liquid Cooled", "Stress Tested", "RGB Sync"]
    },
    { 
      code: "0x44A2",
      title: "Consumables", 
      cat: "Original Inks", 
      img: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?q=80&w=800",
      specs: ["Epson Genuine", "High Yield", "OEM Grade"]
    },
    { 
      code: "0xBB01",
      title: "Peripherals", 
      cat: "Input Devices", 
      img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800",
      specs: ["Mechanical Keys", "8K Polling", "Latent Zero"]
    }
  ];

  return (
    <div className="bg-[#020204] text-[#e2e8f0] overflow-x-hidden font-mono pb-24 selection:bg-purple-500 selection:text-white">
      
      {/* --- HUD TOP OVERLAY --- */}
      <div className="fixed top-0 w-full z-[80] pointer-events-none">
        <div className="bg-purple-600 h-[2px] w-full shadow-[0_0_15px_#a855f7] animate-pulse"></div>
        <div className="flex justify-between px-6 py-2">
            <span className="text-[8px] font-black text-purple-500 tracking-[0.5em] uppercase">Status: System_Live</span>
            <span className="text-[8px] font-black text-purple-500 tracking-[0.5em] uppercase italic">Kernel: v11.0.4</span>
        </div>
      </div>

      {/* --- CYBER-INDUSTRIAL NAV --- */}
      <nav className="fixed top-10 left-1/2 -translate-x-1/2 w-[94%] z-[70] bg-[#0a0a0f]/60 backdrop-blur-xl border border-white/5 p-1 rounded-2xl flex justify-between items-center shadow-2xl">
        <div className="flex items-center gap-4 pl-6">
            <div className="flex flex-col">
                <h2 className="text-xl font-black tracking-tighter uppercase italic text-white leading-none">Tech<span className="text-purple-500">Forge</span></h2>
                <span className="text-[7px] text-purple-500/50 font-bold uppercase tracking-widest mt-1 italic">Hardware Division</span>
            </div>
        </div>
        <div className="flex items-center gap-2 pr-2">
            <div className="hidden lg:flex gap-8 mr-8 text-[9px] font-black uppercase text-white/30">
                <a href="#inventory" className="hover:text-purple-400 transition">Database</a>
                <a href="#thermal" className="hover:text-purple-400 transition">Thermal_LOC</a>
            </div>
            <button className="bg-white/5 border border-white/10 text-purple-400 p-4 rounded-xl active:scale-90 transition">
                <Binary size={18} />
            </button>
        </div>
      </nav>

      {/* --- HERO: THE COMPONENT STACK --- */}
      <section className="relative min-h-screen flex items-center justify-center px-8 pt-32 overflow-hidden">
        {/* CRT Scanline Effect Overlay */}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] z-20 bg-[length:100%_4px,3px_100%]"></div>
        
        <div className="relative z-10 w-full max-w-7xl grid lg:grid-cols-2 gap-20 items-center">
            <div data-aos="fade-right">
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-[1px] bg-purple-500"></div>
                    <span className="text-purple-400 text-[9px] font-black uppercase tracking-[0.4em]">Initialize Execution</span>
                </div>
                <h1 className="text-7xl md:text-[11rem] font-black leading-[0.8] tracking-tighter uppercase italic text-white mb-10">
                    High <br/> <span className="text-transparent stroke-text">Forge.</span>
                </h1>
                <p className="text-xs text-gray-500 max-w-sm leading-relaxed uppercase tracking-widest mb-12">Authorized distribution of premium computing assets & bespoke workstation engineering.</p>
                <div className="flex flex-col sm:flex-row gap-6">
                    <button className="bg-purple-600 text-white px-10 py-5 rounded-sm font-black text-[10px] uppercase tracking-widest shadow-[0_0_50px_rgba(147,51,234,0.4)] active:scale-95 transition flex items-center gap-3">
                        Launch Configurator <ArrowRight size={14}/>
                    </button>
                    <button className="px-10 py-5 border border-white/10 rounded-sm text-[10px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition">Browse Stock</button>
                </div>
            </div>

            <div className="relative" data-aos="zoom-in-left">
                <div className="absolute inset-0 bg-purple-500/10 blur-[100px] animate-pulse"></div>
                <div className="relative border border-white/10 p-2 bg-white/[0.02] backdrop-blur-3xl rounded-sm">
                    <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200" alt="Tech" className="w-full h-full object-cover grayscale opacity-60" />
                    {/* UI Corner Elements */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-purple-500"></div>
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-purple-500"></div>
                </div>
                {/* Floating System Log Card */}
                <div className="absolute -bottom-10 -right-8 bg-[#0a0a0f] border border-purple-500/30 p-6 rounded-sm shadow-2xl min-w-[260px] z-30">
                    <div className="flex justify-between items-center mb-6">
                        <p className="text-[8px] font-black uppercase tracking-widest opacity-40">System_Health</p>
                        <Activity size={12} className="text-green-500" />
                    </div>
                    <div className="space-y-4">
                        <div className="flex justify-between items-end"><span className="text-[10px] opacity-30 uppercase">CPU_Load</span><span className="text-xs font-black text-purple-400 italic">42.8%</span></div>
                        <div className="h-[2px] w-full bg-white/5 overflow-hidden"><div className="h-full bg-purple-500 w-[42%] animate-pulse"></div></div>
                        <div className="flex justify-between items-end"><span className="text-[10px] opacity-30 uppercase">Mem_Cache</span><span className="text-xs font-black text-blue-400 italic">12.2 GB</span></div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* --- INVENTORY TERMINAL GRID --- */}
      <section id="inventory" className="py-32 px-6 bg-[#020204]">
        <div className="max-w-7xl mx-auto mb-20 px-4">
            <span className="text-purple-500 font-black text-[9px] uppercase tracking-[0.5em] mb-4 block">Central_Database / Inventory</span>
            <h2 className="text-4xl md:text-8xl font-black uppercase italic tracking-tighter leading-none italic font-sans text-white">The Hardware <br/> <span className="text-transparent stroke-text">Vault</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {techInventory.map((item, i) => (
                <div key={i} data-aos="fade-up" className="group relative bg-[#0a0a0f] border border-white/5 rounded-sm overflow-hidden hover:border-purple-500/50 transition duration-700">
                    <div className="h-64 overflow-hidden relative">
                        <img src={item.img} className="w-full h-full object-cover grayscale opacity-40 group-hover:scale-110 transition duration-1000 group-hover:opacity-100" alt={item.title} />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] to-transparent"></div>
                        <div className="absolute top-4 right-4 bg-purple-600 text-[8px] font-black px-3 py-1 rounded-sm shadow-xl">
                            {item.code}
                        </div>
                    </div>
                    <div className="p-8">
                        <p className="text-purple-500 font-bold text-[9px] uppercase tracking-widest mb-2">{item.cat}</p>
                        <h4 className="text-2xl font-black uppercase italic mb-6 leading-none text-white">{item.title}</h4>
                        <div className="space-y-3 mb-8">
                            {item.specs.map((spec, j) => (
                                <div key={j} className="flex items-center gap-3">
                                    <div className="w-1 h-1 bg-purple-500 rounded-full"></div>
                                    <span className="text-[10px] font-bold uppercase text-gray-500 tracking-wider">{spec}</span>
                                </div>
                            ))}
                        </div>
                        <button className="w-full py-4 border border-white/5 bg-white/5 text-white font-black text-[9px] uppercase tracking-widest group-hover:bg-purple-600 transition">Request Specs</button>
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* --- THE "THERMAL" DUMMY MAP: LOCATION SCAN --- */}
      <section id="thermal" className="py-32 bg-black px-4 relative overflow-hidden text-white">
         <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-10 mb-24 px-8">
            <div>
                <h2 className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter italic">Thermal <br/> <span className="text-purple-500 font-sans not-italic">Coordinates</span></h2>
            </div>
            <p className="max-w-xs text-[10px] font-black opacity-30 uppercase tracking-[0.4em] text-right leading-loose font-sans">Locating Silicon Avenue Hub. Operations established since 2018. TN_ZONE_01.</p>
         </div>
         
         <div className="px-4">
            <div className="w-full h-[600px] rounded-sm overflow-hidden bg-[#050508] relative group flex items-center justify-center border border-white/5 shadow-2xl">
                {/* --- ARTISTIC THERMAL MAP UI --- */}
                <div className="absolute inset-0 bg-[#0a0a0f] opacity-40">
                    <div className="absolute inset-0 bg-[radial-gradient(#1e1b4b_1px,transparent_1px)] bg-[size:30px_30px]"></div>
                </div>
                
                {/* Thermal Scanning Overlay Circles */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-purple-500/10 rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-blue-500/10 rounded-full"></div>
                
                {/* Crosshair UI */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-purple-500 opacity-20 group-hover:opacity-100 transition duration-700">
                    <Maximize size={120} strokeWidth={0.5} />
                </div>

                {/* Location Marker UI */}
                <div className="relative z-20 flex flex-col items-center">
                    <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center text-white shadow-[0_0_60px_rgba(147,51,234,0.5)] active:scale-95 transition cursor-pointer border border-purple-400 rotate-45">
                        <MapPin size={28} className="-rotate-45" fill="currentColor" />
                    </div>
                    <div className="mt-12 bg-black border border-purple-500/40 p-10 rounded-sm shadow-2xl text-white text-center min-w-[320px]">
                        <p className="text-[10px] font-black text-purple-500 uppercase tracking-widest mb-3 leading-none">TARGET_ACQUIRED</p>
                        <h5 className="font-black italic text-3xl leading-tight uppercase tracking-tight mb-8">Forge Hub HQ</h5>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-white/5 p-4 rounded-sm border border-white/5">
                                <span className="text-[8px] font-black uppercase opacity-40 block mb-2 text-left tracking-widest">Load_Cap</span>
                                <span className="text-[10px] font-black uppercase text-green-500 italic block text-left leading-none">OPTIMAL_99</span>
                            </div>
                            <div className="bg-white/5 p-4 rounded-sm border border-white/5">
                                <span className="text-[8px] font-black uppercase opacity-40 block mb-2 text-left tracking-widest">Status</span>
                                <span className="text-[10px] font-black uppercase text-blue-500 italic block text-left leading-none">ACTIVE_NODE</span>
                            </div>
                        </div>
                    </div>
                </div>

                <button className="absolute bottom-10 right-10 bg-white text-black px-12 py-5 rounded-sm font-black text-[11px] uppercase tracking-widest active:scale-95 transition shadow-2xl">
                    Export GPS Node <ExternalLink size={14} className="ml-3 inline" />
                </button>
            </div>
         </div>
      </section>

      {/* --- FOOTER: THE CORE LOG --- */}
      <footer className="py-32 px-10 bg-black text-white text-center relative overflow-hidden border-t border-white/5">
        <div className="max-w-4xl mx-auto relative z-10">
            <Microchip size={48} className="text-purple-500 mx-auto mb-10 opacity-60" />
            <h2 className="text-4xl md:text-8xl font-black uppercase italic leading-[0.85] tracking-tighter mb-16">Forge The Future. <br/> Leave Nothing <br/> To Chance.</h2>
            
            <div className="flex justify-center gap-16 mb-24 border-y border-white/5 py-12">
                <Instagram size={24} className="opacity-20 hover:opacity-100 hover:text-purple-500 transition cursor-pointer" />
                <Youtube size={24} className="opacity-20 hover:opacity-100 hover:text-red-500 transition cursor-pointer" />
                <MessageCircle size={24} className="opacity-20 hover:opacity-100 hover:text-green-500 transition cursor-pointer" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-[10px] font-black uppercase tracking-[0.5em] text-white/20 font-sans">
                <p>Silicon Avenue • Coimbatore • TN</p>
                <p>Data Desk: +91 99000 44000</p>
            </div>
        </div>
        
        <div className="mt-40 pt-10 border-t border-white/5 text-[10px] font-black text-white/5 uppercase tracking-[1.5em]">
          © 2026 TECHFORGE SYSTEMS • CORE_VER_11.2
        </div>
      </footer>

      {/* --- ACTION BAR: THE COMMAND HUB --- */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 w-fit z-[80] p-1 bg-[#0a0a0f]/90 backdrop-blur-3xl border border-white/10 rounded-xl flex gap-1 shadow-2xl shadow-black/80 scale-110">
         <button className="bg-white text-black px-8 py-4 rounded-lg font-black text-[10px] uppercase tracking-widest active:scale-95 transition flex items-center justify-center gap-2">
           <Monitor size={14} /> Builds
         </button>
         <button className="bg-purple-600 text-white px-8 py-4 rounded-lg font-black text-[10px] uppercase tracking-widest active:scale-95 transition flex items-center justify-center gap-2">
           <Zap size={14} fill="currentColor" /> Configure
         </button>
      </div>

      <style>{`
        .stroke-text {
          -webkit-text-stroke: 1.5px #a855f7;
          color: transparent;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 35s linear infinite;
        }
        @keyframes sweep {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        .animate-sweep {
          animation: sweep 5s ease-in-out infinite;
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

    </div>
  );
};

export default ClientTwentyTwo;