/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MessageSquare, Send, CheckCircle2, Eye, ShieldAlert, Trash2 } from 'lucide-react';
import { ContactSubmission } from '../types';

interface ContactProps {
  onAddSubmission: (submission: Omit<ContactSubmission, 'id' | 'timestamp'>) => void;
}

export default function Contact({ onAddSubmission }: ContactProps) {
  // Form input states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState<'Patient' | 'Clinician' | 'Researcher' | 'Partner' | 'Other'>('Patient');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  // Status indicators
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorText, setErrorText] = useState('');

  // Admin Sandbox viewer state
  const [storedSubmissions, setStoredSubmissions] = useState<ContactSubmission[]>([]);

  // Load submissions for sandbox preview
  useEffect(() => {
    const raw = localStorage.getItem('symptomsense_contact_submissions');
    if (raw) {
      try {
        setStoredSubmissions(JSON.parse(raw));
      } catch (e) {
        console.error("Failed to parse submissions logs", e);
      }
    }
  }, [isSubmitted]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorText('');

    if (!name.trim()) {
      setErrorText('Please enter your name.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorText('Please enter a valid email address.');
      return;
    }
    if (!subject.trim()) {
      setErrorText('Please specify a subject.');
      return;
    }
    if (!message.trim() || message.length < 10) {
      setErrorText('Please enter a message of at least 10 characters.');
      return;
    }

    // Call submit handler
    onAddSubmission({
      name: name.trim(),
      email: email.trim(),
      role,
      subject: subject.trim(),
      message: message.trim()
    });

    setIsSubmitted(true);

    // Reset fields
    setName('');
    setEmail('');
    setRole('Patient');
    setSubject('');
    setMessage('');
  };

  const handleClearSubmissions = () => {
    if (confirm("Clear all contact submissions from the sandbox log?")) {
      localStorage.removeItem('symptomsense_contact_submissions');
      setStoredSubmissions([]);
    }
  };

  return (
    <div className="bg-mist text-ink min-h-screen py-16 px-6" id="contact-page">
      <div className="max-w-[1180px] mx-auto">
        
        {/* Page Header */}
        <div className="max-w-3xl text-left mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-brand font-mono block mb-3">
            Contact Us
          </span>
          <h1 className="serif text-5xl sm:text-6xl font-semibold text-ink leading-tight tracking-tight mb-6">
            Let's start the dialogue.
          </h1>
          <p className="text-lg md:text-xl text-slate-500 leading-relaxed">
            Whether you are a patient interested in our pilot respiratory pathways, a clinician seeking partnerships, or a digital health researcher, we value your feedback.
          </p>
        </div>

        {/* Contact Info + Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start text-left mb-20">
          
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-[32px] shadow-sm relative overflow-hidden">
              <div className="absolute right-0 bottom-0 w-48 h-48 bg-teal-brand/10 rounded-full blur-[60px]" />
              
              <h3 className="serif text-2xl font-bold mb-4 text-slate-100">Reading Head Office</h3>
              <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                SymptomSense Ltd · Reading, England · symptomsense.co.uk <br />
                Registered in England &amp; Wales (Company No. 17301093)
              </p>

              <div className="space-y-4 text-sm text-slate-200">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-cyan-brand" />
                  <span>contact@symptomsense.co.uk</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageSquare className="w-5 h-5 text-cyan-brand" />
                  <span>Clinician pilot registries open</span>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white border border-slate-200 rounded-2xl text-xs text-slate-500 leading-relaxed">
              <strong className="text-ink font-bold block mb-1">Safety Advisory Reminder:</strong> 
              SymptomSense is not an emergency clinical monitoring service. If you are experiencing sudden breathlessness, chest pain, or distress, please consult emergency services or dial 111/999 immediately.
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-3xl border border-ink/10 shadow-sm relative">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form 
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                >
                  <h3 className="serif text-2xl font-bold text-ink">Get in touch</h3>
                  
                  {errorText && (
                    <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 rounded-xl text-xs font-semibold">
                      {errorText}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-xs font-semibold uppercase font-mono text-slate-500 block mb-1.5">Your Name</label>
                      <input 
                        type="text" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Doe"
                        className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-ink outline-none focus:border-blue-brand focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold uppercase font-mono text-slate-500 block mb-1.5">Email Address</label>
                      <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@example.com"
                        className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-ink outline-none focus:border-blue-brand focus:bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-xs font-semibold uppercase font-mono text-slate-500 block mb-1.5">Who are you?</label>
                      <select 
                        value={role}
                        onChange={(e) => setRole(e.target.value as any)}
                        className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-ink outline-none focus:border-blue-brand focus:bg-white"
                      >
                        <option value="Patient">Patient / Family Member</option>
                        <option value="Clinician">Healthcare Clinician</option>
                        <option value="Researcher">Academic Researcher</option>
                        <option value="Partner">Digital Health Partner</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-semibold uppercase font-mono text-slate-500 block mb-1.5">Subject</label>
                      <input 
                        type="text" 
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="Inquiry about pilot pathways"
                        className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-ink outline-none focus:border-blue-brand focus:bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold uppercase font-mono text-slate-500 block mb-1.5">Your Message</label>
                    <textarea 
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Please write detailed inquiries here..."
                      rows={5}
                      className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-ink outline-none focus:border-blue-brand focus:bg-white resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full h-12 inline-flex items-center justify-center gap-2 rounded-full bg-blue-brand text-white font-bold text-xs uppercase tracking-wider hover:bg-blue-brand/95 transition-all shadow-md cursor-pointer"
                  >
                    Submit Inquiry
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </motion.form>
              ) : (
                <motion.div 
                  key="success-message"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-12 text-center space-y-4"
                >
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="serif text-2xl font-bold text-ink">Inquiry Submitted Successfully</h3>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                    Thank you for reaching out to SymptomSense. We will compile your details and contact you via email as soon as possible.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-blue-brand hover:text-blue-brand/80 cursor-pointer"
                  >
                    Submit another inquiry
                    <Eye className="w-4 h-4" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* DEVELOPER SANDBOX: LOCALSTORAGE SUBMISSIONS LOGGER */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 md:p-8 text-left mt-12">
          <div className="flex flex-wrap justify-between items-center gap-4 border-b border-slate-200 pb-4 mb-4">
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-5 h-5 text-slate-500" />
              <div>
                <strong className="text-sm text-ink block font-bold">Submissions Sandbox Logger</strong>
                <span className="text-[10px] text-slate-400 font-mono">Developer Validation Desk · LocalStorage Store</span>
              </div>
            </div>
            {storedSubmissions.length > 0 && (
              <button
                onClick={handleClearSubmissions}
                className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg border border-rose-200 text-rose-600 hover:bg-rose-50 text-[11px] font-bold cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                Clear Logs
              </button>
            )}
          </div>

          {storedSubmissions.length > 0 ? (
            <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2 scrollbar-thin">
              {storedSubmissions.map((sub) => (
                <div key={sub.id} className="p-4 bg-white border border-slate-200 rounded-xl text-xs">
                  <div className="flex flex-wrap justify-between items-center gap-2 mb-2 font-mono text-[10px] text-slate-400">
                    <div>
                      Role: <b className="text-slate-600 uppercase">{sub.role}</b>
                    </div>
                    <div>{sub.timestamp}</div>
                  </div>
                  <div className="space-y-1">
                    <div><b>Name:</b> {sub.name} (<span className="text-slate-500 font-mono">{sub.email}</span>)</div>
                    <div><b>Subject:</b> <span className="font-semibold text-ink">{sub.subject}</span></div>
                    <div className="p-2 bg-slate-50 border border-slate-100 rounded text-slate-600 font-sans italic mt-1.5">
                      "{sub.message}"
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-6 text-slate-400 italic text-xs">
              No submissions logged yet. Use the contact form above to test the persistence.
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
