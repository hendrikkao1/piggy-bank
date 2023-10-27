"use client";

import Link from "next/link";
import { useExpensesListPage } from "./useExpensesListPage";
import { StackedListItem } from "@/components/StackedListItem/StackedListItem";
import { Spinner } from "@/components/Spinner/Spinner";
import { Button } from "@/components/Button/Button";
import { Page, PageBody, PageHeader } from "@/components/Page";

export default function ExpensesListPage() {
  const { expenses, t, nextPage, prevPage, isLoading, formatter } =
    useExpensesListPage();

  return (
    <Page>
      <PageHeader heading={t("heading")}>
        {isLoading && <Spinner>{t("loading")}</Spinner>}
      </PageHeader>
      <PageBody>
        <ul className="divide-y divide-zinc-900/20">
          {expenses?.map((expense) => (
            <li key={expense.id}>
              <Link
                href={`/expenses/${expense.id}`}
                className="hover:bg-zinc-900/5 block"
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
              {t("prevPage")}
            </Button>
          )}
          {nextPage !== undefined && (
            <Button href={`/expenses?page=${nextPage}`} as={Link}>
              {t("nextPage")}
            </Button>
          )}
        </div>
      </PageBody>
    </Page>
  );
}
