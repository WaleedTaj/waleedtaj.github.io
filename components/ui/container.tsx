import type { ComponentPropsWithoutRef, ElementType } from "react";
import { cn } from "@/lib/cn";

type ContainerProps<T extends ElementType> = {
  as?: T;
  /** `prose` narrows the measure for long-form text. */
  size?: "content" | "prose";
} & Omit<ComponentPropsWithoutRef<T>, "as">;

/** Centres content at the site width with responsive side gutters. */
export function Container<T extends ElementType = "div">({
  as,
  size = "content",
  className,
  ...props
}: ContainerProps<T>) {
  const Component: ElementType = as ?? "div";
  return (
    <Component
      className={cn("container-page", size === "prose" && "[--container-max:var(--container-prose)]", className)}
      {...props}
    />
  );
}
