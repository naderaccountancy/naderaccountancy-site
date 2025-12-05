"use client";

import { useState, useMemo } from 'react';
import type { FilingStatus } from '@/lib/taxBrackets';
import { calculateFederalTaxOnPrize, getMarginalFederalRate } from '@/lib/taxBrackets';
import { US_STATES, STATE_TAX_RATES, calculateStateTaxOnPrize } from '@/lib/stateTaxRates';

/* ===========================================
   SELF-EMPLOYMENT TAX CALCULATOR COMPONENT
   
   Calculates self-employment tax (Social Security + Medicare)
   on self-employment income
   =========================================== */

// SE Tax constants for 2024
const SE_TAX_RATE = 0.153; // 15.3% total (12.4% SS + 2.9% Medicare)
const SOCIAL_SECURITY_RATE = 0.124; // 12.4%
const MEDICARE_RATE = 0.029; // 2.9%
const ADDITIONAL_MEDICARE_RATE = 0.009; // 0.9% additional Medicare
const SOCIAL_SECURITY_WAGE_BASE = 168600; // 2024 SS wage base
const ADDITIONAL_MEDICARE_THRESHOLD_SINGLE = 200000;
const ADDITIONAL_MEDICARE_THRESHOLD_MARRIED = 250000;
const SE_INCOME_MULTIPLIER = 0.9235; // Only 92.35% of SE income is subject to SE tax

interface FormData {
  netSelfEmploymentIncome: string;
  filingStatus: FilingStatus;
  otherW2Income: string;
  state: string;
  stateRateOverride: string;
}

