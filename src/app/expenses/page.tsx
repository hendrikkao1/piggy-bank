"use client";

import Link from "next/link";
import { useExpensesListPage } from "./useExpensesListPage";
import { StackedListItem } from "@/components/StackedListItem/StackedListItem";
import { Spinner } from "@/components/Spinner/Spinner";
import { Button } from "@/components/Button/Button";
import { Page, PageBody, PageHeader } from "@/components/Page";

export default function ExpensesListPage() {
  const { expenses, nextPage, prevPage, isLoading, formatter } =
    useExpensesListPage();

  return (
    <Page>
      <PageHeader heading={"heading"}>
        {isLoading && <Spinner>loading</Spinner>}
      </PageHeader>
      <PageBody>
        <ul className="divide-y divide-zinc-900/20">
          {expenses?.map((expense) => (
            <li key={expense.id}>
              <Link
                href={`/expenses/${expense.id}`}
                className="-mx-6 px-6 hover:bg-zinc-900/5 block"
              >
                <StackedListItem
                  key={expense.id}
                  title={expense.recipient}
                  description={expense.type}
                  subTitle={formatter.formatCurrency(
                    expense.amount,
                    expense.currency,
                  )}
                  meta={
                    <time dateTime={formatter.formatDateTime(expense.date)}>
                      {formatter.formatDateTime(expense.date)}
                    </time>
                  }
                />
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-4 flex gap-2">
          {prevPage !== undefined && (
            <Button href={`/expenses?page=${prevPage}`} as={Link}>
              prevPage
            </Button>
          )}
          {nextPage !== undefined && (
            <Button href={`/expenses?page=${nextPage}`} as={Link}>
              nextPage
            </Button>
          )}
        </div>
      </PageBody>
    </Page>
  );
}
