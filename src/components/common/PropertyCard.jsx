import React from 'react';
import { MapPin, ArrowUpRight, MessageCircle, Sparkles, Check } from 'lucide-react';
import { businessInfo } from '../../data/properties';

export default function PropertyCard({ property, onSelect, onBookVisit }) {
  const whatsappUrl = `https://wa.me/${businessInfo.rawPhone1}?text=${encodeURIComponent(
    `Hi Ambition Real Estate, I am interested in ${property.title} (${property.location}). Please share complete pricing and available units.`
  )}`;

  return (
    <div className="group rounded-2xl bg-white border border-luxury-border/60 hover:border-luxury-gold shadow-luxury hover:shadow-luxury-lg transition-all duration-300 flex flex-col overflow-hidden">
      {/* Image / Flyer Thumbnail */}
      <div 
        onClick={() => onSelect(property)} 
        className="relative h-64 sm:h-72 w-full overflow-hidden bg-luxury-darkest cursor-pointer"
      >
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-darkest via-black/15 to-transparent"></div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          <span className="px-2.5 py-0.5 rounded-full bg-luxury-gold text-luxury-darkest text-[10px] font-extrabold uppercase tracking-wider shadow">
            {property.badge}
          </span>
          <span className="px-2.5 py-0.5 rounded-full bg-luxury-darkest/90 text-white border border-luxury-gold/30 text-[10px] font-medium tracking-wide">
            {property.category}
          </span>
        </div>

        {/* Brochure Available Badge */}
        {property.flyerImage && (
          <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-black/75 border border-luxury-gold/60 text-[10px] text-luxury-gold font-semibold backdrop-blur-md">
            <span>📄 Official Flyer</span>
          </div>
        )}

        {/* 25% Booking Sticker */}
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-950/90 text-emerald-300 border border-emerald-500/40 text-[11px] font-semibold backdrop-blur-md">
            <Sparkles size={11} className="text-luxury-gold" />
            <span>25% Booking Option</span>
          </span>

          <span className="text-[11px] text-white/90 bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
            Quick View ↗
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <div className="flex items-center gap-1 text-xs text-gray-500 mb-1">
            <MapPin size={13} className="text-luxury-gold shrink-0" />
            <span className="truncate">{property.location}</span>
          </div>

          <h3 
            onClick={() => onSelect(property)} 
            className="font-serif text-lg font-bold text-luxury-ink group-hover:text-luxury-dark transition-colors line-clamp-1 cursor-pointer"
          >
            {property.title}
          </h3>
          <p className="text-xs text-gray-500 line-clamp-2 mt-1 leading-relaxed">
            {property.highlights}
          </p>

          {/* Quick Specs Pills */}
          <div className="mt-3 flex flex-wrap gap-1.5 text-[11px]">
            {property.configurations && property.configurations.slice(0, 2).map((cfg, idx) => (
              <span key={idx} className="px-2 py-0.5 rounded bg-luxury-cream text-luxury-deep border border-luxury-border/40 font-medium">
                {cfg.size}
              </span>
            ))}
          </div>
        </div>

        {/* Pricing & Actions */}
        <div className="pt-3 border-t border-gray-100 flex items-center justify-between gap-2">
          <div>
            <span className="text-[10px] uppercase font-semibold text-gray-400 block">Starting Price</span>
            <span className="font-serif text-base sm:text-lg font-bold text-luxury-deep">
              {property.priceRange}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-emerald-100 text-emerald-800 hover:bg-emerald-600 hover:text-white transition-colors"
              title="Enquire on WhatsApp"
            >
              <MessageCircle size={16} />
            </a>

            <button
              onClick={() => onSelect(property)}
              className="px-3.5 py-2 rounded-lg bg-luxury-dark hover:bg-luxury-deep text-luxury-gold text-xs font-semibold tracking-wide transition-colors flex items-center gap-1"
            >
              <span>Details</span>
              <ArrowUpRight size={13} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
