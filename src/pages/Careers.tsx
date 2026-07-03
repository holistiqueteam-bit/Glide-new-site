import React from 'react';
import { motion } from 'motion/react';

export default function Careers() {
  // Local user-uploaded images from the public folder
  const localImages = [
    "/careers-1.png",
    "/careers-2.png",
    "/careers-3.png",
    "/careers-4.png",
    "/careers-5.png"
  ];

  // Triplicate the array for seamless marquee looping
  const marqueeImages = [...localImages, ...localImages, ...localImages];

  return (
    <div className="bg-[#f4f5f7] min-h-screen overflow-x-hidden font-sans">
      
      {/* Hero Section */}
      <section className="bg-brand-navy pt-4 md:pt-20 pb-4 md:pb-12 text-center text-white relative z-10 px-6">
        <div className="max-w-6xl mx-auto w-full">
          {/* Static Header and Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-brand-coral text-3xl sm:text-4xl md:text-5xl lg:text-[42px] font-bold tracking-widest leading-[1.25] uppercase mb-8 whitespace-pre-line">
              WE’RE BUILDING SOMETHING{"\n"}REAL HERE.
            </h1>

            <p className="text-gray-300/90 text-xs sm:text-sm leading-relaxed max-w-3xl mx-auto font-medium mb-12">
              Glide operates the ecosystem that helps brands scale in India—and we do it by hiring people who think like owners. People who care about outcomes, who operate with accountability and who want to build systems that actually work at national scale. If you want to do work that matters, keep reading.
            </p>
          </motion.div>

          {/* Infinite Horizontal Scrolling Marquee */}
          <div className="careers-marquee-container mt-6 md:mt-14 mb-4 md:mb-8">
            <div className="careers-marquee-track">
              {marqueeImages.map((src, idx) => (
                <div key={idx} className="careers-marquee-card overflow-hidden">
                  <img 
                    src={src} 
                    alt={`Glide workspace ${idx + 1}`} 
                    className="w-full h-full object-cover" 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* "WHO THRIVES AT GLIDE" Section */}
      <section className="bg-white py-12 md:py-24 px-6 relative z-10 border-b border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-20">
            <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl text-brand-navy tracking-tight uppercase leading-none">
              WHO THRIVES AT GLIDE
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 md:gap-y-16">
            
            {/* Ownership */}
            <div className="flex flex-col items-start">
              <div className="flex h-3.5 w-28 rounded-full overflow-hidden mb-6 bg-gray-100">
                <div className="bg-brand-coral w-1/3 h-full"></div>
                <div className="bg-brand-yellow w-1/3 h-full"></div>
                <div className="bg-brand-teal w-1/3 h-full"></div>
              </div>
              <h3 className="text-brand-navy font-bold tracking-wide text-base sm:text-lg uppercase mb-3 leading-tight">
                YOU TAKE OWNERSHIP SERIOUSLY.
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-medium">
                When things work, you built them. When they break, you fix them. You care about the outcome because you're accountable for it.
              </p>
            </div>

            {/* Uncertainty */}
            <div className="flex flex-col items-start">
              <div className="flex h-3.5 w-28 rounded-full overflow-hidden mb-6 bg-gray-100">
                <div className="bg-brand-coral w-2/3 h-full"></div>
                <div className="bg-brand-yellow w-1/6 h-full"></div>
                <div className="bg-brand-teal w-1/6 h-full"></div>
              </div>
              <h3 className="text-brand-navy font-bold tracking-wide text-base sm:text-lg uppercase mb-3 leading-tight">
                UNCERTAINTY DOESN'T SLOW YOU DOWN.
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-medium">
                You build while things shift, see patterns before the dashboards catch up and are able to make the right decisions even without having all the answers.
              </p>
            </div>

            {/* Long-Horizon */}
            <div className="flex flex-col items-start">
              <div className="relative w-28 h-12 overflow-hidden mb-5">
                <svg viewBox="0 0 100 50" className="w-full h-full">
                  <path 
                    d="M 10 50 A 40 40 0 0 1 90 50" 
                    fill="none" 
                    stroke="url(#gradient-ring)" 
                    strokeWidth="12" 
                    strokeLinecap="round" 
                  />
                  <defs>
                    <linearGradient id="gradient-ring" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#EF5A4A" />
                      <stop offset="50%" stopColor="#FDB614" />
                      <stop offset="100%" stopColor="#00B5B7" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <h3 className="text-brand-navy font-bold tracking-wide text-base sm:text-lg uppercase mb-3 leading-tight">
                YOU THINK LONG-HORIZON.
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-medium">
                Quick wins are great, but not at the cost of what we're building. You care about brand health, sustainable growth and systems that last.
              </p>
            </div>

            {/* Thrives in Complexity */}
            <div className="flex flex-col items-start">
              <div className="flex gap-2.5 mb-8 pt-2.5">
                <div className="w-3.5 h-3.5 rounded-full bg-brand-coral"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-brand-yellow"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-brand-teal"></div>
              </div>
              <h3 className="text-brand-navy font-bold tracking-wide text-base sm:text-lg uppercase mb-3 leading-tight">
                YOU THRIVE IN COMPLEXITY.
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-medium">
                Growing brands at scale means balancing cultural nuance, operational realities and commercial decisions. You know how to navigate ambiguity without losing momentum.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* "WORKING AT GLIDE" Section */}
      <section className="bg-brand-navy grid grid-cols-1 lg:grid-cols-2 overflow-hidden shadow-xl">
        
        {/* Left Block */}
        <div className="p-8 sm:p-12 md:p-16 lg:p-24 flex flex-col justify-center text-left">
          <h2 className="text-white font-bold text-3xl sm:text-4xl md:text-[2.25rem] tracking-wider uppercase mb-6 leading-tight">
            WORKING AT GLIDE
          </h2>
          
          {/* Dots matching brand colors */}
          <div className="flex gap-3 mb-8">
            <span className="w-3.5 h-3.5 rounded-full bg-[#FDB614]"></span>
            <span className="w-3.5 h-3.5 rounded-full bg-[#00B5B7]"></span>
            <span className="w-3.5 h-3.5 rounded-full bg-[#EF5A4A]"></span>
          </div>

          <div className="space-y-6 text-white/80 text-xs sm:text-sm leading-relaxed font-medium max-w-xl">
            <p>
              We're intentional about the brands we partner with and the people we hire.
            </p>
            <p>
              Your ideas won't disappear into layers of hierarchy. You'll help shape decisions, solve real business problems and learn from operators who have built brands across India's consumer ecosystem.
            </p>
            <p>
              The work is demanding because the opportunity is meaningful. If you're excited by ownership, complexity and building things that last, you'll fit right in.
            </p>
            <p className="pt-4 text-[#FDB614] font-bold text-xs sm:text-sm tracking-wide">
              Join the Glide Brands team! Send your CV to{' '}
              <a 
                href="mailto:careers@glidebrands.in" 
                className="underline text-white hover:text-[#00B5B7] transition-colors"
              >
                careers@glidebrands.in
              </a>
            </p>
          </div>
        </div>

        {/* Right Block */}
        <div className="relative min-h-[350px] sm:min-h-[450px] lg:min-h-0 bg-gray-100">
          <img 
            src="/careers-glide.png" 
            alt="Team collaborating at Glide office" 
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </div>
      </section>

    </div>
  );
}
