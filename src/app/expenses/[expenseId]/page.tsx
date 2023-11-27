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
  const { expense, isLoading, formatter, handleDeleteExpense, error } =
    useExpenseDetailsPage({
      expenseId: params.expenseId,
    });

  if (error) {
    throw error;
  }

  return (
    <Page>
      <PageHeader heading={"heading"}>
        {isLoading ? (
          <Spinner>loading</Spinner>
        ) : expense ? (
          <div className="flex gap-2">
            <Button as={Link} href={`/expenses/${expense.id}/edit`}>
              edit
            </Button>
            <Button
              disabled={Boolean(handleDeleteExpense)}
              onClick={handleDeleteExpense}
            >
              delete
            </Button>
          </div>
        ) : null}
      </PageHeader>
      <PageBody>
        {expense ? (
          <DescriptionList
            items={[
              ["recipient", expense.recipient],
              ["date", formatter.formatDateTime(expense.date)],
              ["amount", formatter.formatAmount(expense.amount)],
              ["currency", expense.currency],
              ["type", expense.type],
            ]}
          />
        ) : null}
      </PageBody>
    </Page>
  );
}
