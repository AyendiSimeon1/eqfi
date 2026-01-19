"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


import { testimonials } from '../data/landingContent';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => setCurrent((current + 1) % testimonials.length);
  const prevTestimonial = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 bg-gray-50 border-b border-gray-200">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-12 text-gray-900 leading-tight">Testimonials</h2>
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-xl border border-gray-200 bg-white shadow-lg"
          >
            <p className="text-lg md:text-xl italic mb-4 text-gray-900 leading-relaxed">"{testimonials[current].quote}"</p>
            <div className="font-bold text-amber-500 text-base font-display">{testimonials[current].name}</div>
            <div className="text-sm text-gray-500 mt-1">{testimonials[current].title}</div>
          </motion.div>
        </AnimatePresence>
        <div className="flex justify-center gap-4 mt-8">
          <button onClick={prevTestimonial} className="px-6 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 transition font-semibold text-sm">Prev</button>
          <button onClick={nextTestimonial} className="px-6 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 transition font-semibold text-sm">Next</button>
        </div>
      </div>
    </section>
  );
}
