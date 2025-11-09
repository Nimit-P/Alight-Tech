import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: "default" | "outline";
  size?: "sm" | "md";
}

export function Button({ className, variant = "default", size = "md", ...props }: ButtonProps) {
  const base = "inline-flex items-center justify-center rounded-md font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants = {
    default: "bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc]",
    outline: "border border-black/10 dark:border-white/20 text-foreground hover:bg-black/5 dark:hover:bg-white/10",
  } as const;
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5",
  } as const;

  return <button className={cn(base, variants[variant], sizes[size], className)} {...props} />;
}
