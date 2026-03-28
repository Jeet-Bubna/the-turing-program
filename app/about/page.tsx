import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutContent() {
  return (
    <div>
      <Navbar />
      <main className="flex-grow pt-16 bg-[#131313] text-[#e2e2e2]">
        {/* Hero Section */}
        <section className="relative h-[819px] flex flex-col justify-center px-8 md:px-16 overflow-hidden">
          <div
            className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-20"
            aria-hidden="true"
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#131313] via-[#131313]/80 to-transparent z-10"></div>

          <div className="relative z-20 max-w-4xl mx-auto w-full">
            <p className="font-['Space_Grotesk'] uppercase tracking-[0.4em] text-[0.75rem] text-[#ff6d00] mb-4">
              ESTABLISHED_1950 // REVIVED_2024
            </p>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter text-[#e2e2e2] mb-6 leading-none uppercase">
              ABOUT <br /> <span className="text-[#ff6d00]">US</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#c6c6c7] font-light max-w-2xl leading-relaxed">
              Bridging the gap between artificial intelligence and the human
              essence through rigid mathematical rigor and scholarly archival
              preservation.
            </p>
            <div className="mt-12 flex items-center gap-6">
              <button className="signal-gradient bg-[#ff6d00] text-[#562000] px-8 py-4 font-bold uppercase tracking-widest text-sm transition-transform hover:scale-105">
                Access Archive
              </button>
              <div className="h-[1px] w-24 bg-[#594136]/30"></div>
              <span className="text-[0.65rem] tracking-[0.2em] text-[#c6c6c7] uppercase">
                Protocol 01-A
              </span>
            </div>
          </div>
        </section>

        {/* Our Origins */}
        <section className="py-24 px-8 md:px-16 bg-[#0e0e0e]">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-5 sticky top-24">
              <div className="mb-8">
                <span className="text-[#ff6d00] text-sm tracking-[0.2em] font-mono">
                  01_GENESIS
                </span>
                <h2 className="text-4xl font-bold mt-2 uppercase tracking-tight">
                  Our Origins
                </h2>
              </div>
              <div className="p-6 border-l-2 border-[#ff6d00] bg-[#1b1b1b]/30">
                <p className="text-[0.7rem] font-mono text-[#594136] mb-4 uppercase tracking-tighter">
                  System_Log: Origin_Data_Stream
                </p>
                <p className="text-[#c6c6c7] leading-relaxed italic">
                  "The program began not as a machine-learning endeavor, but as
                  a philosophical quest to identify the precise moment where
                  code becomes consciousness."
                </p>
              </div>
            </div>

            <div className="md:col-span-7 space-y-12">
              <div className="space-y-6 text-lg text-[#e2e2e2] font-light leading-relaxed">
                <p>
                  In the wake of the initial Turing tests, a secret collective
                  of cryptographers and historians realized that machine
                  intelligence was evolving faster than the human ability to
                  record it.
                </p>
                <div className="bg-[#1b1b1b] p-8 relative border border-white/5">
                  <div className="absolute top-0 right-0 p-2 text-[0.6rem] font-mono text-[#ff6d00]">
                    REF_CODE: ARCH_50
                  </div>
                  <p>
                    We specialize in "Neural Archeology"—the process of
                    extracting human-like intuition from cold algorithmic
                    structures.
                  </p>
                </div>
                <p>
                  By 2024, the program evolved into a globally distributed node
                  network, ensuring that the 'Human Variable' remains a
                  constant.
                </p>
              </div>
              <img
                className="w-full grayscale contrast-125 opacity-60"
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000"
                alt="Interconnected data network"
              />
            </div>
          </div>
        </section>

        {/* The Mission */}
        <section className="py-24 px-8 md:px-16 bg-[#131313]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-7xl font-bold uppercase tracking-tighter mb-6">
                The Mission
              </h2>
              <p className="text-[#ff6d00] font-mono tracking-[0.3em] text-sm uppercase">
                Preserve / Analyze / Humanize
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-1 bg-[#222]">
              <MissionCard
                icon="history_edu"
                title="Archival Integrity"
                desc="We record every ephemeral thought, prompt, and digital synapse to prevent the 'Great Erasure'."
                status="Active"
              />
              <MissionCard
                icon="psychology"
                title="The Human essence"
                desc="By bridging the gap between organic memory and synthetic storage, we ensure human morality remains the primary OS."
                status="Evaluating"
              />
              <MissionCard
                icon="security"
                title="Digital Sovereignty"
                desc="A protective shield against the homogenization of thought, preserving the erratic nature of human logic."
                status="Hardened"
              />
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-24 px-8 md:px-16 bg-[#0e0e0e]">
          <div className="max-w-6xl mx-auto">
            <div className="mb-16">
              <span className="text-[#ff6d00] text-sm tracking-[0.2em] font-mono">
                03_COMMAND_STRUCTURE
              </span>
              <h2 className="text-4xl md:text-6xl font-bold mt-2 uppercase tracking-tighter">
                Leadership
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <LeaderCard
                name="Jeet Bubna"
                role="CHIEF_ARCHIVIST"
                spec="NLP"
                img="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
                desc="INSERT SOMETHING"
              />
              <LeaderCard
                name="Ekagar"
                role="DIR_SYNTHETICS"
                spec="Ethics"
                img="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                desc="INSERT SOMETHING"
                reverse
              />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 px-8 md:px-16 text-center bg-[#1b1b1b]">
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="inline-block p-1 border border-[#ff6d00]/30 mb-4">
              <span className="text-[0.6rem] font-mono px-4 py-1 text-[#ff6d00] uppercase tracking-widest">
                End_of_Transmission
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter">
              Become part of the archive.
            </h2>
            <p className="text-[#c6c6c7]">
              Contribute your thought-streams to our decentralized neural vault.
            </p>
            <div className="pt-8">
              <button className="signal-gradient bg-[#ff6d00] text-[#562000] px-12 py-5 font-extrabold uppercase tracking-[0.2em] text-sm">
                Initiate Contribution
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

/* --- Sub-Components --- */

const MissionCard = ({ icon, title, desc, status }: any) => (
  <div className="bg-[#1b1b1b] p-10 flex flex-col justify-between aspect-square group hover:bg-[#252525] transition-colors">
    <div>
      <span className="material-symbols-outlined text-4xl text-[#ff6d00] mb-6 block">
        {icon}
      </span>
      <h3 className="text-xl font-bold uppercase mb-4 tracking-wide">
        {title}
      </h3>
      <p className="text-sm text-[#c6c6c7] leading-relaxed">{desc}</p>
    </div>
    <div className="text-[0.6rem] font-mono text-[#594136] tracking-[0.2em] uppercase">
      Status: {status}
    </div>
  </div>
);

const LeaderCard = ({ name, role, spec, img, desc, reverse }: any) => (
  <div
    className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} gap-8 items-start`}
  >
    <div className="w-full md:w-64 aspect-[3/4] bg-[#353535] relative overflow-hidden flex-shrink-0">
      <img
        className="absolute inset-0 w-full h-full object-cover grayscale mix-blend-multiply"
        src={img}
        alt={name}
      />
      <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-[#0e0e0e] to-transparent">
        <p className="text-[0.6rem] font-mono text-[#ff6d00] uppercase">
          {role}
        </p>
      </div>
    </div>
    <div className={`space-y-4 ${reverse ? "md:text-right" : ""}`}>
      <h3 className="text-3xl font-bold text-[#e2e2e2] uppercase">{name}</h3>
      <p className="text-[#c6c6c7] text-sm leading-relaxed max-w-sm">{desc}</p>
    </div>
  </div>
);
