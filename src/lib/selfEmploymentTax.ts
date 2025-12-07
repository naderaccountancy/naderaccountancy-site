/**
 * Self-Employment Tax Calculations for 2024
 * 
 * Self-employed individuals (including content creators) pay self-employment tax
 * which covers both the employer and employee portions of Social Security and Medicare.
 * 
 * Components:
 * 1. Social Security Tax: 12.4% (up to wage base limit)
 * 2. Medicare Tax: 2.9% (on all earnings)
 * 3. Additional Medicare Tax: 0.9% (on earnings above threshold)
 * 
 * Important Notes:
 * - SE tax is calculated on 92.35% of net self-employment income
 *   (this accounts for the deductible "employer half")
 * - Half of SE tax is deductible from income for income tax purposes
 * - The Additional Medicare Tax has different thresholds by filing status
 * 
 * Sources:
 * - IRS Publication 15 (Circular E)
 * - IRS Schedule SE instructions
 * - Social Security Administration wage base announcements
 * 
 * Last updated: 2024
 */

import type { FilingStatus } from './taxBrackets';

/* ===========================================
   2024 TAX CONSTANTS
   =========================================== */

/**
 * Social Security wage base for 2024
 * Earnings above this amount are not subject to Social Security tax
 */
export const SOCIAL_SECURITY_WAGE_BASE_2024 = 168600;

/**
 * Social Security tax rate (combined employer + employee)
 * 6.2% + 6.2% = 12.4%
 */
export const SOCIAL_SECURITY_RATE = 0.124;

/**
 * Medicare tax rate (combined employer + employee)
 * 1.45% + 1.45% = 2.9%
 */
export const MEDICARE_RATE = 0.029;

/**
 * Additional Medicare Tax rate for high earners
 * This is an additional 0.9% on top of the regular Medicare tax
 */
export const ADDITIONAL_MEDICARE_RATE = 0.009;

/**
 * Self-employment tax adjustment factor
 * SE tax is calculated on 92.35% of net earnings
 * This approximates the deduction for the "employer half" of SE tax
 */
export const SE_TAX_ADJUSTMENT_FACTOR = 0.9235;

/**
 * Total SE tax rate before wage base limits
 * 12.4% (Social Security) + 2.9% (Medicare) = 15.3%
 */
export const TOTAL_SE_TAX_RATE = SOCIAL_SECURITY_RATE + MEDICARE_RATE;

/**
 * Additional Medicare Tax thresholds by filing status
 * The 0.9% additional tax applies to wages/SE income above these amounts
 */
export const ADDITIONAL_MEDICARE_THRESHOLDS: Record<FilingStatus, number> = {
  single: 200000,
  married_jointly: 250000,
  married_separately: 125000,
  head_of_household: 200000,
};

/* ===========================================
   CALCULATION INTERFACES
   =========================================== */

export interface SelfEmploymentTaxResult {
  /** Net self-employment income (before SE tax adjustment) */
  netSEIncome: number;
  
  /** Adjusted SE income (92.35% of net) used for tax calculation */
  adjustedSEIncome: number;
  
  /** Social Security tax amount */
  socialSecurityTax: number;
  
  /** Regular Medicare tax amount (2.9%) */
  medicareTax: number;
  
  /** Additional Medicare tax amount (0.9% on high earners) */
  additionalMedicareTax: number;
  
  /** Total self-employment tax */
  totalSETax: number;
  
  /** Deductible portion of SE tax (half) - reduces AGI */
  deductibleSETax: number;
  
  /** Income subject to Social Security tax (capped at wage base) */
  socialSecurityTaxableIncome: number;
  
  /** Income subject to Additional Medicare Tax (above threshold) */
  additionalMedicareTaxableIncome: number;
}

/* ===========================================
   CALCULATION FUNCTIONS
   =========================================== */

/**
 * Calculate self-employment taxes on creator income
 * 
 * @param netCreatorIncome - Net creator income (after platform fees, before any taxes)
 * @param otherSEIncome - Other self-employment income (if any) - affects wage base calculation
 * @param otherW2Income - W-2 income (if any) - affects Social Security wage base and Additional Medicare threshold
 * @param filingStatus - Filing status for Additional Medicare Tax threshold
 * @returns Detailed breakdown of self-employment taxes
 */
