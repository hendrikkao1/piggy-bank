import React from "react";
import { useFormContext } from "react-hook-form";
import { useTranslations } from "next-intl";
import { Select } from "@/components/Select/Select";
import { IExpenseFormData } from "../ExpenseForm.types";
import { FromFieldError } from "../FromFieldError/FromFieldError";

interface FormSelectProps extends React.ComponentPropsWithRef<"select"> {
  field: keyof IExpenseFormData;
}

export const FormSelect = ({ field, children, ...rest }: FormSelectProps) => {
  const t = useTranslations("ExpenseForm");
  const { register, formState } = useFormContext<IExpenseFormData>();

  const error = formState.errors[field];

  return (
    <FromFieldError error={error?.message}>
      <Select aria-invalid={Boolean(error)} {...rest} {...register(field)}>
        <option value="">{t("pleaseChoose")}</option>
        {children}
      </Select>
    </FromFieldError>
  );
};
