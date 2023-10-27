import { zodResolver } from "@hookform/resolvers/zod";
import Big from "big.js";
import { IExpense } from "@/models/expense";
import { ExpenseFormSchema } from "./ExpenseForm.schema";
import { SubmitHandler, useForm } from "react-hook-form";
import { IExpenseFormData } from "./ExpenseForm.types";

const mapExpenseToFormData = (
  expense?: Partial<IExpense>,
): Partial<IExpenseFormData> => ({
  ...expense,
  // As we don't register a field for id, we set it manually in case it is missing
  id: expense?.id ?? "",
  amount: expense?.amount?.toString(),
  date: expense?.date?.toISOString().split("T")[0],
});

const mapFormDataToExpense = (formData: IExpenseFormData): IExpense => ({
  ...formData,
  amount: Big(formData.amount),
  date: new Date(formData.date),
});

export interface UseExpenseFormOptions {
  defaultValue?: Partial<IExpense>;
  onSubmit: (expense: IExpense) => void;
}

export const useExpenseForm = ({
  defaultValue,
  onSubmit,
}: UseExpenseFormOptions) => {
  const formContext = useForm<IExpenseFormData>({
    defaultValues: mapExpenseToFormData(defaultValue),
    resolver: zodResolver(ExpenseFormSchema),
  });

  const handleSubmit: SubmitHandler<IExpenseFormData> = (formData) =>
    onSubmit(mapFormDataToExpense(formData));

  return {
    formContext,
    handleSubmit: formContext.handleSubmit(handleSubmit),
  };
};
