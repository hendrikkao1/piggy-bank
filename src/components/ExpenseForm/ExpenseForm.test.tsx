import { fireEvent, render, waitFor } from "@/test-utils";
import { ExpeneseForm } from "./ExpenseForm";
import { IExpense } from "@/models/expense";
import Big from "big.js";

describe("ExpeneseForm", () => {
  it("renders", () => {
    const { container } = render(
      <ExpeneseForm onSubmit={jest.fn()}>
        <button>Submit</button>
      </ExpeneseForm>,
    );

    expect(container).toMatchSnapshot();
  });

  it("submits an expense", async () => {
    const mockOnSubmit = jest.fn();

    const mockExpense: IExpense = {
      amount: Big(100),
      currency: "EUR",
      date: new Date("2023-10-30T00:00:00.000Z"),
      id: "1",
      recipient: "John Doe",
      type: "food",
    };

    const screen = render(
      <ExpeneseForm defaultValue={mockExpense} onSubmit={mockOnSubmit}>
        <button>Submit</button>
      </ExpeneseForm>,
    );

    fireEvent.click(screen.getByRole("button", { name: "Submit" }));

    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledWith(mockExpense);
    });
  });
});
