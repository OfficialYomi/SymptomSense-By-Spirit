/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { BrainCircuit, BookOpen, Clock, HeartHandshake } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-mist text-ink min-h-screen py-16 px-6" id="about-page">
      <div className="max-w-[1180px] mx-auto">
        
        {/* Page Header */}
        <div className="max-w-3xl text-left mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-brand font-mono block mb-3">
            Why We Exist
          </span>
          <h1 className="serif text-5xl sm:text-6xl font-semibold text-ink leading-tight tracking-tight mb-6">
            Bridging the human memory gap in clinical medicine.
          </h1>
          <p className="text-lg md:text-xl text-slate-500 leading-relaxed">
            Human memory was optimized for survival, not clinical diagnostics. We forget mild baselines, smooth out continuous changes, and struggle to convey complex trends during brief appointments.
          </p>
        </div>

        {/* Dynamic Cards: Memory Challenges */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 text-left">
          <div className="p-8 bg-white border border-ink/10 rounded-3xl shadow-sm">
            <div className="w-10 h-10 rounded-full bg-cyan-brand/10 text-teal-brand flex items-center justify-center mb-6">
              <BrainCircuit className="w-5 h-5" />
            </div>
            <h3 className="serif text-2xl font-bold text-ink mb-3">The Forgetting Curve</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-4">
              Patient reports of symptoms are highly prone to recency bias (over-weighting the last 48 hours) and salience bias (recalling only extreme spikes of distress while forgetting mild, continuous baseline declines).
            </p>
            <div className="p-3.5 bg-slate-50 rounded-xl text-xs text-slate-500 font-mono">
              Result: Critical, slow clinical signals are filtered out as "ordinary tiredness."
            </div>
          </div>

          <div className="p-8 bg-white border border-ink/10 rounded-3xl shadow-sm">
            <div className="w-10 h-10 rounded-full bg-cyan-brand/10 text-teal-brand flex items-center justify-center mb-6">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="serif text-2xl font-bold text-ink mb-3">The 10-Minute Limit</h3>
            <p className="text-slate-500 text-sm leading-relaxed mb-4">
              Most general practice consultations last less than ten minutes. In that tiny window, trying to accurately summarize three months of complex, overlapping respiratory changes on demand is an unfair challenge.
            </p>
            <div className="p-3.5 bg-slate-50 rounded-xl text-xs text-slate-500 font-mono">
              Result: Doctors must make decisions based on highly incomplete snapshots of health.
            </div>
          </div>
        </div>

        {/* Editorial Section: The Baseline Problem */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white p-8 md:p-16 rounded-[40px] mb-20 text-left relative overflow-hidden">
          <div className="absolute right-0 bottom-0 w-80 h-80 bg-blue-brand/15 rounded-full blur-[100px]" />
          
          <div className="max-w-3xl relative z-10">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-brand font-mono block mb-3">The Clinical Baseline Dilemma</span>
            <h2 className="serif text-3xl sm:text-4xl font-semibold leading-tight text-white mb-6">
              What does "feeling normal" actually look like?
            </h2>
            <p className="text-slate-300 text-base leading-relaxed mb-6">
              In medicine, diagnosis often relies on population averages. However, early warning signs of chronic disease—such as COPD, heart failure, and renal decline—manifest differently against a person's individual baseline.
            </p>
            <p className="text-slate-300 text-base leading-relaxed mb-8">
              A mild cough might be nothing for a lifelong allergy sufferer but highly significant for someone else. By capturing daily, micro-reports of energy, medication efficacy, and oxygen feeling, SymptomSense maps your unique baseline before any illness takes hold.
            </p>
            
            <div className="border-t border-white/10 pt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <strong className="text-cyan-brand block text-lg font-bold">Standard Snapshot Care</strong>
                <span className="text-xs text-slate-400 block mt-1">Intermittent diagnostic tests when a crisis triggers. Often too late.</span>
              </div>
              <div>
                <strong className="text-cyan-brand block text-lg font-bold">Longitudinal History Care</strong>
                <span className="text-xs text-slate-400 block mt-1">Continuous mapping of personal baseline states. Capturing the start.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Clinical Advisory Principles */}
        <div className="mb-20 text-left" id="clinical-research">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-brand font-mono block mb-3">Clinical Integrity</span>
            <h2 className="serif text-3xl sm:text-4xl font-semibold text-ink tracking-tight mb-4">
              Our core advisory guidelines.
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed">
              We consult closely with medical advisors, academic researchers, and patients to ensure SymptomSense remains safe, therapeutic, and clinically grounded.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full bg-blue-brand/5 text-blue-brand flex items-center justify-center">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-ink">Active Patient Ownership</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                We believe health data should be completely controlled by the patient. You choose who accesses your timeline. We do not sell, rent, or trade your personal health logs.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full bg-blue-brand/5 text-blue-brand flex items-center justify-center">
                <BookOpen className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-ink">Strict Scientific Scaffolding</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Our templates avoid alarmism. We do not use "AI diagnostic scoring" to create patient anxiety. We focus purely on structured, empirical symptom reporting.
              </p>
            </div>

            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full bg-blue-brand/5 text-blue-brand flex items-center justify-center">
                <BrainCircuit className="w-5 h-5" />
              </div>
              <h4 className="text-lg font-bold text-ink">Rigorous Pilot Testing</h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                We evaluate SymptomSense with chronic respiratory focus groups first, optimizing for user engagement, safety, and physical compliance before expansion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
