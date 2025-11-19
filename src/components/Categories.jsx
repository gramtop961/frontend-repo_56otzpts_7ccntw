const categories = [
  {
    title: 'School Bags & Kids’ Backpacks',
    desc: 'Durable, comfy, and colourful designs for every age.',
    img: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Travel Luggage & Trolleys',
    desc: 'Lightweight, sturdy suitcases for every getaway.',
    img: 'https://images.unsplash.com/photo-1541417904950-b855846fe074?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Office Bags & Everyday Carry',
    desc: 'Sleek laptop bags, totes and messenger styles.',
    img: 'https://images.unsplash.com/photo-1536148935331-408321065b18?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Accessories & Mega Offers',
    desc: 'Pouches, rain covers, locks and seasonal deals.',
    img: 'https://images.unsplash.com/photo-1530650044200-98d6f831c2ec?q=80&w=1200&auto=format&fit=crop',
  },
]

export default function Categories() {
  return (
    <section id="products" className="relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex items-end justify-between gap-4 mb-10">
          <h2 className="text-3xl font-bold text-white">Product Highlights</h2>
          <a href="#contact" className="text-teal-300 hover:text-teal-200">See all collections →</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((c) => (
            <a key={c.title} href="#offers" className="group rounded-xl overflow-hidden bg-slate-900/60 border border-white/10 hover:border-teal-400/40 transition-all">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={c.img} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="p-4">
                <h3 className="text-white font-semibold">{c.title}</h3>
                <p className="text-slate-400 text-sm mt-1">{c.desc}</p>
                <span className="inline-block mt-3 text-teal-300 group-hover:text-teal-200">See collection →</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
