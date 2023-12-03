import { CURRENCY } from "@/constants/currency";
import { FormInput } from "../FormInput/FormInput";
import { FormLabel } from "../FormLabel/FormLabel";
import { FormSelect } from "../FormSelect/FormSelect";

export const ExpenseFormFields = () => {
  return (
    <div className="flex flex-col gap-6">
      <FormLabel label="recipient.label">
        <FormInput field="recipient" required />
      </FormLabel>
      <FormLabel label="date.label">
        <FormInput field="date" type="date" required />
      </FormLabel>
      <FormLabel label="amount.label">
        <FormInput field="amount" required type="number" />
      </FormLabel>
      <FormLabel label="currency.label">
        <FormSelect field="currency">
          {CURRENCY.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </FormSelect>
      </FormLabel>
      <FormLabel label={"type.label"}>
        <FormInput field="type" />
      </FormLabel>
    </div>
  );
};
