/**
 * Recommendation Engine for Content Creator Tax Calculator
 * 
 * A rule-based engine that analyzes user inputs and calculation results
 * to generate actionable, educational tax recommendations.
 * 
 * IMPORTANT: These are general educational suggestions, not individualized tax advice.
 * 
 * To add new rules:
 * 1. Add a new function that returns a Recommendation or null
 * 2. Add the function to the RECOMMENDATION_RULES array
 * 3. Ensure the rule checks appropriate conditions before returning a recommendation
 */

import type { FilingStatus } from './taxBrackets';

/* ===========================================
   TYPES AND INTERFACES
   =========================================== */

/**
 * Impact level for recommendations
 * - High impact: Significant potential tax savings or critical compliance item
 * - Medium impact: Worthwhile optimization or planning opportunity
 * - Foundational: Basic best practices everyone should follow
 */
export type ImpactLevel = 'High impact' | 'Medium impact' | 'Foundational';

/**
 * Category for grouping recommendations
 */
export type RecommendationCategory = 
  | 'Immediate action items' 
  | 'Planning opportunities' 
  | 'Long-term strategy';

/**
 * A single recommendation with all display information
 */
export interface Recommendation {
  id: string;
  title: string;
  explanation: string;
  impact: ImpactLevel;
  category: RecommendationCategory;
  priority: number; // Lower = higher priority (for sorting)
}

/**
 * Input data for the recommendation engine
 * Combines form inputs and calculation results
 */
export interface RecommendationInput {
  // Form inputs
  platformId: string;
  platformName: string;
  grossRevenue: number;
  filingStatus: FilingStatus;
  otherIncome: number;
  state: string;
  
  // Calculation results
  platformFeeAmount: number;
  netRevenueBeforeTax: number;
  federalTax: number;
  stateTax: number;
  totalTax: number;
  afterTaxIncome: number;
  effectiveTaxRate: number; // As decimal (e.g., 0.25 for 25%)
  stateRate: number; // As decimal
}

/**
 * Type for a recommendation rule function
 */
type RecommendationRule = (input: RecommendationInput) => Recommendation | null;

/* ===========================================
   HELPER FUNCTIONS
   =========================================== */

/**
 * Formats currency for display in recommendations
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
 * Formats percentage for display
 */
function formatPercent(decimal: number): string {
  return `${Math.round(decimal * 100)}%`;
}

/**
 * Check if state is a high-tax state (roughly > 8% top rate)
 */
function isHighTaxState(state: string): boolean {
  const highTaxStates = [
    'California', 'New York', 'New Jersey', 'Oregon', 
    'Minnesota', 'District of Columbia', 'Hawaii', 
    'Vermont', 'Massachusetts', 'Wisconsin'
  ];
  return highTaxStates.includes(state);
}

/**
 * Check if state has no income tax
 */
function isNoIncomeTaxState(state: string): boolean {
  const noTaxStates = [
    'Alaska', 'Florida', 'Nevada', 'New Hampshire',
    'South Dakota', 'Tennessee', 'Texas', 'Washington', 'Wyoming'
  ];
  return noTaxStates.includes(state);
}

/* ===========================================
   RECOMMENDATION RULES
   
   Each rule function evaluates the input and returns
   a Recommendation if applicable, or null if not.
   =========================================== */

/**
 * Rule: Business structure for modest income
 * Triggers when creator income is under ~$50k
 */
const ruleBusinessStructureModest: RecommendationRule = (input) => {
  if (input.netRevenueBeforeTax > 0 && input.netRevenueBeforeTax < 50000) {
    return {
      id: 'business-structure-modest',
      title: 'Treat Your Creator Activity as a Business',
      explanation: `With ${formatCurrency(input.netRevenueBeforeTax)} in net creator income, make sure to treat this as a legitimate business—not a hobby. Track all ordinary and necessary expenses, maintain records, and report income properly. This establishes a foundation for deductions and positions you well as income grows.`,
      impact: 'Foundational',
      category: 'Immediate action items',
      priority: 10,
    };
  }
  return null;
};

