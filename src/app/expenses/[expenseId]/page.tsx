import Link from "next/link";
import { Page, PageBody, PageHeader } from "@/components/Page";
import { DescriptionList } from "@/components/DescriptionList/DescriptionList";
import { Button } from "@/components/Button/Button";
import api from "@/lib/api";

interface ExpenseDetailsPageProps {
  params: { expenseId: string };
}

export default async function ExpenseDetailsPage({
  params,
}: ExpenseDetailsPageProps) {
  const { data: expense, error } = await api.getExpenseById(params.expenseId);

  const deleteExpense = async () => {
    "use server";
    await api.deleteExpense(params.expenseId);
  };

  if (!expense) {
    // Not found
    return null;
  }

  return (
    <Page>
      <PageHeader heading={"heading"}>
        <div className="flex gap-2">
          <Button as={Link} href={`/expenses/${params.expenseId}/edit`}>
            edit
          </Button>
          <form action={deleteExpense}>
            <Button type="submit">delete</Button>
          </form>
        </div>
      </PageHeader>
      <PageBody>
        <DescriptionList
          items={[
            ["recipient", expense.recipient],
            ["date", expense.date.toString()],
            ["amount", expense.amount.toString()],
            ["currency", expense.currency.toString()],
            ["type", expense.type],
          ]}
        />
      </PageBody>
    </Page>
  );
}
