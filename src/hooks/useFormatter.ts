import Big from "big.js";

export const useFormatter = () => {
  const formatAmount = (value: Big) => value.toFixed(2);

  const formatCurrency = (value: Big, currency: string) =>
    formatAmount(value) + " " + currency;

  const formatDateTime = (date: Date) =>
    new Intl.DateTimeFormat("en-US").format(date);

  return {
    formatAmount,
    formatCurrency,
    formatDateTime,
  };
};
