import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Star, ShieldCheck, ChevronRight, MessageCircle } from 'lucide-react';
import { businessInfo } from '../../data/properties';
import { getAssetUrl } from '../../utils/asset';

export default function Footer() {
  return (
    <footer className="bg-luxury-darkest text-gray-300 border-t border-luxury-border w-full max-w-full overflow-hidden">
      {/* Top Value Banner */}
      <div className="bg-gradient-to-r from-luxury-dark via-luxury-deep to-luxury-dark border-b border-luxury-border py-8 w-full max-w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="w-12 h-12 rounded-full bg-luxury-gold/10 border border-luxury-gold/40 flex items-center justify-center shrink-0">
                <ShieldCheck size={22} className="text-luxury-gold" />
              </div>
              <div>
                <h4 className="text-white font-serif font-semibold text-sm">100% Clear Titles</h4>
                <p className="text-xs text-gray-400">Verified legal documentation & registry</p>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="w-12 h-12 rounded-full bg-luxury-gold/10 border border-luxury-gold/40 flex items-center justify-center shrink-0">
                <span className="font-serif font-bold text-luxury-gold text-lg">25%</span>
              </div>
              <div>
                <h4 className="text-white font-serif font-semibold text-sm">Flexible Booking</h4>
                <p className="text-xs text-gray-400">Easy 25% token booking facility</p>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="w-12 h-12 rounded-full bg-luxury-gold/10 border border-luxury-gold/40 flex items-center justify-center shrink-0">
                <Star size={22} className="text-luxury-gold fill-luxury-gold" />
              </div>
              <div>
                <h4 className="text-white font-serif font-semibold text-sm">5.0 ★ Google Rated</h4>
                <p className="text-xs text-gray-400">Trusted by over 15+ verified reviews</p>
              </div>
            </div>

            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="w-12 h-12 rounded-full bg-luxury-gold/10 border border-luxury-gold/40 flex items-center justify-center shrink-0">
                <Clock size={22} className="text-luxury-gold" />
              </div>
              <div>
                <h4 className="text-white font-serif font-semibold text-sm">Open Daily till 10 PM</h4>
                <p className="text-xs text-gray-400">Free daily guided site visits</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1 & 2: Brand Story */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3.5">
              <img
                src={getAssetUrl('/images/logo-icon.png')}
                alt="Ambition Real Estate Logo"
                className="w-12 h-12 sm:w-14 sm:h-14 object-contain filter drop-shadow-[0_2px_12px_rgba(197,160,89,0.35)] shrink-0"
              />
              <div>
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-wider text-white block">AMBITION REAL ESTATE</span>
                <p className="text-[11px] text-luxury-gold tracking-widest uppercase">{businessInfo.taglineEn}</p>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-gray-400 max-w-md">
              Premier real estate advisory firm serving the high-growth corridor of Ujjain, Dewas Road, and Indore Highway. Specializing in prime highway commercial plots, modern duplex houses opposite D-Mart, and large-scale colony land parcels with 100% legal clarity.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs font-semibold text-white">5.0 Star Rating on Google</span>
            </div>

            <div className="pt-2 flex flex-wrap gap-2">
              <a
                href={`https://wa.me/${businessInfo.rawPhone1}?text=${encodeURIComponent("Hi Ambition Real Estate, I need details regarding your properties.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-emerald-800/80 hover:bg-emerald-700 text-white text-xs font-medium border border-emerald-600/50 transition-colors"
              >
                <MessageCircle size={14} />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href={`tel:${businessInfo.rawPhone1}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-luxury-surface hover:bg-luxury-surface/80 text-luxury-gold text-xs font-medium border border-luxury-border transition-colors"
              >
                <Phone size={14} />
                <span>Call Advisor</span>
              </a>
            </div>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-luxury-gold mb-4 font-serif">Quick Navigation</h3>
            <ul className="space-y-2.5 text-xs">
              {[
                { name: 'Home Page', path: '/' },
                { name: 'Featured Properties', path: '/properties' },
                { name: 'Residential Services', path: '/services' },
                { name: 'Commercial Land & Plots', path: '/properties?category=commercial' },
                { name: 'Ujjain Growth Corridor', path: '/investment-guide' },
                { name: 'Contact & Office Directions', path: '/contact' },
              ].map((item) => (
                <li key={item.name}>
                  <Link to={item.path} className="text-gray-400 hover:text-luxury-gold transition-colors flex items-center gap-1.5">
                    <ChevronRight size={12} className="text-luxury-gold/70" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Prime Locations */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-luxury-gold mb-4 font-serif">Focus Corridors</h3>
            <ul className="space-y-2.5 text-xs text-gray-400">
              <li className="flex items-start gap-1.5">
                <ChevronRight size={12} className="text-luxury-gold/70 mt-0.5 shrink-0" />
                <span>Indore Road (Opposite D-Mart)</span>
              </li>
              <li className="flex items-start gap-1.5">
                <ChevronRight size={12} className="text-luxury-gold/70 mt-0.5 shrink-0" />
                <span>6-Lane Toll Plaza Highway Hub</span>
              </li>
              <li className="flex items-start gap-1.5">
                <ChevronRight size={12} className="text-luxury-gold/70 mt-0.5 shrink-0" />
                <span>Dewas Road (Shivansh Valley)</span>
              </li>
              <li className="flex items-start gap-1.5">
                <ChevronRight size={12} className="text-luxury-gold/70 mt-0.5 shrink-0" />
                <span>Tapobhoomi 4-Lane Bypass</span>
              </li>
              <li className="flex items-start gap-1.5">
                <ChevronRight size={12} className="text-luxury-gold/70 mt-0.5 shrink-0" />
                <span>Triveni Vihar & Shree Nath Ji Colony</span>
              </li>
              <li className="flex items-start gap-1.5">
                <ChevronRight size={12} className="text-luxury-gold/70 mt-0.5 shrink-0" />
                <span>Nagda City Agro & Farm Hub</span>
              </li>
            </ul>
          </div>

          {/* Col 5: Registered Office */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-luxury-gold mb-4 font-serif">Office & Hours</h3>
            <div className="space-y-3 text-xs text-gray-400">
              <div className="flex items-start gap-2">
                <MapPin size={15} className="text-luxury-gold shrink-0 mt-0.5" />
                <a
                  href="https://maps.google.com/?q=194+Mahaveer+Bagh+Colony+Indore+Ujjain+Rd+Pawapuri+Colony+Ujjain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-luxury-gold transition-colors leading-relaxed break-words"
                >
                  {businessInfo.address}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Clock size={15} className="text-luxury-gold shrink-0" />
                <span>{businessInfo.hours}</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone size={15} className="text-luxury-gold shrink-0" />
                <div className="space-y-0.5">
                  <a href={`tel:${businessInfo.rawPhone1}`} className="hover:text-white block">
                    {businessInfo.phone1}
                  </a>
                  <a href={`tel:${businessInfo.rawPhone2}`} className="hover:text-white block">
                    {businessInfo.phone2}
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <span className="text-[11px] text-gray-500 block">Senior Advisor</span>
                <span className="font-semibold text-white text-xs">{businessInfo.advisor}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="mt-12 pt-8 border-t border-luxury-border text-[11px] text-gray-500 leading-relaxed space-y-2">
          <p>
            <strong className="text-gray-400">Transparency & Disclaimer:</strong> Ambition Real Estate operates as a registered real estate advisory and facilitation firm. All measurements (sq.ft, bigha), rates, and project parameters are subject to final municipal permissions and title execution. We facilitate transparent deals with zero undisclosed charges.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 text-xs text-gray-400">
            <p>© {new Date().getFullYear()} Ambition Real Estate. All Rights Reserved.</p>
            <p className="flex items-center gap-1 text-gray-500">
              Crafted for High-End Real Estate Growth in Madhya Pradesh
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