/**
 * Rule: S-Corp consideration for higher income
 * Triggers when creator income exceeds ~$60-80k
 */
const ruleBusinessStructureSCorp: RecommendationRule = (input) => {
  if (input.netRevenueBeforeTax >= 60000) {
    const savingsEstimate = Math.round(input.netRevenueBeforeTax * 0.0765 * 0.5); // Rough SE tax savings estimate
    return {
      id: 'business-structure-scorp',
      title: 'Consider S-Corporation Election',
      explanation: `At ${formatCurrency(input.netRevenueBeforeTax)} in net creator income, an S-Corp election could potentially save you thousands in self-employment taxes—possibly ${formatCurrency(savingsEstimate)}+ annually. This strategy requires paying yourself a reasonable salary and involves additional compliance costs, so discuss the tradeoffs with a tax professional.`,
      impact: 'High impact',
      category: 'Planning opportunities',
      priority: 1,
    };
  }
  return null;
};

/**
 * Rule: Quarterly estimated tax payments
 * Triggers when effective tax rate > 25% or significant income
 */
const ruleEstimatedPayments: RecommendationRule = (input) => {
  const totalIncome = input.otherIncome + input.netRevenueBeforeTax;
  const shouldRecommend = input.effectiveTaxRate > 0.25 || input.netRevenueBeforeTax > 40000;
  
  if (shouldRecommend && input.netRevenueBeforeTax > 0) {
    // Calculate suggested tax set-aside percentage (effective rate + ~15% SE tax estimate)
    const suggestedSetAside = Math.min(0.40, input.effectiveTaxRate + 0.15);
    const lowerPercent = Math.round(suggestedSetAside * 100) - 5;
    const upperPercent = Math.round(suggestedSetAside * 100) + 5;
    
    return {
      id: 'estimated-payments',
      title: 'Make Quarterly Estimated Tax Payments',
      explanation: `With ${formatCurrency(totalIncome)} in total projected income and an effective tax rate around ${formatPercent(input.effectiveTaxRate)}, you likely need to make quarterly estimated payments to avoid underpayment penalties. Consider setting aside ${lowerPercent}–${upperPercent}% of your net creator income into a separate "tax savings" account each month.`,
      impact: 'High impact',
      category: 'Immediate action items',
      priority: 2,
    };
  }
  return null;
};

/**
 * Rule: Tax savings account
 * Simpler version for lower income creators
 */
const ruleTaxSavingsAccount: RecommendationRule = (input) => {
  // Only show if estimated payments rule doesn't trigger
  const estimatedPaymentsWouldTrigger = input.effectiveTaxRate > 0.25 || input.netRevenueBeforeTax > 40000;
  
  if (!estimatedPaymentsWouldTrigger && input.netRevenueBeforeTax > 10000) {
    return {
      id: 'tax-savings-account',
      title: 'Set Aside Money for Taxes',
      explanation: `Even at ${formatCurrency(input.netRevenueBeforeTax)} in creator income, taxes can sneak up on you. Consider opening a separate savings account and transferring 20–30% of each payout for taxes. This prevents a surprise bill at tax time.`,
      impact: 'Medium impact',
      category: 'Immediate action items',
      priority: 15,
    };
  }
  return null;
};

/**
 * Rule: Equipment and software deductions
 * Always recommend for active creators
 */
const ruleEquipmentDeductions: RecommendationRule = (input) => {
  if (input.netRevenueBeforeTax > 0) {
    return {
      id: 'equipment-deductions',
      title: 'Track Equipment & Software Expenses',
      explanation: `Deduct business equipment like cameras, lighting, microphones, computers, and editing software. If you purchased items this year, you may be able to deduct the full cost under Section 179 or bonus depreciation. Keep receipts and document how each item is used for your ${input.platformName} content.`,
      impact: 'Medium impact',
      category: 'Immediate action items',
      priority: 20,
    };
  }
  return null;
};

