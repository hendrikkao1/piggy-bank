import { useExpensesStore, actions } from "@/store/useExpensesStore";

export const useExpenses = () => {
  const state = useExpensesStore();

  return {
    ...state,
    ...actions,
  };
};
