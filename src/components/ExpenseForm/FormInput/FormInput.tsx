import React from "react";
import { useFormContext } from "react-hook-form";
import { Input } from "@/components/Input/Input";
import { IExpenseFormData } from "../ExpenseForm.types";
import { FromFieldError } from "../FromFieldError/FromFieldError";

interface FormInputProps extends React.ComponentPropsWithoutRef<"input"> {
  field: keyof IExpenseFormData;
}

export const FormInput = ({ field, ...rest }: FormInputProps) => {
  return <Input name={field} {...rest} />;
};
