import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-brand-sage text-white",
        secondary:
          "border-brand-mist-border bg-brand-mist/60 text-brand-sage-deep",
        outline:
          "border-brand-sage/30 text-brand-sage-dark bg-brand-sand/50",
        pill:
          "border-brand-sage/20 bg-brand-sage-subtle text-brand-sage-deep uppercase tracking-widest text-[10px]",
        tag:
          "border-brand-mist-border bg-white text-brand-charcoal text-xs font-normal shadow-xs",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
