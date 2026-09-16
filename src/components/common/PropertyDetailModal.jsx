import React, { useState } from 'react';
import { X, MapPin, Tag, Check, MessageCircle, Phone, ArrowRight, ShieldCheck, Sparkles, Building, Layers, Image as ImageIcon, FileText } from 'lucide-react';
import { businessInfo } from '../../data/properties';

export default function PropertyDetailModal({ property, onClose, onBookVisit }) {
  const [mediaView, setMediaView] = useState('photo');

  if (!property) return null;

  const whatsappText = `Hello Ambition Real Estate, I would like more details and pricing regarding:
• Property: ${property.title}
• Location: ${property.location}
• Reference: ${property.category}

Can we schedule a site visit?`;

  const whatsappUrl = `https://wa.me/${businessInfo.rawPhone1}?text=${encodeURIComponent(whatsappText)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div className="relative w-full max-w-4xl bg-luxury-darkest border border-luxury-gold/50 rounded-2xl shadow-2xl overflow-hidden text-white my-auto max-h-[90vh] flex flex-col">
        {/* Sticky Header */}
        <div className="bg-gradient-to-r from-luxury-dark via-luxury-deep to-luxury-dark p-4 sm:p-6 border-b border-luxury-border flex items-center justify-between shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full bg-luxury-gold/20 text-luxury-gold text-[11px] font-semibold uppercase tracking-wider border border-luxury-gold/30">
                {property.badge}
              </span>
              <span className="text-xs text-gray-400">|</span>
              <span className="text-xs text-gray-300 font-medium">{property.category}</span>
            </div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
              {property.title}
            </h2>
            <p className="flex items-center gap-1.5 text-xs text-gray-300 mt-0.5">
              <MapPin size={13} className="text-luxury-gold shrink-0" />
              <span>{property.location}</span>
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-4 sm:p-6 space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left: Media Switcher (HD Photo vs Official Flyer) */}
            <div className="lg:col-span-5 space-y-3">
              {property.flyerImage && (
                <div className="flex items-center gap-2 p-1 rounded-xl bg-luxury-surface/50 border border-luxury-border/60">
                  <button
                    type="button"
                    onClick={() => setMediaView('photo')}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      mediaView === 'photo'
                        ? 'bg-luxury-gold text-luxury-darkest shadow'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <ImageIcon size={13} />
                    <span>HD Photo</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setMediaView('flyer')}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                      mediaView === 'flyer'
                        ? 'bg-luxury-gold text-luxury-darkest shadow'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <FileText size={13} />
                    <span>Official Flyer</span>
                  </button>
                </div>
              )}

              <div className="relative rounded-xl overflow-hidden border border-luxury-border bg-black/50 group h-80 sm:h-96 flex items-center justify-center">
                <img
                  src={mediaView === 'photo' ? property.image : (property.flyerImage || property.image)}
                  alt={property.title}
                  className={`w-full h-full ${
                    mediaView === 'photo' ? 'object-cover' : 'object-contain'
                  } transition-transform duration-300`}
                />
                <div className="absolute top-2 left-2 px-2.5 py-0.5 rounded bg-luxury-darkest/90 border border-luxury-gold text-[10px] text-luxury-gold font-semibold uppercase tracking-wider backdrop-blur-sm">
                  {mediaView === 'photo' ? 'HD Project Photo' : 'Official Marketing Flyer'}
                </div>
              </div>
              <p className="text-[11px] text-center text-gray-400 italic">
                {mediaView === 'photo' 
                  ? 'High-definition architectural & landscape view'
                  : 'Direct verified project marketing flyer by Ambition Real Estate'}
              </p>
            </div>

            {/* Right: Technical Specs, Pricing, & Features */}
            <div className="lg:col-span-7 space-y-5">
              {/* Pricing Box */}
              <div className="p-4 rounded-xl bg-luxury-surface/40 border border-luxury-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold block">Pricing Range</span>
                  <span className="font-serif text-2xl font-bold text-luxury-gold">{property.priceRange}</span>
                  <span className="text-[11px] text-gray-400 block mt-0.5">{property.pricePerSqft}</span>
                </div>

                <div className="sm:text-right">
                  <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded bg-luxury-gold/10 text-luxury-gold border border-luxury-gold/30">
                    <Sparkles size={12} />
                    <span>{property.bookingOption}</span>
                  </span>
                  <span className="text-[11px] text-gray-400 block mt-1">100% Clear Title Registry</span>
                </div>
              </div>

              {/* Configurations Table */}
              {property.configurations && property.configurations.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-luxury-gold mb-2 font-serif flex items-center gap-1.5">
                    <Layers size={14} />
                    <span>Available Plot & Dimension Sizes</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {property.configurations.map((cfg, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-2.5 rounded-lg bg-luxury-surface/30 border border-luxury-border/60 text-xs"
                      >
                        <span className="font-medium text-gray-200">{cfg.size}</span>
                        <span className="font-bold text-luxury-gold">{cfg.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Highlights Note */}
              <div className="p-3.5 rounded-lg bg-luxury-surface/20 border-l-2 border-luxury-gold text-xs text-gray-300 leading-relaxed">
                <p>
                  <strong className="text-white">Advisor Overview:</strong> {property.highlights}
                </p>
              </div>

              {/* Key Features List */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-luxury-gold mb-2 font-serif flex items-center gap-1.5">
                  <Check size={14} />
                  <span>Key Project Amenities & Advantages</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {property.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-gray-300">
                      <div className="w-4 h-4 rounded-full bg-luxury-gold/20 text-luxury-gold flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={10} />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sticky Action Footer */}
        <div className="bg-luxury-dark p-4 sm:p-5 border-t border-luxury-border flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={`tel:${businessInfo.rawPhone1}`}
              className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-luxury-surface hover:bg-luxury-surface/80 text-luxury-gold border border-luxury-border text-xs font-semibold transition-colors"
            >
              <Phone size={14} />
              <span>Call Advisor</span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-md transition-colors"
            >
              <MessageCircle size={14} />
              <span>Inquire on WhatsApp</span>
            </a>
          </div>

          <button
            onClick={() => {
              onClose();
              onBookVisit(property);
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-gradient-to-r from-luxury-gold-light via-luxury-gold to-luxury-gold-dark text-luxury-darkest text-xs font-bold uppercase tracking-wider hover:brightness-110 shadow-lg shadow-amber-900/30 flex items-center justify-center gap-2 transition-all"
          >
            <span>Schedule Site Visit</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
