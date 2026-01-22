'use client'
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import { services, insights } from '../../data/landingContent';

const StrategiesHero = () => {
  return (
    <section className="relative h-[60vh] min-h-[500px] w-full overflow-hidden flex items-end">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80" 
          alt="Investment strategies and financial planning" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/40" /> {/* Overlay */}
      </div>

      <div className="relative z-10 w-full bg-[#1e4ba1] pt-12 pb-20 px-8 md:px-24">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-white text-6xl md:text-8xl font-serif mb-12 -mt-24"
        >
          Strategies
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-white text-lg md:text-xl max-w-2xl font-light"
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
    'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80', // Inheritance/Estate Planning - legal documents
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'  // Portfolio Management - charts/analytics
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`py-24 px-8 md:px-24 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className={index % 2 === 0 ? 'order-1' : 'order-2'}>
          <h2 className="text-[#1e4ba1] text-4xl md:text-5xl font-serif mb-8 leading-tight">
            {service.title}
          </h2>
          <div className="text-gray-700 leading-relaxed text-lg space-y-4">
            {service.desc.split('\n\n').map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
        
        <div className={`relative ${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="relative overflow-hidden rounded-lg shadow-2xl"
          >
            <img 
              src={serviceImages[index]} 
              alt={service.title} 
              className="w-full h-96 object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

const InsightsSection = () => {
  return (
    <section className="bg-gray-50 border-b border-gray-200 py-24">
      {/* How We Can Help Section */}
      <div className="container mx-auto px-6 mb-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-serif font-extrabold mb-16 text-[#1e4ba1] leading-tight"
        >
          How We Can Help
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          {[
            {
              title: 'Personal Wealth Management',
              description: 'Tailored strategies and institutional-grade portfolio management for global impact.',
              image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80'
            },
            {
              title: 'Institutional Investing',
              description: 'Advanced investment solutions for institutional clients with sophisticated risk management.',
              image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80'
            }
          ].map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="group cursor-pointer rounded-xl border border-gray-200 bg-white p-8 hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="aspect-[16/9] bg-gray-200 mb-8 overflow-hidden rounded-lg relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-2xl md:text-3xl font-serif font-extrabold mb-4 text-[#1e4ba1] group-hover:text-blue-600 transition-colors leading-tight">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 max-w-md text-lg leading-relaxed">
                {service.description}
              </p>
              <button className="bg-[#1e4ba1] text-white px-6 py-3 font-semibold hover:bg-blue-800 transition-colors rounded-lg shadow-lg hover:shadow-xl">
                Explore Services
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Insights & Media Section */}
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-16 border-b border-gray-200 pb-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-extrabold text-[#1e4ba1]"
          >
            Insights & Media
          </motion.h2>
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[#1e4ba1] font-bold text-lg uppercase tracking-widest hover:text-blue-600 transition-colors flex items-center gap-2"
          >
            See More
            <span className="text-2xl">→</span>
          </motion.button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {insights.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group rounded-xl border border-gray-200 bg-white p-8 hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              <div className="aspect-video bg-gray-100 mb-6 overflow-hidden relative rounded-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-[#1e4ba1] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  {item.category}
                </div>
              </div>
              <h4 className="text-xl md:text-2xl font-serif font-extrabold text-[#1e4ba1] leading-snug group-hover:text-blue-600 transition-colors mb-2">
                {item.title}
              </h4>
              <p className="text-gray-500 text-sm uppercase font-semibold mb-4 tracking-wider">
                {item.date}
              </p>
              <p className="text-gray-700 text-base leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function Strategies() {
  return (
    <main className="min-h-screen bg-wealth-blueLight font-body">
      <Header />
      <StrategiesHero />
      
      {services.map((service, index) => (
        <ServiceCard key={service.title} service={service} index={index} />
      ))}
      
      {/* <InsightsSection /> */}
      
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
              EQFI Group provides global investment solutions and
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