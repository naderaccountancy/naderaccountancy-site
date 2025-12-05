"use client";

import React, { useState, useMemo } from 'react';
import type { FilingStatus } from '@/lib/taxBrackets';
import { calculateFederalTaxOnPrize, getMarginalFederalRate } from '@/lib/taxBrackets';
import { US_STATES, STATE_TAX_RATES, calculateStateTaxOnPrize } from '@/lib/stateTaxRates';
import { PLATFORMS, getPlatformById, getPlatformFee, calculatePlatformFeeAmount } from '@/lib/platformConfig';
import { 
  generateRecommendations, 
  groupRecommendationsByCategory, 
  getImpactBadgeClass,
  type Recommendation,
  type RecommendationCategory,
  type RecommendationInput
} from '@/lib/recommendationEngine';

/* ===========================================
   CONTENT CREATOR TAX CALCULATOR COMPONENT
   
   Calculates after-tax earnings for content creators
   Accounts for platform fees, federal tax, and state tax
   Includes a Recommendations & Actions engine
   =========================================== */

interface FormData {
  grossRevenue: string;
  platformId: string;
  platformFeeOverride: string;
  filingStatus: FilingStatus;
  otherIncome: string;
  state: string;
  stateRateOverride: string;
}

interface CalculationResult {
  grossRevenue: number;
  platformFeeRate: number;
  platformFeeAmount: number;
  netRevenueBeforeTax: number;
  federalTax: number;
  stateTax: number;
  totalTax: number;
  afterTaxIncome: number;
  effectiveTaxRate: number;
  effectivePlatformFeeRate: number;
  effectiveOverallRate: number;
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
 * Category icons for the recommendations panel
 */
const CATEGORY_ICONS: Record<RecommendationCategory, React.ReactNode> = {
  'Immediate action items': (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  'Planning opportunities': (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </svg>
  ),
  'Long-term strategy': (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
};

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
 * Recommendation Item Component
 */
function RecommendationItem({ recommendation }: { recommendation: Recommendation }) {
  return (
    <div className="p-4 bg-white border border-[var(--color-gray-200)] rounded-lg hover:border-[var(--color-gold)]/50 transition-colors">
      <div className="flex items-start justify-between gap-3 mb-2">
        <h4 className="font-semibold text-[var(--color-navy-deep)] text-sm leading-tight">
          {recommendation.title}
        </h4>
        <span className={`flex-shrink-0 px-2 py-0.5 text-xs font-medium rounded-full ${getImpactBadgeClass(recommendation.impact)}`}>
          {recommendation.impact}
        </span>
      </div>
      <p className="text-sm text-[var(--color-gray-600)] leading-relaxed">
        {recommendation.explanation}
      </p>
    </div>
  );
}

/**
 * Recommendations Panel Component
 */
function RecommendationsPanel({ 
  recommendations, 
  isVisible 
}: { 
  recommendations: Recommendation[];
  isVisible: boolean;
}) {
  const groupedRecommendations = useMemo(
    () => groupRecommendationsByCategory(recommendations),
    [recommendations]
  );

  // Order of categories to display
  const categoryOrder: RecommendationCategory[] = [
    'Immediate action items',
    'Planning opportunities',
    'Long-term strategy',
  ];

  return (
    <div className={`mt-8 card p-6 sm:p-8 transition-opacity duration-300 ${!isVisible ? 'opacity-50' : ''}`}>
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl font-bold text-[var(--color-navy-deep)] flex items-center gap-3">
          <span className="w-10 h-10 bg-[var(--color-gold)]/10 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-[var(--color-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </span>
          Recommendations & Actions
        </h2>
        <p className="mt-2 text-sm text-[var(--color-gray-500)]">
          {isVisible 
            ? 'Based on your numbers, here are some ideas to discuss with a tax professional.'
            : 'Complete the calculator above to see personalized recommendations.'}
        </p>
      </div>

      {!isVisible ? (
        /* Placeholder State */
        <div className="text-center py-12">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--color-gray-100)] flex items-center justify-center">
            <svg className="w-8 h-8 text-[var(--color-gray-400)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <p className="text-[var(--color-gray-500)]">
            Enter your income details above to receive tax-saving recommendations
          </p>
        </div>
      ) : (
        <>
          {/* Recommendations by Category */}
          <div className="space-y-6">
            {categoryOrder.map((category) => {
              const categoryRecs = groupedRecommendations[category];
              if (categoryRecs.length === 0) return null;

              return (
                <div key={category}>
                  <h3 className="flex items-center gap-2 text-sm font-semibold text-[var(--color-navy-deep)] uppercase tracking-wide mb-3">
                    <span className="text-[var(--color-gold)]">
                      {CATEGORY_ICONS[category]}
                    </span>
                    {category}
                  </h3>
                  <div className="space-y-3">
                    {categoryRecs.map((rec) => (
                      <RecommendationItem key={rec.id} recommendation={rec} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Disclaimer */}
          <div className="mt-6 p-4 bg-[var(--color-gray-50)] rounded-lg border border-[var(--color-gray-200)]">
            <p className="text-xs text-[var(--color-gray-500)] leading-relaxed">
              <strong className="text-[var(--color-gray-600)]">Important:</strong> These recommendations are general educational suggestions based on simplified assumptions. They are not individualized tax advice. Tax laws are complex and your situation may have factors not considered here. Consult a qualified tax professional before making any decisions.
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export default function ContentCreatorCalculator() {
  const [formData, setFormData] = useState<FormData>({
    grossRevenue: '',
    platformId: 'onlyfans',
    platformFeeOverride: '',
    filingStatus: 'single',
    otherIncome: '',
    state: 'California',
    stateRateOverride: '',
  });

  // Parse numeric inputs
  const grossRevenue = parseFloat(formData.grossRevenue) || 0;
  const otherIncome = parseFloat(formData.otherIncome) || 0;
  
  // Platform fee: use override if provided, otherwise use platform default
  const platformFeeOverride = formData.platformFeeOverride 
    ? parseFloat(formData.platformFeeOverride) / 100 
    : undefined;
  
  // State rate: use override if provided, otherwise use state default
  const stateRateOverride = formData.stateRateOverride 
    ? parseFloat(formData.stateRateOverride) / 100 
    : undefined;

  // Get current platform info
  const selectedPlatform = getPlatformById(formData.platformId);
  const currentPlatformFee = getPlatformFee(formData.platformId, platformFeeOverride);
  const isCustomPlatform = formData.platformId === 'custom';

  // Check if all required fields are valid
  const isValid = grossRevenue > 0 && 
    otherIncome >= 0 && 
    formData.state && 
    (isCustomPlatform ? formData.platformFeeOverride !== '' : true);

  // Calculate all values
  const result = useMemo<CalculationResult | null>(() => {
    if (!isValid) return null;

    // Step 1: Calculate platform fee
    const platformFeeAmount = calculatePlatformFeeAmount(
      grossRevenue,
      formData.platformId,
      platformFeeOverride
    );
    
    // Step 2: Net revenue before tax (after platform fee)
    const netRevenueBeforeTax = grossRevenue - platformFeeAmount;

    // Step 3: Federal tax on creator income
    // Uses incremental tax calculation (tax with creator income minus tax without)
    const federalTax = calculateFederalTaxOnPrize(
      netRevenueBeforeTax,
      otherIncome,
      formData.filingStatus
    );

    // Step 4: State tax on creator income
    const stateTax = calculateStateTaxOnPrize(
      netRevenueBeforeTax,
      formData.state,
      stateRateOverride
    );

    // Step 5: Calculate totals
    const totalTax = federalTax + stateTax;
    const afterTaxIncome = netRevenueBeforeTax - totalTax;

    // Step 6: Calculate effective rates
    const effectiveTaxRate = netRevenueBeforeTax > 0 ? totalTax / netRevenueBeforeTax : 0;
    const effectivePlatformFeeRate = grossRevenue > 0 ? platformFeeAmount / grossRevenue : 0;
    const effectiveOverallRate = grossRevenue > 0 ? (platformFeeAmount + totalTax) / grossRevenue : 0;
    
    const marginalFederalRate = getMarginalFederalRate(
      otherIncome + netRevenueBeforeTax,
      formData.filingStatus
    );
    const stateRate = stateRateOverride ?? STATE_TAX_RATES[formData.state] ?? 0;

    return {
      grossRevenue,
      platformFeeRate: currentPlatformFee,
      platformFeeAmount,
      netRevenueBeforeTax,
      federalTax,
      stateTax,
      totalTax,
      afterTaxIncome,
      effectiveTaxRate,
      effectivePlatformFeeRate,
      effectiveOverallRate,
      marginalFederalRate,
      stateRate,
    };
  }, [
    grossRevenue, 
    otherIncome, 
    formData.filingStatus, 
    formData.state, 
    formData.platformId,
    platformFeeOverride, 
    stateRateOverride, 
    currentPlatformFee,
    isValid
  ]);

  // Generate recommendations based on inputs and results
  const recommendations = useMemo<Recommendation[]>(() => {
    if (!isValid || !result) return [];

    const recommendationInput: RecommendationInput = {
      platformId: formData.platformId,
      platformName: selectedPlatform?.name ?? 'your platform',
      grossRevenue: result.grossRevenue,
      filingStatus: formData.filingStatus,
      otherIncome: otherIncome,
      state: formData.state,
      platformFeeAmount: result.platformFeeAmount,
      netRevenueBeforeTax: result.netRevenueBeforeTax,
      federalTax: result.federalTax,
      stateTax: result.stateTax,
      totalTax: result.totalTax,
      afterTaxIncome: result.afterTaxIncome,
      effectiveTaxRate: result.effectiveTaxRate,
      stateRate: result.stateRate,
    };

    return generateRecommendations(recommendationInput);
  }, [isValid, result, formData.platformId, formData.filingStatus, formData.state, otherIncome, selectedPlatform]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      // If platform changes, clear the fee override unless switching to custom
      if (name === 'platformId' && value !== 'custom') {
        return { ...prev, [name]: value, platformFeeOverride: '' };
      }
      return { ...prev, [name]: value };
    });
  };

  return (
    <div>
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
            {/* Gross Revenue */}
            <div>
              <label htmlFor="grossRevenue" className="form-label">
                Gross revenue from platform <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-gray-400)] font-medium text-sm">$</span>
                <input
                  type="number"
                  id="grossRevenue"
                  name="grossRevenue"
                  value={formData.grossRevenue}
                  onChange={handleInputChange}
                  placeholder="100000"
                  min="0"
                  className="form-input !pl-7"
                />
              </div>
              <p className="mt-1.5 text-xs text-[var(--color-gray-500)]">
                Total earnings before platform fees are deducted
              </p>
            </div>

            {/* Platform Selection */}
            <div>
              <label htmlFor="platformId" className="form-label">
                Content platform <span className="text-red-500">*</span>
              </label>
              <select
                id="platformId"
                name="platformId"
                value={formData.platformId}
                onChange={handleInputChange}
                className="form-input cursor-pointer"
              >
                {PLATFORMS.map((platform) => (
                  <option key={platform.id} value={platform.id}>
                    {platform.icon} {platform.name} {platform.id !== 'custom' ? `(${formatPercent(platform.feePercentage)} fee)` : ''}
                  </option>
                ))}
              </select>
              {selectedPlatform && selectedPlatform.id !== 'custom' && (
                <p className="mt-1.5 text-xs text-[var(--color-gray-500)]">
                  {selectedPlatform.description}
                </p>
              )}
            </div>

            {/* Platform Fee Override / Custom Fee */}
            <div>
              <label htmlFor="platformFeeOverride" className="form-label">
                {isCustomPlatform ? (
                  <>Platform fee percentage <span className="text-red-500">*</span></>
                ) : (
                  'Override platform fee (optional)'
                )}
              </label>
              <div className="relative">
                <input
                  type="number"
                  id="platformFeeOverride"
                  name="platformFeeOverride"
                  value={formData.platformFeeOverride}
                  onChange={handleInputChange}
                  placeholder={isCustomPlatform ? 'Enter fee %' : `Default: ${formatPercent(selectedPlatform?.feePercentage ?? 0)}`}
                  min="0"
                  max="100"
                  step="0.1"
                  className="form-input !pr-8"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--color-gray-400)] font-medium text-sm">%</span>
              </div>
              {!isCustomPlatform && (
                <p className="mt-1.5 text-xs text-[var(--color-gray-500)]">
                  Enter a custom rate if your contract has different terms
                </p>
              )}
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
                Other taxable income this year <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-gray-400)] font-medium text-sm">$</span>
                <input
                  type="number"
                  id="otherIncome"
                  name="otherIncome"
                  value={formData.otherIncome}
                  onChange={handleInputChange}
                  placeholder="50000"
                  min="0"
                  className="form-input !pl-7"
                />
              </div>
              <p className="mt-1.5 text-xs text-[var(--color-gray-500)]">
                W-2 income, other 1099 work, etc. (determines your tax bracket)
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
                Enter all required fields to see your estimated after-tax creator income
              </p>
            </div>
          ) : result && (
            <div className="space-y-6">
              {/* Headline - After Tax Income */}
              <div className="text-center py-5 px-4 bg-gradient-gold rounded-xl">
                <p className="text-sm text-[var(--color-navy-deep)]/70 mb-1 font-medium">Your after-tax creator income</p>
                <p className="text-3xl sm:text-4xl font-bold text-[var(--color-navy-deep)]">
                  {formatCurrency(result.afterTaxIncome)}
                </p>
                <p className="text-sm text-[var(--color-navy-deep)]/70 mt-1">
                  from {formatCurrency(result.grossRevenue)} gross
                </p>
              </div>

              {/* Platform Fee Breakdown */}
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-[var(--color-navy-deep)] uppercase tracking-wide">
                  Platform Fees
                </h3>
                <div className="flex justify-between items-center py-3 border-b border-[var(--color-gray-200)]">
                  <span className="text-[var(--color-gray-600)]">Gross platform revenue</span>
                  <span className="text-[var(--color-navy-deep)] font-semibold">{formatCurrency(result.grossRevenue)}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-[var(--color-gray-200)]">
                  <div>
                    <span className="text-[var(--color-gray-600)]">Platform fee</span>
                    <span className="text-xs text-[var(--color-gray-400)] ml-2">({formatPercent(result.platformFeeRate)})</span>
                  </div>
                  <span className="text-red-600 font-semibold">−{formatCurrency(result.platformFeeAmount)}</span>
                </div>
                <div className="flex justify-between items-center py-3 bg-[var(--color-gray-50)] rounded-lg px-4 -mx-4">
                  <span className="text-[var(--color-navy-deep)] font-semibold">Net revenue before tax</span>
                  <span className="text-[var(--color-navy-deep)] font-bold">{formatCurrency(result.netRevenueBeforeTax)}</span>
                </div>
              </div>

              {/* Tax Breakdown */}
              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-[var(--color-navy-deep)] uppercase tracking-wide">
                  Taxes on Creator Income
                </h3>
                <div className="flex justify-between items-center py-3 border-b border-[var(--color-gray-200)]">
                  <div>
                    <span className="text-[var(--color-gray-600)]">Federal income tax</span>
                    <span className="text-xs text-[var(--color-gray-400)] ml-2">({formatPercent(result.marginalFederalRate)} marginal)</span>
                  </div>
                  <span className="text-red-600 font-semibold">−{formatCurrency(result.federalTax)}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-[var(--color-gray-200)]">
                  <div>
                    <span className="text-[var(--color-gray-600)]">State income tax</span>
                    <span className="text-xs text-[var(--color-gray-400)] ml-2">({formatPercent(result.stateRate)} rate)</span>
                  </div>
                  <span className="text-red-600 font-semibold">−{formatCurrency(result.stateTax)}</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-[var(--color-gray-200)]">
                  <span className="text-[var(--color-gray-600)]">Total taxes</span>
                  <span className="text-red-600 font-semibold">−{formatCurrency(result.totalTax)}</span>
                </div>
              </div>

              {/* Final Result */}
              <div className="flex justify-between items-center py-4 bg-[var(--color-gold)]/10 rounded-xl px-4 -mx-4">
                <span className="text-[var(--color-navy-deep)] font-bold">After-tax creator income</span>
                <span className="text-[var(--color-gold-dark)] font-bold text-xl">{formatCurrency(result.afterTaxIncome)}</span>
              </div>

              {/* Effective Rates */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-[var(--color-navy-deep)] uppercase tracking-wide mb-3">
                  Effective Rates
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div className="text-center p-3 bg-[var(--color-gray-50)] rounded-lg">
                    <p className="text-xs text-[var(--color-gray-500)] mb-1">Platform Fee</p>
                    <p className="text-lg font-bold text-[var(--color-navy-deep)]">{formatPercent(result.effectivePlatformFeeRate)}</p>
                  </div>
                  <div className="text-center p-3 bg-[var(--color-gray-50)] rounded-lg">
                    <p className="text-xs text-[var(--color-gray-500)] mb-1">Tax Rate</p>
                    <p className="text-lg font-bold text-[var(--color-navy-deep)]">{formatPercent(result.effectiveTaxRate)}</p>
                  </div>
                  <div className="text-center p-3 bg-[var(--color-gold)]/10 rounded-lg col-span-2 sm:col-span-1">
                    <p className="text-xs text-[var(--color-gray-500)] mb-1">Total Take Rate</p>
                    <p className="text-lg font-bold text-[var(--color-gold-dark)]">{formatPercent(result.effectiveOverallRate)}</p>
                  </div>
                </div>
                <p className="text-xs text-[var(--color-gray-400)] text-center mt-2">
                  Total take rate = platform fees + taxes as % of gross revenue
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Recommendations Panel - Spans full width below the two-column layout */}
      <RecommendationsPanel 
        recommendations={recommendations} 
        isVisible={isValid && result !== null} 
      />
    </div>
  );
}
