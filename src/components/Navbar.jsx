import { useState } from 'react'
import { Menu, X, ShoppingBag } from 'lucide-react'

const links = [
  { href: '#about', label: 'Why Us' },
  { href: '#products', label: 'Products' },
  { href: '#offers', label: 'Offers' },
  { href: '#testimonials', label: 'Reviews' },
  { href: '#visit', label: 'Visit Us' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-slate-900/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#hero" className="flex items-center gap-2 text-white font-semibold">
            <div className="p-2 rounded-lg bg-teal-500/20 text-teal-300">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <span>Ayisha Bags & Luggages</span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="text-slate-200 hover:text-white transition-colors">
                {l.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center px-4 py-2 rounded-md bg-teal-500 text-white hover:bg-teal-400 transition-colors">
              Contact
            </a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2">
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-900/90">
          <div className="px-4 py-3 space-y-2">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-slate-200 hover:text-white">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="block text-white bg-teal-500 hover:bg-teal-400 px-3 py-2 rounded-md text-center">
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
