import { useState } from 'react';
import logo from './assets/Logo.svg';
import './css/Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0a0a0a] border-b border-neutral-800/80 font-sans">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Brand Logo & Title */}
        <a 
          href="#" 
          className="flex items-center gap-3 px-2 py-1.5 rounded-lg hover:bg-neutral-900 transition-colors duration-200 group"
        >
          <img 
            src={logo} 
            alt="Logo" 
            className="h-6 w-auto opacity-90 group-hover:opacity-100 transition-opacity" 
          />
        </a>

        {/* Desktop Links with Pill Background Hovers */}
        <nav className="hidden md:flex items-center gap-1">
          <li>
            <a 
              href="#section1" 
              className="px-3.5 py-1.5 rounded-md text-xs font-medium tracking-wide text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800/70 transition-all duration-200 block"
            >
              Section 1
            </a>
          </li>
          <li>
            <a 
              href="#section2" 
              className="px-3.5 py-1.5 rounded-md text-xs font-medium tracking-wide text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800/70 transition-all duration-200 block"
            >
              Section 2
            </a>
          </li>
          <li>
            <a 
              href="#section3" 
              className="px-3.5 py-1.5 rounded-md text-xs font-medium tracking-wide text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800/70 transition-all duration-200 block"
            >
              Section 3
            </a>
          </li>
          <li>
            <a 
              href="#section4" 
              className="px-3.5 py-1.5 rounded-md text-xs font-medium tracking-wide text-neutral-400 hover:text-neutral-100 hover:bg-neutral-800/70 transition-all duration-200 block"
            >
              Section 4
            </a>
          </li>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center gap-1.5 p-2 rounded-lg hover:bg-neutral-800/80 transition-colors focus:outline-none"
          aria-label="Toggle menu"
        >
          <span className={`h-0.5 w-5 bg-neutral-300 rounded-full transition-transform duration-200 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`h-0.5 w-5 bg-neutral-300 rounded-full transition-opacity duration-200 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-5 bg-neutral-300 rounded-full transition-transform duration-200 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-[#0a0a0a] border-b border-neutral-800 ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
        <ul className="flex flex-col py-3 px-4 gap-1">
          <li>
            <a 
              href="#section1" 
              className="block px-3 py-2 rounded-md text-xs font-medium text-neutral-400 hover:text-white hover:bg-neutral-800/70 transition-colors"
            >
              Section 1
            </a>
          </li>
          <li>
            <a 
              href="#section2" 
              className="block px-3 py-2 rounded-md text-xs font-medium text-neutral-400 hover:text-white hover:bg-neutral-800/70 transition-colors"
            >
              Section 2
            </a>
          </li>
          <li>
            <a 
              href="#section3" 
              className="block px-3 py-2 rounded-md text-xs font-medium text-neutral-400 hover:text-white hover:bg-neutral-800/70 transition-colors"
            >
              Section 3
            </a>
          </li>
          <li>
            <a 
              href="#section4" 
              className="block px-3 py-2 rounded-md text-xs font-medium text-neutral-400 hover:text-white hover:bg-neutral-800/70 transition-colors"
            >
              Section 4
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
