"use client";

import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";

const stats = [
  { value: "33%", label: "Targeted ROI\nper trade entry" },
  { value: "2x", label: "High-conviction\nNGX trades/year" },
  { value: "Global", label: "Advisory\nreach" },
  { value: "25%", label: "Success-driven\nfee structure" },
];

const strategies = [
  {
    title: "Targeted Growth",
    desc: "We aim for a 33% ROI per trade entry, ensuring high returns for our clients.",
  },
  {
    title: "Cyclical Execution",
    desc: "Our strategy focuses on identifying high-conviction opportunities on the NGX approximately twice per financial year.",
  },
  {
    title: "Asset Versatility",
    desc: "Beyond equities, we provide advisory across various asset classes, provided our rigorous analysis confirms a high probability of profit.",
  },
];

export default function EndowmentFundManagement() {
  const [visible, setVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header />
      <main
        style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
        className="bg-[#f5f3ef] text-[#1a1a2e] overflow-x-hidden"
      >
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center">
        {/* Geometric grid overlay */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, #1a1a2e 0px, #1a1a2e 1px, transparent 1px, transparent 80px),
                              repeating-linear-gradient(90deg, #1a1a2e 0px, #1a1a2e 1px, transparent 1px, transparent 80px)`,
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 py-32 grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div
            className="transition-all duration-1000 ease-out"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(40px)" }}
          >
            <p
              className="text-xs tracking-[0.35em] uppercase text-[#8b6914] mb-6 font-sans"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              EQFI Investment Management
            </p>
            <h1
              className="text-5xl md:text-7xl font-light leading-[1.05] mb-8"
              style={{ letterSpacing: "-0.02em" }}
            >
              Strategic{" "}
              <span className="italic text-[#8b6914]">Investment</span>
              <br />
              Advisory.
            </h1>
            <p
              className="text-lg font-light leading-relaxed text-[#3a3a4a] max-w-md mb-10"
              style={{ fontFamily: "system-ui, sans-serif", fontWeight: 300 }}
            >
              At EQFI Investment Management Limited, we bridge the gap between
              traditional fund preservation and high-performance wealth generation.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#contact"
                className="inline-block bg-[#1a1a2e] text-[#f5f3ef] px-8 py-4 text-sm tracking-[0.15em] uppercase transition-all duration-300 hover:bg-[#8b6914]"
                style={{ fontFamily: "system-ui, sans-serif" }}
              >
                Start Investing
              </a>
              <a
                href="#about"
                className="text-sm tracking-[0.1em] uppercase text-[#1a1a2e] border-b border-[#1a1a2e] pb-1 transition-all duration-300 hover:text-[#8b6914] hover:border-[#8b6914]"
                style={{ fontFamily: "system-ui, sans-serif" }}
              >
                Learn More →
              </a>
            </div>
          </div>

          {/* Right: Stat block */}
          <div
            className="transition-all duration-1000 delay-300 ease-out"
            style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(40px)" }}
          >
            <div className="grid grid-cols-2 gap-px bg-[#c8c4bc]">
              {stats.map((s, i) => (
                <div key={i} className="bg-[#f5f3ef] p-8 flex flex-col justify-between">
                  <span className="text-4xl md:text-5xl font-light text-[#1a1a2e]">{s.value}</span>
                  <span
                    className="text-xs tracking-widest uppercase text-[#6b6b7b] mt-3 leading-relaxed"
                    style={{ fontFamily: "system-ui, sans-serif", whiteSpace: "pre-line" }}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
            <p
              className="text-[10px] tracking-widest uppercase text-[#9a9aaa] mt-3"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              *data for period ending December 31, 2025
            </p>
          </div>
        </div>

        {/* Bottom rule */}
        <div className="absolute bottom-0 left-8 right-8 h-px bg-[#c8c4bc]" />
      </section>

      {/* ── WHAT IS ENDOWMENT FUND MANAGEMENT ── */}
      <section id="about" className="max-w-7xl mx-auto px-8 md:px-16 py-28">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4">
            <p
              className="text-xs tracking-[0.35em] uppercase text-[#8b6914] mb-4"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              Overview
            </p>
            <h2 className="text-4xl md:text-5xl font-light leading-tight">
              Precision in<br />
              <em>Strategy.</em>
            </h2>
            <div className="w-12 h-px bg-[#8b6914] mt-6" />
          </div>
          <div
            className="md:col-span-8 space-y-6 text-[#3a3a4a] text-lg font-light leading-relaxed"
            style={{ fontFamily: "system-ui, sans-serif", fontWeight: 300 }}
          >
            <p>
              Endowment Fund Management is the discipline of growing and preserving
              capital over the long term  deploying patient, disciplined investment
              strategies that generate consistent returns while protecting the
              integrity of the underlying portfolio.
            </p>
            <p>
              At EQFI Investment Management Limited, our approach is built on
              high-conviction, research-driven execution. We target the Nigerian
              Exchange (NGX) with precision  entering approximately two major
              positions per financial year, each calibrated for a 33% return on
              investment.
            </p>
            <p>
              Our success-driven fee model 25% on profitable outcomes only
              aligns our interests directly with yours. We win when you win.
            </p>
          </div>
        </div>
      </section>

      {/* ── STRATEGIES GRID ── */}
      <section className="bg-[#1a1a2e] py-28">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <p
            className="text-xs tracking-[0.35em] uppercase text-[#8b6914] mb-4"
            style={{ fontFamily: "system-ui, sans-serif" }}
          >
            Our Strategies
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-[#f5f3ef] mb-16 leading-tight">
            The EQFI <br />
            <em className="text-[#c8a84b]">investment approach</em>
          </h2>
          <div className="grid md:grid-cols-3 gap-px bg-[#2e2e4e]">
            {strategies.map((s, i) => (
              <div
                key={i}
                className="bg-[#1a1a2e] p-10 group hover:bg-[#222240] transition-colors duration-300"
              >
                <span
                  className="text-[10px] tracking-widest uppercase text-[#8b6914] mb-4 block"
                  style={{ fontFamily: "system-ui, sans-serif" }}
                >
                  0{i + 1}
                </span>
                <h3 className="text-2xl font-light text-[#f5f3ef] mb-4">{s.title}</h3>
                <p
                  className="text-[#9a9ab8] text-sm leading-relaxed font-light"
                  style={{ fontFamily: "system-ui, sans-serif" }}
                >
                  {s.desc}
                </p>
                <div className="w-0 h-px bg-[#8b6914] mt-6 group-hover:w-12 transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEE STRUCTURE ── */}
      <section className="max-w-7xl mx-auto px-8 md:px-16 py-28">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <p
              className="text-xs tracking-[0.35em] uppercase text-[#8b6914] mb-4"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              Fee Structure
            </p>
            <h2 className="text-4xl md:text-5xl font-light leading-tight mb-6">
              Performance-<br />
              <em>Aligned Fees</em>
            </h2>
            <div className="w-12 h-px bg-[#8b6914] mb-8" />
            <div className="space-y-1">
              <div className="flex justify-between py-4 border-b border-[#c8c4bc]">
                <span className="text-sm text-[#6b6b7b]" style={{ fontFamily: "system-ui, sans-serif" }}>Success Fee</span>
                <span className="text-sm font-medium">25% on Profits Only</span>
              </div>
              <div className="flex justify-between py-4 border-b border-[#c8c4bc]">
                <span className="text-sm text-[#6b6b7b]" style={{ fontFamily: "system-ui, sans-serif" }}>Target ROI per Entry</span>
                <span className="text-sm font-medium">33%</span>
              </div>
              <div className="flex justify-between py-4 border-b border-[#c8c4bc]">
                <span className="text-sm text-[#6b6b7b]" style={{ fontFamily: "system-ui, sans-serif" }}>Primary Market</span>
                <span className="text-sm font-medium">Nigerian Exchange (NGX)</span>
              </div>
              <div className="flex justify-between py-4 border-b border-[#c8c4bc]">
                <span className="text-sm text-[#6b6b7b]" style={{ fontFamily: "system-ui, sans-serif" }}>Trade Frequency</span>
                <span className="text-sm font-medium">~2 per Financial Year</span>
              </div>
              <div className="flex justify-between py-4">
                <span className="text-sm text-[#6b6b7b]" style={{ fontFamily: "system-ui, sans-serif" }}>Advisory Scope</span>
                <span className="text-sm font-medium">Global, Multi-Asset</span>
              </div>
            </div>
          </div>

          <div
            className="md:col-span-7 md:pl-12 space-y-6 text-[#3a3a4a] text-lg font-light leading-relaxed"
            style={{ fontFamily: "system-ui, sans-serif", fontWeight: 300 }}
          >
            <div className="bg-[#1a1a2e] text-[#f5f3ef] p-10">
              <p className="text-2xl font-light leading-relaxed italic">
                "We only succeed when our clients succeed. Our 25% success fee
                is charged exclusively on profitable outcomes no profit, no fee."
              </p>
              <p
                className="text-sm tracking-widest uppercase text-[#8b6914] mt-6"
                style={{ fontFamily: "system-ui, sans-serif" }}
              >
                 EQFI Investment Management
              </p>
            </div>
            <p>
              Our model is simple: we are remunerated only when we deliver returns.
              This structure ensures that every recommendation we make is backed by
              genuine conviction and that our incentives remain permanently aligned
              with the investors who trust us with their capital.
            </p>
            <p>
              Beyond the NGX, we extend advisory across any asset class where our
              analysis identifies a high-probability path to profit. Geography and
              instrument type are secondary to rigour and conviction.
            </p>
          </div>
        </div>
      </section>

      {/* ── APPROACH ── */}
      <section className="bg-[#ede9e2] py-28">
        <div className="max-w-7xl mx-auto px-8 md:px-16 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p
              className="text-xs tracking-[0.35em] uppercase text-[#8b6914] mb-4"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              Our Philosophy
            </p>
            <h2 className="text-4xl md:text-5xl font-light leading-tight mb-6">
              Excellence in<br />
              <em>Execution</em>
            </h2>
            <div className="w-12 h-px bg-[#8b6914] mb-8" />
          </div>
          <div
            className="space-y-6 text-[#3a3a4a] text-lg font-light leading-relaxed"
            style={{ fontFamily: "system-ui, sans-serif", fontWeight: 300 }}
          >
            <p>
              At EQFI Investment Management, we are not in the business of volume.
              We are in the business of precision. Every position we enter has been
              subjected to rigorous qualitative and quantitative analysis and only
              progresses when we are satisfied the odds are decisively in our favour.
            </p>
            <p>
              Our cycle-based approach targeting the NGX twice annually allows us
              to focus our full analytical capacity on a small number of opportunities,
              rather than spreading attention thinly across a broad, diluted portfolio.
            </p>
            <p>
              The result is a track record built on discipline, not luck.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        id="contact"
        className="relative bg-[#1a1a2e] py-36 overflow-hidden"
      >
        {/* Background geometry */}
        <div
          className="absolute top-0 right-0 w-96 h-96 opacity-5 pointer-events-none"
          style={{
            background: "radial-gradient(circle at center, #c8a84b 0%, transparent 70%)",
          }}
        />

        <div className="max-w-7xl mx-auto px-8 md:px-16 text-center relative z-10">
          <p
            className="text-xs tracking-[0.35em] uppercase text-[#8b6914] mb-6"
            style={{ fontFamily: "system-ui, sans-serif" }}
          >
            Join Us
          </p>
          <h2 className="text-4xl md:text-6xl font-light text-[#f5f3ef] leading-tight mb-8 max-w-3xl mx-auto">
            Invest with precision.<br />
            Grow with <em className="text-[#c8a84b]">confidence.</em>
          </h2>
          <p
            className="text-[#9a9ab8] text-lg font-light leading-relaxed max-w-2xl mx-auto mb-12"
            style={{ fontFamily: "system-ui, sans-serif", fontWeight: 300 }}
          >
            Whether you are an institutional endowment, a family office, or a
            sophisticated individual investor EQFI Investment Management Limited
            offers a disciplined, performance-aligned approach to growing your wealth.
            You are welcome.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:invest@eqfi.com"
              className="inline-block bg-[#8b6914] text-[#f5f3ef] px-10 py-4 text-sm tracking-[0.15em] uppercase transition-all duration-300 hover:bg-[#c8a84b] hover:text-[#1a1a2e]"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              Start a Conversation
            </a>
            <a
              href="/contact"
              className="inline-block border border-[#4a4a6a] text-[#9a9ab8] px-10 py-4 text-sm tracking-[0.15em] uppercase transition-all duration-300 hover:border-[#8b6914] hover:text-[#c8a84b]"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              Contact & Details →
            </a>
          </div>
        </div>
      </section>

      {/* ── CONTACT DETAILS ── */}
      <section className="max-w-7xl mx-auto px-8 md:px-16 py-20">
        <div className="grid md:grid-cols-3 gap-12 border-t border-[#c8c4bc] pt-16">
          <div>
            <p
              className="text-xs tracking-[0.35em] uppercase text-[#8b6914] mb-4"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              Investor Relations
            </p>
            <p
              className="text-sm text-[#3a3a4a] leading-relaxed"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              investor.relations@eqfi.com<br />
              +1 (212) 000-0000
            </p>
          </div>
          <div>
            <p
              className="text-xs tracking-[0.35em] uppercase text-[#8b6914] mb-4"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              Headquarters
            </p>
            <p
              className="text-sm text-[#3a3a4a] leading-relaxed"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              EQFI Investment Management<br />
              New York, NY · Lagos, NG
            </p>
          </div>
          <div>
            <p
              className="text-xs tracking-[0.35em] uppercase text-[#8b6914] mb-4"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              Media & Press
            </p>
            <p
              className="text-sm text-[#3a3a4a] leading-relaxed"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              press@eqfi.com<br />
              For media enquiries only
            </p>
          </div>
        </div>
      </section>
    </main>
    </>
  );
}