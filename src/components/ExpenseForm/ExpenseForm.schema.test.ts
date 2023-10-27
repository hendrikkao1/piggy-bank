import { SafeParseError } from "zod";
import { ExpenseFormSchema } from "./ExpenseForm.schema";
import { IExpenseFormData } from "./ExpenseForm.types";

const mockFormData: IExpenseFormData = {
  amount: "100",
  currency: "EUR",
  date: "2023-10-30",
  id: "1",
  recipient: "John Doe",
  type: "food",
};

describe("ExpenseFormSchema", () => {
  it("validates an expense", () => {
    const result = ExpenseFormSchema.safeParse(mockFormData);

    expect(result.success).toBe(true);
  });

  describe("validation errors", () => {
    describe("amount", () => {
      it("requires an amount", () => {
        const result = ExpenseFormSchema.safeParse({
          ...mockFormData,
          amount: "",
        }) as SafeParseError<IExpenseFormData>;

        expect(result.error.issues[0].message).toBe("amount.required");
      });

      it("must be a number", () => {
        const result = ExpenseFormSchema.safeParse({
          ...mockFormData,
          amount: "invalid",
        }) as SafeParseError<IExpenseFormData>;

        expect(result.error.issues[0].message).toBe("amount.number");
      });

      it("must be a positive number", () => {
        const result = ExpenseFormSchema.safeParse({
          ...mockFormData,
          amount: "-100",
        }) as SafeParseError<IExpenseFormData>;

        expect(result.error.issues[0].message).toBe("amount.positive");
      });
    });

    describe("currency", () => {
      it("requires a currency", () => {
        const result = ExpenseFormSchema.safeParse({
          ...mockFormData,
          currency: "",
        }) as SafeParseError<IExpenseFormData>;

        expect(result.error.issues[0].message).toBe("currency.required");
      });

      it("requires a valid currency", () => {
        const result = ExpenseFormSchema.safeParse({
          ...mockFormData,
          currency: "invalid",
        }) as SafeParseError<IExpenseFormData>;

        expect(result.error.issues[0].message).toBe("currency.required");
      });
    });

    describe("date", () => {
      it("requires a date", () => {
        const result = ExpenseFormSchema.safeParse({
          ...mockFormData,
          date: "",
        }) as SafeParseError<IExpenseFormData>;

        expect(result.error.issues[0].message).toBe("date.required");
      });

      it("requires a valid date", () => {
        const result = ExpenseFormSchema.safeParse({
          ...mockFormData,
          date: "invalid",
        }) as SafeParseError<IExpenseFormData>;

        expect(result.error.issues[0].message).toBe("date.pattern");
      });
    });
  });
});
