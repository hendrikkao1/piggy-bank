import React from "react";

interface ButtonProps<T extends React.ElementType> {
  as?: T;
  children?: React.ReactNode;
}

export const Button = <T extends React.ElementType = "button">({
  children,
  as,
  ...props
}: ButtonProps<T> &
  Omit<React.ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>) => {
  const Component = as || "button";

  return (
    <Component
      className="text-sm font-semibold transition rounded-full bg-zinc-900 py-2 px-4 text-white hover:bg-zinc-600 "
      {...props}
    >
      {children}
    </Component>
  );
};
