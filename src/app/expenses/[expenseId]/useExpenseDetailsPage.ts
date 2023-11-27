import { useEffect } from "react";
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
  const formatter = useFormatter();

  // TODO: Get rid of useEffect!
  useEffect(() => {
    if (expense?.id !== expenseId) {
      fetchExpense(expenseId);
    }
  }, [expenseId, fetchExpense, expense?.id]);

  const handleDeleteExpense = expense
    ? () => {
        deleteExpense(expense).then(() => {
          push(`/expenses`);
        });
      }
    : undefined;

  return {
    formatter,
    expense: expense?.id === expenseId ? expense : undefined,
    isLoading,
    error,
    handleDeleteExpense,
  };
};
