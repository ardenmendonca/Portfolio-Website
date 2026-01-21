import * as React from "react";

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className = "", ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={`w-full rounded-xl border border-border bg-secondary/50 px-4 py-3 text-sm outline-none focus:border-primary ${className}`}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";
