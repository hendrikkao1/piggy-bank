import Link from "next/link";
import { StackedListItem } from "@/components/StackedListItem/StackedListItem";
import { Button } from "@/components/Button/Button";
import { Page, PageBody, PageHeader } from "@/components/Page";
import api from "@/lib/api";

export default async function ExpensesListPage() {
  const prevPage = undefined;
  const nextPage = undefined;

  const { data: expenses, error } = await api.getPaginatedExpenses(
    0,
    Number.MAX_SAFE_INTEGER,
  );

  if (error) {
    throw error;
  }

  return (
    <Page>
      <PageHeader heading={"heading"} />
      <PageBody>
        <ul className="divide-y divide-zinc-900/20">
          {expenses?.map((expense) => (
            <li key={expense.uuid}>
              <Link
                href={`/expenses/${expense.uuid}`}
                className="-mx-6 px-6 hover:bg-zinc-900/5 block"
              >
                <StackedListItem
                  key={expense.uuid}
                  title={expense.recipient}
                  description={expense.type}
                  subTitle={expense.amount + " " + expense.currency}
                  meta={
                    <time dateTime={expense.date.toString()}>
                      {expense.date.toString()}
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
