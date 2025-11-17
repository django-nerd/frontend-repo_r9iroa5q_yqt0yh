import { useState } from 'react'

export default function AboutContact() {
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      // simple demo submission to backend hello route
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/hello`)
      if (!res.ok) throw new Error('Request failed')
      setStatus('Thanks! We\'ll get back to you shortly.')
      e.currentTarget.reset()
    } catch (err) {
      setStatus('Something went wrong. Please try again later.')
    }
  }

  return (
    <section id="about" className="relative bg-black py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">About Us</h2>
          <p className="mt-4 text-zinc-300">
            Founded in 2024, we partner with brands to bring their visions to life. Our mission is to empower brands and set new standards in motion design, CGI, and animation.
          </p>
          <ul className="mt-6 space-y-2 text-zinc-300">
            <li>• Creativity • Collaboration • Innovation</li>
          </ul>

          <div className="mt-8">
            <p className="text-zinc-400 text-sm">Follow our work:</p>
            <div className="mt-3 flex items-center gap-3">
              <a href="#" className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-200 hover:text-yellow-300">Behance</a>
              <a href="https://www.instagram.com/manticorestudio_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-200 hover:text-yellow-300" target="_blank" rel="noreferrer">Instagram</a>
            </div>
          </div>
        </div>

        <div id="contact">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="text-2xl font-semibold text-white">Contact</h3>
            <p className="text-zinc-400 mt-1">Let\'s build something extraordinary together.</p>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <input name="name" required placeholder="Your name" className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-yellow-300/60" />
              <input name="email" type="email" required placeholder="Email address" className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-yellow-300/60" />
              <textarea name="message" rows="4" required placeholder="Tell us about your project" className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-yellow-300/60" />
              <button className="w-full px-5 py-3 rounded-full bg-yellow-300 text-black font-semibold shadow-[0_0_25px_rgba(224,226,32,0.35)] hover:shadow-[0_0_45px_rgba(224,226,32,0.65)] transition-shadow">Send Message</button>
            </form>
            {status && <p className="mt-4 text-sm text-zinc-300">{status}</p>}

            <div className="mt-8 text-zinc-400 text-sm">
              <p>anirbanani.chanda00@gmail.com</p>
              <p>+91 9073495717 • +91 9831012176</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="mt-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-8 text-zinc-400 text-sm flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Manticore Studio. All rights reserved.</p>
          <p>Built with heart among the stars.</p>
        </div>
      </footer>
    </section>
  )
}
