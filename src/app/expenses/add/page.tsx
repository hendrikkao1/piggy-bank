import { Button } from "@/components/Button/Button";
import { ExpenseSchema } from "@/models/expense";
import { ExpenseFormFields } from "@/components/ExpenseForm";
import { Page, PageBody, PageHeader } from "@/components/Page";
import { redirect } from "next/navigation";
import ExpneseService from "@/lib/expense";

export default function ExpenseAddPage() {
  const addExpense = async (formData: FormData) => {
    "use server";
    const recipient = formData.get("recipient") as string;
    const date = formData.get("date") as string;
    const amount = formData.get("amount") as string;
    const currency = formData.get("currency") as string;
    const type = formData.get("type") as string;
    const newExpnese = ExpenseSchema.parse({
      recipient,
      date,
      amount,
      currency,
      type,
    });
    const { data: addedExpense, error } =
      await ExpneseService.addExpense(newExpnese);

    redirect("/expenses/" + addedExpense?.uuid?.toString());
  };

  return (
    <Page>
      <form action={addExpense}>
        <PageHeader heading="heading">
          <Button>save</Button>
        </PageHeader>
        <PageBody>
          <div className="pt-6">
            <ExpenseFormFields defaultValues={{}} />
          </div>
        </PageBody>
      </form>
    </Page>
  );
}
