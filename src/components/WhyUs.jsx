import { ShieldCheck, Handshake, Layers, CreditCard } from 'lucide-react'

const points = [
  { icon: ShieldCheck, title: 'Trusted Local Service', desc: 'Serving Karaikal with pride since 2009' },
  { icon: Handshake, title: 'Family-Run Care', desc: 'Friendly, honest advice for every purchase' },
  { icon: Layers, title: 'Wide Selection', desc: 'From school to travel – bags for every journey' },
  { icon: CreditCard, title: 'Easy Payments', desc: 'Visa, MasterCard, UPI and more' },
]

export default function WhyUs() {
  return (
    <section id="about" className="relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white">Why Choose Us</h2>
            <p className="mt-4 text-slate-300">
              Since 2009 we’ve served the Karaikal community from No. 130, Near Signal, Bharathiyar Road, offering top brands, great service & local trust.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-6">
              {points.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4 p-4 rounded-xl bg-slate-900/60 border border-white/10">
                  <div className="p-2 rounded-md bg-teal-500/20 text-teal-300"><Icon className="w-5 h-5" /></div>
                  <div>
                    <h3 className="text-white font-semibold">{title}</h3>
                    <p className="text-slate-400 text-sm">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTdG9yZWZyb250fGVufDB8MHx8fDE3NjM1NDE5NTh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Storefront" className="rounded-2xl shadow-2xl border border-white/10" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  )
}
