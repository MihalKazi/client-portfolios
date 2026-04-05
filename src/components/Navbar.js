"use client"
import { useState, useEffect } from 'react';

export default function Navbar() {
  const links = [
    { href: '#about', label: 'Brief' },
    { href: '#experience', label: 'Fieldwork' },
    { href: '#projects', label: 'Investigations' },
  { href: '#methodology', label: 'Methodology' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-paper/90 backdrop-blur-sm border-b-2 border-ink">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 py-4 flex justify-between items-center">
        
        {/* Logo area - Monospace technical look */}
        <div className="font-mono text-sm tracking-tighter uppercase flex flex-col">
          <span className="font-bold text-ink">Minhaj Aman</span>
          <span className="text-alert text-xs">Researcher // ID: MA-01</span>
        </div>

        {/* Links */}
        <ul className="hidden md:flex space-x-8">
          {links.map((link) => (
            <li key={link.href}>
              <a 
                href={link.href} 
                className="font-mono text-xs uppercase tracking-widest text-ink hover:text-alert transition-colors relative group py-2"
              >
                [{link.label}]
                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-alert transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
              </a>
            </li>
          ))}
        </ul>
        
        {/* Status Indicator */}
        <div className="hidden md:flex items-center gap-2 font-mono text-[10px] uppercase text-zinc">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
          System Online
        </div>
      </div>
    </nav>
  );
}