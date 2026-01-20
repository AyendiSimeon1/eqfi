// components/MobileCallback.js
'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function MobileCallback() {
  const [phone, setPhone] = useState("");
  const [toast, setToast] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setToast("Thank you! We will contact you soon.");
    setPhone("");
    setTimeout(() => setToast(""), 3000);
  };
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      exit={{ y: 100 }}
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden p-4"
    >
      <div className="bg-gradient-to-br from-wealth-blue via-wealth-blueLight to-amber-100 p-6 rounded-t-2xl shadow-[0_-10px_30px_rgba(0,0,0,0.2)] text-wealth-blueDark border-2 border-amber-400/60">
        <h3 className="text-xl font-bold text-wealth-gold mb-1 text-center drop-shadow">Request a Call Back</h3>
        <p className="text-sm opacity-90 mb-4 text-center">Speak with a wealth advisor today about your portfolio.</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <label htmlFor="phone-mobile" className="text-xs font-semibold text-wealth-blue">Phone Number</label>
          <input
            id="phone-mobile"
            type="tel"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            placeholder="Your Phone Number"
            required
            className="w-full p-3 rounded-xl bg-white border-2 border-amber-300 focus:border-amber-500 placeholder:text-wealth-blue/60 text-wealth-blueDark outline-none text-base shadow"
          />
          <button type="submit" className="w-full bg-gray-500 text-white font-bold py-3 rounded-xl uppercase tracking-widest text-sm shadow-lg hover:bg-gray-600 transition-all mt-2">
            Contact Me
          </button>
        </form>
        {toast && (
          <div className="absolute left-1/2 -translate-x-1/2 bottom-[-60px] bg-amber-500 text-white px-6 py-3 rounded-xl shadow-lg font-semibold text-center animate-fade-in-out z-50">
            {toast}
          </div>
        )}
      </div>
    </motion.div>
  );
}