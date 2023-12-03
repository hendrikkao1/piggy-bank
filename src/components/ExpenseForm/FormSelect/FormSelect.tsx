import React from "react";
import { useFormContext } from "react-hook-form";
import { Select } from "@/components/Select/Select";
import { IExpenseFormData } from "../ExpenseForm.types";
import { FromFieldError } from "../FromFieldError/FromFieldError";

interface FormSelectProps extends React.ComponentPropsWithRef<"select"> {
  field: keyof IExpenseFormData;
}

export const FormSelect = ({ field, children, ...rest }: FormSelectProps) => {
  return (
    <Select name={field} {...rest}>
      <option value="">pleaseChoose</option>
      {children}
    </Select>
  );
};
