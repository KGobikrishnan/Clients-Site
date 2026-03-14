import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Search, LayoutGrid, CheckCircle2, ArrowRight, User, Phone, X, ShieldCheck } from 'lucide-react';

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [hasAccess, setHasAccess] = useState(false);
  const [showGate, setShowGate] = useState(false);
  const [userData, setUserData] = useState({ name: "", phone: "" });

  useEffect(() => {
    // Session check - browser-la data irukannu paakrom
    const savedUser = localStorage.getItem("navi_user_session");
    if (savedUser) {
      setHasAccess(true);
    } else {
      setShowGate(true);
    }
    AOS.init({ duration: 800 });
  }, []);

  const handleEntry = (e) => {
    e.preventDefault();
    if (userData.name && userData.phone) {
      localStorage.setItem("navi_user_session", JSON.stringify(userData));
      setHasAccess(true);
      setShowGate(false);
    }
  };

  const clients = [
    { id: 1, name: "Timber & Woods", cat: "Manufacturing", path: "/client-one", img: "https://5.imimg.com/data5/SELLER/Default/2022/10/AQ/IB/AX/3436336/timber-wood-500x500.png" },
    { id: 2, name: "Real Estate", cat: "Construction", path: "/client-two", img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=400" },
    { id: 3, name: "Home Foods", cat: "Food & FMCG", path: "/client-three", img: "https://images.unsplash.com/photo-1547517023-7ca0c162f816?q=80&w=400" },
    { id: 4, name: "Consumer Electronics", cat: "Retail", path: "/client-four", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3XupgxQFH79BRLB8pq47aIW0JhN4zIUjxpQ&s" },
    { id: 5, name: "UPVC Windows", cat: "Building Materials", path: "/client-five", img: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=400" },
    { id: 6, name: "Insurance Agency", cat: "Finance", path: "/client-six", img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=400" },
    { id: 7, name: "Export & Global", cat: "Logistics", path: "/client-seven", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=400" },
    { id: 8, name: "Car Modification", cat: "Automotive", path: "/client-eight", img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=400" },
    { id: 9, name: "AC Service", cat: "Services", path: "/client-nine", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7oxh13J9udlF7xMCJD-AKqb_70uPN0HiQMA&s" },
    { id: 10, name: "Agri Spices", cat: "Agriculture", path: "/client-ten", img: "https://images.unsplash.com/photo-1509358271058-acd22cc93898?q=80&w=400" },
    { id: 11, name: "Civil Engineering", cat: "Structural", path: "/client-eleven", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3OJ4tw8qvwVGug1RMsJ72o3Itz1qLz4tujw&s" },
    { id: 12, name: "Medical Lab", cat: "Diagnostics", path: "/client-twelve", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2D-EHnlBm6Q2bDJCyuyVxSX3VorEH28VOwA&s" },
    { id: 13, name: "Solar Energy", cat: "Renewables", path: "/client-thirteen", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr1QpM1RZOQ9sKkf5Y0iN5bCuR0YvGZso9jg&s" },
    { id: 14, name: "Photography", cat: "Creative", path: "/client-fourteen", img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=400" },
    { id: 15, name: "Precision Irrigation", cat: "Agriculture", path: "/client-fifteen", img: "https://images.unsplash.com/photo-1622383563227-04401ab4e5ea?q=80&w=400" },
    { id: 16, name: "Fashion Boutique", cat: "Apparel", path: "/client-sixteen", img: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?q=80&w=400" },
    { id: 17, name: "Wood Pressed Oil", cat: "Organic FMCG", path: "/client-seventeen", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7yERzyqE-EIVu7jsjSGH1i3of2AsBolsm6Q&s" },
    { id: 18, name: "Bridal Makeup", cat: "Beauty", path: "/client-eighteen", img: "https://5.imimg.com/data5/SELLER/Default/2024/9/454649464/HV/QA/VW/225202498/bridal-makeup-aliganj-lucknow-500x500.jpg" },
    { id: 19, name: "Physiotherapy", cat: "Healthcare", path: "/client-nineteen", img: "https://images.unsplash.com/photo-1597452485669-2c7bb5fef90d?q=80&w=400" },
    { id: 20, name: "Optical Shop", cat: "Retail", path: "/client-twenty", img: "https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=400" },
    { id: 21, name: "Car Detailing", cat: "Automotive", path: "/client-twentyone", img: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=400" },
    { id: 22, name: "IT Hardware", cat: "Information Tech", path: "/client-twentytwo", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=400" },
    { id: 23, name: "General Physician", cat: "Medical", path: "/client-twentythree", img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=400" },
    { id: 24, name: "Dental Clinic", cat: "Healthcare", path: "/client-twentyfour", img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=400" },
  ];

  const filteredClients = clients.filter(client => 
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    client.cat.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#f1f5f9] text-slate-900 font-sans pb-32 selection:bg-indigo-500 selection:text-white">
      
      {/* --- ENTRY GATE MODAL --- */}
      {showGate && (
        <div className="fixed inset-0 z-[100] bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-4">
            <div data-aos="zoom-in" className="bg-white w-full max-w-md rounded-[3rem] p-10 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl"></div>
                <div className="text-center mb-10">
                    <div className="w-16 h-16 bg-indigo-600 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-xl rotate-3">
                        <ShieldCheck size={32} className="text-white" />
                    </div>
                    <h2 className="text-3xl font-black tracking-tighter uppercase italic">Secure<span className="text-indigo-600">Gate</span></h2>
                    <p className="text-slate-400 text-xs font-bold mt-2 uppercase tracking-widest">Verify identity to access blueprints</p>
                </div>
                <form onSubmit={handleEntry} className="space-y-5">
                    <div className="relative group">
                        <User className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-indigo-600 transition" size={18} />
                        <input required type="text" placeholder="Your Name" className="w-full pl-14 pr-6 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-50 transition-all font-bold" 
                            onChange={(e) => setUserData({...userData, name: e.target.value})} />
                    </div>
                    <div className="relative group">
                        <Phone className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-indigo-600 transition" size={18} />
                        <input required type="tel" placeholder="Phone Number" className="w-full pl-14 pr-6 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-50 transition-all font-bold" 
                            onChange={(e) => setUserData({...userData, phone: e.target.value})} />
                    </div>
                    <button type="submit" className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:bg-indigo-600 transition-all active:scale-95">
                        Establish Connection
                    </button>
                </form>
            </div>
        </div>
      )}

      {/* --- DASHBOARD HEADER --- */}
      <header className="bg-white border-b border-slate-200 pt-16 pb-12 px-6 sticky top-0 z-40 backdrop-blur-md bg-white/80">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
            <div className="flex items-center gap-2 mb-4 bg-indigo-50 px-4 py-2 rounded-full border border-indigo-100">
                <LayoutGrid size={18} className="text-indigo-600" />
                <span className="text-[10px] font-black uppercase tracking-widest text-indigo-700 font-mono">Logger: Active</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-950 mb-4 uppercase italic leading-none">
                Navi<span className="text-indigo-600 underline decoration-indigo-200">Promotions</span> Clints page
            </h1>
            <p className="text-slate-500 max-w-lg font-medium text-xs md:text-sm mb-8 italic uppercase tracking-tighter">
                Architecture and Visual Flow for 24 Industrial Sectors
            </p>

            <div className="w-full max-w-2xl relative group">
                <input type="text" placeholder="Search Industrial Field..." 
                    className="w-full pl-14 pr-6 py-5 rounded-[2rem] border border-slate-200 bg-white focus:outline-none focus:ring-4 focus:ring-indigo-100 transition-all shadow-sm group-hover:shadow-lg"
                    onChange={(e) => setSearchTerm(e.target.value)} />
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-hover:text-indigo-600 transition" size={22} />
            </div>
        </div>
      </header>

      {/* --- CLIENT GRID (1x2 Mobile Optimized) --- */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 mt-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {filteredClients.map((client) => (
            <Link to={client.path} key={client.id} data-aos="fade-up"
              className="group bg-white rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 overflow-hidden flex flex-col relative"
            >
              {/* IMAGE WRAPPER */}
              <div className="relative h-40 md:h-52 overflow-hidden">
                <img src={client.img} alt={client.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-1000 grayscale-[30%] group-hover:grayscale-0" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                    <span className="text-[8px] md:text-[9px] bg-indigo-600 text-white px-3 py-1.5 rounded-full font-black uppercase tracking-widest">
                        {client.cat}
                    </span>
                </div>
              </div>

              {/* CARD DETAILS */}
              <div className="p-4 md:p-6 flex flex-col flex-grow bg-white">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-[9px] font-bold text-slate-300 font-mono italic">#{client.id < 10 ? `00${client.id}` : `0${client.id}`}</span>
                    <CheckCircle2 size={12} className="text-indigo-600 opacity-0 group-hover:opacity-100 transition" />
                </div>
                <h3 className="text-[13px] md:text-[16px] font-black text-slate-900 leading-tight uppercase mb-4 group-hover:text-indigo-600 transition h-10 md:h-12 overflow-hidden">
                    {client.name}
                </h3>
                <div className="mt-auto flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-slate-400 group-hover:text-indigo-600 transition-colors">
                    Access Blueprint <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* --- NO MATCH --- */}
        {filteredClients.length === 0 && (
          <div className="text-center py-32 bg-slate-50 rounded-[4rem] border-4 border-dashed border-white mt-10">
            <LayoutGrid size={48} className="mx-auto text-slate-200 mb-4 animate-pulse" />
            <p className="text-slate-400 font-black uppercase tracking-widest text-[10px]">No sector found matching that key.</p>
          </div>
        )}
      </main>

      {/* --- FLOATING STATUS --- */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50">
        <div className="bg-slate-950 text-white px-8 py-5 rounded-[2rem] shadow-2xl flex items-center gap-6 border border-white/5 backdrop-blur-xl">
            <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_15px_#22c55e]"></div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] whitespace-nowrap italic">24 Repositories Secure</span>
            </div>
            <div className="h-4 w-[1px] bg-white/10"></div>
            <button onClick={() => { localStorage.clear(); window.location.reload(); }} className="text-white/40 hover:text-white transition active:scale-90">
                <X size={16} />
            </button>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;