/**
 * Rule: Home office and utility deductions
 */
const ruleHomeOffice: RecommendationRule = (input) => {
  if (input.netRevenueBeforeTax > 5000) {
    return {
      id: 'home-office',
      title: 'Consider the Home Office Deduction',
      explanation: `If you use a dedicated space in your home regularly and exclusively for creating content, you may qualify for the home office deduction. You can also deduct a portion of internet and phone costs used for business. The simplified method allows $5 per square foot (up to 300 sq ft).`,
      impact: 'Medium impact',
      category: 'Planning opportunities',
      priority: 25,
    };
  }
  return null;
};

/**
 * Rule: Business bank account and bookkeeping
 */
const ruleBookkeeping: RecommendationRule = (input) => {
  if (input.netRevenueBeforeTax > 0) {
    return {
      id: 'bookkeeping',
      title: 'Separate Business & Personal Finances',
      explanation: `Open a dedicated business bank account and credit card for your creator income and expenses. Use bookkeeping software (like Wave, QuickBooks, or a simple spreadsheet) to categorize transactions. This makes tax time easier and provides clear documentation if ever audited.`,
      impact: 'Foundational',
      category: 'Immediate action items',
      priority: 12,
    };
  }
  return null;
};

/**
 * Rule: Retirement account contributions (SEP IRA / Solo 401k)
 * Triggers when income exceeds ~$30k
 */
const ruleRetirementAccounts: RecommendationRule = (input) => {
  if (input.netRevenueBeforeTax >= 30000) {
    // SEP IRA allows up to 25% of net self-employment income (roughly 20% of net profit)
    const maxSepContribution = Math.min(69000, input.netRevenueBeforeTax * 0.20);
    const taxSavings = Math.round(maxSepContribution * (input.effectiveTaxRate + 0.15)); // Include SE tax estimate
    
    return {
      id: 'retirement-accounts',
      title: 'Open a SEP IRA or Solo 401(k)',
      explanation: `With ${formatCurrency(input.netRevenueBeforeTax)} in net creator income, you could contribute up to ${formatCurrency(maxSepContribution)} to a SEP IRA this year—reducing your taxable income while building retirement savings. A Solo 401(k) offers even higher limits. This could save you roughly ${formatCurrency(taxSavings)} in taxes.`,
      impact: 'High impact',
      category: 'Long-term strategy',
      priority: 5,
    };
  }
  return null;
};

/**
 * Rule: Retirement starter for lower income
 */
const ruleRetirementStarter: RecommendationRule = (input) => {
  // Only show if main retirement rule doesn't trigger
  if (input.netRevenueBeforeTax > 10000 && input.netRevenueBeforeTax < 30000) {
    return {
      id: 'retirement-starter',
      title: 'Start Retirement Savings Early',
      explanation: `Even with ${formatCurrency(input.netRevenueBeforeTax)} in creator income, consider contributing to a Traditional IRA (up to $7,000 in 2024) to reduce taxable income, or a Roth IRA to grow tax-free. Starting early harnesses compound growth—your future self will thank you.`,
      impact: 'Medium impact',
      category: 'Long-term strategy',
      priority: 30,
    };
  }
  return null;
};

/**
 * Rule: High-tax state planning
 */
const ruleHighTaxState: RecommendationRule = (input) => {
  if (isHighTaxState(input.state) && input.netRevenueBeforeTax > 20000) {
    return {
      id: 'high-tax-state',
      title: `Tax Planning in ${input.state}`,
      explanation: `${input.state} has one of the higher state income tax rates (${formatPercent(input.stateRate)}). Combined with federal taxes, careful planning is especially important. Make sure you're maximizing deductions, making timely estimated payments, and keeping meticulous records. State residency can significantly affect your overall tax burden.`,
      impact: 'Medium impact',
      category: 'Planning opportunities',
      priority: 22,
    };
  }
  return null;
};

/**
 * Rule: No income tax state context
 */
