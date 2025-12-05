"use client";

import { useState, useMemo } from 'react';
import type { FilingStatus } from '@/lib/taxBrackets';
import { calculateFederalTaxOnPrize, getMarginalFederalRate } from '@/lib/taxBrackets';
import { US_STATES, STATE_TAX_RATES, calculateStateTaxOnPrize } from '@/lib/stateTaxRates';

/* ===========================================
   S-CORP SAVINGS CALCULATOR COMPONENT
   
   Compares sole proprietor vs S-Corp tax burden
   to show potential self-employment tax savings
   =========================================== */

// Tax constants for 2024
const SE_TAX_RATE = 0.153; // 15.3% total (12.4% SS + 2.9% Medicare)
const SOCIAL_SECURITY_RATE = 0.124; // 12.4%
const MEDICARE_RATE = 0.029; // 2.9%
const EMPLOYER_FICA_RATE = 0.0765; // 7.65% employer portion
const EMPLOYEE_FICA_RATE = 0.0765; // 7.65% employee portion
const SOCIAL_SECURITY_WAGE_BASE = 168600; // 2024 SS wage base
const SE_INCOME_MULTIPLIER = 0.9235; // Only 92.35% of SE income is subject to SE tax

interface FormData {
  netBusinessIncome: string;
  reasonableSalary: string;
  filingStatus: FilingStatus;
  otherIncome: string;
  state: string;
  stateRateOverride: string;
}

interface ScenarioResult {
  netIncome: number;
  seTax: number;
  seDeduction: number;
  employerFICA: number;
  employeeFICA: number;
  federalIncomeTax: number;
  stateTax: number;
  totalTax: number;
  afterTaxIncome: number;
  effectiveRate: number;
}

interface CalculationResult {
  soleProprietor: ScenarioResult;
  sCorp: ScenarioResult;
  savings: number;
  savingsPercent: number;
  reasonableSalary: number;
  distributions: number;
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
 * Calculates self-employment tax for sole proprietor
 */
function calculateSETax(netIncome: number): number {
  const seTaxableIncome = netIncome * SE_INCOME_MULTIPLIER;
  const ssWages = Math.min(seTaxableIncome, SOCIAL_SECURITY_WAGE_BASE);
  const socialSecurityTax = ssWages * SOCIAL_SECURITY_RATE;
  const medicareTax = seTaxableIncome * MEDICARE_RATE;
  return socialSecurityTax + medicareTax;
}

/**
 * Calculates FICA taxes for S-Corp salary
 */
function calculateFICATax(salary: number): { employer: number; employee: number } {
  const ssWages = Math.min(salary, SOCIAL_SECURITY_WAGE_BASE);
  const employerSS = ssWages * (SOCIAL_SECURITY_RATE / 2);
  const employeeSS = ssWages * (SOCIAL_SECURITY_RATE / 2);
  const employerMedicare = salary * (MEDICARE_RATE / 2);
  const employeeMedicare = salary * (MEDICARE_RATE / 2);
  
  return {
    employer: employerSS + employerMedicare,
    employee: employeeSS + employeeMedicare,
  };
}

export default function SCorpSavingsCalculator() {
  const [formData, setFormData] = useState<FormData>({
    netBusinessIncome: '',
    reasonableSalary: '',
    filingStatus: 'single',
    otherIncome: '',
    state: 'California',
    stateRateOverride: '',
  });

  // Parse numeric inputs
  const netBusinessIncome = parseFloat(formData.netBusinessIncome) || 0;
  const reasonableSalary = parseFloat(formData.reasonableSalary) || 0;
  const otherIncome = parseFloat(formData.otherIncome) || 0;
  const stateRateOverride = formData.stateRateOverride 
    ? parseFloat(formData.stateRateOverride) / 100 
    : undefined;

  // Validation
  const isValid = netBusinessIncome > 0 && 
    reasonableSalary > 0 && 
    reasonableSalary <= netBusinessIncome &&
    otherIncome >= 0 && 
    formData.state;

  // Calculate all values
  const result = useMemo<CalculationResult | null>(() => {
    if (!isValid) return null;

    const stateRate = stateRateOverride ?? STATE_TAX_RATES[formData.state] ?? 0;

    // ========== SOLE PROPRIETOR SCENARIO ==========
    const seTax = calculateSETax(netBusinessIncome);
    const seDeduction = seTax / 2;
    const spAdjustedIncome = netBusinessIncome - seDeduction;
    const spFederalTax = calculateFederalTaxOnPrize(spAdjustedIncome, otherIncome, formData.filingStatus);
    const spStateTax = calculateStateTaxOnPrize(netBusinessIncome, formData.state, stateRateOverride);
    const spTotalTax = seTax + spFederalTax + spStateTax;
    const spAfterTax = netBusinessIncome - spTotalTax;

    const soleProprietor: ScenarioResult = {
      netIncome: netBusinessIncome,
      seTax,
      seDeduction,
      employerFICA: 0,
      employeeFICA: 0,
      federalIncomeTax: spFederalTax,
      stateTax: spStateTax,
      totalTax: spTotalTax,
      afterTaxIncome: spAfterTax,
      effectiveRate: netBusinessIncome > 0 ? spTotalTax / netBusinessIncome : 0,
    };

    // ========== S-CORP SCENARIO ==========
    const fica = calculateFICATax(reasonableSalary);
    const distributions = netBusinessIncome - reasonableSalary - fica.employer; // After employer FICA
    
    // Total income for tax purposes (salary + distributions)
    const scTotalIncome = reasonableSalary + Math.max(0, distributions);
    const scFederalTax = calculateFederalTaxOnPrize(scTotalIncome, otherIncome, formData.filingStatus);
    const scStateTax = calculateStateTaxOnPrize(scTotalIncome, formData.state, stateRateOverride);
    const scTotalTax = fica.employer + fica.employee + scFederalTax + scStateTax;
    const scAfterTax = netBusinessIncome - scTotalTax;

    const sCorp: ScenarioResult = {
      netIncome: netBusinessIncome,
      seTax: 0,
      seDeduction: 0,
      employerFICA: fica.employer,
      employeeFICA: fica.employee,
      federalIncomeTax: scFederalTax,
      stateTax: scStateTax,
      totalTax: scTotalTax,
      afterTaxIncome: scAfterTax,
      effectiveRate: netBusinessIncome > 0 ? scTotalTax / netBusinessIncome : 0,
    };

    // ========== SAVINGS ==========
    const savings = spTotalTax - scTotalTax;
    const savingsPercent = netBusinessIncome > 0 ? savings / netBusinessIncome : 0;

    return {
      soleProprietor,
      sCorp,
      savings,
      savingsPercent,
      reasonableSalary,
      distributions: Math.max(0, distributions),
    };
  }, [netBusinessIncome, reasonableSalary, otherIncome, formData.filingStatus, formData.state, stateRateOverride, isValid]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-8">
      {/* Input Form Card */}
      <div className="card p-6 sm:p-8">
        <h2 className="text-xl font-bold text-[var(--color-navy-deep)] mb-6 flex items-center gap-3">
          <span className="w-10 h-10 bg-[var(--color-gold)]/10 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-[var(--color-gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </span>
          Enter Your Business Details
        </h2>

        <form className="grid sm:grid-cols-2 gap-x-6 gap-y-5">
          {/* Net Business Income */}
          <div>
            <label htmlFor="netBusinessIncome" className="form-label">
              Net business income <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-gray-400)] font-medium text-sm">$</span>
              <input
                type="number"
                id="netBusinessIncome"
                name="netBusinessIncome"
                value={formData.netBusinessIncome}
                onChange={handleInputChange}
                placeholder="150000"
                min="0"
                className="form-input !pl-7"
              />
            </div>
            <p className="mt-1.5 text-xs text-[var(--color-gray-500)]">
              Gross revenue minus business expenses
            </p>
          </div>