export function calculateSelfEmploymentTax(
  netCreatorIncome: number,
  otherSEIncome: number = 0,
  otherW2Income: number = 0,
  filingStatus: FilingStatus = 'single'
): SelfEmploymentTaxResult {
  // Total net self-employment income
  const netSEIncome = netCreatorIncome + otherSEIncome;
  
  // If no SE income, return zeros
  if (netSEIncome <= 0) {
    return {
      netSEIncome: 0,
      adjustedSEIncome: 0,
      socialSecurityTax: 0,
      medicareTax: 0,
      additionalMedicareTax: 0,
      totalSETax: 0,
      deductibleSETax: 0,
      socialSecurityTaxableIncome: 0,
      additionalMedicareTaxableIncome: 0,
    };
  }
  
  // Step 1: Calculate adjusted SE income (92.35% of net)
  const adjustedSEIncome = netSEIncome * SE_TAX_ADJUSTMENT_FACTOR;
  
  // Step 2: Calculate Social Security tax
  // W-2 wages reduce the remaining wage base available for SE income
  const remainingWageBase = Math.max(0, SOCIAL_SECURITY_WAGE_BASE_2024 - otherW2Income);
  const socialSecurityTaxableIncome = Math.min(adjustedSEIncome, remainingWageBase);
  const socialSecurityTax = socialSecurityTaxableIncome * SOCIAL_SECURITY_RATE;
  
  // Step 3: Calculate regular Medicare tax (no cap)
  const medicareTax = adjustedSEIncome * MEDICARE_RATE;
  
  // Step 4: Calculate Additional Medicare Tax (0.9% on income above threshold)
  // Combined wages + SE income are considered for the threshold
  const additionalMedicareThreshold = ADDITIONAL_MEDICARE_THRESHOLDS[filingStatus];
  const totalIncomeForAdditionalMedicare = otherW2Income + adjustedSEIncome;
  
  // Calculate how much SE income is above the threshold
  // If W-2 income already exceeds threshold, all SE income is subject to additional tax
  // If W-2 income is below threshold, only SE income above (threshold - W2) is subject
  let additionalMedicareTaxableIncome = 0;
  if (totalIncomeForAdditionalMedicare > additionalMedicareThreshold) {
    // The portion of SE income above the threshold (accounting for W-2 that already used up some threshold)
    const thresholdRemainingAfterW2 = Math.max(0, additionalMedicareThreshold - otherW2Income);
    additionalMedicareTaxableIncome = Math.max(0, adjustedSEIncome - thresholdRemainingAfterW2);
  }
  const additionalMedicareTax = additionalMedicareTaxableIncome * ADDITIONAL_MEDICARE_RATE;
  
  // Step 5: Calculate totals
  const totalSETax = socialSecurityTax + medicareTax + additionalMedicareTax;
  
  // Half of SE tax (excluding Additional Medicare Tax) is deductible
  // Note: Additional Medicare Tax is NOT deductible
  const deductibleSETax = (socialSecurityTax + medicareTax) / 2;
  
  return {
    netSEIncome,
    adjustedSEIncome,
    socialSecurityTax,
    medicareTax,
    additionalMedicareTax,
    totalSETax,
    deductibleSETax,
    socialSecurityTaxableIncome,
    additionalMedicareTaxableIncome,
  };
}

/**
 * Calculate only the SE tax attributable to creator income
 * (When there's other SE income, we need to calculate incrementally)
 * 
 * @param netCreatorIncome - Net creator income
 * @param otherSEIncome - Other self-employment income
 * @param otherW2Income - W-2 income
 * @param filingStatus - Filing status
 * @returns SE tax breakdown for just the creator income
 */
export function calculateCreatorSETax(
  netCreatorIncome: number,
  otherSEIncome: number = 0,
  otherW2Income: number = 0,
  filingStatus: FilingStatus = 'single'
): SelfEmploymentTaxResult {
  // Calculate tax with and without creator income to get incremental tax
  const taxWithCreator = calculateSelfEmploymentTax(
    netCreatorIncome,
    otherSEIncome,
    otherW2Income,
    filingStatus
  );
  
  // If no other SE income, the full tax is attributable to creator income
  if (otherSEIncome <= 0) {
    return taxWithCreator;
  }
  
  // Calculate tax without creator income
  const taxWithoutCreator = calculateSelfEmploymentTax(
    0,
    otherSEIncome,
    otherW2Income,
    filingStatus
  );
  
  // The difference is the tax attributable to creator income
  return {
    netSEIncome: netCreatorIncome,
    adjustedSEIncome: netCreatorIncome * SE_TAX_ADJUSTMENT_FACTOR,
    socialSecurityTax: taxWithCreator.socialSecurityTax - taxWithoutCreator.socialSecurityTax,
    medicareTax: taxWithCreator.medicareTax - taxWithoutCreator.medicareTax,
    additionalMedicareTax: taxWithCreator.additionalMedicareTax - taxWithoutCreator.additionalMedicareTax,
    totalSETax: taxWithCreator.totalSETax - taxWithoutCreator.totalSETax,
    deductibleSETax: taxWithCreator.deductibleSETax - taxWithoutCreator.deductibleSETax,
    socialSecurityTaxableIncome: taxWithCreator.socialSecurityTaxableIncome - taxWithoutCreator.socialSecurityTaxableIncome,
    additionalMedicareTaxableIncome: taxWithCreator.additionalMedicareTaxableIncome - taxWithoutCreator.additionalMedicareTaxableIncome,
  };
}

/**
 * Get a simple estimate of SE tax rate for display purposes
 * 
 * @param netIncome - Net self-employment income
 * @param filingStatus - Filing status
 * @returns Effective SE tax rate as a decimal
 */
export function getEffectiveSETaxRate(
  netIncome: number,
  filingStatus: FilingStatus = 'single'
): number {
  if (netIncome <= 0) return 0;
  
  const result = calculateSelfEmploymentTax(netIncome, 0, 0, filingStatus);
  return result.totalSETax / netIncome;
}

