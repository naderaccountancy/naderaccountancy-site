"use client";

import { useState, useMemo } from 'react';
import type { FilingStatus } from '@/lib/taxBrackets';
import { calculateFederalTax, getMarginalFederalRate } from '@/lib/taxBrackets';
import { US_STATES, STATE_TAX_RATES } from '@/lib/stateTaxRates';

/* ===========================================
   QUARTERLY TAX ESTIMATOR COMPONENT
   
   Estimates quarterly estimated tax payments
   based on expected annual income
   =========================================== */

// SE Tax constants for 2024
const SOCIAL_SECURITY_RATE = 0.124;
const MEDICARE_RATE = 0.029;
const SOCIAL_SECURITY_WAGE_BASE = 168600;
const SE_INCOME_MULTIPLIER = 0.9235;

// Quarterly due dates for 2024/2025
const QUARTERLY_DUE_DATES = [
  { quarter: 'Q1', period: 'Jan 1 – Mar 31', dueDate: 'April 15' },
  { quarter: 'Q2', period: 'Apr 1 – May 31', dueDate: 'June 15' },
  { quarter: 'Q3', period: 'Jun 1 – Aug 31', dueDate: 'September 15' },
  { quarter: 'Q4', period: 'Sep 1 – Dec 31', dueDate: 'January 15 (next year)' },
];

interface FormData {
  expectedSelfEmploymentIncome: string;
  expectedW2Income: string;
  expectedWithholding: string;
  filingStatus: FilingStatus;
  state: string;
  stateRateOverride: string;
  includeSETax: boolean;
}

