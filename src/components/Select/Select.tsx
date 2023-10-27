import React from "react";

interface SelectProps
  extends React.PropsWithChildren<React.ComponentPropsWithRef<"select">> {}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  function SelectWithRef({ children, ...rest }, ref) {
    return (
      <select
        className="bg-white border border-zinc-900/20 text-zinc-900 text-sm rounded-full block w-full px-4 py-2 aria-[invalid=true]:bg-red-100 aria-[invalid=true]:border-red-900  aria-[invalid=true]:text-red-900"
        ref={ref}
        {...rest}
      >
        {children}
      </select>
    );
  },
);
