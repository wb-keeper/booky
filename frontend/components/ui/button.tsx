import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-base font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",
  {
    variants: {
      variant: {
        default: "bg-white hover:bg-white",
        primary: "bg-primary hover:bg-primary-hover text-white",
        accent: "bg-accent hover:bg-accent-hover text-white",
        outline: "border border-accent text-primary font-bold",
      },
      size: {
        sm: "h-[40px] px-3 uppercase text-[12px] tracking-[1.2px] font-bold",
        md: "h-[48px] px-6 uppercase text-[12px] tracking-[1.2px] font-bold",
        lg: "h-[60px] px-34 uppercase text-[12px] tracking-[2.4px] font-bold",
      },
    },
    defaultVariants: {
      variant: "accent",
      size: "sm",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
