export default function Creatives() {
  const works = Array.from({ length: 8 }).map((_, i) => ({
    title: `Personal Exploration ${i + 1}`,
    cover: `https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1600&auto=format&fit=crop&ixid=${i}`,
  }))

  return (
    <section id="creatives" className="relative bg-gradient-to-b from-black via-indigo-950 to-black py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Creatives</h2>
            <p className="text-zinc-400 mt-2">Experimental and personal explorations — innovative by design.</p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {works.map((w, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10">
              <img src={w.cover} alt={w.title} className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-0 p-3">
                <h3 className="text-white text-sm font-semibold">{w.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
