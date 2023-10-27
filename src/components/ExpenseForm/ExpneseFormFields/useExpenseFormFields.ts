import { useTranslations } from "next-intl";

export const useExpenseFormFields = () => {
  const t = useTranslations("ExpenseForm");

  return { t };
};
