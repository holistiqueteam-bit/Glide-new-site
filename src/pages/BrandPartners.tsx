import React from 'react';
import { motion } from 'motion/react';

const partners = [
  {
    id: "dyson",
    category: "HAND DRYERS",
    title: "Global Tech & Innovation",
    logo: <img src="/dyson-logo.png" alt="Dyson" className="h-8 md:h-10 w-auto object-contain" />,
    image: "/dyson-handdryer.png",
    description: "Dyson hand dryers are engineered for high-traffic. Featuring exclusive Dyson technology to enhance client, customer and employee's experience of your business. All Dyson hand dryers come with a 5-year parts warranty and HEPA filters."
  },
  {
    id: "thefaceshop",
    category: "NATURAL KOREAN BEAUTY",
    title: "Clean Skincare",
    logo: <img src="/face-shop-logo.png" alt="The Face Shop" className="h-10 md:h-14 w-auto object-contain" />,
    image: "/face-shop-product.png",
    description: "The Face Shop is a global Korean beauty brand rooted in nature-inspired skincare, combining botanical ingredients with Korean innovation. Founded in Seoul in 2003, the brand is known for accessible, gentle and effective products built around natural beauty and everyday care."
  },
  {
    id: "belif",
    category: "THE CLEAN BEAUTY PROMISE",
    title: "Herbal apothecary",
    logo: <img src="/belif-logo.png" alt="Belif" className="h-10 md:h-14 w-auto object-contain" />,
    image: "/belif-product-logo.png",
    description: "Belif is a premium Korean skincare brand that bridges centuries-old European herbal wisdom with cutting-edge dermatological innovation. Founded in 2010 under LG H&H, the brand champions the \"True Skincare\" philosophy of clean, plant-powered formulations."
  },
  {
    id: "dhc",
    category: "INNOVATION MEETS RITUALS",
    title: "Japanese Beauty Expert",
    logo: <img src="/dhc-logo.png" alt="DHC" className="h-14 md:h-20 w-auto object-contain" />,
    image: "/dhc-product.png",
    description: "With a legacy spanning over 50 years, DHC is one of Japan's leading skincare brands, renowned for combining Japanese beauty philosophy with scientific innovation."
  },
  {
    id: "sixam",
    category: "MULTIFUNCTIONAL KOREAN SKINCARE",
    title: "Modern Lifestyle Skincare",
    logo: <img src="/sixam-logo.png" alt="SIX:AM" className="h-14 md:h-20 w-auto object-contain" />,
    image: "/sixam-product.png",
    description: "SIX:AM is a multifunctional Korean skincare brand built around high-performance formulations that simplify routines without compromising efficacy. Manufactured by one of Korea's leading ODMs, the brand is designed for modern lifestyles."
  },
  {
    id: "tbf",
    category: "INDIA'S FIRST EGG PROTEIN BAR",
    title: "Clean Functional Nutrition",
    logo: <img src="/tbf-logo.png" alt="To Be Frank" className="h-14 md:h-20 w-auto object-contain" />,
    image: "/tbf-product.png",
    description: "To Be Frank is India's first egg-based protein bar brand, redefining functional nutrition through clean, high-protein products that make healthy eating simple and accessible."
  },
  {
    id: "lindhaus",
    category: "MADE IN ITALY",
    title: "Professional Indoor Cleaning",
    logo: <img src="/lindhaus-logo.png" alt="Lindhaus" className="h-12 md:h-16 w-auto object-contain" />,
    image: "/lindhaus-product.png",
    description: "Lindhaus is an Italian manufacturer of professional indoor cleaning machines with over 40 years of expertise. Our reliable, ergonomic, and high-performance solutions are designed to maximize productivity, simplify operations, and reduce the total cost of ownership."
  },
  {
    id: "voltalux",
    category: "PREMIUM LIGHTING",
    title: "Residential Architectural Design",
    logo: <img src="/voltalux-logo.png" alt="VoltaLux" className="h-14 md:h-20 w-auto object-contain" />,
    image: "/voltalux-product.png",
    description: "VoltaLux creates premium residential lighting for architects, designers, and homeowners who see lighting as architecture."
  }
];

