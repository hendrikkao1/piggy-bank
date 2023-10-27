import { act, renderHook, waitFor } from "@/test-utils";
import { IExpense } from "@/models/expense";
import { useExpensesStore, actions } from "./useExpensesStore";
import api from "@/lib/api";

jest.mock("../lib/api", () => ({
  ...jest.requireActual("../lib/api"),
  readExpenses: jest.fn(),
}));

const mockApi = api as jest.Mocked<typeof api>;

describe("useExpensesStore", () => {
  it("returns default values", () => {
    const { result } = renderHook(() => useExpensesStore());

    expect(result.current).toStrictEqual({
      error: undefined,
      expenses: undefined,
      isLoading: false,
      pagination: {
        numberOfPages: 0,
        page: 1,
        pageSize: 10,
      },
    });
  });

  it("sets fetched value", async () => {
    const { result } = renderHook(() => useExpensesStore());

    const expenses = [
      {
        recipient: "fetch",
      },
    ] as IExpense[];

    mockApi.readExpenses.mockResolvedValue({
      data: {
        expenses,
        totalCount: 1,
      },
    });

    act(() => {
      actions.fetchExpenses(0);
    });

    await waitFor(() => {
      expect(result.current.expenses).toStrictEqual(expenses);
    });
  });

  describe("pagination", () => {
    it("sets `numberOfPages` based on the number of expenses", async () => {
      const { result } = renderHook(() => useExpensesStore());

      const expenses = [
        {
          recipient: "fetch",
        },
      ] as IExpense[];

      mockApi.readExpenses.mockResolvedValue({
        data: {
          expenses,
          totalCount: 11,
        },
      });

      act(() => {
        actions.fetchExpenses(0);
      });

      await waitFor(() => {
        expect(result.current.pagination.numberOfPages).toBe(1);
      });
    });
  });
});
