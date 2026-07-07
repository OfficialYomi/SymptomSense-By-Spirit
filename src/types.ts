/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Page = 'home' | 'about' | 'services' | 'trust' | 'contact';

export interface Symptom {
  id: string;
  label: string;
  category: 'respiratory' | 'systemic' | 'lifestyle';
}

export interface CheckInEntry {
  id: string;
  date: string;
  symptoms: string[]; // array of symptom ids
  energy: number; // 1 to 5
  sleepQuality: number; // 1 to 5
  notes?: string;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  role: 'Patient' | 'Clinician' | 'Researcher' | 'Partner' | 'Other';
  subject: string;
  message: string;
  timestamp: string;
}

export interface WaitlistSubmission {
  id: string;
  email: string;
  timestamp: string;
}
