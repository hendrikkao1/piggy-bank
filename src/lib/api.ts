import { z } from "zod";
import { CURRENCY } from "@/constants/currency";
import { IExpense } from "@/models/expense";
import Big from "big.js";

const API_PATH = "/api/expenses";

const ApiExpenseSchema = z.object({
  amount: z.string().transform((val) => Big(val)),
  currency: z.enum(CURRENCY),
  date: z.string().transform((val) => new Date(val)),
  id: z.string().uuid(),
  recipient: z.string(),
  type: z.string(),
});

const ApiExpenseResSchema = z.object({
  data: z.object({
    expense: ApiExpenseSchema,
  }),
});

const ApiExpensesResSchema = z.object({
  data: z.object({
    expenses: z.array(ApiExpenseSchema),
    totalCount: z.number(),
  }),
});

type IApiExpenseRes = z.infer<typeof ApiExpenseResSchema>;

type IApiExpensesRes = z.infer<typeof ApiExpensesResSchema>;

const handleApiError = (req: Promise<Response>) =>
  req
    .then((res) => res.json())
    .then((res) => {
      if (res.error) {
        throw new Error(res.error);
      }
      return res;
    });

const createExpense = (expense: IExpense): Promise<IApiExpenseRes> =>
  handleApiError(
    fetch(API_PATH, {
      method: "POST",
      body: JSON.stringify(expense),
    }),
  ).then((res) => ApiExpenseResSchema.parse(res));

const readExpense = (id: string): Promise<IApiExpenseRes> =>
  handleApiError(fetch(`${API_PATH}/${id}`)).then((res) =>
    ApiExpenseResSchema.parse(res),
  );

const updateExpense = (expense: IExpense): Promise<IApiExpenseRes> =>
  handleApiError(
    fetch(`${API_PATH}/${expense.id}`, {
      method: "PUT",
      body: JSON.stringify(expense),
    }),
  ).then((res) => ApiExpenseResSchema.parse(res));

const deleteExpense = (id: string): Promise<IApiExpenseRes> =>
  handleApiError(
    fetch(`${API_PATH}/${id}`, {
      method: "DELETE",
    }),
  ).then((res) => ApiExpenseResSchema.parse(res));

const readExpenses = (skip: number, limit: number): Promise<IApiExpensesRes> =>
  handleApiError(fetch(`${API_PATH}?skip=${skip}&limit=${limit}`)).then((res) =>
    ApiExpensesResSchema.parse(res),
  );

const api = {
  createExpense,
  readExpense,
  updateExpense,
  deleteExpense,
  readExpenses,
};

export default api;
