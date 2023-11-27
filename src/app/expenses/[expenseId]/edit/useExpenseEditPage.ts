import { useEffect } from "react";
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

  // TODO: Get rid of useEffect!
  useEffect(() => {
    if (expense?.id !== expenseId) {
      fetchExpense(expenseId);
    }
  }, [expenseId, fetchExpense, expense?.id]);

  const handleEditExpense = expense
    ? async (updatedExpense: IExpense) => {
        updateExpense({
          ...expense,
          ...updatedExpense,
        }).then(() => {
          push("/expenses");
        });
      }
    : () => {};

  const defaultValue = expense?.id === expenseId ? expense : undefined;

  return {
    defaultValue,
    error,
    handleEditExpense,
    isLoading,
  };
};
