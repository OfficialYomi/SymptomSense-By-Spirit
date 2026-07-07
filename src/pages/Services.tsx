/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Plus, Check, Sparkles, FileText, ChevronRight, 
  RotateCcw, ShieldCheck, Heart, User, ListCollapse,
  Activity, ArrowDown, Calendar, AlertCircle
} from 'lucide-react';
import { CheckInEntry, Symptom } from '../types';

export default function Services() {
  // Prepopulated symptoms list
  const availableSymptoms: Symptom[] = [
    { id: 'sob', label: 'Shortness of breath', category: 'respiratory' },
    { id: 'cough', label: 'Persistent cough', category: 'respiratory' },
    { id: 'chest_tight', label: 'Chest tightness', category: 'respiratory' },
    { id: 'wheezing', label: 'Wheezing/Rattling', category: 'respiratory' },
    { id: 'fatigue', label: 'Fatigue / Low energy', category: 'systemic' },
    { id: 'poor_sleep', label: 'Poor sleep quality', category: 'lifestyle' },
    { id: 'med_taken', label: 'Medications taken', category: 'lifestyle' },
    { id: 'stress', label: 'Elevated stress levels', category: 'lifestyle' },
  ];

  // Default initial mock history to make timeline instantly rich and visually compelling
  const initialHistory: CheckInEntry[] = [
    {
      id: 'mock-1',
      date: '2026-07-04',
      symptoms: ['sob', 'fatigue', 'poor_sleep'],
      energy: 2,
      sleepQuality: 1,
      notes: 'Woke up three times coughing. Used rescue inhaler twice.',
    },
    {
      id: 'mock-2',
      date: '2026-07-05',
      symptoms: ['cough', 'poor_sleep'],
      energy: 3,
      sleepQuality: 2,
      notes: 'A bit better energy. Still short cough in evening.',
    },
    {
      id: 'mock-3',
      date: '2026-07-06',
      symptoms: ['sob', 'med_taken'],
      energy: 4,
      sleepQuality: 4,
      notes: 'Morning inhaler taken on schedule. Breathing much clearer.',
    },
  ];

  const [history, setHistory] = useState<CheckInEntry[]>(initialHistory);
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>(['sob', 'poor_sleep']);
  const [energyLevel, setEnergyLevel] = useState<number>(3);
  const [sleepQuality, setSleepQuality] = useState<number>(3);
  const [noteText, setNoteText] = useState<string>('');
  
  // Clinical Summary Modal State
  const [isSummaryOpen, setIsSummaryOpen] = useState(false);

  // Form submission handling
  const handleAddEntry = (e: FormEvent) => {
    e.preventDefault();
    
    // Get current date formatted as YYYY-MM-DD
    const todayStr = new Date().toISOString().split('T')[0];

    // Check if we already logged today. If so, overwrite or alert.
    const exists = history.some(h => h.date === todayStr);
    if (exists) {
      if (!confirm("You have already logged an entry for today. Would you like to overwrite it?")) {
        return;
      }
    }

    const newEntry: CheckInEntry = {
      id: 'entry-' + Date.now(),
      date: todayStr,
      symptoms: [...selectedSymptoms],
      energy: energyLevel,
      sleepQuality: sleepQuality,
      notes: noteText.trim() || undefined
    };

    // Filter out existing today entry if any, then append
    const filteredHistory = history.filter(h => h.date !== todayStr);
    setHistory([...filteredHistory, newEntry].sort((a,b) => a.date.localeCompare(b.date)));
    
    // Reset inputs
    setSelectedSymptoms([]);
    setNoteText('');
    setEnergyLevel(3);
    setSleepQuality(3);

    alert("Daily Health Memory entry successfully logged! Your dynamic timeline has updated below.");
  };

  const toggleSymptom = (id: string) => {
    setSelectedSymptoms(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleReset = () => {
    if (confirm("Reset timeline simulator back to original default mock entries?")) {
      setHistory(initialHistory);
    }
  };

  // Helper: map symptom ID to readable label
  const getSymptomLabel = (id: string) => {
    return availableSymptoms.find(s => s.id === id)?.label || id;
  };

  return (
    <div className="bg-mist text-ink min-h-screen py-16 px-6" id="services-page">
      <div className="max-w-[1180px] mx-auto">
        
        {/* Page Header */}
        <div className="max-w-3xl text-left mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-brand font-mono block mb-3">
            What We Build
          </span>
          <h1 className="serif text-5xl sm:text-6xl font-semibold text-ink leading-tight tracking-tight mb-6">
            Services designed with extreme medical discipline.
          </h1>
          <p className="text-lg md:text-xl text-slate-500 leading-relaxed">
            SymptomSense starts with Health Memory. We reject premature AI diagnostics, opting instead to build stable, longitudinal timeline tools to support doctor-patient conversations.
          </p>
        </div>

        {/* Detailed Services Breakdown Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24 text-left">
          
          <div className="p-8 bg-white border border-ink/10 rounded-3xl shadow-sm flex flex-col justify-between">
            <div>
              <div className="px-3 py-1 bg-teal-brand/10 border border-teal-brand/20 text-teal-brand text-[10px] font-bold font-mono tracking-wider uppercase rounded-full inline-block mb-6">
                Active Service
              </div>
              <h3 className="serif text-2xl font-bold text-ink mb-3">Health Memory Application</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">
                Our main product. Users log brief, non-numeric checks of their subjective symptoms, medications, sleep disruptions, and energy states. It maps these into a readable medical timeline.
              </p>
              <ul className="text-xs text-slate-500 space-y-2 mt-4 border-t border-slate-100 pt-4">
                <li>• Optimized to defeat patient recall forgetting curves.</li>
                <li>• No numerical, anxiety-inducing health scores.</li>
                <li>• Designed with respiratory clinicians.</li>
              </ul>
            </div>
            <div className="pt-6">
              <span className="text-xs font-bold font-mono text-teal-brand">Available for Testing below</span>
            </div>
          </div>

          <div className="p-8 bg-white border border-ink/10 rounded-3xl shadow-sm flex flex-col justify-between">
            <div>
              <div className="px-3 py-1 bg-blue-brand/10 border border-blue-brand/20 text-blue-brand text-[10px] font-bold font-mono tracking-wider uppercase rounded-full inline-block mb-6">
                Clinical Pilot
              </div>
              <h3 className="serif text-2xl font-bold text-ink mb-3">COPD & Asthma Pathways</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">
                Chronic respiratory diseases are defined by exacerbations. By establishing personal baselines of shortness of breath and wheezing, patients and therapists can identify triggers earlier.
              </p>
              <ul className="text-xs text-slate-500 space-y-2 mt-4 border-t border-slate-100 pt-4">
                <li>• Focuses on dyspnea changes against historical normal.</li>
                <li>• Supports clinical review of inhaler scheduling.</li>
                <li>• Designed in compliance with respiratory guidelines.</li>
              </ul>
            </div>
            <div className="pt-6">
              <span className="text-xs font-semibold text-slate-400">Pilot Registry Open</span>
            </div>
          </div>

          <div className="p-8 bg-white border border-ink/10 rounded-3xl shadow-sm flex flex-col justify-between">
            <div>
              <div className="px-3 py-1 bg-amber-50 border border-amber-200 text-amber-700 text-[10px] font-bold font-mono tracking-wider uppercase rounded-full inline-block mb-6">
                Future Ambition
              </div>
              <h3 className="serif text-2xl font-bold text-ink mb-3">Cardiovascular & Renal Mapping</h3>
              <p className="text-sm text-slate-500 leading-relaxed mb-4">
                Mapping early warnings for heart failure (subtle overnight weight gain, fatigue, pedal edema) and renal decline. We map longitudinal trends to prevent crisis interventions.
              </p>
              <ul className="text-xs text-slate-500 space-y-2 mt-4 border-t border-slate-100 pt-4">
                <li>• Under initial clinical formulation.</li>
                <li>• Long-term Software as a Medical Device (SaMD) goals.</li>
                <li>• Subject to robust future governance approvals.</li>
              </ul>
            </div>
            <div className="pt-6">
              <span className="text-xs font-semibold text-slate-400">Clinical Formulation Stage</span>
            </div>
          </div>

        </div>

        {/* TRANSPARENT PRICING SECTION */}
        <div className="mb-24 text-left" id="pricing-section">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-brand font-mono block mb-3">
              Fair &amp; Transparent Model
            </span>
            <h2 className="serif text-4xl sm:text-5xl font-semibold text-ink tracking-tight mb-4">
              Transparent, clinical-first pricing.
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed max-w-2xl">
              SymptomSense is completely free to join during this development phase. We believe patient-led health tracking should be fully accessible.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Free Forever Tier */}
            <div className="relative p-8 bg-white border border-slate-200 rounded-3xl shadow-sm flex flex-col justify-between hover:border-blue-600/20 transition-all text-left">
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-1">Free Forever</h3>
                <div className="mb-1">
                  <span className="serif text-5xl font-bold text-blue-600">£0</span>
                </div>
                <p className="text-xs text-slate-500 font-medium mb-3">No credit card required</p>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  Everything you need to start building your health picture today.
                </p>
                
                <div className="border-t border-slate-100 my-6"></div>
                
                <ul className="space-y-4 text-xs text-slate-700">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Daily symptom logging</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>7-day health history</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Mood &amp; energy tracking</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Basic alerts</span>
                  </li>
                </ul>
              </div>
              <div className="pt-8">
                <button
                  onClick={() => {
                    const el = document.getElementById('waitlist-form-sec');
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      window.location.hash = '#/contact';
                    }
                  }}
                  className="w-full py-2.5 rounded-xl border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer text-center block"
                >
                  Get Started Free
                </button>
              </div>
            </div>

            {/* Personal Tier - Most Popular */}
            <div className="relative p-8 bg-white border-2 border-blue-600 rounded-3xl shadow-md flex flex-col justify-between transition-all text-left">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-[9px] font-mono uppercase tracking-widest font-bold py-1 px-4 rounded-full shadow-sm whitespace-nowrap">
                MOST POPULAR
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-1 mt-1">Personal</h3>
                <div className="mb-1">
                  <span className="serif text-5xl font-bold text-blue-600">£7.99</span>
                </div>
                <p className="text-xs text-slate-500 font-medium mb-3">per month · cancel anytime</p>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  The full SymptomSense experience. AI patterns, GP report, and your complete health memory.
                </p>
                
                <div className="border-t border-slate-100 my-6"></div>
                
                <ul className="space-y-4 text-xs text-slate-700">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Everything in Free</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>AI pattern detection</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>GP report generator</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>365-day health timeline</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Wearable sync (Apple, Fitbit)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Family mode (up to 3)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full border border-amber-500 shrink-0 mx-1 bg-white animate-pulse" />
                    <span className="text-slate-500">NHS FHIR dispatch (planned)</span>
                  </li>
                </ul>
              </div>
              <div className="pt-8">
                <button
                  onClick={() => {
                    const el = document.getElementById('waitlist-form-sec');
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      window.location.hash = '#/contact';
                    }
                  }}
                  className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer text-center block rounded-xl shadow-sm"
                >
                  Join Waitlist
                </button>
              </div>
            </div>

            {/* Enterprise Tier */}
            <div className="relative p-8 bg-white border border-slate-200 rounded-3xl shadow-sm flex flex-col justify-between hover:border-blue-600/20 transition-all text-left">
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-1">Enterprise</h3>
                <div className="mb-1">
                  <span className="serif text-5xl font-bold text-blue-600">Custom</span>
                </div>
                <p className="text-xs text-slate-500 font-medium mb-3">NHS ICBs · Insurers · Employers</p>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  Population health intelligence and analytics for healthcare organisations.
                </p>
                
                <div className="border-t border-slate-100 my-6"></div>
                
                <ul className="space-y-4 text-xs text-slate-700">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>ICB population dashboard</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full border border-amber-500 shrink-0 mx-1 bg-white" />
                    <span className="text-slate-500">EMIS &amp; SystmOne integration (planned)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>Outbreak detection alerts</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full border border-amber-500 shrink-0 mx-1 bg-white" />
                    <span className="text-slate-500">Pharma research access (planned)</span>
                  </li>
                </ul>
              </div>
              <div className="pt-8">
                <button
                  onClick={() => {
                    const el = document.getElementById('waitlist-form-sec');
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      window.location.hash = '#/contact';
                    }
                  }}
                  className="w-full py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer text-center block"
                >
                  Contact Us
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* INTERACTIVE APPMOCKUP SIMULATOR WORKSPACE */}
        <div className="bg-slate-900 text-white rounded-[40px] p-8 md:p-12 mb-20 text-left relative overflow-hidden shadow-2xl">
          <div className="absolute top-[-20%] right-[-10%] w-[420px] h-[420px] bg-cyan-brand/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10 items-start">
            
            {/* Simulator Left Panel: Input Form */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-brand/20 text-cyan-brand text-[10px] font-mono font-bold uppercase tracking-wider mb-2.5">
                  <Sparkles className="w-3 h-3" />
                  SymptomSense Health Memory App (Interactive Demo)
                </span>
                <h2 className="serif text-3xl font-semibold text-white leading-tight">
                  Simulate your daily check-in.
                </h2>
                <p className="text-xs text-slate-400 mt-2">
                  Experience how gentle, friction-free tracking allows chronic patients to map continuous states easily.
                </p>
              </div>

              <form onSubmit={handleAddEntry} className="space-y-6 bg-white/5 border border-white/10 p-6 rounded-2xl">
                
                {/* Checkbox Symptoms list */}
                <div>
                  <label className="text-xs font-semibold uppercase font-mono text-slate-300 block mb-2.5">
                    1. Select any symptoms you felt today
                  </label>
                  <div className="grid grid-cols-1 gap-2">
                    {availableSymptoms.map((symp) => {
                      const isSelected = selectedSymptoms.includes(symp.id);
                      return (
                        <button
                          type="button"
                          key={symp.id}
                          onClick={() => toggleSymptom(symp.id)}
                          className={`flex items-center justify-between p-3 rounded-xl border text-left transition-all text-xs cursor-pointer ${
                            isSelected 
                              ? 'bg-blue-brand/20 border-cyan-brand text-cyan-brand-2 font-bold' 
                              : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10'
                          }`}
                        >
                          <span>{symp.label}</span>
                          {isSelected ? (
                            <span className="w-4 h-4 rounded-full bg-cyan-brand text-midnight flex items-center justify-center">
                              <Check className="w-2.5 h-2.5" strokeWidth={3} />
                            </span>
                          ) : (
                            <span className="w-4 h-4 rounded-full border border-white/20" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Energy slider */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="text-xs font-semibold uppercase font-mono text-slate-300">
                      2. Energy & Strength Level
                    </label>
                    <span className="text-xs font-bold text-cyan-brand">{energyLevel} / 5</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={energyLevel}
                    onChange={(e) => setEnergyLevel(Number(e.target.value))}
                    className="w-full h-1 bg-slate-750 rounded-lg appearance-none cursor-pointer accent-cyan-brand"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>Exhausted</span>
                    <span>Fully Energetic</span>
                  </div>
                </div>

                {/* Sleep slider */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="text-xs font-semibold uppercase font-mono text-slate-300">
                      3. Sleep Quality Last Night
                    </label>
                    <span className="text-xs font-bold text-cyan-brand">{sleepQuality} / 5</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={sleepQuality}
                    onChange={(e) => setSleepQuality(Number(e.target.value))}
                    className="w-full h-1 bg-slate-750 rounded-lg appearance-none cursor-pointer accent-cyan-brand"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                    <span>Severely disrupted</span>
                    <span>Peaceful & Restful</span>
                  </div>
                </div>

                {/* Notes */}
                <div>
                  <label className="text-xs font-semibold uppercase font-mono text-slate-300 block mb-1.5">
                    4. Brief subjective note (Optional)
                  </label>
                  <textarea
                    value={noteText}
                    onChange={(e) => setNoteText(e.target.value)}
                    placeholder="E.g., Used blue rescue inhaler around 4pm."
                    rows={2}
                    className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-xs focus:border-cyan-brand focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full h-11 inline-flex items-center justify-center gap-2 rounded-full bg-cyan-brand text-midnight font-bold text-xs uppercase tracking-wider hover:bg-cyan-brand-2 transition-all cursor-pointer shadow-md"
                >
                  Log Daily Entry
                </button>
              </form>
            </div>

            {/* Simulator Right Panel: Dynamic Logs & Timeline output */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="serif text-xl font-semibold text-slate-200">
                  Your Active Timeline
                </h3>
                <div className="flex items-center gap-2.5">
                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-xs text-slate-300 hover:text-white cursor-pointer transition-colors font-semibold"
                    title="Reset Simulator"
                  >
                    <RotateCcw className="w-3 h-3" />
                    Reset
                  </button>
                  <button
                    onClick={() => setIsSummaryOpen(true)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-blue-brand text-white text-xs font-bold hover:bg-blue-brand/95 cursor-pointer shadow-sm transition-colors"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    Generate GP Summary
                  </button>
                </div>
              </div>

              {/* Dynamic Log Timeline Card List */}
              <div className="space-y-4 max-h-[460px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-white/10">
                {history.map((entry) => (
                  <div key={entry.id} className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all text-xs">
                    <div className="flex flex-wrap justify-between items-center gap-2 mb-3">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-cyan-brand" />
                        <span className="font-mono font-bold text-slate-300">
                          {entry.date} {entry.date === new Date().toISOString().split('T')[0] ? "(Today)" : ""}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 font-mono text-[10px]">
                        <span>Energy: <b className="text-cyan-brand-2">{entry.energy}/5</b></span>
                        <span className="text-slate-600">|</span>
                        <span>Sleep: <b className="text-cyan-brand-2">{entry.sleepQuality}/5</b></span>
                      </div>
                    </div>

                    {/* Logged Symptoms Chips */}
                    {entry.symptoms.length > 0 ? (
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {entry.symptoms.map(sympId => (
                          <span key={sympId} className="px-2.5 py-0.5 rounded-full bg-blue-brand/20 border border-cyan-brand/10 text-cyan-brand-2 text-[10px]">
                            {getSymptomLabel(sympId)}
                          </span>
                        ))}
                      </div>
                    ) : (
                      <div className="text-slate-500 italic mb-2">No symptoms recorded for this day.</div>
                    )}

                    {entry.notes && (
                      <div className="bg-black/20 p-2.5 rounded-lg text-slate-300 border-l-2 border-teal-brand font-sans mt-2.5">
                        "{entry.notes}"
                      </div>
                    )}
                  </div>
                ))}

                {history.length === 0 && (
                  <div className="text-center py-12 text-slate-500 italic">
                    Your timeline is empty. Add a daily entry on the left to start!
                  </div>
                )}
              </div>

              {/* Dynamic Line graph illustrating log frequency */}
              <div className="p-4 rounded-2xl bg-[#071d2b] border border-white/10">
                <span className="text-[9px] font-mono tracking-widest text-slate-400 uppercase font-bold block mb-3">
                  Longitudinal Respiratory Load Metric (Calculated)
                </span>
                <div className="h-32 flex items-end justify-between gap-1 border-b border-white/15 pb-2">
                  {history.map((entry, idx) => {
                    // Simple logic to calculate "symptom load weight" for graphing
                    const load = (entry.symptoms.filter(id => ['sob', 'cough', 'wheezing', 'chest_tight'].includes(id)).length * 25) + ((6 - entry.energy) * 5);
                    const percent = Math.min(Math.max(load, 15), 100);
                    return (
                      <div key={entry.id} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end group relative">
                        {/* Hover load tooltip */}
                        <div className="absolute top-[-30px] bg-cyan-brand text-midnight px-2 py-0.5 rounded text-[9px] font-mono font-bold scale-0 group-hover:scale-100 transition-transform">
                          Load: {percent}%
                        </div>
                        
                        {/* Bar */}
                        <div 
                          style={{ height: `${percent}%` }}
                          className={`w-full rounded-t-sm transition-all duration-500 max-w-[28px] ${
                            percent > 60 ? 'bg-amber-400' : 'bg-cyan-brand'
                          }`}
                        />
                        <span className="font-mono text-[9px] text-slate-500 select-none">D{idx+1}</span>
                      </div>
                    );
                  })}
                </div>
                <div className="flex justify-between text-[9px] font-semibold text-slate-500 mt-2 font-mono uppercase">
                  <span>Day 1 (Historical)</span>
                  <span>Trend view (Updated)</span>
                  <span>Today</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* MODAL: HIGH-FIDELITY GP CLINICAL SUMMARY */}
      <AnimatePresence>
        {isSummaryOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white text-ink rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl border border-slate-100 text-left"
            >
              {/* Modal header */}
              <div className="bg-slate-950 text-white p-6 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-cyan-brand" />
                  <span className="font-mono text-xs uppercase tracking-wider text-cyan-brand font-bold">
                    SymptomSense GP-Ready Report
                  </span>
                </div>
                <button 
                  onClick={() => setIsSummaryOpen(false)}
                  className="p-1.5 hover:bg-white/10 rounded-lg cursor-pointer transition-colors text-slate-300 hover:text-white"
                >
                  ✕
                </button>
              </div>

              {/* Document Body */}
              <div className="p-8 space-y-6 max-h-[70vh] overflow-y-auto font-sans" id="printable-summary">
                {/* Clinical Metadata */}
                <div className="flex flex-col sm:flex-row justify-between border-b border-slate-200 pb-5 gap-4">
                  <div>
                    <h2 className="serif text-2xl font-bold text-ink">Patient Symptom Timeline</h2>
                    <span className="text-[11px] font-mono text-slate-500 block mt-1">
                      Date Generated: {new Date().toLocaleDateString('en-GB')}
                    </span>
                  </div>
                  <div className="text-xs space-y-1 text-slate-600 sm:text-right">
                    <div><b>Format:</b> Patient-Reported Logs</div>
                    <div><b>Total Days Logged:</b> {history.length}</div>
                    <div><b>Target Primary Care:</b> GP Consultation</div>
                  </div>
                </div>

                {/* Patient / Clinician Guidance Box */}
                <div className="p-4 bg-blue-50/50 border border-blue-100 rounded-xl flex gap-3 text-xs leading-relaxed text-slate-600">
                  <AlertCircle className="w-5 h-5 text-blue-brand shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-ink">Note to General Practitioner:</strong> This report lists daily structured logs compiled directly by the patient using the SymptomSense interface. It contains patient-reported subjective baseline logs. It is non-diagnostic.
                  </div>
                </div>

                {/* Summarized Metrics */}
                <div>
                  <h4 className="text-xs uppercase font-mono tracking-wider font-bold text-slate-400 mb-3">
                    Averages & Prevalence Rates
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div className="p-3 bg-slate-50 rounded-xl">
                      <span className="text-[10px] text-slate-500 block font-semibold font-mono">Mean Energy</span>
                      <strong className="text-lg font-extrabold text-ink block mt-1">
                        {(history.reduce((acc, h) => acc + h.energy, 0) / history.length).toFixed(1)} / 5
                      </strong>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl">
                      <span className="text-[10px] text-slate-500 block font-semibold font-mono">Mean Sleep</span>
                      <strong className="text-lg font-extrabold text-ink block mt-1">
                        {(history.reduce((acc, h) => acc + h.sleepQuality, 0) / history.length).toFixed(1)} / 5
                      </strong>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl">
                      <span className="text-[10px] text-slate-500 block font-semibold font-mono">Breathlessness Rate</span>
                      <strong className="text-lg font-extrabold text-ink block mt-1">
                        {((history.filter(h => h.symptoms.includes('sob')).length / history.length) * 100).toFixed(0)}%
                      </strong>
                    </div>
                    <div className="p-3 bg-slate-50 rounded-xl">
                      <span className="text-[10px] text-slate-500 block font-semibold font-mono">Inhaler / Med Rate</span>
                      <strong className="text-lg font-extrabold text-ink block mt-1">
                        {((history.filter(h => h.symptoms.includes('med_taken')).length / history.length) * 100).toFixed(0)}%
                      </strong>
                    </div>
                  </div>
                </div>

                {/* Timeline breakdown */}
                <div>
                  <h4 className="text-xs uppercase font-mono tracking-wider font-bold text-slate-400 mb-3">
                    Daily Longitudinal Reports
                  </h4>
                  <table className="w-full text-xs text-left text-slate-600 border-collapse">
                    <thead>
                      <tr className="border-b border-slate-200 font-mono text-slate-500">
                        <th className="py-2.5">Date</th>
                        <th className="py-2.5">Symptoms Reported</th>
                        <th className="py-2.5 text-center">Energy</th>
                        <th className="py-2.5 text-center">Sleep</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 font-sans">
                      {history.map((entry) => (
                        <tr key={entry.id} className="hover:bg-slate-50/50">
                          <td className="py-3 font-mono font-bold text-ink">{entry.date}</td>
                          <td className="py-3">
                            <div className="flex flex-wrap gap-1">
                              {entry.symptoms.map(sId => (
                                <span key={sId} className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 text-[10px]">
                                  {getSymptomLabel(sId)}
                                </span>
                              ))}
                              {entry.symptoms.length === 0 && <span className="text-slate-400 italic">None</span>}
                            </div>
                            {entry.notes && (
                              <div className="text-[10px] text-slate-500 mt-1 italic pl-2 border-l border-slate-300">
                                "{entry.notes}"
                              </div>
                            )}
                          </td>
                          <td className="py-3 text-center font-bold text-ink">{entry.energy}/5</td>
                          <td className="py-3 text-center font-bold text-ink">{entry.sleepQuality}/5</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Compliance Statement */}
                <div className="text-[10px] text-slate-400 pt-5 border-t border-slate-200 leading-relaxed">
                  SymptomSense is a non-diagnostic digital wellness journal. Patient logs are encrypted and stored locally in standard compliance. They are not checked automatically by real-time physicians. In case of acute shortness of breath or pain, call standard local emergency networks.
                </div>
              </div>

              {/* Modal footer / actions */}
              <div className="bg-slate-50 p-6 flex justify-between gap-4">
                <span className="text-[11px] text-slate-500 self-center">
                  Press Ctrl+P to print this document.
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={() => window.print()}
                    className="px-4 py-2 rounded-xl border border-slate-300 text-ink bg-white font-bold text-xs hover:bg-slate-50 cursor-pointer"
                  >
                    Print Document
                  </button>
                  <button
                    onClick={() => setIsSummaryOpen(false)}
                    className="px-5 py-2 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-950 cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
