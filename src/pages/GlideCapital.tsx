import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function GlideCapital() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: (
        <>
          BUILDING ENDURING<br />
          BRANDS FOR INDIA
        </>
      ),
      description: "We invest in international brands entering India and high-potential consumer businesses scaling nationally where capital alone isn't enough."
    },
    {
      title: (
        <>
          OPERATOR EXPERTISE<br />
          MEETS PATIENT CAPITAL
        </>
      ),
      description: "We are structured to support decades of growth, backing consumer businesses that focus on trust, repeat purchases, and real unit economics."
    },
    {
      title: (
        <>
          UNLOCKING MULTI-BILLION<br />
          DOLLAR VALUE
        </>
      ),
      description: "Partnering end-to-end with embedded intelligence, distribution channels, and regulatory pathways custom-built for India's terrain."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="bg-white min-h-screen overflow-x-hidden font-sans">
      
      {/* Hero Section */}
      <section className="relative bg-[#F4F6F6] pt-20 pb-8 px-6 sm:px-12 md:px-20 lg:px-24 overflow-hidden min-h-[580px] lg:min-h-[620px] flex flex-col justify-between z-10">
        
        {/* Geometric Background Shapes */}
        <motion.div 
          className="absolute -right-36 -top-36 w-[450px] h-[450px] md:w-[540px] md:h-[540px] rounded-full border-[45px] md:border-[60px] border-[#033C57] bg-transparent pointer-events-none z-0"
          initial={{ scale: 0.8, rotate: -45, opacity: 0 }}
          animate={{ 
            scale: 1, 
            rotate: 0, 
            opacity: 1,
            y: [0, -8, 0],
            x: [0, 4, 0]
          }}
          transition={{
            scale: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
            rotate: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
            opacity: { duration: 0.8 },
            y: { repeat: Infinity, duration: 10, ease: "easeInOut" },
            x: { repeat: Infinity, duration: 10, ease: "easeInOut" }
          }}
        />

        <motion.div 
          className="absolute -right-16 top-[100px] md:-right-20 md:top-[130px] w-[250px] h-[250px] md:w-[320px] md:h-[320px] rounded-full bg-[#53A2BE] pointer-events-none z-0"
          initial={{ scale: 0.8, opacity: 0, x: 50 }}
          animate={{ 
            scale: 1, 
            opacity: 1, 
            x: 0,
            y: [0, 10, 0]
          }}
          transition={{
            scale: { duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
            opacity: { duration: 0.8, delay: 0.2 },
            x: { duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] },
            y: { repeat: Infinity, duration: 12, ease: "easeInOut" }
          }}
        />

        <div className="w-full max-w-7xl mx-auto flex flex-col justify-between flex-grow relative z-10">
          
          {/* Top Row: Headline */}
          <div className="w-full text-left pt-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[52px] font-medium text-[#191E4E] tracking-[0.05em] md:tracking-[0.08em] leading-[1.25] uppercase select-none">
                  {slides[currentSlide].title}
                </h1>
                {slides[currentSlide].description && (
                  <p className="text-gray-500 text-xs sm:text-sm md:text-base leading-relaxed mt-4 max-w-xl font-medium">
                    {slides[currentSlide].description}
                  </p>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Bottom Row: Image + Dots on Left, Logo on Right */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mt-8 w-full">
            
            {/* Bottom Left: Collage & Controls */}
            <div className="flex flex-col items-start gap-4">
              <div className="relative flex items-center -mt-6 md:-mt-14 pl-5">
                {/* Custom Image */}
                <motion.div 
                  className="relative w-full max-w-[280px] md:max-w-[360px] cursor-pointer"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                  transition={{ type: "spring", stiffness: 60, damping: 15, delay: 0.4 }}
                >
                  <img 
                    src="/glide-capital-banner.png" 
                    alt="Glide Capital Banner" 
                    className="w-full h-auto object-contain"
                  />
                </motion.div>
              </div>

              {/* Dots Controls (Yellow/Orange, Teal, Coral) */}
              <motion.div 
                className="flex gap-4 pl-5 z-20"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`w-3 h-3 rounded-full transition-all duration-300 relative cursor-pointer ${
                      currentSlide === idx 
                        ? "scale-125 opacity-100 ring-2 ring-[#191E4E] ring-offset-2" 
                        : "opacity-45 hover:opacity-80"
                    }`}
                    style={{
                      backgroundColor: idx === 0 ? "#FDB614" : idx === 1 ? "#00B5B7" : "#EF5A4A"
                    }}
                  >
                    {currentSlide === idx && (
                      <span className="absolute inset-0 rounded-full animate-ping bg-inherit opacity-75"></span>
                    )}
                  </button>
                ))}
              </motion.div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Intro Description */}
      <section className="bg-white py-20 px-6 border-t border-b border-gray-100">
        <motion.div 
          className="max-w-5xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-brand-navy text-2xl sm:text-3xl md:text-[38px] tracking-[0.06em] md:tracking-[0.08em] uppercase mb-8 leading-tight font-medium"
            variants={fadeInUp}
          >
            WE ARE OPERATORS WHO INVEST
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 text-sm sm:text-base md:text-[17px] leading-relaxed max-w-4xl mx-auto mb-8 font-normal"
            variants={fadeInUp}
          >
            India's consumer market creates billion-dollar opportunities for brands that build foundations while also chasing momentum.
          </motion.p>
          
          <motion.p 
            className="text-brand-teal font-semibold tracking-[0.15em] text-xs sm:text-sm uppercase mb-8"
            variants={fadeInUp}
          >
            THAT'S EXACTLY WHAT WE DO AT GLIDE CAPITAL PARTNERS.
          </motion.p>
          
          <motion.p 
            className="text-gray-600 text-sm sm:text-base md:text-[17px] leading-relaxed max-w-4xl mx-auto font-normal"
            variants={fadeInUp}
          >
            We invest in international brands entering India and high-potential consumer businesses scaling nationally where capital alone isn't enough, but capital plus operating capability plus market intelligence creates lasting value.
          </motion.p>
        </motion.div>
      </section>

      {/* "WHAT WE LOOK FOR:" Section */}
      <section className="bg-[#033C57] text-white py-24 px-6 md:px-16 lg:px-24">
        <motion.div 
          className="max-w-5xl mx-auto text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-medium tracking-[0.15em] uppercase mb-6 text-white text-center"
            variants={fadeInUp}
          >
            WHAT WE LOOK FOR:
          </motion.h2>
          <motion.p 
            className="text-xs sm:text-sm md:text-[13px] text-slate-300 tracking-[0.18em] uppercase max-w-4xl mx-auto leading-relaxed text-center font-normal"
            variants={fadeInUp}
          >
            INDIA REWARDS BRANDS THAT COMBINE PATIENCE, PRODUCT DISCIPLINE AND CULTURAL RELEVANCE. OUR INVESTMENT LENS IS BUILT ON THREE NON-NEGOTIABLES:
          </motion.p>
        </motion.div>

        {/* 3 Columns */}
        <motion.div 
          className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {/* Column 1 - Tenure */}
          <motion.div 
            className="flex flex-col text-left cursor-default group" 
            variants={fadeInUp}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
          >
            {/* Custom Pill Indicator (White circle left, teal background track) */}
            <div className="w-32 h-5 rounded-full bg-[#00B5B7] relative flex items-center p-1 mb-6">
              <motion.div 
                className="w-3 h-3 rounded-full bg-white z-10"
                initial={{ scale: 0, x: -10 }}
                whileInView={{ scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 100, damping: 10, delay: 0.3 }}
              />
            </div>
            <h3 className="text-white font-bold text-sm md:text-base tracking-[0.15em] uppercase mb-4 transition-colors duration-300 group-hover:text-[#00B5B7]">
              TENURE
            </h3>
            <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-normal">
              Can this brand endure beyond the next funding cycle? We back businesses that build trust over time. Repeat purchase rate matters more than launch velocity.
            </p>
          </motion.div>

          {/* Column 2 - Category Clarity */}
          <motion.div 
            className="flex flex-col text-left cursor-default group" 
            variants={fadeInUp}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
          >
            {/* Custom Pill Indicator (Left 40% White, Right 60% Teal) */}
            <div className="w-32 h-5 rounded-full bg-[#00B5B7] flex mb-6 overflow-hidden">
              <motion.div 
                className="h-full bg-white rounded-l-full"
                initial={{ width: 0 }}
                whileInView={{ width: "40%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
              />
            </div>
            <h3 className="text-white font-bold text-sm md:text-base tracking-[0.15em] uppercase mb-4 transition-colors duration-300 group-hover:text-[#00B5B7]">
              CATEGORY CLARITY
            </h3>
            <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-normal">
              Can this brand endure beyond the next funding cycle? We back businesses that build trust over time. Repeat purchase rate matters more than launch velocity.
            </p>
          </motion.div>

          {/* Column 3 - Operational Integrity */}
          <motion.div 
            className="flex flex-col text-left cursor-default group" 
            variants={fadeInUp}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.3 }}
          >
            {/* Custom Pill Indicator (100% White) */}
            <div className="w-32 h-5 rounded-full bg-white/20 flex mb-6 overflow-hidden">
              <motion.div 
                className="h-full bg-white rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
              />
            </div>
            <h3 className="text-white font-bold text-sm md:text-base tracking-[0.15em] uppercase mb-4 transition-colors duration-300 group-hover:text-[#00B5B7]">
              OPERATIONAL INTEGRITY
            </h3>
            <p className="text-slate-300 text-xs md:text-sm leading-relaxed font-normal">
              Can this brand endure beyond the next funding cycle? We back businesses that build trust over time. Repeat purchase rate matters more than launch velocity.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Split Section */}
      <section className="w-full grid grid-cols-1 lg:grid-cols-2 bg-white overflow-hidden min-h-[600px] relative z-10 border-b border-gray-100">
        
        {/* Left Content Column */}
        <div className="bg-[#F4F6F6] flex flex-col justify-center py-20 px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32 text-left w-full h-full">
          <motion.div 
            className="max-w-xl flex flex-col"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.span 
              className="text-black font-extrabold text-xs sm:text-sm tracking-[0.18em] uppercase mb-4 block" 
              variants={fadeInUp}
            >
              WHY WE'RE DIFFERENT
            </motion.span>
            
            <motion.h2 
              className="text-2xl sm:text-3xl lg:text-[38px] font-medium text-[#191E4E] tracking-wide leading-[1.25] uppercase mb-8" 
              variants={fadeInUp}
            >
              UNLIKE A TYPICAL VC FUND, WE ARE BRAND OPERATORS WITH CAPITAL.
            </motion.h2>
            
            <motion.div 
              className="space-y-6 text-gray-600 text-xs sm:text-sm md:text-[15px] leading-relaxed font-normal" 
              variants={fadeInUp}
            >
              <p>
                We've built and scaled brands in India. We know where execution breaks, margins collapse and distribution gaps halt momentum. We've navigated regulatory shifts, supply chain chaos and cultural fragmentation at national scale.
              </p>
              <p>
                We operate alongside portfolio brands so that you get embedded expertise. Our team works inside your operations: sourcing, compliance, distribution strategy, performance marketing and pricing optimization.
              </p>
              <p>
                We think in decades. Brand building in India demands a longer time horizon than most investors tolerate, and we're structured to support that. This is patient capital, operational rigour and long-term thinking.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Image Column */}
        <div className="relative w-full h-[350px] lg:h-auto min-h-[450px] lg:min-h-full overflow-hidden">
          <motion.div 
            className="absolute inset-0 w-full h-full"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <img 
              src="/Group 44.png" 
              alt="Group 44 visualization" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

      </section>

      {/* WHAT WE BRING */}
      <section className="bg-[#f4f5f7] py-24 px-6 border-t border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 className="text-brand-teal text-3xl md:text-4xl font-extrabold tracking-widest uppercase">
              WHAT WE BRING
            </h2>
          </motion.div>

          {/* 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
            
            {/* Capital */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-gray-100 flex flex-col justify-between min-h-[220px]">
              <div>
                <div className="w-24 h-4 rounded-full overflow-hidden flex mb-6">
                  <div className="w-1/2 h-full bg-brand-teal"></div>
                  <div className="w-1/2 h-full bg-brand-coral"></div>
                </div>
                <h3 className="text-brand-navy font-bold text-sm tracking-widest uppercase mb-3">CAPITAL</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-medium">
                  Strategic investment sized to your stage and ambition whether you're entering India or scaling from 1 to 10 to 100.
                </p>
              </div>
            </div>

            {/* Operating Infrastructure */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-gray-100 flex flex-col justify-between min-h-[220px]">
              <div>
                <div className="w-24 h-4 rounded-full overflow-hidden flex mb-6">
                  <div className="w-1/3 h-full bg-brand-coral"></div>
                  <div className="w-1/3 h-full bg-brand-yellow"></div>
                  <div className="w-1/3 h-full bg-brand-teal"></div>
                </div>
                <h3 className="text-brand-navy font-bold text-sm tracking-widest uppercase mb-3">OPERATING INFRASTRUCTURE</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-medium">
                  Vendor networks, regulatory pathways, distribution systems and marketing playbooks. Decades of embedded India expertise deployed for your timeline.
                </p>
              </div>
            </div>

            {/* Glide108 Access */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-gray-100 flex flex-col justify-between min-h-[220px]">
              <div>
                <div className="h-6 flex items-center mb-6 select-none">
                  <img src="/glide108.png" alt="Glide 108 Logo" className="h-full w-auto object-contain" />
                </div>
                <h3 className="text-brand-navy font-bold text-sm tracking-widest uppercase mb-3">GLIDE108 ACCESS</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-medium">
                  Our supervised AI operating system for consumer brands to ensure that every critical variable is seen, structured and executed.
                </p>
              </div>
            </div>

            {/* Curated Portfolio Support */}
            <div className="bg-white p-8 rounded-2xl shadow-xs border border-gray-100 flex flex-col justify-between min-h-[220px]">
              <div>
                <div className="flex gap-2.5 mb-6 pt-1.5 pb-1">
                  <div className="w-3.5 h-3.5 rounded-full bg-brand-coral"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-brand-yellow"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-brand-teal"></div>
                </div>
                <h3 className="text-brand-navy font-bold text-sm tracking-widest uppercase mb-3">CURATED PORTFOLIO SUPPORT</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-medium">
                  Selective investments mean your success gets our full attention. We choose just a few brands with a focus on depth.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* OUR BELIEF */}
      <section className="bg-[#033C57] text-white py-24 px-6 text-center relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.span 
            className="text-white text-base md:text-lg tracking-[0.2em] uppercase block mb-6 font-normal select-none"
            variants={fadeInUp}
          >
            OUR BELIEF
          </motion.span>
          
          <motion.h2 
            className="text-xl sm:text-2xl md:text-[28px] tracking-[0.05em] text-white leading-relaxed uppercase mb-10 max-w-3xl mx-auto font-normal"
            variants={fadeInUp}
          >
            INDIA'S NEXT GENERATION OF ICONIC BRANDS WILL BE BUILT BY OPERATORS OBSESSED WITH QUALITY, RELEVANCE AND ENDURANCE.
          </motion.h2>
 
          {/* Dots */}
          <motion.div className="flex justify-center gap-3 mb-12" variants={fadeInUp}>
            <div className="w-2.5 h-2.5 rounded-full bg-brand-coral"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-brand-yellow"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-brand-teal"></div>
          </motion.div>
 
          <motion.div 
            className="max-w-2xl mx-auto text-slate-300 text-sm sm:text-base leading-relaxed mb-12 font-normal flex flex-col gap-6"
            variants={fadeInUp}
          >
            <p>
              Glide Capital backs those brands with capital that understands operations, operators who understand capital and patience that rewards completeness.
            </p>
            <p>
              If you're building a brand for India's next decade, let's talk.
            </p>
          </motion.div>
 
          <motion.div variants={scaleIn} whileHover={{ y: -3, scale: 1.02 }} transition={{ duration: 0.2 }}>
            <Link 
              to="/contact" 
              className="rounded-full bg-brand-teal px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition hover:opacity-95 inline-flex items-center gap-4 shadow-md cursor-pointer"
            >
              CONTACT US 
              <span className="w-4 h-4 rounded-full bg-brand-yellow flex items-center justify-center flex-shrink-0">
                <ArrowRight size={10} className="text-brand-navy" />
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </section>

    </div>
  );
}
