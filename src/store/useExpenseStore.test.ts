import { act, renderHook, waitFor } from "@/test-utils";
import { IExpense } from "@/models/expense";
import { useExpenseStore, actions } from "./useExpenseStore";
import api from "@/lib/api";

jest.mock("../lib/api", () => ({
  ...jest.requireActual("../lib/api"),
  createExpense: jest.fn(),
  readExpense: jest.fn(),
  updateExpense: jest.fn(),
  deleteExpense: jest.fn(),
  readExpenses: jest.fn(),
}));

const mockApi = api as jest.Mocked<typeof api>;

describe("useExpenseStore", () => {
  it("returns default values", () => {
    const { result } = renderHook(() => useExpenseStore());

    expect(result.current).toStrictEqual({
      error: undefined,
      expense: undefined,
      isLoading: false,
    });
  });

  describe("addExpense", () => {
    it("sets newly created value", async () => {
      const { result } = renderHook(() => useExpenseStore());

      const expense = {
        recipient: "add",
      } as IExpense;

      mockApi.createExpense.mockResolvedValue({
        data: {
          expense,
        },
      });

      act(() => {
        actions.addExpense(expense);
      });

      await waitFor(() => {
        expect(result.current.expense).toStrictEqual(expense);
      });
    });

    it("sets an error", async () => {
      const { result } = renderHook(() => useExpenseStore());

      const error = new Error("error");

      mockApi.createExpense.mockRejectedValue(error);

      act(() => {
        actions.addExpense({} as IExpense);
      });

      await waitFor(() => {
        expect(result.current.error).toStrictEqual(error);
      });
    });
  });

  describe("updateExpense", () => {
    it("sets updated value", async () => {
      const { result } = renderHook(() => useExpenseStore());

      const expense = {
        recipient: "update",
      } as IExpense;

      mockApi.updateExpense.mockResolvedValue({
        data: {
          expense,
        },
      });

      act(() => {
        actions.updateExpense(expense);
      });

      await waitFor(() => {
        expect(result.current.expense).toStrictEqual(expense);
      });
    });

    it("sets an error", async () => {
      const { result } = renderHook(() => useExpenseStore());

      const error = new Error("error");

      mockApi.updateExpense.mockRejectedValue(error);

      act(() => {
        actions.updateExpense({} as IExpense);
      });

      await waitFor(() => {
        expect(result.current.error).toStrictEqual(error);
      });
    });
  });

  describe("deleteExpense", () => {
    it("sets deleted value", async () => {
      const { result } = renderHook(() => useExpenseStore());

      const expense = {
        recipient: "delete",
      } as IExpense;

      mockApi.deleteExpense.mockResolvedValue({
        data: {
          expense,
        },
      });

      act(() => {
        actions.deleteExpense(expense);
      });

      await waitFor(() => {
        expect(result.current.expense).toStrictEqual(expense);
      });
    });

    it("sets an error", async () => {
      const { result } = renderHook(() => useExpenseStore());

      const error = new Error("error");

      mockApi.deleteExpense.mockRejectedValue(error);

      act(() => {
        actions.deleteExpense({} as IExpense);
      });

      await waitFor(() => {
        expect(result.current.error).toStrictEqual(error);
      });
    });
  });

  describe("fetchExpense", () => {
    it("sets fetched value", async () => {
      const { result } = renderHook(() => useExpenseStore());

      const expense = {
        recipient: "fetch",
      } as IExpense;

      mockApi.readExpense.mockResolvedValue({
        data: {
          expense,
        },
      });

      act(() => {
        actions.fetchExpense("1");
      });

      await waitFor(() => {
        expect(result.current.expense).toStrictEqual(expense);
      });
    });

    it("sets an error", async () => {
      const { result } = renderHook(() => useExpenseStore());

      const error = new Error("error");

      mockApi.readExpense.mockRejectedValue(error);

      act(() => {
        actions.fetchExpense("1");
      });

      await waitFor(() => {
        expect(result.current.error).toStrictEqual(error);
      });
    });
  });
});
