import { Link, useLocation } from "react-router-dom";
import { cn } from "../lib/utils";

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

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-6">
        {/* Logo centered */}
        <div className="flex justify-center pt-4 pb-3">
          <Link to="/" className="inline-block">
            <img src="/glide-logo.png" alt="Glide Brands" className="h-16 w-auto" />
          </Link>
        </div>

        {/* Navigation Links - horizontal pill row */}
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
    </nav>
  );
}
