import db from "@/lib/db";

export const GET = (request: Request) => {
  // TODO: Add params validation
  const { searchParams } = new URL(request.url);
  const skipParam = searchParams.get("skip");
  const limitParam = searchParams.get("limit");
  const totalCount = db.getExpenesesTotalCount();
  const expenses = db.getPaginatedExpenses(
    skipParam ? parseInt(skipParam) : undefined,
    limitParam ? parseInt(limitParam) : undefined,
  );

  return Response.json({
    data: { expenses, totalCount },
  });
};

export const POST = async (request: Request) => {
  // TODO: Add params validation
  const requestBody = await request.json();
  const expense = db.createExpense(requestBody);

  return Response.json({ data: { expense } });
};
