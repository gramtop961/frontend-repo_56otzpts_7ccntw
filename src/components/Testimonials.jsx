const quotes = [
  {
    text: 'Excellent selection and very friendly service. Got a sturdy trolley for a great price!',
    name: 'Sathish K.',
  },
  {
    text: 'My kids love their new school bags. Good quality and helpful staff. Recommend!',
    name: 'Rukmini P.',
  },
  {
    text: 'Honest suggestions and lots of choices. Will definitely visit again.',
    name: 'Anees A.',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <h2 className="text-3xl font-bold text-white mb-10">What Customers Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((q) => (
            <div key={q.name} className="rounded-xl p-6 bg-slate-900/60 border border-white/10">
              <p className="text-slate-200">“{q.text}”</p>
              <p className="mt-4 text-sm text-slate-400">— {q.name}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex items-center gap-4 text-slate-300">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" className="h-6 w-auto" loading="lazy" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Mastercard-logo.png" alt="Mastercard" className="h-6 w-auto" loading="lazy" />
          <img src="https://images.unsplash.com/photo-1658480023495-dc8cae9e781e?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxVUEl8ZW58MHwwfHx8MTc2MzU0MTk1OHww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="UPI" className="h-6 w-auto" loading="lazy" />
          <span className="ml-auto text-sm">Open: 9:30 AM – 10:30 PM</span>
        </div>
      </div>
    </section>
  )
}
