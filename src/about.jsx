import React from 'react';
import './css/About.css';

const skills = [
  {
    category: "Languages & technologies",
    items: ["C/C++", "Rust", "Python", "JavaScript / React", "FastAPI", "Flask", "Tailwind CSS", "SQLite", "Go", "bash"]
  },
  {
    category: "Environment & Tools",
    items: ["Linux", "Neovim", "vscode", "Git", "Docker", "tmux", "Zsh", "fish"]
  },
];

const experience = [
  {
    role: "Backend / Software Engineer — Internship",
    company: "Hztech",
    period: "2022 May — 2022 September",
    description: "Developed and launched the official company web application using Golang, Svelte, and SQLite, optimizing database queries to ensure smooth data persistence.. and engineered the user interface for a dedicated electronic software solution, focusing on component reliability and clean data integration",
    technologies: ["Svelte", "Linux", "Go"]
  },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 bg-[#0a0a0a] text-neutral-100 px-6 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto space-y-20">
        
        {/* Section 1: Overview & Stack */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Bio Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[11px] font-mono text-neutral-400">
              <svg className="w-3.5 h-3.5 text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              About Me
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Building efficient software from the terminal up.
            </h2>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              I build backend-focused software for systems programming, network utilities, and performant web services. I like working close to the metal, shipping reliable C++, Rust, and Python tools that stay fast under load.
            </p>

            {/* Quick Environment Callout */}
            <div className="pt-2">
              <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-neutral-900 text-neutral-300 border border-neutral-800">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-neutral-200">Primary Environment</h4>
                    <p className="text-[11px] font-mono text-neutral-500">Arch Linux / Neovim / fish</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Grid Column */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map((skillGroup, idx) => (
              <div 
                key={idx} 
                className="p-5 rounded-xl bg-neutral-900/40 border border-neutral-800/80 hover:border-neutral-700/80 transition-colors flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-4 pb-2 border-b border-neutral-800/60">
                    {skillGroup.category}
                  </h3>
                  <ul className="space-y-2">
                    {skillGroup.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-center gap-2 text-xs text-neutral-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-neutral-600" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Section 2: Experience Timeline */}
        <div className="pt-8 border-t border-neutral-900">
          <div className="mb-10 flex items-center gap-3">
            <div className="p-2 rounded-lg bg-neutral-900 text-neutral-300 border border-neutral-800">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold tracking-tight text-white">Experience</h3>
              <p className="text-xs text-neutral-400">Professional work and software engineering journey.</p>
            </div>
          </div>

          <div className="relative border-l border-neutral-800 ml-3 pl-6 space-y-10">
            {experience.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full bg-neutral-800 border border-neutral-600 group-hover:bg-white group-hover:border-white transition-colors" />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h4 className="text-sm font-semibold text-white">
                    {item.role} <span className="text-neutral-500 font-normal">@ {item.company}</span>
                  </h4>
                  <span className="text-[11px] font-mono text-neutral-500">
                    {item.period}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-4 max-w-2xl">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech, techIdx) => (
                    <span 
                      key={techIdx} 
                      className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-[10px] font-mono text-neutral-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}