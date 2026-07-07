/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, AlertCircle, Heart, CheckCircle, 
  Calendar, ShieldCheck, FileText, ChevronRight, Sparkles 
} from 'lucide-react';
import { Page } from '../types';

interface HomeProps {
  onNavigate: (page: Page) => void;
  onAddWaitlist: (email: string) => boolean; // returns true if successful
}

export default function Home({ onNavigate, onAddWaitlist }: HomeProps) {
  const [emailInput, setEmailInput] = useState('');
  const [waitlistStatus, setWaitlistStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [waitlistMessage, setWaitlistMessage] = useState('');

  const handleWaitlistSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!emailInput || !emailInput.includes('@')) {
      setWaitlistStatus('error');
      setWaitlistMessage('Please enter a valid email address.');
      return;
    }

    const success = onAddWaitlist(emailInput);
    if (success) {
      setWaitlistStatus('success');
      setWaitlistMessage("Thank you — you're on the list. We'll be in touch when we open access.");
      setEmailInput('');
    } else {
      setWaitlistStatus('error');
      setWaitlistMessage("This email is already registered on our waitlist.");
    }
  };

  return (
    <div className="bg-mist overflow-hidden" id="home-page">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-midnight via-[#082436] to-[#0b3042] text-white pt-24 pb-20 px-6 overflow-hidden border-b border-ink/20">
        {/* Background Grid Accent */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.05)_1px,transparent_1px)] bg-[size:48px_48px]" />
        
        {/* Ambient Glows */}
        <div className="absolute right-[10%] top-[10%] w-96 h-96 bg-cyan-brand/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute left-[5%] bottom-[5%] w-96 h-96 bg-blue-brand/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-brand/10 text-cyan-brand border border-cyan-brand/20 text-xs font-semibold uppercase tracking-widest mb-6 font-mono">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-brand animate-ping" />
              The Bigger Picture · Early Detection
            </div>
            
            <h1 className="serif text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[0.95] mb-6">
              Too many lives change with the words: <em className="text-cyan-brand-2 not-italic">“We found it too late.”</em>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl mb-8">
              <strong className="text-white font-semibold">SymptomSense exists to help change that story.</strong> We are starting by building a Health Memory — a clearer record of what happens between appointments — because you cannot recognise change without remembering what came before.
            </p>

            <div className="flex flex-wrap gap-4 w-full sm:w-auto">
              <button
                onClick={() => {
                  const el = document.getElementById('waitlist-form-sec');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-cyan-brand text-midnight font-bold text-sm shadow-lg shadow-cyan-brand/10 hover:bg-cyan-brand-2 hover:-translate-y-0.5 hover:shadow-cyan-brand/20 transition-all cursor-pointer"
              >
                Join the Waitlist
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('services')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-white/10 text-white font-semibold text-sm border border-white/20 hover:bg-white/15 transition-all cursor-pointer"
              >
                Try Interactive Demo
              </button>
            </div>

            <div className="mt-8 text-xs text-slate-400">
              <b className="text-slate-200">Today:</b> non-diagnostic health memory. &nbsp;|&nbsp; <b className="text-slate-200">Future:</b> clinically validated earlier-detection intelligence, earned with evidence.
            </div>

            {/* Direction steps */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full mt-10 border-t border-white/10 pt-8 text-left">
              <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10">
                <div className="font-mono text-[10px] text-cyan-brand tracking-widest uppercase font-bold mb-1.5">Today</div>
                <div className="text-sm font-bold text-white">Health Memory</div>
                <div className="text-xs text-slate-400 mt-1">Remember what happens between appointments.</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10">
                <div className="font-mono text-[10px] text-cyan-brand tracking-widest uppercase font-bold mb-1.5">Next</div>
                <div className="text-sm font-bold text-white">Meaningful Change</div>
                <div className="text-xs text-slate-400 mt-1">Work toward understanding what is different for you.</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10">
                <div className="font-mono text-[10px] text-cyan-brand tracking-widest uppercase font-bold mb-1.5">The Future</div>
                <div className="text-sm font-bold text-white">Earlier Detection</div>
                <div className="text-xs text-slate-400 mt-1">The clinical ambition we are working to earn.</div>
              </div>
            </div>
          </div>

          {/* Visual Showcase (App Preview Mockup) */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Interactive Float cards */}
            <div className="absolute left-[-20px] top-[15%] hidden xl:block p-4 bg-white text-ink rounded-2xl shadow-xl max-w-[210px] border border-slate-100 z-10 text-left">
              <span className="text-[10px] font-mono tracking-wider text-teal-brand font-bold uppercase block">Health Memory</span>
              <strong className="text-sm font-bold block mt-1">Day 47 recorded</strong>
              <span className="text-[11px] text-slate-500 block mt-0.5">Small moments become a continuous story.</span>
            </div>

            <div className="absolute right-[-20px] bottom-[20%] hidden xl:block p-4 bg-white text-ink rounded-2xl shadow-xl max-w-[210px] border border-slate-100 z-10 text-left">
              <span className="text-[10px] font-mono tracking-wider text-blue-brand font-bold uppercase block">Future Direction</span>
              <strong className="text-sm font-bold block mt-1">Symptom Patterns</strong>
              <span className="text-[11px] text-slate-500 block mt-0.5">Evidence first. Non-diagnostic.</span>
            </div>

            {/* iPhone Mockup */}
            <div className="w-full max-w-[370px] bg-white/10 border border-white/20 p-3 rounded-[38px] shadow-2xl shadow-black/40">
              <div className="bg-slate-950 rounded-[30px] p-6 text-left relative overflow-hidden min-h-[520px] flex flex-col justify-between">
                {/* Internal top */}
                <div>
                  <div className="flex justify-between items-center text-[11px] text-slate-400 font-medium">
                    <span>9:41</span>
                    <span className="px-2 py-0.5 rounded-full bg-white/10 text-slate-300 font-mono text-[9px]">HEALTH MEMORY</span>
                  </div>
                  
                  <div className="mt-6 text-[10px] font-mono text-cyan-brand tracking-widest uppercase font-semibold">Today's Check-in</div>
                  <h3 className="serif text-2xl text-white mt-1.5 leading-tight">How has your breathing felt today?</h3>
                  <p className="text-xs text-slate-400 mt-1">30 seconds. No heavy typing.</p>

                  <div className="mt-5 p-4 rounded-2xl bg-white/5 border border-white/10">
                    <span className="text-[10px] text-slate-400">Selected symptoms</span>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      <span className="text-[10px] px-2.5 py-1 rounded-full bg-blue-brand/20 border border-cyan-brand/30 text-cyan-brand-2">Shortness of breath</span>
                      <span className="text-[10px] px-2.5 py-1 rounded-full bg-white/5 text-slate-400 border border-white/5">Cough</span>
                      <span className="text-[10px] px-2.5 py-1 rounded-full bg-blue-brand/20 border border-cyan-brand/30 text-cyan-brand-2">Low energy</span>
                      <span className="text-[10px] px-2.5 py-1 rounded-full bg-white/5 text-slate-400 border border-white/5">Poor sleep</span>
                    </div>
                  </div>

                  {/* SVG Timeline graph */}
                  <div className="mt-5 h-24 relative overflow-hidden bg-white/[0.02] rounded-xl p-2 border border-white/5">
                    <svg className="w-full h-full" viewBox="0 0 320 80">
                      <defs>
                        <linearGradient id="glow" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#72d9e2" />
                          <stop offset="100%" stopColor="#3b7cff" />
                        </linearGradient>
                      </defs>
                      <path 
                        d="M10 65 Q 40 45, 80 50 T 160 30 T 240 40 T 310 15" 
                        fill="none" 
                        stroke="url(#glow)" 
                        strokeWidth="3.5" 
                        strokeLinecap="round" 
                      />
                      <circle cx="10" cy="65" r="4" fill="#72d9e2" />
                      <circle cx="160" cy="30" r="4" fill="#72d9e2" />
                      <circle cx="310" cy="15" r="4.5" fill="#3b7cff" />
                      <circle cx="310" cy="15" r="9" fill="#3b7cff" fillOpacity="0.15" className="pulse-dot origin-center" />
                      <text x="10" y="75" fill="#64808c" fontSize="8" fontFamily="monospace">Day 1</text>
                      <text x="270" y="75" fill="#64808c" fontSize="8" fontFamily="monospace">Day 90 (Today)</text>
                    </svg>
                  </div>
                </div>

                {/* Bottom GP note */}
                <div className="mt-4 p-4 bg-white text-ink rounded-xl shadow-lg">
                  <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-blue-brand block">Pattern Note</span>
                  <p className="text-xs text-slate-600 leading-normal mt-1">
                    Breathlessness and low energy appeared together on 8 of the last 11 logged days. Sharing this clear story with your doctor makes conversations simpler.
                  </p>
                  <button 
                    onClick={() => onNavigate('services')}
                    className="mt-3 text-xs font-bold text-blue-brand hover:text-blue-brand/80 inline-flex items-center gap-1 cursor-pointer"
                  >
                    Launch Interactive Demo
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BELIEF / WHY WE EXIST */}
      <section className="py-24 px-6 bg-white border-b border-ink/10" id="why-exist">
        <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32 text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-brand font-mono block mb-3">Why We Exist</span>
            <h2 className="serif text-4xl sm:text-5xl font-semibold text-ink leading-tight tracking-tight mb-4">
              The signs often begin quietly.
            </h2>
            <p className="text-slate-500 leading-relaxed text-base">
              A small change can feel completely forgettable in the moment. Weeks later, when facing a healthcare professional, the critical question becomes: when did this really start?
            </p>
            <button
              onClick={() => onNavigate('about')}
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-blue-brand hover:text-blue-brand/80 cursor-pointer"
            >
              Learn about our clinical mission
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-4">
              <article className="grid grid-cols-1 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-mist border border-ink/10 items-start">
                <span className="font-mono text-xs text-teal-brand tracking-widest font-semibold uppercase pt-1">Monday</span>
                <div className="sm:col-span-3">
                  <h3 className="text-lg font-bold text-ink">“I'm more tired than usual.”</h3>
                  <p className="text-sm text-slate-500 mt-1">It does not feel serious enough to log. You assume you just slept poorly.</p>
                </div>
              </article>

              <article className="grid grid-cols-1 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-mist border border-ink/10 items-start">
                <span className="font-mono text-xs text-teal-brand tracking-widest font-semibold uppercase pt-1">Wednesday</span>
                <div className="sm:col-span-3">
                  <h3 className="text-lg font-bold text-ink">“The cough is still there.”</h3>
                  <p className="text-sm text-slate-500 mt-1">Another ordinary day. Another small detail of baseline shift is forgotten.</p>
                </div>
              </article>

              <article className="grid grid-cols-1 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-mist border border-ink/10 items-start">
                <span className="font-mono text-xs text-teal-brand tracking-widest font-semibold uppercase pt-1">Friday</span>
                <div className="sm:col-span-3">
                  <h3 className="text-lg font-bold text-ink">“The stairs felt harder today.”</h3>
                  <p className="text-sm text-slate-500 mt-1">The body changed slightly, but the active record remained blank.</p>
                </div>
              </article>
            </div>

            <div className="p-8 bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl shadow-xl mt-8">
              <h4 className="serif text-3xl leading-tight mb-4 text-slate-100">
                Two weeks later at the clinic: <br />
                <span className="text-cyan-brand-2">“When did all this begin?”</span>
              </h4>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Human memory was never optimized to reconstruct a highly continuous health history on demand. Recalling exact symptoms over weeks is nearly impossible when we are distracted by daily life.
              </p>
              <div className="inline-flex items-center gap-3 border-l-2 border-cyan-brand pl-4 py-2 bg-white/5 rounded-r-lg">
                <span className="text-sm font-semibold text-white">For the first time, you don't have to guess.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE LOAD BEARING BRIDGE */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#eef6f6] to-[#f8fbfb] border-b border-ink/10 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-brand font-mono block mb-4">The bridge between today and tomorrow</span>
          <h2 className="serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-ink tracking-tight leading-[1.05]">
            You cannot recognise <span className="text-blue-brand">change</span> without remembering what came before.
          </h2>
          <p className="text-slate-500 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mt-6">
            That is why SymptomSense starts with Health Memory. The bigger future of early detection depends entirely on establishing a reliable, structured personal foundation first.
          </p>
        </div>
      </section>

      {/* TODAY SECTION / WHAT WE BUILD NOW */}
      <section className="py-24 px-6 bg-white border-b border-ink/10" id="today">
        <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="p-8 md:p-10 bg-gradient-to-tr from-[#eef7f7] to-white border border-ink/10 rounded-[34px] shadow-sm text-left">
            <span className="text-[10px] font-mono tracking-widest text-teal-brand font-bold uppercase block mb-2">Your Health Memory App</span>
            <h3 className="serif text-3xl md:text-4xl font-semibold text-ink leading-tight mb-4">
              A continuous story of how you have actually been.
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              Not an automated diagnosis. Not an AI health prediction. SymptomSense acts as a highly structured, patient-owned journal designed specifically for easy doctor reviews.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-xl border border-ink/5">
                <strong className="text-sm text-ink block font-bold">Symptoms Tracker</strong>
                <span className="text-xs text-slate-500 block mt-0.5">What changed and precisely when it occurred.</span>
              </div>
              <div className="p-4 bg-white rounded-xl border border-ink/5">
                <strong className="text-sm text-ink block font-bold">Medication Logs</strong>
                <span className="text-xs text-slate-500 block mt-0.5">Note when treatments are taken.</span>
              </div>
              <div className="p-4 bg-white rounded-xl border border-ink/5">
                <strong className="text-sm text-ink block font-bold">Energy & Sleep</strong>
                <span className="text-xs text-slate-500 block mt-0.5">Understand daily rhythms of wellbeing.</span>
              </div>
              <div className="p-4 bg-white rounded-xl border border-ink/5">
                <strong className="text-sm text-ink block font-bold">GP-Ready Summaries</strong>
                <span className="text-xs text-slate-500 block mt-0.5">Export structured medical histories.</span>
              </div>
            </div>

            <button
              onClick={() => onNavigate('services')}
              className="mt-8 w-full inline-flex items-center justify-center gap-2 h-11 rounded-full bg-ink text-white font-bold text-xs uppercase tracking-wider hover:bg-ink-2 transition-all cursor-pointer"
            >
              Try the Interactive Simulator
              <Sparkles className="w-3.5 h-3.5 text-cyan-brand" />
            </button>
          </div>

          <div className="text-left flex flex-col items-start lg:pl-6">
            <span className="inline-block px-3 py-1 rounded-full bg-[#e9f8f3] text-[#14755f] text-xs font-semibold uppercase tracking-wider font-mono mb-4">
              What SymptomSense does today
            </span>
            <h2 className="serif text-4xl sm:text-5xl font-semibold text-ink leading-none tracking-tight mb-6">
              Health Memory is what we build now.
            </h2>
            <p className="text-slate-500 leading-relaxed text-base mb-8">
              Today's product is deliberately focused and medically disciplined. Instead of overclaiming capabilities, SymptomSense helps people record subjective symptoms between clinical visits and compile them into standardized formats.
            </p>

            <ul className="space-y-4 text-slate-600 text-sm">
              <li className="flex gap-3 items-start">
                <CheckCircle className="w-5 h-5 text-teal-brand shrink-0 mt-0.5" />
                <span><strong className="text-ink font-bold">30-second check-ins:</strong> Crafted for ease-of-use and habit formation without screen fatigue.</span>
              </li>
              <li className="flex gap-3 items-start">
                <CheckCircle className="w-5 h-5 text-teal-brand shrink-0 mt-0.5" />
                <span><strong className="text-ink font-bold">Longitudinal Timeline:</strong> A patient-controlled record showing how states change over several months.</span>
              </li>
              <li className="flex gap-3 items-start">
                <CheckCircle className="w-5 h-5 text-teal-brand shrink-0 mt-0.5" />
                <span><strong className="text-ink font-bold">Standardized Summaries:</strong> Formatted to align with what General Practitioners and specialists actually need to see.</span>
              </li>
              <li className="flex gap-3 items-start">
                <CheckCircle className="w-5 h-5 text-teal-brand shrink-0 mt-0.5" />
                <span><strong className="text-ink font-bold">Absolute Safety Boundaries:</strong> Zero diagnosis, disease prediction, or automated risk scoring today.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 px-6 bg-slate-50 border-b border-ink/10" id="how-it-works">
        <div className="max-w-[1180px] mx-auto">
          <div className="max-w-2xl text-left mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-brand font-mono block mb-3">Simple by Design</span>
            <h2 className="serif text-4xl sm:text-5xl font-semibold text-ink leading-tight tracking-tight mb-4">
              Three steps to a clearer health story.
            </h2>
            <p className="text-slate-500 text-base leading-relaxed">
              We design software for real lives, not sterile labs. That means zero technical burden, zero clutter, and zero diagnostic anxiety. Just honest clinical visibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div className="p-8 bg-white rounded-3xl border border-ink/5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
              <span className="font-mono text-sm text-teal-brand font-bold block mb-4">01 /</span>
              <h3 className="serif text-xl font-bold text-ink mb-2">30-Second Daily Check-in</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Log gentle questions about your respiratory state, sleep quality, and energy levels. Built to take less time than brewing your morning tea.
              </p>
            </div>
            
            <div className="p-8 bg-white rounded-3xl border border-ink/5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
              <span className="font-mono text-sm text-teal-brand font-bold block mb-4">02 /</span>
              <h3 className="serif text-xl font-bold text-ink mb-2">Timeline Builds Automatically</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Every brief check-in feeds a living longitudinal history. Over weeks and months, subtle health rhythms that were previously invisible emerge clearly.
              </p>
            </div>

            <div className="p-8 bg-white rounded-3xl border border-ink/5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
              <span className="font-mono text-sm text-teal-brand font-bold block mb-4">03 /</span>
              <h3 className="serif text-xl font-bold text-ink mb-2">One-Tap GP Summary</h3>
              <p className="text-slate-500 text-sm leading-relaxed">
                Compile records into a beautiful, concise history you can email, print, or review directly with your doctor. Better healthcare conversations start with structured evidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE BIGGER PICTURE (DISEASES) */}
      <section className="py-24 px-6 bg-midnight text-white relative overflow-hidden border-b border-ink/30" id="bigger-picture">
        <div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-blue-brand/10 rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-[1180px] mx-auto relative z-10">
          <div className="max-w-3xl text-left mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-brand font-mono block mb-3">The Bigger Picture</span>
            <h2 className="serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-none tracking-tight mb-4">
              We are building for people who wish something was noticed sooner.
            </h2>
            <p className="text-slate-300 text-base md:text-lg leading-relaxed mt-4">
              Cancer. Kidney disease. Heart failure. Respiratory illness. So many family stories carry the same painful question: were the signs there earlier? SymptomSense exists to work toward a future where baseline changes are caught in time.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            <article className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between min-h-[280px]">
              <div>
                <span className="text-3xl" role="img" aria-label="Ribbon">🎗️</span>
                <h3 className="serif text-xl font-semibold text-white mt-4 mb-2">Oncology (Cancer)</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  A future where patients don't look back wondering if subtle warning signs were completely lost in the months leading to their formal diagnosis.
                </p>
              </div>
              <div className="text-[10px] font-mono tracking-wider text-cyan-brand font-semibold uppercase pt-4 border-t border-white/10 mt-4">
                Long-Term Ambition
              </div>
            </article>

            <article className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between min-h-[280px]">
              <div>
                <span className="text-3xl" role="img" aria-label="Kidney">🫘</span>
                <h3 className="serif text-xl font-semibold text-white mt-4 mb-2">Kidney Disease</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  A future where slow, silent, and easily forgotten changes have a better chance of becoming a visible, actionable medical story.
                </p>
              </div>
              <div className="text-[10px] font-mono tracking-wider text-cyan-brand font-semibold uppercase pt-4 border-t border-white/10 mt-4">
                Requires Validation
              </div>
            </article>

            <article className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between min-h-[280px]">
              <div>
                <span className="text-3xl" role="img" aria-label="Heart">❤️</span>
                <h3 className="serif text-xl font-semibold text-white mt-4 mb-2">Heart Failure</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  A future where minor cardiovascular deviations against a patient's own healthy baseline can be flagged and investigated earlier.
                </p>
              </div>
              <div className="text-[10px] font-mono tracking-wider text-cyan-brand font-semibold uppercase pt-4 border-t border-white/10 mt-4">
                Clinical Evidence First
              </div>
            </article>

            <article className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between min-h-[280px]">
              <div>
                <span className="text-3xl" role="img" aria-label="Lungs">🫁</span>
                <h3 className="serif text-xl font-semibold text-white mt-4 mb-2">Respiratory Health</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Our starting focus: co-designing and evaluating clinical Health Memory protocols for COPD and chronic asthma patients.
                </p>
              </div>
              <div className="text-[10px] font-mono tracking-wider text-cyan-brand-2 font-bold uppercase pt-4 border-t border-white/10 mt-4">
                Initial Focus · In Dev
              </div>
            </article>
          </div>

          <div className="mt-8 p-5 rounded-2xl bg-white/5 border border-white/10 text-xs text-slate-300 max-w-4xl mx-auto leading-relaxed">
            <strong className="text-white block mb-1">Hope without overclaiming:</strong> 
            These therapeutic areas represent the long-term clinical stories SymptomSense is founded to change. They do not represent current diagnostic features. Future clinical features will be deployed only after rigorous evidence, peer review, and regulatory governance.
          </div>
        </div>
      </section>

      {/* ROADMAP SECTION */}
      <section className="py-24 px-6 bg-[#f2f7f7] border-b border-ink/10 text-left">
        <div className="max-w-[1180px] mx-auto">
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-brand font-mono block mb-3">How the Vision Becomes Real</span>
            <h2 className="serif text-4xl sm:text-5xl font-semibold text-ink leading-tight tracking-tight mb-4">
              Every single layer must be earned.
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              We decline to rush to market with premature automated medical AI assertions. Instead, our roadmap relies on clean, stepwise development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting line */}
            <div className="absolute top-[28px] left-[10%] right-[10%] h-[1.5px] bg-slate-300 hidden md:block z-0" />

            <div className="relative z-10">
              <div className="w-5 h-5 rounded-full bg-teal-brand border-4 border-white shadow-md mb-6 relative z-10" />
              <span className="text-[9px] font-mono font-bold tracking-wider text-teal-brand uppercase block mb-1">01 · Today</span>
              <h3 className="serif text-xl font-bold text-ink mb-2">Health Memory</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Capture subjective histories between visits. No diagnostics. No predictions. Simply secure records.
              </p>
              <div className="mt-3 p-3 bg-white/60 border border-slate-200 rounded-xl text-[10px] text-slate-600 font-mono">
                No active medical claims.
              </div>
            </div>

            <div className="relative z-10">
              <div className="w-5 h-5 rounded-full bg-blue-brand border-4 border-white shadow-md mb-6 relative z-10" />
              <span className="text-[9px] font-mono font-bold tracking-wider text-blue-brand uppercase block mb-1">02 · Clinical trials</span>
              <h3 className="serif text-xl font-bold text-ink mb-2">Personal Baseline</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Establish personalized, dynamic healthy models over time to respect individual baseline variances.
              </p>
              <div className="mt-3 p-3 bg-white/60 border border-slate-200 rounded-xl text-[10px] text-slate-600 font-mono">
                Subject to clinical trials.
              </div>
            </div>

            <div className="relative z-10">
              <div className="w-5 h-5 rounded-full bg-blue-brand border-4 border-white shadow-md mb-6 relative z-10" />
              <span className="text-[9px] font-mono font-bold tracking-wider text-blue-brand uppercase block mb-1">03 · After validation</span>
              <h3 className="serif text-xl font-bold text-ink mb-2">Meaningful Change</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Co-develop secure alert algorithms to highlight deviations from histories responsibly.
              </p>
              <div className="mt-3 p-3 bg-white/60 border border-slate-200 rounded-xl text-[10px] text-slate-600 font-mono">
                In partnership with NHS.
              </div>
            </div>

            <div className="relative z-10">
              <div className="w-5 h-5 rounded-full bg-gold-brand border-4 border-white shadow-md mb-6 relative z-10" />
              <span className="text-[9px] font-mono font-bold tracking-wider text-gold-brand uppercase block mb-1">04 · Long-term future</span>
              <h3 className="serif text-xl font-bold text-ink mb-2">Earlier Detection</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Deploy clinically validated disease intelligence with appropriate Software as a Medical Device (SaMD) clearances.
              </p>
              <div className="mt-3 p-3 bg-warm-brand border border-gold-brand/30 rounded-xl text-[10px] text-amber-900 font-mono">
                Full regulatory approval.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOCUS CARD BENTO */}
      <section className="py-24 px-6 bg-white border-b border-ink/10">
        <div className="max-w-[1180px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="p-8 md:p-10 rounded-[30px] border border-ink/10 bg-gradient-to-br from-[#f0f8f8] to-white">
            <span className="inline-block px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[9px] font-mono font-bold uppercase mb-4">
              Where we begin
            </span>
            <h3 className="serif text-3xl font-semibold text-ink mb-3 leading-tight">
              COPD & chronic respiratory focus first.
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              We are starting our pilot with narrow, safe boundaries: daily subjective logs, symptom checklists, and standard GP dispatch. We believe in earning our clinical credentials step-by-step.
            </p>
          </div>

          <div className="p-8 md:p-10 rounded-[30px] bg-gradient-to-br from-[#071a28] to-[#0b3345] text-white">
            <span className="inline-block px-2.5 py-1 rounded-full bg-cyan-brand/20 text-cyan-brand text-[9px] font-mono font-bold uppercase mb-4">
              Our Long-term vow
            </span>
            <h3 className="serif text-3xl font-semibold text-slate-100 mb-3 leading-tight">
              The product starts small. The vision never will.
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              While our current product limits itself safely to subjective logging, our mission is massive: to establish the missing digital infrastructure required to enable patient-led clinical detection.
            </p>
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="py-24 px-6 bg-slate-50 border-b border-ink/10 text-left" id="trust">
        <div className="max-w-[1180px] mx-auto">
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-brand font-mono block mb-3">Governance & Responsibility</span>
            <h2 className="serif text-4xl sm:text-5xl font-semibold text-ink leading-tight tracking-tight mb-4">
              Trust is our core architecture.
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              We never take shortcuts. Integrity is built directly into how we manage client data, partner with researchers, and formulate clinical hypotheses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 bg-white border border-ink/5 rounded-3xl shadow-sm">
              <span className="inline-block px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 text-[9px] font-mono font-bold uppercase mb-4">Patient Control</span>
              <h3 className="serif text-xl font-bold text-ink mb-2">Your data stays yours.</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Complete consent, strong client encryption, strict minimization of tracking, and absolute data porting freedoms. We treat your medical logs with highest sanctity.
              </p>
            </div>

            <div className="p-6 bg-white border border-ink/5 rounded-3xl shadow-sm">
              <span className="inline-block px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 text-[9px] font-mono font-bold uppercase mb-4">Clinical Integrity</span>
              <h3 className="serif text-xl font-bold text-ink mb-2">Evidence before claims.</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                We draw a strict line between what our application can do today (logging and summarization) and our long-term aspirations (proactive detection).
              </p>
            </div>

            <div className="p-6 bg-white border border-ink/5 rounded-3xl shadow-sm">
              <span className="inline-block px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 text-[9px] font-mono font-bold uppercase mb-4">NHS Integration</span>
              <h3 className="serif text-xl font-bold text-ink mb-2">Ambition with boundaries.</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                NHS FHIR integration and clinical summary workflows are co-developed in alignment with strict local healthcare guidelines, evidence thresholds, and regulatory oversight.
              </p>
            </div>
          </div>

          <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm flex gap-4 items-start">
            <AlertCircle className="w-5.5 h-5.5 text-blue-brand shrink-0 mt-0.5" />
            <div>
              <strong className="text-sm text-ink block font-bold mb-1">Current Development Status</strong>
              <p className="text-xs text-slate-500 leading-relaxed">
                SymptomSense is a non-diagnostic health memory tool in development. It is not intended to diagnose, treat, cure, prevent, or detect disease, and it does not provide clinical risk scores or automated disease predictions. No clinical endorsement or partnerships are implied at this stage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA JOIN WAITLIST */}
      <section className="py-24 px-6 bg-white" id="waitlist-form-sec">
        <div className="max-w-[1180px] mx-auto">
          <div className="p-10 md:p-16 bg-gradient-to-br from-midnight to-[#0b3548] rounded-[44px] text-center text-white relative overflow-hidden shadow-xl">
            {/* background glow */}
            <div className="absolute top-[-50%] left-1/2 -translate-x-1/2 w-[560px] h-[560px] bg-cyan-brand/15 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight mb-4">
                Help us change the story of <span className="text-cyan-brand-2">“too late.”</span>
              </h2>
              <p className="text-sm md:text-base text-slate-300 mb-8 max-w-xl mx-auto">
                Join our patient and clinician waitlist. Health Memory is where we begin today. Earlier detection is the future we are working to earn.
              </p>

              <form onSubmit={handleWaitlistSubmit} className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="Enter your email address"
                  className="h-12 px-5 rounded-full bg-white/10 border border-white/20 text-white placeholder-slate-400 outline-none focus:border-cyan-brand/80 focus:ring-4 focus:ring-cyan-brand/10 text-sm flex-1"
                />
                <button
                  type="submit"
                  className="h-12 px-6 rounded-full bg-white text-midnight font-bold text-sm hover:bg-slate-100 transition-all shadow-md shrink-0 cursor-pointer"
                >
                  Join the waitlist →
                </button>
              </form>

              <div 
                className={`mt-4 text-xs font-medium transition-all ${
                  waitlistStatus === 'success' ? 'text-cyan-brand font-bold' : waitlistStatus === 'error' ? 'text-rose-400' : 'text-slate-400'
                }`}
              >
                {waitlistStatus !== 'idle' ? waitlistMessage : 'Free to join · Clinician pilot registrations open · Unsubscribe anytime'}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
