"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

/**
 * After a client-side navigation, moves focus to <main> so keyboard and
 * screen-reader users start at the new page's content instead of the link
 * they activated. The first load is left alone. Next.js separately announces
 * the new page title.
 */
export function RouteFocus({ targetId = "main" }: { targetId?: string }) {
  const pathname = usePathname();
  const previous = useRef(pathname);

  useEffect(() => {
    if (previous.current === pathname) return;
    previous.current = pathname;
    document.getElementById(targetId)?.focus({ preventScroll: true });
  }, [pathname, targetId]);

  return null;
}
