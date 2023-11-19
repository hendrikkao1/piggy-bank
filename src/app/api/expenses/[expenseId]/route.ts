import db from "@/lib/db";

export const GET = async (
  _: Request,
  { params }: { params: { expenseId: string } },
) => {
  // TODO: Add params validation
  const expense = db.getExpenseById(params.expenseId);

  if (!expense) {
    return Response.json({ error: "Expense not found" }, { status: 404 });
  }

  return Response.json({
    data: {
      expense,
    },
  });
};

export const PUT = async (request: Request) => {
  // TODO: Add params validation
  const requestBody = await request.json();
  const expense = db.updateExpense(requestBody);

  if (!expense) {
    return Response.json({ error: "Expense not found" }, { status: 404 });
  }

  return Response.json({
    data: {
      expense,
    },
  });
};

export const DELETE = async (
  _: Request,
  { params }: { params: { expenseId: string } },
) => {
  // TODO: Add params validation
  const expense = db.deleteExpenseById(params.expenseId);

  if (!expense) {
    return Response.json({ error: "Expense not found" }, { status: 404 });
  }

  return Response.json({
    data: {
      expense,
    },
  });
};
