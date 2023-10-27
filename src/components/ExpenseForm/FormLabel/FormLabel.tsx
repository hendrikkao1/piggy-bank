import React from "react";

interface FormLabelProps extends React.ComponentPropsWithoutRef<"label"> {
  label: string;
}

export const FormLabel = ({ label, children }: FormLabelProps) => (
  <label>
    <span className="block text-gray-900 text-sm font-semibold mb-2">
      {label}
    </span>
    {children}
  </label>
);
