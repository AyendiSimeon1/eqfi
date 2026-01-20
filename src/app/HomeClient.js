'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import MobileCallback from '../components/MobileCallback';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import AboutWealth from '../components/AboutWealth';
import InsightGrid from '../components/InsightGrid';
import Testimonials from '../components/Testimonials';
import TrustTab from '../components/TrustTab';

function RequestCallbackForm() {
  const [phone, setPhone] = useState("");
  const [toast, setToast] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setToast("Thank you! We will contact you soon.");
    setPhone("");
    setTimeout(() => setToast(""), 3000);
  };
  return (
    <div className="max-w-md mx-auto relative">
      <div className="bg-gradient-to-br from-wealth-blue via-wealth-blueLight to-amber-100 p-10 rounded-3xl shadow-2xl text-wealth-blueDark border-2 border-amber-400/60">
        <h3 className="text-3xl font-bold text-wealth-gold mb-2 text-center drop-shadow">Request a Call Back</h3>
        <p className="text-base opacity-90 mb-6 text-center">Speak with a wealth advisor today about your portfolio.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className="text-sm font-semibold text-wealth-blue">Phone Number</label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              placeholder="Your Phone Number"
              required
              className="w-full p-4 rounded-xl bg-white border-2 border-amber-300 focus:border-amber-500 placeholder:text-wealth-blue/60 text-wealth-blueDark outline-none text-lg shadow"
            />
          </div>
          <button type="submit" className="w-full bg-gray-500 text-white font-bold py-4 rounded-xl uppercase tracking-widest text-base shadow-lg hover:bg-gray-600 transition-all">
            Contact Me
          </button>
        </form>
        {toast && (
          <div className="absolute left-1/2 -translate-x-1/2 bottom-[-60px] bg-amber-500 text-white px-6 py-3 rounded-xl shadow-lg font-semibold text-center animate-fade-in-out z-50">
            {toast}
          </div>
        )}
      </div>
    </div>
  );
}

