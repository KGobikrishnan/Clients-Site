import React, { useState } from 'react';

const EntryGate = ({ onAccess }) => {
  const [formData, setFormData] = useState({ name: "", phone: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.phone) {
      // Data-va local storage-la save panrom (browser memory)
      localStorage.setItem("navi_user", JSON.stringify(formData));
      onAccess(); // Dashboard access kudukrom
    } else {
      alert("Macha, details fill pannu!");
    }
  };

  return (
    <div className="fixed inset-0 z-[100] bg-slate-950 flex items-center justify-center p-6">
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(#4f46e5_1px,transparent_1px)] bg-[size:30px_30px]"></div>
      
      <div className="bg-white w-full max-w-md rounded-[3rem] p-10 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-3xl"></div>
        
        <div className="text-center mb-10">
          <div className="w-16 h-16 bg-indigo-600 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-xl rotate-3">
             <span className="text-white text-2xl font-black italic">N</span>
          </div>
          <h2 className="text-3xl font-black tracking-tighter text-slate-900 uppercase italic">Navi <span className="text-indigo-600">Access</span></h2>
          <p className="text-slate-400 text-xs font-bold mt-2 uppercase tracking-widest">Enter details to view portfolios</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Full Name</label>
            <input 
              required
              type="text" 
              className="w-full mt-2 px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-50 transition-all font-bold"
              placeholder="Gobi Krishnan"
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div>
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Phone Number</label>
            <input 
              required
              type="tel" 
              className="w-full mt-2 px-6 py-4 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-indigo-50 transition-all font-bold font-mono"
              placeholder="+91 00000 00000"
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-slate-950 text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl hover:bg-indigo-600 transition-all active:scale-95"
          >
            Access Dashboard
          </button>
        </form>
      </div>
    </div>
  );
};

export default EntryGate;