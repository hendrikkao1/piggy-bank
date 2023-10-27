import React from "react";
import { useFormContext } from "react-hook-form";
import { Input } from "@/components/Input/Input";
import { IExpenseFormData } from "../ExpenseForm.types";
import { FromFieldError } from "../FromFieldError/FromFieldError";

interface FormInputProps extends React.ComponentPropsWithoutRef<"input"> {
  field: keyof IExpenseFormData;
}

export const FormInput = ({ field, ...rest }: FormInputProps) => {
  const { register, formState } = useFormContext<IExpenseFormData>();

  const error = formState.errors[field];

  return (
    <FromFieldError error={error?.message}>
      <Input aria-invalid={Boolean(error)} {...register(field)} {...rest} />
    </FromFieldError>
  );
};
