// components/InsightsGrid.js
'use client'


import { insights } from '../data/landingContent';

export default function InsightsGrid() {
  return (
    <section className="bg-gray-50 border-b border-gray-200">
      {/* Top Help Section */}
      {/* <div className="bg-white py-24 text-gray-900 border-b border-gray-200">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-16 text-gray-900 leading-tight">How We Can Help</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {['Personal Wealth Management', 'Institutional Investing'].map((service, i) => (
              <div key={service} className="group cursor-pointer rounded-lg border border-gray-200 bg-gray-50 p-6 hover:shadow-lg transition">
                <div className="aspect-[16/9] bg-gray-200 mb-8 overflow-hidden rounded-lg">
                   <img src={i === 0
                     ? "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
                     : "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"}
                     className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" alt={service} />
                </div>
                <h3 className="text-2xl font-extrabold mb-4 text-gray-900 font-display group-hover:text-amber-500 transition-colors">{service}</h3>
                <p className="text-gray-500 mb-6 max-w-md text-base leading-relaxed">Tailored strategies and institutional-grade portfolio management for global impact.</p>
                <button className="border border-gray-200 px-6 py-2 text-xs font-bold uppercase tracking-widest bg-gray-900 text-white hover:bg-gray-800 rounded transition">Explore Services</button>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </section>
  );
}