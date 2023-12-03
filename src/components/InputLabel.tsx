import React from "react";

interface InputLabelProps extends React.ComponentPropsWithoutRef<"label"> {
  label: string;
}

export const InputLabel = ({ label, children }: InputLabelProps) => (
  <label>
    <span className="block text-gray-900 text-sm font-semibold mb-2">
      {label}
    </span>
    {children}
  </label>
);
