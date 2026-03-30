"use client";

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const metrics = [
  { value: '$3B+',  label: 'Portfolio\nAssets' },
  { value: '110MW', label: 'Power Capacity\nby 2029' },
  { value: '25%',   label: 'Success-Driven\nFee Structure' },
  { value: '33%',   label: 'Targeted ROI\nper Trade Entry' },
];

const pillars = [
  {
    index: '01',
    title: 'Aligned Incentives',
    desc: 'Our 25% success fee is charged exclusively on profitable outcomes. We earn only when you earn — a model built on shared conviction, not guaranteed billing.',
  },
  {
    index: '02',
    title: 'Transparent Reporting',
    desc: 'Investors receive clear, periodic reporting on portfolio performance, asset valuations, and strategic developments across both our PE and wealth management desks.',
  },
  {
    index: '03',
    title: 'Liquidity & Exit Pathways',
    desc: 'We follow the age-long route-to-market — providing structured exits for early backers and ensuring smooth liquidity transitions to institutional and sovereign partners.',
  },
  {
    index: '04',
    title: 'Long-Duration Capital',
    desc: 'Our scale and access to patient capital allow us to pursue opportunities across sectors, geographies, and market cycles — often where and when others cannot.',
  },
];

const faqs = [
  {
    q: 'Who can invest with EQFI?',
    a: 'We work with institutional investors, family offices, endowments, and sophisticated private individuals. Both our Private Equity and Investment Management desks are structured to accommodate a range of investor profiles and mandates.',
  },
  {
    q: 'What is the minimum investment threshold?',
    a: 'Minimum commitments vary by strategy. Please contact our Investor Relations team directly to discuss the appropriate entry point for your profile and goals.',
  },
  {
    q: 'How does your fee structure work?',
    a: 'Across our wealth advisory desk, we operate a 25% success fee on profitable outcomes only — no profit, no fee. Our PE strategies follow a negotiated management and carry structure disclosed at onboarding.',
  },
  {
    q: 'What markets do you operate in?',
    a: 'We are active across North America and Africa, with primary equity exposure on the Nigerian Exchange (NGX) and infrastructure assets spanning both continents. Our advisory reach is global.',
  },
  {
    q: 'How do you generate returns on the NGX?',
    a: 'We identify approximately two high-conviction positions per financial year on the NGX, each targeting a 33% ROI. Entry is disciplined — we only act when our qualitative and quantitative analysis confirms a high probability of profit.',
  },
];

export default function InvestorRelations() {
  const [openFaq, setOpenFaq] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <main
      style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
      className="bg-[#f5f3ef] text-[#1a1a2e] overflow-x-hidden"
    >
      {/* HERO */}
      <section className="relative min-h-[80vh] flex items-center">
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg,#1a1a2e 0px,#1a1a2e 1px,transparent 1px,transparent 80px),
                              repeating-linear-gradient(90deg,#1a1a2e 0px,#1a1a2e 1px,transparent 1px,transparent 80px)`,
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 py-32 grid md:grid-cols-2 gap-16 items-center">
          <div
            className="transition-all duration-1000 ease-out"
            style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(40px)' }}
          >
            <p className="text-xs tracking-[0.35em] uppercase text-[#8b6914] mb-6">
              EQFI · Investor Relations
            </p>
            <h1 className="text-5xl md:text-7xl font-light leading-[1.05] mb-8">
              Capital that{' '}
              <span className="italic text-[#8b6914]">works</span>
              <br />
              as hard as you do.
            </h1>
            <p className="text-lg font-light leading-relaxed text-[#3a3a4a] max-w-md mb-10">
              EQFI Group manages capital across Private Equity and strategic
              wealth advisory — delivering superior, risk-adjusted returns for
              investors across Nigeria, North America, and beyond.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="/contact"
                className="inline-block bg-[#1a1a2e] text-[#f5f3ef] px-8 py-4 text-sm tracking-[0.15em] uppercase transition-all duration-300 hover:bg-[#8b6914]"
              >
                Speak to our Team
              </a>
              <a
                href="/strategies"
                className="text-sm tracking-[0.1em] uppercase text-[#1a1a2e] border-b border-[#1a1a2e] pb-1 transition-all duration-300 hover:text-[#8b6914] hover:border-[#8b6914]"
              >
                Our Approach →
              </a>
            </div>
          </div>
          <div
            className="transition-all duration-1000 delay-300 ease-out"
            style={{ opacity: visible ? 1 : 0, transform: visible ? 'translateY(0)' : 'translateY(40px)' }}
          >
            <div className="grid grid-cols-2 gap-px bg-[#c8c4bc]">
              {metrics.map((m, i) => (
                <div key={i} className="bg-[#f5f3ef] p-8 flex flex-col justify-between">
                  <span className="text-4xl md:text-5xl font-light text-[#1a1a2e]">{m.value}</span>
                  <span
                    className="text-xs tracking-widest uppercase text-[#6b6b7b] mt-3 leading-relaxed"
                  >
                    {m.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}