          {/* Reasonable Salary */}
          <div>
            <label htmlFor="reasonableSalary" className="form-label">
              Reasonable S-Corp salary <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-gray-400)] font-medium text-sm">$</span>
              <input
                type="number"
                id="reasonableSalary"
                name="reasonableSalary"
                value={formData.reasonableSalary}
                onChange={handleInputChange}
                placeholder="60000"
                min="0"
                max={netBusinessIncome || undefined}
                className="form-input !pl-7"
              />
            </div>
            <p className="mt-1.5 text-xs text-[var(--color-gray-500)]">
              Must be reasonable for your role/industry
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

          {/* Other Income */}
          <div>
            <label htmlFor="otherIncome" className="form-label">
              Other taxable income <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-gray-400)] font-medium text-sm">$</span>
              <input
                type="number"
                id="otherIncome"
                name="otherIncome"
                value={formData.otherIncome}
                onChange={handleInputChange}
                placeholder="0"
                min="0"
                className="form-input !pl-7"
              />
            </div>
            <p className="mt-1.5 text-xs text-[var(--color-gray-500)]">
              W-2 income, investments, etc.
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
        </form>
      </div>

      {/* Results Section */}
      <div className={`transition-opacity duration-300 ${!isValid ? 'opacity-50' : ''}`}>
        {!isValid ? (
          <div className="card p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--color-gray-100)] flex items-center justify-center">
              <svg className="w-8 h-8 text-[var(--color-gray-400)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-[var(--color-gray-500)]">
              Enter all required fields to compare sole proprietor vs S-Corp tax burden
            </p>
          </div>
        ) : result && (
          <>
            {/* Savings Banner */}
            <div className={`rounded-xl p-6 text-center ${result.savings > 0 ? 'bg-gradient-gold' : 'bg-[var(--color-gray-100)]'}`}>
              <p className="text-sm font-medium mb-1 text-[var(--color-navy-deep)]/70">
                {result.savings > 0 ? 'Potential Annual Savings with S-Corp' : 'S-Corp Tax Impact'}
              </p>
              <p className={`text-4xl sm:text-5xl font-bold ${result.savings > 0 ? 'text-[var(--color-navy-deep)]' : 'text-[var(--color-gray-600)]'}`}>
                {result.savings >= 0 ? formatCurrency(result.savings) : `(${formatCurrency(Math.abs(result.savings))})`}
              </p>
              <p className="text-sm mt-2 text-[var(--color-navy-deep)]/70">
                {result.savings > 0 
                  ? `${formatPercent(result.savingsPercent)} of net business income`
                  : 'No savings at this salary level'
                }
              </p>
            </div>

            {/* Comparison Grid */}
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              {/* Sole Proprietor Card */}
              <div className="card p-6">
                <h3 className="text-lg font-bold text-[var(--color-navy-deep)] mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-[var(--color-gray-200)] rounded-full flex items-center justify-center text-sm">👤</span>
                  Sole Proprietor
                </h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-[var(--color-gray-200)]">
                    <span className="text-[var(--color-gray-600)]">Net business income</span>
                    <span className="font-semibold">{formatCurrency(result.soleProprietor.netIncome)}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-[var(--color-gray-200)]">
                    <span className="text-[var(--color-gray-600)]">Self-employment tax</span>
                    <span className="text-red-600 font-semibold">−{formatCurrency(result.soleProprietor.seTax)}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-[var(--color-gray-200)]">
                    <span className="text-[var(--color-gray-600)]">Federal income tax</span>
                    <span className="text-red-600 font-semibold">−{formatCurrency(result.soleProprietor.federalIncomeTax)}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-[var(--color-gray-200)]">
                    <span className="text-[var(--color-gray-600)]">State income tax</span>
                    <span className="text-red-600 font-semibold">−{formatCurrency(result.soleProprietor.stateTax)}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 bg-[var(--color-gray-50)] rounded-lg px-3 -mx-3">
                    <span className="font-semibold">Total taxes</span>
                    <span className="font-bold text-lg">{formatCurrency(result.soleProprietor.totalTax)}</span>
                  </div>
                  <div className="text-center pt-2">
                    <span className="text-sm text-[var(--color-gray-500)]">Effective rate: </span>
                    <span className="font-semibold">{formatPercent(result.soleProprietor.effectiveRate)}</span>
                  </div>
                </div>
              </div>

              {/* S-Corp Card */}
              <div className="card p-6 border-2 border-[var(--color-gold)]">
                <h3 className="text-lg font-bold text-[var(--color-navy-deep)] mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-[var(--color-gold)] rounded-full flex items-center justify-center text-sm">🏢</span>
                  S-Corporation
                </h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-[var(--color-gray-200)]">
                    <span className="text-[var(--color-gray-600)]">Salary</span>
                    <span className="font-semibold">{formatCurrency(result.reasonableSalary)}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-[var(--color-gray-200)]">
                    <span className="text-[var(--color-gray-600)]">Distributions</span>
                    <span className="font-semibold">{formatCurrency(result.distributions)}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-[var(--color-gray-200)]">
                    <span className="text-[var(--color-gray-600)]">Employer FICA</span>
                    <span className="text-red-600 font-semibold">−{formatCurrency(result.sCorp.employerFICA)}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-[var(--color-gray-200)]">
                    <span className="text-[var(--color-gray-600)]">Employee FICA</span>
                    <span className="text-red-600 font-semibold">−{formatCurrency(result.sCorp.employeeFICA)}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-[var(--color-gray-200)]">
                    <span className="text-[var(--color-gray-600)]">Federal income tax</span>
                    <span className="text-red-600 font-semibold">−{formatCurrency(result.sCorp.federalIncomeTax)}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-[var(--color-gray-200)]">
                    <span className="text-[var(--color-gray-600)]">State income tax</span>
                    <span className="text-red-600 font-semibold">−{formatCurrency(result.sCorp.stateTax)}</span>
                  </div>
                  <div className="flex justify-between items-center py-3 bg-[var(--color-gold)]/10 rounded-lg px-3 -mx-3">
                    <span className="font-semibold">Total taxes</span>
                    <span className="font-bold text-lg text-[var(--color-gold-dark)]">{formatCurrency(result.sCorp.totalTax)}</span>
                  </div>
                  <div className="text-center pt-2">
                    <span className="text-sm text-[var(--color-gray-500)]">Effective rate: </span>
                    <span className="font-semibold text-[var(--color-gold-dark)]">{formatPercent(result.sCorp.effectiveRate)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Insight */}
            {result.savings > 0 && (
              <div className="mt-6 p-5 bg-green-50 border border-green-200 rounded-xl">
                <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Why the savings?
                </h4>
                <p className="text-sm text-green-700">
                  As an S-Corp, you only pay FICA taxes (15.3%) on your {formatCurrency(result.reasonableSalary)} salary—not on 
                  the {formatCurrency(result.distributions)} in distributions. As a sole proprietor, you'd pay 15.3% 
                  self-employment tax on almost all of your {formatCurrency(netBusinessIncome)} net income.
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
