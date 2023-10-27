"use client";

import { Button } from "@/components/Button/Button";
import { ExpeneseForm, ExpenseFormFields } from "@/components/ExpenseForm";
import { useExpenseEditPage } from "./useExpenseEditPage";
import { Spinner } from "@/components/Spinner/Spinner";
import { Page, PageBody, PageHeader } from "@/components/Page";

interface ExpenseEditPageProps {
  params: { expenseId: string };
}

export default function ExpenseEditPage({ params }: ExpenseEditPageProps) {
  const { defaultValue, handleEditExpense, isLoading, t, error } =
    useExpenseEditPage({
      expenseId: params.expenseId,
    });

  if (error) {
    throw error;
  }

  if (isLoading) {
    return (
      <Page>
        <PageHeader heading={t("heading")}>
          <Spinner>{t("loading")}</Spinner>
        </PageHeader>
      </Page>
    );
  }

  return (
    <Page>
      <ExpeneseForm defaultValue={defaultValue} onSubmit={handleEditExpense}>
        <PageHeader heading={t("heading")}>
          {isLoading ? (
            <Spinner>{t("loading")}</Spinner>
          ) : (
            <Button>{t("save")}</Button>
          )}
        </PageHeader>
        <PageBody>
          <div className="py-6">
            <ExpenseFormFields />
          </div>
        </PageBody>
      </ExpeneseForm>
    </Page>
  );
}
