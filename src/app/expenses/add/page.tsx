import { Button } from "@/components/Button/Button";
import { CURRENCY } from "@/constants/currency";
import { ExpenseSchema } from "@/models/expense";
import { FormInput, FormLabel, FormSelect } from "@/components/ExpenseForm";
import { Page, PageBody, PageHeader } from "@/components/Page";
import { redirect } from "next/navigation";
import api from "@/lib/api";

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
    const { data: addedExpense, error } = await api.addExpense(newExpnese);

    console.log({ error });

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
            <div className="flex flex-col gap-6">
              <FormLabel label="recipient.label">
                <FormInput field="recipient" required />
              </FormLabel>
              <FormLabel label="date.label">
                <FormInput
                  field="date"
                  type="date"
                  required
                  defaultValue={new Date().toISOString().split("T")[0]}
                />
              </FormLabel>
              <FormLabel label="amount.label">
                <FormInput field="amount" required type="number" />
              </FormLabel>
              <FormLabel label="currency.label">
                <FormSelect field="currency">
                  {CURRENCY.map((currency, i) => (
                    <option key={currency} value={currency}>
                      {currency}
                    </option>
                  ))}
                </FormSelect>
              </FormLabel>
              <FormLabel label={"type.label"}>
                <FormInput field="type" />
              </FormLabel>
            </div>
          </div>
        </PageBody>
      </form>
    </Page>
  );
}