export default function BrandPartners() {
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      
      {/* Header */}
      <section className="bg-brand-navy relative pt-32 pb-64 px-6 overflow-hidden">
        {/* Abstract shape */}
        <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-brand-coral rounded-full -translate-x-1/2 -translate-y-1/3 opacity-80"></div>
        <div className="absolute top-0 left-[80px] w-[500px] h-[500px] border-[60px] border-brand-yellow rounded-full -translate-x-1/2 -translate-y-1/3 opacity-80"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-widest uppercase"
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            MEET OUR PARTNERS
          </motion.h1>
          <motion.p 
            className="text-xs md:text-sm text-gray-300 tracking-widest uppercase leading-relaxed max-w-2xl mx-auto font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            DIFFERENT CATEGORIES, DIFFERENT STAGES. SAME OPERATING<br />PRINCIPLES. MEET OUR PARTNERS.
          </motion.p>
        </div>
        
        {/* Portraits - Capsule and Circle side by side, fully inside banner */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 md:gap-10 z-20">
           {/* Left Capsule Portrait */}
           <motion.div 
             className="relative overflow-hidden bg-gray-200 shadow-2xl border-[4px] md:border-[6px] border-brand-navy flex-shrink-0 w-[240px] md:w-[380px] h-[110px] md:h-[180px] rounded-[60px] md:rounded-[100px]"
             initial={{ x: -60, opacity: 0, scale: 0.95 }}
             animate={{ x: 0, opacity: 1, scale: 1 }}
             transition={{ type: "spring", stiffness: 60, damping: 18, mass: 1, delay: 0.2 }}
           >
             <img 
               src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" 
               className="w-full h-full object-cover" 
               alt="Women collaborating" 
             />
             <div 
               className="absolute top-1/2 right-0 translate-x-[20%] -translate-y-1/2 w-[55%] pb-[55%] rounded-full bg-[#00B5B7] z-10 opacity-90"
             />
           </motion.div>

           {/* Right Circle Portrait */}
           <motion.div 
             className="rounded-full border-[4px] md:border-[6px] border-brand-navy overflow-hidden bg-gray-200 shadow-2xl flex-shrink-0 w-[110px] md:w-[180px] h-[110px] md:h-[180px]"
             initial={{ x: 60, opacity: 0, scale: 0.95 }}
             animate={{ x: 0, opacity: 1, scale: 1 }}
             transition={{ type: "spring", stiffness: 60, damping: 18, mass: 1, delay: 0.3 }}
           >
             <img 
               src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80" 
               className="w-full h-full object-cover" 
               alt="Man smiling" 
             />
           </motion.div>
        </div>
      </section>

      {/* Partners List - Mockup aligned layout */}
      <section className="pt-0 md:pt-40 pb-0 md:pb-32 px-6 max-w-4xl mx-auto">
        <motion.div 
          className="flex flex-col gap-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
           {partners.map((partner) => (
             <motion.div 
               key={partner.id} 
               className="flex flex-col md:flex-row gap-8 md:gap-16 items-start"
               variants={fadeInUp}
             >
               {/* Left Column - Image & Logo */}
               <div className="w-full md:w-[35%] flex flex-col shrink-0">
                 <div className="aspect-[16/10] w-full bg-gray-50 rounded-xl overflow-hidden mb-4 shadow-sm border border-gray-100">
                   <img src={partner.image} alt={partner.id} className="w-full h-full object-cover" />
                 </div>
                 <div className="mb-2 flex items-center min-h-[48px]">
                   {partner.logo}
                 </div>
               </div>
               
               {/* Right Column - Category & Description */}
               <div className="w-full md:w-[65%] md:pt-2">
                 <p className="text-[10px] font-extrabold tracking-widest text-brand-navy uppercase mb-3">
                   {partner.category}
                 </p>
                 <p className="text-gray-500 leading-relaxed text-xs md:text-sm font-medium">
                   {partner.description}
                 </p>
               </div>
             </motion.div>
           ))}
        </motion.div>
      </section>
      
    </div>
  );
}
