```react
import React, { useState, useEffect } from 'react';
import { 
  Bus, Navigation, X, Search,
  User, MapPin, Clock, Megaphone,
  Wallet, QrCode, CreditCard, ChevronRight, Star,
  Send, Plus, History, ArrowRightLeft, ScanLine, Camera,
  CheckCircle, Info, Lock, TrendingUp, Percent
} from 'lucide-react';

const App = () => {
  // États de l'application
  const [view, setView] = useState('lines'); 
  const [balance, setBalance] = useState(4350);
  const [busPoints, setBusPoints] = useState(1250);
  const [lockedAmount, setLockedAmount] = useState(0);
  const [selectedLine, setSelectedLine] = useState(null);
  
  // États des modaux
  const [showGabaModal, setShowGabaModal] = useState(false);
  const [gabaInput, setGabaInput] = useState('');

  const BUS_LINES = [
    { id: '11', name: 'Gare Sud - Adjamé Liberté', color: 'bg-green-600', price: 200 },
    { id: '210', name: 'Gare St-Jean - Riviera 3', color: 'bg-orange-600', price: 500 },
    { id: '04', name: 'Gare Sud - Koumassi', color: 'bg-blue-600', price: 200 }
  ];

  const handleLockBudget = () => {
    const amount = parseInt(gabaInput);
    if (amount > 0 && amount <= balance) {
      setLockedAmount(prev => prev + amount);
      setBalance(prev => prev - amount);
      setGabaInput('');
      setShowGabaModal(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-24 select-none">
      {/* HEADER */}
      <header className="bg-white border-b border-slate-100 p-4 sticky top-0 z-40 shadow-sm">
        <div className="flex justify-between items-center max-w-md mx-auto">
          <div className="flex items-center gap-3">
            <div className="bg-orange-500 p-2 rounded-xl shadow-lg">
              <Bus className="text-white w-5 h-5" />
            </div>
            <div>
              <h1 className="font-black text-lg italic uppercase leading-none">MonBus CI</h1>
              <p className="text-[7px] font-bold text-orange-600 uppercase tracking-widest mt-0.5">Budget Intouchable 🔒</p>
            </div>
          </div>
          <div className="bg-slate-100 px-4 py-2 rounded-xl border border-slate-200">
            <span className="text-xs font-black">{balance.toLocaleString()} F</span>
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto p-4 space-y-6">
        
        {/* VUE RÉSEAU */}
        {view === 'lines' && (
          <div className="space-y-6 animate-in fade-in duration-500">
            {/* Bannière Alerte Live */}
            <div className="bg-slate-900 text-white p-5 rounded-[2rem] shadow-xl flex items-center gap-4 relative overflow-hidden border-r-4 border-orange-500">
              <div className="bg-orange-500/20 p-3 rounded-2xl">
                <Navigation className="w-5 h-5 text-orange-500 rotate-45" />
              </div>
              <div>
                <p className="text-[10px] font-black italic uppercase text-orange-400">Le 210 est à l'arrêt</p>
                <h3 className="text-sm font-black uppercase italic leading-tight">École de Police</h3>
              </div>
              <div className="absolute right-4 w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>

            <h3 className="font-black italic text-xs uppercase text-slate-400 px-2 tracking-wider">Lignes Disponibles</h3>
            <div className="space-y-3">
              {BUS_LINES.map(line => (
                <div key={line.id} className="bg-white p-5 rounded-[2.2rem] border border-slate-100 flex items-center justify-between shadow-sm active:scale-95 transition-all">
                  <div className="flex items-center gap-4">
                    <div className={`${line.color} text-white w-12 h-12 rounded-2xl flex items-center justify-center font-black text-lg shadow-lg`}>{line.id}</div>
                    <div>
                      <p className="font-black text-sm uppercase italic text-slate-800 leading-none">{line.name.split(' - ')[0]}</p>
                      <p className="text-[9px] font-bold text-slate-400 uppercase italic mt-1">Ticket : {line.price} F</p>
                    </div>
                  </div>
                  <ChevronRight className="text-slate-200 w-5 h-5" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* VUE BUDGET (GABA) */}
        {view === 'budget' && (
          <div className="space-y-6 animate-in slide-in-from-bottom duration-500">
            <div className="bg-white p-8 rounded-[3rem] shadow-xl border-2 border-slate-50 text-center relative overflow-hidden">
                <div className="absolute top-4 right-4 text-slate-100"><Lock className="w-16 h-16 opacity-10" /></div>
                <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-2">Budget Transport Bloqué</p>
                <h2 className="text-6xl font-black italic text-slate-800 mb-1">{lockedAmount.toLocaleString()} <span className="text-2xl uppercase">F</span></h2>
                <p className="text-[9px] font-bold text-orange-500 uppercase italic mb-8">Sécurise ton argent en 2026</p>
                
                <button 
                  onClick={() => setShowGabaModal(true)}
                  className="w-full bg-slate-900 text-white py-5 rounded-[1.8rem] font-black italic uppercase shadow-xl active:scale-95 transition-all"
                >
                  Bloquer mon transport
                </button>
            </div>

            <div className="bg-slate-50 p-6 rounded-[2.5rem] border border-slate-200 border-dashed flex items-start gap-4">
              <div className="bg-blue-100 p-3 rounded-full text-blue-600 mt-1"><Info className="w-4 h-4" /></div>
              <p className="text-[11px] font-bold text-slate-500 leading-relaxed italic">
                <span className="text-slate-900 font-black uppercase">Le saviez-vous ?</span> En 2026, plus de 70% des usagers de MonBus CI utilisent le "Gaba" pour ne jamais manquer de transport avant la fin du mois.
              </p>
            </div>
          </div>
        )}

      </main>

      {/* MODAL GABA */}
      {showGabaModal && (
        <div className="fixed inset-0 z-[100] bg-slate-900/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-4">
          <div className="bg-white w-full max-w-md rounded-[2.5rem] p-8 shadow-2xl animate-in slide-in-from-bottom duration-300">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-3">
                <div className="bg-blue-50 p-2 rounded-lg text-blue-600"><Lock className="w-5 h-5" /></div>
                <h2 className="text-xl font-black italic uppercase text-slate-800">Bloquer Budget</h2>
              </div>
              <button onClick={() => setShowGabaModal(false)} className="bg-slate-100 p-2 rounded-full text-slate-400"><X className="w-5 h-5" /></button>
            </div>
            
            <input 
              type="number" 
              value={gabaInput}
              onChange={(e) => setGabaInput(e.target.value)}
              placeholder="Montant (F)..."
              className="w-full bg-slate-50 border-none p-6 rounded-2xl text-2xl font-black italic outline-none mb-4"
            />
            
            <div className="bg-slate-50 p-4 rounded-2xl mb-6 flex justify-center items-center gap-3">
               <span className="text-xs font-bold text-slate-400 uppercase">Déblocage :</span>
               <span className="text-xs font-black text-slate-800 uppercase italic">31 Mai 2026</span>
            </div>

            <button 
              onClick={handleLockBudget}
              className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black italic uppercase shadow-lg shadow-blue-200 active:scale-95 transition-all"
            >
              Sécuriser Maintenant
            </button>
          </div>
        </div>
      )}

      {/* NAVIGATION BASSE */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 px-8 py-5 flex justify-around items-center z-40 max-w-md mx-auto rounded-t-[2.5rem] shadow-2xl">
        <button onClick={() => setView('lines')} className={`flex flex-col items-center gap-1 ${view === 'lines' ? 'text-orange-500 scale-110' : 'text-slate-300'} transition-all`}>
          <Bus className="w-6 h-6" />
          <span className="text-[8px] font-black uppercase italic">Réseau</span>
        </button>
        <button onClick={() => setView('budget')} className={`flex flex-col items-center gap-1 ${view === 'budget' ? 'text-blue-600 scale-110' : 'text-slate-300'} transition-all`}>
          <TrendingUp className="w-6 h-6" />
          <span className="text-[8px] font-black uppercase italic">Budget</span>
        </button>
        <button onClick={() => setView('wallet')} className={`flex flex-col items-center gap-1 ${view === 'wallet' ? 'text-slate-600 scale-110' : 'text-slate-300'} transition-all`}>
          <Wallet className="w-6 h-6" />
          <span className="text-[8px] font-black uppercase italic">Banque</span>
        </button>
      </nav>
    </div>
  );
};

export default App;

```

