"use client";

import { Button } from "@/components/Button/Button";
import { ExpeneseForm, ExpenseFormFields } from "@/components/ExpenseForm";
import { useExpenseAddPage } from "./useExpenseAddPage";
import { Page, PageBody, PageHeader } from "@/components/Page";
import { Spinner } from "@/components/Spinner/Spinner";

export default function ExpenseAddPage() {
  const { defaultValue, handleAddExpense, isLoading } = useExpenseAddPage();

  return (
    <Page>
      <ExpeneseForm defaultValue={defaultValue} onSubmit={handleAddExpense}>
        <PageHeader heading="heading">
          {isLoading ? <Spinner>loading</Spinner> : <Button>save</Button>}
        </PageHeader>
        <PageBody>
          <div className="pt-6">
            <ExpenseFormFields />
          </div>
        </PageBody>
      </ExpeneseForm>
    </Page>
  );
}
