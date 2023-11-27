import { useEffect } from "react";
import { useExpenses } from "@/hooks/useExpenses";
import { useFormatter } from "@/hooks/useFormatter";
import { useSearchParams } from "next/navigation";

export const useExpensesListPage = () => {
  const {
    expenses,
    pagination,
    fetchExpenses,
    resetExpenses,
    isLoading,
    error,
  } = useExpenses();
  const formatter = useFormatter();
  // TODO: Can search params be type safe?
  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get("page") ?? "1");

  if (error) {
    throw error;
  }

  // TODO: Get rid of useEffect
  useEffect(() => {
    fetchExpenses(page);
    return resetExpenses;
  }, [fetchExpenses, resetExpenses, page]);

  const nextPage =
    pagination.page < pagination.numberOfPages
      ? pagination.page + 1
      : undefined;

  const prevPage = pagination.page > 1 ? pagination.page - 1 : undefined;

  return {
    expenses,
    formatter,
    nextPage,
    prevPage,
    isLoading,
  };
};
