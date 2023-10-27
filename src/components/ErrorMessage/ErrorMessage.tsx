import React from "react";

interface ErrorMessageProps extends React.ComponentPropsWithoutRef<"p"> {}

export const ErrorMessage = ({ children, ...rest }: ErrorMessageProps) => (
  <p className="text-xs text-red-900" role="alert" {...rest}>
    {children}
  </p>
);
