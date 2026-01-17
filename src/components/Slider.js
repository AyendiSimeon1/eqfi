"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    title: 'Global Equities',
    description: 'Access top-performing global equity strategies tailored for growth.'
  },
  {
    title: 'US Equity',
    description: 'Invest in leading US companies with proven track records.'
  },
  {
    title: 'Nigeria Equity',
    description: 'Unlock emerging market opportunities in Nigeria.'
  },
  {
    title: 'Fixed Income',
    description: 'Stabilize your portfolio with premium fixed income products.'
  },
  {
    title: 'Quant',
    description: 'Leverage data-driven quant strategies for alpha.'
  },
  {
    title: 'Emerging Markets',
    description: 'Diversify with high-growth emerging market assets.'
  }
];

export default function Slider() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % slides.length), 3500);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((current + 1) % slides.length);
  const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full max-w-2xl mx-auto my-12 bg-gradient-to-r from-wealth-blue to-wealth-blueDark rounded-xl shadow-lg overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
          className="p-8 text-center"
        >
          <h3 className="text-2xl font-display text-wealth-gold mb-2">
            {slides[current].title}
          </h3>
          <p className="text-wealth-blueLight mb-4">
            {slides[current].description}
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <button onClick={prevSlide} className="px-4 py-2 bg-wealth-gold text-wealth-blueDark rounded hover:bg-wealth-accent transition">Prev</button>
            <button onClick={nextSlide} className="px-4 py-2 bg-wealth-gold text-wealth-blueDark rounded hover:bg-wealth-accent transition">Next</button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
