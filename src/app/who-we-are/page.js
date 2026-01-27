'use client'
import { motion } from 'framer-motion';
import Header from '../../components/Header';
import AboutWealth from '../../components/AboutWealth';

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
          className="text-white text-4xl md:text-6xl lg:text-8xl font-serif mb-6 md:mb-12 -mt-16 md:-mt-24"
        >
          Who We Are
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-white text-base md:text-lg lg:text-xl max-w-2xl font-light"
        >
          Our mission is to be the most successful investment team in the world.
          We've assembled world-class talent in order to achieve it.
        </motion.p>
      </div>
    </section>
  );
};

const OpportunitySection = () => {
  return (
    <>
      {/* White Text Section */}
      <section className="py-12 md:py-16 lg:py-24 px-4 md:px-6 lg:px-24 max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12">
        <h2 className="text-[#1e4ba1] text-3xl md:text-4xl lg:text-6xl font-serif leading-tight">
          Seeking Opportunity. <br /> Redefining Markets.
        </h2>
        <div className="space-y-4 md:space-y-6 text-gray-700 leading-relaxed text-base md:text-lg">
          <p>We are a multi-strategy alternative investment manager, pursuing superior long-term returns for our investors.</p>
          <p>We bring together extraordinary people, equip them with unmatched resources and technology and empower them to seek out new possibilities in the markets.</p>
        </div>
      </section>

      {/* Dark Blue Innovators Section */}
      <section className="bg-[#001a41] py-12 md:py-16 lg:py-24 px-4 md:px-6 lg:px-24 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-8 md:gap-12 lg:gap-16">
          <div>
            <h2 className="text-white text-2xl md:text-3xl lg:text-5xl font-serif mb-4 md:mb-6">
              Innovators For <br />
              <span className="text-blue-400 font-sans">Over 35 Years</span>
            </h2>
            <p className="text-gray-300 max-w-md text-sm md:text-base">
              In an industry where the drive to prove yourself never ends, we've been pushing
              boundaries and discovering new ways to grow for more than three decades.
            </p>
          </div>

          {/* Image Collage Grid */}
          <div className="relative grid grid-cols-2 gap-2 md:gap-4">
            <motion.div whileHover={{ scale: 1.05 }} className="mt-6 md:mt-12">
              <img src="/office-1.jpg" alt="Office tech" className="w-full h-32 md:h-48 lg:h-64 object-cover rounded-lg" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <img src="/team-1.jpg" alt="Team meeting" className="w-full h-32 md:h-48 lg:h-64 object-cover rounded-lg" />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};const CultureGallery = () => {
  return (
    <section className="py-12 md:py-16 lg:py-24 px-4 md:px-6 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start mb-8 md:mb-12 lg:mb-16 gap-6 md:gap-8">
        <h2 className="text-[#1e4ba1] text-3xl md:text-4xl lg:text-6xl font-serif leading-tight max-w-md">
          United by <br /> Our Culture
        </h2>
        <div className="max-w-md text-black">
          <p className="text-sm md:text-base lg:text-lg leading-relaxed mb-3 md:mb-4">We are a multi-strategy alternative investment manager, pursuing superior long-term returns for our investors.</p>
          <p className="text-sm md:text-base lg:text-lg leading-relaxed">We bring together extraordinary people, equip them with unmatched resources and technology and empower them to seek out new possibilities in the markets.</p>
        </div>
      </div>


    </section>
  );
};

const LeadershipSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-24 px-4 md:px-6 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[#1e4ba1] text-3xl md:text-4xl lg:text-6xl font-serif leading-tight mb-8 md:mb-12 lg:mb-16">
          Leadership
        </h2>
        <div className="bg-white p-4 md:p-6 lg:p-8 xl:p-12 rounded-lg shadow-lg border border-gray-100">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#1e4ba1] mb-3 md:mb-4">Chief Investment Officer</h3>
          <h4 className="text-lg md:text-xl lg:text-2xl font-medium text-[#1e4ba1] mb-4 md:mb-6">Oladipo Ehindero</h4>
          <div className="text-gray-600 leading-relaxed space-y-3 md:space-y-4 text-sm md:text-base lg:text-lg">
            <p>
              Oladipo Ehindero is a prize winning economist from an Ivy league University, Covenant University. He has to date about 2 decades of investment management experience in the field, including experience as wealth manager at Cashcraft Asset Management Limited and Head of Investment Research at various times at Asset Manager Arthur Stevens Asset Management, Lagos and NGX & NYSE focused trading app Yochaa!
            </p>
            <p>
              He has commodities trading experience with AFEX Commodity Exchange as Community Manager and Head of Trading at a notable Proprietary Trading Firm in Lagos, Nigeria.
            </p>
            <p>
              A Chartered Stockbroker and a Authorized Dealing Clerk of the NGX. He's a visionary and an outstanding scholar. He believes markets should work for your good, all the time. He wants to democratize greatness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const LocationSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-24 px-4 md:px-6 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[#1e4ba1] text-3xl md:text-4xl lg:text-6xl font-serif leading-tight mb-8 md:mb-12 lg:mb-16">
          Location
        </h2>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
          <div>
            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-[#1e4ba1] mb-3 md:mb-4">Lagos</h3>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base lg:text-lg">
              36B, Moses Ogungbeye Str, Olowoira, ikeja, Lagos
            </p>
          </div>
          <div>
            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-[#1e4ba1] mb-3 md:mb-4">Abuja</h3>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base lg:text-lg">
              643, Parakou Cresent, Wuse 11, Abuja, Nigeria
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function WhoWeAre() {
  return (
    <main className="min-h-screen bg-wealth-blueLight font-body">
      <Header />
      <WhoWeAreHero />
      <CultureGallery />

      {/* <AboutWealth /> */}
         <LeadershipSection />
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
              EQFI Group provides global investment solutions and
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