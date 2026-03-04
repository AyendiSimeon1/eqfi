"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "110MW", label: "Power capacity\nby 2029" },
  { value: "$3B+", label: "Portfolio\nassets" },
  { value: "2", label: "Continents\nNorth America & Africa" },
  { value: "25+", label: "Years of\noperational heritage" },
];

const streams = [
  {
    title: "Leveraged Buyouts",
    desc: "Acquiring established businesses with strong fundamentals, unlocking hidden value through operational improvement and strategic repositioning.",
  },
  {
    title: "Build, Operate & Transfer",
    desc: "Developing critical infrastructure from the ground up—power stations, utilities, and country-critical assets—then transferring to sovereign and institutional partners.",
  },
  {
    title: "Growth Capital",
    desc: "Deploying expansion capital into high-potential businesses across emerging and developed markets, with a focus on long-term compounding.",
  },
  {
    title: "Infrastructure PE",
    desc: "Owning and operating essential physical assets—gas-fired thermal power stations, grid infrastructure, and energy transition facilities.",
  },
];

export default function PrivateEquityPage() {
  const [visible, setVisible] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main
      style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
      className="bg-[#f5f3ef] text-[#1a1a2e] overflow-x-hidden"
    >
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center">
        {/* Geometric grid overlay */}
        <div className="absolute inset-0 opacity-5 pointer-events-none"
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
              EQFI Private Equity
            </p>
            <h1
              className="text-5xl md:text-7xl font-light leading-[1.05] mb-8"
              style={{ letterSpacing: "-0.02em" }}
            >
              Changing the{" "}
              <span className="italic text-[#8b6914]">world</span>,
              <br />
              an asset at a time.
            </h1>
            <p
              className="text-lg font-light leading-relaxed text-[#3a3a4a] max-w-md mb-10"
              style={{ fontFamily: "system-ui, sans-serif", fontWeight: 300 }}
            >
              We undertake asset management within the Private Equity space and
              maintain a ready portfolio in Build, Operate and Transfer — with
              infrastructure spanning North America and Africa.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#contact"
                className="inline-block bg-[#1a1a2e] text-[#f5f3ef] px-8 py-4 text-sm tracking-[0.15em] uppercase transition-all duration-300 hover:bg-[#8b6914]"
                style={{ fontFamily: "system-ui, sans-serif" }}
              >
                Invest With Us
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

      {/* ── WHAT IS PRIVATE EQUITY ── */}
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
              What is<br />
              <em>Private Equity?</em>
            </h2>
            <div className="w-12 h-px bg-[#8b6914] mt-6" />
          </div>
          <div className="md:col-span-8 space-y-6 text-[#3a3a4a] text-lg font-light leading-relaxed"
            style={{ fontFamily: "system-ui, sans-serif", fontWeight: 300 }}>
            <p>
              Private Equity is the discipline of investing capital directly into companies
              or assets outside the public markets — acquiring, building, and transforming
              businesses to generate superior, risk-adjusted returns over time.
            </p>
            <p>
              The streams of private equity are diverse. From Leveraged Buyouts — acquiring
              mature businesses with borrowed capital — to Build, Operate and Transfer (BOT)
              models that develop critical infrastructure from the ground up, the asset
              class spans the full breadth of the global economy.
            </p>
            <p>
              What unites every strategy is a simple conviction: that active ownership,
              operational expertise, and patient capital can unlock value that public
              markets cannot see — and cannot reach.
            </p>
          </div>
        </div>
      </section>

      {/* ── STREAMS GRID ── */}
      <section className="bg-[#1a1a2e] py-28">
        <div className="max-w-7xl mx-auto px-8 md:px-16">
          <p
            className="text-xs tracking-[0.35em] uppercase text-[#8b6914] mb-4"
            style={{ fontFamily: "system-ui, sans-serif" }}
          >
            Our Strategies
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-[#f5f3ef] mb-16 leading-tight">
            The EQFI PE<br />
            <em className="text-[#c8a84b]">investment universe</em>
          </h2>
          <div className="grid md:grid-cols-2 gap-px bg-[#2e2e4e]">
            {streams.map((s, i) => (
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

      {/* ── FLAGSHIP / GEREGU ── */}
      <section className="max-w-7xl mx-auto px-8 md:px-16 py-28">
        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <p
              className="text-xs tracking-[0.35em] uppercase text-[#8b6914] mb-4"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              Flagship Development
            </p>
            <h2 className="text-4xl md:text-5xl font-light leading-tight mb-6">
              Geregu Power<br />
              <em>Company II</em>
            </h2>
            <div className="w-12 h-px bg-[#8b6914] mb-8" />
            <div className="space-y-1">
              <div className="flex justify-between py-4 border-b border-[#c8c4bc]">
                <span className="text-sm text-[#6b6b7b]" style={{ fontFamily: "system-ui, sans-serif" }}>Target Capacity</span>
                <span className="text-sm font-medium">110 Megawatts</span>
              </div>
              <div className="flex justify-between py-4 border-b border-[#c8c4bc]">
                <span className="text-sm text-[#6b6b7b]" style={{ fontFamily: "system-ui, sans-serif" }}>Expected Delivery</span>
                <span className="text-sm font-medium">2029</span>
              </div>
              <div className="flex justify-between py-4 border-b border-[#c8c4bc]">
                <span className="text-sm text-[#6b6b7b]" style={{ fontFamily: "system-ui, sans-serif" }}>Grid Connection</span>
                <span className="text-sm font-medium">Nigeria National Grid</span>
              </div>
              <div className="flex justify-between py-4 border-b border-[#c8c4bc]">
                <span className="text-sm text-[#6b6b7b]" style={{ fontFamily: "system-ui, sans-serif" }}>Technology</span>
                <span className="text-sm font-medium">American & Chinese Expertise</span>
              </div>
              <div className="flex justify-between py-4">
                <span className="text-sm text-[#6b6b7b]" style={{ fontFamily: "system-ui, sans-serif" }}>Asset Type</span>
                <span className="text-sm font-medium">Gas-Fired Thermal</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 md:pl-12 space-y-6 text-[#3a3a4a] text-lg font-light leading-relaxed"
            style={{ fontFamily: "system-ui, sans-serif", fontWeight: 300 }}>
            <div className="bg-[#1a1a2e] text-[#f5f3ef] p-10">
              <p className="text-2xl font-light leading-relaxed italic">
                "Our infrastructure PE business spans Gas-Fired Thermal Power
                Stations and several country-critical assets in North America and Africa."
              </p>
              <p className="text-sm tracking-widest uppercase text-[#8b6914] mt-6"
                style={{ fontFamily: "system-ui, sans-serif" }}>
                — EQFI PE Management
              </p>
            </div>
            <p>
              Built with frontline technologies and specifications developed through
              American and Chinese engineering expertise, Geregu Power Company II
              represents EQFI PE's commitment to delivering transformational
              infrastructure across emerging markets.
            </p>
            <p>
              This is not merely a financial investment. It is a bet on Nigeria's
              energy future — and on the hundreds of thousands of homes, businesses,
              and institutions that will benefit from a more reliable national grid.
            </p>
          </div>
        </div>
      </section>

      {/* ── ROUTE TO MARKET ── */}
      <section className="bg-[#ede9e2] py-28">
        <div className="max-w-7xl mx-auto px-8 md:px-16 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p
              className="text-xs tracking-[0.35em] uppercase text-[#8b6914] mb-4"
              style={{ fontFamily: "system-ui, sans-serif" }}
            >
              Our Approach
            </p>
            <h2 className="text-4xl md:text-5xl font-light leading-tight mb-6">
              The age-long<br />
              <em>route to market</em>
            </h2>
            <div className="w-12 h-px bg-[#8b6914] mb-8" />
          </div>
          <div className="space-y-6 text-[#3a3a4a] text-lg font-light leading-relaxed"
            style={{ fontFamily: "system-ui, sans-serif", fontWeight: 300 }}>
            <p>
              At EQFI PE, we follow the age-long route-to-market — meaning we provide
              exits to our early investors and backers easily, and liquify to the
              businesses and partners associated with us.
            </p>
            <p>
              We are a pure-play investment manager with earnings derived from stable,
              predictable fee-related revenue. Our scale and access to long-duration
              capital allow us to pursue opportunities across sectors, geographies, and
              market cycles — often where and when others cannot.
            </p>
            <p>
              The reward to us and our clients has been worth the while.
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
        <div className="absolute top-0 right-0 w-96 h-96 opacity-5 pointer-events-none"
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
            Come on the ride<br />
            with us <em className="text-[#c8a84b]">today.</em>
          </h2>
          <p
            className="text-[#9a9ab8] text-lg font-light leading-relaxed max-w-2xl mx-auto mb-12"
            style={{ fontFamily: "system-ui, sans-serif", fontWeight: 300 }}
          >
            We suggest you come on the ride with us as a PE investor or enthusiast.
            Look yourself in the mirror and believe — that you can change the world,
            and be the change you want to see via private equity investing at EQFI.
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
            <p className="text-sm text-[#3a3a4a] leading-relaxed"
              style={{ fontFamily: "system-ui, sans-serif" }}>
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
            <p className="text-sm text-[#3a3a4a] leading-relaxed"
              style={{ fontFamily: "system-ui, sans-serif" }}>
              EQFI Private Equity<br />
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
            <p className="text-sm text-[#3a3a4a] leading-relaxed"
              style={{ fontFamily: "system-ui, sans-serif" }}>
              press@eqfi.com<br />
              For media enquiries only
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
