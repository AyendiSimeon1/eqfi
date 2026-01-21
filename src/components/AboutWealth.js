import React from 'react';
import { motion } from 'framer-motion';

const AboutWealth = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 60, damping: 18 }}
      className="py-24 px-8 md:px-24 bg-white"
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 60, damping: 18, delay: 0.1 }}
          className="text-5xl md:text-6xl font-serif font-extrabold mb-8 text-[#1e4ba1] leading-tight"
        >
          About us / Who we are
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 60, damping: 18, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-12 text-2xl text-gray-600 leading-relaxed"
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
            <div className="text-[#1e4ba1] text-4xl font-extrabold mb-3 font-serif">$2B+</div>
            <div className="text-[#1e4ba1] font-semibold text-xl">Assets Managed</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 60, damping: 18, delay: 0.4 }}
            className="bg-white border border-gray-200 rounded-2xl shadow-xl p-10 w-72"
          >
            <div className="text-[#1e4ba1] text-4xl font-extrabold mb-3 font-serif">30+</div>
            <div className="text-[#1e4ba1] font-semibold text-xl">Global Partners</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 60, damping: 18, delay: 0.5 }}
            className="bg-white border border-gray-200 rounded-2xl shadow-xl p-10 w-72"
          >
            <div className="text-[#1e4ba1] text-4xl font-extrabold mb-3 font-serif">99%</div>
            <div className="text-[#1e4ba1] font-semibold text-xl">Client Satisfaction</div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutWealth;
