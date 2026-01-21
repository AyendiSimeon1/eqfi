// components/MobileCallback.js
'use client'
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function MobileCallback() {
  const router = useRouter();
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      exit={{ y: 100 }}
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden p-4"
    >
      <div className="bg-gradient-to-br from-wealth-blue via-wealth-blueLight to-amber-100 p-4 rounded-t-2xl shadow-[0_-10px_30px_rgba(0,0,0,0.2)] text-wealth-blueDark border-2 border-amber-400/60">
        <button onClick={() => router.push('/contact')} className="w-full bg-gray-500 text-white font-bold py-2 px-4 rounded-xl uppercase tracking-widest text-xs shadow-lg hover:bg-gray-600 transition-all">
          Request Call Back
        </button>
      </div>
    </motion.div>
  );
}