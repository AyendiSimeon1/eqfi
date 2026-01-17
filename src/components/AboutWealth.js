import React from 'react';

export default function AboutWealth() {
  return (
    <section className="py-20 bg-gray-50 border-b border-gray-200 animate-fade-in">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-6 text-gray-900 leading-tight">Why Choose Citadel Fisher?</h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-500 animate-fade-in leading-relaxed">
          Trusted by thousands, Citadel Fisher delivers innovative wealth management, global reach, and personalized strategies. Our partners include leading financial institutions and our team is dedicated to your success.
        </p>
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-8 w-64 animate-slide-in">
            <div className="text-amber-500 text-3xl font-extrabold mb-2 font-display">$2B+</div>
            <div className="text-gray-900 font-semibold text-base">Assets Managed</div>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-8 w-64 animate-slide-in">
            <div className="text-amber-500 text-3xl font-extrabold mb-2 font-display">30+</div>
            <div className="text-gray-900 font-semibold text-base">Global Partners</div>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-8 w-64 animate-slide-in">
            <div className="text-amber-500 text-3xl font-extrabold mb-2 font-display">99%</div>
            <div className="text-gray-900 font-semibold text-base">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}
