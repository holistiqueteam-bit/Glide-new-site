import React from "react";
import { Link } from "react-router-dom";

export function Footer() {
  const links = [
    { name: 'ABOUT US', path: '/about' },
    { name: 'BRAND PARTNERS', path: '/brand-partners' },
    { name: 'GLIDE CAPITAL', path: '/glide-capital' },
    { name: 'GLIDE 108', path: '/glide-108' },
    { name: 'CAREERS', path: '/careers' },
    { name: 'CONTACT US', path: '/contact' },
  ];

  return (
    <footer className="bg-[#F4F6F6] px-6 md:px-12 py-10 md:py-14 text-brand-navy font-sans">
      <div className="max-w-[1300px] mx-auto">

        {/* Top section: Logo left, nav menu below it */}
        <div className="mb-10">

          {/* Logo - left aligned, no background */}
          <Link to="/" className="inline-block mb-8">
            <img
              src="/glide-logo.png"
              alt="Glide Brands"
              className="h-[50px] md:h-[70px] w-auto object-contain"
            />
          </Link>

          {/* Mobile Nav Links - stacked vertically one below the other */}
          <div className="flex flex-col gap-4 text-xs font-bold tracking-widest uppercase md:hidden mb-8">
            {links.map((link) => (
              <Link 
                key={link.name} 
                to={link.path} 
                className="text-brand-navy hover:text-brand-teal transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Nav Links - horizontal row with yellow dot separators */}
          <div className="hidden md:flex flex-wrap items-center justify-between w-full text-[11px] font-bold tracking-widest uppercase">
            {links.reduce((acc, link, i, arr) => {
              acc.push(
                <Link key={link.name} to={link.path} className="text-brand-navy hover:text-brand-teal transition-colors">
                  {link.name}
                </Link>
              );
              if (i < arr.length - 1) {
                acc.push(
                  <span key={`dot-${i}`} className="w-1.5 h-1.5 rounded-full bg-brand-yellow shrink-0" />
                );
              }
              return acc;
            }, [] as React.ReactNode[])}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-brand-navy/10 mb-8" />

        {/* Bottom info row (stacks on mobile, 4 columns on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
          
          {/* Office Address */}
          <div>
            <span className="text-[10px] font-bold text-brand-navy uppercase tracking-widest block mb-2.5">
              OFFICE ADDRESS
            </span>
            <p className="text-gray-600 text-[11px] leading-relaxed">
              2nd Floor, Parijat House, Worli, Mumbai,<br />
              Maharashtra 400018.
            </p>
          </div>

          {/* Questions */}
          <div>
            <span className="text-[10px] font-bold text-brand-navy uppercase tracking-widest block mb-2.5">
              QUESTIONS?
            </span>
            <a href="mailto:info@glidebrands.in" className="text-gray-600 text-[11px] hover:text-brand-teal transition-colors">
              info@glidebrands.in
            </a>
          </div>

          {/* Legal */}
          <div>
            <Link to="#" className="text-gray-600 text-[11px] block mb-1.5 hover:text-brand-teal transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="text-gray-600 text-[11px] block mb-1.5 hover:text-brand-teal transition-colors">
              Terms & Conditions
            </Link>
            <p className="text-gray-400 text-[11px] mt-2 font-medium">
              © {new Date().getFullYear()} GLIDE BRANDS
            </p>
          </div>

          {/* LinkedIn Icon */}
          <div className="flex justify-start md:justify-end items-start pt-2 md:pt-0">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-brand-navy hover:text-brand-teal transition-colors"
            >
              <svg className="w-6 h-6 fill-currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
