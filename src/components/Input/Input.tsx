import React from "react";

interface InputProps extends React.ComponentPropsWithRef<"input"> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  function InputWithRef({ ...props }, ref) {
    return (
      <input
        className="bg-white border border-zinc-900/20 text-zinc-900 text-sm rounded-full block w-full px-4 py-2 aria-[invalid=true]:bg-red-100 aria-[invalid=true]:border-red-900  aria-[invalid=true]:text-red-900"
        ref={ref}
        {...props}
      />
    );
  },
);
