"use client";

import { useState, useMemo } from 'react';
import type { FilingStatus } from '@/lib/taxBrackets';
import { calculateFederalTaxOnPrize, getMarginalFederalRate } from '@/lib/taxBrackets';
import { US_STATES, STATE_TAX_RATES, calculateStateTaxOnPrize } from '@/lib/stateTaxRates';

/* ===========================================
   PRIZE TAX CALCULATOR COMPONENT
   
   Calculates after-tax cash from prize winnings
   Uses federal progressive brackets + state rates
   =========================================== */

interface FormData {
  prizeAmount: string;
  filingStatus: FilingStatus;
  otherIncome: string;
  state: string;
  stateRateOverride: string;
}

interface CalculationResult {
  prizeAmount: number;
  federalTax: number;
  stateTax: number;
  totalTax: number;
  netAmount: number;
  effectiveRate: number;
  marginalFederalRate: number;
  stateRate: number;
}

const FILING_STATUS_OPTIONS: { value: FilingStatus; label: string }[] = [
  { value: 'single', label: 'Single' },
  { value: 'married_jointly', label: 'Married Filing Jointly' },
  { value: 'married_separately', label: 'Married Filing Separately' },
  { value: 'head_of_household', label: 'Head of Household' },
];

/**
 * Formats a number as U.S. currency
 */
function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Formats a decimal as a percentage
 */
function formatPercent(decimal: number, decimals: number = 1): string {
  return `${(decimal * 100).toFixed(decimals)}%`;
}

