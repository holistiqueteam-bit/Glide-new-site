import React from "react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer style={{
      backgroundColor: '#F4F6F6',
      padding: '56px 48px 40px',
      color: '#191E4E',
      fontFamily: "'Montserrat', sans-serif"
    }}>
      <div style={{ maxWidth: '1300px', margin: '0 auto' }}>

        {/* Top section: Logo left, nav menu below it */}
        <div style={{ marginBottom: '40px' }}>

          {/* Logo - left aligned, no background */}
          <Link to="/" style={{ textDecoration: 'none', display: 'inline-block', marginBottom: '32px' }}>
            <img
              src="/glide-logo.png"
              alt="Glide Brands"
              style={{ height: '70px', width: 'auto' }}
            />
          </Link>

          {/* Nav links row - space-between across full width with yellow dot separators */}
          <div style={{
            display: 'flex', flexWrap: 'wrap', alignItems: 'center',
            justifyContent: 'space-between', width: '100%',
            fontSize: '11px', fontWeight: 700,
            letterSpacing: '0.15em', textTransform: 'uppercase'
          }}>
            {[
              { name: 'ABOUT US', path: '/about' },
              { name: 'BRAND PARTNERS', path: '/brand-partners' },
              { name: 'GLIDE CAPITAL', path: '/glide-capital' },
              { name: 'GLIDE 108', path: '/glide-108' },
              { name: 'CAREERS', path: '/careers' },
              { name: 'CONTACT US', path: '/contact' },
            ].reduce((acc, link, i, arr) => {
              acc.push(
                <Link key={link.name} to={link.path} style={{ color: '#191E4E', textDecoration: 'none', whiteSpace: 'nowrap' }}>
                  {link.name}
                </Link>
              );
              if (i < arr.length - 1) {
                acc.push(
                  <span key={`dot-${i}`} style={{
                    width: '6px', height: '6px', borderRadius: '50%',
                    backgroundColor: '#FDB614', flexShrink: 0
                  }} />
                );
              }
              return acc;
            }, [] as React.ReactNode[])}
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid rgba(25, 30, 78, 0.1)', margin: '0 0 32px' }} />

        {/* Bottom info row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
          
          {/* Office Address */}
          <div>
            <span style={{
              fontSize: '10px', fontWeight: 700, color: '#191E4E',
              textTransform: 'uppercase', letterSpacing: '0.15em', display: 'block', marginBottom: '10px'
            }}>
              OFFICE ADDRESS
            </span>
            <p style={{ color: '#4B5563', fontSize: '11px', lineHeight: 1.7 }}>
              2nd Floor, Parijat House, Worli, Mumbai,<br />
              Maharashtra 400018.
            </p>
          </div>

          {/* Questions */}
          <div>
            <span style={{
              fontSize: '10px', fontWeight: 700, color: '#191E4E',
              textTransform: 'uppercase', letterSpacing: '0.15em', display: 'block', marginBottom: '10px'
            }}>
              QUESTIONS?
            </span>
            <a href="mailto:info@glidebrands.in" style={{ color: '#4B5563', fontSize: '11px', textDecoration: 'none' }}>
              info@glidebrands.in
            </a>
          </div>

          {/* Legal */}
          <div>
            <Link to="#" style={{ color: '#4B5563', fontSize: '11px', display: 'block', marginBottom: '6px', textDecoration: 'none' }}>
              Privacy Policy
            </Link>
            <Link to="#" style={{ color: '#4B5563', fontSize: '11px', display: 'block', marginBottom: '6px', textDecoration: 'none' }}>
              Terms & Conditions
            </Link>
            <p style={{ color: '#9CA3AF', fontSize: '11px', marginTop: '8px', fontWeight: 500 }}>
              © 2026 GLIDE BRANDS
            </p>
          </div>

          {/* LinkedIn */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start' }}>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={{ color: '#191E4E' }}
            >
              <svg style={{ width: '24px', height: '24px', fill: 'currentColor' }} viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
