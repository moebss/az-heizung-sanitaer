import { useState } from 'react';
import { Phone, Flame, Droplets, ShieldCheck, Clock, MapPin, CheckCircle2, Calculator, X } from 'lucide-react';

export default function App() {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [isImpressumOpen, setIsImpressumOpen] = useState(false);
  const [isDatenschutzOpen, setIsDatenschutzOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 selection:bg-sky-500 selection:text-white">
      
      {/* Top Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/90 border-b border-slate-800">
        <div className="hidden lg:block bg-slate-900 border-b border-slate-800 py-2 px-6 text-xs text-slate-300">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                <span>Brühl & Erftkreis (Köln, Hürth, Wesseling)</span>
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-sky-400" />
                <span>24/7 Heizungs-Notdienst & Fachverkauf</span>
              </span>
            </div>
            <a href="tel:0223246033" className="font-bold text-white hover:text-sky-400">
              ☎ 02232 / 46 033
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="#" className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-sky-600 via-blue-600 to-indigo-600 flex items-center justify-center text-white font-black shadow-md">
                <Flame className="w-6 h-6 stroke-[2.5]" />
              </div>
              <div>
                <span className="font-heading text-xl font-black uppercase text-white block leading-none">
                  AZ HEIZUNG-<span className="text-sky-400">SANITÄR</span>
                </span>
                <span className="text-[10px] text-sky-400 font-bold uppercase tracking-wider block mt-1">
                  FACHVERKAUF GMBH BRÜHL • ERFTKREIS
                </span>
              </div>
            </a>

            <div className="flex items-center gap-4">
              <a
                href="tel:0223246033"
                className="hidden sm:inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider"
              >
                <Phone className="w-4 h-4 text-sky-400" />
                <span>02232 / 46 033</span>
              </a>

              <button
                onClick={() => setIsCalculatorOpen(true)}
                className="bg-sky-600 hover:bg-sky-500 text-white font-extrabold px-5 py-2.5 rounded-xl text-xs uppercase tracking-wider shadow-lg shadow-sky-600/20"
              >
                <span>Wärmepumpen-Check</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative py-20 lg:py-28 bg-[#020617] bg-shk-grid border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900 border border-sky-500/30 text-sky-400 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-sky-400" />
                <span>AZ Heizung-Sanitär Fachverkauf GmbH Brühl</span>
              </div>

              <h1 className="font-heading text-4xl sm:text-6xl uppercase tracking-tight text-white font-black leading-[1.05]">
                WÄRMEPUMPEN & <br />
                <span className="text-sky-400">MODERNE BADSANIEREUNG</span>
              </h1>

              <p className="text-slate-300 text-lg font-light leading-relaxed max-w-xl">
                Ihr zertifizierter Meisterbetrieb für den zukunftssicheren Heizungstausch, Wärmepumpen mit bis zu 70% BAFA-Förderung & barrierefreie Traumbäder im Erftkreis.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                <button
                  onClick={() => setIsCalculatorOpen(true)}
                  className="bg-sky-600 hover:bg-sky-500 text-white font-extrabold px-8 py-4 rounded-xl text-xs uppercase tracking-wider shadow-xl shadow-sky-600/25 flex items-center justify-center gap-2"
                >
                  <Calculator className="w-4 h-4" />
                  <span>Förderung & Heizungs-Check</span>
                </button>

                <a
                  href="tel:0223246033"
                  className="bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-bold px-7 py-4 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-sky-400" />
                  <span>02232 / 46 033</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl aspect-[4/5] bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80"
                  alt="AZ Heizung Sanitär Brühl Badsanierung"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-950/90 border border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-sky-400 font-bold uppercase block">BAFA & KfW Förderung</span>
                    <span className="text-sm font-bold text-white">Bis zu 70% Zuschuss möglich</span>
                  </div>
                  <CheckCircle2 className="w-8 h-8 text-sky-400" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-slate-950 border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-sky-400 font-bold text-xs uppercase tracking-widest block mb-2">Unsere Fachleistungen</span>
            <h2 className="font-heading text-3xl sm:text-4xl uppercase tracking-tight text-white font-black">Heizung & Sanitär Brühl</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Wärmepumpen & Heizungstausch', desc: 'Installation & Wartung moderner Luft-Wasser & Erdwärmepumpen.' },
              { title: 'Komplett-Badsanierung', desc: 'Barrierefreie Walk-In Duschen, Sanitärinstallationen & Edelarmaturen.' },
              { title: 'Fachverkauf & Notdienst', desc: 'Ersatzteilservice & 24/7 Notdienst bei Heizungsausfall oder Rohrbrüchen.' }
            ].map((s, idx) => (
              <div key={idx} className="shk-card rounded-2xl p-6 hover:border-sky-500/50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 mb-4">
                  <Droplets className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-white mb-2">{s.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 py-12 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            © 2026 AZ Heizung-Sanitär Fachverkauf GmbH Brühl • All Rights Reserved
          </div>
          <div className="flex items-center gap-6">
            <button onClick={() => setIsImpressumOpen(true)} className="hover:text-sky-400">Impressum</button>
            <button onClick={() => setIsDatenschutzOpen(true)} className="hover:text-sky-400">Datenschutz</button>
          </div>
        </div>
      </footer>

      {/* Calculator Modal */}
      {isCalculatorOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 space-y-4">
            <div className="flex justify-between items-center border-b border-slate-800 pb-3">
              <h3 className="font-heading text-lg font-bold text-white">Wärmepumpen & Förderungs-Check</h3>
              <button onClick={() => setIsCalculatorOpen(false)} className="text-slate-400 hover:text-white"><X className="w-5 h-5" /></button>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); alert('Vielen Dank! Unser Fachberater kontaktiert Sie bzgl. Förderung & Beratung.'); setIsCalculatorOpen(false); }} className="space-y-3">
              <input type="text" required placeholder="Ihr Name *" className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white" />
              <input type="tel" required placeholder="Ihre Telefonnummer *" className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white" />
              <textarea placeholder="Welches Heizungssystem nutzen Sie aktuell?" rows={3} className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-xs text-white" />
              <button type="submit" className="w-full bg-sky-600 hover:bg-sky-500 text-white font-extrabold py-3 rounded-xl text-xs uppercase tracking-wider">Kostenfrei Anfragen</button>
            </form>
          </div>
        </div>
      )}

      {/* Impressum Modal */}
      {isImpressumOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 space-y-4 text-xs text-slate-300">
            <div className="flex justify-between items-center border-b border-slate-800 pb-3">
              <h3 className="font-heading text-lg font-bold text-white">Impressum</h3>
              <button onClick={() => setIsImpressumOpen(false)} className="text-slate-400 hover:text-white"><X className="w-5 h-5" /></button>
            </div>
            <p><strong>AZ Heizung-Sanitär Fachverkauf GmbH</strong><br />Brühl, Erftkreis<br />Telefon: 02232 / 46 033</p>
          </div>
        </div>
      )}

      {/* Datenschutz Modal */}
      {isDatenschutzOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-lg w-full p-6 space-y-4 text-xs text-slate-300">
            <div className="flex justify-between items-center border-b border-slate-800 pb-3">
              <h3 className="font-heading text-lg font-bold text-white">Datenschutzerklärung</h3>
              <button onClick={() => setIsDatenschutzOpen(false)} className="text-slate-400 hover:text-white"><X className="w-5 h-5" /></button>
            </div>
            <p>Verantwortlicher im Sinne der DSGVO: AZ Heizung-Sanitär Fachverkauf GmbH. Wir erheben Daten nur zur Kontaktaufnahme.</p>
          </div>
        </div>
      )}

    </div>
  );
}
