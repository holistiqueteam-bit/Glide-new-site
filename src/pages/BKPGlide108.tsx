export default function Glide108() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-24 pb-32 text-center px-6">
        <div className="mx-auto max-w-5xl">
          <p className="text-brand-navy font-bold tracking-widest text-sm mb-8 uppercase">GLIDE 108</p>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-brand-navy leading-tight mb-16">
            <span className="text-gray-300">INDIA'S FIRST</span> AI<br/>
            OPERATING SYSTEM <span className="text-gray-300">FOR<br/>
            CONSUMER BRANDS.</span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left bg-[#f4f5f7] p-12 rounded-3xl mb-16">
            <div>
              <h4 className="text-lg font-bold text-brand-navy mb-4 tracking-wider uppercase">Every<br/>Variable Seen.</h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                Market dynamics, consumer behaviour, competitive positioning and operational constraints—all mapped and monitored.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-brand-navy mb-4 tracking-wider uppercase">Every Variable<br/>Structured.</h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                Product, pricing, distribution, marketing and operations organized into systems that work together seamlessly.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold text-brand-navy mb-4 tracking-wider uppercase">Every Variable<br/>Executed.</h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                Speed where it matters, rigour where it counts and discipline across the entire brand-building process.
              </p>
            </div>
          </div>
          
          <button className="rounded-full bg-brand-teal px-10 py-4 text-sm font-semibold text-white transition hover:opacity-90 inline-flex items-center gap-3 shadow-lg">
            REQUEST ACCESS TO GLIDE 108 <div className="w-2 h-2 rounded-full bg-brand-yellow"></div>
          </button>
        </div>
      </section>

      {/* Interface Preview Section (Conceptual) */}
      <section className="bg-brand-navy py-32 overflow-hidden">
         <div className="mx-auto max-w-7xl px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
               Intelligence that drives execution.
            </h2>
            <p className="text-brand-yellow mb-20 max-w-2xl mx-auto">
               We replace scattered spreadsheets and fragmented reporting with a unified system of truth for your entire operation.
            </p>

            <div className="relative mx-auto max-w-5xl h-[500px] rounded-2xl bg-[#0a192f] border border-gray-800 shadow-2xl p-6 flex flex-col">
               {/* Mock UI Header */}
               <div className="flex items-center gap-4 mb-8 border-b border-gray-800 pb-4">
                  <div className="flex gap-2">
                     <div className="w-3 h-3 rounded-full bg-brand-coral"></div>
                     <div className="w-3 h-3 rounded-full bg-brand-yellow"></div>
                     <div className="w-3 h-3 rounded-full bg-brand-teal"></div>
                  </div>
                  <div className="text-gray-500 text-xs font-mono">glide108 / dashboard</div>
               </div>
               
               {/* Mock UI Content */}
               <div className="flex-1 grid grid-cols-3 gap-6">
                  <div className="col-span-2 grid grid-rows-2 gap-6">
                     <div className="bg-[#112240] rounded-xl p-6 flex flex-col justify-center items-center opacity-50">
                        <div className="w-full h-2 bg-gray-800 rounded-full mb-4">
                           <div className="w-3/4 h-full bg-brand-teal rounded-full"></div>
                        </div>
                        <div className="w-full h-2 bg-gray-800 rounded-full mb-4">
                           <div className="w-1/2 h-full bg-brand-yellow rounded-full"></div>
                        </div>
                        <div className="w-full h-2 bg-gray-800 rounded-full">
                           <div className="w-5/6 h-full bg-brand-coral rounded-full"></div>
                        </div>
                     </div>
                     <div className="grid grid-cols-2 gap-6">
                        <div className="bg-[#112240] rounded-xl p-6 opacity-50 flex items-center justify-center">
                           <div className="w-16 h-16 rounded-full border-4 border-brand-yellow border-t-transparent animate-spin"></div>
                        </div>
                        <div className="bg-[#112240] rounded-xl p-6 opacity-50 flex flex-col justify-between">
                           <div className="w-8 h-8 rounded bg-brand-teal mb-2"></div>
                           <div className="h-2 w-full bg-gray-800 rounded-full"></div>
                           <div className="h-2 w-2/3 bg-gray-800 rounded-full"></div>
                        </div>
                     </div>
                  </div>
                  <div className="bg-[#112240] rounded-xl p-6 flex flex-col gap-4 opacity-50">
                     <div className="h-4 w-1/2 bg-gray-700 rounded mb-4"></div>
                     {[...Array(6)].map((_, i) => (
                        <div key={i} className="flex gap-4 items-center">
                           <div className="w-8 h-8 rounded-full bg-gray-800"></div>
                           <div className="flex-1 h-2 bg-gray-800 rounded-full"></div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
