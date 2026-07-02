import React from 'react';
import { motion } from 'motion/react';

export default function About() {
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

  return (
    <div className="bg-white overflow-x-hidden font-sans">
      
      {/* Hero Section */}
      <section className="pt-4 md:pt-16 pb-12 md:pb-20 text-center px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.p 
            className="text-brand-teal font-bold tracking-widest text-xs mb-8 uppercase"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            THAT'S WHAT GLIDE IS BUILT FOR.
          </motion.p>
          
          <motion.h1 
            className="text-xl sm:text-3xl md:text-6xl lg:text-[4.8rem] font-bold text-brand-navy leading-[1.1] mb-12 uppercase tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-brand-yellow">GLIDE</span> WAS BORN TO OPERATE<br/>
            AT THE INTERSECTION OF<br/>
            <span className="text-brand-yellow">GLOBAL AMBITION</span><br/>
            AND <span className="text-brand-yellow">INDIAN REALITY</span>.
          </motion.h1>
          
          <motion.div 
            className="max-w-3xl mx-auto space-y-6 text-base md:text-lg text-gray-500 leading-relaxed font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p>
              International brands entering India need partners who can navigate local customers, digital distribution and regulatory complexity with the mindset of a brand owner. Homegrown brands with product-market fit hitting a ceiling at the 1-to-10 stage need institutional frameworks, teams and capital to scale nationally.
            </p>
            <p>
              We focus on categories at the cusp of adoption, where premiumization supports quality without compromise. Brand building in India demands patience at 0-to-1, speed at 1-to-10 and systems at scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3 Pillars Section */}
      <section className="relative pb-12 pt-20 z-20 text-center">
        {/* Background curve */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150vw] md:w-[120vw] h-[100%] bg-[#f4f5f7] rounded-t-[50%_150px] md:rounded-t-[50%_150px] -z-10 shadow-sm border-t border-gray-200"></div>

        <div className="mx-auto max-w-5xl px-6 relative -mt-10">
           <motion.div 
             className="inline-flex items-center bg-brand-navy rounded-full pl-2 pr-6 py-1.5 mb-24 shadow-sm"
             initial={{ scale: 0.9, opacity: 0 }}
             whileInView={{ scale: 1, opacity: 1 }}
             viewport={{ once: true }}
           >
              <div className="w-5 h-5 rounded-full bg-brand-coral mr-4"></div>
              <span className="text-white text-xs md:text-sm font-bold uppercase tracking-wider">Glide has built all three.</span>
           </motion.div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 items-end justify-items-center">
              
              {/* Expertise Icon */}
              <div className="flex flex-col items-center">
                 <div className="flex flex-col gap-3 mb-8 items-center h-24 justify-center">
                    {/* Top Bar */}
                    <div className="relative w-24 h-3.5 bg-brand-yellow rounded-full">
                       <div className="absolute -right-2.5 -top-[3px] w-5 h-5 rounded-full bg-brand-navy border-2 border-[#f4f5f7]"></div>
                    </div>
                    {/* Middle Bar */}
                    <div className="relative w-20 h-3.5 bg-brand-navy rounded-full">
                       <div className="absolute -right-2.5 -top-[3px] w-5 h-5 rounded-full bg-brand-teal border-2 border-[#f4f5f7]"></div>
                    </div>
                    {/* Bottom Bar */}
                    <div className="relative w-24 h-3.5 bg-brand-navy rounded-full">
                       <div className="absolute -right-2.5 -top-[3px] w-5 h-5 rounded-full bg-brand-coral border-2 border-[#f4f5f7]"></div>
                    </div>
                 </div>
                 <h3 className="text-sm font-bold tracking-widest text-brand-navy uppercase">EXPERTISE</h3>
              </div>
              
              {/* Ecosystem Icon */}
              <div className="flex flex-col items-center">
                 <div className="relative w-24 h-24 mb-8 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full border-[14px] border-brand-yellow border-t-brand-navy border-r-brand-teal border-b-brand-coral transform rotate-45"></div>
                 </div>
                 <h3 className="text-sm font-bold tracking-widest text-brand-navy uppercase">ECOSYSTEM</h3>
              </div>

              {/* Execution Icon */}
              <div className="flex flex-col items-center">
                 <div className="flex items-center justify-center h-24 mb-8">
                    <div className="relative w-[76px] h-[76px]">
                       {/* Row 1 */}
                       <div className="absolute left-0 top-0 w-3.5 h-3.5 rounded-full bg-brand-coral"></div>
                       <div className="absolute left-[26px] top-0 w-3.5 h-3.5 rounded-full bg-[#CE888C]"></div>
                       <div className="absolute left-[52px] top-0 w-3.5 h-3.5 rounded-full bg-brand-teal"></div>
                       
                       {/* Row 2 */}
                       <div className="absolute left-0 top-[26px] w-3.5 h-3.5 rounded-full bg-brand-yellow"></div>
                       <div className="absolute left-[26px] top-[26px] w-3.5 h-3.5 rounded-full bg-brand-navy"></div>
                       <div className="absolute left-[52px] top-[26px] w-3.5 h-10 rounded-full bg-brand-teal"></div>
                       
                       {/* Row 3 */}
                       <div className="absolute left-0 top-[52px] w-10 h-3.5 bg-brand-yellow rounded-full"></div>
                       <div className="absolute left-[26px] top-[52px] w-3.5 h-3.5 rounded-full bg-brand-teal border-2 border-[#f4f5f7]"></div>
                    </div>
                 </div>
                 <h3 className="text-sm font-bold tracking-widest text-brand-navy uppercase">EXECUTION</h3>
              </div>
           </div>
        </div>
      </section>

      {/* Founders Deep Dive Section */}
      <section className="bg-brand-navy py-32 text-center text-white">
        <div className="mx-auto max-w-6xl px-6">
           <p className="text-gray-400 font-bold tracking-widest text-xs uppercase mb-6">OUR FOUNDERS</p>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-4 uppercase">
               INDIA SCALES FAST.<br/>
               WE SCALE FASTER.
            </h2>
            <p className="text-xs md:text-sm text-brand-yellow font-bold uppercase tracking-widest mb-16">
               Built by a team with deep systems, operations and institutional execution backgrounds.
            </p>

            {/* Introductory Founders Bio */}
            <div className="max-w-4xl mx-auto text-center mb-24 px-4">
              <p className="text-gray-300 text-sm md:text-base leading-relaxed font-medium mb-6">
                Glide was built by two professional entrepreneurs Mr. Shailesh Karwa & Mr. Sharad Dalmia who partnered to build several ventures from the ground up. Their first - an online office supplies platform — was acquired by Staples Inc. Their second — an ingredients platform serving FMCG and beauty companies like Unilever and L'Oréal — was acquired by IMCD. Those experiences taught them how to scale businesses in India, institutionalize processes and build with multinationals who seeks market access & operational rigour.
              </p>
              <p className="text-brand-yellow text-sm md:text-base font-bold tracking-wider uppercase mt-6">
                Glide isn't just a partner. We build, scale, and operate for India.
              </p>
            </div>

            {/* Clean founder biography columns side-by-side without images to match mockup exactly */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 text-left mt-24">
              
              {/* Shailesh */}
              <div className="flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-1 tracking-wider uppercase">SHAILESH KARWA</h3>
                <p className="text-[10px] text-brand-coral font-bold tracking-widest mb-6">CO-FOUNDER & DIRECTOR</p>
                <div className="space-y-4 text-xs md:text-sm text-gray-300 leading-relaxed font-medium">
                  <p>Shailesh comes from a business family but chose to carve out his own career path, starting at Tata Consultancy Services, where he spent five years creating integrated brokerage systems for large institutions, with pre-sales assignments in New York and London. That experience taught him how to build complex operational infrastructure that works at scale.</p>
                  <p>He believes in execution over vision: long on detail, short on rhetoric. Shailesh holds degrees in finance, accounting, and advertising from Mumbai University, an MBA in Entrepreneurship from S.P. Jain, and is a qualified ACS. Outside of work, he reads voraciously, writes, watches theatre and stays active in sports.</p>
                </div>
              </div>
              
              {/* Sharad */}
              <div className="flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-1 tracking-wider uppercase">SHARAD DALMIA</h3>
                <p className="text-[10px] text-brand-coral font-bold tracking-widest mb-6">CO-FOUNDER & DIRECTOR</p>
                <div className="space-y-4 text-xs md:text-sm text-gray-300 leading-relaxed font-medium">
                  <p>Sharad spent five years at Accenture working on management consulting, cost optimization and supply chain projects in manufacturing and pharma. That foundation taught him how to think operationally and approach problems with rigour, skills that shaped how Glide operates today.</p>
                  <p>He's a big believer in India's opportunity for entrepreneurs and puts his conviction into action as an active angel investor. Sharad studied at Cathedral & John Connon, Mumbai, and holds an MBA in Entrepreneurship from S.P. Jain Institute of Management & Research. He is also a founding member of the Indian Merchant Chamber's Young Entrepreneurs Wing.</p>
                </div>
              </div>

            </div>
        </div>
      </section>
      
    </div>
  );
}
