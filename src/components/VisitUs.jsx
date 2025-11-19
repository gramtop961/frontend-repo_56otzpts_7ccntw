import { MapPin, Phone, MessageCircle, Navigation } from 'lucide-react'

export default function VisitUs() {
  return (
    <section id="visit" className="relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-white">Visit Us</h2>
            <p className="mt-3 text-slate-300">Near Signal, Bharathiyar Road, Karaikal Bazaar, Karaikal – 609602.</p>

            <div className="mt-6 space-y-3 text-slate-200">
              <p className="flex items-center gap-2"><MapPin className="w-5 h-5 text-teal-300" /> No. 130, Near Signal, Bharathiyar Road, Karaikal</p>
              <a href="tel:+919000000000" className="flex items-center gap-2 hover:text-white"><Phone className="w-5 h-5 text-teal-300" /> +91 90000 00000</a>
              <a href="https://wa.me/919000000000" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white"><MessageCircle className="w-5 h-5 text-teal-300" /> WhatsApp Us</a>
            </div>

            <div className="mt-8 flex gap-4">
              <a href="https://maps.google.com?q=Ayisha+Bags+and+Luggages+Karaikal" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-teal-500 text-white hover:bg-teal-400"><Navigation className="w-5 h-5" /> Get Directions</a>
              <a href="#contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-md border border-white/20 text-white hover:bg-white/10">Contact</a>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-white/10">
            <img src="https://images.unsplash.com/photo-1552083375-1447ce886485?q=80&w=1600&auto=format&fit=crop" alt="Store location" className="w-full h-96 object-cover" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  )
}
