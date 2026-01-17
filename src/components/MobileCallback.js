// components/MobileCallback.js
'use client'
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MobileCallback() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // If user scrolls more than 600px (roughly 2nd section)
      if (window.scrollY > 600) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden p-4"
        >
          <div className="bg-wealth-blue p-6 rounded-t-xl shadow-[0_-10px_30px_rgba(0,0,0,0.2)] text-wealth-blueLight">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-wealth-gold">Request a Call Back</h3>
              <button onClick={() => setShow(false)} className="text-wealth-blueLight">×</button>
            </div>
            <p className="text-sm opacity-90 mb-6">Speak with a wealth advisor today about your portfolio.</p>
            <input 
              type="tel" 
              placeholder="Your Phone Number" 
              className="w-full p-3 rounded bg-wealth-blueLight/20 border border-wealth-blue placeholder:text-wealth-blue/60 mb-3 text-wealth-blueLight outline-none"
            />
            <button className="w-full bg-wealth-gold text-wealth-blueDark font-bold py-3 rounded uppercase tracking-widest text-sm">
              Contact Me
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}