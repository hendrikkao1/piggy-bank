import { CURRENCY } from "@/constants/currency";
import { z } from "zod";
import Big from "big.js";

export const ExpenseSchema = z.object({
  amount: z.string().transform((val) => Big(val)),
  currency: z.enum(CURRENCY),
  date: z.string().transform((val) => new Date(val)),
  uuid: z.string().default(""),
  recipient: z.string(),
  type: z.string(),
});

export type IExpense = z.infer<typeof ExpenseSchema>;
