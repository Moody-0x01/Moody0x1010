import React, { useState } from 'react';
import './css/Projects.css';

const projectsData = [
  {
    title: "Dusk",
    description: " built Dusk, a Python-based API that retrieves wallpaper images from Wallhaven and exposes them through simple, consumable endpoints. The project emphasizes clean API design, fast integration, and practical usability for frontend apps or automation scripts. It combines backend development in Python with an HTML-based interface/docs layer, and demonstrates external API integration, data handling, and service-oriented architecture.",
    link: "https://github.com/Moody-0x01/Dusk",
    technologies: ["FastAPI", "Python", "JavaScript", "CSS", "HTML"],
    images: [
	  "https://github.com/Moody-0x01/Dusk/blob/master/img/img.png?raw=true"
    ]
  },
  {
    title: "Webserv",
    description: "Webserv is a lightweight HTTP web server built in C++, designed to handle client requests efficiently and serve static and dynamic content. The project demonstrates a strong understanding of core networking concepts, request parsing, response generation, and server-side architecture, with supporting front-end assets and scripting for testing and development. It showcases practical experience in systems programming, protocol handling, and building reliable low-level software from scratch.",
    link: "#",
    technologies: ["C++98", "Socket API"],
    images: [
	  "https://github.com/Moody-0x01/webserv/blob/master/img/img1.png?raw=true"
      // "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
      // "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    title: "Clippy Hook",
    description: "A lightweight system daemon that automatically detects and downloads media from your clipboard. Written in Rust with a Python web UI, it watches for links to YouTube videos, SoundCloud tracks, torrents, and direct media files—then downloads them instantly using configurable backends like yt-dlp, wget, and transmission-cli. Perfect for streamlining media collection workflows on Linux systems.",
    link: "https://github.com/Moody-0x01/clippy_hook",
    technologies: ["Rust", "Python", "FastAPI", "HTML", "JavaScript", "CSS"],
    images: [
      "https://github.com/Moody-0x01/clippy_hook/raw/main/img/app.png"
    ]
  },
  {
	title: "Blade", 
	description: "Blade is a terminal-based text editor built in C using ncurses, designed to provide a lightweight, keyboard-driven editing experience in a TUI environment. The project demonstrates low-level systems programming skills, including terminal UI development, input handling, and efficient text buffer management. It showcases an emphasis on performance, usability, and clean command-line workflow.", 
	link: "https://github.com/Moody-0x01/Blade", 
	technologies: ["C", "ncurses"], 
	images: [

		"https://github.com/Moody-0x01/Blade/blob/main/img/V0.png?raw=true", 
		"https://github.com/Moody-0x01/Blade/blob/main/img/V1.png?raw=true", 
		"https://github.com/Moody-0x01/Blade/blob/main/img/V2.png?raw=true",
		"https://github.com/Moody-0x01/Blade/blob/main/img/kitty.png?raw=true",
		"https://github.com/Moody-0x01/Blade/blob/main/img/fb.png?raw=true",
		"https://github.com/Moody-0x01/Blade/blob/main/img/music.png?raw=true"
	]
	}
  // {
  //   title: "System Utility",
  //   description: "Modular command-line utility designed for lightweight system orchestration and automated workflows.",
  //   link: "#",
  //   technologies: ["Python", "Bash"],
  //   images: []
  // }
];

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Handle click only on desktop (screen width >= 768px)
  const handleImageClick = (imgUrl) => {
    if (window.innerWidth >= 768) {
      setSelectedImage(imgUrl);
    }
  };

  return (
    <section id="projects" className="py-24 bg-[#0a0a0a] text-neutral-100 px-6 border-t border-neutral-900">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">Projects</h2>
          <p className="text-sm text-neutral-400">Selected systems, servers, and utilities.</p>
        </div>

        {/* Dynamic Grid Mapping */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project, index) => (
            <div 
              key={index}
              className="group relative bg-neutral-900/40 border border-neutral-800/80 rounded-xl p-6 hover:bg-neutral-900/80 hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Title & External Link Icon */}
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-base font-semibold text-white group-hover:text-neutral-200 transition-colors">
                    {project.title}
                  </h3>
                  <a 
                    href={project.link}
                    className="text-neutral-500 group-hover:text-white transition-colors p-1"
                    aria-label={`View ${project.title}`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Project Image Gallery Preview */}
                {project.images && project.images.length > 0 && (
                  <div className={`grid gap-2 mb-6 ${project.images.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                    {project.images.map((imgUrl, imgIndex) => (
                      <div 
                        key={imgIndex} 
                        onClick={() => handleImageClick(imgUrl)}
                        className="relative overflow-hidden rounded-lg bg-neutral-950 border border-neutral-800/60 aspect-video md:cursor-zoom-in group/img"
                      >
                        <img 
                          src={imgUrl} 
                          alt={`${project.title} screenshot ${imgIndex + 1}`}
                          className="w-full h-full object-cover object-center opacity-80 group-hover/img:opacity-100 group-hover/img:scale-105 transition-all duration-300"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Technologies Badges */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-800/40">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-2.5 py-1 rounded-md bg-neutral-800/60 text-neutral-300 text-[11px] font-medium tracking-wide"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Desktop Lightbox Modal */}
      {selectedImage && (
        <div 
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-8 bg-black/90 backdrop-blur-md cursor-zoom-out animate-fadeIn"
        >
          <div className="relative max-w-5xl max-h-[90vh] overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 shadow-2xl">
            <img 
              src={selectedImage} 
              alt="Expanded preview" 
              className="w-full h-auto max-h-[85vh] object-contain"
            />
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-white bg-black/50 p-2 rounded-full border border-neutral-800"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
