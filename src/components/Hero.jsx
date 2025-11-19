import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden bg-slate-950">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1545231097-cbd796f1d91b?q=80&w=2000&auto=format&fit=crop"
          alt="Premium luggage and backpacks"
          className="w-full h-full object-cover opacity-30"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-950" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Ayisha Bags and Luggages
          </h1>
          <p className="mt-4 text-lg text-slate-200 max-w-xl">
            Your trusted bag destination in Karaikal. School bags, travel luggage, backpacks & more – quality you can trust, family-business care.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#products" className="inline-flex items-center px-6 py-3 rounded-md bg-teal-500 text-white font-semibold hover:bg-teal-400 transition-colors">
              Explore Collection
            </a>
            <a href="#visit" className="inline-flex items-center px-6 py-3 rounded-md border border-white/20 text-white hover:bg-white/10">
              Visit Store
            </a>
          </div>
          <p className="mt-6 text-slate-300">
            In the heart of Karaikal since 2009.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="relative">
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=1200&auto=format&fit=crop" alt="Travel luggage" className="rounded-xl shadow-2xl border border-white/10" loading="lazy" />
            <img src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop" alt="Backpacks for school" className="rounded-xl shadow-2xl border border-white/10" loading="lazy" />
            <img src="https://images.unsplash.com/photo-1637762647056-998cc4715de7?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxPZmZpY2UlMjBiYWdzfGVufDB8MHx8fDE3NjM1NDE5NTh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Office bags" className="rounded-xl shadow-2xl border border-white/10 col-span-2" loading="lazy" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
