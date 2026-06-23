import React from "react";

type BadgeProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: "primary" | "secondary" | "outline" | "success" | "warning" | "destructive";
};

export function Badge({ className = "", variant = "secondary", children, ...props }: BadgeProps) {
  const baseStyles =
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2";
  
  const variants = {
    primary: "border-transparent bg-primary text-primary-foreground",
    secondary: "border-transparent bg-secondary text-secondary-foreground",
    outline: "text-foreground border-border bg-transparent",
    success: "border-transparent bg-emerald-500/10 text-emerald-500 border border-emerald-500/20",
    warning: "border-transparent bg-amber-500/10 text-amber-500 border border-amber-500/20",
    destructive: "border-transparent bg-destructive/10 text-destructive border border-destructive/20",
  };

  return (
    <div className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </div>
  );
}
