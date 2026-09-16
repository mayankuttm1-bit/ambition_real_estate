import React, { useState } from 'react';
import { X, CheckCircle2, Phone, Calendar, Send, ShieldCheck, MapPin } from 'lucide-react';
import { businessInfo } from '../../data/properties';

export default function LeadModal({ isOpen, onClose, initialProperty = null }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    interest: initialProperty?.title || 'General Property Inquiry',
    visitDate: '',
    budget: '',
    note: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Also compose WhatsApp URL to let user send their booking instantly if they wish
    const text = `*New Inquiry / Site Visit Request - Ambition Real Estate*
• Name: ${formData.name}
• Phone: ${formData.phone}
• Interested In: ${formData.interest}
• Preferred Visit Date: ${formData.visitDate || 'As soon as possible'}
• Budget: ${formData.budget || 'Flexible'}
• Note: ${formData.note || 'None'}`;

    setTimeout(() => {
      // Optional auto WhatsApp trigger if user wants
      const waUrl = `https://wa.me/${businessInfo.rawPhone1}?text=${encodeURIComponent(text)}`;
      window.open(waUrl, '_blank');
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-luxury-darkest border border-luxury-gold/40 rounded-2xl shadow-2xl overflow-hidden text-white">
        {/* Header Ribbon */}
        <div className="bg-gradient-to-r from-luxury-dark via-luxury-deep to-luxury-dark p-6 border-b border-luxury-border flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-luxury-gold/20 text-luxury-gold text-xs font-semibold uppercase tracking-wider mb-2 border border-luxury-gold/30">
              <ShieldCheck size={13} />
              <span>Direct Advisor Assistance</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-white">
              {initialProperty ? 'Book Site Visit / Inquiry' : 'Schedule Free Site Visit'}
            </h3>
            <p className="text-xs text-gray-300 mt-1">
              Connect directly with advisor <span className="text-luxury-gold font-semibold">{businessInfo.advisor}</span> (Open daily till 10 PM)
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
                <CheckCircle2 size={36} />
              </div>
              <h4 className="font-serif text-xl font-bold text-white">Thank You! Request Received</h4>
              <p className="text-xs text-gray-300 max-w-sm mx-auto leading-relaxed">
                We have registered your site visit request. Opening WhatsApp to connect you directly with <strong className="text-luxury-gold">{businessInfo.advisor}</strong> for instant confirmation...
              </p>
              <div className="pt-4">
                <button
                  onClick={onClose}
                  className="px-6 py-2 rounded-lg bg-luxury-gold text-luxury-darkest text-xs font-bold uppercase tracking-wider hover:brightness-110"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-gray-300 font-medium mb-1.5">Your Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-luxury-surface/50 border border-luxury-border text-white placeholder-gray-500 focus:outline-none focus:border-luxury-gold transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 font-medium mb-1.5">Mobile Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-luxury-surface/50 border border-luxury-border text-white placeholder-gray-500 focus:outline-none focus:border-luxury-gold transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 font-medium mb-1.5">Preferred Visit Date</label>
                  <input
                    type="date"
                    value={formData.visitDate}
                    onChange={(e) => setFormData({ ...formData, visitDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-luxury-surface/50 border border-luxury-border text-white placeholder-gray-500 focus:outline-none focus:border-luxury-gold transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 font-medium mb-1.5">Property of Interest</label>
                <input
                  type="text"
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-luxury-surface/50 border border-luxury-border text-white focus:outline-none focus:border-luxury-gold"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 font-medium mb-1.5">Approximate Budget</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-luxury-surface/50 border border-luxury-border text-white focus:outline-none focus:border-luxury-gold"
                  >
                    <option value="" className="bg-luxury-darkest">Select Budget Range</option>
                    <option value="₹20L - ₹50L" className="bg-luxury-darkest">₹20 Lakh - ₹50 Lakh</option>
                    <option value="₹50L - ₹1 Cr" className="bg-luxury-darkest">₹50 Lakh - ₹1 Crore</option>
                    <option value="₹1 Cr - ₹3 Cr" className="bg-luxury-darkest">₹1 Crore - ₹3 Crore</option>
                    <option value="₹3 Cr+" className="bg-luxury-darkest">₹3 Crore+ (Institutional / Mega Parcel)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-300 font-medium mb-1.5">Specific Requirements</label>
                  <input
                    type="text"
                    placeholder="e.g. Corner plot, 25% booking"
                    value={formData.note}
                    onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-luxury-surface/50 border border-luxury-border text-white placeholder-gray-500 focus:outline-none focus:border-luxury-gold"
                  />
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg font-semibold text-xs tracking-wider uppercase text-luxury-darkest bg-gradient-to-r from-luxury-gold-light via-luxury-gold to-luxury-gold-dark hover:brightness-110 shadow-lg shadow-amber-900/30 flex items-center justify-center gap-2 transition-all"
                >
                  <Send size={15} />
                  <span>Confirm & Connect on WhatsApp</span>
                </button>
              </div>

              <p className="text-[11px] text-gray-400 text-center pt-2">
                🔒 We respect your privacy. No unsolicited spam. Direct consultation only.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