interface CalculationResult {
  totalIncome: number;
  selfEmploymentIncome: number;
  w2Income: number;
  federalIncomeTax: number;
  selfEmploymentTax: number;
  stateTax: number;
  totalTaxLiability: number;
  withholding: number;
  totalOwed: number;
  quarterlyPayment: number;
  safeHarborAmount: number;
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

/**
 * Calculates self-employment tax
 */
function calculateSETax(netSEIncome: number, w2Income: number): number {
  if (netSEIncome <= 0) return 0;
  
  const seTaxableIncome = netSEIncome * SE_INCOME_MULTIPLIER;
  
  // Social Security - subject to wage base, reduced by W2 wages
  const remainingWageBase = Math.max(0, SOCIAL_SECURITY_WAGE_BASE - w2Income);
  const ssWages = Math.min(seTaxableIncome, remainingWageBase);
  const socialSecurityTax = ssWages * SOCIAL_SECURITY_RATE;
  
  // Medicare - no wage base limit
  const medicareTax = seTaxableIncome * MEDICARE_RATE;
  
  return socialSecurityTax + medicareTax;
}

export default function QuarterlyTaxCalculator() {
  const [formData, setFormData] = useState<FormData>({
    expectedSelfEmploymentIncome: '',
    expectedW2Income: '',
    expectedWithholding: '',
    filingStatus: 'single',
    state: 'California',
    stateRateOverride: '',
    includeSETax: true,
  });

  // Parse numeric inputs
  const expectedSelfEmploymentIncome = parseFloat(formData.expectedSelfEmploymentIncome) || 0;
  const expectedW2Income = parseFloat(formData.expectedW2Income) || 0;
  const expectedWithholding = parseFloat(formData.expectedWithholding) || 0;
  const stateRateOverride = formData.stateRateOverride 
    ? parseFloat(formData.stateRateOverride) / 100 
    : undefined;

  // Validation
  const isValid = (expectedSelfEmploymentIncome > 0 || expectedW2Income > 0) && 
    expectedWithholding >= 0 && 
    formData.state;

  // Calculate all values
  const result = useMemo<CalculationResult | null>(() => {
    if (!isValid) return null;

    const stateRate = stateRateOverride ?? STATE_TAX_RATES[formData.state] ?? 0;

    // Step 1: Calculate SE tax and deduction
    const selfEmploymentTax = formData.includeSETax 
      ? calculateSETax(expectedSelfEmploymentIncome, expectedW2Income) 
      : 0;
    const seDeduction = selfEmploymentTax / 2;

    // Step 2: Calculate adjusted gross income
    const adjustedSEIncome = expectedSelfEmploymentIncome - seDeduction;
    const totalIncome = adjustedSEIncome + expectedW2Income;

    // Step 3: Calculate federal income tax
    const federalIncomeTax = calculateFederalTax(totalIncome, formData.filingStatus);

    // Step 4: Calculate state tax
    const stateTax = (expectedSelfEmploymentIncome + expectedW2Income) * stateRate;

    // Step 5: Total tax liability
    const totalTaxLiability = federalIncomeTax + selfEmploymentTax + stateTax;

    // Step 6: Amount owed after withholding
    const totalOwed = Math.max(0, totalTaxLiability - expectedWithholding);

    // Step 7: Quarterly payment (divide by 4)
    const quarterlyPayment = totalOwed / 4;

    // Step 8: Safe harbor (110% of prior year or 100% if AGI < $150k)
    // For simplicity, we'll show the current year amount as the safe harbor baseline
    const safeHarborAmount = quarterlyPayment;

    // Marginal rate info
    const marginalFederalRate = getMarginalFederalRate(totalIncome, formData.filingStatus);

    return {
      totalIncome,
      selfEmploymentIncome: expectedSelfEmploymentIncome,
      w2Income: expectedW2Income,
      federalIncomeTax,
      selfEmploymentTax,
      stateTax,
      totalTaxLiability,
      withholding: expectedWithholding,
      totalOwed,
      quarterlyPayment,
      safeHarborAmount,
      marginalFederalRate,
      stateRate,
    };
  }, [expectedSelfEmploymentIncome, expectedW2Income, expectedWithholding, formData.filingStatus, formData.state, formData.includeSETax, stateRateOverride, isValid]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Input Form Card */}
      <div className="card p-6 sm:p-8">
        <h2 className="text-xl font-bold text-[var(--color-navy-deep)] mb-6 flex items-center gap-3">
          <span className="w-10 h-10 bg-[var(--color-gold)]/10 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-[var(--color-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </span>
          Expected Annual Income
        </h2>

        <form className="space-y-5">
          {/* Self-Employment Income */}
          <div>
            <label htmlFor="expectedSelfEmploymentIncome" className="form-label">
              Expected net self-employment income
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-gray-400)] font-medium text-sm">$</span>
              <input
                type="number"
                id="expectedSelfEmploymentIncome"
                name="expectedSelfEmploymentIncome"
                value={formData.expectedSelfEmploymentIncome}
                onChange={handleInputChange}
                placeholder="100000"
                min="0"
                className="form-input !pl-7"
              />
            </div>
            <p className="mt-1.5 text-xs text-[var(--color-gray-500)]">
              Expected profit from your business (after expenses)
            </p>
          </div>

          {/* W2 Income */}
          <div>
            <label htmlFor="expectedW2Income" className="form-label">
              Expected W-2 wages
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-gray-400)] font-medium text-sm">$</span>
              <input
                type="number"
                id="expectedW2Income"
                name="expectedW2Income"
                value={formData.expectedW2Income}
                onChange={handleInputChange}
                placeholder="50000"
                min="0"
                className="form-input !pl-7"
              />
            </div>
            <p className="mt-1.5 text-xs text-[var(--color-gray-500)]">
              Salary from an employer (if any)
            </p>
          </div>

          {/* Expected Withholding */}
          <div>
            <label htmlFor="expectedWithholding" className="form-label">
              Expected tax withholding for the year
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-gray-400)] font-medium text-sm">$</span>
              <input
                type="number"
                id="expectedWithholding"
                name="expectedWithholding"
                value={formData.expectedWithholding}
                onChange={handleInputChange}
                placeholder="10000"
                min="0"
                className="form-input !pl-7"
              />
            </div>
            <p className="mt-1.5 text-xs text-[var(--color-gray-500)]">
              Federal taxes withheld from W-2 paychecks
            </p>
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
              Override state rate (optional)
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
          </div>

          {/* Include SE Tax Toggle */}
          <div className="flex items-center gap-3 py-2">
            <input
              type="checkbox"
              id="includeSETax"
              name="includeSETax"
              checked={formData.includeSETax}
              onChange={handleInputChange}
              className="w-5 h-5 rounded border-[var(--color-gray-300)] text-[var(--color-gold)] focus:ring-[var(--color-gold)]"
            />
            <label htmlFor="includeSETax" className="text-sm text-[var(--color-gray-600)]">
              Include self-employment tax (15.3%) in quarterly estimate
            </label>
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
          Quarterly Estimates
        </h2>

        {!isValid ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--color-gray-100)] flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--color-gray-400)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-[var(--color-gray-500)]">
              Enter your expected income to see quarterly estimated payments
            </p>
          </div>
        ) : result && (
          <div className="space-y-6">
            {/* Headline - Quarterly Payment */}
            <div className="text-center py-5 px-4 bg-gradient-gold rounded-xl">
              <p className="text-sm text-[var(--color-navy-deep)]/70 mb-1 font-medium">Pay Each Quarter</p>
              <p className="text-3xl sm:text-4xl font-bold text-[var(--color-navy-deep)]">
                {formatCurrency(result.quarterlyPayment)}
              </p>
              <p className="text-sm text-[var(--color-navy-deep)]/70 mt-1">
                to avoid underpayment penalties
              </p>
            </div>

            {/* Tax Breakdown */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-[var(--color-navy-deep)] uppercase tracking-wide">
                Annual Tax Estimate
              </h3>
              <div className="flex justify-between items-center py-3 border-b border-[var(--color-gray-200)]">
                <div>
                  <span className="text-[var(--color-gray-600)]">Federal income tax</span>
                  <span className="text-xs text-[var(--color-gray-400)] ml-2">({formatPercent(result.marginalFederalRate)} marginal)</span>
                </div>
                <span className="text-[var(--color-navy-deep)] font-semibold">{formatCurrency(result.federalIncomeTax)}</span>
              </div>
              {formData.includeSETax && result.selfEmploymentTax > 0 && (
                <div className="flex justify-between items-center py-3 border-b border-[var(--color-gray-200)]">
                  <span className="text-[var(--color-gray-600)]">Self-employment tax</span>
                  <span className="text-[var(--color-navy-deep)] font-semibold">{formatCurrency(result.selfEmploymentTax)}</span>
                </div>
              )}
              <div className="flex justify-between items-center py-3 border-b border-[var(--color-gray-200)]">
                <div>
                  <span className="text-[var(--color-gray-600)]">State income tax</span>
                  <span className="text-xs text-[var(--color-gray-400)] ml-2">({formatPercent(result.stateRate)})</span>
                </div>
                <span className="text-[var(--color-navy-deep)] font-semibold">{formatCurrency(result.stateTax)}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-[var(--color-gray-200)]">
                <span className="text-[var(--color-navy-deep)] font-semibold">Total tax liability</span>
                <span className="text-[var(--color-navy-deep)] font-bold">{formatCurrency(result.totalTaxLiability)}</span>
              </div>
              {result.withholding > 0 && (
                <div className="flex justify-between items-center py-3 border-b border-[var(--color-gray-200)]">
                  <span className="text-[var(--color-gray-600)]">Less: Expected withholding</span>
                  <span className="text-green-600 font-semibold">−{formatCurrency(result.withholding)}</span>
                </div>
              )}
              <div className="flex justify-between items-center py-3 bg-[var(--color-gray-50)] rounded-lg px-4 -mx-4">
                <span className="text-[var(--color-navy-deep)] font-semibold">Amount to pay via quarterly estimates</span>
                <span className="text-[var(--color-navy-deep)] font-bold">{formatCurrency(result.totalOwed)}</span>
              </div>
            </div>

            {/* Quarterly Due Dates */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-[var(--color-navy-deep)] uppercase tracking-wide">
                Due Dates
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {QUARTERLY_DUE_DATES.map((q) => (
                  <div key={q.quarter} className="p-3 bg-[var(--color-gray-50)] rounded-lg">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-[var(--color-navy-deep)]">{q.quarter}</span>
                      <span className="text-sm font-bold text-[var(--color-gold-dark)]">{formatCurrency(result.quarterlyPayment)}</span>
                    </div>
                    <p className="text-xs text-[var(--color-gray-500)]">{q.period}</p>
                    <p className="text-xs text-[var(--color-gray-600)] font-medium">Due: {q.dueDate}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Methods */}
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                How to Pay
              </h4>
              <p className="text-sm text-blue-700">
                Pay online at <strong>irs.gov/payments</strong> using IRS Direct Pay (free) or pay by card. 
                Use Form 1040-ES for mailed payments. Don&apos;t forget state estimated taxes if applicable!
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
