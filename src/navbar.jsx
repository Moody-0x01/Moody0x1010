import { useState } from 'react';
import logo from './assets/Logo.svg';
import './css/Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Music', href: '#music' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#000000] backdrop-blur-xl border-b border-neutral-800 font-sans transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Brand Logo - Added subtle dark background pill for isolation */}
        <a 
          href="#" 
          className="flex items-center gap-3 p-1.5 rounded-lg group"
        >
          <img 
            src={logo} 
            alt="Logo" 
            className="h-8 w-auto brightness-110" 
          />
        </a>

        {/* Desktop Navigation - High Contrast Links */}
        <nav className="hidden md:flex items-center gap-1.5">
          {
            navLinks.map((link) => (
              <a key={link.name} 
                href={link.href} 
                className=" relative px-4 py-2 text-[12px] font-medium tracking-[0.08em] uppercase text-neutral-500 transition-colors duration-200 hover:text-white after:absolute after:left-0 after:bottom-0 after:h-px after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full " > {link.name} </a>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 rounded-lg bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 transition-colors duration-200 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span 
            className={`h-0.5 w-5 bg-white rounded-full transform transition-all duration-300 ease-in-out ${
              isOpen ? 'rotate-45 translate-y-2' : ''
            }`} 
          />
          <span 
            className={`h-0.5 w-5 bg-white rounded-full transition-opacity duration-200 ease-in-out ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`} 
          />
          <span 
            className={`h-0.5 w-5 bg-white rounded-full transform transition-all duration-300 ease-in-out ${
              isOpen ? '-rotate-45 -translate-y-2' : ''
            }`} 
          />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-[#050505] border-b border-neutral-800 ${
          isOpen ? 'max-h-64 opacity-100 py-3' : 'max-h-0 opacity-0 py-0 border-b-0'
        }`}
      >
        <ul className="flex flex-col px-6 gap-1">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href} 
                onClick={handleLinkClick}
                className="block px-4 py-2.5 rounded-lg text-xs font-semibold text-neutral-300 hover:text-white hover:bg-neutral-800/80 transition-all duration-200"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}