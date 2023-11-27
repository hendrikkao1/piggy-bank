import { useRouter } from "next/navigation";
import { IExpense } from "@/models/expense";
import { useExpense } from "@/hooks/useExpense";

export const useExpenseAddPage = () => {
  const { push } = useRouter();
  const { addExpense, isLoading, error } = useExpense();

  if (error) {
    throw error;
  }

  const handleAddExpense = (expense: IExpense) => {
    addExpense(expense).then(() => {
      push(`/expenses`);
    });
  };

  const defaultValue: Partial<IExpense> = {
    date: new Date(),
  };

  return {
    defaultValue,
    handleAddExpense,
    isLoading,
  };
};
