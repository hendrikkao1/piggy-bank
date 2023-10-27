import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { useExpense } from "@/hooks/useExpense";
import { useFormatter } from "@/hooks/useFormatter";
import { useRouter } from "next/navigation";

interface UseExpensePageOptions {
  expenseId: string;
}

export const useExpenseDetailsPage = ({ expenseId }: UseExpensePageOptions) => {
  const { deleteExpense, error, expense, fetchExpense, isLoading } =
    useExpense();
  const { push } = useRouter();
  const t = useTranslations("ExpenseDetailsPage");
  const formatter = useFormatter();

  useEffect(() => {
    if (expense?.id !== expenseId) {
      fetchExpense(expenseId);
    }
  }, [expenseId, fetchExpense, expense?.id]);

  const handleDeleteExpense = () => {
    if (!expense) {
      return;
    }

    deleteExpense(expense).then(() => {
      push(`/expenses`);
    });
  };

  return {
    formatter,
    expense: expense?.id === expenseId ? expense : undefined,
    t,
    isLoading,
    error,
    handleDeleteExpense,
  };
};
