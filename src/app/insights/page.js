'use client'
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '../../components/Header';

const InsightsHero = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-stretch bg-white overflow-hidden">
      {/* Left Content */}
      <div className="w-full md:w-1/2 p-4 md:p-20 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/">
            <button className="text-[#005a9c] text-xs md:text-sm flex items-center gap-1 mb-4 md:mb-6 hover:underline">
              <span>&lt;</span> Home
            </button>
          </Link>
          
          <div className="w-10 md:w-12 h-1 bg-yellow-400 mb-4 md:mb-6" /> {/* Gold Accent Line */}
          
          <h1 className="text-3xl md:text-5xl font-light text-[#003366] mb-4 md:mb-8">Insights</h1>
          
          <p className="text-gray-600 text-sm md:text-lg leading-relaxed max-w-lg">
            Explore our expert insights on wealth management, investment strategies, and market trends. 
            Stay informed with curated educational content to enhance your financial knowledge.
          </p>
        </motion.div>
      </div>

    </section>
  );
};

const YouTubeEmbed = ({ videoId, title }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <div className="relative w-full pt-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="p-4">
          <h3 className="text-sm md:text-base font-semibold text-[#003366] line-clamp-2">{title}</h3>
        </div>
      </div>
    </motion.div>
  );
};

export default function Insights() {
  const videos = [
    {
      id: 'xRkdKTyVFUc',
      title: 'Investment Strategy & Portfolio Management Essentials'
    },
    {
      id: '2Z0jkf7Li7w',
      title: 'Understanding Wealth Management in Global Markets'
    },
    {
      id: 'EhWir7A58Ng',
      title: 'Risk Management & Asset Diversification'
    },
    {
      id: 'G2HoUbjduuU',
      title: 'Building Long-Term Wealth: A Comprehensive Guide'
    }
  ];

  return (
    <main className="min-h-screen bg-wealth-blueLight font-body">
      <Header />
      <InsightsHero />
      
      {/* Introduction Section */}
      <section className="py-12 md:py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-[#003366] mb-4">Featured Educational Content</h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
              At EQFI, we believe in empowering our clients and partners with knowledge. Our curated selection of insights covers essential topics in wealth management, investment strategies, and market analysis. Whether you're a seasoned investor or just beginning your wealth journey, these resources provide valuable perspectives to enhance your financial literacy.
            </p>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Watch our expert videos to gain deeper insights into portfolio management, risk diversification, and building sustainable long-term wealth in today's dynamic market environment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Video Grid Section */}
      <section className="py-12 md:py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-semibold text-[#003366] mb-8 md:mb-12 text-center"
          >
            Explore Our Video Library
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {videos.map((video, index) => (
              <YouTubeEmbed
                key={video.id}
                videoId={video.id}
                title={video.title}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Key Takeaways Section */}
      <section className="py-12 md:py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-[#003366] mb-8">Key Insights for Success</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border-l-4 border-[#005a9c]"
              >
                <h3 className="text-lg font-semibold text-[#003366] mb-3">Portfolio Diversification</h3>
                <p className="text-gray-700 text-sm md:text-base">
                  Spreading investments across different asset classes reduces risk and improves potential returns over the long term.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-lg border-l-4 border-yellow-400"
              >
                <h3 className="text-lg font-semibold text-[#003366] mb-3">Risk Management</h3>
                <p className="text-gray-700 text-sm md:text-base">
                  Understanding your risk tolerance and implementing proper strategies protects your wealth and ensures sustainable growth.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border-l-4 border-green-500"
              >
                <h3 className="text-lg font-semibold text-[#003366] mb-3">Long-Term Strategy</h3>
                <p className="text-gray-700 text-sm md:text-base">
                  Staying committed to your investment plan through market cycles is key to achieving your financial goals.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border-l-4 border-purple-500"
              >
                <h3 className="text-lg font-semibold text-[#003366] mb-3">Market Knowledge</h3>
                <p className="text-gray-700 text-sm md:text-base">
                  Continuously educating yourself about market trends and investment vehicles empowers better decision-making.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 px-4 bg-gradient-to-r from-[#003366] to-[#005a9c]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center text-white"
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Ready to Grow Your Wealth?</h2>
          <p className="text-sm md:text-base mb-8 leading-relaxed">
            Our expert team is ready to help you create a personalized investment strategy tailored to your financial goals.
          </p>
          <Link href="/contact">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-[#003366] font-semibold py-2 md:py-3 px-6 md:px-8 rounded-lg transition-colors text-sm md:text-base">
              Get in Touch
            </button>
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <motion.footer
        className="bg-[#0B0F14] text-gray-300 border-t border-white/5"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-20 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">

          {/* Brand */}
          <div className="md:col-span-4 space-y-3 md:space-y-5">
            <span className="text-xl md:text-3xl font-extrabold tracking-wide text-white">EQFI</span>
            <p className="text-sm md:text-lg leading-relaxed text-gray-400 max-w-sm">
              EQFI Group provides global investment solutions and
              long-term wealth strategies for institutional and private investors.
            </p>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <p className="text-sm md:text-lg font-bold tracking-widest text-gray-400 uppercase mb-3 md:mb-5">
              Company
            </p>
            <ul className="space-y-2 md:space-y-3 text-sm md:text-lg">
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
            <p className="text-sm md:text-lg font-bold tracking-widest text-gray-400 uppercase mb-3 md:mb-5">
              Legal
            </p>
            <ul className="space-y-2 md:space-y-3 text-sm md:text-lg">
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
          <div className="md:col-span-4 space-y-3 md:space-y-4">
            <p className="text-sm md:text-lg font-bold tracking-widest text-gray-400 uppercase mb-3 md:mb-5">
              Contact
            </p>

            <div className="text-sm md:text-lg space-y-1 md:space-y-2 text-gray-400">
              <p>Global Offices</p>
              <p>+234 903 182 6250</p>
              <p>info@eqfiinvest.com</p>
              <p>Mon–Fri, 8:00 – 18:00</p>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3 md:gap-5 pt-3 md:pt-4 text-gray-500">
              <a className="hover:text-white transition" href="#" aria-label="LinkedIn">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zM8 19H5v-9h3v9zm-1.5-10.3A1.8 1.8 0 1 1 6.5 5a1.8 1.8 0 0 1 0 3.7zM20 19h-3v-4.6c0-1.1 0-2.6-1.6-2.6s-1.8 1.2-1.8 2.5V19h-3v-9h2.9v1.2h.1c.4-.7 1.4-1.5 2.9-1.5 3.1 0 3.7 2 3.7 4.7V19z" />
                </svg>
              </a>

              <a className="hover:text-white transition" href="#" aria-label="Twitter">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.6a9.8 9.8 0 0 1-2.8.8A4.9 4.9 0 0 0 23.3 3a9.7 9.7 0 0 1-3.1 1.2 4.9 4.9 0 0 0-8.4 4.5A13.9 13.9 0 0 1 1.7 3.1a4.9 4.9 0 0 0 1.5 6.5 4.8 4.8 0 0 1-2.2-.6v.1a4.9 4.9 0 0 0 3.9 4.8 5 5 0 0 1-2.2.1 4.9 4.9 0 0 0 4.6 3.4A9.8 9.8 0 0 1 0 19.5a13.8 13.8 0 0 0 7.5 2.2c9 0 14-7.5 14-14v-.6A10 10 0 0 0 24 4.6z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5">
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-8 flex flex-col md:flex-row items-center justify-between text-sm md:text-lg text-gray-500 gap-2 md:gap-3">
            <p>© 2026 EQFI. All rights reserved.</p>
            <p>Regulated. Trusted. Global.</p>
          </div>
        </div>
      </motion.footer>
    </main>
  );
}
