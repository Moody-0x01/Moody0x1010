import React, { useState } from 'react';
import './css/Contact.css';
import cv from "./assets/cv.pdf";
// 1. Import your image here (replace with your actual file name/path)
import contactImg from "./assets/1782924060744.jpeg"; 

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage('');

    try {
      // Placeholder for your future Google Webhook endpoint / Apps Script URL
      // await fetch('YOUR_GOOGLE_WEBHOOK_URL', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });

      console.log('Form data ready for webhook:', formData);
      setStatusMessage('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Submission error:', error);
      setStatusMessage('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#0a0a0a] text-neutral-100 px-6 border-t border-neutral-900 font-sans">
      <div className="max-w-6xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">Get in Touch</h2>
              <p className="text-xs sm:text-sm text-neutral-400">
                want to connect? Drop a message.
              </p>
            </div>

            <div className="space-y-4">
              
              {/* Email */}
              <a 
                href="mailto:lahoucineazmoud@gmail.com"
                className="group flex items-center gap-4 p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/80 hover:bg-neutral-900/80 hover:border-neutral-700 transition-all"
              >
                <div className="p-2.5 rounded-lg bg-neutral-900 text-neutral-400 group-hover:text-white border border-neutral-800 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-wider text-neutral-500">Email</p>
                  <p className="text-xs sm:text-sm font-semibold text-neutral-200 group-hover:text-white transition-colors">
                    lahoucineazmoud@gmail.com
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a 
                href="tel:+212637703384"
                className="group flex items-center gap-4 p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/80 hover:bg-neutral-900/80 hover:border-neutral-700 transition-all"
              >
                <div className="p-2.5 rounded-lg bg-neutral-900 text-neutral-400 group-hover:text-white border border-neutral-800 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-wider text-neutral-500">Phone</p>
                  <p className="text-xs sm:text-sm font-semibold text-neutral-200 group-hover:text-white transition-colors">
                    +212 637-703-384
                  </p>
                </div>
              </a>

              {/* Download Resume Button */}
              <a 
                href={cv} 
                download="Lahoucine_Azmoud_CV.pdf"
                className="group flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-emerald-950/40 via-emerald-900/20 to-neutral-900/40 border border-emerald-500/30 hover:border-emerald-400 hover:shadow-lg hover:shadow-emerald-500/10 active:scale-[0.99] transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-black group-hover:border-emerald-400 transition-all duration-300">
                    <svg className="w-4 h-4 transform group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-wider text-emerald-400/80">Resume / CV</p>
                    <p className="text-xs sm:text-sm font-semibold text-emerald-200 group-hover:text-emerald-100 transition-colors">
                      Download Resume
                    </p>
                  </div>
                </div>

                <div className="text-xs font-mono text-emerald-400/60 group-hover:text-emerald-400 transition-colors pr-2">
                  PDF ↗
                </div>
              </a>

              {/* Social Links Grid */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                {/* GitHub */}
                <a 
                  href="https://github.com/Moody-0x01" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 p-3.5 rounded-xl bg-neutral-900/40 border border-neutral-800/80 hover:border-neutral-700 hover:bg-neutral-900/80 transition-all group"
                >
                  <svg className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span className="text-xs font-semibold text-neutral-300 group-hover:text-white transition-colors">GitHub</span>
                </a>

                {/* LinkedIn */}
                <a 
                  href="https://linkedin.com/in/hossin-azmoud-59b257231" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 p-3.5 rounded-xl bg-neutral-900/40 border border-neutral-800/80 hover:border-neutral-700 hover:bg-neutral-900/80 transition-all group"
                >
                  <svg className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z" />
                  </svg>
                  <span className="text-xs font-semibold text-neutral-300 group-hover:text-white transition-colors">LinkedIn</span>
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Subtle Square Image */}
          <div className="lg:col-span-7 flex justify-center lg:justify-end items-center">
            {/* aspect-square forces a 1:1 ratio. Group handles hover. */}
            <div className="w-full max-w-sm aspect-square rounded-3xl overflow-hidden group border border-neutral-800">
              <img 
                src={contactImg} 
                alt="Lahoucine Azmoud"
                className="cursor-pointer w-full h-full object-cover 
                      grayscale-60 opacity-80 transition-all duration-500 
                      ease-in-out group-hover:grayscale-50 
                      group-hover:opacity-80"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}