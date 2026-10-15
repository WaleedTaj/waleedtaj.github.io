import type { ReactNode } from "react";

/**
 * Device frame for app screenshots. The wrapper is a size container, so the
 * frame's radius and bezel are set in `cqw` and scale with the phone at any width.
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
