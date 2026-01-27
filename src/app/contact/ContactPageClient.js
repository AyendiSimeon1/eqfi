'use client'
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '../../components/Header';
import { useState } from 'react';
import { supabase } from '../../lib/supabase';
import Script from 'next/script';

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.eqfiinvest.com"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Contact",
      "item": "https://www.eqfiinvest.com/contact"
    }
  ]
};

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
              Our headquarters in Lagos serves as the central hub for our global operations. Located in the heart of Nigeria's financial capital, our office provides a strategic base for managing investments across Africa and beyond.
            </p>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-xl md:text-2xl font-semibold text-[#1e4ba1] mb-4">Global Reach</h3>
            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              While our primary office is in Lagos, our team operates globally, providing investment management services to clients worldwide through our extensive network of partners and digital platforms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
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

    try {
      const { error } = await supabase
        .from('contacts')
        .insert([formData]);

      if (error) throw error;

      setSubmitMessage('Thank you for your message. We will get back to you soon!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitMessage('There was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <main className="min-h-screen bg-white">
        <Header />

        {/* Hero Section */}
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#1e4ba1] to-[#2a5cb8] text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light mb-6">
                Get in Touch
              </h1>
              <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto leading-relaxed">
                Ready to take control of your financial future? Contact our team of experts today.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 md:py-24 px-4 md:px-8 lg:px-24 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-serif text-[#1e4ba1] mb-8">
                  Let's Start a Conversation
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-[#1e4ba1] mb-2">Phone</h3>
                    <p className="text-gray-600">+234 903 182 6250</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#1e4ba1] mb-2">Email</h3>
                    <p className="text-gray-600">info@eqfiinvest.com</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#1e4ba1] mb-2">Address</h3>
                    <p className="text-gray-600">Lagos, Nigeria</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#1e4ba1] mb-2">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1e4ba1] focus:border-transparent"
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1e4ba1] focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1e4ba1] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1e4ba1] focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="6"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1e4ba1] focus:border-transparent"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#1e4ba1] text-white py-3 px-6 rounded-md hover:bg-[#2a5cb8] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                  {submitMessage && (
                    <p className={`mt-4 text-center ${submitMessage.includes('error') ? 'text-red-600' : 'text-green-600'}`}>
                      {submitMessage}
                    </p>
                  )}
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        <LocationSection />

        {/* Footer */}
        <footer className="bg-[#0B0F14] text-gray-300 py-16">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">EQFI</h3>
                <p className="text-gray-400">
                  Professional wealth management and investment strategies for individuals and institutions.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                  <li><Link href="/strategies" className="hover:text-white transition">Strategies</Link></li>
                  <li><Link href="/who-we-are" className="hover:text-white transition">About</Link></li>
                  <li><Link href="/careers" className="hover:text-white transition">Careers</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-white transition">Investment Management</a></li>
                  <li><a href="#" className="hover:text-white transition">Financial Planning</a></li>
                  <li><a href="#" className="hover:text-white transition">Portfolio Analysis</a></li>
                  <li><a href="#" className="hover:text-white transition">Wealth Strategies</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
                <div className="space-y-2 text-gray-400">
                  <p>+234 903 182 6250</p>
                  <p>info@eqfiinvest.com</p>
                  <p>Lagos, Nigeria</p>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2026 EQFI Invest. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}