// components/TrustTabs.js
'use client'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tabData = [
  { id: 'client', label: 'Client-Focused', title: 'Our Clients Always Come First', text: 'We believe clients deserve simplicity and transparency. Every decision we make is rooted in your retirement goals.' },
  { id: 'experience', label: 'Investment Experience', title: 'Deep Industry Experience', text: 'Our five-member Investment Policy Committee (IPC) has over 150 combined years of industry experience, ensuring stable and long-term leadership.' },
  { id: 'approach', label: 'Global Approach', title: 'Top-Down, Global Perspective', text: 'We analyze global drivers to identify opportunities across equity and fixed-income markets worldwide.' },
];

export default function TrustTabs() {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <section className="py-20 bg-gradient-to-br from-wealth-blueLight via-wealth-blue to-wealth-blueDark">
      <div className="container mx-auto px-6">
        {/* Award Badges Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center mb-20 opacity-80">
          {['USA TODAY Best 2025', 'Kiplinger 2024', 'Newsweek Top Firm', 'Kiplinger Quality', 'Citywire 50'].map((award) => (
            <div key={award} className="h-24 border border-wealth-blue flex items-center justify-center p-4 text-center text-[10px] font-bold uppercase tracking-tighter text-wealth-blueDark bg-wealth-blueLight">
              [Logo: {award}]
            </div>
          ))}
        </div>

        <h2 className="text-3xl md:text-4xl font-display text-wealth-gold font-bold mb-10">
          Structured to Always Put Your Interests First
        </h2>

        {/* Custom Tabs */}
        <div className="border-b border-wealth-blue mb-12 flex overflow-x-auto no-scrollbar">
          {tabData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-4 text-sm font-bold uppercase tracking-widest whitespace-nowrap transition-all border-b-2 ${
                activeTab === tab.id ? 'border-wealth-gold text-wealth-blueDark' : 'border-transparent text-wealth-blue'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-4xl font-display text-wealth-blue mb-6">
                {tabData.find(t => t.id === activeTab).title}
              </h3>
              <p className="text-wealth-blueDark text-lg leading-relaxed mb-8">
                {tabData.find(t => t.id === activeTab).text}
              </p>
              <button className="bg-wealth-gold text-wealth-blueDark px-8 py-3 font-bold text-xs uppercase tracking-widest">
                Learn More
              </button>
            </motion.div>
          </AnimatePresence>

          <div className="bg-wealth-blueLight aspect-video relative overflow-hidden rounded-sm">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80')] bg-cover bg-center grayscale" />
          </div>
        </div>
      </div>
    </section>
  );
}