const ruleNoTaxState: RecommendationRule = (input) => {
  if (isNoIncomeTaxState(input.state) && input.netRevenueBeforeTax > 20000) {
    return {
      id: 'no-tax-state',
      title: 'Federal Tax Remains Your Primary Focus',
      explanation: `${input.state} has no state income tax, which simplifies your situation. However, federal income tax and self-employment tax are still significant—estimated at ${formatCurrency(input.federalTax + input.netRevenueBeforeTax * 0.15)} on your creator income. Focus your planning efforts on federal strategies like retirement contributions and business deductions.`,
      impact: 'Foundational',
      category: 'Planning opportunities',
      priority: 35,
    };
  }
  return null;
};

/**
 * Rule: Documentation and compliance
 * Always important
 */
const ruleDocumentation: RecommendationRule = (input) => {
  if (input.netRevenueBeforeTax > 0) {
    return {
      id: 'documentation',
      title: 'Keep Thorough Records & Documentation',
      explanation: `Save all 1099s, platform payout reports, and bank statements. Reconcile your ${input.platformName} payouts to actual bank deposits monthly. Keep receipts for all business expenses and document the business purpose. Good records are your best defense in an audit and make tax filing much easier.`,
      impact: 'Foundational',
      category: 'Immediate action items',
      priority: 18,
    };
  }
  return null;
};

/**
 * Rule: Platform-specific 1099 reminder
 */
const rulePlatform1099: RecommendationRule = (input) => {
  if (input.grossRevenue >= 600) {
    return {
      id: 'platform-1099',
      title: `Expect a 1099 from ${input.platformName}`,
      explanation: `With ${formatCurrency(input.grossRevenue)} in gross revenue, ${input.platformName} will report your earnings to the IRS on Form 1099-NEC or 1099-K. Make sure the amount matches your records. Even if you don't receive a 1099, all income must be reported—the IRS receives copies too.`,
      impact: 'Foundational',
      category: 'Immediate action items',
      priority: 16,
    };
  }
  return null;
};

/**
 * Rule: Seek professional help for complex situations
 */
const ruleProfessionalHelp: RecommendationRule = (input) => {
  const totalIncome = input.otherIncome + input.netRevenueBeforeTax;
  const shouldRecommend = totalIncome > 100000 || 
    input.effectiveTaxRate > 0.30 || 
    input.netRevenueBeforeTax > 75000;
  
  if (shouldRecommend) {
    return {
      id: 'professional-help',
      title: 'Consult a Tax Professional',
      explanation: `With ${formatCurrency(totalIncome)} in combined income and complex creator earnings, working with a CPA or tax advisor experienced with content creators is highly recommended. They can help optimize your structure, identify deductions you might miss, and ensure compliance—often saving more than their fee.`,
      impact: 'High impact',
      category: 'Immediate action items',
      priority: 3,
    };
  }
  return null;
};

/**
 * Rule: Professional help suggestion for moderate income
 */
const ruleProfessionalHelpModerate: RecommendationRule = (input) => {
  const totalIncome = input.otherIncome + input.netRevenueBeforeTax;
  // Only show if main professional help rule doesn't trigger
  const mainRuleWouldTrigger = totalIncome > 100000 || 
    input.effectiveTaxRate > 0.30 || 
    input.netRevenueBeforeTax > 75000;
  
  if (!mainRuleWouldTrigger && input.netRevenueBeforeTax > 25000) {
    return {
      id: 'professional-help-moderate',
      title: 'Consider Professional Tax Help',
      explanation: `As your creator income grows, a tax professional can help you make strategic decisions—like whether to form an LLC, elect S-Corp status, or set up retirement accounts. Even a one-time consultation can provide a roadmap for tax-efficient growth.`,
      impact: 'Medium impact',
      category: 'Planning opportunities',
      priority: 28,
    };
  }
  return null;
};

/**
 * Rule: Self-employment tax awareness
 */
