
export function formatCurrency(amount: number) {
  const amountAsCurrency = new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP',
    })
    .format(amount)
  return amountAsCurrency;
}

export function formatDate(value: string | number): string {
  const date = new Date(value);
  
  if (isNaN(date.getTime())) return 'Invalid Date';

  const timeWithoutAMPM = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  
  const formattedDate = date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  });

  return `${timeWithoutAMPM} - ${formattedDate}`;
}