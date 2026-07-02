export default function BrandPartners() {
  const partners = [
    {
      name: "dyson",
      category: "Global Technology",
      description: "Dyson rewrites engineering conventions, with every product built on obsessive R&D",
      niche: "Hand Dryers & Air Purification",
      isSerif: false,
      jpText: null
    },
    {
      name: "belif",
      category: "Korean Skincare",
      description: "Belif bridges centuries-old apothecary wisdom with modern skincare science.",
      niche: "Herbal Formulations",
      isSerif: true,
      tagline: "believe in truth",
      jpText: null
    },
    {
      name: "DHC",
      category: "Japanese Skincare",
      description: "DHC embodies Japanese minimalism in skincare with fewer products of higher quality.",
      niche: "Minimalist Philosophy",
      isSerif: false,
      jpText: "日本の美のエキスパート\nYOUR JAPANESE BEAUTY EXPERT",
      bgBlue: true
    },
    // Adding mock partners to fill out the page
    {
      name: "LANEIGE",
      category: "Korean Skincare",
      description: "Specializing in Water Science technology, Laneige delivers profound hydration to reveal a clear, radiant glow.",
      niche: "Hydration Specialists",
      isSerif: false,
      jpText: null
    },
    {
      name: "Sulwhasoo",
      category: "Korean Luxury Skincare",
      description: "Rooted in traditional Korean herbal medicine, delivering holistic beauty solutions.",
      niche: "Anti-aging & Vitality",
      isSerif: true,
      jpText: null
    },
    {
      name: "TATCHA",
      category: "Japanese-Inspired Luxury",
      description: "Classic Japanese beauty rituals reimagined for modern skincare needs.",
      niche: "Purification & Nourishment",
      isSerif: true,
      jpText: null
    }
  ];

  return (
    <div className="bg-brand-navy min-h-screen text-white">
      <section className="pt-24 pb-20 text-center px-6">
        <div className="max-w-4xl mx-auto">
           <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
              MEET OUR<br/>PARTNERS.
           </h1>
           <p className="text-brand-yellow font-medium text-lg mx-auto max-w-xl">
              Different categories, different stages. Same operating principles
           </p>
        </div>
      </section>

      <section className="pb-32 px-6">
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
               <div key={index} className="bg-white p-10 flex flex-col text-black rounded-sm transform transition hover:-translate-y-2 duration-300">
                  <p className="text-xs text-gray-500 font-bold tracking-wider mb-8 uppercase">{partner.category}</p>
                  
                  <div className="mb-10 h-16 flex flex-col justify-center">
                     {partner.bgBlue ? (
                        <div className="flex items-center gap-3">
                           <div className="bg-[#0055A5] text-white p-2 font-bold text-xl text-center">DHC</div>
                           <div className="text-[10px] font-bold text-[#0055A5] leading-tight whitespace-pre-line">
                              {partner.jpText}
                           </div>
                        </div>
                     ) : (
                        <>
                           <h3 className={`text-4xl font-bold ${partner.isSerif ? 'font-serif tracking-tighter' : 'tracking-tight'} mb-1`}>
                              {partner.name}
                           </h3>
                           {partner.tagline && (
                              <p className="text-[10px] text-black tracking-widest uppercase">{partner.tagline}</p>
                           )}
                        </>
                     )}
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-12 flex-1 leading-relaxed">
                     {partner.description}
                  </p>
                  
                  <p className="text-[10px] text-gray-400 font-bold mt-auto border-t pt-4 uppercase">
                     {partner.niche}
                  </p>
               </div>
            ))}
         </div>
      </section>
    </div>
  );
}
