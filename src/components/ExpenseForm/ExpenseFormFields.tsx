import { CURRENCY } from "@/constants/currency";
import { IExpense } from "@/models/expense";
import { InputLabel } from "../InputLabel";
import { Input } from "../Input/Input";
import { Select } from "../Select/Select";

interface ExpenseFormFieldsProps {
  defaultValues: Partial<IExpense>;
}

export const ExpenseFormFields = ({
  defaultValues,
}: ExpenseFormFieldsProps) => (
  <div className="flex flex-col gap-6">
    <InputLabel label="recipient.label">
      <Input name="recipient" required defaultValue={defaultValues.recipient} />
    </InputLabel>
    <InputLabel label="date.label">
      <Input
        name="date"
        type="date"
        required
        defaultValue={defaultValues.date?.toISOString().split("T")[0]}
      />
    </InputLabel>
    <InputLabel label="amount.label">
      <Input
        name="amount"
        required
        type="number"
        defaultValue={defaultValues.amount?.toString()}
      />
    </InputLabel>
    <InputLabel label="currency.label">
      <Select name="currency" defaultValue={defaultValues.currency}>
        <option value="">pleaseChoose</option>
        {CURRENCY.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </Select>
    </InputLabel>
    <InputLabel label={"type.label"}>
      <Input name="type" defaultValue={defaultValues.type} />
    </InputLabel>
  </div>
);
