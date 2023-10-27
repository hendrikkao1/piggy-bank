import { z } from "zod";
import { CURRENCY } from "@/constants/currency";

export const ExpenseFormSchema = z.object({
  id: z.string(),
  amount: z
    .string()
    .min(1, { message: "amount.required" })
    .refine((val) => !Number.isNaN(parseFloat(val)), {
      message: "amount.number",
    })
    .refine((val) => parseFloat(val) > 0, {
      message: "amount.positive",
    }),
  currency: z.enum(CURRENCY, {
    errorMap: () => ({
      message: "currency.required",
    }),
  }),
  date: z
    .string()
    .min(1, { message: "date.required" })
    .regex(/\d\d\d\d-\d\d-\d\d/, { message: "date.pattern" }),
  recipient: z.string().min(1, { message: "recipient.required" }),
  type: z.string(),
});
