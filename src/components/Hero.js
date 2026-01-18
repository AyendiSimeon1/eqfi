// components/Hero.js
'use client'
import { motion } from 'framer-motion';


import { useEffect, useState } from 'react';

function useCountUp(to, duration = 2, prefix = '', suffix = '') {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    let end = typeof to === 'number' ? to : parseInt(to.toString().replace(/[^\d]/g, ''));
    if (isNaN(end)) end = 0;
    let startTime;
    function animate(ts) {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * (end - start) + start));
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(end);
    }
    requestAnimationFrame(animate);
    // eslint-disable-next-line
  }, [to, duration]);
  return `${prefix}${count.toLocaleString()}${suffix}`;
}

const StatBox = ({ label, value }) => {
  let displayValue = value;
  if (typeof value === 'object' && value.countUp) {
    displayValue = useCountUp(value.to, value.duration, value.prefix, value.suffix);
  }
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border-l-2 border-amber-500 pl-6 py-2"
    >
      <div className="text-4xl md:text-6xl font-bold text-gray-900 mb-2">{displayValue}</div>
      <div className="text-amber-500 uppercase tracking-widest text-xs font-semibold">{label}</div>
    </motion.div>
  );
};

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gray-50 overflow-hidden pt-20 border-b border-gray-200">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
        poster="/investment.jpg"
      >
        <source src="/hero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Abstract Art Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none z-10">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-amber-500 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] rounded-full bg-gray-900 blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 60, damping: 18 }}
            className="text-5xl md:text-8xl font-display text-gray-900 leading-tight mb-8 drop-shadow-lg"
          >
            Turning <span className="text-amber-500 italic">Ambition</span> <br /> 
            Into Global <span className="underline decoration-amber-500">Returns</span>.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 60, damping: 18 }}
            className="text-gray-500 text-lg md:text-xl max-w-xl mb-12"
          >
            We combine quantitative precision with human insight to manage wealth for the world's most sophisticated investors.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
          <StatBox label="Assets Managed" value={{ countUp: true, to: 6500000, duration: 2, prefix: '$', suffix: 'M+' }} />
          <StatBox label="Investment Professionals" value={{ countUp: true, to: 265, duration: 1.5, suffix: '+' }} />
          <StatBox label="Countries Represented" value={{ countUp: true, to: 100, duration: 1.5, suffix: '+' }} />
        </div>
      </div>
    </section>
  );
}