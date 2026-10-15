import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Device frame for illustrative mockups and real screenshots. The wrapper is
 * a size container, so screens inside size themselves in `cqw` and scale
 * with the phone at any width.
 */
export function PhoneFrame({ children, className }: { children: ReactNode; className?: string }) {
  return (
    // Outer element takes positioning and width; the inner one is the size container.
    <div className={className}>
      <div className="@container w-full">
        <div className="rounded-[14cqw] border border-line-strong/70 bg-bg p-[2.4cqw] shadow-card-hover">
          <div className="relative aspect-[9/19.5] overflow-hidden rounded-[11.6cqw] bg-bg">{children}</div>
        </div>
      </div>
    </div>
  );
}

/** Screen body with the status bar and dynamic island. */
export function Screen({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "flex h-full flex-col px-[5cqw] pt-[3.5cqw] pb-[4cqw] text-[3.6cqw] leading-tight text-fg",
        className,
      )}
    >
      <div className="flex items-center justify-between px-[2cqw] text-[3.2cqw] font-semibold">
        <span>9:41</span>
        <span className="h-[5.5cqw] w-[24cqw] rounded-full bg-fg" />
        <span className="flex items-center gap-[1cqw]">
          <span className="h-[2.2cqw] w-[4.5cqw] rounded-[0.8cqw] border border-current opacity-70" />
        </span>
      </div>
      {children}
    </div>
  );
}

/** Text-like bar for placeholder copy. */
export function Bar({ className }: { className?: string }) {
  return <span className={cn("block h-[2cqw] rounded-full bg-fg/15", className)} />;
}

/** Bottom navigation with one highlighted tab. */
export function TabBar({ active = 0, count = 4 }: { active?: number; count?: number }) {
  return (
    <div className="mt-auto flex items-center justify-around rounded-[5cqw] border border-line bg-surface py-[3cqw]">
      {Array.from({ length: count }, (_, index) => (
        <span
          key={index}
          className={cn(
            "rounded-full",
            index === active ? "h-[2.4cqw] w-[8cqw] bg-tone" : "size-[2.4cqw] bg-fg/20",
          )}
        />
      ))}
    </div>
  );
}
