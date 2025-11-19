import { Instagram, Facebook, Phone } from 'lucide-react'

export default function FooterCTA() {
  return (
    <footer id="contact" className="relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-2xl p-8 bg-gradient-to-r from-slate-900 to-slate-800 border border-white/10">
          <div className="grid md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-white">Find your perfect bag today – quality, selection, service.</h3>
              <p className="text-slate-300 mt-2">Family-run. Born out of love for travel & education.</p>
            </div>
            <div className="flex gap-3 md:justify-end">
              <a href="tel:+919000000000" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-teal-500 text-white hover:bg-teal-400"><Phone className="w-5 h-5"/> Call</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-pink-500/90 text-white hover:bg-pink-500"><Instagram className="w-5 h-5"/> Instagram</a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-500"><Facebook className="w-5 h-5"/> Facebook</a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 text-slate-400 text-sm">
          <nav className="flex gap-4">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#products" className="hover:text-white">Collections</a>
            <a href="#offers" className="hover:text-white">Offers</a>
            <a href="#visit" className="hover:text-white">Contact</a>
          </nav>
          <p>© {new Date().getFullYear()} Ayisha Bags and Luggages. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
