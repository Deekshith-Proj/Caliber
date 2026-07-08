"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-slate-100 shadow-sm">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <div className="font-heading font-bold text-2xl text-[var(--color-primary)]">
          CALIBER
        </div>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 font-medium text-sm text-gray-700">
          <a href="#about" className="hover:text-[var(--color-secondary)] transition-colors">About</a>
          <a href="#services" className="hover:text-[var(--color-secondary)] transition-colors">Services</a>
          <a href="#projects" className="hover:text-[var(--color-secondary)] transition-colors">Projects</a>
        </div>
        
        <div className="hidden md:block">
          <button className="bg-[var(--color-primary)] text-white px-6 py-2 rounded-sm font-medium hover:bg-[var(--color-secondary)] transition-colors">
            Contact Us
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-[var(--color-primary)]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-8 py-4 flex flex-col gap-4 shadow-lg">
          <a href="#about" onClick={() => setIsOpen(false)} className="font-medium text-gray-700">About</a>
          <a href="#services" onClick={() => setIsOpen(false)} className="font-medium text-gray-700">Services</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="font-medium text-gray-700">Projects</a>
          <button className="bg-[var(--color-primary)] text-white px-6 py-2 rounded-sm font-medium mt-2 w-full">
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
}