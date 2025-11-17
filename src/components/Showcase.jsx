export default function Showcase() {
  const projects = [
    { title: '3D Product Feature', tag: 'CGI / 3D', cover: 'https://images.unsplash.com/photo-1557180295-76eee20ae8aa?q=80&w=1600&auto=format&fit=crop' },
    { title: 'Motion Design Reel', tag: 'Motion', cover: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1600&auto=format&fit=crop' },
    { title: 'CGI Animation', tag: 'CGI', cover: 'https://images.unsplash.com/photo-1552915905-2f94a40b65ae?q=80&w=1600&auto=format&fit=crop' },
    { title: 'Brand Identity', tag: 'Branding', cover: 'https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=1600&auto=format&fit=crop' },
    { title: '2D Explainer', tag: '2D', cover: 'https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&w=1600&auto=format&fit=crop' },
    { title: 'Social Campaign', tag: 'Ads', cover: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=1600&auto=format&fit=crop' },
  ]

  return (
    <section id="showcase" className="relative bg-gradient-to-b from-black via-slate-950 to-black py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Showcase</h2>
            <p className="text-zinc-400 mt-2">3D Product Features, CGI Animation, and Motion Design</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex px-4 py-2 rounded-full bg-yellow-300 text-black font-semibold">Start a Project</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <a key={i} href="#" className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10">
              <img src={p.cover} alt={p.title} className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <div className="absolute bottom-0 p-4">
                <span className="inline-flex px-2 py-1 text-xs rounded-full bg-yellow-300 text-black font-semibold">{p.tag}</span>
                <h3 className="mt-2 text-white text-lg font-semibold">{p.title}</h3>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-yellow-300/0 group-hover:bg-yellow-300/5" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
