import React from 'react';
import { motion, useTime, useTransform, MotionValue } from 'framer-motion';

/* ── Orbit cell data ─────────────────────────────────── */
type CellData = { type: 'photo' | 'solid'; src?: string; alt?: string; bg?: string };

const INNER_ITEMS: CellData[] = [
  { type: 'photo', src: 'https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&w=200&h=200&q=80', alt: 'Team' },
  { type: 'solid', bg: '#00B5B7' },
  { type: 'photo', src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80', alt: 'Professional' },
  { type: 'photo', src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=200&h=200&q=80', alt: 'Group' },
];

const OUTER_ITEMS: CellData[] = [
  { type: 'photo', src: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=200&h=200&q=80', alt: 'Meeting' },
  { type: 'solid', bg: '#191E4E' },
  { type: 'photo', src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=200&h=200&q=80', alt: 'Team laptop' },
  { type: 'solid', bg: '#00B5B7' },
  { type: 'photo', src: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=200&h=200&q=80', alt: 'Office' },
  { type: 'photo', src: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&h=200&q=80', alt: 'Professional man' },
];

/* ── Single orbiting cell ─────────────────────────────── */
function OrbitingCell({
  time, radius, durationSec, index, totalItems, direction, cell, size,
}: {
  time: MotionValue<number>;
  radius: number; durationSec: number;
  index: number; totalItems: number;
  direction: 1 | -1;
  cell: CellData; size: number;
}) {
  const startAngle = (index / totalItems) * 2 * Math.PI - Math.PI / 2;

  const x = useTransform(time, t => {
    const a = startAngle + direction * (t / 1000) * (2 * Math.PI / durationSec);
    return Math.cos(a) * radius - size / 2;
  });
  const y = useTransform(time, t => {
    const a = startAngle + direction * (t / 1000) * (2 * Math.PI / durationSec);
    return Math.sin(a) * radius - size / 2;
  });

  const baseStyle: React.CSSProperties = {
    position: 'absolute', top: '50%', left: '50%',
    width: size, height: size, borderRadius: '50%', overflow: 'hidden',
    boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
    cursor: 'pointer',
  };

  return (
    <motion.div style={{ position: 'absolute', top: '50%', left: '50%', x, y }}>
      <motion.div
        style={baseStyle}
        whileHover={{ scale: 1.22, boxShadow: '0 12px 40px rgba(0,181,183,0.4)', zIndex: 10 }}
        transition={{ type: 'spring', stiffness: 320, damping: 18 }}
      >
        {cell.type === 'solid' ? (
          <div style={{ width: '100%', height: '100%', background: cell.bg }} />
        ) : (
          <img src={cell.src} alt={cell.alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        )}
      </motion.div>
    </motion.div>
  );
}

/* ── Full orbit section ───────────────────────────────── */
function OrbitSection() {
  const time = useTime();
  const W = 500;
  const innerR = 138, outerR = 228;
  const innerS = 86, outerS = 74;

  return (
    <div style={{ position: 'relative', width: W, height: W, flexShrink: 0 }}>

      {/* Dashed orbit path rings */}
      {[innerR, outerR].map((r, i) => (
        <div key={i} style={{
          position: 'absolute', top: '50%', left: '50%',
          width: r * 2, height: r * 2,
          marginTop: -r, marginLeft: -r,
          borderRadius: '50%',
          border: `1.5px dashed rgba(0,181,183,${i === 0 ? 0.25 : 0.15})`,
          pointerEvents: 'none',
        }} />
      ))}

      {/* Subtle radial glow behind center */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        width: 200, height: 200,
        marginTop: -100, marginLeft: -100,
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,181,183,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Center — glide108 logo */}
      <motion.div
        style={{
          position: 'absolute', top: '50%', left: '50%',
          width: 112, height: 112,
          marginTop: -56, marginLeft: -56,
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.34, 1.56, 0.64, 1], delay: 0.4 }}
        whileHover={{ scale: 1.1 }}
      >
        <div style={{
          width: '100%', height: '100%', borderRadius: '50%',
          background: 'white',
          boxShadow: '0 8px 40px rgba(0,181,183,0.22), 0 2px 12px rgba(0,0,0,0.08)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          border: '2px solid rgba(0,181,183,0.15)',
        }}>
          <img src="/glie108-logo.png" alt="Glide 108"
            style={{ width: '72%', height: '72%', objectFit: 'contain' }} />
        </div>
      </motion.div>

      {/* Inner orbit — 4 cells, clockwise 10s */}
      {INNER_ITEMS.map((cell, i) => (
        <React.Fragment key={`in-${i}`}>
          <OrbitingCell time={time}
            radius={innerR} durationSec={10}
            index={i} totalItems={INNER_ITEMS.length}
            direction={1} cell={cell} size={innerS} />
        </React.Fragment>
      ))}

      {/* Outer orbit — 6 cells, counter-clockwise 18s */}
      {OUTER_ITEMS.map((cell, i) => (
        <React.Fragment key={`out-${i}`}>
          <OrbitingCell time={time}
            radius={outerR} durationSec={18}
            index={i} totalItems={OUTER_ITEMS.length}
            direction={-1} cell={cell} size={outerS} />
        </React.Fragment>
      ))}
    </div>
  );
}

/* ── Page ─────────────────────────────────────────────── */
export default function Glide108() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-28 pb-20 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center min-h-[540px]">

          {/* Left — Text */}
          <motion.div
            className="text-left flex flex-col justify-center px-6 md:px-12 lg:px-20 py-10"
            initial="hidden" animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-[52px] font-bold text-brand-navy leading-[1.15] tracking-tight uppercase mb-8"
              variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } } }}
            >
              AI OPERATING<br />
              <span className="text-brand-teal">ECO-SYSTEM</span> FOR<br />
              BRANDS.
            </motion.h1>
            <motion.p
              className="text-gray-500 text-[10px] md:text-[11px] tracking-[0.18em] uppercase font-semibold max-w-sm leading-relaxed"
              variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } }}
            >
              GREAT BRANDS ARE BUILT BY GETTING EVERYTHING THAT MATTERS RIGHT. THAT'S WHY WE CREATED GLIDE108.
            </motion.p>
          </motion.div>

          {/* Right — Planetary Orbit */}
          <motion.div
            className="flex justify-center items-center py-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <OrbitSection />
          </motion.div>

        </div>

        {/* Supervised AI OS Statement */}
        <motion.div
          className="max-w-4xl mx-auto text-center mt-16 mb-8 px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-brand-navy font-medium text-sm md:text-base leading-relaxed tracking-wide">
            Glide108 is a supervised AI operating system that sees every variable that determines brand success in India—product, pricing, distribution, marketing, supply chain, customer behaviour, competitive dynamics—and executes them as one integrated system.
          </p>
        </motion.div>
      </section>



      {/* "108 IS MORE THAN JUST A NUMBER" Section */}
      <section className="bg-white py-0 overflow-hidden">

        {/* Dome / Semicircle background container */}
        <div
          className="bg-[#F4F6F6] px-6 pb-20 pt-16 mx-auto"
          style={{
            borderTopLeftRadius: '50% 400px',
            borderTopRightRadius: '50% 400px',
            maxWidth: '100%',
          }}
        >
          {/* 108 + subtitle */}
          <div className="max-w-4xl mx-auto text-center mb-6">
            <h2 className="text-brand-teal font-bold leading-none tracking-tight mb-3" style={{ fontSize: 'clamp(64px, 10vw, 110px)' }}>
              108
            </h2>
            <p className="text-brand-navy font-bold tracking-[0.22em] text-[11px] md:text-xs uppercase mb-10">
              IS MORE THAN JUST A NUMBER.
            </p>
            <p className="text-gray-500 text-xs md:text-sm leading-relaxed max-w-2xl mx-auto" style={{ fontStyle: 'normal' }}>
              In Indian philosophy, 108 represents totality. The full cycle, nothing missing. For consumer brands in India, we read that as operational survival.
            </p>
          </div>

          {/* 3 Core Columns — left-aligned like mockup */}
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mt-16 px-4 md:px-8">

            {/* Observation */}
            <div className="flex flex-col items-start text-left">
              <div className="text-brand-teal mb-5">
                <svg width="44" height="44" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <circle cx="10.5" cy="10.5" r="6.5" />
                  <path strokeLinecap="round" d="M15.5 15.5L20 20" />
                  <circle cx="10.5" cy="10.5" r="2.5" />
                </svg>
              </div>
              <h4 className="text-brand-navy font-bold text-[11px] tracking-[0.22em] uppercase mb-3">OBSERVATION</h4>
              <p className="text-gray-500 text-[11px] md:text-xs leading-relaxed">
                See the market clearly, understand competitive dynamics and the patterns that drive consumer behaviour.
              </p>
            </div>

            {/* Structure */}
            <div className="flex flex-col items-start text-left">
              <div className="text-brand-teal mb-5">
                <svg width="44" height="44" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <rect x="3" y="3" width="7" height="5" rx="1" />
                  <rect x="3" y="11" width="7" height="5" rx="1" />
                  <path strokeLinecap="round" d="M10 5.5h4M14 5.5v8M10 13.5h4" />
                  <rect x="14" y="11" width="7" height="5" rx="1" />
                </svg>
              </div>
              <h4 className="text-brand-navy font-bold text-[11px] tracking-[0.22em] uppercase mb-3">STRUCTURE</h4>
              <p className="text-gray-500 text-[11px] md:text-xs leading-relaxed">
                Turn chaos into systems and organize complexity. Every variable mapped, measured and connected.
              </p>
            </div>

            {/* Practice */}
            <div className="flex flex-col items-start text-left">
              <div className="text-brand-teal mb-5">
                <svg width="44" height="44" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
              </div>
              <h4 className="text-brand-navy font-bold text-[11px] tracking-[0.22em] uppercase mb-3">PRACTICE</h4>
              <p className="text-gray-500 text-[11px] md:text-xs leading-relaxed">
                Execute with discipline, repeat what works and refine what doesn't. Never stop evolving.
              </p>
            </div>
          </div>

          {/* Operating Philosophy Footer */}
          <div className="text-center mt-16 px-6">
            <p className="text-gray-400 text-[10px] md:text-[11px] tracking-[0.2em] uppercase font-semibold mb-2">
              TOGETHER, THEY CREATE ONE OPERATING PHILOSOPHY:
            </p>
            <p className="text-brand-navy font-bold text-xs md:text-[13px] tracking-[0.15em] uppercase leading-relaxed">
              EVERY VARIABLE SEEN, STRUCTURED AND EXECUTED.<br />
              THAT'S THE GLIDE108 PRINCIPLE.
            </p>
          </div>
        </div>
      </section>

      {/* "BUILT FOR EVERY STAGE OF GROWTH" Section */}
      <section className="bg-brand-navy text-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center mb-20">
          <h2 className="text-xl md:text-3xl font-bold tracking-widest uppercase mb-4 text-white">
            BUILT FOR EVERY STAGE OF GROWTH
          </h2>
          <p className="text-[10px] md:text-xs text-gray-400 tracking-widest uppercase font-bold">
            AT EVERY STAGE, GLIDE108 ENSURES THAT NOTHING CRITICAL IS OVERLOOKED.
          </p>
        </div>

        {/* 3 Stages Columns */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 px-4">
          {/* Stage 1 */}
          <div className="flex flex-col text-left">
            <span className="text-brand-teal text-[10px] font-bold tracking-widest uppercase mb-2">STAGE 01</span>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">0 → 1</h3>
            
            {/* Progress Pill Bar */}
            <div className="h-2 w-full bg-gray-800 rounded-full mb-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 h-full w-[33%] bg-brand-teal rounded-full"></div>
            </div>

            <h4 className="text-brand-teal text-xs font-bold tracking-widest uppercase mb-4">DISCOVERY</h4>
            <p className="text-gray-300 text-[11px] md:text-xs leading-relaxed">
              Product-market fit, early validation and category positioning. Finding what works before scaling what doesn't.
            </p>
          </div>

          {/* Stage 2 */}
          <div className="flex flex-col text-left">
            <span className="text-brand-teal text-[10px] font-bold tracking-widest uppercase mb-2">STAGE 02</span>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">1 → 10</h3>
            
            {/* Progress Pill Bar */}
            <div className="h-2 w-full bg-gray-800 rounded-full mb-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 h-full w-[66%] bg-brand-teal rounded-full"></div>
            </div>

            <h4 className="text-brand-teal text-xs font-bold tracking-widest uppercase mb-4">REPEATABILITY</h4>
            <p className="text-gray-300 text-[11px] md:text-xs leading-relaxed">
              Channel optimization, unit economics and growth playbooks. Turning early traction into sustainable momentum.
            </p>
          </div>

          {/* Stage 3 */}
          <div className="flex flex-col text-left">
            <span className="text-brand-teal text-[10px] font-bold tracking-widest uppercase mb-2">STAGE 03</span>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">10 → 100</h3>
            
            {/* Progress Pill Bar */}
            <div className="h-2 w-full bg-gray-800 rounded-full mb-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 h-full w-[100%] bg-brand-teal rounded-full"></div>
            </div>

            <h4 className="text-brand-teal text-xs font-bold tracking-widest uppercase mb-4">SCALE</h4>
            <p className="text-gray-300 text-[11px] md:text-xs leading-relaxed">
              Brand building, operational efficiency and national reach. Managing complexity without breaking execution.
            </p>
          </div>
        </div>
      </section>

      {/* "AI AGENTS + HUMAN EXPERTISE" Section */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-2xl md:text-[2.25rem] font-bold tracking-widest uppercase text-brand-teal mb-4">
            AI AGENTS + HUMAN EXPERTISE
          </h2>
          <p className="text-[11px] md:text-sm text-gray-400 tracking-wide max-w-xl mx-auto font-medium">
            AI accelerates execution. Operators provide judgment. Glide108 brings them together.
          </p>
        </div>

        {/* Two Columns List */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 px-4 md:px-8">
          {/* AI AMPLIFIES EXECUTION */}
          <div className="flex flex-col">
            <h3 className="text-brand-navy font-bold text-xs md:text-[13px] tracking-[0.18em] uppercase mb-8 pb-3 border-b border-gray-100">
              AI AMPLIFIES EXECUTION:
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start">
                <span className="text-brand-navy font-bold mr-3 text-sm select-none">•</span>
                <div>
                  <h4 className="text-brand-navy font-bold text-xs md:text-[13px] tracking-wide">Market Intelligence</h4>
                  <p className="text-[9px] md:text-[10px] text-gray-400 uppercase tracking-widest mt-1 leading-relaxed">
                    CONSUMER TRENDS, COMPETITOR ACTIVITY AND CATEGORY SIGNALS
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-brand-navy font-bold mr-3 text-sm select-none">•</span>
                <div>
                  <h4 className="text-brand-navy font-bold text-xs md:text-[13px] tracking-wide">Content Intelligence</h4>
                  <p className="text-[9px] md:text-[10px] text-gray-400 uppercase tracking-widest mt-1 leading-relaxed">
                    IDENTIFIES WHAT WORKED, WHAT DIDN'T AND WHAT IS LIKELY TO WORK NEXT
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-brand-navy font-bold mr-3 text-sm select-none">•</span>
                <div>
                  <h4 className="text-brand-navy font-bold text-xs md:text-[13px] tracking-wide">Business Intelligence</h4>
                  <p className="text-[9px] md:text-[10px] text-gray-400 uppercase tracking-widest mt-1 leading-relaxed">
                    VISUALISES PERFORMANCE, UNCOVERS INSIGHTS AND SURFACES OPPORTUNITIES
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-brand-navy font-bold mr-3 text-sm select-none">•</span>
                <div>
                  <h4 className="text-brand-navy font-bold text-xs md:text-[13px] tracking-wide">Operational Intelligence</h4>
                  <p className="text-[9px] md:text-[10px] text-gray-400 uppercase tracking-widest mt-1 leading-relaxed">
                    SUPPORTS INVENTORY PLANNING, PRICING, PROMOTIONS AND DEMAND FORECASTING
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* OPERATORS CREATE ADVANTAGE */}
          <div className="flex flex-col">
            <h3 className="text-brand-navy font-bold text-xs md:text-[13px] tracking-[0.18em] uppercase mb-8 pb-3 border-b border-gray-100">
              OPERATORS CREATE ADVANTAGE:
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start">
                <span className="text-brand-navy font-bold mr-3 text-sm select-none">•</span>
                <div>
                  <h4 className="text-brand-navy font-bold text-xs md:text-[13px] tracking-wide">Strategic Direction</h4>
                  <p className="text-[9px] md:text-[10px] text-gray-400 uppercase tracking-widest mt-1 leading-relaxed">
                    CATEGORY POSITIONING, BRAND ARCHITECTURE AND LONG-TERM GROWTH
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-brand-navy font-bold mr-3 text-sm select-none">•</span>
                <div>
                  <h4 className="text-brand-navy font-bold text-xs md:text-[13px] tracking-wide">Commercial Decisions</h4>
                  <p className="text-[9px] md:text-[10px] text-gray-400 uppercase tracking-widest mt-1 leading-relaxed">
                    PRIORITISING INVESTMENTS AND BALANCING TRADE-OFFS
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-brand-navy font-bold mr-3 text-sm select-none">•</span>
                <div>
                  <h4 className="text-brand-navy font-bold text-xs md:text-[13px] tracking-wide">Relationship Capital</h4>
                  <p className="text-[9px] md:text-[10px] text-gray-400 uppercase tracking-widest mt-1 leading-relaxed">
                    BUILDING PARTNERSHIPS, NEGOCIATING AND INFLUENCING STAKEHOLDERS
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-brand-navy font-bold mr-3 text-sm select-none">•</span>
                <div>
                  <h4 className="text-brand-navy font-bold text-xs md:text-[13px] tracking-wide">Operator Judgment</h4>
                  <p className="text-[9px] md:text-[10px] text-gray-400 uppercase tracking-widest mt-1 leading-relaxed">
                    MAKING DECISIONS WHERE CONTEXT MATTERS MORE THAN DATA ALONE
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Centered Split Badge Pill */}
        <div className="flex justify-center mt-20 px-4">
          <div className="inline-flex flex-col sm:flex-row items-stretch sm:items-center rounded-full overflow-hidden text-[9px] md:text-[11px] font-bold tracking-wider uppercase border border-brand-teal shadow-sm">
            <span className="bg-brand-navy text-white px-6 py-3.5 text-center whitespace-nowrap">
              AI GIVES YOU BREADTH.
            </span>
            <span className="bg-brand-teal text-white px-6 py-3.5 text-center">
              HUMANS GIVE YOU DEPTH. SERIOUS BRAND BUILDING NEEDS BOTH.
            </span>
          </div>
        </div>
      </section>

      {/* "OUR PROMISE" Section */}
      <section className="bg-brand-navy text-white py-24 px-6 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-xl md:text-3xl font-bold tracking-widest uppercase mb-4 text-white">
            OUR PROMISE
          </h2>
          <p className="text-[10px] md:text-xs text-brand-teal tracking-widest uppercase font-bold mb-6">
            INDIA REWARDS COMPLETENESS OVER PARTIAL THINKING.
          </p>
          <p className="text-[11px] md:text-xs text-gray-400 max-w-2xl mx-auto leading-relaxed font-medium">
            Fragmented execution slows momentum and disconnected decisions create blind spots. That's where Glide108 comes in.
          </p>
        </div>

        {/* Promise 3 Columns */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 px-4 mb-24">
          {/* Column 1 - Every Variable Seen */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            {/* Coral, Yellow, Teal Dots Indicator */}
            <div className="flex gap-2.5 mb-6">
              <div className="w-3.5 h-3.5 rounded-full bg-brand-coral"></div>
              <div className="w-3.5 h-3.5 rounded-full bg-brand-yellow"></div>
              <div className="w-3.5 h-3.5 rounded-full bg-brand-teal"></div>
            </div>
            <h4 className="text-white font-bold text-xs md:text-sm tracking-widest uppercase mb-4">EVERY VARIABLE SEEN</h4>
            <p className="text-gray-400 text-[11px] md:text-xs leading-relaxed">
              Market dynamics, consumer behaviour, competitive positioning and operational constraints—all mapped and monitored.
            </p>
          </div>

          {/* Column 2 - Every Variable Structured */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            {/* Segmented Pill Indicator */}
            <div className="w-24 h-3.5 rounded-full overflow-hidden flex mb-6">
              <div className="w-1/3 h-full bg-brand-coral"></div>
              <div className="w-1/3 h-full bg-brand-yellow"></div>
              <div className="w-1/3 h-full bg-brand-teal"></div>
            </div>
            <h4 className="text-white font-bold text-xs md:text-sm tracking-widest uppercase mb-4">EVERY VARIABLE STRUCTURED</h4>
            <p className="text-gray-400 text-[11px] md:text-xs leading-relaxed">
              Product, pricing, distribution, marketing and operations organized into systems that work together seamlessly.
            </p>
          </div>

          {/* Column 3 - Every Variable Executed */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            {/* Two-segment Pill Indicator */}
            <div className="w-16 h-3.5 rounded-full overflow-hidden flex mb-6">
              <div className="w-2/3 h-full bg-brand-coral"></div>
              <div className="w-1/3 h-full bg-brand-teal"></div>
            </div>
            <h4 className="text-white font-bold text-xs md:text-sm tracking-widest uppercase mb-4">EVERY VARIABLE EXECUTED</h4>
            <p className="text-gray-400 text-[11px] md:text-xs leading-relaxed">
              Speed where it matters, rigour where it counts and discipline across the entire brand-building process.
            </p>
          </div>
        </div>

        {/* Footer of Promise - Giant 108 */}
        <div className="text-center pt-8">
          <p className="text-gray-500 text-[10px] md:text-xs tracking-widest uppercase font-bold mb-3">
            THAT'S GLIDE
          </p>
          <div className="text-brand-teal text-7xl md:text-9xl font-bold tracking-tight leading-none my-2">
            108
          </div>
          <p className="text-gray-400 text-[9px] md:text-[10px] tracking-widest uppercase font-bold">
            THE OPERATING SYSTEM FOR BRANDS BUILT TO LAST.
          </p>
        </div>
      </section>
    </div>
  );
}
