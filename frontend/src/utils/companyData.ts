const formatEarnings = (incomes, expenses, currency) => {
  let earnings = incomes - expenses;
  let formattedEarnings;

  switch (currency) {
    case 'usd':
      formattedEarnings = `$${earnings.toFixed(2)}`;
      break;
    case 'euro':
      formattedEarnings = `€${earnings.toFixed(2)}`;
      break;
    case 'gbp':
      formattedEarnings = `£${earnings.toFixed(2)}`;
      break;
    default:
      formattedEarnings = `${earnings.toFixed(2)} ${company.currency.toUpperCase()}`;
  }

  return formattedEarnings;
};

export default formatEarnings;
