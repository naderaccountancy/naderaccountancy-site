/**
 * State Income Tax Rates
 * 
 * Approximate effective marginal rates for prize income; update as needed.
 * 
 * These are simplified single marginal rates intended for quick estimates.
 * In reality, most states have progressive brackets similar to federal taxes.
 * 
 * To update these rates:
 * 1. Check each state's department of revenue for current rates
 * 2. For states with progressive brackets, use the top marginal rate
 *    or an approximate effective rate for high-income scenarios
 * 3. States with 0.0 have no state income tax
 * 
 * Last updated: 2024
 * 
 * Note: Some states (like California, New York) have additional brackets
 * for very high incomes that may apply to large prizes.
 */

// Approximate effective marginal rates for prize income; update as needed.
export const STATE_TAX_RATES: Record<string, number> = {
  // No income tax states
  'Alaska': 0.0,
  'Florida': 0.0,
  'Nevada': 0.0,
  'New Hampshire': 0.0, // No tax on wages/ordinary income; only interest & dividends
  'South Dakota': 0.0,
  'Tennessee': 0.0, // No tax on wages/ordinary income
  'Texas': 0.0,
  'Washington': 0.0, // No personal income tax (has capital gains tax)
  'Wyoming': 0.0,

  // Flat tax states
  'Arizona': 0.025,
  'Colorado': 0.044,
  'Georgia': 0.0549,
  'Idaho': 0.058,
  'Illinois': 0.0495,
  'Indiana': 0.0305,
  'Iowa': 0.057,
  'Kentucky': 0.04,
  'Michigan': 0.0425,
  'Mississippi': 0.05,
  'North Carolina': 0.0525,
  'Pennsylvania': 0.0307,
  'Utah': 0.0465,

  // Progressive tax states (top marginal rates shown)
  'Alabama': 0.05,
  'Arkansas': 0.044,
  'California': 0.133, // Top rate; very high for large prizes
  'Connecticut': 0.0699,
  'Delaware': 0.066,
  'District of Columbia': 0.1075,
  'Hawaii': 0.11,
  'Kansas': 0.057,
  'Louisiana': 0.0425,
  'Maine': 0.0715,
  'Maryland': 0.0575,
  'Massachusetts': 0.09, // 5% standard + 4% millionaire tax
  'Minnesota': 0.0985,
  'Missouri': 0.048,
  'Montana': 0.059,
  'Nebraska': 0.0584,
  'New Jersey': 0.1075,
  'New Mexico': 0.059,
  'New York': 0.109, // NYC residents may owe additional local tax
  'North Dakota': 0.025,
  'Ohio': 0.0399,
  'Oklahoma': 0.0475,
  'Oregon': 0.099,
  'Rhode Island': 0.0599,
  'South Carolina': 0.064,
  'Vermont': 0.0875,
  'Virginia': 0.0575,
  'West Virginia': 0.055,
  'Wisconsin': 0.0765,
};

/**
 * List of all U.S. states and DC, sorted alphabetically
 * Use this for populating dropdown menus
 */
export const US_STATES: string[] = Object.keys(STATE_TAX_RATES).sort();

/**
 * Gets the state tax rate, with optional override
 * 
 * @param state - The state name
 * @param overrideRate - Optional override rate (as decimal, e.g., 0.05 for 5%)
 * @returns The tax rate to use (override if provided, otherwise default)
 */
export function getStateTaxRate(state: string, overrideRate?: number): number {
  if (overrideRate !== undefined && overrideRate >= 0) {
    return overrideRate;
  }
  return STATE_TAX_RATES[state] ?? 0;
}

/**
 * Calculates state income tax on the prize
 * 
 * This uses a simple flat rate calculation.
 * In reality, most states have progressive brackets, but for quick estimates
 * using the marginal rate on the full prize amount is reasonable for large prizes
 * that would be taxed mostly at the top marginal rate.
 * 
 * @param prizeAmount - The prize amount won
 * @param state - The state of residence
 * @param overrideRate - Optional override rate (as decimal)
 * @returns State tax on the prize
 */
export function calculateStateTaxOnPrize(
  prizeAmount: number,
  state: string,
  overrideRate?: number
): number {
  const rate = getStateTaxRate(state, overrideRate);
  return prizeAmount * rate;
}

