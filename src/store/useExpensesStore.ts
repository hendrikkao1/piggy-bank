import { createWithEqualityFn } from "zustand/traditional";
import { IExpense } from "@/models/expense";
import api from "@/lib/api";

interface IExpensesStoreState {
  error: Error | undefined;
  expenses: IExpense[] | undefined;
  isLoading: boolean;
  pagination: {
    page: number;
    pageSize: number;
    numberOfPages: number;
  };
}

const initialState: IExpensesStoreState = {
  // TODO: Can it be a separate slice?
  // https://github.com/pmndrs/zustand/blob/main/docs/guides/slices-pattern.md
  error: undefined,
  expenses: undefined,
  // TODO: Can it be a separate slice?
  // https://github.com/pmndrs/zustand/blob/main/docs/guides/slices-pattern.md
  isLoading: false,
  // TODO: Can it be a separate slice?
  // https://github.com/pmndrs/zustand/blob/main/docs/guides/slices-pattern.md
  pagination: {
    page: 1,
    pageSize: Number.parseInt(
      process.env.NEXT_PUBLIC_EXPENSES_PER_PAGE ?? "10",
    ),
    numberOfPages: 0,
  },
};

export const useExpensesStore = createWithEqualityFn<IExpensesStoreState>(
  () => initialState,
);

const fetchExpenses = (page: number) => {
  const { setState, getState } = useExpensesStore;
  const {
    pagination: { pageSize },
  } = getState();

  setState(() => ({ isLoading: true }));

  return (
    api
      // `page` is 1-based, but `skip` is 0-based
      .readExpenses((page - 1) * pageSize, pageSize)
      .then((res) =>
        setState((state) => ({
          expenses: [...res.data.expenses],
          pagination: {
            ...state.pagination,
            numberOfPages: Math.ceil(res.data.totalCount / pageSize),
            page,
          },
        })),
      )
      .catch((err) => setState(() => ({ error: err })))
      .finally(() => setState(() => ({ isLoading: false })))
  );
};

const resetExpenses = () => useExpensesStore.setState(initialState);

export const actions = {
  fetchExpenses,
  resetExpenses,
};
