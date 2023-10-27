import Big from "big.js";
import { useLocale } from "next-intl";

export const useFormatter = () => {
  const locale = useLocale();

  // TODO: Can we use next-intl formatter here?
  // https://next-intl-docs.vercel.app/docs/usage/numbers
  const formatAmount = (value: Big) => value.toFixed(2);

  const formatCurrency = (value: Big, currency: string) =>
    formatAmount(value) + " " + currency;

  const formatDateTime = (date: Date) =>
    new Intl.DateTimeFormat(locale).format(date);

  return {
    formatAmount,
    formatCurrency,
    formatDateTime,
  };
};
