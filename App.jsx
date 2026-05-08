```react
import React, { useState } from 'react';
import { Bus, MapPin, Heart, Wallet, QrCode, ChevronRight, Star, Info } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('trajets');

  const renderContent = () => {
    switch (activeTab) {
      case 'trajets':
        return (
          <div className="space-y-6 animate-in fade-in duration-500">
            {/* Sponsor Canal+ */}
            <div className="bg-black rounded-[2.5rem] p-6 text-white relative overflow-hidden shadow-2xl border-b-4 border-white/10">
              <div className="relative z-10">
                <span className="bg-white/20 text-[8px] font-black uppercase px-2 py-1 rounded mb-2 inline-block">Sponsor Officiel</span>
                <h4 className="text-2xl font-black italic uppercase leading-none">Canal+ A+ Ivoire</h4>
                <p className="text-[10px] opacity-70 mt-1 font-bold uppercase italic text-orange-400 tracking-wider">Le meilleur de chez nous !</p>
                <button className="mt-4 bg-white text-black px-5 py-2 rounded-xl text-[10px] font-black uppercase italic shadow-lg active:scale-95 transition-transform">S'abonner</button>
              </div>
              <Star className="absolute right-[-20px] bottom-[-20px] w-36 h-36 opacity-10 rotate-12" />
            </div>

            {/* Info Trafic Rapide */}
            <div className="bg-white p-4 rounded-3xl border border-slate-100 shadow-sm flex items-center gap-3">
              <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                <Info size={16} />
              </div>
              <p className="text-[10px] font-bold text-slate-500 uppercase italic">Trafic fluide sur le pont HKB</p>
            </div>

            {/* Liste des Bus */}
            <div className="bg-white p-5 rounded-[2.5rem] border border-slate-100 shadow-sm flex items-center justify-between active:bg-slate-50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="bg-[#009E49] text-white font-black w-14 h-14 rounded-2xl flex items-center justify-center text-2xl italic shadow-md">11</div>
                <div>
                  <p className="font-black text-sm text-slate-800 uppercase italic leading-none">Gare Sud - Adjamé</p>
                  <p className="text-[10px] font-bold text-slate-400 mt-2 italic">Arrivée : 4 min</p>
                </div>
              </div>
              <ChevronRight className="text-slate-200" />
            </div>

            <div className="bg-white p-5 rounded-[2.5rem] border border-slate-100 shadow-sm flex items-center justify-between opacity-60">
              <div className="flex items-center gap-4">
                <div className="bg-[#FF8200] text-white font-black w-14 h-14 rounded-2xl flex items-center justify-center text-2xl italic shadow-md">81</div>
                <div>
                  <p className="font-black text-sm text-slate-800 uppercase italic leading-none">Plateau - Riviera</p>
                  <p className="text-[10px] font-bold text-slate-400 mt-2 italic">Arrivée : 12 min</p>
                </div>
              </div>
              <ChevronRight className="text-slate-200" />
            </div>
          </div>
        );
      case 'social':
        return (
          <div className="space-y-4 animate-in slide-in-from-right duration-300">
            <div className="flex justify-between items-center mb-2 px-2">
                <h3 className="text-[10px] font-black uppercase text-slate-400 italic tracking-widest">Solidarité Live</h3>
                <span className="flex h-2 w-2 rounded-full bg-red-500 animate-ping"></span>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-[2.5rem] border border-orange-100 shadow-sm relative">
              <p className="text-xs font-bold italic text-slate-700 leading-relaxed">"Le 11 vient de passer à Duncan, il est archi-plein, ne montez pas !"</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-[8px] font-black text-orange-400 uppercase italic tracking-tighter">Il y a 2 min • Awa Koffi</span>
                <div className="flex items-center gap-1 bg-white px-3 py-1 rounded-full shadow-sm border border-orange-50">
                  <Heart className="w-3 h-3 text-red-500 fill-red-500" />
                  <span className="text-[9px] font-black text-slate-600">24</span>
                </div>
              </div>
            </div>

            {/* Pub Nido */}
            <div className="bg-red-600 rounded-[2rem] p-4 text-white flex items-center justify-between shadow-lg">
               <div className="flex items-center gap-3">
                  <div className="bg-white/20 p-2 rounded-lg"><Star size={16} /></div>
                  <div>
                    <p className="text-[10px] font-black italic uppercase">Nido Croissance</p>
                    <p className="text-[8px] opacity-70 font-bold uppercase">Le plein de force !</p>
                  </div>
               </div>
               <ChevronRight size={16} className="opacity-40" />
            </div>
          </div>
        );
      case 'gaba':
        return (
          <div className="space-y-6 animate-in slide-in-from-bottom duration-300">
            <div className="bg-[#009E49] text-white p-10 rounded-[3rem] shadow-2xl text-center border-b-[10px] border-black/10 relative overflow-hidden">
              <p className="text-[10px] font-black uppercase opacity-60 mb-2 italic tracking-widest text-white/80">Mon Gaba Sécurisé</p>
              <h2 className="text-7xl font-black italic tracking-tighter mb-8 shadow-sm">1 500 <span className="text-xl font-normal opacity-70">F</span></h2>
              <div className="space-y-3 relative z-10">
                <button className="w-full bg-white text-[#009E49] py-4 rounded-2xl font-black uppercase italic text-xs shadow-xl active:scale-95 transition-transform">Épargner mon Gaba</button>
                <button className="w-full bg-black/20 border border-white/30 py-4 rounded-2xl font-black uppercase italic text-xs flex items-center justify-center gap-2 active:scale-95 transition-transform backdrop-blur-sm">
                  <QrCode size={16} /> Scanner ticket Sotra
                </button>
              </div>
              <Wallet className="absolute -left-10 -top-10 w-48 h-48 opacity-5 -rotate-12" />
            </div>

            {/* Pub Wave */}
            <div className="bg-[#47C1FF] rounded-[2.5rem] p-6 text-white shadow-lg flex items-center justify-between relative overflow-hidden">
               <div className="relative z-10">
                  <p className="text-[8px] font-black uppercase opacity-60">Partenaire Officiel</p>
                  <h4 className="font-black italic uppercase text-2xl tracking-tighter">Wave CI</h4>
                  <p className="text-[9px] font-bold opacity-80 uppercase">Retrait à 1% seulement</p>
               </div>
               <div className="bg-white/20 p-5 rounded-full relative z-10 shadow-inner">
                  <Wallet size={28} />
               </div>
               <div className="absolute right-[-20%] top-[-20%] w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center">
      {/* Container Mobile */}
      <div className="w-full max-w-md min-h-screen bg-slate-50 relative flex flex-col shadow-2xl">
        
        {/* Drapeau National */}
        <div className="h-1.5 w-full flex fixed top-0 z-[100] max-w-md">
          <div className="flex-1 bg-[#FF8200]"></div>
          <div className="flex-1 bg-white"></div>
          <div className="flex-1 bg-[#009E49]"></div>
        </div>

        {/* Header */}
        <header className="bg-white p-4 pt-8 flex justify-between items-center shadow-sm sticky top-0 z-50">
          <div className="flex items-center gap-3">
            <div className="bg-[#FF8200] p-2 rounded-2xl text-white shadow-lg border-b-4 border-black/10">
              <Bus size={24} />
            </div>
            <div>
              <h1 className="font-black italic text-xl uppercase tracking-tighter leading-none text-slate-800">MonBus CI</h1>
              <p className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mt-1">L'application du peuple</p>
            </div>
          </div>
          <div className="bg-slate-900 text-white px-5 py-2.5 rounded-2xl font-black text-xs shadow-xl flex flex-col items-end">
            <span className="text-[8px] opacity-50 uppercase leading-none mb-1">Mon Solde</span>
            <span className="leading-none tracking-tighter">4 350 F</span>
          </div>
        </header>

        {/* Contenu Principal */}
        <main className="p-5 flex-1 pb-32">
          {renderContent()}
        </main>

        {/* Barre de Navigation */}
        <nav className="fixed bottom-0 w-full max-w-md bg-white border-t border-slate-100 px-8 py-6 flex justify-around items-center z-[100] rounded-t-[3.5rem] shadow-[0_-15px_50px_rgba(0,0,0,0.1)]">
          <button 
            onClick={() => setActiveTab('trajets')}
            className={`flex flex-col items-center gap-1.5 transition-all duration-300 ${activeTab === 'trajets' ? 'text-[#FF8200] scale-110' : 'text-slate-300'}`}
          >
            <MapPin size={26} strokeWidth={activeTab === 'trajets' ? 3 : 2} />
            <span className={`text-[9px] font-black uppercase italic tracking-tighter ${activeTab === 'trajets' ? 'opacity-100' : 'opacity-40'}`}>Trajets</span>
          </button>
          
          <button 
            onClick={() => setActiveTab('social')}
            className={`flex flex-col items-center gap-1.5 transition-all duration-300 ${activeTab === 'social' ? 'text-[#FF8200] scale-110' : 'text-slate-300'}`}
          >
            <Heart size={26} strokeWidth={activeTab === 'social' ? 3 : 2} />
            <span className={`text-[9px] font-black uppercase italic tracking-tighter ${activeTab === 'social' ? 'opacity-100' : 'opacity-40'}`}>Social</span>
          </button>
          
          <button 
            onClick={() => setActiveTab('gaba')}
            className={`flex flex-col items-center gap-1.5 transition-all duration-300 ${activeTab === 'gaba' ? 'text-[#FF8200] scale-110' : 'text-slate-300'}`}
          >
            <Wallet size={26} strokeWidth={activeTab === 'gaba' ? 3 : 2} />
            <span className={`text-[9px] font-black uppercase italic tracking-tighter ${activeTab === 'gaba' ? 'opacity-100' : 'opacity-40'}`}>Budget</span>
          </button>
        </nav>
      </div>
    </div>
  );
}

```
