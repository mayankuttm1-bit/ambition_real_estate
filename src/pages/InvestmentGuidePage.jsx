import React from 'react';
import { 
  TrendingUp, Compass, MapPin, Building, Sparkles, CheckCircle2, 
  ArrowRight, Phone, MessageCircle, ShieldAlert, Award 
} from 'lucide-react';
import { businessInfo } from '../data/properties';
import { getAssetUrl } from '../utils/asset';

export default function InvestmentGuidePage({ onOpenBookingModal }) {
  const corridors = [
    {
      title: "1. Indore Road (Opposite D-Mart Node)",
      badge: "Highest Commercial Footfall",
      highlights: "Direct 4-lane highway touch, continuous retail footfall, ready residential duplexes, and premium commercial showroom plots.",
      whyInvest: "D-Mart serves as a massive retail magnet for both local residents and transit commuters. Rental yields and retail land values here command the highest liquidity in Ujjain.",
      availableProjects: "Modern Duplex Houses (₹45L - ₹75L), 4-Lane Touch Commercial Plots (1040, 1500, 2400 sq.ft)."
    },
    {
      title: "2. 6-Lane Toll Plaza Highway Corridor",
      badge: "Mega Infrastructure & Heavy Transit",
      highlights: "Strategic highway frontage connecting Indore to Ujjain with immense visibility for large commercial projects.",
      whyInvest: "Ideal for high-capital enterprises such as Petrol Pumps, Star Hotels, Resorts, Automobile Showrooms, and Logistics Warehouses.",
      availableProjects: "15,000 Sq.Ft Mega Commercial Highway Plot (100' x 150' frontage near Toll Tax)."
    },
    {
      title: "3. Tapobhoomi - Dewas 4-Lane Bypass",
      badge: "Township & Colonization Hotspot",
      highlights: "Fast-developing ring corridor avoiding downtown congestion, linking religious hubs and major arterial highways.",
      whyInvest: "Large land parcels allow developers to establish integrated gated townships, plotted colonies, and plotted housing societies at high profit margins.",
      availableProjects: "25 Bigha Contiguous Land Parcel for Colony Development."
    },
    {
      title: "4. Dewas Road & Shivansh Valley",
      badge: "Preferred Family Residential Haven",
      highlights: "Calm, green, and structured colonies with 4-lane road connectivity, educational institutions, and healthcare access.",
      whyInvest: "Rapid urbanization and proximity to colleges (Alpine College) create sustained rental demand and high residential resale values.",
      availableProjects: "3,100 Sq.Ft Double-Side Open Corner Plot in Shivansh Valley, Shree Nath Ji Colony Plots."
    }
  ];

  return (
    <div className="min-h-screen bg-luxury-paper pb-20 w-full max-w-full overflow-x-hidden">
      {/* Header Banner with Stock Land Background */}
      <section className="relative bg-luxury-darkest text-white py-20 border-b border-luxury-border overflow-hidden w-full max-w-full">
        <div className="absolute inset-0 z-0">
          <img
            src={getAssetUrl('/images/land-development.jpg')}
            alt="Ujjain Development Land"
            className="w-full h-full object-cover object-center filter brightness-[0.25] contrast-[1.15]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-luxury-darkest via-luxury-darkest/85 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full reveal-on-scroll">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-luxury-gold/20 text-luxury-gold text-xs font-semibold uppercase tracking-wider border border-luxury-gold/30 mb-3">
              <Compass size={13} />
              <span>Macro Growth Intelligence</span>
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold">
              Ujjain Real Estate Investment Guide
            </h1>
            <p className="text-xs sm:text-sm text-gray-300 mt-2 leading-relaxed">
              Strategic market analysis of high-yield corridors, infrastructure upgrades, and capital appreciation drivers along the Indore-Ujjain belt.
            </p>
          </div>
        </div>
      </section>

      {/* Main Analysis Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12 w-full max-w-full overflow-hidden reveal-on-scroll">
        {/* The 4 Mega Growth Drivers */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-luxury-border shadow-luxury space-y-6 w-full max-w-full overflow-hidden">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-luxury-gold-dark font-serif font-semibold block mb-1">
              Catalysts for Appreciation
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-luxury-ink">
              The 4 Pillars Driving Ujjain's Real Estate Boom
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
            <div className="p-5 rounded-2xl bg-luxury-cream border border-luxury-border/60 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-luxury-deep text-luxury-gold flex items-center justify-center font-bold font-serif text-sm">
                01
              </div>
              <h3 className="font-serif font-bold text-sm text-luxury-ink">6-Lane Indore-Ujjain Highway</h3>
              <p className="text-gray-600 leading-relaxed">
                Slashing travel time between Indore and Ujjain to just 40 minutes, creating a unified metropolitan economic corridor.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-luxury-cream border border-luxury-border/60 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-luxury-deep text-luxury-gold flex items-center justify-center font-bold font-serif text-sm">
                02
              </div>
              <h3 className="font-serif font-bold text-sm text-luxury-ink">Simhastha 2028 Infrastructure</h3>
              <p className="text-gray-600 leading-relaxed">
                Thousands of crores allocated for ring roads, bypass corridors, civic drainage, and tourism infrastructure across Ujjain.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-luxury-cream border border-luxury-border/60 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-luxury-deep text-luxury-gold flex items-center justify-center font-bold font-serif text-sm">
                03
              </div>
              <h3 className="font-serif font-bold text-sm text-luxury-ink">Commercial Hub near D-Mart</h3>
              <p className="text-gray-600 leading-relaxed">
                Retail, food courts, and medical establishments congregating on Indore Road, driving per sq.ft valuations higher every quarter.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-luxury-cream border border-luxury-border/60 space-y-2">
              <div className="w-8 h-8 rounded-lg bg-luxury-deep text-luxury-gold flex items-center justify-center font-bold font-serif text-sm">
                04
              </div>
              <h3 className="font-serif font-bold text-sm text-luxury-ink">Institutional & Academic Hub</h3>
              <p className="text-gray-600 leading-relaxed">
                Proximity to Alpine College, RKDF University, and emerging tech zones guarantees perpetual tenant demand for residential homes.
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Corridors Breakdown */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-luxury-ink">
              Micro-Market Corridor Analysis
            </h2>
            <p className="text-xs text-gray-500 mt-1">
              Compare strategic locations before finalizing your plot or commercial land investment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {corridors.map((c, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-white border border-luxury-border/80 p-6 sm:p-8 shadow-luxury space-y-4 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-luxury-gold/15 text-luxury-gold-dark text-[10px] font-bold uppercase tracking-wider border border-luxury-gold/30">
                      {c.badge}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-luxury-ink">
                    {c.title}
                  </h3>

                  <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                    <strong className="text-gray-800">Key Feature:</strong> {c.highlights}
                  </p>

                  <div className="mt-4 p-3.5 rounded-xl bg-luxury-cream border border-luxury-border/50 text-xs text-gray-700 leading-relaxed">
                    <strong className="text-luxury-deep block mb-0.5 font-serif">Why Invest Here?</strong>
                    {c.whyInvest}
                  </div>

                  <div className="mt-3 text-xs text-gray-500">
                    <strong className="text-gray-700">Active Inventory:</strong> {c.availableProjects}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-2">
                  <span className="text-[11px] text-gray-400 font-medium">Verified by Ambition</span>
                  <button
                    onClick={() => onOpenBookingModal()}
                    className="px-4 py-2 rounded-lg bg-luxury-dark text-luxury-gold text-xs font-semibold hover:bg-luxury-deep transition-colors"
                  >
                    Inquire for this Location
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Advisory Consultation Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-luxury-darkest via-luxury-dark to-luxury-deep p-8 sm:p-12 text-white border border-luxury-gold/40 text-center space-y-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-luxury-gold/20 text-luxury-gold text-xs font-semibold uppercase tracking-wider border border-luxury-gold/30">
            <Award size={13} />
            <span>On-Ground Market Intelligence</span>
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold max-w-2xl mx-auto">
            Need Tailored Feasibility for Your Investment?
          </h2>

          <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto leading-relaxed">
            Whether you are planning a residential bungalow, a commercial showroom, or an institutional purchase, Senior Advisor <strong>{businessInfo.advisor}</strong> is available daily to conduct private on-ground feasibility inspections.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={`tel:${businessInfo.rawPhone1}`}
              className="px-6 py-3 rounded-xl bg-luxury-gold text-luxury-darkest text-xs font-bold uppercase tracking-wider hover:brightness-110 shadow-lg flex items-center gap-2"
            >
              <Phone size={15} />
              <span>Call Advisor: {businessInfo.phone1}</span>
            </a>

            <a
              href={`https://wa.me/${businessInfo.rawPhone1}?text=${encodeURIComponent("Hello Ambition Real Estate, I read your Ujjain Investment Guide and would like expert advice on current plots.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-2"
            >
              <MessageCircle size={15} />
              <span>Discuss on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
