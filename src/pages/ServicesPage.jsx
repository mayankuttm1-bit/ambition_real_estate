import React from 'react';
import { 
  Home, Building2, TrendingUp, ShieldCheck, Check, 
  ArrowRight, Phone, MessageCircle, Sparkles, FileText, BadgePercent 
} from 'lucide-react';
import { servicesData, businessInfo } from '../data/properties';
import { getAssetUrl } from '../utils/asset';
import EmiCalculator from '../components/common/EmiCalculator';

export default function ServicesPage({ onOpenBookingModal }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Home':
        return <Home size={24} className="text-luxury-gold" />;
      case 'Building2':
        return <Building2 size={24} className="text-luxury-gold" />;
      case 'TrendingUp':
        return <TrendingUp size={24} className="text-luxury-gold" />;
      case 'ShieldCheck':
        return <ShieldCheck size={24} className="text-luxury-gold" />;
      default:
        return <Sparkles size={24} className="text-luxury-gold" />;
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
            className="w-full h-full object-cover object-center filter brightness-[0.24] contrast-[1.1]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-luxury-darkest via-luxury-darkest/85 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-luxury-gold/20 text-luxury-gold text-xs font-semibold uppercase tracking-wider border border-luxury-gold/30 mb-3">
              <ShieldCheck size={13} />
              <span>Full-Spectrum Advisory</span>
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold">
              Real Estate Services & Consulting
            </h1>
            <p className="text-xs sm:text-sm text-gray-300 mt-2 leading-relaxed">
              Transparent, professional guidance for property buyers, sellers, developers, and institutional investors across Ujjain, Dewas Road, and Indore Highway.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="rounded-3xl bg-white p-8 border border-luxury-border/80 shadow-luxury hover:shadow-luxury-lg transition-all space-y-6 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-luxury-darkest flex items-center justify-center mb-5 shadow-md">
                  {getIcon(service.icon)}
                </div>

                <h3 className="font-serif text-2xl font-bold text-luxury-ink">
                  {service.title}
                </h3>
                <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-6 space-y-3 pt-4 border-t border-gray-100">
                  {service.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-gray-700">
                      <div className="w-4 h-4 rounded-full bg-luxury-cream border border-luxury-border flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={10} className="text-luxury-deep font-bold" />
                      </div>
                      <span className="leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onOpenBookingModal()}
                  className="w-full py-3 rounded-xl bg-luxury-dark hover:bg-luxury-deep text-luxury-gold text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Request Service Consultation</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Signature 25% Booking Feature Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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
                Unlike informal brokers who create price confusion, Ambition Real Estate operates on rigorous per sq.ft parameter clarity and flexible 25% token booking agreements. This guarantees:
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
              <div className="p-6 rounded-2xl bg-luxury-darkest/90 border border-luxury-gold text-center">
                <span className="text-[10px] text-gray-400 uppercase tracking-widest block mb-1">Token Down-Payment</span>
                <span className="font-serif text-4xl font-extrabold text-luxury-gold block">25%</span>
                <span className="text-xs text-gray-300 mt-1 block">Easy installment & bank financing options</span>
              </div>

              <a
                href={`https://wa.me/${businessInfo.rawPhone1}?text=${encodeURIComponent("Hello Ambition Real Estate, I want to understand how your 25% booking policy works for plots.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center justify-center gap-2"
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
