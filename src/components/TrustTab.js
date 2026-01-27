// components/TrustTabs.js
'use client'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { leadership } from '../data/landingContent';
const tabData = [
  // { id: 'leadership', label: 'Leadership', title: leadership[0].title, text: leadership[0].bio },
  { id: 'client', label: 'Client-Focused', title: 'Our Clients Always Come First', text: 'We believe clients deserve simplicity and transparency. Every decision we make is rooted in your goals.' },
  { id: 'approach', label: 'Global Approach', title: 'Top-Down, Global Perspective', text: 'We analyze global drivers to identify opportunities across equity and fixed-income markets worldwide.' },
];

const awardImages = [
  'https://cdn-icons-png.flaticon.com/512/1828/1828884.png', // trophy
  'https://cdn-icons-png.flaticon.com/512/3135/3135715.png', // medal
  'https://cdn-icons-png.flaticon.com/512/190/190411.png', // star
  'https://cdn-icons-png.flaticon.com/512/616/616494.png', // badge
  'https://cdn-icons-png.flaticon.com/512/1057/1057089.png', // ribbon
];

export default function TrustTabs() {
  const [activeTab, setActiveTab] = useState('client');

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-gray-200 to-gray-100 border-b border-gray-200">
      <div className="container mx-auto px-6">
        {/* Award Badges Grid */}
        {/* <div className="grid grid-cols-2 md:grid-cols-5 gap-10 items-center mb-20">
          {['USA TODAY Best 2025', 'Kiplinger 2024', 'Newsweek Top Firm', 'Kiplinger Quality', 'Citywire 50'].map((award, i) => (
            <motion.div
              key={award}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 60, damping: 18, delay: 0.1 * i }}
              className="h-28 border border-gray-200 flex flex-col items-center justify-center p-4 text-center rounded-xl bg-white shadow-lg"
            >
              <img 
                src={awardImages[i]}
                alt={award + ' logo'} 
                className="h-12 mb-3 object-contain drop-shadow-lg" 
                loading="lazy"
              />
              <span className="text-gray-900 font-extrabold text-base md:text-lg uppercase tracking-tight mb-1">{award}</span>
            </motion.div>
          ))}
        </div> */}

        <h2 className="text-2xl md:text-3xl lg:text-4xl font-display text-amber-500 font-light mb-4 md:mb-6 drop-shadow-lg">
          Structured to Always Put Your Interests First
        </h2>

        {/* Custom Tabs */}
        <div className="border-b border-gray-200 mb-14 flex overflow-x-auto no-scrollbar">
          {tabData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-5 text-lg font-extrabold uppercase tracking-widest whitespace-nowrap transition-all border-b-4 ${
                activeTab === tab.id ? 'border-amber-500 text-gray-900 bg-gray-100' : 'border-transparent text-gray-500'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="grid md:grid-cols-2 gap-16 items-center min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 60 }}
              transition={{ type: 'spring', stiffness: 60, damping: 18 }}
            >
              {(() => {
                const tab = tabData.find(t => t.id === activeTab);
                if (!tab) return <div className="text-red-500">Tab not found</div>;
                return <>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-display text-gray-900 font-light mb-4 md:mb-6 drop-shadow-lg">{tab.title}</h3>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed font-light mb-10">{tab.text}</p>
                </>;
              })()}
              <button className="bg-amber-500 text-black px-10 py-4 font-extrabold text-lg uppercase tracking-widest rounded shadow drop-shadow-lg">
                Learn More
              </button>
            </motion.div>
          </AnimatePresence>

          <div className="bg-gray-100 aspect-video relative overflow-hidden rounded-xl shadow-lg">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80')] bg-cover bg-center grayscale" />
          </div>
        </div>
      </div>
    </section>
  );
}