import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { IExpense } from "@/models/expense";
import { useExpense } from "@/hooks/useExpense";

interface UseExpenseEditPageOptions {
  expenseId: string;
}

export const useExpenseEditPage = ({
  expenseId,
}: UseExpenseEditPageOptions) => {
  const { push } = useRouter();
  const { fetchExpense, updateExpense, expense, error, isLoading } =
    useExpense();
  const t = useTranslations("ExpenseEditPage");

  useEffect(() => {
    if (expense?.id !== expenseId) {
      fetchExpense(expenseId);
    }
  }, [expenseId, fetchExpense, expense?.id]);

  const handleEditExpense = async (updatedExpense: IExpense) => {
    if (!expense) {
      return;
    }

    updateExpense({
      ...expense,
      ...updatedExpense,
    }).then(() => {
      push(`/expenses`);
    });
  };

  const defaultValue = expense?.id === expenseId ? expense : undefined;

  return {
    defaultValue,
    error,
    handleEditExpense,
    isLoading,
    t,
  };
};
