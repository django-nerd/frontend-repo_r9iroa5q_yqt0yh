export default function Services() {
  const services = [
    { name: '3D Product Features', desc: 'Photorealistic 3D visuals that bring products to life.' },
    { name: '2D Explainer Video', desc: 'Clear, engaging narratives that simplify complex ideas.' },
    { name: 'Brand Identity Design', desc: 'Logos, color systems, and brand worlds that resonate.' },
    { name: 'Social Media Campaigns', desc: 'High-impact content engineered for shareability.' },
    { name: 'CGI Animation', desc: 'Cinematic visuals with advanced simulations and FX.' },
    { name: '2D & 3D Animation', desc: 'From cel to procedural, motion that moves people.' },
  ]

  return (
    <section id="services" className="relative bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-10">What We Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="group p-6 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-all">
              <div className="w-10 h-10 rounded-lg bg-yellow-300/20 border border-yellow-300/30 group-hover:bg-yellow-300/30" />
              <h3 className="mt-4 text-white text-lg font-semibold">{s.name}</h3>
              <p className="mt-2 text-zinc-400">{s.desc}</p>
              <div className="mt-4 h-px bg-gradient-to-r from-transparent via-yellow-300/60 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
