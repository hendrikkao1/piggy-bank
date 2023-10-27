import { faker } from "@faker-js/faker";

interface IExpensesTableSchema {
  amount: string;
  currency: string;
  date: string;
  id: string;
  recipient: string;
  type: string;
}

faker.seed(0);

const createRandomExpense = (): IExpensesTableSchema => ({
  amount: faker.number.bigInt().toString(),
  currency: faker.finance.currencyCode(),
  date: faker.date.past().toISOString(),
  id: faker.string.uuid(),
  recipient: faker.finance.accountName(),
  type: faker.lorem.word(),
});

const expensesTable: IExpensesTableSchema[] = faker.helpers.multiple(
  createRandomExpense,
  {
    count: parseInt(process.env.NUMBER_OF_GENERATED_EXPENSES ?? "0"),
  },
);

const getPaginatedExpenses = (
  skip = 0,
  limit = Number.MAX_SAFE_INTEGER,
): IExpensesTableSchema[] =>
  expensesTable
    .sort(
      ({ date: d1 }, { date: d2 }) =>
        new Date(d2).getTime() - new Date(d1).getTime(),
    )
    .slice(skip, skip + limit);

const getExpenesesTotalCount = (): number => expensesTable.length;

const getExpenseById = (id: string): IExpensesTableSchema | null =>
  expensesTable.find((expense) => expense.id === id) ?? null;

const createExpense = (
  expense: Omit<IExpensesTableSchema, "id">,
): IExpensesTableSchema => {
  const newExpense = {
    ...expense,
    id: faker.string.uuid(),
  };

  expensesTable.push(newExpense);

  return newExpense;
};

const updateExpense = (
  expense: IExpensesTableSchema,
): IExpensesTableSchema | null => {
  const index = expensesTable.findIndex((el) => el.id === expense.id);

  if (index === -1) {
    return null;
  }

  expensesTable[index] = expense;

  return expense;
};

const deleteExpenseById = (id: string): IExpensesTableSchema | null => {
  const index = expensesTable.findIndex((expense) => expense.id === id);

  if (index === -1) {
    return null;
  }

  const deletedExpense = expensesTable[index];

  expensesTable.splice(index, 1);

  return deletedExpense;
};

const db = {
  createExpense,
  deleteExpenseById,
  getExpenesesTotalCount,
  getExpenseById,
  getPaginatedExpenses,
  updateExpense,
};

export default db;
