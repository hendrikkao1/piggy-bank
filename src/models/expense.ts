import { CURRENCY } from "@/constants/currency";
import Big from "big.js";

export interface IExpense {
  // Expense amount in cents
  amount: Big;
  currency: (typeof CURRENCY)[number];
  date: Date;
  id: string;
  recipient: string;
  type: string;
}
