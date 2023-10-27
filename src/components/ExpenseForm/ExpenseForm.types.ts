import { z } from "zod";
import { ExpenseFormSchema } from "./ExpenseForm.schema";

export type IExpenseFormData = z.infer<typeof ExpenseFormSchema>;
