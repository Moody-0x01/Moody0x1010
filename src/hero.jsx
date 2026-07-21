import React from 'react';
import './css/Hero.css';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center bg-[#0a0a0a] text-neutral-100 px-6 overflow-hidden">
      
      {/* Background Subtle Gradient Glow */}
      <div className="absolute inset-0 pointer-events-none hero-glow" />

      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
        
        {/* Status / Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900/80 border border-neutral-800 text-xs font-medium text-neutral-400 mb-8 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          Available for projects
        </div>

        {/* Headline: Name | Role */}
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
          Your Name <span className="text-neutral-600 font-light mx-2">|</span> <span className="text-neutral-400">Your Role</span>
        </h1>

        {/* Short Description */}
        <p className="text-base sm:text-lg text-neutral-400 max-w-xl font-normal leading-relaxed mb-10">
          Crafting clean, efficient systems and fast web experiences with a focus on simple design and robust architecture.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="#projects"
            className="w-full sm:w-auto px-6 py-3 rounded-lg bg-neutral-100 text-neutral-950 font-semibold text-xs tracking-wide hover:bg-white hover:shadow-lg hover:shadow-white/10 transition-all duration-200 text-center"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-6 py-3 rounded-lg bg-neutral-900/90 text-neutral-300 font-semibold text-xs tracking-wide border border-neutral-800 hover:text-white hover:bg-neutral-800/80 hover:border-neutral-700 transition-all duration-200 text-center"
          >
            Get in Touch
          </a>
        </div>

      </div>
    </section>
  );
}
