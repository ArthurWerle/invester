import DEFAULT_STRATEGY from '../config'

export function getStrategy() {
  try {
    const privateIncomeStrategy = process.env.NEXT_PUBLIC_PRIVATE_INCOME_STRATEGY
    const privateInvestmentsStrategy = process.env.NEXT_PUBLIC_PRIVATE_INVESTMENTS_STRATEGY
    if (privateIncomeStrategy && privateInvestmentsStrategy) {
      return {
        INCOME_STRATEGY: JSON.parse(privateIncomeStrategy),
        INVESTMENTS_STRATEGY: JSON.parse(privateInvestmentsStrategy),
      }
    }
  } catch (error) {
    console.warn('Failed to parse private strategy, falling back to default')
  }
  
  return DEFAULT_STRATEGY
}