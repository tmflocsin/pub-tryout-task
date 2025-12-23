import React from 'react';
import { IceCream } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6 bg-coconut/80 backdrop-blur-md sticky top-0 z-50 border-b border-caramel/20">
      <div className="flex items-center gap-2">
        <IceCream className="text-strawberry" size={32} />
        <span className="text-2xl font-bold tracking-tight text-navy">
          TM's Frozen Delights
        </span>
      </div>
      
      <div className="hidden md:flex gap-20 font-medium text-navy/80 text-lg mr-15">
        <a href="#home" className="hover:text-strawberry transition-colors">Home</a>
        <a href="#services" className="hover:text-strawberry transition-colors">Our Menu</a>
        <a href="#contact" className="hover:text-strawberry transition-colors">Contact Us</a>
      </div>
    </nav>
  );
}