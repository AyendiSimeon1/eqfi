// components/InsightsGrid.js
'use client'

const insights = [
  { category: 'EXPERT COMMENTARY', title: 'This Week in Review | Fed Independence', date: 'Jan 16, 2025' },
  { category: 'ECONOMICS', title: 'Fretting Over Part-Time Work Trends', date: 'Jan 16, 2025' },
  { category: 'POLITICS', title: 'Elections Incoming: Global Impacts', date: 'Jan 14, 2025' },
];

export default function InsightsGrid() {
  return (
    <section className="bg-gray-50 border-b border-gray-200">
      {/* Top Help Section */}
      <div className="bg-white py-24 text-gray-900 border-b border-gray-200">
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
      </div>

      {/* Media Feed */}
      <div className="container mx-auto px-6 py-24">
        <div className="flex justify-between items-center mb-12 border-b border-gray-200 pb-4">
          <h2 className="text-3xl font-display font-extrabold text-gray-900">Insights & Media</h2>
          <button className="text-amber-500 font-bold text-sm uppercase">See More →</button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {insights.map((item, i) => (
            <div key={i} className="group rounded-lg border border-gray-200 bg-white p-6 hover:shadow-lg transition">
              <div className="aspect-video bg-gray-100 mb-4 overflow-hidden relative rounded-lg">
                <div className="absolute top-2 left-2 bg-gray-900 text-[10px] text-amber-500 px-2 py-1 font-bold z-10 rounded">{item.category}</div>
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <h4 className="text-lg font-extrabold text-gray-900 leading-snug group-hover:text-amber-500 transition-colors font-display">{item.title}</h4>
              <p className="text-gray-500 text-xs mt-2 uppercase">{item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}