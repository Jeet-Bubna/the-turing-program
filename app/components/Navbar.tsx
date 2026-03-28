"use client"
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 flex justify-between items-center px-8 py-4 bg-surface/90 backdrop-blur-md border-b border-outline-variant/10">
        <div className="flex items-center gap-4">
          <button 
            className="text-primary-container p-2 -ml-2 flex items-center" 
            onClick={() => setIsOpen(true)}
            aria-label="Open Menu"
          >
            <span className="material-symbols-outlined">menu</span>
          </button>

          <div className="hidden md:flex gap-8">
            <a className="font-headline uppercase tracking-widest text-[0.75rem] text-primary border-b-2 border-primary-container" href="#">
              WEBINARS
            </a>
            <a className="font-headline uppercase tracking-widest text-[0.75rem] text-on-surface hover:text-primary transition-colors duration-200" href="#">
              ABOUT
            </a>
            <a className="font-headline uppercase tracking-widest text-[0.75rem] text-on-surface hover:text-primary transition-colors duration-200" href="#">
              ETHICS
            </a>
          </div>
        </div>

        <div className="text-2xl font-bold tracking-tighter text-on-surface font-headline">
          THE_TURING_PROGRAM
        </div>
      </nav>

      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside 
        className={`fixed top-0 left-0 h-full w-72 bg-surface border-r border-outline-variant/20 z-[70] transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-8">
          <button 
            className="text-on-surface mb-8" 
            onClick={() => setIsOpen(false)}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
          
          <nav className="flex flex-col gap-6">
            <a href="#" className="font-headline text-xl text-on-surface">Webinars</a>
            <a href="#" className="font-headline text-xl text-on-surface">About</a>
            <a href="#" className="font-headline text-xl text-on-surface">Ethics</a>
          </nav>
        </div>
      </aside>
    </>
  );
}