import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Clock, Star, Send, 
  MessageCircle, CheckCircle2, ShieldCheck, HelpCircle, Navigation 
} from 'lucide-react';
import { businessInfo } from '../data/properties';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    interest: 'General Inquiry',
    visitDate: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const text = `*New Contact Inquiry - Ambition Real Estate Website*
• Name: ${formData.name}
• Phone: ${formData.phone}
• Email: ${formData.email || 'Not provided'}
• Interested In: ${formData.interest}
• Preferred Site Visit: ${formData.visitDate || 'Prompt scheduling'}
• Message: ${formData.message || 'Please contact me.'}`;

    setTimeout(() => {
      const waUrl = `https://wa.me/${businessInfo.rawPhone1}?text=${encodeURIComponent(text)}`;
      window.open(waUrl, '_blank');
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
      q: "Do you offer free guided site visits?",
      a: "Yes! Senior Advisor Ujjwal Tiwari personally conducts site visits with prospective buyers to inspect road frontage, dimensions, and surrounding infrastructure."
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
              Visit our office on Indore-Ujjain Road or contact Senior Advisor Ujjwal Tiwari directly for immediate site visits and pricing details.
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

              {/* Google Reviews Badge */}
              <div className="p-3.5 rounded-xl bg-luxury-surface/50 border border-luxury-border flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-amber-400" />
                    ))}
                  </div>
                  <span className="font-bold text-xs text-white">5.0 Rating</span>
                </div>
                <span className="text-[11px] text-gray-400">({businessInfo.reviewsCount} Google Reviews)</span>
              </div>

              {/* Contact Details List */}
              <div className="space-y-4 text-xs pt-2">
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

          {/* Right Col: Interactive Lead Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white p-8 border border-luxury-border shadow-luxury space-y-6">
              <div>
                <span className="text-xs uppercase tracking-widest text-luxury-gold-dark font-serif font-semibold block mb-1">
                  Online Registration
                </span>
                <h3 className="font-serif text-2xl font-bold text-luxury-ink">
                  Schedule a Consultation or Free Site Visit
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  Fill out the form below. Our advisory desk will get back to you promptly with available unit layouts and verified title abstracts.
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 size={36} />
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-luxury-ink">Inquiry Submitted!</h4>
                  <p className="text-xs text-gray-600 max-w-sm mx-auto leading-relaxed">
                    Thank you, <strong className="text-luxury-darkest">{formData.name}</strong>. We are redirecting your query to WhatsApp for instant confirmation with Advisor Ujjwal Tiwari.
                  </p>
                </div>
              ) : (
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
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs bg-gray-50 focus:bg-white focus:outline-none focus:border-luxury-deep transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-1.5">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs bg-gray-50 focus:bg-white focus:outline-none focus:border-luxury-deep transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-1.5">Email (Optional)</label>
                      <input
                        type="email"
                        placeholder="e.g. ramesh@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs bg-gray-50 focus:bg-white focus:outline-none focus:border-luxury-deep transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-1.5">Preferred Visit Date</label>
                      <input
                        type="date"
                        value={formData.visitDate}
                        onChange={(e) => setFormData({ ...formData, visitDate: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs bg-gray-50 focus:bg-white focus:outline-none focus:border-luxury-deep transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-1.5">Property or Corridor of Interest</label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs bg-gray-50 focus:bg-white focus:outline-none focus:border-luxury-deep transition-all"
                    >
                      <option value="D-Mart Duplex House">Modern Duplex Houses (Opp. D-Mart, Indore Rd)</option>
                      <option value="D-Mart Commercial Plot">4-Lane Commercial Plots (In front of D-Mart)</option>
                      <option value="15000 SF Highway Plot">15,000 Sq.Ft Mega Highway Plot (6-Lane Toll Plaza)</option>
                      <option value="Shivansh Valley Corner Plot">Shivansh Valley 3100 SF Corner Plot (Dewas Rd)</option>
                      <option value="Triveni Vihar Commercial">Triveni Vihar A-Sector Commercial Plot</option>
                      <option value="Shree Nath Ji Colony">Shree Nath Ji Colony Residential Plots</option>
                      <option value="Tapobhoomi 25 Bigha">25 Bigha Township Development Land</option>
                      <option value="Nagda 77.6 Bigha Farm">77.6 Bigha Farmhouse / Agro Asset (Nagda)</option>
                      <option value="Custom Buyer Requirement">Custom Buyer Mandate (Tell us requirements)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-1.5">Message / Specific Questions</label>
                    <textarea
                      rows={3}
                      placeholder="Share any questions regarding plot size, 25% booking, or registry schedule..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-xs bg-gray-50 focus:bg-white focus:outline-none focus:border-luxury-deep transition-all"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-luxury-dark hover:bg-luxury-deep text-luxury-gold font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-all"
                    >
                      <Send size={15} />
                      <span>Submit Request & Open WhatsApp</span>
                    </button>
                  </div>
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

          {/* Interactive Map Embed Placeholder / Directions Box */}
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
