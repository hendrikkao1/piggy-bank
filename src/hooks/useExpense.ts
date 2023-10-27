import { useExpenseStore, actions } from "@/store/useExpenseStore";

export const useExpense = () => {
  const state = useExpenseStore();

  return {
    ...state,
    ...actions,
  };
};
