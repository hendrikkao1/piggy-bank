import { Button } from "@/components/Button/Button";
import { ExpenseSchema } from "@/models/expense";
import { ExpenseFormFields, FormSelect } from "@/components/ExpenseForm";
import { Page, PageBody, PageHeader } from "@/components/Page";
import { redirect } from "next/navigation";
import ExpneseService from "@/lib/expense";

interface ExpenseEditPageProps {
  params: { expenseId: string };
}

export default async function ExpenseEditPage({
  params,
}: ExpenseEditPageProps) {
  const { data: expense, error } = await ExpneseService.getExpenseById(
    params.expenseId,
  );

  const updateExpense = async (formData: FormData) => {
    "use server";

    const updates = ExpenseSchema.parse({
      ...expense,
      recipient: formData.get("recipient"),
      date: formData.get("date"),
      amount: formData.get("amount"),
      currency: formData.get("currency"),
      type: formData.get("type"),
    });

    const { data: updatedExpense } =
      await ExpneseService.updateExpense(updates);

    redirect("/expenses/" + updatedExpense?.uuid?.toString());
  };

  if (error) {
    throw error;
  }

  if (!expense) {
    return null;
  }

  return (
    <Page>
      <form action={updateExpense}>
        <PageHeader heading="heading">
          <Button>save</Button>
        </PageHeader>
        <PageBody>
          <div className="pt-6">
            <ExpenseFormFields defaultValues={expense} />
          </div>
        </PageBody>
      </form>
    </Page>
  );
}
