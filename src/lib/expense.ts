import db, { IDBExpense } from "./db";
import { ExpenseSchema, IExpense } from "@/models/expense";

const expenseToDBExpense = (expense: IExpense): IDBExpense => {
  return {
    amount: expense.amount.toString(),
    currency: expense.currency,
    date: expense.date.toISOString(),
    uuid: expense.uuid,
    recipient: expense.recipient,
    type: expense.type,
  };
};

const addExpense = async (
  expense: IExpense,
): Promise<{
  data: IExpense | null;
  error: Error | null;
}> => {
  const { data, error } = await db.addExpense(expenseToDBExpense(expense));

  return {
    data: ExpenseSchema.parse(data),
    error: error ? new Error(error.message) : null,
  };
};

const getExpenseById = async (
  uuid: string,
): Promise<{
  data: IExpense | null;
  error: Error | null;
}> => {
  const { data, error } = await db.getExpenseById(uuid);

  return {
    data: ExpenseSchema.parse(data),
    error: error ? new Error(error.message) : null,
  };
};

const updateExpense = async (
  expense: IExpense,
): Promise<{
  data: IExpense | null;
  error: Error | null;
}> => {
  const { data, error } = await db.updateExpense(expenseToDBExpense(expense));

  return {
    data: ExpenseSchema.parse(data),
    error: error ? new Error(error.message) : null,
  };
};

const deleteExpenseById = async (
  uuid: string,
): Promise<{
  data: IExpense | null;
  error: Error | null;
}> => {
  const { data, error } = await db.deleteExpenseById(uuid);

  return {
    data: ExpenseSchema.parse(data),
    error: error ? new Error(error.message) : null,
  };
};

const getPaginatedExpenses = async (
  skip = 0,
  limit = Number.MAX_SAFE_INTEGER,
): Promise<{
  data: IExpense[] | null;
  error: Error | null;
}> => {
  const { data, error } = await db.getPaginatedExpenses(skip, limit);

  return {
    data: data ? data.map((d) => ExpenseSchema.parse(d)) : null,
    error: error ? new Error(error.message) : null,
  };
};

const expnese = {
  addExpense,
  deleteExpenseById,
  getExpenseById,
  getPaginatedExpenses,
  updateExpense,
};

export default expnese;
