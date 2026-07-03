import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

/* ─── SVG Icons ─────────────────────────────────────────────────────────── */
const HandshakeIcon = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 16s3-3 7-3 7 3 7 3l-2 2s-2-2-5-2-5 2-5 2L8 16z" stroke="#00B5B7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M36 16s-3-3-7-3-7 3-7 3l2 2s2-2 5-2 5 2 5 2l2-2z" stroke="#00B5B7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 18l-4 4 4 4 4-4-4-4z" stroke="#00B5B7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 20l6 8 4-2M38 20l-6 8-4-2" stroke="#00B5B7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const UsersIcon = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="17" cy="15" r="5" stroke="#00B5B7" strokeWidth="1.8"/>
    <path d="M6 34c0-6.075 4.925-11 11-11s11 4.925 11 11" stroke="#00B5B7" strokeWidth="1.8" strokeLinecap="round"/>
    <circle cx="32" cy="16" r="4" stroke="#00B5B7" strokeWidth="1.8"/>
    <path d="M37 34c0-5-2.686-9-6-10.5" stroke="#00B5B7" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

const TruckIcon = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5" y="14" width="24" height="16" rx="2" stroke="#00B5B7" strokeWidth="1.8"/>
    <path d="M29 19h5l5 6v5h-10V19z" stroke="#00B5B7" strokeWidth="1.8" strokeLinejoin="round"/>
    <circle cx="12" cy="32" r="3" stroke="#00B5B7" strokeWidth="1.8"/>
    <circle cx="32" cy="32" r="3" stroke="#00B5B7" strokeWidth="1.8"/>
  </svg>
);

const SettingsIcon = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="22" cy="22" r="5" stroke="#00B5B7" strokeWidth="1.8"/>
    <path d="M22 8v4M22 32v4M8 22h4M32 22h4M12.1 12.1l2.83 2.83M29.07 29.07l2.83 2.83M31.9 12.1l-2.83 2.83M14.93 29.07l-2.83 2.83" stroke="#00B5B7" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