const ruleSelfEmploymentTax: RecommendationRule = (input) => {
  if (input.netRevenueBeforeTax > 1000) {
    const estimatedSETax = Math.round(input.netRevenueBeforeTax * 0.9235 * 0.153);
    return {
      id: 'self-employment-tax',
      title: 'Don\'t Forget Self-Employment Tax',
      explanation: `This calculator shows income tax, but as a self-employed creator you also owe self-employment tax (Social Security + Medicare) of about 15.3% on net earnings. On ${formatCurrency(input.netRevenueBeforeTax)}, that's roughly ${formatCurrency(estimatedSETax)} additional tax. Factor this into your tax savings and quarterly payments.`,
      impact: 'High impact',
      category: 'Immediate action items',
      priority: 4,
    };
  }
  return null;
};

/**
 * Rule: Health insurance deduction
 */
const ruleHealthInsurance: RecommendationRule = (input) => {
  if (input.netRevenueBeforeTax > 30000 && input.filingStatus !== 'married_jointly') {
    return {
      id: 'health-insurance',
      title: 'Deduct Health Insurance Premiums',
      explanation: `If you pay for your own health insurance and aren't eligible for employer coverage, you can deduct 100% of premiums as a self-employed health insurance deduction. This reduces both income tax and self-employment tax calculations. Keep records of all premium payments.`,
      impact: 'Medium impact',
      category: 'Planning opportunities',
      priority: 24,
    };
  }
  return null;
};

/* ===========================================
   RULE ENGINE
   =========================================== */

/**
 * Array of all recommendation rules
 * Add new rules here to include them in the engine
 */
const RECOMMENDATION_RULES: RecommendationRule[] = [
  ruleBusinessStructureModest,
  ruleBusinessStructureSCorp,
  ruleEstimatedPayments,
  ruleTaxSavingsAccount,
  ruleSelfEmploymentTax,
  ruleEquipmentDeductions,
  ruleHomeOffice,
  ruleBookkeeping,
  ruleRetirementAccounts,
  ruleRetirementStarter,
  ruleHighTaxState,
  ruleNoTaxState,
  ruleDocumentation,
  rulePlatform1099,
  ruleProfessionalHelp,
  ruleProfessionalHelpModerate,
  ruleHealthInsurance,
];

/**
 * Generate recommendations based on user inputs and calculations
 * 
 * @param input - Combined form inputs and calculation results
 * @returns Array of recommendations sorted by priority
 */
export function generateRecommendations(input: RecommendationInput): Recommendation[] {
  // Run all rules and collect non-null results
  const recommendations: Recommendation[] = [];
  
  for (const rule of RECOMMENDATION_RULES) {
    const result = rule(input);
    if (result !== null) {
      recommendations.push(result);
    }
  }
  
  // Sort by priority (lower number = higher priority)
  recommendations.sort((a, b) => a.priority - b.priority);
  
  // Limit to 8 recommendations to avoid overwhelming the user
  return recommendations.slice(0, 8);
}

/**
 * Group recommendations by category for display
 * 
 * @param recommendations - Array of recommendations
 * @returns Object with recommendations grouped by category
 */
export function groupRecommendationsByCategory(
  recommendations: Recommendation[]
): Record<RecommendationCategory, Recommendation[]> {
  const grouped: Record<RecommendationCategory, Recommendation[]> = {
    'Immediate action items': [],
    'Planning opportunities': [],
    'Long-term strategy': [],
  };
  
  for (const rec of recommendations) {
    grouped[rec.category].push(rec);
  }
  
  return grouped;
}

/**
 * Get the CSS class for an impact level badge
 */
export function getImpactBadgeClass(impact: ImpactLevel): string {
  switch (impact) {
    case 'High impact':
      return 'bg-green-100 text-green-800';
    case 'Medium impact':
      return 'bg-blue-100 text-blue-800';
    case 'Foundational':
      return 'bg-gray-100 text-gray-700';
    default:
      return 'bg-gray-100 text-gray-700';
  }
}

