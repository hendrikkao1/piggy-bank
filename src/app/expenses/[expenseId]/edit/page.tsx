import { Button } from "@/components/Button/Button";
import { CURRENCY } from "@/constants/currency";
import { ExpenseSchema } from "@/models/expense";
import { FormInput } from "@/components/ExpenseForm/FormInput/FormInput";
import { FormLabel } from "@/components/ExpenseForm/FormLabel/FormLabel";
import { FormSelect } from "@/components/ExpenseForm";
import { Page, PageBody, PageHeader } from "@/components/Page";
import { redirect } from "next/navigation";
import api from "@/lib/api";

interface ExpenseEditPageProps {
  params: { expenseId: string };
}

export default async function ExpenseEditPage({
  params,
}: ExpenseEditPageProps) {
  const { data: expense, error } = await api.getExpenseById(params.expenseId);

  const updateExpense = async (formData: FormData) => {
    "use server";
    const recipient = formData.get("recipient") as string;
    const date = formData.get("date") as string;
    const amount = formData.get("amount") as string;
    const currency = formData.get("currency") as string;
    const type = formData.get("type") as string;
    const newExpense = ExpenseSchema.parse({
      ...expense,
      recipient,
      date,
      amount,
      currency,
      type,
    });
    const { data: updatedExpense } = await api.updateExpense(newExpense);

    redirect("/expenses/" + updatedExpense?.uuid?.toString());
  };

  if (!expense) {
    // Not found
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
            <div className="flex flex-col gap-6">
              <FormLabel label="recipient.label">
                <FormInput
                  field="recipient"
                  required
                  defaultValue={expense.recipient}
                />
              </FormLabel>
              <FormLabel label="date.label">
                <FormInput
                  field="date"
                  type="date"
                  required
                  defaultValue={expense.date.toISOString().split("T")[0]}
                />
              </FormLabel>
              <FormLabel label="amount.label">
                <FormInput
                  field="amount"
                  required
                  type="number"
                  defaultValue="100"
                />
              </FormLabel>
              <FormLabel label="currency.label">
                <FormSelect field="currency" defaultValue={expense.currency}>
                  {CURRENCY.map((currency, i) => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))}
                </FormSelect>
              </FormLabel>
              <FormLabel label={"type.label"}>
                <FormInput field="type" defaultValue={expense.type} />
              </FormLabel>
            </div>
          </div>
        </PageBody>
      </form>
    </Page>
  );
}
