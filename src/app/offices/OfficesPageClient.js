'use client'
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '../../components/Header';
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
      "name": "Offices",
      "item": "https://www.eqfiinvest.com/offices"
    }
  ]
};

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

          <h1 className="text-5xl font-light text-[#003366] mb-8">Our Offices</h1>

          <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
            Visit our offices in Lagos and connect with our team of financial experts.
          </p>
        </motion.div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 relative">
        <img
          src="/office-lobby.jpg"
          alt="EQFI Office"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default function OfficesPageClient() {
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
        <OfficeHero />

        {/* Office Details */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-semibold text-[#003366] mb-6">Lagos Office</h2>
              <div className="space-y-4 text-gray-600">
                <p><strong>Address:</strong> Lagos, Nigeria</p>
                <p><strong>Phone:</strong> +234 903 182 6250</p>
                <p><strong>Email:</strong> info@eqfiinvest.com</p>
                <p><strong>Hours:</strong> Monday - Friday, 8:00 AM - 6:00 PM</p>
              </div>
              <p className="mt-6 text-gray-600">
                Our Lagos office serves as the headquarters for EQFI Invest, providing comprehensive wealth management services to clients across Nigeria and internationally.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}