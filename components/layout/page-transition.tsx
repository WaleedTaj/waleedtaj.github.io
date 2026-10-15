import { ViewTransition, type ReactNode } from "react";

/**
 * Wraps a page's content so route changes fade the old page out and the new
 * one in (see "Route transitions" in globals.css). It must sit in each page,
 * not the layout: layouts persist across navigations, so they never enter
 * or exit.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  return (
    <ViewTransition enter="page-enter" exit="page-exit" default="none">
      {children}
    </ViewTransition>
  );
}
