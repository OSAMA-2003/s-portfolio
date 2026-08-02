export default function PlaygroundSection() {
  return (
    <section className="py-32 bg-black px-5 lg:px-20 border-t border-white/20 relative" id="playground">
      <div className="absolute top-10 right-10 text-[180px] font-serif outline-text opacity-5 pointer-events-none rotate-90 origin-right select-none">
        EXP
      </div>

      <div className="max-w-[1400px] mx-auto">
        <h2 className="font-serif text-6xl lg:text-9xl uppercase tracking-tighter mb-20 text-right outline-text-white">
          PLAYGROUND
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="aspect-square bg-white/5 border border-white/10 hover:border-[#00ffff] transition-colors relative group overflow-hidden flex items-center justify-center p-8 stagger-reveal rounded-lg">
            <div className="text-4xl font-serif text-white/30 group-hover:text-[#00ffff] group-hover:scale-125 transition-all duration-500 font-bold">
              3D Type
            </div>
          </div>

          {/* Card 2 */}
          <div className="aspect-square bg-white/5 border border-white/10 hover:border-[#00ffff] transition-colors relative group overflow-hidden flex items-center justify-center p-8 stagger-reveal stagger-delay-1 rounded-lg">
            <div className="w-24 h-24 bg-[#00ffff] rounded-full blur-xl group-hover:blur-md group-hover:scale-150 transition-all duration-500 opacity-70 group-hover:opacity-100" />
          </div>

          {/* Card 3 */}
          <div className="aspect-square bg-white/5 border border-white/10 hover:border-[#00ffff] transition-colors relative group overflow-hidden flex items-center justify-center p-8 stagger-reveal stagger-delay-2 rounded-lg">
            <div className="text-4xl font-serif text-white/30 group-hover:text-[#00ffff] group-hover:scale-125 transition-all duration-500 text-center font-bold">
              Motion <br />
              Exploration
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
