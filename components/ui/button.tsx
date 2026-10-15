import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md" | "lg";

type ButtonStyleProps = {
  variant?: Variant;
  size?: Size;
};

const base =
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-control font-semibold whitespace-nowrap " +
  "transition-[background-color,border-color,color,box-shadow,transform] duration-200 ease-out-soft " +
  "active:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary: "bg-accent text-on-accent shadow-card hover:bg-accent-2 hover:shadow-card-hover",
  secondary: "border border-line-strong bg-bg text-fg hover:border-accent-ink hover:text-accent-ink",
  ghost: "text-fg hover:bg-surface",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3.5 text-small",
  md: "h-11 px-5 text-[0.9375rem]",
  lg: "h-13 px-6 text-body",
};

/** Class string for any element that should look like a button. */
export function buttonStyles({ variant = "primary", size = "md" }: ButtonStyleProps = {}) {
  return cn(base, variants[variant], sizes[size]);
}

type ButtonProps = ButtonStyleProps & ComponentPropsWithoutRef<"button">;

export function Button({ variant, size, className, type = "button", ...props }: ButtonProps) {
  return <button type={type} className={cn(buttonStyles({ variant, size }), className)} {...props} />;
}

type ButtonLinkProps = ButtonStyleProps &
  Omit<ComponentPropsWithoutRef<"a">, "href"> & {
    href: string;
    /** Opens in a new tab with safe `rel`; use for links off the site. */
    external?: boolean;
  };

/** A link styled as a button. Internal paths use `next/link`. */
export function ButtonLink({ variant, size, className, href, external, ...props }: ButtonLinkProps) {
  const classes = cn(buttonStyles({ variant, size }), className);

  if (external) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className={classes} {...props} />;
  }
  return <Link href={href} className={classes} {...props} />;
}
