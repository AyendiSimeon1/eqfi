'use client'
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '../../components/Header';

const OfficeHero = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-stretch bg-white overflow-hidden">
      {/* Left Content */}
      <div className="w-full md:w-1/2 p-8 md:p-20 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/">
            <button className="text-[#005a9c] text-sm flex items-center gap-1 mb-6 hover:underline">
              <span>&lt;</span> Home
            </button>
          </Link>
          
          <div className="w-12 h-1 bg-yellow-400 mb-6" /> {/* Gold Accent Line */}
          
          <h1 className="text-5xl font-light text-[#003366] mb-8">Our offices</h1>
          
          <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
            Placing such premium on personal relationships, we have built a 
            network of  offices  so there is one near to wherever you are.
          </p>
        </motion.div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 min-h-[400px] relative">
        <img 
          src="/office-lobby.jpg" // Replace with your actual asset
          alt="RBC Brewin Dolphin Office Lobby" 
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default function Offices() {
  return (
    <main className="min-h-screen bg-wealth-blueLight font-body">
      <Header />
      <OfficeHero />
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-light text-[#003366] mb-12 text-center">Our Locations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-[#003366] mb-4">Lagos</h3>
              <p className="text-gray-600">36B, Moses Ogungbeye Str, Olowoira, ikeja, Lagos</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-[#003366] mb-4">Abuja</h3>
              <p className="text-gray-600">643, Parakou Cresent, Wuse 11, Abuja, Nigeria</p>
            </div>
          </div>
        </div>
      </section>
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
              <p>+234 903 182 6250</p>
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
            <p>© 2026 EQFI. All rights reserved.</p>
            <p>Regulated. Trusted. Global.</p>
          </div>
        </div>
      </motion.footer>
    </main>
  );
}