interface CalculationResult {
  netSelfEmploymentIncome: number;
  seTaxableIncome: number;
  socialSecurityTax: number;
  medicareTax: number;
  additionalMedicareTax: number;
  totalSETax: number;
  seDeduction: number;
  federalIncomeTax: number;
  stateTax: number;
  totalTaxBurden: number;
  effectiveSERate: number;
  effectiveTotalRate: number;
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
 * Calculates the Social Security tax portion
 * Subject to the annual wage base limit
 */
function calculateSocialSecurityTax(seTaxableIncome: number, w2Income: number): number {
  // W2 wages count against the SS wage base first
  const remainingWageBase = Math.max(0, SOCIAL_SECURITY_WAGE_BASE - w2Income);
  const taxableForSS = Math.min(seTaxableIncome, remainingWageBase);
  return taxableForSS * SOCIAL_SECURITY_RATE;
}

/**
 * Calculates the Medicare tax (no wage base limit)
 */
function calculateMedicareTax(seTaxableIncome: number): number {
  return seTaxableIncome * MEDICARE_RATE;
}

/**
 * Calculates additional Medicare tax (0.9% on income above threshold)
 */
function calculateAdditionalMedicareTax(
  seTaxableIncome: number,
  w2Income: number,
  filingStatus: FilingStatus
): number {
  const threshold = filingStatus === 'married_jointly' 
    ? ADDITIONAL_MEDICARE_THRESHOLD_MARRIED 
    : ADDITIONAL_MEDICARE_THRESHOLD_SINGLE;
  
  const totalIncome = w2Income + seTaxableIncome;
  const incomeAboveThreshold = Math.max(0, totalIncome - threshold);
  
  // Only SE income above the threshold (after accounting for W2) is subject to additional Medicare
  const seIncomeSubjectToAdditional = Math.min(seTaxableIncome, incomeAboveThreshold);
  
  return seIncomeSubjectToAdditional * ADDITIONAL_MEDICARE_RATE;
}

export default function SelfEmploymentTaxCalculator() {
  const [formData, setFormData] = useState<FormData>({
    netSelfEmploymentIncome: '',
    filingStatus: 'single',
    otherW2Income: '',
    state: 'California',
    stateRateOverride: '',
  });

  // Parse numeric inputs
  const netSelfEmploymentIncome = parseFloat(formData.netSelfEmploymentIncome) || 0;
  const otherW2Income = parseFloat(formData.otherW2Income) || 0;
  const stateRateOverride = formData.stateRateOverride 
    ? parseFloat(formData.stateRateOverride) / 100 
    : undefined;

  // Check if all required fields are valid
  const isValid = netSelfEmploymentIncome > 0 && otherW2Income >= 0 && formData.state;

  // Calculate all values
  const result = useMemo<CalculationResult | null>(() => {
    if (!isValid) return null;

    // Step 1: Calculate SE taxable income (92.35% of net SE income)
    const seTaxableIncome = netSelfEmploymentIncome * SE_INCOME_MULTIPLIER;

    // Step 2: Calculate SE tax components
    const socialSecurityTax = calculateSocialSecurityTax(seTaxableIncome, otherW2Income);
    const medicareTax = calculateMedicareTax(seTaxableIncome);
    const additionalMedicareTax = calculateAdditionalMedicareTax(
      seTaxableIncome,
      otherW2Income,
      formData.filingStatus
    );
    const totalSETax = socialSecurityTax + medicareTax + additionalMedicareTax;

    // Step 3: SE tax deduction (50% of SE tax is deductible)
    const seDeduction = totalSETax / 2;

    // Step 4: Calculate federal income tax on SE income
    // Adjusted SE income after the SE deduction
    const adjustedSEIncome = netSelfEmploymentIncome - seDeduction;
    const federalIncomeTax = calculateFederalTaxOnPrize(
      adjustedSEIncome,
      otherW2Income,
      formData.filingStatus
    );

    // Step 5: State tax on SE income
    const stateTax = calculateStateTaxOnPrize(
      netSelfEmploymentIncome,
      formData.state,
      stateRateOverride
    );

    // Step 6: Total tax burden
    const totalTaxBurden = totalSETax + federalIncomeTax + stateTax;

    // Step 7: Effective rates
    const effectiveSERate = netSelfEmploymentIncome > 0 ? totalSETax / netSelfEmploymentIncome : 0;
    const effectiveTotalRate = netSelfEmploymentIncome > 0 ? totalTaxBurden / netSelfEmploymentIncome : 0;
    
    const marginalFederalRate = getMarginalFederalRate(
      otherW2Income + adjustedSEIncome,
      formData.filingStatus
    );
    const stateRate = stateRateOverride ?? STATE_TAX_RATES[formData.state] ?? 0;

    return {
      netSelfEmploymentIncome,
      seTaxableIncome,
      socialSecurityTax,
      medicareTax,
      additionalMedicareTax,
      totalSETax,
      seDeduction,
      federalIncomeTax,
      stateTax,
      totalTaxBurden,
      effectiveSERate,
      effectiveTotalRate,
      marginalFederalRate,
      stateRate,
    };
  }, [netSelfEmploymentIncome, otherW2Income, formData.filingStatus, formData.state, stateRateOverride, isValid]);

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
          {/* Net Self-Employment Income */}
          <div>
            <label htmlFor="netSelfEmploymentIncome" className="form-label">
              Net self-employment income <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-gray-400)] font-medium text-sm">$</span>
              <input
                type="number"
                id="netSelfEmploymentIncome"
                name="netSelfEmploymentIncome"
                value={formData.netSelfEmploymentIncome}
                onChange={handleInputChange}
                placeholder="100000"
                min="0"
                className="form-input !pl-7"
              />
            </div>
            <p className="mt-1.5 text-xs text-[var(--color-gray-500)]">
              Gross revenue minus business expenses (Schedule C line 31)
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

          {/* Other W2 Income */}
          <div>
            <label htmlFor="otherW2Income" className="form-label">
              W-2 wages from employment <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-gray-400)] font-medium text-sm">$</span>
              <input
                type="number"
                id="otherW2Income"
                name="otherW2Income"
                value={formData.otherW2Income}
                onChange={handleInputChange}
                placeholder="0"
                min="0"
                className="form-input !pl-7"
              />
            </div>
            <p className="mt-1.5 text-xs text-[var(--color-gray-500)]">
              W-2 wages affect SS wage base calculations
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
              Enter all required fields to see your self-employment tax breakdown
            </p>
          </div>
        ) : result && (
          <div className="space-y-6">
            {/* Headline - Total SE Tax */}
            <div className="text-center py-5 px-4 bg-gradient-gold rounded-xl">
              <p className="text-sm text-[var(--color-navy-deep)]/70 mb-1 font-medium">Self-Employment Tax</p>
              <p className="text-3xl sm:text-4xl font-bold text-[var(--color-navy-deep)]">
                {formatCurrency(result.totalSETax)}
              </p>
              <p className="text-sm text-[var(--color-navy-deep)]/70 mt-1">
                {formatPercent(result.effectiveSERate)} effective rate
              </p>
            </div>

            {/* SE Tax Breakdown */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-[var(--color-navy-deep)] uppercase tracking-wide">
                Self-Employment Tax Breakdown
              </h3>
              <div className="flex justify-between items-center py-3 border-b border-[var(--color-gray-200)]">
                <span className="text-[var(--color-gray-600)]">Net SE income</span>
                <span className="text-[var(--color-navy-deep)] font-semibold">{formatCurrency(result.netSelfEmploymentIncome)}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-[var(--color-gray-200)]">
                <div>
                  <span className="text-[var(--color-gray-600)]">SE taxable amount</span>
                  <span className="text-xs text-[var(--color-gray-400)] ml-2">(92.35%)</span>
                </div>
                <span className="text-[var(--color-navy-deep)] font-semibold">{formatCurrency(result.seTaxableIncome)}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-[var(--color-gray-200)]">
                <div>
                  <span className="text-[var(--color-gray-600)]">Social Security tax</span>
                  <span className="text-xs text-[var(--color-gray-400)] ml-2">({formatPercent(SOCIAL_SECURITY_RATE)})</span>
                </div>
                <span className="text-red-600 font-semibold">−{formatCurrency(result.socialSecurityTax)}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-[var(--color-gray-200)]">
                <div>
                  <span className="text-[var(--color-gray-600)]">Medicare tax</span>
                  <span className="text-xs text-[var(--color-gray-400)] ml-2">({formatPercent(MEDICARE_RATE)})</span>
                </div>
                <span className="text-red-600 font-semibold">−{formatCurrency(result.medicareTax)}</span>
              </div>
              {result.additionalMedicareTax > 0 && (
                <div className="flex justify-between items-center py-3 border-b border-[var(--color-gray-200)]">
                  <div>
                    <span className="text-[var(--color-gray-600)]">Additional Medicare</span>
                    <span className="text-xs text-[var(--color-gray-400)] ml-2">({formatPercent(ADDITIONAL_MEDICARE_RATE)})</span>
                  </div>
                  <span className="text-red-600 font-semibold">−{formatCurrency(result.additionalMedicareTax)}</span>
                </div>
              )}
              <div className="flex justify-between items-center py-3 bg-[var(--color-gray-50)] rounded-lg px-4 -mx-4">
                <span className="text-[var(--color-navy-deep)] font-semibold">Total SE tax</span>
                <span className="text-[var(--color-navy-deep)] font-bold">{formatCurrency(result.totalSETax)}</span>
              </div>
            </div>

            {/* Additional Tax Obligations */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-[var(--color-navy-deep)] uppercase tracking-wide">
                Total Tax Obligation
              </h3>
              <div className="flex justify-between items-center py-3 border-b border-[var(--color-gray-200)]">
                <span className="text-[var(--color-gray-600)]">Self-employment tax</span>
                <span className="text-red-600 font-semibold">−{formatCurrency(result.totalSETax)}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-[var(--color-gray-200)]">
                <div>
                  <span className="text-[var(--color-gray-600)]">Federal income tax</span>
                  <span className="text-xs text-[var(--color-gray-400)] ml-2">({formatPercent(result.marginalFederalRate)} marginal)</span>
                </div>
                <span className="text-red-600 font-semibold">−{formatCurrency(result.federalIncomeTax)}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-[var(--color-gray-200)]">
                <div>
                  <span className="text-[var(--color-gray-600)]">State income tax</span>
                  <span className="text-xs text-[var(--color-gray-400)] ml-2">({formatPercent(result.stateRate)} rate)</span>
                </div>
                <span className="text-red-600 font-semibold">−{formatCurrency(result.stateTax)}</span>
              </div>
            </div>

            {/* Final Result */}
            <div className="flex justify-between items-center py-4 bg-[var(--color-gold)]/10 rounded-xl px-4 -mx-4">
              <span className="text-[var(--color-navy-deep)] font-bold">Total tax burden</span>
              <span className="text-[var(--color-gold-dark)] font-bold text-xl">{formatCurrency(result.totalTaxBurden)}</span>
            </div>

            {/* Effective Rate */}
            <div className="text-center pt-2">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-gray-100)] rounded-full">
                <span className="text-[var(--color-gray-600)] text-sm">Combined effective tax rate:</span>
                <span className="text-[var(--color-navy-deep)] font-bold">{formatPercent(result.effectiveTotalRate)}</span>
              </span>
            </div>

            {/* SE Deduction Note */}
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm text-green-800">
                <strong>Good news:</strong> You can deduct {formatCurrency(result.seDeduction)} (half of your SE tax) 
                from your adjusted gross income, which reduces your federal income tax.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
