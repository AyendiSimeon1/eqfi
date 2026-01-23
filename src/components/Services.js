// components/Services.js
'use client'
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

import { services } from '../data/landingContent';

export default function Services() {
  const router = useRouter();
  return (
    <section className="py-28 bg-gray-50 border-b border-gray-200">
      <div className="container mx-auto px-6">
        <h1 className="text-gray-900 text-5xl md:text-6xl font-display font-extrabold mb-6 leading-tight drop-shadow-lg">Strategies</h1>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 60, damping: 18 }}
          className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8"
        >
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 60, damping: 18, delay: 0.1 }}
              className="text-gray-900 text-5xl md:text-6xl font-display font-extrabold mb-6 leading-tight drop-shadow-lg"
            >
              Structured to Always Put Your Interests First
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 60, damping: 18, delay: 0.2 }}
              className="text-gray-500 text-2xl leading-relaxed font-medium mb-6"
            >
              Our wealth management desk offers great advice to our clients that has lead to transformations in their investment in terms of quality of assets the advices has gone on to acquire.  
We believe in quality of asset with intangible moats than in bargain hunting. 

Factors as Price to book value are important to us as value investors but we have also, in our utmost search for quality bought quality assets at premium and held them invariably in the certain hope that over time, the reward for quality asset far outstripe a bargain that is also "a fair company at a fair price " as credited to investing legend, Charlie Munger of Berkshire Hathaway Inc.
Without better-than-average returns or our culture of beating the NGX All Share, either in frontier market Nigeria or in other developed markets that we trade in,  we will not have a claim to leadership.

We are excited at what we are achieving now, and what the future brings.
            </motion.p>
          </div>
          <motion.button
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 60, damping: 18, delay: 0.3 }}
            onClick={() => router.push('/strategies')}
            className="bg-gray-900 text-white hover:bg-gray-800 px-10 py-5 rounded font-extrabold uppercase text-lg tracking-widest transition-all shadow drop-shadow-lg"
          >
            See All Services
          </motion.button>
        </motion.div>
{/* 
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 60, damping: 18, delay: 0.4 + i * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-10 border border-gray-200 bg-white hover:bg-gray-50 hover:shadow-2xl transition-all group rounded-2xl drop-shadow-lg"
            >
              <div className="w-14 h-1 bg-amber-500 mb-8 group-hover:w-full transition-all duration-500 rounded-full" />
              <h3 className="text-2xl font-extrabold text-gray-900 mb-4 font-display leading-snug group-hover:text-amber-500 transition-colors drop-shadow-lg">{item.title}</h3>
              <p className="text-gray-500 text-xl leading-relaxed font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </div> */}
      </div>
    </section>
  );
}