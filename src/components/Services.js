// components/Services.js
'use client'
import { motion } from 'framer-motion';

const services = [
  { title: "Wealth Management", desc: "Holistic planning for high-net-worth individuals." },
  { title: "Investment Management", desc: "Direct access to institutional-grade portfolios." },
  { title: "Inheritance Planning", desc: "Preserving your legacy for the next generation." },
  { title: "Portfolio Management", desc: "Active, data-driven equity and fixed-income strategies." }
];

export default function Services() {
  return (
    <section className="py-24 bg-gray-50 border-b border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-gray-900 text-4xl md:text-5xl font-display font-extrabold mb-4 leading-tight">Structured to Always Put Your Interests First</h2>
            <p className="text-gray-500 text-lg leading-relaxed">Our five-member Investment Policy Committee brings 150+ years of combined experience.</p>
          </div>
          <button className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-4 rounded font-bold uppercase text-sm tracking-widest transition-all shadow">
            See All Services
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 border border-gray-200 bg-white hover:bg-gray-50 hover:shadow-2xl transition-all group rounded-lg"
            >
              <div className="w-12 h-1 bg-amber-500 mb-6 group-hover:w-full transition-all duration-500 rounded-full" />
              <h3 className="text-xl font-extrabold text-gray-900 mb-3 font-display leading-snug group-hover:text-amber-500 transition-colors">{item.title}</h3>
              <p className="text-gray-500 text-base leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}