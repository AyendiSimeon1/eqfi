'use client'
import { motion } from 'framer-motion';
import Link from 'next/link';
import Header from '../../components/Header';

const CareersHero = () => {
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
          
          <h1 className="text-3xl md:text-5xl font-light text-[#003366] mb-4 md:mb-8">Careers</h1>
          
          <p className="text-gray-600 text-sm md:text-lg leading-relaxed max-w-lg">
            Join our team and help shape the future of wealth management. 
            We offer exciting opportunities for growth and development in a dynamic industry.
          </p>
        </motion.div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 min-h-[300px] md:min-h-[400px] relative">
        <img 
          src="/office-lobby.jpg" // Replace with your actual asset
          alt="EQFI Office" 
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default function Careers() {
  return (
    <main className="min-h-screen bg-wealth-blueLight font-body">
      <Header />
      <CareersHero />
      <section className="py-12 md:py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto space-y-4 md:space-y-8">
          <div className="bg-white p-4 md:p-8 rounded-lg shadow-md">
            <h2 className="text-xl md:text-2xl font-semibold text-[#003366] mb-4">Market Infraction Analyst</h2>
            
            <h3 className="text-base md:text-lg font-semibold text-[#003366] mb-3">Overview</h3>
            <p className="text-gray-600 mb-4 text-xs md:text-sm leading-relaxed">
              We seek to hire a Market Infraction Analyst who will work alongside our traders and market makers to sieve-out market infractions on a continuous basis on trading days.
            </p>
            
            <h3 className="text-base md:text-lg font-semibold text-[#003366] mb-3">Requirements</h3>
            <ul className="text-gray-600 mb-4 list-disc list-inside text-xs md:text-sm">
              <li>A University Degree in Law and Legal Studies</li>
              <li>Completed The NYSC program with tangible proof of work</li>
              <li>Completed Level 2 of the CISI Nigeria, or US Series 7 & 63</li>
              <li>Called to the US Bar or the Nigeria Bar</li>
              <li>0-2 years of practice</li>
            </ul>
            
            <h3 className="text-base md:text-lg font-semibold text-[#003366] mb-3">Other Needs</h3>
            <ul className="text-gray-600 mb-4 list-disc list-inside text-xs md:text-sm">
              <li>Ability to initiate litigation and conclude in record time</li>
              <li>Ability to read contracts</li>
              <li>Self-drive and inquisitive nature</li>
            </ul>
            
            <h3 className="text-base md:text-lg font-semibold text-[#003366] mb-3">Remuneration</h3>
            <p className="text-gray-600 mb-4 text-xs md:text-sm">Competitive</p>
            
            <h3 className="text-base md:text-lg font-semibold text-[#003366] mb-3">Work Mode</h3>
            <p className="text-gray-600 text-xs md:text-sm">On-Site and Remote</p>
          </div>

          <div className="bg-white p-4 md:p-8 rounded-lg shadow-md">
            <h2 className="text-xl md:text-2xl font-semibold text-[#003366] mb-4">Real Estate Analyst</h2>
            
            <h3 className="text-base md:text-lg font-semibold text-[#003366] mb-3">Overview</h3>
            <p className="text-gray-600 mb-4 text-xs md:text-sm leading-relaxed">
              Specializes in commercial real estate investing and advocacy.
            </p>
            
            <h3 className="text-base md:text-lg font-semibold text-[#003366] mb-3">Requirements</h3>
            <ul className="text-gray-600 mb-4 list-disc list-inside text-xs md:text-sm">
              <li>Proof of work in commercial real estate trading, design and construction with interest in built cities</li>
              <li>A Professional Qualification</li>
              <li>An academic degree</li>
            </ul>
            
            <h3 className="text-base md:text-lg font-semibold text-[#003366] mb-3">Remuneration</h3>
            <p className="text-gray-600 text-xs md:text-sm">Competitive</p>
          </div>

          <div className="bg-white p-4 md:p-8 rounded-lg shadow-md">
            <h2 className="text-xl md:text-2xl font-semibold text-[#003366] mb-4">Departmental Accountant / Treasury Assistant</h2>
            
            <h3 className="text-base md:text-lg font-semibold text-[#003366] mb-3">Overview</h3>
            <p className="text-gray-600 mb-4 text-xs md:text-sm leading-relaxed">
              We seek to hire an accounting major for a role in treasury. The firm seeks to raise financing at major global financing hubs including the UK, Beijing, and NYC. Monies we raise in each center cater to operations in that city and adjoining areas.
            </p>
            
            <h3 className="text-base md:text-lg font-semibold text-[#003366] mb-3">Your Position</h3>
            <p className="text-gray-600 mb-4 text-xs md:text-sm leading-relaxed">
              Your job is to aid the fund raise and, importantly, account for each center.
            </p>
            
            <h3 className="text-base md:text-lg font-semibold text-[#003366] mb-3">Requirements</h3>
            <ul className="text-gray-600 mb-4 list-disc list-inside text-xs md:text-sm">
              <li>University Degree in Accounting</li>
              <li>An Accounting Professional Qualification</li>
              <li>Understanding of finance, financing, and global markets</li>
              <li>Nimble, intelligent, and honest with a happy spirit</li>
              <li>Show leadership and competence</li>
            </ul>
            
            <h3 className="text-base md:text-lg font-semibold text-[#003366] mb-3">Work Mode</h3>
            <p className="text-gray-600 mb-4 text-xs md:text-sm">Onsite, Remote</p>
            
            <h3 className="text-base md:text-lg font-semibold text-[#003366] mb-3">Number of Positions</h3>
            <p className="text-gray-600 mb-4 text-xs md:text-sm">4 staffers</p>
            
            <h3 className="text-base md:text-lg font-semibold text-[#003366] mb-3">How to Apply</h3>
            <p className="text-gray-600 text-xs md:text-sm">Send CV to <a href="mailto:info@eqfiinvest.com" className="text-[#005a9c] hover:underline">info@eqfiinvest.com</a></p>
          </div>

          <div className="bg-white p-4 md:p-8 rounded-lg shadow-md">
            <h2 className="text-xl md:text-2xl font-semibold text-[#003366] mb-4">Global Market Analyst / Trader and Portfolio Manager</h2>
            
            <h3 className="text-base md:text-lg font-semibold text-[#003366] mb-3">Overview</h3>
            <p className="text-gray-600 mb-4 text-xs md:text-sm leading-relaxed">
              We seek to hire you to provide actionable insights on the markets and develop unique trading strategies and help in client relationship management.
            </p>
            
            <h3 className="text-base md:text-lg font-semibold text-[#003366] mb-3">Requirements</h3>
            <ul className="text-gray-600 mb-4 list-disc list-inside text-xs md:text-sm">
              <li>A University Degree in Economics</li>
              <li>Professional Certification in The CFA Series, US Series 7 & 63, or the Nigeria CISI level 2</li>
              <li>Proof to have successfully managed portfolios or traded local or international equities markets</li>
              <li>Evidence of subscription to The Wall Street Journal in the last 5 years</li>
            </ul>
            
            <h3 className="text-base md:text-lg font-semibold text-[#003366] mb-3">Work Mode</h3>
            <p className="text-gray-600 mb-4 text-xs md:text-sm">Onsite, Remote</p>
            
            <h3 className="text-base md:text-lg font-semibold text-[#003366] mb-3">Primary Location</h3>
            <p className="text-gray-600 mb-4 text-xs md:text-sm">Lagos, Nigeria</p>
            
            <h3 className="text-base md:text-lg font-semibold text-[#003366] mb-3">How to Apply</h3>
            <p className="text-gray-600 text-xs md:text-sm">Send CV to <a href="mailto:info@eqfiinvest.com" className="text-[#005a9c] hover:underline">info@eqfiinvest.com</a></p>
          </div>

          <div className="bg-white p-4 md:p-8 rounded-lg shadow-md">
            <h2 className="text-xl md:text-2xl font-semibold text-[#003366] mb-4">Social Media Manager</h2>
            
            <h3 className="text-base md:text-lg font-semibold text-[#003366] mb-3">Overview</h3>
            <p className="text-gray-600 mb-4 text-xs md:text-sm leading-relaxed">
              We seek to hire a social or new media manager who is skilled in search and media optimization, has an artistic eye, and can sustain long-term new media advertising campaigns.
            </p>
            
            <h3 className="text-base md:text-lg font-semibold text-[#003366] mb-3">Responsibilities</h3>
            <p className="text-gray-600 mb-4 text-xs md:text-sm leading-relaxed">
              Work with management on ideology and campaign development and execution.
            </p>
            
            <h3 className="text-base md:text-lg font-semibold text-[#003366] mb-3">Requirements</h3>
            <ul className="text-gray-600 mb-4 list-disc list-inside text-xs md:text-sm">
              <li>A University Degree</li>
              <li>Creative art training</li>
              <li>Evidence of past successful campaigns</li>
              <li>Upwardly mobile with a grounding in values and what matters most</li>
              <li>Intelligent and competent with proven track record</li>
              <li>Friendly and engaging</li>
            </ul>
            
            <h3 className="text-base md:text-lg font-semibold text-[#003366] mb-3">Work Mode</h3>
            <p className="text-gray-600 mb-4 text-xs md:text-sm">On-Site</p>
            
            <h3 className="text-base md:text-lg font-semibold text-[#003366] mb-3">Primary Location</h3>
            <p className="text-gray-600 mb-4 text-xs md:text-sm">Lagos, Nigeria</p>
            
            <h3 className="text-base md:text-lg font-semibold text-[#003366] mb-3">Number of Positions</h3>
            <p className="text-gray-600 mb-4 text-xs md:text-sm">2</p>
            
            <h3 className="text-base md:text-lg font-semibold text-[#003366] mb-3">Remuneration</h3>
            <p className="text-gray-600 mb-4 text-xs md:text-sm">Competitive</p>
            
            <h3 className="text-base md:text-lg font-semibold text-[#003366] mb-3">How to Apply</h3>
            <p className="text-gray-600 text-xs md:text-sm">Send CV to <a href="mailto:info@eqfiinvest.com" className="text-[#005a9c] hover:underline">info@eqfiinvest.com</a></p>
          </div>

          <div className="bg-white p-4 md:p-8 rounded-lg shadow-md">
            <h2 className="text-xl md:text-2xl font-semibold text-[#003366] mb-4">Private Equity Principal / Material Risk Taker</h2>
            
            <h3 className="text-base md:text-lg font-semibold text-[#003366] mb-3">Senior Role: Hybrid</h3>
            
            <h3 className="text-base md:text-lg font-semibold text-[#003366] mb-3">Responsibilities</h3>
            <ul className="text-gray-600 mb-4 list-disc list-inside text-xs md:text-sm">
              <li>Manage the Private Equity business of EQFI PE</li>
              <li>Ensure the firm is profitable always and maintains adequate liquidity</li>
              <li>Arrange PE prospects and their execution</li>
              <li>Hire staff and build out the team while providing an ethical environment for career thriving and general intellectual conviviality</li>
              <li>Be involved in government relations and long-term planning</li>
            </ul>
            
            <h3 className="text-base md:text-lg font-semibold text-[#003366] mb-3">Qualifications</h3>
            <ul className="text-gray-600 mb-4 list-disc list-inside text-xs md:text-sm">
              <li>A University Degree</li>
              <li>Advanced University Degree and education from prestigious institutions</li>
              <li>Possession of a professional certification</li>
              <li>Good knowledge of accounting</li>
              <li>Experience in global PE industry</li>
              <li>A keen eye for excellence and what matters in the long term with visionary thinking</li>
              <li>Ethical with fair sense of judgment</li>
              <li>Agile and active lifestyle</li>
              <li>Excellent communication, leadership ability and integrity</li>
            </ul>
            
            <h3 className="text-base md:text-lg font-semibold text-[#003366] mb-3">Remuneration</h3>
            <p className="text-gray-600 mb-4 text-xs md:text-sm leading-relaxed">Competitive and industry standard.</p>
            
            <h3 className="text-base md:text-lg font-semibold text-[#003366] mb-3">How to Apply</h3>
            <p className="text-gray-600 text-xs md:text-sm">Send CV to <a href="mailto:info@eqfiinvest.com" className="text-[#005a9c] hover:underline">info@eqfiinvest.com</a></p>
          </div>

          <div className="bg-white p-4 md:p-8 rounded-lg shadow-md">
            <h2 className="text-xl md:text-2xl font-semibold text-[#003366] mb-4">Sales Associates - Remote</h2>
            <p className="text-gray-600 mb-4 text-xs md:text-sm leading-relaxed">
              We need you to help drive traffic to our services. You drive patronage to the company and ensure that clients are well attended to and they leave with a sense of accomplishments of what they set to achieve by using our services. 
              The role is remote so you can work from any location. You will be equipped with the tools to do your business and job adequately.
            </p>
            
            <h3 className="text-base md:text-lg font-semibold text-[#003366] mb-3">Your Qualification</h3>
            <ul className="text-gray-600 mb-4 list-disc list-inside text-xs md:text-sm">
              <li>Minimum Qualification is a University Degree in any field.</li>
              <li>Firm understanding of finance, financial services, investment management / Portfolios/ Asset Management and trading.</li>
              <li>Articulate and Honest.</li>
              <li>Desire to write the CIS exams series or other relevant professional exams.</li>
            </ul>
            
            <h3 className="text-base md:text-lg font-semibold text-[#003366] mb-3">Work mode</h3>
            <p className="text-gray-600 text-xs md:text-sm">Remote</p>
            
            <h3 className="text-base md:text-lg font-semibold text-[#003366] mb-3">Remuneration</h3>
            <p className="text-gray-600 mb-4 text-xs md:text-sm leading-relaxed">Competitive and global industry standard.</p>
            
            <h3 className="text-base md:text-lg font-semibold text-[#003366] mb-3">Report to</h3>
            <p className="text-gray-600 text-xs md:text-sm">Head of Sales and Marketing.</p>
          </div>

          <div className="bg-white p-4 md:p-8 rounded-lg shadow-md">
            <h2 className="text-xl md:text-2xl font-semibold text-[#003366] mb-4">Contract for Difference Trader</h2>
            <p className="text-gray-600 mb-4 text-xs md:text-sm leading-relaxed">
              Our firm specialises in the trading of CFD assets as we find it particularly flexible and lucrative, within our risk parameters.
            </p>
            
            <p className="text-gray-600 mb-4 text-xs md:text-sm leading-relaxed">
              We think that by consistently monitoring the markets, taking trades, monitoring risk, we can make and beat the benchmarks and composite flatly each year.
              We already have proofs to that effect such as the 183% return on investment we came about in 2025.
              So it is achievable, possible and scalable.
            </p>

            <p className="text-gray-600 mb-4 text-xs md:text-sm leading-relaxed">
              If you think you can match our records, then we need to talk.
            </p>
            
            <h3 className="text-base md:text-lg font-semibold text-[#003366] mb-3">Whom we are looking for</h3>
            <ul className="text-gray-600 mb-4 list-disc list-inside text-xs md:text-sm">
              <li>Possession of a University Degree especially in fields as Economics and Banking and Finance</li>
              <li>Advanced degree like a masters in economics or a PhD or associated professional qualifications</li>
              <li>A viable trading report or record on CFD assets trading with strong emphasis on the fundamental analysis and technical analysis</li>
              <li>A thinking and complementary attitude towards risk management and trade lot sizing</li>
              <li>An enlightened mind and willing to learn and build something spectacular while young</li>
              <li>A person of integrity and ethics</li>
            </ul>
            
            <h3 className="text-base md:text-lg font-semibold text-[#003366] mb-3">What you will be doing</h3>
            <ul className="text-gray-600 mb-4 list-disc list-inside text-xs md:text-sm">
              <li>You will be given live account to manage and generate Alphas</li>
              <li>You will help with marketing effort and satisfying clients request for things like additional information on the state of their account</li>
            </ul>
            
            <h3 className="text-base md:text-lg font-semibold text-[#003366] mb-3">Renumeration</h3>
            <p className="text-gray-600 text-xs md:text-sm">Competitive and standard.</p>
          </div>
        </div>
      </section>
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