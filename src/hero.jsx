import React from 'react';
import './css/Hero.css';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center bg-[#0a0a0a] text-neutral-100 px-6 overflow-hidden">
      
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      {/* Radial Glow Highlight */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] hero-glow pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        
        {/* Status / Availability Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-800 text-[11px] font-mono font-medium text-neutral-300 mb-8 backdrop-blur-md shadow-inner">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Available for new opportunities
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
          Backend Developer <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 via-neutral-400 to-neutral-600">
            & Systems Engineer
          </span>
        </h1>

        {/* Short Subtitle */}
        <p className="text-sm sm:text-base md:text-lg text-neutral-400 max-w-2xl font-normal leading-relaxed mb-10">
          Building high-performance backend systems, socket-driven architectures, and fast web applications using <span className="text-neutral-200 font-mono text-xs sm:text-sm px-1.5 py-0.5 rounded bg-neutral-900 border border-neutral-800">C++</span>, <span className="text-neutral-200 font-mono text-xs sm:text-sm px-1.5 py-0.5 rounded bg-neutral-900 border border-neutral-800">Rust</span>, and <span className="text-neutral-200 font-mono text-xs sm:text-sm px-1.5 py-0.5 rounded bg-neutral-900 border border-neutral-800">Python</span>.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="#projects"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white text-black font-semibold text-xs tracking-wider uppercase hover:bg-neutral-200 active:scale-[0.98] transition-all duration-200 text-center shadow-lg shadow-white/5"
          >
            Explore Projects
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-neutral-900/80 text-neutral-300 font-semibold text-xs tracking-wider uppercase border border-neutral-800 hover:text-white hover:bg-neutral-800 hover:border-neutral-700 active:scale-[0.98] transition-all duration-200 text-center backdrop-blur-sm"
          >
            Get in Touch
          </a>
        </div>

        {/* Tech Stack Indicator */}
        <div className="mt-16 pt-8 border-t border-neutral-900/80 flex flex-wrap items-center justify-center gap-6 text-[11px] font-mono text-neutral-500 uppercase tracking-widest">
          <span>Linux</span>
          <span>•</span>
          <span>Webservers & Daemons</span>
          <span>•</span>
          <span>FL Studio // Audio</span>
        </div>

      </div>
    </section>
  );
}