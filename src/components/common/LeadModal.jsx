import React, { useState, useEffect } from 'react';
import { 
  X, CheckCircle2, Phone, Calendar, Send, ShieldCheck, 
  MapPin, Building, Home, Tag, DollarSign, Clock, FileText, 
  ArrowRight, Sparkles, MessageCircle 
} from 'lucide-react';
import { businessInfo } from '../../data/properties';
import { saveInquiry, formatWhatsAppMessage } from '../../utils/inquiryStorage';
import { getAssetUrl } from '../../utils/asset';

export default function LeadModal({ isOpen, onClose, initialProperty = null, initialType = 'buyer' }) {
  const [inquiryType, setInquiryType] = useState(initialType); // 'buyer' or 'seller'
  const [submitting, setSubmitting] = useState(false);
  const [submittedId, setSubmittedId] = useState(null);
  const [waMessageUrl, setWaMessageUrl] = useState('');

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    // Buyer fields
    interest: initialProperty?.title || 'General Luxury Property Inquiry',
    budget: '',
    location: 'Indore Road Corridor (Opp. D-Mart)',
    visitDate: '',
    // Seller fields
    propertyType: 'Residential Plot / Colony Land',
    sellerLocation: '',
    area: '',
    expectedPrice: '',
    legalStatus: 'Registry Ready & Clear Title',
    timeline: 'Flexible (1-3 Months)',
    // Shared notes
    notes: ''
  });

  useEffect(() => {
    if (initialProperty) {
      setInquiryType('buyer');
      setFormData(prev => ({
        ...prev,
        interest: initialProperty.title
      }));
    }
  }, [initialProperty]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);

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

    // Save to LocalStorage Backend
    const result = saveInquiry(submissionPayload);
    const assignedId = result.inquiryId;
    setSubmittedId(assignedId);

    // Format WhatsApp message
    const waText = formatWhatsAppMessage(submissionPayload, assignedId);
    const waUrl = `https://wa.me/${businessInfo.rawPhone1}?text=${encodeURIComponent(waText)}`;
    setWaMessageUrl(waUrl);

    setSubmitting(false);

    // Prompt WhatsApp dispatch after brief confirmation
    setTimeout(() => {
      window.open(waUrl, '_blank');
    }, 1200);
  };

  const handleReset = () => {
    setSubmittedId(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-xl bg-luxury-darkest border border-luxury-gold/50 rounded-3xl shadow-2xl overflow-hidden text-white animate-fadeInScale max-h-[92vh] flex flex-col">
        {/* Top Header Ribbon */}
        <div className="bg-gradient-to-r from-luxury-dark via-luxury-deep to-luxury-dark p-5 sm:p-6 border-b border-luxury-border shrink-0 flex items-start justify-between gap-3">
          <div className="flex items-start gap-3.5">
            <img
              src={getAssetUrl('/images/logo-icon.png')}
              alt="Ambition Real Estate"
              className="w-11 h-11 object-contain filter drop-shadow-[0_2px_8px_rgba(197,160,89,0.35)] shrink-0 hidden sm:block mt-0.5"
            />
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-luxury-gold/20 text-luxury-gold text-[11px] font-semibold uppercase tracking-wider mb-2 border border-luxury-gold/30">
                <ShieldCheck size={13} />
                <span>Ambition Real Estate Advisory Desk</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                {inquiryType === 'buyer' 
                  ? (initialProperty ? `Inquire: ${initialProperty.title}` : 'Schedule Free Guided Site Visit')
                  : 'List Your Property for Sale with Us'}
              </h3>
              <p className="text-xs text-gray-300 mt-1">
                Direct connection with Senior Advisor <strong className="text-luxury-gold">{businessInfo.advisor}</strong> (Open daily till 10:00 PM)
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-all transform hover:rotate-90"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Mode Selector Tabs (Buyer vs Seller) */}
        {!submittedId && (
          <div className="px-5 sm:px-6 pt-4 pb-2 bg-luxury-dark/60 border-b border-luxury-border/50 shrink-0">
            <div className="grid grid-cols-2 gap-2 p-1 bg-luxury-darkest rounded-xl border border-luxury-border/60">
              <button
                type="button"
                onClick={() => setInquiryType('buyer')}
                className={`flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-xs font-bold uppercase tracking-wider transition-all ${
                  inquiryType === 'buyer'
                    ? 'bg-gradient-to-r from-luxury-gold to-luxury-gold-dark text-luxury-darkest shadow-md'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
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
                    ? 'bg-gradient-to-r from-luxury-gold to-luxury-gold-dark text-luxury-darkest shadow-md'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <Building size={15} />
                <span>I Want to Sell / List</span>
              </button>
            </div>
          </div>
        )}

        {/* Scrollable Form Content */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1">
          {submittedId ? (
            /* Success / Post Submission State */
            <div className="text-center py-6 space-y-4 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border-2 border-emerald-400 text-emerald-400 mx-auto flex items-center justify-center shadow-lg animate-pulseGlow">
                <CheckCircle2 size={36} />
              </div>

              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-luxury-gold/15 text-luxury-gold text-xs font-mono font-bold tracking-widest border border-luxury-gold/40 mb-2">
                  REF ID: {submittedId}
                </span>
                <h4 className="font-serif text-2xl font-bold text-white">
                  {inquiryType === 'buyer' ? 'Site Visit Registered!' : 'Property Listing Received!'}
                </h4>
                <p className="text-xs text-gray-300 max-w-md mx-auto mt-2 leading-relaxed">
                  Your inquiry has been recorded in our system. A formatted summary is being dispatched via WhatsApp to Senior Advisor <strong className="text-luxury-gold">{businessInfo.advisor}</strong> for immediate verification.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-luxury-dark border border-luxury-border text-left text-xs space-y-2 max-w-md mx-auto">
                <div className="flex justify-between text-gray-400 border-b border-luxury-border/50 pb-1.5">
                  <span>Client:</span>
                  <span className="font-semibold text-white">{formData.name}</span>
                </div>
                <div className="flex justify-between text-gray-400 border-b border-luxury-border/50 pb-1.5">
                  <span>Phone:</span>
                  <span className="font-semibold text-luxury-gold">{formData.phone}</span>
                </div>
                <div className="flex justify-between text-gray-400">
                  <span>Inquiry Type:</span>
                  <span className="font-semibold text-white capitalize">{inquiryType} ({inquiryType === 'buyer' ? formData.interest : formData.propertyType})</span>
                </div>
              </div>

              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={waMessageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all"
                >
                  <MessageCircle size={16} />
                  <span>Send Direct via WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={handleReset}
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white font-bold text-xs uppercase tracking-wider transition-all"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            /* Interactive Form Body */
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              {/* Client Basic Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 font-medium mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vikram Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-luxury-dark/90 border border-luxury-border text-white placeholder-gray-500 focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition-all"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 font-medium mb-1.5">
                    Mobile Number (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-luxury-dark/90 border border-luxury-border text-white placeholder-gray-500 focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 font-medium mb-1.5">
                  Email Address (Optional)
                </label>
                <input
                  type="email"
                  placeholder="e.g. yourname@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-luxury-dark/90 border border-luxury-border text-white placeholder-gray-500 focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition-all"
                />
              </div>

              {/* DYNAMIC FIELDS: BUYER MODE */}
              {inquiryType === 'buyer' && (
                <div className="space-y-4 pt-1 border-t border-luxury-border/40 animate-fadeIn">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-300 font-medium mb-1.5">
                        Property Interest *
                      </label>
                      <select
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-luxury-dark border border-luxury-border text-white focus:outline-none focus:border-luxury-gold transition-all"
                      >
                        <option value="Ready Duplex Houses (Opp. D-Mart)">Ready Duplex Houses (Opp. D-Mart)</option>
                        <option value="4-Lane Highway Commercial Plots">4-Lane Highway Commercial Plots</option>
                        <option value="Gated Colony Residential Plots">Gated Colony Residential Plots (Shivansh Valley / Shree Nath Ji)</option>
                        <option value="Agricultural Land / Farmhouse Estate">Agricultural Land / Farmhouse Estate</option>
                        <option value="Highway Commercial Showroom / Land">Highway Commercial Showroom / Land</option>
                        <option value="General Property Advisory / Investment">General Property Advisory / Investment</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-300 font-medium mb-1.5">
                        Budget Range
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-luxury-dark border border-luxury-border text-white focus:outline-none focus:border-luxury-gold transition-all"
                      >
                        <option value="">Select Budget</option>
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
                      <label className="block text-gray-300 font-medium mb-1.5">
                        Preferred Location / Node
                      </label>
                      <select
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-luxury-dark border border-luxury-border text-white focus:outline-none focus:border-luxury-gold transition-all"
                      >
                        <option value="Indore Road Corridor (Opp. D-Mart)">Indore Road Corridor (Opp. D-Mart)</option>
                        <option value="Indore Road 6-Lane Toll Plaza">Indore Road 6-Lane Toll Plaza</option>
                        <option value="Dewas Road 4-Lane (Shivansh Valley)">Dewas Road 4-Lane (Shivansh Valley)</option>
                        <option value="Triveni Vihar Sector-A Commercial">Triveni Vihar Sector-A Commercial</option>
                        <option value="Sanwer Road / Outer Ring Bypass">Sanwer Road / Outer Ring Bypass</option>
                        <option value="Any Prime Ujjain Location">Any Prime Ujjain Location</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-300 font-medium mb-1.5 flex items-center gap-1">
                        <Calendar size={13} className="text-luxury-gold" />
                        <span>Preferred Site Visit Date</span>
                      </label>
                      <input
                        type="date"
                        value={formData.visitDate}
                        onChange={(e) => setFormData({ ...formData, visitDate: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-luxury-dark border border-luxury-border text-white focus:outline-none focus:border-luxury-gold transition-all"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* DYNAMIC FIELDS: SELLER MODE */}
              {inquiryType === 'seller' && (
                <div className="space-y-4 pt-1 border-t border-luxury-border/40 animate-fadeIn">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-300 font-medium mb-1.5">
                        Property Type to Sell *
                      </label>
                      <select
                        value={formData.propertyType}
                        onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-luxury-dark border border-luxury-border text-white focus:outline-none focus:border-luxury-gold transition-all"
                      >
                        <option value="Residential Plot / Colony Land">Residential Plot / Colony Land</option>
                        <option value="Duplex / Independent House">Duplex / Independent House</option>
                        <option value="Highway Commercial Plot / Land">Highway Commercial Plot / Land</option>
                        <option value="Agricultural Farmhouse / Orchard">Agricultural Farmhouse / Orchard</option>
                        <option value="Commercial Shop / Building">Commercial Shop / Building</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-300 font-medium mb-1.5">
                        Location / Colony in Ujjain *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Mahaveer Bagh, Indore Road"
                        value={formData.sellerLocation}
                        onChange={(e) => setFormData({ ...formData, sellerLocation: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-luxury-dark border border-luxury-border text-white placeholder-gray-500 focus:outline-none focus:border-luxury-gold transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-300 font-medium mb-1.5">
                        Plot / Built-up Area
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 1,000 sq.ft or 20x50 or 5 Bigha"
                        value={formData.area}
                        onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-luxury-dark border border-luxury-border text-white placeholder-gray-500 focus:outline-none focus:border-luxury-gold transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 font-medium mb-1.5">
                        Expected Asking Price
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. ₹55 Lakh or ₹4,500/sq.ft"
                        value={formData.expectedPrice}
                        onChange={(e) => setFormData({ ...formData, expectedPrice: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-luxury-dark border border-luxury-border text-white placeholder-gray-500 focus:outline-none focus:border-luxury-gold transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-300 font-medium mb-1.5">
                        Title & Legal Status
                      </label>
                      <select
                        value={formData.legalStatus}
                        onChange={(e) => setFormData({ ...formData, legalStatus: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-luxury-dark border border-luxury-border text-white focus:outline-none focus:border-luxury-gold transition-all"
                      >
                        <option value="Registry Ready & 100% Clear Title">Registry Ready & 100% Clear Title</option>
                        <option value="RERA / TNCP Approved Colony">RERA / TNCP Approved Colony</option>
                        <option value="Diversion Done (Non-Agri)">Diversion Done (Non-Agri)</option>
                        <option value="Ancestral Property / In Scrutiny">Ancestral Property / In Scrutiny</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-300 font-medium mb-1.5">
                        Sale Timeline Urgency
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-luxury-dark border border-luxury-border text-white focus:outline-none focus:border-luxury-gold transition-all"
                      >
                        <option value="Flexible (1-3 Months)">Flexible (1-3 Months)</option>
                        <option value="Immediate / Urgent (30 Days)">Immediate / Urgent (30 Days)</option>
                        <option value="Seeking Market Evaluation Only">Seeking Market Evaluation Only</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Requirements & Notes */}
              <div>
                <label className="block text-gray-300 font-medium mb-1.5">
                  {inquiryType === 'buyer' ? 'Specific Requirements / Dimensions' : 'Additional Property Highlights'}
                </label>
                <textarea
                  rows="2"
                  placeholder={inquiryType === 'buyer' ? 'e.g. Looking for East-facing duplex or commercial plot touch to 4-lane highway...' : 'e.g. Corner property with 40ft road frontage, ready water connection...'}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-luxury-dark/90 border border-luxury-border text-white placeholder-gray-500 focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition-all resize-none"
                ></textarea>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-luxury-gold via-amber-500 to-luxury-gold-dark hover:brightness-110 text-luxury-darkest font-bold text-xs uppercase tracking-widest shadow-lg flex items-center justify-center gap-2 transition-all group"
                >
                  <Send size={15} className="group-hover:translate-x-1 transition-transform" />
                  <span>
                    {inquiryType === 'buyer' ? 'Submit Inquiry & Connect via WhatsApp' : 'Submit Property for Verification'}
                  </span>
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-gray-400 text-center pt-1">
                <ShieldCheck size={14} className="text-luxury-gold" />
                <span>100% Confidential Deal Handling • No Spam Guarantee • Direct Brokerage</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
