
export function formatCurrency(amount: number) {
  const amountAsCurrency = new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
    })
    .format(amount)
  return amountAsCurrency;
}