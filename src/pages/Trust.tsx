/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ShieldCheck, HeartPulse, Scale, CheckSquare, ShieldAlert } from 'lucide-react';

export default function Trust() {
  return (
    <div className="bg-mist text-ink min-h-screen py-16 px-6" id="trust-page">
      <div className="max-w-[1180px] mx-auto">
        
        {/* Page Header */}
        <div className="max-w-3xl text-left mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-brand font-mono block mb-3">
            Governance & Responsibility
          </span>
          <h1 className="serif text-5xl sm:text-6xl font-semibold text-ink leading-tight tracking-tight mb-6">
            The hope only survives if the clinical discipline holds.
          </h1>
          <p className="text-lg md:text-xl text-slate-500 leading-relaxed">
            SymptomSense will not destroy its future by claiming capabilities too early. Integrity, clear boundaries, and secure protocols are how we operate every single day.
          </p>
        </div>

        {/* The Three Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-left">
          
          <div className="p-8 bg-white border border-ink/10 rounded-3xl shadow-sm">
            <div className="w-10 h-10 rounded-full bg-cyan-brand/10 text-teal-brand flex items-center justify-center mb-6">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-teal-brand block mb-2 font-bold">Patient Trust</span>
            <h3 className="serif text-2xl font-bold text-ink mb-3">Your story stays yours.</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              We apply strict data minimisation principles. We do not track you across other services, nor do we sell, lease, or monetize your subjective logs. Your health timeline belongs to you.
            </p>
          </div>

          <div className="p-8 bg-white border border-ink/10 rounded-3xl shadow-sm">
            <div className="w-10 h-10 rounded-full bg-cyan-brand/10 text-teal-brand flex items-center justify-center mb-6">
              <HeartPulse className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-teal-brand block mb-2 font-bold">Clinical Discipline</span>
            <h3 className="serif text-2xl font-bold text-ink mb-3">Evidence before claims.</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              We separate what the application does today (friction-free logging and export) from what we hope to earn tomorrow (clinical detection). No claims are deployed without peer-reviewed evidence.
            </p>
          </div>

          <div className="p-8 bg-white border border-ink/10 rounded-3xl shadow-sm">
            <div className="w-10 h-10 rounded-full bg-cyan-brand/10 text-teal-brand flex items-center justify-center mb-6">
              <Scale className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-teal-brand block mb-2 font-bold">Regulatory Pathway</span>
            <h3 className="serif text-2xl font-bold text-ink mb-3">Ambition with boundaries.</h3>
            <p className="text-slate-500 text-sm leading-relaxed">
              All planned NHS FHIR records dispatch workflows and clinical alert systems are built strictly in compliance with software regulatory specifications. We do not bypass clinical governance.
            </p>
          </div>

        </div>

        {/* NHS Vision & Clinical Pathway Section */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 md:p-10 text-left mb-16" id="nhs-vision-section">
          <div className="border-b border-slate-100 pb-6 mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-brand font-mono block mb-2">
              Clinical Alignment Roadmap
            </span>
            <h2 className="serif text-3xl md:text-4xl font-bold text-ink">
              The NHS Vision: Bridging the 10-Minute Consult
            </h2>
            <p className="text-sm text-slate-500 mt-2 max-w-3xl">
              We do not believe in replacing doctors with AI. Our vision is to optimize the critical 10 minutes you have with your GP by providing structured, longitudinal clinical histories.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Explanatory blocks */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-ink mb-2">Solving Patient Recall Bias</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  During a standard consultation, patients struggle with recency bias—disproportionately recalling only the symptoms of the past 48 hours. By logging micro-reports daily, SymptomSense builds a pristine historical record of the preceding 90 days, enabling your GP to identify the true trajectory of your respiratory health.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-ink mb-2">Primary Care Integration Roadmap (EMIS & SystmOne)</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Our planned interoperability pathway uses standard HL7® FHIR® APIs to allow patients to directly and securely dispatch compiled health memory reports straight into their electronic health records. This saves valuable administrative and clinical review time.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-ink mb-2">DCB0129 & DTAC Compliance Foundation</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We are building SymptomSense from the ground up to satisfy the NHS Digital Technology Assessment Criteria (DTAC) and clinical risk management standards (DCB0129/DCB0160). Safety and clinical efficacy are the prerequisites for everything we build.
                </p>
              </div>
            </div>

            {/* Structured diagram / list */}
            <div className="lg:col-span-5 bg-mist rounded-2xl p-6 border border-ink/5 space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-wider text-teal-brand font-bold block mb-2">
                Path to NHS Care Integration
              </span>
              
              <div className="relative pl-6 border-l-2 border-teal-brand/20 space-y-5 text-xs text-slate-600">
                <div className="relative">
                  <div className="absolute -left-[29px] top-0.5 w-3 h-3 rounded-full bg-teal-brand border-2 border-white" />
                  <strong className="text-ink block">1. Patient-Led Logging (Active)</strong>
                  <span className="text-[11px] text-slate-500 block mt-0.5">Subjective health history tracked and stored under strict patient custody.</span>
                </div>
                <div className="relative">
                  <div className="absolute -left-[29px] top-0.5 w-3 h-3 rounded-full bg-slate-300 border-2 border-white" />
                  <strong className="text-ink block">2. Structured GP Export (Active)</strong>
                  <span className="text-[11px] text-slate-500 block mt-0.5">One-click PDF/CSV GP-Ready summary to present in consultations.</span>
                </div>
                <div className="relative">
                  <div className="absolute -left-[29px] top-0.5 w-3 h-3 rounded-full bg-slate-300 border-2 border-white" />
                  <strong className="text-ink block">3. FHIR Interoperability (Planned)</strong>
                  <span className="text-[11px] text-slate-500 block mt-0.5">Secure dispatch pipeline targeting native integration into primary care records.</span>
                </div>
                <div className="relative">
                  <div className="absolute -left-[29px] top-0.5 w-3 h-3 rounded-full bg-slate-300 border-2 border-white" />
                  <strong className="text-ink block">4. DTAC & Clinical Approval (Required)</strong>
                  <span className="text-[11px] text-slate-500 block mt-0.5">NHS governance approval only after safety and evidence thresholds are fully certified.</span>
                </div>
              </div>

              <div className="mt-4 p-3 bg-white border border-slate-100 rounded-xl text-[10px] text-slate-500 italic">
                *SymptomSense is currently a sandbox non-diagnostic tool. No NHS affiliation, partnership, or endorsement is implied at this phase.
              </div>
            </div>
          </div>
        </div>

        {/* Development Status Detailed Explanation Box */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 text-left mb-16">
          <div className="flex gap-4 items-start mb-6 border-b border-slate-100 pb-5">
            <div className="p-3 bg-blue-brand/5 text-blue-brand rounded-xl">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <h3 className="serif text-2xl font-bold text-ink">Active Development Status</h3>
              <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider font-mono">
                Regulatory &amp; Product Boundaries Framework
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-slate-600 leading-relaxed">
            <div className="space-y-4">
              <p>
                <strong className="text-ink font-bold block mb-1">Non-Diagnostic Scope</strong>
                SymptomSense is a wellness record application in development. It does not provide medical diagnostic opinions, calculate acute disease predictions, analyze clinical risks, or substitute for trained healthcare provider decisions.
              </p>
              <p>
                <strong className="text-ink font-bold block mb-1">Secure FHIR Roadmap</strong>
                Our clinical pipeline targets standard HL7/FHIR compatibility. This allows seamless integration into primary care records once appropriate safety testing and regulatory evaluations are certified.
              </p>
            </div>

            <div className="space-y-4">
              <p>
                <strong className="text-ink font-bold block mb-1">Software as a Medical Device (SaMD)</strong>
                Any future development incorporating automated predictive logic or analytical alerts of exacerbations is categorized as SaMD. We are actively building clinical partnerships to support future regulatory filings.
              </p>
              <p>
                <strong className="text-ink font-bold block mb-1">No Commercial Sponsorship</strong>
                SymptomSense does not claim official NHS partnerships, endorsements, or clinical affiliations at this current sandbox development stage. We believe credentials must be earned through evidence.
              </p>
            </div>
          </div>
        </div>

        {/* Compliance Checklist */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-8 md:p-12 text-left relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:32px_32px]" />
          
          <div className="max-w-3xl relative z-10">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-brand font-mono block mb-3">Internal Security Blueprint</span>
            <h2 className="serif text-3xl font-semibold mb-6">
              Our pledge of responsibility.
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <CheckSquare className="w-5 h-5 text-cyan-brand shrink-0 mt-0.5" />
                <span><strong className="text-white">Strict client encryption:</strong> All daily reports are encrypted and held under strict patient custody frameworks.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckSquare className="w-5 h-5 text-cyan-brand shrink-0 mt-0.5" />
                <span><strong className="text-white">Explicit data minimisation:</strong> We log only what is strictly relevant to respiratory and baseline states.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckSquare className="w-5 h-5 text-cyan-brand shrink-0 mt-0.5" />
                <span><strong className="text-white">Full data exporting:</strong> You can download your clinical summaries at any point in open CSV or PDF formats.</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckSquare className="w-5 h-5 text-cyan-brand shrink-0 mt-0.5" />
                <span><strong className="text-white">Clinician-first alignments:</strong> Synthesizing trends to save clinicians time instead of spamming their systems.</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
