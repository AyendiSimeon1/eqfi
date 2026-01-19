import React from 'react';
import { motion } from 'framer-motion';

const AboutWealth = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 60, damping: 18 }}
      className="py-24 bg-gray-50 border-b border-gray-200"
    >
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 60, damping: 18, delay: 0.1 }}
          className="text-5xl md:text-6xl font-display font-extrabold mb-8 text-gray-900 leading-tight drop-shadow-lg"
        >
          About us / Who we are
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 60, damping: 18, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-12 text-2xl text-gray-500 leading-relaxed font-medium"
        >
          {require('../data/landingContent').about.description}
        </motion.p>
        <div className="flex flex-wrap justify-center gap-10 mt-10">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 60, damping: 18, delay: 0.3 }}
            className="bg-white border border-gray-200 rounded-2xl shadow-xl p-10 w-72"
          >
            <div className="text-amber-500 text-4xl font-extrabold mb-3 font-display">$2B+</div>
            <div className="text-gray-900 font-semibold text-xl">Assets Managed</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 60, damping: 18, delay: 0.4 }}
            className="bg-white border border-gray-200 rounded-2xl shadow-xl p-10 w-72"
          >
            <div className="text-amber-500 text-4xl font-extrabold mb-3 font-display">30+</div>
            <div className="text-gray-900 font-semibold text-xl">Global Partners</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 60, damping: 18, delay: 0.5 }}
            className="bg-white border border-gray-200 rounded-2xl shadow-xl p-10 w-72"
          >
            <div className="text-amber-500 text-4xl font-extrabold mb-3 font-display">99%</div>
            <div className="text-gray-900 font-semibold text-xl">Client Satisfaction</div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutWealth;
