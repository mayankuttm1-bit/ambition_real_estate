import React, { useState, useMemo } from 'react';
import { Search, Filter, MapPin, Sparkles, SlidersHorizontal, ArrowRight, MessageCircle } from 'lucide-react';
import { propertiesData, businessInfo } from '../data/properties';
import PropertyCard from '../components/common/PropertyCard';

export default function PropertiesPage({ onSelectProperty, onOpenBookingModal }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [selectedLocation, setSelectedLocation] = useState('ALL');
  const [onlyTwentyFivePercent, setOnlyTwentyFivePercent] = useState(false);

  const categories = [
    { label: 'All Inventory', value: 'ALL' },
    { label: 'Residential Houses', value: 'Residential House' },
    { label: 'Commercial Plots', value: 'Commercial Plot' },
    { label: 'Residential Plots', value: 'Residential Plot' },
    { label: 'Agricultural & Farm', value: 'Agricultural Land' },
    { label: 'Township Land', value: 'Development Land' },
  ];

  const locations = [
    { label: 'All Locations', value: 'ALL' },
    { label: 'Indore Road (Opp. D-Mart)', value: 'D-Mart' },
    { label: '6-Lane Highway (Toll Plaza)', value: 'Toll' },
    { label: 'Dewas Road (Shivansh Valley)', value: 'Dewas' },
    { label: 'Triveni Vihar A-Sector', value: 'Triveni' },
    { label: 'Shree Nath Ji Colony', value: 'Shree Nath' },
    { label: 'Tapobhoomi 4-Lane Bypass', value: 'Tapobhoomi' },
    { label: 'Nagda City (Dam Area)', value: 'Nagda' },
  ];

  const filteredProperties = useMemo(() => {
    return propertiesData.filter((p) => {
      const matchesSearch =
        p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.highlights.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCat = selectedCategory === 'ALL' || p.category === selectedCategory;
      const matchesLoc = selectedLocation === 'ALL' || p.location.toLowerCase().includes(selectedLocation.toLowerCase());
      const matchesBooking = !onlyTwentyFivePercent || p.bookingOption.includes('25%');

      return matchesSearch && matchesCat && matchesLoc && matchesBooking;
    });
  }, [searchTerm, selectedCategory, selectedLocation, onlyTwentyFivePercent]);

  return (
    <div className="min-h-screen bg-luxury-paper pb-20">
      {/* Header Banner */}
      <section className="bg-luxury-darkest text-white py-14 border-b border-luxury-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-luxury-gold/20 text-luxury-gold text-xs font-semibold uppercase tracking-wider border border-luxury-gold/30 mb-3">
              <Sparkles size={12} />
              <span>Verified Direct Listings</span>
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold">
              Properties, Plots & Highway Land
            </h1>
            <p className="text-xs sm:text-sm text-gray-300 mt-2 leading-relaxed">
              Explore authentic residential duplexes, 4-lane touch commercial plots, and large-scale land parcels across the Ujjain - Indore growth corridor.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search by project, size (e.g. 15x40, 2400 sq.ft), or landmark (D-Mart)..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-xs bg-gray-50 focus:bg-white focus:outline-none focus:border-luxury-deep transition-all"
              />
            </div>

            {/* Select Dropdowns */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Category Select */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs bg-gray-50 focus:bg-white focus:outline-none focus:border-luxury-deep"
              >
                {categories.map((c) => (
                  <option key={c.value} value={c.value}>
                    {c.label}
                  </option>
                ))}
              </select>

              {/* Location Select */}
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs bg-gray-50 focus:bg-white focus:outline-none focus:border-luxury-deep"
              >
                {locations.map((loc) => (
                  <option key={loc.value} value={loc.value}>
                    {loc.label}
                  </option>
                ))}
              </select>

              {/* 25% Booking Toggle */}
              <button
                onClick={() => setOnlyTwentyFivePercent(!onlyTwentyFivePercent)}
                className={`px-3.5 py-2.5 rounded-xl text-xs font-semibold border transition-all flex items-center gap-1.5 ${
                  onlyTwentyFivePercent
                    ? 'bg-luxury-deep text-luxury-gold border-luxury-deep shadow'
                    : 'bg-gray-50 text-gray-700 border-gray-200 hover:border-gray-300'
                }`}
              >
                <Sparkles size={13} className={onlyTwentyFivePercent ? 'text-luxury-gold' : 'text-gray-400'} />
                <span>25% Booking Only</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Listing Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex items-center justify-between mb-6">
          <p className="text-xs font-semibold text-gray-500">
            Showing <strong className="text-luxury-darkest">{filteredProperties.length}</strong> verified properties
          </p>

          {(searchTerm || selectedCategory !== 'ALL' || selectedLocation !== 'ALL' || onlyTwentyFivePercent) && (
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('ALL');
                setSelectedLocation('ALL');
                setOnlyTwentyFivePercent(false);
              }}
              className="text-xs text-luxury-deep hover:underline font-semibold"
            >
              Clear All Filters
            </button>
          )}
        </div>

        {/* Grid or Empty */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onSelect={onSelectProperty}
                onBookVisit={onOpenBookingModal}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-200 shadow-sm p-8 space-y-4 max-w-lg mx-auto">
            <Filter size={36} className="text-gray-300 mx-auto" />
            <h3 className="font-serif text-xl font-bold text-gray-800">No Exact Matches Found</h3>
            <p className="text-xs text-gray-500 leading-relaxed">
              We frequently source unlisted off-market plots and houses across Ujjain and Indore road. Let our advisory desk know what you are looking for.
            </p>
            <button
              onClick={() => onOpenBookingModal()}
              className="px-5 py-2.5 rounded-lg bg-luxury-dark text-luxury-gold text-xs font-semibold"
            >
              Post Custom Requirement
            </button>
          </div>
        )}

        {/* Custom Buyer Desk Card (Inspired by the small size plot flyer) */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-luxury-darkest via-luxury-dark to-luxury-deep p-8 text-white border border-luxury-gold/40 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs uppercase tracking-widest text-luxury-gold font-serif font-semibold block">
                Dedicated Buyer Representation Desk
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold">
                Have a Specific Plot or Budget Requirement in Mind?
              </h3>
              <p className="text-xs text-gray-300 leading-relaxed max-w-xl">
                Just like our active buyer mandates (e.g. Small Size Plot Required near Dewas Naka / Indore Road up to ₹7,000/sq.ft), we source direct owner properties with ready registry, clear titles, and zero hassle.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <button
                onClick={() => onOpenBookingModal()}
                className="w-full py-3 rounded-xl bg-luxury-gold text-luxury-darkest text-xs font-bold uppercase tracking-wider hover:brightness-110 shadow-lg text-center"
              >
                Submit Custom Requirement
              </button>

              <a
                href={`https://wa.me/${businessInfo.rawPhone1}?text=${encodeURIComponent("Hello Ambition Real Estate, I have a specific plot requirement and would like your assistance.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center justify-center gap-2 text-center"
              >
                <MessageCircle size={15} />
                <span>Chat with Advisor</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
