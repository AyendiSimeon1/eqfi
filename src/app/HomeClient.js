"use client";
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import MobileCallback from '@/components/MobileCallback';
import Header from '@/components/Header';
import Slider from '@/components/Slider';
import Testimonials from '@/components/Testimonials';
import AboutWealth from '@/components/AboutWealth';
import InsightGrid from '@/components/InsightGrid';
import TrustTab from '@/components/TrustTab';
import { motion } from 'framer-motion';

export default function HomeClient() {
  return (
    <main className="min-h-screen bg-wealth-blueLight font-body">
      {/* Navigation */}
      <motion.nav
        className="fixed top-0 w-full z-50 bg-wealth-blueDark/95 backdrop-blur-md border-b border-wealth-blue py-4 px-6 flex justify-between items-center shadow-lg"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="text-wealth-blue font-display text-2xl font-bold tracking-tighter">
           <span className="text-wealth-gold">EQFI</span>
        </div>
        <div className="hidden md:flex gap-8 text-wealth-blueLight text-sm font-medium uppercase tracking-widest">
          <a href="#" className="hover:text-wealth-gold transition">Who We Are</a>
          <a href="#" className="hover:text-wealth-gold transition">Strategies</a>
          <a href="#" className="hover:text-wealth-gold transition">Insights</a>
          <a href="#" className="bg-wealth-blue px-4 py-2 text-white rounded shadow hover:bg-wealth-gold hover:text-wealth-blueDark transition">Client Login</a>
        </div>
      </motion.nav>

      {/* Integrated Header component */}
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}>
        <Header />
      </motion.div>

      {/* Animated Hero section */}
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}>
        <Hero />
      </motion.div>

      {/* About/Trust/Partners section */}
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }}>
        <AboutWealth />
      </motion.div>

      {/* Services section (existing) */}
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.4 }}>
        <Services />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.7 }}>
        <TrustTab />
      </motion.div>

      {/* Insights Grid section */}
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.5 }}>
        <InsightGrid />
      </motion.div>

    
      {/* Strategies Slider section */}
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.6 }}>
        <Slider />
      </motion.div>

      {/* Trust Tab section */}
      

      {/* Testimonials section */}
      {/* <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.8 }}>
        <Testimonials />
      </motion.div> */}

      {/* Footer / Contact */}
      <motion.footer
        className="bg-gradient-to-r from-wealth-blue to-wealth-blueDark py-20 text-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.9 }}
      >
        <div className="container mx-auto px-6 text-center">
          <p className="mb-4 text-wealth-blueLight">© 2025 Citadel Fisher Wealth Group. All rights reserved.</p>
          <div className="flex justify-center gap-6 text-sm">
            <a href="#" className="hover:text-wealth-gold text-wealth-blueLight transition">Privacy Policy</a>
            <a href="#" className="hover:text-wealth-gold text-wealth-blueLight transition">Disclosures</a>
            <a href="#" className="hover:text-wealth-gold text-wealth-blueLight transition">Sitemap</a>
          </div>
        </div>
      </motion.footer>

      {/* Interactive Mobile Elements */}
      {/* <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 1 }}>
        <MobileCallback />
      </motion.div> */}
    </main>
  );
}
