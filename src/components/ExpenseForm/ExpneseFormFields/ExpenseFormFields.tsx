import { CURRENCY } from "@/constants/currency";
import { FormInput } from "../FormInput/FormInput";
import { FormLabel } from "../FormLabel/FormLabel";
import { FormSelect } from "../FormSelect/FormSelect";
import { useExpenseFormFields } from "./useExpenseFormFields";

export const ExpenseFormFields = () => {
  const { t } = useExpenseFormFields();

  return (
    <div className="flex flex-col gap-6">
      <FormLabel label={t("recipient.label")}>
        <FormInput field="recipient" required />
      </FormLabel>
      <FormLabel label={t("date.label")}>
        <FormInput field="date" type="date" required />
      </FormLabel>
      <FormLabel label={t("amount.label")}>
        <FormInput field="amount" required type="number" />
      </FormLabel>
      <FormLabel label={t("currency.label")}>
        <FormSelect field="currency">
          {CURRENCY.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </FormSelect>
      </FormLabel>
      <FormLabel label={t("type.label")}>
        <FormInput field="type" />
      </FormLabel>
    </div>
  );
};
