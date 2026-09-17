import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Clock, MapPin, Star, Menu, X, MessageCircle, ArrowRight } from 'lucide-react';
import { businessInfo } from '../../data/properties';
import { getAssetUrl } from '../../utils/asset';

export default function Navbar({ onOpenBookingModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Properties & Plots', path: '/properties' },
    { name: 'Services & Advisory', path: '/services' },
    { name: 'Ujjain Growth Guide', path: '/investment-guide' },
    { name: 'Contact & Office', path: '/contact' },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 shadow-md w-full max-w-full">
      {/* Main Luxury Navbar */}
      <nav className="bg-luxury-dark text-white border-b border-luxury-border w-full max-w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-between h-20 gap-2">
            {/* Brand Logo with New Official Insignia */}
            <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group min-w-0 max-w-[70%] sm:max-w-none">
              <img
                src={getAssetUrl('/images/logo-icon.png')}
                alt="Ambition Real Estate Logo"
                className="w-10 h-10 sm:w-12 sm:h-12 object-contain filter drop-shadow-[0_2px_10px_rgba(197,160,89,0.4)] group-hover:scale-105 transition-transform shrink-0"
              />

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="font-serif text-lg sm:text-2xl font-bold tracking-wider text-white truncate">
                    AMBITION
                  </span>
                  <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.25em] text-luxury-gold font-medium px-1 sm:px-1.5 py-0.5 border border-luxury-gold/40 rounded shrink-0">
                    REAL ESTATE
                  </span>
                </div>
                <p className="text-[9px] sm:text-[10px] text-gray-300 tracking-wider truncate">
                  {businessInfo.taglineEn}
                </p>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3.5 py-2 rounded-md text-sm font-medium tracking-wide transition-all ${
                    isActive(link.path)
                      ? 'text-luxury-gold bg-luxury-surface/50 border-b-2 border-luxury-gold'
                      : 'text-gray-200 hover:text-luxury-gold hover:bg-luxury-surface/30'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Desktop Action CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => onOpenBookingModal()}
                className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-md font-semibold text-xs tracking-wider uppercase text-luxury-darkest bg-gradient-to-r from-luxury-gold-light via-luxury-gold to-luxury-gold-dark hover:brightness-110 shadow-lg shadow-amber-900/20 transition-all hover:scale-[1.02] active:scale-[0.98] luxury-btn-shimmer"
              >
                <span>Book Site Visit</span>
                <ArrowRight size={14} />
              </button>
            </div>

            {/* Mobile menu trigger */}
            <div className="flex lg:hidden items-center gap-1.5 sm:gap-2 shrink-0">
              <button
                onClick={() => onOpenBookingModal()}
                className="px-2.5 py-1.5 rounded text-xs font-semibold bg-luxury-gold text-luxury-darkest whitespace-nowrap shadow hover:brightness-110 active:scale-95 transition-all"
              >
                Site Visit
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 sm:p-2 rounded-md text-gray-300 hover:text-white hover:bg-luxury-surface focus:outline-none transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-luxury-darkest border-t border-luxury-border px-4 pt-3 pb-6 space-y-2">
            <div className="flex items-center gap-3 pb-3 mb-2 border-b border-luxury-border/60">
              <img
                src={getAssetUrl('/images/logo-icon.png')}
                alt="Ambition Real Estate"
                className="w-10 h-10 object-contain shrink-0 filter drop-shadow-[0_2px_8px_rgba(197,160,89,0.3)]"
              />
              <div>
                <span className="font-serif text-sm font-bold text-white block">Ambition Real Estate</span>
                <span className="text-[10px] text-luxury-gold tracking-wider">{businessInfo.taglineEn}</span>
              </div>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'text-luxury-gold bg-luxury-surface border-l-4 border-luxury-gold'
                    : 'text-gray-300 hover:text-white hover:bg-luxury-surface/50'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-4 mt-4 border-t border-luxury-border flex flex-col gap-2">
              <div className="flex items-center justify-between text-xs text-gray-400 px-2 py-1">
                <span>Direct Hotline:</span>
                <a href={`tel:${businessInfo.rawPhone1}`} className="text-luxury-gold font-semibold">
                  {businessInfo.phone1}
                </a>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBookingModal();
                }}
                className="w-full py-3 rounded-lg text-center font-semibold text-xs tracking-wider uppercase bg-luxury-gold text-luxury-darkest"
              >
                Book Free Site Visit
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
