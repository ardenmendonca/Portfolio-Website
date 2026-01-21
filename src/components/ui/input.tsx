import * as React from "react";

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className = "", ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={`w-full rounded-xl border border-border bg-secondary/50 px-4 py-3 text-sm outline-none focus:border-primary ${className}`}
      {...props}
    />
  );
});
Input.displayName = "Input";
