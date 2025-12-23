"use client";
import React, { useState, useEffect } from 'react';
import { IceCream, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add a shadow when scrolling to give it depth
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Our Menu", href: "#services" },
    { name: "Contact Us", href: "#contact" },
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 shadow-md py-3' : 'bg-coconut/80 py-5'
    } backdrop-blur-md border-b border-caramel/10`}>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-5">
        <div className="flex items-center justify-between">
          
          {/* Logo Section - Perfectly Centered Vertically */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="bg-strawberry p-2 rounded-xl group-hover:rotate-12 transition-transform shadow-lg shadow-strawberry/20">
              <IceCream className="text-white" size={24} />
            </div>
            <span className="text-xl md:text-2xl font-serif font-bold tracking-tight text-navy">
              TM's <span className="text-strawberry">Frozen</span> Delights
            </span>
          </div>

          {/* Desktop Menu - Improved spacing and active states */}
          <div className="hidden md:flex items-center gap-12 font-semibold text-navy/70 uppercase text-xs tracking-[0.2em]">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="hover:text-strawberry transition-all relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-strawberry after:left-0 after:-bottom-1 hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button - Rounded and Styled */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="p-2 rounded-full bg-caramel/10 text-navy hover:bg-strawberry hover:text-white transition-colors outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay - Smooth Slide-down animation */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-t border-caramel/10 ${
        isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
      }`}>
        <div className="flex flex-col p-6 space-y-4 items-center text-center">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              onClick={() => setIsOpen(false)} 
              className="w-full text-navy font-serif font-bold text-xl py-2 hover:text-strawberry border-b border-caramel/5"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}