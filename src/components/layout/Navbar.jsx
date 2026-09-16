import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Clock, MapPin, Star, Menu, X, MessageCircle, ArrowRight } from 'lucide-react';
import { businessInfo } from '../../data/properties';

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
    <header className="sticky top-0 z-50 shadow-md">
      {/* Main Luxury Navbar */}
      <nav className="bg-luxury-dark text-white border-b border-luxury-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-luxury-gold via-amber-600 to-luxury-gold-dark p-0.5 shadow-lg group-hover:scale-105 transition-transform flex items-center justify-center">
                <div className="w-full h-full bg-luxury-darkest rounded-[7px] flex flex-col items-center justify-center">
                  <span className="font-serif text-xl font-bold text-luxury-gold tracking-widest leading-none">A</span>
                  <div className="h-0.5 w-4 bg-luxury-gold mt-0.5"></div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-white">
                    AMBITION
                  </span>
                  <span className="text-xs uppercase tracking-[0.25em] text-luxury-gold font-medium px-1.5 py-0.5 border border-luxury-gold/40 rounded">
                    REALTY
                  </span>
                </div>
                <p className="text-[10px] text-gray-300 tracking-wider">
                  {businessInfo.tagline}
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
                className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-md font-semibold text-xs tracking-wider uppercase text-luxury-darkest bg-gradient-to-r from-luxury-gold-light via-luxury-gold to-luxury-gold-dark hover:brightness-110 shadow-lg shadow-amber-900/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Book Site Visit</span>
                <ArrowRight size={14} />
              </button>
            </div>

            {/* Mobile menu trigger */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => onOpenBookingModal()}
                className="px-3 py-1.5 rounded text-xs font-semibold bg-luxury-gold text-luxury-darkest"
              >
                Site Visit
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-luxury-surface focus:outline-none"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-luxury-darkest border-t border-luxury-border px-4 pt-3 pb-6 space-y-2">
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