export default function HomeClient() {
  return (
    <main className="min-h-screen bg-wealth-blueLight font-body">
      {/* Request Call Back Floating Button (Desktop) */}
      <div className="hidden md:block fixed bottom-8 right-8 z-[100]">
        <button
          className="bg-gray-500 text-white font-bold py-4 px-8 rounded-full shadow-2xl text-lg uppercase tracking-widest hover:bg-gray-600 transition-all border-4 border-gray-400 outline outline-4 outline-gray-400/60"
          style={{ boxShadow: '0 8px 32px 0 rgba(107, 114, 128, 0.25), 0 1.5px 8px 0 rgba(0,0,0,0.10)' }}
          onClick={() => {
            const el = document.getElementById('request-callback-form');
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }}
        >
          <span className="drop-shadow-lg">Request Call Back</span>
        </button>
      </div>

      {/* Request Call Back Bar (Mobile) */}
      <div className="md:hidden">
        <MobileCallback />
      </div>
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

      {/* Request Call Back Floating Button (Desktop) */}
      <div className="hidden md:block fixed bottom-8 right-8 z-[100]">
        <button
          className="bg-wealth-gold text-wealth-blueDark font-bold py-4 px-8 rounded-full shadow-2xl text-lg uppercase tracking-widest hover:bg-yellow-400 transition-all border-4 border-white"
          onClick={() => {
            const el = document.getElementById('request-callback-form');
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }}
        >
          Request Call Back
        </button>
      </div>

      {/* Animated Hero section */}
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}>
        <Hero />
      </motion.div>

      {/* About/Trust/Partners section */}
      <motion.div id="who-we-are" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }}>
        <AboutWealth />
      </motion.div>

      {/* Request Call Back Form Anchor (Desktop) */}
      <div id="request-callback-form" className="hidden md:block pt-32">
        <RequestCallbackForm />
      </div>

      {/* Services/Strategies section */}
      <motion.div id="strategies" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.4 }}>
        <Services />
      </motion.div>
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.7 }}>
        <TrustTab />
      </motion.div>

      {/* Insights Grid section */}
      <motion.div id="insights" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.5 }}>
        <InsightGrid />
      </motion.div>

      {/* Careers section placeholder */}
      <motion.div id="careers" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.8 }}>
        <div className="py-32 text-center text-3xl text-gray-400 font-bold">Careers section coming soon</div>
      </motion.div>

    
      {/* Strategies Slider section */}
      {/* <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.6 }}>
        <Slider />
      </motion.div> */}

      {/* Trust Tab section */}
      

      {/* Testimonials section */}
      {/* <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.8 }}>
        <Testimonials />
      </motion.div> */}

      {/* Footer / Contact */}
     <motion.footer
  className="bg-[#0B0F14] text-gray-300 border-t border-white/5"
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
  <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-12 gap-12">

    {/* Brand */}
    <div className="md:col-span-4 space-y-5">
        <span className="text-2xl md:text-3xl font-extrabold tracking-wide text-white">EQFI</span>
        <p className="text-base md:text-lg leading-relaxed text-gray-400 max-w-sm">
          Citadel Fisher Wealth Group provides global investment solutions and
          long-term wealth strategies for institutional and private investors.
        </p>
    </div>

    {/* Company */}
    <div className="md:col-span-2">
        <p className="text-base md:text-lg font-bold tracking-widest text-gray-400 uppercase mb-5">
          Company
        </p>
        <ul className="space-y-3 text-base md:text-lg">
          {["About", "Leadership", "Careers", "Insights"].map((item) => (
            <li key={item}>
              <a href="#" className="hover:text-white transition">
                {item}
              </a>
            </li>
          ))}
        </ul>
    </div>

    {/* Legal */}
    <div className="md:col-span-2">
        <p className="text-base md:text-lg font-bold tracking-widest text-gray-400 uppercase mb-5">
          Legal
        </p>
        <ul className="space-y-3 text-base md:text-lg">
          {["Privacy Policy", "Disclosures", "Terms", "Sitemap"].map((item) => (
            <li key={item}>
              <a href="#" className="hover:text-white transition">
                {item}
              </a>
            </li>
          ))}
        </ul>
    </div>

    {/* Contact */}
    <div className="md:col-span-4 space-y-4">
        <p className="text-base md:text-lg font-bold tracking-widest text-gray-400 uppercase mb-5">
          Contact
        </p>

        <div className="text-base md:text-lg space-y-2 text-gray-400">
          <p>Global Offices</p>
          <p>+234 906 485 2460</p>
          <p>info@eqfi.com</p>
          <p>Mon–Fri, 8:00 – 18:00</p>
        </div>

        {/* Social */}
        <div className="flex items-center gap-5 pt-4 text-gray-500">
          <a className="hover:text-white transition" href="#" aria-label="LinkedIn">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zM8 19H5v-9h3v9zm-1.5-10.3A1.8 1.8 0 1 1 6.5 5a1.8 1.8 0 0 1 0 3.7zM20 19h-3v-4.6c0-1.1 0-2.6-1.6-2.6s-1.8 1.2-1.8 2.5V19h-3v-9h2.9v1.2h.1c.4-.7 1.4-1.5 2.9-1.5 3.1 0 3.7 2 3.7 4.7V19z" />
            </svg>
          </a>

          <a className="hover:text-white transition" href="#" aria-label="Twitter">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.6a9.8 9.8 0 0 1-2.8.8A4.9 4.9 0 0 0 23.3 3a9.7 9.7 0 0 1-3.1 1.2 4.9 4.9 0 0 0-8.4 4.5A13.9 13.9 0 0 1 1.7 3.1a4.9 4.9 0 0 0 1.5 6.5 4.8 4.8 0 0 1-2.2-.6v.1a4.9 4.9 0 0 0 3.9 4.8 5 5 0 0 1-2.2.1 4.9 4.9 0 0 0 4.6 3.4A9.8 9.8 0 0 1 0 19.5a13.8 13.8 0 0 0 7.5 2.2c9 0 14-7.5 14-14v-.6A10 10 0 0 0 24 4.6z" />
            </svg>
          </a>
        </div>
    </div>
  </div>

  {/* Bottom Bar */}
  <div className="border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between text-base md:text-lg text-gray-500 gap-3">
        <p>© 2025 Citadel Fisher Wealth Group. All rights reserved.</p>
        <p>Regrn b uild
          ulated. Trusted. Global.</p>
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
