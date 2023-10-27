import { FormProvider } from "react-hook-form";
import { UseExpenseFormOptions, useExpenseForm } from "./useExpenseForm";
import React from "react";

type ExpeneseFormProps = React.PropsWithChildren<UseExpenseFormOptions>;

export const ExpeneseForm = ({ children, ...rest }: ExpeneseFormProps) => {
  const { formContext, handleSubmit } = useExpenseForm({
    defaultValue: rest.defaultValue,
    onSubmit: rest.onSubmit,
  });

  return (
    <FormProvider {...formContext}>
      <form noValidate onSubmit={handleSubmit}>
        {children}
      </form>
    </FormProvider>
  );
};
