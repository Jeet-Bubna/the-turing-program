export default function Footer() {
  return (
    <footer className="w-full py-12 px-8 flex flex-col md:flex-row justify-between items-center gap-4 bg-[#0e0e0e] border-t border-outline-variant/10">
      {/* Brand Section */}
      <div className="text-sm font-bold text-[#e2e2e2] flex items-center gap-4">
        THE_TURING_PROGRAM
        <span className="text-outline-variant">|</span>
        <span className="font-['Space_Grotesk'] uppercase tracking-[0.1em] text-[0.6875rem] text-[#353535]">
          V.01_ARCHIVIST
        </span>
      </div>

      {/* Navigation Links */}
      <div className="flex gap-8">
        <a 
          className="font-['Space_Grotesk'] uppercase tracking-[0.1em] text-[0.6875rem] text-[#353535] hover:text-[#e2e2e2] transition-colors" 
          href="#"
        >
          PRIVACY_PROTOCOL
        </a>
        <a 
          className="font-['Space_Grotesk'] uppercase tracking-[0.1em] text-[0.6875rem] text-[#353535] hover:text-[#e2e2e2] transition-colors" 
          href="#"
        >
          DATA_SOVEREIGNTY
        </a>
        <a 
          className="font-['Space_Grotesk'] uppercase tracking-[0.1em] text-[0.6875rem] text-[#353535] hover:text-[#e2e2e2] transition-colors" 
          href="#"
        >
          TERMS_OF_SERVICE
        </a>
      </div>

      {/* Copyright Section */}
      <div className="font-['Space_Grotesk'] uppercase tracking-[0.1em] text-[0.6875rem] text-[#353535]">
        © 1950-2024 THE_TURING_PROGRAM. ALL_RIGHTS_REDACTED.
      </div>
    </footer>
  );
}