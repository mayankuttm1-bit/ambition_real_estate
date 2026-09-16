import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Star, MapPin, ShieldCheck, ArrowRight, CheckCircle2, 
  Building2, Home, Landmark, Trees, Clock, Phone, Sparkles, MessageCircle, Navigation 
} from 'lucide-react';
import { businessInfo, propertiesData, testimonials } from '../data/properties';
import PropertyCard from '../components/common/PropertyCard';
import EmiCalculator from '../components/common/EmiCalculator';

export default function HomePage({ onSelectProperty, onOpenBookingModal }) {
  const featuredProperties = propertiesData.slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* 1. Luxury Hero Section with Stock Estate Background */}
      <section className="relative bg-luxury-darkest text-white overflow-hidden pt-16 pb-28 border-b border-luxury-border">
        {/* Background Stock Image with Luxury Emerald Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-luxury-4k.jpg"
            alt="Ambition Real Estate Prime Luxury Estate"
            className="w-full h-full object-cover object-center scale-105 filter brightness-[0.52] contrast-[1.08] saturate-[1.12]"
          />
          {/* Subtle Deep Emerald & Obsidian Gradient Layers for Text Legibility while preserving crisp architecture */}
          <div className="absolute inset-0 bg-gradient-to-b from-luxury-darkest/80 via-luxury-darkest/45 to-luxury-darkest/95"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-luxury-darkest/85 via-transparent to-luxury-darkest/85"></div>
          {/* Ambient Gold Shimmer */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-luxury-gold/10 blur-3xl pointer-events-none"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-luxury-surface/80 border border-luxury-gold/40 text-xs text-luxury-gold shadow-lg">
              <Sparkles size={13} className="animate-pulse text-amber-400" />
              <span className="font-semibold uppercase tracking-wider">Trusted Real Estate Advisory • Ujjain & Indore Road</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Invest In Prime Corridors With <span className="text-gold-gradient">Absolute Trust.</span>
            </h1>

            {/* Subheading */}
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-2xl mx-auto">
              Ambition Real Estate brings you verified duplex homes opposite D-Mart, 4-lane commercial plots, and high-growth township lands with 100% clear titles and our signature <strong className="text-luxury-gold">25% easy booking option</strong>.
            </p>

            {/* Quick Metrics */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} className="fill-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-white">5.0 Star</span>
                <span className="text-gray-400">({businessInfo.reviewsCount} Reviews)</span>
              </div>

              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                <Clock size={13} className="text-luxury-gold" />
                <span>Open Daily till 10 PM</span>
              </div>

              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                <ShieldCheck size={13} className="text-luxury-gold" />
                <span>Zero Hidden Brokerage</span>
              </div>
            </div>

            {/* Hero Actions */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/properties"
                className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-luxury-gold-light via-luxury-gold to-luxury-gold-dark text-luxury-darkest text-xs font-bold uppercase tracking-wider hover:brightness-110 shadow-xl shadow-amber-900/30 flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
              >
                <span>Browse All Properties</span>
                <ArrowRight size={15} />
              </Link>

              <button
                onClick={() => onOpenBookingModal()}
                className="px-8 py-3.5 rounded-xl bg-luxury-surface/80 hover:bg-luxury-surface text-white border border-luxury-gold/50 text-xs font-semibold uppercase tracking-wider transition-all hover:scale-105 active:scale-95 shadow-lg backdrop-blur-md"
              >
                Book Free Site Visit
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Value Propositions Bar */}
      <section className="bg-white py-10 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-luxury-cream border border-luxury-border flex items-center justify-center shrink-0">
                <Home size={22} className="text-luxury-deep" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-sm text-luxury-ink">D-Mart Frontage Plots & Homes</h3>
                <p className="text-xs text-gray-500 mt-1">High-footfall 4-lane touch commercial & residential assets.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-luxury-cream border border-luxury-border flex items-center justify-center shrink-0">
                <Building2 size={22} className="text-luxury-deep" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-sm text-luxury-ink">Mega 15,000 SF Highway Land</h3>
                <p className="text-xs text-gray-500 mt-1">100' x 150' commercial plot near Toll Plaza for major projects.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-luxury-cream border border-luxury-border flex items-center justify-center shrink-0">
                <Landmark size={22} className="text-luxury-deep" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-sm text-luxury-ink">100% Clear Title Registry</h3>
                <p className="text-xs text-gray-500 mt-1">Full legal verification, diversion documentation, and prompt registry.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-luxury-cream border border-luxury-border flex items-center justify-center shrink-0">
                <Sparkles size={22} className="text-luxury-gold-dark" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-sm text-luxury-ink">Signature 25% Booking</h3>
                <p className="text-xs text-gray-500 mt-1">Transparent per sq.ft terms with flexible down-payment milestones.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2.5 About Ambition Real Estate Section */}
      <section id="about" className="py-20 bg-luxury-cream/60 border-b border-gray-200 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-luxury-gold/15 border border-luxury-gold/30 text-xs font-semibold uppercase tracking-wider text-luxury-gold-dark font-serif">
                <Sparkles size={13} className="text-luxury-gold-dark" />
                <span>About Ambition Real Estate</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-luxury-ink leading-tight">
                आपका विश्वास, <span className="text-luxury-deep">हमारी जिम्मेदारी।</span>
              </h2>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Founded with a relentless commitment to transparency and client trust, <strong className="text-luxury-ink">Ambition Real Estate</strong> has established itself as the leading property advisory firm across Ujjain and the high-growth Indore highway corridor.
              </p>

              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Whether you are searching for your family's dream duplex home opposite D-Mart, a high-footfall commercial plot on the 6-lane highway, or large-scale land for township colonization, our advisory is built on 100% legal due diligence, clear per sq.ft pricing, and zero undisclosed brokerage surprises.
              </p>

              {/* 4 Feature Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-white border border-luxury-border/60 shadow-sm flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-sm text-luxury-ink">100% Clear Titles</h4>
                    <p className="text-[11px] text-gray-500 mt-0.5">Strict legal verification with revenue records & registry ready status.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-luxury-border/60 shadow-sm flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-sm text-luxury-ink">25% Booking Option</h4>
                    <p className="text-[11px] text-gray-500 mt-0.5">Flexible token down-payment protecting your rate and allocation.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-luxury-border/60 shadow-sm flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-sm text-luxury-ink">Open Daily till 10 PM</h4>
                    <p className="text-[11px] text-gray-500 mt-0.5">Guided site visits 7 days a week accommodating your work schedule.</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-luxury-border/60 shadow-sm flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-luxury-cream text-luxury-deep flex items-center justify-center shrink-0 font-bold">
                    ★
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-sm text-luxury-ink">5.0 Star Rated</h4>
                    <p className="text-[11px] text-gray-500 mt-0.5">Flawless 5.0 Google score across 15+ verified client reviews.</p>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenBookingModal()}
                  className="px-6 py-3 rounded-xl bg-luxury-dark hover:bg-luxury-deep text-luxury-gold text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-2 transition-all"
                >
                  <span>Book a Consultation</span>
                  <ArrowRight size={14} />
                </button>

                <a
                  href={`tel:${businessInfo.rawPhone1}`}
                  className="px-6 py-3 rounded-xl bg-white hover:bg-gray-50 text-luxury-ink border border-gray-300 text-xs font-semibold flex items-center gap-2 transition-colors"
                >
                  <Phone size={14} className="text-luxury-gold-dark" />
                  <span>Call: {businessInfo.phone1}</span>
                </a>
              </div>
            </div>

            {/* Right Card: Advisor & Office Profile */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl bg-luxury-darkest text-white p-6 sm:p-8 border border-luxury-gold/50 shadow-2xl space-y-5 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-luxury-gold/10 rounded-full blur-2xl pointer-events-none"></div>

                {/* Stock Image: Luxury Villa Exterior */}
                <div className="relative rounded-2xl overflow-hidden border border-luxury-border/60 h-44 group">
                  <img
                    src="/images/luxury-villa-exterior.jpg"
                    alt="Luxury Real Estate Portfolio"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-darkest via-black/20 to-transparent"></div>
                  <div className="absolute bottom-2.5 left-3 px-2.5 py-1 rounded-md bg-luxury-darkest/90 border border-luxury-gold/40 text-[10px] uppercase font-bold text-luxury-gold tracking-wider backdrop-blur-md">
                    Verified Portfolio & Prime Assets
                  </div>
                </div>

                {/* Header */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-luxury-gold via-amber-600 to-luxury-gold-dark p-0.5 shadow-lg flex items-center justify-center shrink-0">
                    <div className="w-full h-full bg-luxury-darkest rounded-[14px] flex items-center justify-center">
                      <span className="font-serif text-2xl font-bold text-luxury-gold">UT</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-luxury-gold font-bold px-2 py-0.5 bg-luxury-gold/20 rounded-full border border-luxury-gold/30">
                      Senior Property Advisor
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-white mt-1">
                      {businessInfo.advisor}
                    </h3>
                    <p className="text-xs text-gray-300">Ambition Real Estate, Ujjain</p>
                  </div>
                </div>

                {/* Quote */}
                <div className="p-4 rounded-xl bg-luxury-surface/40 border border-luxury-border/60 text-xs text-gray-300 italic leading-relaxed">
                  "Our mission is simple: provide honest on-ground counsel, exact measurements, clear registry documentation, and the best per sq.ft value in Madhya Pradesh."
                </div>

                {/* Office Fast Facts */}
                <div className="space-y-3 text-xs pt-1 border-t border-luxury-border/50">
                  <div className="flex items-start gap-2.5">
                    <MapPin size={15} className="text-luxury-gold shrink-0 mt-0.5" />
                    <span className="text-gray-300 leading-relaxed">{businessInfo.address}</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Clock size={15} className="text-luxury-gold shrink-0" />
                    <span className="text-gray-300">{businessInfo.hours}</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Phone size={15} className="text-luxury-gold shrink-0" />
                    <span className="text-white font-semibold">{businessInfo.phone1} / {businessInfo.phone2}</span>
                  </div>
                </div>

                {/* WhatsApp Button */}
                <a
                  href={`https://wa.me/${businessInfo.rawPhone1}?text=${encodeURIComponent("Hello Ujjwal ji, I would like to learn more about Ambition Real Estate and discuss available property options.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <MessageCircle size={15} />
                  <span>Connect with Ujjwal Tiwari on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Properties Showcase */}
      <section className="py-16 bg-luxury-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-luxury-gold-dark font-serif block mb-1">
                Handpicked Investment Assets
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-luxury-ink">
                Featured Properties & Highway Land
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 mt-2 max-w-xl">
                Direct listings verified by Ambition Real Estate with exact dimensions, pricing transparency, and site visit access.
              </p>
            </div>

            <Link
              to="/properties"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-luxury-deep hover:text-luxury-gold-dark transition-colors"
            >
              <span>View All 8+ Listings</span>
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Grid of properties */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onSelect={onSelectProperty}
                onBookVisit={onOpenBookingModal}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/properties"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-luxury-dark hover:bg-luxury-deep text-luxury-gold text-xs font-bold uppercase tracking-wider shadow-lg transition-all"
            >
              <span>Explore Full Real Estate Catalogue</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Strategic Investment Spotlight (Ujjain-Indore Corridor) */}
      <section className="py-16 bg-luxury-darkest text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-luxury-gold/20 text-luxury-gold text-xs font-semibold uppercase tracking-wider border border-luxury-gold/30">
                <Landmark size={13} />
                <span>Simhastha 2028 & Highway Corridor Boom</span>
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
                Why Ujjain - Indore Road is the <span className="text-gold-gradient">#1 Real Estate Growth Zone</span> in MP
              </h2>

              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                With the 6-lane widening of the Indore-Ujjain Highway, the upcoming metro connectivity studies, and high-frequency religious tourism leading into Simhastha, property values around D-Mart, Toll Plaza, and Dewas Bypass are experiencing unprecedented capital appreciation.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-2">
                <div className="p-4 rounded-xl bg-luxury-surface/40 border border-luxury-border">
                  <h4 className="font-serif font-bold text-luxury-gold text-sm mb-1">D-Mart Commercial Node</h4>
                  <p className="text-gray-400 leading-relaxed">
                    Prime 4-lane road touch with immediate footfall, perfect for high-yield retail spaces, clinics, and showrooms.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-luxury-surface/40 border border-luxury-border">
                  <h4 className="font-serif font-bold text-luxury-gold text-sm mb-1">Toll Plaza 6-Lane Corridor</h4>
                  <p className="text-gray-400 leading-relaxed">
                    High transit corridor ideal for mega commercial plots, petrol pumps, warehouses, and luxury resort hospitality.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  to="/investment-guide"
                  className="px-6 py-3 rounded-lg bg-luxury-gold text-luxury-darkest text-xs font-bold uppercase tracking-wider hover:brightness-110 shadow-lg"
                >
                  Read Comprehensive Growth Guide
                </Link>

                <button
                  onClick={() => onOpenBookingModal()}
                  className="px-6 py-3 rounded-lg bg-luxury-surface hover:bg-luxury-surface/80 text-white text-xs font-semibold border border-luxury-border"
                >
                  Consult an Advisor
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-luxury-gold/40 shadow-2xl bg-luxury-dark">
                <img
                  src="/images/unnamed (10).png"
                  alt="6-Lane Indore-Ujjain Highway Commercial Plot"
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 bg-luxury-dark/95 border-t border-luxury-border text-xs text-center">
                  <span className="font-semibold text-luxury-gold">Featured Highway Project:</span> 15,000 Sq.Ft Commercial Plot on 6-Lane Indore Road near Toll Plaza.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Interactive EMI & Financial Calculator */}
      <section className="py-16 bg-luxury-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <EmiCalculator onOpenBookingModal={onOpenBookingModal} />
        </div>
      </section>

      {/* 6. Five Steps to Property Ownership */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-luxury-gold-dark font-serif block mb-1">
              Transparent Advisory Workflow
            </span>
            <h2 className="font-serif text-3xl font-bold text-luxury-ink">
              Five Steps to Your Ideal Property
            </h2>
            <p className="text-xs text-gray-500 mt-2">
              From initial requirement discovery to sub-registrar handover, we ensure total peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              {
                step: '01',
                title: 'Requirement Brief',
                desc: 'Tell us your preferred locality (Indore Rd, Dewas Rd, etc.), budget, and plot/house dimension needs.'
              },
              {
                step: '02',
                title: 'Curated Options',
                desc: 'We present verified properties matching your parameters with transparent per sq.ft rate breakdowns.'
              },
              {
                step: '03',
                title: 'Free Site Visit',
                desc: 'Guided on-ground inspection led by Senior Advisor Ujjwal Tiwari (available daily till 10 PM).'
              },
              {
                step: '04',
                title: '25% Booking & Due Diligence',
                desc: 'Secure the property with our signature 25% token booking while our legal team verifies all titles.'
              },
              {
                step: '05',
                title: 'Registry & Handover',
                desc: 'Hassle-free execution at the sub-registrar office, bank loan disbursement, and immediate possession.'
              }
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-luxury-paper border border-luxury-border/60 relative">
                <span className="font-serif text-3xl font-bold text-luxury-gold/50 block mb-3">
                  {item.step}
                </span>
                <h3 className="font-serif font-bold text-sm text-luxury-ink mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Client Reviews / Google 5.0 Star Ratings */}
      <section className="py-16 bg-luxury-darkest text-white border-t border-luxury-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="flex items-center justify-center gap-1 text-amber-400 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="fill-amber-400" />
              ))}
            </div>
            <h2 className="font-serif text-3xl font-bold text-white">
              Trusted by Discerning Buyers & Investors
            </h2>
            <p className="text-xs text-gray-400 mt-2">
              Rated a perfect <strong className="text-luxury-gold">5.0 / 5.0 on Google</strong> across {businessInfo.reviewsCount} verified reviews.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-luxury-dark border border-luxury-border flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} size={14} className="fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-gray-300 leading-relaxed italic">
                    "{t.comment}"
                  </p>
                </div>

                <div className="pt-4 border-t border-luxury-border/60">
                  <h4 className="font-serif font-bold text-white text-sm">{t.name}</h4>
                  <p className="text-[11px] text-luxury-gold">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7.5 Registered Office & Google Maps Location Section */}
      <section id="office-location" className="py-20 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-luxury-gold/20 text-luxury-gold-dark text-xs font-semibold uppercase tracking-wider border border-luxury-gold/30 mb-2 font-serif">
                <MapPin size={13} />
                <span>Visit Our Registered Office</span>
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-luxury-ink">
                Prime Office on Indore - Ujjain Highway
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 mt-2 max-w-2xl leading-relaxed">
                Drop by our office in Pawapuri Colony for in-person consultations, project masterplans review, or to embark on a guided site visit with Senior Advisor Ujjwal Tiwari.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="https://maps.google.com/?q=194+Mahaveer+Bagh+Colony+Indore+Ujjain+Rd+Pawapuri+Colony+Ujjain"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-luxury-dark text-luxury-gold text-xs font-semibold hover:bg-luxury-deep transition-colors shadow-md flex items-center gap-2"
              >
                <Navigation size={14} />
                <span>Open in Google Maps</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Office Info Card */}
            <div className="lg:col-span-4 rounded-3xl bg-luxury-cream border border-luxury-border p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-luxury-gold-dark block mb-1">Office Address</span>
                  <p className="font-serif font-bold text-base text-luxury-ink leading-relaxed">
                    194, Mahaveer Bagh Colony, Indore - Ujjain Rd, Pawapuri Colony, Ujjain, MP 456010
                  </p>
                </div>

                <div className="pt-4 border-t border-luxury-border/60">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-luxury-gold-dark block mb-1">Working Hours</span>
                  <p className="text-xs text-gray-700 font-semibold flex items-center gap-1.5">
                    <Clock size={13} className="text-luxury-deep" />
                    <span>{businessInfo.hours}</span>
                  </p>
                  <span className="text-[11px] text-emerald-700 block mt-1">Guided visits available 7 days a week</span>
                </div>

                <div className="pt-4 border-t border-luxury-border/60">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-luxury-gold-dark block mb-1">Advisory Hotline</span>
                  <div className="space-y-1">
                    <a href={`tel:${businessInfo.rawPhone1}`} className="text-xs font-bold text-luxury-deep hover:text-luxury-gold-dark block">
                      {businessInfo.phone1}
                    </a>
                    <a href={`tel:${businessInfo.rawPhone2}`} className="text-xs font-semibold text-gray-600 hover:text-luxury-gold-dark block">
                      {businessInfo.phone2}
                    </a>
                  </div>
                </div>

                <div className="pt-4 border-t border-luxury-border/60 flex items-center gap-2">
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={13} className="fill-amber-500" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-gray-800">5.0 Star Google Rating</span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onOpenBookingModal()}
                  className="w-full py-3 rounded-xl bg-luxury-dark hover:bg-luxury-deep text-luxury-gold text-xs font-bold uppercase tracking-wider shadow-md transition-all text-center"
                >
                  Schedule Office Meeting
                </button>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="lg:col-span-8 rounded-3xl overflow-hidden border border-luxury-border shadow-luxury h-80 sm:h-96 lg:h-auto min-h-[360px] relative bg-luxury-paper">
              <iframe
                title="Ambition Real Estate Office Location Map"
                src="https://maps.google.com/maps?q=194+Mahaveer+Bagh+Colony+Indore+Ujjain+Rd+Pawapuri+Colony+Ujjain&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full min-h-[360px] border-0"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Call to Action Banner */}
      <section className="py-14 bg-gradient-to-r from-luxury-dark via-luxury-deep to-luxury-dark text-white border-t border-luxury-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold max-w-2xl mx-auto">
            Looking for a Verified Plot, House, or Commercial Land in Ujjain?
          </h2>
          <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto">
            Speak directly with Senior Advisor <strong>{businessInfo.advisor}</strong> or schedule an on-ground site visit today.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={`tel:${businessInfo.rawPhone1}`}
              className="px-6 py-3 rounded-lg bg-luxury-gold text-luxury-darkest text-xs font-bold uppercase tracking-wider hover:brightness-110 shadow-lg flex items-center gap-2"
            >
              <Phone size={15} />
              <span>Call: {businessInfo.phone1}</span>
            </a>

            <a
              href={`https://wa.me/${businessInfo.rawPhone1}?text=${encodeURIComponent("Hello Ambition Real Estate, I would like to schedule a site visit this week.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-2"
            >
              <MessageCircle size={15} />
              <span>Message on WhatsApp</span>
            </a>

            <button
              onClick={() => onOpenBookingModal()}
              className="px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/20"
            >
              Request Free Callback
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