const TrophyIcon = () => (
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 8h14v12c0 3.866-3.134 7-7 7s-7-3.134-7-7V8z" stroke="#00B5B7" strokeWidth="1.8"/>
    <path d="M15 12H9a4 4 0 0 0 0 8h6M29 12h6a4 4 0 0 1 0 8h-6" stroke="#00B5B7" strokeWidth="1.8" strokeLinecap="round"/>
    <path d="M22 27v6M16 36h12" stroke="#00B5B7" strokeWidth="1.8" strokeLinecap="round"/>
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2 6h8M7 3l3 3-3 3" stroke="#191E4E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/* ─── Slide data ────────────────────────────────────────────────────────── */
const slides = [
  {
    type: "main",
    title: (
      <>
        POWERING INDIA'S NEXT<br />GENERATION OF<br />
        <span style={{ color: '#FDB614' }}>INTERNATIONAL BRANDS</span>
      </>
    ),
    subtitle: "We turn India's complexity into your competitive advantage.",
    buttonText: "KNOW MORE",
    buttonLink: "/about",
    images: [
      { url: "/home-1.png", type: "image" },
      { type: "teal" },
      { url: "/home-2.png", type: "image" }
    ]
  },
  {
    type: "glide-108",
    topLabel: "GLIDE 108",
    titleBig: "108",
    titleSub: "Is More Than Just a Number",
    subtitle: "We turn India's complexity into your competitive advantage.",
    buttonText: "GLIDE 108",
    buttonLink: "/glide-108",
    imageUrl: "/home-5.png"
  },
  {
    type: "glide-capital",
    title: (
      <>
        WE DON'T<br />ADVISE FROM<br />THE OUTSIDE
      </>
    ),
    subtitle: "IF YOU'RE BUILDING A BRAND FOR INDIA'S NEXT DECADE, LET'S TALK.",
    buttonText: "GLIDE CAPITAL",
    buttonLink: "/glide-capital",
    leftImageUrl: "/home-3.png",
    rightImageUrl: "/home-4.png"
  }
];

/* ─── Capability cards data ─────────────────────────────────────────────── */
const capabilities = [
  {
    icon: <HandshakeIcon />,
    title: "JOINT BUSINESS\nPLAN",
    desc: "A shared roadmap built with brand-targets, milestones, P&L and accountability mapped end-to-end."
  },
  {
    icon: <UsersIcon />,
    title: "DEDICATED BRAND &\nMARKETING TEAM",
    desc: "An embedded operating team owning marketing, growth and day-to-day execution as brand owners, not vendors."
  },
  {
    icon: <TruckIcon />,
    title: "SUPPLY CHAIN\nECOSYSTEM",
    desc: "Distribution, sourcing and compliance infrastructure already mapped for Indian terrain."
  },
  {
    icon: <SettingsIcon />,
    title: "GLIDE 108 OPERATING\nSYSTEM",
    desc: "Our supervised AI + human OS that sees, structures and executes every variable that determines brand success."
  },
  {
    icon: <TrophyIcon />,
    title: "RESULT WITH\nOWNERSHIP",
    desc: "We carry the outcome — vision, execution, risk and reward — measured on what compounds, not what launches."
  }
];

/* ─── Brand cards data ──────────────────────────────────────────────────── */
const brandCards = [
  {
    category: "HAND DRYERS",
    logo: "/dyson-logo.png",
    desc: "Dyson hand dryers are engineered for high-traffic. Featuring exclusive Dyson technology to enhance client, customer and employee's experience of your business."
  },
  {
    category: "NATURAL KOREAN BEAUTY",
    logo: "/face-shop-logo.png",
    desc: "The Face Shop is a global Korean beauty brand rooted in nature-inspired skincare, combining botanical ingredients with Korean innovation."
  },
  {
    category: "THE CLEAN BEAUTY PROMISE",
    logo: "/belif-logo.png",
    desc: "Belif is a premium Korean skincare brand that bridges centuries-old European herbal wisdom with cutting-edge dermatological innovation."
  },
  {
    category: "INNOVATION MEETS RITUALS",
    logo: "/dhc-logo.png",
    desc: "With a legacy spanning over 50 years, DHC is one of Japan's leading skincare brands, renowned for combining Japanese beauty philosophy with scientific innovation."
  },
  {
    category: "MULTIFUNCTIONAL KOREAN SKINCARE",
    logo: "/sixam-logo.png",
    desc: "SIX:AM is a multifunctional Korean skincare brand built around high-performance formulations that simplify routines without compromising efficacy."
  },
  {
    category: "INDIA'S FIRST EGG PROTEIN BAR",
    logo: "/tbf-logo.png",
    desc: "To Be Frank is India's first egg-based protein bar brand, redefining functional nutrition through clean, high-protein products."
  },
  {
    category: "MADE IN ITALY",
    logo: "/lindhaus-logo.png",
    desc: "Lindhaus is an Italian manufacturer of professional indoor cleaning machines with over 40 years of expertise in high-performance configurations."
  },
  {
    category: "PREMIUM LIGHTING",
    logo: "/voltalux-logo.png",
    desc: "VoltaLux creates premium residential lighting for architects, designers, and homeowners who see lighting as architecture."
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardHover = {
    hover: {
      y: -8,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
    }
  };


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    const autoScrollTimer = setInterval(() => {
      const card = container.firstElementChild as HTMLElement;
      const cardWidth = card ? card.offsetWidth + 24 : 344;
      const maxScroll = container.scrollWidth - container.clientWidth;
      if (container.scrollLeft >= maxScroll - 10) {
        container.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        container.scrollBy({ left: cardWidth, behavior: 'smooth' });
      }
    }, 4000);
    return () => clearInterval(autoScrollTimer);
  }, []);

  return (
    <div style={{ backgroundColor: '#fff', overflow: 'hidden', fontFamily: "'Montserrat', sans-serif" }}>

      {/* ══════════════════════════════════════════════
          HERO SECTION
      ══════════════════════════════════════════════ */}
      <section className="bg-white px-6 py-10 md:py-16 text-center min-h-[550px] md:min-h-[700px] flex items-center justify-center">
        <div style={{ maxWidth: '900px', width: '100%', margin: '0 auto' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
              {/* Top Label */}
              {slides[currentSlide].topLabel && (
                <span style={{
                  fontSize: '10px',
                  fontWeight: 700,
                  letterSpacing: '0.25em',
                  color: '#191E4E',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '16px'
                }}>
                  {slides[currentSlide].topLabel}
                </span>
              )}

              {/* ── Slide type: main ── */}
              {slides[currentSlide].type === 'main' && (
                <>
                  <h1 style={{
                    fontSize: 'clamp(20px, 5.5vw, 64px)',
                    fontWeight: 500,
                    color: '#191E4E',
                    lineHeight: 1.1,
                    textTransform: 'uppercase',
                    letterSpacing: '-0.01em',
                    marginBottom: '28px',
                    fontFamily: "'Montserrat', sans-serif"
                  }}>
                    {slides[currentSlide].title}
                  </h1>

                  {/* Three circles */}
                  <div className="flex justify-center items-center gap-3 md:gap-5 mb-8">
                    {slides[currentSlide].images!.map((img, idx) => (
                      <div 
                        key={idx} 
                        className={
                          idx === 1 
                            ? "w-24 h-24 sm:w-32 md:w-[160px] md:h-[160px] rounded-full overflow-hidden flex-shrink-0 bg-brand-teal shadow-lg"
                            : "w-[75px] h-[75px] sm:w-[105px] md:w-[145px] md:h-[145px] rounded-full overflow-hidden flex-shrink-0 bg-gray-200 shadow-lg"
                        }
                      >
                        {img.type === 'image' && (
                          <img src={img.url} alt="" className="w-full h-full object-cover" />
                        )}
                      </div>
                    ))}
                  </div>

                  <p style={{ color: '#666', fontSize: '14px', fontWeight: 500, marginBottom: '28px' }}>
                    {slides[currentSlide].subtitle}
                  </p>
                </>
              )}

              {/* ── Slide type: glide-108 ── */}
              {slides[currentSlide].type === 'glide-108' && (
                <>
                  <div style={{ marginBottom: '8px', textAlign: 'center' }}>
                    <span style={{
                      fontSize: 'clamp(60px, 12vw, 140px)',
                      fontWeight: 500,
                      color: '#00B5B7',
                      lineHeight: 1,
                      display: 'block',
                      letterSpacing: '-0.04em'
                    }}>108</span>
                    <span style={{
                      fontSize: '11px',
                      fontWeight: 700,
                      color: '#191E4E',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      display: 'block',
                      marginBottom: '24px'
                    }}>Is More Than Just a Number</span>
                  </div>

                  {/* Capsule image */}
                  <div className="w-full max-w-[280px] md:max-w-[380px] h-[130px] md:h-[180px] rounded-[100px] overflow-hidden relative mx-auto mb-8 shadow-lg">
                    <div style={{
                      position: 'absolute', top: '50%', left: 0,
                      transform: 'translate(-20%, -50%)',
                      width: '55%', paddingBottom: '55%',
                      borderRadius: '50%', backgroundColor: '#191E4E', zIndex: 1, opacity: 0.9
                    }} />
                    <img src={slides[currentSlide].imageUrl} alt="" className="w-full h-full object-cover" />
                  </div>

                  <p style={{ color: '#666', fontSize: '14px', fontWeight: 500, marginBottom: '28px' }}>
                    {slides[currentSlide].subtitle}
                  </p>
                </>
              )}

              {/* ── Slide type: glide-capital ── */}
              {slides[currentSlide].type === 'glide-capital' && (
                <>
                  <h1 style={{
                    fontSize: 'clamp(18px, 5vw, 56px)',
                    fontWeight: 500,
                    color: '#191E4E',
                    lineHeight: 1.1,
                    textTransform: 'uppercase',
                    letterSpacing: '-0.01em',
                    marginBottom: '28px',
                    fontFamily: "'Montserrat', sans-serif"
                  }}>
                    {slides[currentSlide].title}
                  </h1>

                  <div className="flex justify-center items-center gap-5 md:gap-10 mb-8 flex-wrap">
                    <div className="w-full max-w-[220px] md:max-w-[320px] h-[110px] md:h-[155px] rounded-[100px] overflow-hidden relative shadow-lg">
                      <div style={{ position: 'absolute', top: '50%', right: 0, transform: 'translate(20%, -50%)', width: '55%', paddingBottom: '55%', borderRadius: '50%', backgroundColor: '#00B5B7', zIndex: 1, opacity: 0.9 }} />
                      <img src={slides[currentSlide].leftImageUrl} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-24 h-24 md:w-[140px] md:h-[140px] rounded-full overflow-hidden shadow-lg">
                      <img src={slides[currentSlide].rightImageUrl} alt="" className="w-full h-full object-cover" />
                    </div>
                  </div>

                  <p style={{
                    color: '#191E4E', fontSize: '9px', fontWeight: 700,
                    letterSpacing: '0.15em', textTransform: 'uppercase',
                    marginBottom: '28px', maxWidth: '420px'
                  }}>
                    {slides[currentSlide].subtitle}
                  </p>
                </>
              )}

              {/* CTA Button */}
              <Link
                to={slides[currentSlide].buttonLink || '/'}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '12px',
                  backgroundColor: '#00B5B7', color: 'white',
                  padding: '12px 28px', borderRadius: '100px',
                  fontSize: '12px', fontWeight: 700,
                  textDecoration: 'none', letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  boxShadow: '0 4px 14px rgba(0,181,183,0.3)',
                  transition: 'opacity 0.2s'
                }}
              >
                {slides[currentSlide].buttonText}
                <span style={{
                  width: '20px', height: '20px', borderRadius: '50%',
                  backgroundColor: '#FDB614',
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0
                }}>
                  {slides[currentSlide].type === 'main' ? <ArrowRightIcon /> : null}
                </span>
              </Link>
            </motion.div>
          </AnimatePresence>

          {/* Slide dots */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '48px' }}>
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Slide ${idx + 1}`}
                style={{
                  width: '13px', height: '13px', borderRadius: '50%', border: 'none',
                  cursor: 'pointer', padding: 0,
                  backgroundColor: idx === 0 ? '#FDB614' : idx === 1 ? '#00B5B7' : '#191E4E',
                  opacity: currentSlide === idx ? 1 : 0.35,
                  transform: currentSlide === idx ? 'scale(1.25)' : 'scale(1)',
                  transition: 'all 0.3s ease'
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          CAPABILITIES SECTION
      ══════════════════════════════════════════════ */}
      <section className="relative bg-[#F4F5F7] pt-20 pb-[100px] px-6 rounded-t-[50%_80px] md:rounded-t-[50%_150px] -mt-5 z-10">

        <div style={{ maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          {/* Header */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            style={{ textAlign: 'center', marginBottom: '64px' }}
          >
            <span style={{
              fontSize: '10px', fontWeight: 700, letterSpacing: '0.25em',
              color: '#191E4E', textTransform: 'uppercase', display: 'block', marginBottom: '20px'
            }}>
              WE OPERATE THE ECOSYSTEMS TO BUILD BRANDS IN INDIA
            </span>
            <div style={{ lineHeight: 1.1, textTransform: 'uppercase' }}>
              <div style={{ fontSize: 'clamp(32px, 5vw, 64px)', fontWeight: 500, color: '#ccc', letterSpacing: '-0.01em' }}>
                ONE PARTNER
              </div>
              <div style={{ fontSize: 'clamp(32px, 5vw, 64px)', fontWeight: 500, color: '#191E4E', letterSpacing: '-0.01em' }}>
                EVERY CAPABILITY
              </div>
              <div style={{ fontSize: 'clamp(32px, 5vw, 64px)', fontWeight: 500, color: '#ccc', letterSpacing: '-0.01em' }}>
                REQUIRED TO SCALE
              </div>
            </div>
          </motion.div>

          {/* Row 1 - 3 items */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-x-16 md:gap-y-12 mb-12 md:mb-14"
          >
            {capabilities.slice(0, 3).map((cap, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                whileHover="hover"
                style={{ display: 'flex', flexDirection: 'column', cursor: 'default' }}
              >
                <motion.div variants={cardHover} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div style={{ marginBottom: '16px' }}>{cap.icon}</div>
                  <h3 style={{
                    color: '#191E4E', fontWeight: 800, fontSize: '11px',
                    letterSpacing: '0.12em', textTransform: 'uppercase',
                    marginBottom: '12px', lineHeight: 1.5,
                    whiteSpace: 'pre-line', fontFamily: "'Montserrat', sans-serif"
                  }}>
                    {cap.title}
                  </h3>
                  <p style={{ color: '#888', fontSize: '11px', lineHeight: 1.7, fontWeight: 500 }}>
                    {cap.desc}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Row 2 - 2 items centered */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-col md:flex-row justify-center items-stretch md:items-start gap-12 md:gap-[96px]"
          >
            {capabilities.slice(3, 5).map((cap, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                whileHover="hover"
                className="flex flex-col max-w-none md:max-w-[280px] w-full cursor-default"
              >
                <motion.div variants={cardHover} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <div style={{ marginBottom: '16px' }}>{cap.icon}</div>
                  <h3 style={{
                    color: '#191E4E', fontWeight: 800, fontSize: '11px',
                    letterSpacing: '0.12em', textTransform: 'uppercase',
                    marginBottom: '12px', lineHeight: 1.5,
                    whiteSpace: 'pre-line', fontFamily: "'Montserrat', sans-serif"
                  }}>
                    {cap.title}
                  </h3>
                  <p style={{ color: '#888', fontSize: '11px', lineHeight: 1.7, fontWeight: 500 }}>
                    {cap.desc}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          BRANDS WE REPRESENT SECTION
      ══════════════════════════════════════════════ */}
      <section style={{ backgroundColor: '#191E4E', padding: '60px 0', color: 'white' }}>
        <div className="max-w-[1300px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row gap-10 md:gap-12 items-stretch">

            {/* Left column */}
            <div className="w-full md:w-[300px] flex-shrink-0 flex flex-col justify-between mb-6 md:mb-0">
              <div>
                <h2 style={{
                  fontSize: 'clamp(28px, 3.5vw, 44px)',
                  fontWeight: 800, lineHeight: 1.1,
                  textTransform: 'uppercase', letterSpacing: '-0.01em',
                  color: 'white', marginBottom: '20px',
                  fontFamily: "'Montserrat', sans-serif"
                }}>
                  BRANDS WE REPRESENT
                </h2>
                <div style={{ width: '56px', height: '4px', backgroundColor: '#FDB614', borderRadius: '4px' }} />
              </div>
              <p style={{
                color: '#FDB614', fontSize: '13px', fontWeight: 600,
                lineHeight: 1.7, marginTop: '24px'
              }}>
                Different categories, different stages.<br />
                Same operating principles.
              </p>
            </div>

            {/* Right scrollable cards */}
            <div
              ref={scrollRef}
              className="scrollbar-hide w-full flex gap-5 overflow-x-auto pb-4 scroll-smooth"
              style={{
                flex: 1, scrollSnapType: 'x mandatory'
              }}
            >
              {brandCards.map((card, i) => (
                <div 
                  key={i} 
                  className="w-[calc(100vw-48px)] md:w-[260px] shrink-0 bg-white text-[#191E4E] p-7 rounded-xl flex flex-col min-h-[260px]"
                  style={{ scrollSnapAlign: 'start' }}
                >
                  <p style={{
                    fontSize: '9px', color: '#aaa', fontWeight: 800,
                    letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '16px'
                  }}>
                    {card.category}
                  </p>

                  <div style={{ height: '40px', display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                    <img 
                      src={card.logo} 
                      alt="Brand Partner Logo" 
                      style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }} 
                    />
                  </div>

                  <p style={{ color: '#666', fontSize: '11px', lineHeight: 1.7, fontWeight: 500, marginTop: '8px' }}>
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          GLIDE CAPITAL / BUILDING ENDURING BRANDS
      ══════════════════════════════════════════════ */}
      <section className="relative bg-[#F4F5F7] mt-16 pt-[100px] pb-[100px] px-6 rounded-t-[50%_80px] md:rounded-t-[50%_150px] z-10">

        <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          {/* Header */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            style={{ textAlign: 'center', marginBottom: '64px' }}
          >
            <span style={{
              fontSize: '10px', fontWeight: 700, letterSpacing: '0.25em',
              color: '#191E4E', textTransform: 'uppercase', display: 'block', marginBottom: '16px'
            }}>
              GLIDE CAPITAL
            </span>
            <h2 style={{
              fontSize: 'clamp(28px, 5vw, 60px)',
              fontWeight: 800, color: '#191E4E',
              lineHeight: 1.1, textTransform: 'uppercase',
              letterSpacing: '-0.01em', fontFamily: "'Montserrat', sans-serif"
            }}>
              BUILDING ENDURING<br />BRANDS FOR INDIA
            </h2>
          </motion.div>

          {/* 2x2 grid */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-x-[80px] md:gap-y-[48px] max-w-[800px] mx-auto mb-14"
          >
            
            {/* Capital */}
            <motion.div 
              variants={fadeInUp} 
              whileHover="hover"
              style={{ display: 'flex', flexDirection: 'column', cursor: 'default' }}
            >
              <motion.div variants={cardHover} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ display: 'flex', height: '14px', width: '80px', borderRadius: '100px', overflow: 'hidden', marginBottom: '16px' }}>
                  <div style={{ width: '40%', backgroundColor: '#EF5A4A' }} />
                  <div style={{ width: '30%', backgroundColor: '#FDB614' }} />
                  <div style={{ width: '30%', backgroundColor: '#00B5B7' }} />
                </div>
                <h3 style={{ color: '#191E4E', fontWeight: 800, fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '10px', fontFamily: "'Montserrat', sans-serif" }}>
                  CAPITAL
                </h3>
                <p style={{ color: '#888', fontSize: '11px', lineHeight: 1.7, fontWeight: 500 }}>
                  Strategic investment sized to your stage and ambition whether you're entering India or scaling from 1 to 10 to 100.
                </p>
              </motion.div>
            </motion.div>

            {/* Operating Infrastructure */}
            <motion.div 
              variants={fadeInUp} 
              whileHover="hover"
              style={{ display: 'flex', flexDirection: 'column', cursor: 'default' }}
            >
              <motion.div variants={cardHover} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                  <div style={{ display: 'flex', height: '14px', width: '52px', borderRadius: '100px', overflow: 'hidden' }}>
                    <div style={{ width: '50%', backgroundColor: '#FDB614' }} />
                    <div style={{ width: '50%', backgroundColor: '#EF5A4A' }} />
                  </div>
                  <div style={{ width: '14px', height: '14px', borderRadius: '50%', backgroundColor: '#00B5B7', flexShrink: 0 }} />
                </div>
                <h3 style={{ color: '#191E4E', fontWeight: 800, fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '10px', fontFamily: "'Montserrat', sans-serif" }}>
                  OPERATING INFRASTRUCTURE
                </h3>
                <p style={{ color: '#888', fontSize: '11px', lineHeight: 1.7, fontWeight: 500 }}>
                  Vendor networks, regulatory pathways, distribution systems and marketing playbooks. Decades of embedded India expertise deployed for your timeline.
                </p>
              </motion.div>
            </motion.div>

            {/* Glide108 Access */}
            <motion.div 
              variants={fadeInUp} 
              whileHover="hover"
              style={{ display: 'flex', flexDirection: 'column', cursor: 'default' }}
            >
              <motion.div variants={cardHover} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ marginBottom: '16px', height: '32px', display: 'flex', alignItems: 'flex-end' }}>
                  <svg width="52" height="26" viewBox="0 0 52 26" fill="none">
                    <path d="M3 26C3 13.297 13.297 3 26 3C38.703 3 49 13.297 49 26" stroke="url(#arch-g1)" strokeWidth="5.5" strokeLinecap="round"/>
                    <defs>
                      <linearGradient id="arch-g1" x1="0" y1="26" x2="52" y2="26" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#191E4E"/>
                        <stop offset="100%" stopColor="#00B5B7"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h3 style={{ color: '#191E4E', fontWeight: 800, fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '10px', fontFamily: "'Montserrat', sans-serif" }}>
                  GLIDE108 ACCESS
                </h3>
                <p style={{ color: '#888', fontSize: '11px', lineHeight: 1.7, fontWeight: 500 }}>
                  Our supervised AI operating system for consumer brands to ensure that every critical variable is seen, structured and executed.
                </p>
              </motion.div>
            </motion.div>

            {/* Curated Portfolio */}
            <motion.div 
              variants={fadeInUp} 
              whileHover="hover"
              style={{ display: 'flex', flexDirection: 'column', cursor: 'default' }}
            >
              <motion.div variants={cardHover} style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', alignItems: 'center' }}>
                  <div style={{ width: '14px', height: '14px', borderRadius: '50%', backgroundColor: '#EF5A4A' }} />
                  <div style={{ width: '14px', height: '14px', borderRadius: '50%', backgroundColor: '#FDB614' }} />
                  <div style={{ width: '14px', height: '14px', borderRadius: '50%', backgroundColor: '#00B5B7' }} />
                </div>
                <h3 style={{ color: '#191E4E', fontWeight: 800, fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '10px', fontFamily: "'Montserrat', sans-serif" }}>
                  CURATED PORTFOLIO SUPPORT
                </h3>
                <p style={{ color: '#888', fontSize: '11px', lineHeight: 1.7, fontWeight: 500 }}>
                  Selective investments mean your success gets our full attention. We choose just a few brands with a focus on depth.
                </p>
              </motion.div>
            </motion.div>

          </motion.div>

          {/* CTA */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            style={{ textAlign: 'center' }}
          >
            <Link
              to="/glide-capital"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                backgroundColor: '#00B5B7', color: 'white',
                padding: '12px 28px', borderRadius: '100px',
                fontSize: '12px', fontWeight: 700,
                textDecoration: 'none', letterSpacing: '0.08em',
                boxShadow: '0 4px 14px rgba(0,181,183,0.3)'
              }}
            >
              LET'S TALK
              <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FDB614', flexShrink: 0 }} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          AI OPERATING ECOSYSTEM SECTION
      ══════════════════════════════════════════════ */}
      <section style={{ backgroundColor: '#191E4E', color: 'white', padding: '100px 24px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {/* Label & Heading */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p style={{
              fontSize: '10px', fontWeight: 700, letterSpacing: '0.25em',
              color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase',
              textAlign: 'center', marginBottom: '24px'
            }}>
              GLIDE 108
            </p>

            <h2 style={{
              fontSize: 'clamp(28px, 5vw, 58px)',
              fontWeight: 800, lineHeight: 1.1,
              textAlign: 'center', marginBottom: '80px',
              textTransform: 'uppercase', letterSpacing: '-0.01em',
              fontFamily: "'Montserrat', sans-serif"
            }}>
              AI OPERATING <span style={{ color: '#FDB614' }}>ECOSYSTEM</span><br />
              FOR <span style={{ color: '#FDB614' }}>BRANDS.</span>
            </h2>
          </motion.div>

          {/* 3-column features */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16"
          >
            {[
              {
                title: 'EVERY\nVARIABLE SEEN.',
                desc: 'Market dynamics, consumer behaviour, competitive positioning and operational constraints—all mapped and monitored.'
              },
              {
                title: 'EVERY VARIABLE\nSTRUCTURED.',
                desc: 'Product, pricing, distribution, marketing and operations organized into systems that work together seamlessly.'
              },
              {
                title: 'EVERY VARIABLE\nEXECUTED.',
                desc: 'Speed where it matters, rigour where it counts and discipline across the entire brand-building process.'
              }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                whileHover="hover"
                style={{ cursor: 'default' }}
              >
                <motion.div variants={cardHover}>
                  <h4 style={{
                    color: 'white', fontWeight: 800, fontSize: '12px',
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    marginBottom: '16px', lineHeight: 1.5, whiteSpace: 'pre-line',
                    fontFamily: "'Montserrat', sans-serif"
                  }}>
                    {item.title}
                  </h4>
                  <p style={{ color: '#9CA3AF', fontSize: '11px', lineHeight: 1.7, fontWeight: 500 }}>
                    {item.desc}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            style={{ textAlign: 'center' }}
          >
            <Link
              to="/glide-108"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                backgroundColor: '#00B5B7', color: 'white',
                padding: '12px 28px', borderRadius: '100px',
                fontSize: '12px', fontWeight: 700,
                textDecoration: 'none', letterSpacing: '0.08em', textTransform: 'uppercase',
                boxShadow: '0 4px 14px rgba(0,181,183,0.3)'
              }}
            >
              REQUEST ACCESS
              <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#FDB614', flexShrink: 0 }} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          FOUNDERS / INDIA SCALES FAST SECTION
      ══════════════════════════════════════════════ */}
      <section style={{ backgroundColor: '#ffffff', padding: '100px 24px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            style={{ textAlign: 'center' }}
          >
            <p style={{
              fontSize: '10px', fontWeight: 700, letterSpacing: '0.25em',
              color: '#191E4E', textTransform: 'uppercase',
              textAlign: 'center', marginBottom: '16px'
            }}>
              OUR FOUNDERS
            </p>
            <h2 style={{
              fontSize: 'clamp(28px, 5vw, 56px)',
              fontWeight: 800, color: '#191E4E',
              lineHeight: 1.1, textTransform: 'uppercase',
              textAlign: 'center', marginBottom: '16px',
              letterSpacing: '-0.01em', fontFamily: "'Montserrat', sans-serif"
            }}>
              INDIA SCALES FAST.<br />WE SCALE FASTER.
            </h2>
            <p style={{
              color: '#888', fontSize: '13px', textAlign: 'center',
              fontWeight: 500, marginBottom: '72px', maxWidth: '420px', margin: '0 auto 72px'
            }}>
              Built by a team with deep systems, operations and institutional execution backgrounds.
            </p>
          </motion.div>

          {/* Founders grid */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16"
          >
            {[
              {
                name: 'SHAILESH KARWA',
                role: 'CO-FOUNDER & DIRECTOR',
                bio: "Shailesh comes from a business family but chose to carve out his own career path, starting at Tata Consultancy Services, where he spent five years creating integrated brokerage systems for large institutions, with presales assignments in New York and London. That experience taught him how to build complex operational infrastructure that works at scale."
              },
              {
                name: 'SHARAD DALMIA',
                role: 'CO-FOUNDER & DIRECTOR',
                bio: "Sharad spent five years at Accenture working on management consulting, cost optimisation and supply chain projects in manufacturing and Pharma. That foundation taught him how to think operationally and approach problems with rigour, skills that shaped how Glide operates today."
              }
            ].map((founder, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                whileHover="hover"
                style={{ cursor: 'default' }}
              >
                <motion.div variants={cardHover}>
                  <h3 style={{
                    fontSize: '18px', fontWeight: 800, color: '#191E4E',
                    letterSpacing: '0.05em', textTransform: 'uppercase',
                    marginBottom: '4px', fontFamily: "'Montserrat', sans-serif"
                  }}>
                    {founder.name}
                  </h3>
                  <p style={{
                    fontSize: '9px', color: '#aaa', fontWeight: 700,
                    letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '16px'
                  }}>
                    {founder.role}
                  </p>
                  <p style={{ color: '#666', fontSize: '12px', lineHeight: 1.8, fontWeight: 500 }}>
                    {founder.bio}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  );
}
