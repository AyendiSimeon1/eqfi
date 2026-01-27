'use client'
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import AboutWealth from '../../components/AboutWealth';
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
      "name": "Who We Are",
      "item": "https://www.eqfiinvest.com/who-we-are"
    }
  ]
};

const WhoWeAreHero = () => {
  return (
    <section className="relative h-[50vh] md:h-[60vh] min-h-[400px] md:min-h-[500px] w-full overflow-hidden flex items-end">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/wwa-hero.jpg"
          alt="Team working"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/40" /> {/* Overlay */}
      </div>

      <div className="relative z-10 w-full bg-[#1e4ba1] pt-8 md:pt-12 pb-12 md:pb-20 px-4 md:px-6 lg:px-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-white text-4xl md:text-6xl lg:text-8xl font-serif mb-6 md:mb-12 -mt-12 md:-mt-24"
        >
          Who We Are
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-white text-base md:text-lg lg:text-xl max-w-2xl font-light"
        >
          EQFI Invest is committed to providing exceptional wealth management services with integrity, transparency, and a client-first approach.
        </motion.p>
      </div>
    </section>
  );
};

export default function WhoWeArePageClient() {
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
        <WhoWeAreHero />
        <AboutWealth />
      </main>
    </>
  );
}