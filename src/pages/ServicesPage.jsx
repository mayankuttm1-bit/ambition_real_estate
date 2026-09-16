import React, { useState } from 'react';
import { 
  Home, Building2, TrendingUp, ShieldCheck, Check, 
  ArrowRight, Phone, MessageCircle, Sparkles, FileText, BadgePercent,
  UserCheck, Briefcase, BarChart3, Map, Hammer, Compass, Coins, FileSearch, CheckCircle2
} from 'lucide-react';
import { servicesData, businessInfo } from '../data/properties';
import { getAssetUrl } from '../utils/asset';
import EmiCalculator from '../components/common/EmiCalculator';

export default function ServicesPage({ onOpenBookingModal }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All',
    'Residential & Luxury',
    'Commercial & Land',
    'Advisory & Consulting',
    'Client Representation'
  ];

  const filteredServices = activeCategory === 'All'
    ? servicesData
    : servicesData.filter(s => s.category === activeCategory);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles size={24} className="text-luxury-gold" />;
      case 'Building2': return <Building2 size={24} className="text-luxury-gold" />;
      case 'Map': return <Map size={24} className="text-luxury-gold" />;
      case 'BarChart3': return <BarChart3 size={24} className="text-luxury-gold" />;
      case 'UserCheck': return <UserCheck size={24} className="text-luxury-gold" />;
      case 'ShieldCheck': return <ShieldCheck size={24} className="text-luxury-gold" />;
      case 'Home': return <Home size={24} className="text-luxury-gold" />;
      case 'Briefcase': return <Briefcase size={24} className="text-luxury-gold" />;
      case 'Hammer': return <Hammer size={24} className="text-luxury-gold" />;
      case 'Compass': return <Compass size={24} className="text-luxury-gold" />;
      case 'TrendingUp': return <TrendingUp size={24} className="text-luxury-gold" />;
      case 'Coins': return <Coins size={24} className="text-luxury-gold" />;
      case 'FileSearch': return <FileSearch size={24} className="text-luxury-gold" />;
      default: return <Sparkles size={24} className="text-luxury-gold" />;
    }
  };

  return (
    <div className="min-h-screen bg-luxury-paper pb-20">
      {/* Header Banner with Stock Architecture Background */}
      <section className="relative bg-luxury-darkest text-white py-20 border-b border-luxury-border overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={getAssetUrl('/images/commercial-hub.jpg')}
            alt="Commercial Architecture"
            className="w-full h-full object-cover object-center filter brightness-[0.22] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-luxury-darkest via-luxury-darkest/85 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-luxury-gold/20 text-luxury-gold text-xs font-semibold uppercase tracking-wider border border-luxury-gold/30 mb-3">
              <ShieldCheck size={13} />
              <span>Full-Spectrum Advisory • 13 Solutions</span>
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold">
              Real Estate Services & Consulting
            </h1>
            <p className="text-xs sm:text-sm text-gray-300 mt-2 leading-relaxed">
              Transparent, professional guidance for property buyers, sellers, developers, and institutional investors across Ujjain, Dewas Road, and the Indore 4-Lane Highway.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter Navigation Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-7 relative z-20">
        <div className="bg-white p-2.5 rounded-2xl shadow-luxury border border-luxury-border flex flex-wrap items-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                activeCategory === cat
                  ? 'bg-luxury-dark text-luxury-gold shadow-md'
                  : 'text-gray-600 hover:text-luxury-ink hover:bg-gray-100'
              }`}
            >
              <span>{cat}</span>
              {cat === 'All' && <span className="ml-1.5 opacity-60">({servicesData.length})</span>}
            </button>
          ))}
        </div>
      </section>

      {/* 13 Services Cards Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="rounded-3xl bg-white p-7 border border-luxury-border/80 shadow-luxury hover:shadow-luxury-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Header: Icon & Badge */}
                <div className="flex items-center justify-between gap-2">
                  <div className="w-13 h-13 p-3 rounded-2xl bg-luxury-darkest flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                    {getIcon(service.icon)}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-luxury-gold/15 text-luxury-gold-dark text-[10px] font-bold uppercase tracking-wider border border-luxury-gold/30">
                    {service.badge}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] text-gray-400 font-semibold uppercase tracking-widest block mb-1">
                    {service.category}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-luxury-ink group-hover:text-luxury-deep transition-colors leading-snug">
                    {service.title}
                  </h3>
                </div>

                <p className="text-xs text-gray-600 leading-relaxed">
                  {service.fullDesc || service.shortDesc}
                </p>

                {/* Feature Deliverables List */}
                <div className="pt-3 border-t border-gray-100 space-y-2 text-xs">
                  {service.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-gray-700">
                      <CheckCircle2 size={13} className="text-luxury-gold-dark shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card CTA */}
              <div className="pt-6">
                <button
                  onClick={() => onOpenBookingModal({ title: service.title })}
                  className="w-full py-3 rounded-xl bg-luxury-dark hover:bg-luxury-deep text-luxury-gold text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md group-hover:bg-gradient-to-r group-hover:from-luxury-gold group-hover:to-luxury-gold-dark group-hover:text-luxury-darkest"
                >
                  <span>Request Consultation</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4-Step Client Journey */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="rounded-3xl bg-luxury-cream p-8 sm:p-12 border border-luxury-border/60">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs uppercase tracking-widest text-luxury-gold-dark font-serif font-semibold">
              The Ambition Process
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-luxury-ink">
              From Consultation to Registry in 4 Transparent Steps
            </h2>
            <p className="text-xs text-gray-600">
              Clear legal parameters, verified revenue records, and zero undisclosed brokerage surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-luxury-border/60 shadow-sm space-y-3">
              <span className="w-8 h-8 rounded-full bg-luxury-dark text-luxury-gold font-serif font-bold text-sm flex items-center justify-center">1</span>
              <h4 className="font-serif font-bold text-base text-luxury-ink">Requirements & Budget</h4>
              <p className="text-xs text-gray-600 leading-relaxed">Detailed intake of your location, layout size, purpose (self-use vs rental ROI), and financial comfort.</p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-luxury-border/60 shadow-sm space-y-3">
              <span className="w-8 h-8 rounded-full bg-luxury-dark text-luxury-gold font-serif font-bold text-sm flex items-center justify-center">2</span>
              <h4 className="font-serif font-bold text-base text-luxury-ink">Guided On-Ground Visits</h4>
              <p className="text-xs text-gray-600 leading-relaxed">Senior Advisor Ujjwal Tiwari accompanies you for physical site inspections, frontage measurements, and road surveys.</p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-luxury-border/60 shadow-sm space-y-3">
              <span className="w-8 h-8 rounded-full bg-luxury-dark text-luxury-gold font-serif font-bold text-sm flex items-center justify-center">3</span>
              <h4 className="font-serif font-bold text-base text-luxury-ink">25% Token Booking & Legal</h4>
              <p className="text-xs text-gray-600 leading-relaxed">Lock the rate per sq.ft with 25% token booking while our legal team verifies title chain, diversion, and encumbrances.</p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-luxury-border/60 shadow-sm space-y-3">
              <span className="w-8 h-8 rounded-full bg-luxury-dark text-luxury-gold font-serif font-bold text-sm flex items-center justify-center">4</span>
              <h4 className="font-serif font-bold text-base text-luxury-ink">Registry & Spot Possession</h4>
              <p className="text-xs text-gray-600 leading-relaxed">Seamless deed execution at the sub-registrar office, spot physical boundary demarcation, and key handover.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Signature 25% Booking Feature Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="rounded-3xl bg-gradient-to-r from-luxury-dark via-luxury-deep to-luxury-dark p-8 sm:p-12 text-white border border-luxury-gold/40 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-luxury-gold/20 text-luxury-gold text-xs font-semibold uppercase tracking-wider border border-luxury-gold/30">
                <BadgePercent size={14} />
                <span>Our Signature Advantage</span>
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold">
                The 25% Token Booking & Transparent Terms Policy
              </h2>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-2xl">
                Unlike informal brokers who create price confusion, Ambition Real Estate operates on rigorous per sq.ft parameter clarity and flexible 25% token booking agreements.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-2">
                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="font-bold text-luxury-gold mb-1">Fixed Rate Lock-In</h4>
                  <p className="text-gray-400">Lock your property at agreed per sq.ft rates with no arbitrary escalation.</p>
                </div>

                <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                  <h4 className="font-bold text-luxury-gold mb-1">Title Verification Window</h4>
                  <p className="text-gray-400">Time-tested period to verify all revenue records, diversion, and encumbrance certificates.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 text-center lg:text-right space-y-3">
              <div className="p-6 rounded-2xl bg-luxury-darkest/90 border border-luxury-gold text-center shadow-xl">
                <span className="text-[10px] text-gray-400 uppercase tracking-widest block mb-1">Token Down-Payment</span>
                <span className="font-serif text-4xl font-extrabold text-luxury-gold block">25%</span>
                <span className="text-xs text-gray-300 mt-1 block">Easy installment & bank financing options</span>
              </div>

              <a
                href={`https://wa.me/${businessInfo.rawPhone1}?text=${encodeURIComponent("Hello Ambition Real Estate, I want to understand how your 25% booking policy works for plots.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                <MessageCircle size={15} />
                <span>Ask Advisor on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded EMI Calculator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <EmiCalculator onOpenBookingModal={onOpenBookingModal} />
      </section>
    </div>
  );
}
