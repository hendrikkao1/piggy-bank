import { createWithEqualityFn } from "zustand/traditional";
import { IExpense } from "@/models/expense";
import api from "@/lib/api";

interface IExpenseStoreState {
  error: Error | undefined;
  expense: IExpense | undefined;
  isLoading: boolean;
}

const initialState: IExpenseStoreState = {
  // TODO: Can it be a separate slice?
  // https://github.com/pmndrs/zustand/blob/main/docs/guides/slices-pattern.md
  error: undefined,
  expense: undefined,
  // TODO: Can it be a separate slice?
  // https://github.com/pmndrs/zustand/blob/main/docs/guides/slices-pattern.md
  isLoading: false,
};

export const useExpenseStore = createWithEqualityFn<IExpenseStoreState>(
  () => initialState,
);

const fetchExpense = (id: string) => {
  const { setState: set } = useExpenseStore;

  set(() => ({ isLoading: true }));

  return api
    .readExpense(id)
    .then((res) =>
      set(() => ({
        expense: res.data.expense,
      })),
    )
    .catch((error) => set(() => ({ error })))
    .finally(() => set(() => ({ isLoading: false })));
};

const addExpense = (expense: IExpense) => {
  const { setState: set } = useExpenseStore;

  set(() => ({ isLoading: true }));

  return api
    .createExpense(expense)
    .then((res) =>
      set(() => ({
        expense: res.data.expense,
      })),
    )
    .catch((error) => set(() => ({ error })))
    .finally(() => set(() => ({ isLoading: false })));
};

const updateExpense = (expense: IExpense) => {
  const { setState: set } = useExpenseStore;

  set(() => ({ isLoading: true }));

  return api
    .updateExpense(expense)
    .then((res) =>
      set(() => ({
        expense: res.data.expense,
      })),
    )
    .catch((error) => set(() => ({ error })))
    .finally(() => set(() => ({ isLoading: false })));
};

const deleteExpense = (expense: IExpense) => {
  const { setState: set } = useExpenseStore;

  set(() => ({ isLoading: true }));

  return api
    .deleteExpense(expense.id)
    .then((res) =>
      set(() => ({
        expense: res.data.expense,
      })),
    )
    .catch((error) => set(() => ({ error })))
    .finally(() => set(() => ({ isLoading: false })));
};

const resetExpense = () => useExpenseStore.setState(initialState);

export const actions = {
  addExpense,
  deleteExpense,
  fetchExpense,
  updateExpense,
  resetExpense,
};
