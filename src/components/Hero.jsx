import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative h-[88vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/90 pointer-events-none" />

      <div className="relative h-full max-w-7xl mx-auto px-6 flex items-center">
        <div className="max-w-2xl">
          <p className="text-yellow-300/90 text-sm tracking-widest uppercase mb-4">Manticore Studio</p>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-white leading-tight drop-shadow-[0_0_20px_rgba(224,226,32,0.1)]">
            The Global Leader in Creative Visual Storytelling
          </h1>
          <p className="mt-6 text-zinc-300">
            Motion Design, 3D Animation, CGI, Branding, and Advertising — crafted with a friendly, professional touch.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#showcase" className="px-6 py-3 rounded-full bg-yellow-300 text-black font-semibold shadow-[0_0_25px_rgba(224,226,32,0.35)] hover:shadow-[0_0_45px_rgba(224,226,32,0.65)] transition-shadow">
              View Our Showcase
            </a>
            <a href="#services" className="px-6 py-3 rounded-full border border-zinc-700 text-white hover:border-yellow-300 hover:text-yellow-300 transition-colors">
              What We Do
            </a>
          </div>
        </div>
      </div>

      {/* Subtle starlight/particle layer */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -inset-32 opacity-40" aria-hidden>
          <div className="stars" />
        </div>
      </div>
      <style>{`
        .stars { position: absolute; width: 200%; height: 200%; background: radial-gradient(circle at 20% 30%, rgba(224,226,32,0.25) 0, transparent 40%), radial-gradient(circle at 80% 20%, rgba(224,226,32,0.18) 0, transparent 35%), radial-gradient(circle at 40% 70%, rgba(224,226,32,0.12) 0, transparent 45%), radial-gradient(circle at 70% 80%, rgba(224,226,32,0.15) 0, transparent 45%); animation: drift 30s linear infinite; }
        @keyframes drift { 0% { transform: translate3d(0,0,0) scale(1); } 50% { transform: translate3d(-5%, -5%, 0) scale(1.05); } 100% { transform: translate3d(0,0,0) scale(1); } }
      `}</style>
    </section>
  )
}
