import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/50 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        default:
          "bg-brand-purple text-white shadow-sm hover:bg-brand-purple-dark hover:shadow-[0_4px_20px_rgba(74,27,79,0.22)]",
        outline:
          "border border-brand-purple/30 text-brand-purple bg-transparent hover:bg-brand-purple hover:text-white",
        secondary:
          "bg-brand-pink-subtle text-brand-purple border border-brand-pink-border hover:bg-brand-pink-light/40",
        ghost:
          "hover:bg-brand-purple-subtle text-brand-charcoal",
        link:
          "text-brand-purple underline-offset-4 hover:underline",
        white:
          "bg-white text-brand-purple shadow-sm hover:bg-brand-pink-subtle hover:shadow-md",
        glow:
          "bg-brand-purple text-white shadow-[0_0_20px_rgba(194,110,146,0.3)] hover:shadow-[0_0_30px_rgba(194,110,146,0.45)] hover:bg-brand-purple-dark",
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm: "h-9 px-4 text-xs",
        lg: "h-13 px-8 text-base",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
