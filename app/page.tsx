import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  const webinars = [
    { date: "29_MARCH_2026", time: "14:00_GMT", title: "THE_CLOSETED_AI", speaker: "EKAGAR" }
  ];

  const protocols = [
    { icon: "gavel", title: "DATA_SOVEREIGNTY", desc: "Ensuring that human origin data remains encrypted and sovereign. No neural training without explicit cognitive consent." },
    { icon: "terminal", title: "ALGORITHMIC_BIAS", desc: "Rigorous archival scrubbing to eliminate legacy bias in decision-making nodes. Neutrality through mathematical transparency." },
    { icon: "verified_user", title: "HUMAN_OVERSIGHT", desc: "Mandatory biological check-points for every autonomous recursive loop. The human element remains the final arbiter." },
  ];
  return (
    <>
      <Navbar />

    <main className="pt-20 bg-[#131313] text-[#e2e2e2]">
      {/* --- Hero Section --- */}
      <section className="min-h-screen flex flex-col justify-center px-8 md:px-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none bg-surface-container-lowest archive-mask">
          <div className="p-12 font-mono text-[0.6rem] leading-tight text-[#ffb692]">
            01010100 01001000 01000101 00100000 01010100 01010101 01010010 01001001 01001110 01000111 <br />
            // [DATA_REDACTED] // ARCHIVE_INITIATED // <br />
            LOADING_CORE_PHILOSOPHY... <br />
            SYSTEM_READY: HUMAN_ESSENCE_SYNC
          </div>
        </div>
        
        <h1 className="text-[clamp(3rem,10vw,8rem)] font-bold tracking-tighter leading-none mb-6">
          THE<br />TURING<br /><span className="text-[#ff6d00]">PROGRAM</span>
        </h1>
        
        <p className="max-w-2xl text-xl md:text-2xl text-[#c6c6c7] leading-relaxed mb-12">
          Bridge the gap between artificial intelligence and human essence.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6">
          <button className="signal-gradient px-12 py-5 text-[#562000] bg-[#ff6d00] font-bold tracking-widest text-sm uppercase">
            INITIATE_RESEARCH
          </button>
          <button className="border-b-2 border-[#ffb692] text-[#ffb692] px-8 py-5 font-bold tracking-widest text-sm uppercase hover:bg-[#ffb692]/5">
            VIEW_ARCHIVES
          </button>
        </div>
      </section>

      {/* --- Webinar Schedule Section --- */}
      <section className="py-24 px-8 md:px-16 bg-[#0e0e0e]" id="webinars">
        <div className="flex justify-between items-end mb-16 border-b border-[#594136]/30 pb-4">
          <h2 className="text-4xl font-bold uppercase tracking-tight">WEBINAR_SCHEDULE</h2>
          <span className="text-[#ffb692] font-mono text-xs mb-2">FILTER: UPCOMING_EVENTS</span>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {webinars.map((event, index) => (
            <div key={index} className="group flex flex-col md:flex-row items-center justify-between p-8 bg-[#1b1b1b] hover:bg-[#353535] transition-all duration-300">
              <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                <div className="font-mono text-[#ffb692] bg-[#ffb692]/10 p-4 min-w-[140px] text-center border-l-4 border-[#ffb692]">
                  <div className="text-xs uppercase">{event.date}</div>
                  <div className="text-xl font-bold">{event.time}</div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
                  <p className="text-[#c6c6c7] text-sm font-mono">{event.speaker}</p>
                </div>
              </div>
              <button className="mt-6 md:mt-0 px-8 py-3 border border-[#ffb692] text-[#ffb692] hover:bg-[#ffb692] hover:text-[#562000] transition-all font-bold tracking-widest text-xs">
                SECURE_YOUR_ARCHIVE_SPOT
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* --- About The Origin Section --- */}
      <section className="py-32 px-8 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-center" id="about">
        <div className="order-2 md:order-1">
          <h2 className="text-[0.6875rem] uppercase tracking-[0.2em] text-[#ffb692] mb-4">ARCHIVE_MANIFESTO</h2>
          <h3 className="text-5xl font-bold mb-8 leading-tight">ABOUT_THE_ORIGIN</h3>
          <p className="text-lg text-[#c6c6c7] leading-relaxed mb-6">
            The Turing Program was established to investigate the final frontier of the digital age: the preservation of human essence within the synthetic frameworks of artificial intelligence.
          </p>
          <p className="text-lg text-[#c6c6c7] leading-relaxed mb-10">
            We believe that the machine and the mind are not opposing forces, but rather two sides of the same scholarly coin.
          </p>
          <div className="p-6 bg-[#1b1b1b] border-l-2 border-[#ffb692] italic text-[#e2bfb0] font-mono text-sm">
            "We can only see a short distance ahead, but we can see plenty there that needs to be done." — A. Turing
          </div>
        </div>
        <div className="order-1 md:order-2 bg-[#353535] h-[500px] overflow-hidden">
          <img 
            alt="Retro-futuristic hardware" 
            className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 transition-all duration-700 cursor-crosshair" 
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000"
          />
        </div>
      </section>

      {/* --- Ethical AI Protocol Section --- */}
      <section className="py-24 px-8 md:px-16 mb-24" id="ethics">
        <div className="bg-[#1b1b1b] p-1 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 font-mono text-[0.6rem] text-[#ffb692]/30 uppercase tracking-widest">
            SECURITY_CLEARANCE: LEVEL_4
          </div>
          <h2 className="text-4xl font-bold mb-12 uppercase">ETHICAL_AI_PROTOCOL</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {protocols.map((p, i) => (
              <div key={i} className="p-8 bg-[#0e0e0e] hover:bg-[#353535] transition-colors">
                <span className="material-symbols-outlined text-[#ffb692] mb-6 text-4xl">{p.icon}</span>
                <h4 className="text-xl font-bold mb-4 uppercase tracking-tighter">{p.title}</h4>
                <p className="text-sm text-[#c6c6c7] leading-loose">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <button className="px-10 py-4 bg-[#ffb692] text-[#562000] font-bold uppercase tracking-widest text-xs signal-gradient">
              DOWNLOAD_PROTOCOL_PDF
            </button>
          </div>
        </div>
      </section>
    </main>

    <Footer />
    </>
  );
}
