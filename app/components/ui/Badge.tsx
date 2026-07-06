"use client";

import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "success" | "warning";
}

const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full px-3 py-1 font-heading text-xs font-semibold uppercase tracking-wider",
          {
            "bg-[#f1dbff] text-[#2d0050]": variant === "default", // primary-fixed / on-primary-fixed
            "bg-[#dae2fd] text-[#131b2e]": variant === "success", // secondary-fixed / on-secondary-fixed
            "bg-[#ffddbb] text-[#2b1700]": variant === "warning", // tertiary-fixed / on-tertiary-fixed
          },
          className
        )}
        {...props}
      />
    );
  }
);

Badge.displayName = "Badge";

export { Badge };
