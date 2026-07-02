import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "../lib/utils";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Brand Partners", path: "/brand-partners" },
  { name: "Glide Capital", path: "/glide-capital" },
  { name: "Glide 108", path: "/glide-108" },
  { name: "Careers", path: "/careers" },
];

export function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Staggered slide down animation variants for mobile menu
  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
        when: "afterChildren",
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.08,
      },
    },
  };

  const linkVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } },
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-sm border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* MOBILE TOP BAR (Logo on Left, Hamburger on Right) */}
        <div className="flex items-center justify-between py-3 md:hidden">
          <Link to="/" onClick={() => setIsOpen(false)} className="inline-block">
            <img src="/glide-logo.png" alt="Glide Brands" className="h-9 w-auto object-contain" />
          </Link>
          
          <button
            onClick={toggleMenu}
            className="relative z-50 p-2 text-brand-navy focus:outline-none cursor-pointer"
            aria-label="Toggle Menu"
          >
            {/* Custom morphing hamburger bars */}
            <div className="w-6 h-4.5 flex flex-col justify-between items-end">
              <span className={cn(
                "h-0.5 bg-brand-navy rounded-full transition-all duration-300 transform origin-right",
                isOpen ? "w-6 -rotate-45 -translate-y-[2px] translate-x-[1px]" : "w-6"
              )} />
              <span className={cn(
                "h-0.5 bg-brand-navy rounded-full transition-all duration-300",
                isOpen ? "w-0 opacity-0" : "w-4.5"
              )} />
              <span className={cn(
                "h-0.5 bg-brand-navy rounded-full transition-all duration-300 transform origin-right",
                isOpen ? "w-6 rotate-45 translate-y-[2px] translate-x-[1px]" : "w-5.5"
              )} />
            </div>
          </button>
        </div>

        {/* DESKTOP HEADER BAR (Centered logo and links row underneath) */}
        <div className="hidden md:block">
          <div className="flex justify-center pt-4 pb-3">
            <Link to="/" className="inline-block">
              <img src="/glide-logo.png" alt="Glide Brands" className="h-16 w-auto" />
            </Link>
          </div>
          
          <div className="flex items-center justify-center gap-1 pb-3 flex-wrap">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "rounded-full px-4 py-1.5 text-[11px] font-semibold transition-colors whitespace-nowrap",
                    isActive
                      ? "bg-brand-navy text-white"
                      : "text-brand-navy hover:bg-gray-100"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              to="/contact"
              className="rounded-full bg-brand-coral px-4 py-1.5 text-[11px] font-semibold text-white transition-opacity hover:opacity-90 whitespace-nowrap"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* MOBILE FULL-SCREEN DROPDOWN OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 top-[60px] bg-brand-navy z-40 flex flex-col justify-start px-8 pt-10 pb-6 md:hidden overflow-y-auto"
          >
            {/* Mobile links list */}
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.div key={link.name} variants={linkVariants}>
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "text-xl font-bold tracking-wider uppercase transition-colors block",
                        isActive ? "text-brand-yellow" : "text-white hover:text-brand-teal"
                      )}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
              
              <motion.div variants={linkVariants} className="pt-4 border-t border-white/10">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="inline-block text-center rounded-full bg-brand-coral px-8 py-3 text-sm font-bold tracking-widest text-white uppercase transition-opacity hover:opacity-90 w-full"
                >
                  Contact Us
                </Link>
              </motion.div>
            </div>
            
            {/* Footer accent details inside the menu drawer */}
            <div className="mt-auto pt-12 flex flex-col gap-2">
              <span className="text-[10px] text-white/30 font-bold uppercase tracking-widest">
                GLIDE BRANDS
              </span>
              <span className="text-[10px] text-white/50 font-medium">
                © {new Date().getFullYear()} holistiqueteam-bit
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
