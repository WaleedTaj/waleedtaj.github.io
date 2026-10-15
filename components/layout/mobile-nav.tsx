"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useId, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { isActivePath, type NavItem } from "@/lib/site";

/** Menu button and drop-down panel for screens below lg. */
export function MobileNav({ items }: { items: NavItem[] }) {
  const pathname = usePathname();
  // The menu is open only for the page it was opened on, so any navigation
  // (a link, Back or Forward) closes it without an extra effect.
  const [openOn, setOpenOn] = useState<string | null>(null);
  const open = openOn === pathname;
  const panelId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const close = (restoreFocus: boolean) => {
      setOpenOn(null);
      if (restoreFocus) buttonRef.current?.focus();
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close(true);
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) close(false);
    };
    // Close if the viewport grows past the breakpoint where the panel is hidden.
    const desktop = window.matchMedia("(min-width: 64rem)");
    const onResize = () => desktop.matches && close(false);

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    desktop.addEventListener("change", onResize);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);

  return (
    <div ref={rootRef} className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpenOn(open ? null : pathname)}
        className="inline-flex size-10 items-center justify-center rounded-control border border-line text-fg transition-colors duration-200 hover:border-line-strong hover:bg-surface"
      >
        <MenuIcon open={open} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.nav
            id={panelId}
            aria-label="Primary"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-x-0 top-full max-h-[calc(100dvh-var(--header-h))] overflow-y-auto border-b border-line bg-bg shadow-card"
          >
            <ul className="container-page grid gap-1 py-4 sm:grid-cols-2 sm:gap-x-4">
              {items.map((item, index) => {
                const isActive = isActivePath(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      // Same-page taps don't change the path, so close explicitly.
                      onClick={() => setOpenOn(null)}
                      className={cn(
                        "flex items-center gap-4 rounded-control px-3 py-3 text-body font-semibold transition-colors hover:bg-surface",
                        isActive ? "bg-surface text-fg" : "text-muted hover:text-fg",
                      )}
                    >
                      <span aria-hidden="true" className="w-5 font-mono text-small text-muted">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {item.label}
                      {isActive && (
                        <span aria-hidden="true" className="ml-auto size-1.5 rounded-full bg-accent-ink" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  const bar = "absolute left-0 h-[1.5px] w-full rounded-full bg-current transition-transform duration-200 ease-out-soft";
  return (
    <span aria-hidden="true" className="relative block h-3 w-[18px]">
      <span className={cn(bar, "top-0", open && "translate-y-[5.25px] rotate-45")} />
      <span className={cn(bar, "bottom-0", open && "-translate-y-[5.25px] -rotate-45")} />
    </span>
  );
}
