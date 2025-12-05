/**
 * Federal Tax Brackets for 2024 Tax Year
 * 
 * These are the IRS ordinary income tax brackets.
 * To update for future years:
 * 1. Visit https://www.irs.gov/ for official bracket updates
 * 2. Update the threshold values in each filing status array
 * 3. Rates typically stay the same; thresholds are inflation-adjusted
 * 
 * Each bracket is defined as { maxIncome, rate }:
 * - maxIncome: The upper limit of income for this bracket (Infinity for top bracket)
 * - rate: The marginal tax rate as a decimal (e.g., 0.22 = 22%)
 */

export type FilingStatus = 
  | 'single'
  | 'married_jointly'
  | 'married_separately'
  | 'head_of_household';

export interface TaxBracket {
  maxIncome: number;
  rate: number;
}

// 2024 Federal Income Tax Brackets
// Source: IRS Revenue Procedure 2023-34
export const FEDERAL_TAX_BRACKETS: Record<FilingStatus, TaxBracket[]> = {
  single: [
    { maxIncome: 11600, rate: 0.10 },
    { maxIncome: 47150, rate: 0.12 },
    { maxIncome: 100525, rate: 0.22 },
    { maxIncome: 191950, rate: 0.24 },
    { maxIncome: 243725, rate: 0.32 },
    { maxIncome: 609350, rate: 0.35 },
    { maxIncome: Infinity, rate: 0.37 },
  ],
  married_jointly: [
    { maxIncome: 23200, rate: 0.10 },
    { maxIncome: 94300, rate: 0.12 },
    { maxIncome: 201050, rate: 0.22 },
    { maxIncome: 383900, rate: 0.24 },
    { maxIncome: 487450, rate: 0.32 },
    { maxIncome: 731200, rate: 0.35 },
    { maxIncome: Infinity, rate: 0.37 },
  ],
  married_separately: [
    { maxIncome: 11600, rate: 0.10 },
    { maxIncome: 47150, rate: 0.12 },
    { maxIncome: 100525, rate: 0.22 },
    { maxIncome: 191950, rate: 0.24 },
    { maxIncome: 243725, rate: 0.32 },
    { maxIncome: 365600, rate: 0.35 },
    { maxIncome: Infinity, rate: 0.37 },
  ],
  head_of_household: [
    { maxIncome: 16550, rate: 0.10 },
    { maxIncome: 63100, rate: 0.12 },
    { maxIncome: 100500, rate: 0.22 },
    { maxIncome: 191950, rate: 0.24 },
    { maxIncome: 243700, rate: 0.32 },
    { maxIncome: 609350, rate: 0.35 },
    { maxIncome: Infinity, rate: 0.37 },
  ],
};

/**
 * Calculates federal income tax using progressive bracket logic
 * 
 * How it works:
 * 1. Start with the lowest bracket
 * 2. For each bracket, calculate tax on income within that bracket
 * 3. Income in lower brackets is taxed at lower rates
 * 4. Only income above each threshold is taxed at higher rates
 * 
 * @param income - Total taxable income
 * @param filingStatus - The taxpayer's filing status
 * @returns Total federal tax owed
 */
export function calculateFederalTax(income: number, filingStatus: FilingStatus): number {
  if (income <= 0) return 0;

  const brackets = FEDERAL_TAX_BRACKETS[filingStatus];
  let tax = 0;
  let previousThreshold = 0;

  for (const bracket of brackets) {
    if (income <= previousThreshold) break;

    // Calculate the taxable amount within this bracket
    const taxableInBracket = Math.min(income, bracket.maxIncome) - previousThreshold;
    
    if (taxableInBracket > 0) {
      tax += taxableInBracket * bracket.rate;
    }

    previousThreshold = bracket.maxIncome;
  }

  return tax;
}

/**
 * Calculates the federal tax attributable specifically to prize income
 * 
 * This is done by computing:
 * 1. Total tax on (otherIncome + prizeAmount)
 * 2. Total tax on otherIncome alone
 * 3. The difference = tax attributable to the prize
 * 
 * This approach correctly handles the progressive nature of tax brackets,
 * showing how the prize "stacks on top" of existing income.
 * 
 * @param prizeAmount - The prize amount won
 * @param otherIncome - The taxpayer's other taxable income for the year
 * @param filingStatus - The taxpayer's filing status
 * @returns Federal tax attributable to the prize
 */
export function calculateFederalTaxOnPrize(
  prizeAmount: number,
  otherIncome: number,
  filingStatus: FilingStatus
): number {
  const taxWithPrize = calculateFederalTax(otherIncome + prizeAmount, filingStatus);
  const taxWithoutPrize = calculateFederalTax(otherIncome, filingStatus);
  return taxWithPrize - taxWithoutPrize;
}

/**
 * Gets the marginal federal tax rate for a given income level
 * 
 * @param income - Total taxable income
 * @param filingStatus - The taxpayer's filing status
 * @returns The marginal tax rate as a decimal
 */
export function getMarginalFederalRate(income: number, filingStatus: FilingStatus): number {
  const brackets = FEDERAL_TAX_BRACKETS[filingStatus];
  
  for (const bracket of brackets) {
    if (income <= bracket.maxIncome) {
      return bracket.rate;
    }
  }
  
  // Should never reach here, but return top rate as fallback
  return brackets[brackets.length - 1].rate;
}

