'use client'
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import { services, insights } from '../../data/landingContent';
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
      "name": "Strategies",
      "item": "https://www.eqfiinvest.com/strategies"
    }
  ]
};

const StrategiesHero = () => {
  return (
    <section className="relative h-[50vh] md:h-[60vh] min-h-[400px] md:min-h-[500px] w-full overflow-hidden flex items-end">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80"
          alt="Investment strategies and financial planning"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/40" /> {/* Overlay */}
      </div>

      <div className="relative z-10 w-full bg-[#1e4ba1] pt-8 md:pt-12 pb-12 md:pb-20 px-6 md:px-8 lg:px-24">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-white text-4xl md:text-6xl lg:text-8xl font-serif mb-6 md:mb-12 -mt-12 md:-mt-24"
        >
          Strategies
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-white text-base md:text-lg lg:text-xl max-w-2xl font-light"
        >
          Comprehensive investment solutions tailored to your financial goals.
          From wealth management to portfolio optimization, we deliver results.
        </motion.p>
      </div>
    </section>
  );
};

const ServiceCard = ({ service, index }) => {
  const serviceImages = [
    'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=800&q=80', // Wealth Management - money, wealth
    'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80', // Investment Management - trading screen
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80', // Portfolio Management - charts
    'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80', // Financial Planning - planning
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <div className="h-48 overflow-hidden">
        <img
          src={serviceImages[index % serviceImages.length]}
          alt={service.title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-[#1e4ba1] mb-3">{service.title}</h3>
        <p className="text-gray-600 leading-relaxed">{service.description}</p>
      </div>
    </motion.div>
  );
};

export default function StrategiesPageClient() {
  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <main className="min-h-screen bg-gray-50">
        <Header />
        <StrategiesHero />

        {/* Services Section */}
        <section className="py-16 md:py-24 px-6 md:px-8 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#1e4ba1] mb-6">
                Our Investment Strategies
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                We employ a comprehensive approach to investment management, combining traditional and modern strategies to maximize returns while managing risk.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <ServiceCard key={service.title} service={service} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Insights Section */}
        <section className="py-16 md:py-24 px-6 md:px-8 lg:px-24 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#1e4ba1] mb-6">
                Market Insights
              </h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                Stay informed with our latest analysis and market perspectives.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {insights.map((insight, index) => (
                <motion.div
                  key={insight.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-xl font-semibold text-[#1e4ba1] mb-3">{insight.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{insight.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 px-6 md:px-8 lg:px-24 bg-[#1e4ba1] text-white">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6">
                Ready to Invest?
              </h2>
              <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                Contact our team to discuss how our investment strategies can help you achieve your financial goals.
              </p>
              <a
                href="/contact"
                className="inline-block bg-white text-[#1e4ba1] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get Started
              </a>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}