export default function PrizeTaxCalculator() {
  const [formData, setFormData] = useState<FormData>({
    prizeAmount: '',
    filingStatus: 'single',
    otherIncome: '',
    state: 'California',
    stateRateOverride: '',
  });

  // Parse numeric inputs
  const prizeAmount = parseFloat(formData.prizeAmount) || 0;
  const otherIncome = parseFloat(formData.otherIncome) || 0;
  const stateRateOverride = formData.stateRateOverride 
    ? parseFloat(formData.stateRateOverride) / 100 
    : undefined;

  // Check if all required fields are valid
  const isValid = prizeAmount > 0 && otherIncome >= 0 && formData.state;

  // Calculate taxes
  const result = useMemo<CalculationResult | null>(() => {
    if (!isValid) return null;

    const federalTax = calculateFederalTaxOnPrize(
      prizeAmount,
      otherIncome,
      formData.filingStatus
    );

    const stateTax = calculateStateTaxOnPrize(
      prizeAmount,
      formData.state,
      stateRateOverride
    );

    const totalTax = federalTax + stateTax;
    const netAmount = prizeAmount - totalTax;
    const effectiveRate = prizeAmount > 0 ? totalTax / prizeAmount : 0;
    const marginalFederalRate = getMarginalFederalRate(
      otherIncome + prizeAmount,
      formData.filingStatus
    );
    const stateRate = stateRateOverride ?? STATE_TAX_RATES[formData.state] ?? 0;

    return {
      prizeAmount,
      federalTax,
      stateTax,
      totalTax,
      netAmount,
      effectiveRate,
      marginalFederalRate,
      stateRate,
    };
  }, [prizeAmount, otherIncome, formData.filingStatus, formData.state, stateRateOverride, isValid]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Input Form Card */}
      <div className="card p-6 sm:p-8">
        <h2 className="text-xl font-bold text-[var(--color-navy-deep)] mb-6 flex items-center gap-3">
          <span className="w-10 h-10 bg-[var(--color-gold)]/10 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-[var(--color-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </span>
          Enter Your Details
        </h2>

        <form className="space-y-5">
          {/* Prize Amount */}
          <div>
            <label htmlFor="prizeAmount" className="form-label">
              Advertised prize amount <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-gray-400)] font-medium text-sm">$</span>
              <input
                type="number"
                id="prizeAmount"
                name="prizeAmount"
                value={formData.prizeAmount}
                onChange={handleInputChange}
                placeholder="1000000"
                min="0"
                className="form-input !pl-7"
              />
            </div>
          </div>

          {/* Filing Status */}
          <div>
            <label htmlFor="filingStatus" className="form-label">
              Filing status <span className="text-red-500">*</span>
            </label>
            <select
              id="filingStatus"
              name="filingStatus"
              value={formData.filingStatus}
              onChange={handleInputChange}
              className="form-input cursor-pointer"
            >
              {FILING_STATUS_OPTIONS.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Other Taxable Income */}
          <div>
            <label htmlFor="otherIncome" className="form-label">
              Estimated other taxable income (before the prize) <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-gray-400)] font-medium text-sm">$</span>
              <input
                type="number"
                id="otherIncome"
                name="otherIncome"
                value={formData.otherIncome}
                onChange={handleInputChange}
                placeholder="75000"
                min="0"
                className="form-input !pl-7"
              />
            </div>
            <p className="mt-1.5 text-xs text-[var(--color-gray-500)]">
              This determines which federal tax brackets apply to your prize
            </p>
          </div>

          {/* State of Residence */}
          <div>
            <label htmlFor="state" className="form-label">
              State of residence <span className="text-red-500">*</span>
            </label>
            <select
              id="state"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              className="form-input cursor-pointer"
            >
              {US_STATES.map((state) => (
                <option key={state} value={state}>
                  {state} {STATE_TAX_RATES[state] === 0 ? '(No income tax)' : `(${formatPercent(STATE_TAX_RATES[state])})`}
                </option>
              ))}
            </select>
          </div>

          {/* State Tax Rate Override */}
          <div>
            <label htmlFor="stateRateOverride" className="form-label">
              Override state marginal tax rate (optional)
            </label>
            <div className="relative">
              <input
                type="number"
                id="stateRateOverride"
                name="stateRateOverride"
                value={formData.stateRateOverride}
                onChange={handleInputChange}
                placeholder={`Default: ${formatPercent(STATE_TAX_RATES[formData.state] ?? 0)}`}
                min="0"
                max="100"
                step="0.1"
                className="form-input !pr-8"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-gray-400)] font-medium text-sm">%</span>
            </div>
            <p className="mt-1.5 text-xs text-[var(--color-gray-500)]">
              Enter a custom rate if you know your exact state marginal rate
            </p>
          </div>
        </form>
      </div>

      {/* Results Card */}
      <div className={`card p-6 sm:p-8 transition-opacity duration-300 ${!isValid ? 'opacity-50' : ''}`}>
        <h2 className="text-xl font-bold text-[var(--color-navy-deep)] mb-6 flex items-center gap-3">
          <span className="w-10 h-10 bg-[var(--color-gold)]/10 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-[var(--color-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
          Your Results
        </h2>

        {!isValid ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--color-gray-100)] flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--color-gray-400)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-[var(--color-gray-500)]">
              Enter all required fields to see your estimated after-tax prize amount
            </p>
          </div>
        ) : result && (
          <div className="space-y-6">
            {/* Headline */}
            <div className="text-center py-5 px-4 bg-gradient-gold rounded-xl">
              <p className="text-sm text-[var(--color-navy-deep)]/70 mb-1 font-medium">You keep approximately</p>
              <p className="text-3xl sm:text-4xl font-bold text-[var(--color-navy-deep)]">
                {formatCurrency(result.netAmount)}
              </p>
              <p className="text-sm text-[var(--color-navy-deep)]/70 mt-1">after taxes</p>
            </div>

            {/* Breakdown Table */}
            <div className="space-y-3">
              <div className="flex justify-between items-center py-3 border-b border-[var(--color-gray-200)]">
                <span className="text-[var(--color-gray-600)]">Advertised prize amount</span>
                <span className="text-[var(--color-navy-deep)] font-semibold">{formatCurrency(result.prizeAmount)}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-[var(--color-gray-200)]">
                <div>
                  <span className="text-[var(--color-gray-600)]">Federal tax on prize</span>
                  <span className="text-xs text-[var(--color-gray-400)] ml-2">({formatPercent(result.marginalFederalRate)} marginal)</span>
                </div>
                <span className="text-red-600 font-semibold">−{formatCurrency(result.federalTax)}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-[var(--color-gray-200)]">
                <div>
                  <span className="text-[var(--color-gray-600)]">State tax on prize</span>
                  <span className="text-xs text-[var(--color-gray-400)] ml-2">({formatPercent(result.stateRate)} rate)</span>
                </div>
                <span className="text-red-600 font-semibold">−{formatCurrency(result.stateTax)}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-[var(--color-gray-200)]">
                <span className="text-[var(--color-gray-600)]">Total tax on prize</span>
                <span className="text-red-600 font-semibold">−{formatCurrency(result.totalTax)}</span>
              </div>
              <div className="flex justify-between items-center py-4 bg-[var(--color-gold)]/10 rounded-xl px-4 -mx-4 mt-4">
                <span className="text-[var(--color-navy-deep)] font-bold">Net after-tax amount</span>
                <span className="text-[var(--color-gold-dark)] font-bold text-xl">{formatCurrency(result.netAmount)}</span>
              </div>
            </div>

            {/* Effective Rate */}
            <div className="text-center pt-2">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-gray-100)] rounded-full">
                <span className="text-[var(--color-gray-600)] text-sm">Effective tax rate on this prize:</span>
                <span className="text-[var(--color-navy-deep)] font-bold">{formatPercent(result.effectiveRate)}</span>
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

