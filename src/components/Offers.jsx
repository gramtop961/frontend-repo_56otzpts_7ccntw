import { Percent } from 'lucide-react'

const offers = [
  { title: 'Up to 50% OFF', desc: 'Select travel trolleys – limited time', badge: 'Limited Time' },
  { title: 'School Bags from ₹499', desc: 'Great value for the new term', badge: 'Back to School' },
  { title: 'Backpacks 20–30% OFF', desc: 'Top brands, everyday carry', badge: 'Popular' },
]

export default function Offers() {
  return (
    <section id="offers" className="relative bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex items-center gap-3 mb-8">
          <span className="p-2 rounded-md bg-orange-500/20 text-orange-300"><Percent className="w-5 h-5" /></span>
          <h2 className="text-3xl font-bold text-white">Current Offers</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {offers.map((o) => (
            <div key={o.title} className="rounded-2xl p-6 bg-slate-900/70 border border-orange-400/30">
              <span className="inline-block text-xs uppercase tracking-wide text-orange-300 bg-orange-500/10 px-2 py-1 rounded">{o.badge}</span>
              <h3 className="text-white text-2xl font-bold mt-3">{o.title}</h3>
              <p className="text-slate-300 mt-2">{o.desc}</p>
              <div className="mt-4 text-sm text-slate-400">Follow us on Instagram/Facebook for live deals.</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
