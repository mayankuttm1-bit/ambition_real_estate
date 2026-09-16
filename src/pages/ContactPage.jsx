import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Clock, Star, Send, 
  MessageCircle, CheckCircle2, ShieldCheck, HelpCircle, Navigation, 
  Tag, Building, Calendar, DollarSign, Sparkles 
} from 'lucide-react';
import { businessInfo } from '../data/properties';
import { saveInquiry, formatWhatsAppMessage } from '../utils/inquiryStorage';

export default function ContactPage() {
  const [inquiryType, setInquiryType] = useState('buyer'); // 'buyer' or 'seller'
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    // Buyer fields
    interest: 'Modern Duplex Houses (Opp. D-Mart)',
    budget: '₹45 Lakh - ₹75 Lakh',
    location: 'Indore Road Corridor (Opp. D-Mart)',
    visitDate: '',
    // Seller fields
    propertyType: 'Residential Plot / Colony Land',
    sellerLocation: '',
    area: '',
    expectedPrice: '',
    legalStatus: 'Registry Ready & 100% Clear Title',
    timeline: 'Flexible (1-3 Months)',
    // Shared notes
    notes: ''
  });

  const [submittedId, setSubmittedId] = useState(null);
  const [waUrl, setWaUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const submissionPayload = {
      type: inquiryType,
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      notes: formData.notes,
      ...(inquiryType === 'buyer' ? {
        interest: formData.interest,
        budget: formData.budget,
        location: formData.location,
        visitDate: formData.visitDate
      } : {
        propertyType: formData.propertyType,
        location: formData.sellerLocation,
        area: formData.area,
        expectedPrice: formData.expectedPrice,
        legalStatus: formData.legalStatus,
        timeline: formData.timeline
      })
    };

    // Save to localStorage backend
    const res = saveInquiry(submissionPayload);
    const assignedId = res.inquiryId;
    setSubmittedId(assignedId);

    // Format WhatsApp message
    const formattedWa = formatWhatsAppMessage(submissionPayload, assignedId);
    const url = `https://wa.me/${businessInfo.rawPhone1}?text=${encodeURIComponent(formattedWa)}`;
    setWaUrl(url);

    // Auto open WhatsApp after brief feedback
    setTimeout(() => {
      window.open(url, '_blank');
    }, 1200);
  };

  const faqs = [
    {
      q: "What are the office hours for Ambition Real Estate?",
      a: "Our office is open daily and closes at 10:00 PM. Our advisory desk and guided site visits operate 7 days a week for client convenience."
    },
    {
      q: "How does the signature 25% booking option work?",
      a: "You can reserve verified plots or duplex houses with a 25% initial token booking down payment. This locks your price per sq.ft and grants a due diligence window while our team verifies titles and assists with bank loan sanctions."
    },
    {
      q: "Where are your primary property locations in Ujjain?",
      a: "Our active inventory is centered along Indore Road (opposite D-Mart and near 6-lane Toll Plaza), Dewas Road (Shivansh Valley 4-lane colony), Triveni Vihar A-Sector, and Shree Nath Ji Colony."
    },
    {
      q: "Can I list my property with Ambition Real Estate as a seller?",
      a: "Yes! Switch to the 'I Want to Sell / List' tab above. We verify legal titles, prepare marketing flyers, and present your property directly to our database of qualified investors."
    }
  ];

  return (
    <div className="min-h-screen bg-luxury-paper pb-20">
      {/* Header Banner */}
      <section className="bg-luxury-darkest text-white py-16 border-b border-luxury-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-luxury-gold/20 text-luxury-gold text-xs font-semibold uppercase tracking-wider border border-luxury-gold/30 mb-3">
              <MapPin size={13} />
              <span>Direct Office & Advisory Hotline</span>
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold">
              Connect With Ambition Real Estate
            </h1>
            <p className="text-xs sm:text-sm text-gray-300 mt-2 leading-relaxed">
              Visit our office on Indore-Ujjain Road or submit your buyer or seller mandate directly to Senior Advisor Ujjwal Tiwari.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Col: Contact Information & Advisor Profile */}
          <div className="lg:col-span-5 space-y-6">
            {/* Advisor Card */}
            <div className="rounded-3xl bg-luxury-dark text-white p-8 border border-luxury-gold/50 shadow-2xl space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-luxury-gold via-amber-600 to-luxury-gold-dark p-0.5 shadow-lg flex items-center justify-center shrink-0">
                  <div className="w-full h-full bg-luxury-darkest rounded-[14px] flex items-center justify-center">
                    <span className="font-serif text-2xl font-bold text-luxury-gold">UT</span>
                  </div>
                </div>

                <div>
                  <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-luxury-gold/20 text-luxury-gold text-[10px] font-bold uppercase tracking-wider border border-luxury-gold/30 mb-1">
                    Senior Property Advisor
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white">
                    {businessInfo.advisor}
                  </h3>
                  <p className="text-xs text-gray-300">Ambition Real Estate, Ujjain</p>
                </div>
              </div>

              {/* Trust Metrics */}
              <div className="grid grid-cols-2 gap-3 py-4 border-y border-luxury-border/60 text-xs">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-luxury-surface text-luxury-gold">
                    <Star size={16} className="fill-luxury-gold" />
                  </div>
                  <div>
                    <span className="font-bold text-white text-sm block leading-none">5.0 ★</span>
                    <span className="text-[11px] text-gray-400">15 Google Reviews</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-luxury-surface text-luxury-gold">
                    <ShieldCheck size={16} />
                  </div>
                  <div>
                    <span className="font-bold text-white text-sm block leading-none">10+ Years</span>
                    <span className="text-[11px] text-gray-400">Ujjain Corridor Trust</span>
                  </div>
                </div>
              </div>

              {/* Direct Touchpoints */}
              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-luxury-surface flex items-center justify-center text-luxury-gold shrink-0 mt-0.5">
                    <Phone size={15} />
                  </div>
                  <div>
                    <span className="text-gray-400 block text-[11px]">Primary Calling Numbers</span>
                    <a href={`tel:${businessInfo.rawPhone1}`} className="font-semibold text-white hover:text-luxury-gold transition-colors block text-sm">
                      {businessInfo.phone1}
                    </a>
                    <a href={`tel:${businessInfo.rawPhone2}`} className="font-semibold text-gray-300 hover:text-luxury-gold transition-colors block text-xs mt-0.5">
                      {businessInfo.phone2}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-luxury-surface flex items-center justify-center text-luxury-gold shrink-0 mt-0.5">
                    <Clock size={15} />
                  </div>
                  <div>
                    <span className="text-gray-400 block text-[11px]">Working Hours</span>
                    <span className="font-semibold text-white text-xs">{businessInfo.hours}</span>
                    <span className="text-[11px] text-emerald-400 block">Guided visits conducted 7 days a week</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-luxury-surface flex items-center justify-center text-luxury-gold shrink-0 mt-0.5">
                    <MapPin size={15} />
                  </div>
                  <div>
                    <span className="text-gray-400 block text-[11px]">Registered Office Address</span>
                    <p className="font-medium text-white leading-relaxed text-xs">
                      {businessInfo.address}
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick WhatsApp Button */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/${businessInfo.rawPhone1}?text=${encodeURIComponent("Hello Ujjwal ji, I am contacting you from Ambition Real Estate website for property advisory.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
                >
                  <MessageCircle size={16} />
                  <span>Chat on WhatsApp Directly</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Col: Interactive Lead Inquiry Form with Dual Buyer / Seller Modes */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white p-6 sm:p-8 border border-luxury-border shadow-luxury space-y-6">
              {/* Form Title */}
              <div>
                <span className="text-xs uppercase tracking-widest text-luxury-gold-dark font-serif font-semibold block mb-1">
                  Online Registration Portal
                </span>
                <h3 className="font-serif text-2xl font-bold text-luxury-ink">
                  {inquiryType === 'buyer' ? 'Schedule a Consultation or Site Visit' : 'List Your Property for Sale with Us'}
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  {inquiryType === 'buyer'
                    ? 'Connect with Senior Advisor Ujjwal Tiwari to inspect verified duplex homes and 4-lane commercial plots.'
                    : 'Submit your plot, house, or commercial asset to connect with serious, verified buyers across Ujjain.'}
                </p>
              </div>

              {/* Dual Mode Selector (Buyer vs Seller) */}
              {!submittedId && (
                <div className="p-1 bg-luxury-cream rounded-xl border border-luxury-border/60 grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setInquiryType('buyer')}
                    className={`flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                      inquiryType === 'buyer'
                        ? 'bg-luxury-dark text-luxury-gold shadow-md'
                        : 'text-gray-600 hover:text-luxury-ink hover:bg-white/60'
                    }`}
                  >
                    <Tag size={15} />
                    <span>I Want to Buy / Invest</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setInquiryType('seller')}
                    className={`flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                      inquiryType === 'seller'
                        ? 'bg-luxury-dark text-luxury-gold shadow-md'
                        : 'text-gray-600 hover:text-luxury-ink hover:bg-white/60'
                    }`}
                  >
                    <Building size={15} />
                    <span>I Want to Sell / List</span>
                  </button>
                </div>
              )}

              {/* Submitted Confirmation State */}
              {submittedId ? (
                <div className="text-center py-8 space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-md animate-pulseGlow">
                    <CheckCircle2 size={36} />
                  </div>

                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-luxury-gold/15 text-luxury-gold-dark text-xs font-mono font-bold tracking-widest border border-luxury-gold/40 mb-2">
                      REF ID: {submittedId}
                    </span>
                    <h4 className="font-serif text-2xl font-bold text-luxury-ink">
                      {inquiryType === 'buyer' ? 'Site Visit Request Registered!' : 'Property Listing Registered!'}
                    </h4>
                    <p className="text-xs text-gray-600 max-w-md mx-auto mt-2 leading-relaxed">
                      Thank you, <strong className="text-luxury-darkest">{formData.name}</strong>. Your inquiry has been stored and forwarded to WhatsApp for instant confirmation with Senior Advisor Ujjwal Tiwari.
                    </p>
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all"
                    >
                      <MessageCircle size={16} />
                      <span>Open WhatsApp Chat</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => setSubmittedId(null)}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-xs uppercase tracking-wider transition-all"
                    >
                      Submit Another Query
                    </button>
                  </div>
                </div>
              ) : (
                /* Interactive Form Fields */
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-1.5">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Verma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs bg-gray-50 focus:bg-white focus:outline-none focus:border-luxury-deep transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-1.5">WhatsApp Mobile Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs bg-gray-50 focus:bg-white focus:outline-none focus:border-luxury-deep transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-1.5">Email Address (Optional)</label>
                    <input
                      type="email"
                      placeholder="e.g. ramesh@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs bg-gray-50 focus:bg-white focus:outline-none focus:border-luxury-deep transition-all"
                    />
                  </div>

                  {/* BUYER MODE FIELDS */}
                  {inquiryType === 'buyer' && (
                    <div className="space-y-4 pt-2 border-t border-gray-200 animate-fadeIn">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-gray-700 font-semibold mb-1.5">Property of Interest *</label>
                          <select
                            value={formData.interest}
                            onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs bg-gray-50 focus:bg-white focus:outline-none focus:border-luxury-deep transition-all"
                          >
                            <option value="Modern Duplex Houses (Opp. D-Mart)">Modern Duplex Houses (Opp. D-Mart, Indore Rd)</option>
                            <option value="4-Lane Highway Commercial Plots">4-Lane Commercial Plots (In front of D-Mart)</option>
                            <option value="15,000 Sq.Ft Mega Highway Plot">15,000 Sq.Ft Mega Highway Plot (6-Lane Toll Plaza)</option>
                            <option value="Shivansh Valley Corner Plot">Shivansh Valley 3,100 SF Corner Plot (Dewas Rd)</option>
                            <option value="Triveni Vihar Commercial Plot">Triveni Vihar A-Sector Commercial Plot</option>
                            <option value="Shree Nath Ji Colony Plots">Shree Nath Ji Colony Residential Plots</option>
                            <option value="Tapobhoomi 25 Bigha Township">25 Bigha Township Development Land</option>
                            <option value="Nagda 77.6 Bigha Farm Estate">77.6 Bigha Farmhouse / Agro Asset</option>
                            <option value="General Property Advisory">General Property Advisory Mandate</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-gray-700 font-semibold mb-1.5">Budget Bracket</label>
                          <select
                            value={formData.budget}
                            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs bg-gray-50 focus:bg-white focus:outline-none focus:border-luxury-deep transition-all"
                          >
                            <option value="₹25 Lakh - ₹45 Lakh">₹25 Lakh - ₹45 Lakh</option>
                            <option value="₹45 Lakh - ₹75 Lakh">₹45 Lakh - ₹75 Lakh (Duplex Category)</option>
                            <option value="₹75 Lakh - ₹1.5 Crore">₹75 Lakh - ₹1.5 Crore</option>
                            <option value="₹1.5 Crore - ₹3 Crore+">₹1.5 Crore - ₹3 Crore+ (Commercial / Farm)</option>
                            <option value="Flexible / Negotiable">Flexible / Open</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-gray-700 font-semibold mb-1.5">Preferred Corridor</label>
                          <select
                            value={formData.location}
                            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs bg-gray-50 focus:bg-white focus:outline-none focus:border-luxury-deep transition-all"
                          >
                            <option value="Indore Road Corridor (Opp. D-Mart)">Indore Road Corridor (Opp. D-Mart)</option>
                            <option value="Indore Road Toll Plaza Node">Indore Road Toll Plaza Node</option>
                            <option value="Dewas Road (Shivansh Valley)">Dewas Road (Shivansh Valley)</option>
                            <option value="Triveni Vihar Commercial Sector">Triveni Vihar Commercial Sector</option>
                            <option value="Sanwer Road / Outer Ring Bypass">Sanwer Road / Outer Ring Bypass</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-gray-700 font-semibold mb-1.5 flex items-center gap-1">
                            <Calendar size={13} className="text-luxury-gold-dark" />
                            <span>Preferred Visit Date</span>
                          </label>
                          <input
                            type="date"
                            value={formData.visitDate}
                            onChange={(e) => setFormData({ ...formData, visitDate: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs bg-gray-50 focus:bg-white focus:outline-none focus:border-luxury-deep transition-all"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* SELLER MODE FIELDS */}
                  {inquiryType === 'seller' && (
                    <div className="space-y-4 pt-2 border-t border-gray-200 animate-fadeIn">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-gray-700 font-semibold mb-1.5">Property Type to Sell *</label>
                          <select
                            value={formData.propertyType}
                            onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs bg-gray-50 focus:bg-white focus:outline-none focus:border-luxury-deep transition-all"
                          >
                            <option value="Residential Plot / Colony Land">Residential Plot / Colony Land</option>
                            <option value="Duplex / Independent House">Duplex / Independent House</option>
                            <option value="Highway Commercial Plot / Land">Highway Commercial Plot / Land</option>
                            <option value="Agricultural Farmhouse / Orchard">Agricultural Farmhouse / Orchard</option>
                            <option value="Commercial Shop / Building">Commercial Shop / Building</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-gray-700 font-semibold mb-1.5">Location / Colony in Ujjain *</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Mahaveer Bagh, Indore Road"
                            value={formData.sellerLocation}
                            onChange={(e) => setFormData({ ...formData, sellerLocation: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs bg-gray-50 focus:bg-white focus:outline-none focus:border-luxury-deep transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-gray-700 font-semibold mb-1.5">Plot / Built-up Area</label>
                          <input
                            type="text"
                            placeholder="e.g. 1,000 sq.ft or 20x50 or 5 Bigha"
                            value={formData.area}
                            onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs bg-gray-50 focus:bg-white focus:outline-none focus:border-luxury-deep transition-all"
                          />
                        </div>

                        <div>
                          <label className="block text-gray-700 font-semibold mb-1.5">Expected Asking Price</label>
                          <input
                            type="text"
                            placeholder="e.g. ₹60 Lakh or ₹4,500/sq.ft"
                            value={formData.expectedPrice}
                            onChange={(e) => setFormData({ ...formData, expectedPrice: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs bg-gray-50 focus:bg-white focus:outline-none focus:border-luxury-deep transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-gray-700 font-semibold mb-1.5">Title & Legal Status</label>
                          <select
                            value={formData.legalStatus}
                            onChange={(e) => setFormData({ ...formData, legalStatus: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs bg-gray-50 focus:bg-white focus:outline-none focus:border-luxury-deep transition-all"
                          >
                            <option value="Registry Ready & 100% Clear Title">Registry Ready & 100% Clear Title</option>
                            <option value="RERA / TNCP Approved Colony">RERA / TNCP Approved Colony</option>
                            <option value="Diversion Done (Non-Agri)">Diversion Done (Non-Agri)</option>
                            <option value="Ancestral Property / In Scrutiny">Ancestral Property / In Scrutiny</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-gray-700 font-semibold mb-1.5">Sale Timeline Urgency</label>
                          <select
                            value={formData.timeline}
                            onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs bg-gray-50 focus:bg-white focus:outline-none focus:border-luxury-deep transition-all"
                          >
                            <option value="Flexible (1-3 Months)">Flexible (1-3 Months)</option>
                            <option value="Immediate / Urgent (30 Days)">Immediate / Urgent (30 Days)</option>
                            <option value="Seeking Market Evaluation Only">Seeking Market Evaluation Only</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Notes / Special requirements */}
                  <div>
                    <label className="block text-gray-700 font-semibold mb-1.5">
                      {inquiryType === 'buyer' ? 'Specific Requirements / Dimensions' : 'Additional Property Highlights'}
                    </label>
                    <textarea
                      rows={3}
                      placeholder={inquiryType === 'buyer' ? 'Share any questions regarding plot size, 25% booking, or registry schedule...' : 'Corner plot, road width, nearby landmarks, or special features...'}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs bg-gray-50 focus:bg-white focus:outline-none focus:border-luxury-deep transition-all"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-gradient-to-r from-luxury-dark via-luxury-deep to-luxury-dark hover:brightness-110 text-luxury-gold font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-all group"
                    >
                      <Send size={15} className="group-hover:translate-x-1 transition-transform" />
                      <span>
                        {inquiryType === 'buyer' ? 'Submit Inquiry & Connect via WhatsApp' : 'Submit Property for Verification'}
                      </span>
                    </button>
                  </div>

                  <p className="text-[11px] text-gray-400 text-center">
                    All inquiries are directly reviewed by Senior Advisor Ujjwal Tiwari. Zero spam policy.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Office Location & Google Maps Card */}
        <div className="rounded-3xl bg-white p-8 border border-luxury-border shadow-luxury">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-luxury-gold-dark font-serif font-semibold block mb-1">
                Prime Location
              </span>
              <h3 className="font-serif text-2xl font-bold text-luxury-ink">
                Office Location on Indore - Ujjain Highway
              </h3>
              <p className="text-xs text-gray-500 mt-1">
                Conveniently situated in Pawapuri Colony on the primary Indore - Ujjain growth artery.
              </p>
            </div>

            <a
              href="https://maps.google.com/?q=194+Mahaveer+Bagh+Colony+Indore+Ujjain+Rd+Pawapuri+Colony+Ujjain"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-luxury-dark text-luxury-gold text-xs font-semibold hover:bg-luxury-deep transition-colors shadow-md"
            >
              <Navigation size={14} />
              <span>Open in Google Maps</span>
            </a>
          </div>

          {/* Interactive Map Embed */}
          <div className="rounded-2xl overflow-hidden border border-luxury-border/60 bg-luxury-cream h-72 sm:h-96 relative flex items-center justify-center">
            <iframe
              title="Ambition Real Estate Location Map"
              src="https://maps.google.com/maps?q=194+Mahaveer+Bagh+Colony+Indore+Ujjain+Rd+Pawapuri+Colony+Ujjain&t=&z=14&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div className="p-8 rounded-3xl bg-white border border-luxury-border shadow-luxury space-y-6">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-luxury-gold-dark font-serif font-semibold block mb-1">
              Client Knowledge Base
            </span>
            <h3 className="font-serif text-2xl font-bold text-luxury-ink">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-luxury-cream border border-luxury-border/60 space-y-2">
                <div className="flex items-center gap-2 text-luxury-deep font-bold text-sm font-serif">
                  <HelpCircle size={15} className="text-luxury-gold-dark shrink-0" />
                  <h4>{faq.q}</h4>
                </div>
                <p className="text-gray-600 leading-relaxed pl-6">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
