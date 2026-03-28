"use client"

import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="selection:bg-primary-container selection:text-on-primary">
      {/* Top Navigation */}
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-4 bg-[#131313]/90 backdrop-blur-md border-b border-outline-variant/10">
        <div className="flex items-center gap-4">
          <button 
            className="text-[#ff6d00] p-2 -ml-2" 
            onClick={() => setIsOpen(true)}
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
          <div className="hidden md:flex gap-8">
            <a className="font-['Space_Grotesk'] uppercase tracking-[0.1em] text-[0.75rem] text-[#e2e2e2] hover:text-[#ffb692] transition-colors duration-200" href="/">WEBINARS</a>
            <a className="font-['Space_Grotesk'] uppercase tracking-[0.1em] text-[0.75rem] text-[#e2e2e2] hover:text-[#ffb692] transition-colors duration-200" href="/about">ABOUT</a>
          </div>
        </div>
        <div className="text-2xl font-bold tracking-[-0.05em] text-[#e2e2e2]">THE_TURING_PROGRAM</div>
      </nav>

      {/* Overlay for Sidebar */}
      <div 
        className={`fixed inset-0 bg-black/60 z-[55] ${isOpen ? '' : 'hidden'}`} 
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Sidebar Navigation (Drawer) */}
      <aside 
        className={`fixed left-0 top-0 h-full z-[60] flex flex-col p-6 backdrop-blur-md bg-[#131313]/95 w-72 border-r border-outline-variant/20 shadow-2xl transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex justify-between items-center mb-12">
          <div>
            <div className="font-['Space_Grotesk'] uppercase tracking-[0.1em] text-[0.6875rem] text-[#ffb692]">V.01_ARCHIVIST</div>
            <div className="text-[0.6rem] font-mono text-secondary/50">SYSTEM_READY</div>
          </div>
          <button 
            className="text-secondary hover:text-[#ffb692] transition-colors" 
            onClick={() => setIsOpen(false)}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <nav className="flex flex-col gap-2 flex-grow">
          <a className="flex items-center gap-3 p-3 text-[#ff6d00] font-bold bg-[#1b1b1b] font-['Space_Grotesk'] uppercase tracking-[0.1em] text-[0.6875rem]" href="#">
            <span className="material-symbols-outlined">folder_open</span> ARCHIVE_HOME
          </a>
          <a className="flex items-center gap-3 p-3 text-[#e2e2e2] hover:text-[#ffb692] transition-all font-['Space_Grotesk'] uppercase tracking-[0.1em] text-[0.6875rem] active:translate-x-1" href="#webinars">
            <span className="material-symbols-outlined">event_note</span> WEBINAR_SCHEDULE
          </a>
          <a className="flex items-center gap-3 p-3 text-[#e2e2e2] hover:text-[#ffb692] transition-all font-['Space_Grotesk'] uppercase tracking-[0.1em] text-[0.6875rem] active:translate-x-1" href="#about">
            <span className="material-symbols-outlined">menu_book</span> SCHOLARLY_ABOUT
          </a>
          <a className="flex items-center gap-3 p-3 text-[#e2e2e2] hover:text-[#ffb692] transition-all font-['Space_Grotesk'] uppercase tracking-[0.1em] text-[0.6875rem] active:translate-x-1" href="#ethics">
            <span className="material-symbols-outlined">gavel</span> ETHICAL_AI_PROTOCOL
          </a>
        </nav>

        <div className="mt-auto pt-8 border-t border-outline-variant/20">
          <button className="signal-gradient w-full py-4 mb-8 text-on-primary font-bold tracking-widest text-[0.6875rem]">START_INQUIRY</button>
          <div className="flex flex-col gap-2">
            <a className="flex items-center gap-3 p-2 text-[#e2e2e2] hover:text-[#ffb692] font-['Space_Grotesk'] uppercase tracking-[0.1em] text-[0.6875rem]" href="#">
              <span className="material-symbols-outlined">settings</span> SETTINGS
            </a>
            <a className="flex items-center gap-3 p-2 text-[#e2e2e2] hover:text-[#ffb692] font-['Space_Grotesk'] uppercase tracking-[0.1em] text-[0.6875rem]" href="#">
              <span className="material-symbols-outlined">logout</span> LOGOUT
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
}