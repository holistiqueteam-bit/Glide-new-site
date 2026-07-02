import React from 'react';
import { Link } from 'react-router-dom';

export default function GlideCapital() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 px-6 max-w-7xl mx-auto overflow-hidden">
        {/* Abstract Geometric Background on Hero */}
        <div className="absolute right-0 top-0 h-full w-[45%] overflow-hidden pointer-events-none hidden lg:block">
          {/* Inner Navy Arc */}
          <div className="absolute -right-36 -top-36 w-[550px] h-[550px] rounded-full bg-brand-navy"></div>
          {/* Outer Teal Arc */}
          <div className="absolute -right-24 -top-24 w-[550px] h-[550px] rounded-full border-[55px] border-brand-teal pointer-events-none"></div>
        </div>

        <div className="relative z-10">
          {/* Hero Left - Text */}
          <div className="text-left max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-brand-navy leading-none tracking-tight uppercase">
              BUILDING ENDURING<br />
              BRANDS FOR INDIA
            </h1>
            
            {/* Coral, Yellow, Teal Dots Indicator */}
            <div className="flex gap-2.5 mt-8 mb-16">
              <div className="w-3.5 h-3.5 rounded-full bg-brand-coral"></div>
              <div className="w-3.5 h-3.5 rounded-full bg-brand-yellow"></div>
              <div className="w-3.5 h-3.5 rounded-full bg-brand-teal"></div>
            </div>
          </div>

          {/* Hero Bottom - Collage with Horizontal Pill and Logo */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-8">
            {/* Horizontal Pill Image */}
            <div className="lg:col-span-6 flex justify-start">
              <div className="w-full max-w-[500px] aspect-[2.1/1] rounded-full overflow-hidden shadow-lg border border-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=80" 
                  alt="Team collaboration at Glide" 
                  className="w-full h-full object-cover animate-fade-in"
                />
              </div>
            </div>

            {/* Glide Capital Logo Text Display */}
            <div className="lg:col-span-6 flex flex-col justify-center items-start lg:pl-12">
              <div className="leading-none select-none">
                <span className="text-7xl md:text-8xl font-black text-brand-navy tracking-tighter block">glide</span>
                <div className="flex items-center gap-2 mt-1 pl-1">
                  <span className="w-3.5 h-3.5 rounded-full bg-brand-teal block"></span>
                  <span className="text-base md:text-lg text-brand-navy/85 tracking-[0.45em] font-extrabold uppercase">C A P I T A L</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* "WE ARE OPERATORS WHO INVEST" Section */}
      <section className="bg-brand-light py-24 px-6 border-t border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-brand-navy font-bold tracking-widest text-sm md:text-base uppercase mb-10">
            WE ARE OPERATORS WHO INVEST
          </h2>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-8 font-medium">
            India's consumer market creates billion-dollar opportunities for brands that build foundations while also chasing momentum.
          </p>
          <p className="text-brand-teal font-extrabold tracking-wider text-sm md:text-base uppercase mb-8">
            THAT'S EXACTLY WHAT WE DO AT GLIDE CAPITAL PARTNERS.
          </p>
          <p className="text-gray-500 text-xs md:text-sm leading-relaxed max-w-3xl mx-auto">
            We invest in international brands entering India and high-potential consumer businesses scaling nationally where capital alone isn't enough, but capital plus operating capability plus market intelligence creates lasting value.
          </p>
        </div>
      </section>

      {/* "WHAT WE LOOK FOR" Section */}
      <section className="bg-brand-navy text-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center mb-20">
          <h2 className="text-lg md:text-xl font-bold tracking-widest uppercase mb-4 text-white">
            WHAT WE LOOK FOR:
          </h2>
          <p className="text-[10px] md:text-xs text-slate-400 tracking-widest uppercase font-bold max-w-2xl mx-auto leading-relaxed">
            INDIA REWARDS BRANDS THAT COMBINE PATIENCE, PRODUCT DISCIPLINE AND CULTURAL RELEVANCE. OUR INVESTMENT LENS IS BUILT ON THREE NON-NEGOTIABLES:
          </p>
        </div>

        {/* 3 Columns representing the Lens */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-4">
          {/* Column 1 - Tenure */}
          <div className="flex flex-col text-left">
            {/* Pill Indicator (Left 40% Teal) */}
            <div className="w-24 h-4 rounded-full border border-white/20 p-0.5 flex mb-6">
              <div className="w-[40%] h-full bg-brand-teal rounded-full"></div>
            </div>
            <h3 className="text-white font-bold text-xs md:text-sm tracking-widest uppercase mb-4">TENURE</h3>
            <p className="text-slate-300 text-[11px] md:text-xs leading-relaxed">
              Can this brand endure beyond the next funding cycle? We back businesses that build trust over time. Repeat purchase rate matters more than launch velocity.
            </p>
          </div>

          {/* Column 2 - Category Clarity */}
          <div className="flex flex-col text-left">
            {/* Pill Indicator (Left 65% Teal) */}
            <div className="w-24 h-4 rounded-full border border-white/20 p-0.5 flex mb-6">
              <div className="w-[65%] h-full bg-brand-teal rounded-full"></div>
            </div>
            <h3 className="text-white font-bold text-xs md:text-sm tracking-widest uppercase mb-4">CATEGORY CLARITY</h3>
            <p className="text-slate-300 text-[11px] md:text-xs leading-relaxed">
              Can this brand endure beyond the next funding cycle? We back businesses that build trust over time. Repeat purchase rate matters more than launch velocity.
            </p>
          </div>

          {/* Column 3 - Operational Integrity */}
          <div className="flex flex-col text-left">
            {/* Pill Indicator (Full White) */}
            <div className="w-24 h-4 rounded-full border border-white/20 p-0.5 flex mb-6">
              <div className="w-full h-full bg-white rounded-full"></div>
            </div>
            <h3 className="text-white font-bold text-xs md:text-sm tracking-widest uppercase mb-4">OPERATIONAL INTEGRITY</h3>
            <p className="text-slate-300 text-[11px] md:text-xs leading-relaxed">
              Can this brand endure beyond the next funding cycle? We back businesses that build trust over time. Repeat purchase rate matters more than launch velocity.
            </p>
          </div>
        </div>
      </section>

      {/* "WHY WE'RE DIFFERENT" Section */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-5 text-left flex flex-col justify-center">
              <span className="text-brand-coral font-bold text-xs tracking-widest uppercase mb-4">
                WHY WE'RE DIFFERENT
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy tracking-tight uppercase leading-snug mb-8">
                UNLIKE A TYPICAL VC FUND, WE ARE BRAND OPERATORS WITH CAPITAL.
              </h2>
              
              <div className="space-y-6 text-gray-500 text-xs md:text-sm leading-relaxed font-medium">
                <p>
                  We've built and scaled brands in India. We know where execution breaks, margins collapse and distribution gaps halt momentum. We've navigated regulatory shifts, supply chain chaos and cultural fragmentation at national scale.
                </p>
                <p>
                  We operate alongside portfolio brands so that you get embedded expertise. Our team works inside your operations: sourcing, compliance, distribution strategy, performance marketing and pricing optimization.
                </p>
                <p>
                  We think in decades. Brand building in India demands a longer time horizon than most investors tolerate, and we're structured to support that. This is patient capital, operational rigour and long-term thinking.
                </p>
              </div>
            </div>

            {/* Right Image/Graphics Column */}
            <div className="lg:col-span-7 relative flex justify-center items-center py-10 lg:py-0">
              <div className="relative w-full max-w-[550px] aspect-[4/3] rounded-2xl overflow-visible shadow-sm">
                {/* Whiteboard Presenter Image */}
                <div className="w-full h-full rounded-2xl overflow-hidden border border-gray-100 shadow-md">
                  <img 
                    src="https://images.unsplash.com/photo-1552581230-c01bc0d4842a?auto=format&fit=crop&w=1200&h=900&q=80" 
                    alt="Active operational briefing and planning" 
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Overlapping Decorative Color Pills */}
                {/* Pill 1 - Orange/Coral (Top Right) */}
                <div className="absolute -right-4 top-[15%] w-[160px] h-8 rounded-full bg-brand-coral opacity-95 shadow-lg hidden sm:block"></div>

                {/* Pill 2 - Yellow (Middle Right) */}
                <div className="absolute -right-12 top-[32%] w-[220px] h-10 rounded-full bg-brand-yellow opacity-95 shadow-lg hidden sm:block"></div>

                {/* Pill 3 - Teal (Lower Right) */}
                <div className="absolute -right-6 top-[54%] w-[130px] h-9 rounded-full bg-brand-teal opacity-95 shadow-lg hidden sm:block"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* "WHAT WE BRING" Section */}
      <section className="bg-brand-light py-24 px-6 border-t border-b border-gray-100">
        <div className="max-w-5xl mx-auto text-center mb-20">
          <h2 className="text-brand-teal text-3xl md:text-4xl font-black tracking-[0.25em] uppercase mb-4">
            WHAT WE BRING
          </h2>
        </div>

        {/* 2x2 Grid Support */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-4">
          {/* Box 1 - Capital */}
          <div className="bg-white p-8 md:p-10 rounded-3xl text-left border border-gray-100 shadow-sm hover:shadow-md transition duration-300">
            {/* Segmented blocks pill */}
            <div className="w-24 h-5 rounded-full border border-gray-200 p-0.5 flex mb-8">
              <div className="w-1/3 h-full bg-brand-coral rounded-l-full"></div>
              <div className="w-1/3 h-full bg-brand-yellow"></div>
              <div className="w-1/3 h-full bg-brand-teal rounded-r-full"></div>
            </div>
            <h3 className="text-brand-navy font-black text-xs md:text-sm tracking-widest uppercase mb-4">
              CAPITAL
            </h3>
            <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-medium">
              Strategic investment sized to your stage and ambition whether you're entering India or scaling from 1 to 10.
            </p>
          </div>

          {/* Box 2 - Operating Infrastructure */}
          <div className="bg-white p-8 md:p-10 rounded-3xl text-left border border-gray-100 shadow-sm hover:shadow-md transition duration-300">
            {/* Pill with dots inside */}
            <div className="w-24 h-5 rounded-full border border-gray-200 px-3 flex items-center justify-between mb-8">
              <div className="w-2.5 h-2.5 rounded-full bg-brand-coral"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-brand-yellow"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-brand-teal"></div>
            </div>
            <h3 className="text-brand-navy font-black text-xs md:text-sm tracking-widest uppercase mb-4">
              OPERATING INFRASTRUCTURE
            </h3>
            <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-medium">
              Vendor networks, regulatory pathways, distribution systems and marketing playbooks. Decades of embedded India expertise deployed for your timeline.
            </p>
          </div>

          {/* Box 3 - Glide108 Access */}
          <div className="bg-white p-8 md:p-10 rounded-3xl text-left border border-gray-100 shadow-sm hover:shadow-md transition duration-300">
            {/* Semicircle Gauge Icon */}
            <div className="relative w-12 h-6 overflow-hidden flex items-end justify-center mb-7">
              <div className="w-12 h-12 rounded-full border-[3.5px] border-brand-teal border-b-transparent"></div>
            </div>
            <h3 className="text-brand-navy font-black text-xs md:text-sm tracking-widest uppercase mb-4">
              GLIDE108 ACCESS
            </h3>
            <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-medium">
              Our supervised AI operating system for consumer brands to ensure that every critical variable is seen, structured and executed.
            </p>
          </div>

          {/* Box 4 - Curated Portfolio Support */}
          <div className="bg-white p-8 md:p-10 rounded-3xl text-left border border-gray-100 shadow-sm hover:shadow-md transition duration-300">
            {/* Solid dots array */}
            <div className="flex gap-2.5 mb-8 pt-1.5 pb-1">
              <div className="w-3.5 h-3.5 rounded-full bg-brand-coral"></div>
              <div className="w-3.5 h-3.5 rounded-full bg-brand-yellow"></div>
              <div className="w-3.5 h-3.5 rounded-full bg-brand-teal"></div>
            </div>
            <h3 className="text-brand-navy font-black text-xs md:text-sm tracking-widest uppercase mb-4">
              CURATED PORTFOLIO SUPPORT
            </h3>
            <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-medium">
              Selective investments mean your success gets our full attention. We choose just a few brands with a focus on depth.
            </p>
          </div>
        </div>
      </section>

      {/* "OUR BELIEF" Section / Pitch CTA */}
      <section className="bg-brand-navy text-white py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <span className="text-brand-teal font-extrabold text-xs md:text-sm tracking-widest uppercase block mb-4">
            OUR BELIEF
          </span>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-widest text-white leading-relaxed uppercase mb-10 max-w-3xl mx-auto">
            INDIA'S NEXT GENERATION OF ICONIC BRANDS WILL BE BUILT BY OPERATORS OBSESSED WITH QUALITY, RELEVANCE AND ENDURANCE.
          </h2>

          {/* Three dots indicator */}
          <div className="flex justify-center gap-3 mb-10">
            <div className="w-3 h-3 rounded-full bg-brand-coral"></div>
            <div className="w-3 h-3 rounded-full bg-brand-yellow"></div>
            <div className="w-3 h-3 rounded-full bg-brand-teal"></div>
          </div>

          <div className="space-y-4 max-w-2xl mx-auto text-slate-300 text-xs md:text-sm leading-relaxed mb-12">
            <p>
              Glide Capital backs those brands with capital that understands operations, operators who understand capital and patience that rewards completeness.
            </p>
            <p>
              If you're building a brand for India's next decade, let's talk.
            </p>
          </div>

          <Link 
            to="/contact" 
            className="rounded-full bg-brand-teal px-12 py-4.5 text-xs font-bold uppercase tracking-widest text-white transition hover:opacity-90 inline-flex items-center gap-3 shadow-lg"
          >
            CONTACT US 
            <div className="w-2.5 h-2.5 rounded-full bg-brand-yellow"></div>
          </Link>
        </div>
      </section>
    </div>
  );
}
