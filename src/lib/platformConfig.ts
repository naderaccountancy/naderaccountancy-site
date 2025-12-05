/**
 * Content Creator Platform Configuration
 * 
 * Fee structures for major content creation platforms.
 * 
 * Fee Notes:
 * - OnlyFans: 20% platform fee on all earnings
 * - YouTube/AdSense: ~45% revenue share (creator keeps 55%)
 * - Twitch: ~50% on subscriptions (varies by partner level)
 * - TikTok: ~50% revenue share on Creator Fund/LIVE gifts
 * - Patreon: 8-12% depending on plan (using 12% for Pro plan)
 * 
 * These are simplified estimates. Actual fees may vary based on:
 * - Contract terms and partner levels
 * - Revenue source (ads vs subscriptions vs tips)
 * - Country and payment method
 * - Time of year and promotional periods
 * 
 * Last updated: 2024
 */

export interface PlatformConfig {
  id: string;
  name: string;
  feePercentage: number;
  description: string;
  icon: string; // Emoji for visual distinction
}

/**
 * Platform configurations with default fee percentages
 * Fee is expressed as a decimal (e.g., 0.20 = 20%)
 */
export const PLATFORMS: PlatformConfig[] = [
  {
    id: 'onlyfans',
    name: 'OnlyFans',
    feePercentage: 0.20,
    description: 'Standard 20% platform fee',
    icon: '💎',
  },
  {
    id: 'youtube',
    name: 'YouTube / AdSense',
    feePercentage: 0.45,
    description: 'YouTube takes ~45% of ad revenue',
    icon: '▶️',
  },
  {
    id: 'twitch',
    name: 'Twitch',
    feePercentage: 0.50,
    description: 'Standard 50/50 split on subs',
    icon: '🎮',
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    feePercentage: 0.50,
    description: '~50% on Creator Fund & LIVE',
    icon: '🎵',
  },
  {
    id: 'patreon',
    name: 'Patreon',
    feePercentage: 0.12,
    description: 'Pro plan 12% (8-12% varies)',
    icon: '🎨',
  },
  {
    id: 'custom',
    name: 'Custom / Other',
    feePercentage: 0,
    description: 'Enter your own fee percentage',
    icon: '⚙️',
  },
];

/**
 * Get platform configuration by ID
 * 
 * @param platformId - The platform identifier
 * @returns Platform config or undefined if not found
 */
export function getPlatformById(platformId: string): PlatformConfig | undefined {
  return PLATFORMS.find((p) => p.id === platformId);
}

/**
 * Get the fee percentage for a platform, with optional override
 * 
 * @param platformId - The platform identifier
 * @param overrideFee - Optional override fee (as decimal, e.g., 0.15 for 15%)
 * @returns The fee percentage to use
 */
export function getPlatformFee(platformId: string, overrideFee?: number): number {
  // If override is provided and valid, use it
  if (overrideFee !== undefined && overrideFee >= 0) {
    return overrideFee;
  }
  
  const platform = getPlatformById(platformId);
  return platform?.feePercentage ?? 0;
}

/**
 * Calculate net revenue after platform fee
 * 
 * @param grossRevenue - Gross revenue from the platform
 * @param platformId - The platform identifier
 * @param overrideFee - Optional override fee (as decimal)
 * @returns Net revenue after platform fee is deducted
 */
export function calculateNetRevenueAfterPlatformFee(
  grossRevenue: number,
  platformId: string,
  overrideFee?: number
): number {
  const feePercentage = getPlatformFee(platformId, overrideFee);
  const platformFeeAmount = grossRevenue * feePercentage;
  return grossRevenue - platformFeeAmount;
}

/**
 * Calculate the platform fee amount
 * 
 * @param grossRevenue - Gross revenue from the platform
 * @param platformId - The platform identifier  
 * @param overrideFee - Optional override fee (as decimal)
 * @returns The platform fee amount
 */
export function calculatePlatformFeeAmount(
  grossRevenue: number,
  platformId: string,
  overrideFee?: number
): number {
  const feePercentage = getPlatformFee(platformId, overrideFee);
  return grossRevenue * feePercentage;
}

