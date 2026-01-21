'use client'
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '../../components/Header';

const ContactHero = () => {
  return (
    <div className="w-full pt-7">
      {/* Upper Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center bg-gray-50">
        <div className="w-full md:w-1/2 p-12 md:p-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/">
              <nav className="text-sm text-blue-800 mb-4 cursor-pointer">
                &lt; Home
              </nav>
            </Link>
            <h1 className="text-5xl font-light text-[#003366] mb-6">Contact us</h1>
            <p className="text-gray-600 text-lg leading-relaxed max-w-md">
              Some of our relationships with our clients go back generations, but they all started somewhere. 
              We would be delighted to hear from you.
            </p>
          </motion.div>
        </div>

        <div className="w-full md:w-1/2 h-[400px] relative">
          <img 
            src="/api/placeholder/800/600" // Replace with your actual image path
            alt="Person using tablet"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Information Section */}
      <section className="py-20 px-4 text-center bg-white">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-light text-[#003366] mb-8">How can we help?</h2>
          
          <p className="text-gray-600 mb-6">
            If you have any questions or would like to get in touch, submit a callback request below and one of our teams will contact you as soon as possible.
          </p>

          <div className="text-gray-600">
            <p>
              If you are new to us, please call 
              <a href="tel:02038087723" className="text-blue-800 underline ml-1 font-medium">09031826250</a>. 
            </p>
            <p className="mt-2">
              If you are an existing client, please speak to your usual contact or call your 
              <a href="#" className="text-blue-800 underline ml-1">local office</a>.
            </p>
          </div>

          <div className="mt-16">
            <h3 className="text-3xl font-light text-[#003366] mb-4">Request a callback</h3>
            <p className="text-sm text-gray-500 italic">*Are you a client?</p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default function Contact() {
  return (
    <main className="min-h-screen bg-wealth-blueLight font-body">
      <Header />
      <ContactHero />
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
            <p>Regulated. Trusted. Global.</p>
          </div>
        </div>
      </motion.footer>
    </main>
  );
}