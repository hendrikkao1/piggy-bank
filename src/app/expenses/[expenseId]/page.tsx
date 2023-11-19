"use client";

import Link from "next/link";
import { useExpenseDetailsPage } from "./useExpenseDetailsPage";
import { Page, PageBody, PageHeader } from "@/components/Page";
import { DescriptionList } from "@/components/DescriptionList/DescriptionList";
import { Spinner } from "@/components/Spinner/Spinner";
import { Button } from "@/components/Button/Button";

interface ExpenseDetailsPageProps {
  params: { expenseId: string };
}

export default function ExpenseDetailsPage({
  params,
}: ExpenseDetailsPageProps) {
  const { expense, t, isLoading, formatter, handleDeleteExpense, error } =
    useExpenseDetailsPage({
      expenseId: params.expenseId,
    });

  if (error) {
    throw error;
  }

  return (
    <Page>
      <PageHeader heading={t("heading")}>
        {isLoading ? (
          <Spinner>{t("loading")}</Spinner>
        ) : expense ? (
          <div className="flex gap-2">
            <Button as={Link} href={`/expenses/${expense.id}/edit`}>
              {t("edit")}
            </Button>
            <Button
              disabled={Boolean(handleDeleteExpense)}
              onClick={handleDeleteExpense}
            >
              {t("delete")}
            </Button>
          </div>
        ) : null}
      </PageHeader>
      <PageBody>
        {expense ? (
          <DescriptionList
            items={[
              [t("recipient"), expense.recipient],
              [t("date"), formatter.formatDateTime(expense.date)],
              [t("amount"), formatter.formatAmount(expense.amount)],
              [t("currency"), expense.currency],
              [t("type"), expense.type],
            ]}
          />
        ) : null}
      </PageBody>
    </Page>
  );
}
