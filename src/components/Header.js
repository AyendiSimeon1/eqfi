'use client'
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle background change on scroll for that premium feel
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Who We Are', href: '/who-we-are' },
    { name: 'Strategies', href: '/strategies' },
    { name: 'Insights', href: '#insights' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];

  // Smooth scroll handler
  const handleNavClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const id = href.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      setIsOpen(false);
    }
  };

  return (
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 80, damping: 18 }}
        className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
          scrolled ? 'bg-black/95 backdrop-blur-md py-3 shadow-xl border-b border-gray-800' : 'bg-black py-7 border-b border-gray-800'
        }`}
      >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo - Citadel Style Boldness */}
        <div className="flex items-center gap-3">
            <Link href="/">
                <img src="/eqfi-logo.jpg" alt="EQFI Logo" className="h-12 w-auto object-contain" />
            </Link>
        </div>

        {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="text-gray-100 hover:text-amber-500 text-lg font-extrabold uppercase tracking-widest transition-colors drop-shadow-lg"
                onClick={(e) => {
                  // Prevent default only for hash links
                  if (link.href.startsWith('#')) {
                    e.preventDefault();
                    handleNavClick(e, link.href);
                  }
                }}
              >
                {link.name}
              </Link>
            ))}
            {/* <button className="bg-amber-500 text-black hover:bg-amber-400 px-8 py-3 text-lg font-extrabold uppercase tracking-widest rounded transition-all drop-shadow-lg">
              Client Login
            </button> */}
        </div>

        {/* Mobile Toggle Button */}
        <button 
              className="md:hidden text-gray-100 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="space-y-1.5">
            <motion.span animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }} className="block w-6 h-0.5 bg-gray-900"></motion.span>
            <motion.span animate={isOpen ? { opacity: 0 } : { opacity: 1 }} className="block w-6 h-0.5 bg-amber-500"></motion.span>
            <motion.span animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }} className="block w-6 h-0.5 bg-gray-900"></motion.span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay - "Bold & Colorful" */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-0 h-screen bg-black z-[99] flex flex-col p-8 md:hidden"
          >
            <div className="flex flex-col gap-8 mt-20">
              {navLinks.map((link, i) => (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.name}
                >
                  <Link
                    href={link.href}
                    className="text-gray-100 text-3xl font-extrabold font-display border-b border-gray-800 pb-4 flex justify-between items-center group"
                    onClick={(e) => {
                      // Prevent default only for hash links
                      if (link.href.startsWith('#')) {
                        e.preventDefault();
                        handleNavClick(e, link.href);
                        setIsOpen(false);
                      } else {
                        setIsOpen(false);
                      }
                    }}
                  >
                    {link.name}
                    <span className="text-amber-500">→</span>
                  </Link>
                </motion.div>
              ))}
              
              <motion.button 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                  className="mt-4 bg-amber-500 text-black py-5 text-2xl font-extrabold uppercase tracking-widest rounded shadow"
              >
                Request Call Back
              </motion.button>
            </div>

            {/* Bottom Info in Mobile Menu */}
              <div className="mt-auto text-gray-400 text-sm">
                <p>EQFI Global Offices</p>
              <p className="text-amber-500">Contact: +234 906 485 2460</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </motion.nav>
  );
}