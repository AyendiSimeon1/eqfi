'use client'
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '../../components/Header';
import { useState } from 'react';
import { supabase } from '../../lib/supabase';
// import LocationSection from '@/components/LocationSection';


const LocationSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[#1e4ba1] text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-12 md:mb-16 text-center md:text-left">
          Location
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div className="text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-semibold text-[#1e4ba1] mb-4">Lagos</h3>
            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              36B, Moses Ogungbeye Str, Olowoira, ikeja, Lagos
            </p>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-semibold text-[#1e4ba1] mb-4">Abuja</h3>
            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              643, Parakou Cresent, Wuse 11, Abuja, Nigeria
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};


const ContactHero = () => {
  return (
    <div className="w-full pt-7">
      {/* Upper Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center bg-gray-50 min-h-[70vh] md:min-h-[60vh]">
        <div className="w-full md:w-1/2 p-6 md:p-12 lg:p-24 order-2 md:order-1">
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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#003366] mb-4 md:mb-6">Contact us</h1>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-md">
              Some of our relationships with our clients go back generations, but they all started somewhere. 
              We would be delighted to hear from you.
            </p>
          </motion.div>
        </div>

        <div className="w-full md:w-1/2 h-[300px] md:h-[400px] lg:h-[500px] relative order-1 md:order-2 mb-6 md:mb-0">
          <img 
            src="/api/placeholder/800/600" // Replace with your actual image path
            alt="Person using tablet"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Information Section */}
      <section className="py-12 md:py-20 px-4 md:px-6 text-center bg-white">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-light text-[#003366] mb-6 md:mb-8">How can we help?</h2>

          <p className="text-gray-600 text-base md:text-lg mb-6 md:mb-8 px-4">
            If you have any questions or would like to get in touch, submit a callback request below and one of our teams will contact you as soon as possible
          </p>

          <div className="text-gray-600 text-sm md:text-base mb-8 md:mb-12">
            <p className="mb-2">
              If you are new to us, please call
              <a href="tel:09031826250" className="text-blue-800 underline ml-1 font-medium block sm:inline px-2">09031826250</a>
                or email
              <a href="mailto:info@eqfiinvest.com" className="text-blue-800 underline ml-1 font-medium block sm:inline">info@eqfiinvest.com</a>.
            </p>
            <p>
              If you are an existing client, please speak to your usual contact or call your
              <a href="#" className="text-blue-800 underline ml-1">local office</a>
            </p>
          </div>

          <div className="mt-12 md:mt-16">
            <h3 className="text-2xl md:text-3xl font-light text-[#003366] mb-4">Request a callback</h3>
            <p className="text-sm text-gray-500 italic">*Are you a client?</p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    if (!supabase) {
      setSubmitMessage('Service temporarily unavailable. Please try again later.');
      setIsSubmitting(false);
      return;
    }

    try {
      const { data, error } = await supabase
        .from('contacts')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
            created_at: new Date().toISOString()
          }
        ]);

      if (error) throw error;

      setSubmitMessage('Thank you for your message. We will get back to you soon!');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitMessage('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-12 md:py-20 px-4 md:px-6 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <h3 className="text-2xl md:text-3xl font-light text-[#003366] mb-6 text-center">Send us a message</h3>

          <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003366] focus:border-transparent transition-colors text-gray-900 text-base"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003366] focus:border-transparent transition-colors text-gray-900 text-base"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003366] focus:border-transparent transition-colors text-gray-900 text-base"
                placeholder="+1 (555) 123-4567"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#003366] focus:border-transparent transition-colors resize-vertical text-gray-900 text-base"
                placeholder="Tell us how we can help you..."
              />
            </div>

            <div className="text-center pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto bg-[#003366] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#002244] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg text-base md:text-lg"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>

            {submitMessage && (
              <div className={`text-center p-4 rounded-lg text-sm md:text-base ${submitMessage.includes('error') ? 'bg-red-50 text-red-700' : 'bg-green-50 text-green-700'}`}>
                {submitMessage}
              </div>
            )}
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default function Contact() {
  return (
    <main className="min-h-screen bg-wealth-blueLight font-body">
      <Header />
      <ContactHero />
      <ContactForm />
       <LocationSection />
      <motion.footer
        className="bg-[#0B0F14] text-gray-300 border-t border-white/5"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">

          {/* Brand */}
          <div className="md:col-span-4 space-y-5 text-center md:text-left">
            <span className="text-xl md:text-2xl lg:text-3xl font-extrabold tracking-wide text-white">EQFI</span>
            <p className="text-sm md:text-base lg:text-lg leading-relaxed text-gray-400 max-w-sm mx-auto md:mx-0">
              Citadel Fisher Wealth Group provides global investment solutions and
              long-term wealth strategies for institutional and private investors.
            </p>
          </div>

          {/* Company */}
          <div className="md:col-span-2 text-center md:text-left">
            <p className="text-sm md:text-base lg:text-lg font-bold tracking-widest text-gray-400 uppercase mb-3 md:mb-5">
              Company
            </p>
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base lg:text-lg">
              {["About", "Leadership", "Careers", "Insights"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition block py-1">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="md:col-span-2 text-center md:text-left">
            <p className="text-sm md:text-base lg:text-lg font-bold tracking-widest text-gray-400 uppercase mb-3 md:mb-5">
              Legal
            </p>
            <ul className="space-y-2 md:space-y-3 text-sm md:text-base lg:text-lg">
              {["Privacy Policy", "Disclosures", "Terms", "Sitemap"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition block py-1">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4 space-y-4 text-center md:text-left">
            <p className="text-sm md:text-base lg:text-lg font-bold tracking-widest text-gray-400 uppercase mb-3 md:mb-5">
              Contact
            </p>

            <div className="text-sm md:text-base lg:text-lg space-y-2 text-gray-400">
              <p>Global Offices</p>
              <p>+234 903 182 6250</p>
              <p>info@eqfi.com</p>
              <p>Mon–Fri, 8:00 – 18:00</p>
            </div>

            {/* Social */}
            <div className="flex items-center justify-center md:justify-start gap-5 pt-4 text-gray-500">
              <a className="hover:text-white transition p-2" href="#" aria-label="LinkedIn">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zM8 19H5v-9h3v9zm-1.5-10.3A1.8 1.8 0 1 1 6.5 5a1.8 1.8 0 0 1 0 3.7zM20 19h-3v-4.6c0-1.1 0-2.6-1.6-2.6s-1.8 1.2-1.8 2.5V19h-3v-9h2.9v1.2h.1c.4-.7 1.4-1.5 2.9-1.5 3.1 0 3.7 2 3.7 4.7V19z" />
                </svg>
              </a>

              <a className="hover:text-white transition p-2" href="#" aria-label="Twitter">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.6a9.8 9.8 0 0 1-2.8.8A4.9 4.9 0 0 0 23.3 3a9.7 9.7 0 0 1-3.1 1.2 4.9 4.9 0 0 0-8.4 4.5A13.9 13.9 0 0 1 1.7 3.1a4.9 4.9 0 0 0 1.5 6.5 4.8 4.8 0 0 1-2.2-.6v.1a4.9 4.9 0 0 0 3.9 4.8 5 5 0 0 1-2.2.1 4.9 4.9 0 0 0 4.6 3.4A9.8 9.8 0 0 1 0 19.5a13.8 13.8 0 0 0 7.5 2.2c9 0 14-7.5 14-14v-.6A10 10 0 0 0 24 4.6z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 mt-8 md:mt-12">
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-8 flex flex-col md:flex-row items-center justify-between text-sm md:text-base lg:text-lg text-gray-500 gap-2 md:gap-3">
            <p className="text-center md:text-left">© 2026 EQFI. All rights reserved.</p>
            <p className="text-center md:text-right">Regulated. Trusted. Global.</p>
          </div>
        </div>
      </motion.footer>
    </main>
  );
}