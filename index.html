```react
import React, { useState } from 'react';
import { 
  Bus, Wallet, TrendingUp, X, Loader2, Lock, CheckCircle, 
  Plus, ChevronLeft, MessageSquare, Send, Star, Trophy, 
  ArrowUpRight, Info, Percent, Navigation, Search,
  Zap, ArrowRightLeft, CreditCard, ChevronRight
} from 'lucide-react';

const App = () => {
  // Navigation et États
  const [view, setView] = useState('lines'); 
  const [balance, setBalance] = useState(4350);
  const [busPoints, setBusPoints] = useState(1250);
  const [selectedLine, setSelectedLine] = useState(null);
  
  // Modaux
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const [showExchangeModal, setShowExchangeModal] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [withdrawSuccess, setWithdrawSuccess] = useState(false);
  const [newComment, setNewComment] = useState("");

  // Config Business
  const userRank = "Argent";
  const xpProgress = 65; 
  const currentFees = 0.015; // 1.5% pour le rang Argent
  const lockedAmount = 1500; 

  const BUS_LINES = [
    { id: '11', name: 'Gare Sud - Adjamé Liberté', color: 'bg-green-600', price: 200, stops: ["Gare Sud", "Indénié", "Liberté"] },
    { id: '210', name: 'Gare St-Jean - Riviera 3', color: 'bg-orange-600', price: 500, stops: ["Riviera 2", "Riviera 3", "Château"] },
    { id: '04', name: 'Gare Sud - Koumassi', color: 'bg-blue-600', price: 200, stops: ["Gare Sud", "Treichville", "Koumassi"] }
  ];

  const [comments, setComments] = useState([
    { id: 1, user: "Koffi J.", text: "Le 210 arrive à Riviera 2 !", time: "1m" },
    { id: 2, user: "Sali T.", text: "Embouteillage à l'Indénié.", time: "4m" }
  ]);

  const handleSendComment = () => {
    if (!newComment.trim()) return;
    setComments([{ id: Date.now(), user: "Moi", text: newComment, time: "Maintenant" }, ...comments]);
    setNewComment("");
    setBusPoints(prev => prev + 10);
  };

  const handleWithdraw = () => {
    const amount = parseInt(withdrawAmount);
    const total = amount + (amount * currentFees);
    if (!amount || total > (balance - lockedAmount)) return;
    setIsProcessing(true);
    setTimeout(() => {
      setBalance(prev => prev - total);
      setIsProcessing(false);
      setWithdrawSuccess(true);
      setTimeout(() => {
        setWithdrawSuccess(false);
        setShowWithdrawModal(false);
        setWithdrawAmount('');
      }, 2000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-24 overflow-x-hidden">
      {/* HEADER */}
      <header className="bg-white border-b border-slate-100 p-4 sticky top-0 z-40">
        <div className="flex justify-between items-center max-w-md mx-auto">
          <div className="flex items-center gap-3">
            <div className="bg-orange-500 p-2 rounded-xl shadow-lg">
              <Bus className="text-white w-5 h-5" />
            </div>
            <div>
              <h1 className="font-black text-lg italic leading-tight uppercase">MonBus</h1>
              <p className="text-[8px] font-black text-orange-600 uppercase tracking-widest leading-none">Rang {userRank}</p>
            </div>
          </div>
          <button onClick={() => setView('wallet')} className="bg-slate-900 text-white px-4 py-2 rounded-xl active:scale-95 transition-all shadow-lg">
            <span className="text-xs font-black">{balance.toLocaleString()} F</span>
          </button>
        </div>
      </header>

      <main className="max-w-md mx-auto p-4 space-y-6">
        {/* VUE RÉSEAU / ACCUEIL */}
        {view === 'lines' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-[2.5rem] p-6 text-white shadow-xl relative overflow-hidden">
                <div className="relative z-10 flex justify-between items-end">
                    <div>
                        <p className="text-[9px] font-bold uppercase opacity-60 mb-1">Tes BusPoints</p>
                        <h3 className="text-3xl font-black italic">{busPoints.toLocaleString()}</h3>
                    </div>
                    <button onClick={() => setShowExchangeModal(true)} className="bg-white/20 backdrop-blur-md text-[9px] font-black uppercase px-3 py-2 rounded-xl border border-white/10">Convertir</button>
                </div>
                <div className="mt-4 h-1.5 w-full bg-black/20 rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-400" style={{width: `${xpProgress}%`}}></div>
                </div>
            </div>

            <section className="bg-white p-5 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-4">
                <h3 className="font-black italic text-[10px] uppercase text-slate-400 flex items-center gap-2">
                    <MessageSquare className="w-3 h-3" /> Communauté
                </h3>
                <div className="space-y-2 max-h-32 overflow-y-auto pr-1">
                    {comments.map(c => (
                        <div key={c.id} className="bg-slate-50 p-3 rounded-2xl">
                            <div className="flex justify-between mb-0.5 text-[9px] font-black uppercase italic">
                                <span className="text-slate-800">{c.user}</span>
                                <span className="text-slate-300">{c.time}</span>
                            </div>
                            <p className="text-[11px] font-bold text-slate-600 italic leading-tight">{c.text}</p>
                        </div>
                    ))}
                </div>
                <div className="flex gap-2">
                    <input 
                        type="text" 
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Signaler un bus..."
                        className="flex-1 bg-slate-50 border-none rounded-2xl px-4 py-3 text-[11px] font-bold outline-none italic"
                    />
                    <button onClick={handleSendComment} className="bg-orange-500 text-white p-3 rounded-2xl active:scale-90 transition-transform"><Send className="w-4 h-4" /></button>
                </div>
            </section>

            <div className="space-y-3">
                <h3 className="font-black italic text-xs uppercase text-slate-400 px-2 tracking-wider">Lignes SOTRA</h3>
                {BUS_LINES.map(line => (
                    <div key={line.id} onClick={() => { setSelectedLine(line); setView('details'); }} className="bg-white p-5 rounded-[2.2rem] border border-slate-100 flex items-center justify-between shadow-sm active:scale-95 transition-all">
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

        {/* VUE DÉTAILS LIGNE */}
        {view === 'details' && selectedLine && (
          <div className="space-y-6">
            <button onClick={() => setView('lines')} className="flex items-center gap-2 text-[10px] font-black uppercase text-slate-400 bg-white px-4 py-2 rounded-full border border-slate-100">
                <ChevronLeft className="w-4 h-4" /> Retour
            </button>
            <div className="bg-white p-8 rounded-[3rem] shadow-sm border border-slate-100">
                <div className="flex items-center gap-4 mb-8">
                    <div className={`${selectedLine.color} text-white w-14 h-14 rounded-2xl flex items-center justify-center font-black text-xl shadow-xl`}>{selectedLine.id}</div>
                    <h2 className="text-xl font-black italic uppercase leading-tight">{selectedLine.name}</h2>
                </div>
                <div className="relative pl-8 space-y-8">
                    <div className="absolute left-[11px] top-2 bottom-2 w-1 bg-slate-100 rounded-full"></div>
                    {selectedLine.stops.map((stop, index) => (
                        <div key={index} className="relative flex items-center gap-6">
                            <div className={`absolute -left-[27px] w-5 h-5 rounded-full border-4 border-white shadow-md z-10 ${index === 0 ? 'bg-orange-500' : 'bg-slate-200'}`}></div>
                            <p className="text-[11px] font-black uppercase italic text-slate-400">{stop}</p>
                        </div>
                    ))}
                </div>
            </div>
          </div>
        )}

        {/* VUE BANQUE */}
        {view === 'wallet' && (
          <div className="space-y-6 animate-in slide-in-from-bottom">
            <div className="bg-orange-500 text-white p-10 rounded-[3.5rem] shadow-2xl relative overflow-hidden">
                <p className="text-[10px] font-bold uppercase opacity-70 mb-2 tracking-widest">Disponible au retrait</p>
                <h2 className="text-6xl font-black italic">{(balance - lockedAmount).toLocaleString()} F</h2>
                <div className="mt-10 flex gap-3">
                    <button className="bg-white text-orange-600 flex-1 py-5 rounded-[1.8rem] text-xs font-black uppercase shadow-xl italic">Recharger</button>
                    <button onClick={() => setShowWithdrawModal(true)} className="bg-black/20 text-white flex-1 py-5 rounded-[1.8rem] text-xs font-black uppercase backdrop-blur-sm border border-white/10 italic">Retirer</button>
                </div>
            </div>
            <div className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-sm flex items-center gap-4">
                <div className="bg-indigo-50 p-4 rounded-2xl text-indigo-600"><Percent className="w-5 h-5" /></div>
                <div>
                    <h4 className="text-[10px] font-black uppercase text-slate-400 mb-1 leading-none">Tes Frais (Business)</h4>
                    <p className="text-sm font-black text-slate-700 italic uppercase">
                        {currentFees * 100}% <span className="text-indigo-600 ml-1">({userRank})</span>
                    </p>
                </div>
            </div>
          </div>
        )}

        {/* VUE GABA */}
        {view === 'budget' && (
           <div className="space-y-6 animate-in slide-in-from-right">
             <div className="bg-slate-900 text-white p-10 rounded-[3.5rem] shadow-2xl relative overflow-hidden">
                <div className="flex items-center gap-2 mb-4 opacity-50">
                    <Lock className="w-4 h-4" />
                    <p className="text-[10px] font-black uppercase tracking-widest">Gaba Sécurisé</p>
                </div>
                <h2 className="text-6xl font-black italic mb-2">{lockedAmount.toLocaleString()} F</h2>
                <p className="text-[10px] font-bold uppercase italic opacity-40">Libéré le 31 mai 2026</p>
             </div>
           </div>
        )}
      </main>

      {/* MODAL RETRAIT */}
      {showWithdrawModal && (
        <div className="fixed inset-0 z-[100] bg-slate-900/90 backdrop-blur-md flex items-end justify-center">
            <div className="bg-white w-full max-w-md rounded-t-[3rem] p-8 pb-12 shadow-2xl">
                {!withdrawSuccess ? (
                    <div className="space-y-6">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-black italic uppercase text-slate-800">Sortir Cash</h2>
                            <button onClick={() => setShowWithdrawModal(false)} className="p-2 bg-slate-50 rounded-full text-slate-300"><X className="w-6 h-6"/></button>
                        </div>
                        <input 
                            type="number" 
                            value={withdrawAmount}
                            onChange={(e) => setWithdrawAmount(e.target.value)}
                            placeholder="Montant F"
                            className="w-full bg-slate-50 border-none p-8 rounded-3xl text-4xl font-black italic outline-none text-center"
                        />
                        {withdrawAmount > 0 && (
                            <div className="bg-slate-50 p-6 rounded-3xl space-y-4">
                                <div className="flex justify-between text-[11px] font-black uppercase italic">
                                    <span className="text-slate-400">Frais ({currentFees * 100}%)</span>
                                    <span className="text-red-500">+{Math.ceil(withdrawAmount * currentFees)} F</span>
                                </div>
                                <div className="flex justify-between text-lg font-black uppercase italic text-slate-800">
                                    <span>Total à débiter</span>
                                    <span>{Math.ceil(parseInt(withdrawAmount) + (withdrawAmount * currentFees))} F</span>
                                </div>
                            </div>
                        )}
                        <button onClick={handleWithdraw} className="w-full bg-slate-900 text-white p-7 rounded-3xl font-black italic uppercase shadow-xl active:scale-95 transition-all">CONFIRMER</button>
                    </div>
                ) : (
                    <div className="py-10 text-center animate-in zoom-in">
                        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6"><CheckCircle className="w-10 h-10" /></div>
                        <h3 className="text-2xl font-black italic uppercase">C'est propre !</h3>
                        <p className="text-slate-400 font-bold uppercase text-[10px]">L'argent arrive sur ton Mobile Money.</p>
                    </div>
                )}
            </div>
        </div>
      )}

      {/* NAV BASSE */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-100 px-8 py-6 flex justify-around items-center z-40 max-w-md mx-auto rounded-t-[2.5rem] shadow-2xl">
        <button onClick={() => setView('lines')} className={`flex flex-col items-center gap-1.5 ${view === 'lines' || view === 'details' ? 'text-orange-500 scale-110' : 'text-slate-300'} transition-all`}>
          <Bus className="w-7 h-7" /><span className="text-[9px] font-black uppercase italic">Bus</span>
        </button>
        <button onClick={() => setView('budget')} className={`flex flex-col items-center gap-1.5 ${view === 'budget' ? 'text-indigo-600 scale-110' : 'text-slate-300'} transition-all`}>
          <TrendingUp className="w-7 h-7" /><span className="text-[9px] font-black uppercase italic">Gaba</span>
        </button>
        <button onClick={() => setView('wallet')} className={`flex flex-col items-center gap-1.5 ${view === 'wallet' ? 'text-orange-500 scale-110' : 'text-slate-300'} transition-all`}>
          <Wallet className="w-7 h-7" /><span className="text-[9px] font-black uppercase italic">Banque</span>
        </button>
      </nav>
    </div>
  );
};

export default App;

```
