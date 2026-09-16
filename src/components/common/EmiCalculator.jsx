import React, { useState } from 'react';
import { Calculator, IndianRupee, Clock, Percent, ShieldCheck, ArrowRight } from 'lucide-react';
import { businessInfo } from '../../data/properties';

export default function EmiCalculator({ onOpenBookingModal }) {
  const [propertyPrice, setPropertyPrice] = useState(5000000); // 50 Lakhs default
  const [downPaymentPercent, setDownPaymentPercent] = useState(25); // 25% booking signature feature
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenureYears, setTenureYears] = useState(20);

  // Calculations
  const downPayment = (propertyPrice * downPaymentPercent) / 100;
  const loanAmount = propertyPrice - downPayment;
  const monthlyRate = interestRate / 12 / 100;
  const totalMonths = tenureYears * 12;

  const emi =
    loanAmount > 0
      ? Math.round(
          (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
            (Math.pow(1 + monthlyRate, totalMonths) - 1)
        )
      : 0;

  const totalPayment = emi * totalMonths;
  const totalInterest = totalPayment - loanAmount;

  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <div className="bg-white rounded-3xl border border-luxury-border shadow-luxury-lg overflow-hidden">
      <div className="bg-gradient-to-r from-luxury-darkest via-luxury-dark to-luxury-deep p-6 sm:p-8 text-white border-b border-luxury-border">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-luxury-gold/20 text-luxury-gold text-xs font-semibold uppercase tracking-wider border border-luxury-gold/30 mb-2">
              <Calculator size={13} />
              <span>Financial Planning Suite</span>
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold">
              EMI & 25% Booking Calculator
            </h3>
            <p className="text-xs text-gray-300 mt-1">
              Plan your property investment with Ambition Real Estate's signature low booking parameters.
            </p>
          </div>

          <div className="px-4 py-2 rounded-xl bg-luxury-surface/80 border border-luxury-border text-center">
            <span className="text-[10px] text-gray-400 uppercase tracking-wider block">Signature Plan</span>
            <span className="font-bold text-luxury-gold text-sm">25% Booking Allowed</span>
          </div>
        </div>
      </div>

      <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Sliders Area */}
        <div className="lg:col-span-7 space-y-6">
          {/* Property Value Slider */}
          <div>
            <div className="flex items-center justify-between text-xs mb-2">
              <span className="font-semibold text-gray-700">Total Property Value</span>
              <span className="font-serif text-base font-bold text-luxury-deep">
                {formatCurrency(propertyPrice)}
              </span>
            </div>
            <input
              type="range"
              min="1500000"
              max="20000000"
              step="100000"
              value={propertyPrice}
              onChange={(e) => setPropertyPrice(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-luxury-deep"
            />
            <div className="flex justify-between text-[11px] text-gray-400 mt-1">
              <span>₹15 Lakh</span>
              <span>₹1 Crore</span>
              <span>₹2 Crore</span>
            </div>
          </div>

          {/* Down Payment Slider */}
          <div>
            <div className="flex items-center justify-between text-xs mb-2">
              <span className="font-semibold text-gray-700">
                Initial Booking Down-Payment ({downPaymentPercent}%)
              </span>
              <span className="font-serif text-base font-bold text-luxury-gold-dark">
                {formatCurrency(downPayment)}
              </span>
            </div>
            <input
              type="range"
              min="15"
              max="60"
              step="5"
              value={downPaymentPercent}
              onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-luxury-gold"
            />
            <div className="flex justify-between text-[11px] text-gray-400 mt-1">
              <span>15%</span>
              <span className="text-luxury-gold-dark font-semibold">25% (Standard Ambition Booking)</span>
              <span>60%</span>
            </div>
          </div>

          {/* Interest Rate & Tenure */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div>
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-semibold text-gray-700">Bank Interest Rate</span>
                <span className="font-bold text-luxury-deep">{interestRate}% p.a.</span>
              </div>
              <input
                type="range"
                min="7.0"
                max="12.0"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-luxury-deep"
              />
              <div className="flex justify-between text-[11px] text-gray-400 mt-1">
                <span>7.0%</span>
                <span>8.5% (Avg)</span>
                <span>12.0%</span>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="font-semibold text-gray-700">Loan Tenure</span>
                <span className="font-bold text-luxury-deep">{tenureYears} Years</span>
              </div>
              <input
                type="range"
                min="5"
                max="30"
                step="1"
                value={tenureYears}
                onChange={(e) => setTenureYears(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-luxury-deep"
              />
              <div className="flex justify-between text-[11px] text-gray-400 mt-1">
                <span>5 Yrs</span>
                <span>20 Yrs</span>
                <span>30 Yrs</span>
              </div>
            </div>
          </div>
        </div>

        {/* Results Panel */}
        <div className="lg:col-span-5 bg-luxury-cream rounded-2xl p-6 border border-luxury-border flex flex-col justify-between space-y-6">
          <div>
            <span className="text-[11px] uppercase font-bold tracking-wider text-gray-500 block mb-1">
              Estimated Monthly EMI
            </span>
            <div className="font-serif text-3xl sm:text-4xl font-extrabold text-luxury-darkest">
              {formatCurrency(emi)}
              <span className="text-xs font-sans font-medium text-gray-500"> / month</span>
            </div>

            <div className="mt-6 space-y-3 pt-4 border-t border-luxury-border/60 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-600">25% Booking Amount:</span>
                <span className="font-bold text-luxury-gold-dark">{formatCurrency(downPayment)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Principal Loan Amount:</span>
                <span className="font-bold text-gray-800">{formatCurrency(loanAmount)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Total Interest Payable:</span>
                <span className="font-bold text-gray-800">{formatCurrency(totalInterest)}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-luxury-border/40 font-semibold">
                <span className="text-gray-800">Total Outflow (P + I):</span>
                <span className="text-luxury-darkest">{formatCurrency(totalPayment + downPayment)}</span>
              </div>
            </div>
          </div>

          <div className="pt-2">
            <button
              onClick={() => onOpenBookingModal()}
              className="w-full py-3 rounded-xl bg-luxury-dark hover:bg-luxury-deep text-luxury-gold font-semibold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-all"
            >
              <span>Get Loan & Booking Assistance</span>
              <ArrowRight size={14} />
            </button>
            <p className="text-[10px] text-gray-500 text-center mt-2">
              Tie-ups with leading nationalized & private banks in Ujjain.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
