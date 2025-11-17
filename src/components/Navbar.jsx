import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'showcase', label: 'Showcase' },
  { id: 'services', label: 'Services' },
  { id: 'creatives', label: 'Creatives' },
  { id: 'about', label: 'About & Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const handleNav = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setOpen(false)
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-black/40 backdrop-blur-md border-b border-yellow-300/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-yellow-300 shadow-[0_0_30px_2px_rgba(224,226,32,0.6)]" />
          <span className="text-white font-semibold tracking-wide">Manticore Studio</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className="text-zinc-300 hover:text-yellow-300 transition-colors text-sm"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('showcase')}
            className="px-4 py-2 rounded-full bg-yellow-300 text-black font-semibold shadow-[0_0_25px_rgba(224,226,32,0.35)] hover:shadow-[0_0_40px_rgba(224,226,32,0.55)] transition-shadow"
          >
            View Our Showcase
          </button>
        </nav>

        <button className="md:hidden text-zinc-200" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black/80 border-t border-yellow-300/10">
          <div className="px-4 py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className="text-left w-full px-2 py-2 rounded text-zinc-200 hover:text-yellow-300 hover:bg-white/5"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => handleNav('showcase')}
              className="mt-2 px-4 py-2 rounded-full bg-yellow-300 text-black font-semibold"
            >
              View Our Showcase
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
